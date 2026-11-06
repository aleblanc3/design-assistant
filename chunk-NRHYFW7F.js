import {
  CompareSelectComponent
} from "./chunk-4B4MZOV5.js";
import {
  CompareService
} from "./chunk-ZXBKKAN6.js";
import {
  AI_PAID_MODELS,
  InventoryPromptKey,
  InventoryPrompts,
  OpenRouterService
} from "./chunk-UAQUVN4B.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-NNXCTYTG.js";
import {
  StyleCardService
} from "./chunk-PLWLN2ZO.js";
import {
  Table,
  TableModule
} from "./chunk-HMJLW44B.js";
import {
  Dialog,
  DialogModule
} from "./chunk-GOQTY6LF.js";
import {
  Message,
  MessageModule
} from "./chunk-ZQFVNKCP.js";
import {
  AidaLinks
} from "./chunk-PKDWFFWN.js";
import {
  ProjectStateService
} from "./chunk-2GTMFFLT.js";
import {
  HtmlNormalizationService
} from "./chunk-LFN6OHVC.js";
import {
  ToggleButton,
  ToggleButtonModule
} from "./chunk-26UQUZNT.js";
import {
  FetchService
} from "./chunk-CQCSI35X.js";
import {
  Badge,
  BadgeModule,
  Button,
  ButtonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  marker
} from "./chunk-IVEPVLVK.js";
import {
  DomSanitizer,
  RouterLink
} from "./chunk-UVDIDRDQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Injectable,
  Injector,
  Input,
  NgTemplateOutlet,
  TranslatePipe,
  ViewChild,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-46LS4HZY.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/views/tasks/compare-languages/compare-languages.service.ts
var ReviewLanguagesService = class _ReviewLanguagesService {
  // Track AI jobs
  aiResponses = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "aiResponses" }] : (
    /* istanbul ignore next */
    []
  ));
  static NO_DIFFS = [];
  getAiResponse(path) {
    return this.aiResponses().get(path) ?? _ReviewLanguagesService.NO_DIFFS;
  }
  setAiResponse(path, differences) {
    const map = new Map(this.aiResponses());
    map.set(path, differences);
    this.aiResponses.set(map);
  }
  aiJobs = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "aiJobs" }] : (
    /* istanbul ignore next */
    []
  ));
  getAiJobStatus(path) {
    return this.aiJobs().get(path);
  }
  setAiJobStatus(path, status) {
    const map = new Map(this.aiJobs());
    map.set(path, status);
    this.aiJobs.set(map);
  }
  clearAiJobStatus(path) {
    const map = new Map(this.aiJobs());
    map.delete(path);
    this.aiJobs.set(map);
  }
  static \u0275fac = function ReviewLanguagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewLanguagesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewLanguagesService, factory: _ReviewLanguagesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewLanguagesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/views/tasks/compare-languages/compare-ai/compare-ai.component.ts
function CompareAiLangComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "compare.waitingForAI"));
  }
}
function CompareAiLangComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.aiError"));
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "inventory.header.issue"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.language.french"));
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const diff_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", diff_r1.english, " ");
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const diff_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", diff_r1.french, " ");
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_4_Template, 1, 1)(5, CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_5_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_7_Template, 1, 1)(8, CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Conditional_8_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const diff_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(diff_r1.issue);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r1.english ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("lang", "fr");
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r1.french ? 7 : 8);
  }
}
function CompareAiLangComponent_Case_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 10);
    \u0275\u0275template(1, CompareAiLangComponent_Case_13_Conditional_1_ng_template_1_Template, 10, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CompareAiLangComponent_Case_13_Conditional_1_ng_template_3_Template, 9, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const diffs_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("value", diffs_r2);
  }
}
function CompareAiLangComponent_Case_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.noDiffs"));
  }
}
function CompareAiLangComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, CompareAiLangComponent_Case_13_Conditional_1_Template, 5, 1, "p-table", 10)(2, CompareAiLangComponent_Case_13_Conditional_2_Template, 3, 3, "p-message", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const diffs_r4 = \u0275\u0275storeLet(ctx_r2.reviewLanguagesService.getAiResponse(ctx_r2.compareService.selectedPage()));
    \u0275\u0275advance();
    \u0275\u0275conditional(diffs_r4.length > 0 ? 1 : 2);
  }
}
var CompareAiLangComponent = class _CompareAiLangComponent {
  reviewLanguagesService = inject(ReviewLanguagesService);
  compareService = inject(CompareService);
  openRouterService = inject(OpenRouterService);
  aiEnglish = input("", ...ngDevMode ? [{ debugName: "aiEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  aiFrench = input("", ...ngDevMode ? [{ debugName: "aiFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  //AI difference summary
  getSummary() {
    return __async(this, null, function* () {
      const path = this.compareService.selectedPage();
      this.reviewLanguagesService.setAiJobStatus(path, "pending");
      try {
        const content = `### English HTML
${this.aiEnglish()}
### French HTML
${this.aiFrench()}`;
        console.log("AI request start", path);
        const response = yield this.openRouterService.getTextFromAI(InventoryPrompts[InventoryPromptKey.Languages], content, AI_PAID_MODELS[0].value);
        console.log("AI response received", response);
        this.reviewLanguagesService.setAiResponse(path, this.parseDifferences(response));
        this.reviewLanguagesService.setAiJobStatus(path, "done");
      } catch (error) {
        console.error("AI summary failed", error);
        this.reviewLanguagesService.setAiJobStatus(path, "error");
      }
    });
  }
  parseDifferences(response) {
    try {
      const cleaned = response.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      if (!this.isRecord(parsed) || !Array.isArray(parsed["differences"]))
        return [];
      return parsed["differences"].filter(this.isRecord).flatMap((d) => typeof d["issue"] === "string" ? [
        {
          english: typeof d["english"] === "string" ? d["english"] : "",
          french: typeof d["french"] === "string" ? d["french"] : "",
          issue: d["issue"]
        }
      ] : []);
    } catch (error) {
      console.error("Could not parse AI response", error);
      return [];
    }
  }
  isRecord(value) {
    return typeof value === "object" && value !== null;
  }
  static \u0275fac = function CompareAiLangComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareAiLangComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareAiLangComponent, selectors: [["aida-compare-ai-lang"]], inputs: { aiEnglish: [1, "aiEnglish"], aiFrench: [1, "aiFrench"] }, decls: 14, vars: 12, consts: [["header", ""], ["body", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], ["icon", "pi pi-sparkles", "styleClass", "secondary-outline", 3, "onClick", "label", "loading", "outlined"], ["role", "status", 1, "mt-2"], [1, "flex", "justify-content-center", "align-items-center", "gap-2"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], [1, "pi", "pi-spinner", "pi-spin", "text-5xl", "text-primary"], [1, "loading-dots"], ["size", "small", "stripedRows", "", 3, "value"], ["icon", "pi pi-check-circle font-bold", "severity", "success"], [1, "w-4"], [1, "pi", "pi-minus", "text-xl"]], template: function CompareAiLangComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "h2", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 4);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("onClick", function CompareAiLangComponent_Template_p_button_onClick_8_listener() {
        return ctx.getSummary();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275conditionalCreate(11, CompareAiLangComponent_Case_11_Template, 6, 3, "div", 6)(12, CompareAiLangComponent_Case_12_Template, 3, 3, "p-message", 7)(13, CompareAiLangComponent_Case_13_Template, 3, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "languages.aiSummary.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "languages.aiSummary.description"));
      const status_r5 = ctx.reviewLanguagesService.getAiJobStatus(ctx.compareService.selectedPage());
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 10, "languages.generateSummary"))("loading", status_r5 === "pending")("outlined", status_r5);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_6_0 = status_r5) === "pending" ? 11 : tmp_6_0 === "error" ? 12 : tmp_6_0 === "done" ? 13 : -1);
    }
  }, dependencies: [ButtonModule, Button, MessageModule, Message, TableModule, Table, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareAiLangComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-ai-lang", imports: [TranslatePipe, ButtonModule, MessageModule, TableModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.aiSummary.header' | translate }}</h2>
    <p>{{ 'languages.aiSummary.description' | translate }}</p>
  </div>
  @let status = reviewLanguagesService.getAiJobStatus(compareService.selectedPage());
  <p-button [label]="'languages.generateSummary' | translate" [loading]="status === 'pending'" [outlined]="status" (onClick)="getSummary()" icon="pi pi-sparkles" styleClass="secondary-outline" />
</div>
<div class="mt-2" role="status">
  @switch (status) {
    @case ('pending') {
      <div class="flex justify-content-center align-items-center gap-2">
        <i class="pi pi-spinner pi-spin text-5xl text-primary"></i><span>{{ 'compare.waitingForAI' | translate }}<span class="loading-dots"></span></span>
      </div>
    }
    @case ('error') {
      <p-message icon="pi pi-times-circle font-bold" severity="error">{{ 'languages.aiError' | translate }}</p-message>
    }
    @case ('done') {
      @let diffs = reviewLanguagesService.getAiResponse(compareService.selectedPage());
      @if (diffs.length > 0) {
        <p-table [value]="diffs" size="small" stripedRows>
          <ng-template #header>
            <tr>
              <th class="w-4">{{ 'inventory.header.issue' | translate }}</th>
              <th class="w-4">{{ 'common.language.english' | translate }}</th>
              <th class="w-4">{{ 'common.language.french' | translate }}</th>
            </tr>
          </ng-template>
          <ng-template #body let-diff>
            <tr>
              <td>{{ diff.issue }}</td>
              <td>
                @if (diff.english) {
                  {{ diff.english }}
                } @else {
                  <i class="pi pi-minus text-xl"></i>
                }
              </td>
              <td [attr.lang]="'fr'">
                @if (diff.french) {
                  {{ diff.french }}
                } @else {
                  <i class="pi pi-minus text-xl"></i>
                }
              </td>
            </tr>
          </ng-template>
        </p-table>
      } @else {
        <p-message icon="pi pi-check-circle font-bold" severity="success">{{ 'languages.noDiffs' | translate }}</p-message>
      }
    }
  }
</div>
` }]
  }], null, { aiEnglish: [{ type: Input, args: [{ isSignal: true, alias: "aiEnglish", required: false }] }], aiFrench: [{ type: Input, args: [{ isSignal: true, alias: "aiFrench", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareAiLangComponent, { className: "CompareAiLangComponent", filePath: "src/app/views/tasks/compare-languages/compare-ai/compare-ai.component.ts", lineNumber: 23 });
})();

// src/app/views/tasks/compare-languages/compare-data/compare-data.component.ts
var _c0 = (a0, a1) => ({ title: "baseline", rows: a0, loading: a1 });
var _c1 = (a0, a1) => ({ title: "prototype", rows: a0, loading: a1 });
var _c2 = (a0, a1) => ({ title: "live", rows: a0, loading: a1 });
function CompareDataComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const mismatchTable_r2 = \u0275\u0275reference(18);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, ctx_r0.selectedBase(), ctx_r0.projectState.refreshing().baseline));
  }
}
function CompareDataComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const mismatchTable_r2 = \u0275\u0275reference(18);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c1, ctx_r0.selectedProto(), ctx_r0.projectState.refreshing().prototype));
  }
}
function CompareDataComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const mismatchTable_r2 = \u0275\u0275reference(18);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r0.selectedLive(), ctx_r0.projectState.refreshing().live));
  }
}
function CompareDataComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pageOptions.description.0"));
  }
}
function CompareDataComponent_ng_template_17_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "common.data"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "common.language.french"));
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "inventory.header." + row_r3.label), " ");
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r3.en), " ");
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareDataComponent_ng_template_17_ng_template_6_Conditional_6_Conditional_0_Template, 2, 3)(1, CompareDataComponent_ng_template_17_ng_template_6_Conditional_6_Conditional_1_Template, 1, 0, "i", 14);
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r3.en ? 0 : 1);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r3.fr), " ");
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareDataComponent_ng_template_17_ng_template_6_Conditional_9_Conditional_0_Template, 2, 3)(1, CompareDataComponent_ng_template_17_ng_template_6_Conditional_9_Conditional_1_Template, 1, 0, "i", 14);
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r3.fr ? 0 : 1);
  }
}
function CompareDataComponent_ng_template_17_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, CompareDataComponent_ng_template_17_ng_template_6_Conditional_2_Template, 1, 0, "i", 13)(3, CompareDataComponent_ng_template_17_ng_template_6_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, CompareDataComponent_ng_template_17_ng_template_6_Conditional_5_Template, 1, 0, "i", 13)(6, CompareDataComponent_ng_template_17_ng_template_6_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, CompareDataComponent_ng_template_17_ng_template_6_Conditional_8_Template, 1, 0, "i", 13)(9, CompareDataComponent_ng_template_17_ng_template_6_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r4 = \u0275\u0275nextContext().loading;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loading_r4 ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(loading_r4 ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(loading_r4 ? 8 : 9);
  }
}
function CompareDataComponent_ng_template_17_ng_template_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function CompareDataComponent_ng_template_17_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noMismatch"), " ");
  }
}
function CompareDataComponent_ng_template_17_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275conditionalCreate(2, CompareDataComponent_ng_template_17_ng_template_8_Conditional_2_Template, 1, 0, "i", 13)(3, CompareDataComponent_ng_template_17_ng_template_8_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r4 = \u0275\u0275nextContext().loading;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loading_r4 ? 2 : 3);
  }
}
function CompareDataComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-table", 10);
    \u0275\u0275template(4, CompareDataComponent_ng_template_17_ng_template_4_Template, 10, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, CompareDataComponent_ng_template_17_ng_template_6_Template, 10, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, CompareDataComponent_ng_template_17_ng_template_8_Template, 4, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rows_r5 = ctx.rows;
    const title_r6 = ctx.title;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "common.version." + title_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rows_r5);
  }
}
var CompareDataComponent = class _CompareDataComponent {
  projectState = inject(ProjectStateService);
  compareService = inject(CompareService);
  reviewLanguagesService = inject(ReviewLanguagesService);
  selectedNode = input(void 0, ...ngDevMode ? [{ debugName: "selectedNode" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedBase = input(void 0, ...ngDevMode ? [{ debugName: "selectedBase" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedProto = input(void 0, ...ngDevMode ? [{ debugName: "selectedProto" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLive = input(void 0, ...ngDevMode ? [{ debugName: "selectedLive" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh(version) {
    return __async(this, null, function* () {
      const node = this.selectedNode();
      if (!node)
        return;
      const repoType = this.projectState.getProject().repoType === "github" ? "GH" : "UT";
      const urlVersion = version === "live" ? "live" : version === "prototype" ? `proto${repoType}` : `base${repoType}`;
      this.projectState.refreshing.update((r) => __spreadProps(__spreadValues({}, r), { [version]: true }));
      yield this.projectState.refreshNode(node, urlVersion);
      this.projectState.refreshing.update((r) => __spreadProps(__spreadValues({}, r), { [version]: false }));
    });
  }
  static \u0275fac = function CompareDataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareDataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareDataComponent, selectors: [["aida-compare-data"]], inputs: { selectedNode: [1, "selectedNode"], selectedBase: [1, "selectedBase"], selectedProto: [1, "selectedProto"], selectedLive: [1, "selectedLive"] }, decls: 19, vars: 18, consts: [["mismatchTable", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], [1, "flex", "flex-column", "gap-2"], ["fluid", "", "icon", "pi pi-refresh", "outlined", "", "styleClass", "secondary-outline min-w-15rem", 3, "onClick", "label", "loading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["icon", "pi pi-info-circle", "severity", "info"], ["size", "small", "stripedRows", "", 3, "value"], [1, "w-2"], [1, "w-5"], [1, "pi", "pi-spinner", "pi-spin", "text-xl"], [1, "pi", "pi-minus", "text-xl"], ["colspan", "3", 1, "text-center"]], template: function CompareDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div")(2, "h2", 5);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "p-button", 7);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("onClick", function CompareDataComponent_Template_p_button_onClick_9_listener() {
        return ctx.refresh("prototype");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-button", 7);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("onClick", function CompareDataComponent_Template_p_button_onClick_11_listener() {
        return ctx.refresh("live");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(13, CompareDataComponent_Conditional_13_Template, 1, 5, "ng-container", 8);
      \u0275\u0275conditionalCreate(14, CompareDataComponent_Conditional_14_Template, 1, 5, "ng-container", 8);
      \u0275\u0275conditionalCreate(15, CompareDataComponent_Conditional_15_Template, 1, 5, "ng-container", 8);
      \u0275\u0275conditionalCreate(16, CompareDataComponent_Conditional_16_Template, 3, 3, "p-message", 9);
      \u0275\u0275template(17, CompareDataComponent_ng_template_17_Template, 10, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "languages.dataCompare.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "languages.dataCompare.description"));
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 14, "languages.refreshProto"))("loading", ctx.projectState.refreshing().prototype);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 16, "languages.refreshLive"))("loading", ctx.projectState.refreshing().live);
      const data_r7 = (tmp_7_0 = ctx.selectedNode()) == null ? null : tmp_7_0.data;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((data_r7 == null ? null : data_r7.baseline) ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((data_r7 == null ? null : data_r7.prototype) ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((data_r7 == null ? null : data_r7.live) ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!data_r7 ? 16 : -1);
    }
  }, dependencies: [NgTemplateOutlet, ButtonModule, Button, MessageModule, Message, TableModule, Table, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareDataComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-data", imports: [NgTemplateOutlet, TranslatePipe, ButtonModule, MessageModule, TableModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.dataCompare.header' | translate }}</h2>
    <p>{{ 'languages.dataCompare.description' | translate }}</p>
  </div>
  <div class="flex flex-column gap-2">
    <p-button
      [label]="'languages.refreshProto' | translate"
      [loading]="projectState.refreshing().prototype"
      (onClick)="refresh('prototype')"
      fluid
      icon="pi pi-refresh"
      outlined
      styleClass="secondary-outline min-w-15rem"
    />
    <p-button
      [label]="'languages.refreshLive' | translate"
      [loading]="projectState.refreshing().live"
      (onClick)="refresh('live')"
      fluid
      icon="pi pi-refresh"
      outlined
      styleClass="secondary-outline min-w-15rem"
    />
  </div>
</div>

@let data = selectedNode()?.data;
@if (data?.baseline) {
  <ng-container [ngTemplateOutlet]="mismatchTable" [ngTemplateOutletContext]="{ title: 'baseline', rows: selectedBase(), loading: projectState.refreshing().baseline }" />
}
@if (data?.prototype) {
  <ng-container [ngTemplateOutlet]="mismatchTable" [ngTemplateOutletContext]="{ title: 'prototype', rows: selectedProto(), loading: projectState.refreshing().prototype }" />
}
@if (data?.live) {
  <ng-container [ngTemplateOutlet]="mismatchTable" [ngTemplateOutletContext]="{ title: 'live', rows: selectedLive(), loading: projectState.refreshing().live }" />
}
@if (!data) {
  <p-message icon="pi pi-info-circle" severity="info">{{ 'pageOptions.description.0' | translate }}</p-message>
}
<ng-template #mismatchTable let-loading="loading" let-rows="rows" let-title="title">
  <h3>{{ 'common.version.' + title | translate }}</h3>
  <p-table [value]="rows" size="small" stripedRows>
    <ng-template #header>
      <tr>
        <th class="w-2">{{ 'common.data' | translate }}</th>
        <th class="w-5">{{ 'common.language.english' | translate }}</th>
        <th class="w-5">{{ 'common.language.french' | translate }}</th>
      </tr>
    </ng-template>
    <ng-template #body let-row>
      <tr>
        <td>
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            {{ 'inventory.header.' + row.label | translate }}
          }
        </td>
        <td>
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            @if (row.en) {
              {{ row.en | translate }}
            } @else {
              <i class="pi pi-minus text-xl"></i>
            }
          }
        </td>
        <td>
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            @if (row.fr) {
              {{ row.fr | translate }}
            } @else {
              <i class="pi pi-minus text-xl"></i>
            }
          }
        </td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td class="text-center" colspan="3">
          @if (loading) {
            <i class="pi pi-spinner pi-spin text-xl"></i>
          } @else {
            {{ 'languages.noMismatch' | translate }}
          }
        </td>
      </tr>
    </ng-template>
  </p-table>
</ng-template>
` }]
  }], null, { selectedNode: [{ type: Input, args: [{ isSignal: true, alias: "selectedNode", required: false }] }], selectedBase: [{ type: Input, args: [{ isSignal: true, alias: "selectedBase", required: false }] }], selectedProto: [{ type: Input, args: [{ isSignal: true, alias: "selectedProto", required: false }] }], selectedLive: [{ type: Input, args: [{ isSignal: true, alias: "selectedLive", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareDataComponent, { className: "CompareDataComponent", filePath: "src/app/views/tasks/compare-languages/compare-data/compare-data.component.ts", lineNumber: 25 });
})();

// src/app/views/tasks/compare-languages/compare-html/compare-html.component.ts
function CompareHtmlComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "common.type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "common.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "common.language.french"));
  }
}
function CompareHtmlComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275classMap(row_r1.en !== row_r1.fr ? "bg-red text-red" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "languages.html." + row_r1.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr);
  }
}
function CompareHtmlComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "languages.noMismatch"));
  }
}
var CompareHtmlComponent = class _CompareHtmlComponent {
  /** Input signal with all table rows */
  htmlRows = input([], ...ngDevMode ? [{ debugName: "htmlRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal to show html mismatches */
  htmlDiffsOnly = signal(true, ...ngDevMode ? [{ debugName: "htmlDiffsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Shows all or mismatched counts of html elements, classes, and attributes in English and French */
  visibleHtmlRows = computed(() => this.htmlDiffsOnly() ? this.htmlRows().filter((r) => r.en !== r.fr) : this.htmlRows(), ...ngDevMode ? [{ debugName: "visibleHtmlRows" }] : (
    /* istanbul ignore next */
    []
  ));
  markForTranslation() {
    marker("languages.html.element");
    marker("languages.html.class");
    marker("languages.html.attribute");
  }
  static \u0275fac = function CompareHtmlComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareHtmlComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareHtmlComponent, selectors: [["aida-compare-html"]], inputs: { htmlRows: [1, "htmlRows"] }, decls: 18, vars: 14, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-14rem", "min-w-max", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["scrollable", "", "scrollHeight", "12rem", "size", "small", "stripedRows", "", 3, "value"], [1, "w-4"], [1, "w-2", "text-right"], [1, "text-right"], ["colspan", "4", 1, "text-center"]], template: function CompareHtmlComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-togglebutton", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("ngModelChange", function CompareHtmlComponent_Template_p_togglebutton_ngModelChange_8_listener($event) {
        return ctx.htmlDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p-table", 6);
      \u0275\u0275template(12, CompareHtmlComponent_ng_template_12_Template, 13, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, CompareHtmlComponent_ng_template_14_Template, 11, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, CompareHtmlComponent_ng_template_16_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "languages.htmlStructure.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "languages.htmlStructure.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.htmlDiffsOnly())("offLabel", \u0275\u0275pipeBind1(9, 10, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(10, 12, "common.toggle.showingDiffs"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.visibleHtmlRows());
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, TableModule, Table, ToggleButtonModule, ToggleButton, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareHtmlComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-html", imports: [FormsModule, TranslatePipe, TableModule, ToggleButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between gap-2">
  <div>
    <h2 class="mt-0">{{ 'languages.htmlStructure.header' | translate }}</h2>
    <p>{{ 'languages.htmlStructure.description' | translate }}</p>
  </div>
  <p-togglebutton
    [ngModel]="htmlDiffsOnly()"
    [offLabel]="'common.toggle.showingAll' | translate"
    [onLabel]="'common.toggle.showingDiffs' | translate"
    (ngModelChange)="htmlDiffsOnly.set($event)"
    class="h-2.75rem w-14rem min-w-max"
    offIcon="pi pi-filter-slash"
    onIcon="pi pi-filter"
  />
</div>
<p-table [value]="visibleHtmlRows()" scrollable scrollHeight="12rem" size="small" stripedRows>
  <ng-template #header>
    <tr>
      <th class="w-4">{{ 'common.type' | translate }}</th>
      <th class="w-4">{{ 'common.name' | translate }}</th>
      <th class="w-2 text-right">{{ 'common.language.english' | translate }}</th>
      <th class="w-2 text-right">{{ 'common.language.french' | translate }}</th>
    </tr>
  </ng-template>
  <ng-template #body let-row>
    <tr [class]="row.en !== row.fr ? 'bg-red text-red' : null">
      <td>{{ 'languages.html.' + row.type | translate }}</td>
      <td>
        <code>{{ row.name }}</code>
      </td>
      <td class="text-right">{{ row.en }}</td>
      <td class="text-right">{{ row.fr }}</td>
    </tr>
  </ng-template>
  <ng-template #emptymessage>
    <tr>
      <td class="text-center" colspan="4">{{ 'languages.noMismatch' | translate }}</td>
    </tr>
  </ng-template>
</p-table>
` }]
  }], null, { htmlRows: [{ type: Input, args: [{ isSignal: true, alias: "htmlRows", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareHtmlComponent, { className: "CompareHtmlComponent", filePath: "src/app/views/tasks/compare-languages/compare-html/compare-html.component.ts", lineNumber: 18 });
})();

// src/app/views/tasks/compare-languages/compare-numbers/compare-numbers.component.ts
function CompareNumbersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 7);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "common.language.english"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.language.french"));
  }
}
function CompareNumbersComponent_ng_template_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mark");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.en.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en.raw);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.en.after);
  }
}
function CompareNumbersComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function CompareNumbersComponent_ng_template_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mark");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.fr.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr.raw);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.fr.after);
  }
}
function CompareNumbersComponent_ng_template_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function CompareNumbersComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, CompareNumbersComponent_ng_template_14_Conditional_2_Template, 6, 3)(3, CompareNumbersComponent_ng_template_14_Conditional_3_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, CompareNumbersComponent_ng_template_14_Conditional_5_Template, 6, 3)(6, CompareNumbersComponent_ng_template_14_Conditional_6_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275classMap(row_r1.match ? null : "bg-red");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r1.en ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r1.fr ? 5 : 6);
  }
}
function CompareNumbersComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noMismatch"), " ");
  }
}
function CompareNumbersComponent_ng_template_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noNumbers"), " ");
  }
}
function CompareNumbersComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 10);
    \u0275\u0275conditionalCreate(2, CompareNumbersComponent_ng_template_16_Conditional_2_Template, 2, 3)(3, CompareNumbersComponent_ng_template_16_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.numberDiffsOnly() ? 2 : 3);
  }
}
var CompareNumbersComponent = class _CompareNumbersComponent {
  /** Input signal with all table rows */
  numberRows = input([], ...ngDevMode ? [{ debugName: "numberRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal to show number mismatches */
  numberDiffsOnly = signal(true, ...ngDevMode ? [{ debugName: "numberDiffsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Shows all or mismatched numbers in English and French */
  visibleRows = computed(() => this.numberDiffsOnly() ? this.numberRows().filter((r) => !r.match) : this.numberRows(), ...ngDevMode ? [{ debugName: "visibleRows" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function CompareNumbersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareNumbersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareNumbersComponent, selectors: [["aida-compare-numbers"]], inputs: { numberRows: [1, "numberRows"] }, decls: 18, vars: 14, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "flex", "justify-content-between"], [1, "mt-0"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-14rem", "min-w-max", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["size", "small", "stripedRows", "", 3, "value"], [1, "w-6"], [1, "pi", "pi-minus", "text-xl"], [1, "text-color-secondary"], ["colspan", "3", 1, "text-center"]], template: function CompareNumbersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-togglebutton", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("ngModelChange", function CompareNumbersComponent_Template_p_togglebutton_ngModelChange_8_listener($event) {
        return ctx.numberDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p-table", 6);
      \u0275\u0275template(12, CompareNumbersComponent_ng_template_12_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, CompareNumbersComponent_ng_template_14_Template, 7, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, CompareNumbersComponent_ng_template_16_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "languages.numbers.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "languages.numbers.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.numberDiffsOnly())("offLabel", \u0275\u0275pipeBind1(9, 10, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(10, 12, "common.toggle.showingDiffs"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.visibleRows());
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, TableModule, Table, ToggleButtonModule, ToggleButton, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareNumbersComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-numbers", imports: [FormsModule, TranslatePipe, TableModule, ToggleButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between">
  <div>
    <h2 class="mt-0">{{ 'languages.numbers.header' | translate }}</h2>
    <p>{{ 'languages.numbers.description' | translate }}</p>
  </div>
  <p-togglebutton
    [ngModel]="numberDiffsOnly()"
    [offLabel]="'common.toggle.showingAll' | translate"
    [onLabel]="'common.toggle.showingDiffs' | translate"
    (ngModelChange)="numberDiffsOnly.set($event)"
    class="h-2.75rem w-14rem min-w-max"
    offIcon="pi pi-filter-slash"
    onIcon="pi pi-filter"
  />
</div>
<p-table [value]="visibleRows()" size="small" stripedRows>
  <ng-template #header>
    <tr>
      <th class="w-6">{{ 'common.language.english' | translate }}</th>
      <th class="w-6">{{ 'common.language.french' | translate }}</th>
    </tr>
  </ng-template>
  <ng-template #body let-row>
    <tr [class]="row.match ? null : 'bg-red'">
      <td>
        @if (row.en) {
          <span class="text-color-secondary">{{ row.en.before }}</span>
          <mark>{{ row.en.raw }}</mark>
          <span class="text-color-secondary">{{ row.en.after }}</span>
        } @else {
          <i class="pi pi-minus text-xl"></i>
        }
      </td>
      <td>
        @if (row.fr) {
          <span class="text-color-secondary">{{ row.fr.before }}</span>
          <mark>{{ row.fr.raw }}</mark>
          <span class="text-color-secondary">{{ row.fr.after }}</span>
        } @else {
          <i class="pi pi-minus text-xl"></i>
        }
      </td>
    </tr>
  </ng-template>
  <ng-template #emptymessage>
    <tr>
      <td class="text-center" colspan="3">
        @if (numberDiffsOnly()) {
          {{ 'languages.noMismatch' | translate }}
        } @else {
          {{ 'languages.noNumbers' | translate }}
        }
      </td>
    </tr>
  </ng-template>
</p-table>
` }]
  }], null, { numberRows: [{ type: Input, args: [{ isSignal: true, alias: "numberRows", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareNumbersComponent, { className: "CompareNumbersComponent", filePath: "src/app/views/tasks/compare-languages/compare-numbers/compare-numbers.component.ts", lineNumber: 17 });
})();

// src/app/views/tasks/compare-languages/compare-web/compare-web.component.ts
var _c02 = ["enFrame"];
var _c12 = ["frFrame"];
var _c22 = ["wrapper"];
function CompareWebComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function CompareWebComponent_Conditional_10_Conditional_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFullscreen());
    });
    \u0275\u0275elementEnd();
  }
}
function CompareWebComponent_Conditional_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function CompareWebComponent_Conditional_10_Conditional_15_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFullscreen());
    });
    \u0275\u0275elementEnd();
  }
}
function CompareWebComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6, 0)(2, "div", 7)(3, "div", 8)(4, "h2", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CompareWebComponent_Conditional_10_Conditional_7_Template, 1, 0, "p-button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "iframe", 11, 1);
    \u0275\u0275listener("load", function CompareWebComponent_Conditional_10_Template_iframe_load_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFrameLoad());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "h2", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, CompareWebComponent_Conditional_10_Conditional_15_Template, 1, 0, "p-button", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "iframe", 11, 2);
    \u0275\u0275listener("load", function CompareWebComponent_Conditional_10_Template_iframe_load_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFrameLoad());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "languages.webView.englishPage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isFullScreen() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("srcdoc", ctx_r2.iframeEnglish(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "languages.webView.frenchPage"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isFullScreen() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("srcdoc", ctx_r2.iframeFrench(), \u0275\u0275sanitizeHtml);
  }
}
var CompareWebComponent = class _CompareWebComponent {
  styleCardService = inject(StyleCardService);
  iframeEnglish = input(void 0, ...ngDevMode ? [{ debugName: "iframeEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  iframeFrench = input(void 0, ...ngDevMode ? [{ debugName: "iframeFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  enFrame = viewChild.required("enFrame");
  frFrame = viewChild.required("frFrame");
  loadedCount = 0;
  isFullScreen = signal(false, ...ngDevMode ? [{ debugName: "isFullScreen" }] : (
    /* istanbul ignore next */
    []
  ));
  onFullscreenChange() {
    this.isFullScreen.set(document.fullscreenElement === this.wrapper()?.nativeElement);
  }
  wrapper = viewChild("wrapper", ...ngDevMode ? [{ debugName: "wrapper" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleFullscreen() {
    if (document.fullscreenElement)
      document.exitFullscreen();
    else
      this.wrapper()?.nativeElement.requestFullscreen();
  }
  onFrameLoad() {
    if (++this.loadedCount < 2)
      return;
    this.loadedCount = 0;
    const en = this.enFrame().nativeElement;
    const fr = this.frFrame().nativeElement;
    this.link(en, fr);
    this.link(fr, en);
  }
  source = null;
  timer;
  link(from, to) {
    const a = from.contentWindow, b = to.contentWindow;
    a.addEventListener("scroll", () => {
      if (this.source && this.source !== a)
        return;
      this.source = a;
      const maxA = a.document.documentElement.scrollHeight - a.innerHeight;
      const maxB = b.document.documentElement.scrollHeight - b.innerHeight;
      const anchors = this.buildAnchors(a, b, maxA, maxB);
      const target = anchors ? this.mapScroll(a.scrollY, anchors.from, anchors.to) : maxA > 0 ? a.scrollY / maxA * maxB : 0;
      b.scrollTo(0, target);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.source = null, 100);
    });
  }
  /** Pairs visible headings by order. Returns null if the counts differ. */
  buildAnchors(a, b, maxA, maxB) {
    const sel = "h1,h2,h3,h4,h5,h6";
    const visible = (el) => el.getClientRects().length > 0;
    const ha = Array.from(a.document.querySelectorAll(sel)).filter(visible);
    const hb = Array.from(b.document.querySelectorAll(sel)).filter(visible);
    if (ha.length === 0 || ha.length !== hb.length)
      return null;
    const pos = (el, w, max) => Math.min(el.getBoundingClientRect().top + w.scrollY, max);
    return {
      from: [0, ...ha.map((el) => pos(el, a, maxA)), maxA],
      to: [0, ...hb.map((el) => pos(el, b, maxB)), maxB]
    };
  }
  mapScroll(y, from, to) {
    for (let i = 1; i < from.length; i++) {
      if (y <= from[i]) {
        const span = from[i] - from[i - 1];
        const t = span > 0 ? (y - from[i - 1]) / span : 0;
        return to[i - 1] + t * (to[i] - to[i - 1]);
      }
    }
    return to[to.length - 1];
  }
  static \u0275fac = function CompareWebComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareWebComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareWebComponent, selectors: [["aida-compare-web"]], viewQuery: function CompareWebComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.enFrame, _c02, 5)(ctx.frFrame, _c12, 5)(ctx.wrapper, _c22, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, hostBindings: function CompareWebComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("fullscreenchange", function CompareWebComponent_fullscreenchange_HostBindingHandler() {
        return ctx.onFullscreenChange();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { iframeEnglish: [1, "iframeEnglish"], iframeFrench: [1, "iframeFrench"] }, decls: 11, vars: 10, consts: [["wrapper", ""], ["enFrame", ""], ["frFrame", ""], [1, "flex", "justify-content-between"], [1, "mt-0"], ["icon", "pi pi-window-maximize", "outlined", "", "styleClass", "secondary-outline", 3, "onClick", "label"], [1, "flex", "gap-2", "surface-card", "h-75vh"], [1, "flex", "flex-column", "flex-1", "min-w-0"], [1, "flex", "justify-content-between", "gap-2", "border-bottom-1", "surface-border"], [1, "px-4", "pt-4", "pb-2", "m-0", "h-4rem"], ["icon", "pi pi-times", "rounded", "", "text", ""], ["sandbox", "allow-same-origin", 1, "w-full", "flex-1", "border-none", 3, "load", "srcdoc"], ["icon", "pi pi-times", "rounded", "", "text", "", 3, "onClick"]], template: function CompareWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "h2", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("onClick", function CompareWebComponent_Template_p_button_onClick_8_listener() {
        return ctx.toggleFullscreen();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, CompareWebComponent_Conditional_10_Template, 18, 14, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "languages.webView.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "languages.webView.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 8, "common.fullScreen"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.iframeEnglish() && ctx.iframeFrench() ? 10 : -1);
    }
  }, dependencies: [ButtonModule, Button, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareWebComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-web", imports: [TranslatePipe, ButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex justify-content-between">
  <div>
    <h2 class="mt-0">{{ 'languages.webView.header' | translate }}</h2>
    <p>{{ 'languages.webView.description' | translate }}</p>
  </div>
  <p-button [label]="'common.fullScreen' | translate" (onClick)="toggleFullscreen()" icon="pi pi-window-maximize" outlined styleClass="secondary-outline" />
</div>

@if (iframeEnglish() && iframeFrench()) {
  <div class="flex gap-2 surface-card h-75vh" #wrapper>
    <div [class]="styleCardService.cardStyles(undefined, undefined, true)" class="flex flex-column flex-1 min-w-0">
      <div class="flex justify-content-between gap-2 border-bottom-1 surface-border">
        <h2 class="px-4 pt-4 pb-2 m-0 h-4rem">{{ 'languages.webView.englishPage' | translate }}</h2>
        @if (isFullScreen()) {
          <p-button (onClick)="toggleFullscreen()" icon="pi pi-times" rounded text />
        }
      </div>
      <iframe [srcdoc]="iframeEnglish()" (load)="onFrameLoad()" class="w-full flex-1 border-none" #enFrame sandbox="allow-same-origin"></iframe>
    </div>
    <div [class]="styleCardService.cardStyles(undefined, undefined, true)" class="flex flex-column flex-1 min-w-0">
      <div class="flex justify-content-between gap-2 border-bottom-1 surface-border">
        <h2 class="px-4 pt-4 pb-2 m-0 h-4rem">{{ 'languages.webView.frenchPage' | translate }}</h2>
        @if (isFullScreen()) {
          <p-button (onClick)="toggleFullscreen()" icon="pi pi-times" rounded text />
        }
      </div>
      <iframe [srcdoc]="iframeFrench()" (load)="onFrameLoad()" class="w-full flex-1 border-none" #frFrame sandbox="allow-same-origin"></iframe>
    </div>
  </div>
}
` }]
  }], null, { iframeEnglish: [{ type: Input, args: [{ isSignal: true, alias: "iframeEnglish", required: false }] }], iframeFrench: [{ type: Input, args: [{ isSignal: true, alias: "iframeFrench", required: false }] }], enFrame: [{ type: ViewChild, args: ["enFrame", { isSignal: true }] }], frFrame: [{ type: ViewChild, args: ["frFrame", { isSignal: true }] }], onFullscreenChange: [{
    type: HostListener,
    args: ["document:fullscreenchange"]
  }], wrapper: [{ type: ViewChild, args: ["wrapper", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareWebComponent, { className: "CompareWebComponent", filePath: "src/app/views/tasks/compare-languages/compare-web/compare-web.component.ts", lineNumber: 16 });
})();

// src/app/views/tasks/compare-languages/compare-html/structure-compare.ts
var MAP_KEY = { element: "elements", class: "classes", attribute: "attributes" };
function count(doc) {
  const root = (doc.querySelector("main") ?? doc.body).cloneNode(true);
  root.querySelectorAll("script,style,noscript").forEach((n) => n.remove());
  const elements = /* @__PURE__ */ new Map();
  const classes = /* @__PURE__ */ new Map();
  const attributes = /* @__PURE__ */ new Map();
  const bump = (m, k) => m.set(k, (m.get(k) ?? 0) + 1);
  root.querySelectorAll("*").forEach((el) => {
    bump(elements, el.tagName.toLowerCase());
    el.classList.forEach((c) => bump(classes, c));
    for (const name of el.getAttributeNames()) {
      if (name === "class")
        continue;
      if (name.startsWith("data-") || name.startsWith("aria-") || ["role", "style", "id"].includes(name)) {
        bump(attributes, name);
      }
    }
  });
  return { elements, classes, attributes };
}
function compareHTML(docEN, docFR) {
  const en = count(docEN);
  const fr = count(docFR);
  const rows = [];
  for (const type of ["element", "class", "attribute"]) {
    const a = en[MAP_KEY[type]];
    const b = fr[MAP_KEY[type]];
    for (const name of /* @__PURE__ */ new Set([...a.keys(), ...b.keys()])) {
      rows.push({ type, name, en: a.get(name) ?? 0, fr: b.get(name) ?? 0 });
    }
  }
  return rows.sort((x, y) => Math.abs(y.en - y.fr) - Math.abs(x.en - x.fr) || x.name.localeCompare(y.name));
}

// src/app/views/tasks/compare-languages/compare-numbers/number-compare.ts
var BLOCK = "h1,h2,h3,h4,h5,h6,p,li,td,th,dt,dd,caption,figcaption,summary";
var CONTEXT = 40;
var WORDS = {
  en: { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 },
  fr: { deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10 }
};
var DIGITS = {
  en: String.raw`(?<![\d.,])\d{1,3}(?:,\d{3})+(?:\.\d+)?(?!\d)|\d+(?:\.\d+)?`,
  fr: String.raw`(?<![\d.,])\d{1,3}(?:[ \u00A0\u2009\u202F]\d{3})+(?:,\d+)?(?!\d)|\d+(?:,\d+)?`
};
var TIME = {
  en: String.raw`(?<![\d.,:])(?:1[01]|[1-9])[ \u00A0]pm(?![\p{L}\d])`,
  fr: String.raw`(?<![\d.,:])(?:1[3-9]|2[0-3])[ \u00A0\u202F]h(?![\p{L}\d])`
};
var PHONE = String.raw`(?<![\d-])(?:\d-)?\d{3}-\d{3}-\d{4}(?![\d-])`;
function timeValue(raw, lang) {
  if (lang === "en") {
    const m2 = raw.match(/^(\d{1,2})[ \u00A0]pm$/i);
    return m2 ? `time:${+m2[1] + 12}` : null;
  }
  const m = raw.match(/^(\d{2})[ \u00A0\u202F]h$/i);
  return m ? `time:${m[1]}` : null;
}
function numberRegex(lang) {
  const words = Object.keys(WORDS[lang]).join("|");
  return new RegExp(`${PHONE}|${TIME[lang]}|${DIGITS[lang]}|(?<![\\p{L}\\d])(?:${words})(?![\\p{L}\\d])`, "giu");
}
function normalize(raw, lang) {
  if (/^(?:\d-)?\d{3}-\d{3}-\d{4}$/.test(raw))
    return `phone:${raw.replace(/\D/g, "")}`;
  const time = timeValue(raw, lang);
  if (time)
    return time;
  const word = WORDS[lang][raw.toLowerCase()];
  if (word !== void 0)
    return String(word);
  const cleaned = lang === "en" ? raw.replace(/,/g, "") : raw.replace(/[ \u00A0\u2009\u202F]/g, "").replace(",", ".");
  return String(parseFloat(cleaned));
}
function extractNumbers(doc, lang) {
  const root = doc.querySelector("main") ?? doc.body;
  const hits = [];
  root.querySelectorAll(BLOCK).forEach((el) => {
    const clone = el.cloneNode(true);
    clone.querySelectorAll(`${BLOCK},script,style`).forEach((n) => n.remove());
    const text = (clone.textContent ?? "").replace(/[ \t\r\n]+/g, " ").trim();
    for (const m of text.matchAll(numberRegex(lang))) {
      const start = m.index;
      hits.push({
        raw: m[0],
        value: normalize(m[0], lang),
        before: text.slice(Math.max(0, start - CONTEXT), start),
        after: text.slice(start + m[0].length, start + m[0].length + CONTEXT)
      });
    }
  });
  return hits;
}
function alignNumbers(en, fr) {
  const n = en.length, m = fr.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i2 = n - 1; i2 >= 0; i2--)
    for (let j2 = m - 1; j2 >= 0; j2--)
      dp[i2][j2] = en[i2].value === fr[j2].value ? dp[i2 + 1][j2 + 1] + 1 : Math.max(dp[i2 + 1][j2], dp[i2][j2 + 1]);
  const raw = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (en[i].value === fr[j].value)
      raw.push({ en: en[i++], fr: fr[j++] });
    else if (dp[i + 1][j] >= dp[i][j + 1])
      raw.push({ en: en[i++] });
    else
      raw.push({ fr: fr[j++] });
  }
  while (i < n)
    raw.push({ en: en[i++] });
  while (j < m)
    raw.push({ fr: fr[j++] });
  const rows = [];
  for (let k = 0; k < raw.length; k++) {
    const cur = raw[k], next = raw[k + 1];
    if (next && (cur.en && !cur.fr && next.fr && !next.en || cur.fr && !cur.en && next.en && !next.fr)) {
      rows.push({ en: cur.en ?? next.en, fr: cur.fr ?? next.fr, match: false });
      k++;
    } else {
      rows.push(__spreadProps(__spreadValues({}, cur), { match: !!(cur.en && cur.fr) }));
    }
  }
  return rows;
}

// src/app/views/tasks/compare-languages/compare-languages.component.ts
var _c03 = ["data"];
var _c13 = ["html"];
var _c23 = ["numbers"];
var _c3 = ["ai"];
var _c4 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.tab;
function CompareLanguagesComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompareLanguagesComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const summary_r1 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", summary_r1);
  }
}
function CompareLanguagesComponent_Conditional_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pageOptions.description.0"));
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("severity", ctx_r1.dataProblems().live === 0 ? "success" : "danger")("value", ctx_r1.dataProblems().base + " / " + ctx_r1.dataProblems().proto + " / " + ctx_r1.dataProblems().live);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("severity", ctx_r1.aiProblems().result === 0 ? "success" : "danger")("value", ctx_r1.aiProblems().result);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabs", 14)(1, "p-tablist")(2, "p-tab", 15)(3, "div", 16)(4, "span", 17);
    \u0275\u0275text(5, "checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275conditionalCreate(8, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_8_Template, 1, 0, "i", 18)(9, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_9_Template, 1, 2, "p-badge", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p-tab", 20)(11, "div", 16)(12, "span", 17);
    \u0275\u0275text(13, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275element(16, "p-badge", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p-tab", 21)(18, "div", 16)(19, "span", 17);
    \u0275\u0275text(20, "numbers");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275element(23, "p-badge", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "p-tab", 22)(25, "div", 16)(26, "span", 17);
    \u0275\u0275text(27, "auto_awesome");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275conditionalCreate(30, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_30_Template, 1, 0, "i", 18)(31, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_31_Template, 1, 0, "i", 23)(32, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_32_Template, 1, 2, "p-badge", 19)(33, CompareLanguagesComponent_Conditional_1_Conditional_18_Conditional_33_Template, 1, 0, "i", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "p-tab", 25)(35, "div", 16)(36, "span", 17);
    \u0275\u0275text(37, "compare");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "p-tabpanels", 26)(41, "p-tabpanel", 15);
    \u0275\u0275template(42, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_42_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p-tabpanel", 20);
    \u0275\u0275template(44, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_44_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p-tabpanel", 21);
    \u0275\u0275template(46, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_46_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p-tabpanel", 22);
    \u0275\u0275template(48, CompareLanguagesComponent_Conditional_1_Conditional_18_ng_container_48_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p-tabpanel", 25);
    \u0275\u0275element(50, "aida-compare-web", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const data_r3 = \u0275\u0275reference(5);
    const html_r4 = \u0275\u0275reference(7);
    const numbers_r5 = \u0275\u0275reference(9);
    const ai_r6 = \u0275\u0275reference(11);
    \u0275\u0275property("value", ctx_r1.activeTab());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 18, "languages.dataCompare.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.projectState.refreshing().baseline || ctx_r1.projectState.refreshing().prototype || ctx_r1.projectState.refreshing().live ? 8 : 9);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 20, "languages.htmlStructure.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r1.htmlProblems() === 0 ? "success" : "danger")("value", ctx_r1.htmlProblems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 22, "languages.numbers.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("severity", ctx_r1.numberProblems() === 0 ? "success" : "danger")("value", ctx_r1.numberProblems());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 24, "languages.aiSummary.tab"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.aiProblems().status === "pending" ? 30 : ctx_r1.aiProblems().status === "error" ? 31 : ctx_r1.aiProblems().status === "done" ? 32 : 33);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 26, "languages.webView.tab"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", data_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", html_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", numbers_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ai_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("iframeEnglish", ctx_r1.iframeEnglish())("iframeFrench", ctx_r1.iframeFrench());
  }
}
function CompareLanguagesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "div");
    \u0275\u0275element(10, "aida-compare-select", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275template(12, CompareLanguagesComponent_Conditional_1_ng_container_12_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "h2", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, CompareLanguagesComponent_Conditional_1_Conditional_17_Template, 3, 3, "p-message", 13)(18, CompareLanguagesComponent_Conditional_1_Conditional_18_Template, 51, 28, "p-tabs", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const summary_r1 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 13, "languages._title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 15, "languages.description"), "", \u0275\u0275pipeBind1(6, 17, "languages.description2"));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles());
    \u0275\u0275advance();
    \u0275\u0275property("versionsToShow", 1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", summary_r1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 19, "languages.tools.header"));
    const page_r7 = ctx_r1.compareService.selectedPage();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!page_r7 ? 17 : 18);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pageOptions.description.0"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.summary.noProblems"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "languages.summary.toReview", \u0275\u0275pureFunction1(4, _c4, ctx_r1.totalProblems())));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 19);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("severity", row_r9.state === "problem" ? "danger" : "success")("value", row_r9.detail);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 19);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("severity", row_r9.state === "problem" ? "danger" : "success")("value", row_r9.count);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_10_Conditional_0_Template, 1, 2, "p-badge", 19)(1, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_10_Conditional_1_Template, 1, 2, "p-badge", 19);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r9.detail ? 0 : 1);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementStart(2, "p-button", 42);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onClick", function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openDialog.set(null));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", row_r12.template);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 2, "common.close"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 40);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("visibleChange", function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_Template_p_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView($event || ctx_r1.openDialog.set(null));
    });
    \u0275\u0275template(2, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_ng_template_2_Template, 4, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 4, ctx.label))("maximizable", true)("modal", true)("visible", true);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "p-button", 35);
    \u0275\u0275listener("onClick", function CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Template_p_button_onClick_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.summaryMode() ? ctx_r1.openTab(row_r9.tab) : ctx_r1.openDialog.set(row_r9));
    });
    \u0275\u0275elementStart(2, "div", 36)(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_8_Template, 1, 0, "i", 18)(9, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_9_Template, 1, 0, "i", 23)(10, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_10_Template, 2, 1)(11, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_11_Template, 1, 0, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275conditionalCreate(16, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_16_Template, 1, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "i");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Conditional_18_Template, 4, 6, "p-dialog", 39);
  }
  if (rf & 2) {
    let tmp_26_0;
    const row_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.activeTab() === row_r9.tab && !ctx_r1.summaryMode() ? "h-3rem flex justify-content-between gap-2 border-1 secondary-border bg-primary-light hover:bg-primary-light" : "h-3rem flex justify-content-between gap-2")("text", ctx_r1.activeTab() !== row_r9.tab || ctx_r1.summaryMode());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, row_r9.label));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r9.state === "loading" ? 8 : row_r9.state === "error" ? 9 : row_r9.state === "ok" || row_r9.state === "problem" ? 10 : 11);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(row_r9.state === "problem" || row_r9.state === "error" ? "text-red" : row_r9.state === "ok" ? "text-green" : "text-color-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 14, "languages.summary." + row_r9.state, \u0275\u0275pureFunction1(17, _c4, row_r9.count)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r9.state === "loading" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.summaryMode() ? "pi pi-question-circle text-primary" : "pi pi-chevron-right text-color-secondary");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_26_0 = ctx_r1.openDialog()) ? 18 : -1, tmp_26_0);
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "a", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.AidaLinks.ProjectLanguages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "languages._title"));
  }
}
function CompareLanguagesComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h3", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CompareLanguagesComponent_ng_template_2_Conditional_4_Conditional_4_Template, 3, 3, "span", 31)(5, CompareLanguagesComponent_ng_template_2_Conditional_4_Conditional_5_Template, 3, 6, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 33);
    \u0275\u0275repeaterCreate(7, CompareLanguagesComponent_ng_template_2_Conditional_4_For_8_Template, 19, 19, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CompareLanguagesComponent_ng_template_2_Conditional_4_Conditional_9_Template, 5, 4, "div", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "languages.tools.header"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalProblems() === 0 ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.summaryRows());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.summaryMode() ? 9 : -1);
  }
}
function CompareLanguagesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CompareLanguagesComponent_ng_template_2_Conditional_3_Template, 3, 3, "p-message", 13)(4, CompareLanguagesComponent_ng_template_2_Conditional_4_Template, 10, 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "languages.summary.header"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.compareService.selectedPage() ? 3 : 4);
  }
}
function CompareLanguagesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-data", 45);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("selectedBase", ctx_r1.selectedBase())("selectedLive", ctx_r1.selectedLive())("selectedNode", ctx_r1.selectedNode())("selectedProto", ctx_r1.selectedProto());
  }
}
function CompareLanguagesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-html", 46);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("htmlRows", ctx_r1.htmlRows());
  }
}
function CompareLanguagesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-numbers", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("numberRows", ctx_r1.numberRows());
  }
}
function CompareLanguagesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-compare-ai-lang", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("aiEnglish", ctx_r1.aiEnglish())("aiFrench", ctx_r1.aiFrench());
  }
}
var CompareLanguagesComponent = class _CompareLanguagesComponent {
  injector = inject(Injector);
  sanitizer = inject(DomSanitizer);
  projectState = inject(ProjectStateService);
  compareService = inject(CompareService);
  fetchService = inject(FetchService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  styleCardService = inject(StyleCardService);
  reviewLanguagesService = inject(ReviewLanguagesService);
  summaryMode = input(false, ...ngDevMode ? [{ debugName: "summaryMode" }] : (
    /* istanbul ignore next */
    []
  ));
  activeTab = signal("0", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  openDialog = signal(null, ...ngDevMode ? [{ debugName: "openDialog" }] : (
    /* istanbul ignore next */
    []
  ));
  AidaLinks = AidaLinks;
  /** Signals for data comparison */
  selectedNode = signal(void 0, ...ngDevMode ? [{ debugName: "selectedNode" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedBase = signal(void 0, ...ngDevMode ? [{ debugName: "selectedBase" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedProto = signal(void 0, ...ngDevMode ? [{ debugName: "selectedProto" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedLive = signal(void 0, ...ngDevMode ? [{ debugName: "selectedLive" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for HTML comparison: a count of all elements, classes, and attributes in English and French */
  htmlRows = signal([], ...ngDevMode ? [{ debugName: "htmlRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal for numbers comparison: an extract of all numbers with context */
  numberRows = signal([], ...ngDevMode ? [{ debugName: "numberRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signals for AI summary: cleaned up HTML strings*/
  aiEnglish = signal("", ...ngDevMode ? [{ debugName: "aiEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  aiFrench = signal("", ...ngDevMode ? [{ debugName: "aiFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signals for web view: cleaned up SafeHtml */
  iframeEnglish = signal(void 0, ...ngDevMode ? [{ debugName: "iframeEnglish" }] : (
    /* istanbul ignore next */
    []
  ));
  iframeFrench = signal(void 0, ...ngDevMode ? [{ debugName: "iframeFrench" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Computed problems */
  dataProblems = computed(() => {
    return { base: (this.selectedBase() ?? []).length, proto: (this.selectedProto() ?? []).length, live: (this.selectedLive() ?? []).length };
  }, ...ngDevMode ? [{ debugName: "dataProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  htmlProblems = computed(() => {
    return this.htmlRows().filter((r) => r.en !== r.fr).length;
  }, ...ngDevMode ? [{ debugName: "htmlProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  numberProblems = computed(() => {
    return this.numberRows().filter((r) => !r.match).length;
  }, ...ngDevMode ? [{ debugName: "numberProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  aiProblems = computed(() => {
    const page = this.compareService.selectedPage();
    return { status: this.reviewLanguagesService.getAiJobStatus(page), result: this.reviewLanguagesService.getAiResponse(page).length };
  }, ...ngDevMode ? [{ debugName: "aiProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  totalProblems = computed(() => this.dataProblems().live + this.htmlProblems() + this.numberProblems() + this.aiProblems().result, ...ngDevMode ? [{ debugName: "totalProblems" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect((onCleanup) => {
      const bothPaths = this.projectState.getBothPaths(this.compareService.selectedPage());
      if (!bothPaths)
        return;
      const node = this.projectState.findNodeByPath(this.projectState.getProject().projectData, bothPaths.en, "en");
      if (node) {
        this.selectedNode.set(node);
        this.selectedBase.set(this.findLanguageMismatches(node.data, "baseline"));
        this.selectedProto.set(this.findLanguageMismatches(node.data, "prototype"));
        this.selectedLive.set(this.findLanguageMismatches(node.data, "live"));
      }
      const version = this.compareService.selectedSource();
      const { owner, repo } = this.projectState.getProject().github;
      const urlEN = this.fetchService.generateUrl(bothPaths.en, version, owner, repo);
      const urlFR = this.fetchService.generateUrl(bothPaths.fr, version, owner, repo);
      let stale = false;
      onCleanup(() => stale = true);
      this.setHTML(urlEN, urlFR, () => stale);
    });
  }
  /** Fxn for data comparison: finds any mismatched baseline, prototype, or live data */
  findLanguageMismatches(data, version) {
    const day = (iso) => iso ? new Date(iso).toLocaleDateString("en-CA", { timeZone: "America/Toronto" }) : "";
    const list = (s) => (s ?? "").split(";").map((x) => x.trim().toLowerCase()).filter(Boolean).sort().join("; ");
    const en = data[version]?.en;
    const fr = data[version]?.fr;
    if (!en || !fr)
      return [];
    const out = [];
    const add = (label, a, b) => {
      if (a !== b)
        out.push({ label, en: String(a ?? ""), fr: String(b ?? "") });
    };
    add("is404", en.is404, fr.is404);
    add("iaOrphan", en.isOrphan, fr.isOrphan);
    add("noindex", en.noindex, fr.noindex);
    add("isArchived", en.isArchived, fr.isArchived);
    add("linksToPortal", en.linksToPortal, fr.linksToPortal);
    add("linksToSignIn", en.linksToSignIn, fr.linksToSignIn);
    add("hasChatbot", en.hasChatbot, fr.hasChatbot);
    if (list(en.owner) !== list(fr.owner))
      out.push({ label: "owner", en: en.owner ?? "", fr: fr.owner ?? "" });
    if (list(en.email) !== list(fr.email))
      out.push({ label: "email", en: en.email ?? "", fr: fr.email ?? "" });
    add("lastPublished", day(en.lastPublished), day(fr.lastPublished));
    add("lastModified", day(en.lastModified), day(fr.lastModified));
    add("linkCount", en.linkCount, fr.linkCount);
    add("template", en.template, fr.template);
    const expectedFrParent = en.parentPath ? this.projectState.getBothPaths(en.parentPath)?.fr ?? "" : "";
    if (expectedFrParent !== (fr.parentPath ?? "")) {
      out.push({ label: "parentPath", en: en.parentPath ?? "", fr: fr.parentPath ?? "" });
    }
    marker("inventory.header.parentPath");
    return out;
  }
  /** Fxn for all other comparisons: HTML element counts, numbers comparison, AI html, and iFrame html */
  setHTML(urlEN, urlFR, isStale) {
    return __async(this, null, function* () {
      const htmlEN = yield this.fetchService.fetchContent(urlEN, "both");
      const htmlFR = yield this.fetchService.fetchContent(urlFR, "both");
      this.htmlNormalizationService.updateRelativeURLs(htmlEN, "https://www.canada.ca");
      this.htmlNormalizationService.updateRelativeURLs(htmlFR, "https://www.canada.ca");
      const htmlComparison = compareHTML(htmlEN, htmlFR);
      const numberComparison = alignNumbers(extractNumbers(htmlEN, "en"), extractNumbers(htmlFR, "fr"));
      const srcEN = this.toSrcdoc(htmlEN);
      const srcFR = this.toSrcdoc(htmlFR);
      if (isStale())
        return;
      this.htmlRows.set(htmlComparison);
      this.numberRows.set(numberComparison);
      this.aiEnglish.set(this.toPromptHtml(htmlEN));
      this.aiFrench.set(this.toPromptHtml(htmlFR));
      this.iframeEnglish.set(srcEN);
      this.iframeFrench.set(srcFR);
    });
  }
  /** Converts doc to SafeHtml for iFrame comparison */
  toSrcdoc(doc) {
    const style = doc.createElement("style");
    style.textContent = "a, button { pointer-events: none !important; }";
    doc.head.appendChild(style);
    return this.sanitizer.bypassSecurityTrustHtml("<!DOCTYPE html>" + doc.documentElement.outerHTML);
  }
  /** Converts doc to string for AI prompt */
  toPromptHtml(doc) {
    const main = (doc.querySelector("main") ?? doc.body).cloneNode(true);
    main.querySelectorAll("script,style,noscript,svg,iframe,img").forEach((n) => n.remove());
    main.querySelectorAll("*").forEach((el) => {
      for (const attr of Array.from(el.attributes)) {
        if (!(el.tagName === "A" && attr.name === "href"))
          el.removeAttribute(attr.name);
      }
    });
    return main.innerHTML.replace(/[ \t\r\n]+/g, " ").trim();
  }
  /** Template references */
  data = viewChild.required("data");
  html = viewChild.required("html");
  numbers = viewChild.required("numbers");
  ai = viewChild.required("ai");
  /** Gets a summary of all problems */
  summaryRows = computed(() => {
    const dataCounts = this.dataProblems();
    const htmlCount = this.htmlProblems();
    const numberCount = this.numberProblems();
    const ai = this.aiProblems();
    const countState = (n) => n === 0 ? "ok" : "problem";
    marker("languages.summary.ok");
    marker("languages.summary.problem");
    marker("languages.summary.loading");
    marker("languages.summary.error");
    marker("languages.summary.notRun");
    const aiState = ai.status === "pending" ? "loading" : ai.status === "error" ? "error" : ai.status === "done" ? countState(ai.result) : "notRun";
    const dataState = this.projectState.isRefreshing() ? "loading" : countState(dataCounts.live);
    return [
      {
        tab: "0",
        template: this.data(),
        icon: "checklist",
        label: "languages.dataCompare.tab",
        state: dataState,
        count: dataCounts.live,
        detail: `${dataCounts.base} / ${dataCounts.proto} / ${dataCounts.live}`
      },
      { tab: "1", template: this.html(), icon: "code", label: "languages.htmlStructure.tab", state: countState(htmlCount), count: htmlCount },
      { tab: "2", template: this.numbers(), icon: "numbers", label: "languages.numbers.tab", state: countState(numberCount), count: numberCount },
      { tab: "3", template: this.ai(), icon: "auto_awesome", label: "languages.aiSummary.tab", state: aiState, count: ai.result }
    ];
  }, ...ngDevMode ? [{ debugName: "summaryRows" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Changes tabs and scrolls to tab */
  openTab(tab) {
    this.activeTab.set(tab);
    afterNextRender(() => {
      const el = document.getElementById("compare-tools");
      if (!el)
        return;
      window.scrollTo({ left: 0, top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
    }, { injector: this.injector });
  }
  static \u0275fac = function CompareLanguagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareLanguagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareLanguagesComponent, selectors: [["aida-compare-languages"]], viewQuery: function CompareLanguagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.data, _c03, 5)(ctx.html, _c13, 5)(ctx.numbers, _c23, 5)(ctx.ai, _c3, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(4);
    }
  }, inputs: { summaryMode: [1, "summaryMode"] }, decls: 12, vars: 1, consts: [["summary", ""], ["data", ""], ["html", ""], ["numbers", ""], ["ai", ""], ["headless", ""], [4, "ngTemplateOutlet"], ["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "gap-2"], [3, "versionsToShow"], [1, "min-w-max"], ["id", "compare-tools", 1, "mt-0"], ["icon", "pi pi-info-circle", "severity", "info"], [1, "mt-3", 3, "value"], ["value", "0"], [1, "flex", "align-items-center", "gap-2"], [1, "material-icons-outlined"], [1, "pi", "pi-spin", "pi-spinner", "text-primary", "text-lg"], [3, "severity", "value"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "pi", "pi-exclamation-circle", "text-red", "text-lg"], [1, "pi", "pi-question-circle", "text-blue", "text-lg"], ["value", "4"], [1, "border-1", "border-top-none", "border-round-bottom", "surface-border"], [3, "iframeEnglish", "iframeFrench"], [1, "mt-0"], [1, "flex", "justify-content-between", "align-items-center", "gap-4"], [1, "m-0"], [1, "text-green", "pr-2"], [1, "text-red", "pr-2"], [1, "list-none", "mx-0", "my-1", "p-0"], [1, "flex", "justify-content-end", "align-items-center", "gap-2", "mt-4", "text-primary", "hover:text-primary"], ["fluid", "", 3, "onClick", "styleClass", "text"], [1, "flex", "gap-2", "align-items-center"], [1, "flex", "gap-1", "align-items-center"], [1, "loading-dots", "-ml-1"], ["styleClass", "w-6", 3, "header", "maximizable", "modal", "visible"], ["styleClass", "w-6", 3, "visibleChange", "header", "maximizable", "modal", "visible"], [1, "flex", "flex-column", "gap-2", "px-4", "pt-4", "pb-2"], ["outlined", "", "severity", "secondary", "styleClass", "secondary-outline", 1, "align-self-end", 3, "onClick", "label"], [3, "routerLink"], [1, "pi", "pi-arrow-right"], [3, "selectedBase", "selectedLive", "selectedNode", "selectedProto"], [3, "htmlRows"], [3, "numberRows"], [3, "aiEnglish", "aiFrench"]], template: function CompareLanguagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CompareLanguagesComponent_Conditional_0_Template, 1, 1, "ng-container")(1, CompareLanguagesComponent_Conditional_1_Template, 19, 21);
      \u0275\u0275template(2, CompareLanguagesComponent_ng_template_2_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, CompareLanguagesComponent_ng_template_4_Template, 1, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, CompareLanguagesComponent_ng_template_6_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, CompareLanguagesComponent_ng_template_8_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, CompareLanguagesComponent_ng_template_10_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.summaryMode() ? 0 : 1);
    }
  }, dependencies: [
    NgTemplateOutlet,
    RouterLink,
    BadgeModule,
    Badge,
    ButtonModule,
    Button,
    DialogModule,
    Dialog,
    MessageModule,
    Message,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    CompareAiLangComponent,
    CompareDataComponent,
    CompareHtmlComponent,
    CompareNumbersComponent,
    CompareSelectComponent,
    CompareWebComponent,
    TranslatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareLanguagesComponent, [{
    type: Component,
    args: [{ selector: "aida-compare-languages", imports: [
      NgTemplateOutlet,
      RouterLink,
      TranslatePipe,
      BadgeModule,
      ButtonModule,
      DialogModule,
      MessageModule,
      TabsModule,
      CompareAiLangComponent,
      CompareDataComponent,
      CompareHtmlComponent,
      CompareNumbersComponent,
      CompareSelectComponent,
      CompareWebComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (summaryMode()) {
  <ng-container *ngTemplateOutlet="summary" />
} @else {
  <h1 id="wb-cont">{{ 'languages._title' | translate }}</h1>
  <p>{{ 'languages.description' | translate }}{{ 'languages.description2' | translate }}</p>

  <div class="flex flex-column gap-2">
    <div class="flex gap-2">
      <div [class]="styleCardService.cardStyles()">
        <aida-compare-select [versionsToShow]="1" />
      </div>
      <div [class]="styleCardService.cardStyles()" class="min-w-max">
        <ng-container *ngTemplateOutlet="summary" />
      </div>
    </div>

    <div [class]="styleCardService.cardStyles()">
      <h2 id="compare-tools" class="mt-0">{{ 'languages.tools.header' | translate }}</h2>
      @let page = compareService.selectedPage();
      @if (!page) {
        <p-message icon="pi pi-info-circle" severity="info">{{ 'pageOptions.description.0' | translate }}</p-message>
      } @else {
        <p-tabs [value]="activeTab()" class="mt-3">
          <p-tablist>
            <p-tab value="0">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">checklist</span>
                {{ 'languages.dataCompare.tab' | translate }}
                @if (projectState.refreshing().baseline || projectState.refreshing().prototype || projectState.refreshing().live) {
                  <i class="pi pi-spin pi-spinner text-primary text-lg"></i>
                } @else {
                  <p-badge [severity]="dataProblems().live === 0 ? 'success' : 'danger'" [value]="dataProblems().base + ' / ' + dataProblems().proto + ' / ' + dataProblems().live" />
                }
              </div>
            </p-tab>
            <p-tab value="1">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">code</span>
                {{ 'languages.htmlStructure.tab' | translate }}
                <p-badge [severity]="htmlProblems() === 0 ? 'success' : 'danger'" [value]="htmlProblems()" />
              </div>
            </p-tab>
            <p-tab value="2">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">numbers</span>
                {{ 'languages.numbers.tab' | translate }}
                <p-badge [severity]="numberProblems() === 0 ? 'success' : 'danger'" [value]="numberProblems()" />
              </div>
            </p-tab>
            <p-tab value="3">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">auto_awesome</span>
                {{ 'languages.aiSummary.tab' | translate }}
                @if (aiProblems().status === 'pending') {
                  <i class="pi pi-spin pi-spinner text-primary text-lg"></i>
                } @else if (aiProblems().status === 'error') {
                  <i class="pi pi-exclamation-circle text-red text-lg"></i>
                } @else if (aiProblems().status === 'done') {
                  <p-badge [severity]="aiProblems().result === 0 ? 'success' : 'danger'" [value]="aiProblems().result" />
                } @else {
                  <i class="pi pi-question-circle text-blue text-lg"></i>
                }
              </div>
            </p-tab>
            <p-tab value="4">
              <div class="flex align-items-center gap-2">
                <span class="material-icons-outlined">compare</span>
                {{ 'languages.webView.tab' | translate }}
              </div>
            </p-tab>
          </p-tablist>
          <p-tabpanels class="border-1 border-top-none border-round-bottom surface-border">
            <!-- Data comparison -->
            <p-tabpanel value="0"><ng-container *ngTemplateOutlet="data" /></p-tabpanel>
            <!-- HTML comparison -->
            <p-tabpanel value="1"><ng-container *ngTemplateOutlet="html" /></p-tabpanel>
            <!-- Numbers comparison -->
            <p-tabpanel value="2"><ng-container *ngTemplateOutlet="numbers" /></p-tabpanel>
            <!-- AI summary comparison -->
            <p-tabpanel value="3"><ng-container *ngTemplateOutlet="ai" /></p-tabpanel>
            <!-- Rendered page comparison -->
            <p-tabpanel value="4">
              <aida-compare-web [iframeEnglish]="iframeEnglish()" [iframeFrench]="iframeFrench()" />
            </p-tabpanel>
          </p-tabpanels>
        </p-tabs>
      }
    </div>
  </div>
}
<ng-template #summary>
  <h2 class="mt-0">{{ 'languages.summary.header' | translate }}</h2>
  @if (!compareService.selectedPage()) {
    <p-message icon="pi pi-info-circle" severity="info">{{ 'pageOptions.description.0' | translate }}</p-message>
  } @else {
    <div class="flex justify-content-between align-items-center gap-4">
      <h3 class="m-0">{{ 'languages.tools.header' | translate }}</h3>
      @if (totalProblems() === 0) {
        <span class="text-green pr-2">{{ 'languages.summary.noProblems' | translate }}</span>
      } @else {
        <span class="text-red pr-2">{{ 'languages.summary.toReview' | translate: { count: totalProblems() } }}</span>
      }
    </div>

    <ul class="list-none mx-0 my-1 p-0">
      @for (row of summaryRows(); track row.tab) {
        <li>
          <p-button
            [styleClass]="
              activeTab() === row.tab && !summaryMode()
                ? 'h-3rem flex justify-content-between gap-2 border-1 secondary-border bg-primary-light hover:bg-primary-light'
                : 'h-3rem flex justify-content-between gap-2'
            "
            [text]="activeTab() !== row.tab || summaryMode()"
            (onClick)="!summaryMode() ? openTab(row.tab) : openDialog.set(row)"
            fluid
          >
            <div class="flex gap-2 align-items-center">
              <span class="material-icons-outlined">{{ row.icon }}</span>
              <span>{{ row.label | translate }}</span>
              @if (row.state === 'loading') {
                <i class="pi pi-spin pi-spinner text-primary text-lg"></i>
              } @else if (row.state === 'error') {
                <i class="pi pi-exclamation-circle text-red text-lg"></i>
              } @else if (row.state === 'ok' || row.state === 'problem') {
                @if (row.detail) {
                  <p-badge [severity]="row.state === 'problem' ? 'danger' : 'success'" [value]="row.detail" />
                } @else {
                  <p-badge [severity]="row.state === 'problem' ? 'danger' : 'success'" [value]="row.count" />
                }
              } @else {
                <i class="pi pi-question-circle text-blue text-lg"></i>
              }
            </div>
            <div class="flex gap-1 align-items-center">
              <span [class]="row.state === 'problem' || row.state === 'error' ? 'text-red' : row.state === 'ok' ? 'text-green' : 'text-color-secondary'">
                {{ 'languages.summary.' + row.state | translate: { count: row.count } }}
                @if (row.state === 'loading') {
                  <span class="loading-dots -ml-1"></span>
                }
              </span>
              <i [class]="summaryMode() ? 'pi pi-question-circle text-primary' : 'pi pi-chevron-right text-color-secondary'"></i>
            </div>
          </p-button>
        </li>
        @if (openDialog(); as row) {
          <p-dialog [header]="row.label | translate" [maximizable]="true" [modal]="true" [visible]="true" (visibleChange)="$event || openDialog.set(null)" styleClass="w-6">
            <ng-template #headless>
              <div class="flex flex-column gap-2 px-4 pt-4 pb-2">
                <ng-container *ngTemplateOutlet="row.template" />
                <p-button [label]="'common.close' | translate" (onClick)="openDialog.set(null)" class="align-self-end" outlined severity="secondary" styleClass="secondary-outline" />
              </div>
            </ng-template>
          </p-dialog>
        }
      }
    </ul>
    @if (summaryMode()) {
      <div class="flex justify-content-end align-items-center gap-2 mt-4 text-primary hover:text-primary">
        <a [routerLink]="AidaLinks.ProjectLanguages">{{ 'languages._title' | translate }}</a>
        <i class="pi pi-arrow-right"></i>
      </div>
    }
  }
</ng-template>

<ng-template #data>
  <aida-compare-data [selectedBase]="selectedBase()" [selectedLive]="selectedLive()" [selectedNode]="selectedNode()" [selectedProto]="selectedProto()" />
</ng-template>

<ng-template #html>
  <aida-compare-html [htmlRows]="htmlRows()" />
</ng-template>

<ng-template #numbers>
  <aida-compare-numbers [numberRows]="numberRows()" />
</ng-template>

<ng-template #ai>
  <aida-compare-ai-lang [aiEnglish]="aiEnglish()" [aiFrench]="aiFrench()" />
</ng-template>
` }]
  }], () => [], { summaryMode: [{ type: Input, args: [{ isSignal: true, alias: "summaryMode", required: false }] }], data: [{ type: ViewChild, args: ["data", { isSignal: true }] }], html: [{ type: ViewChild, args: ["html", { isSignal: true }] }], numbers: [{ type: ViewChild, args: ["numbers", { isSignal: true }] }], ai: [{ type: ViewChild, args: ["ai", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareLanguagesComponent, { className: "CompareLanguagesComponent", filePath: "src/app/views/tasks/compare-languages/compare-languages.component.ts", lineNumber: 74 });
})();

export {
  CompareLanguagesComponent
};
//# sourceMappingURL=chunk-NRHYFW7F.js.map
