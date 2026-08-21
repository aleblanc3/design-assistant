import { Injectable, inject, signal } from '@angular/core';
import { htmlProcessingResult } from '../../services/html-normalization.service';

// Services
import { ProjectStateService } from '../../services/project-state.service';
import { ProjectCacheService } from '../../services/project-cache.service';
import { UserSettingsService } from '../../services/user-settings.service';
import { FetchService } from '../../services/fetch.service';
import { SourceVersion, CompareVersion } from '../../common/data.model';

// Constants
import { AiFreeModelOptions, AiPaidModelOptions, AI_FREE_MODELS } from '../../common/prompts/ai-models.config';
export type AiTaskOption = 'default' | 'models' | 'prompts';

@Injectable({
    providedIn: 'root'
})
export class CompareService {
  private readonly projectState = inject(ProjectStateService);
  private readonly projectCache = inject(ProjectCacheService);
  private readonly settingsService = inject(UserSettingsService);
  private readonly fetchService = inject(FetchService);

    // HTML content cache
    private htmlCache = signal<Map<string, htmlProcessingResult>>(new Map());
    private statusCache = signal<Map<string, boolean>>(new Map());
    originalHtml = signal<htmlProcessingResult | undefined>(undefined);
    modifiedHtml = signal<htmlProcessingResult | undefined>(undefined);

    // User selections & defaults
    selectedPage = signal('');
    selectedBefore = signal<SourceVersion>('live');
    selectedAfter = signal<CompareVersion>('protoGH');
    selectedView = signal<'original' | 'diff' | 'modified'>('diff');
    
    loading = signal<boolean>(false);
    loadingBefore = signal<boolean>(false);
    loadingAfter = signal<boolean>(false);
    loadingAll = signal<boolean>(false);

    aiDrawerVisible = signal<boolean>(false);
    selectedTask = signal<AiTaskOption>('default');
    selectedModel = signal<AiFreeModelOptions | AiPaidModelOptions>(AI_FREE_MODELS[0])

    // Helpers to get & set HTML cache
    getCachedHtml(url: string): htmlProcessingResult | undefined {
        return this.htmlCache().get(url);
    }

    setCachedHtml(url: string, html: htmlProcessingResult): void {
        const cache = new Map(this.htmlCache());
        cache.set(url, html);
        this.htmlCache.set(cache);
    }

    // Helpers to get & set status cache
    getCachedStatus(url: string): boolean | undefined {
        return this.statusCache().get(url);
    }

    setCachedStatus(url: string, status: boolean): void {
        const cache = new Map(this.statusCache());
        cache.set(url, status);
        this.statusCache.set(cache);
        console.log('Cached status:', url, status);
    }

    // Clear HTML content cache
    clearCache() {
        this.htmlCache.set(new Map());
        this.statusCache.set(new Map());
        this.originalHtml.set(undefined);
        this.modifiedHtml.set(undefined);
    }

    // Reset to defaults
    resetSelections() {
        this.selectedPage.set('');
        this.selectedBefore.set('live');
        this.selectedAfter.set('protoGH');
        this.selectedView.set('diff');
        this.clearCache();
    }


    // Get list of versions to check
  public getVersionsToCheck(path: string): { url: string; version: SourceVersion }[] {
    const project = this.projectState.getProject();
    const versions: { url: string; version: SourceVersion }[] = [{ url: this.fetchService.generateUrl(path, "live"), version: "live" }];
    if (this.settingsService.includePreview()) {
      versions.push({ url: this.fetchService.generateUrl(path, "preview"), version: "preview" })
    }
    if (project.lastExported && this.settingsService.includeGitHub()) {
      versions.push({ url: this.fetchService.generateUrl(path, "protoGH", project.github.owner, project.github.repo), version: "protoGH" });
      if (project.github.hasBaselineRepo && this.settingsService.includeBaseline()) versions.push({ url: this.fetchService.generateUrl(path, "baseGH", project.github.owner, project.github.repo), version: "baseGH" });
    }
    if (project.lastDownloaded && this.settingsService.includeLocal()) {
      versions.push({ url: this.fetchService.generateUrl(path, "protoUT", project.github.owner, project.github.repo), version: "protoUT" });
      if (project.github.hasBaselineRepo && this.settingsService.includeBaseline()) versions.push({ url: this.fetchService.generateUrl(path, "baseUT", project.github.owner, project.github.repo), version: "baseUT" });
    }
    return versions;
  }

  // Check a versions status
  public async checkVersion(url: string, version: string, validVersions: string[]): Promise<void> {
    if (!url) return;
    const cached = this.getCachedStatus(url);
    if (cached) { validVersions.push(version); return; }
    try {
      let result;
      if (version === 'preview') { result = await this.fetchService.fetchStatusViaProxy(url) }
      else { result = (await this.fetchService.fetchStatus(url, 'both')).ok }
      this.setCachedStatus(url, result);
      if (result) validVersions.push(version);
    } catch {
      this.setCachedStatus(url, false);
    }
  }
}