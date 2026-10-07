import {
  AddPagesComponent
} from "./chunk-ZDZSDICV.js";
import "./chunk-6SMYSFE3.js";
import "./chunk-RSD765OV.js";
import {
  ViewPagesComponent
} from "./chunk-4TDHHXRJ.js";
import "./chunk-LYJ6UFLM.js";
import "./chunk-5IF5B4GD.js";
import "./chunk-LJSDRI7U.js";
import "./chunk-252626R6.js";
import "./chunk-KGAQLXO4.js";
import "./chunk-VDGWUB54.js";
import "./chunk-7WYF77OF.js";
import "./chunk-F6Y5W66Q.js";
import "./chunk-IC6HOP7U.js";
import "./chunk-3URTOT63.js";
import "./chunk-QYFOWPRO.js";
import "./chunk-V3TEYCE6.js";
import "./chunk-HD23M4TZ.js";
import "./chunk-TOG4KYXV.js";
import "./chunk-TCDRCBMB.js";
import "./chunk-B7UQRAZM.js";
import "./chunk-L3YRAVQQ.js";
import "./chunk-LDQ2EBYC.js";
import "./chunk-HR4YR3UR.js";
import "./chunk-4HPV3GUF.js";
import {
  ProjectStateService
} from "./chunk-2XIXW3TN.js";
import "./chunk-Z6M6OINJ.js";
import "./chunk-WDIDPUKP.js";
import "./chunk-POEP37ML.js";
import "./chunk-NTW7IUNV.js";
import "./chunk-JQTGLD45.js";
import "./chunk-4Y476ECU.js";
import "./chunk-MJIYSJ7V.js";
import "./chunk-DMOF7S63.js";
import "./chunk-T4NCAOXG.js";
import "./chunk-TULSGE2I.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-LBDVV6V6.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import "./chunk-YCXP4XZS.js";

// src/app/views/tasks/add-pages/add-pages.component.ts
function AddOrViewPagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.projectName);
  }
}
var AddOrViewPagesComponent = class _AddOrViewPagesComponent {
  projectState = inject(ProjectStateService);
  projectName = this.projectState.getProject().projectName;
  static \u0275fac = function AddOrViewPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddOrViewPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddOrViewPagesComponent, selectors: [["aida-add-or-view-pages"]], decls: 13, vars: 10, consts: [["id", "wb-cont"], [1, "flex", "flex-column", "gap-3", "mb-2"], [1, "surface-card", "border-round-lg", "shadow-2", "p-4", "w-full", "min-w-min"]], template: function AddOrViewPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AddOrViewPagesComponent_Conditional_0_Template, 2, 1, "p");
      \u0275\u0275elementStart(1, "h1", 0);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 1)(9, "div", 2);
      \u0275\u0275element(10, "aida-add-pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 2);
      \u0275\u0275element(12, "aida-view-pages");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.projectName ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "addPages._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 6, "addPages.description"), "", \u0275\u0275pipeBind1(7, 8, "addPages.description2"));
    }
  }, dependencies: [AddPagesComponent, ViewPagesComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddOrViewPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-add-or-view-pages", imports: [TranslatePipe, AddPagesComponent, ViewPagesComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (projectName) {
  <p>{{ projectName }}</p>
}
<h1 id="wb-cont">{{ 'addPages._title' | translate }}</h1>
<p>{{ 'addPages.description' | translate }}{{ 'addPages.description2' | translate }}</p>

<!--Content-->
<div class="flex flex-column gap-3 mb-2">
  <!--Row 1: Add pages-->
  <div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <aida-add-pages />
  </div>
  <!--Row 2: View pages-->
  <div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <aida-view-pages />
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddOrViewPagesComponent, { className: "AddOrViewPagesComponent", filePath: "src/app/views/tasks/add-pages/add-pages.component.ts", lineNumber: 16 });
})();
export {
  AddOrViewPagesComponent
};
//# sourceMappingURL=chunk-TVSKQR33.js.map
