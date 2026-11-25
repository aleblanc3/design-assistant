import { BatchGetCommand, GetCommand, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { db, LinkKind, LINKS, normalizePath, PAGES, pagePk } from './shared';

const PAGE_NAMES = { '#p': 'path', '#s': 'status' };
const PAGE_SIZE = 2000; // fxn url is limited to 6MB so make sure this falls under the limit
const LINK_KINDS: LinkKind[] = ['main', 'breadcrumb'];

export type TargetState = 'published' | 'unpublished' | 'notInSitemap';

export interface LinkCounts {
  path: string;
  referrers: number; // pages linking here from <main>
  outgoing: number; // <main> links on this page
  breadcrumb: number; // pages linking here from their breadcrumb (part of move report)
  children: number; // known pages under this path (part of move report)
}

export interface Paged<T> {
  items: T[];
  nextCursor?: string; // pass back as `cursor` to get the next page; absent on the last page
}

export interface Referrer {
  kind: LinkKind;
  fromPath: string;
  texts: string[]; // array of link text used by the referring page
}

export interface OutgoingLink {
  kind: LinkKind;
  toPath: string;
  texts: string[];
  state: TargetState;
}

export class BadRequestError extends Error {}

/** Every key attribute in both tables is a string, so a cursor is a base64url JSON object of strings.
  * DynamoDB rejects a key outside the query's own partition, so a tampered cursor can't read other data.
  */
const encodeCursor = (key?: Record<string, any>) => (key ? Buffer.from(JSON.stringify(key)).toString('base64url') : undefined);

function decodeCursor(cursor?: string): Record<string, string> | undefined {
  if (!cursor) return undefined;
  try {
    const key = JSON.parse(Buffer.from(cursor, 'base64url').toString('utf-8'));
    if (key && typeof key === 'object' && !Array.isArray(key) && Object.values(key).every((v) => typeof v === 'string')) return key;
  } catch {
    // fall through
  }
  throw new BadRequestError('Invalid cursor');
}

/** One page of a Query (up to PAGE_SIZE items), plus a cursor when more remain */
async function queryPage(input: QueryCommandInput, cursor?: string): Promise<Paged<Record<string, any>>> {
  const items: Record<string, any>[] = [];
  let key: Record<string, any> | undefined = decodeCursor(cursor);
  do {
    const response = await db.send(new QueryCommand({ ...input, Limit: PAGE_SIZE - items.length, ExclusiveStartKey: key }));
    items.push(...(response.Items ?? []));
    key = response.LastEvaluatedKey;
  } while (key && items.length < PAGE_SIZE);
  return { items, nextCursor: encodeCursor(key) };
}

/** Opposite-language path (or undefined if the path or its pair is unavailable) */
export async function getPair(path: string): Promise<string | undefined> {
  const response = await db.send(new GetCommand({ TableName: PAGES, Key: { pk: pagePk(path), path } }));
  return response.Item?.pairPath;
}

/** Every page under a path (at any depth). Includes unpublished pages so filter on status! */
export function getChildren(path: string, cursor?: string) {
    return queryPage({
    TableName: PAGES,
    KeyConditionExpression: 'pk = :pk AND begins_with(#p, :prefix)',
    ExpressionAttributeNames: { '#p': 'path' },
    ExpressionAttributeValues: { ':pk': pagePk(path), ':prefix': `${path}/` },
  },
cursor,
);
}

/** Referring links for a given path. Defaults to `['main']` but can include both `['main', 'breadcrumb']`. Unpublished pages are not included since their outgoing links are removed. */
export async function getReferrers(path: string, kinds: LinkKind[] = ['main'], cursor?: string): Promise<Paged<Referrer>> {
   const wanted = LINK_KINDS.filter((k) => kinds.includes(k));
  if (!wanted.length) return { items: [] };
  const everyKind = wanted.length === LINK_KINDS.length;
  const page = await queryPage(
    {
      TableName: LINKS,
      IndexName: 'referrers',
      KeyConditionExpression: everyKind ? 'toPath = :t' : 'toPath = :t AND begins_with(kindFrom, :k)',
      ExpressionAttributeValues: everyKind ? { ':t': path } : { ':t': path, ':k': `${wanted[0]}#` },
    },
    cursor,
  );
  return {
    items: page.items.map((i) => {
      const kindFrom = i.kindFrom as string;
      const split = kindFrom.indexOf('#');
      return { kind: kindFrom.slice(0, split) as LinkKind, fromPath: kindFrom.slice(split + 1), texts: (i.texts ?? []) as string[] };
    }),
    nextCursor: page.nextCursor,
  };
}

/** Outgoing links for a given path. Tagged with target state: `published`, `unpublished`, `notInSitemap` */
export async function getOutgoing(path: string, cursor?: string): Promise<Paged<OutgoingLink>> {
  const page = await queryPage(
    { TableName: LINKS, KeyConditionExpression: 'fromPath = :f', ExpressionAttributeValues: { ':f': path } },
    cursor,
  );
  const edges = page.items;

  const targets = [...new Set(edges.map((e) => e.toPath as string))];
  const status = new Map<string, string>();
  for (let i = 0; i < targets.length; i += 100) {
    let keys: Record<string, any>[] = targets.slice(i, i + 100).map((p) => ({ pk: pagePk(p), path: p }));
    while (keys.length) {
      const response = await db.send(
        new BatchGetCommand({
          RequestItems: { [PAGES]: { Keys: keys, ProjectionExpression: '#p, #s', ExpressionAttributeNames: PAGE_NAMES } },
        }),
      );
      for (const item of response.Responses?.[PAGES] ?? []) status.set(item.path, item.status);
      keys = response.UnprocessedKeys?.[PAGES]?.Keys ?? [];
    }
  }

  return {
    items: edges.map((e) => ({
      kind: (e.kindTo as string).split('#')[0] as LinkKind,
      toPath: e.toPath as string,
      texts: (e.texts ?? []) as string[],
      state: (status.get(e.toPath) ?? 'notInSitemap') as TargetState,
    })),
    nextCursor: page.nextCursor,
  };
}

/** Unpublished pages, oldest to newest. Uses the sparse `unpublished` GSI. */
export function getUnpublished(cursor?: string) {
  return queryPage(
    {
      TableName: PAGES,
      IndexName: 'unpublished',
      KeyConditionExpression: 'unpublishedPk = :g',
      ExpressionAttributeValues: { ':g': 'UNPUBLISHED' },
    },
    cursor,
  );
}

/** Counts matching items without returning them */
async function countAll(input: QueryCommandInput): Promise<number> {
  let total = 0;
  let key: Record<string, any> | undefined;
  do {
    const response = await db.send(new QueryCommand({ ...input, Select: 'COUNT', ExclusiveStartKey: key }));
    total += response.Count ?? 0;
    key = response.LastEvaluatedKey;
  } while (key);
  return total;
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
const MAX_BATCH = 100;

const json = (statusCode: number, body: unknown): APIGatewayProxyResultV2 => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
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

  const { lookup, path: rawPath, kinds, cursor } = event.queryStringParameters ?? {};
  if (!lookup || !(LOOKUPS as readonly string[]).includes(lookup)) {
    return json(400, { error: `lookup must be one of: ${LOOKUPS.join(', ')}` });
  }
  const type = lookup as Lookup;

  try {
    if (type === 'unpublished') return json(200, await getUnpublished(cursor));

    // Accepts a full URL or a path; anything that isn't a www.canada.ca link is rejected
    const path = rawPath ? normalizePath(rawPath) : null;
    if (!path) return json(400, { error: 'path must be a canada.ca path or URL' });

    switch (type) {
      case 'pair':
        return json(200, { path, pairPath: (await getPair(path)) ?? null });
      case 'counts':
        return json(200, await getCounts(path));
      case 'children':
        return json(200, await getChildren(path, cursor));
      case 'referrers': {
        const requested = (kinds ?? 'main').split(',').filter((k): k is LinkKind => LINK_KINDS.includes(k as LinkKind));
        if (!requested.length) return json(400, { error: `kinds must include: ${LINK_KINDS.join(', ')}` });
        return json(200, await getReferrers(path, requested, cursor));
      }
      default:
        return json(200, await getOutgoing(path, cursor));
    }
  } catch (error) {
    if (error instanceof BadRequestError) return json(400, { error: error.message });
    console.error('Lookup error:', error);
    return json(500, { error: 'Lookup failed' });
  }
};