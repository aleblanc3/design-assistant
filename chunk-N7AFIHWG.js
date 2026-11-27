import {
  generatePath,
  normalizePath
} from "./chunk-K2CYJSCY.js";
import {
  PageTemplate
} from "./chunk-T5OOO6FB.js";
import {
  getHTMLReadability
} from "./chunk-JFBTM4UU.js";
import {
  environment
} from "./chunk-7KUIZSPB.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-46LS4HZY.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/utilities/html/hash.util.ts
function generateSHA(content) {
  return __async(this, null, function* () {
    const buffer = yield crypto.subtle.digest("SHA-256", new TextEncoder().encode(content));
    return Array.from(new Uint8Array(buffer), (b) => b.toString(16).padStart(2, "0")).join("");
  });
}
function hashString(content) {
  let h1 = 3735928559;
  let h2 = 1103547991;
  for (let i = 0; i < content.length; i++) {
    const ch = content.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

// src/app/common/portal-domains.config.ts
var PORTAL_DOMAINS = [
  //PROD
  "ams-sga.cra-arc.gc.ca",
  "ams-sga-cra-arc.fjgc-gccf.gc.ca",
  "apps.cra-arc.gc.ca",
  "apps.ams-sga.cra-arc.gc.ca",
  "apps1.ams-sga.cra-arc.gc.ca",
  "apps2.ams-sga.cra-arc.gc.ca",
  "apps3.ams-sga.cra-arc.gc.ca",
  "apps4.ams-sga.cra-arc.gc.ca",
  "apps5.ams-sga.cra-arc.gc.ca",
  "apps6.ams-sga.cra-arc.gc.ca",
  "apps7.ams-sga.cra-arc.gc.ca",
  "apps8.ams-sga.cra-arc.gc.ca",
  "benefitsfinder.services.gc.ca",
  "careers-carrieres.cra-arc.gc.ca",
  "cms-sgj.cra-arc.gc.ca",
  "covid-benefits.alpha.canada.ca",
  "cra-arc-survey-sondage.ca",
  "itools-ioutils.fcac-acfc.gc.ca",
  "live.webcastcanada.ca",
  "services.securekeyconcierge.com",
  "www.cra-arc.gc.ca/cgi-bin/",
  "www.cra-engage-arc.ca",
  "www.paysimply.ca",
  //STAGING
  "ams-sga-si.cra-arc.gc.ca",
  "ams-sga-si2.cra-arc.gc.ca",
  "ams-sga-ua.cra-arc.gc.ca",
  "ams-sga-ua2.cra-arc.gc.ca",
  "apps-ef.isvcs.net",
  "apps-ot.cra-arc.gc.ca",
  "apps-ot.isvcs.net",
  "apps-si.isvcs.net",
  "apps-si2.isvcs.net",
  "apps-ua.cra-arc.gc.ca",
  "apps-ua.isvcs.net",
  "apps-ua2.cra-arc.gc.ca",
  "apps-ua2.isvcs.net",
  "apps-ut.cra-arc.gc.ca",
  "apps-ut.isvcs.net",
  "apps-ut2.cra-arc.gc.ca",
  "apps-ut2.isvcs.net",
  "apps1.ams-sga-ot.cra-arc.gc.ca",
  "apps1.ams-sga-ot2.cra-arc.gc.ca",
  "apps2.ams-sga-ot.cra-arc.gc.ca",
  "apps2.ams-sga-ot2.cra-arc.gc.ca",
  "apps3.ams-sga-ot.cra-arc.gc.ca",
  "apps3.ams-sga-ot2.cra-arc.gc.ca",
  "apps4.ams-sga-ot.cra-arc.gc.ca",
  "apps4.ams-sga-ot2.cra-arc.gc.ca",
  "apps5.ams-sga-ot.cra-arc.gc.ca",
  "apps5.ams-sga-ot2.cra-arc.gc.ca",
  "apps6.ams-sga-ot.cra-arc.gc.ca",
  "apps6.ams-sga-ot2.cra-arc.gc.ca",
  "apps7.ams-sga-ot.cra-arc.gc.ca",
  "apps7.ams-sga-ot2.cra-arc.gc.ca",
  "apps8.ams-sga-ot.cra-arc.gc.ca",
  "apps8.ams-sga-ot2.cra-arc.gc.ca",
  "cms-sgj-ot.cra-arc.gc.ca",
  "cms-sgj-ot2.cra-arc.gc.ca",
  "cms-sgj-si.cra-arc.gc.ca",
  "cms-sgj-si2.cra-arc.gc.ca",
  "cms-sgj-ua.cra-arc.gc.ca",
  "cms-sgj-ua2.cra-arc.gc.ca",
  "cp-ea.isvcs.net",
  "cp-ef.isvcs.net",
  "cp-ut.isvcs.net",
  "cp-ut2.isvcs.net",
  "rp-ea.isvcs.net",
  "rp-ef.isvcs.net",
  "rp-ut.isvcs.net",
  "rp-ut.isvcs.net/gol-ged/mima/ngbeta/#/bus/",
  "rp-ut2.isvcs.net",
  "rp-ut4.isvcs.net"
];
function isPortalDomain(url) {
  try {
    const urlObj = new URL(url);
    return PORTAL_DOMAINS.some((portal) => urlObj.hostname === portal || urlObj.hostname.endsWith("." + portal));
  } catch (e) {
    return false;
  }
}
var SIGN_IN_PATH = ["/en/revenue-agency/services/e-services/cra-login-services.html", "/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"];
function isSignInLink(url) {
  return SIGN_IN_PATH.some((signin) => url.endsWith(signin));
}

// src/app/utilities/html/extract-content.util.ts
function extractPageData(doc, url) {
  return __async(this, null, function* () {
    const removeExtraWhiteSpace = (s) => (s ?? "").replace(/[ \t\r\n\f]+/g, " ").replace(/^ | $/g, "");
    const htmlLang = doc.documentElement.getAttribute("lang");
    const metaLang = doc.querySelector('meta[name="dcterms.language"]')?.getAttribute("content");
    const normalizedMetaLang = metaLang === "eng" ? "en" : metaLang === "fra" ? "fr" : null;
    const urlLang = url.includes("/en/") ? "en" : url.includes("/fr/") ? "fr" : null;
    const currentLang = htmlLang || normalizedMetaLang || urlLang || "en";
    const oppLang = currentLang === "en" ? "fr" : "en";
    const oppUrl = doc.querySelector(`link[rel="alternate"][hreflang="${oppLang}"]`)?.getAttribute("href") || "";
    const h1Elements = Array.from(doc.querySelectorAll("h1")).filter((h12) => !h12.classList.contains("wb-inv"));
    const h1Texts = h1Elements.map((e) => removeExtraWhiteSpace(e.textContent)).filter(Boolean);
    let doubleH1 = removeExtraWhiteSpace(doc.querySelector("hgroup p:has(+ h1)")?.innerHTML || doc.querySelector("p.lead:has(+ h1)")?.innerHTML || "");
    let h1 = "";
    if (h1Texts.length === 1) {
      h1 = h1Texts[0] ?? "";
    } else if (h1Texts.length > 1) {
      doubleH1 = h1Texts[0] ?? "";
      h1 = h1Texts.slice(1).join("<br>");
    }
    const mainContent = doc.querySelector("main")?.innerHTML ?? "";
    const contentHash = yield generateSHA(mainContent);
    const lastChecked = (/* @__PURE__ */ new Date()).toISOString();
    const title = doc.querySelector('meta[name="dcterms.title"]')?.getAttribute("content") || "";
    const description = doc.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const keywords = doc.querySelector('meta[name="keywords"]')?.getAttribute("content") || doc.querySelector('data[id="pageKeywords"]')?.getAttribute("value") || "";
    const robotsContent = doc.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
    const noindex = robotsContent.includes("noindex");
    const isArchived = doc.querySelector(".gc-archv") !== null;
    const linksToPortal = Array.from(doc.querySelectorAll("a")).some((link) => isPortalDomain(link.href));
    const hasChatbot = !!doc.querySelector("chatbot");
    const hasFieldflow = !!doc.querySelector(".wb-fieldflow");
    const parentUrl = getBreadcrumb(doc, url)?.at(-1)?.url;
    const parentPath = parentUrl ? generatePath(parentUrl) : void 0;
    const text = doc.querySelector("main")?.textContent || "";
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;
    const hasSubway = doc.querySelector(".gc-subway") !== null;
    const hasOldSubway = doc.querySelector(".gc-navseq") !== null;
    const hasMostRequested = doc.querySelector(".most-requested-bullets") !== null;
    const hasGcSrvinfo = doc.querySelector(".gc-srvinfo") !== null;
    const hasDoormatComponent = doc.querySelector(".mwsdoormat-links-container") !== null;
    const isContactH1 = h1.startsWith("Contact") || h1.startsWith("Contactez");
    const isCampaignUrl = url.includes("/campaigns/") || url.includes("/campagnes/");
    const isNewsUrl = /\/(news|nouvelles)\/\d{4}\//.test(url);
    const isTaxtip = url.includes("/newsroom/tax-tips/") || url.includes("/salle-presse/conseils-fiscaux/");
    const isTFSMK = url.includes("/tax-tips/tax-filing-season-media-kit") || url.includes("/conseils-fiscaux/trousse-medias-periode-production-declarations-revenus");
    const isEnforcementNotice = url.includes("/newsroom/criminal-investigations-actions-charges-convictions") || url.includes("/salle-presse/mesures-relatives-enquetes-criminelles-accusations-condamnations");
    const isMultimedia = url.includes("/news/cra-multimedia-library/") || url.includes("/nouvelles/bibliotheque-multimedia-arc/");
    const hasVideo = doc.querySelector("video") !== null;
    const hasTranscriptH2 = Array.from(doc.querySelectorAll("h2")).some((h2) => /transcript/i.test(h2.textContent?.trim() ?? ""));
    const isVideoTranscript = hasVideo && hasTranscriptH2 && isMultimedia;
    const isFormReadme = url.includes("/forms-publications/forms/") || url.includes("/formulaires-publications/formulaires/");
    const isPub = url.includes("/forms-publications/publications/") || url.includes("/formulaires-publications/publications/");
    const isPubReadme = /\/(forms-publications\/publications|formulaires-publications\/publications)\/[a-z0-9-]+\.html$/.test(url);
    const is5000g = url.includes("/general-income-tax-benefit-package/5000-g.html") || url.includes("/trousse-generale-impot-prestations/5000-g.html");
    const isT1Readme = /\/(general-income-tax-benefit-package|trousse-generale-impot-prestations)\/([a-z-]+\/)?5\d{3}-[a-z]{1,5}\.html$/.test(url);
    const isT1Pub = /\/(general-income-tax-benefit-package|trousse-generale-impot-prestations)\/([a-z-]+\/)?5\d{3}-[a-z]{1,5}\/[a-z0-9-]+\.html$/.test(url);
    const isTD1Readme = /\/(td1-forms-pay-received-on-january-1-(\d{4}-)?later|formulaires-td1-paies-recues-1er-janvier-(\d{4}-)?apres)\/[a-z0-9-]+\.html$/.test(url);
    const payrollPatterns = [
      "t4127-payroll-deductions-formulas",
      "t4127-formules-calcul-retenues-paie",
      "payroll-deductions-t4127-payroll-deductions-formulas",
      "t4127-formules-calcul-retenues-paie-annees-precedentes",
      "t4032-payroll-deductions-tables",
      "t4032-tables-retenues-paie",
      "t4032-payroll-deductions-tables-previous-years",
      "t4032-tables-retenues-paie-documents-annees-anterieures",
      "t4008-payroll-deductions-supplementary-tables",
      "t4008-tables-supplementaires-retenues-paie",
      "t4008-payroll-deductions-supplementary-tables-previous-years",
      "t4008-tables-supplementaires-retenues-paie-annees-anterieures"
    ];
    const isPayrollReadme = new RegExp(`\\/(${payrollPatterns.join("|")})\\/[a-z0-9-]+\\.html$`).test(url);
    const listGroupItemCount = doc.querySelectorAll(".list-group-item").length;
    const listGroupLinkCount = doc.querySelectorAll(".list-group-item a").length;
    const isOldTopic = listGroupItemCount > 0 && listGroupLinkCount / listGroupItemCount >= 0.8;
    const mainElement = doc.querySelector("main");
    const mainText = mainElement?.innerText.trim() ?? "";
    const mainLinks = mainElement?.querySelectorAll("a") ?? [];
    const linkCount = mainLinks.length;
    const linkText = Array.from(mainLinks).map((a) => a.innerText.trim()).join("");
    const isNavigational = mainText.length > 0 && linkText.length / mainText.length >= 0.7;
    const linksToSignIn = Array.from(mainLinks).some((link) => isSignInLink(link.href));
    const hasPdfDownloadLink = doc.querySelector('a[href$=".pdf"].btn.stretched-link') !== null;
    const hasThumbnailContainer = doc.querySelector(".thumbnail") !== null;
    const hasPdfMetadata = Array.from(doc.querySelectorAll("small")).some((small) => /PDF,.*(KB|Ko).*page/i.test(small.textContent?.trim() ?? ""));
    const isPdfDownload = hasPdfDownloadLink && (hasThumbnailContainer || hasPdfMetadata);
    const isBrochure = doc.querySelector(".panel-heading.bg-primary") !== null;
    let template = PageTemplate.Content;
    if (hasSubway) {
      template = PageTemplate.Subway;
    } else if (hasOldSubway) {
      template = PageTemplate.OldSubway;
    } else if (isNewsUrl) {
      template = PageTemplate.Newsroom;
    } else if (isVideoTranscript) {
      template = PageTemplate.VideoTranscript;
    } else if (isCampaignUrl) {
      template = PageTemplate.Campaign;
    } else if (isFormReadme) {
      template = PageTemplate.ReadmeForm;
    } else if (isPubReadme) {
      template = PageTemplate.ReadmeGuide;
    } else if (isPub) {
      template = PageTemplate.Guide;
    } else if (is5000g) {
      template = PageTemplate.GuideT1;
    } else if (isT1Readme) {
      template = PageTemplate.ReadmeT1;
    } else if (isT1Pub) {
      template = PageTemplate.GuideT1;
    } else if (isTD1Readme) {
      template = PageTemplate.ReadmeTD1;
    } else if (isPayrollReadme) {
      template = PageTemplate.ReadmePayroll;
    } else if (isContactH1) {
      template = PageTemplate.Contact;
    } else if (hasMostRequested || hasGcSrvinfo || hasDoormatComponent) {
      template = PageTemplate.Topic;
    } else if (isOldTopic) {
      template = PageTemplate.OldTopic;
    } else if (isNavigational) {
      template = PageTemplate.Navigation;
    } else if (isBrochure) {
      template = PageTemplate.Brochure;
    } else if (isPdfDownload) {
      template = PageTemplate.PdfDownload;
    } else if (isMultimedia) {
      template = PageTemplate.MultimediaGallery;
    } else if (isTaxtip) {
      template = PageTemplate.Taxtip;
    } else if (isTFSMK) {
      template = PageTemplate.TaxFilingSeasonMediaKit;
    } else if (isEnforcementNotice) {
      template = PageTemplate.EnforcementNotice;
    }
    const links = getLinks(doc, url);
    const { fleschKincaid, gunningFog } = getHTMLReadability(doc);
    const phoneRegex = /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/g;
    const phoneNumbers = [...new Set(mainText.match(phoneRegex) ?? [])].map((n) => n.trim());
    return {
      oppUrl,
      h1,
      doubleH1,
      contentHash,
      lastChecked,
      title,
      description,
      keywords,
      noindex,
      isArchived,
      linksToPortal,
      linksToSignIn,
      hasChatbot,
      hasFieldflow,
      parentPath,
      wordCount,
      linkCount,
      template,
      links,
      fleschKincaid,
      gunningFog,
      phoneNumbers
    };
  });
}
function getLinks(doc, baseUrl) {
  const baseDomain = new URL(baseUrl).origin;
  const links = Array.from(doc.querySelectorAll("main a")).map((a) => a.getAttribute("href")).filter((href) => !!href).map((href) => {
    try {
      const url = new URL(href, baseUrl);
      url.hash = "";
      url.search = "";
      return normalizePath(url.href.replace("/content/canadasite", ""));
    } catch (e) {
      return null;
    }
  }).filter((href) => !!href).filter((href) => new URL(href).origin === baseDomain);
  return [...new Set(links)];
}
function getBreadcrumb(doc, baseUrl) {
  const breadcrumbItems = doc.querySelectorAll(".breadcrumb li a");
  const breadcrumbArray = [];
  breadcrumbItems.forEach((el) => {
    const rawHref = el.getAttribute("href") || "";
    let absoluteUrl = "";
    try {
      absoluteUrl = new URL(rawHref, baseUrl).href.replace("/content/canadasite", "");
      absoluteUrl = normalizePath(absoluteUrl);
    } catch (e) {
      console.warn(`Invalid breadcrumb href: ${rawHref}`);
    }
    breadcrumbArray.push({
      label: el.textContent?.trim() || "",
      url: absoluteUrl
    });
  });
  return breadcrumbArray;
}
function stringToDoc(html) {
  return new DOMParser().parseFromString(html, "text/html");
}

// src/app/services/fetch.service.ts
var FetchService = class _FetchService {
  //Block unknown hosts
  prodHost = "www.canada.ca";
  protoHosts = /* @__PURE__ */ new Set([
    `${environment.defaultOrg}.github.io`,
    "proto-cra.github.io",
    //"cra-design.github.io", //Currently blocked by browser because it looks like a phishing site
    //"cra-proto.github.io", //Is currently cra-test-arc.canada.ca
    "cra-test-arc.canada.ca",
    "test.canada.ca",
    //"gc-proto.github.io", //CORS error but redirects to test.canada.ca which works
    "aleblanc3.github.io",
    "canada-preview.adobecqms.net",
    "cra-ut.isvcs.net"
  ]);
  getAllowedHosts(mode) {
    const allowed = /* @__PURE__ */ new Set();
    if (mode === "prod" || mode === "both")
      allowed.add(this.prodHost);
    if (mode === "proto" || mode === "both")
      this.protoHosts.forEach((host) => allowed.add(host));
    return allowed;
  }
  //Validates URL and checks if it's in the specified allowed host list
  validateHost(url, hostMode) {
    url = url.trim();
    let hostname;
    try {
      const parsedUrl = new URL(url);
      if (/\s/.test(url))
        throw new Error();
      hostname = parsedUrl.hostname.toLowerCase();
      const isUT = hostname === "cra-ut.isvcs.net";
      if (parsedUrl.protocol !== "https:" && !isUT)
        throw new Error();
      if (hostname !== this.prodHost) {
        const separator = url.includes("?") ? "&" : "?";
        url = url + `${separator}nocache=${Date.now()}`;
      }
    } catch (e) {
      throw new Error(`Invalid URL: ${url}`);
    }
    if (hostMode !== "none") {
      const allowedHosts = this.getAllowedHosts(hostMode);
      if (!allowedHosts.has(hostname)) {
        throw new Error(`Blocked host: ${hostname} blocked for url ${url}`);
      }
    }
    return url;
  }
  //Uses specified fetch method and retries if initial fetch fails (can happen due to intermittent server issues, Akamai etc.)
  fetchWithRetry(url, mode = "HEAD", retries = 3, delay = "none", suppressErrors = false) {
    return __async(this, null, function* () {
      for (let attempt = 1; attempt <= retries; attempt++) {
        yield this.simulateDelay(delay);
        if (attempt > 1 && attempt === retries) {
          mode = "GET";
        }
        try {
          const response = mode === "HEAD" ? yield fetch(url, { method: "HEAD" }) : yield fetch(url);
          if (response.ok)
            return response;
          else {
            if (!suppressErrors) {
              console.warn(`Fetch attempt #${attempt}. Status: ${response.status}. Method: ${mode}`);
            }
            if (attempt < retries) {
              const backoffDelay = Math.pow(2, attempt - 1) * 300;
              yield this.delay(backoffDelay);
              continue;
            }
            if (suppressErrors)
              return this.suppressError(url);
            throw new Error(`Fetch failed ${attempt} times. Method: ${mode}. Status: ${response.status} for ${url}`);
          }
        } catch (error) {
          if (attempt < retries) {
            const backoffDelay = Math.pow(2, attempt - 1) * 300;
            yield this.delay(backoffDelay);
            continue;
          }
          if (suppressErrors === true)
            return this.suppressError(url);
          else if (attempt === retries)
            throw new Error(error.message);
        }
      }
      if (suppressErrors === true)
        return this.suppressError(url);
      else
        throw new Error(`Unexpected error for ${url}`);
    });
  }
  fetchContent(url, hostMode = "both", retries = 3, delay = "none", suppressErrors = false) {
    return __async(this, null, function* () {
      url = this.validateHost(url, hostMode);
      const response = yield this.fetchWithRetry(url, "GET", retries, delay, suppressErrors);
      const html = yield response.text();
      const doc = this.cleanupFetch(html);
      return doc;
    });
  }
  fetchContentAndStatus(url, hostMode = "both", retries = 3, delay = "none", suppressErrors = false) {
    return __async(this, null, function* () {
      url = this.validateHost(url, hostMode);
      const response = yield this.fetchWithRetry(url, "GET", retries, delay, suppressErrors);
      const html = yield response.text();
      const doc = this.cleanupFetch(html);
      const finalUrl = response.url || url;
      return { doc, finalUrl };
    });
  }
  fetchStatus(url, hostMode = "both", retries = 3, delay = "none", delayBetweenRequests = 100) {
    return __async(this, null, function* () {
      url = this.validateHost(url, hostMode);
      if (delayBetweenRequests > 0) {
        yield this.delay(delayBetweenRequests);
      }
      return this.fetchWithRetry(url, "HEAD", retries, delay, true);
    });
  }
  fetchJSON(url, fields) {
    return __async(this, null, function* () {
      const date = (/* @__PURE__ */ new Date()).toDateString();
      const jsonUrl = url.replace(".html", `/jcr:content.json?nocache=${date}`);
      const result = {};
      try {
        const response = yield this.fetchWithRetry(jsonUrl, "GET", 3, "none", true);
        const json = yield response.json();
        for (const field of fields) {
          result[field] = json[field] ?? void 0;
        }
      } catch (error) {
        console.error(`Error fetching content.json for ${url}:`, error);
      }
      return result;
    });
  }
  fetchPageJSON(url) {
    return __async(this, null, function* () {
      const fields = ["gcContributor", "gcBranch", "gcLastPublished", "gcModifiedIsOverridden", "gcModifiedOverride", "cq:lastModified", "cq:template"];
      const data = yield this.fetchJSON(url, fields);
      return {
        owner: data["gcContributor"] ?? void 0,
        email: data["gcBranch"] ?? void 0,
        lastPublished: data["gcLastPublished"] ? data["gcLastPublished"] : void 0,
        lastModified: data["gcModifiedIsOverridden"] === "true" && data["gcModifiedOverride"] ? data["gcModifiedOverride"] : data["cq:lastModified"] ? data["cq:lastModified"] : void 0,
        isFreestyle: data["cq:template"]?.includes("freestyle") ?? false
      };
    });
  }
  //only delays on development build
  simulateDelay(delay = "none") {
    return __async(this, null, function* () {
      if (environment.production || delay === "none")
        return;
      if (delay === "random") {
        yield new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 1500));
      } else if (typeof delay === "number" && delay > 0) {
        yield new Promise((resolve) => setTimeout(resolve, delay));
      }
    });
  }
  //adds delay on both dev and prod (useful for adding short delays before retrying a failed fetch, only use this if the delay is required on prod)
  delay(delay) {
    return __async(this, null, function* () {
      yield new Promise((resolve) => setTimeout(resolve, delay));
    });
  }
  //fake Response for suppressing CORS errors (should only be used when fetching external content, hostMode = "none:")
  suppressError(url, status = 500, statusText = "Suppressed fetch error") {
    return new Response(null, {
      status,
      statusText,
      headers: { "X-Suppressed-Error": "true", "X-Source-Url": url }
    });
  }
  /** Fetches a unique array of same-domain paths */
  getPaths(url, viaProxy = false) {
    return __async(this, null, function* () {
      try {
        const doc = !viaProxy ? yield this.fetchContent(url, "both", 2) : stringToDoc(yield this.fetchViaProxy(url));
        const links = getLinks(doc, url);
        return [...new Set(links.map((link) => generatePath(link)))];
      } catch (error) {
        console.warn(`Failed to fetch links for "${url}"`, error);
        return [];
      }
    });
  }
  /**
   * Fetches page content from a different origin (UT, AEM preview etc.) by relaying
   * the request through a same-origin proxy page. Only use if {@link fetchContent} is unsuccessful.
   *
   * This function must be triggered by the user or the popup may be blocked resulting in
   * inconsistent behaviour for different users.
   *
   * @param targetUrl The full URL to fetch. Must be on an allowed origin or this will throw. (see {@link generateQuery} for allowed origins)
   * @returns a string with the HTML content. For just a status check, use {@link fetchStatusViaProxy} instead.
   */
  fetchViaProxy(targetUrl) {
    return new Promise((resolve, reject) => {
      let fetchQuery;
      let fetchOrigin;
      try {
        ({ fetchQuery, fetchOrigin } = this.generateQuery(targetUrl, false));
      } catch (error) {
        reject(error);
        return;
      }
      const popup = window.open(fetchQuery, "_blank", "width=1,height=1,left=9999,top=9999");
      if (!popup) {
        reject(new Error("Popup blocked. Please allow popups for this site."));
        return;
      }
      const handler = (event) => {
        if (event.origin !== fetchOrigin)
          return;
        window.removeEventListener("message", handler);
        clearTimeout(timeout);
        popup.close();
        if (event.data.success) {
          resolve(event.data.html);
        } else {
          reject(new Error(event.data.error || "Failed to fetch preview content"));
        }
      };
      window.addEventListener("message", handler);
      const timeout = setTimeout(() => {
        window.removeEventListener("message", handler);
        popup.close();
        reject(new Error("Timeout waiting for preview content"));
      }, 1e4);
    });
  }
  /**
   * Fetches page status from a different origin (UT, AEM preview etc.) by relaying
   * the request through a same-origin proxy page. Only use if {@link fetchStatus} is unsuccessful.
   *
   * This function must be triggered by the user or the popup may be blocked resulting in
   * inconsistent behaviour for different users.
   *
   * @param targetUrl The full URL to fetch. Must be on an allowed origin or this will throw. (see {@link generateQuery} for allowed origins)
   * @returns true if the page exists. For a content fetch, use {@link fetchViaProxy} instead.
   */
  fetchStatusViaProxy(targetUrl) {
    return new Promise((resolve) => {
      let fetchQuery;
      let fetchOrigin;
      try {
        ({ fetchQuery, fetchOrigin } = this.generateQuery(targetUrl, true));
      } catch (e) {
        resolve(false);
        return;
      }
      const popup = window.open(fetchQuery, "_blank", "width=1,height=1,left=9999,top=9999");
      if (!popup) {
        resolve(false);
        return;
      }
      const handler = (event) => {
        if (event.origin !== fetchOrigin)
          return;
        window.removeEventListener("message", handler);
        clearTimeout(timeout);
        popup.close();
        resolve(event.data.success || false);
      };
      window.addEventListener("message", handler);
      const timeout = setTimeout(() => {
        window.removeEventListener("message", handler);
        popup.close();
        resolve(false);
      }, 5e3);
    });
  }
  /**
   * Generates the url query string needed for {@link fetchViaProxy} and {@link fetchStatusViaProxy}
   *
   * If you want to enable a new origin, add the origin and the same-origin proxy page with proxy.js to the paths records.
   *
   * @param targetUrl The full URL for the query.
   * @param statusCheck False by default. Set it to true to add an optional parameter to limit the fetch to page status and no content.
   * @returns fetchQuery (The proxy page with your target url as the query) and fetchOrigin (the origin we are fetching from)
   * @throws Throws if targetUrl is not an allowed origin (see paths variable)
   */
  generateQuery(targetUrl, statusCheck = false) {
    const targetOrigin = new URL(targetUrl).origin;
    const paths = {
      "https://canada-preview.adobecqms.net": "https://canada-preview.adobecqms.net/en/revenue-agency/web-services-test/amber/test.html?fetch=",
      "http://cra-ut.isvcs.net": "http://cra-ut.isvcs.net/test/aida/_Tools/fetch.html?fetch="
    };
    const fetchUrl = paths[targetOrigin];
    if (!fetchUrl) {
      throw new Error(`Unhandled target URL: ${targetUrl}`);
    }
    return {
      fetchQuery: `${fetchUrl}${encodeURIComponent(targetUrl)}&check=${statusCheck}`,
      fetchOrigin: targetOrigin
    };
  }
  /**
   * Removes malformed data-rte elements from fetched content before it causes parsing errors
   */
  cleanupFetch(html) {
    const clean = html.replace(/<data-rte-class="[^"]*">/g, "").replace(/<\/data-rte-class="[^"]*">/g, "");
    const doc = new DOMParser().parseFromString(clean, "text/html");
    doc.querySelectorAll("[data-rte-class]").forEach((el) => {
      while (el.firstChild) {
        el.parentNode?.insertBefore(el.firstChild, el);
      }
      el.remove();
    });
    return doc;
  }
  static \u0275fac = function FetchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FetchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FetchService, factory: _FetchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/html-normalization.service.ts
var HtmlNormalizationService = class _HtmlNormalizationService {
  fetchService = inject(FetchService);
  // Cache prettier after initial load
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prettierModulesPromise = null;
  getPrettierModules() {
    this.prettierModulesPromise ??= Promise.all([import("./chunk-TVTKNPOJ.js"), import("./chunk-BW2FX5QB.js")]).then(([{ default: prettier }, parserHtml]) => ({ prettier, parserHtml }));
    return this.prettierModulesPromise;
  }
  // Format HTML with prettier
  formatHtml(html) {
    return __async(this, null, function* () {
      if (!navigator.languages?.length) {
        Object.assign(navigator, { languages: ["en"] });
      }
      try {
        const { prettier, parserHtml } = yield this.getPrettierModules();
        return yield prettier.format(html, {
          parser: "html",
          plugins: [parserHtml],
          printWidth: Infinity,
          tabWidth: 4,
          useTabs: false,
          htmlWhitespaceSensitivity: "css",
          arrowParens: "always",
          bracketSameLine: false,
          bracketSpacing: false,
          embeddedLanguageFormatting: "auto",
          endOfLine: "crlf",
          jsxSingleQuote: false,
          objectWrap: "collapse",
          proseWrap: "never",
          quoteProps: "consistent",
          singleAttributePerLine: false,
          singleQuote: false,
          trailingComma: "none",
          vueIndentScriptAndStyle: true
        });
      } catch (error) {
        console.error("Prettier formatting error:", error);
        return html;
      }
    });
  }
  // Normalize HTML content provided via URL or string
  normalizeHTML(page, mode = "url") {
    return __async(this, null, function* () {
      let doc;
      if (mode === "url") {
        doc = yield this.fetchService.fetchContent(`${page}?_=${Date.now()}`, "both");
      } else if (mode === "proxy") {
        doc = stringToDoc(yield this.fetchService.fetchViaProxy(page));
      } else {
        doc = stringToDoc(page);
      }
      if (!doc)
        return;
      const origin = mode === "url" ? new URL(page).origin : "https://www.canada.ca";
      const foundFlags = { hidden: false, modal: false, dynamic: false };
      this.updateRelativeURLs(doc, "https://www.canada.ca");
      this.cleanupUnnecessaryElements(doc);
      const foundAjax1 = yield this.processSamePageAjaxReplacements(doc);
      const foundAjax2 = yield this.processAjaxReplacements(doc, origin);
      const foundJson = yield this.processJsonReplacements(doc, origin);
      foundFlags.dynamic = foundAjax1 || foundAjax2 || foundJson;
      foundFlags.modal ||= this.processModalDialogs(doc);
      foundFlags.hidden ||= this.displayInvisibleElements(doc);
      this.addToc(doc);
      this.sortAttributes(doc);
      const lang = doc.documentElement.lang?.startsWith("fr") ? "fr" : "en";
      this.addDateLabel(doc, lang);
      const main = doc.querySelector("main");
      if (!main) {
        console.warn("No <main> tag found. Using full <body> content instead.");
      }
      const content = main ? main.outerHTML : doc.body.innerHTML.trim();
      return {
        html: yield this.formatHtml(content),
        found: foundFlags,
        url: mode !== "string" ? page : void 0
      };
    });
  }
  // HTML processing functions
  // 1. Resolve relative URLs
  updateRelativeURLs(doc, baseUrl) {
    const anchors = doc.querySelectorAll("a");
    const images = doc.querySelectorAll("img");
    const scripts = doc.querySelectorAll("script");
    const links = doc.querySelectorAll("link");
    const isRootRelative = (url) => !!url && url.startsWith("/") && !url.startsWith("//");
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href) {
        if (isRootRelative(href)) {
          anchor.setAttribute("href", `${baseUrl}${href}`);
        }
      }
    });
    images.forEach((img) => {
      const src = img.getAttribute("src");
      if (isRootRelative(src)) {
        img.setAttribute("src", `${baseUrl}${src}`);
      }
    });
    scripts.forEach((script) => {
      const src = script.getAttribute("src");
      if (src) {
        if (isRootRelative(src)) {
          script.setAttribute("src", `${baseUrl}${src}`);
        }
      }
    });
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (isRootRelative(href)) {
        link.setAttribute("href", `${baseUrl}${href}`);
      }
    });
  }
  // 2. Remove irrelevent stuff
  cleanupUnnecessaryElements(doc) {
    const noisySelectors = ["section#chat-bottom-bar", "#gc-pft", ".wb-disable-allow", "body > header", "footer", "charlie"];
    noisySelectors.forEach((selector) => {
      doc.querySelectorAll(selector).forEach((el) => el.remove());
    });
  }
  fetchUrl(url, type) {
    return __async(this, null, function* () {
      try {
        const response = yield fetch(url);
        if (!response.ok) {
          console.warn(`AJAX fetch failed (${response.status}) for ${url}`);
          return type === "json" ? {} : "";
        }
        return type === "json" ? response.json() : response.text();
      } catch (error) {
        console.error(`Error fetching URL: ${url}`, error);
        return type === "json" ? {} : "";
      }
    });
  }
  // 3b. Resolve AJAX-loaded content from anchors on same page
  processSamePageAjaxReplacements(doc) {
    return __async(this, null, function* () {
      const root = doc.querySelector("main") ?? doc;
      const elements = root.querySelectorAll('[data-ajax-replace^="#"], [data-ajax-after^="#"], [data-ajax-append^="#"], [data-ajax-before^="#"], [data-ajax-prepend^="#"]');
      if (!elements.length)
        return false;
      for (const element of elements) {
        const tag = element.tagName.toLowerCase();
        for (const attr of Array.from(element.attributes)) {
          if (!attr.name.startsWith("data-ajax-") || !attr.value.startsWith("#"))
            continue;
          const anchorId = attr.value.slice(1);
          const source = doc.querySelector(`#${anchorId}`);
          if (!source) {
            console.warn(`Same-page anchor #${anchorId} not found in document.`);
            continue;
          }
          const content = source.outerHTML;
          element.outerHTML = `
                <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
                    <${tag}>${content}</${tag}>
                </div>
            `;
        }
      }
      return true;
    });
  }
  // 3b. Resolve AJAX-loaded content from other pages
  processAjaxReplacements(doc, origin) {
    return __async(this, null, function* () {
      let found = false;
      const processElements = () => __async(this, null, function* () {
        const root = doc.querySelector("main") ?? doc;
        const ajaxElements = root.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]');
        if (!ajaxElements.length)
          return;
        else {
          found = true;
        }
        for (const element of ajaxElements) {
          const tag = element.tagName.toLowerCase();
          const attributes = element.attributes;
          for (const attr of Array.from(attributes)) {
            const attrName = attr.name;
            const ajaxUrl = attr.value;
            if (!attrName.startsWith("data-ajax-") || !ajaxUrl.startsWith("/")) {
              continue;
            }
            const [url, anchor] = ajaxUrl.split("#");
            let fullUrl = `${origin}${url}`;
            let fetchedHtml = yield this.fetchUrl(fullUrl, "text");
            if (!fetchedHtml && origin !== "https://www.canada.ca") {
              fullUrl = `https://www.canada.ca${url}`;
              fetchedHtml = yield this.fetchUrl(fullUrl, "text");
            }
            if (!fetchedHtml)
              continue;
            const ajaxDoc = new DOMParser().parseFromString(fetchedHtml, "text/html");
            let content;
            if (anchor) {
              const anchorElement = ajaxDoc.querySelector(`#${anchor}`);
              if (!anchorElement) {
                console.warn(`Anchor #${anchor} not found in ${fullUrl}. Skipping replacement.`);
                continue;
              }
              content = anchorElement ? anchorElement.outerHTML : "";
            } else {
              const isFullDoc = /<html[\s>]/i.test(fetchedHtml) && /<body[\s>]/i.test(fetchedHtml);
              if (isFullDoc) {
                console.warn(`Skipping full document injection from: ${fullUrl}`);
                continue;
              }
              content = ajaxDoc.body ? ajaxDoc.body.innerHTML : ajaxDoc.documentElement.innerHTML;
            }
            if (!content)
              continue;
            const styledContent = `
          <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
            <${tag}>${content}</${tag}>
          </div>
        `;
            element.outerHTML = styledContent;
          }
        }
      });
      let previousCount;
      let currentCount = 0;
      do {
        previousCount = currentCount;
        yield processElements();
        currentCount = doc.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]').length;
      } while (currentCount && currentCount !== previousCount);
      return found;
    });
  }
  // 3c. Resolve JSON-loaded content
  processJsonReplacements(doc, origin) {
    return __async(this, null, function* () {
      let found = false;
      const parseJsonUrl = (url) => {
        const [baseUrl, jsonKey = ""] = url.split("#");
        return { url: baseUrl, jsonKey: jsonKey.slice(1) };
      };
      const parseJsonConfig = (config) => {
        try {
          const parsed = JSON.parse(config.replace(/&quot;/g, '"'));
          return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
        } catch (error) {
          console.error("Error parsing JSON config:", error);
          return null;
        }
      };
      const resolveJsonPath = (obj, path) => {
        return path.split("/").reduce((acc, key) => {
          if (acc && typeof acc === "object" && key in acc) {
            return acc[key];
          }
          return void 0;
        }, obj);
      };
      const root = doc.querySelector("main") ?? doc;
      const jsonElements = root.querySelectorAll("[data-wb-jsonmanager]");
      if (!jsonElements.length)
        return found;
      const jsonDataMap = /* @__PURE__ */ new Map();
      yield Promise.all(Array.from(jsonElements).map((element) => __async(this, null, function* () {
        const jsonConfigAttr = element.getAttribute("data-wb-jsonmanager");
        if (!jsonConfigAttr)
          return;
        const jsonConfig = parseJsonConfig(jsonConfigAttr);
        if (!jsonConfig?.["url"] || !jsonConfig?.["name"])
          return;
        try {
          const rawUrl = jsonConfig["url"];
          if (typeof rawUrl !== "string") {
            console.warn(`Skipping JSON manager "${jsonConfig["name"]}" - url is not a string:`, rawUrl);
            return;
          }
          const { url, jsonKey } = parseJsonUrl(rawUrl);
          let fullUrl = `${origin}${url}`;
          let jsonData = yield this.fetchUrl(fullUrl, "json");
          if (!jsonData && origin !== "https://www.canada.ca") {
            fullUrl = `https://www.canada.ca${url}`;
            jsonData = yield this.fetchUrl(fullUrl, "json");
          }
          if (!jsonData)
            return;
          const content = resolveJsonPath(jsonData, jsonKey);
          jsonDataMap.set(jsonConfig["name"], content);
        } catch (error) {
          console.error(`Error fetching JSON for ${jsonConfig["name"]}:`, error);
        }
      })));
      const replaceElements = doc.querySelectorAll("[data-json-replace]");
      replaceElements.forEach((element) => {
        const replacePath = element.getAttribute("data-json-replace") || "";
        const match = replacePath.match(/^#\[(.*?)\](.*)$/);
        if (!match)
          return;
        const jsonName = match[1];
        const jsonPath = match[2].substring(1);
        if (!jsonDataMap.has(jsonName)) {
          console.warn(`No JSON data found for: ${jsonName}`);
          return;
        }
        const jsonData = jsonDataMap.get(jsonName);
        const content = resolveJsonPath(jsonData, jsonPath);
        const styledContent = `
      <div style="
        border: 3px dashed #fbc02f;
        padding: 8px;
        border-radius: 4px;
      "> 
        ${content} 
      </div>
    `;
        element.outerHTML = styledContent;
        found = true;
      });
      return found;
    });
  }
  // 4. Reveal hidden stuff
  displayInvisibleElements(doc) {
    let found = false;
    const invisibleSelectors = [".wb-inv", ".hidden", ".nojs-show"];
    invisibleSelectors.forEach((selector) => {
      doc.querySelectorAll(selector).forEach((el) => {
        el.classList.remove(...selector.split(".").filter(Boolean));
        el.style.border = "2px solid #6F9FFF";
      });
    });
    if (invisibleSelectors.length > 0) {
      found = true;
    }
    return found;
  }
  // 5. Show modals
  processModalDialogs(doc) {
    let found = false;
    const modals = doc.querySelectorAll(".modal-dialog.modal-content");
    modals.forEach((modal) => {
      console.log([...modal.childNodes]);
      modal.classList.remove("mfp-hide");
      const wrapper = doc.createElement("div");
      wrapper.setAttribute("style", "border: 2px dashed #666; border-radius: 4px;");
      while (modal.firstChild) {
        wrapper.appendChild(modal.firstChild);
      }
      modal.appendChild(wrapper);
    });
    if (modals.length > 0) {
      found = true;
    }
    return found;
  }
  // 6. Add ToC anchors
  addToc(doc) {
    const tocSection = doc.querySelector(".section.mwsinpagetoc");
    if (!tocSection)
      return;
    const tocLinks = Array.from(tocSection.querySelectorAll("a")).map((link) => {
      const href = link.getAttribute("href");
      const text = link.textContent?.trim();
      if (href?.startsWith("#") && text) {
        return {
          id: href.slice(1),
          // Remove the '#'
          text
        };
      }
      return null;
    }).filter((link) => link !== null);
    if (!tocLinks.length)
      return;
    const headings = doc.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      const headingText = heading.textContent?.trim();
      if (!headingText)
        return;
      const matchedLink = tocLinks.find((link) => link.text === headingText);
      if (matchedLink) {
        heading.setAttribute("id", matchedLink.id);
      }
    });
  }
  // 7. Sort attributes
  sortAttributes(doc) {
    doc.querySelectorAll("*").forEach((el) => {
      if (!el.hasAttributes())
        return;
      const sortedAttrs = Array.from(el.attributes).sort((a, b) => a.name.localeCompare(b.name));
      const clone = el.cloneNode(false);
      sortedAttrs.forEach((attr) => clone.setAttribute(attr.name, attr.value));
      if (el.innerHTML) {
        clone.innerHTML = el.innerHTML;
      }
      el.replaceWith(clone);
    });
  }
  // 8. Date modified
  addDateLabel(doc, lang) {
    const dateModifiedLabel = lang === "fr" ? "Date de modification :" : "Date modified:";
    doc.querySelectorAll("gcds-date-modified").forEach((el) => {
      const date = el.textContent?.trim();
      if (!date)
        return;
      el.textContent = `${dateModifiedLabel} ${date}`;
    });
  }
  // Clean up AI response
  aiCleanup(html) {
    html = html.replace(/<p>```html<\/p>/, "```html\n").replace(/<p>```<\/p>/, "\n```");
    const match = html.match(/```(?:html)?\r?\n([\s\S]*?)\r?\n```/);
    if (match) {
      html = match[1];
    }
    html = html.replace(/^<p>/, "").replace(/<\/p>$/, "").trim();
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("p").forEach((p) => {
      const children = p.children;
      if (children.length === 1 && children[0].matches("div, section, ul, ol, table, h1, h2, h3, h4, h5, h6")) {
        p.replaceWith(...p.childNodes);
      }
    });
    doc.querySelectorAll("p").forEach((p) => {
      if (p.innerHTML.trim() === "") {
        p.remove();
      }
    });
    doc.querySelectorAll("think").forEach((think) => {
      think.remove();
    });
    return doc.body.outerHTML;
  }
  // Clean up HTML for export with CDTS template
  cleanContentForCdts(doc, doubleH1) {
    return __async(this, null, function* () {
      const mainEl = doc.querySelector("main");
      if (!mainEl)
        return { content: "", styles: "", scripts: "" };
      mainEl.querySelectorAll("section.pagedetails, div.pagedetails").forEach((el) => el.remove());
      const h1 = mainEl.querySelectorAll("h1");
      const leadAboveH1 = h1[0]?.previousElementSibling?.matches("p.lead") ? h1[0].previousElementSibling : null;
      leadAboveH1?.remove();
      h1.forEach((heading) => {
        if (heading.classList.contains("gc-document-nav")) {
          if (doubleH1) {
            heading.textContent = doubleH1;
          }
        } else {
          heading.remove();
        }
      });
      mainEl.querySelectorAll('div[class^="mws"]').forEach((div) => {
        while (div.firstChild) {
          div.parentNode?.insertBefore(div.firstChild, div);
        }
        div.remove();
      });
      mainEl.querySelectorAll("*").forEach((el) => {
        for (const attr of Array.from(el.attributes)) {
          if (attr.value.includes('"/')) {
            attr.value = attr.value.replace(/"\//g, '"https://www.canada.ca/');
          }
          if (attr.value.startsWith("/")) {
            attr.value = `https://www.canada.ca${attr.value}`;
          }
        }
      });
      const styles = Array.from(doc.querySelectorAll("style")).map((s) => `<style>${s.textContent}</style>`).join("\n");
      const scripts = Array.from(doc.querySelectorAll("body script:not([src])")).map((s) => `<script>${s.textContent}<\/script>`).join("\n");
      const raw = mainEl.innerHTML.replace(/[ \t]+$/gm, "").replace(/\n{2,}/g, "\n");
      const formatted = yield this.formatHtml(raw);
      return {
        content: formatted,
        styles,
        scripts
      };
    });
  }
  static \u0275fac = function HtmlNormalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HtmlNormalizationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HtmlNormalizationService, factory: _HtmlNormalizationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlNormalizationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  generateSHA,
  hashString,
  extractPageData,
  getLinks,
  getBreadcrumb,
  stringToDoc,
  FetchService,
  HtmlNormalizationService
};
//# sourceMappingURL=chunk-N7AFIHWG.js.map
