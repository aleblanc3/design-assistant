import {
  AddPagesComponent
} from "./chunk-GJILNRH3.js";
import "./chunk-3U7HFOY3.js";
import "./chunk-DSKKR2ZG.js";
import "./chunk-ALIE3DFW.js";
import {
  ViewPagesComponent
} from "./chunk-GNDWZ6UO.js";
import "./chunk-MXW34BXM.js";
import "./chunk-UYMSXBF6.js";
import "./chunk-PUTVKIN2.js";
import "./chunk-QXJQRE7A.js";
import "./chunk-4I5EWS6N.js";
import "./chunk-QOF3KNH4.js";
import {
  StyleCardService
} from "./chunk-JGET47WE.js";
import "./chunk-LZRRKCTJ.js";
import "./chunk-UMW5L7XA.js";
import "./chunk-ABADP6UH.js";
import "./chunk-5LDEJY46.js";
import "./chunk-KMLMLMJI.js";
import "./chunk-JE2P4GTZ.js";
import "./chunk-FBZDHMK5.js";
import "./chunk-QBM7R4BS.js";
import "./chunk-T53OGZH2.js";
import "./chunk-PNASTBUV.js";
import "./chunk-7Q25PMVV.js";
import "./chunk-NEVMMG5I.js";
import "./chunk-3LOMD6MX.js";
import "./chunk-PSGREVHM.js";
import "./chunk-PKDWFFWN.js";
import "./chunk-BCSHNLOK.js";
import "./chunk-6E6JJVWJ.js";
import "./chunk-DVUJ6DTR.js";
import "./chunk-QRQ5OLUX.js";
import "./chunk-S34CWLPX.js";
import "./chunk-BICL4J73.js";
import "./chunk-JSBVPAQL.js";
import "./chunk-NC5JJ3BQ.js";
import "./chunk-3TRWCIHJ.js";
import "./chunk-5GVHEVDW.js";
import "./chunk-R6BFMNC6.js";
import "./chunk-OOK6UJ5N.js";
import "./chunk-J42XXMQA.js";
import "./chunk-2OEN3OIF.js";
import "./chunk-PXHNA26H.js";
import "./chunk-NJX644NS.js";
import "./chunk-UYSKDSHE.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-46LS4HZY.js";
import "./chunk-REL7BCH6.js";
import "./chunk-MAKYC2XG.js";
import "./chunk-ADVVAQGW.js";
import "./chunk-UAFUCDFP.js";
import "./chunk-UB5ECMBM.js";
import "./chunk-UDFBNEAG.js";
import "./chunk-YCXP4XZS.js";

// src/app/views/project/add-pages/add-pages.component.ts
var AddOrViewPagesComponent = class _AddOrViewPagesComponent {
  styleCardService = inject(StyleCardService);
  static \u0275fac = function AddOrViewPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddOrViewPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddOrViewPagesComponent, selectors: [["aida-add-or-view-pages"]], decls: 12, vars: 13, consts: [["id", "wb-cont"], [1, "flex", "flex-column", "gap-3", "mb-2"]], template: function AddOrViewPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 1)(8, "div");
      \u0275\u0275element(9, "aida-add-pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div");
      \u0275\u0275element(11, "aida-view-pages");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "addPages._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 9, "addPages.description"), "", \u0275\u0275pipeBind1(6, 11, "addPages.description2"));
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
    }
  }, dependencies: [AddPagesComponent, ViewPagesComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddOrViewPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-add-or-view-pages", imports: [TranslatePipe, AddPagesComponent, ViewPagesComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'addPages._title' | translate }}</h1>
<p>{{ 'addPages.description' | translate }}{{ 'addPages.description2' | translate }}</p>

<!--Content-->
<div class="flex flex-column gap-3 mb-2">
  <!--Row 1: Add pages-->
  <div [class]="styleCardService.cardStyles()">
    <aida-add-pages />
  </div>
  <!--Row 2: View pages-->
  <div [class]="styleCardService.cardStyles()">
    <aida-view-pages />
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddOrViewPagesComponent, { className: "AddOrViewPagesComponent", filePath: "src/app/views/project/add-pages/add-pages.component.ts", lineNumber: 16 });
})();
export {
  AddOrViewPagesComponent
};
//# sourceMappingURL=chunk-XJNDC546.js.map
