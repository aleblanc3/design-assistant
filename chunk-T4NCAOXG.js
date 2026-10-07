import {
  CommonModule,
  Router,
  Title
} from "./chunk-TULSGE2I.js";
import {
  Component,
  DOCUMENT,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  PLATFORM_ID,
  Subject,
  TemplateRef,
  TranslateService,
  effect,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-LBDVV6V6.js";
import {
  preset_default
} from "./chunk-DKTF6WIM.js";
import {
  preset_custom_default
} from "./chunk-G55EJPVD.js";
import {
  preset_deutan_default
} from "./chunk-7XEOGBZ2.js";
import {
  preset_protan_default
} from "./chunk-3RPP55HA.js";
import {
  preset_tritan_default
} from "./chunk-DBOW7BSZ.js";
import {
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/utils/dist/object/index.mjs
function l(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function b(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (e === t) return true;
  if (!e || !t || typeof e != "object" || typeof t != "object" || n.has(e) || n.has(t)) return false;
  n.add(e).add(t);
  let o = Array.isArray(e), r = Array.isArray(t), u, f, T2;
  if (o && r) {
    if (f = e.length, f != t.length) return false;
    for (u = f; u-- !== 0; ) if (!b(e[u], t[u], n)) return false;
    return true;
  }
  if (o != r) return false;
  let S3 = e instanceof Date, A2 = t instanceof Date;
  if (S3 != A2) return false;
  if (S3 && A2) return e.getTime() == t.getTime();
  let I2 = e instanceof RegExp, L2 = t instanceof RegExp;
  if (I2 != L2) return false;
  if (I2 && L2) return e.toString() == t.toString();
  let F4 = Object.keys(e);
  if (f = F4.length, f !== Object.keys(t).length) return false;
  for (u = f; u-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, F4[u])) return false;
  for (u = f; u-- !== 0; ) if (T2 = F4[u], !b(e[T2], t[T2], n)) return false;
  return true;
}
function y(e, t) {
  return b(e, t);
}
function c(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function s(e) {
  return !l(e);
}
function p(e, t) {
  if (!e || !t) return null;
  try {
    let n = e[t];
    if (s(n)) return n;
  } catch (n) {
  }
  if (Object.keys(e).length) {
    if (c(t)) return t(e);
    if (t.indexOf(".") === -1) return e[t];
    {
      let n = t.split("."), o = e;
      for (let r = 0, u = n.length; r < u; ++r) {
        if (o == null) return null;
        o = o[n[r]];
      }
      return o;
    }
  }
  return null;
}
function k(e, t, n) {
  return n ? p(e, n) === p(t, n) : y(e, t);
}
function q(e, t) {
  if (e != null && t && t.length) {
    for (let n of t) if (k(e, n)) return true;
  }
  return false;
}
function i(e, t = true) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function V(e, t) {
  let n = -1;
  if (s(e)) try {
    n = e.findLastIndex(t);
  } catch (o) {
    n = e.lastIndexOf([...e].reverse().find(t));
  }
  return n;
}
function m(e, ...t) {
  return c(e) ? e(...t) : e;
}
function a(e, t = true) {
  return typeof e == "string" && (t || e !== "");
}
function g(e) {
  return a(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function R(e, t = "", n = {}) {
  let o = g(t).split("."), r = o.shift();
  if (r) {
    if (i(e)) {
      let u = Object.keys(e).find((f) => g(f) === r) || "";
      return R(m(e[u], n), o.join("."), n);
    }
    return;
  }
  return m(e, n);
}
function h(e, t = true) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function E(e) {
  return e instanceof Date;
}
function J(e = "") {
  return s(e) && e.length === 1 && !!e.match(/\S| /);
}
function Y(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function X(e) {
  if (e && /[\xC0-\xFF\u0100-\u017E]/.test(e)) {
    let n = { A: /[\xC0-\xC5\u0100\u0102\u0104]/g, AE: /[\xC6]/g, C: /[\xC7\u0106\u0108\u010A\u010C]/g, D: /[\xD0\u010E\u0110]/g, E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g, G: /[\u011C\u011E\u0120\u0122]/g, H: /[\u0124\u0126]/g, I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g, IJ: /[\u0132]/g, J: /[\u0134]/g, K: /[\u0136]/g, L: /[\u0139\u013B\u013D\u013F\u0141]/g, N: /[\xD1\u0143\u0145\u0147\u014A]/g, O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g, OE: /[\u0152]/g, R: /[\u0154\u0156\u0158]/g, S: /[\u015A\u015C\u015E\u0160]/g, T: /[\u0162\u0164\u0166]/g, U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g, W: /[\u0174]/g, Y: /[\xDD\u0176\u0178]/g, Z: /[\u0179\u017B\u017D]/g, a: /[\xE0-\xE5\u0101\u0103\u0105]/g, ae: /[\xE6]/g, c: /[\xE7\u0107\u0109\u010B\u010D]/g, d: /[\u010F\u0111]/g, e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g, g: /[\u011D\u011F\u0121\u0123]/g, i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g, ij: /[\u0133]/g, j: /[\u0135]/g, k: /[\u0137,\u0138]/g, l: /[\u013A\u013C\u013E\u0140\u0142]/g, n: /[\xF1\u0144\u0146\u0148\u014B]/g, p: /[\xFE]/g, o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g, oe: /[\u0153]/g, r: /[\u0155\u0157\u0159]/g, s: /[\u015B\u015D\u015F\u0161]/g, t: /[\u0163\u0165\u0167]/g, u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g, w: /[\u0175]/g, y: /[\xFD\xFF\u0177]/g, z: /[\u017A\u017C\u017E]/g };
    for (let o in n) e = e.replace(n[o], o);
  }
  return e;
}

// node_modules/@primeuix/utils/dist/dom/index.mjs
function k2(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : false;
}
function P(t, e) {
  if (t && e) {
    let o = (n) => {
      k2(t, n) || (t.classList ? t.classList.add(n) : t.className += " " + n);
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function F() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function lt(t) {
  typeof t == "string" ? P(document.body, t || "p-overflow-hidden") : (t != null && t.variableName && document.body.style.setProperty(t.variableName, F() + "px"), P(document.body, (t == null ? void 0 : t.className) || "p-overflow-hidden"));
}
function M(t, e) {
  if (t && e) {
    let o = (n) => {
      t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function dt(t) {
  typeof t == "string" ? M(document.body, t || "p-overflow-hidden") : (t != null && t.variableName && document.body.style.removeProperty(t.variableName), M(document.body, (t == null ? void 0 : t.className) || "p-overflow-hidden"));
}
function E2(t) {
  for (let e of document == null ? void 0 : document.styleSheets) try {
    for (let o of e == null ? void 0 : e.cssRules) for (let n of o == null ? void 0 : o.style) if (t.test(n)) return { name: n, value: o.style.getPropertyValue(n).trim() };
  } catch (o) {
  }
  return null;
}
function v(t) {
  let e = { width: 0, height: 0 };
  if (t) {
    let [o, n] = [t.style.visibility, t.style.display], r = t.getBoundingClientRect();
    t.style.visibility = "hidden", t.style.display = "block", e.width = r.width || t.offsetWidth, e.height = r.height || t.offsetHeight, t.style.display = n, t.style.visibility = o;
  }
  return e;
}
function y2() {
  let t = window, e = document, o = e.documentElement, n = e.getElementsByTagName("body")[0], r = t.innerWidth || o.clientWidth || n.clientWidth, i3 = t.innerHeight || o.clientHeight || n.clientHeight;
  return { width: r, height: i3 };
}
function S(t) {
  return t ? Math.abs(t.scrollLeft) : 0;
}
function $() {
  let t = document.documentElement;
  return (window.pageXOffset || S(t)) - (t.clientLeft || 0);
}
function D() {
  let t = document.documentElement;
  return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
}
function I(t) {
  return t ? getComputedStyle(t).direction === "rtl" : false;
}
function V2(t, e, o = true) {
  var n, r, i3, s4;
  if (t) {
    let a3 = t.offsetParent ? { width: t.offsetWidth, height: t.offsetHeight } : v(t), l3 = a3.height, d = a3.width, f = e.offsetHeight, c3 = e.offsetWidth, u = e.getBoundingClientRect(), g2 = D(), w = $(), st2 = y2(), W, N2, nt2 = "top";
    u.top + f + l3 > st2.height ? (W = u.top + g2 - l3, nt2 = "bottom", W < 0 && (W = g2)) : W = f + u.top + g2, u.left + d > st2.width ? N2 = Math.max(0, u.left + w + c3 - d) : N2 = u.left + w, I(t) ? t.style.insetInlineEnd = N2 + "px" : t.style.insetInlineStart = N2 + "px", t.style.top = W + "px", t.style.transformOrigin = nt2, o && (t.style.marginTop = nt2 === "bottom" ? `calc(${(r = (n = E2(/-anchor-gutter$/)) == null ? void 0 : n.value) != null ? r : "2px"} * -1)` : (s4 = (i3 = E2(/-anchor-gutter$/)) == null ? void 0 : i3.value) != null ? s4 : "");
  }
}
function T(t, e) {
  t && (typeof e == "string" ? t.style.cssText = e : Object.entries(e || {}).forEach(([o, n]) => t.style[o] = n));
}
function C(t, e) {
  if (t instanceof HTMLElement) {
    let o = t.offsetWidth;
    if (e) {
      let n = getComputedStyle(t);
      o += parseFloat(n.marginLeft) + parseFloat(n.marginRight);
    }
    return o;
  }
  return 0;
}
function j(t, e, o = true, n = void 0) {
  var r;
  if (t) {
    let i3 = t.offsetParent ? { width: t.offsetWidth, height: t.offsetHeight } : v(t), s4 = e.offsetHeight, a3 = e.getBoundingClientRect(), l3 = y2(), d, f, c3 = n != null ? n : "top";
    if (!n && a3.top + s4 + i3.height > l3.height ? (d = -1 * i3.height, c3 = "bottom", a3.top + d < 0 && (d = -1 * a3.top)) : d = s4, i3.width > l3.width ? f = a3.left * -1 : a3.left + i3.width > l3.width ? f = (a3.left + i3.width - l3.width) * -1 : f = 0, t.style.top = d + "px", t.style.insetInlineStart = f + "px", t.style.transformOrigin = c3, o) {
      let u = (r = E2(/-anchor-gutter$/)) == null ? void 0 : r.value;
      t.style.marginTop = c3 === "bottom" ? `calc(${u != null ? u : "2px"} * -1)` : u != null ? u : "";
    }
  }
}
function h2(t) {
  if (t) {
    let e = t.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function H(t) {
  return !!(t !== null && typeof t != "undefined" && t.nodeName && h2(t));
}
function p2(t) {
  return typeof Element != "undefined" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function b2(t) {
  var o;
  if (p2(t)) return t;
  if (!t || typeof t != "object") return;
  let e = t;
  if ("current" in t) e = t.current, e = (o = b2(e == null ? void 0 : e.elementRef)) != null ? o : e;
  else if ("value" in t) e = t.value;
  else if ("nativeElement" in t) e = t.nativeElement;
  else if ("el" in t) {
    let n = t.el;
    n && typeof n == "object" && "nativeElement" in n ? e = n.nativeElement : e = n;
  } else if ("elementRef" in t) return b2(t.elementRef);
  return e = m(e), p2(e) ? e : void 0;
}
function U(t, e) {
  var o, n, r;
  if (t) switch (t) {
    case "document":
      return document;
    case "window":
      return window;
    case "body":
      return document.body;
    case "@next":
      return e == null ? void 0 : e.nextElementSibling;
    case "@prev":
      return e == null ? void 0 : e.previousElementSibling;
    case "@first":
      return e == null ? void 0 : e.firstElementChild;
    case "@last":
      return e == null ? void 0 : e.lastElementChild;
    case "@child":
      return (o = e == null ? void 0 : e.children) == null ? void 0 : o[0];
    case "@parent":
      return e == null ? void 0 : e.parentElement;
    case "@grandparent":
      return (n = e == null ? void 0 : e.parentElement) == null ? void 0 : n.parentElement;
    default: {
      if (typeof t == "string") {
        let l3 = t.match(/^@child\[(\d+)]/);
        return l3 ? ((r = e == null ? void 0 : e.children) == null ? void 0 : r[parseInt(l3[1], 10)]) || null : document.querySelector(t) || null;
      }
      let s4 = ((l3) => typeof l3 == "function" && "call" in l3 && "apply" in l3)(t) ? t() : t, a3 = b2(s4);
      return H(a3) ? a3 : (s4 == null ? void 0 : s4.nodeType) === 9 ? s4 : void 0;
    }
  }
}
function ut(t, e) {
  let o = U(t, e);
  if (o) o.appendChild(e);
  else throw new Error("Cannot append " + e + " to " + t);
}
var it;
function A(t) {
  if (t) {
    let e = getComputedStyle(t);
    return t.offsetWidth - t.clientWidth - parseFloat(e.borderLeftWidth) - parseFloat(e.borderRightWidth);
  } else {
    if (it != null) return it;
    let e = document.createElement("div");
    T(e, { width: "100px", height: "100px", overflow: "scroll", position: "absolute", top: "-9999px" }), document.body.appendChild(e);
    let o = e.offsetWidth - e.clientWidth;
    return document.body.removeChild(e), it = o, o;
  }
}
function O(t, e = {}) {
  if (p2(t)) {
    let o = (r, i3) => {
      var a3, l3;
      let s4 = (a3 = t == null ? void 0 : t.$attrs) != null && a3[r] ? [(l3 = t == null ? void 0 : t.$attrs) == null ? void 0 : l3[r]] : [];
      return [i3].flat().reduce((d, f) => {
        if (f != null) {
          let c3 = typeof f;
          if (c3 === "string" || c3 === "number") d.push(f);
          else if (c3 === "object") {
            let u = Array.isArray(f) ? o(r, f) : Object.entries(f).map(([g2, w]) => r === "style" && (w || w === 0) ? `${g2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${w}` : w ? g2 : void 0);
            d = u.length ? d.concat(u.filter((g2) => !!g2)) : d;
          }
        }
        return d;
      }, s4);
    }, n = (r) => {
      o("style", r).forEach((s4) => {
        let a3 = s4.indexOf(":");
        if (a3 < 0) return;
        let l3 = s4.slice(0, a3).trim(), d = s4.slice(a3 + 1).trim();
        l3 && t.style.setProperty(l3, d);
      });
    };
    Object.entries(e).forEach(([r, i3]) => {
      if (i3 != null) {
        let s4 = r.match(/^on(.+)/);
        s4 ? t.addEventListener(s4[1].toLowerCase(), i3) : r === "p-bind" || r === "pBind" ? O(t, i3) : r === "style" ? (n(i3), (t.$attrs = t.$attrs || {}) && (t.$attrs[r] = t.style.cssText)) : (i3 = r === "class" ? [...new Set(o("class", i3))].join(" ").trim() : i3, (t.$attrs = t.$attrs || {}) && (t.$attrs[r] = i3), t.setAttribute(r, i3));
      }
    });
  }
}
function q2(t, e = {}, ...o) {
  if (t) {
    let n = document.createElement(t);
    return O(n, e), n.append(...o), n;
  }
}
function yt(t, e) {
  if (t) {
    t.style.opacity = "0";
    let o = +/* @__PURE__ */ new Date(), n = "0", r = function() {
      n = `${+t.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - o) / e}`, t.style.opacity = n, o = +/* @__PURE__ */ new Date(), +n < 1 && ("requestAnimationFrame" in window ? requestAnimationFrame(r) : setTimeout(r, 16));
    };
    r();
  }
}
function Y2(t, e) {
  return p2(t) ? Array.from(t.querySelectorAll(e)) : [];
}
function Z(t, e) {
  return p2(t) ? t.matches(e) ? t : t.querySelector(e) : null;
}
function bt(t, e) {
  t && document.activeElement !== t && t.focus(e);
}
function Q(t, e) {
  if (p2(t)) {
    let o = t.getAttribute(e);
    return isNaN(o) ? o === "true" || o === "false" ? o === "true" : o : +o;
  }
}
function G() {
  let t = navigator.userAgent.toLowerCase(), e = /(chrome)[ ]([\w.]+)/.exec(t) || /(webkit)[ ]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
  return { browser: e[1] || "", version: e[2] || "0" };
}
var m2 = null;
function xt() {
  if (!m2) {
    m2 = {};
    let t = G();
    t.browser && (m2[t.browser] = true, m2.version = t.version), m2.chrome ? m2.webkit = true : m2.webkit && (m2.safari = true);
  }
  return m2;
}
function x(t, e = "") {
  let o = Y2(t, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`), n = [];
  for (let r of o) getComputedStyle(r).display != "none" && getComputedStyle(r).visibility != "hidden" && n.push(r);
  return n;
}
function vt(t, e) {
  let o = x(t, e);
  return o.length > 0 ? o[0] : null;
}
function Tt(t) {
  if (t) {
    let e = t.offsetHeight, o = getComputedStyle(t);
    return e -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), e;
  }
  return 0;
}
function J2(t) {
  if (t) {
    let [e, o] = [t.style.visibility, t.style.display];
    t.style.visibility = "hidden", t.style.display = "block";
    let n = t.offsetHeight;
    return t.style.display = o, t.style.visibility = e, n;
  }
  return 0;
}
function K(t) {
  if (t) {
    let [e, o] = [t.style.visibility, t.style.display];
    t.style.visibility = "hidden", t.style.display = "block";
    let n = t.offsetWidth;
    return t.style.display = o, t.style.visibility = e, n;
  }
  return 0;
}
function Ct(t) {
  var e;
  if (t) {
    let o = (e = h2(t)) == null ? void 0 : e.childNodes, n = 0;
    if (o) for (let r = 0; r < o.length; r++) {
      if (o[r] === t) return n;
      o[r].nodeType === 1 && n++;
    }
  }
  return -1;
}
function Lt(t, e) {
  let o = x(t, e);
  return o.length > 0 ? o[o.length - 1] : null;
}
function _(t) {
  if (t) {
    let e = t.getBoundingClientRect();
    return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e.left + (window.pageXOffset || S(document.documentElement) || S(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function L(t, e) {
  if (t) {
    let o = t.offsetHeight;
    if (e) {
      let n = getComputedStyle(t);
      o += parseFloat(n.marginTop) + parseFloat(n.marginBottom);
    }
    return o;
  }
  return 0;
}
function Ot() {
  if (window.getSelection) return window.getSelection().toString();
  if (document.getSelection) return document.getSelection().toString();
}
function Nt(t) {
  if (t) {
    let e = t.offsetWidth, o = getComputedStyle(t);
    return e -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), e;
  }
  return 0;
}
function $t() {
  return /(android)/i.test(navigator.userAgent);
}
function tt(t, e, o) {
  return p2(t) ? Q(t, e) === o : false;
}
function It(t) {
  if (t) {
    let e = t.nodeName, o = t.parentElement && t.parentElement.nodeName;
    return e === "INPUT" || e === "TEXTAREA" || e === "BUTTON" || e === "A" || o === "INPUT" || o === "TEXTAREA" || o === "BUTTON" || o === "A" || !!t.closest(".p-button, .p-checkbox, .p-radiobutton");
  }
  return false;
}
function ot(t) {
  return !!(t && t.offsetParent != null);
}
function qt() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
}
function Yt() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Zt(t, e) {
  var o, n;
  if (t) {
    let r = t.parentElement, i3 = _(r), s4 = y2(), a3 = t.offsetParent ? t.offsetWidth : K(t), l3 = t.offsetParent ? t.offsetHeight : J2(t), d = C((o = r == null ? void 0 : r.children) == null ? void 0 : o[0]), f = L((n = r == null ? void 0 : r.children) == null ? void 0 : n[0]), c3 = "", u = "";
    i3.left + d + a3 > s4.width - A() ? i3.left < a3 ? e % 2 === 1 ? c3 = i3.left ? "-" + i3.left + "px" : "100%" : e % 2 === 0 && (c3 = s4.width - a3 - A() + "px") : c3 = "-100%" : c3 = "100%", t.getBoundingClientRect().top + f + l3 > s4.height ? u = `-${l3 - f}px` : u = "0px", t.style.top = u, t.style.insetInlineStart = c3;
  }
}
function Qt() {
  return new Promise((t) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(t);
    });
  });
}
function Gt(t) {
  var e;
  t && ("remove" in Element.prototype ? t.remove() : (e = t.parentNode) == null || e.removeChild(t));
}
function Jt(t, e) {
  let o = b2(t);
  if (o) o.removeChild(e);
  else throw new Error("Cannot remove " + e + " from " + t);
}
function _t(t, e) {
  let o = getComputedStyle(t).getPropertyValue("borderTopWidth"), n = o ? parseFloat(o) : 0, r = getComputedStyle(t).getPropertyValue("paddingTop"), i3 = r ? parseFloat(r) : 0, s4 = t.getBoundingClientRect(), l3 = e.getBoundingClientRect().top + document.body.scrollTop - (s4.top + document.body.scrollTop) - n - i3, d = t.scrollTop, f = t.clientHeight, c3 = L(e);
  l3 < 0 ? t.scrollTop = d + l3 : l3 + c3 > f && (t.scrollTop = d + l3 - f + c3);
}
function te(t, e = "", o) {
  if (p2(t) && o !== null && o !== void 0) {
    if (e === "style") {
      typeof o == "string" ? t.style.cssText = o : typeof o == "object" && Object.entries(o).forEach(([n, r]) => {
        if (r == null) return;
        let i3 = n.startsWith("--") ? n : n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        t.style.setProperty(i3, String(r));
      });
      return;
    }
    t.setAttribute(e, o);
  }
}

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static \u0275fac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterOperator = class {
  static AND = "and";
  static OR = "or";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = p(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) == X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) != X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i3 = 0; i3 < filter.length; i3++) {
        if (k(value, filter[i3])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static \u0275fac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FilterService,
    factory: _FilterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageService,
    factory: _MessageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  parentDragSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  parentDragObservable = this.parentDragSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  emitParentDrag(container) {
    this.parentDragSource.next(container);
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayService,
    factory: _OverlayService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static \u0275fac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer],
    imports: [CommonModule, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var TranslationKeys = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static NO_FILTER = "noFilter";
  static LT = "lt";
  static LTE = "lte";
  static GT = "gt";
  static GTE = "gte";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static CLEAR = "clear";
  static APPLY = "apply";
  static MATCH_ALL = "matchAll";
  static MATCH_ANY = "matchAny";
  static ADD_RULE = "addRule";
  static REMOVE_RULE = "removeRule";
  static ACCEPT = "accept";
  static REJECT = "reject";
  static CHOOSE = "choose";
  static UPLOAD = "upload";
  static CANCEL = "cancel";
  static PENDING = "pending";
  static FILE_SIZE_TYPES = "fileSizeTypes";
  static DAY_NAMES = "dayNames";
  static DAY_NAMES_SHORT = "dayNamesShort";
  static DAY_NAMES_MIN = "dayNamesMin";
  static MONTH_NAMES = "monthNames";
  static MONTH_NAMES_SHORT = "monthNamesShort";
  static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
  static TODAY = "today";
  static WEEK_HEADER = "weekHeader";
  static WEAK = "weak";
  static MEDIUM = "medium";
  static STRONG = "strong";
  static PASSWORD_PROMPT = "passwordPrompt";
  static EMPTY_MESSAGE = "emptyMessage";
  static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
  static SHOW_FILTER_MENU = "showFilterMenu";
  static HIDE_FILTER_MENU = "hideFilterMenu";
  static SELECTION_MESSAGE = "selectionMessage";
  static ARIA = "aria";
  static SELECT_COLOR = "selectColor";
  static BROWSE_FILES = "browseFiles";
};
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static \u0275fac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@primeuix/styled/node_modules/@primeuix/utils/dist/object/index.mjs
function l2(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function c2(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function s2(e) {
  return !l2(e);
}
function i2(e, t = true) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function m3(e, ...t) {
  return c2(e) ? e(...t) : e;
}
function a2(e, t = true) {
  return typeof e == "string" && (t || e !== "");
}
function z(e) {
  return s2(e) && !isNaN(e);
}
function G2(e, t) {
  if (t) {
    let n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return false;
}
function Y3(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function re(e) {
  return a2(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}

// node_modules/@primeuix/styled/node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s3() {
  let r = /* @__PURE__ */ new Map();
  return { on(e, t) {
    let n = r.get(e);
    return n ? n.push(t) : n = [t], r.set(e, n), this;
  }, off(e, t) {
    let n = r.get(e);
    return n && n.splice(n.indexOf(t) >>> 0, 1), this;
  }, emit(e, t) {
    let n = r.get(e);
    n && n.forEach((i3) => {
      i3(t);
    });
  }, clear() {
    r.clear();
  } };
}

// node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F3 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e, t, r) => t in e ? rt(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var h3 = (e, t) => {
  for (var r in t || (t = {})) xe.call(t, r) && _e(e, r, t[r]);
  if (F3) for (var r of F3(t)) be.call(t, r) && _e(e, r, t[r]);
  return e;
};
var $2 = (e, t) => st(e, nt(t));
var v2 = (e, t) => {
  var r = {};
  for (var s4 in e) xe.call(e, s4) && t.indexOf(s4) < 0 && (r[s4] = e[s4]);
  if (e != null && F3) for (var s4 of F3(e)) t.indexOf(s4) < 0 && be.call(e, s4) && (r[s4] = e[s4]);
  return r;
};
var at = s3();
var N = at;
var k3 = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie = /var\([^)]+\)/g;
function oe(e) {
  return a2(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
  return i2(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function dt2(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q2(e = "", t = "") {
  return dt2(`${a2(e, false) && a2(t, false) ? `${e}-` : e}${t}`);
}
function ae(e = "", t = "") {
  return `--${Q2(e, t)}`;
}
function ht(e = "") {
  let t = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (t + r) % 2 !== 0;
}
function Y4(e, t = "", r = "", s4 = [], i3) {
  if (a2(e)) {
    let a3 = e.trim();
    if (ht(a3)) return;
    if (G2(a3, k3)) {
      let n = a3.replaceAll(k3, (l3) => {
        let c3 = l3.replace(/{|}/g, "").split(".").filter((m4) => !s4.some((d) => G2(m4, d)));
        return `var(${ae(r, re(c3.join("-")))}${s2(i3) ? `, ${i3}` : ""})`;
      });
      return G2(n.replace(ie, "0"), ne) ? `calc(${n})` : n;
    }
    return a3;
  } else if (z(e)) return e;
}
function Re(e, t, r) {
  a2(t, false) && e.push(`${t}:${r};`);
}
function C3(e, t) {
  return e ? `${e}{${t}}` : "";
}
function le(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function r(n, l3) {
    let o = [], c3 = 0, m4 = "", d = null, u = 0;
    for (; c3 <= n.length; ) {
      let g2 = n[c3];
      if ((g2 === '"' || g2 === "'" || g2 === "`") && n[c3 - 1] !== "\\" && (d = d === g2 ? null : g2), !d && (g2 === "(" && u++, g2 === ")" && u--, (g2 === "," || c3 === n.length) && u === 0)) {
        let f = m4.trim();
        f.startsWith("dt(") ? o.push(le(f, l3)) : o.push(s4(f)), m4 = "", c3++;
        continue;
      }
      g2 !== void 0 && (m4 += g2), c3++;
    }
    return o;
  }
  function s4(n) {
    let l3 = n[0];
    if ((l3 === '"' || l3 === "'" || l3 === "`") && n[n.length - 1] === l3) return n.slice(1, -1);
    let o = Number(n);
    return isNaN(o) ? n : o;
  }
  let i3 = [], a3 = [];
  for (let n = 0; n < e.length; n++) if (e[n] === "d" && e.slice(n, n + 3) === "dt(") a3.push(n), n += 2;
  else if (e[n] === ")" && a3.length > 0) {
    let l3 = a3.pop();
    a3.length === 0 && i3.push([l3, n]);
  }
  if (!i3.length) return e;
  for (let n = i3.length - 1; n >= 0; n--) {
    let [l3, o] = i3[n], c3 = e.slice(l3 + 3, o), m4 = r(c3, t), d = t(...m4);
    e = e.slice(0, l3) + d + e.slice(o + 1);
  }
  return e;
}
var rr = (e) => {
  var a3;
  let t = S2.getTheme(), r = ue(t, e, void 0, "variable"), s4 = (a3 = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : a3[0], i3 = ue(t, e, void 0, "value");
  return { name: s4, variable: r, value: i3 };
};
var E3 = (...e) => ue(S2.getTheme(), ...e);
var ue = (e = {}, t, r, s4) => {
  if (t) {
    let { variable: i3, options: a3 } = S2.defaults || {}, { prefix: n, transform: l3 } = (e == null ? void 0 : e.options) || a3 || {}, o = G2(t, k3) ? t : `{${t}}`;
    return s4 === "value" || l2(s4) && l3 === "strict" ? S2.getTokenValue(t) : Y4(o, void 0, n, [i3.excludedKeyRegex], r);
  }
  return "";
};
function ar(e, ...t) {
  if (e instanceof Array) {
    let r = e.reduce((s4, i3, a3) => {
      var n;
      return s4 + i3 + ((n = m3(t[a3], { dt: E3 })) != null ? n : "");
    }, "");
    return le(r, E3);
  }
  return m3(e, { dt: E3 });
}
function de(e, t = {}) {
  let r = S2.defaults.variable, { prefix: s4 = r.prefix, selector: i3 = r.selector, excludedKeyRegex: a3 = r.excludedKeyRegex } = t, n = [], l3 = [], o = [{ node: e, path: s4 }];
  for (; o.length; ) {
    let { node: m4, path: d } = o.pop();
    for (let u in m4) {
      let g2 = m4[u], f = ve(g2), p3 = G2(u, a3) ? Q2(d) : Q2(d, re(u));
      if (i2(f)) o.push({ node: f, path: p3 });
      else {
        let y3 = ae(p3), R2 = Y4(f, p3, s4, [a3]);
        Re(l3, y3, R2);
        let T2 = p3;
        s4 && T2.startsWith(s4 + "-") && (T2 = T2.slice(s4.length + 1)), n.push(T2.replace(/-/g, "."));
      }
    }
  }
  let c3 = l3.join("");
  return { value: l3, tokens: n, declarations: c3, css: C3(i3, c3) };
}
var b3 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: true };
} } }, resolve(e) {
  let t = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [e].flat().map((r) => {
    var s4;
    return (s4 = t.map((i3) => i3.resolve(r)).find((i3) => i3.matched)) != null ? s4 : this.rules.custom.resolve(r);
  });
} }, _toVariables(e, t) {
  return de(e, { prefix: t == null ? void 0 : t.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: r, set: s4, defaults: i3 }) {
  var R2, T2, j2, O2, M2, z2, V3;
  let { preset: a3, options: n } = t, l3, o, c3, m4, d, u, g2;
  if (s2(a3) && n.transform !== "strict") {
    let { primitive: L2, semantic: te2, extend: re2 } = a3, f = te2 || {}, { colorScheme: K2 } = f, A2 = v2(f, ["colorScheme"]), x2 = re2 || {}, { colorScheme: X2 } = x2, G3 = v2(x2, ["colorScheme"]), p3 = K2 || {}, { dark: U2 } = p3, B = v2(p3, ["dark"]), y3 = X2 || {}, { dark: I2 } = y3, H2 = v2(y3, ["dark"]), W = s2(L2) ? this._toVariables({ primitive: L2 }, n) : {}, q3 = s2(A2) ? this._toVariables({ semantic: A2 }, n) : {}, Z2 = s2(B) ? this._toVariables({ light: B }, n) : {}, pe = s2(U2) ? this._toVariables({ dark: U2 }, n) : {}, fe = s2(G3) ? this._toVariables({ semantic: G3 }, n) : {}, ye = s2(H2) ? this._toVariables({ light: H2 }, n) : {}, Se = s2(I2) ? this._toVariables({ dark: I2 }, n) : {}, [Me, ze] = [(R2 = W.declarations) != null ? R2 : "", W.tokens], [Ke, Xe] = [(T2 = q3.declarations) != null ? T2 : "", q3.tokens || []], [Ge, Ue] = [(j2 = Z2.declarations) != null ? j2 : "", Z2.tokens || []], [Be, Ie] = [(O2 = pe.declarations) != null ? O2 : "", pe.tokens || []], [He, We] = [(M2 = fe.declarations) != null ? M2 : "", fe.tokens || []], [qe, Ze] = [(z2 = ye.declarations) != null ? z2 : "", ye.tokens || []], [Fe, Je] = [(V3 = Se.declarations) != null ? V3 : "", Se.tokens || []];
    l3 = this.transformCSS(e, Me, "light", "variable", n, s4, i3), o = ze;
    let Qe = this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n, s4, i3), Ye = this.transformCSS(e, `${Be}`, "dark", "variable", n, s4, i3);
    c3 = `${Qe}${Ye}`, m4 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n, s4, i3), tt2 = this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n, s4, i3);
    d = `${et}${tt2}`, u = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], g2 = m3(a3.css, { dt: E3 });
  }
  return { primitive: { css: l3, tokens: o }, semantic: { css: c3, tokens: m4 }, global: { css: d, tokens: u }, style: g2 };
}, getPreset({ name: e = "", preset: t = {}, options: r, params: s4, set: i3, defaults: a3, selector: n }) {
  var f, x2, p3;
  let l3, o, c3;
  if (s2(t) && r.transform !== "strict") {
    let y3 = e.replace("-directive", ""), m4 = t, { colorScheme: R2, extend: T2, css: j2 } = m4, O2 = v2(m4, ["colorScheme", "extend", "css"]), d = T2 || {}, { colorScheme: M2 } = d, z2 = v2(d, ["colorScheme"]), u = R2 || {}, { dark: V3 } = u, L2 = v2(u, ["dark"]), g2 = M2 || {}, { dark: te2 } = g2, re2 = v2(g2, ["dark"]), K2 = s2(O2) ? this._toVariables({ [y3]: h3(h3({}, O2), z2) }, r) : {}, A2 = s2(L2) ? this._toVariables({ [y3]: h3(h3({}, L2), re2) }, r) : {}, X2 = s2(V3) ? this._toVariables({ [y3]: h3(h3({}, V3), te2) }, r) : {}, [G3, U2] = [(f = K2.declarations) != null ? f : "", K2.tokens || []], [B, I2] = [(x2 = A2.declarations) != null ? x2 : "", A2.tokens || []], [H2, W] = [(p3 = X2.declarations) != null ? p3 : "", X2.tokens || []], q3 = this.transformCSS(y3, `${G3}${B}`, "light", "variable", r, i3, a3, n), Z2 = this.transformCSS(y3, H2, "dark", "variable", r, i3, a3, n);
    l3 = `${q3}${Z2}`, o = [.../* @__PURE__ */ new Set([...U2, ...I2, ...W])], c3 = m3(j2, { dt: E3 });
  }
  return { css: l3, tokens: o, style: c3 };
}, getPresetC({ name: e = "", theme: t = {}, params: r, set: s4, defaults: i3 }) {
  var o;
  let { preset: a3, options: n } = t, l3 = (o = a3 == null ? void 0 : a3.components) == null ? void 0 : o[e];
  return this.getPreset({ name: e, preset: l3, options: n, params: r, set: s4, defaults: i3 });
}, getPresetD({ name: e = "", theme: t = {}, params: r, set: s4, defaults: i3 }) {
  var c3, m4;
  let a3 = e.replace("-directive", ""), { preset: n, options: l3 } = t, o = ((c3 = n == null ? void 0 : n.components) == null ? void 0 : c3[a3]) || ((m4 = n == null ? void 0 : n.directives) == null ? void 0 : m4[a3]);
  return this.getPreset({ name: a3, preset: o, options: l3, params: r, set: s4, defaults: i3 });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === false);
}, getColorSchemeOption(e, t) {
  var r;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === true ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : [];
}, getLayerOrder(e, t = {}, r, s4) {
  let { cssLayer: i3 } = t;
  return i3 ? `@layer ${m3(i3.order || i3.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: s4 = {}, set: i3, defaults: a3 }) {
  let n = this.getCommon({ name: e, theme: t, params: r, set: i3, defaults: a3 }), l3 = Object.entries(s4).reduce((o, [c3, m4]) => o.push(`${c3}="${m4}"`) && o, []).join(" ");
  return Object.entries(n || {}).reduce((o, [c3, m4]) => {
    if (i2(m4) && Object.hasOwn(m4, "css")) {
      let d = Y3(m4.css), u = `${c3}-variables`;
      o.push(`<style type="text/css" data-primevue-style-id="${u}" ${l3}>${d}</style>`);
    }
    return o;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: r, props: s4 = {}, set: i3, defaults: a3 }) {
  var c3;
  let n = { name: e, theme: t, params: r, set: i3, defaults: a3 }, l3 = (c3 = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : c3.css, o = Object.entries(s4).reduce((m4, [d, u]) => m4.push(`${d}="${u}"`) && m4, []).join(" ");
  return l3 ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${Y3(l3)}</style>` : "";
}, createTokens(e = {}, t, r = "", s4 = "", i3 = {}) {
  let a3 = function(l3, o = {}, c3 = []) {
    if (c3.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l3, path: this.path, paths: o, value: void 0 };
    c3.push(this.path), o.name = this.path, o.binding || (o.binding = {});
    let m4 = this.value;
    if (typeof this.value == "string" && k3.test(this.value)) {
      let u = this.value.trim().replace(k3, (g2) => {
        var y3;
        let f = g2.slice(1, -1), x2 = this.tokens[f];
        if (!x2) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
        let p3 = x2.computed(l3, o, c3);
        return Array.isArray(p3) && p3.length === 2 ? `light-dark(${p3[0].value},${p3[1].value})` : (y3 = p3 == null ? void 0 : p3.value) != null ? y3 : "__UNRESOLVED__";
      });
      m4 = ne.test(u.replace(ie, "0")) ? `calc(${u})` : u;
    }
    return l2(o.binding) && delete o.binding, c3.pop(), { colorScheme: l3, path: this.path, paths: o, value: m4.includes("__UNRESOLVED__") ? void 0 : m4 };
  }, n = (l3, o, c3) => {
    Object.entries(l3).forEach(([m4, d]) => {
      let u = G2(m4, t.variable.excludedKeyRegex) ? o : o ? `${o}.${oe(m4)}` : oe(m4), g2 = c3 ? `${c3}.${m4}` : m4;
      i2(d) ? n(d, u, g2) : (i3[u] || (i3[u] = { paths: [], computed: (f, x2 = {}, p3 = []) => {
        if (i3[u].paths.length === 1) return i3[u].paths[0].computed(i3[u].paths[0].scheme, x2.binding, p3);
        if (f && f !== "none") for (let y3 = 0; y3 < i3[u].paths.length; y3++) {
          let R2 = i3[u].paths[y3];
          if (R2.scheme === f) return R2.computed(f, x2.binding, p3);
        }
        return i3[u].paths.map((y3) => y3.computed(y3.scheme, x2[y3.scheme], p3));
      } }), i3[u].paths.push({ path: g2, value: d, scheme: g2.includes("colorScheme.light") ? "light" : g2.includes("colorScheme.dark") ? "dark" : "none", computed: a3, tokens: i3 }));
    });
  };
  return n(e, r, s4), i3;
}, getTokenValue(e, t, r) {
  var l3;
  let i3 = ((o) => o.split(".").filter((m4) => !G2(m4.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), a3 = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, n = [(l3 = e[i3]) == null ? void 0 : l3.computed(a3)].flat().filter((o) => o);
  return n.length === 1 ? n[0].value : n.reduce((o = {}, c3) => {
    let u = c3, { colorScheme: m4 } = u, d = v2(u, ["colorScheme"]);
    return o[m4] = d, o;
  }, void 0);
}, getSelectorRule(e, t, r, s4) {
  return r === "class" || r === "attr" ? C3(s2(t) ? `${e}${t},${e} ${t}` : e, s4) : C3(e, C3(t != null ? t : ":root,:host", s4));
}, transformCSS(e, t, r, s4, i3 = {}, a3, n, l3) {
  if (s2(t)) {
    let { cssLayer: o } = i3;
    if (s4 !== "style") {
      let c3 = this.getColorSchemeOption(i3, n);
      t = r === "dark" ? c3.reduce((m4, { type: d, selector: u }) => (s2(u) && (m4 += u.includes("[CSS]") ? u.replace("[CSS]", t) : this.getSelectorRule(u, l3, d, t)), m4), "") : C3(l3 != null ? l3 : ":root,:host", t);
    }
    if (o) {
      let c3 = { name: "primeui", order: "primeui" };
      i2(o) && (c3.name = m3(o.name, { name: e, type: s4 })), s2(c3.name) && (t = C3(`@layer ${c3.name}`, t), a3 == null || a3.layerNames(c3.name));
    }
    return t;
  }
  return "";
} };
var S2 = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = $2(h3({}, t), { options: h3(h3({}, this.defaults.options), t.options) }), this._tokens = b3.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), N.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = $2(h3({}, this.theme), { preset: e }), this._tokens = b3.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = $2(h3({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return b3.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t) {
  return b3.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t) {
  let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b3.getPresetC(r);
}, getDirective(e = "", t) {
  let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b3.getPresetD(r);
}, getCustomPreset(e = "", t, r, s4) {
  let i3 = { name: e, preset: t, options: this.options, selector: r, params: s4, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b3.getPreset(i3);
}, getLayerOrderCSS(e = "") {
  return b3.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t, r = "style", s4) {
  return b3.transformCSS(e, t, s4, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t, r = {}) {
  return b3.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t, r = {}) {
  return b3.getStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t), N.emit(`theme:${t}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
} };

// node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css2, options = {}) {
    let isLoaded = false;
    let cssRef = css2;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css2;
        const HEAD = this.document.head;
        te(styleRef, "nonce", nonce);
        first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
        O(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) {
        styleRef.textContent = cssRef;
      }
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(ar`${m(style2, {
      dt: E3
    })}`);
    return computedStyle ? this.useStyle.use(Y(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadStyle = (options = {}, style2 = "") => {
    return this.load(this.style, options, (computedStyle = "") => S2.transformCSS(options.name || this.name, `${computedStyle}${ar`${style2}`}`));
  };
  loadBaseCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadBaseStyle = (options = {}, style$1 = "") => {
    return this.load(style, options, (computedStyle = "") => S2.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S2.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S2.getComponent(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S2.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S2.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = m(this.css, {
        dt: E3
      });
      const _style = Y(ar`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k4, v3]) => acc.push(`${k4}="${v3}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S2.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css2 = [S2.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = ar`${m(this.style, {
        dt: E3
      })}`;
      const _style = Y(S2.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k4, v3]) => acc.push(`${k4}="${v3}"`) && acc, []).join(" ");
      css2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css2.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0, ...ngDevMode ? [{
    debugName: "theme"
  }] : (
    /* istanbul ignore next */
    []
  ));
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      N.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S2.clearLoadedStyleNames();
    N.clear();
  }
  onThemeChange(value) {
    S2.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S2.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style2);
      S2.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{
    debugName: "ripple"
  }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  /**
   * @deprecated Since v20. Use `inputVariant` instead.
   */
  inputStyle = signal(null, ...ngDevMode ? [{
    debugName: "inputStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  inputVariant = signal(null, ...ngDevMode ? [{
    debugName: "inputVariant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayAppendTo = signal("self", ...ngDevMode ? [{
    debugName: "overlayAppendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  pt = signal(void 0, ...ngDevMode ? [{
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = signal(void 0, ...ngDevMode ? [{
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo,
      zIndex,
      ptOptions,
      pt,
      unstyled
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    return;
  });
  return makeEnvironmentProviders([...providers, initializer]);
}

// node_modules/@colsen1991/ngx-translate-extract-marker/fesm2020/colsen1991-ngx-translate-extract-marker.mjs
function marker(key) {
  return key;
}

// src/environments/environment.ts
var environment = {
  // Same infrastructure as development, only difference is sandbox flag
  production: false,
  sandbox: true,
  apiGateway: "https://nappswkoie.execute-api.ca-central-1.amazonaws.com/dev",
  dynamodbFunctionUrl: "https://chi2rsccsm5tsbq3dzqez735gu0pxnlj.lambda-url.ca-central-1.on.aws/",
  airtableFunctionUrl: "https://i7vbe2ntgsh26rvibknsi4zuia0rmpyn.lambda-url.ca-central-1.on.aws/",
  openrouterFunctionUrl: "https://lh3cjcmhvvekco7nkioztgxnxq0pcisv.lambda-url.ca-central-1.on.aws/",
  usageFunctionUrl: "https://at4w23fcyv7ila65il3ov2auey0nycfx.lambda-url.ca-central-1.on.aws/",
  defaultOrg: "cra-proto",
  templateOrg: "cra-proto",
  //for accessing core-prototype
  myOrg: "TEST",
  myToolbox: "CRA"
};

// src/app/services/user-settings.service.ts
var UserSettingsService = class _UserSettingsService {
  primeNGConfig = inject(PrimeNG);
  translate = inject(TranslateService);
  router = inject(Router);
  title = inject(Title);
  // Language
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : (
    /* istanbul ignore next */
    []
  ));
  // Dark & Light themes
  darkMode = signal(false, ...ngDevMode ? [{ debugName: "darkMode" }] : (
    /* istanbul ignore next */
    []
  ));
  icon = signal("pi pi-sun", ...ngDevMode ? [{ debugName: "icon" }] : (
    /* istanbul ignore next */
    []
  ));
  // Default & Colorblind themes
  colorSchemeKey = "color-scheme";
  colorScheme = signal(this.getStoredColorScheme(), ...ngDevMode ? [{ debugName: "colorScheme" }] : (
    /* istanbul ignore next */
    []
  ));
  // Toolbox visibility (used by sidebar, undecided if we should surface in user settings)
  toolbox = signal(localStorage.getItem("myToolbox") || environment.myToolbox, ...ngDevMode ? [{ debugName: "toolbox" }] : (
    /* istanbul ignore next */
    []
  ));
  // Toolbox visibility (undecided if we should surface in user settings)
  org = signal(localStorage.getItem("myOrg") || environment.myToolbox, ...ngDevMode ? [{ debugName: "org" }] : (
    /* istanbul ignore next */
    []
  ));
  // User
  userId = signal(this.getOrCreateUserId(), ...ngDevMode ? [{ debugName: "userId" }] : (
    /* istanbul ignore next */
    []
  ));
  //Version
  includePreview = signal(localStorage.getItem("includePreview") === "true" ? true : false, ...ngDevMode ? [{ debugName: "includePreview" }] : (
    /* istanbul ignore next */
    []
  ));
  includeGitHub = signal(false, ...ngDevMode ? [{ debugName: "includeGitHub" }] : (
    /* istanbul ignore next */
    []
  ));
  includeLocal = signal(false, ...ngDevMode ? [{ debugName: "includeLocal" }] : (
    /* istanbul ignore next */
    []
  ));
  includeBaseline = signal(false, ...ngDevMode ? [{ debugName: "includeBaseline" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const supportedLangs = ["en", "fr"];
    this.translate.addLangs(supportedLangs);
    const storedLang = localStorage.getItem("lang") || this.translate.getBrowserLang() || "en";
    this.setLanguage(storedLang);
    const storedTheme = localStorage.getItem("darkMode");
    this.setDarkMode(storedTheme === "true");
    effect(() => {
      this.applyColorScheme(this.colorScheme());
    });
    effect(() => {
      localStorage.setItem("includePreview", this.includePreview().toString());
    });
  }
  // Language
  setLanguage(lang) {
    const useLang = lang === "en" ? "en" : "fr";
    this.currentLang.set(useLang);
    this.translate.use(useLang);
    localStorage.setItem("lang", useLang);
    console.log(`Language set to ${useLang}`);
  }
  toggleLanguage() {
    const newLang = this.currentLang() === "en" ? "fr" : "en";
    this.setLanguage(newLang);
    const titleKey = this.router.routerState.snapshot.root.firstChild?.title;
    if (titleKey) {
      this.translate.get(titleKey).subscribe((translated) => {
        this.title.setTitle(translated);
      });
    }
  }
  // Dark & Light
  setDarkMode(enabled) {
    this.darkMode.set(enabled);
    localStorage.setItem("darkMode", String(enabled));
    document.documentElement.classList.toggle("dark-mode", enabled);
    this.icon.set(enabled ? "pi pi-sun" : "pi pi-moon");
    console.log(`Dark mode set to ${enabled}`);
  }
  toggle() {
    this.setDarkMode(!this.darkMode());
  }
  // Default & Colorblind
  getStoredColorScheme() {
    const stored = localStorage.getItem(this.colorSchemeKey);
    return stored === "deutan" || stored === "protan" || stored === "tritan" || stored === "custom" || stored === "default" ? stored : "default";
  }
  setColorScheme(scheme) {
    this.colorScheme.set(scheme);
    localStorage.setItem(this.colorSchemeKey, scheme);
  }
  applyColorScheme(scheme) {
    console.log("Applying color scheme:", scheme);
    let preset;
    switch (scheme) {
      case "deutan":
        preset = preset_deutan_default;
        break;
      case "protan":
        preset = preset_protan_default;
        break;
      case "tritan":
        preset = preset_tritan_default;
        break;
      case "custom":
        preset = preset_custom_default;
        break;
      default:
        preset = preset_default;
    }
    this.primeNGConfig.theme.set({
      preset,
      options: {
        colorScheme: "light",
        theme: "blue",
        ripple: true,
        darkModeSelector: ".dark-mode"
      }
    });
  }
  // UserId
  getOrCreateUserId() {
    const stored = localStorage.getItem("userId");
    if (stored)
      return stored;
    const id = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem("userId", id);
    return id;
  }
  setUserId(id) {
    localStorage.setItem("userId", id);
    this.userId.set(id);
  }
  static \u0275fac = function UserSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserSettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserSettingsService, factory: _UserSettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  l,
  y,
  c,
  s,
  p,
  k,
  q,
  V,
  m,
  a,
  g,
  R,
  h,
  E,
  J,
  X,
  k2,
  P,
  lt,
  M,
  dt,
  E2,
  y2,
  $,
  D,
  I,
  V2,
  T,
  C,
  j,
  U,
  ut,
  A,
  q2,
  yt,
  Y2 as Y,
  Z,
  bt,
  Q,
  xt,
  x,
  vt,
  Tt,
  J2,
  K,
  Ct,
  Lt,
  _,
  L,
  Ot,
  Nt,
  $t,
  tt,
  It,
  ot,
  qt,
  Yt,
  Zt,
  Qt,
  Gt,
  Jt,
  _t,
  te,
  ConfirmEventType,
  ConfirmationService,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  MessageService,
  OverlayService,
  Header,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService,
  N,
  rr,
  S2 as S,
  base,
  BaseStyle,
  PrimeNG,
  providePrimeNG,
  marker,
  environment,
  UserSettingsService
};
//# sourceMappingURL=chunk-T4NCAOXG.js.map
