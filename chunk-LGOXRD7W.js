import {
  Breadcrumb,
  BreadcrumbModule
} from "./chunk-DKYHE2XY.js";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule,
  Tag,
  TagModule,
  UserSettingsComponent
} from "./chunk-HATUI5F7.js";
import {
  Message,
  MessageModule,
  Textarea,
  TextareaModule
} from "./chunk-RHYBJDSX.js";
import "./chunk-NHG2MSCL.js";
import {
  Divider,
  DividerModule
} from "./chunk-IXASFEHB.js";
import {
  InputText,
  InputTextModule,
  UserSettingsService,
  zindexutils
} from "./chunk-XLBGG5YP.js";
import "./chunk-G3ZWOXEO.js";
import {
  AutoFocus,
  AutoFocusModule,
  Badge,
  BadgeModule,
  BaseComponent,
  BaseStyle,
  Button,
  ButtonModule,
  CommonModule,
  ConnectedOverlayScrollHandler,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgStyle,
  OverlayService,
  PrimeTemplate,
  RouterLink,
  SharedModule,
  TranslateModule,
  TranslatePipe,
  TranslationKeys,
  absolutePosition,
  appendChild,
  isPlatformBrowser,
  isTouchDevice,
  relativePosition
} from "./chunk-TK4DWPTH.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-JKR6TEEB.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZNSAYBRC.js";
import "./chunk-OMRWFPLA.js";
import "./chunk-BCDBKL6G.js";
import "./chunk-OPLY3WLG.js";
import "./chunk-Y73BU26W.js";
import "./chunk-6Z6PMBKY.js";
import {
  updatePreset
} from "./chunk-6EM4UOB6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var _c0 = ["container"];
var _c1 = ["input"];
var _c2 = ["colorSelector"];
var _c3 = ["colorHandle"];
var _c4 = ["hue"];
var _c5 = ["hueHandle"];
var _c6 = (a0, a1) => ({
  "p-colorpicker p-component": true,
  "p-colorpicker-overlay": a0,
  "p-colorpicker-dragging": a1
});
var _c7 = (a0) => ({
  "p-disabled": a0
});
var _c8 = (a0, a1) => ({
  "p-colorpicker-panel": true,
  "p-colorpicker-panel-inline": a0,
  "p-disabled": a1
});
var _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c10 = (a0) => ({
  value: "visible",
  params: a0
});
function ColorPicker_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9, 1);
    \u0275\u0275listener("click", function ColorPicker_input_2_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputClick());
    })("keydown", function ColorPicker_input_2_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputKeydown($event));
    })("focus", function ColorPicker_input_2_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputFocus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.inputBgColor);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c7, ctx_r1.disabled))("disabled", ctx_r1.disabled)("pAutoFocus", ctx_r1.autofocus);
    \u0275\u0275attribute("tabindex", ctx_r1.tabindex)("id", ctx_r1.inputId)("data-pc-section", "input")("aria-label", ctx_r1.ariaLabel);
  }
}
function ColorPicker_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ColorPicker_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function ColorPicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColorPicker_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12, 2);
    \u0275\u0275listener("touchstart", function ColorPicker_div_3_Template_div_touchstart_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorDragStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("mousedown", function ColorPicker_div_3_Template_div_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorMousedown($event));
    });
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275element(5, "div", 14, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15, 4);
    \u0275\u0275listener("mousedown", function ColorPicker_div_3_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueMousedown($event));
    })("touchstart", function ColorPicker_div_3_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueDragStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    });
    \u0275\u0275element(9, "div", 16, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c8, ctx_r1.inline, ctx_r1.disabled))("@overlayAnimation", \u0275\u0275pureFunction1(16, _c10, \u0275\u0275pureFunction2(13, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    \u0275\u0275attribute("data-pc-section", "panel");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "selector");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "color");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "colorHandle");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "hue");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "hueHandle");
  }
}
var theme = ({
  dt
}) => `
.p-colorpicker {
    display: inline-block;
    position: relative;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-preview {
    width: ${dt("colorpicker.preview.width")};
    height: ${dt("colorpicker.preview.height")};
    padding: 0;
    border: 0 none;
    border-radius: ${dt("colorpicker.preview.border.radius")};
    transition: background ${dt("colorpicker.transition.duration")}, color ${dt("colorpicker.transition.duration")}, border-color ${dt("colorpicker.transition.duration")}, outline-color ${dt("colorpicker.transition.duration")}, box-shadow ${dt("colorpicker.transition.duration")};
    outline-color: transparent;
    cursor: pointer;
}

.p-colorpicker-preview:enabled:focus-visible {
    border-color: ${dt("colorpicker.preview.focus.border.color")};
    box-shadow: ${dt("colorpicker.preview.focus.ring.shadow")};
    outline: ${dt("colorpicker.preview.focus.ring.width")} ${dt("colorpicker.preview.focus.ring.style")} ${dt("colorpicker.preview.focus.ring.color")};
    outline-offset: ${dt("colorpicker.preview.focus.ring.offset")};
}

.p-colorpicker-panel {
    background: ${dt("colorpicker.panel.background")};
    border: 1px solid ${dt("colorpicker.panel.border.color")};
    border-radius: ${dt("colorpicker.panel.border.radius")};
    box-shadow: ${dt("colorpicker.panel.shadow")};
    width: 193px;
    height: 166px;
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-panel:dir(rtl) {
    left: auto;
    right: 0;
}

.p-colorpicker-panel-inline {
    box-shadow: none;
    position: static;
}

.p-colorpicker-content {
    position: relative;
}

.p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-color-selector:dir(rtl) {
    left: auto;
    right: 8px;
}

.p-colorpicker-color-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
    border-color: ${dt("colorpicker.handle.color")};
}

.p-colorpicker-color-handle:dir(rtl) {
    left: auto;
    right: 150px;
    margin: -5px -5px 0 0;
}

.p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
    background: linear-gradient(0deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red);
}

.p-colorpicker-hue:dir(rtl) {
    left: auto;
    right: 167px;
}

.p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
    border-color: ${dt("colorpicker.handle.color")};
}

.p-colorpicker-hue-handle:dir(rtl) {
    left: auto;
    right: 0px;
    margin-left: 0;
    margin-right: -2px;
}
`;
var classes = {
  root: "p-colorpicker p-component",
  preview: ({
    props
  }) => ["p-colorpicker-preview", {
    "p-disabled": props.disabled
  }],
  panel: ({
    props
  }) => ["p-colorpicker-panel", {
    "p-colorpicker-panel-inline": props.inline,
    "p-disabled": props.disabled
  }],
  content: "p-colorpicker-content",
  colorSelector: "p-colorpicker-color-selector",
  colorBackground: "p-colorpicker-color-background",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
};
var ColorPickerStyle = class _ColorPickerStyle extends BaseStyle {
  name = "colorpicker";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ColorPickerStyle_BaseFactory;
    return function ColorPickerStyle_Factory(__ngFactoryType__) {
      return (\u0275ColorPickerStyle_BaseFactory || (\u0275ColorPickerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ColorPickerStyle)))(__ngFactoryType__ || _ColorPickerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerStyle,
    factory: _ColorPickerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerStyle, [{
    type: Injectable
  }], null, null);
})();
var ColorPickerClasses;
(function(ColorPickerClasses2) {
  ColorPickerClasses2["root"] = "p-colorpicker";
  ColorPickerClasses2["preview"] = "p-colorpicker-preview";
  ColorPickerClasses2["panel"] = "p-colorpicker-panel";
  ColorPickerClasses2["colorSelector"] = "p-colorpicker-color-selector";
  ColorPickerClasses2["colorBackground"] = "p-colorpicker-color-background";
  ColorPickerClasses2["colorHandle"] = "p-colorpicker-color-handle";
  ColorPickerClasses2["hue"] = "p-colorpicker-hue";
  ColorPickerClasses2["hueHandle"] = "p-colorpicker-hue-handle";
})(ColorPickerClasses || (ColorPickerClasses = {}));
var COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPicker),
  multi: true
};
var ColorPicker = class _ColorPicker extends BaseComponent {
  overlayService;
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
   * Whether to display as an overlay or not.
   * @group Props
   */
  inline;
  /**
   * Format to use in value binding.
   * @group Props
   */
  format = "hex";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   * @group Props
   */
  inputId;
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
   * Callback to invoke on value change.
   * @param {ColorPickerChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on panel is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  containerViewChild;
  inputViewChild;
  value = {
    h: 0,
    s: 100,
    b: 100
  };
  inputBgColor;
  shown;
  overlayVisible;
  defaultColor = "ff0000";
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  documentClickListener;
  documentResizeListener;
  documentMousemoveListener;
  documentMouseupListener;
  documentHueMoveListener;
  scrollHandler;
  selfClick;
  colorDragging;
  hueDragging;
  overlay;
  colorSelectorViewChild;
  colorHandleViewChild;
  hueViewChild;
  hueHandleViewChild;
  _componentStyle = inject(ColorPickerStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
  }
  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }
  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }
  set hue(element) {
    this.hueViewChild = element;
  }
  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }
  get ariaLabel() {
    return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
  }
  onHueMousedown(event) {
    if (this.disabled) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }
  onHueDragStart(event) {
    if (this.disabled) {
      return;
    }
    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }
  onColorDragStart(event) {
    if (this.disabled) {
      return;
    }
    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
  }
  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  onColorMousedown(event) {
    if (this.disabled) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }
  onDrag(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }
    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }
  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }
  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
    let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    let left = rect.left + this.document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  getValueToUpdate() {
    let val;
    switch (this.format) {
      case "hex":
        val = "#" + this.HSBtoHEX(this.value);
        break;
      case "rgb":
        val = this.HSBtoRGB(this.value);
        break;
      case "hsb":
        val = this.value;
        break;
    }
    return val;
  }
  updateModel() {
    this.onModelChange(this.getValueToUpdate());
    this.cd.markForCheck();
  }
  writeValue(value) {
    if (value) {
      switch (this.format) {
        case "hex":
          this.value = this.HEXtoHSB(value);
          break;
        case "rgb":
          this.value = this.RGBtoHSB(value);
          break;
        case "hsb":
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }
    this.updateColorSelector();
    this.updateUI();
    this.cd.markForCheck();
  }
  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
    }
  }
  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
    }
    this.inputBgColor = "#" + this.HSBtoHEX(this.value);
  }
  onInputFocus() {
    this.onModelTouched();
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.overlay = event.element;
          this.appendOverlay();
          if (this.autoZIndex) {
            zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          this.updateColorSelector();
          this.updateUI();
        }
        break;
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.onShow.emit({});
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        this.onHide.emit({});
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.overlay);
      else appendChild(this.appendTo, this.overlay);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) absolutePosition(this.overlay, this.inputViewChild?.nativeElement);
    else relativePosition(this.overlay, this.inputViewChild?.nativeElement);
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onInputClick() {
    this.selfClick = true;
    this.togglePanel();
  }
  togglePanel() {
    if (!this.overlayVisible) this.show();
    else this.hide();
  }
  onInputKeydown(event) {
    switch (event.code) {
      case "Space":
        this.togglePanel();
        event.preventDefault();
        break;
      case "Escape":
      case "Tab":
        this.hide();
        break;
      default:
        break;
    }
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
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
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", () => {
        if (!this.selfClick) {
          this.overlayVisible = false;
          this.unbindDocumentClickListener();
        }
        this.selfClick = false;
        this.cd.markForCheck();
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
        if (this.colorDragging) {
          this.pickColor(event);
        }
        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }
  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }
  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }
  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.overlayVisible && !isTouchDevice()) {
      this.hide();
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }
  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }
  validateHEX(hex) {
    var len = 6 - hex.length;
    if (len > 0) {
      var o = [];
      for (var i = 0; i < len; i++) {
        o.push("0");
      }
      o.push(hex);
      hex = o.join("");
    }
    return hex;
  }
  HEXtoRGB(hex) {
    let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 65280) >> 8,
      b: hexValue & 255
    };
  }
  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }
  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }
  HSBtoRGB(hsb) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;
    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360) h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }
  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = "0" + hex[key];
      }
    }
    return hex.join("");
  }
  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }
  onOverlayHide() {
    this.unbindScrollListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentClickListener();
    this.overlay = null;
  }
  ngAfterViewInit() {
    if (this.inline) {
      this.updateColorSelector();
      this.updateUI();
    }
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static \u0275fac = function ColorPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPicker)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPicker,
    selectors: [["p-colorPicker"], ["p-colorpicker"], ["p-color-picker"]],
    viewQuery: function ColorPicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorSelector = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hue = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueHandle = _t.first);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      inline: [2, "inline", "inline", booleanAttribute],
      format: "format",
      appendTo: "appendTo",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: "tabindex",
      inputId: "inputId",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 11,
    consts: [["container", ""], ["input", ""], ["colorSelector", ""], ["colorHandle", ""], ["hue", ""], ["hueHandle", ""], [3, "ngStyle", "ngClass"], ["type", "text", "class", "p-colorpicker-preview", "readonly", "readonly", 3, "ngClass", "disabled", "backgroundColor", "pAutoFocus", "click", "keydown", "focus", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["type", "text", "readonly", "readonly", 1, "p-colorpicker-preview", 3, "click", "keydown", "focus", "ngClass", "disabled", "pAutoFocus"], [3, "click", "ngClass"], [1, "p-colorpicker-content"], [1, "p-colorpicker-color-selector", 3, "touchstart", "touchmove", "touchend", "mousedown"], [1, "p-colorpicker-color-background"], [1, "p-colorpicker-color-handle"], [1, "p-colorpicker-hue", 3, "mousedown", "touchstart", "touchmove", "touchend"], [1, "p-colorpicker-hue-handle"]],
    template: function ColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6, 0);
        \u0275\u0275template(2, ColorPicker_input_2_Template, 2, 11, "input", 7)(3, ColorPicker_div_3_Template, 11, 18, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction2(8, _c6, !ctx.inline, ctx.colorDragging || ctx.hueDragging));
        \u0275\u0275attribute("data-pc-name", "colorpicker")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgStyle, AutoFocusModule, AutoFocus, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPicker, [{
    type: Component,
    args: [{
      selector: "p-colorPicker, p-colorpicker, p-color-picker",
      standalone: true,
      imports: [CommonModule, AutoFocusModule, SharedModule],
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-colorpicker p-component': true,
                'p-colorpicker-overlay': !inline,
                'p-colorpicker-dragging': colorDragging || hueDragging
            }"
            [attr.data-pc-name]="'colorpicker'"
            [attr.data-pc-section]="'root'"
        >
            <input
                *ngIf="!inline"
                #input
                type="text"
                class="p-colorpicker-preview"
                [ngClass]="{ 'p-disabled': disabled }"
                readonly="readonly"
                [attr.tabindex]="tabindex"
                [disabled]="disabled"
                (click)="onInputClick()"
                (keydown)="onInputKeydown($event)"
                (focus)="onInputFocus()"
                [attr.id]="inputId"
                [style.backgroundColor]="inputBgColor"
                [attr.data-pc-section]="'input'"
                [attr.aria-label]="ariaLabel"
                [pAutoFocus]="autofocus"
            />
            <div
                *ngIf="inline || overlayVisible"
                [ngClass]="{ 'p-colorpicker-panel': true, 'p-colorpicker-panel-inline': inline, 'p-disabled': disabled }"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{
                    value: 'visible',
                    params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                }"
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <div class="p-colorpicker-content" [attr.data-pc-section]="'content'">
                    <div #colorSelector class="p-colorpicker-color-selector" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [attr.data-pc-section]="'selector'">
                        <div class="p-colorpicker-color-background" [attr.data-pc-section]="'color'">
                            <div #colorHandle class="p-colorpicker-color-handle" [attr.data-pc-section]="'colorHandle'"></div>
                        </div>
                    </div>
                    <div #hue class="p-colorpicker-hue" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [attr.data-pc-section]="'hue'">
                        <div #hueHandle class="p-colorpicker-hue-handle" [attr.data-pc-section]="'hueHandle'"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: OverlayService
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
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
    onChange: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }],
    colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }],
    hue: [{
      type: ViewChild,
      args: ["hue"]
    }],
    hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule,
    imports: [ColorPicker, SharedModule],
    exports: [ColorPicker, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ColorPicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [ColorPicker, SharedModule],
      exports: [ColorPicker, SharedModule]
    }]
  }], null, null);
})();

// src/app/common/color-converter.util.ts
var ColorConverter = class {
  // Convert hex to RGB array
  static hexToRgb(hex) {
    hex = hex.replace("#", "");
    hex = hex.substring(0, 6);
    return [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16)
    ];
  }
  // Convert RGB to hex
  static rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((x) => {
      const hex = Math.max(0, Math.min(255, x)).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  }
  // Convert RGB string (e.g., "rgb(255, 0, 255)") to hex
  static rgbStringToHex(rgb) {
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return this.rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
    }
    return "#000000";
  }
  // Convert hex to HSL
  static hexToHsl(hex) {
    const rgb = this.hexToRgb(hex);
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  }
  // Convert HSL to hex
  static hslToHex(h, s, l) {
    s = s / 100;
    l = l / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
    return this.rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
  }
};

// src/app/common/contrast.util.ts
var ContrastUtil = class {
  /**
   * Calculate WCAG contrast ratio between two hex colors
   * @param foreground Foreground/text color (e.g., '#000000' or '#000000E6' with alpha)
   * @param background Background color (e.g., '#ffffff')
   * @returns Contrast ratio (1-21)
   */
  static getContrastRatio(foreground, background) {
    const compositedForeground = this.compositeColorOverBackground(foreground, background);
    const lum1 = this.getLuminance(compositedForeground);
    const lum2 = this.getLuminance(background);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    const ratio = (brightest + 0.05) / (darkest + 0.05);
    return ratio;
  }
  /**
  * Composite a foreground color (potentially with alpha) over a background color
  */
  static compositeColorOverBackground(foreground, background) {
    foreground = foreground.replace("#", "");
    background = background.replace("#", "");
    if (foreground.length === 6) {
      return "#" + foreground;
    }
    if (foreground.length === 8) {
      const fgR = parseInt(foreground.substring(0, 2), 16);
      const fgG = parseInt(foreground.substring(2, 4), 16);
      const fgB = parseInt(foreground.substring(4, 6), 16);
      const alpha = parseInt(foreground.substring(6, 8), 16) / 255;
      const bgR = parseInt(background.substring(0, 2), 16);
      const bgG = parseInt(background.substring(2, 4), 16);
      const bgB = parseInt(background.substring(4, 6), 16);
      const resultR = Math.round(fgR * alpha + bgR * (1 - alpha));
      const resultG = Math.round(fgG * alpha + bgG * (1 - alpha));
      const resultB = Math.round(fgB * alpha + bgB * (1 - alpha));
      return ColorConverter.rgbToHex(resultR, resultG, resultB);
    }
    return "#" + foreground;
  }
  /**
   * Get relative luminance of a color
   */
  static getLuminance(hexColor) {
    const rgb = this.hexToRgb(hexColor);
    const [r, g, b] = rgb.map((val) => {
      const sRGB = val / 255;
      return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  // Convert hex color to RGB array
  static hexToRgb(hex) {
    hex = hex.replace("#", "");
    return [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16)
    ];
  }
  /**
   * Check if contrast meets WCAG AA standard (4.5:1 for normal text)
   */
  static meetsWCAG_AA(color1, color2) {
    return this.getContrastRatio(color1, color2) >= 4.5;
  }
  /**
   * Check if contrast meets WCAG AAA standard (7:1 for normal text)
   */
  static meetsWCAG_AAA(color1, color2) {
    return this.getContrastRatio(color1, color2) >= 7;
  }
  /**
   * Get WCAG compliance level
   */
  static getComplianceLevel(color1, color2) {
    const ratio = this.getContrastRatio(color1, color2);
    if (ratio >= 7)
      return "AAA";
    if (ratio >= 4.5)
      return "AA";
    return "Fail";
  }
};

// src/app/views/standalone/components/dev-tools/color-generator/color-picker.component.ts
function ColorPickerComponent_p_inputgroup_addon_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputgroup-addon")(1, "p-button", 6);
    \u0275\u0275listener("onClick", function ColorPickerComponent_p_inputgroup_addon_6_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const test_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", test_r3.shade, " vs ", test_r3.textColorName, ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getContrastRatio(test_r3));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getContrastPasses(test_r3) ? "text-green-500" : "text-red-500");
    \u0275\u0275classProp("pi-check", ctx_r1.getContrastPasses(test_r3))("pi-times", !ctx_r1.getContrastPasses(test_r3));
  }
}
function ColorPickerComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, ColorPickerComponent_div_7_div_1_Template, 7, 9, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.contrastTests);
  }
}
var ColorPickerComponent = class _ColorPickerComponent {
  key = "";
  initialColor = "#000000";
  // Can be hex like '#00cccc' or CSS class like 'bg-green-500'
  externalShades;
  contrastTests;
  showReset = true;
  colorChanged = new EventEmitter();
  currentColor = "";
  defaultColor = "";
  generatedShades = {};
  ngOnInit() {
    this.loadColor();
  }
  ngOnChanges(changes) {
    if (changes["key"]) {
      this.loadColor();
    }
    if (changes["externalShades"] && this.externalShades) {
      this.generatedShades = this.externalShades;
      this.currentColor = this.externalShades[500] || this.currentColor;
    }
  }
  loadColor() {
    this.currentColor = this.parseInitialColor(this.initialColor);
    this.defaultColor = this.currentColor;
    this.loadShadesFromTheme();
  }
  loadShadesFromTheme() {
    const root = getComputedStyle(document.documentElement);
    const colorMatch = this.initialColor.match(/bg-(\w+)-\d+/);
    const colorName = colorMatch ? colorMatch[1] : "primary";
    const shades = {};
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((shade) => {
      const cssVar = `--p-${colorName}-${shade}`;
      const color = root.getPropertyValue(cssVar).trim();
      if (color && color.startsWith("#")) {
        shades[shade] = color;
      } else if (color && color.startsWith("rgb")) {
        shades[shade] = ColorConverter.rgbStringToHex(color);
      }
    });
    if (Object.keys(shades).length > 0) {
      this.generatedShades = shades;
    } else {
      this.generateShades();
    }
  }
  parseInitialColor(input) {
    if (input.startsWith("#")) {
      return input;
    }
    if (input.includes("-")) {
      const tempDiv = document.createElement("div");
      tempDiv.className = input;
      tempDiv.style.display = "none";
      document.body.appendChild(tempDiv);
      const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
      document.body.removeChild(tempDiv);
      if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
        return ColorConverter.rgbStringToHex(computedColor);
      }
    }
    return input;
  }
  onColorChange() {
    if (!this.currentColor.match(/^#?[0-9A-Fa-f]{6}$/)) {
      return;
    }
    const normalizedHex = this.currentColor.startsWith("#") ? this.currentColor : "#" + this.currentColor;
    this.currentColor = normalizedHex;
    this.generateShades();
    this.emitChange();
  }
  generateShades() {
    this.generatedShades = this.generateColorShades(this.currentColor);
  }
  generateColorShades(baseColor) {
    const hsl = ColorConverter.hexToHsl(baseColor);
    console.warn(hsl.l);
    const lightnessMap = {
      50: 95,
      100: 88,
      200: 81,
      300: 74,
      400: 67,
      500: hsl.l,
      600: hsl.l * 0.85,
      700: hsl.l * 0.7,
      800: hsl.l * 0.55,
      900: hsl.l * 0.45,
      950: hsl.l * 0.4
    };
    const shades = {};
    Object.entries(lightnessMap).forEach(([shade, lightness]) => {
      shades[Number(shade)] = ColorConverter.hslToHex(hsl.h, hsl.s, lightness);
    });
    return shades;
  }
  getContrastRatio(test) {
    const bgColor = this.generatedShades[test.shade] || this.currentColor;
    const ratio = ContrastUtil.getContrastRatio(test.textColor, bgColor);
    return ratio.toFixed(1);
  }
  getContrastPasses(test) {
    const bgColor = this.generatedShades[test.shade] || this.currentColor;
    const ratio = ContrastUtil.getContrastRatio(test.textColor, bgColor);
    return ratio >= test.requiredRatio;
  }
  reset() {
    this.currentColor = this.defaultColor;
    this.generateShades();
    this.emitChange();
  }
  emitChange() {
    this.colorChanged.emit({
      hex: this.currentColor,
      shades: this.generatedShades
    });
  }
  static \u0275fac = function ColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorPickerComponent, selectors: [["aida-color-picker"]], inputs: { key: "key", initialColor: "initialColor", externalShades: "externalShades", contrastTests: "contrastTests", showReset: "showReset" }, outputs: { colorChanged: "colorChanged" }, features: [\u0275\u0275NgOnChangesFeature], decls: 8, vars: 4, consts: [[1, "flex", "flex-column", "gap-2"], [1, "flex", "align-items-center", "gap-2", "mb-2"], ["appendTo", "body", 3, "ngModelChange", "onChange", "ngModel"], ["type", "text", "pInputText", "", "placeholder", "#000000", 3, "ngModelChange", "change", "ngModel"], [4, "ngIf"], ["class", "text-xs", 4, "ngIf"], ["label", "Reset", "size", "small", "text", "", "severity", "secondary", 1, "w-full", "h-full", 3, "onClick"], [1, "text-xs"], ["class", "flex align-items-center justify-content-between", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-center", "justify-content-between"], [1, "flex", "align-items-center", "gap-2"], [1, "font-semibold"], [1, "pi"]], template: function ColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p-inputgroup")(3, "p-inputgroup-addon")(4, "p-colorPicker", 2);
      \u0275\u0275twoWayListener("ngModelChange", function ColorPickerComponent_Template_p_colorPicker_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.currentColor, $event) || (ctx.currentColor = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ColorPickerComponent_Template_p_colorPicker_onChange_4_listener() {
        return ctx.onColorChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function ColorPickerComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.currentColor, $event) || (ctx.currentColor = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ColorPickerComponent_Template_input_change_5_listener() {
        return ctx.onColorChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, ColorPickerComponent_p_inputgroup_addon_6_Template, 2, 0, "p-inputgroup-addon", 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, ColorPickerComponent_div_7_Template, 2, 1, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentColor);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.currentColor);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReset);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.contrastTests && ctx.contrastTests.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ColorPickerModule, ColorPicker, InputTextModule, InputText, ButtonModule, Button, InputGroupModule, InputGroup, InputGroupAddonModule, InputGroupAddon], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "aida-color-picker",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ColorPickerModule,
        InputTextModule,
        ButtonModule,
        InputGroupModule,
        InputGroupAddonModule
      ],
      template: `
    <div class="flex flex-column gap-2">
      <!-- Color Picker -->
      <div class="flex align-items-center gap-2 mb-2">
        <p-inputgroup>
            <p-inputgroup-addon>
                <p-colorPicker [(ngModel)]="currentColor" (onChange)="onColorChange()" appendTo="body"/>
            </p-inputgroup-addon>
                <input type="text" pInputText [(ngModel)]="currentColor" (change)="onColorChange()" placeholder="#000000" />
           <p-inputgroup-addon *ngIf="showReset">
                <p-button label="Reset" size="small" text severity="secondary" class="w-full h-full" (onClick)="reset()" />
            </p-inputgroup-addon>
        </p-inputgroup>
      </div>
    </div>

      <!-- Contrast Tests -->
      <div class="text-xs" *ngIf="contrastTests && contrastTests.length > 0">
        <div *ngFor="let test of contrastTests" class="flex align-items-center justify-content-between">
          <span>{{ test.shade }} vs {{ test.textColorName }}:</span>
          <div class="flex align-items-center gap-2">
            <span class="font-semibold">{{ getContrastRatio(test) }}</span>
            <span 
              [class]="getContrastPasses(test) ? 'text-green-500' : 'text-red-500'"
              class="pi"
              [class.pi-check]="getContrastPasses(test)"
              [class.pi-times]="!getContrastPasses(test)">
            </span>
          </div>
        </div>
      </div>
  `
    }]
  }], null, { key: [{
    type: Input
  }], initialColor: [{
    type: Input
  }], externalShades: [{
    type: Input
  }], contrastTests: [{
    type: Input
  }], showReset: [{
    type: Input
  }], colorChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorPickerComponent, { className: "ColorPickerComponent", filePath: "src/app/views/standalone/components/dev-tools/color-generator/color-picker.component.ts", lineNumber: 61 });
})();

// src/app/views/standalone/components/dev-tools/color-generator/copy-preset.component.ts
var CopyPresetComponent = class _CopyPresetComponent {
  customShades = {};
  copied = signal(false);
  get generatedCode() {
    return this.generatePresetCode();
  }
  generatePresetCode() {
    const shades = this.customShades;
    const formatShade = (shade, hex, colorKey, colorName) => {
      let comment = "";
      if (shade === 400) {
        const ratio = ContrastUtil.getContrastRatio("#000000", hex);
        const pass = ContrastUtil.meetsWCAG_AA("#000000", hex) ? "" : "(fail)";
        comment = ` // ${ratio.toFixed(1)} vs. black ${pass}`;
      } else if (shade === 500) {
        const ratio = ContrastUtil.getContrastRatio("#ffffff", hex);
        const pass = ContrastUtil.meetsWCAG_AA("#ffffff", hex) ? "" : "(fail)";
        comment = ` // ${ratio.toFixed(1)} vs. white ${pass}`;
      }
      return `            ${shade}: '${hex}',${comment}`;
    };
    const primaryShades = shades["primary"] || this.getDefaultShades("primary");
    const primaryLines = Object.entries(primaryShades).map(([shade, hex]) => formatShade(Number(shade), hex, "primary", "primary")).join("\n");
    const primitiveColors = [
      { key: "green", name: "success" },
      { key: "red", name: "danger" },
      { key: "orange", name: "warn buttons" },
      { key: "yellow", name: "warn messages" },
      { key: "sky", name: "info buttons" },
      { key: "blue", name: "info messages" },
      { key: "purple", name: "help" }
    ];
    const primitiveSections = primitiveColors.map(({ key, name }) => {
      const colorShades = shades[key] || this.getDefaultShades(key);
      const lines = Object.entries(colorShades).map(([shade, hex]) => formatShade(Number(shade), hex, key, name)).join("\n");
      return `        ${key}: { // ${name}
${lines}
        }`;
    }).join(",\n");
    const darkPrimaryShades = this.reversePrimaryShades(primaryShades);
    const darkPrimaryLines = Object.entries(darkPrimaryShades).map(([shade, hex]) => `            ${shade}: '${hex}',`).join("\n");
    return `import { definePreset } from '@primeng/themes';
import Material from '@primeng/themes/material';

const CustomPreset = definePreset(Material, {
    semantic: {
        primary: {
            // primary
${primaryLines}
        },
    },
    primitive: {
${primitiveSections}
    },
    dark: {
        primary: {
${darkPrimaryLines}
        },
    }
});

export default CustomPreset;`;
  }
  getDefaultShades(key) {
    const root = getComputedStyle(document.documentElement);
    const shades = {};
    const cssVarPrefix = key === "primary" ? "primary" : key;
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((shade) => {
      const cssVar = `--p-${cssVarPrefix}-${shade}`;
      const color = root.getPropertyValue(cssVar).trim();
      if (color) {
        if (color.startsWith("#")) {
          shades[shade] = color;
        } else if (color.startsWith("rgb")) {
          shades[shade] = this.rgbStringToHex(color);
        } else {
          shades[shade] = color;
        }
      }
    });
    if (Object.keys(shades).length > 0) {
      return shades;
    }
    return {
      50: "#e5e7eb",
      100: "#d1d5db",
      200: "#9ca3af",
      300: "#6b7280",
      400: "#4b5563",
      500: "#374151",
      600: "#1f2937",
      700: "#111827",
      800: "#030712",
      900: "#000000",
      950: "#000000"
    };
  }
  rgbStringToHex(rgb) {
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      return ColorConverter.rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
    }
    return "#000000";
  }
  reversePrimaryShades(lightShades) {
    return {
      50: lightShades[950],
      100: lightShades[900],
      200: lightShades[800],
      300: lightShades[700],
      400: lightShades[600],
      500: lightShades[500],
      600: lightShades[400],
      700: lightShades[300],
      800: lightShades[200],
      900: lightShades[100],
      950: lightShades[50]
    };
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedCode).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 3e3);
    });
  }
  static \u0275fac = function CopyPresetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CopyPresetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CopyPresetComponent, selectors: [["aida-copy-preset"]], inputs: { customShades: "customShades" }, decls: 9, vars: 3, consts: [[1, "surface-card", "border-round", "p-4"], [1, "flex", "align-items-center", "justify-content-between", "mb-3"], [1, "m-0"], ["label", "Copy to clipboard", "icon", "pi pi-copy", "size", "small", 3, "onClick", "severity"], [1, "text-sm", "text-color-secondary", "mb-3"], ["pInputTextarea", "", "readonly", "", "rows", "30", 1, "w-full", "font-mono", "text-sm", 2, "resize", "vertical", 3, "value"]], template: function CopyPresetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Custom preset code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-button", 3);
      \u0275\u0275listener("onClick", function CopyPresetComponent_Template_p_button_onClick_4_listener() {
        return ctx.copyToClipboard();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "textarea", 5);
      \u0275\u0275text(8, "      ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("severity", ctx.copied() ? "success" : "primary");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.copied() ? "Copied! Send this to the AIDA development team." : "Copy this code to share your custom color scheme.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.generatedCode);
    }
  }, dependencies: [
    CommonModule,
    ButtonModule,
    Button,
    TextareaModule,
    Textarea
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CopyPresetComponent, [{
    type: Component,
    args: [{
      selector: "aida-copy-preset",
      standalone: true,
      imports: [
        CommonModule,
        ButtonModule,
        TextareaModule
      ],
      template: `
    <div class="surface-card border-round p-4">
      <div class="flex align-items-center justify-content-between mb-3">
        <h3 class="m-0">Custom preset code</h3>
        <p-button 
          label="Copy to clipboard" 
          icon="pi pi-copy"
          (onClick)="copyToClipboard()"
          [severity]="copied() ? 'success' : 'primary'"
          size="small" />
      </div>
      
      <p class="text-sm text-color-secondary mb-3">
        {{ copied() ? 'Copied! Send this to the AIDA development team.' : 'Copy this code to share your custom color scheme.' }}
      </p>

      <textarea 
        pInputTextarea
        [value]="generatedCode"
        readonly
        rows="30"
        class="w-full font-mono text-sm"
        style="resize: vertical;">
      </textarea>
    </div>
  `
    }]
  }], null, { customShades: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CopyPresetComponent, { className: "CopyPresetComponent", filePath: "src/app/views/standalone/components/dev-tools/color-generator/copy-preset.component.ts", lineNumber: 43 });
})();

// src/app/views/standalone/components/dev-tools/color-generator/color-generator.component.ts
var _c02 = () => ({ shade: 400, textColor: "#000000E6", textColorName: "Black", requiredRatio: 4.5 });
var _c12 = () => ({ shade: 500, textColor: "#ffffff", textColorName: "White", requiredRatio: 4.5 });
var _c22 = (a0, a1) => [a0, a1];
function ColorGeneratorComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 194);
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
function ColorGeneratorComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 195);
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
function ColorGeneratorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ColorGeneratorComponent_ng_template_1_Conditional_0_Template, 3, 4, "a", 194)(1, ColorGeneratorComponent_ng_template_1_Conditional_1_Template, 3, 3, "span", 195);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(item_r1.route ? 0 : 1);
  }
}
var ColorGeneratorComponent = class _ColorGeneratorComponent {
  settingsService = inject(UserSettingsService);
  customShades = {};
  breadcrumbs = [{ label: "dev._title", route: "/dev" }, { label: "dev.colors._title" }];
  onColorChange(event, color) {
    this.customShades[color] = event.shades;
    this.updateTheme();
  }
  onInfoColorChange(event) {
    this.customShades["sky"] = event.shades;
    this.customShades["blue"] = event.shades;
    this.updateTheme();
  }
  onWarnColorChange(event) {
    this.customShades["orange"] = event.shades;
    this.customShades["yellow"] = event.shades;
    this.updateTheme();
  }
  updateTheme() {
    const scheme = this.settingsService.colorScheme();
    let presetPromise;
    switch (scheme) {
      case "deutan":
        presetPromise = import("./chunk-77MSJOIV.js");
        break;
      case "protan":
        presetPromise = import("./chunk-HN2B6U3G.js");
        break;
      case "tritan":
        presetPromise = import("./chunk-JSP2AVZS.js");
        break;
      case "custom":
        presetPromise = import("./chunk-WZZ7QHTJ.js");
        break;
      default:
        presetPromise = import("./chunk-DW5DTS3C.js");
    }
    presetPromise.then((module) => {
      const basePreset = module.default;
      const customPreset = __spreadProps(__spreadValues({}, basePreset), {
        primitive: __spreadValues(__spreadValues({}, basePreset.primitive), this.customShades),
        semantic: __spreadValues(__spreadValues({}, basePreset.semantic), this.customShades["primary"] ? { primary: this.customShades["primary"] } : {})
      });
      updatePreset(customPreset);
    });
  }
  static \u0275fac = function ColorGeneratorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorGeneratorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorGeneratorComponent, selectors: [["aida-color-generator"]], decls: 405, vars: 111, consts: [[3, "model"], ["pTemplate", "item"], ["id", "wb-cont"], ["mode", "theme"], [1, "mb-6"], [1, "mb-3"], [1, "mb-3", "text-sm", "text-color-secondary"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "surface-50", "border-round", "p-4", "max-h-full"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-green-600"], [1, "grid", "h-full"], [1, "col-6"], [1, "flex", "flex-column", "justify-content-between", "text-center", "h-full", "gap-2"], [1, "flex", "flex-column", "gap-2"], [1, "text-sm", "font-semibold", "mb-0"], [1, "flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-2"], ["label", "Primary button", "severity", "primary", "size", "small"], ["label", "Primary button", "severity", "primary", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Primary tag", "severity", "primary"], ["value", "1"], [1, "flex", "flex-row", "gap-2"], [1, "w-full", "h-3rem", "bg-primary-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-primary-500", "border-round", "align-content-center", "text-white"], ["initialColor", "bg-primary-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], ["label", "Success button", "severity", "success", "size", "small"], ["label", "Success button", "severity", "success", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Success tag", "severity", "success"], ["value", "2", "severity", "success"], [1, "w-full", "h-3rem", "bg-green-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-green-500", "border-round", "align-content-center", "text-white"], ["severity", "success", "text", "Success: message"], ["initialColor", "bg-green-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-red-600"], ["label", "Danger button", "severity", "danger", "size", "small"], ["label", "Danger button", "severity", "danger", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Danger tag", "severity", "danger"], ["value", "3", "severity", "danger"], [1, "w-full", "h-3rem", "bg-red-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-red-500", "border-round", "align-content-center", "text-white"], ["severity", "error", "text", "Error: message"], ["initialColor", "bg-red-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], ["label", "Warning button", "severity", "warn", "size", "small"], ["label", "Warning button", "severity", "warn", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Warning tag", "severity", "warn"], ["value", "4", "severity", "warn"], [1, "w-full", "h-3rem", "bg-orange-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-orange-500", "border-round", "align-content-center", "text-white"], ["severity", "warn", "text", "Warning: message"], ["initialColor", "bg-orange-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-blue-600"], ["label", "Info button", "severity", "info", "size", "small"], ["label", "Info button", "severity", "info", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Info tag", "severity", "info"], ["value", "5", "severity", "info"], [1, "w-full", "h-3rem", "bg-blue-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-blue-500", "border-round", "align-content-center", "text-white"], ["severity", "info", "text", "Info: message"], ["initialColor", "bg-blue-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], ["label", "Help button", "severity", "help", "size", "small"], ["label", "Help button", "severity", "help", "size", "small", "outlined", "", "styleClass", "secondary-outline"], [1, "w-full", "h-3rem", "bg-purple-400", "border-round", "align-content-center", "text-black-alpha-90"], [1, "w-full", "h-3rem", "bg-purple-500", "border-round", "align-content-center", "text-white"], ["initialColor", "bg-purple-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], [1, "surface-50", "border-round", "p-4", "h-full"], [1, "mt-0", "mb-3", "text-center", "text-lg", "font-bold", "text-color-secondary"], ["label", "Secondary button", "severity", "secondary", "size", "small"], ["label", "Secondary button", "severity", "secondary", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Secondary tag", "severity", "secondary"], ["value", "7", "severity", "secondary"], [1, "w-full", "h-3rem", "surface-100", "border-round", "align-content-center"], ["severity", "secondary", "text", "Secondary: message"], [1, "text-xs", "text-color-secondary"], ["label", "Contrast button", "severity", "contrast", "size", "small"], ["label", "Contrast button", "severity", "contrast", "size", "small", "outlined", "", "styleClass", "secondary-outline"], ["value", "Contrast tag", "severity", "contrast"], ["value", "8", "severity", "contrast"], [1, "w-full", "h-3rem", "surface-900", "border-round", "align-content-center"], ["severity", "contrast", "text", "Contrast: message"], [1, "flex", "flex-wrap", "gap-2", "mb-4"], ["label", "Primary", "severity", "primary"], ["label", "Success", "severity", "success"], ["label", "Danger", "severity", "danger"], ["label", "Warning", "severity", "warn"], ["label", "Info", "severity", "info"], ["label", "Help", "severity", "help"], ["label", "Secondary", "severity", "secondary"], ["label", "Contrast", "severity", "contrast"], ["label", "Primary", "severity", "primary", "outlined", ""], ["label", "Success", "severity", "success", "outlined", ""], ["label", "Danger", "severity", "danger", "outlined", ""], ["label", "Warning", "severity", "warn", "outlined", ""], ["label", "Info", "severity", "info", "outlined", ""], ["label", "Help", "severity", "help", "outlined", ""], ["label", "Secondary", "severity", "secondary", "outlined", ""], ["label", "Contrast", "severity", "contrast", "outlined", ""], ["value", "Primary", "severity", "primary"], ["value", "Success", "severity", "success"], ["value", "Danger", "severity", "danger"], ["value", "Warning", "severity", "warn"], ["value", "Info", "severity", "info"], ["value", "Secondary", "severity", "secondary"], ["value", "Contrast", "severity", "contrast"], [1, "flex", "gap-1", "mb-2"], [1, "flex-1", "h-4rem", "bg-primary-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-green-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-red-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-orange-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-blue-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "bg-purple-500", "border-round", "flex", "align-items-center", "justify-content-center", "text-white", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "surface-100", "border-round", "flex", "align-items-center", "justify-content-center", "text-color", "text-xs", "font-semibold"], [1, "flex-1", "h-4rem", "surface-900", "border-round", "flex", "align-items-center", "justify-content-center", "text-xs", "font-semibold"], [1, "flex", "flex-column", "gap-1", "mb-2"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-green-600"], [1, "flex", "flex-column", "gap-2", "mb-4"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-red-600"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-blue-600"], [1, "mb-2", "text-sm", "font-semibold", "uppercase", "text-color-secondary"], [1, "flex", "flex-row", "gap-2", "mt-2"], [1, "flex", "flex-column"], ["initialColor", " bg-primary-500", 3, "colorChanged", "key", "externalShades", "contrastTests"], [1, "text-sm"], [1, "flex", "gap-1", "mb-3"], [1, "flex-1", "h-3rem", "bg-primary-50", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-100", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-200", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-300", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-400", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-500", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-600", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-700", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-800", "border-round"], [1, "flex-1", "h-3rem", "bg-primary-900", "border-round"], [1, "flex-1", "h-3rem", "bg-green-50", "border-round"], [1, "flex-1", "h-3rem", "bg-green-100", "border-round"], [1, "flex-1", "h-3rem", "bg-green-200", "border-round"], [1, "flex-1", "h-3rem", "bg-green-300", "border-round"], [1, "flex-1", "h-3rem", "bg-green-400", "border-round"], [1, "flex-1", "h-3rem", "bg-green-500", "border-round"], [1, "flex-1", "h-3rem", "bg-green-600", "border-round"], [1, "flex-1", "h-3rem", "bg-green-700", "border-round"], [1, "flex-1", "h-3rem", "bg-green-800", "border-round"], [1, "flex-1", "h-3rem", "bg-green-900", "border-round"], [1, "flex-1", "h-3rem", "bg-red-50", "border-round"], [1, "flex-1", "h-3rem", "bg-red-100", "border-round"], [1, "flex-1", "h-3rem", "bg-red-200", "border-round"], [1, "flex-1", "h-3rem", "bg-red-300", "border-round"], [1, "flex-1", "h-3rem", "bg-red-400", "border-round"], [1, "flex-1", "h-3rem", "bg-red-500", "border-round"], [1, "flex-1", "h-3rem", "bg-red-600", "border-round"], [1, "flex-1", "h-3rem", "bg-red-700", "border-round"], [1, "flex-1", "h-3rem", "bg-red-800", "border-round"], [1, "flex-1", "h-3rem", "bg-red-900", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-50", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-100", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-200", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-300", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-400", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-500", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-600", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-700", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-800", "border-round"], [1, "flex-1", "h-3rem", "bg-orange-900", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-50", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-100", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-200", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-300", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-400", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-500", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-600", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-700", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-800", "border-round"], [1, "flex-1", "h-3rem", "bg-blue-900", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-50", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-100", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-200", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-300", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-400", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-500", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-600", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-700", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-800", "border-round"], [1, "flex-1", "h-3rem", "bg-purple-900", "border-round"], [1, "flex-1", "h-3rem", "surface-50", "border-round"], [1, "flex-1", "h-3rem", "surface-100", "border-round"], [1, "flex-1", "h-3rem", "surface-200", "border-round"], [1, "flex-1", "h-3rem", "surface-300", "border-round"], [1, "flex-1", "h-3rem", "surface-400", "border-round"], [1, "flex-1", "h-3rem", "surface-500", "border-round"], [1, "flex-1", "h-3rem", "surface-600", "border-round"], [1, "flex-1", "h-3rem", "surface-700", "border-round"], [1, "flex-1", "h-3rem", "surface-800", "border-round"], [1, "flex-1", "h-3rem", "surface-900", "border-round"], [3, "customShades"], [1, "p-menuitem-link", 3, "routerLink"], [1, "p-menuitem-text"]], template: function ColorGeneratorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-breadcrumb", 0);
      \u0275\u0275template(1, ColorGeneratorComponent_ng_template_1_Template, 2, 1, "ng-template", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "aida-user-settings", 3);
      \u0275\u0275elementStart(10, "div", 4)(11, "h2", 5);
      \u0275\u0275text(12, "Semantic colour grouping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 6);
      \u0275\u0275text(14, " Colours should be clearly distinguishable between quadrants. Contrast ratio must be above 4.5 for normal text and above 3:1 for large text (24px or 18.5px bold) to meet AA WCAG requirements. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "h3", 10);
      \u0275\u0275text(19, "POSITIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "p", 15);
      \u0275\u0275text(25, "PRIMARY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16);
      \u0275\u0275element(27, "p-button", 17)(28, "p-button", 18)(29, "p-tag", 19)(30, "p-badge", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21)(32, "div", 22);
      \u0275\u0275text(33, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 23);
      \u0275\u0275text(35, "White text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "aida-color-picker", 24);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_36_listener($event) {
        return ctx.onColorChange($event, "primary");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "p", 15);
      \u0275\u0275text(41, "SUCCESS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 16);
      \u0275\u0275element(43, "p-button", 25)(44, "p-button", 26)(45, "p-tag", 27)(46, "p-badge", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 21)(48, "div", 29);
      \u0275\u0275text(49, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 30);
      \u0275\u0275text(51, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "p-message", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "aida-color-picker", 32);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_53_listener($event) {
        return ctx.onColorChange($event, "green");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 8)(55, "div", 9)(56, "h3", 33);
      \u0275\u0275text(57, "NEGATIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 11)(59, "div", 12)(60, "div", 13)(61, "div", 14)(62, "p", 15);
      \u0275\u0275text(63, "DANGER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 16);
      \u0275\u0275element(65, "p-button", 34)(66, "p-button", 35)(67, "p-tag", 36)(68, "p-badge", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 21)(70, "div", 38);
      \u0275\u0275text(71, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 39);
      \u0275\u0275text(73, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "p-message", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "aida-color-picker", 41);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_75_listener($event) {
        return ctx.onColorChange($event, "red");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 12)(77, "div", 13)(78, "div", 14)(79, "p", 15);
      \u0275\u0275text(80, "WARNING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 16);
      \u0275\u0275element(82, "p-button", 42)(83, "p-button", 43)(84, "p-tag", 44)(85, "p-badge", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 21)(87, "div", 46);
      \u0275\u0275text(88, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 47);
      \u0275\u0275text(90, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(91, "p-message", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "aida-color-picker", 49);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_92_listener($event) {
        return ctx.onWarnColorChange($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(93, "div", 8)(94, "div", 9)(95, "h3", 50);
      \u0275\u0275text(96, "INFORMATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 11)(98, "div", 12)(99, "div", 13)(100, "div", 14)(101, "p", 15);
      \u0275\u0275text(102, "INFO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 16);
      \u0275\u0275element(104, "p-button", 51)(105, "p-button", 52)(106, "p-tag", 53)(107, "p-badge", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 21)(109, "div", 55);
      \u0275\u0275text(110, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 56);
      \u0275\u0275text(112, "White text");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(113, "p-message", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "aida-color-picker", 58);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_114_listener($event) {
        return ctx.onInfoColorChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "div", 12)(116, "div", 13)(117, "div", 14)(118, "p", 15);
      \u0275\u0275text(119, "HELP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 16);
      \u0275\u0275element(121, "p-button", 59)(122, "p-button", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 21)(124, "div", 61);
      \u0275\u0275text(125, "Black text");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 62);
      \u0275\u0275text(127, "White text");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "aida-color-picker", 63);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_128_listener($event) {
        return ctx.onColorChange($event, "purple");
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(129, "div", 8)(130, "div", 64)(131, "h3", 65);
      \u0275\u0275text(132, "NEUTRAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 11)(134, "div", 12)(135, "div", 13)(136, "div", 14)(137, "p", 15);
      \u0275\u0275text(138, "SECONDARY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 16);
      \u0275\u0275element(140, "p-button", 66)(141, "p-button", 67)(142, "p-tag", 68)(143, "p-badge", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 70);
      \u0275\u0275text(145, "Secondary background");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "p-message", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 72);
      \u0275\u0275text(148, "No customization available");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(149, "div", 12)(150, "div", 13)(151, "div", 14)(152, "p", 15);
      \u0275\u0275text(153, "CONTRAST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 16);
      \u0275\u0275element(155, "p-button", 73)(156, "p-button", 74)(157, "p-tag", 75)(158, "p-badge", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 77);
      \u0275\u0275text(160, "Contrast background");
      \u0275\u0275elementEnd();
      \u0275\u0275element(161, "p-message", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 72);
      \u0275\u0275text(163, "No customization available");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(164, "p-divider");
      \u0275\u0275elementStart(165, "div", 4)(166, "h2", 5);
      \u0275\u0275text(167, "All components side-by-side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 79)(169, "p");
      \u0275\u0275text(170, "Regular Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(171, "p-button", 80)(172, "p-button", 81)(173, "p-button", 82)(174, "p-button", 83)(175, "p-button", 84)(176, "p-button", 85)(177, "p-button", 86)(178, "p-button", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 79)(180, "p");
      \u0275\u0275text(181, "Outlined Buttons");
      \u0275\u0275elementEnd();
      \u0275\u0275element(182, "p-button", 88)(183, "p-button", 89)(184, "p-button", 90)(185, "p-button", 91)(186, "p-button", 92)(187, "p-button", 93)(188, "p-button", 94)(189, "p-button", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 79)(191, "span");
      \u0275\u0275text(192, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(193, "p-tag", 96)(194, "p-tag", 97)(195, "p-tag", 98)(196, "p-tag", 99)(197, "p-tag", 100)(198, "p-tag", 101)(199, "p-tag", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 79)(201, "span");
      \u0275\u0275text(202, "Badges");
      \u0275\u0275elementEnd();
      \u0275\u0275element(203, "p-badge", 20)(204, "p-badge", 28)(205, "p-badge", 37)(206, "p-badge", 45)(207, "p-badge", 54)(208, "p-badge", 69)(209, "p-badge", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 103)(211, "p");
      \u0275\u0275text(212, "Backgrounds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 104);
      \u0275\u0275text(214, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 105);
      \u0275\u0275text(216, "Success");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 106);
      \u0275\u0275text(218, "Danger");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 107);
      \u0275\u0275text(220, "Warning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 108);
      \u0275\u0275text(222, "Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 109);
      \u0275\u0275text(224, "Help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 110);
      \u0275\u0275text(226, "Secondary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 111);
      \u0275\u0275text(228, "Contrast");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "div", 112)(230, "p");
      \u0275\u0275text(231, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275element(232, "p-message", 57)(233, "p-message", 31)(234, "p-message", 40)(235, "p-message", 48)(236, "p-message", 71)(237, "p-message", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(238, "p-divider");
      \u0275\u0275elementStart(239, "div", 4)(240, "h2", 5);
      \u0275\u0275text(241, "Messages by semantic meaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "p", 6);
      \u0275\u0275text(243, " Colours should be clearly distinguishable between quadrants. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 7)(245, "div", 8)(246, "h4", 113);
      \u0275\u0275text(247, "Positive Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 114);
      \u0275\u0275element(249, "p-message", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 8)(251, "h4", 115);
      \u0275\u0275text(252, "Negative Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 114);
      \u0275\u0275element(254, "p-message", 40)(255, "p-message", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "div", 8)(257, "h4", 116);
      \u0275\u0275text(258, "Information Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 114);
      \u0275\u0275element(260, "p-message", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 8)(262, "h4", 117);
      \u0275\u0275text(263, "Neutral Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 114);
      \u0275\u0275element(265, "p-message", 71)(266, "p-message", 78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(267, "p-divider");
      \u0275\u0275elementStart(268, "div", 4)(269, "h2", 5);
      \u0275\u0275text(270, "Full colour palettes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(271, "aida-user-settings", 3);
      \u0275\u0275elementStart(272, "div", 118)(273, "div", 119);
      \u0275\u0275text(274, "Primary ");
      \u0275\u0275elementStart(275, "aida-color-picker", 120);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_275_listener($event) {
        return ctx.onColorChange($event, "primary");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 119);
      \u0275\u0275text(277, "Green (success) ");
      \u0275\u0275elementStart(278, "aida-color-picker", 32);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_278_listener($event) {
        return ctx.onColorChange($event, "green");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 119);
      \u0275\u0275text(280, "Red (danger) ");
      \u0275\u0275elementStart(281, "aida-color-picker", 41);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_281_listener($event) {
        return ctx.onColorChange($event, "red");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "div", 119);
      \u0275\u0275text(283, "Orange (warn) ");
      \u0275\u0275elementStart(284, "aida-color-picker", 49);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_284_listener($event) {
        return ctx.onWarnColorChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 119);
      \u0275\u0275text(286, "Blue (info) ");
      \u0275\u0275elementStart(287, "aida-color-picker", 58);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_287_listener($event) {
        return ctx.onInfoColorChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 119);
      \u0275\u0275text(289, "Purple (help) ");
      \u0275\u0275elementStart(290, "aida-color-picker", 63);
      \u0275\u0275listener("colorChanged", function ColorGeneratorComponent_Template_aida_color_picker_colorChanged_290_listener($event) {
        return ctx.onColorChange($event, "purple");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(291, "div", 7)(292, "div", 8)(293, "h4", 121);
      \u0275\u0275text(294, "Primary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "div", 122);
      \u0275\u0275element(296, "div", 123)(297, "div", 124)(298, "div", 125)(299, "div", 126)(300, "div", 127)(301, "div", 128)(302, "div", 129)(303, "div", 130)(304, "div", 131)(305, "div", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 8)(307, "h4", 121);
      \u0275\u0275text(308, "Green (success)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 122);
      \u0275\u0275element(310, "div", 133)(311, "div", 134)(312, "div", 135)(313, "div", 136)(314, "div", 137)(315, "div", 138)(316, "div", 139)(317, "div", 140)(318, "div", 141)(319, "div", 142);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "div", 8)(321, "h4", 121);
      \u0275\u0275text(322, "Red (danger)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 122);
      \u0275\u0275element(324, "div", 143)(325, "div", 144)(326, "div", 145)(327, "div", 146)(328, "div", 147)(329, "div", 148)(330, "div", 149)(331, "div", 150)(332, "div", 151)(333, "div", 152);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 8)(335, "h4", 121);
      \u0275\u0275text(336, "Orange (warn)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div", 122);
      \u0275\u0275element(338, "div", 153)(339, "div", 154)(340, "div", 155)(341, "div", 156)(342, "div", 157)(343, "div", 158)(344, "div", 159)(345, "div", 160)(346, "div", 161)(347, "div", 162);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div", 8)(349, "h4", 121);
      \u0275\u0275text(350, "Blue (info)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "div", 122);
      \u0275\u0275element(352, "div", 163)(353, "div", 164)(354, "div", 165)(355, "div", 166)(356, "div", 167)(357, "div", 168)(358, "div", 169)(359, "div", 170)(360, "div", 171)(361, "div", 172);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "div", 8)(363, "h4", 121);
      \u0275\u0275text(364, "Purple (help)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "div", 122);
      \u0275\u0275element(366, "div", 173)(367, "div", 174)(368, "div", 175)(369, "div", 176)(370, "div", 177)(371, "div", 178)(372, "div", 179)(373, "div", 180)(374, "div", 181)(375, "div", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "div", 8)(377, "h4", 121);
      \u0275\u0275text(378, "Surface (secondary)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "div", 122);
      \u0275\u0275element(380, "div", 183)(381, "div", 184)(382, "div", 185)(383, "div", 186)(384, "div", 187)(385, "div", 188)(386, "div", 189)(387, "div", 190)(388, "div", 191)(389, "div", 192);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "div", 8)(391, "h4", 121);
      \u0275\u0275text(392, "Surface (contrast)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "div", 122);
      \u0275\u0275element(394, "div", 192)(395, "div", 191)(396, "div", 190)(397, "div", 189)(398, "div", 188)(399, "div", 187)(400, "div", 186)(401, "div", 185)(402, "div", 184)(403, "div", 183);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(404, "aida-copy-preset", 193);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("model", ctx.breadcrumbs);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 45, "dev.colors._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 47, "dev.colors.description"), "", \u0275\u0275pipeBind1(8, 49, "dev.colors.description2"), "");
      \u0275\u0275advance(30);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-primary")("externalShades", ctx.customShades["primary"])("contrastTests", \u0275\u0275pureFunction2(53, _c22, \u0275\u0275pureFunction0(51, _c02), \u0275\u0275pureFunction0(52, _c12)));
      \u0275\u0275advance(17);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-success")("externalShades", ctx.customShades["green"])("contrastTests", \u0275\u0275pureFunction2(58, _c22, \u0275\u0275pureFunction0(56, _c02), \u0275\u0275pureFunction0(57, _c12)));
      \u0275\u0275advance(22);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-danger")("externalShades", ctx.customShades["red"])("contrastTests", \u0275\u0275pureFunction2(63, _c22, \u0275\u0275pureFunction0(61, _c02), \u0275\u0275pureFunction0(62, _c12)));
      \u0275\u0275advance(17);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-warn")("externalShades", ctx.customShades["orange"])("contrastTests", \u0275\u0275pureFunction2(68, _c22, \u0275\u0275pureFunction0(66, _c02), \u0275\u0275pureFunction0(67, _c12)));
      \u0275\u0275advance(22);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-info")("externalShades", ctx.customShades["blue"])("contrastTests", \u0275\u0275pureFunction2(73, _c22, \u0275\u0275pureFunction0(71, _c02), \u0275\u0275pureFunction0(72, _c12)));
      \u0275\u0275advance(14);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-help")("externalShades", ctx.customShades["purple"])("contrastTests", \u0275\u0275pureFunction2(78, _c22, \u0275\u0275pureFunction0(76, _c02), \u0275\u0275pureFunction0(77, _c12)));
      \u0275\u0275advance(31);
      \u0275\u0275classMap(ctx.settingsService.darkMode() ? "text-black-alpha-90" : "text-white");
      \u0275\u0275advance(68);
      \u0275\u0275classMap(ctx.settingsService.darkMode() ? "text-black-alpha-90" : "text-white");
      \u0275\u0275advance(48);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-primary")("externalShades", ctx.customShades["primary"])("contrastTests", \u0275\u0275pureFunction2(83, _c22, \u0275\u0275pureFunction0(81, _c02), \u0275\u0275pureFunction0(82, _c12)));
      \u0275\u0275advance(3);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-success")("externalShades", ctx.customShades["green"])("contrastTests", \u0275\u0275pureFunction2(88, _c22, \u0275\u0275pureFunction0(86, _c02), \u0275\u0275pureFunction0(87, _c12)));
      \u0275\u0275advance(3);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-danger")("externalShades", ctx.customShades["red"])("contrastTests", \u0275\u0275pureFunction2(93, _c22, \u0275\u0275pureFunction0(91, _c02), \u0275\u0275pureFunction0(92, _c12)));
      \u0275\u0275advance(3);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-warn")("externalShades", ctx.customShades["orange"])("contrastTests", \u0275\u0275pureFunction2(98, _c22, \u0275\u0275pureFunction0(96, _c02), \u0275\u0275pureFunction0(97, _c12)));
      \u0275\u0275advance(3);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-info")("externalShades", ctx.customShades["blue"])("contrastTests", \u0275\u0275pureFunction2(103, _c22, \u0275\u0275pureFunction0(101, _c02), \u0275\u0275pureFunction0(102, _c12)));
      \u0275\u0275advance(3);
      \u0275\u0275property("key", ctx.settingsService.colorScheme() + "-help")("externalShades", ctx.customShades["purple"])("contrastTests", \u0275\u0275pureFunction2(108, _c22, \u0275\u0275pureFunction0(106, _c02), \u0275\u0275pureFunction0(107, _c12)));
      \u0275\u0275advance(114);
      \u0275\u0275property("customShades", ctx.customShades);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TranslatePipe,
    RouterLink,
    BreadcrumbModule,
    Breadcrumb,
    PrimeTemplate,
    ButtonModule,
    Button,
    TagModule,
    Tag,
    BadgeModule,
    Badge,
    MessageModule,
    Message,
    DividerModule,
    Divider,
    UserSettingsComponent,
    ColorPickerComponent,
    CopyPresetComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGeneratorComponent, [{
    type: Component,
    args: [{ selector: "aida-color-generator", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      RouterLink,
      BreadcrumbModule,
      ButtonModule,
      TagModule,
      BadgeModule,
      MessageModule,
      DividerModule,
      UserSettingsComponent,
      ColorPickerComponent,
      CopyPresetComponent
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
<h1 id="wb-cont">{{ 'dev.colors._title' | translate}}</h1>\r
<p>{{ 'dev.colors.description' | translate}}{{ 'dev.colors.description2' | translate}}</p>\r
\r
<aida-user-settings mode="theme" />\r
\r
<!-- Semantic Color Grid -->\r
<div class="mb-6">\r
    <h2 class="mb-3">Semantic colour grouping</h2>\r
    <p class="mb-3 text-sm text-color-secondary">\r
        Colours should be clearly distinguishable between quadrants. Contrast ratio must be above 4.5 for normal text and above 3:1 for large text (24px or 18.5px bold) to meet AA WCAG requirements.\r
    </p>\r
\r
    <div class="grid">\r
        <!-- POSITIVE -->\r
        <div class="col-12 md:col-6">\r
            <div class="surface-50 border-round p-4 max-h-full">\r
                <h3 class="mt-0 mb-3 text-center text-lg font-bold text-green-600">POSITIVE</h3>\r
                <div class="grid h-full">\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">PRIMARY</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Primary button" severity="primary" size="small" />\r
                                    <p-button label="Primary button" severity="primary" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Primary tag" severity="primary" />\r
                                    <p-badge value="1" />\r
                                </div>\r
                                <div class="flex flex-row gap-2">\r
                                    <div class="w-full h-3rem bg-primary-400 border-round align-content-center text-black-alpha-90">Black text</div>\r
                                    <div class="w-full h-3rem bg-primary-500 border-round align-content-center text-white">White text</div>\r
                                </div>\r
                            </div>\r
                            <aida-color-picker [key]="settingsService.colorScheme() + '-primary'" initialColor="bg-primary-500" [externalShades]="customShades['primary']"\r
                                               [contrastTests]="[\r
                    { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                    { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                    ]"\r
                                               (colorChanged)="onColorChange($event, 'primary')" />\r
                        </div>\r
                    </div>\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">SUCCESS</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Success button" severity="success" size="small" />\r
                                    <p-button label="Success button" severity="success" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Success tag" severity="success" />\r
                                    <p-badge value="2" severity="success" />\r
                                </div>\r
                                <div class="flex flex-row gap-2">\r
                                    <div class="w-full h-3rem bg-green-400 border-round align-content-center text-black-alpha-90">Black text</div>\r
                                    <div class="w-full h-3rem bg-green-500 border-round align-content-center text-white">White text</div>\r
                                </div>\r
                                <p-message severity="success" text="Success: message" />\r
                            </div>\r
                            <aida-color-picker [key]="settingsService.colorScheme() + '-success'" initialColor="bg-green-500" [externalShades]="customShades['green']"\r
                                               [contrastTests]="[\r
                    { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                    { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                    ]"\r
                                               (colorChanged)="onColorChange($event, 'green')" />\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- NEGATIVE -->\r
        <div class="col-12 md:col-6">\r
            <div class="surface-50 border-round p-4 max-h-full">\r
                <h3 class="mt-0 mb-3 text-center text-lg font-bold text-red-600">NEGATIVE</h3>\r
                <div class="grid h-full">\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">DANGER</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Danger button" severity="danger" size="small" />\r
                                    <p-button label="Danger button" severity="danger" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Danger tag" severity="danger" />\r
                                    <p-badge value="3" severity="danger" />\r
                                </div>\r
                                <div class="flex flex-row gap-2">\r
                                    <div class="w-full h-3rem bg-red-400 border-round align-content-center text-black-alpha-90">Black text</div>\r
                                    <div class="w-full h-3rem bg-red-500 border-round align-content-center text-white">White text</div>\r
                                </div>\r
                                <p-message severity="error" text="Error: message" />\r
                            </div>\r
                            <aida-color-picker [key]="settingsService.colorScheme() + '-danger'" initialColor="bg-red-500" [externalShades]="customShades['red']"\r
                                               [contrastTests]="[\r
                    { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                    { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                    ]"\r
                                               (colorChanged)="onColorChange($event, 'red')" />\r
                        </div>\r
                    </div>\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">WARNING</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Warning button" severity="warn" size="small" />\r
                                    <p-button label="Warning button" severity="warn" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Warning tag" severity="warn" />\r
                                    <p-badge value="4" severity="warn" />\r
                                </div>\r
                                <div class="flex flex-row gap-2">\r
                                    <div class="w-full h-3rem bg-orange-400 border-round align-content-center text-black-alpha-90">Black text</div>\r
                                    <div class="w-full h-3rem bg-orange-500 border-round align-content-center text-white">White text</div>\r
                                </div>\r
                                <p-message severity="warn" text="Warning: message" />\r
                            </div>\r
                            <aida-color-picker [key]="settingsService.colorScheme() + '-warn'" initialColor="bg-orange-500" [externalShades]="customShades['orange']"\r
                                               [contrastTests]="[\r
                                                { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                ]"\r
                                               (colorChanged)="onWarnColorChange($event)" />\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- INFORMATION -->\r
        <div class="col-12 md:col-6">\r
            <div class="surface-50 border-round p-4 max-h-full">\r
                <h3 class="mt-0 mb-3 text-center text-lg font-bold text-blue-600">INFORMATION</h3>\r
                <div class="grid h-full">\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">INFO</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Info button" severity="info" size="small" />\r
                                    <p-button label="Info button" severity="info" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Info tag" severity="info" />\r
                                    <p-badge value="5" severity="info" />\r
                                </div>\r
                                <div class="flex flex-row gap-2">\r
                                    <div class="w-full h-3rem bg-blue-400 border-round align-content-center text-black-alpha-90">Black text</div>\r
                                    <div class="w-full h-3rem bg-blue-500 border-round align-content-center text-white">White text</div>\r
                                </div>\r
                                <p-message severity="info" text="Info: message" />\r
                            </div>\r
                            <aida-color-picker [key]="settingsService.colorScheme() + '-info'" initialColor="bg-blue-500" [externalShades]="customShades['blue']"\r
                                               [contrastTests]="[\r
                                                { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                ]"\r
                                               (colorChanged)="onInfoColorChange($event)" />\r
                        </div>\r
                    </div>\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">HELP</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Help button" severity="help" size="small" />\r
                                    <p-button label="Help button" severity="help" size="small" outlined styleClass="secondary-outline" />\r
                                    <!--p-tag value="Help" severity="help" class="mb-2 mx-1" /-->\r
                                </div>\r
                                <div class="flex flex-row gap-2">\r
                                    <div class="w-full h-3rem bg-purple-400 border-round align-content-center text-black-alpha-90">Black text</div>\r
                                    <div class="w-full h-3rem bg-purple-500 border-round align-content-center text-white">White text</div>\r
                                </div>\r
                            </div>\r
                            <aida-color-picker [key]="settingsService.colorScheme() + '-help'" initialColor="bg-purple-500" [externalShades]="customShades['purple']"\r
                                               [contrastTests]="[\r
                                                                            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                                            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                                            ]"\r
                                               (colorChanged)="onColorChange($event, 'purple')" />\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- NEUTRAL -->\r
        <div class="col-12 md:col-6">\r
            <div class="surface-50 border-round p-4 h-full">\r
                <h3 class="mt-0 mb-3 text-center text-lg font-bold text-color-secondary">NEUTRAL</h3>\r
                <div class="grid h-full">\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">SECONDARY</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Secondary button" severity="secondary" size="small" />\r
                                    <p-button label="Secondary button" severity="secondary" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Secondary tag" severity="secondary" />\r
                                    <p-badge value="7" severity="secondary" />\r
                                </div>\r
                                <div class="w-full h-3rem surface-100 border-round align-content-center">Secondary background</div>\r
                                <p-message severity="secondary" text="Secondary: message" />\r
                            </div>\r
                            <p class="text-xs text-color-secondary">No customization available</p>\r
                        </div>\r
                    </div>\r
                    <div class="col-6">\r
                        <div class="flex flex-column justify-content-between text-center h-full gap-2">\r
                            <div class="flex flex-column gap-2">\r
                                <p class="text-sm font-semibold mb-0">CONTRAST</p>\r
                                <div class="flex flex-wrap justify-content-center align-items-center gap-2">\r
                                    <p-button label="Contrast button" severity="contrast" size="small" />\r
                                    <p-button label="Contrast button" severity="contrast" size="small" outlined styleClass="secondary-outline" />\r
                                    <p-tag value="Contrast tag" severity="contrast" />\r
                                    <p-badge value="8" severity="contrast" />\r
                                </div>\r
                                <div class="w-full h-3rem surface-900 border-round align-content-center" [class]="settingsService.darkMode() ? 'text-black-alpha-90' : 'text-white'">Contrast background</div>\r
                                <p-message severity="contrast" text="Contrast: message" />\r
                            </div>\r
                            <p class="text-xs text-color-secondary">No customization available</p>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
\r
    </div>\r
\r
    <p-divider />\r
\r
\r
    <!-- All Colors in One Row -->\r
    <div class="mb-6">\r
        <h2 class="mb-3">All components side-by-side</h2>\r
        <div class="flex flex-wrap gap-2 mb-4">\r
            <p>Regular Buttons</p>\r
            <p-button label="Primary" severity="primary" />\r
            <p-button label="Success" severity="success" />\r
            <p-button label="Danger" severity="danger" />\r
            <p-button label="Warning" severity="warn" />\r
            <p-button label="Info" severity="info" />\r
            <p-button label="Help" severity="help" />\r
            <p-button label="Secondary" severity="secondary" />\r
            <p-button label="Contrast" severity="contrast" />\r
        </div>\r
\r
        <div class="flex flex-wrap gap-2 mb-4">\r
            <p>Outlined Buttons</p>\r
            <p-button label="Primary" severity="primary" outlined />\r
            <p-button label="Success" severity="success" outlined />\r
            <p-button label="Danger" severity="danger" outlined />\r
            <p-button label="Warning" severity="warn" outlined />\r
            <p-button label="Info" severity="info" outlined />\r
            <p-button label="Help" severity="help" outlined />\r
            <p-button label="Secondary" severity="secondary" outlined />\r
            <p-button label="Contrast" severity="contrast" outlined />\r
        </div>\r
\r
        <div class="flex flex-wrap gap-2 mb-4">\r
            <span>Tags</span>\r
            <p-tag value="Primary" severity="primary" />\r
            <p-tag value="Success" severity="success" />\r
            <p-tag value="Danger" severity="danger" />\r
            <p-tag value="Warning" severity="warn" />\r
            <p-tag value="Info" severity="info" />\r
            <!--p-tag value="Help" severity="help" /-->\r
            <p-tag value="Secondary" severity="secondary" />\r
            <p-tag value="Contrast" severity="contrast" />\r
        </div>\r
        <div class="flex flex-wrap gap-2 mb-4">\r
            <span>Badges</span>\r
            <p-badge value="1" />\r
            <p-badge value="2" severity="success" />\r
            <p-badge value="3" severity="danger" />\r
            <p-badge value="4" severity="warn" />\r
            <p-badge value="5" severity="info" />\r
            <!--p-badge value="6" severity="help" /-->\r
            <p-badge value="7" severity="secondary" />\r
            <p-badge value="8" severity="contrast" />\r
        </div>\r
\r
        <div class="flex gap-1 mb-2">\r
            <p>Backgrounds</p>\r
            <div class="flex-1 h-4rem bg-primary-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Primary</div>\r
            <div class="flex-1 h-4rem bg-green-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Success</div>\r
            <div class="flex-1 h-4rem bg-red-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Danger</div>\r
            <div class="flex-1 h-4rem bg-orange-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Warning</div>\r
            <div class="flex-1 h-4rem bg-blue-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Info</div>\r
            <div class="flex-1 h-4rem bg-purple-500 border-round flex align-items-center justify-content-center text-white text-xs font-semibold">Help</div>\r
            <div class="flex-1 h-4rem surface-100 border-round flex align-items-center justify-content-center text-color text-xs font-semibold">Secondary</div>\r
            <div class="flex-1 h-4rem surface-900 border-round flex align-items-center justify-content-center text-xs font-semibold" [class]="settingsService.darkMode() ? 'text-black-alpha-90' : 'text-white'">Contrast</div>\r
        </div>\r
\r
        <div class="flex flex-column gap-1 mb-2">\r
            <p>Messages</p>\r
            <p-message severity="info" text="Info: message" />\r
            <p-message severity="success" text="Success: message" />\r
            <p-message severity="error" text="Error: message" />\r
            <p-message severity="warn" text="Warning: message" />\r
            <p-message severity="secondary" text="Secondary: message" />\r
            <p-message severity="contrast" text="Contrast: message" />\r
        </div>\r
    </div>\r
\r
    <p-divider />\r
\r
    <!-- Messages Grouped by Semantic Meaning -->\r
    <div class="mb-6">\r
        <h2 class="mb-3">Messages by semantic meaning</h2>\r
        <p class="mb-3 text-sm text-color-secondary">\r
            Colours should be clearly distinguishable between quadrants.\r
        </p>\r
\r
        <div class="grid">\r
            <div class="col-12 md:col-6">\r
                <h4 class="mb-2 text-sm font-semibold uppercase text-green-600">Positive Messages</h4>\r
                <div class="flex flex-column gap-2 mb-4">\r
                    <!--p-message severity="primary" text="Primary: Click here to continue" /-->\r
                    <p-message severity="success" text="Success: message" />\r
                </div>\r
            </div>\r
\r
            <div class="col-12 md:col-6">\r
                <h4 class="mb-2 text-sm font-semibold uppercase text-red-600">Negative Messages</h4>\r
                <div class="flex flex-column gap-2 mb-4">\r
                    <p-message severity="error" text="Error: message" />\r
                    <p-message severity="warn" text="Warning: message" />\r
                </div>\r
            </div>\r
\r
            <div class="col-12 md:col-6">\r
                <h4 class="mb-2 text-sm font-semibold uppercase text-blue-600">Information Messages</h4>\r
                <div class="flex flex-column gap-2 mb-4">\r
                    <p-message severity="info" text="Info: message" />\r
                    <!--p-message text="Help: Click here for assistance" /-->\r
                </div>\r
            </div>\r
\r
            <div class="col-12 md:col-6">\r
                <h4 class="mb-2 text-sm font-semibold uppercase text-color-secondary">Neutral Messages</h4>\r
                <div class="flex flex-column gap-2 mb-4">\r
                    <p-message severity="secondary" text="Secondary: message" />\r
                    <p-message severity="contrast" text="Contrast: message" />\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <p-divider />\r
\r
    <!-- Color Palette Swatches -->\r
    <div class="mb-6">\r
        <h2 class="mb-3">Full colour palettes</h2>\r
        <aida-user-settings mode="theme" />\r
        <div class="flex flex-row gap-2 mt-2">\r
            <div class="flex flex-column">Primary\r
                <aida-color-picker [key]=" settingsService.colorScheme() + '-primary'" initialColor=" bg-primary-500" [externalShades]="customShades['primary']"\r
                                   [contrastTests]="[\r
                            { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },                            \r
                            { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },\r
                            ]"\r
                                   (colorChanged)="onColorChange($event, 'primary')" />\r
            </div>\r
            <div class="flex flex-column">Green (success)\r
                <aida-color-picker [key]="settingsService.colorScheme() + '-success'" initialColor="bg-green-500" [externalShades]="customShades['green']"\r
                                   [contrastTests]="[\r
                                    { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                    { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 },\r
                                    ]"\r
                                   (colorChanged)="onColorChange($event, 'green')" />\r
            </div>\r
            <div class="flex flex-column">Red (danger)\r
                <aida-color-picker [key]="settingsService.colorScheme() + '-danger'" initialColor="bg-red-500" [externalShades]="customShades['red']"\r
                                   [contrastTests]="[\r
                                                { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                ]"\r
                                   (colorChanged)="onColorChange($event, 'red')" />\r
            </div>\r
            <div class="flex flex-column">Orange (warn)\r
                <aida-color-picker [key]="settingsService.colorScheme() + '-warn'" initialColor="bg-orange-500" [externalShades]="customShades['orange']"\r
                                   [contrastTests]="[\r
                                                { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                ]"\r
                                   (colorChanged)="onWarnColorChange($event)" />\r
            </div>\r
            <div class="flex flex-column">Blue (info)\r
                <aida-color-picker [key]="settingsService.colorScheme() + '-info'" initialColor="bg-blue-500" [externalShades]="customShades['blue']"\r
                                   [contrastTests]="[\r
                                                { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                ]"\r
                                   (colorChanged)="onInfoColorChange($event)" />\r
            </div>\r
            <div class="flex flex-column">Purple (help)\r
                <aida-color-picker [key]="settingsService.colorScheme() + '-help'" initialColor="bg-purple-500" [externalShades]="customShades['purple']"\r
                                   [contrastTests]="[\r
                                                { shade: 400, textColor: '#000000E6', textColorName: 'Black', requiredRatio: 4.5 },\r
                                                { shade: 500, textColor: '#ffffff', textColorName: 'White', requiredRatio: 4.5 }\r
                                                ]"\r
                                   (colorChanged)="onColorChange($event, 'purple')" />\r
            </div>\r
        </div>\r
        <div class="grid">\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Primary</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem bg-primary-50 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-100 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-200 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-300 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-400 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-500 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-600 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-700 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-800 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-primary-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Green (success)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem bg-green-50 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-100 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-200 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-300 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-400 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-500 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-600 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-700 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-800 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-green-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Red (danger)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem bg-red-50 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-100 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-200 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-300 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-400 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-500 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-600 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-700 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-800 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-red-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Orange (warn)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem bg-orange-50 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-100 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-200 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-300 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-400 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-500 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-600 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-700 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-800 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-orange-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Blue (info)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem bg-blue-50 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-100 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-200 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-300 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-400 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-500 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-600 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-700 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-800 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-blue-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Purple (help)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem bg-purple-50 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-100 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-200 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-300 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-400 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-500 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-600 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-700 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-800 border-round"></div>\r
                    <div class="flex-1 h-3rem bg-purple-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Surface (secondary)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem surface-50 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-100 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-200 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-300 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-400 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-500 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-600 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-700 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-800 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-900 border-round"></div>\r
                </div>\r
            </div>\r
            <div class="col-12 md:col-6">\r
                <h4 class="text-sm">Surface (contrast)</h4>\r
                <div class="flex gap-1 mb-3">\r
                    <div class="flex-1 h-3rem surface-900 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-800 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-700 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-600 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-500 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-400 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-300 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-200 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-100 border-round"></div>\r
                    <div class="flex-1 h-3rem surface-50 border-round"></div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <aida-copy-preset [customShades]="customShades" />` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorGeneratorComponent, { className: "ColorGeneratorComponent", filePath: "src/app/views/standalone/components/dev-tools/color-generator/color-generator.component.ts", lineNumber: 33 });
})();
export {
  ColorGeneratorComponent
};
//# sourceMappingURL=chunk-LGOXRD7W.js.map
