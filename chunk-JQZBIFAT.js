import {
  Table,
  TableModule
} from "./chunk-H54H2DVG.js";
import "./chunk-6IVOGOBS.js";
import "./chunk-EP7232IK.js";
import "./chunk-ADZNKPD2.js";
import "./chunk-IQ32TNLC.js";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupAddonModule,
  InputGroupModule
} from "./chunk-FAPH2SVH.js";
import {
  Message,
  MessageModule
} from "./chunk-R675W3L4.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-WCZKKKTX.js";
import "./chunk-YHIUKKAB.js";
import "./chunk-5OMWJUQA.js";
import "./chunk-C6TMHWKA.js";
import "./chunk-JATVKYNS.js";
import {
  marker
} from "./chunk-NJX644NS.js";
import "./chunk-7EJWX7IA.js";
import "./chunk-ZNVUFU2Q.js";
import {
  InputText,
  InputTextModule,
  environment
} from "./chunk-7KUIZSPB.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  HttpParams,
  NgControlStatus,
  NgModel
} from "./chunk-N5QBFVSW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  TranslatePipe,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-46LS4HZY.js";
import {
  __async,
  __objRest
} from "./chunk-YCXP4XZS.js";

// src/app/services/data-sources/links.service.ts
var BATCH_SIZE = 100;
var LinksService = class _LinksService {
  http = inject(HttpClient);
  FUNCTION_URL = environment.linksFunctionUrl;
  /** Builds query string for various link lookups */
  get(lookup, path, extra = {}) {
    let params = new HttpParams({ fromObject: { lookup } });
    if (path !== void 0)
      params = params.set("path", path);
    for (const [key, value] of Object.entries(extra)) {
      if (value !== void 0)
        params = params.set(key, value);
    }
    return firstValueFrom(this.http.get(this.FUNCTION_URL, { params }));
  }
  /** All pages are fetched consecutively using cursor from the previous response */
  loadAll(getPage, cursor) {
    return __async(this, null, function* () {
      const items = [];
      do {
        const page = yield getPage(cursor);
        items.push(...page.items);
        cursor = page.nextCursor;
      } while (cursor);
      return items;
    });
  }
  /** Returns the opposite-language path, or null if the page or its pair isn't indexed */
  getPair(path) {
    return __async(this, null, function* () {
      const result = yield this.get("pair", path);
      return result.pairPath;
    });
  }
  /** Returns all child pages under the path, including unpublished ones since they impact move references */
  getChildren(path, cursor) {
    return this.get("children", path, { cursor });
  }
  /** Returns all referring links for the path. Defaults to <main> links only but can include breadcrumb or both */
  getReferrers(path, kinds = ["main"], cursor) {
    return this.get("referrers", path, { kinds: kinds.join(","), cursor });
  }
  /** <main> and breadcrumb links on the page, each tagged with its target's state (published, unpublished, notInSitemap) */
  getOutgoing(path, cursor) {
    return this.get("outgoing", path, { cursor });
  }
  /** Counts only, for one page */
  getCounts(path) {
    return this.get("counts", path);
  }
  /** Counts for many pages, sent in batches of 100. Invalid paths are returned in `invalid`. */
  getCountsBatch(paths) {
    return __async(this, null, function* () {
      const result = { items: [], invalid: [] };
      for (let i = 0; i < paths.length; i += BATCH_SIZE) {
        const batch = yield firstValueFrom(this.http.post(this.FUNCTION_URL, { paths: paths.slice(i, i + BATCH_SIZE) }));
        result.items.push(...batch.items);
        result.invalid.push(...batch.invalid);
      }
      return result;
    });
  }
  /** Returns opposite-language paths for many links (paths or full URLs). */
  getPairs(links) {
    return __async(this, null, function* () {
      const unique = [...new Set(links)];
      const batches = [];
      for (let i = 0; i < unique.length; i += BATCH_SIZE)
        batches.push(unique.slice(i, i + BATCH_SIZE));
      const responses = yield Promise.all(batches.map((paths) => firstValueFrom(this.http.post(this.FUNCTION_URL, { lookup: "pairs", paths }))));
      const pairs = /* @__PURE__ */ new Map();
      for (const { items } of responses) {
        for (const _a of items) {
          const _b = _a, { input } = _b, pair = __objRest(_b, ["input"]);
          pairs.set(input, pair);
        }
      }
      return pairs;
    });
  }
  /** Pages that dropped out of the sitemap, oldest first */
  getUnpublished(cursor) {
    return this.get("unpublished", void 0, { cursor });
  }
  /** The getAll functions send one request per 2000 items.
   *  Avoid using these until the data is actually needed. Load time will be much slower for top level pages.
   */
  /** All remaining referring links, from `cursor` onward (or from the start). */
  getAllReferrers(path, kinds = ["main"], cursor) {
    return this.loadAll((next) => this.getReferrers(path, kinds, next), cursor);
  }
  /** All remaining outgoing links, from `cursor` onward (or from the start) */
  getAllOutgoing(path, cursor) {
    return this.loadAll((next) => this.getOutgoing(path, next), cursor);
  }
  /** All remaining child pages, from `cursor` onward (or from the start) */
  getAllChildren(path, cursor) {
    return this.loadAll((next) => this.getChildren(path, next), cursor);
  }
  /** All remaining unpublished pages, from `cursor` onward (or from the start) */
  getAllUnpublished(cursor) {
    return this.loadAll((next) => this.getUnpublished(next), cursor);
  }
  static \u0275fac = function LinksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LinksService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LinksService, factory: _LinksService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinksService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/views/toolbox/standalone-tools/referring-links/referring-links.component.ts
var _c0 = (a0) => [a0];
function ReferringLinksComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function ReferringLinksComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "refLinks.countError"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.oppUrl());
  }
}
function ReferringLinksComponent_Conditional_19_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "refLinks.count.referring"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "refLinks.count.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "refLinks.count.children"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "refLinks.count.outgoing"));
  }
}
function ReferringLinksComponent_Conditional_19_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "p-button", 16);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onClick", function ReferringLinksComponent_Conditional_19_ng_template_9_Template_p_button_onClick_4_listener() {
      const count_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getLinks(count_r3.path, "referrers"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td")(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "p-button", 16);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function ReferringLinksComponent_Conditional_19_ng_template_9_Template_p_button_onClick_9_listener() {
      const count_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getLinks(count_r3.path, "breadcrumb"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "p-button", 16);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("onClick", function ReferringLinksComponent_Conditional_19_ng_template_9_Template_p_button_onClick_14_listener() {
      const count_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getLinks(count_r3.path, "children"));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td")(17, "div", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "p-button", 16);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("onClick", function ReferringLinksComponent_Conditional_19_ng_template_9_Template_p_button_onClick_19_listener() {
      const count_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getLinks(count_r3.path, "outgoing"));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const count_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", count_r3.referrers, " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 8, "common.view"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", count_r3.breadcrumb, " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 10, "common.view"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", count_r3.children, " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(15, 12, "common.view"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", count_r3.outgoing, " ");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(20, 14, "common.view"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "refLinks.th.referencedFrom"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "refLinks.th.linkText"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_ng_template_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(text_r4);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "ul", 13);
    \u0275\u0275repeaterCreate(5, ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_ng_template_3_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r5.fromPath);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(link_r5.texts);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 14);
    \u0275\u0275template(1, ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_ng_template_1_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_ng_template_3_Template, 7, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.referrers().items);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "refLinks.noReferringLinks"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_3_Template, 5, 1, "p-table", 14)(4, ReferringLinksComponent_Conditional_19_Conditional_11_Conditional_4_Template, 3, 3, "p-message", 10);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "refLinks.count.referring"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.referrers()) == null ? null : tmp_5_0.items == null ? null : tmp_5_0.items.length) ? 3 : 4);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "refLinks.th.referencedFrom"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "refLinks.th.linkText"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_ng_template_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const text_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(text_r6);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "ul", 13);
    \u0275\u0275repeaterCreate(5, ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_ng_template_3_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r7.fromPath);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(link_r7.texts);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 14);
    \u0275\u0275template(1, ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_ng_template_1_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_ng_template_3_Template, 7, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.breadcrumb().items);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "refLinks.noBreadcrumbLinks"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_3_Template, 5, 1, "p-table", 14)(4, ReferringLinksComponent_Conditional_19_Conditional_12_Conditional_4_Template, 3, 3, "p-message", 10);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "refLinks.count.breadcrumb"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.breadcrumb()) == null ? null : tmp_5_0.items == null ? null : tmp_5_0.items.length) ? 3 : 4);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "refLinks.th.childPath"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "common.status"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r8.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "refLinks.status." + link_r8.status));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 14);
    \u0275\u0275template(1, ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_3_ng_template_1_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_3_ng_template_3_Template, 6, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.children().items);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "refLinks.noChildPages"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_3_Template, 5, 1, "p-table", 14)(4, ReferringLinksComponent_Conditional_19_Conditional_13_Conditional_4_Template, 3, 3, "p-message", 10);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "refLinks.count.children"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.children()) == null ? null : tmp_5_0.items == null ? null : tmp_5_0.items.length) ? 3 : 4);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "refLinks.th.linksTo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "refLinks.th.linkText"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_ng_template_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const text_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(text_r9);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "ul", 13);
    \u0275\u0275repeaterCreate(5, ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_ng_template_3_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r10.toPath);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(link_r10.texts);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 14);
    \u0275\u0275template(1, ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_ng_template_1_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_ng_template_3_Template, 7, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.outgoing().items);
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "refLinks.noOutgoingLinks"));
  }
}
function ReferringLinksComponent_Conditional_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_3_Template, 5, 1, "p-table", 14)(4, ReferringLinksComponent_Conditional_19_Conditional_14_Conditional_4_Template, 3, 3, "p-message", 10);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "refLinks.count.outgoing"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.outgoing()) == null ? null : tmp_5_0.items == null ? null : tmp_5_0.items.length) ? 3 : ctx_r0.outgoing() ? 4 : -1);
  }
}
function ReferringLinksComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ReferringLinksComponent_Conditional_19_Conditional_5_Template, 2, 1, "p", 13);
    \u0275\u0275elementStart(6, "p-table", 14);
    \u0275\u0275template(7, ReferringLinksComponent_Conditional_19_ng_template_7_Template, 13, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ReferringLinksComponent_Conditional_19_ng_template_9_Template, 21, 16, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ReferringLinksComponent_Conditional_19_Conditional_11_Template, 5, 4);
    \u0275\u0275conditionalCreate(12, ReferringLinksComponent_Conditional_19_Conditional_12_Template, 5, 4);
    \u0275\u0275conditionalCreate(13, ReferringLinksComponent_Conditional_19_Conditional_13_Template, 5, 4);
    \u0275\u0275conditionalCreate(14, ReferringLinksComponent_Conditional_19_Conditional_14_Template, 5, 4);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 8, "refLinks.for"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r0.linkCounts()) == null ? null : tmp_4_0.path);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.oppUrl() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275pureFunction1(10, _c0, ctx_r0.linkCounts()));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.referrers() && ctx_r0.view() === "referrers" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.breadcrumb() && ctx_r0.view() === "breadcrumb" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.children() && ctx_r0.view() === "children" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.outgoing() && ctx_r0.view() === "outgoing" ? 14 : -1);
  }
}
function ReferringLinksComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "refLinks.noPathMessage"));
  }
}
var ReferringLinksComponent = class _ReferringLinksComponent {
  linksService = inject(LinksService);
  pageUrl = "";
  linkCounts = signal(null, ...ngDevMode ? [{ debugName: "linkCounts" }] : (
    /* istanbul ignore next */
    []
  ));
  hasCountError = signal(false, ...ngDevMode ? [{ debugName: "hasCountError" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingCount = signal(false, ...ngDevMode ? [{ debugName: "loadingCount" }] : (
    /* istanbul ignore next */
    []
  ));
  view = signal(null, ...ngDevMode ? [{ debugName: "view" }] : (
    /* istanbul ignore next */
    []
  ));
  referrers = signal(null, ...ngDevMode ? [{ debugName: "referrers" }] : (
    /* istanbul ignore next */
    []
  ));
  outgoing = signal(null, ...ngDevMode ? [{ debugName: "outgoing" }] : (
    /* istanbul ignore next */
    []
  ));
  children = signal(null, ...ngDevMode ? [{ debugName: "children" }] : (
    /* istanbul ignore next */
    []
  ));
  breadcrumb = signal(null, ...ngDevMode ? [{ debugName: "breadcrumb" }] : (
    /* istanbul ignore next */
    []
  ));
  oppUrl = signal(null, ...ngDevMode ? [{ debugName: "oppUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  getLinkCounts(path) {
    return __async(this, null, function* () {
      this.referrers.set(null);
      this.outgoing.set(null);
      this.children.set(null);
      this.breadcrumb.set(null);
      this.oppUrl.set(null);
      this.hasCountError.set(false);
      this.loadingCount.set(true);
      try {
        this.linkCounts.set(yield this.linksService.getCounts(path));
        this.oppUrl.set(yield this.linksService.getPair(path));
      } catch (e) {
        this.hasCountError.set(true);
      } finally {
        this.loadingCount.set(false);
      }
    });
  }
  getLinks(path, mode) {
    return __async(this, null, function* () {
      this.view.set(mode);
      switch (mode) {
        case "referrers":
          if (this.referrers() === null) {
            this.referrers.set(yield this.linksService.getReferrers(path));
          }
          break;
        case "outgoing":
          if (this.outgoing() === null) {
            this.outgoing.set(yield this.linksService.getOutgoing(path));
          }
          break;
        case "children":
          if (this.children() === null) {
            this.children.set(yield this.linksService.getChildren(path));
          }
          break;
        case "breadcrumb":
          if (this.breadcrumb() === null) {
            this.breadcrumb.set(yield this.linksService.getReferrers(path, ["breadcrumb"]));
          }
          break;
      }
      return;
    });
  }
  markForTranslation() {
    marker("refLinks.status.unpublished");
    marker("refLinks.status.published");
  }
  static \u0275fac = function ReferringLinksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReferringLinksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReferringLinksComponent, selectors: [["aida-referring-links"]], decls: 21, vars: 17, consts: [["header", ""], ["body", ""], ["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "w-full"], ["id", "page", "fluid", "", "pInputText", "", "type", "text", "variant", "outlined", 1, "secondary-outline", 3, "ngModelChange", "blur", "ngModel"], ["for", "page"], ["text", "", 1, "h-full", 3, "onClick", "label"], [1, "pi", "pi-spinner", "pi-spin", "text-2xl"], ["icon", "pi pi-times", "severity", "error"], ["icon", "pi pi-info-circle", "severity", "info"], [1, "mb-0"], [1, "my-0"], [1, "mt-0"], ["size", "small", "stripedRows", "", 3, "value"], [1, "flex", "gap-5", "text-2xl"], ["icon", "pi pi-eye", 3, "onClick", "label"]], template: function ReferringLinksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "p-input-group")(9, "p-iftalabel", 4)(10, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ReferringLinksComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageUrl, $event) || (ctx.pageUrl = $event);
        return $event;
      });
      \u0275\u0275listener("blur", function ReferringLinksComponent_Template_input_blur_10_listener() {
        return ctx.getLinkCounts(ctx.pageUrl);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p-inputgroup-addon")(15, "p-button", 7);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("onClick", function ReferringLinksComponent_Template_p_button_onClick_15_listener() {
        return ctx.getLinkCounts(ctx.pageUrl);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(17, ReferringLinksComponent_Conditional_17_Template, 1, 0, "i", 8)(18, ReferringLinksComponent_Conditional_18_Template, 3, 3, "p-message", 9)(19, ReferringLinksComponent_Conditional_19_Template, 15, 12)(20, ReferringLinksComponent_Conditional_20_Template, 3, 3, "p-message", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "refLinks._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 9, "refLinks.description"), "", \u0275\u0275pipeBind1(6, 11, "refLinks.description2"));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.pageUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "common.path"));
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 15, "refLinks.getCount"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loadingCount() ? 17 : ctx.hasCountError() ? 18 : ctx.linkCounts() ? 19 : 20);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, IftaLabelModule, IftaLabel, InputGroupAddonModule, InputGroupAddon, InputGroupModule, InputGroup, InputTextModule, InputText, MessageModule, Message, TableModule, Table, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferringLinksComponent, [{
    type: Component,
    args: [{ selector: "aida-referring-links", imports: [FormsModule, TranslatePipe, ButtonModule, IftaLabelModule, InputGroupAddonModule, InputGroupModule, InputTextModule, MessageModule, TableModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'refLinks._title' | translate }}</h1>
<p>{{ 'refLinks.description' | translate }}{{ 'refLinks.description2' | translate }}</p>

<div class="flex flex-column gap-2">
  <p-input-group>
    <p-iftalabel class="w-full">
      <input id="page" [(ngModel)]="pageUrl" (blur)="getLinkCounts(pageUrl)" class="secondary-outline" fluid pInputText type="text" variant="outlined" />
      <label for="page">{{ 'common.path' | translate }}</label>
    </p-iftalabel>
    <p-inputgroup-addon>
      <p-button [label]="'refLinks.getCount' | translate" (onClick)="getLinkCounts(pageUrl)" class="h-full" text />
    </p-inputgroup-addon>
  </p-input-group>
  @if (loadingCount()) {
    <i class="pi pi-spinner pi-spin text-2xl"></i>
  } @else if (hasCountError()) {
    <p-message icon="pi pi-times" severity="error">{{ 'refLinks.countError' | translate }}</p-message>
  } @else if (linkCounts()) {
    <h2 class="mb-0">{{ 'refLinks.for' | translate }}</h2>
    <p class="my-0">{{ linkCounts()?.path }}</p>
    @if (oppUrl()) {
      <p class="mt-0">{{ oppUrl() }}</p>
    }
    <p-table [value]="[linkCounts()]" size="small" stripedRows>
      <ng-template #header>
        <tr>
          <th>{{ 'refLinks.count.referring' | translate }}</th>
          <th>{{ 'refLinks.count.breadcrumb' | translate }}</th>
          <th>{{ 'refLinks.count.children' | translate }}</th>
          <th>{{ 'refLinks.count.outgoing' | translate }}</th>
        </tr>
      </ng-template>
      <ng-template #body let-count>
        <tr>
          <td>
            <div class="flex gap-5 text-2xl">
              {{ count.referrers }}
              <p-button [label]="'common.view' | translate" (onClick)="getLinks(count.path, 'referrers')" icon="pi pi-eye" />
            </div>
          </td>
          <td>
            <div class="flex gap-5 text-2xl">
              {{ count.breadcrumb }}
              <p-button [label]="'common.view' | translate" (onClick)="getLinks(count.path, 'breadcrumb')" icon="pi pi-eye" />
            </div>
          </td>
          <td>
            <div class="flex gap-5 text-2xl">
              {{ count.children }}
              <p-button [label]="'common.view' | translate" (onClick)="getLinks(count.path, 'children')" icon="pi pi-eye" />
            </div>
          </td>
          <td>
            <div class="flex gap-5 text-2xl">
              {{ count.outgoing }}
              <p-button [label]="'common.view' | translate" (onClick)="getLinks(count.path, 'outgoing')" icon="pi pi-eye" />
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
    @if (referrers() && view() === 'referrers') {
      <h2 class="mb-0">{{ 'refLinks.count.referring' | translate }}</h2>
      @if (referrers()?.items?.length) {
        <p-table [value]="referrers()!.items" size="small" stripedRows>
          <ng-template #header>
            <tr>
              <th>{{ 'refLinks.th.referencedFrom' | translate }}</th>
              <th>{{ 'refLinks.th.linkText' | translate }}</th>
            </tr>
          </ng-template>
          <ng-template #body let-link>
            <tr>
              <td>{{ link.fromPath }}</td>
              <td>
                <ul class="mt-0">
                  @for (text of link.texts; track $index) {
                    <li>{{ text }}</li>
                  }
                </ul>
              </td>
            </tr>
          </ng-template>
        </p-table>
      } @else {
        <p-message icon="pi pi-info-circle" severity="info">{{ 'refLinks.noReferringLinks' | translate }}</p-message>
      }
    }
    @if (breadcrumb() && view() === 'breadcrumb') {
      <h2 class="mb-0">{{ 'refLinks.count.breadcrumb' | translate }}</h2>
      @if (breadcrumb()?.items?.length) {
        <p-table [value]="breadcrumb()!.items" size="small" stripedRows>
          <ng-template #header>
            <tr>
              <th>{{ 'refLinks.th.referencedFrom' | translate }}</th>
              <th>{{ 'refLinks.th.linkText' | translate }}</th>
            </tr>
          </ng-template>
          <ng-template #body let-link>
            <tr>
              <td>{{ link.fromPath }}</td>
              <td>
                <ul class="mt-0">
                  @for (text of link.texts; track $index) {
                    <li>{{ text }}</li>
                  }
                </ul>
              </td>
            </tr>
          </ng-template>
        </p-table>
      } @else {
        <p-message icon="pi pi-info-circle" severity="info">{{ 'refLinks.noBreadcrumbLinks' | translate }}</p-message>
      }
    }
    @if (children() && view() === 'children') {
      <h2 class="mb-0">{{ 'refLinks.count.children' | translate }}</h2>
      @if (children()?.items?.length) {
        <p-table [value]="children()!.items" size="small" stripedRows>
          <ng-template #header>
            <tr>
              <th>{{ 'refLinks.th.childPath' | translate }}</th>
              <th>{{ 'common.status' | translate }}</th>
            </tr>
          </ng-template>
          <ng-template #body let-link>
            <tr>
              <td>{{ link.path }}</td>
              <td>{{ 'refLinks.status.' + link.status | translate }}</td>
            </tr>
          </ng-template>
        </p-table>
      } @else {
        <p-message icon="pi pi-info-circle" severity="info">{{ 'refLinks.noChildPages' | translate }}</p-message>
      }
    }
    @if (outgoing() && view() === 'outgoing') {
      <h2 class="mb-0">{{ 'refLinks.count.outgoing' | translate }}</h2>
      @if (outgoing()?.items?.length) {
        <p-table [value]="outgoing()!.items" size="small" stripedRows>
          <ng-template #header>
            <tr>
              <th>{{ 'refLinks.th.linksTo' | translate }}</th>
              <th>{{ 'refLinks.th.linkText' | translate }}</th>
            </tr>
          </ng-template>
          <ng-template #body let-link>
            <tr>
              <td>{{ link.toPath }}</td>
              <td>
                <ul class="mt-0">
                  @for (text of link.texts; track $index) {
                    <li>{{ text }}</li>
                  }
                </ul>
              </td>
            </tr>
          </ng-template>
        </p-table>
      } @else if (outgoing()) {
        <p-message icon="pi pi-info-circle" severity="info">{{ 'refLinks.noOutgoingLinks' | translate }}</p-message>
      }
    }
  } @else {
    <p-message icon="pi pi-info-circle" severity="info">{{ 'refLinks.noPathMessage' | translate }}</p-message>
  }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReferringLinksComponent, { className: "ReferringLinksComponent", filePath: "src/app/views/toolbox/standalone-tools/referring-links/referring-links.component.ts", lineNumber: 23 });
})();
export {
  ReferringLinksComponent
};
//# sourceMappingURL=chunk-JQZBIFAT.js.map
