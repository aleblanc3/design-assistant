import {
  environment
} from "./chunk-7KUIZSPB.js";

// src/app/utilities/html/link.util.ts
function generatePath(url) {
  try {
    const { hostname, pathname } = new URL(url);
    const isLocal = hostname === "cra-ut.isvcs.net";
    const isGithub = hostname === "cra-test-arc.canada.ca" || hostname === "test.canada.ca" || hostname.endsWith(".github.io");
    const slice = isLocal ? 4 : isGithub ? 2 : 1;
    return pathname.split("/").slice(slice).join("/");
  } catch (e) {
    return url;
  }
}
function normalizePath(path) {
  let clean = path.split("?")[0].split("#")[0];
  clean = clean.replace(/\/+$/, "");
  if (/\.html$/i.test(clean)) {
    return clean;
  }
  if (/\.[a-z0-9]+$/i.test(clean)) {
    return clean;
  }
  return `${clean}.html`;
}
function generateUrl(path, version = "live", owner, repo, uiLang) {
  const repoDomain = owner === "cra-proto" ? "https://cra-test-arc.canada.ca" : owner === "gc-proto" ? "https://test.canada.ca" : `https://${owner}.github.io`;
  switch (version) {
    case "live":
      return `https://www.canada.ca/${path}`;
    case "protoGH":
      return `${repoDomain}/${repo}/${path}`;
    case "baseGH":
      return `${repoDomain}/${repo}-baseline/${path}`;
    case "preview":
      return `https://canada-preview.adobecqms.net/${path}`;
    case "protoUT":
      return `http://cra-ut.isvcs.net/test/aida/${repo}/${path}`;
    case "baseUT":
      return `http://cra-ut.isvcs.net/test/aida/${repo}-baseline/${path}`;
    case "upd": {
      const currentLang = uiLang?.startsWith("fr") ? "&lang=FR" : "";
      return `https://cra-arc.alpha.canada.ca/en/pages?url=https://www.canada.ca/${path}${currentLang}`;
    }
    case "aida": {
      return `${environment.aida}/import-page?url=https://www.canada.ca/${path}`;
    }
    default:
      return `https://www.canada.ca/${path}`;
  }
}
function isValidUrl(value) {
  if (!value)
    return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (e) {
    return false;
  }
}
function getUrlLang(url) {
  if (url.includes("/en/") || url.endsWith("en.html") || url.startsWith("en/"))
    return "en";
  else if (url.includes("/fr/") || url.endsWith("fr.html") || url.startsWith("fr/"))
    return "fr";
  else
    return null;
}

export {
  generatePath,
  normalizePath,
  generateUrl,
  isValidUrl,
  getUrlLang
};
//# sourceMappingURL=chunk-K2CYJSCY.js.map
