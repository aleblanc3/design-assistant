import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';

export type LinkKind = 'main' | 'breadcrumb';
export type TargetState = 'published' | 'unpublished' | 'notInSitemap';

/** List responses are capped by the API; `truncated` is true when `total` is larger than `items` */
export interface Capped<T> {
  items: T[];
  total: number;
  truncated: boolean;
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
}

export interface OutgoingLink {
  kind: LinkKind;
  toPath: string;
  state: TargetState;
}

export interface LinkCounts {
  path: string;
  referrers: number; // <main> links pointing here
  outgoing: number; // <main> links on the page
  breadcrumb: number; // breadcrumb links pointing here (move report)
  children: number; // indexed pages under the path (move report)
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

  private get<T>(lookup: string, path?: string, extra: Record<string, string> = {}): Promise<T> {
    let params = new HttpParams({ fromObject: { lookup, ...extra } });
    if (path !== undefined) params = params.set('path', path);
    return firstValueFrom(this.http.get<T>(this.FUNCTION_URL, { params }));
  }

  /** Returns ths opposite-language path, or null if the page or its pair isn't indexed */
  async getPair(path: string): Promise<string | null> {
    const result = await this.get<{ path: string; pairPath: string | null }>('pair', path);
    return result.pairPath;
  }

  /** Returns all child pages under the path, including unpublished ones since they impact move references */
  getChildren(path: string): Promise<Capped<PageItem>> {
    return this.get('children', path);
  }

  /** Returns all referring links for the path. Defaults to <main> links only but can include breadcrumb or both */
  getReferrers(path: string, kinds: LinkKind[] = ['main']): Promise<Capped<Referrer>> {
    return this.get('referrers', path, { kinds: kinds.join(',') });
  }

  /** <main> and breadcrumb links on the page, each tagged with its target's state (published, unpublished, notInSitemap) */
  getOutgoing(path: string): Promise<Capped<OutgoingLink>> {
    return this.get('outgoing', path);
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

  /** Pages that dropped out of the sitemap, oldest first */
  getUnpublished(): Promise<Capped<PageItem>> {
    return this.get('unpublished');
  }
}
