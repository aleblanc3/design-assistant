import {
  Message,
  MessageModule,
  Textarea,
  TextareaModule
} from "./chunk-FXRV6GSO.js";
import {
  AddUrlsService,
  ProgressBar,
  ProgressBarModule,
  ProjectStateService
} from "./chunk-F6P2GXQV.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-LY7G7VXT.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-YD3UXEIO.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3I2QHJYF.js";

// src/app/components/add-urls/add-urls.component.ts
function AddUrlsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.getDuplicateMessage());
  }
}
function AddUrlsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.getInvalidUrlMessage());
  }
}
function AddUrlsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.getOppositeLangMessage());
  }
}
function AddUrlsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5, "keyboard_backspace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "addPages.screenreader.pageReadyToAdd"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "addPages.import"));
  }
}
function AddUrlsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function AddUrlsComponent_Conditional_18_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.undoAddPages());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "addPages.undoButton"))("loading", ctx_r0.addUrlsService.urlState().isValidating || ctx_r0.addUrlsService.urlState().isAdding);
  }
}
function AddUrlsComponent_Conditional_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progress_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "addPages.validating"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", progress_r3.processed, "/", progress_r3.total, "");
  }
}
function AddUrlsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 9);
    \u0275\u0275template(1, AddUrlsComponent_Conditional_19_ng_template_1_Template, 6, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.percent);
  }
}
function AddUrlsComponent_Conditional_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const progress_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "addPages.adding"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", progress_r4.processed, "/", progress_r4.total, "");
  }
}
function AddUrlsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-progressbar", 9);
    \u0275\u0275template(1, AddUrlsComponent_Conditional_20_ng_template_1_Template, 6, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.percent);
  }
}
var AddUrlsComponent = class _AddUrlsComponent {
  translate = inject(TranslateService);
  projectState = inject(ProjectStateService);
  addUrlsService = inject(AddUrlsService);
  // Skip duplicate, invalid, & opposite language URLs
  duplicatesSkipped = [];
  invalidUrlsSkipped = [];
  oppositeLangSkipped = [];
  // Parse URLs from textarea
  parseUrls() {
    const rawUrls = this.addUrlsService.urlState().rawUrls;
    const currentLang = this.translate.currentLang?.startsWith("fr") ? "fr" : "en";
    const existingUrls = new Set(this.projectState.getAllPages(currentLang, "live", "all").map((u) => u.url));
    const { parsedUrls, duplicates, invalidUrls, oppositeLangUrls } = this.addUrlsService.parseUrls(rawUrls, existingUrls, currentLang);
    console.log(parsedUrls);
    this.addUrlsService.urlState().rawUrls = [
      ...parsedUrls.map((item) => item.href),
      ...duplicates,
      ...invalidUrls,
      ...oppositeLangUrls
    ].join("\n");
    this.duplicatesSkipped = duplicates;
    this.invalidUrlsSkipped = invalidUrls;
    this.oppositeLangSkipped = oppositeLangUrls;
    this.addUrlsService.setUrlState({
      urlsToValidate: parsedUrls,
      isValidating: false,
      isAdding: false
    });
  }
  onPasteUrls() {
    setTimeout(() => this.parseUrls(), 0);
  }
  // Warning message for duplicates skipped
  getDuplicateMessage() {
    const count = this.duplicatesSkipped.length;
    if (count === 1)
      return this.translate.instant("addPages.duplicatesSkipped", { count });
    else
      return this.translate.instant("addPages.duplicatesSkipped.plural", { count });
  }
  // Warning message for invalid URLs skipped
  getInvalidUrlMessage() {
    const count = this.invalidUrlsSkipped.length;
    if (count === 1)
      return this.translate.instant("addPages.invalidUrlsSkipped", { count });
    else
      return this.translate.instant("addPages.invalidUrlsSkipped.plural", { count });
  }
  // Warning message for opposite language URLs skipped
  getOppositeLangMessage() {
    const count = this.oppositeLangSkipped.length;
    if (count === 1)
      return this.translate.instant("addPages.oppositeLangSkipped", { count });
    else
      return this.translate.instant("addPages.oppositeLangSkipped.plural", { count });
  }
  //Undo add pages
  undoAddPages() {
    const previous = this.addUrlsService.getPreviousProjectData();
    if (previous) {
      this.projectState.setProjectTree(previous);
      this.projectState.saveProject();
      this.addUrlsService.setPreviousProjectData(null);
    }
  }
  //Highlight the component (for users coming from import-pages)
  highlightAddPages = false;
  ngOnInit() {
    if (this.addUrlsService.getHighlight()) {
      this.highlightAddPages = true;
      this.addUrlsService.setHighlight(false);
      setTimeout(() => this.highlightAddPages = false, 3e3);
    }
  }
  static \u0275fac = function AddUrlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddUrlsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUrlsComponent, selectors: [["aida-add-urls"]], decls: 21, vars: 24, consts: [["content", ""], [1, "text-2xl", "my-1", 3, "innerHTML"], [1, "text-color-secondary"], ["id", "urls", "autoResize", "true", "rows", "5", "pTextarea", "", "fluid", "", 3, "ngModelChange", "change", "paste", "ngModel"], ["for", "urls"], ["severity", "error", "size", "small", "variant", "simple", "styleClass", "mb-2", 3, "text"], [1, "flex", "flex-row", "align-items-center", "gap-2"], ["icon", "pi pi-check-square", 1, "min-w-max", 3, "onClick", "label", "loading", "disabled"], ["icon", "pi pi-undo", "severity", "secondary", 3, "label", "loading"], ["styleClass", "h-2rem centered-label mt-1 transition-duration-100", 3, "value"], ["aria-live", "polite", "role", "status", 1, "sr-only"], [1, "flex", "flex-row", "align-items-center", "m-0", "p-0", "text-primary", "arrow-bounce"], [1, "material-icons", "text-5xl"], [1, "font-bold", "text-lg", "m-0"], ["icon", "pi pi-undo", "severity", "secondary", 3, "onClick", "label", "loading"], [1, "flex", "flex-row", "gap-6"], [1, "text-white"]], template: function AddUrlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "h2", 1);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-iftalabel")(7, "textarea", 3);
      \u0275\u0275twoWayListener("ngModelChange", function AddUrlsComponent_Template_textarea_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.addUrlsService.urlState().rawUrls, $event) || (ctx.addUrlsService.urlState().rawUrls = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AddUrlsComponent_Template_textarea_change_7_listener() {
        return ctx.parseUrls();
      })("paste", function AddUrlsComponent_Template_textarea_paste_7_listener() {
        return ctx.onPasteUrls();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "label", 4);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, AddUrlsComponent_Conditional_11_Template, 1, 1, "p-message", 5)(12, AddUrlsComponent_Conditional_12_Template, 1, 1, "p-message", 5)(13, AddUrlsComponent_Conditional_13_Template, 1, 1, "p-message", 5);
      \u0275\u0275elementStart(14, "div", 6)(15, "p-button", 7);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("onClick", function AddUrlsComponent_Template_p_button_onClick_15_listener() {
        return ctx.addUrlsService.validateUrls();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, AddUrlsComponent_Conditional_17_Template, 9, 6)(18, AddUrlsComponent_Conditional_18_Template, 2, 4, "p-button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, AddUrlsComponent_Conditional_19_Template, 3, 1, "p-progressbar", 9)(20, AddUrlsComponent_Conditional_20_Template, 3, 1, "p-progressbar", 9);
    }
    if (rf & 2) {
      let tmp_12_0;
      let tmp_13_0;
      \u0275\u0275property("innerHTML", ctx.addUrlsService.urlState().isValidating || ctx.addUrlsService.urlState().isAdding ? \u0275\u0275pipeBind1(1, 14, "addPages._title.active") : \u0275\u0275pipeBind1(2, 16, "addPages._title"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 18, "addPages.description"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.addUrlsService.urlState().rawUrls);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, "addPages.inputLabel"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.duplicatesSkipped.length > 0 ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalidUrlsSkipped.length > 0 ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.oppositeLangSkipped.length > 0 ? 13 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 22, "addPages.validateButton"))("loading", ctx.addUrlsService.urlState().isValidating || ctx.addUrlsService.urlState().isAdding)("disabled", !ctx.addUrlsService.urlState().rawUrls.trim());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.highlightAddPages ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.addUrlsService.getPreviousProjectData() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_12_0 = ctx.addUrlsService.urlState().isValidating && ctx.addUrlsService.validatingProgress()) ? 19 : -1, tmp_12_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_13_0 = ctx.addUrlsService.urlState().isAdding && ctx.addUrlsService.addingProgress()) ? 20 : -1, tmp_13_0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, TranslatePipe, IftaLabelModule, IftaLabel, TextareaModule, Textarea, MessageModule, Message, ButtonModule, Button, ProgressBarModule, ProgressBar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddUrlsComponent, [{
    type: Component,
    args: [{ selector: "aida-add-urls", imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      IftaLabelModule,
      TextareaModule,
      MessageModule,
      ButtonModule,
      ProgressBarModule
    ], template: `<h2 class="text-2xl my-1" [innerHTML]="(addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding) ? ('addPages._title.active' | translate) : ('addPages._title' | translate)"></h2>\r
<p class="text-color-secondary">{{"addPages.description" | translate}}</p>\r
<p-iftalabel>\r
    <textarea id="urls" autoResize="true" rows="5" pTextarea [(ngModel)]="addUrlsService.urlState().rawUrls" (change)="parseUrls()" (paste)="onPasteUrls()" fluid></textarea>\r
    <label for="urls">{{"addPages.inputLabel" | translate}}</label>\r
</p-iftalabel>\r
\r
@if(duplicatesSkipped.length > 0){\r
<p-message severity="error" size="small" variant="simple" styleClass="mb-2" [text]="getDuplicateMessage()" />\r
}\r
@if(invalidUrlsSkipped.length > 0){\r
<p-message severity="error" size="small" variant="simple" styleClass="mb-2" [text]="getInvalidUrlMessage()" />\r
}\r
@if(oppositeLangSkipped.length > 0){\r
<p-message severity="error" size="small" variant="simple" styleClass="mb-2" [text]="getOppositeLangMessage()" />\r
}\r
\r
<div class="flex flex-row align-items-center gap-2">\r
    <!--Validate URLs-->\r
    <p-button [label]="'addPages.validateButton' | translate" icon="pi pi-check-square" class="min-w-max"\r
              [loading]="addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding" [disabled]="!addUrlsService.urlState().rawUrls.trim()"\r
              (onClick)="addUrlsService.validateUrls()" />\r
    <!--Arrow & screenreader annoucement for users coming from bookmarklet-->\r
    @if(highlightAddPages){\r
    <div class="sr-only" aria-live="polite" role="status">\r
        {{ 'addPages.screenreader.pageReadyToAdd' | translate }}\r
    </div>\r
    <div class="flex flex-row align-items-center m-0 p-0 text-primary arrow-bounce">\r
        <span class="material-icons text-5xl">keyboard_backspace</span>\r
        <p class="font-bold text-lg m-0">{{'addPages.import'|translate}}</p>\r
    </div>\r
    }\r
    <!-- Undo Button -->\r
    @if(addUrlsService.getPreviousProjectData()){\r
    <p-button [label]="'addPages.undoButton' | translate" icon="pi pi-undo" severity="secondary"\r
              [loading]="addUrlsService.urlState().isValidating || addUrlsService.urlState().isAdding"\r
              (onClick)="undoAddPages()" />\r
    }\r
</div>\r
\r
@if(addUrlsService.urlState().isValidating && addUrlsService.validatingProgress(); as progress){\r
<p-progressbar [value]="progress.percent" styleClass="h-2rem centered-label mt-1 transition-duration-100">\r
    <ng-template #content>\r
        <div class="flex flex-row gap-6">\r
            <span class="text-white">{{'addPages.validating' | translate}}</span>\r
            <span class="text-white">{{progress.processed}}/{{progress.total}}</span>\r
        </div>\r
    </ng-template>\r
</p-progressbar>\r
}\r
\r
@if(addUrlsService.urlState().isAdding && addUrlsService.addingProgress(); as progress){\r
<p-progressbar [value]="progress.percent" styleClass="h-2rem centered-label mt-1 transition-duration-100">\r
    <ng-template #content>\r
        <div class="flex flex-row gap-6">\r
            <span class="text-white">{{'addPages.adding' | translate}}</span>\r
            <span class="text-white">{{progress.processed}}/{{progress.total}}</span>\r
        </div>\r
    </ng-template>\r
</p-progressbar>\r
}` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUrlsComponent, { className: "AddUrlsComponent", filePath: "src/app/components/add-urls/add-urls.component.ts", lineNumber: 26 });
})();

export {
  AddUrlsComponent
};
//# sourceMappingURL=chunk-EQBCPJRD.js.map
