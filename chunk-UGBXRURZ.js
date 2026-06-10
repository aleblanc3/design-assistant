import {
  UserSettingsService
} from "./chunk-2C4SANN4.js";
import {
  marker
} from "./chunk-WPUR2K7L.js";
import {
  Select,
  SelectModule
} from "./chunk-XAYNXU3L.js";
import {
  BaseComponent,
  BaseStyle,
  CommonModule,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
  PrimeTemplate,
  Ripple,
  SharedModule,
  TranslateModule,
  TranslatePipe
} from "./chunk-ZLW5LXTH.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  effect,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4H6JJ3MH.js";
import {
  equals,
  resolveFieldData
} from "./chunk-6EM4UOB6.js";

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c0 = ["icon"];
var _c1 = ["content"];
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = (a0, a1) => ({
  "p-togglebutton-icon": true,
  "p-togglebutton-icon-left": a0,
  "p-togglebutton-icon-right": a1
});
function ToggleButton_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c3, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function ToggleButton_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template, 1, 7, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_2_Conditional_1_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(2, "span", 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.iconTemplate ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.cx("label"));
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "\xA0" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "\xA0");
  }
}
var theme = ({
  dt
}) => `
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${dt("togglebutton.color")};
    background: ${dt("togglebutton.background")};
    border: 1px solid ${dt("togglebutton.border.color")};
    padding: ${dt("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt("togglebutton.transition.duration")}, color ${dt("togglebutton.transition.duration")}, border-color ${dt("togglebutton.transition.duration")},
        outline-color ${dt("togglebutton.transition.duration")}, box-shadow ${dt("togglebutton.transition.duration")};
    border-radius: ${dt("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${dt("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${dt("togglebutton.gap")};
    padding: ${dt("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${dt("togglebutton.content.border.radius")};
    transition: background ${dt("togglebutton.transition.duration")}, color ${dt("togglebutton.transition.duration")}, border-color ${dt("togglebutton.transition.duration")},
            outline-color ${dt("togglebutton.transition.duration")}, box-shadow ${dt("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${dt("togglebutton.hover.background")};
    color: ${dt("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${dt("togglebutton.checked.background")};
    border-color: ${dt("togglebutton.checked.border.color")};
    color: ${dt("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${dt("togglebutton.content.checked.background")};
    box-shadow: ${dt("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${dt("togglebutton.focus.ring.shadow")};
    outline: ${dt("togglebutton.focus.ring.width")} ${dt("togglebutton.focus.ring.style")} ${dt("togglebutton.focus.ring.color")};
    outline-offset: ${dt("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${dt("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${dt("togglebutton.disabled.background")};
    border-color: ${dt("togglebutton.disabled.border.color")};
    color: ${dt("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${dt("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${dt("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${dt("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${dt("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${dt("togglebutton.sm.padding")};
    font-size: ${dt("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${dt("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${dt("togglebutton.lg.padding")};
    font-size: ${dt("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${dt("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${dt("togglebutton.invalid.border.color")};
}
`;
var classes = {
  root: ({
    instance
  }) => ({
    "p-togglebutton p-component": true,
    "p-togglebutton-checked": instance.checked,
    "p-disabled": instance.disabled,
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large"
  }),
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleButtonStyle_BaseFactory || (\u0275ToggleButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseComponent {
  get hostClass() {
    return this.styleClass || "";
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  toggle(event) {
    if (!this.disabled && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  _componentStyle = inject(ToggleButtonStyle);
  onBlur() {
    this.onModelTouched();
  }
  writeValue(value) {
    this.checked = value;
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
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (\u0275ToggleButton_BaseFactory || (\u0275ToggleButton_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 23,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ToggleButton_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("click", function ToggleButton_click_HostBindingHandler($event) {
          return ctx.toggle($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("tabindex", ctx.tabindex);
        \u0275\u0275attribute("disabled", ctx.disabled)("aria-labelledby", ctx.ariaLabelledBy)("aria-pressed", ctx.checked)("data-p-checked", ctx.active)("data-p-disabled", ctx.disabled)("type", "button");
        \u0275\u0275classMap(ctx.hostClass);
        \u0275\u0275classProp("p-togglebutton", true)("p-togglebutton-checked", ctx.checked)("p-disabled", ctx.disabled)("p-togglebutton-sm", ctx.size === "small")("p-inputfield-sm", ctx.size === "small")("p-togglebutton-lg", ctx.size === "large")("p-inputfield-lg", ctx.size === "large");
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      allowEmpty: "allowEmpty"
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle]), \u0275\u0275HostDirectivesFeature([Ripple]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 6,
    consts: [[3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, ToggleButton_ng_container_1_Template, 1, 0, "ng-container", 1)(2, ToggleButton_Conditional_2_Template, 4, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.cx("content"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c2, ctx.checked));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [CommonModule, SharedModule],
      hostDirectives: [{
        directive: Ripple
      }],
      host: {
        "[tabindex]": "tabindex",
        "[attr.disabled]": "disabled",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-pressed]": "checked",
        "[attr.data-p-checked]": "active",
        "[attr.data-p-disabled]": "disabled",
        "[attr.type]": '"button"',
        "[class.p-togglebutton]": "true",
        "[class.p-togglebutton-checked]": "checked",
        "[class.p-disabled]": "disabled",
        "[class.p-togglebutton-sm]": 'size === "small"',
        "[class.p-inputfield-sm]": 'size === "small"',
        "[class.p-togglebutton-lg]": 'size === "large"',
        "[class.p-inputfield-lg]": 'size === "large"'
      },
      template: `<span [ngClass]="cx('content')">
        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
        @if (!contentTemplate) {
            @if (!iconTemplate) {
                @if (onIcon || offIcon) {
                    <span
                        [class]="checked ? this.onIcon : this.offIcon"
                        [ngClass]="{
                            'p-togglebutton-icon': true,
                            'p-togglebutton-icon-left': iconPos === 'left',
                            'p-togglebutton-icon-right': iconPos === 'right'
                        }"
                        [attr.data-pc-section]="'icon'"
                    ></span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span [ngClass]="cx('label')" [attr.data-pc-section]="'label'">{{ checked ? (hasOnLabel ? onLabel : '\xA0') : hasOffLabel ? offLabel : '\xA0' }}</span>
        }
    </span>`,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    toggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule,
    imports: [ToggleButton, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var _c02 = ["item"];
var _c12 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function _forTrack0($index, $item) {
  return this.getOptionLabel($item);
}
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const \u0275$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c12, option_r3, \u0275$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-toggleButton", 2);
    \u0275\u0275listener("onChange", function SelectButton_For_1_Template_p_toggleButton_onChange_0_listener($event) {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const \u0275$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onOptionSelect($event, option_r3, \u0275$index_1_r4));
    });
    \u0275\u0275template(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.disabled || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.getAllowEmpty())("size", ctx_r4.size);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var theme2 = ({
  dt
}) => `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${dt("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${dt("selectbutton.border.radius")};
    border-end-start-radius: ${dt("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${dt("selectbutton.border.radius")};
    border-end-end-radius: ${dt("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${dt("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`;
var classes2 = {
  root: ({
    props
  }) => ["p-selectbutton p-component", {
    "p-invalid": props.invalid
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275SelectButtonStyle_BaseFactory || (\u0275SelectButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseComponent {
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Whether selection can be cleared.
   * @group Props
   */
  get unselectable() {
    return this._unselectable;
  }
  _unselectable = false;
  set unselectable(value) {
    this._unselectable = value;
    this.allowEmpty = !value;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Template of an item in the list.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  getAllowEmpty() {
    if (this.multiple) {
      return this.allowEmpty || this.value?.length !== 1;
    }
    return this.allowEmpty;
  }
  getOptionLabel(option) {
    return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  writeValue(value) {
    this.value = value;
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
  onOptionSelect(event, option, index) {
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !equals(val, optionValue, this.equalityKey));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  changeTabIndexes(event, direction) {
    let firstTabableChild, index;
    for (let i = 0; i <= this.el.nativeElement.children.length - 1; i++) {
      if (this.el.nativeElement.children[i].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i],
        index: i
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !equals(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (equals(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = equals(this.getOptionValue(option), this.value, this.equalityKey);
    }
    return selected;
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (\u0275SelectButton_BaseFactory || (\u0275SelectButton_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 10,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "group")("aria-labelledby", ctx.ariaLabelledBy)("data-pc-section", "root")("data-pc-name", "selectbutton");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classProp("p-selectbutton", true)("p-component", true);
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      size: "size",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SelectButton_For_1_Template, 2, 9, "p-toggleButton", 1, _forTrack0, true);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule],
      template: `
        @for (option of options; track getOptionLabel(option); let i = $index) {
            <p-toggleButton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="disabled || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="getAllowEmpty()"
                [size]="size"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-toggleButton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-selectbutton]": "true",
        "[class.p-component]": "true",
        "[style]": "style",
        "[attr.role]": '"group"',
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-pc-section]": "'root'",
        "[attr.data-pc-name]": "'selectbutton'"
      }
    }]
  }], null, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    unselectable: [{
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
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static \u0275fac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SelectButtonModule,
    imports: [SelectButton, SharedModule],
    exports: [SelectButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/user-settings/user-settings.component.ts
function UserSettingsComponent_Conditional_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r3.label), " ");
  }
}
function UserSettingsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-selectbutton", 3);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_1_Template_p_selectbutton_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLang, $event) || (ctx_r1.selectedLang = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, UserSettingsComponent_Conditional_1_ng_template_5_Template, 2, 3, "ng-template", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.language"));
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.langOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLang);
  }
}
function UserSettingsComponent_Conditional_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r5.label), " ");
  }
}
function UserSettingsComponent_Conditional_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r6.label), " ");
  }
}
function UserSettingsComponent_Conditional_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const selectedItem_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, selectedItem_r7.label), " ");
  }
}
function UserSettingsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "p-selectbutton", 6);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_2_Template_p_selectbutton_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedTheme, $event) || (ctx_r1.selectedTheme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function UserSettingsComponent_Conditional_2_Template_p_selectbutton_onChange_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeTheme());
    });
    \u0275\u0275template(6, UserSettingsComponent_Conditional_2_ng_template_6_Template, 2, 3, "ng-template", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function UserSettingsComponent_Conditional_2_Template_p_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedScheme, $event) || (ctx_r1.selectedScheme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function UserSettingsComponent_Conditional_2_Template_p_select_onChange_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeScheme());
    });
    \u0275\u0275template(8, UserSettingsComponent_Conditional_2_ng_template_8_Template, 2, 3, "ng-template", 4)(9, UserSettingsComponent_Conditional_2_ng_template_9_Template, 2, 3, "ng-template", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "settings.theme"));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.themeOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedTheme);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.colorSchemes);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedScheme);
  }
}
var UserSettingsComponent = class _UserSettingsComponent {
  settingsService = inject(UserSettingsService);
  mode = "all";
  constructor() {
    effect(() => {
      this.selectedTheme = this.settingsService.darkMode();
      this.selectedScheme = this.settingsService.colorScheme();
    });
  }
  // Language
  langOptions = [{ label: "common.language.english", value: "en" }, { label: "common.language.french", value: "fr" }];
  get selectedLang() {
    return this.settingsService.currentLang();
  }
  set selectedLang(value) {
    this.settingsService.setLanguage(value);
  }
  // Dark & Light theme
  themeOptions = [{ label: "settings.theme.light", value: false }, { label: "settings.theme.dark", value: true }];
  selectedTheme = this.settingsService.darkMode();
  changeTheme() {
    this.settingsService.toggle();
  }
  // Default & other themes
  colorSchemes = [
    { label: "settings.theme.default", value: "default" },
    { label: "settings.theme.deutan", value: "deutan" },
    { label: "settings.theme.protan", value: "protan" },
    { label: "settings.theme.tritan", value: "tritan" },
    { label: "settings.theme.custom", value: "custom" }
  ];
  markForTranslation() {
    marker("common.language.english");
    marker("common.language.french");
    marker("settings.theme.light");
    marker("settings.theme.dark");
    marker("settings.theme.default");
    marker("settings.theme.deutan");
    marker("settings.theme.protan");
    marker("settings.theme.tritan");
    marker("settings.theme.custom");
  }
  selectedScheme = this.settingsService.colorScheme();
  changeScheme() {
    this.settingsService.setColorScheme(this.selectedScheme);
  }
  static \u0275fac = function UserSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSettingsComponent, selectors: [["aida-user-settings"]], inputs: { mode: "mode" }, decls: 3, vars: 2, consts: [[1, "flex", "flex-column", "gap-2"], [1, "flex", "flex-column", "border-round", "p-1", "surface-100", "text-color-secondary", "hover:surface-200", "hover:text-primary"], [1, "text-xs", "my-1"], ["unselectable", "true", "optionLabel", "label", "optionValue", "value", 1, "mb-0", 3, "ngModelChange", "options", "ngModel"], ["pTemplate", "item"], [1, "flex", "flex-row", "gap-2"], ["unselectable", "true", "optionLabel", "label", "optionValue", "value", 1, "mb-0", 3, "ngModelChange", "onChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "styleClass", "flex-1", "appendTo", "body", 1, "mb-0", 3, "ngModelChange", "onChange", "options", "ngModel"], ["pTemplate", "selectedItem"]], template: function UserSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UserSettingsComponent_Conditional_1_Template, 6, 5, "div", 1)(2, UserSettingsComponent_Conditional_2_Template, 10, 7, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode === "language" || ctx.mode === "all" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mode === "theme" || ctx.mode === "all" ? 2 : -1);
    }
  }, dependencies: [TranslateModule, TranslatePipe, FormsModule, NgControlStatus, NgModel, SelectButtonModule, SelectButton, PrimeTemplate, SelectModule, Select], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSettingsComponent, [{
    type: Component,
    args: [{ selector: "aida-user-settings", imports: [
      TranslateModule,
      FormsModule,
      SelectButtonModule,
      SelectModule
    ], template: `<div class="flex flex-column gap-2">\r
    @if(mode==="language" || mode==="all"){\r
    <div class="flex flex-column border-round p-1 surface-100 text-color-secondary hover:surface-200 hover:text-primary">\r
        <span class="text-xs my-1">{{ 'settings.language' | translate }}</span>\r
        <p-selectbutton [options]="langOptions" [(ngModel)]="selectedLang"\r
                        unselectable="true" optionLabel="label" optionValue="value" class="mb-0">\r
            <ng-template pTemplate="item" let-item>\r
                {{ item.label | translate }}\r
            </ng-template>\r
        </p-selectbutton>\r
    </div>\r
    }\r
    @if(mode==="theme" || mode==="all"){\r
    <div class="flex flex-column border-round p-1 surface-100 text-color-secondary hover:surface-200 hover:text-primary">\r
        <span class="text-xs my-1">{{ 'settings.theme' | translate }}</span>\r
        <div class="flex flex-row gap-2">\r
            <p-selectbutton [options]="themeOptions" [(ngModel)]="selectedTheme"\r
                            unselectable="true" optionLabel="label" optionValue="value" class="mb-0"\r
                            (onChange)="changeTheme()">\r
                <ng-template pTemplate="item" let-item>\r
                    {{ item.label | translate }}\r
                </ng-template>\r
            </p-selectbutton>\r
\r
            <p-select [options]="colorSchemes" [(ngModel)]="selectedScheme"\r
                      optionLabel="label" optionValue="value" class="mb-0" styleClass="flex-1" appendTo="body"\r
                      (onChange)="changeScheme()">\r
                <ng-template pTemplate="item" let-item>\r
                    {{ item.label | translate }}\r
                </ng-template>\r
                <ng-template pTemplate="selectedItem" let-selectedItem>\r
                    {{ selectedItem.label | translate }}\r
                </ng-template>\r
            </p-select>\r
        </div>\r
    </div>\r
    }\r
</div>` }]
  }], () => [], { mode: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSettingsComponent, { className: "UserSettingsComponent", filePath: "src/app/components/user-settings/user-settings.component.ts", lineNumber: 22 });
})();

// node_modules/primeng/fesm2022/primeng-inputgroup.mjs
var _c03 = ["*"];
var theme3 = ({
  dt
}) => `
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${dt("inputgroup.addon.padding")};
    background: ${dt("inputgroup.addon.background")};
    color: ${dt("inputgroup.addon.color")};
    border-block-start: 1px solid ${dt("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${dt("inputgroup.addon.border.color")};
    min-width: ${dt("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${dt("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${dt("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${dt("inputgroup.addon.border.radius")};
    border-end-start-radius: ${dt("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${dt("inputgroup.addon.border.radius")};
    border-end-end-radius: ${dt("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${dt("inputgroup.addon.border.radius")};
    border-end-start-radius: ${dt("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${dt("inputgroup.addon.border.radius")};
    border-end-end-radius: ${dt("inputgroup.addon.border.radius")};
}
`;
var classes3 = {
  root: ({
    props
  }) => ["p-inputgroup", {
    "p-inputgroup-fluid": props.fluid
  }]
};
var InputGroupStyle = class _InputGroupStyle extends BaseStyle {
  name = "inputgroup";
  theme = theme3;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupStyle_BaseFactory;
    return function InputGroupStyle_Factory(__ngFactoryType__) {
      return (\u0275InputGroupStyle_BaseFactory || (\u0275InputGroupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupStyle)))(__ngFactoryType__ || _InputGroupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputGroupStyle,
    factory: _InputGroupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var InputGroupClasses;
(function(InputGroupClasses2) {
  InputGroupClasses2["root"] = "p-inputgroup";
})(InputGroupClasses || (InputGroupClasses = {}));
var InputGroup = class _InputGroup extends BaseComponent {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(InputGroupStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroup_BaseFactory;
    return function InputGroup_Factory(__ngFactoryType__) {
      return (\u0275InputGroup_BaseFactory || (\u0275InputGroup_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroup)))(__ngFactoryType__ || _InputGroup);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroup,
    selectors: [["p-inputgroup"], ["p-inputGroup"], ["p-input-group"]],
    hostAttrs: [1, "p-inputgroup"],
    hostVars: 5,
    hostBindings: function InputGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "inputgroup");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.styleClass);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputGroupStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function InputGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroup, [{
    type: Component,
    args: [{
      selector: "p-inputgroup, p-inputGroup, p-input-group",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      providers: [InputGroupStyle],
      host: {
        class: "p-inputgroup",
        "[attr.data-pc-name]": '"inputgroup"',
        "[class]": "styleClass",
        "[style]": "style"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupModule = class _InputGroupModule {
  static \u0275fac = function InputGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupModule,
    imports: [InputGroup, SharedModule],
    exports: [InputGroup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputGroup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroup, SharedModule],
      exports: [InputGroup, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c04 = ["*"];
var classes4 = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = class _InputGroupAddonStyle extends BaseStyle {
  name = "inputgroupaddon";
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupAddonStyle_BaseFactory;
    return function InputGroupAddonStyle_Factory(__ngFactoryType__) {
      return (\u0275InputGroupAddonStyle_BaseFactory || (\u0275InputGroupAddonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupAddonStyle)))(__ngFactoryType__ || _InputGroupAddonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputGroupAddonStyle,
    factory: _InputGroupAddonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonStyle, [{
    type: Injectable
  }], null, null);
})();
var InputGroupAddon = class _InputGroupAddon extends BaseComponent {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(InputGroupAddonStyle);
  get hostStyle() {
    return this.style;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupAddon_BaseFactory;
    return function InputGroupAddon_Factory(__ngFactoryType__) {
      return (\u0275InputGroupAddon_BaseFactory || (\u0275InputGroupAddon_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupAddon)))(__ngFactoryType__ || _InputGroupAddon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroupAddon,
    selectors: [["p-inputgroup-addon"], ["p-inputGroupAddon"]],
    hostVars: 7,
    hostBindings: function InputGroupAddon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "inputgroupaddon");
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275classProp("p-inputgroupaddon", true);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputGroupAddonStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c04,
    decls: 1,
    vars: 0,
    template: function InputGroupAddon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputgroup-addon, p-inputGroupAddon",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      host: {
        "[class]": "styleClass",
        "[class.p-inputgroupaddon]": "true",
        "[attr.data-pc-name]": '"inputgroupaddon"'
      },
      providers: [InputGroupAddonStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var InputGroupAddonModule = class _InputGroupAddonModule {
  static \u0275fac = function InputGroupAddonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupAddonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupAddonModule,
    imports: [InputGroupAddon, SharedModule],
    exports: [InputGroupAddon, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputGroupAddon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroupAddon, SharedModule],
      exports: [InputGroupAddon, SharedModule]
    }]
  }], null, null);
})();

export {
  ToggleButton,
  ToggleButtonModule,
  SelectButton,
  SelectButtonModule,
  InputGroup,
  InputGroupModule,
  InputGroupAddon,
  InputGroupAddonModule,
  UserSettingsComponent
};
//# sourceMappingURL=chunk-UGBXRURZ.js.map
