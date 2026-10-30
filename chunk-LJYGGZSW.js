import {
  AddPagesComponent
} from "./chunk-QCJLOGXJ.js";
import "./chunk-HPYPJNSR.js";
import "./chunk-377URSTC.js";
import "./chunk-RA2UYITJ.js";
import {
  ViewPagesComponent
} from "./chunk-L3Y3Q3DZ.js";
import "./chunk-773SNMHO.js";
import "./chunk-PHAQAUHI.js";
import "./chunk-NDRXJZJW.js";
import "./chunk-ZIDC7YLV.js";
import "./chunk-4PM2DK55.js";
import "./chunk-NXJAB7TR.js";
import {
  StyleCardService
} from "./chunk-RGORYURK.js";
import "./chunk-IKXKFEDR.js";
import "./chunk-CEHKVHDI.js";
import "./chunk-O4HLOMBO.js";
import "./chunk-KQ5HLW4B.js";
import "./chunk-UOXBEDBX.js";
import "./chunk-5FCLDAPN.js";
import "./chunk-YFF6WBIP.js";
import "./chunk-7CT4JWAW.js";
import "./chunk-XV6ZQJFA.js";
import "./chunk-XLU7IEGJ.js";
import "./chunk-7EUZG6LS.js";
import "./chunk-KGR7TCRI.js";
import "./chunk-45CBO2DO.js";
import "./chunk-I6JLIAMX.js";
import "./chunk-MDCM2VZ6.js";
import "./chunk-OW443XK4.js";
import "./chunk-TMUDHFOC.js";
import "./chunk-LJ7IJ7DZ.js";
import "./chunk-AP53QPEM.js";
import "./chunk-QFBBCEJC.js";
import "./chunk-G5ANIINL.js";
import "./chunk-3DOAGA5J.js";
import "./chunk-DMOF7S63.js";
import "./chunk-WYXLQ4YD.js";
import "./chunk-PN55NB44.js";
import "./chunk-KHVFWHA2.js";
import "./chunk-QIAR23DT.js";
import "./chunk-43Q7ZVPF.js";
import "./chunk-YJ5XIRGT.js";
import "./chunk-YFY7IDBJ.js";
import "./chunk-XUM3D277.js";
import "./chunk-46P5L2FS.js";
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
} from "./chunk-Y6Z7Y6BI.js";
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
//# sourceMappingURL=chunk-LJYGGZSW.js.map
