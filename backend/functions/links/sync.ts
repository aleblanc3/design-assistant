import { SendMessageBatchCommand, SQSClient } from '@aws-sdk/client-sqs';
import { ScanCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { XMLParser } from 'fast-xml-parser';
import { batchWrite, CrawlJob, db, LINKS, normalizePath, outgoingKeys, PAGES, pagePk, PageStatus } from './shared';

const sqs = new SQSClient({});
const QUEUE_URL = process.env.QUEUE_URL!;
const SITEMAP_URLS = (process.env.SITEMAP_URLS ?? '').split(',').map((s) => s.trim()).filter(Boolean);
// Abort instead of mass-unpublishing if wonky sitemap would remove more than this ratio of pages
const MAX_UNPUBLISH_RATIO = Number(process.env.MAX_UNPUBLISH_RATIO ?? 0.1);
const MAX_CRAWL_JOBS = Number(process.env.MAX_CRAWL_JOBS ?? Infinity);

interface PageRow {
  path: string;
  lastmod?: string;
  status?: PageStatus;
}

async function readSitemap(url: string): Promise<CrawlJob[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sitemap ${url}: ${res.status}`);
  const xml = new XMLParser({ isArray: (name) => name === 'url' }).parse(await res.text());
  return ((xml.urlset?.url ?? []) as { loc: string; lastmod?: string }[]).map((u) => ({
    loc: u.loc,
    lastmod: u.lastmod ?? '',
  }));
}

async function scanPages(): Promise<PageRow[]> {
  const rows: PageRow[] = [];
  let key: Record<string, any> | undefined;
  do {
    const res = await db.send(
      new ScanCommand({
        TableName: PAGES,
        ProjectionExpression: '#p, lastmod, #s',
        ExpressionAttributeNames: { '#p': 'path', '#s': 'status' },
        ExclusiveStartKey: key,
      }),
    );
    rows.push(...((res.Items ?? []) as PageRow[]));
    key = res.LastEvaluatedKey;
  } while (key);
  return rows;
}

/** Deletes the page's outgoing links first, so a partial removal can be retried on the next run */
async function unpublish(path: string): Promise<void> {
  const edges = await outgoingKeys(path);
  await batchWrite(
    LINKS,
    edges.map((e) => ({ DeleteRequest: { Key: { fromPath: e.fromPath, kindTo: e.kindTo } } })),
  );
  await db.send(
    new UpdateCommand({
      TableName: PAGES,
      Key: { pk: pagePk(path), path },
      UpdateExpression: 'SET #s = :u, unpublishedAt = :now, unpublishedPk = :g',
      ExpressionAttributeNames: { '#s': 'status' },
      ExpressionAttributeValues: { ':u': 'unpublished', ':now': new Date().toISOString(), ':g': 'UNPUBLISHED' },
    }),
  );
}

async function enqueue(jobs: CrawlJob[]): Promise<void> {
  for (let i = 0; i < jobs.length; i += 10) {
    const res = await sqs.send(
      new SendMessageBatchCommand({
        QueueUrl: QUEUE_URL,
        Entries: jobs.slice(i, i + 10).map((job, n) => ({ Id: String(n), MessageBody: JSON.stringify(job) })),
      }),
    );
    if (res.Failed?.length) throw new Error(`Failed to enqueue ${res.Failed.length} messages`);
  }
}

export const handler = async () => {
  const sitemap = new Map<string, CrawlJob>();
  for (const entry of (await Promise.all(SITEMAP_URLS.map(readSitemap))).flat()) {
    const path = normalizePath(entry.loc);
    if (path) sitemap.set(path, entry);
  }
  if (!sitemap.size) throw new Error('Sitemap is empty; aborting');

  const pages = await scanPages();
  const known = new Map(pages.map((p) => [p.path, p]));
  const published = pages.filter((p) => p.status === 'published');

  // New, changed, or reappeared after being unpublished
  const toCrawl = [...sitemap].filter(([path, entry]) => {
    const page = known.get(path);
    return !page || page.status !== 'published' || page.lastmod !== entry.lastmod;
  }).map(([, entry]) => entry).slice(0, MAX_CRAWL_JOBS);

  // Published in our table but gone from the sitemap. Already-unpublished pages are ignored.
  const toUnpublish = published.filter((p) => !sitemap.has(p.path));
  if (toUnpublish.length > published.length * MAX_UNPUBLISH_RATIO) {
    throw new Error(`Refusing to unpublish ${toUnpublish.length} of ${published.length} pages`);
  }

  for (const page of toUnpublish) await unpublish(page.path);
  await enqueue(toCrawl);

  return { sitemap: sitemap.size, queued: toCrawl.length, unpublished: toUnpublish.length };
};