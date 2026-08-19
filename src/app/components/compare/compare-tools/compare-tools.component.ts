// Update all page dropdowns with thier valid versions (speeds up page switching)
  import { Component, inject, effect, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Router, Params } from '@angular/router';
//PrimeNG
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

//Services
import { ProjectStateService } from '../../../services/project-state.service';
import { CompareService } from '../compare.service';
import { HtmlNormalizationService, htmlProcessingResult } from '../../../services/html-normalization.service';
import { UserSettingsComponent } from '../../user-settings/user-settings.component';


@Component({
    selector: 'aida-compare-tools',
    imports: [
        TranslatePipe,
        ButtonModule, ToastModule,
        UserSettingsComponent,
    ],
    templateUrl: './compare-tools.component.html',
    styles: ``
})
export class CompareToolsComponent {
     private readonly projectState = inject(ProjectStateService);
    protected readonly compareService = inject(CompareService);
    private readonly router = inject(Router);
    protected readonly messageService = inject(MessageService);
    
    async setCacheForAll() {
    this.cacheAbortController = new AbortController();
    const signal = this.cacheAbortController.signal;
    this.compareService.loadingAll.set(true);
    try {
      // Get all project paths
      const lang = this.projectState.detectPrimaryLanguage()
      const allPaths = new Set(this.projectState.getAllPages(lang, "live", "inScope").map(p => p.path))
      // Check all versions
      for (const path of allPaths) {
        if (signal.aborted) break;
        const versionsToCheck = this.compareService.getVersionsToCheck(path);
        const validVersions = ['ai'];
        for (const { url, version } of versionsToCheck) {
          await this.compareService.checkVersion(url, version, validVersions);
        }
      }
    } finally {
      this.compareService.loadingAll.set(false);
    }
  }

  private cacheAbortController: AbortController | null = null;
  cancelSetCache() {
    this.cacheAbortController?.abort();
  }


  shareLink() {
    const beforeUrl = this.compareService.originalHtml()?.url
    const afterUrl = this.compareService.modifiedHtml()?.url
    if(!beforeUrl || !afterUrl) return;
    const params: Params = { before: beforeUrl, after: afterUrl };
    const treeLink = this.router.createUrlTree(['/standalone/compare-versions'], { queryParams: params });
    const shareLink = `${window.location.origin}${this.router.serializeUrl(treeLink)}`;

    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
          this.messageService.add({
              severity: 'success',
              summary: 'Copied share link to clipboard',
              detail: `${shareLink}`,
              life: 1000,
          });
      })
      .catch((err) => console.error('Clipboard copy failed:', err));
    }
}