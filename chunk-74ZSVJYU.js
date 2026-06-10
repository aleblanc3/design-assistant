import {
  Breadcrumb,
  BreadcrumbModule
} from "./chunk-H3JVCYZI.js";
import {
  IftaLabel,
  IftaLabelModule,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabsModule
} from "./chunk-G2XEEEKX.js";
import {
  Message,
  MessageModule,
  Textarea,
  TextareaModule,
  UserSettingsService
} from "./chunk-2C4SANN4.js";
import "./chunk-FL5HWTGW.js";
import {
  RouterLink,
  marker
} from "./chunk-WPUR2K7L.js";
import {
  InputText,
  InputTextModule,
  Select,
  SelectModule,
  Tooltip,
  TooltipModule
} from "./chunk-XAYNXU3L.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  TranslateModule,
  TranslatePipe
} from "./chunk-ZLW5LXTH.js";
import "./chunk-JKR6TEEB.js";
import {
  Component,
  ViewChildren,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4H6JJ3MH.js";
import "./chunk-XHF6QEKU.js";
import "./chunk-RRA4XQT4.js";
import "./chunk-CYNOUPYD.js";
import "./chunk-UN6MRPJZ.js";
import "./chunk-5XTRDBGH.js";
import "./chunk-6EM4UOB6.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/views/standalone/components/dev-tools/design-patterns/design-patterns.component.ts
var _c0 = ["codeContainer"];
var _forTrack0 = ($index, $item) => $item.label;
function DesignPatternsComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, item_r1.label));
  }
}
function DesignPatternsComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r1.label));
  }
}
function DesignPatternsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DesignPatternsComponent_ng_template_1_Conditional_0_Template, 3, 4, "a", 12)(1, DesignPatternsComponent_ng_template_1_Conditional_1_Template, 3, 3, "span", 13);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(item_r1.route ? 0 : 1);
  }
}
function DesignPatternsComponent_For_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r3.description));
  }
}
function DesignPatternsComponent_For_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 17);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const example_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("severity", example_r3.previewConfig.severity)("icon", example_r3.previewConfig.icon)("text", \u0275\u0275pipeBind1(1, 5, example_r3.previewConfig.text))("variant", example_r3.previewConfig.variant)("size", example_r3.previewConfig.size);
  }
}
function DesignPatternsComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesignPatternsComponent_For_26_Conditional_3_Template, 3, 3, "p", 15);
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, DesignPatternsComponent_For_26_Conditional_5_Template, 2, 7, "p-message", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p-button", 19);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_26_Template_p_button_onClick_7_listener() {
      const ctx_r3 = \u0275\u0275restoreView(_r2);
      const example_r3 = ctx_r3.$implicit;
      const \u0275$index_49_r5 = ctx_r3.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.copyCode(example_r3.code, "message-" + \u0275$index_49_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 20, 0);
    \u0275\u0275element(11, "code", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r3 = ctx.$implicit;
    const \u0275$index_49_r5 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r3.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r3.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r5.copiedIndex() === "message-" + \u0275$index_49_r5 ? "pi pi-check" : "pi pi-copy")("rounded", true)("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r3.code);
  }
}
function DesignPatternsComponent_For_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r8.description));
  }
}
function DesignPatternsComponent_For_30_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const btn_r9 = ctx.$implicit;
    \u0275\u0275property("label", btn_r9.label ? \u0275\u0275pipeBind1(1, 8, btn_r9.label) : void 0)("icon", btn_r9.icon)("severity", btn_r9.severity)("outlined", btn_r9.outlined)("text", btn_r9.text)("rounded", btn_r9.rounded)("styleClass", btn_r9.styleClass)("pTooltip", btn_r9.tooltip ? \u0275\u0275pipeBind1(2, 10, btn_r9.tooltip) : void 0);
  }
}
function DesignPatternsComponent_For_30_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, DesignPatternsComponent_For_30_Conditional_5_For_2_Template, 3, 12, "p-button", 23, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(example_r8.previewConfig.buttons);
  }
}
function DesignPatternsComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesignPatternsComponent_For_30_Conditional_3_Template, 3, 3, "p", 15);
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, DesignPatternsComponent_For_30_Conditional_5_Template, 3, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p-button", 19);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_30_Template_p_button_onClick_7_listener() {
      const ctx_r9 = \u0275\u0275restoreView(_r7);
      const example_r8 = ctx_r9.$implicit;
      const \u0275$index_79_r11 = ctx_r9.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.copyCode(example_r8.code, "button-" + \u0275$index_79_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 20, 0);
    \u0275\u0275element(11, "code", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r8 = ctx.$implicit;
    const \u0275$index_79_r11 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r8.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r8.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r8.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r5.copiedIndex() === "button-" + \u0275$index_79_r11 ? "pi pi-check" : "pi pi-copy")("rounded", true)("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r8.code);
  }
}
function DesignPatternsComponent_For_34_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r13.description));
  }
}
function DesignPatternsComponent_For_34_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r13.previewConfig.content, " ");
  }
}
function DesignPatternsComponent_For_34_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", example_r13.previewConfig.content, " ");
  }
}
function DesignPatternsComponent_For_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DesignPatternsComponent_For_34_Conditional_5_Conditional_0_Template, 2, 1, "div", 11)(1, DesignPatternsComponent_For_34_Conditional_5_Conditional_1_Template, 2, 1, "div", 24);
  }
  if (rf & 2) {
    const example_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(example_r13.previewConfig.type === "standard" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r13.previewConfig.type === "hover" ? 1 : -1);
  }
}
function DesignPatternsComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "h3", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesignPatternsComponent_For_34_Conditional_3_Template, 3, 3, "p", 15);
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, DesignPatternsComponent_For_34_Conditional_5_Template, 2, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p-button", 19);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_34_Template_p_button_onClick_7_listener() {
      const ctx_r13 = \u0275\u0275restoreView(_r12);
      const example_r13 = ctx_r13.$implicit;
      const \u0275$index_113_r15 = ctx_r13.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.copyCode(example_r13.code, "card-" + \u0275$index_113_r15));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 20, 0);
    \u0275\u0275element(11, "code", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r13 = ctx.$implicit;
    const \u0275$index_113_r15 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r13.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r13.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r13.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r5.copiedIndex() === "card-" + \u0275$index_113_r15 ? "pi pi-check" : "pi pi-copy")("rounded", true)("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r13.code);
  }
}
function DesignPatternsComponent_For_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const example_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, example_r17.description));
  }
}
function DesignPatternsComponent_For_38_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftaLabel")(1, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function DesignPatternsComponent_For_38_Conditional_5_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r5 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r5.exampleValue, $event) || (ctx_r5.exampleValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", example_r17.previewConfig.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.exampleValue);
    \u0275\u0275advance();
    \u0275\u0275property("for", example_r17.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, example_r17.previewConfig.label));
  }
}
function DesignPatternsComponent_For_38_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftaLabel")(1, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function DesignPatternsComponent_For_38_Conditional_5_Conditional_1_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r5 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r5.exampleTextarea, $event) || (ctx_r5.exampleTextarea = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", example_r17.previewConfig.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.exampleTextarea);
    \u0275\u0275property("rows", example_r17.previewConfig.rows);
    \u0275\u0275advance();
    \u0275\u0275property("for", example_r17.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, example_r17.previewConfig.label));
  }
}
function DesignPatternsComponent_For_38_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftaLabel")(1, "p-select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function DesignPatternsComponent_For_38_Conditional_5_Conditional_2_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r5 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r5.selectedOption, $event) || (ctx_r5.selectedOption = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const example_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inputId", example_r17.previewConfig.id)("options", ctx_r5.exampleOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.selectedOption);
    \u0275\u0275advance();
    \u0275\u0275property("for", example_r17.previewConfig.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, example_r17.previewConfig.label));
  }
}
function DesignPatternsComponent_For_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DesignPatternsComponent_For_38_Conditional_5_Conditional_0_Template, 5, 6, "p-iftaLabel")(1, DesignPatternsComponent_For_38_Conditional_5_Conditional_1_Template, 5, 7, "p-iftaLabel")(2, DesignPatternsComponent_For_38_Conditional_5_Conditional_2_Template, 5, 7, "p-iftaLabel");
  }
  if (rf & 2) {
    const example_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(example_r17.previewConfig.type === "text" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r17.previewConfig.type === "textarea" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r17.previewConfig.type === "select" ? 2 : -1);
  }
}
function DesignPatternsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DesignPatternsComponent_For_38_Conditional_3_Template, 3, 3, "p", 15);
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, DesignPatternsComponent_For_38_Conditional_5_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "p-button", 19);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("onClick", function DesignPatternsComponent_For_38_Template_p_button_onClick_7_listener() {
      const ctx_r20 = \u0275\u0275restoreView(_r16);
      const example_r17 = ctx_r20.$implicit;
      const \u0275$index_148_r22 = ctx_r20.$index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.copyCode(example_r17.code, "input-" + \u0275$index_148_r22));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "pre", 20, 0);
    \u0275\u0275element(11, "code", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const example_r17 = ctx.$implicit;
    const \u0275$index_148_r22 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(example_r17.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(example_r17.description ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(example_r17.previewConfig ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r5.copiedIndex() === "input-" + \u0275$index_148_r22 ? "pi pi-check" : "pi pi-copy")("rounded", true)("ariaLabel", \u0275\u0275pipeBind1(8, 7, "common.copyCode"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-code", example_r17.code);
  }
}
var DesignPatternsComponent = class _DesignPatternsComponent {
  settingsService = inject(UserSettingsService);
  codeContainers;
  breadcrumbs = [{ label: "dev._title", route: "/dev" }, { label: "dev.patterns._title" }];
  darkModeEffect;
  prismLoaded = false;
  copiedIndex = signal(null);
  markForTranslation() {
    marker("dev.patterns.message.info");
    marker("dev.patterns.message.success");
    marker("dev.patterns.message.warn");
    marker("dev.patterns.message.error");
    marker("dev.patterns.message.info.desc");
    marker("dev.patterns.message.success.desc");
    marker("dev.patterns.message.warn.desc");
    marker("dev.patterns.message.error.desc");
    marker("dev.patterns.button.primary.desc");
    marker("dev.patterns.button.danger.desc");
    marker("dev.patterns.button.task.desc");
    marker("dev.patterns.button.icon.desc");
    marker("dev.patterns.button.tooltip");
    marker("dev.patterns.button.taskLabel");
    marker("dev.patterns.card.desc");
    marker("dev.patterns.cardHover.desc");
    marker("dev.patterns.cardText");
    marker("dev.patterns.input.text.label");
    marker("dev.patterns.input.text.desc");
    marker("dev.patterns.input.textarea.label");
    marker("dev.patterns.input.textarea.desc");
    marker("dev.patterns.input.select.label");
    marker("dev.patterns.input.select.desc");
  }
  messageExamples = [
    {
      label: "Info",
      code: `<p-message severity="info" icon="pi pi-info-circle font-bold" [text]="'dev.patterns.message.info' | translate" />`,
      description: "dev.patterns.message.info.desc",
      previewType: "message",
      previewConfig: {
        severity: "info",
        icon: "pi pi-info-circle font-bold",
        text: "dev.patterns.message.info"
      }
    },
    {
      label: "Success",
      code: `<p-message severity="success" icon="pi pi-check-circle font-bold" [text]="'dev.patterns.message.success' | translate" />`,
      description: "dev.patterns.message.success.desc",
      previewType: "message",
      previewConfig: {
        severity: "success",
        icon: "pi pi-check-circle font-bold",
        text: "dev.patterns.message.success"
      }
    },
    {
      label: "Warning",
      code: `<p-message severity="warn" icon="pi pi-exclamation-triangle font-bold" [text]="'dev.patterns.message.warn' | translate" />`,
      description: "dev.patterns.message.warn.desc",
      previewType: "message",
      previewConfig: {
        severity: "warn",
        icon: "pi pi-exclamation-triangle font-bold",
        text: "dev.patterns.message.warn"
      }
    },
    {
      label: "Error",
      code: `<p-message severity="error" icon="pi pi-times-circle font-bold" [text]="'dev.patterns.message.error' | translate" />`,
      description: "dev.patterns.message.error.desc",
      previewType: "message",
      previewConfig: {
        severity: "error",
        icon: "pi pi-times-circle font-bold",
        text: "dev.patterns.message.error"
      }
    },
    {
      label: "Text version",
      code: `<p-message variant="simple" size="small" severity="error" [text]="'dev.patterns.message.error' | translate" />`,
      description: "dev.patterns.message.error.desc",
      previewType: "message",
      previewConfig: {
        variant: "simple",
        size: "small",
        severity: "error",
        text: "dev.patterns.message.error"
      }
    }
  ];
  buttonExamples = [
    {
      label: "Primary & Secondary Outline",
      code: `<div class="flex gap-2">
    <p-button [label]="'common.save' | translate" icon="pi pi-check" />
    <p-button [label]="'common.cancel' | translate" icon="pi pi-times" severity="secondary" outlined styleClass='secondary-outline' />
</div>`,
      description: "dev.patterns.button.primary.desc",
      previewType: "buttons",
      previewConfig: {
        type: "primary-secondary",
        buttons: [
          { label: "common.save", icon: "pi pi-check" },
          { label: "common.cancel", icon: "pi pi-times", severity: "secondary", outlined: true, styleClass: "secondary-outline" }
        ]
      }
    },
    {
      label: "Danger & Secondary Outline",
      code: `<div class="flex gap-2">
    <p-button [label]="'common.delete' | translate" icon="pi pi-trash" severity="danger" />
    <p-button [label]="'common.cancel' | translate" icon="pi pi-times" severity="secondary" outlined styleClass='secondary-outline' />
</div>`,
      description: "dev.patterns.button.danger.desc",
      previewType: "buttons",
      previewConfig: {
        type: "danger-secondary",
        buttons: [
          { label: "common.delete", icon: "pi pi-trash", severity: "danger" },
          { label: "common.cancel", icon: "pi pi-times", severity: "secondary", outlined: true, styleClass: "secondary-outline" }
        ]
      }
    },
    {
      label: "Secondary Task Button",
      code: `<p-button [label]="'dev.patterns.button.taskLabel' | translate" icon="pi pi-cog" outlined styleClass="secondary-outline" />`,
      description: "dev.patterns.button.task.desc",
      previewType: "buttons",
      previewConfig: {
        type: "task",
        buttons: [
          { label: "dev.patterns.button.taskLabel", icon: "pi pi-cog", outlined: true, styleClass: "secondary-outline" }
        ]
      }
    },
    {
      label: "Icon Buttons",
      code: `<div class="flex gap-2">
    <p-button icon="pi pi-trash" severity="danger" text rounded [pTooltip]="'dev.patterns.button.tooltip' | translate" tooltipPosition="top" />
    <p-button icon="pi pi-share-alt" severity="primary" text rounded [pTooltip]="'dev.patterns.button.tooltip' | translate" tooltipPosition="top" />
    <p-button icon="pi pi-sync" severity="primary" [pTooltip]="'dev.patterns.button.tooltip' | translate" tooltipPosition="top" />
</div>`,
      description: "dev.patterns.button.icon.desc",
      previewType: "buttons",
      previewConfig: {
        type: "icon",
        buttons: [
          { icon: "pi pi-trash", severity: "danger", text: true, rounded: true, tooltip: "dev.patterns.button.tooltip" },
          { icon: "pi pi-share-alt", severity: "primary", text: true, rounded: true, tooltip: "dev.patterns.button.tooltip" },
          { icon: "pi pi-sync", severity: "primary", tooltip: "dev.patterns.button.tooltip" }
        ]
      }
    }
  ];
  cardExamples = [
    {
      label: "Card",
      code: `<div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <!-- Content here -->
</div>`,
      description: "dev.patterns.card.desc",
      previewType: "card",
      previewConfig: {
        type: "standard",
        content: "Example content in a standard card"
      }
    },
    {
      label: "Card with hover effect",
      code: `<div class="surface-card border-round-lg shadow-1 hover:shadow-3 p-4 w-full min-w-min">
    <!-- Content here -->
</div>`,
      description: "dev.patterns.cardHover.desc",
      previewType: "card",
      previewConfig: {
        type: "hover",
        content: "Example content in a hover card"
      }
    }
  ];
  inputExamples = [
    {
      label: "Input Text with IFTA Label",
      code: `<p-iftaLabel>
    <input pInputText id="example-input" [(ngModel)]="value" fluid />
    <label for="example-input">{{ 'dev.patterns.input.text.label' | translate }}</label>
</p-iftaLabel>`,
      description: "dev.patterns.input.text.desc",
      previewType: "input",
      previewConfig: {
        type: "text",
        id: "example-input",
        label: "dev.patterns.input.text.label",
        model: "exampleValue"
      }
    },
    {
      label: "Textarea with IFTA Label",
      code: `<p-iftaLabel>
    <textarea pInputTextarea id="example-textarea" [(ngModel)]="value" rows="3" fluid></textarea>
    <label for="example-textarea">{{ 'dev.patterns.input.textarea.label' | translate }}</label>
</p-iftaLabel>`,
      description: "dev.patterns.input.textarea.desc",
      previewType: "input",
      previewConfig: {
        type: "textarea",
        id: "example-textarea",
        label: "dev.patterns.input.textarea.label",
        rows: 3,
        model: "exampleTextarea"
      }
    },
    {
      label: "Select with IFTA Label",
      code: `<p-iftaLabel>
    <p-select 
        inputId="example-select" 
        [options]="options" [(ngModel)]="selectedOption" 
        optionLabel="label" optionValue="value"
        fluid
    />
    <label for="example-select">{{ 'dev.patterns.input.select.label' | translate }}</label>
</p-iftaLabel>`,
      description: "dev.patterns.input.select.desc",
      previewType: "input",
      previewConfig: {
        type: "select",
        id: "example-select",
        label: "dev.patterns.input.select.label",
        model: "selectedOption"
      }
    }
  ];
  exampleValue = "";
  exampleTextarea = "";
  exampleOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];
  selectedOption = "";
  constructor() {
    this.darkModeEffect = effect(() => {
      const isDarkMode = this.settingsService.darkMode();
      if (this.prismLoaded) {
        this.loadPrismTheme(isDarkMode);
      }
    });
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      setTimeout(() => {
        this.highlightAllCode();
      }, 100);
      this.codeContainers.changes.subscribe(() => {
        setTimeout(() => {
          this.highlightAllCode();
        }, 100);
      });
    });
  }
  ngOnDestroy() {
    this.darkModeEffect.destroy();
  }
  highlightAllCode() {
    return __async(this, null, function* () {
      try {
        const { default: Prism } = yield import("./chunk-VUHQD6WR.js");
        yield import("./chunk-RGWANRPM.js");
        this.prismLoaded = true;
        this.loadPrismTheme(this.settingsService.darkMode());
        this.codeContainers.forEach((container) => {
          const pre = container.nativeElement;
          const codeBlock = pre.querySelector("code");
          const code = pre.getAttribute("data-code");
          if (codeBlock && code) {
            codeBlock.className = "language-html";
            codeBlock.textContent = code;
            Prism.highlightElement(codeBlock);
          }
        });
      } catch (error) {
        console.error("Failed to load Prism:", error);
      }
    });
  }
  loadPrismTheme(isDarkMode) {
    const existingLink = document.getElementById("prism-theme");
    const newHref = isDarkMode ? "css/prism-okaidia.min.css" : "css/prism.min.css";
    if (existingLink) {
      if (existingLink.href.endsWith(newHref))
        return;
      existingLink.href = newHref;
    } else {
      const link = document.createElement("link");
      link.id = "prism-theme";
      link.rel = "stylesheet";
      link.href = newHref;
      document.head.appendChild(link);
    }
  }
  copyCode(code, index) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(code);
        this.copiedIndex.set(index);
        setTimeout(() => this.copiedIndex.set(null), 2e3);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    });
  }
  static \u0275fac = function DesignPatternsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DesignPatternsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DesignPatternsComponent, selectors: [["aida-design-patterns"]], viewQuery: function DesignPatternsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeContainers = _t);
    }
  }, decls: 39, vars: 19, consts: [["codeContainer", ""], [3, "model"], ["pTemplate", "item"], [1, "p-4"], [1, "text-color-secondary", "mb-4"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "flex", "flex-column", "gap-4"], [1, "surface-section", "border-1", "surface-border", "border-round", "p-4"], [1, "surface-card", "border-round-lg", "shadow-2", "p-4", "w-full", "min-w-min"], [1, "p-menuitem-link", 3, "routerLink"], [1, "p-menuitem-text"], [1, "mt-0"], [1, "text-color-secondary", "mt-0"], [1, "mb-3"], [3, "severity", "icon", "text", "variant", "size"], [1, "relative"], ["size", "small", "severity", "secondary", "styleClass", "absolute top-0 right-0 mt-2 mr-2 secondary-outline", 3, "onClick", "icon", "rounded", "ariaLabel"], [1, "m-0"], [1, "language-html"], [1, "flex", "gap-2"], ["tooltipPosition", "top", 3, "label", "icon", "severity", "outlined", "text", "rounded", "styleClass", "pTooltip"], [1, "surface-card", "border-round-lg", "shadow-1", "hover:shadow-3", "p-4", "w-full", "min-w-min"], ["pInputText", "", "fluid", "", 3, "ngModelChange", "id", "ngModel"], [3, "for"], ["pInputTextarea", "", "fluid", "", 3, "ngModelChange", "id", "ngModel", "rows"], ["optionLabel", "label", "optionValue", "value", "fluid", "", 3, "ngModelChange", "inputId", "options", "ngModel"]], template: function DesignPatternsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-breadcrumb", 1);
      \u0275\u0275template(1, DesignPatternsComponent_ng_template_1_Template, 2, 1, "ng-template", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-tabs", 5)(10, "p-tablist")(11, "p-tab", 5);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-tab", 6);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-tab", 7);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p-tab", 8);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-tabpanel", 5)(24, "div", 9);
      \u0275\u0275repeaterCreate(25, DesignPatternsComponent_For_26_Template, 12, 9, "div", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "p-tabpanel", 6)(28, "div", 9);
      \u0275\u0275repeaterCreate(29, DesignPatternsComponent_For_30_Template, 12, 9, "div", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "p-tabpanel", 7)(32, "div", 9);
      \u0275\u0275repeaterCreate(33, DesignPatternsComponent_For_34_Template, 12, 9, "div", 11, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "p-tabpanel", 8)(36, "div", 9);
      \u0275\u0275repeaterCreate(37, DesignPatternsComponent_For_38_Template, 12, 9, "div", 10, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("model", ctx.breadcrumbs);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "dev.patterns._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "dev.patterns.description"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "dev.patterns.tab.messages"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "dev.patterns.tab.buttons"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "dev.patterns.tab.cards"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 17, "dev.patterns.tab.inputs"));
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.messageExamples);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.buttonExamples);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.cardExamples);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.inputExamples);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslateModule,
    TranslatePipe,
    RouterLink,
    BreadcrumbModule,
    Breadcrumb,
    PrimeTemplate,
    TabsModule,
    Tabs,
    TabPanel,
    TabList,
    Tab,
    MessageModule,
    Message,
    ButtonModule,
    Button,
    TooltipModule,
    Tooltip,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    IftaLabelModule,
    IftaLabel
  ], styles: ['\n\npre[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  overflow-x: auto;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=design-patterns.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesignPatternsComponent, [{
    type: Component,
    args: [{ selector: "aida-design-patterns", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      RouterLink,
      BreadcrumbModule,
      TabsModule,
      MessageModule,
      ButtonModule,
      TooltipModule,
      InputTextModule,
      TextareaModule,
      SelectModule,
      IftaLabelModule
    ], template: `<p-breadcrumb [model]="breadcrumbs">\r
    <ng-template pTemplate="item" let-item>\r
        @if(item.route){\r
        <a [routerLink]="item.route" class="p-menuitem-link">{{ item.label | translate }}</a>\r
        }\r
        @else{\r
        <span class="p-menuitem-text">{{ item.label | translate }}</span>\r
        }\r
    </ng-template>\r
</p-breadcrumb>\r
\r
<div class="p-4">\r
    <h1>{{ 'dev.patterns._title' | translate }}</h1>\r
    <p class="text-color-secondary mb-4">{{ 'dev.patterns.description' | translate }}</p>\r
\r
    <p-tabs value="0">\r
        <p-tablist>\r
            <p-tab value="0">{{'dev.patterns.tab.messages' | translate}}</p-tab>\r
            <p-tab value="1">{{'dev.patterns.tab.buttons' | translate}}</p-tab>\r
            <p-tab value="2">{{'dev.patterns.tab.cards' | translate}}</p-tab>\r
            <p-tab value="3">{{'dev.patterns.tab.inputs' | translate}}</p-tab>\r
        </p-tablist>\r
        <!-- Messages Tab -->\r
        <p-tabpanel value="0">\r
            <div class="flex flex-column gap-4">\r
                @for (example of messageExamples; track example.label; let i = $index) {\r
                <div class="surface-section border-1 surface-border border-round p-4">\r
                    <h3 class="mt-0">{{ example.label }}</h3>\r
                    @if (example.description) {\r
                    <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>\r
                    }\r
\r
                    <!-- Live Preview (config-driven) -->\r
                    <div class="mb-3">\r
                        @if (example.previewConfig) {\r
                        <p-message\r
                                   [severity]="example.previewConfig.severity"\r
                                   [icon]="example.previewConfig.icon"\r
                                   [text]="example.previewConfig.text | translate"\r
                                   [variant]="example.previewConfig.variant"\r
                                   [size]="example.previewConfig.size" />\r
                        }\r
                    </div>\r
\r
                    <!-- Code Block -->\r
                    <div class="relative">\r
                        <p-button\r
                                  [icon]="copiedIndex() === 'message-' + i ? 'pi pi-check' : 'pi pi-copy'"\r
                                  (onClick)="copyCode(example.code, 'message-' + i)"\r
                                  [rounded]="true"\r
                                  size="small"\r
                                  severity="secondary"\r
                                  styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"\r
                                  [ariaLabel]="'common.copyCode' | translate" />\r
                        <pre class="m-0" #codeContainer [attr.data-code]="example.code"><code class="language-html"></code></pre>\r
                    </div>\r
                </div>\r
                }\r
            </div>\r
        </p-tabpanel>\r
\r
        <!-- Buttons Tab -->\r
        <p-tabpanel value="1">\r
            <div class="flex flex-column gap-4">\r
                @for (example of buttonExamples; track example.label; let i = $index) {\r
                <div class="surface-section border-1 surface-border border-round p-4">\r
                    <h3 class="mt-0">{{ example.label }}</h3>\r
                    @if (example.description) {\r
                    <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>\r
                    }\r
\r
                    <!-- Live Preview (config-driven) -->\r
                    <div class="mb-3">\r
                        @if (example.previewConfig) {\r
                        <div class="flex gap-2">\r
                            @for (btn of example.previewConfig.buttons; track $index) {\r
                            <p-button\r
                                      [label]="btn.label ? (btn.label | translate) : undefined"\r
                                      [icon]="btn.icon"\r
                                      [severity]="btn.severity"\r
                                      [outlined]="btn.outlined"\r
                                      [text]="btn.text"\r
                                      [rounded]="btn.rounded"\r
                                      [styleClass]="btn.styleClass"\r
                                      [pTooltip]="btn.tooltip ? (btn.tooltip | translate) : undefined"\r
                                      tooltipPosition="top" />\r
                            }\r
                        </div>\r
                        }\r
                    </div>\r
\r
                    <!-- Code Block -->\r
                    <div class="relative">\r
                        <p-button\r
                                  [icon]="copiedIndex() === 'button-' + i ? 'pi pi-check' : 'pi pi-copy'"\r
                                  (onClick)="copyCode(example.code, 'button-' + i)"\r
                                  [rounded]="true"\r
                                  size="small"\r
                                  severity="secondary"\r
                                  styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"\r
                                  [ariaLabel]="'common.copyCode' | translate" />\r
                        <pre class="m-0" #codeContainer [attr.data-code]="example.code"><code class="language-html"></code></pre>\r
                    </div>\r
                </div>\r
                }\r
            </div>\r
        </p-tabpanel>\r
\r
        <!-- Card Styles Tab -->\r
        <p-tabpanel value="2">\r
            <div class="flex flex-column gap-4">\r
                @for (example of cardExamples; track example.label; let i = $index) {\r
                <div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">\r
                    <h3 class="mt-0">{{ example.label }}</h3>\r
                    @if (example.description) {\r
                    <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>\r
                    }\r
\r
                    <!-- Live Preview (config-driven) -->\r
                    <div class="mb-3">\r
                        @if (example.previewConfig) {\r
                        @if (example.previewConfig.type === 'standard') {\r
                        <div class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">\r
                            {{ example.previewConfig.content }}\r
                        </div>\r
                        }\r
                        @if (example.previewConfig.type === 'hover') {\r
                        <div class="surface-card border-round-lg shadow-1 hover:shadow-3 p-4 w-full min-w-min">\r
                            {{ example.previewConfig.content }}\r
                        </div>\r
                        }\r
                        }\r
                    </div>\r
\r
                    <!-- Code Block -->\r
                    <div class="relative">\r
                        <p-button\r
                                  [icon]="copiedIndex() === 'card-' + i ? 'pi pi-check' : 'pi pi-copy'"\r
                                  (onClick)="copyCode(example.code, 'card-' + i)"\r
                                  [rounded]="true"\r
                                  size="small"\r
                                  severity="secondary"\r
                                  styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"\r
                                  [ariaLabel]="'common.copyCode' | translate" />\r
                        <pre class="m-0" #codeContainer [attr.data-code]="example.code"><code class="language-html"></code></pre>\r
                    </div>\r
                </div>\r
                }\r
            </div>\r
        </p-tabpanel>\r
\r
        <!-- Input Fields Tab -->\r
        <p-tabpanel value="3">\r
            <div class="flex flex-column gap-4">\r
                @for (example of inputExamples; track example.label; let i = $index) {\r
                <div class="surface-section border-1 surface-border border-round p-4">\r
                    <h3 class="mt-0">{{ example.label }}</h3>\r
                    @if (example.description) {\r
                    <p class="text-color-secondary mt-0">{{ example.description | translate }}</p>\r
                    }\r
\r
                    <!-- Live Preview (config-driven) -->\r
                    <div class="mb-3">\r
                        @if (example.previewConfig) {\r
                        @if (example.previewConfig.type === 'text') {\r
                        <p-iftaLabel>\r
                            <input pInputText [id]="example.previewConfig.id" [(ngModel)]="exampleValue" fluid />\r
                            <label [for]="example.previewConfig.id">{{ example.previewConfig.label | translate }}</label>\r
                        </p-iftaLabel>\r
                        }\r
                        @if (example.previewConfig.type === 'textarea') {\r
                        <p-iftaLabel>\r
                            <textarea pInputTextarea [id]="example.previewConfig.id" [(ngModel)]="exampleTextarea" [rows]="example.previewConfig.rows" fluid></textarea>\r
                            <label [for]="example.previewConfig.id">{{ example.previewConfig.label | translate }}</label>\r
                        </p-iftaLabel>\r
                        }\r
                        @if (example.previewConfig.type === 'select') {\r
                        <p-iftaLabel>\r
                            <p-select\r
                                      [inputId]="example.previewConfig.id"\r
                                      [options]="exampleOptions"\r
                                      [(ngModel)]="selectedOption"\r
                                      optionLabel="label"\r
                                      optionValue="value"\r
                                      fluid />\r
                            <label [for]="example.previewConfig.id">{{ example.previewConfig.label | translate }}</label>\r
                        </p-iftaLabel>\r
                        }\r
                        }\r
                    </div>\r
\r
                    <!-- Code Block -->\r
                    <div class="relative">\r
                        <p-button\r
                                  [icon]="copiedIndex() === 'input-' + i ? 'pi pi-check' : 'pi pi-copy'"\r
                                  (onClick)="copyCode(example.code, 'input-' + i)"\r
                                  [rounded]="true"\r
                                  size="small"\r
                                  severity="secondary"\r
                                  styleClass="absolute top-0 right-0 mt-2 mr-2 secondary-outline"\r
                                  [ariaLabel]="'common.copyCode' | translate" />\r
                        <pre class="m-0" #codeContainer [attr.data-code]="example.code"><code class="language-html"></code></pre>\r
                    </div>\r
                </div>\r
                }\r
            </div>\r
        </p-tabpanel>\r
    </p-tabs>\r
</div>`, styles: ['/* src/app/views/standalone/components/dev-tools/design-patterns/design-patterns.component.css */\npre {\n  background-color: var(--surface-ground);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  overflow-x: auto;\n}\npre code {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=design-patterns.component.css.map */\n'] }]
  }], () => [], { codeContainers: [{
    type: ViewChildren,
    args: ["codeContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DesignPatternsComponent, { className: "DesignPatternsComponent", filePath: "src/app/views/standalone/components/dev-tools/design-patterns/design-patterns.component.ts", lineNumber: 39 });
})();
export {
  DesignPatternsComponent
};
//# sourceMappingURL=chunk-74ZSVJYU.js.map
