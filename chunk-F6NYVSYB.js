import {
  AI_FREE_MODELS
} from "./chunk-DWQ5T5PK.js";
import {
  HtmlNormalizationService
} from "./chunk-WYXLQ4YD.js";
import {
  HttpClient,
  environment
} from "./chunk-46P5L2FS.js";
import {
  Injectable,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-Y6Z7Y6BI.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/common/prompts/prompt.model.ts
var RoleKey;
(function(RoleKey2) {
  RoleKey2["None"] = "aiPrompt.role.none";
  RoleKey2["ContentDesigner"] = "aiPrompt.role.contentDesigner";
  RoleKey2["SeoExpert"] = "aiPrompt.role.seoExpert";
  RoleKey2["AccessibilityExpert"] = "aiPrompt.role.accessibilityExpert";
  RoleKey2["Translator"] = "aiPrompt.role.translator";
  RoleKey2["HTMLeditor"] = "aiPrompt.role.htmlEditor";
})(RoleKey || (RoleKey = {}));
var OutputKey;
(function(OutputKey2) {
  OutputKey2["Text"] = "aiPrompt.output.text";
  OutputKey2["Html"] = "aiPrompt.output.html";
  OutputKey2["Json"] = "aiPrompt.output.json";
})(OutputKey || (OutputKey = {}));
var RubricKey;
(function(RubricKey2) {
  RubricKey2["NoCommentary"] = "aiPrompt.rubric.noCommentary";
  RubricKey2["PreserveHtmlStructure"] = "aiPrompt.rubric.preserveHtmlStructure";
  RubricKey2["CharacterLimit"] = "aiPrompt.rubric.characterLimit";
  RubricKey2["Description"] = "aiPrompt.rubric.description";
  RubricKey2["DescriptionEN"] = "aiPrompt.rubric.descriptionEN";
  RubricKey2["DescriptionFR"] = "aiPrompt.rubric.descriptionFR";
  RubricKey2["Keywords"] = "aiPrompt.rubric.keywords";
  RubricKey2["CraTermTranslations"] = "aiPrompt.rubric.craTermTranslations";
})(RubricKey || (RubricKey = {}));
var ReferenceKey;
(function(ReferenceKey2) {
  ReferenceKey2["IssueAnalysisInstructions"] = "aiPrompt.references.issueAnalysisInstructions";
})(ReferenceKey || (ReferenceKey = {}));
var InventoryPromptKey;
(function(InventoryPromptKey2) {
  InventoryPromptKey2["Metadata"] = "aiPrompt.inventory.metadata";
  InventoryPromptKey2["Description"] = "aiPrompt.inventory.description";
  InventoryPromptKey2["Keywords"] = "aiPrompt.inventory.keywords";
})(InventoryPromptKey || (InventoryPromptKey = {}));
var PagePromptKey;
(function(PagePromptKey2) {
  PagePromptKey2["Headings"] = "aiPrompt.page.headings";
  PagePromptKey2["Doormats"] = "aiPrompt.page.doormats";
  PagePromptKey2["PlainLanguage"] = "aiPrompt.page.plainLanguage";
  PagePromptKey2["Tense"] = "aiPrompt.page.tense";
})(PagePromptKey || (PagePromptKey = {}));
var ProblemPromptKey;
(function(ProblemPromptKey2) {
  ProblemPromptKey2["AlertsRewrite"] = "aiPrompt.problem.alertsRewrite";
  ProblemPromptKey2["AlertsProblems"] = "aiPrompt.problem.alertsProblems";
})(ProblemPromptKey || (ProblemPromptKey = {}));

// src/app/common/prompts/shared.prompts.ts
var RoleFragment = {
  [RoleKey.SeoExpert]: "You are a bilingual search engine optimization expert (Canadian French and English).",
  [RoleKey.ContentDesigner]: "You are an expert web content designer with 10 years of experience in the Canadian public service.",
  [RoleKey.AccessibilityExpert]: "You are a web accessibility expert.",
  [RoleKey.Translator]: "You are an expert government translator for Canadian English and French.",
  [RoleKey.HTMLeditor]: "You are a precise HTML text editor.",
  [RoleKey.None]: ""
};
var OutputFragment = {
  [OutputKey.Text]: "Provide ONLY the requested output as plain text with absolutely NO additional commentary, explanations, markdown formatting, or preamble.",
  [OutputKey.Html]: "Return ONLY valid HTML with no markdown code blocks (no ```html). Preserve the original code structure where possible, only modifying the specific elements needed to meet the task requirements.",
  [OutputKey.Json]: "You must return ONLY valid JSON. No markdown (no ```json), no explanations, no preamble. The response must be directly parseable by JSON.parse()."
};
var RubricFragment = {
  [RubricKey.Description]: ["Description: The description must capture the main topic and use terminology found in the content."],
  [RubricKey.DescriptionEN]: ["English description: Must be between 130 and 160 characters (including spaces)."],
  [RubricKey.DescriptionFR]: ["French description: Must be concise but is permitted to be longer than the English version, up to a maximum of 275 characters (including spaces)."],
  [RubricKey.Keywords]: [
    'Keywords: Provide 10 highly relevant words or short phrases directly extracted from or strongly implied by the content. Do NOT include "Canada Revenue Agency" or "Agence du revenu du Canada" in the keyword list.'
  ],
  [RubricKey.CraTermTranslations]: [
    `Important CRA-specific translations:
    - "Canada Revenue Agency" \u2192 "Agence du revenu du Canada"
    - "income tax" \u2192 "imp\xF4t sur le revenu"
    - "benefits" \u2192 "prestations"
    - "tax return" \u2192 "d\xE9claration de revenus"
    - "GST/HST" \u2192 "TPS/TVH"
    - "business number" \u2192 "num\xE9ro d'entreprise"
    - "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
    - "deduction" \u2192 "d\xE9duction"
    - "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
    - "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"`
  ],
  [RubricKey.NoCommentary]: ["Response contains no preamble or explanatory text beyond what was requested."],
  [RubricKey.PreserveHtmlStructure]: ["Original HTML structure, attributes, and formatting are maintained where possible."],
  [RubricKey.CharacterLimit]: ["Response must be under the specified character limit."]
};

// src/app/common/prompts/reference.prompt.ts
var ReferenceFragment = {
  [ReferenceKey.IssueAnalysisInstructions]: `issue-analysis-instructions.json
{
  "name": "alerts-issues-instructions",
  "purpose": "Analyze Canada.ca alert HTML and return structured issue reports only.",
  "role": {
    "description": "You are an expert in content design, Web Accessibility (WCAG 2.1), the Accessible Canada Act, and the Canada.ca Design System."
  },
  "inputs": {
    "alerts": "Array of alert HTML strings in source order. Each item is the full alert container.",
    "pageContext": "Surrounding page content used for placement, hierarchy, and relevance checks.",
    "pageSignals": {
      "optional": true,
      "description": "Structured page-level hints such as title, h1, pageTypeSignal, and h2Headings."
    },
    "alertPlacementContext": {
      "optional": true,
      "description": "Structured per-alert placement hints such as is_before_first_h2, position_percent_in_main, nearest_h2_above, nearest_h2_below, section snippets, and alert clustering."
    },
    "alertSignals": {
      "optional": true,
      "description": "Precomputed per-alert structural signals such as alert_type, heading metadata, paragraph count, link count, links, hidden-content flags, and adjacency flags."
    }
  },
  "objective": "Scan every alert, identify specific alert, accessibility, content design, and markup issues, and return a JSON issue report. Return a No issues item for alerts with no applicable issues.",
  "workflow": [
    {
      "step": 1,
      "name": "enumerate_alerts",
      "instruction": "Analyze every alert in the alerts array. Use array order as alert_index, starting at 1."
    },
    {
      "step": 2,
      "name": "use_structured_context",
      "instruction": "Use pageContext for placement, relevance, and hierarchy checks. Use pageSignals, alertPlacementContext, and alertSignals as primary evidence when present. If structured context conflicts with a weak inference from raw HTML, prefer the structured context."
    },
    {
      "step": 3,
      "name": "check_simple_issues",
      "instruction": "For each alert, check every simple issue category. Add a separate issue item for each category that applies."
    },
    {
      "step": 4,
      "name": "check_complex_issues",
      "instruction": "For each alert, check every complex issue category. Add a separate issue item for each category that applies."
    },
    {
      "step": 5,
      "name": "complete_coverage",
      "instruction": "The output coverage must include every alert in the input array. Do not skip alerts."
    },
    {
      "step": 6,
      "name": "allow_multiple_issues",
      "instruction": "One alert can produce multiple issue items, and the same category can appear for multiple alerts if it applies."
    },
    {
      "step": 7,
      "name": "match_structured_context_by_index",
      "instruction": "When alertPlacementContext or alertSignals are present, match each alert_index to its corresponding placement or signal object and use that data during analysis."
    }
  ],
  "simpleIssueCategories": [
    { "name": "Misuse", "rule": "Do not use alerts for standard process steps, low-risk warnings, routine information, or emphasis." },
    { "name": "Too wordy", "rule": "Alerts must be short and succinct. If more than 2 sentences are needed, the sentences must be short. To fix a longer alert, recommend a summary with a link to a page that contains the full information." },
    { "name": "Generic titles", "rule": "Flag headings such as Note, Info, Important, or New. Alert titles must be descriptive." },
    { "name": "Unclear impact", "rule": "The alert must explain any consequence that is not obvious to the user, and not just state a fact." },
    { "name": "Outdated", "rule": "Flag past dates, expired notices, or resolved events. Alerts are temporary." },
    { "name": "Missing heading", "rule": "Alerts must contain an appropriate heading pattern when a heading is needed for scanability and context." },
    { "name": "Wrong type", "rule": "The alert type must match the severity. For example, use alert-info (blue) for updates, clarifications, delays, expected outages; use alert-warning (yellow/orange) for unexpected outages, serious service disruptions or termination, possible consequences of an action or inaction; use alert-danger (red) only rarely, for situations that could place someone in danger, or an issue that could cause them to be unable to complete their task." },
    { "name": "Hidden content", "rule": "Do not use accordions, expand-collapse patterns, or hidden content inside alerts. Alert content must be visible." },
    { "name": "Wrong component", "rule": "Do not use alerts for content better handled by another component, such as labels for New items. These alerts should usually be removed." },
    { "name": "Accessibility/code", "rule": "Icons and images need text alternatives, hierarchy must be valid, and markup must support accessibility." },
    { "name": "Too many links", "rule": "Limit alerts to one primary link when possible." },
    { "name": "Wrong placement", "rule": "Place alerts near the relevant section rather than globally when the message applies to specific content." },
    { "name": "Alert overload", "rule": "Flag multiple stacked or clustered alerts that may create alert fatigue." },
    { "name": "Low relevance", "rule": "On home, landing, or broad overview pages, alerts should apply to more than half of the audience." },
    { "name": "Incorrect hierarchy", "rule": "Alert headings must follow the heading structure of the page (e.g., there should never be an H4 after an H2)." },
    { "name": "Nothing actionable", "rule": "If no next-step link exists, flag the alert to confirm that none is needed or whether it needs to be deleted and the information added to the page instead." }
  ],
  "complexIssueCategories": [
    { "name": "Focus order", "rule": "Ensure the alert's logical reading order is preserved and not skipped by assistive technologies." },
    { "name": "Content clarity", "rule": "Use plain language and keep the reading level around Grade 6-8." },
    { "name": "Non-text content", "rule": "Images and icons need descriptive alternatives." }
  ],
  "structuredContextGuidance": {
    "pageSignals": [
      "Use pageTypeSignal, title, and h1 to assess Low relevance, Misuse, and page-wide appropriateness.",
      "Use h2Headings with nearest_h2_above and nearest_h2_below to assess Wrong placement and Incorrect hierarchy."
    ],
    "alertPlacementContext": [
      "Use is_before_first_h2, position_percent_in_main, and nearby section snippets to judge whether an alert is too global, misplaced, or disconnected from the section it affects.",
      "Use the full set of placement objects to assess Alert overload, especially when multiple alerts appear near each other or before primary content starts."
    ],
    "alertSignals": [
      "Use alert_type for Wrong type.",
      "Use has_heading, heading_level, heading_source, and heading_tag for Missing heading and Incorrect hierarchy.",
      "Use link_count, has_multiple_links, and links for Too many links and link-related recommendations.",
      "Use has_hidden_content for Hidden content.",
      "Use paragraph_count and text_length_chars as supporting evidence for Too wordy.",
      "Use previous_sibling_is_alert, next_sibling_is_alert, and adjacent_alert_cluster_size to strengthen Alert overload judgments."
    ]
  },
  "contextSensitiveHeuristics": [
    {
      "category": "Wrong placement",
      "instruction": "Strongly consider this category when the alert appears before the first substantive section, far from related headings, or when nearby section snippets do not support the alert topic."
    },
    {
      "category": "Alert overload",
      "instruction": "Strongly consider this category when page-level or placement context indicates multiple alerts clustered together near the same part of the page."
    },
    {
      "category": "Low relevance",
      "instruction": "Strongly consider this category on home, landing, or broad overview pages when the alert appears narrowly targeted relative to the page signals."
    },
    {
      "category": "Incorrect hierarchy",
      "instruction": "Compare the alert heading pattern with nearby page headings and the section position, not just the alert markup in isolation."
    }
  ],
  "outputRules": {
    "format": "JSON only. Do not include HTML, Markdown, code fences, or prose commentary.",
    "schemaResource": "assets/issues-output-schema.json",
    "requirements": [
      "Include alert_index in every issue item.",
      "Include the alert number in the description, for example: Alert 2: ...",
      "Check every issue category for every alert.",
      "Emit a separate issue item for every category that applies to an alert.",
      "If an alert has no issues, emit exactly one issue with issue_category No issues, severity Low, description Alert {alert_index}: No issues found for this alert., and recommendation No changes required.",
      "Do not emit a No issues item for an alert that already has one or more real issues."
    ]
  }
}`
};

// src/app/services/ai/prompt.service.ts
var AiPromptService = class _AiPromptService {
  composePrompt(config) {
    const parts = [
      config.role ? `### Role
${RoleFragment[config.role]}` : null,
      config.task ? `### Task
${config.task}` : null,
      this.formatRubric(config.rubric),
      config.skill ? `### Activated skill: ${config.skill}` : null,
      this.formatSkillReferences(config.skillReferences),
      config.output ? `### Output requirements
${OutputFragment[config.output]}` : null,
      config.jsonSchema ? `### JSON schema
${config.jsonSchema}` : null,
      config.skillJsonSchema ? `### Skill asset: ${config.skillJsonSchema}` : null
    ].filter((p) => p);
    return parts.join("\n\n");
  }
  formatRubric(rubricKeys) {
    if (!rubricKeys?.length)
      return null;
    const criteria = rubricKeys.flatMap((key) => RubricFragment[key]);
    return `### Quality criteria
${criteria.map((c, i) => `${i + 1}. ${c}`).join("\n")}`;
  }
  formatSkillReferences(referenceKeys) {
    if (!referenceKeys?.length)
      return null;
    const references = referenceKeys.flatMap((key) => ReferenceFragment[key]);
    return `### Skill reference: ${references.map((c) => c).join("\n")}`;
  }
  static \u0275fac = function AiPromptService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiPromptService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiPromptService, factory: _AiPromptService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiPromptService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/ai/openrouter.service.ts
var OpenRouterService = class _OpenRouterService {
  http = inject(HttpClient);
  aiPromptService = inject(AiPromptService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  apiUrl = environment.openrouterFunctionUrl;
  state = signal({
    loading: false,
    error: null,
    respondingModel: null
  }, ...ngDevMode ? [{ debugName: "state" }] : (
    /* istanbul ignore next */
    []
  ));
  // Returns full OpenRouter response
  sendToAI(config, content, preferredModel, temperature = 0, keyType = "paid") {
    return __async(this, null, function* () {
      this.state.set({ loading: true, error: null, respondingModel: null });
      const MAX_FALLBACK_MODELS = 3;
      const models = (preferredModel ? [preferredModel, ...AI_FREE_MODELS.filter((m) => m !== preferredModel)] : AI_FREE_MODELS).slice(0, MAX_FALLBACK_MODELS);
      try {
        const systemPrompt = this.aiPromptService.composePrompt(config);
        console.log(systemPrompt);
        const response = yield firstValueFrom(this.http.post(this.apiUrl, {
          models,
          systemPrompt,
          content,
          temperature,
          keyType
        }));
        this.state.set({
          loading: false,
          error: null,
          respondingModel: response.model ?? null
        });
        return response;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        this.state.set({ loading: false, error: message, respondingModel: null });
        throw error;
      }
    });
  }
  // Returns just the text from the OpenRouter response
  getTextFromAI(config, content, preferredModel, temperature = 0, keyType = "paid") {
    return __async(this, null, function* () {
      const response = yield this.sendToAI(config, content, preferredModel, temperature, keyType);
      const responseContent = response.choices?.[0]?.message?.content ?? "";
      if (config.output === OutputKey.Html) {
        this.htmlNormalizationService.aiCleanup(responseContent);
        yield this.htmlNormalizationService.formatHtml(responseContent);
      }
      return responseContent;
    });
  }
  static \u0275fac = function OpenRouterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OpenRouterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OpenRouterService, factory: _OpenRouterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenRouterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RoleKey,
  OutputKey,
  RubricKey,
  ReferenceKey,
  InventoryPromptKey,
  PagePromptKey,
  ProblemPromptKey,
  RoleFragment,
  OutputFragment,
  RubricFragment,
  AiPromptService,
  OpenRouterService
};
//# sourceMappingURL=chunk-F6NYVSYB.js.map
