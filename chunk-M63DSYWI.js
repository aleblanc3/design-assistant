import {
  AddPagesComponent
} from "./chunk-JVRDHDSC.js";
import "./chunk-M4PI2FLA.js";
import "./chunk-QPO663DW.js";
import "./chunk-NNXCTYTG.js";
import {
  ViewPagesComponent
} from "./chunk-SYRGZS4I.js";
import "./chunk-DY4RKEQO.js";
import "./chunk-HGNDX4QC.js";
import "./chunk-RDV6F5ZY.js";
import "./chunk-7EP2KS24.js";
import "./chunk-ELXEMCIY.js";
import "./chunk-JJ56BRXM.js";
import {
  StyleCardService
} from "./chunk-PLWLN2ZO.js";
import "./chunk-HMJLW44B.js";
import "./chunk-4LOOH26D.js";
import "./chunk-GIDX5XQW.js";
import "./chunk-AWTXPSRA.js";
import "./chunk-LHQ2UTOW.js";
import "./chunk-NGMOPMK7.js";
import "./chunk-XFLU26RD.js";
import "./chunk-MIYDAR4I.js";
import "./chunk-NIEOJE6B.js";
import "./chunk-XWCEZHJJ.js";
import "./chunk-GOQTY6LF.js";
import "./chunk-ZQFVNKCP.js";
import "./chunk-I5BRY6F4.js";
import "./chunk-HHB3L6LM.js";
import "./chunk-PKDWFFWN.js";
import "./chunk-VXIFEW5N.js";
import "./chunk-2GTMFFLT.js";
import "./chunk-C2QPQCML.js";
import "./chunk-7QG33A7H.js";
import "./chunk-DMOF7S63.js";
import "./chunk-JSBVPAQL.js";
import "./chunk-LFN6OHVC.js";
import "./chunk-JUK47RAW.js";
import "./chunk-26UQUZNT.js";
import "./chunk-CX5LE66G.js";
import "./chunk-SKWRLWIU.js";
import "./chunk-JA3M4RJT.js";
import "./chunk-LI2XRFJI.js";
import "./chunk-CQCSI35X.js";
import "./chunk-IVEPVLVK.js";
import "./chunk-UVDIDRDQ.js";
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
//# sourceMappingURL=chunk-M63DSYWI.js.map
