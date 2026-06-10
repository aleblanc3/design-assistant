import {
  BaseComponent,
  BaseStyle,
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule
} from "./chunk-ZLW5LXTH.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4H6JJ3MH.js";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c0 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 1, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt("tag.primary.background")};
    color: ${dt("tag.primary.color")};
    font-size: ${dt("tag.font.size")};
    font-weight: ${dt("tag.font.weight")};
    padding: ${dt("tag.padding")};
    border-radius: ${dt("tag.border.radius")};
    gap: ${dt("tag.gap")};
}

.p-tag-icon {
    font-size: ${dt("tag.icon.size")};
    width: ${dt("tag.icon.size")};
    height:${dt("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${dt("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${dt("tag.success.background")};
    color: ${dt("tag.success.color")};
}

.p-tag-info {
    background: ${dt("tag.info.background")};
    color: ${dt("tag.info.color")};
}

.p-tag-warn {
    background: ${dt("tag.warn.background")};
    color: ${dt("tag.warn.color")};
}

.p-tag-danger {
    background: ${dt("tag.danger.background")};
    color: ${dt("tag.danger.color")};
}

.p-tag-secondary {
    background: ${dt("tag.secondary.background")};
    color: ${dt("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${dt("tag.contrast.background")};
    color: ${dt("tag.contrast.color")};
}
`;
var classes = {
  root: ({
    props
  }) => ["p-tag p-component", {
    "p-tag-info": props.severity === "info",
    "p-tag-success": props.severity === "success",
    "p-tag-warn": props.severity === "warn",
    "p-tag-danger": props.severity === "danger",
    "p-tag-secondary": props.severity === "secondary",
    "p-tag-contrast": props.severity === "contrast",
    "p-tag-rounded": props.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var Tag = class _Tag extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _style;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    let classes3 = "p-tag p-component";
    if (this.severity) {
      classes3 += ` p-tag-${this.severity}`;
    }
    if (this.rounded) {
      classes3 += " p-tag-rounded";
    }
    if (this.styleClass) {
      classes3 += ` ${this.styleClass}`;
    }
    return classes3;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-label"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span class="p-tag-icon" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span class="p-tag-label">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule,
    imports: [Tag, SharedModule],
    exports: [Tag, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-divider.mjs
var _c02 = ["*"];
var theme2 = ({
  dt
}) => `
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${dt("divider.horizontal.margin")};
    padding: ${dt("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${dt("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${dt("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${dt("divider.vertical.margin")};
    padding: ${dt("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${dt("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${dt("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${dt("divider.content.background")};
    color: ${dt("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`;
var inlineStyles = {
  root: ({
    props
  }) => ({
    justifyContent: props.layout === "horizontal" ? props.align === "center" || props.align === null ? "center" : props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : null : null,
    alignItems: props.layout === "vertical" ? props.align === "center" || props.align === null ? "center" : props.align === "top" ? "flex-start" : props.align === "bottom" ? "flex-end" : null : null
  })
};
var classes2 = {
  root: ({
    props
  }) => ["p-divider p-component", "p-divider-" + props.layout, "p-divider-" + props.type, {
    "p-divider-left": props.layout === "horizontal" && (!props.align || props.align === "left")
  }, {
    "p-divider-center": props.layout === "horizontal" && props.align === "center"
  }, {
    "p-divider-right": props.layout === "horizontal" && props.align === "right"
  }, {
    "p-divider-top": props.layout === "vertical" && props.align === "top"
  }, {
    "p-divider-center": props.layout === "vertical" && (!props.align || props.align === "center")
  }, {
    "p-divider-bottom": props.layout === "vertical" && props.align === "bottom"
  }],
  content: "p-divider-content"
};
var DividerStyle = class _DividerStyle extends BaseStyle {
  name = "divider";
  theme = theme2;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DividerStyle_BaseFactory;
    return function DividerStyle_Factory(__ngFactoryType__) {
      return (\u0275DividerStyle_BaseFactory || (\u0275DividerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DividerStyle)))(__ngFactoryType__ || _DividerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DividerStyle,
    factory: _DividerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerStyle, [{
    type: Injectable
  }], null, null);
})();
var DividerClasses;
(function(DividerClasses2) {
  DividerClasses2["root"] = "p-divider";
  DividerClasses2["content"] = "p-divider-content";
})(DividerClasses || (DividerClasses = {}));
var Divider = class _Divider extends BaseComponent {
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
   * Specifies the orientation.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Border style type.
   * @group Props
   */
  type = "solid";
  /**
   * Alignment of the content.
   * @group Props
   */
  align;
  _componentStyle = inject(DividerStyle);
  get hostClass() {
    return this.styleClass;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Divider_BaseFactory;
    return function Divider_Factory(__ngFactoryType__) {
      return (\u0275Divider_BaseFactory || (\u0275Divider_BaseFactory = \u0275\u0275getInheritedFactory(_Divider)))(__ngFactoryType__ || _Divider);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Divider,
    selectors: [["p-divider"]],
    hostVars: 33,
    hostBindings: function Divider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.layout)("data-pc-name", "divider")("role", "separator");
        \u0275\u0275classMap(ctx.hostClass);
        \u0275\u0275styleProp("justify-content", ctx.layout === "horizontal" ? ctx.align === "center" || ctx.align === void 0 ? "center" : ctx.align === "left" ? "flex-start" : ctx.align === "right" ? "flex-end" : null : null)("align-items", ctx.layout === "vertical" ? ctx.align === "center" || ctx.align === void 0 ? "center" : ctx.align === "top" ? "flex-start" : ctx.align === "bottom" ? "flex-end" : null : null);
        \u0275\u0275classProp("p-divider", true)("p-component", true)("p-divider-horizontal", ctx.layout === "horizontal")("p-divider-vertical", ctx.layout === "vertical")("p-divider-solid", ctx.type === "solid")("p-divider-dashed", ctx.type === "dashed")("p-divider-dotted", ctx.type === "dotted")("p-divider-left", ctx.layout === "horizontal" && (!ctx.align || ctx.align === "left"))("p-divider-center", ctx.layout === "horizontal" && ctx.align === "center" || ctx.layout === "vertical" && (!ctx.align || ctx.align === "center"))("p-divider-right", ctx.layout === "horizontal" && ctx.align === "right")("p-divider-top", ctx.layout === "vertical" && ctx.align === "top")("p-divider-bottom", ctx.layout === "vertical" && ctx.align === "bottom");
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      layout: "layout",
      type: "type",
      align: "align"
    },
    features: [\u0275\u0275ProvidersFeature([DividerStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 2,
    vars: 0,
    consts: [[1, "p-divider-content"]],
    template: function Divider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Divider, [{
    type: Component,
    args: [{
      selector: "p-divider",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div class="p-divider-content">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-divider]": "true",
        "[class.p-component]": "true",
        "[class.p-divider-horizontal]": 'layout === "horizontal"',
        "[class.p-divider-vertical]": 'layout === "vertical"',
        "[class.p-divider-solid]": 'type === "solid"',
        "[class.p-divider-dashed]": 'type === "dashed"',
        "[class.p-divider-dotted]": 'type === "dotted"',
        "[class.p-divider-left]": 'layout === "horizontal" && (!align || align === "left")',
        "[class.p-divider-center]": '(layout === "horizontal" && align === "center") || (layout === "vertical" && (!align || align === "center"))',
        "[class.p-divider-right]": 'layout === "horizontal" && align === "right"',
        "[class.p-divider-top]": 'layout === "vertical" && align === "top"',
        "[class.p-divider-bottom]": 'layout === "vertical" && align === "bottom"',
        "[attr.aria-orientation]": "layout",
        "[attr.data-pc-name]": "'divider'",
        "[attr.role]": '"separator"',
        "[style.justifyContent]": 'layout === "horizontal" ? (align === "center" || align === undefined ? "center" : (align === "left" ? "flex-start" : (align === "right" ? "flex-end" : null))) : null',
        "[style.alignItems]": 'layout === "vertical" ? (align === "center" || align === undefined ? "center" : (align === "top" ? "flex-start" : (align === "bottom" ? "flex-end" : null))) : null'
      },
      providers: [DividerStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var DividerModule = class _DividerModule {
  static \u0275fac = function DividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DividerModule,
    imports: [Divider],
    exports: [Divider]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Divider]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerModule, [{
    type: NgModule,
    args: [{
      imports: [Divider],
      exports: [Divider]
    }]
  }], null, null);
})();

export {
  Tag,
  TagModule,
  Divider,
  DividerModule
};
//# sourceMappingURL=chunk-7O4WWBR7.js.map
