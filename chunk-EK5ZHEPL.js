import {
  Button,
  ButtonModule
} from "./chunk-MJIYSJ7V.js";
import {
  RouterLink
} from "./chunk-TULSGE2I.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LBDVV6V6.js";

// src/app/components/add-pages/add-pages-link/add-pages-link.component.ts
function AddPagesLinkComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "inventory.emptyMessage"));
  }
}
var AddPagesLinkComponent = class _AddPagesLinkComponent {
  buttonOnly = input(false, ...ngDevMode ? [{ debugName: "buttonOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AddPagesLinkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPagesLinkComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPagesLinkComponent, selectors: [["aida-add-pages-link"]], inputs: { buttonOnly: [1, "buttonOnly"] }, decls: 8, vars: 5, consts: [[1, "flex", "flex-column", "gap-2"], ["fluid", "", "routerLink", "/tasks/add-pages", "styleClass", "white-space-nowrap", 3, "size"], [1, "material-icons-outlined", "text-lg"]], template: function AddPagesLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, AddPagesLinkComponent_Conditional_1_Template, 3, 3, "p");
      \u0275\u0275elementStart(2, "p-button", 1)(3, "span", 2);
      \u0275\u0275text(4, "note_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.buttonOnly() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("size", ctx.buttonOnly() ? "small" : void 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "addPages.addToProjectButton"));
    }
  }, dependencies: [RouterLink, ButtonModule, Button, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPagesLinkComponent, [{
    type: Component,
    args: [{ selector: "aida-add-pages-link", imports: [RouterLink, TranslatePipe, ButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-column gap-2">
  @if (!buttonOnly()) {
    <p>{{ 'inventory.emptyMessage' | translate }}</p>
  }
  <p-button [size]="buttonOnly() ? 'small' : undefined" fluid routerLink="/tasks/add-pages" styleClass="white-space-nowrap">
    <span class="material-icons-outlined text-lg">note_add</span><span>{{ 'addPages.addToProjectButton' | translate }}</span>
  </p-button>
</div>
` }]
  }], null, { buttonOnly: [{ type: Input, args: [{ isSignal: true, alias: "buttonOnly", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPagesLinkComponent, { className: "AddPagesLinkComponent", filePath: "src/app/components/add-pages/add-pages-link/add-pages-link.component.ts", lineNumber: 14 });
})();

export {
  AddPagesLinkComponent
};
//# sourceMappingURL=chunk-EK5ZHEPL.js.map
