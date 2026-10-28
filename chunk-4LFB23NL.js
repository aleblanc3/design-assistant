import {
  CompareSelectComponent
} from "./chunk-XEMQVRRC.js";
import {
  CompareService
} from "./chunk-BURTDJQ6.js";
import "./chunk-DWQ5T5PK.js";
import "./chunk-MUTHVD5E.js";
import "./chunk-VM42GDUP.js";
import {
  StyleCardService
} from "./chunk-XN4WNFGN.js";
import "./chunk-UIHSOUVP.js";
import "./chunk-D2IYO2LM.js";
import "./chunk-DEEWKCKY.js";
import "./chunk-NOSJTLX4.js";
import "./chunk-NFB4ATIL.js";
import "./chunk-D57SAGZH.js";
import {
  ProjectStateService
} from "./chunk-F4KIDQT7.js";
import "./chunk-EI26I4O3.js";
import "./chunk-DMOF7S63.js";
import "./chunk-6S55WOIY.js";
import "./chunk-ER4QCIKI.js";
import "./chunk-NJENQTX6.js";
import {
  FetchService
} from "./chunk-XREV6GCY.js";
import "./chunk-HJXNETTU.js";
import "./chunk-C3GPHJPQ.js";
import {
  DomSanitizer
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  ViewChild,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-KRHY6Z2H.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/views/tasks/review-languages/review-languages.component.ts
var _c0 = ["enFrame"];
var _c1 = ["frFrame"];
function ReviewLanguagesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2", 6);
    \u0275\u0275text(3, "English page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "iframe", 7);
    \u0275\u0275listener("load", function ReviewLanguagesComponent_Conditional_13_Template_iframe_load_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFrameLoad());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "h2", 6);
    \u0275\u0275text(7, "French page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "iframe", 7);
    \u0275\u0275listener("load", function ReviewLanguagesComponent_Conditional_13_Template_iframe_load_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFrameLoad());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275property("srcdoc", ctx_r1.englishHTML(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275property("srcdoc", ctx_r1.frenchHTML(), \u0275\u0275sanitizeHtml);
  }
}
var ReviewLanguagesComponent = class _ReviewLanguagesComponent {
  sanitizer = inject(DomSanitizer);
  projectState = inject(ProjectStateService);
  compareService = inject(CompareService);
  fetchService = inject(FetchService);
  styleCardService = inject(StyleCardService);
  englishHTML = signal(void 0, ...ngDevMode ? [{ debugName: "englishHTML" }] : (
    /* istanbul ignore next */
    []
  ));
  frenchHTML = signal(void 0, ...ngDevMode ? [{ debugName: "frenchHTML" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect((onCleanup) => {
      const bothPaths = this.projectState.getBothPaths(this.compareService.selectedPage());
      if (!bothPaths)
        return;
      const version = this.compareService.selectedSource();
      const { owner, repo } = this.projectState.getProject().github;
      const urlEN = this.fetchService.generateUrl(bothPaths.en, version, owner, repo);
      const urlFR = this.fetchService.generateUrl(bothPaths.fr, version, owner, repo);
      let stale = false;
      onCleanup(() => stale = true);
      this.setHTML(urlEN, urlFR, () => stale);
    });
  }
  setHTML(urlEN, urlFR, isStale) {
    return __async(this, null, function* () {
      const htmlEN = this.toSrcdoc(yield this.fetchService.fetchContent(urlEN, "both"));
      const htmlFR = this.toSrcdoc(yield this.fetchService.fetchContent(urlFR, "both"));
      if (isStale())
        return;
      this.englishHTML.set(htmlEN);
      this.frenchHTML.set(htmlFR);
    });
  }
  toSrcdoc(doc) {
    return this.sanitizer.bypassSecurityTrustHtml("<!DOCTYPE html>" + doc.documentElement.outerHTML);
  }
  enFrame = viewChild.required("enFrame");
  frFrame = viewChild.required("frFrame");
  loadedCount = 0;
  syncing = false;
  onFrameLoad() {
    if (++this.loadedCount < 2)
      return;
    this.loadedCount = 0;
    const en = this.enFrame().nativeElement;
    const fr = this.frFrame().nativeElement;
    this.link(en, fr);
    this.link(fr, en);
  }
  source = null;
  timer;
  link(from, to) {
    const a = from.contentWindow, b = to.contentWindow;
    a.addEventListener("scroll", () => {
      if (this.source && this.source !== a)
        return;
      this.source = a;
      const maxA = a.document.documentElement.scrollHeight - a.innerHeight;
      const maxB = b.document.documentElement.scrollHeight - b.innerHeight;
      b.scrollTo(0, maxA > 0 ? a.scrollY / maxA * maxB : 0);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.source = null, 100);
    });
  }
  static \u0275fac = function ReviewLanguagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewLanguagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewLanguagesComponent, selectors: [["aida-review-languages"]], viewQuery: function ReviewLanguagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.enFrame, _c0, 5)(ctx.frFrame, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 14, vars: 11, consts: [["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "gap-2"], [3, "versionsToShow"], [1, "flex", "gap-2", "h-30rem"], [1, "h-full"], [1, "px-4", "pt-4", "pb-2", "m-0", "border-bottom-1", "surface-border", "h-4rem"], ["sandbox", "allow-same-origin", 1, "w-full", "h-26rem", "border-none", 3, "load", "srcdoc"]], template: function ReviewLanguagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div");
      \u0275\u0275element(6, "aida-compare-select", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "h2");
      \u0275\u0275text(9, "Data comparison");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div")(11, "h2");
      \u0275\u0275text(12, "AI summary of differences");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(13, ReviewLanguagesComponent_Conditional_13_Template, 9, 6, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 9, "languages._title"));
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance();
      \u0275\u0275property("versionsToShow", 1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.englishHTML() && ctx.frenchHTML() ? 13 : -1);
    }
  }, dependencies: [CompareSelectComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewLanguagesComponent, [{
    type: Component,
    args: [{ selector: "aida-review-languages", imports: [TranslatePipe, CompareSelectComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'languages._title' | translate }}</h1>

<div class="flex flex-column gap-2">
  <div class="flex gap-2">
    <div [class]="styleCardService.cardStyles()">
      <aida-compare-select [versionsToShow]="1" />
    </div>
    <div [class]="styleCardService.cardStyles()">
      <h2>Data comparison</h2>
    </div>
  </div>
  <div [class]="styleCardService.cardStyles()">
    <h2>AI summary of differences</h2>
  </div>
  @if (englishHTML() && frenchHTML()) {
    <div class="flex gap-2 h-30rem">
      <div [class]="styleCardService.cardStyles(undefined, undefined, true)" class="h-full">
        <h2 class="px-4 pt-4 pb-2 m-0 border-bottom-1 surface-border h-4rem">English page</h2>
        <iframe [srcdoc]="englishHTML()" (load)="onFrameLoad()" class="w-full h-26rem border-none" sandbox="allow-same-origin"></iframe>
      </div>
      <div [class]="styleCardService.cardStyles(undefined, undefined, true)">
        <h2 class="px-4 pt-4 pb-2 m-0 border-bottom-1 surface-border h-4rem">French page</h2>
        <iframe [srcdoc]="frenchHTML()" (load)="onFrameLoad()" class="w-full h-26rem border-none" sandbox="allow-same-origin"></iframe>
      </div>
    </div>
  }
</div>
` }]
  }], () => [], { enFrame: [{ type: ViewChild, args: ["enFrame", { isSignal: true }] }], frFrame: [{ type: ViewChild, args: ["frFrame", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewLanguagesComponent, { className: "ReviewLanguagesComponent", filePath: "src/app/views/tasks/review-languages/review-languages.component.ts", lineNumber: 20 });
})();
export {
  ReviewLanguagesComponent
};
//# sourceMappingURL=chunk-4LFB23NL.js.map
