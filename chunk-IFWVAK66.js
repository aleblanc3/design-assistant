import {
  SelectButton,
  SelectButtonModule
} from "./chunk-6VI4IFEF.js";
import {
  Select,
  SelectModule
} from "./chunk-IWUMNFUF.js";
import {
  marker
} from "./chunk-NHG2MSCL.js";
import {
  UserSettingsService
} from "./chunk-EKIRHXEG.js";
import {
  BaseComponent,
  BaseStyle,
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  SharedModule,
  TranslateModule,
  TranslatePipe
} from "./chunk-YD3UXEIO.js";
import {
  Component,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3I2QHJYF.js";

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
var _c0 = ["*"];
var theme = ({
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
var classes = {
  root: ({
    props
  }) => ["p-inputgroup", {
    "p-inputgroup-fluid": props.fluid
  }]
};
var InputGroupStyle = class _InputGroupStyle extends BaseStyle {
  name = "inputgroup";
  theme = theme;
  classes = classes;
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
    ngContentSelectors: _c0,
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
var _c02 = ["*"];
var classes2 = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = class _InputGroupAddonStyle extends BaseStyle {
  name = "inputgroupaddon";
  classes = classes2;
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
    ngContentSelectors: _c02,
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
  InputGroup,
  InputGroupModule,
  InputGroupAddon,
  InputGroupAddonModule,
  UserSettingsComponent
};
//# sourceMappingURL=chunk-IFWVAK66.js.map
