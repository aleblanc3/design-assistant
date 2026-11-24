import { BatchGetCommand, GetCommand, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { db, LinkKind, LINKS, normalizePath, PAGES, pagePk, queryAll } from './shared';

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

/** Counts matching items without returning them */
async function countAll(input: QueryCommandInput): Promise<number> {
  let total = 0;
  let key: Record<string, any> | undefined;
  do {
    const res = await db.send(new QueryCommand({ ...input, Select: 'COUNT', ExclusiveStartKey: key }));
    total += res.Count ?? 0;
    key = res.LastEvaluatedKey;
  } while (key);
  return total;
}

export interface LinkCounts {
  path: string;
  referrers: number; // pages linking here from <main>
  outgoing: number; // <main> links on this page
  breadcrumb: number; // pages linking here from their breadcrumb (part of move report)
  children: number; // known pages under this path (part of move report)
}

/** Counts only. Children includes unpublished pages, since they still sit under the path and get updated during a move. */
export async function getCounts(path: string): Promise<LinkCounts> {
  const referrerCount = (kind: LinkKind) =>
    countAll({
      TableName: LINKS,
      IndexName: 'referrers',
      KeyConditionExpression: 'toPath = :t AND begins_with(kindFrom, :k)',
      ExpressionAttributeValues: { ':t': path, ':k': `${kind}#` },
    });

  const [referrers, breadcrumb, outgoing, children] = await Promise.all([
    referrerCount('main'),
    referrerCount('breadcrumb'),
    countAll({
      TableName: LINKS,
      KeyConditionExpression: 'fromPath = :f AND begins_with(kindTo, :k)',
      ExpressionAttributeValues: { ':f': path, ':k': 'main#' },
    }),
    countAll({
      TableName: PAGES,
      KeyConditionExpression: 'pk = :pk AND begins_with(#p, :prefix)',
      ExpressionAttributeNames: { '#p': 'path' },
      ExpressionAttributeValues: { ':pk': pagePk(path), ':prefix': `${path}/` },
    }),
  ]);
  return { path, referrers, outgoing, breadcrumb, children };
}

/******************************************************************
* HTTP handler
* GET ?lookup=referrers&kinds=main|breadcrumb&path=/en/...
* GET ?lookup=pair|children|outgoing&path=/en/...
* GET ?lookup=unpublished
* GET ?lookup=counts&path=/en/...   (counts only)
* POST {"paths": [...]} (up to MAX_BATCH) -> counts for each path
******************************************************************/

const LOOKUPS = ['pair', 'children', 'referrers', 'outgoing', 'counts', 'unpublished'] as const;
type Lookup = (typeof LOOKUPS)[number];
const LINK_KINDS: LinkKind[] = ['main', 'breadcrumb'];
const MAX_ITEMS = 2000;
const MAX_BATCH = 100;

const json = (statusCode: number, body: unknown): APIGatewayProxyResultV2 => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

/** Caps large result sets (e.g. the children of a department root) and says when it did */
const capped = <T>(items: T[]) => ({
  items: items.slice(0, MAX_ITEMS),
  total: items.length,
  truncated: items.length > MAX_ITEMS,
});

/** POST { paths: string[] } --> counts per path. Invalid paths are listed, not failed. */
async function batchCounts(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
  let paths: unknown;
  try {
    const text = event.isBase64Encoded && event.body ? Buffer.from(event.body, 'base64').toString('utf-8') : event.body;
    paths = JSON.parse(text || '{}').paths;
  } catch {
    return json(400, { error: 'Body must be JSON' });
  }
  if (!Array.isArray(paths) || !paths.length || paths.length > MAX_BATCH || paths.some((p) => typeof p !== 'string')) {
    return json(400, { error: `paths must be an array of 1-${MAX_BATCH} strings` });
  }

  const valid = new Map<string, string>();
  const invalid: string[] = [];
  for (const raw of paths as string[]) {
    const path = normalizePath(raw);
    if (path) valid.set(path, raw);
    else invalid.push(raw);
  }

  try {
    const unique = [...valid.keys()];
    const results: LinkCounts[] = [];
    for (let i = 0; i < unique.length; i += 10) {
      results.push(...(await Promise.all(unique.slice(i, i + 10).map(getCounts))));
    }
    return json(200, { items: results, invalid });
  } catch (error) {
    console.error('Batch counts error:', error);
    return json(500, { error: 'Lookup failed' });
  }
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  const method = event.requestContext.http.method;
  if (method === 'OPTIONS') return { statusCode: 200, body: '' };
  if (method === 'POST') return batchCounts(event);
  if (method !== 'GET') return json(405, { error: 'Method not allowed' });

  const { lookup, path: rawPath, kinds } = event.queryStringParameters ?? {};
  if (!lookup || !(LOOKUPS as readonly string[]).includes(lookup)) {
    return json(400, { error: `lookup must be one of: ${LOOKUPS.join(', ')}` });
  }
  const type = lookup as Lookup;

  try {
    if (type === 'unpublished') return json(200, capped(await getUnpublished()));

    // Accepts a full URL or a path; anything that isn't a www.canada.ca link is rejected
    const path = rawPath ? normalizePath(rawPath) : null;
    if (!path) return json(400, { error: 'path must be a canada.ca path or URL' });

    switch (type) {
      case 'pair':
        return json(200, { path, pairPath: (await getPair(path)) ?? null });
      case 'counts':
        return json(200, await getCounts(path));
      case 'children':
        return json(200, capped(await getChildren(path)));
      case 'referrers': {
        const requested = (kinds ?? 'main').split(',').filter((k): k is LinkKind => LINK_KINDS.includes(k as LinkKind));
        if (!requested.length) return json(400, { error: `kinds must include: ${LINK_KINDS.join(', ')}` });
        return json(200, capped(await getReferrers(path, requested)));
      }
      default:
        return json(200, capped(await getOutgoing(path)));
    }
  } catch (error) {
    console.error('Lookup error:', error);
    return json(500, { error: 'Lookup failed' });
  }
};