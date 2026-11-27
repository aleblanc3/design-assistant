import {
  AddPagesComponent
} from "./chunk-PA5YY7M2.js";
import "./chunk-W6TESAMA.js";
import "./chunk-DJ4ROIEV.js";
import "./chunk-6EWTG4GS.js";
import {
  ViewPagesComponent
} from "./chunk-Z6WDG4UM.js";
import "./chunk-SWD2IPHV.js";
import "./chunk-A3AS6ETN.js";
import "./chunk-ATNI7WHH.js";
import "./chunk-RWWGJ5QA.js";
import "./chunk-M6MPIWO4.js";
import "./chunk-LXC2HHEJ.js";
import {
  StyleCardService
} from "./chunk-VTQZS4T7.js";
import "./chunk-H54H2DVG.js";
import "./chunk-6IVOGOBS.js";
import "./chunk-EP7232IK.js";
import "./chunk-ADZNKPD2.js";
import "./chunk-IQ32TNLC.js";
import "./chunk-JL3XYUOC.js";
import "./chunk-3BWLGZ7Q.js";
import "./chunk-AEVOGM5F.js";
import "./chunk-PCQWOYAS.js";
import "./chunk-FAPH2SVH.js";
import "./chunk-YVF7UJTQ.js";
import "./chunk-R675W3L4.js";
import "./chunk-WCZKKKTX.js";
import "./chunk-YHIUKKAB.js";
import "./chunk-RI72KIOG.js";
import "./chunk-ZL6YOONA.js";
import "./chunk-VYFNSYK6.js";
import "./chunk-YHOIJXAJ.js";
import "./chunk-OPVLSIYU.js";
import "./chunk-AE6DJKHT.js";
import "./chunk-QRQ5OLUX.js";
import "./chunk-JSBVPAQL.js";
import "./chunk-N7AFIHWG.js";
import "./chunk-K2CYJSCY.js";
import "./chunk-T5OOO6FB.js";
import "./chunk-WGKFUUDY.js";
import "./chunk-JFBTM4UU.js";
import "./chunk-5OMWJUQA.js";
import "./chunk-C6TMHWKA.js";
import "./chunk-JATVKYNS.js";
import "./chunk-NJX644NS.js";
import "./chunk-7EJWX7IA.js";
import "./chunk-ZNVUFU2Q.js";
import "./chunk-7KUIZSPB.js";
import "./chunk-N5QBFVSW.js";
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
//# sourceMappingURL=chunk-T3DFN7RD.js.map
