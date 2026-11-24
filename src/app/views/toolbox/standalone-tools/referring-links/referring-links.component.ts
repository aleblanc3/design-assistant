import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';

import { Capped, LinkCounts, LinksService, OutgoingLink, PageItem, Referrer } from '../../../../services/data-sources/links.service';

@Component({
  selector: 'aida-referring-links',
  imports: [FormsModule, TranslatePipe, ButtonModule, IftaLabelModule, InputGroupAddonModule, InputGroupModule, InputTextModule, MessageModule, TableModule],
  templateUrl: './referring-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferringLinksComponent {
  private readonly linksService = inject(LinksService);

  protected pageUrl = '';
  protected readonly linkCounts = signal<LinkCounts | null>(null);
  protected readonly hasCountError = signal<boolean>(false);
  protected readonly loadingCount = signal<boolean>(false);

  protected readonly view = signal<'referrers' | 'outgoing' | 'children' | 'breadcrumb' | 'oppLang' | null>(null);
  protected readonly referrers = signal<Capped<Referrer> | null>(null);
  protected readonly outgoing = signal<Capped<OutgoingLink> | null>(null);
  protected readonly children = signal<Capped<PageItem> | null>(null);
  protected readonly breadcrumb = signal<Capped<Referrer> | null>(null);

  async getLinkCounts(path: string) {
    this.referrers.set(null);
    this.outgoing.set(null);
    this.children.set(null);
    this.breadcrumb.set(null);
    this.hasCountError.set(false);
    this.loadingCount.set(true);
    try {
      this.linkCounts.set(await this.linksService.getCounts(path));
    } catch {
      this.hasCountError.set(true);
    } finally {
      this.loadingCount.set(false);
    }
  }

  async getLinks(path: string, mode: 'referrers' | 'outgoing' | 'children' | 'breadcrumb' | 'oppLang') {
    this.view.set(mode);
    switch (mode) {
      case 'referrers':
        if (this.referrers() === null) {
          this.referrers.set(await this.linksService.getReferrers(path));
        }
        break;
      case 'outgoing':
        if (this.outgoing() === null) {
          this.outgoing.set(await this.linksService.getOutgoing(path));
        }
        break;
      case 'children':
        if (this.children() === null) {
          this.children.set(await this.linksService.getChildren(path));
        }
        break;
      case 'breadcrumb':
        if (this.breadcrumb() === null) {
          this.breadcrumb.set(await this.linksService.getReferrers(path, ['breadcrumb']));
        }
        break;
      case 'oppLang':
        return this.linksService.getPair(path);
        break;
    }
    return;
  }
}
