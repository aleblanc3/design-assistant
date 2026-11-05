import {
  CompareSelectComponent
} from "./chunk-S774KY4G.js";
import {
  InventoryPrompts
} from "./chunk-7AFEH5JS.js";
import {
  CompareService
} from "./chunk-BDYYZULD.js";
import {
  AI_PAID_MODELS,
  InventoryPromptKey,
  OpenRouterService
} from "./chunk-G4FU7DSC.js";
import "./chunk-AKZGST2K.js";
import "./chunk-DPQ5CK4Y.js";
import {
  StyleCardService
} from "./chunk-PLWLN2ZO.js";
import {
  Table,
  TableModule
} from "./chunk-HMJLW44B.js";
import "./chunk-4LOOH26D.js";
import "./chunk-GIDX5XQW.js";
import "./chunk-AWTXPSRA.js";
import "./chunk-LHQ2UTOW.js";
import "./chunk-LVISTY3I.js";
import "./chunk-GQCO5VLX.js";
import {
  Message,
  MessageModule
} from "./chunk-ZQFVNKCP.js";
import "./chunk-I5BRY6F4.js";
import "./chunk-HHB3L6LM.js";
import "./chunk-MDCM2VZ6.js";
import "./chunk-ZKGEZR44.js";
import {
  ProjectStateService
} from "./chunk-GGBZ6KOB.js";
import "./chunk-C2QPQCML.js";
import "./chunk-7QG33A7H.js";
import "./chunk-DMOF7S63.js";
import "./chunk-JSBVPAQL.js";
import {
  HtmlNormalizationService
} from "./chunk-LFN6OHVC.js";
import "./chunk-JUK47RAW.js";
import {
  ToggleButton,
  ToggleButtonModule
} from "./chunk-26UQUZNT.js";
import "./chunk-CX5LE66G.js";
import "./chunk-SKWRLWIU.js";
import "./chunk-JA3M4RJT.js";
import "./chunk-LI2XRFJI.js";
import {
  FetchService
} from "./chunk-CQCSI35X.js";
import {
  Button,
  ButtonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  marker
} from "./chunk-IVEPVLVK.js";
import {
  DomSanitizer
} from "./chunk-UVDIDRDQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  NgTemplateOutlet,
  TranslatePipe,
  ViewChild,
  computed,
  effect,
  inject,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
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
import "./chunk-REL7BCH6.js";
import "./chunk-MAKYC2XG.js";
import "./chunk-ADVVAQGW.js";
import "./chunk-UAFUCDFP.js";
import "./chunk-UB5ECMBM.js";
import "./chunk-UDFBNEAG.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/views/tasks/review-languages/review-languages.service.ts
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

// src/app/views/tasks/review-languages/number-compare.ts
var BLOCK = "h1,h2,h3,h4,h5,h6,p,li,td,th,dt,dd,caption,figcaption,summary";
var CONTEXT = 40;
var WORDS = {
  en: { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 },
  fr: { deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10 }
};
var DIGITS = {
  en: String.raw`(?<![\d.,])\d{1,3}(?:,\d{3})+(?:\.\d+)?(?!\d)|\d+(?:\.\d+)?`,
  fr: String.raw`(?<![\d.,])\d{1,3}(?:[ \u00A0\u202F]\d{3})+(?:,\d+)?(?!\d)|\d+(?:,\d+)?`
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
  const cleaned = lang === "en" ? raw.replace(/,/g, "") : raw.replace(/[ \u00A0\u202F]/g, "").replace(",", ".");
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

// src/app/views/tasks/review-languages/structure-compare.ts
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

// src/app/views/tasks/review-languages/review-languages.component.ts
var _c0 = ["enFrame"];
var _c1 = ["frFrame"];
var _c2 = (a0, a1) => ({ title: "baseline", rows: a0, loading: a1 });
var _c3 = (a0, a1) => ({ title: "prototype", rows: a0, loading: a1 });
var _c4 = (a0, a1) => ({ title: "live", rows: a0, loading: a1 });
function ReviewLanguagesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
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
function ReviewLanguagesComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 27);
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
function ReviewLanguagesComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "languages.noMismatch"));
  }
}
function ReviewLanguagesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const mismatchTable_r3 = \u0275\u0275reference(84);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r1.selectedBase(), ctx_r1.projectState.refreshing().baseline));
  }
}
function ReviewLanguagesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const mismatchTable_r3 = \u0275\u0275reference(84);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c3, ctx_r1.selectedProto(), ctx_r1.projectState.refreshing().prototype));
  }
}
function ReviewLanguagesComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const mismatchTable_r3 = \u0275\u0275reference(84);
    \u0275\u0275property("ngTemplateOutlet", mismatchTable_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c4, ctx_r1.selectedLive(), ctx_r1.projectState.refreshing().live));
  }
}
function ReviewLanguagesComponent_Case_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "span", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "compare.waitingForAI"));
  }
}
function ReviewLanguagesComponent_Case_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.aiError"));
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 25);
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
function ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const diff_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", diff_r4.english, " ");
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const diff_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", diff_r4.french, " ");
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_4_Template, 1, 1)(5, ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_5_Template, 1, 0, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_7_Template, 1, 1)(8, ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Conditional_8_Template, 1, 0, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const diff_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(diff_r4.issue);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r4.english ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("lang", "fr");
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r4.french ? 7 : 8);
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 23);
    \u0275\u0275template(1, ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_1_Template, 10, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ReviewLanguagesComponent_Case_62_Conditional_1_ng_template_3_Template, 9, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const diffs_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("value", diffs_r5);
  }
}
function ReviewLanguagesComponent_Case_62_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "languages.noDiffs"));
  }
}
function ReviewLanguagesComponent_Case_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275conditionalCreate(1, ReviewLanguagesComponent_Case_62_Conditional_1_Template, 5, 1, "p-table", 23)(2, ReviewLanguagesComponent_Case_62_Conditional_2_Template, 3, 3, "p-message", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const diffs_r6 = \u0275\u0275storeLet(ctx_r1.reviewLanguagesService.getAiResponse(ctx_r1.compareService.selectedPage()));
    \u0275\u0275advance();
    \u0275\u0275conditional(diffs_r6.length > 0 ? 1 : 2);
  }
}
function ReviewLanguagesComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 33);
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
function ReviewLanguagesComponent_ng_template_78_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mark");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.en.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.en.raw);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.en.after);
  }
}
function ReviewLanguagesComponent_ng_template_78_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function ReviewLanguagesComponent_ng_template_78_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mark");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.fr.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.fr.raw);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.fr.after);
  }
}
function ReviewLanguagesComponent_ng_template_78_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function ReviewLanguagesComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, ReviewLanguagesComponent_ng_template_78_Conditional_2_Template, 6, 3)(3, ReviewLanguagesComponent_ng_template_78_Conditional_3_Template, 1, 0, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, ReviewLanguagesComponent_ng_template_78_Conditional_5_Template, 6, 3)(6, ReviewLanguagesComponent_ng_template_78_Conditional_6_Template, 1, 0, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275classMap(row_r7.match ? null : "bg-red");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r7.en ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r7.fr ? 5 : 6);
  }
}
function ReviewLanguagesComponent_ng_template_80_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noMismatch"), " ");
  }
}
function ReviewLanguagesComponent_ng_template_80_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noNumbers"), " ");
  }
}
function ReviewLanguagesComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275conditionalCreate(2, ReviewLanguagesComponent_ng_template_80_Conditional_2_Template, 2, 3)(3, ReviewLanguagesComponent_ng_template_80_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.numberDiffsOnly() ? 2 : 3);
  }
}
function ReviewLanguagesComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 10)(2, "h2", 36);
    \u0275\u0275text(3, "English page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "iframe", 37, 4);
    \u0275\u0275listener("load", function ReviewLanguagesComponent_Conditional_82_Template_iframe_load_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFrameLoad());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h2", 36);
    \u0275\u0275text(8, "French page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "iframe", 37, 5);
    \u0275\u0275listener("load", function ReviewLanguagesComponent_Conditional_82_Template_iframe_load_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFrameLoad());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275property("srcdoc", ctx_r1.englishHTML(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.styleCardService.cardStyles(void 0, void 0, true));
    \u0275\u0275advance(3);
    \u0275\u0275property("srcdoc", ctx_r1.frenchHTML(), \u0275\u0275sanitizeHtml);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 39);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 39);
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
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "inventory.header." + row_r9.label), " ");
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r9.en), " ");
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_6_Conditional_0_Template, 2, 3)(1, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_6_Conditional_1_Template, 1, 0, "i", 32);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r9.en ? 0 : 1);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, row_r9.fr), " ");
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 32);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_9_Conditional_0_Template, 2, 3)(1, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_9_Conditional_1_Template, 1, 0, "i", 32);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(row_r9.fr ? 0 : 1);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_2_Template, 1, 0, "i", 40)(3, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_5_Template, 1, 0, "i", 40)(6, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_8_Template, 1, 0, "i", 40)(9, ReviewLanguagesComponent_ng_template_83_ng_template_6_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r10 = \u0275\u0275nextContext().loading;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loading_r10 ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(loading_r10 ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(loading_r10 ? 8 : 9);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "languages.noMismatch"), " ");
  }
}
function ReviewLanguagesComponent_ng_template_83_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275conditionalCreate(2, ReviewLanguagesComponent_ng_template_83_ng_template_8_Conditional_2_Template, 1, 0, "i", 40)(3, ReviewLanguagesComponent_ng_template_83_ng_template_8_Conditional_3_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const loading_r10 = \u0275\u0275nextContext().loading;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(loading_r10 ? 2 : 3);
  }
}
function ReviewLanguagesComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-table", 23);
    \u0275\u0275template(4, ReviewLanguagesComponent_ng_template_83_ng_template_4_Template, 10, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, ReviewLanguagesComponent_ng_template_83_ng_template_6_Template, 10, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, ReviewLanguagesComponent_ng_template_83_ng_template_8_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rows_r11 = ctx.rows;
    const title_r12 = ctx.title;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "common.version." + title_r12));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", rows_r11);
  }
}
var ReviewLanguagesComponent = class _ReviewLanguagesComponent {
  sanitizer = inject(DomSanitizer);
  projectState = inject(ProjectStateService);
  compareService = inject(CompareService);
  fetchService = inject(FetchService);
  styleCardService = inject(StyleCardService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  openRouterService = inject(OpenRouterService);
  reviewLanguagesService = inject(ReviewLanguagesService);
  englishHTML = signal(void 0, ...ngDevMode ? [{ debugName: "englishHTML" }] : (
    /* istanbul ignore next */
    []
  ));
  frenchHTML = signal(void 0, ...ngDevMode ? [{ debugName: "frenchHTML" }] : (
    /* istanbul ignore next */
    []
  ));
  englishSource = signal("", ...ngDevMode ? [{ debugName: "englishSource" }] : (
    /* istanbul ignore next */
    []
  ));
  frenchSource = signal("", ...ngDevMode ? [{ debugName: "frenchSource" }] : (
    /* istanbul ignore next */
    []
  ));
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
  /** START OF HTML STRUCTURE COMPARISON */
  /** A count of all elements, classes, and attributes in English and French */
  htmlRows = signal([], ...ngDevMode ? [{ debugName: "htmlRows" }] : (
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
  /** END OF HTML STRUCTURE COMPARISON */
  /** START OF DATA COMPARISON */
  /** Refresh prototype or live data */
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
  /** END OF DATA COMPARISON */
  /** START OF NUMBER COMPARISON */
  /** END OF NUMBER COMPARISON */
  /** START OF AI SUMMARY */
  /** END OF AI SUMMARY */
  /** START OF IFRAME COMPARISON */
  /** END OF IFRAME COMPARISON */
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
  setHTML(urlEN, urlFR, isStale) {
    return __async(this, null, function* () {
      const htmlEN = yield this.fetchService.fetchContent(urlEN, "both");
      const htmlFR = yield this.fetchService.fetchContent(urlFR, "both");
      this.htmlNormalizationService.updateRelativeURLs(htmlEN, "https://www.canada.ca");
      this.htmlNormalizationService.updateRelativeURLs(htmlFR, "https://www.canada.ca");
      const htmlComparison = compareHTML(htmlEN, htmlFR);
      const srcEN = this.toSrcdoc(htmlEN);
      const srcFR = this.toSrcdoc(htmlFR);
      const rows = alignNumbers(extractNumbers(htmlEN, "en"), extractNumbers(htmlFR, "fr"));
      if (isStale())
        return;
      this.numberRows.set(rows);
      this.englishHTML.set(srcEN);
      this.frenchHTML.set(srcFR);
      this.englishSource.set(this.toPromptHtml(htmlEN));
      this.frenchSource.set(this.toPromptHtml(htmlFR));
      this.htmlRows.set(htmlComparison);
    });
  }
  toSrcdoc(doc) {
    const style = doc.createElement("style");
    style.textContent = "a, button { pointer-events: none !important; }";
    doc.head.appendChild(style);
    return this.sanitizer.bypassSecurityTrustHtml("<!DOCTYPE html>" + doc.documentElement.outerHTML);
  }
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
  enFrame = viewChild.required("enFrame");
  frFrame = viewChild.required("frFrame");
  loadedCount = 0;
  syncing = false;
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
  //Number comparison
  numberRows = signal([], ...ngDevMode ? [{ debugName: "numberRows" }] : (
    /* istanbul ignore next */
    []
  ));
  numberDiffsOnly = signal(true, ...ngDevMode ? [{ debugName: "numberDiffsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  visibleRows = computed(() => this.numberDiffsOnly() ? this.numberRows().filter((r) => !r.match) : this.numberRows(), ...ngDevMode ? [{ debugName: "visibleRows" }] : (
    /* istanbul ignore next */
    []
  ));
  //Data comparison
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
    return out;
  }
  //AI difference summary
  getSummary() {
    return __async(this, null, function* () {
      const path = this.compareService.selectedPage();
      this.reviewLanguagesService.setAiJobStatus(path, "pending");
      try {
        const content = `### English HTML
${this.englishSource()}
### French HTML
${this.frenchSource()}`;
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
  markForTranslation() {
    marker("languages.html.element");
    marker("languages.html.class");
    marker("languages.html.attribute");
  }
  static \u0275fac = function ReviewLanguagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewLanguagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewLanguagesComponent, selectors: [["aida-review-languages"]], viewQuery: function ReviewLanguagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.enFrame, _c0, 5)(ctx.frFrame, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 85, vars: 78, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["mismatchTable", ""], ["enFrame", ""], ["frFrame", ""], ["id", "wb-cont"], [1, "flex", "flex-column", "gap-2"], [1, "flex", "gap-2"], [3, "versionsToShow"], [1, "h-full"], [1, "flex", "justify-content-between", "gap-2"], [1, "mt-0"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-28rem", "min-w-max", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["scrollable", "", "scrollHeight", "12rem", "size", "small", "stripedRows", "", 3, "value"], ["fluid", "", "icon", "pi pi-refresh", "outlined", "", "styleClass", "secondary-outline min-w-15rem", 3, "onClick", "label", "loading"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["icon", "pi pi-sparkles", "styleClass", "secondary-outline", 3, "onClick", "label", "loading", "outlined"], ["role", "status", 1, "mt-2"], [1, "flex", "justify-content-center", "align-items-center", "gap-2"], ["icon", "pi pi-times-circle font-bold", "severity", "error"], [1, "flex", "justify-content-between"], ["offIcon", "pi pi-filter-slash", "onIcon", "pi pi-filter", 1, "h-2.75rem", "w-14rem", 3, "ngModelChange", "ngModel", "offLabel", "onLabel"], ["size", "small", "stripedRows", "", 3, "value"], [1, "flex", "gap-2", "compare-container"], [1, "w-4"], [1, "w-2", "text-right"], [1, "text-right"], ["colspan", "4", 1, "text-center"], [1, "pi", "pi-spinner", "pi-spin", "text-5xl", "text-primary"], [1, "loading-dots"], ["icon", "pi pi-check-circle font-bold", "severity", "success"], [1, "pi", "pi-minus", "text-xl"], [1, "w-6"], [1, "text-color-secondary"], ["colspan", "3", 1, "text-center"], [1, "px-4", "pt-4", "pb-2", "m-0", "border-bottom-1", "surface-border", "h-4rem"], ["sandbox", "allow-same-origin", 1, "w-full", "compare-frame", "border-none", 3, "load", "srcdoc"], [1, "w-2"], [1, "w-5"], [1, "pi", "pi-spinner", "pi-spin", "text-xl"]], template: function ReviewLanguagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 6);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 7)(10, "div");
      \u0275\u0275element(11, "aida-compare-select", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div")(15, "h2", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p-togglebutton", 13);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275listener("ngModelChange", function ReviewLanguagesComponent_Template_p_togglebutton_ngModelChange_21_listener($event) {
        return ctx.htmlDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p-table", 14);
      \u0275\u0275template(25, ReviewLanguagesComponent_ng_template_25_Template, 13, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(27, ReviewLanguagesComponent_ng_template_27_Template, 11, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(29, ReviewLanguagesComponent_ng_template_29_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div")(32, "div", 11)(33, "div")(34, "h2", 12);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 7)(41, "p-button", 15);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275listener("onClick", function ReviewLanguagesComponent_Template_p_button_onClick_41_listener() {
        return ctx.refresh("prototype");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p-button", 15);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275listener("onClick", function ReviewLanguagesComponent_Template_p_button_onClick_43_listener() {
        return ctx.refresh("live");
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(45, ReviewLanguagesComponent_Conditional_45_Template, 1, 5, "ng-container", 16);
      \u0275\u0275conditionalCreate(46, ReviewLanguagesComponent_Conditional_46_Template, 1, 5, "ng-container", 16);
      \u0275\u0275conditionalCreate(47, ReviewLanguagesComponent_Conditional_47_Template, 1, 5, "ng-container", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div")(49, "div", 11)(50, "div")(51, "h2", 12);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p");
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "p-button", 17);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275listener("onClick", function ReviewLanguagesComponent_Template_p_button_onClick_57_listener() {
        return ctx.getSummary();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 18);
      \u0275\u0275conditionalCreate(60, ReviewLanguagesComponent_Case_60_Template, 6, 3, "div", 19)(61, ReviewLanguagesComponent_Case_61_Template, 3, 3, "p-message", 20)(62, ReviewLanguagesComponent_Case_62_Template, 3, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div")(64, "div", 21)(65, "div")(66, "h2", 12);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "p-togglebutton", 22);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275listener("ngModelChange", function ReviewLanguagesComponent_Template_p_togglebutton_ngModelChange_72_listener($event) {
        return ctx.numberDiffsOnly.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "p-table", 23);
      \u0275\u0275template(76, ReviewLanguagesComponent_ng_template_76_Template, 7, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(78, ReviewLanguagesComponent_ng_template_78_Template, 7, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(80, ReviewLanguagesComponent_ng_template_80_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(82, ReviewLanguagesComponent_Conditional_82_Template, 11, 6, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, ReviewLanguagesComponent_ng_template_83_Template, 10, 4, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_25_0;
      let tmp_36_0;
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 42, "languages._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 44, "languages.description"), "", \u0275\u0275pipeBind1(6, 46, "languages.description2"));
      \u0275\u0275advance(6);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance();
      \u0275\u0275property("versionsToShow", 1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 48, "languages.htmlStructure.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 50, "languages.htmlStructure.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.htmlDiffsOnly())("offLabel", \u0275\u0275pipeBind1(22, 52, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(23, 54, "common.toggle.showingDiffs"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.visibleHtmlRows());
      \u0275\u0275advance(7);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 56, "languages.dataCompare.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 58, "languages.dataCompare.description"));
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(42, 60, "languages.refreshProto"))("loading", ctx.projectState.refreshing().prototype);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 62, "languages.refreshLive"))("loading", ctx.projectState.refreshing().live);
      const data_r13 = (tmp_25_0 = ctx.selectedNode()) == null ? null : tmp_25_0.data;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((data_r13 == null ? null : data_r13.baseline) ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((data_r13 == null ? null : data_r13.prototype) ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((data_r13 == null ? null : data_r13.live) ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 64, "languages.aiSummary.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 66, "languages.aiSummary.description"));
      const status_r14 = ctx.reviewLanguagesService.getAiJobStatus(ctx.compareService.selectedPage());
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(58, 68, "languages.generateSummary"))("loading", status_r14 === "pending")("outlined", status_r14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_36_0 = status_r14) === "pending" ? 60 : tmp_36_0 === "error" ? 61 : tmp_36_0 === "done" ? 62 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.styleCardService.cardStyles());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 70, "languages.numbers.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 72, "languages.numbers.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.numberDiffsOnly())("offLabel", \u0275\u0275pipeBind1(73, 74, "common.toggle.showingAll"))("onLabel", \u0275\u0275pipeBind1(74, 76, "common.toggle.showingDiffs"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.visibleRows());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.englishHTML() && ctx.frenchHTML() ? 82 : -1);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, NgTemplateOutlet, ButtonModule, Button, MessageModule, Message, TableModule, Table, ToggleButtonModule, ToggleButton, CompareSelectComponent, TranslatePipe], styles: ["\n.compare-container[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n.compare-frame[_ngcontent-%COMP%] {\n  height: 72vh;\n}\n/*# sourceMappingURL=review-languages.component-CJHHILNK.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewLanguagesComponent, [{
    type: Component,
    args: [{ selector: "aida-review-languages", imports: [FormsModule, NgTemplateOutlet, TranslatePipe, ButtonModule, MessageModule, TableModule, ToggleButtonModule, CompareSelectComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'languages._title' | translate }}</h1>
<p>{{ 'languages.description' | translate }}{{ 'languages.description2' | translate }}</p>
<div class="flex flex-column gap-2">
  <div class="flex gap-2">
    <div class="flex flex-column gap-2">
      <div [class]="styleCardService.cardStyles()">
        <aida-compare-select [versionsToShow]="1" />
      </div>

      <div [class]="styleCardService.cardStyles()" class="h-full">
        <div class="flex justify-content-between gap-2">
          <div>
            <h2 class="mt-0">{{ 'languages.htmlStructure.header' | translate }}</h2>
            <p>{{ 'languages.htmlStructure.description' | translate }}</p>
          </div>
          <p-togglebutton
            [ngModel]="htmlDiffsOnly()"
            [offLabel]="'common.toggle.showingAll' | translate"
            [onLabel]="'common.toggle.showingDiffs' | translate"
            (ngModelChange)="htmlDiffsOnly.set($event)"
            class="h-2.75rem w-28rem min-w-max"
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
      </div>
    </div>

    <div [class]="styleCardService.cardStyles()">
      <div class="flex justify-content-between gap-2">
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
    </div>
  </div>

  <div [class]="styleCardService.cardStyles()">
    <div class="flex justify-content-between gap-2">
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
  </div>

  <div [class]="styleCardService.cardStyles()">
    <div class="flex justify-content-between">
      <div>
        <h2 class="mt-0">{{ 'languages.numbers.header' | translate }}</h2>
        <p>{{ 'languages.numbers.description' | translate }}</p>
      </div>
      <p-togglebutton
        [ngModel]="numberDiffsOnly()"
        [offLabel]="'common.toggle.showingAll' | translate"
        [onLabel]="'common.toggle.showingDiffs' | translate"
        (ngModelChange)="numberDiffsOnly.set($event)"
        class="h-2.75rem w-14rem"
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
  </div>

  @if (englishHTML() && frenchHTML()) {
    <div class="flex gap-2 compare-container">
      <div [class]="styleCardService.cardStyles(undefined, undefined, true)" class="h-full">
        <h2 class="px-4 pt-4 pb-2 m-0 border-bottom-1 surface-border h-4rem">English page</h2>
        <iframe [srcdoc]="englishHTML()" (load)="onFrameLoad()" class="w-full compare-frame border-none" #enFrame sandbox="allow-same-origin"></iframe>
      </div>
      <div [class]="styleCardService.cardStyles(undefined, undefined, true)">
        <h2 class="px-4 pt-4 pb-2 m-0 border-bottom-1 surface-border h-4rem">French page</h2>
        <iframe [srcdoc]="frenchHTML()" (load)="onFrameLoad()" class="w-full compare-frame border-none" #frFrame sandbox="allow-same-origin"></iframe>
      </div>
    </div>
  }
</div>

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
`, styles: ["/* src/app/views/tasks/review-languages/review-languages.component.css */\n.compare-container {\n  height: 80vh;\n}\n.compare-frame {\n  height: 72vh;\n}\n/*# sourceMappingURL=review-languages.component-CJHHILNK.css.map */\n"] }]
  }], () => [], { enFrame: [{ type: ViewChild, args: ["enFrame", { isSignal: true }] }], frFrame: [{ type: ViewChild, args: ["frFrame", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewLanguagesComponent, { className: "ReviewLanguagesComponent", filePath: "src/app/views/tasks/review-languages/review-languages.component.ts", lineNumber: 46 });
})();
export {
  ReviewLanguagesComponent
};
//# sourceMappingURL=chunk-RZUS5VDC.js.map
