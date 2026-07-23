import {
  Tag,
  TagModule
} from "./chunk-NPEN557G.js";
import {
  Chip,
  ProgressSpinner,
  ProgressSpinnerModule,
  TimesCircleIcon
} from "./chunk-RS4VGJGP.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-6RHFJHM2.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-5GZW554S.js";
import {
  ChevronDownIcon,
  InputText,
  Overlay,
  Scroller
} from "./chunk-PARTGYZQ.js";
import {
  AddUrlsService,
  AirtableService,
  ProgressBar,
  ProgressBarModule,
  ProjectStateService
} from "./chunk-VQOKC7Q3.js";
import {
  FetchService
} from "./chunk-T7NOQHWP.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-LY7G7VXT.js";
import {
  TimesIcon
} from "./chunk-EKIRHXEG.js";
import {
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  ButtonModule,
  CommonModule,
  DecimalPipe,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PrimeNG,
  PrimeTemplate,
  Ripple,
  SharedModule,
  SpinnerIcon,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  TranslationKeys,
  findSingle,
  focus,
  getSelection,
  uuid
} from "./chunk-YD3UXEIO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3I2QHJYF.js";
import {
  equals,
  findLastIndex,
  isEmpty,
  isNotEmpty,
  resolveFieldData
} from "./chunk-6EM4UOB6.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/primeng/fesm2022/primeng-icons-angledown.mjs
var AngleDownIcon = class _AngleDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleDownIcon_BaseFactory;
    return function AngleDownIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleDownIcon_BaseFactory || (\u0275AngleDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleDownIcon)))(__ngFactoryType__ || _AngleDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleDownIcon,
    selectors: [["AngleDownIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
    template: function AngleDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDownIcon, [{
    type: Component,
    args: [{
      selector: "AngleDownIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleup.mjs
var AngleUpIcon = class _AngleUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AngleUpIcon_BaseFactory;
    return function AngleUpIcon_Factory(__ngFactoryType__) {
      return (\u0275AngleUpIcon_BaseFactory || (\u0275AngleUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_AngleUpIcon)))(__ngFactoryType__ || _AngleUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AngleUpIcon,
    selectors: [["AngleUpIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z", "fill", "currentColor"]],
    template: function AngleUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleUpIcon, [{
    type: Component,
    args: [{
      selector: "AngleUpIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-autocomplete.mjs
var _c0 = ["item"];
var _c1 = ["empty"];
var _c2 = ["header"];
var _c3 = ["footer"];
var _c4 = ["selecteditem"];
var _c5 = ["group"];
var _c6 = ["loader"];
var _c7 = ["removeicon"];
var _c8 = ["loadingicon"];
var _c9 = ["clearicon"];
var _c10 = ["dropdownicon"];
var _c11 = ["container"];
var _c12 = ["focusInput"];
var _c13 = ["multiIn"];
var _c14 = ["multiContainer"];
var _c15 = ["ddBtn"];
var _c16 = ["items"];
var _c17 = ["scroller"];
var _c18 = ["overlay"];
var _c19 = (a0) => ({
  "p-autocomplete-chip-item": true,
  "p-focus": a0
});
var _c20 = (a0) => ({
  $implicit: a0
});
var _c21 = (a0, a1) => ({
  class: "p-autocomplete-chip-icon",
  removeCallback: a0,
  index: a1
});
var _c22 = (a0) => ({
  height: a0
});
var _c23 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c24 = (a0) => ({
  options: a0
});
var _c25 = () => ({});
var _c26 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function AutoComplete_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 19, 3);
    \u0275\u0275listener("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKeyUp($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_26_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.inputStyleClass);
    \u0275\u0275property("pAutoFocus", ctx_r2.autofocus)("ngClass", "p-autocomplete-input")("ngStyle", ctx_r2.inputStyle)("type", ctx_r2.type)("variant", ctx_r2.variant)("autocomplete", ctx_r2.autocomplete)("required", ctx_r2.required)("name", ctx_r2.name)("pSize", ctx_r2.size)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled)("fluid", ctx_r2.hasFluid);
    \u0275\u0275attribute("value", ctx_r2.inputValue())("id", ctx_r2.inputId)("placeholder", ctx_r2.placeholder)("maxlength", ctx_r2.maxlength)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-expanded", (tmp_26_0 = ctx_r2.overlayVisible) !== null && tmp_26_0 !== void 0 ? tmp_26_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 22);
    \u0275\u0275listener("click", function AutoComplete_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-autocomplete-clear-icon");
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275listener("click", function AutoComplete_ng_container_3_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275template(1, AutoComplete_ng_container_3_span_2_1_Template, 1, 0, null, 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function AutoComplete_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 20)(2, AutoComplete_ng_container_3_span_2_Template, 2, 2, "span", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ul_4_li_2_p_chip_3_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275listener("click", function AutoComplete_ul_4_li_2_p_chip_3_ng_container_1_ng_template_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const i_r8 = \u0275\u0275nextContext(3).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!ctx_r2.readonly ? ctx_r2.removeOption($event, i_r8) : "");
    });
    \u0275\u0275element(1, "TimesCircleIcon", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", "p-autocomplete-chip-icon");
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_ul_4_li_2_p_chip_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ul_4_li_2_p_chip_3_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function AutoComplete_ul_4_li_2_p_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-chip", 32);
    \u0275\u0275listener("onRemove", function AutoComplete_ul_4_li_2_p_chip_3_Template_p_chip_onRemove_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const i_r8 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!ctx_r2.readonly ? ctx_r2.removeOption($event, i_r8) : "");
    });
    \u0275\u0275template(1, AutoComplete_ul_4_li_2_p_chip_3_ng_container_1_Template, 3, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r2.getOptionLabel(option_r10))("removable", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.removeIconTemplate && !ctx_r2._removeIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ul_4_li_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ul_4_li_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ul_4_li_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, AutoComplete_ul_4_li_2_span_4_1_Template, 1, 0, null, 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.removeIconTemplate || ctx_r2._removeIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c21, ctx_r2.removeOption.bind(ctx_r2), i_r8));
  }
}
function AutoComplete_ul_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29, 5);
    \u0275\u0275template(2, AutoComplete_ul_4_li_2_ng_container_2_Template, 1, 0, "ng-container", 30)(3, AutoComplete_ul_4_li_2_p_chip_3_Template, 2, 3, "p-chip", 31)(4, AutoComplete_ul_4_li_2_span_4_Template, 2, 5, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c19, ctx_r2.focusedMultipleOptionIndex() === i_r8));
    \u0275\u0275attribute("id", ctx_r2.id + "_multiple_option_" + i_r8)("aria-label", ctx_r2.getOptionLabel(option_r10))("aria-setsize", ctx_r2.modelValue().length)("aria-posinset", i_r8 + 1)("aria-selected", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.selectedItemTemplate || ctx_r2._selectedItemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c20, option_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedItemTemplate && !ctx_r2._selectedItemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.removeIconTemplate || ctx_r2._removeIconTemplate);
  }
}
function AutoComplete_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 25, 4);
    \u0275\u0275listener("focus", function AutoComplete_ul_4_Template_ul_focus_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMultipleContainerFocus($event));
    })("blur", function AutoComplete_ul_4_Template_ul_blur_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMultipleContainerBlur($event));
    })("keydown", function AutoComplete_ul_4_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMultipleContainerKeyDown($event));
    });
    \u0275\u0275template(2, AutoComplete_ul_4_li_2_Template, 5, 14, "li", 26);
    \u0275\u0275elementStart(3, "li", 27)(4, "input", 28, 3);
    \u0275\u0275listener("input", function AutoComplete_ul_4_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    })("keydown", function AutoComplete_ul_4_Template_input_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("change", function AutoComplete_ul_4_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputChange($event));
    })("focus", function AutoComplete_ul_4_Template_input_focus_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function AutoComplete_ul_4_Template_input_blur_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("paste", function AutoComplete_ul_4_Template_input_paste_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputPaste($event));
    })("keyup", function AutoComplete_ul_4_Template_input_keyup_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKeyUp($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_28_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.inputMultipleClass)("tabindex", -1);
    \u0275\u0275attribute("aria-orientation", "horizontal")("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedMultipleOptionId : void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.modelValue());
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.inputStyleClass);
    \u0275\u0275property("pAutoFocus", ctx_r2.autofocus)("ngClass", ctx_r2.inputClass)("ngStyle", ctx_r2.inputStyle)("autocomplete", ctx_r2.autocomplete)("required", ctx_r2.required)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("readonly", ctx_r2.readonly)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("type", ctx_r2.type)("id", ctx_r2.inputId)("name", ctx_r2.name)("placeholder", !ctx_r2.filled ? ctx_r2.placeholder : null)("maxlength", ctx_r2.maxlength)("aria-label", ctx_r2.ariaLabel)("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-required", ctx_r2.required)("aria-expanded", (tmp_28_0 = ctx_r2.overlayVisible) !== null && tmp_28_0 !== void 0 ? tmp_28_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0);
  }
}
function AutoComplete_ng_container_5_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SpinnerIcon", 37);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-autocomplete-loader")("spin", true);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275template(1, AutoComplete_ng_container_5_span_2_1_Template, 1, 0, null, 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
  }
}
function AutoComplete_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_container_5_SpinnerIcon_1_Template, 1, 3, "SpinnerIcon", 35)(2, AutoComplete_ng_container_5_span_2_Template, 2, 2, "span", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingIconTemplate && !ctx_r2._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
  }
}
function AutoComplete_button_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 41);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.dropdownIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon");
  }
}
function AutoComplete_button_6_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function AutoComplete_button_6_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_button_6_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template, 1, 0, "ChevronDownIcon", 15)(2, AutoComplete_button_6_ng_container_3_2_Template, 1, 0, null, 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIconTemplate && !ctx_r2._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate);
  }
}
function AutoComplete_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39, 7);
    \u0275\u0275listener("click", function AutoComplete_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDropdownClick($event));
    });
    \u0275\u0275template(2, AutoComplete_button_6_span_2_Template, 1, 2, "span", 40)(3, AutoComplete_button_6_ng_container_3_Template, 3, 2, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-label", ctx_r2.dropdownAriaLabel)("tabindex", ctx_r2.tabindex);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.dropdownIcon);
  }
}
function AutoComplete_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_p_scroller_3_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_p_scroller_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_template_9_p_scroller_3_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r15 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c23, items_r13, scrollerOptions_r14));
  }
}
function AutoComplete_ng_template_9_p_scroller_3_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_p_scroller_3_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_template_9_p_scroller_3_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c24, scrollerOptions_r16));
  }
}
function AutoComplete_ng_template_9_p_scroller_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_template_9_p_scroller_3_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function AutoComplete_ng_template_9_p_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 46, 9);
    \u0275\u0275listener("onLazyLoad", function AutoComplete_ng_template_9_p_scroller_3_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, AutoComplete_ng_template_9_p_scroller_3_ng_template_2_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, AutoComplete_ng_template_9_p_scroller_3_ng_container_4_Template, 3, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(8, _c22, ctx_r2.scrollHeight));
    \u0275\u0275property("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate);
  }
}
function AutoComplete_ng_template_9_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AutoComplete_ng_template_9_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r15 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c23, ctx_r2.visibleOptions(), \u0275\u0275pureFunction0(2, _c25)));
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 50);
    \u0275\u0275template(2, AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 15)(3, AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c22, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c20, option_r17.optionGroup));
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getOptionLabel(option_r17));
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 51);
    \u0275\u0275listener("click", function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const option_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOptionSelect($event, option_r17));
    })("mouseenter", function AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const i_r19 = \u0275\u0275nextContext().index;
      const scrollerOptions_r20 = \u0275\u0275nextContext().options;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    \u0275\u0275template(2, AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_span_2_Template, 2, 1, "span", 15)(3, AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = \u0275\u0275nextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c22, scrollerOptions_r20.itemSize + "px"))("ngClass", ctx_r2.optionClass(option_r17, i_r19, scrollerOptions_r20));
    \u0275\u0275attribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("aria-label", ctx_r2.getOptionLabel(option_r17))("aria-selected", ctx_r2.isSelected(option_r17))("aria-disabled", ctx_r2.isOptionDisabled(option_r17))("data-p-focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("aria-setsize", ctx_r2.ariaSetSize)("aria-posinset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.itemTemplate && !ctx_r2._itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.itemTemplate || ctx_r2._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(14, _c26, option_r17, scrollerOptions_r20.getOptions ? scrollerOptions_r20.getOptions(i_r19) : i_r19));
  }
}
function AutoComplete_ng_template_9_ng_template_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 15)(1, AutoComplete_ng_template_9_ng_template_5_ng_template_2_ng_container_1_Template, 4, 17, "ng-container", 15);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.isOptionGroup(option_r17));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function AutoComplete_ng_template_9_ng_template_5_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.searchResultMessageText, " ");
  }
}
function AutoComplete_ng_template_9_ng_template_5_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 12);
  }
}
function AutoComplete_ng_template_9_ng_template_5_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 52);
    \u0275\u0275template(1, AutoComplete_ng_template_9_ng_template_5_li_3_ng_container_1_Template, 2, 1, "ng-container", 53)(2, AutoComplete_ng_template_9_ng_template_5_li_3_ng_container_2_Template, 2, 0, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = \u0275\u0275nextContext().options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c22, scrollerOptions_r20.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.emptyTemplate && !ctx_r2._emptyTemplate)("ngIfElse", ctx_r2.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.emptyTemplate || ctx_r2._emptyTemplate);
  }
}
function AutoComplete_ng_template_9_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 47, 11);
    \u0275\u0275template(2, AutoComplete_ng_template_9_ng_template_5_ng_template_2_Template, 2, 2, "ng-template", 48)(3, AutoComplete_ng_template_9_ng_template_5_li_3_Template, 3, 6, "li", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r20.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r20.contentStyleClass);
    \u0275\u0275attribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !items_r22 || items_r22 && items_r22.length === 0 && ctx_r2.showEmptyMessage);
  }
}
function AutoComplete_ng_template_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AutoComplete_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, AutoComplete_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 24);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275template(3, AutoComplete_ng_template_9_p_scroller_3_Template, 5, 10, "p-scroller", 44)(4, AutoComplete_ng_template_9_ng_container_4_Template, 2, 6, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AutoComplete_ng_template_9_ng_template_5_Template, 4, 7, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(7, AutoComplete_ng_template_9_ng_container_7_Template, 1, 0, "ng-container", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.panelStyleClass);
    \u0275\u0275property("ngClass", ctx_r2.panelClass)("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedMessageText, " ");
  }
}
var theme = ({
  dt
}) => `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${dt("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${dt("autocomplete.dropdown.width")} + ${dt("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt("autocomplete.dropdown.width")};
    border-start-end-radius: ${dt("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${dt("autocomplete.dropdown.border.radius")};
    background: ${dt("autocomplete.dropdown.background")};
    border: 1px solid ${dt("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${dt("autocomplete.dropdown.color")};
    transition: background ${dt("autocomplete.transition.duration")}, color ${dt("autocomplete.transition.duration")}, border-color ${dt("autocomplete.transition.duration")}, outline-color ${dt("autocomplete.transition.duration")}, box-shadow ${dt("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${dt("autocomplete.dropdown.hover.background")};
    border-color: ${dt("autocomplete.dropdown.hover.border.color")};
    color: ${dt("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${dt("autocomplete.dropdown.active.background")};
    border-color: ${dt("autocomplete.dropdown.active.border.color")};
    color: ${dt("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${dt("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${dt("autocomplete.dropdown.focus.ring.width")} ${dt("autocomplete.dropdown.focus.ring.style")} ${dt("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${dt("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    background: ${dt("autocomplete.overlay.background")};
    color: ${dt("autocomplete.overlay.color")};
    border: 1px solid ${dt("autocomplete.overlay.border.color")};
    border-radius: ${dt("autocomplete.overlay.border.radius")};
    box-shadow: ${dt("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${dt("autocomplete.list.gap")};
    padding: ${dt("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${dt("autocomplete.option.padding")};
    border: 0 none;
    color: ${dt("autocomplete.option.color")};
    background: transparent;
    transition: background ${dt("autocomplete.transition.duration")}, color ${dt("autocomplete.transition.duration")}, border-color ${dt("autocomplete.transition.duration")};
    border-radius: ${dt("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${dt("autocomplete.option.focus.background")};
    color: ${dt("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${dt("autocomplete.option.selected.background")};
    color: ${dt("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${dt("autocomplete.option.selected.focus.background")};
    color: ${dt("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${dt("autocomplete.option.group.padding")};
    color: ${dt("autocomplete.option.group.color")};
    background: ${dt("autocomplete.option.group.background")};
    font-weight: ${dt("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${dt("autocomplete.padding.y")} / 2) ${dt("autocomplete.padding.x")};
    gap: calc(${dt("autocomplete.padding.y")} / 2);
    color: ${dt("autocomplete.color")};
    background: ${dt("autocomplete.background")};
    border: 1px solid ${dt("autocomplete.border.color")};
    border-radius: ${dt("autocomplete.border.radius")};
    width: 100%;
    transition: background ${dt("autocomplete.transition.duration")}, color ${dt("autocomplete.transition.duration")}, border-color ${dt("autocomplete.transition.duration")}, outline-color ${dt("autocomplete.transition.duration")}, box-shadow ${dt("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${dt("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${dt("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${dt("autocomplete.focus.border.color")};
    box-shadow: ${dt("autocomplete.focus.ring.shadow")};
    outline: ${dt("autocomplete.focus.ring.width")} ${dt("autocomplete.focus.ring.style")} ${dt("autocomplete.focus.ring.color")};
    outline-offset: ${dt("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${dt("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${dt("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${dt("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${dt("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled {
    opacity: 1;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${dt("autocomplete.disabled.background")};
    color: ${dt("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${dt("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${dt("autocomplete.padding.y")} / 2);
    border-radius: ${dt("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${dt("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${dt("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${dt("autocomplete.chip.focus.background")};
    color: ${dt("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${dt("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${dt("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${dt("autocomplete.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${dt("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${dt("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${dt("form.field.sm.font.size")};
    width: ${dt("form.field.sm.font.size")};
    height: ${dt("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${dt("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${dt("form.field.lg.font.size")};
    width: ${dt("form.field.lg.font.size")};
    height: ${dt("form.field.lg.font.size")};
}

.p-autocomplete-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${dt("autocomplete.padding.x")};
    color: ${dt("autocomplete.dropdown.color")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
    right: calc(${dt("autocomplete.padding.x")} + ${dt("autocomplete.dropdown.width")});
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: ${dt("autocomplete.invalid.border.color")};
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${dt("autocomplete.focus.border.color")};
}
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: ${dt("autocomplete.invalid.placeholder.color")};
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: ${dt("autocomplete.invalid.placeholder.color")};
}`;
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-autocomplete p-component p-inputwrapper": true,
    "p-disabled": instance.disabled,
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.filled,
    "p-inputwrapper-focus": instance.focused && !instance.disabled || instance.autofocus || instance.overlayVisible,
    "p-autocomplete-open": instance.overlayVisible,
    "p-autocomplete-clearable": instance.showClear && !instance.disabled,
    // 'p-invalid': instance.invalid,
    "p-autocomplete-fluid": instance.hasFluid
  }),
  pcInput: "p-autocomplete-input",
  inputMultiple: ({
    instance
  }) => ({
    "p-autocomplete-input-multiple": true,
    "p-variant-filled": (instance.variant ?? (instance.config.inputStyle() || instance.config.inputVariant())) === "filled"
  }),
  chipItem: ({
    instance,
    i
  }) => ["p-autocomplete-chip-item", {
    "p-focus": instance.focusedMultipleOptionIndex === i
  }],
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: ({
    instance,
    option,
    i,
    getItemOptions
  }) => ({
    "p-autocomplete-option": true,
    "p-autocomplete-option-selected": instance.isSelected(option),
    "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
    "p-disabled": instance.isOptionDisabled(option)
  }),
  emptyMessage: "p-autocomplete-empty-message"
};
var AutoCompleteStyle = class _AutoCompleteStyle extends BaseStyle {
  name = "autocomplete";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoCompleteStyle_BaseFactory;
    return function AutoCompleteStyle_Factory(__ngFactoryType__) {
      return (\u0275AutoCompleteStyle_BaseFactory || (\u0275AutoCompleteStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AutoCompleteStyle)))(__ngFactoryType__ || _AutoCompleteStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoCompleteStyle,
    factory: _AutoCompleteStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteStyle, [{
    type: Injectable
  }], null, null);
})();
var AutoCompleteClasses;
(function(AutoCompleteClasses2) {
  AutoCompleteClasses2["root"] = "p-autocomplete";
  AutoCompleteClasses2["pcInput"] = "p-autocomplete-input";
  AutoCompleteClasses2["inputMultiple"] = "p-autocomplete-input-multiple";
  AutoCompleteClasses2["chipItem"] = "p-autocomplete-chip-item";
  AutoCompleteClasses2["pcChip"] = "p-autocomplete-chip";
  AutoCompleteClasses2["chipIcon"] = "p-autocomplete-chip-icon";
  AutoCompleteClasses2["inputChip"] = "p-autocomplete-input-chip";
  AutoCompleteClasses2["loader"] = "p-autocomplete-loader";
  AutoCompleteClasses2["dropdown"] = "p-autocomplete-dropdown";
  AutoCompleteClasses2["panel"] = "p-autocomplete-overlay";
  AutoCompleteClasses2["list"] = "p-autocomplete-list";
  AutoCompleteClasses2["optionGroup"] = "p-autocomplete-option-group";
  AutoCompleteClasses2["option"] = "p-autocomplete-option";
  AutoCompleteClasses2["emptyMessage"] = "p-autocomplete-empty-message";
})(AutoCompleteClasses || (AutoCompleteClasses = {}));
var AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoComplete),
  multi: true
};
var AutoComplete = class _AutoComplete extends BaseComponent {
  overlayService;
  zone;
  /**
   * Minimum number of characters to initiate a search.
   * @group Props
   */
  minLength = 1;
  /**
   * Delay between keystrokes to wait before sending a query.
   * @group Props
   */
  delay = 300;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Hint text for the input field.
   * @group Props
   */
  placeholder;
  /**
   * When present, it specifies that the input cannot be typed.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Maximum height of the suggestions panel.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When enabled, highlights the first item in the list by default.
   * @group Props
   */
  autoHighlight;
  /**
   * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
   * @group Props
   */
  forceSelection;
  /**
   * Type of the input, defaults to "text".
   * @group Props
   */
  type = "text";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the dropdown button for accessibility.
   * @group Props
   */
  dropdownAriaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Ensures uniqueness of selected items on multiple mode.
   * @group Props
   */
  unique = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * Whether to run a query when input receives focus.
   * @group Props
   */
  completeOnFocus = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Field of a suggested object to resolve and display.
   * @group Props
   * @deprecated use optionLabel property instead
   */
  field;
  /**
   * Displays a button next to the input field when enabled.
   * @group Props
   */
  dropdown;
  /**
   * Whether to show the empty message or not.
   * @group Props
   */
  showEmptyMessage = true;
  /**
   * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
   * @group Props
   */
  dropdownMode = "blank";
  /**
   * Specifies if multiple values can be selected.
   * @group Props
   */
  multiple;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete = "off";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Options for the overlay element.
   * @group Props
   */
  overlayOptions;
  /**
   * An array of suggestions to display.
   * @group Props
   */
  get suggestions() {
    return this._suggestions();
  }
  set suggestions(value) {
    this._suggestions.set(value);
    this.handleSuggestionsChange();
  }
  /**
   * Element dimensions of option for virtual scrolling.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Property name or getter function to use as the label of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Property name or getter function to use as the value of an option.
   * @group Props
   */
  optionValue;
  /**
   * Unique identifier of the component.
   * @group Props
   */
  id;
  /**
   * Text to display when the search is active. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} results are available'
   */
  searchMessage;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue 'No selected item'
   */
  emptySelectionMessage;
  /**
   * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} items selected'
   */
  selectionMessage;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * When enabled, the focused option is selected.
   * @group Props
   */
  selectOnFocus;
  /**
   * Locale to use in searching. The default locale is the host environment's current locale.
   * @group Props
   */
  searchLocale;
  /**
   * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
   * @group Props
   */
  optionDisabled;
  /**
   * When enabled, the hovered option will be focused.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Whether typeahead is active or not.
   * @defaultValue true
   * @group Props
   */
  typeahead = true;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  /**
   * Callback to invoke to search for suggestions.
   * @param {AutoCompleteCompleteEvent} event - Custom complete event.
   * @group Emits
   */
  completeMethod = new EventEmitter();
  /**
   * Callback to invoke when a suggestion is selected.
   * @param {AutoCompleteSelectEvent} event - custom select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when a selected value is removed.
   * @param {AutoCompleteUnselectEvent} event - custom unselect event.
   * @group Emits
   */
  onUnselect = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke to when dropdown button is clicked.
   * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
   * @group Emits
   */
  onDropdownClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke on input key up.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyUp = new EventEmitter();
  /**
   * Callback to invoke on overlay is shown.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on overlay is hidden.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke on lazy load data.
   * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  containerEL;
  inputEL;
  multiInputEl;
  multiContainerEL;
  dropdownButton;
  itemsViewChild;
  scroller;
  overlayViewChild;
  _itemSize;
  itemsWrapper;
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom empty message template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom selected item template.
   * @group Templates
   */
  selectedItemTemplate;
  /**
   * Custom group item template.
   * @group Templates
   */
  groupTemplate;
  /**
   * Custom loader template.
   * @group Templates
   */
  loaderTemplate;
  /**
   * Custom remove icon template.
   * @group Templates
   */
  removeIconTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   */
  loadingIconTemplate;
  /**
   * Custom clear icon template.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom dropdown icon template.
   * @group Templates
   */
  dropdownIconTemplate;
  primeng = inject(PrimeNG);
  value;
  _suggestions = signal(null);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  timeout;
  overlayVisible;
  suggestionsUpdated;
  highlightOption;
  highlightOptionChanged;
  focused = false;
  _filled;
  get filled() {
    return this._filled;
  }
  set filled(value) {
    this._filled = value;
  }
  loading;
  scrollHandler;
  listId;
  searchTimeout;
  dirty = false;
  _itemTemplate;
  _groupTemplate;
  _selectedItemTemplate;
  _headerTemplate;
  _emptyTemplate;
  _footerTemplate;
  _loaderTemplate;
  _removeIconTemplate;
  _loadingIconTemplate;
  _clearIconTemplate;
  _dropdownIconTemplate;
  modelValue = signal(null);
  focusedMultipleOptionIndex = signal(-1);
  focusedOptionIndex = signal(-1);
  _componentStyle = inject(AutoCompleteStyle);
  visibleOptions = computed(() => {
    return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
  });
  inputValue = computed(() => {
    const modelValue = this.modelValue();
    const selectedOption = this.optionValueSelected ? (this.suggestions || []).find((item) => resolveFieldData(item, this.optionValue) === modelValue) : modelValue;
    if (isNotEmpty(modelValue)) {
      if (typeof modelValue === "object" || this.optionValueSelected) {
        const label = this.getOptionLabel(selectedOption);
        return label != null ? label : modelValue;
      } else {
        return modelValue;
      }
    } else {
      return "";
    }
  });
  get focusedMultipleOptionId() {
    return this.focusedMultipleOptionIndex() !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}` : null;
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get inputMultipleClass() {
    return this._componentStyle.classes.inputMultiple({
      instance: this
    });
  }
  get panelClass() {
    return {
      "p-autocomplete-overlay p-component": true,
      "p-input-filled": this.config.inputStyle() === "filled" || this.config.inputVariant() === "filled",
      "p-ripple-disabled": this.config.ripple() === false
    };
  }
  get inputClass() {
    return {
      "p-autocomplete-input": !this.multiple,
      "p-autocomplete-dd-input": this.dropdown
    };
  }
  get searchResultMessageText() {
    return isNotEmpty(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions().length) : this.emptySearchMessageText;
  }
  get searchMessageText() {
    return this.searchMessage || this.config.translation.searchMessage || "";
  }
  get emptySearchMessageText() {
    return this.emptyMessage || this.config.translation.emptySearchMessage || "";
  }
  get selectionMessageText() {
    return this.selectionMessage || this.config.translation.selectionMessage || "";
  }
  get emptySelectionMessageText() {
    return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || "";
  }
  get selectedMessageText() {
    return this.hasSelectedOption() ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue().length : "1") : this.emptySelectionMessageText;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  get optionValueSelected() {
    return typeof this.modelValue() === "string" && this.optionValue;
  }
  chipItemClass(index) {
    return this._componentStyle.classes.chipItem({
      instance: this,
      i: index
    });
  }
  optionClass(option, i, scrollerOptions) {
    return {
      "p-autocomplete-option": true,
      "p-autocomplete-option-selected": this.isSelected(option),
      "p-focus": this.focusedOptionIndex() === this.getOptionIndex(i, scrollerOptions),
      "p-disabled": this.isOptionDisabled(option)
    };
  }
  constructor(overlayService, zone) {
    super();
    this.overlayService = overlayService;
    this.zone = zone;
    effect(() => {
      this.filled = isNotEmpty(this.modelValue());
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.id = this.id || uuid("pn_id_");
    this.cd.detectChanges();
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "selecteditem":
          this._selectedItemTemplate = item.template;
          break;
        case "selectedItem":
          this._selectedItemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "removetokenicon":
          this._removeIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewChecked() {
    if (this.suggestionsUpdated && this.overlayViewChild) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
        this.suggestionsUpdated = false;
      });
    }
  }
  handleSuggestionsChange() {
    if (this.loading) {
      this._suggestions()?.length > 0 || this.showEmptyMessage || !!this.emptyTemplate ? this.show() : this.hide();
      const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.suggestionsUpdated = true;
      this.loading = false;
      this.cd.markForCheck();
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  isOptionGroup(option) {
    return this.optionGroupLabel && option.optionGroup && option.group;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findLastOptionIndex() {
    return findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : false;
  }
  isSelected(option) {
    if (this.multiple) {
      return this.unique ? this.modelValue()?.find((model) => equals(model, this.getOptionValue(option), this.equalityKey())) : false;
    }
    return equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  isOptionMatched(option, value) {
    return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
  }
  isInputClicked(event) {
    return event.target === this.inputEL.nativeElement;
  }
  isDropdownClicked(event) {
    return this.dropdownButton?.nativeElement ? event.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event.target) : false;
  }
  equalityKey() {
    return this.dataKey;
  }
  onContainerClick(event) {
    if (this.disabled || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.overlayViewChild?.nativeElement.contains(event.target)) {
      focus(this.inputEL.nativeElement);
    }
  }
  handleDropdownClick(event) {
    let query = void 0;
    if (this.overlayVisible) {
      this.hide(true);
    } else {
      focus(this.inputEL.nativeElement);
      query = this.inputEL.nativeElement.value;
      if (this.dropdownMode === "blank") this.search(event, "", "dropdown");
      else if (this.dropdownMode === "current") this.search(event, query, "dropdown");
    }
    this.onDropdownClick.emit({
      originalEvent: event,
      query
    });
  }
  onInput(event) {
    if (this.typeahead) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      let query = event.target.value;
      if (this.maxlength !== null) {
        query = query.split("").slice(0, this.maxlength).join("");
      }
      if (!this.multiple && !this.forceSelection) {
        this.updateModel(query);
      }
      if (query.length === 0 && !this.multiple) {
        this.onClear.emit();
        setTimeout(() => {
          this.hide();
        }, this.delay / 2);
      } else {
        if (query.length >= this.minLength) {
          this.focusedOptionIndex.set(-1);
          this.searchTimeout = setTimeout(() => {
            this.search(event, query, "input");
          }, this.delay);
        } else {
          this.hide();
        }
      }
    }
  }
  onInputChange(event) {
    if (this.forceSelection) {
      let valid = false;
      if (this.visibleOptions()) {
        const matchedValue = this.visibleOptions().find((option) => this.isOptionMatched(option, this.inputEL.nativeElement.value || ""));
        if (matchedValue !== void 0) {
          valid = true;
          !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
        }
      }
      if (!valid) {
        this.inputEL.nativeElement.value = "";
        !this.multiple && this.updateModel(null);
      }
    }
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    if (!this.dirty && this.completeOnFocus) {
      this.search(event, event.target.value, "focus");
    }
    this.dirty = true;
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onMultipleContainerFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
  }
  onMultipleContainerBlur(event) {
    this.focusedMultipleOptionIndex.set(-1);
    this.focused = false;
  }
  onMultipleContainerKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "ArrowLeft":
        this.onArrowLeftKeyOnMultiple(event);
        break;
      case "ArrowRight":
        this.onArrowRightKeyOnMultiple(event);
        break;
      case "Backspace":
        this.onBackspaceKeyOnMultiple(event);
        break;
      default:
        break;
    }
  }
  onInputBlur(event) {
    this.dirty = false;
    this.focused = false;
    this.focusedOptionIndex.set(-1);
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onInputPaste(event) {
    this.onKeyDown(event);
  }
  onInputKeyUp(event) {
    this.onKeyUp.emit(event);
  }
  onKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      return;
    }
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event) {
    if (!this.overlayVisible) {
      return;
    }
    if (event.altKey) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  onArrowLeftKey(event) {
    const target = event.currentTarget;
    this.focusedOptionIndex.set(-1);
    if (this.multiple) {
      if (isEmpty(target.value) && this.hasSelectedOption()) {
        focus(this.multiContainerEL.nativeElement);
        this.focusedMultipleOptionIndex.set(this.modelValue().length);
      } else {
        event.stopPropagation();
      }
    }
  }
  onArrowRightKey(event) {
    this.focusedOptionIndex.set(-1);
    this.multiple && event.stopPropagation();
  }
  onHomeKey(event) {
    const {
      currentTarget
    } = event;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
    this.focusedOptionIndex.set(-1);
    event.preventDefault();
  }
  onEndKey(event) {
    const {
      currentTarget
    } = event;
    const len = currentTarget.value.length;
    currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
    this.focusedOptionIndex.set(-1);
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.typeahead) {
      if (this.multiple) {
        this.updateModel([...this.modelValue() || [], event.target.value]);
        this.inputEL.nativeElement.value = "";
      }
    }
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedOptionIndex() !== -1) {
      this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
    }
    this.overlayVisible && this.hide();
  }
  onBackspaceKey(event) {
    if (this.multiple) {
      if (isNotEmpty(this.modelValue()) && !this.inputEL.nativeElement.value) {
        const removedValue = this.modelValue()[this.modelValue().length - 1];
        const newValue = this.modelValue().slice(0, -1);
        this.updateModel(newValue);
        this.onUnselect.emit({
          originalEvent: event,
          value: removedValue
        });
      }
      event.stopPropagation();
    }
    if (!this.multiple && this.showClear && this.findSelectedOptionIndex() != -1) {
      this.clear();
    }
  }
  onArrowLeftKeyOnMultiple(event) {
    const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
    this.focusedMultipleOptionIndex.set(optionIndex);
  }
  onArrowRightKeyOnMultiple(event) {
    let optionIndex = this.focusedMultipleOptionIndex();
    optionIndex++;
    this.focusedMultipleOptionIndex.set(optionIndex);
    if (optionIndex > this.modelValue().length - 1) {
      this.focusedMultipleOptionIndex.set(-1);
      focus(this.inputEL.nativeElement);
    }
  }
  onBackspaceKeyOnMultiple(event) {
    if (this.focusedMultipleOptionIndex() !== -1) {
      this.removeOption(event, this.focusedMultipleOptionIndex());
    }
  }
  onOptionSelect(event, option, isHide = true) {
    const value = this.getOptionValue(option);
    if (this.multiple) {
      this.inputEL.nativeElement.value = "";
      if (!this.isSelected(option)) {
        this.updateModel([...this.modelValue() || [], value]);
      }
    } else {
      this.updateModel(value);
    }
    this.onSelect.emit({
      originalEvent: event,
      value: option
    });
    isHide && this.hide(true);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  search(event, query, source) {
    if (query === void 0 || query === null) {
      return;
    }
    if (source === "input" && query.trim().length === 0) {
      return;
    }
    this.loading = true;
    this.completeMethod.emit({
      originalEvent: event,
      query
    });
  }
  removeOption(event, index) {
    event.stopPropagation();
    const removedOption = this.modelValue()[index];
    const value = this.modelValue().filter((_, i) => i !== index);
    this.updateModel(value);
    this.onUnselect.emit({
      originalEvent: event,
      value: removedOption
    });
    focus(this.inputEL.nativeElement);
  }
  updateModel(value) {
    this.value = value;
    this.modelValue.set(value);
    this.onModelChange(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  updateInputValue() {
    if (this.inputEL && this.inputEL.nativeElement) {
      if (!this.multiple) {
        this.inputEL.nativeElement.value = this.inputValue();
      } else {
        this.inputEL.nativeElement.value = "";
      }
    }
  }
  autoUpdateModel() {
    if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
      const focusedOptionIndex = this.findFirstFocusedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        this.onOptionSelect(event, this.visibleOptions()[index], false);
      }
    }
  }
  show(isFocus = false) {
    this.dirty = true;
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    isFocus && focus(this.inputEL.nativeElement);
    if (isFocus) {
      focus(this.inputEL.nativeElement);
    }
    this.onShow.emit();
    this.cd.markForCheck();
  }
  hide(isFocus = false) {
    const _hide = () => {
      this.dirty = isFocus;
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      isFocus && focus(this.inputEL.nativeElement);
      this.onHide.emit();
      this.cd.markForCheck();
    };
    setTimeout(() => {
      _hide();
    }, 0);
  }
  clear() {
    this.updateModel(null);
    this.inputEL.nativeElement.value = "";
    this.onClear.emit();
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(value);
    this.updateInputValue();
    this.cd.markForCheck();
  }
  hasSelectedOption() {
    return isNotEmpty(this.modelValue());
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  getOptionLabel(option) {
    return this.field || this.optionLabel ? resolveFieldData(option, this.field || this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? resolveFieldData(option, this.optionValue) : option && option.value != void 0 ? option.value : option;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = findSingle(this.overlayViewChild.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-autocomplete-panel");
      if (this.virtualScroll) {
        this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
        this.scroller.viewInit();
      }
      if (this.visibleOptions() && this.visibleOptions().length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = findSingle(this.itemsWrapper, ".p-autocomplete-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "center"
            });
          }
        }
      }
    }
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    super.ngOnDestroy();
  }
  static \u0275fac = function AutoComplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoComplete)(\u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AutoComplete,
    selectors: [["p-autoComplete"], ["p-autocomplete"], ["p-auto-complete"]],
    contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, _c2, 5);
        \u0275\u0275contentQuery(dirIndex, _c3, 5);
        \u0275\u0275contentQuery(dirIndex, _c4, 5);
        \u0275\u0275contentQuery(dirIndex, _c5, 5);
        \u0275\u0275contentQuery(dirIndex, _c6, 5);
        \u0275\u0275contentQuery(dirIndex, _c7, 5);
        \u0275\u0275contentQuery(dirIndex, _c8, 5);
        \u0275\u0275contentQuery(dirIndex, _c9, 5);
        \u0275\u0275contentQuery(dirIndex, _c10, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedItemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function AutoComplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c11, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c13, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(_c15, 5);
        \u0275\u0275viewQuery(_c16, 5);
        \u0275\u0275viewQuery(_c17, 5);
        \u0275\u0275viewQuery(_c18, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerEL = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputEL = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiInputEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiContainerEL = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
      }
    },
    inputs: {
      minLength: [2, "minLength", "minLength", numberAttribute],
      delay: [2, "delay", "delay", numberAttribute],
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      maxlength: [2, "maxlength", "maxlength", (value) => numberAttribute(value, null)],
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      size: "size",
      appendTo: "appendTo",
      autoHighlight: [2, "autoHighlight", "autoHighlight", booleanAttribute],
      forceSelection: [2, "forceSelection", "forceSelection", booleanAttribute],
      type: "type",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      ariaLabel: "ariaLabel",
      dropdownAriaLabel: "dropdownAriaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dropdownIcon: "dropdownIcon",
      unique: [2, "unique", "unique", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      completeOnFocus: [2, "completeOnFocus", "completeOnFocus", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      field: "field",
      dropdown: [2, "dropdown", "dropdown", booleanAttribute],
      showEmptyMessage: [2, "showEmptyMessage", "showEmptyMessage", booleanAttribute],
      dropdownMode: "dropdownMode",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      dataKey: "dataKey",
      emptyMessage: "emptyMessage",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autocomplete: "autocomplete",
      optionGroupChildren: "optionGroupChildren",
      optionGroupLabel: "optionGroupLabel",
      overlayOptions: "overlayOptions",
      suggestions: "suggestions",
      itemSize: "itemSize",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      id: "id",
      searchMessage: "searchMessage",
      emptySelectionMessage: "emptySelectionMessage",
      selectionMessage: "selectionMessage",
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      searchLocale: [2, "searchLocale", "searchLocale", booleanAttribute],
      optionDisabled: "optionDisabled",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      typeahead: [2, "typeahead", "typeahead", booleanAttribute],
      variant: "variant",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    outputs: {
      completeMethod: "completeMethod",
      onSelect: "onSelect",
      onUnselect: "onUnselect",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onDropdownClick: "onDropdownClick",
      onClear: "onClear",
      onKeyUp: "onKeyUp",
      onShow: "onShow",
      onHide: "onHide",
      onLazyLoad: "onLazyLoad"
    },
    features: [\u0275\u0275ProvidersFeature([AUTOCOMPLETE_VALUE_ACCESSOR, AutoCompleteStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 11,
    vars: 15,
    consts: [["container", ""], ["overlay", ""], ["content", ""], ["focusInput", ""], ["multiContainer", ""], ["token", ""], ["removeicon", ""], ["ddBtn", ""], ["buildInItems", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["empty", ""], [2, "position", "relative", 3, "click", "ngClass", "ngStyle"], ["pInputText", "", "aria-autocomplete", "list", "role", "combobox", 3, "pAutoFocus", "ngClass", "ngStyle", "class", "type", "variant", "autocomplete", "required", "name", "pSize", "tabindex", "readonly", "disabled", "fluid", "input", "keydown", "change", "focus", "blur", "paste", "keyup", 4, "ngIf"], [4, "ngIf"], ["role", "listbox", 3, "ngClass", "tabindex", "focus", "blur", "keydown", 4, "ngIf"], ["type", "button", "class", "p-autocomplete-dropdown", "pRipple", "", 3, "disabled", "click", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions"], ["pInputText", "", "aria-autocomplete", "list", "role", "combobox", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "pAutoFocus", "ngClass", "ngStyle", "type", "variant", "autocomplete", "required", "name", "pSize", "tabindex", "readonly", "disabled", "fluid"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-autocomplete-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-autocomplete-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["role", "listbox", 3, "focus", "blur", "keydown", "ngClass", "tabindex"], ["role", "option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-autocomplete-input-chip"], ["role", "combobox", "aria-autocomplete", "list", 3, "input", "keydown", "change", "focus", "blur", "paste", "keyup", "pAutoFocus", "ngClass", "ngStyle", "autocomplete", "required", "tabindex", "readonly", "disabled"], ["role", "option", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["styleClass", "p-autocomplete-chip", 3, "label", "removable", "onRemove", 4, "ngIf"], ["styleClass", "p-autocomplete-chip", 3, "onRemove", "label", "removable"], [1, "p-autocomplete-chip-icon", 3, "click"], [3, "styleClass"], [3, "styleClass", "spin", 4, "ngIf"], ["class", "p-autocomplete-loader pi-spin ", 4, "ngIf"], [3, "styleClass", "spin"], [1, "p-autocomplete-loader", "pi-spin"], ["type", "button", "pRipple", "", 1, "p-autocomplete-dropdown", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", "ngStyle"], [1, "p-autocomplete-list-container"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["role", "listbox", 1, "p-autocomplete-list", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-autocomplete-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-autocomplete-option-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 3, "click", "mouseenter", "ngStyle", "ngClass"], ["role", "option", 1, "p-autocomplete-empty-message", 3, "ngStyle"], [4, "ngIf", "ngIfElse"]],
    template: function AutoComplete_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 13, 0);
        \u0275\u0275listener("click", function AutoComplete_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onContainerClick($event));
        });
        \u0275\u0275template(2, AutoComplete_input_2_Template, 2, 25, "input", 14)(3, AutoComplete_ng_container_3_Template, 3, 2, "ng-container", 15)(4, AutoComplete_ul_4_Template, 6, 26, "ul", 16)(5, AutoComplete_ng_container_5_Template, 3, 2, "ng-container", 15)(6, AutoComplete_button_6_Template, 4, 5, "button", 17);
        \u0275\u0275elementStart(7, "p-overlay", 18, 1);
        \u0275\u0275twoWayListener("visibleChange", function AutoComplete_Template_p_overlay_visibleChange_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function AutoComplete_Template_p_overlay_onAnimationStart_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function AutoComplete_Template_p_overlay_onHide_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(9, AutoComplete_ng_template_9_Template, 10, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.rootClass)("ngStyle", ctx.style);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.multiple);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filled && !ctx.disabled && ctx.showClear && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.multiple);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dropdown);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, InputText, Ripple, Scroller, AutoFocus, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon, Chip, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoComplete, [{
    type: Component,
    args: [{
      selector: "p-autoComplete, p-autocomplete, p-auto-complete",
      standalone: true,
      imports: [CommonModule, Overlay, InputText, Ripple, Scroller, AutoFocus, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon, Chip, SharedModule],
      template: `
        <div #container [ngClass]="rootClass" [ngStyle]="style" style="position: relative;" [class]="styleClass" (click)="onContainerClick($event)">
            <input
                *ngIf="!multiple"
                #focusInput
                [pAutoFocus]="autofocus"
                pInputText
                [ngClass]="'p-autocomplete-input'"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [type]="type"
                [attr.value]="inputValue()"
                [variant]="variant"
                [attr.id]="inputId"
                [autocomplete]="autocomplete"
                [required]="required"
                [name]="name"
                aria-autocomplete="list"
                role="combobox"
                [attr.placeholder]="placeholder"
                [pSize]="size"
                [attr.maxlength]="maxlength"
                [tabindex]="!disabled ? tabindex : -1"
                [readonly]="readonly"
                [disabled]="disabled"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-required]="required"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (input)="onInput($event)"
                (keydown)="onKeyDown($event)"
                (change)="onInputChange($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (paste)="onInputPaste($event)"
                (keyup)="onInputKeyUp($event)"
                [fluid]="hasFluid"
            />
            <ng-container *ngIf="filled && !disabled && showClear && !loading">
                <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" [styleClass]="'p-autocomplete-clear-icon'" (click)="clear()" [attr.aria-hidden]="true" />
                <span *ngIf="clearIconTemplate || _clearIconTemplate" class="p-autocomplete-clear-icon" (click)="clear()" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ul
                *ngIf="multiple"
                #multiContainer
                [ngClass]="inputMultipleClass"
                [tabindex]="-1"
                role="listbox"
                [attr.aria-orientation]="'horizontal'"
                [attr.aria-activedescendant]="focused ? focusedMultipleOptionId : undefined"
                (focus)="onMultipleContainerFocus($event)"
                (blur)="onMultipleContainerBlur($event)"
                (keydown)="onMultipleContainerKeyDown($event)"
            >
                <li
                    #token
                    *ngFor="let option of modelValue(); let i = index"
                    [ngClass]="{ 'p-autocomplete-chip-item': true, 'p-focus': focusedMultipleOptionIndex() === i }"
                    [attr.id]="id + '_multiple_option_' + i"
                    role="option"
                    [attr.aria-label]="getOptionLabel(option)"
                    [attr.aria-setsize]="modelValue().length"
                    [attr.aria-posinset]="i + 1"
                    [attr.aria-selected]="true"
                >
                    <ng-container *ngTemplateOutlet="selectedItemTemplate || _selectedItemTemplate; context: { $implicit: option }"></ng-container>
                    <p-chip styleClass="p-autocomplete-chip" *ngIf="!selectedItemTemplate && !_selectedItemTemplate" [label]="getOptionLabel(option)" [removable]="true" (onRemove)="!readonly ? removeOption($event, i) : ''">
                        <ng-container *ngIf="!removeIconTemplate && !_removeIconTemplate">
                            <ng-template #removeicon>
                                <span class="p-autocomplete-chip-icon" (click)="!readonly ? removeOption($event, i) : ''">
                                    <TimesCircleIcon [styleClass]="'p-autocomplete-chip-icon'" [attr.aria-hidden]="true" />
                                </span>
                            </ng-template>
                        </ng-container>
                    </p-chip>
                    <span *ngIf="removeIconTemplate || _removeIconTemplate">
                        <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate; context: { class: 'p-autocomplete-chip-icon', removeCallback: removeOption.bind(this), index: i }"></ng-template>
                    </span>
                </li>
                <li class="p-autocomplete-input-chip" role="option">
                    <input
                        #focusInput
                        [pAutoFocus]="autofocus"
                        [ngClass]="inputClass"
                        [ngStyle]="inputStyle"
                        [class]="inputStyleClass"
                        [attr.type]="type"
                        [attr.id]="inputId"
                        [autocomplete]="autocomplete"
                        [required]="required"
                        [attr.name]="name"
                        role="combobox"
                        [attr.placeholder]="!filled ? placeholder : null"
                        aria-autocomplete="list"
                        [attr.maxlength]="maxlength"
                        [tabindex]="!disabled ? tabindex : -1"
                        [readonly]="readonly"
                        [disabled]="disabled"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [attr.aria-required]="required"
                        [attr.aria-expanded]="overlayVisible ?? false"
                        [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        (input)="onInput($event)"
                        (keydown)="onKeyDown($event)"
                        (change)="onInputChange($event)"
                        (focus)="onInputFocus($event)"
                        (blur)="onInputBlur($event)"
                        (paste)="onInputPaste($event)"
                        (keyup)="onInputKeyUp($event)"
                    />
                </li>
            </ul>
            <ng-container *ngIf="loading">
                <SpinnerIcon *ngIf="!loadingIconTemplate && !_loadingIconTemplate" [styleClass]="'p-autocomplete-loader'" [spin]="true" [attr.aria-hidden]="true" />
                <span *ngIf="loadingIconTemplate || _loadingIconTemplate" class="p-autocomplete-loader pi-spin " [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button #ddBtn type="button" [attr.aria-label]="dropdownAriaLabel" class="p-autocomplete-dropdown" [disabled]="disabled" pRipple (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex">
                <span *ngIf="dropdownIcon" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
                <ng-container *ngIf="!dropdownIcon">
                    <ChevronDownIcon *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate" />
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
                </ng-container>
            </button>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template #content>
                    <div [ngClass]="panelClass" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                        <div class="p-autocomplete-list-container" [style.max-height]="virtualScroll ? 'auto' : scrollHeight">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template #content let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                    <ng-template #loader let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>
                        </div>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items class="p-autocomplete-list" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" [attr.id]="id + '_list'" [attr.aria-label]="listLabel">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-autocomplete-option-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <li
                                            pRipple
                                            [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                            [ngClass]="optionClass(option, i, scrollerOptions)"
                                            [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            role="option"
                                            [attr.aria-label]="getOptionLabel(option)"
                                            [attr.aria-selected]="isSelected(option)"
                                            [attr.aria-disabled]="isOptionDisabled(option)"
                                            [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [attr.aria-setsize]="ariaSetSize"
                                            [attr.aria-posinset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            (click)="onOptionSelect($event, option)"
                                            (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        >
                                            <span *ngIf="!itemTemplate && !_itemTemplate">{{ getOptionLabel(option) }}</span>
                                            <ng-container
                                                *ngTemplateOutlet="
                                                    itemTemplate || _itemTemplate;
                                                    context: {
                                                        $implicit: option,
                                                        index: scrollerOptions.getOptions ? scrollerOptions.getOptions(i) : i
                                                    }
                                                "
                                            ></ng-container>
                                        </li>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="!items || (items && items.length === 0 && showEmptyMessage)" class="p-autocomplete-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    <ng-container *ngIf="!emptyTemplate && !_emptyTemplate; else empty">
                                        {{ searchResultMessageText }}
                                    </ng-container>
                                    <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                </li>
                            </ul>
                        </ng-template>
                        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    </div>
                    <span role="status" aria-live="polite" class="p-hidden-accessible">
                        {{ selectedMessageText }}
                    </span>
                </ng-template>
            </p-overlay>
        </div>
    `,
      providers: [AUTOCOMPLETE_VALUE_ACCESSOR, AutoCompleteStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: OverlayService
  }, {
    type: NgZone
  }], {
    minLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    delay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoHighlight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    forceSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    type: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    dropdownAriaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    unique: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completeOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    field: [{
      type: Input
    }],
    dropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showEmptyMessage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownMode: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    suggestions: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    searchMessage: [{
      type: Input
    }],
    emptySelectionMessage: [{
      type: Input
    }],
    selectionMessage: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchLocale: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionDisabled: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeahead: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completeMethod: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onUnselect: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onDropdownClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onKeyUp: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerEL: [{
      type: ViewChild,
      args: ["container"]
    }],
    inputEL: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    multiInputEl: [{
      type: ViewChild,
      args: ["multiIn"]
    }],
    multiContainerEL: [{
      type: ViewChild,
      args: ["multiContainer"]
    }],
    dropdownButton: [{
      type: ViewChild,
      args: ["ddBtn"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item"]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer"]
    }],
    selectedItemTemplate: [{
      type: ContentChild,
      args: ["selecteditem"]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group"]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader"]
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon"]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var AutoCompleteModule = class _AutoCompleteModule {
  static \u0275fac = function AutoCompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoCompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoCompleteModule,
    imports: [AutoComplete],
    exports: [AutoComplete, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [AutoComplete, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteModule, [{
    type: NgModule,
    args: [{
      imports: [AutoComplete],
      exports: [AutoComplete, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/find-pages/get-task-pages/get-task-urls.component.ts
var _c02 = (a0) => ({ number: a0 });
var _forTrack0 = ($index, $item) => $item.url;
function GetTaskUrlsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-tag", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", task_r2.urlCount.toString())("severity", task_r2.urlCount === 0 ? "danger" : "success")("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.label);
  }
}
function GetTaskUrlsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const selected_r3 = ctx.$implicit;
    \u0275\u0275textInterpolate(selected_r3.label);
  }
}
function GetTaskUrlsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "p-progressSpinner", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "findPages.task.loadingTasks"));
  }
}
function GetTaskUrlsComponent_Conditional_19_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-checkbox", 13);
    \u0275\u0275twoWayListener("ngModelChange", function GetTaskUrlsComponent_Conditional_19_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_57_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.taskUrls()[\u0275$index_57_r7].selected, $event) || (ctx_r4.taskUrls()[\u0275$index_57_r7].selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GetTaskUrlsComponent_Conditional_19_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_57_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.toggleTaskUrl(\u0275$index_57_r7, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const \u0275$index_57_r7 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.taskUrls()[\u0275$index_57_r7].selected);
    \u0275\u0275property("inputId", "url-" + \u0275$index_57_r7)("binary", true);
    \u0275\u0275advance();
    \u0275\u0275property("for", "url-" + \u0275$index_57_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.url);
  }
}
function GetTaskUrlsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "p-button", 10);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function GetTaskUrlsComponent_Conditional_19_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addUrlsToProject());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275repeaterCreate(10, GetTaskUrlsComponent_Conditional_19_For_11_Template, 4, 5, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "findPages.task.urls"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 5, "findPages.task.addToProject"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, "findPages.task.addToProject.description", \u0275\u0275pureFunction1(10, _c02, ctx_r4.selectedTaskUrlsCount())));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.taskUrls());
  }
}
function GetTaskUrlsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "findPages.task.noUrls"));
  }
}
var GetTaskUrlsComponent = class _GetTaskUrlsComponent {
  // Services    
  airtableService = inject(AirtableService);
  translate = inject(TranslateService);
  addUrlsService = inject(AddUrlsService);
  projectState = inject(ProjectStateService);
  // Signals
  currentLanguage = signal(this.translate.currentLang?.startsWith("fr") ? "fr" : "en");
  filteredTasks = signal([]);
  selectedTaskIds = signal([]);
  selectedTasks = signal([]);
  taskUrls = signal([]);
  // Count selected task urls
  selectedTaskUrlsCount = computed(() => this.taskUrls().filter((task) => task.selected).length);
  toggleTaskUrl(index, selected) {
    this.taskUrls.update((urls) => {
      const updated = [...urls];
      updated[index] = __spreadProps(__spreadValues({}, updated[index]), { selected });
      return updated;
    });
  }
  // Computed: Transform Airtable data to TaskOptions based on current language
  taskOptions = computed(() => {
    const tasks = this.airtableService.data();
    const lang = this.currentLanguage();
    return tasks.map((task) => ({
      id: task.id,
      label: lang === "en" ? task.taskNameEN : task.taskNameFR,
      urlCount: lang === "en" ? task.urlsEN.length : task.urlsFR.length
    }));
  });
  constructor() {
    effect(() => {
      const lang = this.translate.currentLang;
      if (lang) {
        this.currentLanguage.set(lang.startsWith("fr") ? "fr" : "en");
      }
    });
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage.set(event.lang.startsWith("fr") ? "fr" : "en");
    });
    effect(() => {
      const ids = this.selectedTaskIds();
      const options = this.taskOptions();
      const matched = ids.map((id) => options.find((opt) => opt.id === id)).filter((opt) => !!opt);
      this.selectedTasks.set(matched);
      if (ids.length > 0) {
        this.loadTaskUrls();
      }
    });
  }
  ngOnInit() {
    this.onAutocompleteInteraction();
  }
  onAutocompleteInteraction() {
    return __async(this, null, function* () {
      if (!this.airtableService.hasData() && !this.airtableService.isLoading()) {
        yield this.airtableService.fetchTasks();
      }
    });
  }
  filterTasks(event) {
    const query = event.query;
    if (!query || query.trim().length === 0) {
      this.filteredTasks.set([...this.taskOptions()]);
    } else {
      const lowerQuery = query.toLowerCase();
      this.filteredTasks.set(this.taskOptions().filter((option) => option.label.toLowerCase().includes(lowerQuery)));
    }
  }
  onTaskSelect(event) {
    const taskOption = event.value;
    if (taskOption.id) {
      this.selectedTaskIds.update((ids) => [...ids, taskOption.id]);
      this.loadTaskUrls();
    }
  }
  onTaskUnselect(event) {
    const taskOption = event.value;
    this.selectedTaskIds.update((ids) => ids.filter((id) => id !== taskOption.id));
    this.loadTaskUrls();
  }
  loadTaskUrls() {
    const tasks = this.airtableService.data();
    const lang = this.currentLanguage();
    const ids = this.selectedTaskIds();
    const allUrls = ids.flatMap((taskId) => {
      const task = tasks.find((t) => t.id === taskId);
      if (!task)
        return [];
      return lang === "en" ? task.urlsEN : task.urlsFR;
    });
    const uniqueUrls = [...new Set(allUrls)];
    this.taskUrls.set(uniqueUrls.map((url) => ({ url, selected: true })));
  }
  addUrlsToProject() {
    const selectedUrls = this.taskUrls().filter((item) => item.selected).map((item) => item.url);
    this.addUrlsService.appendUrlsToInput(selectedUrls);
    this.selectedTaskIds.set([]);
    this.selectedTasks.set([]);
    this.taskUrls.set([]);
  }
  static \u0275fac = function GetTaskUrlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetTaskUrlsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GetTaskUrlsComponent, selectors: [["aida-get-task-urls"]], decls: 21, vars: 27, consts: [["item", ""], ["selectedItem", ""], ["id", "task-autocomplete", "optionLabel", "label", "styleClass", "w-full", "fluid", "", 3, "ngModelChange", "completeMethod", "onSelect", "onUnselect", "onFocus", "ngModel", "suggestions", "dropdown", "virtualScroll", "virtualScrollItemSize", "placeholder", "disabled", "showEmptyMessage", "emptyMessage", "multiple"], ["for", "task-autocomplete"], [1, "mt-2", "flex", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "gap-2"], [3, "value", "severity", "rounded"], ["styleClass", "w-2rem h-2rem", "strokeWidth", "4"], [1, "text-xl", "my-2"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-plus", 3, "onClick", "label"], [1, "text-color-secondary"], [1, "flex", "flex-column", "gap-2", "max-h-64", "overflow-y-auto", "border", "border-color-border", "p-2", "rounded"], ["size", "large", 3, "ngModelChange", "ngModel", "inputId", "binary"], [1, "break-all", 3, "for"]], template: function GetTaskUrlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h3");
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-iftalabel")(7, "p-autoComplete", 2);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function GetTaskUrlsComponent_Template_p_autoComplete_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTasks, $event) || (ctx.selectedTasks = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("completeMethod", function GetTaskUrlsComponent_Template_p_autoComplete_completeMethod_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterTasks($event));
      })("onSelect", function GetTaskUrlsComponent_Template_p_autoComplete_onSelect_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTaskSelect($event));
      })("onUnselect", function GetTaskUrlsComponent_Template_p_autoComplete_onUnselect_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTaskUnselect($event));
      })("onFocus", function GetTaskUrlsComponent_Template_p_autoComplete_onFocus_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onAutocompleteInteraction());
      });
      \u0275\u0275template(11, GetTaskUrlsComponent_ng_template_11_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, GetTaskUrlsComponent_ng_template_13_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "label", 3);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, GetTaskUrlsComponent_Conditional_18_Template, 5, 3, "div", 4)(19, GetTaskUrlsComponent_Conditional_19_Template, 12, 12)(20, GetTaskUrlsComponent_Conditional_20_Template, 3, 3, "p");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 15, "findPages.task._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 17, "findPages.task.description"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedTasks);
      \u0275\u0275property("suggestions", ctx.filteredTasks())("dropdown", ctx.airtableService.hasData())("virtualScroll", true)("virtualScrollItemSize", 40)("placeholder", ctx.airtableService.isLoading() ? \u0275\u0275pipeBind1(8, 19, "findPages.task.loadingTasks") : \u0275\u0275pipeBind1(9, 21, "findPages.task.searchPlaceholder"))("disabled", ctx.airtableService.isLoading())("showEmptyMessage", true)("emptyMessage", \u0275\u0275pipeBind1(10, 23, "findPages.task.noTasksFound"))("multiple", true);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 25, "findPages.task.selectTask"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.airtableService.isLoading() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.taskUrls().length > 0 ? 19 : ctx.selectedTaskIds().length > 0 ? 20 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, TranslateModule, TranslatePipe, AutoCompleteModule, AutoComplete, IftaLabelModule, IftaLabel, TagModule, Tag, ProgressSpinnerModule, ProgressSpinner, ButtonModule, Button, CheckboxModule, Checkbox], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetTaskUrlsComponent, [{
    type: Component,
    args: [{ selector: "aida-get-task-urls", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      AutoCompleteModule,
      IftaLabelModule,
      TagModule,
      ProgressSpinnerModule,
      ButtonModule,
      CheckboxModule
    ], template: `<h3>{{'findPages.task._title' | translate}}</h3>\r
<p>{{'findPages.task.description' | translate}}</p>\r
<!-- Task Selection Section -->\r
<p-iftalabel>\r
    <p-autoComplete\r
                    id="task-autocomplete"\r
                    [(ngModel)]="selectedTasks"\r
                    [suggestions]="filteredTasks()"\r
                    (completeMethod)="filterTasks($event)"\r
                    (onSelect)="onTaskSelect($event)"\r
                    (onUnselect)="onTaskUnselect($event)"\r
                    (onFocus)="onAutocompleteInteraction()"\r
                    [dropdown]="airtableService.hasData()"\r
                    [virtualScroll]=true\r
                    [virtualScrollItemSize]="40"\r
                    optionLabel="label"\r
                    [placeholder]="airtableService.isLoading() ? \r
     ('findPages.task.loadingTasks' | translate) : \r
     ('findPages.task.searchPlaceholder' | translate)"\r
                    styleClass="w-full"\r
                    [disabled]="airtableService.isLoading()"\r
                    [showEmptyMessage]=true\r
                    [emptyMessage]="'findPages.task.noTasksFound' | translate"\r
                    fluid\r
                    [multiple]="true">\r
        <ng-template let-task #item>\r
            <div class="flex align-items-center gap-2">\r
                <p-tag\r
                       [value]="task.urlCount.toString()"\r
                       [severity]="task.urlCount === 0 ? 'danger' : 'success'"\r
                       [rounded]="true" />\r
                <span>{{ task.label }}</span>\r
            </div>\r
        </ng-template>\r
        <ng-template let-selected #selectedItem>{{selected.label}}</ng-template>\r
    </p-autoComplete>\r
    <label for="task-autocomplete">{{ 'findPages.task.selectTask' | translate }}</label>\r
</p-iftalabel>\r
\r
<!-- Loading indicator -->\r
@if(airtableService.isLoading()) {\r
<div class="mt-2 flex align-items-center gap-2">\r
    <p-progressSpinner\r
                       styleClass="w-2rem h-2rem"\r
                       strokeWidth="4" />\r
    <span>{{ 'findPages.task.loadingTasks' | translate }}</span>\r
</div>\r
}\r
\r
<!-- URLs List Section -->\r
@if(taskUrls().length > 0) {\r
<h3 class="text-xl my-2">{{'findPages.task.urls' | translate}}</h3>\r
<div class="flex flex-row align-items-center gap-2">\r
    <p-button\r
              [label]="'findPages.task.addToProject' | translate"\r
              icon="pi pi-plus"\r
              (onClick)="addUrlsToProject()" />\r
    <p class="text-color-secondary">{{ 'findPages.task.addToProject.description' | translate: { number: selectedTaskUrlsCount() } }}</p>\r
</div>\r
<div class="flex flex-column gap-2 max-h-64 overflow-y-auto border border-color-border p-2 rounded">\r
    @for(item of taskUrls(); track item.url; let i = $index) {\r
    <div class="flex align-items-center gap-2">\r
        <p-checkbox\r
                    [(ngModel)]="taskUrls()[i].selected"\r
                    (ngModelChange)="toggleTaskUrl(i, $event)"\r
                    [inputId]="'url-' + i"\r
                    [binary]="true"\r
                    size="large" />\r
        <label [for]="'url-' + i" class="break-all">{{item.url}}</label>\r
    </div>\r
    }\r
</div>\r
}\r
@else if(selectedTaskIds().length > 0) { <p>{{ 'findPages.task.noUrls' | translate }}</p> }` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GetTaskUrlsComponent, { className: "GetTaskUrlsComponent", filePath: "src/app/components/find-pages/get-task-pages/get-task-urls.component.ts", lineNumber: 36 });
})();

// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var _c03 = ["clearicon"];
var _c110 = ["incrementbuttonicon"];
var _c27 = ["decrementbuttonicon"];
var _c32 = ["input"];
function InputNumber_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 7);
    \u0275\u0275listener("click", function InputNumber_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", "p-inputnumber-clear-icon");
    \u0275\u0275attribute("data-pc-section", "clearIcon");
  }
}
function InputNumber_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputNumber_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275listener("click", function InputNumber_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275template(1, InputNumber_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearIcon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputNumber_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 5)(2, InputNumber_ng_container_2_span_2_Template, 2, 2, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputNumber_span_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.incrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_3_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleUpIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_3_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_3_ng_container_3_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 2)(2, InputNumber_span_3_ng_container_3_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_span_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.decrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_6_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDownIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_span_3_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_span_3_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_span_3_ng_container_6_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 2)(2, InputNumber_span_3_ng_container_6_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10)(1, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_span_3_Template_button_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(2, InputNumber_span_3_span_2_Template, 1, 2, "span", 12)(3, InputNumber_span_3_ng_container_3_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_span_3_Template_button_mousedown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(5, InputNumber_span_3_span_5_Template, 1, 2, "span", 12)(6, InputNumber_span_3_ng_container_6_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "buttonGroup");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.incrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._incrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "incrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.decrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._decrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "decrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.incrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_4_ng_container_2_AngleUpIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleUpIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "incrementbuttonicon");
  }
}
function InputNumber_button_4_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_4_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_4_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_4_ng_container_2_AngleUpIcon_1_Template, 1, 1, "AngleUpIcon", 2)(2, InputNumber_button_4_ng_container_2_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_button_4_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_4_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_4_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_4_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_4_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_4_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_4_ng_container_2_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.incrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._incrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "incrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.incrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.decrementButtonIcon);
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "AngleDownIcon");
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "decrementbuttonicon");
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputNumber_button_5_ng_container_2_AngleDownIcon_1_Template, 1, 1, "AngleDownIcon", 2)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownButtonKeyUp());
    });
    \u0275\u0275template(1, InputNumber_button_5_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.decrementButtonClass);
    \u0275\u0275property("ngClass", ctx_r2._decrementButtonClass)("disabled", ctx_r2.disabled);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "decrementbutton");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.decrementButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
var theme2 = ({
  dt
}) => `
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${dt("inputnumber.button.background")};
    color: ${dt("inputnumber.button.color")};
    width: ${dt("inputnumber.button.width")};
    transition: background ${dt("inputnumber.transition.duration")}, color ${dt("inputnumber.transition.duration")}, border-color ${dt("inputnumber.transition.duration")}, outline-color ${dt("inputnumber.transition.duration")};
}

.p-inputnumber-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: 0.75rem;
    color: ${dt("inputnumber.button.color")};
}

.p-inputnumber-button:hover {
    background: ${dt("inputnumber.button.hover.background")};
    color: ${dt("inputnumber.button.hover.color")};
}

.p-inputnumber-button:active {
    background: ${dt("inputnumber.button.active.background")};
    color: ${dt("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(${dt("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${dt("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${dt("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${dt("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${dt("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${dt("inputnumber.button.border.radius")};
    border-end-end-radius: ${dt("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${dt("inputnumber.button.border.radius")};
    border-end-start-radius: ${dt("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${dt("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${dt("inputnumber.button.border.color")};
    padding-block: ${dt("inputnumber.button.vertical.padding")};
    padding-inline: 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${dt("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${dt("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${dt("inputnumber.button.border.radius")};
    border-start-end-radius: ${dt("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${dt("inputnumber.button.border.radius")};
    border-end-end-radius: ${dt("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${dt("form.field.sm.font.size")};
    width: ${dt("form.field.sm.font.size")};
    height: ${dt("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${dt("form.field.lg.font.size")};
    width: ${dt("form.field.lg.font.size")};
    height: ${dt("form.field.lg.font.size")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
p-input-number.ng-invalid.ng-dirty > .p-inputtext,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
    border-color: ${dt("inputtext.invalid.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
    border-color: ${dt("inputtext.focus.border.color")};
}

p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
    color: ${dt("inputtext.invalid.placeholder.color")};
}
`;
var classes2 = {
  root: ({
    instance
  }) => ({
    "p-inputnumber p-component p-inputwrapper": true,
    "p-inputwrapper-filled": instance.filled || instance.allowEmpty === false,
    "p-inputwrapper-focus": instance.focused,
    "p-inputnumber-stacked": instance.showButtons && instance.buttonLayout === "stacked",
    "p-inputnumber-horizontal": instance.showButtons && instance.buttonLayout === "horizontal",
    "p-inputnumber-vertical": instance.showButtons && instance.buttonLayout === "vertical",
    "p-inputnumber-fluid": instance.hasFluid
  }),
  pcInput: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: ({
    instance
  }) => ({
    "p-inputnumber-button p-inputnumber-increment-button": true,
    "p-disabled": instance.showButtons && instance.max !== null && instance.maxlength
  }),
  decrementButton: ({
    instance
  }) => ({
    "p-inputnumber-button p-inputnumber-decrement-button": true,
    "p-disabled": instance.showButtons && instance.min !== null && instance.minlength
  })
};
var InputNumberStyle = class _InputNumberStyle extends BaseStyle {
  name = "inputnumber";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputNumberStyle_BaseFactory;
    return function InputNumberStyle_Factory(__ngFactoryType__) {
      return (\u0275InputNumberStyle_BaseFactory || (\u0275InputNumberStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputNumberStyle)))(__ngFactoryType__ || _InputNumberStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputNumberStyle,
    factory: _InputNumberStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberStyle, [{
    type: Injectable
  }], null, null);
})();
var InputNumberClasses;
(function(InputNumberClasses2) {
  InputNumberClasses2["root"] = "p-inputnumber";
  InputNumberClasses2["pcInput"] = "p-inputnumber-input";
  InputNumberClasses2["buttonGroup"] = "p-inputnumber-button-group";
  InputNumberClasses2["incrementButton"] = "p-inputnumber-increment-button";
  InputNumberClasses2["decrementButton"] = "p-inputnumber-decrement-button";
})(InputNumberClasses || (InputNumberClasses = {}));
var INPUTNUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumber),
  multi: true
};
var InputNumber = class _InputNumber extends BaseComponent {
  injector;
  /**
   * Displays spinner buttons.
   * @group Props
   */
  showButtons = false;
  /**
   * Whether to format the value.
   * @group Props
   */
  format = true;
  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   * @group Props
   */
  buttonLayout = "stacked";
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Maximum number of character allows in the input field.
   * @group Props
   */
  maxlength;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Specifies one or more IDs in the DOM that describes the input field.
   * @group Props
   */
  ariaDescribedBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * Name of the input field.
   * @group Props
   */
  name;
  /**
   * Indicates that whether the input field is required.
   * @group Props
   */
  required;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonClass;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonClass;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonIcon;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonIcon;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly = false;
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step = 1;
  /**
   * Determines whether the input field is empty.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
   * @group Props
   */
  localeMatcher;
  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   * @group Props
   */
  mode = "decimal";
  /**
   * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
   * @group Props
   */
  currency;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @group Props
   */
  currencyDisplay;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @group Props
   */
  useGrouping = true;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  minFractionDigits;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  maxFractionDigits;
  /**
   * Text to display before the value.
   * @group Props
   */
  prefix;
  /**
   * Text to display after the value.
   * @group Props
   */
  suffix;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    if (disabled) this.focused = false;
    this._disabled = disabled;
    if (this.timer) this.clearTimer();
  }
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid = false;
  /**
   * Callback to invoke on input.
   * @param {InputNumberInputEvent} event - Custom input event.
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke on input key press.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyDown = new EventEmitter();
  /**
   * Callback to invoke when clear token is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Template of the clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Template of the increment button icon.
   * @group Templates
   */
  incrementButtonIconTemplate;
  /**
   * Template of the decrement button icon.
   * @group Templates
   */
  decrementButtonIconTemplate;
  templates;
  input;
  _clearIconTemplate;
  _incrementButtonIconTemplate;
  _decrementButtonIconTemplate;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focused;
  initialized;
  groupChar = "";
  prefixChar = "";
  suffixChar = "";
  isSpecialChar;
  timer;
  lastValue;
  _numeral;
  numberFormat;
  _decimal;
  _decimalChar;
  _group;
  _minusSign;
  _currency;
  _prefix;
  _suffix;
  _index;
  _disabled;
  _componentStyle = inject(InputNumberStyle);
  ngControl = null;
  get _rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  get _incrementButtonClass() {
    return this._componentStyle.classes.incrementButton({
      instance: this
    });
  }
  get _decrementButtonClass() {
    return this._componentStyle.classes.decrementButton({
      instance: this
    });
  }
  constructor(injector) {
    super();
    this.injector = injector;
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    const props = ["locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix"];
    if (props.some((p) => !!simpleChange[p])) {
      this.updateConstructParser();
    }
  }
  get hostClass() {
    return ["p-inputnumber p-component p-inputwrapper", this.styleClass, this.filled || this.allowEmpty === false ? "p-inputwrapper-filled" : "", this.focused ? "p-inputwrapper-focus" : "", this.showButtons && this.buttonLayout === "stacked" ? "p-inputnumber-stacked" : "", this.showButtons && this.buttonLayout === "horizontal" ? "p-inputnumber-horizontal" : "", this.showButtons && this.buttonLayout === "vertical" ? "p-inputnumber-vertical" : "", this.hasFluid ? "p-inputnumber-fluid" : ""].filter((cls) => !!cls).join(" ");
  }
  get hostStyle() {
    return this.style;
  }
  ngOnInit() {
    super.ngOnInit();
    this.ngControl = this.injector.get(NgControl, null, {
      optional: true
    });
    this.constructParser();
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "incrementbuttonicon":
          this._incrementButtonIconTemplate = item.template;
          break;
        case "decrementbuttonicon":
          this._decrementButtonIconTemplate = item.template;
          break;
      }
    });
  }
  getOptions() {
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: this.minFractionDigits ?? void 0,
      maximumFractionDigits: this.maxFractionDigits ?? void 0
    };
  }
  constructParser() {
    this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._decimalChar = this.getDecimalChar();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = (d) => index.get(d);
  }
  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }
  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  getDecimalExpression() {
    const decimalChar = this.getDecimalChar();
    return new RegExp(`[${decimalChar}]`, "g");
  }
  getDecimalChar() {
    const formatter = new Intl.NumberFormat(this.locale, __spreadProps(__spreadValues({}, this.getOptions()), {
      useGrouping: false
    }));
    return formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
  }
  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: true
    });
    this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }
  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false
    });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
  }
  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
    }
    return new RegExp(`[]`, "g");
  }
  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split("1")[0];
    }
    return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
  }
  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split("1")[1];
    }
    return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
  }
  formatValue(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix && value != this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }
        if (this.suffix && value != this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }
        return formattedValue;
      }
      return value.toString();
    }
    return "";
  }
  parseValue(text) {
    const suffixRegex = new RegExp(this._suffix, "");
    const prefixRegex = new RegExp(this._prefix, "");
    const currencyRegex = new RegExp(this._currency, "");
    let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
    if (filteredText) {
      if (filteredText === "-")
        return filteredText;
      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  }
  repeat(event, interval, dir) {
    if (this.readonly) {
      return;
    }
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);
    this.spin(event, dir);
  }
  spin(event, dir) {
    let step = this.step * dir;
    let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
      return;
    }
    this.updateInput(newValue, null, "spin", null);
    this.updateModel(event, newValue);
    this.handleOnInput(event, currentValue, newValue);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onUpButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, 1);
      event.preventDefault();
    }
  }
  onUpButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onUpButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, 1);
    }
  }
  onUpButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseDown(event) {
    if (event.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.disabled) {
      this.input?.nativeElement.focus();
      this.repeat(event, null, -1);
      event.preventDefault();
    }
  }
  onDownButtonMouseUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonMouseLeave() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyUp() {
    if (!this.disabled) {
      this.clearTimer();
    }
  }
  onDownButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, -1);
    }
  }
  onUserInput(event) {
    if (this.readonly) {
      return;
    }
    if (this.isSpecialChar) {
      event.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }
  onInputKeyDown(event) {
    if (this.readonly) {
      return;
    }
    this.lastValue = event.target.value;
    if (event.shiftKey || event.altKey) {
      this.isSpecialChar = true;
      return;
    }
    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;
    let inputValue = event.target.value;
    let newValueStr = null;
    if (event.altKey) {
      event.preventDefault();
    }
    switch (event.key) {
      case "ArrowUp":
        this.spin(event, 1);
        event.preventDefault();
        break;
      case "ArrowDown":
        this.spin(event, -1);
        event.preventDefault();
        break;
      case "ArrowLeft":
        for (let index = selectionStart; index <= inputValue.length; index++) {
          const previousCharIndex = index === 0 ? 0 : index - 1;
          if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "ArrowRight":
        for (let index = selectionEnd; index >= 0; index--) {
          if (this.isNumeralChar(inputValue.charAt(index))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "Tab":
      case "Enter":
        newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValueStr);
        this.input.nativeElement.setAttribute("aria-valuenow", newValueStr);
        this.updateModel(event, newValueStr);
        break;
      case "Backspace": {
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart - 1);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (this.mode === "currency" && deleteChar.search(this._currency) != -1) {
            newValueStr = inputValue.slice(1);
          }
          this.updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      }
      case "Delete":
        event.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          this.updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;
      case "Home":
        if (this.min) {
          this.updateModel(event, this.min);
          event.preventDefault();
        }
        break;
      case "End":
        if (this.max) {
          this.updateModel(event, this.max);
          event.preventDefault();
        }
        break;
      default:
        break;
    }
    this.onKeyDown.emit(event);
  }
  onInputKeyPress(event) {
    if (this.readonly) {
      return;
    }
    let code = event.which || event.keyCode;
    let char = String.fromCharCode(code);
    let isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);
    if (code != 13) {
      event.preventDefault();
    }
    if (!isDecimalSign && event.code === "NumpadDecimal") {
      isDecimalSign = true;
      char = this._decimalChar;
      code = char.charCodeAt(0);
    }
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.input.nativeElement;
    const newValue = this.parseValue(value + char);
    const newValueStr = newValue != null ? newValue.toString() : "";
    const selectedValue = value.substring(selectionStart, selectionEnd);
    const selectedValueParsed = this.parseValue(selectedValue);
    const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
    if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
      return;
    }
    if (this.maxlength && newValueStr.length > this.maxlength) {
      return;
    }
    if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
      this.insert(event, char, {
        isDecimalSign,
        isMinusSign
      });
    }
  }
  onPaste(event) {
    if (!this.disabled && !this.readonly) {
      event.preventDefault();
      let data = (event.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
      if (data) {
        if (this.maxlength) {
          data = data.toString().substring(0, this.maxlength);
        }
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }
  allowMinusSign() {
    return this.min == null || this.min < 0;
  }
  isMinusSign(char) {
    if (this._minusSign.test(char) || char === "-") {
      this._minusSign.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalMode() {
    return this.mode === "decimal";
  }
  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  }
  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  }
  insert(event, text, sign = {
    isDecimalSign: false,
    isMinusSign: false
  }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    } = this.getCharIndexes(inputValue);
    let newValueStr;
    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          this.updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, operation);
      }
    }
  }
  insertText(value, text, start, end) {
    let textSplit = text === "." ? text : text.split(".");
    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }
  deleteRange(value, start, end) {
    let newValueStr;
    if (end - start === value.length) newValueStr = "";
    else if (start === 0) newValueStr = value.slice(end);
    else if (end === value.length) newValueStr = value.slice(0, start);
    else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  }
  initCursor() {
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;
    let prefixLength = (this.prefixChar || "").length;
    inputValue = inputValue.replace(this._prefix, "");
    if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
      selectionStart -= prefixLength;
    }
    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index, index);
      }
    }
    return index || 0;
  }
  onInputClick() {
    const currentValue = this.input?.nativeElement.value;
    if (!this.readonly && currentValue !== getSelection()) {
      this.initCursor();
    }
  }
  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }
    return false;
  }
  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }
  updateValue(event, valueStr, insertedValueStr, operation) {
    let currentValue = this.input?.nativeElement.value;
    let newValue = null;
    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);
      this.handleOnInput(event, currentValue, newValue);
    }
  }
  handleOnInput(event, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.input.nativeElement.value = this.formatValue(newValue);
      this.input?.nativeElement.setAttribute("aria-valuenow", newValue);
      this.updateModel(event, newValue);
      this.onInput.emit({
        originalEvent: event,
        value: newValue,
        formattedValue: currentValue
      });
    }
  }
  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  }
  validateValue(value) {
    if (value === "-" || value == null) {
      return null;
    }
    if (this.min != null && value < this.min) {
      return this.min;
    }
    if (this.max != null && value > this.max) {
      return this.max;
    }
    return value;
  }
  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    let inputValue = this.input?.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      if (this.maxlength && newValue.length > this.maxlength) {
        newValue = newValue.slice(0, this.maxlength);
        selectionStart = Math.min(selectionStart, this.maxlength);
        selectionEnd = Math.min(selectionEnd, this.maxlength);
      }
      if (this.maxlength && this.maxlength < newValue.length) {
        return;
      }
      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;
      if (operation === "range-insert") {
        const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single") this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin") this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);
        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }
        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd2 = index + insertedValueStr.length + 1;
        this.input.nativeElement.setSelectionRange(selectionEnd2, selectionEnd2);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }
    this.input.nativeElement.setAttribute("aria-valuenow", value);
  }
  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;
      if (this.suffixChar) {
        return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
      } else {
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
    }
    return val1;
  }
  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);
      if (valueSplit.length === 2) {
        return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
      }
    }
    return 0;
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
    const newValueString = newValueNumber?.toString();
    this.input.nativeElement.value = this.formatValue(newValueString);
    this.input.nativeElement.setAttribute("aria-valuenow", newValueString);
    this.updateModel(event, newValueNumber);
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }
  updateModel(event, value) {
    const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === "blur";
    if (this.value !== value) {
      this.value = value;
      if (!(isBlurUpdateOnMode && this.focused)) {
        this.onModelChange(value);
      }
    } else if (isBlurUpdateOnMode) {
      this.onModelChange(value);
    }
  }
  writeValue(value) {
    this.value = value ? Number(value) : value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  static \u0275fac = function InputNumber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumber)(\u0275\u0275directiveInject(Injector));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputNumber,
    selectors: [["p-inputNumber"], ["p-inputnumber"], ["p-input-number"]],
    contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c110, 4);
        \u0275\u0275contentQuery(dirIndex, _c27, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.incrementButtonIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decrementButtonIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function InputNumber_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c32, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function InputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "inputnumber")("data-pc-section", "root");
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.hostClass);
      }
    },
    inputs: {
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      format: [2, "format", "format", booleanAttribute],
      buttonLayout: "buttonLayout",
      inputId: "inputId",
      styleClass: "styleClass",
      style: "style",
      placeholder: "placeholder",
      size: "size",
      maxlength: [2, "maxlength", "maxlength", numberAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      title: "title",
      ariaLabelledBy: "ariaLabelledBy",
      ariaDescribedBy: "ariaDescribedBy",
      ariaLabel: "ariaLabel",
      ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      autocomplete: "autocomplete",
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      incrementButtonClass: "incrementButtonClass",
      decrementButtonClass: "decrementButtonClass",
      incrementButtonIcon: "incrementButtonIcon",
      decrementButtonIcon: "decrementButtonIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      step: [2, "step", "step", numberAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      locale: "locale",
      localeMatcher: "localeMatcher",
      mode: "mode",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      variant: "variant",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      disabled: "disabled",
      fluid: [2, "fluid", "fluid", booleanAttribute]
    },
    outputs: {
      onInput: "onInput",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onClear: "onClear"
    },
    features: [\u0275\u0275ProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 33,
    consts: [["input", ""], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "ngClass", "ngStyle", "value", "variant", "disabled", "readonly", "pSize", "pAutoFocus", "fluid"], [4, "ngIf"], ["class", "p-inputnumber-button-group", 4, "ngIf"], ["type", "button", "tabindex", "-1", 3, "ngClass", "class", "disabled", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-inputnumber-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "ngClass"], [1, "p-inputnumber-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [1, "p-inputnumber-button-group"], ["type", "button", "tabindex", "-1", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "ngClass", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
    template: function InputNumber_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("input", function InputNumber_Template_input_input_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onUserInput($event));
        })("keydown", function InputNumber_Template_input_keydown_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyDown($event));
        })("keypress", function InputNumber_Template_input_keypress_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputKeyPress($event));
        })("paste", function InputNumber_Template_input_paste_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaste($event));
        })("click", function InputNumber_Template_input_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputClick());
        })("focus", function InputNumber_Template_input_focus_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function InputNumber_Template_input_blur_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, InputNumber_ng_container_2_Template, 3, 2, "ng-container", 2)(3, InputNumber_span_3_Template, 7, 17, "span", 3)(4, InputNumber_button_4_Template, 3, 8, "button", 4)(5, InputNumber_button_5_Template, 3, 8, "button", 4);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.inputStyleClass);
        \u0275\u0275property("ngClass", "p-inputnumber-input")("ngStyle", ctx.inputStyle)("value", ctx.formattedValue())("variant", ctx.variant)("disabled", ctx.disabled)("readonly", ctx.readonly)("pSize", ctx.size)("pAutoFocus", ctx.autofocus)("fluid", ctx.hasFluid);
        \u0275\u0275attribute("id", ctx.inputId)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy)("title", ctx.title)("name", ctx.name)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("required", ctx.required)("min", ctx.min)("max", ctx.max)("data-pc-section", "input");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumber, [{
    type: Component,
    args: [{
      selector: "p-inputNumber, p-inputnumber, p-input-number",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule],
      template: `
        <input
            pInputText
            #input
            [attr.id]="inputId"
            role="spinbutton"
            [ngClass]="'p-inputnumber-input'"
            [ngStyle]="inputStyle"
            [class]="inputStyleClass"
            [value]="formattedValue()"
            [variant]="variant"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.aria-valuenow]="value"
            [disabled]="disabled"
            [readonly]="readonly"
            [attr.placeholder]="placeholder"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-describedby]="ariaDescribedBy"
            [attr.title]="title"
            [pSize]="size"
            [attr.name]="name"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength"
            [attr.tabindex]="tabindex"
            [attr.aria-required]="ariaRequired"
            [attr.required]="required"
            [attr.min]="min"
            [attr.max]="max"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.data-pc-section]="'input'"
            [pAutoFocus]="autofocus"
            [fluid]="hasFluid"
        />
        <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
            <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" [ngClass]="'p-inputnumber-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" (click)="clear()" class="p-inputnumber-clear-icon" [attr.data-pc-section]="'clearIcon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <span class="p-inputnumber-button-group" *ngIf="showButtons && buttonLayout === 'stacked'" [attr.data-pc-section]="'buttonGroup'">
            <button
                type="button"
                [ngClass]="_incrementButtonClass"
                [class]="incrementButtonClass"
                [disabled]="disabled"
                tabindex="-1"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.aria-hidden]="true"
                [attr.data-pc-section]="'incrementbutton'"
            >
                <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <AngleUpIcon *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>

            <button
                type="button"
                [ngClass]="_decrementButtonClass"
                [class]="decrementButtonClass"
                [disabled]="disabled"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-pc-section]="'decrementbutton'"
            >
                <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <AngleDownIcon *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [ngClass]="_incrementButtonClass"
            [class]="incrementButtonClass"
            [disabled]="disabled"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onUpButtonMouseDown($event)"
            (mouseup)="onUpButtonMouseUp()"
            (mouseleave)="onUpButtonMouseLeave()"
            (keydown)="onUpButtonKeyDown($event)"
            (keyup)="onUpButtonKeyUp()"
            [attr.data-pc-section]="'incrementbutton'"
        >
            <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
            <ng-container *ngIf="!incrementButtonIcon">
                <AngleUpIcon *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [ngClass]="_decrementButtonClass"
            [class]="decrementButtonClass"
            [disabled]="disabled"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onDownButtonMouseDown($event)"
            (mouseup)="onDownButtonMouseUp()"
            (mouseleave)="onDownButtonMouseLeave()"
            (keydown)="onDownButtonKeyDown($event)"
            (keyup)="onDownButtonKeyUp()"
            [attr.data-pc-section]="'decrementbutton'"
        >
            <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
            <ng-container *ngIf="!decrementButtonIcon">
                <AngleDownIcon *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.data-pc-name]": "'inputnumber'",
        "[attr.data-pc-section]": "'root'",
        "[class]": "hostClass"
      }
    }]
  }], () => [{
    type: Injector
  }], {
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonLayout: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    maxlength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    incrementButtonClass: [{
      type: Input
    }],
    decrementButtonClass: [{
      type: Input
    }],
    incrementButtonIcon: [{
      type: Input
    }],
    decrementButtonIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onInput: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onKeyDown: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    incrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["incrementbuttonicon", {
        descendants: false
      }]
    }],
    decrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["decrementbuttonicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var InputNumberModule = class _InputNumberModule {
  static \u0275fac = function InputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumberModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputNumberModule,
    imports: [InputNumber, SharedModule],
    exports: [InputNumber, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputNumber, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [InputNumber, SharedModule],
      exports: [InputNumber, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/find-pages/get-child-pages/get-child-pages.service.ts
var GetChildPagesService = class _GetChildPagesService {
  fetchService = inject(FetchService);
  //Variables
  depth = 0;
  //Progress tracking
  searchProgress = signal(null);
  //Pages to skip children when building IA chart
  skipFormsAndPubs = /* @__PURE__ */ new Set([
    "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms.html",
    "https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/formulaires.html",
    "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications.html",
    "https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/publications.html"
  ]);
  findChildren(startingLinks, depth) {
    return __async(this, null, function* () {
      if (depth < 1)
        return [];
      const addToProject = [];
      const linkCache = [];
      this.searchProgress.set({ depth: 0, processedUrls: 0, totalUrls: startingLinks.size });
      yield new Promise((resolve) => setTimeout(resolve, 100));
      const allLinks = [];
      for (const url of startingLinks) {
        try {
          const doc = yield this.fetchService.fetchContent(url, "prod", 3, 50, false);
          const links = this.fetchService.getLinks(doc, url);
          allLinks.push(...links);
        } catch (error) {
          console.warn(`Failed to fetch project URL ${url}: ${error}`);
        }
        this.searchProgress.update((progress) => __spreadProps(__spreadValues({}, progress), {
          processedUrls: progress.processedUrls + 1
        }));
        yield new Promise((resolve) => setTimeout(resolve, 100));
      }
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
      let currentDepthUrls = [...new Set(allLinks)];
      console.log(currentDepthUrls);
      for (let currentDepth = 1; currentDepth <= depth; currentDepth++) {
        const nextDepthUrls = [];
        this.searchProgress.set({ depth: currentDepth, processedUrls: 0, totalUrls: currentDepthUrls.length });
        yield new Promise((resolve) => setTimeout(resolve, 100));
        for (const url of currentDepthUrls) {
          try {
            const { doc, finalUrl } = yield this.fetchService.fetchContentAndStatus(url, "prod", 3, 50, false);
            const breadcrumbs = this.fetchService.getBreadcrumb(doc, finalUrl);
            const links = this.fetchService.getLinks(doc, finalUrl);
            let foundAncestor = false;
            for (let i = 1; i <= depth && i <= breadcrumbs.length; i++) {
              const checkPosition = breadcrumbs.length - i;
              if (startingLinks.has(breadcrumbs[checkPosition].url)) {
                addToProject.push({ url: finalUrl, depthFromInScope: i });
                foundAncestor = true;
                if (i < depth) {
                  nextDepthUrls.push(...links);
                }
                break;
              }
            }
            if (foundAncestor)
              continue;
            for (const parent of addToProject) {
              const maxDistanceFromParent = depth - parent.depthFromInScope;
              for (let i = 1; i <= maxDistanceFromParent && i <= breadcrumbs.length; i++) {
                const checkPosition = breadcrumbs.length - i;
                if (checkPosition >= 0 && breadcrumbs[checkPosition].url === parent.url) {
                  const pageDepth = parent.depthFromInScope + i;
                  addToProject.push({ url: finalUrl, depthFromInScope: pageDepth });
                  foundAncestor = true;
                  if (pageDepth < depth) {
                    nextDepthUrls.push(...links);
                  }
                  break;
                }
              }
              if (foundAncestor)
                break;
            }
            if (!foundAncestor) {
              linkCache.push({ url, breadcrumbs });
            }
          } catch (error) {
            console.warn(`Skipping ${url}: ${error}`);
          } finally {
            this.searchProgress.update((progress) => __spreadProps(__spreadValues({}, progress), {
              processedUrls: progress.processedUrls + 1
            }));
            yield new Promise((resolve) => setTimeout(resolve, 100));
          }
        }
        currentDepthUrls = [...new Set(nextDepthUrls)].filter((link) => !startingLinks.has(link) && !addToProject.some((p) => p.url === link) && !linkCache.some((p) => p.url === link));
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
      }
      for (const cached of linkCache) {
        for (const parent of addToProject) {
          const maxDistanceFromParent = depth - parent.depthFromInScope;
          let foundAncestor = false;
          for (let i = 1; i <= maxDistanceFromParent && i <= cached.breadcrumbs.length; i++) {
            const checkPosition = cached.breadcrumbs.length - i;
            if (checkPosition >= 0 && cached.breadcrumbs[checkPosition].url === parent.url) {
              const pageDepth = parent.depthFromInScope + i;
              addToProject.push({ url: cached.url, depthFromInScope: pageDepth });
              foundAncestor = true;
              break;
            }
          }
          if (foundAncestor)
            break;
        }
      }
      this.searchProgress.set(null);
      return [...new Set(addToProject.map((p) => p.url))];
    });
  }
  static \u0275fac = function GetChildPagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetChildPagesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GetChildPagesService, factory: _GetChildPagesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetChildPagesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/find-pages/get-child-pages/get-child-pages.component.ts
var _c04 = (a0) => ({ number: a0 });
var _forTrack02 = ($index, $item) => $item.url;
function GetChildPagesComponent_Conditional_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progress_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 4, "findPages.findChildren.progressDepth"), " ", progress_r1.depth, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", progress_r1.processedUrls, "/", progress_r1.totalUrls, "");
  }
}
function GetChildPagesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 5);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275template(2, GetChildPagesComponent_Conditional_14_ng_template_2_Template, 6, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const progress_r1 = ctx;
    \u0275\u0275property("value", \u0275\u0275pipeBind2(1, 1, progress_r1.processedUrls / progress_r1.totalUrls * 100, "1.0-0"));
  }
}
function GetChildPagesComponent_Conditional_15_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-checkbox", 14);
    \u0275\u0275twoWayListener("ngModelChange", function GetChildPagesComponent_Conditional_15_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_53_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.childUrls()[\u0275$index_53_r5].selected, $event) || (ctx_r2.childUrls()[\u0275$index_53_r5].selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function GetChildPagesComponent_Conditional_15_For_11_Template_p_checkbox_ngModelChange_1_listener($event) {
      const \u0275$index_53_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleChildUrl(\u0275$index_53_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const \u0275$index_53_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.childUrls()[\u0275$index_53_r5].selected);
    \u0275\u0275property("inputId", "url-" + \u0275$index_53_r5)("binary", true);
    \u0275\u0275advance();
    \u0275\u0275property("for", "url-" + \u0275$index_53_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.url);
  }
}
function GetChildPagesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "p-button", 10);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function GetChildPagesComponent_Conditional_15_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addUrlsToProject());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275repeaterCreate(10, GetChildPagesComponent_Conditional_15_For_11_Template, 4, 5, "div", 13, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "findPages.findChildren.urls"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 5, "findPages.task.addToProject"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, "findPages.task.addToProject.description", \u0275\u0275pureFunction1(10, _c04, ctx_r2.selectedChildUrlsCount())));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.childUrls());
  }
}
function GetChildPagesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "findPages.task.noUrls"));
  }
}
var GetChildPagesComponent = class _GetChildPagesComponent {
  // Services    
  projectState = inject(ProjectStateService);
  getChildPagesService = inject(GetChildPagesService);
  addUrlsService = inject(AddUrlsService);
  childUrls = signal([]);
  // Count selected child urls
  selectedChildUrlsCount = computed(() => this.childUrls().filter((child) => child.selected).length);
  // Toggle selection
  toggleChildUrl(index, selected) {
    this.childUrls.update((urls) => {
      const updated = [...urls];
      updated[index] = __spreadProps(__spreadValues({}, updated[index]), { selected });
      return updated;
    });
  }
  findChildPages() {
    return __async(this, null, function* () {
      const depth = this.getChildPagesService.depth;
      if (depth < 1)
        return;
      const lang = this.projectState.detectPrimaryLanguage();
      const inScopeUrls = new Set(this.projectState.getAllPages(lang, "live", "inScope").map((u) => u.url));
      const childPages = yield this.getChildPagesService.findChildren(inScopeUrls, depth);
      this.childUrls.set(childPages.map((url) => ({ url, selected: true })));
    });
  }
  // Add to project
  addUrlsToProject() {
    const selectedUrls = this.childUrls().filter((item) => item.selected).map((item) => item.url);
    this.addUrlsService.appendUrlsToInput(selectedUrls);
    this.childUrls.set([]);
  }
  static \u0275fac = function GetChildPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetChildPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GetChildPagesComponent, selectors: [["aida-get-child-pages"]], decls: 17, vars: 19, consts: [["content", ""], [1, "flex", "flex-row", "gap-1"], ["inputId", "depth", "mode", "decimal", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "showButtons", "ngModel", "min", "max"], ["for", "depth"], ["icon", "pi pi-search", "severity", "primary", 1, "flex", "min-h-full", "white-space-nowrap", 3, "click", "label", "loading"], ["styleClass", "h-2rem centered-label mt-1 transition-duration-100", 3, "value"], [1, "flex", "flex-row", "gap-6"], [1, "text-white"], [1, "text-xl", "my-2"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-plus", 3, "onClick", "label"], [1, "text-color-secondary"], [1, "flex", "flex-column", "gap-2", "max-h-64", "overflow-y-auto", "border", "border-color-border", "p-2", "rounded"], [1, "flex", "align-items-center", "gap-2"], ["size", "large", 3, "ngModelChange", "ngModel", "inputId", "binary"], [1, "break-all", 3, "for"]], template: function GetChildPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3");
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 1)(7, "p-iftalabel")(8, "p-inputnumber", 2);
      \u0275\u0275twoWayListener("ngModelChange", function GetChildPagesComponent_Template_p_inputnumber_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.getChildPagesService.depth, $event) || (ctx.getChildPagesService.depth = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 3);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-button", 4);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function GetChildPagesComponent_Template_p_button_click_12_listener() {
        return ctx.findChildPages();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, GetChildPagesComponent_Conditional_14_Template, 4, 4, "p-progressbar", 5)(15, GetChildPagesComponent_Conditional_15_Template, 12, 12)(16, GetChildPagesComponent_Conditional_16_Template, 3, 3, "p");
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 11, "findPages.findChildren._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 13, "findPages.findChildren.description"));
      \u0275\u0275advance(4);
      \u0275\u0275property("showButtons", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.getChildPagesService.depth);
      \u0275\u0275property("min", 0)("max", 6);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "findPages.findChildren.depth"));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(13, 17, "findPages.findChildren.add"))("loading", ctx.getChildPagesService.searchProgress());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_9_0 = ctx.getChildPagesService.searchProgress()) ? 14 : -1, tmp_9_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.childUrls().length > 0 ? 15 : ctx.selectedChildUrlsCount() > 0 ? 16 : -1);
    }
  }, dependencies: [CommonModule, DecimalPipe, FormsModule, NgControlStatus, NgModel, TranslateModule, TranslatePipe, InputNumberModule, InputNumber, IftaLabelModule, IftaLabel, ButtonModule, Button, ProgressBarModule, ProgressBar, CheckboxModule, Checkbox], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetChildPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-get-child-pages", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      InputNumberModule,
      IftaLabelModule,
      ButtonModule,
      ProgressBarModule,
      CheckboxModule
    ], template: `<h3>{{'findPages.findChildren._title' | translate}}</h3>\r
<p>{{'findPages.findChildren.description' | translate}}</p>\r
<div class="flex flex-row gap-1">\r
    <p-iftalabel>\r
        <p-inputnumber inputId="depth" [showButtons]="true" mode="decimal" variant="outlined" class="secondary-outline"\r
                       [(ngModel)]="getChildPagesService.depth" [min]="0" [max]="6" />\r
        <label for="depth">{{'findPages.findChildren.depth' | translate}}</label>\r
    </p-iftalabel>\r
    <p-button icon="pi pi-search" [label]="'findPages.findChildren.add' | translate" severity="primary" class="flex min-h-full white-space-nowrap"\r
              (click)="findChildPages()" [loading]="getChildPagesService.searchProgress()" />\r
</div>\r
@if(getChildPagesService.searchProgress(); as progress){\r
<p-progressbar [value]="progress.processedUrls / progress.totalUrls * 100 | number:'1.0-0'" styleClass="h-2rem centered-label mt-1 transition-duration-100">\r
    <ng-template #content>\r
        <div class="flex flex-row gap-6">\r
            <span class="text-white">{{'findPages.findChildren.progressDepth' | translate}} {{progress.depth}}</span>\r
            <span class="text-white">{{progress.processedUrls}}/{{progress.totalUrls}}</span>\r
        </div>\r
    </ng-template>\r
</p-progressbar>\r
}\r
<!-- URLs List Section -->\r
@if(childUrls().length > 0) {\r
<h3 class="text-xl my-2">{{'findPages.findChildren.urls' | translate}}</h3>\r
<div class="flex flex-row align-items-center gap-2">\r
    <p-button\r
              [label]="'findPages.task.addToProject' | translate"\r
              icon="pi pi-plus"\r
              (onClick)="addUrlsToProject()" />\r
    <p class="text-color-secondary">{{ 'findPages.task.addToProject.description' | translate: { number: selectedChildUrlsCount() } }}</p>\r
</div>\r
<div class="flex flex-column gap-2 max-h-64 overflow-y-auto border border-color-border p-2 rounded">\r
    @for(item of childUrls(); track item.url; let i = $index) {\r
    <div class="flex align-items-center gap-2">\r
        <p-checkbox\r
                    [(ngModel)]="childUrls()[i].selected"\r
                    (ngModelChange)="toggleChildUrl(i, $event)"\r
                    [inputId]="'url-' + i"\r
                    [binary]="true"\r
                    size="large" />\r
        <label [for]="'url-' + i" class="break-all">{{item.url}}</label>\r
    </div>\r
    }\r
</div>\r
}\r
@else if(selectedChildUrlsCount() > 0) { <p>{{ 'findPages.task.noUrls' | translate }}</p> }` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GetChildPagesComponent, { className: "GetChildPagesComponent", filePath: "src/app/components/find-pages/get-child-pages/get-child-pages.component.ts", lineNumber: 28 });
})();

// src/app/components/find-pages/find-pages.component.ts
var FindPagesComponent = class _FindPagesComponent {
  static \u0275fac = function FindPagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FindPagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindPagesComponent, selectors: [["aida-find-pages"]], decls: 19, vars: 12, consts: [[1, "text-2xl", "my-1"], [1, "text-color-secondary"], ["value", "0"], ["value", "1"], [1, "p-0"]], template: function FindPagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 1);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-tabs", 2)(7, "p-tablist")(8, "p-tab", 2);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-tab", 3);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p-tabpanels", 4)(15, "p-tabpanel", 2);
      \u0275\u0275element(16, "aida-get-task-urls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-tabpanel", 3);
      \u0275\u0275element(18, "aida-get-child-pages");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "findPages._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "findPages.description"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "findPages.task._nav"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "findPages.findChildren._nav"));
    }
  }, dependencies: [TranslateModule, TranslatePipe, TabsModule, Tabs, TabPanels, TabPanel, TabList, Tab, GetTaskUrlsComponent, GetChildPagesComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindPagesComponent, [{
    type: Component,
    args: [{ selector: "aida-find-pages", imports: [
      TranslateModule,
      TabsModule,
      GetTaskUrlsComponent,
      GetChildPagesComponent
    ], template: '<h2 class="text-2xl my-1">{{"findPages._title" | translate}}</h2>\r\n<p class="text-color-secondary">{{"findPages.description" | translate}}</p>\r\n\r\n<p-tabs value="0">\r\n    <p-tablist>\r\n        <p-tab value="0">{{"findPages.task._nav" | translate }}</p-tab>\r\n        <p-tab value="1">{{"findPages.findChildren._nav" | translate }}</p-tab>\r\n    </p-tablist>\r\n    <p-tabpanels class="p-0">\r\n        <!--Find pages by task-->\r\n        <p-tabpanel value="0">\r\n            <aida-get-task-urls />\r\n        </p-tabpanel>\r\n        <!--Find child pages-->\r\n        <p-tabpanel value="1">\r\n            <aida-get-child-pages />\r\n        </p-tabpanel>\r\n    </p-tabpanels>\r\n</p-tabs>\r\n\r\n\r\n<!--Find pages by keyword or regex (grep search/regex helper)-->\r\n\r\n<!--Find parent for new page-->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindPagesComponent, { className: "FindPagesComponent", filePath: "src/app/components/find-pages/find-pages.component.ts", lineNumber: 18 });
})();

export {
  AutoComplete,
  AutoCompleteModule,
  InputNumber,
  InputNumberModule,
  FindPagesComponent
};
//# sourceMappingURL=chunk-O52YXDMY.js.map
