// src/app/utilities/html/normalizer.util.ts
var SPACES = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
function normalizeText(text) {
  return text.replace(/[\u00AD\u200B-\u200D\uFEFF]/g, "").replace(SPACES, " ").replace(/\s+/g, " ").trim();
}

// src/app/views/tasks/compare-languages/compare-hidden/compare-hidden.ts
var ALL_CLASSES = /* @__PURE__ */ new Set(["hidden", "hide", "invisible"]);
var VISUAL_CLASSES = /* @__PURE__ */ new Set(["wb-inv", "sr-only"]);
var WEB_CLASSES = /* @__PURE__ */ new Set(["visible-print", "wbdisable-show", "nojs-show"]);
var PRINT_CLASSES = /* @__PURE__ */ new Set(["hidden-print"]);
var RESPONSIVE_CLASSES = /* @__PURE__ */ new Set(["hidden-xs", "hidden-sm", "hidden-md", "hidden-lg", "visible-xs", "visible-sm", "visible-md", "visible-lg"]);
var TYPE_ORDER = ["all", "visual", "screenreaders", "web", "print", "responsive"];
var LANGUAGE_SENSITIVE = /[$€£¥%]|\d[.,]\d/;
function classify(el) {
  const all = [];
  const visual = [];
  const sr = [];
  const web = [];
  const print = [];
  const responsive = [];
  el.classList.forEach((c) => {
    if (ALL_CLASSES.has(c))
      all.push(`class: ${c}`);
    else if (VISUAL_CLASSES.has(c))
      visual.push(`class: ${c}`);
    else if (WEB_CLASSES.has(c))
      web.push(`class: ${c}`);
    else if (PRINT_CLASSES.has(c))
      print.push(`class: ${c}`);
    else if (RESPONSIVE_CLASSES.has(c))
      responsive.push(`class: ${c}`);
  });
  if (el.hasAttribute("hidden"))
    all.push("attribute: hidden");
  const style = el.style;
  if (style?.display === "none")
    all.push("style: display:none");
  if (style?.visibility === "hidden")
    all.push("style: visibility:hidden");
  if (el.getAttribute("aria-hidden") === "true")
    sr.push('attribute: aria-hidden="true"');
  if (!all.length && !visual.length && !sr.length && !web.length && !print.length && !responsive.length) {
    return null;
  }
  const type = all.length || visual.length && sr.length ? "all" : visual.length ? "visual" : sr.length ? "screenreaders" : web.length ? "web" : print.length ? "print" : "responsive";
  return { type, reasons: [...all, ...visual, ...sr, ...web, ...print, ...responsive] };
}
function extractHidden(doc) {
  const root = (doc.querySelector("main") ?? doc.body).cloneNode(true);
  root.querySelectorAll("script,style,noscript").forEach((n) => n.remove());
  const hits = [];
  const hiddenForAll = /* @__PURE__ */ new Set();
  root.querySelectorAll("*").forEach((el) => {
    for (let p = el.parentElement; p && p !== root; p = p.parentElement) {
      if (hiddenForAll.has(p))
        return;
    }
    if (el.tagName === "IMG") {
      const result2 = classify(el);
      if (result2 && result2.type !== "visual" || el.closest('[aria-hidden="true"]'))
        return;
      const alt = normalizeText(el.getAttribute("alt") ?? "");
      if (alt)
        hits.push({ type: "visual", name: "attribute: alt", text: alt });
      return;
    }
    const result = classify(el);
    if (!result)
      return;
    if (result.type === "all")
      hiddenForAll.add(el);
    const text = normalizeText(el.textContent ?? "");
    if (!text)
      return;
    hits.push({ type: result.type, name: result.reasons.join(", "), text });
  });
  return hits;
}
var keyOf = (h) => `${h.type}|${h.name}`;
function isLanguageNeutral(text) {
  return !new RegExp("\\p{L}", "u").test(text) && !LANGUAGE_SENSITIVE.test(text);
}
function status(en, fr) {
  if (en === void 0 || fr === void 0)
    return "missing";
  if (en !== fr)
    return "ok";
  return isLanguageNeutral(en) ? "ok" : "identical";
}
function compareHidden(docEN, docFR) {
  const en = extractHidden(docEN);
  const fr = extractHidden(docFR);
  const lcsLength = Array.from({ length: en.length + 1 }, () => new Array(fr.length + 1).fill(0));
  for (let i2 = en.length - 1; i2 >= 0; i2--)
    for (let j2 = fr.length - 1; j2 >= 0; j2--)
      lcsLength[i2][j2] = keyOf(en[i2]) === keyOf(fr[j2]) ? lcsLength[i2 + 1][j2 + 1] + 1 : Math.max(lcsLength[i2 + 1][j2], lcsLength[i2][j2 + 1]);
  const rows = [];
  const push = (english, french) => {
    const src = english ?? french;
    rows.push({ type: src.type, name: src.name, en: english?.text, fr: french?.text, status: status(english?.text, french?.text) });
  };
  let i = 0;
  let j = 0;
  while (i < en.length && j < fr.length) {
    if (keyOf(en[i]) === keyOf(fr[j]))
      push(en[i++], fr[j++]);
    else if (lcsLength[i + 1][j] >= lcsLength[i][j + 1])
      push(en[i++]);
    else
      push(void 0, fr[j++]);
  }
  while (i < en.length)
    push(en[i++]);
  while (j < fr.length)
    push(void 0, fr[j++]);
  return rows.sort((x, y) => TYPE_ORDER.indexOf(x.type) - TYPE_ORDER.indexOf(y.type));
}

export {
  normalizeText,
  ALL_CLASSES,
  VISUAL_CLASSES,
  WEB_CLASSES,
  PRINT_CLASSES,
  RESPONSIVE_CLASSES,
  compareHidden
};
//# sourceMappingURL=chunk-Z3UJ6P2Q.js.map
