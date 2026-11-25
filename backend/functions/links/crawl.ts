import { PutCommand } from '@aws-sdk/lib-dynamodb';
import type { SQSBatchItemFailure, SQSBatchResponse, SQSEvent } from 'aws-lambda';
import * as cheerio from 'cheerio';
import { batchWrite, CrawlJob, db, langOf, LinkKind, LINKS, normalizePath, outgoingEdges, PAGES, pagePk } from './shared';

const MAX_TEXT_LENGTH = 200;
const MAX_TEXTS_PER_EDGE = 20;

export interface Edge {
  kind: LinkKind;
  toPath: string;
  texts: string[]; // array of unique referring link text in page order
}

/** Link text (including wb-inv text) or images alt text if no link text available */
function linkText(el: cheerio.Cheerio<any>): string {
  let text = el.text();
  if (!text.trim()) text = el.find('img[alt]').first().attr('alt') ?? '';
  return text
    .replace(/[­​-‍﻿]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_TEXT_LENGTH);
}

/** Outgoing links from <main> and the breadcrumb, one edge per kind + target, keyed by `kind#toPath` */
export function extractEdges($: cheerio.CheerioAPI, path: string, base: string): Map<string, Edge> {
  const edges = new Map<string, Edge>();
  const collect = (selector: string, kind: LinkKind) =>
    $(selector).each((_, a) => {
      const toPath = normalizePath($(a).attr('href') ?? '', base);
      if (!toPath || toPath === path) return;
      const key = `${kind}#${toPath}`;
      const edge = edges.get(key) ?? { kind, toPath, texts: [] };
      const text = linkText($(a));
      if (text && !edge.texts.includes(text) && edge.texts.length < MAX_TEXTS_PER_EDGE) edge.texts.push(text);
      edges.set(key, edge);
    });
  collect('main a[href]', 'main');
  collect('#wb-bc a[href]', 'breadcrumb');
  return edges;
}

const sameTexts = (a: string[], b: string[]) => a.length === b.length && a.every((t, i) => t === b[i]);

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
  const edges = extractEdges($, path, loc);

  // Only write the difference against the stored edges
 const existing = new Map((await outgoingEdges(path)).map((e) => [e.kindTo as string, (e.texts ?? []) as string[]]));
  const requests = [
    ...[...existing.keys()]
      .filter((kindTo) => !edges.has(kindTo))
      .map((kindTo) => ({ DeleteRequest: { Key: { fromPath: path, kindTo } } })),
    ...[...edges]
      .filter(([kindTo, e]) => !existing.has(kindTo) || !sameTexts(existing.get(kindTo)!, e.texts))
      .map(([kindTo, e]) => ({
        PutRequest: { Item: { fromPath: path, kindTo, toPath: e.toPath, kindFrom: `${e.kind}#${path}`, texts: e.texts } },
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