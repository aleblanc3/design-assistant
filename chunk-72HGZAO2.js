import {
  CheckboxModule
} from "./chunk-HLCZXW7A.js";
import {
  marker
} from "./chunk-NHG2MSCL.js";
import {
  ButtonModule,
  CommonModule,
  FormsModule,
  RouterLink,
  TranslateModule,
  TranslatePipe
} from "./chunk-TK4DWPTH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZNSAYBRC.js";

// src/app/views/standalone/components/dev-tools/dev-tools.component.ts
var DevToolsComponent = class _DevToolsComponent {
  /**
  * Translation markers for visual separators in translation files.
  * These keys (feature._) create visual breaks between feature sections.
  * DO NOT REMOVE - needed to preserve separators during i18n:clean
  */
  markForTranslation() {
    marker("dashboard._");
    marker("project._");
    marker("switch._");
    marker("inventory._");
    marker("iaDiagram._");
    marker("github._");
    marker("help._");
    marker("about._");
    marker("notFound._");
    marker("dev._");
    marker("standalone._");
    marker("aiPrompt._");
    marker("importPage._");
    marker("compare._");
    marker("nav._");
    marker("export._");
    marker("settings._");
    marker("collaborators._");
    marker("addPages._");
    marker("findPages._");
    marker("project.github._");
    marker("project.message._");
    marker("project.phase._");
    marker("project.setup._");
    marker("save._");
    marker("feedback._");
    marker("common._");
    marker("common.no");
    marker("common.save");
    marker("common.delete");
    marker("common.cra");
  }
  static \u0275fac = function DevToolsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevToolsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevToolsComponent, selectors: [["aida-dev-tools"]], decls: 34, vars: 30, consts: [[3, "innerHTML"], [1, "grid", "py-2", "px-4", "lg:px-6"], [1, "col-12", "md:col-6", "lg:col-4"], ["routerLink", "/dev/monitoring", 1, "text-xl", "font-semibold"], [1, "text-color-secondary", "mt-2"], ["routerLink", "/dev/color-generator", 1, "text-xl", "font-semibold"], ["routerLink", "/dev/design-patterns", 1, "text-xl", "font-semibold"], ["routerLink", "/dev/prompt-editor", 1, "text-xl", "font-semibold"]], template: function DevToolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2");
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "p", 0);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementStart(5, "div", 1)(6, "div", 2)(7, "a", 3);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 2)(14, "a", 5);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 4);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 2)(21, "a", 6);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 4);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 2)(28, "a", 7);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 4);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "dev._title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(4, 12, "dev.description"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "dev.monitoring._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 16, "dev.monitoring.description"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "dev.colors._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "dev.colors.description"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 22, "dev.patterns._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 24, "dev.patterns.description"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 26, "dev.prompts._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 28, "dev.prompts.description"));
    }
  }, dependencies: [TranslateModule, TranslatePipe, CommonModule, FormsModule, CheckboxModule, RouterLink, ButtonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevToolsComponent, [{
    type: Component,
    args: [{ selector: "aida-dev-tools", imports: [TranslateModule, CommonModule, FormsModule, CheckboxModule, RouterLink, ButtonModule], template: `
    <h2>{{ 'dev._title' | translate}}</h2>
    <p [innerHTML]="'dev.description' | translate"></p>
    <div class="grid py-2 px-4 lg:px-6">
      <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/monitoring" class="text-xl font-semibold">{{'dev.monitoring._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.monitoring.description' | translate}}</p>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/color-generator" class="text-xl font-semibold">{{'dev.colors._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.colors.description' | translate}}</p>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/design-patterns" class="text-xl font-semibold">{{'dev.patterns._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.patterns.description' | translate}}</p>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/prompt-editor" class="text-xl font-semibold">{{'dev.prompts._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.prompts.description' | translate}}</p>
        </div>
  </div>
  ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevToolsComponent, { className: "DevToolsComponent", filePath: "src/app/views/standalone/components/dev-tools/dev-tools.component.ts", lineNumber: 37 });
})();

export {
  DevToolsComponent
};
//# sourceMappingURL=chunk-72HGZAO2.js.map
