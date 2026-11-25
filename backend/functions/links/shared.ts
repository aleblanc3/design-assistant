import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { BatchWriteCommand, DynamoDBDocumentClient, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

export const db = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: { removeUndefinedValues: true },
});

export const PAGES = process.env.PAGES_TABLE!;
export const LINKS = process.env.LINKS_TABLE!;
export const ORIGIN = 'https://www.canada.ca';

export type LinkKind = 'main' | 'breadcrumb';
export type PageStatus = 'published' | 'unpublished';

export interface CrawlJob {
  loc: string; // sitemap URL, including .html
  lastmod: string;
}

/**
 * Converts URL (absolute or relative) to a normalized path (no host, query, hash, .html or trailing slash)
 * Returns null for anything that isn't an http(s) link to www.canada.ca.
 */
export function normalizePath(href: string, base: string = ORIGIN): string | null {
  let url: URL;
  try {
    url = new URL(href, base);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
  if (url.hostname !== 'www.canada.ca') return null;
  return url.pathname.replace(/\.html$/i, '').replace(/\/+$/, '') || '/';
}

export const langOf = (path: string): string => path.split('/')[1] ?? '';

/** Partition key for the pages table: lang#department, e.g. en#revenue-agency */
export function pagePk(path: string): string {
  const [lang = '', dept = ''] = path.split('/').filter(Boolean);
  return `${lang}#${dept}`;
}

export async function queryAll(input: QueryCommandInput): Promise<Record<string, any>[]> {
  const items: Record<string, any>[] = [];
  let key: Record<string, any> | undefined;
  do {
    const response = await db.send(new QueryCommand({ ...input, ExclusiveStartKey: key }));
    items.push(...(response.Items ?? []));
    key = response.LastEvaluatedKey;
  } while (key);
  return items;
}

/** Keys (fromPath, kindTo) of every outgoing link for a given from path. Kind will be either `main` or `breadcrumb` */
export function outgoingKeys(fromPath: string) {
  return queryAll({
    TableName: LINKS,
    KeyConditionExpression: 'fromPath = :f',
    ExpressionAttributeValues: { ':f': fromPath },
    ProjectionExpression: 'fromPath, kindTo',
  });
}

/** Outgoing edges of a page: keys plus link texts, for comparing against a fresh crawl */
export function outgoingEdges(fromPath: string) {
  return queryAll({
    TableName: LINKS,
    KeyConditionExpression: 'fromPath = :f',
    ExpressionAttributeValues: { ':f': fromPath },
    ProjectionExpression: 'fromPath, kindTo, #t',
    ExpressionAttributeNames: { '#t': 'texts' },
  });
}

/** BatchWrite in chunks of 25, retrying unprocessed items with backoff */
export async function batchWrite(table: string, requests: Record<string, any>[]): Promise<void> {
  for (let i = 0; i < requests.length; i += 25) {
    let pending = requests.slice(i, i + 25);
    for (let attempt = 0; pending.length && attempt < 5; attempt++) {
      const response = await db.send(new BatchWriteCommand({ RequestItems: { [table]: pending } }));
      pending = response.UnprocessedItems?.[table] ?? [];
      if (pending.length) await new Promise((res) => setTimeout(res, 100 * 2 ** attempt));
    }
    if (pending.length) throw new Error(`Unprocessed items remain in ${table}`);
  }
}