import {
  ExportGitHubService,
  FetchService,
  PageTemplate,
  ProjectPhase
} from "./chunk-VNVQO4CG.js";
import {
  environment
} from "./chunk-MYYNWJMU.js";
import {
  marker
} from "./chunk-NHG2MSCL.js";
import {
  UserSettingsService
} from "./chunk-EKIRHXEG.js";
import {
  BaseComponent,
  BaseStyle,
  CommonModule,
  HttpClient,
  HttpHeaders,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  TranslateService
} from "./chunk-YD3UXEIO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  effect,
  firstValueFrom,
  inject,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-3I2QHJYF.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c0 = ["content"];
var _c1 = (a0, a1) => ({
  "p-progressbar p-component": true,
  "p-progressbar-determinate": a0,
  "p-progressbar-indeterminate": a1
});
var _c2 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value, "", ctx_r0.unit, "");
  }
}
function ProgressBar_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, ProgressBar_div_1_div_2_Template, 2, 5, "div", 5)(3, ProgressBar_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueStyleClass);
    \u0275\u0275styleProp("width", ctx_r0.value + "%")("background", ctx_r0.color);
    \u0275\u0275property("ngClass", "p-progressbar-value p-progressbar-value-animate");
    \u0275\u0275attribute("data-pc-section", "value");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate && !ctx_r0._contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c2, ctx_r0.value));
  }
}
function ProgressBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueStyleClass);
    \u0275\u0275property("ngClass", "p-progressbar-indeterminate-container");
    \u0275\u0275attribute("data-pc-section", "container");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275attribute("data-pc-section", "value");
  }
}
var theme = ({
  dt
}) => `
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${dt("progressbar.height")};
    background: ${dt("progressbar.background")};
    border-radius: ${dt("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${dt("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${dt("progressbar.label.color")};
    font-size: ${dt("progressbar.label.font.size")};
    font-weight: ${dt("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`;
var classes = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.determinate,
    "p-progressbar-indeterminate": instance.indeterminate
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressBarStyle_BaseFactory || (\u0275ProgressBarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var ProgressBar = class _ProgressBar extends BaseComponent {
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  /**
   * Template of the content.
   * @group templates
   */
  contentTemplate;
  _componentStyle = inject(ProgressBarStyle);
  templates;
  _contentTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (\u0275ProgressBar_BaseFactory || (\u0275ProgressBar_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"], ["p-progress-bar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      style: "style",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressBarStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 15,
    consts: [["role", "progressbar", 3, "ngStyle", "ngClass"], ["style", "display:flex", 3, "ngClass", "class", "width", "background", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], [2, "display", "flex", 3, "ngClass"], [1, "p-progressbar-label"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "p-progressbar-value", "p-progressbar-value-animate"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProgressBar_div_1_Template, 4, 13, "div", 1)(2, ProgressBar_div_2_Template, 2, 7, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction2(12, _c1, ctx.mode === "determinate", ctx.mode === "indeterminate"));
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root")("aria-label", ctx.value + ctx.unit);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar, p-progress-bar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div
            role="progressbar"
            [class]="styleClass"
            [ngStyle]="style"
            [attr.aria-valuemin]="0"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="100"
            [attr.data-pc-name]="'progressbar'"
            [attr.data-pc-section]="'root'"
            [ngClass]="{
                'p-progressbar p-component': true,
                'p-progressbar-determinate': mode === 'determinate',
                'p-progressbar-indeterminate': mode === 'indeterminate'
            }"
            [attr.aria-label]="value + unit"
        >
            <div *ngIf="mode === 'determinate'" [ngClass]="'p-progressbar-value p-progressbar-value-animate'" [class]="valueStyleClass" [style.width]="value + '%'" style="display:flex" [style.background]="color" [attr.data-pc-section]="'value'">
                <div class="p-progressbar-label">
                    <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'" [attr.data-pc-section]="'label'">{{ value }}{{ unit }}</div>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
                </div>
            </div>
            <div *ngIf="mode === 'indeterminate'" [ngClass]="'p-progressbar-indeterminate-container'" [class]="valueStyleClass" [attr.data-pc-section]="'container'">
                <div class="p-progressbar-value p-progressbar-value-animate" [style.background]="color" [attr.data-pc-section]="'value'"></div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressBarStyle]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule,
    imports: [ProgressBar, SharedModule],
    exports: [ProgressBar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressBar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressBar, SharedModule],
      exports: [ProgressBar, SharedModule]
    }]
  }], null, null);
})();

// package.json
var version = "0.5.10";

// src/app/services/storage/cloud-storage.service.ts
var CloudStorageService = class _CloudStorageService {
  http = inject(HttpClient);
  gitHubAuthService = inject(ExportGitHubService);
  API_URL = `${environment.dynamodbFunctionUrl}projects`;
  // Signal for cloud project metadata (for list view)
  cloudProjects = signal([]);
  projects = computed(() => this.cloudProjects());
  // Loading states
  loading = signal(false);
  isLoading = computed(() => this.loading());
  // Error state
  error = signal(null);
  errorMessage = computed(() => this.error());
  constructor() {
    this.loadProjects();
  }
  /**
   * Get headers with optional auth token
   */
  getHeaders() {
    const token = this.gitHubAuthService.token();
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    if (token) {
      headers = headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
  /**
   * Load all public project metadata (without full projectData)
   * Used for displaying project lists
   */
  loadProjects() {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.error.set(null);
      try {
        const org = localStorage.getItem("myOrg") || "DEFAULT";
        const url = `${this.API_URL}?org=${encodeURIComponent(org)}`;
        const projects = yield firstValueFrom(this.http.get(url, {
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to load projects:", error);
          this.error.set("Failed to load cloud projects");
          return of([]);
        })));
        const convertedProjects = projects.map((p) => __spreadProps(__spreadValues({}, p), {
          lastModified: new Date(p.lastModified),
          storageType: "cloud"
        }));
        this.cloudProjects.set(convertedProjects);
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Get a specific project with full content (including projectData)
   */
  getProject(projectId) {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.error.set(null);
      try {
        const project = yield firstValueFrom(this.http.get(`${this.API_URL}/${projectId}`, {
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to get project:", error);
          this.error.set("Failed to load project");
          return of(null);
        })));
        if (!project)
          return null;
        const convertedProject = __spreadProps(__spreadValues({}, project), {
          created: new Date(project.created),
          lastModified: new Date(project.lastModified),
          lastSaved: new Date(project.lastSaved),
          lastExported: project.lastExported ? new Date(project.lastExported) : null,
          storageType: "cloud"
        });
        return convertedProject;
      } finally {
        this.loading.set(false);
      }
    });
  }
  // Generates a project key for saving to local or cloud storage
  generateKeyFromName(projectName) {
    if (!projectName || projectName.trim() === "") {
      return "autosave";
    }
    return projectName.replace(/[:']/g, "").replace(/\s+/g, "-").toLowerCase();
  }
  /**
   * Save project to cloud (requires auth)
   * @param project The full project to save
   * @param projectId Optional - provide for updates, omit for new projects
   * @returns The project ID if successful, null if failed
   */
  saveProject(project, projectId) {
    return __async(this, null, function* () {
      if (!this.gitHubAuthService.token()) {
        this.error.set("Authentication required to save projects");
        return null;
      }
      if (!project.projectName && !project.github.repo) {
        this.error.set("Project name or repository name is required");
        return null;
      }
      const org = localStorage.getItem("myOrg") || "DEFAULT";
      this.loading.set(true);
      this.error.set(null);
      try {
        const payload = __spreadProps(__spreadValues({}, project), {
          org,
          key: this.generateKeyFromName(project.projectName),
          storageType: "cloud",
          created: project.created instanceof Date ? project.created.getTime() : project.created,
          lastModified: project.lastModified instanceof Date ? project.lastModified.getTime() : project.lastModified,
          lastSaved: project.lastSaved instanceof Date ? project.lastSaved.getTime() : project.lastSaved,
          lastExported: project.lastExported instanceof Date ? project.lastExported.getTime() : project.lastExported,
          collaborators: project.collaborators?.map((c) => ({
            id: c.id,
            login: c.login,
            name: c.name || c.login,
            avatar_url: c.avatar_url,
            email: c.email || null
          }))
        });
        const url = projectId ? `${this.API_URL}/${projectId}` : this.API_URL;
        const method = projectId ? "PUT" : "POST";
        const response = yield firstValueFrom(this.http.request(method, url, {
          body: payload,
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to save project:", error);
          let errorMsg = "Failed to save project to cloud";
          if (error.error?.error) {
            errorMsg = error.error.error;
          }
          if (error.error?.details) {
            errorMsg += ": " + error.error.details;
          }
          this.error.set(errorMsg);
          throw error;
        })));
        yield this.loadProjects();
        return response.id;
      } catch (error) {
        console.error(error);
        return null;
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Delete project from cloud (requires auth)
   */
  deleteProject(projectId) {
    return __async(this, null, function* () {
      if (!this.gitHubAuthService.token()) {
        this.error.set("Authentication required to delete projects");
        return false;
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        yield firstValueFrom(this.http.delete(`${this.API_URL}/${projectId}`, {
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to delete project:", error);
          this.error.set("Failed to delete project");
          throw error;
        })));
        yield this.loadProjects();
        return true;
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function CloudStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CloudStorageService, factory: _CloudStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudStorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/storage/local-storage.service.ts
var LocalStorageService = class _LocalStorageService {
  saveData(key, value) {
    localStorage.setItem(key, value);
  }
  getData(key) {
    return localStorage.getItem(key);
  }
  removeData(key) {
    localStorage.removeItem(key);
  }
  clearData() {
    localStorage.clear();
  }
  static \u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageService, factory: _LocalStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/storage/project-storage.service.ts
var ProjectStorageService = class _ProjectStorageService {
  //Services
  cloudStorageService = inject(CloudStorageService);
  localStorageService = inject(LocalStorageService);
  fetchService = inject(FetchService);
  // Local storage keys
  ACTIVE_PROJECT_KEY = "activeProject";
  SAVED_PROJECTS_KEY = "savedProjects";
  DELETED_PROJECTS_KEY = "deletedProjects";
  generateKeyFromName(projectName) {
    if (!projectName || projectName.trim() === "") {
      return "autosave";
    }
    return projectName.replace(/[:']/g, "").replace(/\s+/g, "-").toLowerCase();
  }
  // Other variables
  DAYS_UNTIL_AUTO_DELETE = 30;
  // Signal for changes to project list
  projectListVersion = signal(0);
  projectListChanged = computed(() => this.projectListVersion());
  /************************************
   ********** ACTIVE PROJECT **********
   ************************************/
  // Signal for current active project
  activeProject = signal(this.getActiveProject());
  currentActive = computed(() => this.activeProject());
  // Get active project key from local storage (used on initial app load)
  getActiveProject() {
    const stored = this.localStorageService.getData(this.ACTIVE_PROJECT_KEY);
    if (!stored)
      return null;
    try {
      const parsed = JSON.parse(stored);
      if (parsed.key && (parsed.storageType === "local" || parsed.storageType === "cloud")) {
        return parsed;
      }
      return null;
    } catch (error) {
      console.error("Failed to parse active project:", error);
      return null;
    }
  }
  // Set active project (used when switching projects)
  setActiveProject(key, storageType) {
    const activeProject = { key, storageType };
    this.localStorageService.saveData(this.ACTIVE_PROJECT_KEY, JSON.stringify(activeProject));
    this.activeProject.set(activeProject);
  }
  // Clear active project (used when starting new project)
  clearActiveProject() {
    this.localStorageService.removeData(this.ACTIVE_PROJECT_KEY);
    this.activeProject.set(null);
  }
  // Tracks if active project exists (true unless working in autosave file)
  hasActiveProject() {
    return this.getActiveProject() !== null;
  }
  /************************************
   *********** SAVE PROJECT ***********
   ************************************/
  // Save to either local or cloud based on project.storageType (returns true if successful)
  saveProject(project) {
    return __async(this, null, function* () {
      try {
        const newKey = this.generateKeyFromName(project.projectName);
        const storageType = project.storageType;
        const oldActiveProject = this.getActiveProject();
        const oldKey = oldActiveProject?.key;
        if (storageType === "cloud") {
          const success = yield this.saveToCloud(project, newKey);
          if (!success) {
            console.error("Cloud save failed");
            return false;
          } else {
            this.deleteLocalProject(newKey);
          }
          this.setActiveProject(project.id, storageType);
        } else {
          this.saveToLocal(project, newKey);
          if (oldKey && oldKey !== newKey) {
            this.deleteLocalProject(oldKey);
          }
          this.setActiveProject(newKey, storageType);
          const deletedProjects = JSON.parse(this.localStorageService.getData(this.DELETED_PROJECTS_KEY) || "[]");
          const updatedDeletedProjects = deletedProjects.filter((p) => p.key !== newKey && p.key !== oldKey);
          this.localStorageService.saveData(this.DELETED_PROJECTS_KEY, JSON.stringify(updatedDeletedProjects));
        }
        return true;
      } catch (error) {
        console.error("Failed to save project:", error);
        return false;
      }
    });
  }
  // Save project to local storage
  saveToLocal(project, key) {
    const projectToSave = this.prepareProjectForSave(project);
    this.localStorageService.saveData(key, JSON.stringify(projectToSave));
    this.updateLocalProjectList(key, project);
    this.projectListVersion.update((v) => v + 1);
  }
  // Save project to cloud storage (including the extra data that we save separately for local projcts for display purposes)
  saveToCloud(project, key) {
    return __async(this, null, function* () {
      const projectToSave = this.prepareProjectForSave(project);
      const updatedProject = __spreadProps(__spreadValues({}, projectToSave), {
        key,
        storageLocation: "cloud"
      });
      const savedId = yield this.cloudStorageService.saveProject(updatedProject, project.id);
      if (savedId) {
        this.projectListVersion.update((v) => v + 1);
      }
      return savedId !== null;
    });
  }
  // Remove circular TreeNode references from project data
  prepareProjectForSave(project) {
    return __spreadProps(__spreadValues({}, project), {
      projectData: this.removeParents(project.projectData)
    });
  }
  // Remove circular TreeNode references from TreeNodes
  removeParents(nodes) {
    return nodes.map((node) => {
      const _a = node, { parent } = _a, rest = __objRest(_a, ["parent"]);
      return __spreadProps(__spreadValues({}, rest), {
        children: node.children ? this.removeParents(node.children) : []
      });
    });
  }
  // Add parent references back
  rebuildParents(nodes, parent) {
    for (const node of nodes) {
      node.parent = parent;
      if (node.children?.length) {
        this.rebuildParents(node.children, node);
      }
    }
  }
  // Update list of local projects in localStorage
  updateLocalProjectList(key, project) {
    const savedProjects = JSON.parse(this.localStorageService.getData(this.SAVED_PROJECTS_KEY) || "[]");
    const existingIndex = savedProjects.findIndex((p) => p.key === key);
    const projectEntry = {
      id: project.id,
      key,
      projectName: project.projectName,
      phase: project.phase,
      inScopePages: project.inScopePages,
      lastModified: project.lastModified,
      storageType: "local",
      repoType: project.repoType ?? "github",
      collaborators: project.collaborators || [],
      github: project.github
    };
    if (existingIndex >= 0) {
      savedProjects[existingIndex] = projectEntry;
    } else {
      savedProjects.push(projectEntry);
    }
    savedProjects.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());
    this.localStorageService.saveData(this.SAVED_PROJECTS_KEY, JSON.stringify(savedProjects));
  }
  /************************************
   *********** LOAD PROJECTS **********
   ************************************/
  getProjectList() {
    return __async(this, null, function* () {
      const localProjects = this.getLocalProjectList("saved");
      const cloudProjects = yield this.cloudStorageService.projects();
      return [...localProjects, ...cloudProjects].sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
    });
  }
  getLocalProjectList(mode = "saved") {
    const storageKey = mode === "deleted" ? this.DELETED_PROJECTS_KEY : this.SAVED_PROJECTS_KEY;
    const projectsString = this.localStorageService.getData(storageKey);
    if (!projectsString)
      return [];
    try {
      const projects = JSON.parse(projectsString);
      return projects.map((p) => __spreadProps(__spreadValues({}, p), {
        lastModified: new Date(p.lastModified)
      }));
    } catch (error) {
      console.error(`Failed to parse ${mode} projects:`, error);
      return [];
    }
  }
  /************************************
  ********** SWITCH PROJECTS **********
  ************************************/
  // Gets project from local or cloud storage (caller will need to update project-state)
  loadProject(key, storageType) {
    return __async(this, null, function* () {
      try {
        let project = null;
        if (storageType === "local") {
          project = yield this.loadFromLocal(key);
        } else {
          project = yield this.loadFromCloud(key);
        }
        if (!project) {
          console.error("Failed to load project");
          return null;
        }
        project = __spreadProps(__spreadValues({}, project), {
          created: new Date(project.created),
          lastModified: new Date(project.lastModified),
          lastSaved: new Date(project.lastSaved),
          lastExported: project.lastExported ? new Date(project.lastExported) : null,
          lastDownloaded: project.lastDownloaded ? new Date(project.lastDownloaded) : null
        });
        this.rebuildParents(project.projectData, void 0);
        this.setActiveProject(key, storageType);
        return project;
      } catch (error) {
        console.error("Failed to load project:", error);
        return null;
      }
    });
  }
  /**
   * Load project from local storage
   */
  loadFromLocal(key) {
    return __async(this, null, function* () {
      const stored = this.localStorageService.getData(key);
      if (!stored) {
        console.error(`No project found with key: ${key}`);
        return null;
      }
      try {
        const project = JSON.parse(stored);
        const patched = this.patchLegacyProject(__spreadProps(__spreadValues({}, project), {
          created: new Date(project.created),
          lastModified: new Date(project.lastModified),
          lastSaved: new Date(project.lastSaved),
          lastExported: project.lastExported ? new Date(project.lastExported) : null,
          storageType: "local"
        }));
        return patched;
      } catch (error) {
        console.error("Failed to parse project:", error);
        return null;
      }
    });
  }
  /**
   * Load project from cloud storage
   */
  loadFromCloud(projectId) {
    return __async(this, null, function* () {
      const cloudProject = yield this.cloudStorageService.getProject(projectId);
      if (!cloudProject)
        return null;
      return this.patchLegacyProject(__spreadProps(__spreadValues({}, cloudProject), {
        storageType: "cloud"
      }));
    });
  }
  /************************************
  *********** DELETE PROJECT **********
  ************************************/
  /**
   * Delete a project from local or cloud storage
   */
  deleteProject(key, storageType) {
    return __async(this, null, function* () {
      try {
        if (storageType === "local") {
          const success = this.deleteLocalProject(key);
          if (success) {
            this.projectListVersion.update((v) => v + 1);
          }
          return success;
        } else {
          const projectToDelete = yield this.loadProjectData(key, "cloud");
          if (projectToDelete) {
            this.saveToLocal(projectToDelete, key);
            this.deleteLocalProject(key);
          }
          const success = yield this.cloudStorageService.deleteProject(key);
          if (success) {
            this.projectListVersion.update((v) => v + 1);
          }
          return success;
        }
      } catch (error) {
        console.error("Failed to delete project:", error);
        return false;
      }
    });
  }
  // Delete a local project (saved → recycle bin → delete)
  deleteLocalProject(key) {
    const savedProjects = JSON.parse(this.localStorageService.getData(this.SAVED_PROJECTS_KEY) || "[]");
    const deletedProjects = JSON.parse(this.localStorageService.getData(this.DELETED_PROJECTS_KEY) || "[]");
    const savedProject = savedProjects.find((p) => p.key === key);
    const inDeleted = deletedProjects.some((p) => p.key === key);
    if (savedProject) {
      const updatedSavedProjects = savedProjects.filter((p) => p.key !== key);
      this.localStorageService.saveData(this.SAVED_PROJECTS_KEY, JSON.stringify(updatedSavedProjects));
      const deletedProject = __spreadProps(__spreadValues({}, savedProject), {
        lastModified: /* @__PURE__ */ new Date()
      });
      const updatedDeletedProjects = [...deletedProjects, deletedProject];
      this.localStorageService.saveData(this.DELETED_PROJECTS_KEY, JSON.stringify(updatedDeletedProjects));
      this.projectListVersion.update((v) => v + 1);
      return true;
    } else if (inDeleted) {
      this.localStorageService.removeData(key);
      const updatedDeletedProjects = deletedProjects.filter((p) => p.key !== key);
      this.localStorageService.saveData(this.DELETED_PROJECTS_KEY, JSON.stringify(updatedDeletedProjects));
      this.projectListVersion.update((v) => v + 1);
      return true;
    }
    return false;
  }
  /*******************************************
  *********** BACKGROUND OPERATIONS **********
  ********************************************/
  // Loads project data without setting it as active
  loadProjectData(key, storageType) {
    return __async(this, null, function* () {
      try {
        if (storageType === "local") {
          return yield this.loadFromLocal(key);
        } else {
          return yield this.loadFromCloud(key);
        }
      } catch (error) {
        console.error(`Failed to load project data for ${key}:`, error);
        return null;
      }
    });
  }
  // Automatically removes deleted projects after a period of time
  cleanupDeletedProjects() {
    const deletedProjects = this.getLocalProjectList("deleted");
    const cutoffDate = /* @__PURE__ */ new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.DAYS_UNTIL_AUTO_DELETE);
    const projectsToDelete = deletedProjects.filter((p) => p.lastModified < cutoffDate);
    projectsToDelete.forEach((project) => {
      this.deleteLocalProject(project.key);
    });
    return projectsToDelete.length;
  }
  /************************************
  *********** EXPORT PROJECT **********
  ************************************/
  /************************************
   ********** IMPORT PROJECT **********
   ************************************/
  /************************************
  *********** PATCH PROJECT ***********
  ************************************/
  patchLegacyNode(node) {
    if (node.data?.live !== void 0) {
      return __spreadProps(__spreadValues({}, node), {
        children: node.children?.map((child) => this.patchLegacyNode(child)) ?? []
      });
    }
    const old = node.data;
    const urlLang = old.url?.includes("/en/") || old.url?.includes("/en.html") ? "en" : "fr";
    const oppUrl = old.metadata?.oppUrl;
    const enUrl = urlLang === "en" ? old.url : oppUrl;
    const frUrl = urlLang === "fr" ? old.url : oppUrl;
    const enPath = enUrl ? this.fetchService.generatePath(enUrl) : void 0;
    const frPath = frUrl ? this.fetchService.generatePath(frUrl) : void 0;
    const enData = {
      h1: urlLang === "en" ? old.h1 : old.metadata?.oppTitle ?? "",
      doubleH1: urlLang === "en" ? old.doubleH1 : old.metadata?.oppSectionTitle,
      contentHash: void 0,
      lastChecked: void 0,
      githubSha: void 0,
      title: old.metadata?.title ?? "",
      description: old.metadata?.description ?? "",
      keywords: old.metadata?.keywords ?? "",
      is404: old.status?.isNew ?? false,
      isOrphan: old.status?.isOrphan ?? false,
      noindex: old.status?.noindexEN === true,
      isArchived: old.status?.archiveStatus === "archived",
      linksToPortal: old.status?.linksToPortal ?? false,
      hasChatbot: false,
      owner: old.metadata?.owner,
      email: old.metadata?.email,
      lastPublished: old.metadata?.lastPublished instanceof Date ? old.metadata.lastPublished.toISOString() : old.metadata?.lastPublished,
      lastModified: old.metadata?.lastModified instanceof Date ? old.metadata.lastModified.toISOString() : old.metadata?.lastModified,
      parentPath: old.originalParent ? this.fetchService.generatePath(old.originalParent) : void 0,
      wordCount: old.metadata?.wordCount ?? -1,
      linkCount: -1,
      fleschKincaid: -1,
      gunningFog: -1,
      phoneNumbers: [],
      template: old.metadata?.template ?? PageTemplate.Content,
      problem: void 0
    };
    const frData = {
      h1: urlLang === "fr" ? old.h1 : old.metadata?.oppTitle ?? "",
      doubleH1: urlLang === "fr" ? old.doubleH1 : old.metadata?.oppSectionTitle,
      contentHash: void 0,
      lastChecked: void 0,
      githubSha: void 0,
      title: old.metadata?.titleFR ?? "",
      description: old.metadata?.descriptionFR ?? "",
      keywords: old.metadata?.keywordsFR ?? "",
      is404: old.status?.isNew ?? false,
      isOrphan: old.status?.isOrphan ?? false,
      noindex: old.status?.noindexFR === true,
      isArchived: old.status?.archiveStatus === "archived",
      linksToPortal: old.status?.linksToPortal ?? false,
      hasChatbot: false,
      owner: old.metadata?.owner,
      email: old.metadata?.email,
      lastPublished: old.metadata?.lastPublished instanceof Date ? old.metadata.lastPublished.toISOString() : old.metadata?.lastPublished,
      lastModified: old.metadata?.lastModified instanceof Date ? old.metadata.lastModified.toISOString() : old.metadata?.lastModified,
      parentPath: old.originalParent ? this.fetchService.generatePath(old.originalParent) : void 0,
      wordCount: old.metadata?.wordCount ?? -1,
      linkCount: -1,
      fleschKincaid: -1,
      gunningFog: -1,
      phoneNumbers: [],
      template: old.metadata?.template ?? PageTemplate.Content,
      problem: void 0
    };
    const githubEnData = __spreadProps(__spreadValues({}, enData), { is404: true });
    const githubFrData = __spreadProps(__spreadValues({}, frData), { is404: true });
    return __spreadProps(__spreadValues({}, node), {
      data: {
        lang: urlLang,
        path: { en: enPath, fr: frPath },
        status: {
          inScope: old.status?.inScope ?? false,
          isNew: old.status?.isNew ?? false,
          isMoved: old.status?.isMoved ?? false,
          isROT: old.status?.isROT ?? false
        },
        task: { en: old.metadata?.task ?? [], fr: old.metadata?.task ?? [] },
        visits: { en: old.metadata?.visits ?? -1, fr: old.metadata?.visits ?? -1 },
        vanities: { en: [], fr: [] },
        live: { en: enData, fr: frData },
        baseline: { en: __spreadValues({}, githubEnData), fr: __spreadValues({}, githubFrData) },
        prototype: { en: __spreadValues({}, githubEnData), fr: __spreadValues({}, githubFrData) },
        metadataReview: old.metadataReview,
        notes: { issue: old.notes?.problem, solution: old.notes?.solution },
        repoType: "github",
        isContainer: old.status?.isContainer ?? false,
        isCrawled: old.status?.isCrawled ?? false
      },
      children: node.children?.map((child) => this.patchLegacyNode(child)) ?? []
    });
  }
  patchLegacyProject(project) {
    if (!project.projectData?.length)
      return project;
    return __spreadProps(__spreadValues({}, project), {
      projectData: project.projectData.map((node) => this.patchLegacyNode(node))
    });
  }
  static \u0275fac = function ProjectStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectStorageService, factory: _ProjectStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectStorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/collaborator.service.ts
var CollaboratorService = class _CollaboratorService {
  projectStorageService = inject(ProjectStorageService);
  exportGitHubService = inject(ExportGitHubService);
  // Check if current user is a collaborator
  canEditProject(project) {
    const currentUser = this.exportGitHubService.user();
    if (!currentUser)
      return false;
    return project.collaborators.some((c) => c.id === currentUser.id);
  }
  // Get current user to add to new projects
  getInitialCollaborators() {
    const currentUser = this.exportGitHubService.user();
    return currentUser ? [currentUser] : [];
  }
  // Add current user to all local projects without collaborators 
  addCurrentUserToLocalProjects(user) {
    return __async(this, null, function* () {
      console.log("Adding current user to local projects as collaborator:", user.login);
      const savedProjects = this.projectStorageService.getLocalProjectList("saved");
      for (const metadata of savedProjects) {
        if (!metadata.collaborators || metadata.collaborators.length === 0) {
          yield this.addUserToProject(metadata.key, user);
        }
      }
      console.log("Finished adding user to local projects");
    });
  }
  // Add current user to specific project
  addUserToProject(projectKey, user) {
    return __async(this, null, function* () {
      try {
        const project = yield this.projectStorageService.loadProjectData(projectKey, "local");
        if (!project) {
          console.warn(`Could not load project ${projectKey}`);
          return;
        }
        project.collaborators = [user];
        project.lastModified = /* @__PURE__ */ new Date();
        const projectToSave = this.projectStorageService.prepareProjectForSave(project);
        localStorage.setItem(projectKey, JSON.stringify(projectToSave));
        this.projectStorageService.updateLocalProjectList(projectKey, project);
        this.projectStorageService.projectListVersion.update((v) => v + 1);
        console.log(`Added ${user.login} as collaborator to project ${projectKey}`);
      } catch (error) {
        console.error(`Failed to add user to project ${projectKey}:`, error);
      }
    });
  }
  addCollaborators(project, collabs) {
    console.log(`Adding/updating ${collabs.length} collaborator(s) for project ${project.projectName}`);
    const updatedCollaborators = [...project.collaborators];
    let addedCount = 0;
    let updatedCount = 0;
    collabs.forEach((newCollab) => {
      const existingIndex = updatedCollaborators.findIndex((existing) => existing.id === newCollab.id);
      if (existingIndex !== -1) {
        updatedCollaborators[existingIndex] = newCollab;
        updatedCount++;
        console.log(`Updated collaborator: ${newCollab.login}`);
      } else {
        updatedCollaborators.push(newCollab);
        addedCount++;
        console.log(`Added new collaborator: ${newCollab.login}`);
      }
    });
    console.log(`Added ${addedCount}, updated ${updatedCount} collaborator(s)`);
    return __spreadProps(__spreadValues({}, project), {
      collaborators: updatedCollaborators,
      lastModified: /* @__PURE__ */ new Date()
    });
  }
  removeCollaborator(project, collab) {
    console.log(`Removing ${collab.login} from project ${project.projectName}`);
    const originalCount = project.collaborators.length;
    const updatedCollaborators = project.collaborators = project.collaborators.filter((c) => c.id !== collab.id);
    if (updatedCollaborators.length === originalCount) {
      console.warn(`Collaborator ${collab.login} not found in project`);
      return project;
    }
    return __spreadProps(__spreadValues({}, project), {
      collaborators: updatedCollaborators,
      lastModified: /* @__PURE__ */ new Date()
    });
  }
  //NOTE - avatars will always return images due to GitHub identicons
  //       we can add parameter s=40 to get a 40x40 image for custom images and default size identicons
  //       use that to strip out identicons and display initials instead or get rid of the functions below
  // Collaborator avatar - Get initials
  getCollaboratorName(collab) {
    return collab.name ? collab.name : collab.login;
  }
  // Collaborator avatar - Get initials
  getCollaboratorInitials(collab) {
    if (collab.name) {
      const nameParts = collab.name.trim().split(/\s+/);
      if (nameParts.length >= 2) {
        return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
      } else {
        return collab.name.substring(0, 2).toUpperCase();
      }
    }
    return collab.login.substring(0, 2).toUpperCase();
  }
  // Collaborator avatar - Assign colors to user ids (same user will always be same color)
  getCollaboratorColorClass(collab) {
    const colors = [
      "bg-primary text-white",
      "bg-blue-500 text-white",
      "bg-green-500 text-white",
      "bg-yellow-500 text-black-alpha-90",
      "bg-cyan-500 text-black-alpha-90",
      "bg-pink-500 text-white",
      "bg-indigo-500 text-white",
      "bg-teal-500 text-black-alpha-90",
      "bg-orange-500 text-black-alpha-90"
    ];
    return colors[collab.id % colors.length];
  }
  // Get list of org members (for adding as collaborators)
  getOrgMembers(org) {
    return __async(this, null, function* () {
      const token = this.exportGitHubService.token();
      if (!token) {
        console.warn("No GitHub token available");
        return [];
      }
      try {
        const response = yield fetch(`https://api.github.com/orgs/${org}/members?per_page=100`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github+json"
          }
        });
        if (!response.ok) {
          console.error(`Failed to fetch org members: ${response.status}`);
          return [];
        }
        const members = yield response.json();
        return members.map((member) => ({
          login: member.login,
          id: member.id,
          avatar_url: member.avatar_url,
          name: member.name || null,
          email: member.email || null
        }));
      } catch (error) {
        console.error("Error fetching org members:", error);
        return [];
      }
    });
  }
  // Get detailed user information
  getUserDetails(username) {
    return __async(this, null, function* () {
      const token = this.exportGitHubService.token();
      if (!token) {
        console.warn("No GitHub token available");
        return null;
      }
      try {
        const response = yield fetch(`https://api.github.com/users/${username}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github+json"
          }
        });
        if (!response.ok) {
          console.error(`Failed to fetch user details for ${username}: ${response.status}`);
          return null;
        }
        const userData = yield response.json();
        return {
          login: userData.login,
          id: userData.id,
          avatar_url: userData.avatar_url,
          name: userData.name || null,
          email: userData.email || null
        };
      } catch (error) {
        console.error(`Error fetching user details for ${username}:`, error);
        return null;
      }
    });
  }
  // Get collaborator emails (for requesting access)
  getCollaboratorEmails(collabs) {
    return collabs.filter((collab) => collab.email && collab.email.trim() !== "").map((collab) => collab.email) || [];
  }
  static \u0275fac = function CollaboratorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollaboratorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CollaboratorService, factory: _CollaboratorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollaboratorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/airtable.service.ts
var AirtableService = class _AirtableService {
  http = inject(HttpClient);
  FUNCTION_URL = environment.airtableFunctionUrl;
  // Signals for managing data state
  tasks = signal([]);
  loading = signal(false);
  error = signal(null);
  lastFetched = signal(null);
  // Computed signals
  isLoading = computed(() => this.loading());
  hasError = computed(() => !!this.error());
  errorMessage = computed(() => this.error());
  data = computed(() => this.tasks());
  isCached = computed(() => this.lastFetched() !== null);
  /**
   * Fetch task data from Airtable (or use cached data if available)
   */
  fetchTasks(forceRefresh = false) {
    return __async(this, null, function* () {
      if (!forceRefresh && this.tasks().length > 0) {
        console.log("Using cached Airtable data");
        return this.tasks();
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        console.log("Fetching Airtable data...");
        const response = yield firstValueFrom(this.http.get(this.FUNCTION_URL).pipe(catchError((error) => {
          console.error("Failed to fetch Airtable tasks:", error);
          this.error.set(error.error?.error || "Failed to fetch tasks");
          return of(null);
        })));
        if (response) {
          this.tasks.set(response);
          this.lastFetched.set(Date.now());
          console.log(`Fetched ${response.length} tasks from Airtable`);
          return response;
        }
        return [];
      } catch (error) {
        console.error("Error fetching Airtable tasks:", error);
        this.error.set("An unexpected error occurred");
        return [];
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Clear cached data and fetch fresh data
   */
  refreshData() {
    return __async(this, null, function* () {
      this.clearCache();
      return yield this.fetchTasks(true);
    });
  }
  /**
   * Clear the cache and current data
   */
  clearCache() {
    this.tasks.set([]);
    this.error.set(null);
    this.lastFetched.set(null);
    console.log("Cleared Airtable cache");
  }
  /**
   * Get tasks filtered by language
   */
  getTasksByLanguage(language) {
    return this.tasks().filter((task) => {
      const urls = language === "en" ? task.urlsEN : task.urlsFR;
      return urls.length > 0;
    });
  }
  /**
   * Search tasks by name
   */
  searchTasks(query, language = "en") {
    if (!query.trim()) {
      return this.tasks();
    }
    const lowerQuery = query.toLowerCase();
    return this.tasks().filter((task) => {
      const taskName = language === "en" ? task.taskNameEN : task.taskNameFR;
      return taskName.toLowerCase().includes(lowerQuery);
    });
  }
  // Finds all tasks for a given URL
  findTaskNamesByUrl(url, language) {
    const matchingTasks = this.tasks().filter((task) => {
      const urls = language === "en" ? task.urlsEN : task.urlsFR;
      return urls.some((taskUrl) => taskUrl === url);
    });
    return matchingTasks.map((task) => language === "en" ? task.taskNameEN : task.taskNameFR);
  }
  /**
   * Check if data is available (cached or needs fetching)
   */
  hasData() {
    return this.tasks().length > 0;
  }
  /**
   * Get the timestamp of when data was last fetched
   */
  getLastFetchedTime() {
    const timestamp = this.lastFetched();
    return timestamp ? new Date(timestamp) : null;
  }
  static \u0275fac = function AirtableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AirtableService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AirtableService, factory: _AirtableService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AirtableService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/upd.service.ts
var UpdService = class _UpdService {
  http = inject(HttpClient);
  DATA_URL = "/visits-urls.json";
  // Signals for managing data state
  pageData = signal([]);
  loading = signal(false);
  error = signal(null);
  lastFetched = signal(null);
  // Computed signals
  isLoading = computed(() => this.loading());
  hasError = computed(() => !!this.error());
  errorMessage = computed(() => this.error());
  data = computed(() => this.pageData());
  isCached = computed(() => this.lastFetched() !== null);
  /**
   * Fetch UPD data from JSON file (or use cached data if available)
   */
  fetchData(forceRefresh = false) {
    return __async(this, null, function* () {
      if (!forceRefresh && this.pageData().length > 0) {
        console.log("Using cached UPD data");
        return this.pageData();
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        console.log("Fetching UPD data...");
        const response = yield firstValueFrom(this.http.get(this.DATA_URL).pipe(catchError((error) => {
          console.error("Failed to fetch UPD data:", error);
          this.error.set("Failed to fetch visit data");
          return of(null);
        })));
        if (response) {
          this.pageData.set(response);
          this.lastFetched.set(Date.now());
          console.log(`Fetched ${response.length} pages from UPD data`);
          return response;
        }
        return [];
      } catch (error) {
        console.error("Error fetching UPD data:", error);
        this.error.set("An unexpected error occurred");
        return [];
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Clear cached data and fetch fresh data
   */
  refreshData() {
    return __async(this, null, function* () {
      this.clearCache();
      return yield this.fetchData(true);
    });
  }
  /**
   * Clear the cache and current data
   */
  clearCache() {
    this.pageData.set([]);
    this.error.set(null);
    this.lastFetched.set(null);
    console.log("Cleared UPD cache");
  }
  /**
   * Find visits for a given URL
   */
  findVisitsByUrl(url) {
    const page = this.pageData().find((item) => item.url === url);
    return page?.visits ?? -1;
  }
  /**
   * Find complete page data for a given URL
   */
  findPageDataByUrl(url) {
    return this.pageData().find((item) => item.url === url);
  }
  /**
   * Get top N pages by visits
   */
  getTopPagesByVisits(limit = 10) {
    return [...this.pageData()].sort((a, b) => b.visits - a.visits).slice(0, limit);
  }
  /**
   * Search pages by title or URL
   */
  searchPages(query) {
    if (!query.trim()) {
      return this.pageData();
    }
    const lowerQuery = query.toLowerCase();
    return this.pageData().filter((page) => {
      return page.title.toLowerCase().includes(lowerQuery) || page.url.toLowerCase().includes(lowerQuery);
    });
  }
  /**
   * Get total visits across all pages
   */
  getTotalVisits() {
    return this.pageData().reduce((sum, page) => sum + page.visits, 0);
  }
  /**
   * Check if data is available (cached or needs fetching)
   */
  hasData() {
    return this.pageData().length > 0;
  }
  /**
   * Get the timestamp of when data was last fetched
   */
  getLastFetchedTime() {
    const timestamp = this.lastFetched();
    return timestamp ? new Date(timestamp) : null;
  }
  static \u0275fac = function UpdService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UpdService, factory: _UpdService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/vanity.service.ts
var VanityService = class _VanityService {
  http = inject(HttpClient);
  DATA_URL = "/vanity-urls.json";
  vanityData = signal([]);
  loading = signal(false);
  error = signal(null);
  isLoading = computed(() => this.loading());
  hasError = computed(() => !!this.error());
  fetchData(forceRefresh = false) {
    return __async(this, null, function* () {
      if (!forceRefresh && this.vanityData().length > 0)
        return;
      this.loading.set(true);
      this.error.set(null);
      try {
        const response = yield firstValueFrom(this.http.get(this.DATA_URL).pipe(catchError((error) => {
          console.error("Failed to fetch vanity data:", error);
          this.error.set("Failed to fetch vanity URLs");
          return of(null);
        })));
        if (response)
          this.vanityData.set(response);
      } catch (error) {
        console.error("Error fetching vanity data:", error);
        this.error.set("An unexpected error occurred");
      } finally {
        this.loading.set(false);
      }
    });
  }
  findVanitiesByDestination(destination) {
    return this.vanityData().find((entry) => entry.destination === destination)?.vanity ?? [];
  }
  static \u0275fac = function VanityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VanityService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VanityService, factory: _VanityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VanityService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/usage.service.ts
var UsageService = class _UsageService {
  http = inject(HttpClient);
  settingsService = inject(UserSettingsService);
  apiUrl = environment.usageFunctionUrl;
  trackMetadata(projectId, orgId, storageType, pageUrl, originalDescEN, originalDescFR, originalKeywordsEN, originalKeywordsFR, review, promptConfig, isUpdate = false) {
    return __async(this, null, function* () {
      try {
        yield firstValueFrom(this.http.post(this.apiUrl, {
          isUpdate,
          feature: "metadata",
          projectId,
          orgId,
          storageType,
          userId: this.settingsService.userId(),
          pageUrl,
          model: review.model,
          promptConfig,
          generatedAt: new Date(review.generatedAt).toISOString(),
          originalDescEN,
          originalDescFR,
          originalKeywordsEN,
          originalKeywordsFR,
          aiDescEN: review.en.description.ai,
          aiDescFR: review.fr.description.ai,
          aiKeywordsEN: review.en.keywords.ai,
          aiKeywordsFR: review.fr.keywords.ai,
          finalDescEN: review.en.description.edited ?? review.en.description.ai,
          finalDescFR: review.fr.description.edited ?? review.fr.description.ai,
          finalKeywordsEN: review.en.keywords.edited ?? review.en.keywords.ai,
          finalKeywordsFR: review.fr.keywords.edited ?? review.fr.keywords.ai,
          statusDescEN: review.en.description.status,
          statusDescFR: review.fr.description.status,
          statusKeywordsEN: review.en.keywords.status,
          statusKeywordsFR: review.fr.keywords.status
        }));
      } catch (error) {
        console.warn("Usage tracking failed silently:", error);
      }
    });
  }
  updateUserId(tempUserId, githubUserId) {
    return __async(this, null, function* () {
      try {
        yield firstValueFrom(this.http.post(this.apiUrl, {
          feature: "update-user",
          tempUserId,
          githubUserId
        }));
      } catch (error) {
        console.warn("User ID update failed silently:", error);
      }
    });
  }
  trackExport(projectId, orgId, storageType, repoType, repo, exportTarget, pageCountEN, pageCountFR) {
    return __async(this, null, function* () {
      try {
        yield firstValueFrom(this.http.post(this.apiUrl, {
          feature: "export",
          projectId,
          orgId,
          storageType,
          repoType,
          userId: this.settingsService.userId(),
          repo,
          exportTarget,
          pageCountEN,
          pageCountFR
        }));
      } catch (error) {
        console.warn("Export tracking failed silently:", error);
      }
    });
  }
  static \u0275fac = function UsageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsageService, factory: _UsageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/project-state.service.ts
var ProjectStateService = class _ProjectStateService {
  translate = inject(TranslateService);
  projectStorageService = inject(ProjectStorageService);
  collaboratorService = inject(CollaboratorService);
  fetchService = inject(FetchService);
  airtableService = inject(AirtableService);
  updService = inject(UpdService);
  vanityService = inject(VanityService);
  usageService = inject(UsageService);
  exportGitHubService = inject(ExportGitHubService);
  currentLang = signal(this.translate.currentLang ?? "en");
  // Main project state
  project = signal({
    id: this.generateId(),
    key: "",
    version,
    projectName: "",
    phase: ProjectPhase.Draft,
    created: /* @__PURE__ */ new Date(),
    lastModified: /* @__PURE__ */ new Date(),
    lastSaved: /* @__PURE__ */ new Date(),
    lastExported: null,
    lastDownloaded: null,
    storageType: "local",
    repoType: "github",
    collaborators: this.collaboratorService.getInitialCollaborators(),
    baselinePages: 0,
    inScopePages: 0,
    github: {
      owner: environment.defaultOrg,
      repo: "",
      branch: "main",
      hasBaselineRepo: false
    },
    projectData: []
  });
  getProject = computed(() => this.project());
  // Track save status
  saveStatus = signal("saved");
  getSaveStatus = computed(() => this.saveStatus());
  // Set autosave delay
  autoSaveTimer = null;
  AUTO_SAVE_DELAY = 1e4;
  // 30 seconds
  MAX_UNSAVED_DURATION = 5 * 60 * 1e3;
  // 5 minutes
  // Loading states
  refreshing = signal({
    prototype: false,
    live: false,
    baseline: false
  });
  // Track availability of local and github versions
  hasGitHub = signal(false);
  hasGitHubBL = signal(false);
  hasLocal = signal(null);
  hasLocalBL = signal(null);
  constructor() {
    effect(() => {
      const currentProject = this.project();
      const hasChanges = currentProject.lastModified > currentProject.lastSaved;
      if (hasChanges) {
        if (currentProject.storageType === "cloud" && !this.collaboratorService.canEditProject(currentProject)) {
          console.log("Converting cloud project to local...");
          this.setStorageType("local");
        }
        this.saveStatus.set("unsaved");
        const timeSinceLastSave = currentProject.lastModified.getTime() - currentProject.lastSaved.getTime();
        const shouldForceSave = timeSinceLastSave >= this.MAX_UNSAVED_DURATION;
        if (shouldForceSave) {
          this.saveProject();
          return;
        }
        if (this.autoSaveTimer) {
          clearTimeout(this.autoSaveTimer);
        }
        this.autoSaveTimer = setTimeout(() => {
          this.saveProject();
        }, this.AUTO_SAVE_DELAY);
      }
    });
    this.translate.onLangChange.subscribe((e) => this.currentLang.set(e.lang));
  }
  // Helper to generate unique project ID
  generateId() {
    return `project_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
  // Set entire project
  setProject(project) {
    this.project.set(project);
  }
  // Update project metadata
  setProjectName(name) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      projectName: name,
      lastModified: /* @__PURE__ */ new Date()
    }));
    if (name && !this.project().github.repo) {
      let repo = this.generateUrlFragment(name);
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
      if (!/[-_]?\d{4}$/.test(repo)) {
        repo = `${repo}-${currentYear}`;
      }
      this.setGitHubRepo({ repo });
    }
  }
  setProjectPhase(phase) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      phase,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setGitHubRepo(gitHubData) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      github: __spreadValues(__spreadValues({}, curr.github), gitHubData),
      lastModified: /* @__PURE__ */ new Date()
    }));
    if (this.project().github.repo && !this.project().projectName) {
      const name = this.project().github.repo.replace(/-/g, " ").replace(/^./, (char) => char.toUpperCase());
      this.setProjectName(name);
    }
  }
  setCollaborators(collaborators) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      collaborators,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setStorageType(type) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      storageType: type,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setRepoType(type) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      repoType: type,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setPageSha(path, sha, version2 = "prototype", lang = "en") {
    const tree = this.getProjectTree();
    const node = this.findNodeByPath(tree, path, lang);
    if (node?.data) {
      if (!node.data[version2][lang].githubSha) {
        node.data[version2][lang].githubSha = {};
      }
      node.data[version2][lang].githubSha = sha;
      this.project.update((p) => __spreadProps(__spreadValues({}, p), {
        lastModified: /* @__PURE__ */ new Date(),
        projectData: [...p.projectData]
      }));
    }
  }
  setMetadataReview(path, review, promptConfig) {
    const tree = this.getProjectTree();
    const lang = this.fetchService.getLang(path) ?? "en";
    const node = this.findNodeByPath(tree, path, lang);
    if (node?.data) {
      node.data.metadataReview = review;
      this.project.update((p) => __spreadProps(__spreadValues({}, p), {
        lastModified: /* @__PURE__ */ new Date(),
        projectData: [...p.projectData]
      }));
      this.usageService.trackMetadata(this.project().id, this.project().org ?? "DEFAULT", this.project().storageType, path, node.data.metadata?.description, node.data.metadata?.descriptionFR, node.data.metadata?.keywords, node.data.metadata?.keywordsFR, review, promptConfig ?? {}, !promptConfig);
    }
  }
  setExportDate() {
    this.project.update((p) => __spreadProps(__spreadValues({}, p), {
      lastModified: /* @__PURE__ */ new Date(),
      lastExported: /* @__PURE__ */ new Date()
    }));
  }
  setDownloadDate() {
    this.project.update((p) => __spreadProps(__spreadValues({}, p), {
      lastModified: /* @__PURE__ */ new Date(),
      lastDownloaded: /* @__PURE__ */ new Date()
    }));
  }
  setModifiedDate() {
    this.project.update((p) => __spreadProps(__spreadValues({}, p), {
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  // Get project tree
  getProjectTree = computed(() => this.project().projectData);
  setProjectTree(tree) {
    const baselineCount = this.countPages("baseline");
    const inScopeCount = this.countPages("inScope");
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      baselinePages: baselineCount,
      inScopePages: inScopeCount,
      projectData: tree,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  // Count pages
  countPages(mode = "inScope") {
    let count = 0;
    const traverse = (nodes) => {
      for (const node of nodes) {
        if (mode === "inScope" && node.data?.status.inScope)
          count++;
        else if (mode === "baseline") {
          count++;
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    return count;
  }
  setScope(urls) {
    const currentTree = this.project().projectData;
    const traverse = (nodes) => {
      for (const node of nodes) {
        if (node.data?.url && urls.includes(node.data.url)) {
          node.data.status.inScope = true;
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    this.setProjectTree(currentTree);
  }
  // Check if URL already exists in tree
  urlExists(url) {
    const urlLang = this.fetchService.getLang(url);
    if (!urlLang)
      return false;
    const urlPath = this.fetchService.generatePath(url);
    const search = (nodes) => {
      for (const node of nodes) {
        if (node.data?.path[urlLang] === urlPath)
          return true;
        if (node.children?.length && search(node.children))
          return true;
      }
      return false;
    };
    return search(this.project().projectData);
  }
  // TODO: refactor getAllUrls and getAllPages to use new data structure
  getAllPages(lang, version2 = "prototype", scope = "all") {
    const pages = [];
    const traverse = (nodes) => {
      for (const node of nodes) {
        const path = node.data?.path?.[lang] ?? "";
        const h1 = node.data?.[version2]?.[lang]?.h1;
        const url = this.fetchService.generateUrl(path, version2, this.project().github.owner, this.project().github.repo);
        if (scope === "inScope" && path && h1 && url && node.data?.status.inScope) {
          pages.push({ label: h1, path, url });
        } else if (scope === "all" && path && h1 && url) {
          pages.push({ label: h1, path, url });
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    return pages;
  }
  getPairedPages(version2 = "prototype", scope = "all") {
    const pages = [];
    const traverse = (nodes) => {
      for (const node of nodes) {
        const enPath = node.data?.path?.en ?? "";
        const enH1 = node.data?.[version2]?.en?.h1;
        const enUrl = this.fetchService.generateUrl(enPath, version2, this.project().github.owner, this.project().github.repo);
        const frPath = node.data?.path?.fr ?? "";
        const frH1 = node.data?.[version2]?.fr?.h1;
        const frUrl = this.fetchService.generateUrl(frPath, version2, this.project().github.owner, this.project().github.repo);
        if (scope === "inScope" && node.data?.status?.inScope && enPath && enH1 && enUrl && frPath && frH1 && frUrl) {
          pages.push({
            en: { label: enH1, path: enPath, url: enUrl },
            fr: { label: frH1, path: frPath, url: frUrl }
          });
        } else if (scope === "all" && enPath && enH1 && enUrl && frPath && frH1 && frUrl) {
          pages.push({
            en: { label: enH1, path: enPath, url: enUrl },
            fr: { label: frH1, path: frPath, url: frUrl }
          });
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    return pages;
  }
  //Template options
  templateOptions = computed(() => Object.values(PageTemplate).map((key) => ({ value: key, label: this.translate.instant(key) })).sort((a, b) => a.label.localeCompare(b.label, this.translate.currentLang)));
  // Merge new pages into existing tree
  mergePages(newPages) {
    const currentTree = this.project().projectData;
    const merged = this.mergeTreeNodes(currentTree, newPages);
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      projectData: merged,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  // Recursive merge helper
  mergeTreeNodes(current, incoming) {
    const map = /* @__PURE__ */ new Map();
    for (const node of current) {
      if (node.data?.url) {
        map.set(node.data.url, node);
      }
    }
    for (const node of incoming) {
      const url = node.data?.url;
      if (!url)
        continue;
      if (!map.has(url)) {
        map.set(url, node);
      } else {
        const existing = map.get(url);
        if (node.data?.status.inScope && !existing.data?.status.inScope) {
          existing.data = __spreadValues(__spreadValues({}, existing.data), node.data);
        }
        if (node.children?.length) {
          existing.children = this.mergeTreeNodes(existing.children ?? [], node.children);
        }
      }
    }
    return Array.from(map.values());
  }
  //TreeNode lookup
  findNodeByPath(nodes, path, lang = "en") {
    for (const node of nodes) {
      const nodeUrl = node.data.path[lang];
      if (nodeUrl === path) {
        return node;
      }
      if (node.children) {
        const found = this.findNodeByPath(node.children, path, lang);
        if (found)
          return found;
      }
    }
    return null;
  }
  // Get project state for saving (with circular references removed)
  getProjectToSave() {
    const currentProject = this.project();
    return __spreadProps(__spreadValues({}, currentProject), {
      projectData: this.projectStorageService.removeParents(currentProject.projectData)
    });
  }
  /**
   * Save project (manual or auto-save)
   * Cancels any pending auto-save timer
   */
  saveProject() {
    return __async(this, null, function* () {
      if (this.autoSaveTimer) {
        clearTimeout(this.autoSaveTimer);
        this.autoSaveTimer = null;
      }
      this.saveStatus.set("saving");
      const previousLastSaved = this.project().lastSaved;
      try {
        this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
          lastSaved: /* @__PURE__ */ new Date()
        }));
        const project = this.project();
        const success = yield this.projectStorageService.saveProject(project);
        if (success) {
          yield new Promise((resolve) => setTimeout(resolve, 2e3));
          this.saveStatus.set("saved");
          console.log("Project saved successfully");
          return true;
        } else {
          this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
            lastSaved: previousLastSaved
          }));
          this.saveStatus.set("error");
          console.error("Failed to save project");
          return false;
        }
      } catch (error) {
        this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
          lastSaved: previousLastSaved
        }));
        this.saveStatus.set("error");
        console.error("Error saving project:", error);
        return false;
      }
    });
  }
  /**
   * Check if there are unsaved changes
   */
  hasUnsavedChanges() {
    const project = this.project();
    return project.lastModified > project.lastSaved;
  }
  /**
   * Save if there are unsaved changes (used before project switch or app close)
   */
  saveIfNeeded() {
    return __async(this, null, function* () {
      if (this.hasUnsavedChanges()) {
        return yield this.saveProject();
      }
      return true;
    });
  }
  // Export as JSON
  exportProjectAsJson() {
    const project = this.getProjectToSave();
    const data = JSON.stringify(project, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const filename = project.github.repo ?? project.projectName ?? project.id;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  // Import from JSON
  importProjectFromJson(jsonString) {
    try {
      const project = JSON.parse(jsonString);
      if (project.version !== version) {
        console.warn("Incompatible project version. Import skipped.");
        return false;
      }
      project.created = new Date(project.created);
      project.lastModified = new Date(project.lastModified);
      project.lastSaved = new Date(project.lastSaved);
      project.lastExported = project.lastExported ? new Date(project.lastExported) : null;
      this.project.set(project);
      this.saveProject();
      console.log("Project imported successfully");
      return true;
    } catch (error) {
      console.error("Failed to import project:", error);
      return false;
    }
  }
  // Reset project
  resetProject() {
    return __async(this, null, function* () {
      this.saveIfNeeded();
      this.project.set({
        id: this.generateId(),
        key: "autosave",
        version,
        projectName: "",
        phase: ProjectPhase.Draft,
        created: /* @__PURE__ */ new Date(),
        lastModified: /* @__PURE__ */ new Date(),
        lastSaved: /* @__PURE__ */ new Date(),
        lastExported: null,
        lastDownloaded: null,
        storageType: "local",
        repoType: "github",
        collaborators: this.collaboratorService.getInitialCollaborators(),
        baselinePages: 0,
        inScopePages: 0,
        github: {
          owner: environment.defaultOrg,
          repo: "",
          branch: "main",
          hasBaselineRepo: false
        },
        projectData: []
      });
      yield this.saveProject();
      console.log("Project reset");
    });
  }
  flattenTree() {
    const tree = this.project().projectData;
    const flatNodes = [];
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        if (!data)
          continue;
        const lang = data.lang ?? "en";
        flatNodes.push({
          //English
          enPath: data.path.en,
          enH1: data.prototype?.en.h1 ?? "",
          enDoubleH1: data.prototype?.en.doubleH1 ?? "",
          enVanity: data.vanity?.en ?? [],
          //French
          frPath: data.path.fr,
          frH1: data.prototype?.fr.h1 ?? "",
          frDoubleH1: data.prototype?.fr.doubleH1 ?? "",
          frVanity: data.vanity?.fr ?? [],
          //Status
          inScope: data.status.inScope,
          isNew: data.status.isNew,
          isMoved: data.status.isMoved,
          isROT: data.status.isROT,
          isArchived: data.prototype?.en.isArchived ?? data.prototype?.fr.isArchived ?? false,
          noindex: data.prototype?.en.noindex ?? data.prototype?.fr.noindex ?? false,
          //Actions
          actions: this.computeActions(data),
          //Problems
          isOrphan: data.live?.en.isOrphan ?? data.live?.fr.isOrphan ?? false,
          //Notes
          issue: data.notes?.issue ?? "",
          solution: data.notes?.solution ?? "",
          //Data
          template: data.prototype?.[lang].template ?? "",
          linksToPortal: data.live?.en.linksToPortal ?? data.live?.fr.linksToPortal ?? false,
          hasChatbot: data.live?.en.hasChatbot ?? data.live?.fr.hasChatbot ?? false,
          task: data.task?.[lang] ?? [],
          visits: data.visits?.[lang] ?? void 0,
          updLink: "",
          wordCount: data.live?.[lang].wordCount,
          fleschKincaid: data.prototype?.[lang].fleschKincaid,
          gunningFog: data.prototype?.[lang].gunningFog,
          linkCount: data.live?.[lang].linkCount,
          phoneNumbers: [.../* @__PURE__ */ new Set([...data.live?.en.phoneNumbers ?? [], ...data.live?.fr.phoneNumbers ?? []])],
          lastModified: data.live?.[lang]?.lastModified ? new Date(data.live[lang].lastModified) : void 0,
          lastPublished: data.live?.[lang]?.lastPublished ? new Date(data.live[lang].lastPublished) : void 0,
          //Owner
          owner: data.live?.[lang].owner ?? "",
          email: data.live?.[lang].email ?? "",
          //Metadata (prototype)
          titleEN: data.prototype?.en.title ?? "",
          descriptionEN: data.prototype?.en.description ?? "",
          keywordsEN: data.prototype?.en.keywords ?? "",
          titleFR: data.prototype?.fr.title ?? "",
          descriptionFR: data.prototype?.fr.description ?? "",
          keywordsFR: data.prototype?.fr.keywords ?? "",
          //AI Metadata
          aiDescriptionEN: data.metadataReview?.en.description,
          aiKeywordsEN: data.metadataReview?.en.keywords,
          aiDescriptionFR: data.metadataReview?.fr.description,
          aiKeywordsFR: data.metadataReview?.fr.keywords,
          aiModel: data.metadataReview?.model,
          aiGeneratedAt: data.metadataReview?.generatedAt
        });
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    return flatNodes;
  }
  treeTableColumns = computed(() => {
    const lang = this.currentLang().startsWith("fr") ? "fr" : "en";
    const enPrimary = lang !== "fr" ? true : false;
    const frPrimary = lang === "fr" ? true : false;
    const enData = [
      { field: "enH1", label: this.translate.instant("inventory.header.enH1"), type: "text", frozen: enPrimary, group: "english", visibleByDefault: enPrimary, dataSection: ["prototype", "en", "h1"] },
      { field: "enDoubleH1", label: this.translate.instant("inventory.header.enDoubleH1"), type: "text", group: "english", visibleByDefault: false, dataSection: ["prototype", "en", "doubleH1"] },
      { field: "enPath", label: this.translate.instant("inventory.header.enPath"), type: "url", group: "english", visibleByDefault: false, dataSection: ["path", "en"] },
      { field: "enVanity", label: this.translate.instant("inventory.header.enVanity"), type: "array", group: "english", visibleByDefault: false, dataSection: ["vanity", "en"] }
    ];
    const frData = [
      { field: "frH1", label: this.translate.instant("inventory.header.frH1"), type: "text", frozen: frPrimary, group: "french", visibleByDefault: frPrimary, dataSection: ["prototype", "fr", "h1"] },
      { field: "frDoubleH1", label: this.translate.instant("inventory.header.frDoubleH1"), type: "text", group: "french", visibleByDefault: false, dataSection: ["prototype", "fr", "doubleH1"] },
      { field: "frPath", label: this.translate.instant("inventory.header.frPath"), type: "url", group: "french", visibleByDefault: false, dataSection: ["path", "fr"] },
      { field: "frVanity", label: this.translate.instant("inventory.header.frVanity"), type: "array", group: "french", visibleByDefault: false, dataSection: ["vanity", "fr"] }
    ];
    const order = lang === "fr" ? [frData, enData] : [enData, frData];
    const langColumns = order.flat();
    return [
      ...langColumns,
      //Status
      { field: "inScope", label: this.translate.instant("inventory.header.inScope"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "inScope"] },
      { field: "isNew", label: this.translate.instant("inventory.header.isNew"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "isNew"] },
      { field: "isMoved", label: this.translate.instant("inventory.header.isMoved"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "isMoved"] },
      { field: "isROT", label: this.translate.instant("inventory.header.isROT"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "isROT"] },
      { field: "isArchived", label: this.translate.instant("inventory.header.archiveStatus"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["prototype", "lang", "isArchived"] },
      { field: "noindex", label: this.translate.instant("inventory.header.noindex"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["prototype", "lang", "noindex"] },
      //Actions
      { field: "actions", label: this.translate.instant("inventory.header.actions"), type: "tags", group: "actions", visibleByDefault: false, dataSection: [] },
      //Notes
      { field: "issue", label: this.translate.instant("inventory.header.issue"), type: "textArea", group: "notes", visibleByDefault: false, dataSection: ["notes", "issue"] },
      { field: "solution", label: this.translate.instant("inventory.header.solution"), type: "textArea", group: "notes", visibleByDefault: false, dataSection: ["notes", "solution"] },
      //Problems
      { field: "isOrphan", label: this.translate.instant("inventory.header.isOrphan"), type: "boolean", group: "problems", visibleByDefault: true, dataSection: ["prototype", "lang", "isOrphan"] },
      //ADD 404's!!!
      //Data
      { field: "template", label: this.translate.instant("inventory.header.template"), type: "template", group: "pageData", visibleByDefault: true, dataSection: ["prototype", "lang", "template"] },
      { field: "linksToPortal", label: this.translate.instant("inventory.header.linksToPortal"), type: "boolean", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "hasChatbot", label: this.translate.instant("inventory.header.hasChatbot"), type: "boolean", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "task", label: this.translate.instant("inventory.header.task"), type: "array", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "visits", label: this.translate.instant("inventory.header.visits"), type: "number", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "updLink", label: this.translate.instant("inventory.header.updLink"), type: "upd", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "fleschKincaid", label: this.translate.instant("common.readability.fleschKincaid"), type: "number", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "gunningFog", label: this.translate.instant("common.readability.gunningFog"), type: "number", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "wordCount", label: this.translate.instant("inventory.header.wordCount"), type: "number", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "linkCount", label: this.translate.instant("inventory.header.linkCount"), type: "number", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "phoneNumbers", label: this.translate.instant("inventory.header.phoneNumbers"), type: "array", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "lastModified", label: this.translate.instant("inventory.header.lastModified"), type: "date", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "lastPublished", label: this.translate.instant("inventory.header.lastPublished"), type: "date", group: "pageData", visibleByDefault: false, dataSection: [] },
      //Owner
      { field: "owner", label: this.translate.instant("inventory.header.owner"), type: "text", group: "owner", visibleByDefault: true, dataSection: [] },
      { field: "email", label: this.translate.instant("inventory.header.email"), type: "text", group: "owner", visibleByDefault: false, dataSection: [] },
      //Metadata & AI metadata
      { field: "titleEN", label: this.translate.instant("inventory.header.titleEN"), type: "text", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "titleFR", label: this.translate.instant("inventory.header.titleFR"), type: "text", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "descriptionEN", label: this.translate.instant("inventory.header.descriptionEN"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiDescriptionEN", label: this.translate.instant("inventory.header.ai.descriptionEN"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "descriptionFR", label: this.translate.instant("inventory.header.descriptionFR"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiDescriptionFR", label: this.translate.instant("inventory.header.ai.descriptionFR"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "keywordsEN", label: this.translate.instant("inventory.header.keywordsEN"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiKeywordsEN", label: this.translate.instant("inventory.header.ai.keywordsEN"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "keywordsFR", label: this.translate.instant("inventory.header.keywordsFR"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiKeywordsFR", label: this.translate.instant("inventory.header.ai.keywordsFR"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      //AI Metadata
      { field: "aiModel", label: this.translate.instant("inventory.header.ai.model"), type: "text", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiGeneratedAt", label: this.translate.instant("inventory.header.ai.date"), type: "date", group: "metadata", visibleByDefault: false, dataSection: [] }
    ];
  });
  computeActions(data) {
    const actions = [];
    const isNew = data.status.isNew;
    const isROT = data.status.isROT;
    const is404Proto = data.prototype?.en.is404;
    const is404Live = data.live?.en.is404;
    const isMoved = data.status.isMoved;
    const parentProto = data.prototype?.en.parentPath;
    const parentLive = data.live?.en.parentPath;
    if (isROT && !is404Live) {
      actions.push({ key: marker("actions.isROT.unpublish"), severity: "danger" });
    } else if (isNew) {
      if (!is404Live) {
        actions.push({ key: marker("actions.isNew.monitor"), severity: "secondary" });
      } else if (is404Proto) {
        actions.push({ key: marker("actions.isNew.createProto"), severity: "info" });
      } else if (!is404Proto) {
        actions.push({ key: marker("actions.isNew.createLive"), severity: "info" });
      }
    } else if (isMoved && parentProto !== parentLive) {
      actions.push({ key: marker("actions.isMoved.movePage"), severity: "warn" });
    }
    return actions;
  }
  exportTreeAsCsv() {
    const tree = this.project().projectData;
    const rows = [];
    rows.push([
      //Current language
      "Page title (h1)",
      "Section title (double h1)",
      "URL",
      //Opposite language
      "Opposite language title",
      "Opposite language URL",
      //GitHub
      "Prototype Url",
      //Status
      "In Scope",
      "Is Orphan",
      "Is New",
      "Is Moved",
      "Is ROT",
      "Portal link",
      "Archived",
      //Owner
      "Owner",
      "Email",
      //Data
      "Template",
      "Task",
      "Visits (last 52 weeks)",
      //Metadata
      "Title",
      "Description",
      "Keywords",
      //Move info
      "Original Parent URL"
    ].join(","));
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        if (!data)
          continue;
        rows.push([
          //Current language
          data.h1 ?? "",
          data.doubleH1 ?? "",
          data.url ?? "",
          //Opposite language
          `"${data.metadata?.oppTitle ?? ""}"`,
          data.metadata?.oppUrl ?? "",
          //GitHub
          //this.generatePrototypeUrl(data.url),
          //Status
          data.status.inScope ? "Yes" : "No",
          data.status.isOrphan ? "Yes" : "No",
          data.status.isNew ? "Yes" : "No",
          data.status.isMoved ? "Yes" : "No",
          data.status.isROT ? "Yes" : "No",
          data.status.linksToPortal ? "Yes" : "No",
          data.status.archiveStatus ?? "",
          //Problems
          //Owner
          data.metadata?.owner ?? "",
          data.metadata?.email ?? "",
          //Data
          data.metadata?.template ?? "",
          data.metadata?.task ?? "",
          data.metadata?.visits ?? "",
          //Metadata
          data.metadata?.title ?? "",
          data.metadata?.description ?? "",
          data.metadata?.keywords ?? "",
          //Move info
          data.originalParent ?? ""
        ].join(","));
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const proj = this.project();
    const filename = proj.github.repo ?? proj.projectName ?? proj.id;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-content-inventory.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  //For tree testing in Optimal Workshop or similar tools
  exportAsTreeCsv() {
    const tree = this.project().projectData;
    const getMaxDepth = (nodes, depth = 0) => {
      let maxDepth2 = depth;
      for (const node of nodes) {
        if (node.children?.length) {
          maxDepth2 = Math.max(maxDepth2, getMaxDepth(node.children, depth + 1));
        }
      }
      return maxDepth2;
    };
    const maxDepth = getMaxDepth(tree);
    const rows = [];
    const headers = [];
    for (let i = 0; i <= maxDepth; i++) {
      if (i === 0) {
        headers.push("Top level");
      } else if (i === 1) {
        headers.push("2nd level");
      } else if (i === 2) {
        headers.push("3rd level");
      } else {
        headers.push(`${i + 1}th level`);
      }
    }
    rows.push(headers.join(","));
    const walk = (nodes, depth) => {
      for (const node of nodes) {
        const data = node.data;
        if (!data)
          continue;
        const row = new Array(maxDepth + 1).fill("");
        row[depth] = `"${data.h1 ?? ""}"`;
        rows.push(row.join(","));
        if (node.children?.length) {
          walk(node.children, depth + 1);
        }
      }
    };
    walk(tree, 0);
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const proj = this.project();
    const filename = proj.github.repo ?? proj.projectName ?? proj.id;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-tree-testing.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  // Generate url fragment (for repo names and new pages)
  generateUrlFragment(h1) {
    const stopWords = [
      // English
      "a",
      "an",
      "the",
      "and",
      "or",
      "but",
      "in",
      "on",
      "at",
      "to",
      "for",
      "of",
      "with",
      // French
      "le",
      "la",
      "les",
      "un",
      "une",
      "des",
      "de",
      "du",
      "et",
      "ou",
      "mais",
      "dans",
      "sur",
      "a",
      "au",
      "aux",
      "pour",
      "avec"
    ];
    return h1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\b(?:l|d|n|s|c|j|m|t|qu)'/gi, "").toLowerCase().replace(/[^\w\s-]/g, "").split(/\s+/).filter((word) => word.length > 0 && !stopWords.includes(word)).join("-");
  }
  deleteNodes(selectedPages, canDeleteRoot = false) {
    const projectTree = this.getProjectTree();
    const lang = this.detectPrimaryLanguage();
    for (const page of selectedPages) {
      const path = lang === "fr" ? page.frPath : page.enPath;
      const nodeToDelete = this.findNodeByPath(projectTree, path, lang);
      if (!nodeToDelete) {
        console.warn(`Node not found for URL: ${path}`);
        continue;
      }
      const rootIndex = this.project().projectData.findIndex((n) => n === nodeToDelete);
      if (rootIndex > -1) {
        if (!canDeleteRoot) {
          console.warn("Cannot delete root node.");
          continue;
        }
        projectTree.splice(rootIndex, 1);
        console.log("Deleted root node at index:", rootIndex);
        continue;
      }
      const findAndDelete = (nodes) => {
        for (const node of nodes) {
          const children = node.children ?? [];
          const childIndex = children.findIndex((c) => c === nodeToDelete);
          if (childIndex > -1) {
            children.splice(childIndex, 1);
            return true;
          }
          if (children.length && findAndDelete(children)) {
            return true;
          }
        }
        return false;
      };
      findAndDelete(projectTree);
    }
    this.setProjectTree(projectTree);
  }
  // Check for child pages that will be deleted (so component UI can display a warning)
  checkDeletionImpact(selectedPages) {
    const projectTree = this.getProjectTree();
    const lang = this.detectPrimaryLanguage();
    const selectedUrls = new Set(lang === "fr" ? selectedPages.map((p) => p.frPath) : selectedPages.map((p) => p.enPath));
    const additionalPages = [];
    for (const page of selectedPages) {
      const path = lang === "fr" ? page.frPath : page.enPath;
      const nodeToDelete = this.findNodeByPath(projectTree, path, lang);
      if (!nodeToDelete)
        continue;
      const descendants = this.collectAllDescendants(nodeToDelete);
      for (const desc of descendants) {
        const url = desc.data?.path[lang];
        if (url && !selectedUrls.has(url)) {
          additionalPages.push({
            url,
            h1: desc.data?.prototype?.[lang].h1 ?? "",
            inScope: desc.data?.status.inScope ?? false
          });
          selectedUrls.add(url);
        }
      }
    }
    return additionalPages;
  }
  // Used to check if child pages will be deleted during a delete operation
  collectAllDescendants(node) {
    const descendants = [];
    const collect = (n) => {
      if (n.children) {
        for (const child of n.children) {
          descendants.push(child);
          collect(child);
        }
      }
    };
    collect(node);
    return descendants;
  }
  deleteNode(nodeToDelete) {
    const projectTree = this.getProjectTree();
    const rootIndex = this.project().projectData.findIndex((n) => n === nodeToDelete);
    if (rootIndex > -1) {
      projectTree.splice(rootIndex, 1);
      console.log("Deleted root node at index:", rootIndex);
    }
    const findAndDelete = (nodes) => {
      for (const node of nodes) {
        const children = node.children ?? [];
        const childIndex = children.findIndex((c) => c === nodeToDelete);
        if (childIndex > -1) {
          children.splice(childIndex, 1);
          return true;
        }
        if (children.length && findAndDelete(children)) {
          return true;
        }
      }
      return false;
    };
    findAndDelete(projectTree);
    this.setProjectTree(projectTree);
  }
  //Store settings for inventory table
  selectedInventoryView = "table";
  // Get breadcrumb chain by url
  getBreadcrumbChain(path, lang = "en") {
    const breadcrumbs = [];
    const findAndBuildChain = (nodes, targetPath, ancestors = []) => {
      for (const node of nodes) {
        if (node.data?.path[lang] === targetPath) {
          for (const ancestor of ancestors) {
            if (ancestor.data?.path[lang]) {
              const url = this.fetchService.generateUrl(ancestor.data.path[lang], "live");
              const h1 = ancestor.data.live?.[lang].h1;
              breadcrumbs.push({
                title: h1 ?? "",
                link: url ?? ""
              });
            }
          }
          return true;
        } else if (node.children?.length) {
          const found = findAndBuildChain(node.children, targetPath, [...ancestors, node]);
          if (found)
            return true;
        }
      }
      return false;
    };
    findAndBuildChain(this.project().projectData, path);
    return breadcrumbs;
  }
  refreshNode(node, version2, fetchLive = false) {
    return __async(this, null, function* () {
      const source = fetchLive ? "live" : version2;
      const data = node.data;
      const { owner, repo, branch } = this.project().github;
      const enUrl = this.fetchService.generateUrl(data.path.en, source, owner, repo);
      const frUrl = this.fetchService.generateUrl(data.path.fr, source, owner, repo);
      console.log(`Refreshing ${enUrl}`);
      const liveEnUrl = this.fetchService.generateUrl(data.path.en, "live");
      const liveFrUrl = this.fetchService.generateUrl(data.path.fr, "live");
      yield this.updService.fetchData();
      yield this.airtableService.fetchTasks();
      yield this.vanityService.fetchData();
      if (enUrl) {
        try {
          const doc = yield this.fetchService.fetchContent(enUrl, "both", 2, "none");
          const pageData = yield this.fetchService.extractPageMetadata(doc, enUrl);
          const jsonData = yield (() => __async(this, null, function* () {
            try {
              return liveEnUrl ? yield this.fetchService.fetchPageJSON(liveEnUrl) : void 0;
            } catch {
              return void 0;
            }
          }))();
          const parentUrl = pageData.parentPath ? this.fetchService.generateUrl(pageData.parentPath, source, owner, repo) : void 0;
          const parentDoc = yield (() => __async(this, null, function* () {
            try {
              return parentUrl ? yield this.fetchService.fetchContent(parentUrl, "both", 2, "none") : void 0;
            } catch {
              return void 0;
            }
          }))();
          const parentLinks = parentDoc && liveEnUrl ? this.fetchService.getLinks(parentDoc, liveEnUrl) : void 0;
          const lastModified = source !== "live" ? yield this.exportGitHubService.getLastModified(enUrl, owner, repo, branch, this.exportGitHubService.token() ?? void 0) : void 0;
          const updated = __spreadValues(__spreadProps(__spreadValues({
            h1: pageData.h1,
            doubleH1: pageData.doubleH1,
            //Content
            contentHash: pageData.contentHash,
            lastChecked: pageData.lastChecked,
            //Metadata
            title: pageData.title,
            description: pageData.description,
            keywords: pageData.keywords,
            //Status
            is404: false
          }, parentLinks ? { isOrphan: !parentLinks.some((link) => this.getPath(link) === this.getPath(liveEnUrl ?? "")) } : {}), {
            noindex: pageData.noindex ?? false,
            isArchived: pageData.isArchived ?? false,
            linksToPortal: pageData.linksToPortal ?? false,
            hasChatbot: pageData.hasChatbot ?? false,
            //Data
            parentPath: pageData.parentPath,
            wordCount: pageData.wordCount,
            linkCount: pageData.linkCount,
            template: jsonData?.isFreestyle ? PageTemplate.Freestyle : pageData.template,
            fleschKincaid: pageData.fleschKincaid,
            gunningFog: pageData.gunningFog
          }), source === "live" && jsonData ? {
            //jrc:content.json
            owner: jsonData?.owner,
            email: jsonData?.email,
            lastPublished: jsonData?.lastPublished,
            lastModified: jsonData?.lastModified
          } : {
            lastModified
          });
          data[version2].en = __spreadValues(__spreadValues({}, data[version2].en), updated);
        } catch {
          data[version2].en = __spreadProps(__spreadValues({}, data[version2].en), { lastChecked: (/* @__PURE__ */ new Date()).toISOString(), is404: true });
        }
      }
      if (frUrl) {
        try {
          const doc = yield this.fetchService.fetchContent(frUrl, "both", 2, "none");
          const pageData = yield this.fetchService.extractPageMetadata(doc, frUrl);
          const jsonData = yield (() => __async(this, null, function* () {
            try {
              return liveFrUrl ? yield this.fetchService.fetchPageJSON(liveFrUrl) : void 0;
            } catch {
              return void 0;
            }
          }))();
          const parentUrl = pageData.parentPath ? this.fetchService.generateUrl(pageData.parentPath, source, owner, repo) : void 0;
          const parentDoc = yield (() => __async(this, null, function* () {
            try {
              return parentUrl ? yield this.fetchService.fetchContent(parentUrl, "both", 2, "none") : void 0;
            } catch {
              return void 0;
            }
          }))();
          const parentLinks = parentDoc && liveFrUrl ? this.fetchService.getLinks(parentDoc, liveFrUrl) : void 0;
          const lastModified = source !== "live" ? yield this.exportGitHubService.getLastModified(frUrl, owner, repo, branch, this.exportGitHubService.token() ?? void 0) : void 0;
          const updated = __spreadValues(__spreadProps(__spreadValues({
            h1: pageData.h1,
            doubleH1: pageData.doubleH1,
            //Content
            contentHash: pageData.contentHash,
            lastChecked: pageData.lastChecked,
            //Metadata
            title: pageData.title,
            description: pageData.description,
            keywords: pageData.keywords,
            //Status
            is404: false
          }, parentLinks ? { isOrphan: !parentLinks.some((link) => this.getPath(link) === this.getPath(liveFrUrl ?? "")) } : {}), {
            noindex: pageData.noindex ?? false,
            isArchived: pageData.isArchived ?? false,
            linksToPortal: pageData.linksToPortal ?? false,
            hasChatbot: pageData.hasChatbot ?? false,
            //Data
            parentPath: pageData.parentPath,
            wordCount: pageData.wordCount,
            linkCount: pageData.linkCount,
            template: jsonData?.isFreestyle ? PageTemplate.Freestyle : pageData.template,
            fleschKincaid: pageData.fleschKincaid,
            gunningFog: pageData.gunningFog
          }), source === "live" && jsonData ? {
            //jrc:content.json
            owner: jsonData?.owner,
            email: jsonData?.email,
            lastPublished: jsonData?.lastPublished,
            lastModified: jsonData?.lastModified
          } : {
            lastModified
          });
          data[version2].fr = __spreadValues(__spreadValues({}, data[version2].fr), updated);
        } catch {
          data[version2].fr = __spreadProps(__spreadValues({}, data[version2].fr), { lastChecked: (/* @__PURE__ */ new Date()).toISOString(), is404: true });
        }
      }
      data.visits = {
        en: this.updService.findVisitsByUrl(liveEnUrl.replace("https://", "")) ?? -1,
        fr: this.updService.findVisitsByUrl(liveFrUrl.replace("https://", "")) ?? -1
      };
      data.task = {
        en: this.airtableService.findTaskNamesByUrl(liveEnUrl, "en"),
        fr: this.airtableService.findTaskNamesByUrl(liveFrUrl, "fr")
      };
      data.vanity = {
        en: this.vanityService.findVanitiesByDestination(liveEnUrl ?? ""),
        fr: this.vanityService.findVanitiesByDestination(liveFrUrl ?? "")
      };
      this.setModifiedDate();
    });
  }
  refreshAll(nodes, version2, onlyNeverChecked = false, fetchLive = false) {
    return __async(this, null, function* () {
      for (const node of nodes) {
        const needsRefresh = onlyNeverChecked ? !node.data?.[version2]?.en?.lastChecked || !node.data?.[version2]?.fr?.lastChecked : true;
        if (needsRefresh) {
          yield this.refreshNode(node, version2, fetchLive);
        }
        if (node.children?.length) {
          yield this.refreshAll(node.children, version2, onlyNeverChecked, fetchLive);
        }
      }
    });
  }
  getPath(url, live = true) {
    try {
      let pathName = new URL(url).pathname;
      if (!live) {
        pathName = "/" + pathName.split("/").slice(2).join("/");
      }
      return pathName;
    } catch {
      return url;
    }
  }
  //TODO: automate whatever we can!
  createNode(parent) {
    const date = Date.now().toString();
    const parentPathEN = parent.data?.path.en ?? "";
    const parentPathFR = parent.data?.path.fr ?? "";
    const placeholderPathEN = parentPathEN.replace(".html", `/new-page-${date}.html`);
    const placeholderPathFR = parentPathFR.replace(".html", `/nouvelle-page-${date}.html`);
    const enData = {
      h1: "New page",
      doubleH1: parent.data?.prototype.en.doubleH1 ?? void 0,
      //Content
      contentHash: void 0,
      lastChecked: void 0,
      githubSha: void 0,
      //Metadata
      title: "",
      description: "",
      keywords: "",
      //Status
      is404: true,
      isOrphan: false,
      noindex: false,
      isArchived: false,
      linksToPortal: false,
      hasChatbot: false,
      //jrc:content.json
      owner: parent.data.prototype.en.owner ?? "",
      email: parent.data.prototype.en.email ?? "",
      lastPublished: void 0,
      lastModified: void 0,
      //Data
      parentPath: parentPathEN,
      wordCount: 0,
      linkCount: 0,
      fleschKincaid: 0,
      gunningFog: 0,
      phoneNumbers: [],
      template: PageTemplate.Content,
      // Data from problem assistant
      problem: void 0
    };
    const frData = __spreadProps(__spreadValues({}, enData), {
      h1: "Nouvelle page",
      doubleH1: parent.data?.prototype.fr.doubleH1 ?? void 0,
      parentPath: parentPathFR
    });
    const lang = parent.data.lang;
    const data = {
      lang,
      path: { en: placeholderPathEN, fr: placeholderPathFR },
      task: { en: [], fr: [] },
      visits: { en: -1, fr: -1 },
      vanity: { en: [], fr: [] },
      status: {
        inScope: true,
        isNew: true,
        isMoved: false,
        isROT: false
      },
      baseline: { en: enData, fr: frData },
      live: { en: enData, fr: frData },
      prototype: { en: enData, fr: frData },
      metadataReview: void 0,
      notes: void 0,
      isContainer: false,
      isCrawled: false
    };
    const node = {
      label: lang === "fr" ? "Nouvelle page" : "New Page",
      data,
      expanded: true,
      children: [],
      parent
    };
    parent.children = parent.children ?? [];
    parent.children.push(node);
    this.setProjectTree([...this.getProjectTree()]);
    return node;
  }
  // Get first URL from project to determine primary language
  detectPrimaryLanguage() {
    const nodes = this.getProjectTree();
    if (nodes.length > 0 && nodes[0].children && nodes[0].children.length > 0) {
      if (nodes[0].children[0].data.lang) {
        return nodes[0].children[0].data.lang;
      }
      const firstUrl = nodes[0].children[0].data?.url ?? "";
      return firstUrl.includes("/en/") || firstUrl.includes("/en.html") ? "en" : "fr";
    }
    return "en";
  }
  // Move a node to a different parent
  moveNode(node, newParent) {
    if (node === newParent || this.isAncestor(newParent, node)) {
      return "circular";
    }
    if (node.parent) {
      node.parent.children = node.parent.children?.filter((c) => c !== node) ?? [];
    } else {
      const tree = this.getProjectTree();
      const index = tree.indexOf(node);
      if (index > -1)
        tree.splice(index, 1);
    }
    newParent.children = newParent.children ?? [];
    newParent.children.push(node);
    node.parent = newParent;
    this.applyMoveResult(node, newParent);
    return "success";
  }
  isAncestor(node, potentialAncestor) {
    let current = node.parent;
    while (current) {
      if (current === potentialAncestor)
        return true;
      current = current.parent;
    }
    return false;
  }
  applyMoveResult(node, newParent) {
    const previousMoveStatus = node.data.status.isMoved;
    const pathParent = this.resolveNonContainerParent(newParent);
    node.data.prototype.en.parentPath = pathParent?.data?.path.en ?? "";
    node.data.prototype.fr.parentPath = pathParent?.data?.path.fr ?? "";
    const enMoved = this.getPath(node.data.prototype.en.parentPath) !== this.getPath(node.data.baseline.en.parentPath ?? "");
    const frMoved = this.getPath(node.data.prototype.fr.parentPath) !== this.getPath(node.data.baseline.fr.parentPath ?? "");
    node.data.status.isMoved = enMoved || frMoved;
    if (previousMoveStatus !== node.data.status.isMoved) {
      this.setModifiedDate();
    }
  }
  resolveNonContainerParent(node) {
    let current = node;
    while (current?.data?.isContainer) {
      current = current.parent;
    }
    return current;
  }
  // Reorder a node among its siblings
  reorderNode(node, direction) {
    if (!node.parent)
      return "no-parent";
    const siblings = node.parent.children ?? [];
    const index = siblings.indexOf(node);
    if (direction === "left" && index === 0)
      return "at-boundary";
    if (direction === "right" && index === siblings.length - 1)
      return "at-boundary";
    const swapIndex = direction === "left" ? index - 1 : index + 1;
    [siblings[swapIndex], siblings[index]] = [siblings[index], siblings[swapIndex]];
    this.setProjectTree([...this.getProjectTree()]);
    this.setModifiedDate();
    return "success";
  }
  getSiblings(node) {
    if (!node.parent)
      return [];
    return node.parent.children ?? [];
  }
  // Clone so we don't edit the working copy if the IA tree
  cloneTree(nodes) {
    const clonedTree = structuredClone(nodes);
    this.projectStorageService.rebuildParents(clonedTree, void 0);
    return clonedTree;
  }
  // Restore moved pages to their original position and remove new pages
  getBaselineTree(nodes, mode = "full") {
    const clonedTree = this.cloneTree(nodes);
    const lang = this.detectPrimaryLanguage();
    if (mode === "full") {
      const root = this.findNodeWhere(clonedTree, (n) => n.data?.baseline?.[lang]?.parentPath == null);
      if (root?.parent) {
        root.parent.children = root.parent.children?.filter((c) => c !== root) ?? [];
        root.parent = void 0;
        clonedTree.unshift(root);
      }
    }
    let hasMovedNodes = true;
    while (hasMovedNodes) {
      const movedNodes = [];
      this.collectMovedNodes(clonedTree, movedNodes, true, mode);
      if (movedNodes.length === 0) {
        hasMovedNodes = false;
      }
      for (const { node, originalParentUrl } of movedNodes) {
        const originalParent = originalParentUrl === "" ? null : this.findNodeByPath(clonedTree, originalParentUrl, lang);
        if (originalParent) {
          originalParent.children ??= [];
          originalParent.children.push(node);
          node.parent = originalParent;
        }
      }
    }
    this.removeNewPages(clonedTree);
    return clonedTree;
  }
  // Remove ROT pages
  getFinalTree(nodes) {
    const clonedTree = this.cloneTree(nodes);
    this.removeROTPages(clonedTree);
    return clonedTree;
  }
  // Remove collapsed or hidden pages
  getDisplayTree(nodes, collapsedUrls, hiddenUrls, navUrls) {
    const clonedTree = this.cloneTree(nodes);
    if (navUrls.size > 0)
      this.applyNavState(clonedTree, navUrls);
    if (hiddenUrls.size > 0)
      this.applyHiddenState(clonedTree, hiddenUrls);
    if (collapsedUrls.size > 0)
      this.applyCollapsedState(clonedTree, collapsedUrls);
    return clonedTree;
  }
  collectMovedNodes(nodes, movedNodes, isTopLevel = false, mode = "full") {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      const lang = this.detectPrimaryLanguage();
      const currentParentPath = node.parent?.data?.path[lang] ?? "";
      const originalParentPath = this.getPath(node.data?.baseline?.[lang]?.parentPath, false) ?? "";
      if (isTopLevel && mode === "custom" && i === 0) {
        if (node.children?.length) {
          this.collectMovedNodes(node.children, movedNodes, false, mode);
        }
        continue;
      }
      if (currentParentPath !== originalParentPath) {
        movedNodes.push({
          node,
          originalParentUrl: originalParentPath
        });
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.collectMovedNodes(node.children, movedNodes);
      }
    }
  }
  removeNewPages(nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (node.data?.status.isNew) {
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.removeNewPages(node.children);
      }
    }
  }
  removeROTPages(nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (node.data?.status.isROT) {
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.removeROTPages(node.children);
      }
    }
  }
  findNodeWhere(nodes, condition) {
    for (const node of nodes) {
      if (condition(node))
        return node;
      if (node.children?.length) {
        const found = this.findNodeWhere(node.children, condition);
        if (found)
          return found;
      }
    }
    return null;
  }
  applyCollapsedState(nodes, collapsedUrls) {
    const lang = this.detectPrimaryLanguage();
    for (const node of nodes) {
      if (collapsedUrls.has(node.data?.path[lang])) {
        node.data.collapsedChildren = node.children ?? [];
        node.children = [];
      } else if (node.children?.length) {
        this.applyCollapsedState(node.children, collapsedUrls);
      }
    }
  }
  applyHiddenState(nodes, hiddenUrls) {
    const lang = nodes[0].data.lang;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (hiddenUrls.has(node.data?.path[lang])) {
        if (node.parent) {
          node.parent.data.hiddenChildrenUrls = node.parent.data.hiddenChildrenUrls ?? [];
          node.parent.data.hiddenChildrenUrls.push(node.data.path[lang]);
        }
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.applyHiddenState(node.children, hiddenUrls);
      }
    }
  }
  applyNavState(nodes, navUrls) {
    const lang = nodes[0]?.data.lang;
    const root = this.project().projectData;
    for (const node of nodes) {
      const path = node.data?.path[lang];
      if (navUrls.has(path)) {
        const linkedPaths = navUrls.get(path);
        const rescueNodes = linkedPaths.map((linkedPath) => this.findNodeByPath(root, linkedPath, lang)).filter((match) => !!match).map((match) => this.duplicateNode(match, node));
        node.children = [...node.children ?? [], ...rescueNodes];
      }
      if (node.children?.length) {
        this.applyNavState(node.children, navUrls);
      }
    }
  }
  duplicateNode(node, newParent) {
    const clone = structuredClone(node);
    clone.children = [];
    clone.parent = newParent;
    const prefixLangData = (langData, prefix) => __spreadProps(__spreadValues({}, langData), {
      h1: `${prefix}${langData.h1}`
    });
    clone.data = __spreadProps(__spreadValues({}, clone.data), {
      live: {
        en: prefixLangData(clone.data.live.en, "Rescue: "),
        fr: prefixLangData(clone.data.live.fr, "Sauvetage : ")
      },
      baseline: {
        en: prefixLangData(clone.data.baseline.en, "Rescue: "),
        fr: prefixLangData(clone.data.baseline.fr, "Sauvetage : ")
      },
      prototype: {
        en: prefixLangData(clone.data.prototype.en, "Rescue: "),
        fr: prefixLangData(clone.data.prototype.fr, "Sauvetage : ")
      },
      isNavChild: true
      // not editable, different colour
    });
    return clone;
  }
  static \u0275fac = function ProjectStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectStateService, factory: _ProjectStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/treenode-style.service.ts
var TreeNodeStyleService = class _TreeNodeStyleService {
  theme = inject(UserSettingsService);
  //TreeNode styles
  updateNodeStyles(nodes, level = 0, applyStatusColors = true) {
    if (!nodes)
      return;
    for (const node of nodes) {
      const borderStyle = "border-2 border-primary border-round shadow-2";
      let bgStyle;
      if (!node.data?.status.inScope || node.data?.isContainer) {
        bgStyle = this.contextStyles["template"];
      } else if (node.data?.isNavChild) {
        bgStyle = this.contextStyles["navChild"];
      } else if (node.data?.status.isNew && applyStatusColors) {
        bgStyle = this.contextStyles["new"];
      } else if (node.data?.status.isROT && applyStatusColors) {
        bgStyle = this.contextStyles["rot"];
      } else if (node.data?.status.isMoved && applyStatusColors) {
        bgStyle = this.contextStyles["move"];
      } else {
        bgStyle = this.bgColors[level % this.bgColors.length];
      }
      node.styleClass = `${borderStyle} ${bgStyle}`;
      if (node.children?.length) {
        const nextLevel = !node.data?.status.inScope || node.data?.status.isContainer ? level : level + 1;
        this.updateNodeStyles(node.children, nextLevel, applyStatusColors);
      }
    }
  }
  //Set background color
  get bgColors() {
    return this.theme.darkMode() ? this.bgColorsDark : this.bgColorsLight;
  }
  bgColorsLight = [
    "surface-0 hover:bg-primary-50",
    "bg-primary-50 hover:bg-primary-100",
    "bg-primary-100 hover:bg-primary-200",
    "bg-primary-200 hover:bg-primary-300",
    "bg-primary-300 hover:bg-primary-400",
    "bg-primary-400 hover:bg-primary-500",
    "bg-primary-500 hover:bg-primary-600 text-white",
    "bg-primary-600 hover:bg-primary-700 text-white",
    "bg-primary-700 hover:bg-primary-800 text-white",
    "bg-primary-800 hover:bg-primary-900 text-white"
  ];
  bgColorsDark = [
    "surface-0 hover:bg-primary-900",
    "bg-primary-900 hover:bg-primary-800",
    "bg-primary-800 hover:bg-primary-700",
    "bg-primary-700 hover:bg-primary-600",
    "bg-primary-600 hover:bg-primary-500",
    "bg-primary-500 hover:bg-primary-400",
    "bg-primary-400 hover:bg-primary-300 text-black",
    "bg-primary-300 hover:bg-primary-200 text-black",
    "bg-primary-200 hover:bg-primary-100 text-black",
    "bg-primary-100 hover:bg-primary-50 text-black"
  ];
  get contextStyles() {
    return this.theme.darkMode() ? this.contextStylesDark : this.contextStylesLight;
  }
  contextStylesLight = {
    new: "bg-green-200 hover:bg-green-300 border-dashed text-black",
    rot: "bg-red-200 hover:bg-red-300 border-dashed text-black",
    move: "bg-yellow-200 hover:bg-yellow-300 border-dashed text-black",
    navChild: "bg-blue-200 hover:bg-blue-300 border-dashed text-black",
    template: "surface-200 hover:surface-300 text-black"
  };
  contextStylesDark = {
    new: "bg-green-700 hover:bg-green-600 border-dashed text-white",
    rot: "bg-red-700 hover:bg-red-600 border-dashed text-white",
    move: "bg-yellow-700 hover:bg-yellow-600 border-dashed text-black",
    navChild: "bg-blue-700 hover:bg-blue-600 border-dashed text-white",
    template: "surface-200 hover:surface-300 text-white"
  };
  static \u0275fac = function TreeNodeStyleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeNodeStyleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TreeNodeStyleService, factory: _TreeNodeStyleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeNodeStyleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/components/add-urls/add-urls.service.ts
var AddUrlsService = class _AddUrlsService {
  fetchService = inject(FetchService);
  projectState = inject(ProjectStateService);
  updService = inject(UpdService);
  airtableService = inject(AirtableService);
  vanityService = inject(VanityService);
  projectStorageService = inject(ProjectStorageService);
  treeNodeStyleService = inject(TreeNodeStyleService);
  /********************************************************************************************************************
   *  STEPS                                                                                                           *
   *  0. Parse raw url input                                                                                          *
   *  1. Validate URLs (store invalid for later review)                                                               *
   *  2. Add URLs, for each, fetch breadcrumb & cache content to add after parent pages                               *
   *     - If breadcrumb url is not in project yet, fetch content and add it in TreeNode structure (baseline & live)  *
   *     - If breadcrumb url is already in project, skip it                                                           *
   *     - add cached page to TreeNode structure (baseline & live)                                                    *
   ********************************************************************************************************************/
  // Add URL state
  urlState = signal({
    rawUrls: "",
    urlsToValidate: [],
    urlsToAdd: [],
    isValidating: false,
    isAdding: false
  });
  setUrlState(partial) {
    this.urlState.update((curr) => __spreadValues(__spreadValues({}, curr), partial));
  }
  projectLang = this.projectState.detectPrimaryLanguage();
  /**** STEP 0 ********************************************************************************************************/
  // Step 0: Parse raw URL input into UrlItem array
  parseUrls(rawUrls, existingUrls, currentLang) {
    const seen = new Set(existingUrls);
    const duplicates = [];
    const invalidUrls = [];
    const oppositeLangUrls = [];
    const normalizedUrls = rawUrls.split(/\r?\n/).map((line) => line.trim().toLowerCase()).filter(Boolean).map((line) => ({
      original: line,
      normalized: this.normalizeUrl(line),
      lang: this.detectUrlLanguage(this.normalizeUrl(line))
    }));
    this.projectLang = this.detectProjectLanguage(existingUrls, normalizedUrls, currentLang);
    const parsedUrls = normalizedUrls.filter(({ normalized, lang, original }) => {
      if (!lang || !normalized.includes("canada.ca")) {
        invalidUrls.push(original);
        return false;
      }
      if (lang !== this.projectLang) {
        oppositeLangUrls.push(normalized);
        return false;
      }
      if (seen.has(normalized)) {
        duplicates.push(normalized);
        return false;
      }
      seen.add(normalized);
      return true;
    }).map(({ normalized }) => ({ href: normalized, status: "checking" }));
    return { parsedUrls, duplicates, invalidUrls, oppositeLangUrls };
  }
  // Step 0: Normalize incomplete URLs
  normalizeUrl(input) {
    let url = input;
    if (url.match("/content/canadasite")) {
      url = url.replace("/content/canadasite", "");
    }
    if (!url.startsWith("http")) {
      if (url.startsWith("/en") || url.startsWith("/fr")) {
        url = "https://www.canada.ca" + url;
      } else if (url.startsWith("en") || url.startsWith("fr")) {
        url = "https://www.canada.ca/" + url;
      } else if (url.startsWith("www")) {
        url = "https://" + url;
      } else if (url.startsWith("canada.ca")) {
        url = "https://www." + url;
      }
    } else if (url.startsWith("https://canada-preview.adobecqms.net")) {
      url = url.replace("https://canada-preview.adobecqms.net", "https://www.canada.ca");
    }
    if (!url.endsWith(".html") && !url.endsWith("/")) {
      if (url.endsWith("/en") || url.endsWith("/fr")) {
        url = url + ".html";
      }
      if ((url.includes("/en/") || url.includes("/fr/")) && !url.match(/\.[a-z]{2,4}$/i)) {
        url = url + ".html";
      }
    }
    return url;
  }
  // Step 0: Detect url language
  detectUrlLanguage(url) {
    if (url.includes("/en/") || url.endsWith("/en.html")) {
      return "en";
    }
    if (url.includes("/fr/") || url.endsWith("/fr.html")) {
      return "fr";
    }
    return null;
  }
  // Step 0: Detect project language
  detectProjectLanguage(existingUrls, normalizedUrls, currentLang) {
    if (existingUrls.size > 0) {
      const firstUrl = Array.from(existingUrls)[0];
      const existingLang = this.detectUrlLanguage(firstUrl);
      if (existingLang)
        return existingLang;
    }
    const pastedLanguages = normalizedUrls.map((u) => u.lang).filter((lang) => lang !== null);
    if (pastedLanguages.length > 0) {
      const uniqueLangs = new Set(pastedLanguages);
      if (uniqueLangs.size === 1) {
        return pastedLanguages[0];
      }
    }
    return currentLang;
  }
  /**** STEP 1 ********************************************************************************************************/
  // Step 1: Validate multiple URLs sequentially (concurrency can cause issues with Akamai rate limiting)
  validateUrls() {
    return __async(this, null, function* () {
      this.setUrlState({ isValidating: true });
      const urls = this.urlState().urlsToValidate;
      for (const url of urls) {
        yield this.validateUrl(url);
      }
      const validated = this.urlState().urlsToValidate;
      const existingUrls = new Set(this.projectState.getAllPages(this.projectLang, "live", "all").map((u) => u.url));
      const seen = /* @__PURE__ */ new Set();
      const urlsToAdd = validated.filter((url) => url.status === "ok" || url.status === "redirect").filter((url) => {
        if (existingUrls.has(url.href) || seen.has(url.href))
          return false;
        seen.add(url.href);
        return true;
      }).map((url) => ({ href: url.href, status: "pending" }));
      this.setUrlState({ isValidating: false, urlsToValidate: [], urlsToAdd });
      this.addUrls();
    });
  }
  // Validate a single URL
  validateUrl(page) {
    return __async(this, null, function* () {
      try {
        const response = yield this.fetchService.fetchStatus(page.href, "prod", 3, "none", 500);
        let updated;
        if (!response.ok || response.url.includes("404.html")) {
          updated = __spreadProps(__spreadValues({}, page), { status: "bad" });
        } else if (response.url !== page.href) {
          updated = __spreadProps(__spreadValues({}, page), { status: "redirect", originalHref: page.href, href: response.url });
        } else {
          updated = __spreadProps(__spreadValues({}, page), { status: "ok" });
        }
        this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
          urlsToValidate: curr.urlsToValidate.map((url) => url.href === page.href ? updated : url)
        }));
      } catch (error) {
        console.error(error);
        const status = error.message.startsWith("Blocked host") ? "blocked" : "bad";
        this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
          urlsToValidate: curr.urlsToValidate.map((url) => url.href === page.href ? __spreadProps(__spreadValues({}, url), { status }) : url)
        }));
      }
    });
  }
  // Step 1: validating URL progress bar
  validatingProgress = computed(() => {
    const { urlsToValidate } = this.urlState();
    const total = urlsToValidate.length;
    const processed = urlsToValidate.filter((u) => u.status !== "checking").length;
    return {
      percent: total ? Math.round(processed / total * 100) : 0,
      total,
      processed
    };
  });
  /**** STEP 2 ********************************************************************************************************/
  linkCache = /* @__PURE__ */ new Map();
  // Step 2: Add multiple URLs sequentially (concurrency can cause issues with Akamai rate limiting)
  addUrls(parent = null) {
    return __async(this, null, function* () {
      this.setUrlState({ isAdding: true });
      const urls = this.urlState().urlsToAdd;
      yield this.updService.fetchData();
      yield this.airtableService.fetchTasks();
      yield this.vanityService.fetchData();
      this.setPreviousProjectData(this.projectState.cloneTree(this.projectState.getProjectTree()));
      for (const url of urls) {
        try {
          yield this.addUrl(url.href, true, parent);
          this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
            urlsToAdd: curr.urlsToAdd.map((u) => u.href === url.href ? __spreadProps(__spreadValues({}, u), { status: "added" }) : u)
          }));
        } catch {
          this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
            urlsToAdd: curr.urlsToAdd.map((u) => u.href === url.href ? __spreadProps(__spreadValues({}, u), { status: "error" }) : u)
          }));
        }
      }
      this.projectState.setProjectTree(this.projectState.getProjectTree());
      this.projectStorageService.rebuildParents(this.projectState.getProjectTree(), void 0);
      this.treeNodeStyleService.updateNodeStyles(this.projectState.getProjectTree(), 0);
      this.setUrlState({ isAdding: false, urlsToAdd: [], rawUrls: "" });
    });
  }
  // Step 2: Add a single URL
  addUrl(url, inScope, parent = null) {
    return __async(this, null, function* () {
      const inTree = this.projectState.urlExists(url);
      if (inTree) {
        if (inScope) {
          this.projectState.setScope([url]);
        }
        ;
        return;
      }
      const doc = yield this.fetchService.fetchContent(url, "prod", 3, "none");
      const breadcrumb = this.fetchService.getBreadcrumb(doc, "https://www.canada.ca");
      if (parent && breadcrumb) {
        if (parent !== breadcrumb.at(-1)?.url)
          return;
      }
      if (inScope) {
        for (const crumb of breadcrumb) {
          yield this.addUrl(crumb.url, false);
        }
      }
      const pageData = yield this.fetchService.extractPageMetadata(doc, url);
      const oppDoc = pageData.oppUrl ? yield this.fetchService.fetchContent(pageData.oppUrl, "prod", 3, "none") : void 0;
      const oppPageData = oppDoc ? yield this.fetchService.extractPageMetadata(oppDoc, pageData.oppUrl) : void 0;
      const urlLang = this.fetchService.getLang(url);
      if (!urlLang)
        return;
      const pageDataEN = urlLang === "en" ? pageData : oppPageData;
      const pageDataFR = urlLang === "fr" ? pageData : oppPageData;
      const enUrl = urlLang === "en" ? url : pageData.oppUrl;
      const frUrl = urlLang === "fr" ? url : pageData.oppUrl;
      const jsonDataEN = enUrl ? yield this.fetchService.fetchPageJSON(enUrl) : void 0;
      const jsonDataFR = frUrl ? yield this.fetchService.fetchPageJSON(frUrl) : void 0;
      if (enUrl)
        this.linkCache.set(enUrl, pageDataEN?.links ?? []);
      if (frUrl)
        this.linkCache.set(frUrl, pageDataFR?.links ?? []);
      const enParentUrl = this.fetchService.generateUrl(pageDataEN?.parentPath ?? "", "live");
      const frParentUrl = this.fetchService.generateUrl(pageDataFR?.parentPath ?? "", "live");
      if (enParentUrl && !this.linkCache.has(enParentUrl)) {
        const parentDoc = yield this.fetchService.fetchContent(enParentUrl, "prod", 3, "none");
        if (parentDoc)
          this.linkCache.set(enParentUrl, this.fetchService.getLinks(parentDoc, enParentUrl));
      }
      if (frParentUrl && !this.linkCache.has(frParentUrl)) {
        const parentDoc = yield this.fetchService.fetchContent(frParentUrl, "prod", 3, "none");
        if (parentDoc)
          this.linkCache.set(frParentUrl, this.fetchService.getLinks(parentDoc, frParentUrl));
      }
      const enOrphan = pageDataEN?.parentPath ? !this.linkCache.get(enParentUrl)?.includes(enUrl ?? "") : false;
      const frOrphan = pageDataFR?.parentPath ? !this.linkCache.get(frParentUrl ?? "")?.includes(frUrl ?? "") : false;
      const enData = {
        h1: pageDataEN?.h1 ?? "Missing H1",
        doubleH1: pageDataEN?.doubleH1,
        //Content
        contentHash: pageDataEN?.contentHash,
        lastChecked: pageDataEN?.lastChecked,
        githubSha: void 0,
        //Metadata
        title: pageDataEN?.title ?? "",
        description: pageDataEN?.description ?? "",
        keywords: pageDataEN?.keywords ?? "",
        //Status
        is404: !pageDataEN,
        //TODO: set to true for baseline/prototype until export
        isOrphan: enOrphan,
        noindex: pageDataEN?.noindex ?? false,
        isArchived: pageDataEN?.isArchived ?? false,
        linksToPortal: pageDataEN?.linksToPortal ?? false,
        hasChatbot: pageDataEN?.hasChatbot ?? false,
        // jrc:content.json
        owner: jsonDataEN?.owner,
        email: jsonDataEN?.email,
        lastPublished: jsonDataEN?.lastPublished,
        lastModified: jsonDataEN?.lastModified,
        //Data
        parentPath: pageDataEN?.parentPath,
        wordCount: pageDataEN?.wordCount ?? -1,
        linkCount: pageDataEN?.linkCount ?? -1,
        template: jsonDataEN?.isFreestyle ? PageTemplate.Freestyle : pageDataEN?.template ?? PageTemplate.Content,
        fleschKincaid: pageDataEN?.fleschKincaid ?? -1,
        gunningFog: pageDataEN?.gunningFog ?? -1,
        phoneNumbers: pageDataEN?.phoneNumbers ?? [],
        // Data from problem assistant
        problem: void 0
      };
      const frData = {
        h1: pageDataFR?.h1 ?? "Missing H1",
        doubleH1: pageDataFR?.doubleH1,
        //Content
        contentHash: pageDataFR?.contentHash,
        lastChecked: pageDataFR?.lastChecked,
        githubSha: void 0,
        //Metadata
        title: pageDataFR?.title ?? "",
        description: pageDataFR?.description ?? "",
        keywords: pageDataFR?.keywords ?? "",
        //Status
        is404: !pageDataFR,
        isOrphan: frOrphan,
        noindex: pageDataFR?.noindex ?? false,
        isArchived: pageDataFR?.isArchived ?? false,
        linksToPortal: pageDataFR?.linksToPortal ?? false,
        hasChatbot: pageDataFR?.hasChatbot ?? false,
        // jrc:content.json
        owner: jsonDataFR?.owner,
        email: jsonDataFR?.email,
        lastPublished: jsonDataFR?.lastPublished,
        lastModified: jsonDataFR?.lastModified,
        //Data
        parentPath: pageDataFR?.parentPath,
        wordCount: pageDataFR?.wordCount ?? -1,
        linkCount: pageDataFR?.linkCount ?? -1,
        template: jsonDataFR?.isFreestyle ? PageTemplate.Freestyle : pageDataFR?.template ?? PageTemplate.Content,
        fleschKincaid: pageDataFR?.fleschKincaid ?? -1,
        gunningFog: pageDataFR?.gunningFog ?? -1,
        phoneNumbers: pageDataFR?.phoneNumbers ?? [],
        // Data from problem assistant
        problem: void 0
      };
      const githubEnData = __spreadProps(__spreadValues({}, enData), { phoneNumbers: [...enData.phoneNumbers], is404: true });
      const githubFrData = __spreadProps(__spreadValues({}, frData), { phoneNumbers: [...frData.phoneNumbers], is404: true });
      const status = {
        inScope,
        isNew: false,
        isMoved: false,
        isROT: false
      };
      const node = {
        label: pageData.h1 ?? url,
        data: {
          lang: urlLang,
          path: {
            en: this.fetchService.generatePath(enUrl),
            fr: this.fetchService.generatePath(frUrl)
          },
          visits: {
            en: this.updService.findVisitsByUrl(enUrl.replace("https://", "")),
            fr: this.updService.findVisitsByUrl(frUrl.replace("https://", ""))
          },
          task: {
            en: this.airtableService.findTaskNamesByUrl(enUrl, "en"),
            fr: this.airtableService.findTaskNamesByUrl(frUrl, "fr")
          },
          vanity: {
            en: this.vanityService.findVanitiesByDestination(enUrl),
            fr: this.vanityService.findVanitiesByDestination(frUrl)
          },
          status,
          baseline: {
            en: __spreadValues({}, githubEnData),
            fr: __spreadValues({}, githubFrData)
          },
          live: {
            en: enData,
            fr: frData
          },
          prototype: {
            en: __spreadValues({}, githubEnData),
            fr: __spreadValues({}, githubFrData)
          },
          metadataReview: void 0,
          notes: void 0,
          isContainer: false,
          isCrawled: false
        },
        expanded: true,
        children: []
      };
      const tree = this.projectState.getProjectTree();
      const parentPath = pageData?.parentPath;
      if (parentPath) {
        const parentNode = this.projectState.findNodeByPath(tree, parentPath, urlLang);
        if (parentNode) {
          parentNode.children = parentNode.children ?? [];
          parentNode.children.push(node);
        }
      } else {
        tree.push(node);
      }
    });
  }
  // Step 2: adding URL progress bar
  addingProgress = computed(() => {
    const { urlsToAdd } = this.urlState();
    const total = urlsToAdd.length;
    const processed = urlsToAdd.filter((u) => u.status !== "pending").length;
    return {
      percent: total ? Math.round(processed / total * 100) : 0,
      total,
      processed
    };
  });
  /**** OTHER UTILITIES ************************************************************************************************/
  // Previous project data for undo
  previousProjectData = signal(null);
  getPreviousProjectData = computed(() => this.previousProjectData());
  setPreviousProjectData(data) {
    this.previousProjectData.set(data);
  }
  // Highlight logic
  highlight = signal(false);
  setHighlight(value) {
    this.highlight.set(value);
  }
  getHighlight() {
    return this.highlight();
  }
  // Invalid urls component
  urlsForReview = computed(() => this.urlState().urlsToValidate.filter((u) => u.status === "bad" || u.status === "blocked" || u.status === "redirect"));
  // Append URLs to input (for the various find pages components)
  appendUrlsToInput(newUrls) {
    const lang = this.projectState.detectPrimaryLanguage();
    const currentRawUrls = this.urlState().rawUrls;
    const additionalRawUrls = newUrls.join("\n");
    const updatedRawUrls = currentRawUrls ? `${currentRawUrls}
${additionalRawUrls}` : additionalRawUrls;
    const { parsedUrls } = this.parseUrls(updatedRawUrls, new Set(this.projectState.getAllPages(lang, "live", "inScope").map((u) => u.url)), lang);
    this.setUrlState({
      rawUrls: updatedRawUrls,
      urlsToValidate: parsedUrls
    });
  }
  // Add child pages
  addChildren(node, lang) {
    return __async(this, null, function* () {
      const parentLink = this.fetchService.generateUrl(node.data?.path[lang], "live");
      if (!parentLink)
        return;
      const allLinks = /* @__PURE__ */ new Set();
      try {
        const doc = yield this.fetchService.fetchContent(parentLink, "prod", 3, "none");
        const links = this.fetchService.getLinks(doc, parentLink);
        links.filter((l) => l.includes("canada.ca")).forEach((l) => allLinks.add(l));
      } catch (error) {
        console.warn(`Failed to fetch page ${parentLink}: ${error}`);
      }
      const projectPaths = new Set(this.projectState.getAllPages(lang, "live", "all").map((p) => p.path));
      const linksToAdd = [...allLinks].filter((link) => {
        const normalized = this.projectState.getPath(link);
        return !projectPaths.has(normalized);
      });
      if (linksToAdd.length === 0)
        return;
      this.setUrlState({
        isAdding: true,
        urlsToAdd: linksToAdd.map((url) => ({ href: url, status: "pending" }))
      });
      yield this.addUrls(parentLink);
      node.data.isCrawled = true;
    });
  }
  static \u0275fac = function AddUrlsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddUrlsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddUrlsService, factory: _AddUrlsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddUrlsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ProgressBar,
  ProgressBarModule,
  version,
  CloudStorageService,
  ProjectStorageService,
  CollaboratorService,
  AirtableService,
  UsageService,
  ProjectStateService,
  TreeNodeStyleService,
  AddUrlsService
};
//# sourceMappingURL=chunk-F6P2GXQV.js.map
