import {
  UserSettingsService,
  environment,
  marker
} from "./chunk-T4NCAOXG.js";
import {
  CommonModule,
  NgClass,
  NgTemplateOutlet,
  RouterLink
} from "./chunk-TULSGE2I.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LBDVV6V6.js";

// src/app/components/doormats/doormats.component.ts
var _c0 = (a0, a1) => ({ $implicit: a0, external: a1 });
var _c1 = (a0) => ({ $implicit: a0 });
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275template(2, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_1_ng_container_2_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3);
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const doormatHeader_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("href", \u0275\u0275pipeBind1(1, 3, item_r1.path), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", doormatHeader_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c0, item_r1.titleKey, ctx_r2.isExternal(key_r2)));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275template(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275nextContext(2);
    const doormatHeader_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("routerLink", item_r1.path ? item_r1.path : void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", doormatHeader_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, item_r1.titleKey));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_1_Template, 3, 8, "a", 4)(2, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Conditional_2_Template, 2, 5, "a", 5);
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2);
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isExternal(key_r2) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, item_r1.descriptionKey));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_ng_container_7_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const doormatHeader_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("routerLink", item_r1.path ? item_r1.path : void 0);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.iconClasses(item_r1.notOutlined));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", doormatHeader_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c1, item_r1.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, item_r1.descriptionKey));
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Conditional_1_Template, 11, 11, "a", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isExternal(key_r2) ? 1 : -1);
  }
}
function DoormatsComponent_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_0_Template, 6, 4, "div", 2)(1, DoormatsComponent_For_2_Conditional_0_Conditional_0_Conditional_1_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.style() === "topic" ? 0 : ctx_r2.style() === "card" ? 1 : -1);
  }
}
function DoormatsComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_For_2_Conditional_0_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.isHiddenInProd(key_r2) || !ctx_r2.prod ? 0 : -1);
  }
}
function DoormatsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_For_2_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_11_0;
    const key_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.items[key_r2]) ? 0 : -1, tmp_11_0);
  }
}
function DoormatsComponent_ng_template_3_Case_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function DoormatsComponent_ng_template_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_0_Conditional_4_Template, 1, 0, "i", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const external_r6 = ctx_r4.external;
    const header_r7 = ctx_r4.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, header_r7));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r6 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function DoormatsComponent_ng_template_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_1_Conditional_4_Template, 1, 0, "i", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const external_r6 = ctx_r4.external;
    const header_r7 = ctx_r4.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, header_r7));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r6 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function DoormatsComponent_ng_template_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_2_Conditional_4_Template, 1, 0, "i", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const external_r6 = ctx_r4.external;
    const header_r7 = ctx_r4.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, header_r7));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r6 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function DoormatsComponent_ng_template_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DoormatsComponent_ng_template_3_Case_3_Conditional_4_Template, 1, 0, "i", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const external_r6 = ctx_r4.external;
    const header_r7 = ctx_r4.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, header_r7));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(external_r6 ? 4 : -1);
  }
}
function DoormatsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DoormatsComponent_ng_template_3_Case_0_Template, 5, 4, "h2", 12)(1, DoormatsComponent_ng_template_3_Case_1_Template, 5, 4, "h3", 12)(2, DoormatsComponent_ng_template_3_Case_2_Template, 5, 4, "h4", 12)(3, DoormatsComponent_ng_template_3_Case_3_Template, 5, 4, "h5", 12);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_4_0 = ctx_r2.headingLevel()) === "h2" ? 0 : tmp_4_0 === "h3" ? 1 : tmp_4_0 === "h4" ? 2 : tmp_4_0 === "h5" ? 3 : -1);
  }
}
var DOORMATS = {
  //Project
  dashboard: { path: "/project/dashboard", titleKey: "dashboard._title", descriptionKey: "dashboard.description", icon: "view_quilt" },
  editProject: { path: "/project/edit", titleKey: "project._nav.edit", descriptionKey: "project.edit.description", icon: "edit" },
  newProject: { path: "/project/new", titleKey: "project._nav.new", descriptionKey: "project.new.description", icon: "add" },
  switchProject: { path: "/project/switch", titleKey: "switch._title", descriptionKey: "switch.description", icon: "folder_open" },
  //Tasks
  addPages: { path: "/tasks/add-pages", titleKey: "addPages._nav", descriptionKey: "addPages.description", icon: "note_add" },
  search: { path: void 0, titleKey: "search._nav", descriptionKey: "search.description", icon: "manage_search", hideInProd: true },
  problems: { path: void 0, titleKey: "problems._nav", descriptionKey: "problems.description", icon: "troubleshoot", hideInProd: true },
  iaDiagram: { path: "/tasks/ia-diagram", titleKey: "iaDiagram._title", descriptionKey: "iaDiagram.description", icon: "lan" },
  inventory: { path: "/tasks/inventory", titleKey: "inventory._nav", descriptionKey: "inventory.description", icon: "checklist_rtl" },
  metadata: { path: void 0, titleKey: "metadata._nav", descriptionKey: "metadata.description", icon: "source" },
  exportPages: { path: "/tasks/export-pages", titleKey: "exportPages._nav", descriptionKey: "exportPages.description", icon: "drive_folder_upload" },
  editPages: { path: "/tasks/edit-pages", titleKey: "editPages._nav", descriptionKey: "editPages.description", icon: "auto_fix_high" },
  compare: { path: "/tasks/compare", titleKey: "compare._nav", descriptionKey: "compare.description", icon: "library_books" },
  //Help
  help: { path: "/help", titleKey: "help._nav", descriptionKey: "help.description", icon: "help_outline", hideInProd: true },
  contact: { path: "/contact", titleKey: "contact._nav", descriptionKey: "contact.description", icon: "feedback", hideInProd: true },
  //Standalone
  standaloneCompare: { path: "/standalone/compare", titleKey: "compare._nav", descriptionKey: "compare.description" },
  //Dev
  monitoring: { path: "/dev/monitoring", titleKey: "dev.monitoring._title", descriptionKey: "dev.monitoring.description" },
  colors: { path: "/dev/color-generator", titleKey: "dev.colors._title", descriptionKey: "dev.colors.description" },
  patterns: { path: "/dev/design-patterns", titleKey: "dev.patterns._title", descriptionKey: "dev.patterns.description" },
  prompts: { path: "/dev/prompt-editor", titleKey: "dev.prompts._title", descriptionKey: "dev.prompts.description" },
  //External
  ucdgDiscover: { path: "ucdg.discover.link", titleKey: "ucdg.discover.title", descriptionKey: "ucdg.discover.description", isExternal: true }
};
var DoormatsComponent = class _DoormatsComponent {
  settingsService = inject(UserSettingsService);
  prod = environment.production;
  items = DOORMATS;
  keys = input.required(...ngDevMode ? [{ debugName: "keys" }] : (
    /* istanbul ignore next */
    []
  ));
  headingLevel = input("h3", ...ngDevMode ? [{ debugName: "headingLevel" }] : (
    /* istanbul ignore next */
    []
  ));
  style = input("topic", ...ngDevMode ? [{ debugName: "style" }] : (
    /* istanbul ignore next */
    []
  ));
  iconClasses(notOutlined) {
    const baseClasses = "text-4xl p-2 border-1 border-round-lg surface-border";
    const materialClass = notOutlined ? "material-icons" : "material-icons-outlined";
    const bgClass = this.settingsService.darkMode() ? "bg-primary-800 border-primery-700" : "bg-primary-50 border-primary-100";
    return baseClasses + " " + materialClass + " " + bgClass;
  }
  isHiddenInProd(key) {
    return !!this.items[key].hideInProd;
  }
  isExternal(key) {
    return !!this.items[key].isExternal;
  }
  markForTranslation() {
    marker("search._nav");
    marker("search.description");
    marker("problems._nav");
    marker("problems.description");
    marker("iaDiagram.description");
    marker("compare.description");
    marker("ucdg.discover.description");
    marker("ucdg.discover.link");
    marker("ucdg.discover.title");
  }
  static \u0275fac = function DoormatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoormatsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoormatsComponent, selectors: [["aida-doormats"]], inputs: { keys: [1, "keys"], headingLevel: [1, "headingLevel"], style: [1, "style"] }, decls: 5, vars: 1, consts: [["doormatHeader", ""], [1, "grid", 3, "ngClass"], [1, "col-12", "md:col-6", "lg:col-4"], [1, "col-12", "md:col-6"], ["target", "_blank", 3, "href"], [3, "routerLink"], [1, "text-color-secondary", "mt-2"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-underline", "h-full", "flex", 3, "routerLink"], [1, "surface-card", "border-round-lg", "shadow-1", "hover:shadow-3", "hover:surface-ground", "p-3", "w-full", "min-w-min", "flex-1"], [1, "flex", "flex-row", "gap-3"], [1, "flex", "align-items-center"], [1, "text-xl", "font-semibold", "my-0"], [1, "hover:underline"], [1, "pi", "pi-external-link", "ml-2", "text-lg"]], template: function DoormatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275repeaterCreate(1, DoormatsComponent_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, DoormatsComponent_ng_template_3_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.style() === "topic" ? "py-2 px-4 lg:px-6" : "");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.keys());
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, NgTemplateOutlet, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoormatsComponent, [{
    type: Component,
    args: [{ selector: "aida-doormats", imports: [RouterLink, TranslatePipe, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div [ngClass]="style() === 'topic' ? 'py-2 px-4 lg:px-6' : ''" class="grid">
  @for (key of keys(); track key) {
    @if (items[key]; as item) {
      @if (!isHiddenInProd(key) || !prod) {
        @if (style() === 'topic') {
          <div class="col-12 md:col-6 lg:col-4">
            @if (isExternal(key)) {
              <a [href]="item.path | translate" target="_blank">
                <ng-container *ngTemplateOutlet="doormatHeader; context: { $implicit: item.titleKey, external: isExternal(key) }" />
              </a>
            } @else {
              <a [routerLink]="item.path ? item.path : undefined">
                <ng-container *ngTemplateOutlet="doormatHeader; context: { $implicit: item.titleKey }" />
              </a>
            }
            <p class="text-color-secondary mt-2">{{ item.descriptionKey | translate }}</p>
          </div>
        } @else if (style() === 'card') {
          <div class="col-12 md:col-6">
            @if (!isExternal(key)) {
              <a [routerLink]="item.path ? item.path : undefined" class="no-underline h-full flex">
                <div class="surface-card border-round-lg shadow-1 hover:shadow-3 hover:surface-ground p-3 w-full min-w-min flex-1">
                  <div class="flex flex-row gap-3">
                    <div class="flex align-items-center">
                      <span [class]="iconClasses(item.notOutlined)">{{ item.icon }}</span>
                    </div>
                    <div>
                      <ng-container *ngTemplateOutlet="doormatHeader; context: { $implicit: item.titleKey }" />
                      <p class="text-color-secondary mt-2">{{ item.descriptionKey | translate }}</p>
                    </div>
                  </div>
                </div>
              </a>
            }
          </div>
        }
      }
    }
  }
</div>

<ng-template #doormatHeader let-external="external" let-header>
  @switch (headingLevel()) {
    @case ('h2') {
      <h2 class="text-xl font-semibold my-0">
        <span class="hover:underline">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h2>
    }
    @case ('h3') {
      <h3 class="text-xl font-semibold my-0">
        <span class="hover:underline">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h3>
    }
    @case ('h4') {
      <h4 class="text-xl font-semibold my-0">
        <span class="hover:underline">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h4>
    }
    @case ('h5') {
      <h5 class="text-xl font-semibold my-0">
        <span class="hover:underline">{{ header | translate }}</span>
        @if (external) {
          <i class="pi pi-external-link ml-2 text-lg"></i>
        }
      </h5>
    }
  }
</ng-template>
` }]
  }], null, { keys: [{ type: Input, args: [{ isSignal: true, alias: "keys", required: true }] }], headingLevel: [{ type: Input, args: [{ isSignal: true, alias: "headingLevel", required: false }] }], style: [{ type: Input, args: [{ isSignal: true, alias: "style", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoormatsComponent, { className: "DoormatsComponent", filePath: "src/app/components/doormats/doormats.component.ts", lineNumber: 61 });
})();

export {
  DoormatsComponent
};
//# sourceMappingURL=chunk-HLOKXDBU.js.map
