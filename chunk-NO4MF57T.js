import {
  DiffUndoStack
} from "./chunk-D57SAGZH.js";
import {
  ProjectStateService
} from "./chunk-35HWDDPQ.js";
import {
  FetchService
} from "./chunk-M6FDN6OY.js";
import {
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  Injectable,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/services/project-cache.service.ts
var ProjectCacheService = class _ProjectCacheService {
  projectState = inject(ProjectStateService);
  fetchService = inject(FetchService);
  settingsService = inject(UserSettingsService);
  // Track availability of local and github versions (for managing UI state)
  /** Signal will be true if prototype github repo exists (updatable via effect) */
  hasGitHub = signal(false, ...ngDevMode ? [{ debugName: "hasGitHub" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal will be true if baseline github repo exists (updatable via effect) */
  hasGitHubBL = signal(false, ...ngDevMode ? [{ debugName: "hasGitHubBL" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal will be true if local index page is fetchable (updatable via user action only) */
  hasLocal = signal(null, ...ngDevMode ? [{ debugName: "hasLocal" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal will be true if local baseline index page is fetchable (updatable via user action only) */
  hasLocalBL = signal(null, ...ngDevMode ? [{ debugName: "hasLocalBL" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal will be true if AEM preview is fetchable (updatable via user action only) */
  hasPreview = signal(null, ...ngDevMode ? [{ debugName: "hasPreview" }] : (
    /* istanbul ignore next */
    []
  ));
  localCheckInProgress = false;
  previewCheckInProgress = false;
  githubCheckInProgress = false;
  // Track user choices on select buttons (for managing UI state)
  /** Signal defaults to project language if 'both' is not a valid option */
  selectedLang = signal(this.projectState.detectPrimaryLanguage(), ...ngDevMode ? [{ debugName: "selectedLang" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal can be used to display all project pages or just the inScope pages */
  selectedScope = signal("inScope", ...ngDevMode ? [{ debugName: "selectedScope" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal can be used to access specific versions stored in AIDA. Defaults to prototype. */
  selectedVersion = signal("prototype", ...ngDevMode ? [{ debugName: "selectedVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal can be used to access specific versions stored outside of AIDA. Defaults to live. */
  selectedSource = signal("live", ...ngDevMode ? [{ debugName: "selectedSource" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal can be used to filter data to all or changes. Defaults to all. */
  selectedFilter = signal("all", ...ngDevMode ? [{ debugName: "selectedFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for the IA diagram view. Defaults to changes. */
  selectedViewIA = signal("changes", ...ngDevMode ? [{ debugName: "selectedViewIA" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for the IA diagram display. Defaults to tree. */
  selectedDisplayIA = signal("tree", ...ngDevMode ? [{ debugName: "selectedDisplayIA" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for the metadata view. Defaults to undefined. */
  selectedMeta = signal([], ...ngDevMode ? [{ debugName: "selectedMeta" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for the view URLs drawer. Defaults to url. */
  selectedDisplay = signal("url", ...ngDevMode ? [{ debugName: "selectedDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      void this.projectState.getGitHub().owner;
      void this.projectState.getGitHub().repo;
      this.checkGitHubStatus();
    });
    effect(() => {
      void this.projectState.getGitHub().repo;
      this.hasLocal.set(null);
      this.hasLocalBL.set(null);
    });
  }
  /**
   * Checks if a local index page exists for the project so UI can be updated
   ** Updates signals {@link hasLocal} and {@link hasLocalBL}
   *
   * Call this fxn when navigating to any route that adjusts UI based on available local versions
   *
   * Use {@link checkPreviewStatus} for AEM preview and an effect for GitHub versions
   */
  checkLocalStatus() {
    if (this.localCheckInProgress)
      return;
    if (this.hasLocal() !== null)
      return;
    if (!this.settingsService.includeLocal())
      return;
    const owner = this.projectState.getProject().github.owner;
    const repo = this.projectState.getProject().github.repo;
    if (!owner || !repo)
      return;
    this.localCheckInProgress = true;
    const url = this.fetchService.generateUrl("index.html", "protoUT", owner, repo);
    const checks = [this.fetchService.fetchStatusViaProxy(url).then((result) => this.hasLocal.set(result))];
    if (this.settingsService.includeBaseline()) {
      const urlBL = this.fetchService.generateUrl("index.html", "baseUT", owner, repo);
      checks.push(this.fetchService.fetchStatusViaProxy(urlBL).then((result) => this.hasLocalBL.set(result)));
    }
    Promise.all(checks).finally(() => {
      this.localCheckInProgress = false;
    });
  }
  /**
   * Checks if a github index page exists for the project so UI can be updated
   ** Updates signals {@link hasGitHub} and {@link hasGitHubBL}
   *
   * Call this fxn via effect whenever the repo or owner change
   *
   * Use {@link checkPreviewStatus} for AEM preview and an effect for GitHub versions
   */
  checkGitHubStatus() {
    if (this.githubCheckInProgress)
      return;
    if (!this.settingsService.includeGitHub())
      return;
    const owner = this.projectState.getProject().github.owner;
    const repo = this.projectState.getProject().github.repo;
    if (!owner || !repo)
      return;
    this.githubCheckInProgress = true;
    const url = this.fetchService.generateUrl("index.html", "protoGH", owner, repo);
    const checks = [this.fetchService.fetchStatus(url, "proto", 1).then((response) => this.hasGitHub.set(response.ok))];
    if (this.settingsService.includeBaseline()) {
      const urlBL = this.fetchService.generateUrl("index.html", "baseGH", owner, repo);
      checks.push(this.fetchService.fetchStatus(urlBL, "proto", 1).then((response) => this.hasGitHubBL.set(response.ok)));
    }
    Promise.all(checks).finally(() => {
      this.githubCheckInProgress = false;
    });
  }
  /**
   * Checks if preview proxy page exists for the project so UI can be updated
   ** Updates signal {@link hasPreview}
   *
   * Call this fxn when navigating to any route that adjusts UI based on availability of preview versions
   *
   * Use {@link checkLocalStatus} for local versions, an effect for GitHub versions, and statusCache for individual pages
   */
  checkPreviewStatus() {
    if (this.previewCheckInProgress)
      return;
    if (this.hasPreview() !== null)
      return;
    if (!this.settingsService.includePreview())
      return;
    this.previewCheckInProgress = true;
    const url = this.fetchService.generateUrl("", "preview");
    const checks = [this.fetchService.fetchStatusViaProxy(url).then((result) => this.hasPreview.set(result))];
    Promise.all(checks).finally(() => {
      this.previewCheckInProgress = false;
    });
  }
  // Track availability of versions at page level (for managing UI state & preventing duplicate fetches)
  /** Signal maps a url for looking up an htmlProcessingResult (used by the compare versions tools) */
  htmlCache = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "htmlCache" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal maps a url for looking up page status so we don't offer 404's as a valid choice in the UI */
  statusCache = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "statusCache" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Uses a URL to retrieve an HTML processing result from the cache
   */
  getCachedHtml(url) {
    return this.htmlCache().get(url);
  }
  /**
   * Saves a URL and HTML processing result to the cache
   */
  setCachedHtml(url, html) {
    const cache = new Map(this.htmlCache());
    cache.set(url, html);
    this.htmlCache.set(cache);
  }
  /**
   * Uses a URL to retrieve page status from the cache (true = live page, false = 404, undefined = not cached yet)
   */
  getCachedStatus(url) {
    return this.statusCache().get(url);
  }
  /**
   * Saves a URL and its status to the cache (true = live page, false = 404)
   */
  setCachedStatus(url, status) {
    const cache = new Map(this.statusCache());
    cache.set(url, status);
    this.statusCache.set(cache);
  }
  /** Resets HTML and status cache */
  clearHtmlAndStatusCache() {
    this.htmlCache.set(/* @__PURE__ */ new Map());
    this.statusCache.set(/* @__PURE__ */ new Map());
  }
  /** Get list of versions to check the status of for a given page path */
  getVersionsToCheck(path) {
    const project = this.projectState.getProject();
    const versions = [{ url: this.fetchService.generateUrl(path, "live"), version: "live" }];
    if (this.settingsService.includePreview()) {
      versions.push({ url: this.fetchService.generateUrl(path, "preview"), version: "preview" });
    }
    if (project.lastExported && this.settingsService.includeGitHub()) {
      versions.push({ url: this.fetchService.generateUrl(path, "protoGH", project.github.owner, project.github.repo), version: "protoGH" });
      if (project.github.hasBaselineRepo && this.settingsService.includeBaseline())
        versions.push({ url: this.fetchService.generateUrl(path, "baseGH", project.github.owner, project.github.repo), version: "baseGH" });
    }
    if (project.lastDownloaded && this.settingsService.includeLocal()) {
      versions.push({ url: this.fetchService.generateUrl(path, "protoUT", project.github.owner, project.github.repo), version: "protoUT" });
      if (project.github.hasBaselineRepo && this.settingsService.includeBaseline())
        versions.push({ url: this.fetchService.generateUrl(path, "baseUT", project.github.owner, project.github.repo), version: "baseUT" });
    }
    return versions;
  }
  /**
   * Checks a versions status using {@link statusCache} or {@link fetchStatus} or {@link fetchStatusViaProxy}
   *
   * If URL status is ok, it updates the validVersions array with the {@link SourceVersion}
   */
  checkVersion(url, version, validVersions) {
    return __async(this, null, function* () {
      if (!url)
        return;
      const cached = this.getCachedStatus(url);
      if (cached) {
        validVersions.push(version);
        return;
      }
      try {
        const result = version === "preview" ? yield this.fetchService.fetchStatusViaProxy(url) : (yield this.fetchService.fetchStatus(url, "both")).ok;
        this.setCachedStatus(url, result);
        if (result) {
          validVersions.push(version);
        }
      } catch (e) {
        this.setCachedStatus(url, false);
      }
    });
  }
  // Track availability of edits at page level (so user doesn't lose an AI result or half-edited page while looking around at other stuff)
  /** Signal maps a path for looking up a PageEditState (used by the compare versions tools) */
  pageEdits = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "pageEdits" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Uses a path to retrieve a PageEditState from the cache
   */
  getPageEdit(path) {
    return this.pageEdits().get(path);
  }
  updatePageEdit(path, previousBefore, previousAfter, newBefore, newAfter) {
    const map = new Map(this.pageEdits());
    const existing = map.get(path);
    const undoStack = existing?.undoStack ?? new DiffUndoStack();
    undoStack.push({ beforeContent: previousBefore, afterContent: previousAfter });
    map.set(path, { originalHtml: newBefore, modifiedHtml: newAfter, undoStack });
    this.pageEdits.set(map);
  }
  undoPageEdit(path) {
    const map = new Map(this.pageEdits());
    const existing = map.get(path);
    const snapshot = existing?.undoStack.pop();
    if (!existing || !snapshot)
      return void 0;
    const updated = __spreadProps(__spreadValues({}, existing), { originalHtml: snapshot.beforeContent, modifiedHtml: snapshot.afterContent });
    map.set(path, updated);
    this.pageEdits.set(map);
    return updated;
  }
  getPageUndoStack(path) {
    return this.pageEdits().get(path)?.undoStack;
  }
  // Track AI jobs
  aiJobs = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "aiJobs" }] : (
    /* istanbul ignore next */
    []
  ));
  getAiJobStatus(path) {
    return this.aiJobs().get(path);
  }
  setAiJobStatus(path, status) {
    const map = new Map(this.aiJobs());
    map.set(path, status);
    this.aiJobs.set(map);
  }
  clearAiJobStatus(path) {
    const map = new Map(this.aiJobs());
    map.delete(path);
    this.aiJobs.set(map);
  }
  static \u0275fac = function ProjectCacheService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectCacheService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectCacheService, factory: _ProjectCacheService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectCacheService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ProjectCacheService
};
//# sourceMappingURL=chunk-NO4MF57T.js.map
