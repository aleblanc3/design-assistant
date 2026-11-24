import { BatchGetCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import { db, LinkKind, LINKS, PAGES, pagePk, queryAll } from './shared';

const PAGE_NAMES = { '#p': 'path', '#s': 'status' };

export type TargetState = 'published' | 'unpublished' | 'notInSitemap';

/** Opposite-language path (or undefined if the path or its pair is unavailable) */
export async function getPair(path: string): Promise<string | undefined> {
  const response = await db.send(new GetCommand({ TableName: PAGES, Key: { pk: pagePk(path), path } }));
  return response.Item?.pairPath;
}

/** Every page under a path (at any depth). Includes unpublished pages so filter on status! */
export function getChildren(path: string) {
  return queryAll({
    TableName: PAGES,
    KeyConditionExpression: 'pk = :pk AND begins_with(#p, :prefix)',
    ExpressionAttributeNames: { '#p': 'path' },
    ExpressionAttributeValues: { ':pk': pagePk(path), ':prefix': `${path}/` },
  });
}

/** Referring links for a given path. Defaults to `['main']` but can include both `['main', 'breadcrumb']`. Unpublished pages are not included since their outgoing links are removed. */
export async function getReferrers(path: string, kinds: LinkKind[] = ['main']) {
  const results = await Promise.all(
    kinds.map(async (kind) => {
      const items = await queryAll({
        TableName: LINKS,
        IndexName: 'referrers',
        KeyConditionExpression: 'toPath = :t AND begins_with(kindFrom, :k)',
        ExpressionAttributeValues: { ':t': path, ':k': `${kind}#` },
      });
      return items.map((i) => ({ kind, fromPath: (i.kindFrom as string).slice(kind.length + 1) }));
    }),
  );
  return results.flat();
}

/** Outgoing links for a given path. Tagged with target state: `published`, `unpublished`, `notInSitemap` */
export async function getOutgoing(path: string) {
  const edges = await queryAll({
    TableName: LINKS,
    KeyConditionExpression: 'fromPath = :f',
    ExpressionAttributeValues: { ':f': path },
  });

  const targets = [...new Set(edges.map((e) => e.toPath as string))];
  const status = new Map<string, string>();
  for (let i = 0; i < targets.length; i += 100) {
    let keys: Record<string, any>[] = targets.slice(i, i + 100).map((p) => ({ pk: pagePk(p), path: p }));
    while (keys.length) {
      const res = await db.send(
        new BatchGetCommand({
          RequestItems: { [PAGES]: { Keys: keys, ProjectionExpression: '#p, #s', ExpressionAttributeNames: PAGE_NAMES } },
        }),
      );
      for (const item of res.Responses?.[PAGES] ?? []) status.set(item.path, item.status);
      keys = res.UnprocessedKeys?.[PAGES]?.Keys ?? [];
    }
  }

  return edges.map((e) => ({
    kind: (e.kindTo as string).split('#')[0] as LinkKind,
    toPath: e.toPath as string,
    state: (status.get(e.toPath) ?? 'notInSitemap') as TargetState,
  }));
}

/** Unpublished pages, oldest to newest. Uses the sparse `unpublished` GSI. */
export function getUnpublished() {
  return queryAll({
    TableName: PAGES,
    IndexName: 'unpublished',
    KeyConditionExpression: 'unpublishedPk = :g',
    ExpressionAttributeValues: { ':g': 'UNPUBLISHED' },
  });
}