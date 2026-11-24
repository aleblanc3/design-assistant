import { PutCommand } from '@aws-sdk/lib-dynamodb';
import type { SQSBatchItemFailure, SQSBatchResponse, SQSEvent } from 'aws-lambda';
import * as cheerio from 'cheerio';
import { batchWrite, CrawlJob, db, langOf, LinkKind, LINKS, normalizePath, outgoingKeys, PAGES, pagePk } from './shared';

async function crawl({ loc, lastmod }: CrawlJob): Promise<void> {
  const path = normalizePath(loc);
  if (!path) throw new Error(`Not a Canada.ca URL: ${loc}`);

  const res = await fetch(loc);
  if (!res.ok) throw new Error(`${res.status} ${loc}`);
  const $ = cheerio.load(await res.text());
  const lang = langOf(path);

  // Opposite-language page from <link rel="alternate" hreflang="...">
  const pairPath = $('link[rel="alternate"][hreflang]')
    .toArray()
    .filter((el) => $(el).attr('hreflang') !== lang)
    .map((el) => normalizePath($(el).attr('href') ?? '', loc))
    .find((p): p is string => !!p && p !== path);
  if (!pairPath) console.warn(`No hreflang pair found for ${path}`);

  // Outgoing links: <main> and breadcrumb, keyed by kind#toPath
  const edges = new Map<string, { kind: LinkKind; toPath: string }>();
  const collect = (selector: string, kind: LinkKind) =>
    $(selector).each((_, a) => {
      const toPath = normalizePath($(a).attr('href') ?? '', loc);
      if (toPath && toPath !== path) edges.set(`${kind}#${toPath}`, { kind, toPath });
    });
  collect('main a[href]', 'main');
  collect('#wb-bc a[href]', 'breadcrumb');

  // Only write the difference against the stored edges
  const existing = new Set((await outgoingKeys(path)).map((e) => e.kindTo as string));
  const requests = [
    ...[...existing]
      .filter((kindTo) => !edges.has(kindTo))
      .map((kindTo) => ({ DeleteRequest: { Key: { fromPath: path, kindTo } } })),
    ...[...edges]
      .filter(([kindTo]) => !existing.has(kindTo))
      .map(([kindTo, e]) => ({
        PutRequest: { Item: { fromPath: path, kindTo, toPath: e.toPath, kindFrom: `${e.kind}#${path}` } },
      })),
  ];
  await batchWrite(LINKS, requests);

  // Written last: if anything above fails, lastmod isn't stored and the next sync re-queues the page.
  // A full Put also drops unpublishedAt/unpublishedPk when a page reappears.
  await db.send(
    new PutCommand({
      TableName: PAGES,
      Item: { pk: pagePk(path), path, lang, pairPath, lastmod, lastCrawled: new Date().toISOString(), status: 'published' },
    }),
  );
}

export const handler = async (event: SQSEvent): Promise<SQSBatchResponse> => {
  const batchItemFailures: SQSBatchItemFailure[] = [];
  for (const record of event.Records) {
    try {
      await crawl(JSON.parse(record.body) as CrawlJob);
    } catch (err) {
      console.error('Crawl failed', record.body, err);
      batchItemFailures.push({ itemIdentifier: record.messageId });
    }
  }
  return { batchItemFailures };
};