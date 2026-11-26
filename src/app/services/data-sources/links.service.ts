import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';

export type LinkKind = 'main' | 'breadcrumb';
export type TargetState = 'published' | 'unpublished' | 'notInSitemap';

/** One page of a list (backend caps a page to 2000 items to keep under 6MB transfer limit).
 *  `nextCursor` is present when more pages remain. Pass it back to get the next page.
 */
export interface Paged<T> {
  items: T[];
  nextCursor?: string;
}

export interface PageItem {
  pk: string;
  path: string;
  lang: string;
  pairPath?: string;
  lastmod?: string;
  lastCrawled?: string;
  status: 'published' | 'unpublished';
  unpublishedAt?: string;
}

export interface Referrer {
  kind: LinkKind;
  fromPath: string;
  texts: string[]; // array of link text used on the referring page
}

export interface OutgoingLink {
  kind: LinkKind;
  toPath: string;
  texts: string[];
  state: TargetState;
}

export interface LinkCounts {
  path: string;
  referrers: number; // <main> links pointing to the page
  outgoing: number; // <main> links on the page
  breadcrumb: number; // referring links from breadcrumbs (for move report)
  children: number; // child pages based on URL structure (for move report)
}

export interface LinkPair {
  path: string;
  pairPath: string | null; // null when unknown
  indexed: boolean; // false when the page isn't in the index yet
}

export interface BatchCounts {
  items: LinkCounts[];
  invalid: string[]; // inputs that weren't canada.ca paths or URLs
}

const BATCH_SIZE = 100; // the API's per-request limit

/** Lookups against the link index. Every `path` can be a path or a full Canada.ca URL. Errors are thrown for the caller to handle.
 *  INDEXING IS NOT COMPLETE. DO NOT INTEGRATE THIS INTO OTHER COMPONENTS YET!
 */
@Injectable({ providedIn: 'root' })
export class LinksService {
  private readonly http = inject(HttpClient);

  private readonly FUNCTION_URL = environment.linksFunctionUrl;

  /** Builds query string for various link lookups */
  private get<T>(lookup: string, path?: string, extra: Record<string, string | undefined> = {}): Promise<T> {
    let params = new HttpParams({ fromObject: { lookup } });
    if (path !== undefined) params = params.set('path', path);
    for (const [key, value] of Object.entries(extra)) {
      if (value !== undefined) params = params.set(key, value);
    }
    return firstValueFrom(this.http.get<T>(this.FUNCTION_URL, { params }));
  }

  /** All pages are fetched consecutively using cursor from the previous response */
  private async loadAll<T>(getPage: (cursor?: string) => Promise<Paged<T>>, cursor?: string): Promise<T[]> {
    const items: T[] = [];
    do {
      const page = await getPage(cursor);
      items.push(...page.items);
      cursor = page.nextCursor;
    } while (cursor);
    return items;
  }

  /** Returns the opposite-language path, or null if the page or its pair isn't indexed */
  async getPair(path: string): Promise<string | null> {
    const result = await this.get<{ path: string; pairPath: string | null }>('pair', path);
    return result.pairPath;
  }

  /** Returns all child pages under the path, including unpublished ones since they impact move references */
  getChildren(path: string, cursor?: string): Promise<Paged<PageItem>> {
    return this.get('children', path, { cursor });
  }

  /** Returns all referring links for the path. Defaults to <main> links only but can include breadcrumb or both */
  getReferrers(path: string, kinds: LinkKind[] = ['main'], cursor?: string): Promise<Paged<Referrer>> {
    return this.get('referrers', path, { kinds: kinds.join(','), cursor });
  }

  /** <main> and breadcrumb links on the page, each tagged with its target's state (published, unpublished, notInSitemap) */
  getOutgoing(path: string, cursor?: string): Promise<Paged<OutgoingLink>> {
    return this.get('outgoing', path, { cursor });
  }

  /** Counts only, for one page */
  getCounts(path: string): Promise<LinkCounts> {
    return this.get('counts', path);
  }

  /** Counts for many pages, sent in batches of 100. Invalid paths are returned in `invalid`. */
  async getCountsBatch(paths: string[]): Promise<BatchCounts> {
    const result: BatchCounts = { items: [], invalid: [] };
    for (let i = 0; i < paths.length; i += BATCH_SIZE) {
      const batch = await firstValueFrom(this.http.post<BatchCounts>(this.FUNCTION_URL, { paths: paths.slice(i, i + BATCH_SIZE) }));
      result.items.push(...batch.items);
      result.invalid.push(...batch.invalid);
    }
    return result;
  }

  /** Returns opposite-language paths for many links (paths or full URLs). */
  async getPairs(links: string[]): Promise<Map<string, LinkPair>> {
    const unique = [...new Set(links)];
    const batches: string[][] = [];
    for (let i = 0; i < unique.length; i += BATCH_SIZE) batches.push(unique.slice(i, i + BATCH_SIZE));

    const responses = await Promise.all(
      batches.map((paths) => firstValueFrom(this.http.post<{ items: (LinkPair & { input: string })[]; invalid: string[] }>(this.FUNCTION_URL, { lookup: 'pairs', paths }))),
    );

    const pairs = new Map<string, LinkPair>();
    for (const { items } of responses) {
      for (const { input, ...pair } of items) pairs.set(input, pair);
    }
    return pairs;
  }

  /** Pages that dropped out of the sitemap, oldest first */
  getUnpublished(cursor?: string): Promise<Paged<PageItem>> {
    return this.get('unpublished', undefined, { cursor });
  }

  /** The getAll functions send one request per 2000 items.
   *  Avoid using these until the data is actually needed. Load time will be much slower for top level pages.
   */

  /** All remaining referring links, from `cursor` onward (or from the start). */
  getAllReferrers(path: string, kinds: LinkKind[] = ['main'], cursor?: string): Promise<Referrer[]> {
    return this.loadAll((next) => this.getReferrers(path, kinds, next), cursor);
  }

  /** All remaining outgoing links, from `cursor` onward (or from the start) */
  getAllOutgoing(path: string, cursor?: string): Promise<OutgoingLink[]> {
    return this.loadAll((next) => this.getOutgoing(path, next), cursor);
  }

  /** All remaining child pages, from `cursor` onward (or from the start) */
  getAllChildren(path: string, cursor?: string): Promise<PageItem[]> {
    return this.loadAll((next) => this.getChildren(path, next), cursor);
  }

  /** All remaining unpublished pages, from `cursor` onward (or from the start) */
  getAllUnpublished(cursor?: string): Promise<PageItem[]> {
    return this.loadAll((next) => this.getUnpublished(next), cursor);
  }
}
