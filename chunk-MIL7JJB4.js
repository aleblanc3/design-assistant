import {
  require_types
} from "./chunk-YIFK26D6.js";
import {
  AiPromptService,
  OpenRouterService
} from "./chunk-4BJLZHSO.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-R6R5V4ZD.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-W6TESAMA.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-6EWTG4GS.js";
import "./chunk-A3AS6ETN.js";
import {
  StyleCardService
} from "./chunk-VTQZS4T7.js";
import {
  RadioButton,
  RadioButtonModule
} from "./chunk-EP7232IK.js";
import "./chunk-IQ32TNLC.js";
import {
  Fieldset,
  FieldsetModule
} from "./chunk-AEVOGM5F.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-PCQWOYAS.js";
import {
  Message,
  MessageModule
} from "./chunk-R675W3L4.js";
import {
  IftaLabel,
  IftaLabelModule
} from "./chunk-WCZKKKTX.js";
import {
  ExportGitHubService
} from "./chunk-OPVLSIYU.js";
import {
  SignInService
} from "./chunk-AE6DJKHT.js";
import "./chunk-N7AFIHWG.js";
import "./chunk-K2CYJSCY.js";
import "./chunk-T5OOO6FB.js";
import {
  UserSettingsService
} from "./chunk-WGKFUUDY.js";
import "./chunk-JFBTM4UU.js";
import "./chunk-C6TMHWKA.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-JATVKYNS.js";
import {
  marker
} from "./chunk-NJX644NS.js";
import {
  Select,
  SelectModule
} from "./chunk-7EJWX7IA.js";
import "./chunk-ZNVUFU2Q.js";
import "./chunk-7KUIZSPB.js";
import {
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate
} from "./chunk-N5QBFVSW.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  JsonPipe,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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
  __toESM
} from "./chunk-YCXP4XZS.js";

// src/app/views/toolbox/dev-tools/prompt-editor-backup/prompt-editor.component.ts
var import_types = __toESM(require_types());

// src/app/common/prompts/backup-prompts/prompt.model.ts
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
var ToolsPromptKey;
(function(ToolsPromptKey2) {
  ToolsPromptKey2["Metadata"] = "aiPrompt.tools.metadata";
  ToolsPromptKey2["Description"] = "aiPrompt.tools.description";
  ToolsPromptKey2["Keywords"] = "aiPrompt.tools.keywords";
  ToolsPromptKey2["Languages"] = "aiPrompt.tools.languages";
})(ToolsPromptKey || (ToolsPromptKey = {}));
var PagePromptKey;
(function(PagePromptKey2) {
  PagePromptKey2["AlertRewrite"] = "aiPrompt.page.alertRewrite";
  PagePromptKey2["Headings"] = "aiPrompt.page.headings";
  PagePromptKey2["Doormats"] = "aiPrompt.page.doormats";
  PagePromptKey2["PlainLanguage"] = "aiPrompt.page.plainLanguage";
  PagePromptKey2["Tense"] = "aiPrompt.page.tense";
})(PagePromptKey || (PagePromptKey = {}));
var ProblemPromptKey;
(function(ProblemPromptKey2) {
  ProblemPromptKey2["AlertsRewrite"] = "aiPrompt.problem.alertsRewrite";
  ProblemPromptKey2["AlertsProblems"] = "aiPrompt.problem.alertsProblems";
  ProblemPromptKey2["TranslateIssueDetails"] = "aiPrompt.problem.translateIssueDetails";
})(ProblemPromptKey || (ProblemPromptKey = {}));

// src/app/common/prompts/backup-prompts/page.prompts.ts
var PagePrompts = {
  [PagePromptKey.AlertRewrite]: {
    role: RoleKey.ContentDesigner,
    task: "Rewrite the supplied alerts, using identified issues where available, preserving valid content and returning safe alert replacements.",
    rubric: [RubricKey.NoCommentary],
    output: OutputKey.Json,
    available: true
  },
  [PagePromptKey.Headings]: {
    role: RoleKey.ContentDesigner,
    task: `Structure content into clear, hierarchical headings at h1, h2, h3 and more rarely h4 and h5 levels to improve scannability of the tasks on the page.
Reorganize content between sections and rewrite where necessary to fit the new semantic structure. Avoid rewriting where possible to keep text like the original.
Guidelines: 
Make sure the H1 accurately reflects the content of the whole page.
Make sure other headings (for example, H2, H3, etc.) accurately describe the content of their section.
If search terms are provided, try to reflect common terms in the H1 for best SEO practices.
When writing a heading or subheading, make sure that it:
\xB7 Gives a clear idea of what follows.
\xB7 Is short and contains no unnecessary words.
\xB7 Contains the most relevant terms at the beginning.
Also ensure that you are meeting the following style requirements:
\xB7 Do not include punctuation in headings.
\xB7 Headings should not be questions \u2013 avoid the use of FAQ patterns.
When thinking of the hierarchy of the headings, apply the following concepts of good information architecture:
\xB7 Keep the page structure consistent, logical and straightforward.
\xB7 Categorize the content into tasks the user of the page can complete or things they need to learn about.
\xB7 Prioritize the content so the most important tasks are easiest to find.
\xB7 Consider the logical order in which the user of the page will need information as they are learning how to complete the task, giving them information gradually.
\xB7 If there are multiple tasks on the page, consider which tasks the user needs to complete or understand before they begin another task, and order the headings accordingly.
\xB7 Do not duplicate sections.
Tone: use an informative tone while addressing the user directly. Phrase headings where possible as tasks the user of the page can complete or learn about in that section.
Return only updated HTML code with no other commentary.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  },
  [PagePromptKey.Doormats]: {
    role: RoleKey.ContentDesigner,
    task: `Writing clear and easy-to-differentiate navigation options for pages with links to different services or tasks.
Write navigation links as "doormats", a convention that includes a link and description.
You may be asked to create a single doormat, or to create a set of doormats based on supplied content, or to refine a set of supplied doormat links to meet best practices around style and length restrictions.
Doormat style length and punctuation requirements:
\xB7 Link Title: Ideally under 35 characters, maximum 75 characters, no punctuation at the end.
\xB7 Short description: Ideally under 100 characters, maximum 120 characters, no punctuation, no period.
Best Practices:
\xB7 Link Title: Must be descriptive, unique, and distinguishable from other link titles on the page. Avoid vague terms, duplication, and unnecessary words.
\xB7 Short description: The description should describe the linked page concisely, including what to expect when clicking on the link title. It should, however, avoid repeating text from the title. It can be:
  o A list of short phrases indicating tasks that can be completed on the linked page.
  o A list of keywords, separated by commas that would generally correspond to the link titles of doormats of the navigation page it links to, or h2s of a content page.
If one of the 2 above styles is used for a doormat description, it should generally match the other doormats on that navigation page.
In some exceptional cases a doormat can be written as a sentence if it is hard to describe in a set of phrases, but this would only apply to a specific doormat, not all doormats on the page. A sentence doormat should not have a period or other punctuation at the end.
Avoid promotional language, introductory phrases, or redundant content.
Maintain consistent capitalization, formatting, and style (e.g., Topics, Products/Services, Actions, Audience Groups).
Prompt reminders:
\xB7 Ask the user for the topic and purpose of the page if more context is needed.
\xB7 If useful to the refinement of the navigation links, request additional details such as target audience, key keywords, or specific tone/style (e.g., formal, casual, technical).
Remove Placeholders: Only include doormat(s) that have been fully customized based on user input. Do not include generic or placeholder text.
Provide a Preview: Display the suggested doormat(s) in a clear, easy-to-read list for the user to review and adjust as needed.
Doormat examples:
1. Title: Tax-free savings accounts Description: Tax-free savings accounts, registered savings plans, pooled pension plans, plan administrators.
2. Title: Apply for a clearance certificate Description: Required for final tax returns, legal representatives, estate executors, outstanding balances.
3. Title: Renewable energy grants Description: Government grants, solar panel incentives, wind energy funding, green energy initiatives.
Return only updated HTML code with no other commentary.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  },
  [PagePromptKey.PlainLanguage]: {
    role: RoleKey.ContentDesigner,
    task: `Your primary function is to help web publishers rewrite technical content to be easy to understand for the general public.
Your task is to convert text into content which is aimed at improving:
\xB7 Comprehension
\xB7 Flow
\xB7 Logical transitions
Apply the Canada.ca Content Style Guide rules to the content and tailor it for a web page layout.
Avoid the passive voice. Use active voice to inform the user in a direct manner.
Use action verbs, preferably at the beginning of your sentences.
Prioritize the use of positive constructions over negative ones whenever possible.
Write in short sentences that do not run-on.
Use simple, direct phrasing.
Aim to structure the content to have a logical flow like a story would with a beginning, middle, and end, providing a task resolution.
Lists must have a lead-in sentence.
Bullet points should be short and convey one idea.
When rewriting content do not remove important details or instructions.
Reorganize ideas and arrange them in stepped processes, logical hierarchies or for clarity of cause and effect.
Make sure to use the inverted pyramid concept when organizing information.
Examples of using action verbs, preferably at the beginning of your sentences:
\xB7 "Report your business income on line x of the form"
\xB7 "Refer to the guide for more instructions on claiming a deduction"
Return only updated HTML code with no other commentary.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  },
  [PagePromptKey.Tense]: {
    role: RoleKey.HTMLeditor,
    task: `Your only task is to rewrite the tense of all human-readable sentences in the HTML content below to {{TARGET_TENSE}} tense.

# PRESERVE EXACTLY (character-for-character, unchanged):
- All HTML tags, attributes, attribute values, classes, ids, and inline styles
- All whitespace, line breaks, and indentation
- URLs, href/src values, code samples, <script>/<style> contents, HTML entities, numbers, dates, proper nouns
- Direct quotations attributed to a speaker (leave their original tense intact)

# CONTENT RULES:
- Change verb tense only. Do not reword, rephrase, correct grammar, fix typos, summarize, or expand any sentence beyond what the tense change itself requires.
- Do not add, remove, or reorder any content, tags, or attributes.
- If text has no verb or unclear tense (headings, labels, button text, standalone nouns), leave it unchanged.
- Apply tense consistently across the entire document \u2014 every text node, including alt text, table cells, and nested elements, not just the first paragraph.`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html,
    available: true
  }
};

// src/app/common/prompts/backup-prompts/problems.prompts.ts
var ProblemPrompts = {
  [ProblemPromptKey.AlertsProblems]: {
    role: RoleKey.ContentDesigner,
    task: `Analyze the reportable alerts in the supplied page context and identify applicable content design, accessibility, and markup issues.
Return issue reports only. Do not rewrite alert HTML.

### Analysis instructions`,
    rubric: [],
    output: OutputKey.Json,
    jsonSchema: `{
  "type": "object",
  "required": ["issues"],
  "properties": {
    "issues": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "alert_index",
          "issue_category",
          "description",
          "recommendation",
          "severity"
        ],
        "properties": {
          "alert_index": { "type": "integer", "minimum": 1 },
          "issue_category": { "type": "string" },
          "description": { "type": "string" },
          "recommendation": { "type": "string" },
          "severity": { "type": "string", "enum": ["High", "Medium", "Low"] }
        }
      }
    }
  }
}`,
    available: false
  },
  [ProblemPromptKey.AlertsRewrite]: {
    role: RoleKey.ContentDesigner,
    task: "Analyze the reportable alerts in the supplied page context and identify applicable content design, accessibility, and markup issues.",
    rubric: [RubricKey.NoCommentary],
    output: OutputKey.Json,
    available: false
  },
  [ProblemPromptKey.TranslateIssueDetails]: {
    role: RoleKey.Translator,
    task: `Translate only the description and recommendation values in the supplied JSON from English into Canadian French.
Return only valid JSON with this exact shape: {"items":[{"translation_id":"1","description":"...","recommendation":"..."}]}.
Preserve every translation_id exactly. Do not add, remove, combine, split, or reorder items.
Preserve HTML tags and attributes, URLs, code, placeholders, CSS classes, ARIA attributes, and quoted source text exactly.`,
    rubric: [],
    output: OutputKey.Json,
    jsonSchema: `{
  "type": "object",
  "required": ["items"],
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["translation_id", "description", "recommendation"],
        "properties": {
          "translation_id": { "type": "string" },
          "description": { "type": "string" },
          "recommendation": { "type": "string" }
        }
      }
    }
  }
}`
  }
};

// src/app/common/prompts/backup-prompts/shared.prompts.ts
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
    - "benefits" \u2192 "prestations" or "allocations"
    - "tax return" \u2192 "d\xE9claration de revenus"
    - "GST/HST" \u2192 "TPS/TVH"
    - "business number" \u2192 "num\xE9ro d'entreprise"
    - "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
    - "deduction" \u2192 "d\xE9duction"
    - "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
    - "payroll deductions" \u2192 "retenues sur la paie"
    - "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"`
  ],
  [RubricKey.NoCommentary]: ["Response contains no preamble or explanatory text beyond what was requested."],
  [RubricKey.PreserveHtmlStructure]: ["Original HTML structure, attributes, and formatting are maintained where possible."],
  [RubricKey.CharacterLimit]: ["Response must be under the specified character limit."]
};

// src/app/common/prompts/backup-prompts/tools.prompts.ts
var ToolsPrompts = {
  [ToolsPromptKey.Metadata]: {
    role: RoleKey.SeoExpert,
    task: "Generate a new SEO meta description and a list of target keywords for a webpage in both English and French. The French and English versions should be closely aligned in meaning but localized appropriately, not just translated word-for-word.",
    rubric: [RubricKey.Description, RubricKey.DescriptionEN, RubricKey.DescriptionFR, RubricKey.Keywords, RubricKey.CraTermTranslations],
    output: OutputKey.Json,
    jsonSchema: `{
"en": {
"description": "string (120-160 chars)",
"keywords": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
},
"fr": {
"description": "string (120-200 chars)",
"keywords": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
}
}`,
    available: true
  },
  [ToolsPromptKey.Description]: {
    role: RoleKey.SeoExpert,
    task: "Generate a concise meta description in English for the following web page content. The description must capture the main topic and use terminology found in the content.",
    rubric: [RubricKey.CharacterLimit, RubricKey.NoCommentary],
    output: OutputKey.Json,
    jsonSchema: `{
  "title": "string (max 60 chars)",
  "description": "string (max 275 chars)",
  "keywords": ["string", "string", ...]
}`
  },
  [ToolsPromptKey.Keywords]: {
    role: RoleKey.SeoExpert,
    task: "Generate 10 meaningful, topic-specific meta keywords that are DIRECTLY EXTRACTED from or strongly implied by the content. Return only a comma separated list of keywords.",
    rubric: [RubricKey.CharacterLimit, RubricKey.NoCommentary],
    output: OutputKey.Text
  },
  [ToolsPromptKey.Languages]: {
    role: RoleKey.Translator,
    task: `Compare the English and French content and return an array of any semantic differences. If no differences are found, return { "differences": [] }. 
    For every difference you report, quote the exact English text and the exact French text it refers to, and say what the problem is. 
    Acronyms and abbreviations are expected to differ between English and French and don't need to be reported if correct for the language (for example GST/HST and TPS/TVH, or CCR and RCC).`,
    rubric: [RubricKey.CraTermTranslations, RubricKey.NoCommentary],
    output: OutputKey.Json,
    jsonSchema: `{
  "differences": [
    {
      "english": "exact English text, or an empty string if the English page has nothing for this",
      "french": "exact French text, or an empty string if the French page has nothing for this",
      "issue": "short description of the problem"
    }
  ]
}`,
    available: true
  }
};

// src/app/views/toolbox/dev-tools/prompt-editor-backup/prompt-editor.component.ts
var _c0 = ["diffContainer"];
var _c1 = ["filePreview"];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.enumKey;
function PromptEditorBackupComponent_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "edit");
    \u0275\u0275elementEnd();
  }
}
function PromptEditorBackupComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 26);
    \u0275\u0275listener("click", function PromptEditorBackupComponent_For_10_Template_p_tab_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, PromptEditorBackupComponent_For_10_Conditional_4_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, tab_r4.title), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasChanges(tab_r4.value) ? 4 : -1);
  }
}
function PromptEditorBackupComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "preview");
    \u0275\u0275elementEnd();
  }
}
function PromptEditorBackupComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "change_circle");
    \u0275\u0275elementEnd();
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "p-radiobutton", 31);
    \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_4_For_1_Template_p_radiobutton_ngModelChange_1_listener() {
      const fragment_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleFragment(fragment_r6.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fragment_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + fragment_r6.key)("ngModel", ctx_r2.isFragmentVisible(fragment_r6.key));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + fragment_r6.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, fragment_r6.label));
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_4_For_1_Template, 5, 7, "div", 30, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p-checkbox", 31);
    \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_5_For_1_Template_p_checkbox_ngModelChange_1_listener() {
      const prompt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.togglePrompt(prompt_r9.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("inputId", "show_" + prompt_r9.enumKey)("ngModel", ctx_r2.isPromptVisible(prompt_r9.enumKey));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red", ctx_r2.isPromptConfig(prompt_r9) ? !prompt_r9.promptText.available : false);
    \u0275\u0275property("for", "show_" + prompt_r9.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, prompt_r9.translationKey), " ");
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_5_For_1_Template, 5, 9, "div", 33, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.promptText, $event) || (item_r11.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r11.promptText);
    \u0275\u0275property("autoResize", true)("id", item_r11.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r11.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, item_r11.translationKey));
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_For_4_Template, 5, 7, "p-iftalabel", null, _forTrack2);
  }
  if (rf & 2) {
    const fragment_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, fragment_r12.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fragment_r12.data);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const fragment_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isFragmentVisible(fragment_r12.key) ? 0 : -1);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText, $event) || (prompt_r14.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText);
    \u0275\u0275property("autoResize", true)("id", prompt_r14.enumKey);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r14.translationKey));
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r16.label), " ");
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r17.label), " ");
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r18.label), " ");
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r19.label), " ");
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Conditional_29_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.jsonSchema, $event) || (prompt_r14.promptText.jsonSchema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Conditional_29_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 35);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.jsonSchema);
    \u0275\u0275property("autoResize", true)("id", prompt_r14.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "aiPrompt.component.jsonSchema"));
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "p-iftalabel", 37)(5, "p-select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.role, $event) || (prompt_r14.promptText.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(6, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_6_Template, 2, 3, "ng-template", 39)(7, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_7_Template, 2, 3, "ng-template", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 35);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-iftalabel", 37)(12, "p-select", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.output, $event) || (prompt_r14.promptText.output = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_p_select_onChange_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(13, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_13_Template, 2, 3, "ng-template", 39)(14, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_ng_template_14_Template, 2, 3, "ng-template", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 35);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel", 37)(19, "p-multiselect", 41);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_p_multiselect_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.rubric, $event) || (prompt_r14.promptText.rubric = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_p_multiselect_onChange_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 35);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "p-iftalabel")(25, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.task, $event) || (prompt_r14.promptText.task = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template_textarea_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 35);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Conditional_29_Template, 5, 7, "p-iftalabel");
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 23, prompt_r14.translationKey));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.role);
    \u0275\u0275property("id", prompt_r14.enumKey + "_role")("options", ctx_r2.roleOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r14.enumKey + "_role");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 25, "aiPrompt.component.role"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.output);
    \u0275\u0275property("id", prompt_r14.enumKey + "_output")("options", ctx_r2.outputOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r14.enumKey + "_output");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 27, "aiPrompt.component.output"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.rubric);
    \u0275\u0275property("id", prompt_r14.enumKey + "_rubric")("options", ctx_r2.rubricOptions())("placeholder", \u0275\u0275pipeBind1(20, 29, "common.none"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", prompt_r14.enumKey + "_rubric");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 31, "aiPrompt.component.rubric"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.task);
    \u0275\u0275property("autoResize", true)("id", prompt_r14.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 33, "aiPrompt.component.task"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(prompt_r14.promptText.output === ctx_r2.OutputKey.Json ? 29 : -1);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_0_Template, 5, 7, "p-iftalabel");
    \u0275\u0275conditionalCreate(1, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Conditional_1_Template, 30, 35);
  }
  if (rf & 2) {
    const prompt_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.isPromptString(prompt_r14) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r14) && ctx_r2.isPromptVisible(prompt_r14.enumKey) ? 1 : -1);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_For_1_Template, 2, 2, null, null, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorBackupComponent_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275conditionalCreate(4, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_4_Template, 2, 0)(5, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_5_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275conditionalCreate(7, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_7_Template, 2, 0);
    \u0275\u0275conditionalCreate(8, PromptEditorBackupComponent_For_23_Conditional_2_Conditional_8_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, tab_r7.description));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isFragmentsTab(tab_r7) ? 8 : -1);
  }
}
function PromptEditorBackupComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 13)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, PromptEditorBackupComponent_For_23_Conditional_2_Template, 9, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r7.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r7.value === ctx_r2.selectedTab() ? 2 : -1);
  }
}
function PromptEditorBackupComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const group_r21 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, group_r21.label));
  }
}
function PromptEditorBackupComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const selected_r22 = ctx.$implicit;
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, selected_r22.translationKey));
  }
}
function PromptEditorBackupComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prompt_r23 = ctx.$implicit;
    \u0275\u0275classProp("text-red", !prompt_r23.promptText.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, prompt_r23.translationKey));
  }
}
function PromptEditorBackupComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressspinner");
  }
}
function PromptEditorBackupComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.aiState().error);
  }
}
function PromptEditorBackupComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Answered by: ", ctx_r2.aiState().respondingModel);
  }
}
function PromptEditorBackupComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r2.result, " ");
  }
}
function PromptEditorBackupComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.response));
  }
}
function PromptEditorBackupComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275element(1, "div", null, 3);
    \u0275\u0275elementStart(3, "p-fieldset", 42);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "pre", null, 4)(7, "code", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p-button", 44);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function PromptEditorBackupComponent_Conditional_69_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r24);
      const prompts_r25 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPullRequest(ctx_r2.tabs[ctx_r2.selectedPromptTab()].tool, prompts_r25));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const prompts_r26 = \u0275\u0275storeLet(ctx_r2.tabs[ctx_r2.selectedPromptTab()].prompts);
    \u0275\u0275advance(3);
    \u0275\u0275property("collapsed", true)("legend", \u0275\u0275pipeBind1(4, 7, "dev.prompts.pr.filePreview"))("toggleable", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prompts_r26 ? ctx_r2.rebuildPromptFile(ctx_r2.tabs[ctx_r2.selectedPromptTab()].tool, prompts_r26) : ctx_r2.rebuildSharedFile());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.signInService.user())("label", \u0275\u0275pipeBind1(10, 9, "dev.prompts.button.openPR"));
  }
}
function PromptEditorBackupComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "dev.prompts.pr.noChangesMessage"));
  }
}
var PromptEditorBackupComponent = class _PromptEditorBackupComponent {
  translate = inject(TranslateService);
  exportGitHubService = inject(ExportGitHubService);
  settingsService = inject(UserSettingsService);
  openRouterService = inject(OpenRouterService);
  aiPromptService = inject(AiPromptService);
  signInService = inject(SignInService);
  styleCardService = inject(StyleCardService);
  constructor() {
    effect(() => {
      void this.settingsService.darkMode();
      this.updateDiff();
    });
    effect(() => {
      const tab = this.selectedTab();
      if (tab < 5) {
        this.selectedPromptTab.set(tab);
      }
      this.updateDiff();
    });
  }
  // Type guard
  isPromptConfig(entry) {
    return typeof entry.promptText === "object" && entry.promptText !== null;
  }
  isPromptString(entry) {
    return typeof entry.promptText === "string";
  }
  isFragmentsTab(tab) {
    return tab.fragments !== void 0;
  }
  OutputKey = OutputKey;
  // Shared prompt fragments
  roleFragment = Object.keys(RoleKey).map((enumKey) => ({
    enumKey,
    translationKey: RoleKey[enumKey],
    promptText: RoleFragment[RoleKey[enumKey]]
  }));
  outputFragment = Object.keys(OutputKey).map((enumKey) => ({
    enumKey,
    translationKey: OutputKey[enumKey],
    promptText: OutputFragment[OutputKey[enumKey]]
  }));
  rubricFragment = Object.keys(RubricKey).map((enumKey) => ({
    enumKey,
    translationKey: RubricKey[enumKey],
    promptText: RubricFragment[RubricKey[enumKey]]
  }));
  fragments = [
    { key: "role", label: marker("aiPrompt.component.role"), data: this.roleFragment },
    { key: "output", label: marker("aiPrompt.component.output"), data: this.outputFragment },
    { key: "rubric", label: marker("aiPrompt.component.rubric"), data: this.rubricFragment }
  ];
  selectedFragment = "role";
  toggleFragment(type) {
    this.selectedFragment = type;
  }
  isFragmentVisible(type) {
    return this.selectedFragment === type;
  }
  // Dropdown values
  roleOptions = Object.values(RoleKey).map((key) => ({
    value: key,
    label: key
  }));
  rubricOptions = computed(() => {
    this.translate.currentLang();
    return Object.values(RubricKey).map((key) => ({
      value: key,
      label: this.translate.instant(key)
    }));
  }, ...ngDevMode ? [{ debugName: "rubricOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  outputOptions = Object.values(OutputKey).map((key) => ({
    value: key,
    label: key
  }));
  // Prompts
  inventoryPrompts = Object.keys(ToolsPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ToolsPromptKey[enumKey],
    promptText: ToolsPrompts[ToolsPromptKey[enumKey]]
  }));
  pagePrompts = Object.keys(PagePromptKey).map((enumKey) => ({
    enumKey,
    translationKey: PagePromptKey[enumKey],
    promptText: PagePrompts[PagePromptKey[enumKey]]
  }));
  problemPrompts = Object.keys(ProblemPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ProblemPromptKey[enumKey],
    promptText: ProblemPrompts[ProblemPromptKey[enumKey]]
  }));
  selectedPrompts = new Set([this.inventoryPrompts[0]?.enumKey, this.pagePrompts[0]?.enumKey, this.problemPrompts[0]?.enumKey].filter(Boolean));
  togglePrompt(enumKey) {
    if (this.selectedPrompts.has(enumKey)) {
      this.selectedPrompts.delete(enumKey);
    } else {
      this.selectedPrompts.add(enumKey);
    }
  }
  isPromptVisible(enumKey) {
    return this.selectedPrompts.has(enumKey);
  }
  // Tabs
  selectedTab = signal(1, ...ngDevMode ? [{ debugName: "selectedTab" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedPromptTab = signal(1, ...ngDevMode ? [{ debugName: "selectedPromptTab" }] : (
    /* istanbul ignore next */
    []
  ));
  tabs = [
    { title: marker("aiPrompt.shared._title"), description: marker("aiPrompt.shared._description"), value: 0, fragments: this.fragments, tool: "Shared", original: this.rebuildSharedFile() },
    {
      title: marker("aiPrompt.tools._title"),
      description: marker("aiPrompt.tools._description"),
      value: 1,
      prompts: this.inventoryPrompts,
      tool: "Tools",
      original: this.rebuildPromptFile("Tools", this.inventoryPrompts)
    },
    {
      title: marker("aiPrompt.page._title"),
      description: marker("aiPrompt.page._description"),
      value: 2,
      prompts: this.pagePrompts,
      tool: "Page",
      original: this.rebuildPromptFile("Page", this.pagePrompts)
    },
    {
      title: marker("aiPrompt.problems._title"),
      description: marker("aiPrompt.problems._description"),
      value: 3,
      prompts: this.problemPrompts,
      tool: "Problem",
      original: this.rebuildPromptFile("Problem", this.problemPrompts)
    }
  ];
  // Dropdown
  promptGroups = [
    { label: "aiPrompt.tools._title", items: this.inventoryPrompts },
    { label: "aiPrompt.page._title", items: this.pagePrompts },
    { label: "aiPrompt.problems._title", items: this.problemPrompts }
  ];
  selectedPrompt = signal(this.problemPrompts.find((p) => p.enumKey === "Alerts"), ...ngDevMode ? [{ debugName: "selectedPrompt" }] : (
    /* istanbul ignore next */
    []
  ));
  aiPrompt = computed(() => {
    const selected = this.selectedPrompt();
    if (!selected || !this.isPromptConfig(selected))
      return "";
    return this.aiPromptService.composePrompt(selected.promptText);
  }, ...ngDevMode ? [{ debugName: "aiPrompt" }] : (
    /* istanbul ignore next */
    []
  ));
  // Test prompts
  aiState = this.openRouterService.state;
  description = "Official CRA information on Canadian taxes. File your return, manage payments, and explore credits and deductions for individuals and businesses.";
  response = null;
  result = "";
  testResponse() {
    return __async(this, null, function* () {
      const config = this.getSelectedPromptConfig();
      if (!config)
        return;
      this.response = yield this.openRouterService.sendToAI(config, this.description);
    });
  }
  testResult() {
    return __async(this, null, function* () {
      const config = this.getSelectedPromptConfig();
      if (!config)
        return;
      this.result = yield this.openRouterService.getTextFromAI(config, this.description);
    });
  }
  // Rebuild prompt file
  rebuildPromptFile(tool, prompts) {
    const updatedPrompts = prompts.map((prompt) => {
      let value;
      if (this.isPromptConfig(prompt)) {
        value = this.serializePromptConfig(prompt.promptText);
      } else if (this.isPromptString(prompt)) {
        value = this.toTemplateLiteral(prompt.promptText);
      } else {
        throw new Error(`Unsupported prompt value for ${prompt.enumKey}`);
      }
      return `	[${tool}PromptKey.${prompt.enumKey}]: ${value},`;
    }).join("\n");
    const imports = ["OutputKey", `${tool}PromptKey`, "PromptConfig", "RoleKey", "RubricKey"].sort();
    return `import { ${imports.join(", ")} } from './prompt.model';

export const ${tool}Prompts: Record<${tool}PromptKey, PromptConfig> = {
${updatedPrompts}
};
`;
  }
  getSelectedPromptConfig() {
    const selected = this.selectedPrompt();
    return selected && this.isPromptConfig(selected) ? selected.promptText : null;
  }
  serializePromptConfig(config) {
    const lines = [
      "{",
      `		role: RoleKey.${this.getEnumKey(RoleKey, config.role)},`,
      `		task: ${this.toTemplateLiteral(config.task)},`,
      `		rubric: [${config.rubric.map((rubric) => `RubricKey.${this.getEnumKey(RubricKey, rubric)}`).join(", ")}],`,
      `		output: OutputKey.${this.getEnumKey(OutputKey, config.output)},`
    ];
    if (config.jsonSchema !== void 0)
      lines.push(`		jsonSchema: ${this.toTemplateLiteral(config.jsonSchema)},`);
    if (config.examples !== void 0)
      lines.push(`		examples: ${this.toTemplateLiteral(config.examples)},`);
    if (config.available !== void 0)
      lines.push(`		available: ${config.available},`);
    lines.push("  }");
    return lines.join("\n");
  }
  getEnumKey(enumObject, value) {
    const key = Object.entries(enumObject).find(([, enumValue]) => enumValue === value)?.[0];
    if (!key)
      throw new Error(`Unknown prompt enum value: ${value}`);
    return key;
  }
  toTemplateLiteral(value) {
    return `\`${value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\``;
  }
  // Rebuild prompt file (older version)
  rebuildPromptFileOld(tool, prompts) {
    const updatedPrompts = prompts.map((p) => ` [${tool}PromptKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    return `import { ${tool}PromptKey } from './prompt.model'
export const ${tool}Prompts: Record<${tool}PromptKey, string> = {
${updatedPrompts}
};`;
  }
  rebuildSharedFile() {
    const roleEntries = this.roleFragment.map((p) => `	[RoleKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    const outputEntries = this.outputFragment.map((p) => `	[OutputKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    const rubricEntries = this.rubricFragment.map((p) => `	[RubricKey.${p.enumKey}]: \`${p.promptText}\`,`).join("\n");
    return `import { RoleKey, OutputKey, RubricKey } from './prompt.model'

export const RoleFragment: Record<RoleKey, string> = {
${roleEntries}
}

export const OutputFragment: Record<OutputKey, string> = {
${outputEntries}
}

export const RubricFragment: Record<RubricKey, string> = {
${rubricEntries}
}`;
  }
  /** Tracks if changes have been made to current tab */
  hasChanges(promptTab) {
    const tabNumber = promptTab ?? this.selectedPromptTab();
    const tab = this.tabs[tabNumber];
    if (tabNumber === 0) {
      const updatedContent2 = this.rebuildSharedFile();
      const originalContent2 = tab.original;
      return updatedContent2 !== originalContent2;
    }
    if (!tab?.prompts)
      return false;
    const updatedContent = this.rebuildPromptFile(tab.tool, tab.prompts);
    const originalContent = tab.original;
    return updatedContent !== originalContent;
  }
  // Open pull request
  pullRequestUrl = null;
  /** Open pull request for selected tab */
  openPullRequest(tool, prompts) {
    return __async(this, null, function* () {
      const content = !prompts ? this.rebuildSharedFile() : this.rebuildPromptFile(tool, prompts);
      const toolLC = tool.toLowerCase();
      try {
        const result = yield this.exportGitHubService.createPullRequestForPrompts(toolLC, `src/app/common/prompts/${toolLC}.prompts.ts`, `${toolLC}.prompts.ts`, content);
        this.pullRequestUrl = result.prUrl;
      } catch (error) {
        console.error("Failed to create PR:", error);
      }
    });
  }
  /** Update prompts diff */
  diffContainer = viewChild("diffContainer", ...ngDevMode ? [{ debugName: "diffContainer" }] : (
    /* istanbul ignore next */
    []
  ));
  updateDiff() {
    return __async(this, null, function* () {
      const diffContainer = this.diffContainer();
      if (!diffContainer)
        return;
      const [{ createPatch }, { Diff2HtmlUI }] = yield Promise.all([import("./chunk-56GJLXIB.js"), import("./chunk-7G2QHIEK.js")]);
      const tab = this.tabs[this.selectedPromptTab()];
      const updatedContent = this.selectedPromptTab() === 0 ? this.rebuildSharedFile() : tab.prompts ? this.rebuildPromptFile(tab.tool, tab.prompts) : "";
      const originalContent = tab.original;
      const patch = createPatch(`${tab.tool.toLowerCase()}.prompts.ts`, originalContent, updatedContent);
      const config = {
        drawFileList: false,
        matching: "words",
        outputFormat: "line-by-line",
        // or 'side-by-side'
        highlight: true,
        colorScheme: this.settingsService.darkMode() ? import_types.ColorSchemeType.DARK : import_types.ColorSchemeType.LIGHT
      };
      const diff2htmlUi = new Diff2HtmlUI(diffContainer.nativeElement, patch, config);
      diff2htmlUi.draw();
      this.highlightFilePreview();
    });
  }
  /** Highlight code for export preview */
  filePreview = viewChild("filePreview", ...ngDevMode ? [{ debugName: "filePreview" }] : (
    /* istanbul ignore next */
    []
  ));
  highlightFilePreview() {
    return __async(this, null, function* () {
      const filePreview = this.filePreview();
      if (!filePreview)
        return;
      const prompts = this.tabs[this.selectedPromptTab()].prompts;
      if (!prompts)
        return;
      try {
        const { default: Prism } = yield import("./chunk-7W6HYFOI.js");
        yield import("./chunk-J4HMK3D4.js");
        this.loadPrismTheme(this.settingsService.darkMode());
        const pre = filePreview.nativeElement;
        const codeBlock = pre.querySelector("code");
        if (codeBlock) {
          pre.className = "";
          pre.removeAttribute("data-highlighted");
          pre.removeAttribute("tabindex");
          codeBlock.className = "language-typescript";
          codeBlock.textContent = this.rebuildPromptFile(this.tabs[this.selectedPromptTab()].tool, prompts);
          Prism.highlightElement(codeBlock);
        }
      } catch (error) {
        console.error("Failed to load Prism:", error);
      }
    });
  }
  /** Load light/dark prism theme */
  loadPrismTheme(isDarkMode) {
    const existingLink = document.getElementById("prism-theme");
    const newHref = isDarkMode ? "css/prism-okaidia.min.css" : "css/prism.min.css";
    if (existingLink) {
      if (existingLink.href.endsWith(newHref))
        return;
      existingLink.href = newHref;
    } else {
      const link = document.createElement("link");
      link.id = "prism-theme";
      link.rel = "stylesheet";
      link.href = newHref;
      document.head.appendChild(link);
    }
  }
  static \u0275fac = function PromptEditorBackupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromptEditorBackupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromptEditorBackupComponent, selectors: [["aida-prompt-editor"]], viewQuery: function PromptEditorBackupComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.diffContainer, _c0, 5)(ctx.filePreview, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 71, vars: 60, consts: [["group", ""], ["selectedItem", ""], ["item", ""], ["diffContainer", ""], ["filePreview", ""], ["id", "wb-cont"], [1, "w-limited", 3, "valueChange", "value"], [1, "surface-ground"], [1, "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "value"], [1, "ml-auto", "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "value"], [1, "flex", "align-content-center", "gap-2"], [1, "material-icons-outlined", "text-primary"], [1, "p-0", "m-0"], [3, "value"], [1, "w-limited"], [1, "flex", "flex-column", "gap-2"], [1, "my-0"], [1, "my-1"], ["inputId", "promptSelect", "optionGroupChildren", "items", "optionGroupLabel", "label", "optionLabel", "translationKey", 1, "w-20rem", 3, "ngModelChange", "group", "ngModel", "options"], [1, "prompt-preview"], ["id", "content", "autoResize", "true", "fluid", "", "pTextarea", "", "rows", "3", "variant", "outlined", 1, "secondary-outline", "min-h-6rem", 3, "ngModelChange", "ngModel"], ["for", "content"], [1, "flex", "gap-2"], [3, "onClick", "disabled"], ["severity", "error"], ["icon", "pi pi-info-circle", "severity", "info"], [1, "surface-card", "border-1", "border-bottom-none", "surface-border", "hover:bg-primary-light", 3, "click", "value"], [1, "mt-0"], [1, "flex", "flex-row", "flex-wrap", "gap-4", "mt-0", "mb-4"], [1, "flex", "flex-column", "gap-3", "mt-0"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [3, "ngModelChange", "binary", "inputId", "ngModel"], [1, "cursor-pointer", "font-semibold", 3, "for"], [1, "flex", "flex-row", "align-content-center", "gap-2"], ["fluid", "", "pTextarea", "", "rows", "2", 3, "ngModelChange", "ngModel", "autoResize", "id"], [3, "for"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], ["appendTo", "body", "fluid", "", "optionLabel", "label", "optionValue", "value", 1, "h-full", 3, "ngModelChange", "onChange", "ngModel", "id", "options", "placeholder"], ["styleClass", "secondary-outline mb-3", 3, "collapsed", "legend", "toggleable"], [1, "language-typescript"], ["icon", "pi pi-send", 3, "onClick", "disabled", "label"]], template: function PromptEditorBackupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h1", 5);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-tabs", 6);
      \u0275\u0275twoWayListener("valueChange", function PromptEditorBackupComponent_Template_p_tabs_valueChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(8, "p-tablist", 7);
      \u0275\u0275repeaterCreate(9, PromptEditorBackupComponent_For_10_Template, 5, 5, "p-tab", 8, _forTrack0);
      \u0275\u0275elementStart(11, "p-tab", 9)(12, "div", 10);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275conditionalCreate(15, PromptEditorBackupComponent_Conditional_15_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-tab", 8)(17, "div", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275conditionalCreate(20, PromptEditorBackupComponent_Conditional_20_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "p-tabpanels", 12);
      \u0275\u0275repeaterCreate(22, PromptEditorBackupComponent_For_23_Template, 3, 4, "p-tabpanel", 13, _forTrack0);
      \u0275\u0275elementStart(24, "p-tabpanel", 13)(25, "div", 14)(26, "div", 15)(27, "div")(28, "h2", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p-select", 18);
      \u0275\u0275listener("ngModelChange", function PromptEditorBackupComponent_Template_p_select_ngModelChange_34_listener($event) {
        return ctx.selectedPrompt.set($event);
      });
      \u0275\u0275template(35, PromptEditorBackupComponent_ng_template_35_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(37, PromptEditorBackupComponent_ng_template_37_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(39, PromptEditorBackupComponent_ng_template_39_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "pre", 19);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div")(44, "h3", 17);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p-iftalabel")(48, "textarea", 20);
      \u0275\u0275twoWayListener("ngModelChange", function PromptEditorBackupComponent_Template_textarea_ngModelChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "label", 21);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 22)(53, "p-button", 23);
      \u0275\u0275listener("onClick", function PromptEditorBackupComponent_Template_p_button_onClick_53_listener() {
        return ctx.testResult();
      });
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p-button", 23);
      \u0275\u0275listener("onClick", function PromptEditorBackupComponent_Template_p_button_onClick_56_listener() {
        return ctx.testResponse();
      });
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(59, PromptEditorBackupComponent_Conditional_59_Template, 1, 0, "p-progressspinner");
      \u0275\u0275conditionalCreate(60, PromptEditorBackupComponent_Conditional_60_Template, 2, 1, "p-message", 24);
      \u0275\u0275conditionalCreate(61, PromptEditorBackupComponent_Conditional_61_Template, 2, 1, "small");
      \u0275\u0275conditionalCreate(62, PromptEditorBackupComponent_Conditional_62_Template, 1, 1);
      \u0275\u0275conditionalCreate(63, PromptEditorBackupComponent_Conditional_63_Template, 3, 3, "pre", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "p-tabpanel", 13)(65, "div", 14)(66, "h2", 17);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(69, PromptEditorBackupComponent_Conditional_69_Template, 11, 11)(70, PromptEditorBackupComponent_Conditional_70_Template, 3, 3, "p-message", 25);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 36, "dev.prompts._title.backup"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 38, "dev.prompts.description"), " ", \u0275\u0275pipeBind1(6, 40, "dev.prompts.description2"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("value", ctx.selectedTab);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 42, "dev.prompts.preview._title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", 11);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 44, "dev.prompts.pr._title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 10);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 46, "dev.prompts.preview.header"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 48, "dev.prompts.preview.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("group", true)("ngModel", ctx.selectedPrompt())("options", ctx.promptGroups);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.aiPrompt());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 50, "dev.prompts.preview.testContent"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 52, "dev.prompts.preview.testContentLabel"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.getSelectedPromptConfig());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 54, "dev.prompts.preview.getResult"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.getSelectedPromptConfig());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 56, "dev.prompts.preview.getResponse"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.aiState().loading ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().error ? 60 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().respondingModel ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.result ? 62 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.response ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", 11);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.styleCardService.cardStyles(void 0, void 0, void 0, void 0, void 0, "border-top-none border-noround-top"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 58, "dev.prompts.pr.header"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasChanges() ? 69 : 70);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    CheckboxModule,
    Checkbox,
    FieldsetModule,
    Fieldset,
    IftaLabelModule,
    IftaLabel,
    MessageModule,
    Message,
    MultiSelectModule,
    MultiSelect,
    ProgressSpinnerModule,
    ProgressSpinner,
    RadioButtonModule,
    RadioButton,
    SelectModule,
    Select,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    TextareaModule,
    Textarea,
    JsonPipe,
    TranslatePipe
  ], styles: ["\npre.prompt-preview[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=prompt-editor.component-5Z5Y6CZH.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromptEditorBackupComponent, [{
    type: Component,
    args: [{ selector: "aida-prompt-editor", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      CheckboxModule,
      FieldsetModule,
      IftaLabelModule,
      MessageModule,
      MultiSelectModule,
      ProgressSpinnerModule,
      RadioButtonModule,
      SelectModule,
      TabsModule,
      TextareaModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'dev.prompts._title.backup' | translate }}</h1>
<p>{{ 'dev.prompts.description' | translate }} {{ 'dev.prompts.description2' | translate }}</p>

<p-tabs [(value)]="selectedTab" class="w-limited">
  <p-tablist class="surface-ground">
    @for (tab of tabs; track tab.value) {
      <p-tab [value]="tab.value" (click)="updateDiff()" class="surface-card border-1 border-bottom-none surface-border hover:bg-primary-light">
        <div class="flex align-content-center gap-2">
          {{ tab.title | translate }}
          @if (hasChanges(tab.value)) {
            <span class="material-icons-outlined text-primary">edit</span>
          }
        </div>
      </p-tab>
    }
    <p-tab [value]="10" class="ml-auto surface-card border-1 border-bottom-none surface-border hover:bg-primary-light">
      <div class="flex align-content-center gap-2">
        {{ 'dev.prompts.preview._title' | translate }}
        @if (hasChanges()) {
          <span class="material-icons-outlined text-primary">preview</span>
        }
      </div>
    </p-tab>
    <p-tab [value]="11" class="surface-card border-1 border-bottom-none surface-border hover:bg-primary-light">
      <div class="flex align-content-center gap-2">
        {{ 'dev.prompts.pr._title' | translate }}
        @if (hasChanges()) {
          <span class="material-icons-outlined text-primary">change_circle</span>
        }
      </div>
    </p-tab>
  </p-tablist>
  <p-tabpanels class="p-0 m-0">
    @for (tab of tabs; track tab.value) {
      <p-tabpanel [value]="tab.value">
        <div [class]="styleCardService.cardStyles(undefined, undefined, undefined, undefined, undefined, 'border-top-none border-noround-top')" class="w-limited">
          @if (tab.value === selectedTab()) {
            <p class="mt-0">{{ tab.description | translate }}</p>
            <!--Checkboxes-->
            <div class="flex flex-row flex-wrap gap-4 mt-0 mb-4">
              @if (isFragmentsTab(tab)) {
                @for (fragment of tab.fragments; track fragment.key) {
                  <div class="flex flex-row align-items-center gap-2">
                    <p-radiobutton [binary]="true" [inputId]="'show_' + fragment.key" [ngModel]="isFragmentVisible(fragment.key)" (ngModelChange)="toggleFragment(fragment.key)" />
                    <label [for]="'show_' + fragment.key" class="cursor-pointer font-semibold">{{ fragment.label | translate }}</label>
                  </div>
                }
              } @else {
                @for (prompt of tab.prompts; track prompt.enumKey) {
                  <div class="flex flex-row align-content-center gap-2">
                    <p-checkbox [binary]="true" [inputId]="'show_' + prompt.enumKey" [ngModel]="isPromptVisible(prompt.enumKey)" (ngModelChange)="togglePrompt(prompt.enumKey)" />
                    <label [class.text-red]="isPromptConfig(prompt) ? !prompt.promptText.available : false" [for]="'show_' + prompt.enumKey" class="cursor-pointer font-semibold">
                      {{ prompt.translationKey | translate }}
                    </label>
                  </div>
                }
              }
            </div>
            <!--Inputs-->
            <div class="flex flex-column gap-3 mt-0">
              <!--Fragments-->
              @if (isFragmentsTab(tab)) {
                @for (fragment of tab.fragments; track fragment.key) {
                  @if (isFragmentVisible(fragment.key)) {
                    <h2 class="my-0">{{ fragment.label | translate }}</h2>
                    @for (item of fragment.data; track item.enumKey) {
                      <p-iftalabel>
                        <textarea [(ngModel)]="item.promptText" [autoResize]="true" [id]="item.enumKey" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                        <label [for]="item.enumKey">{{ item.translationKey | translate }}</label>
                      </p-iftalabel>
                    }
                  }
                }
              }
              <!--Full prompts-->
              @if (!isFragmentsTab(tab)) {
                @for (prompt of tab.prompts; track prompt.enumKey) {
                  <!-- String editor -->
                  @if (isPromptString(prompt)) {
                    <p-iftalabel>
                      <textarea [(ngModel)]="prompt.promptText" [autoResize]="true" [id]="prompt.enumKey" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                      <label [for]="prompt.enumKey">{{ prompt.translationKey | translate }}</label>
                    </p-iftalabel>
                  }
                  <!-- Config editor -->
                  @if (isPromptConfig(prompt) && isPromptVisible(prompt.enumKey)) {
                    <h2 class="my-0">{{ prompt.translationKey | translate }}</h2>
                    <!--Fragment dropdowns-->
                    <div class="flex flex-column lg:flex-row gap-2">
                      <!-- Role dropdown -->
                      <p-iftalabel class="flex-1">
                        <p-select
                          [(ngModel)]="prompt.promptText.role"
                          [id]="prompt.enumKey + '_role'"
                          [options]="roleOptions"
                          (onChange)="updateDiff()"
                          class="h-full"
                          appendTo="body"
                          fluid
                          optionLabel="label"
                          optionValue="value"
                        >
                          <ng-template let-option pTemplate="item">
                            {{ option.label | translate }}
                          </ng-template>
                          <ng-template let-option pTemplate="selectedItem">
                            {{ option.label | translate }}
                          </ng-template>
                        </p-select>
                        <label [for]="prompt.enumKey + '_role'">{{ 'aiPrompt.component.role' | translate }}</label>
                      </p-iftalabel>
                      <!-- Output format dropdown -->
                      <p-iftalabel class="flex-1">
                        <p-select
                          [(ngModel)]="prompt.promptText.output"
                          [id]="prompt.enumKey + '_output'"
                          [options]="outputOptions"
                          (onChange)="updateDiff()"
                          class="h-full"
                          appendTo="body"
                          fluid
                          optionLabel="label"
                          optionValue="value"
                        >
                          <ng-template let-option pTemplate="item">
                            {{ option.label | translate }}
                          </ng-template>
                          <ng-template let-option pTemplate="selectedItem">
                            {{ option.label | translate }}
                          </ng-template>
                        </p-select>
                        <label [for]="prompt.enumKey + '_output'">{{ 'aiPrompt.component.output' | translate }}</label>
                      </p-iftalabel>
                      <!-- Rubric multi-select -->
                      <p-iftalabel class="flex-1">
                        <p-multiselect
                          [(ngModel)]="prompt.promptText.rubric"
                          [id]="prompt.enumKey + '_rubric'"
                          [options]="rubricOptions()"
                          [placeholder]="'common.none' | translate"
                          (onChange)="updateDiff()"
                          class="h-full"
                          appendTo="body"
                          fluid
                          optionLabel="label"
                          optionValue="value"
                        />
                        <label [for]="prompt.enumKey + '_rubric'">{{ 'aiPrompt.component.rubric' | translate }}</label>
                      </p-iftalabel>
                    </div>
                    <!-- Task textarea -->
                    <p-iftalabel>
                      <textarea [(ngModel)]="prompt.promptText.task" [autoResize]="true" [id]="prompt.enumKey + '_task'" (ngModelChange)="updateDiff()" fluid pTextarea rows="2"></textarea>
                      <label [for]="prompt.enumKey + '_task'">{{ 'aiPrompt.component.task' | translate }}</label>
                    </p-iftalabel>

                    <!-- JSON schema -->
                    @if (prompt.promptText.output === OutputKey.Json) {
                      <p-iftalabel>
                        <textarea
                          [(ngModel)]="prompt.promptText.jsonSchema"
                          [autoResize]="true"
                          [id]="prompt.enumKey + '_jsonSchema'"
                          (ngModelChange)="updateDiff()"
                          fluid
                          pTextarea
                          rows="2"
                        ></textarea>
                        <label [for]="prompt.enumKey + '_jsonSchema'">{{ 'aiPrompt.component.jsonSchema' | translate }}</label>
                      </p-iftalabel>
                    }
                  }
                }
              }
            </div>
          }
        </div>
      </p-tabpanel>
    }
    <p-tabpanel [value]="10">
      <div [class]="styleCardService.cardStyles(undefined, undefined, undefined, undefined, undefined, 'border-top-none border-noround-top')" class="w-limited">
        <div class="flex flex-column gap-2">
          <div>
            <h2 class="my-0">{{ 'dev.prompts.preview.header' | translate }}</h2>
            <p class="my-1">{{ 'dev.prompts.preview.description' | translate }}</p>
            <p-select
              [group]="true"
              [ngModel]="selectedPrompt()"
              [options]="promptGroups"
              (ngModelChange)="selectedPrompt.set($event)"
              class="w-20rem"
              inputId="promptSelect"
              optionGroupChildren="items"
              optionGroupLabel="label"
              optionLabel="translationKey"
            >
              <ng-template #group let-group>{{ group.label | translate }}</ng-template>
              <ng-template #selectedItem let-selected>{{ selected.translationKey | translate }}</ng-template>
              <ng-template #item let-prompt>
                <span [class.text-red]="!prompt.promptText.available">{{ prompt.translationKey | translate }}</span>
              </ng-template>
            </p-select>
            <pre class="prompt-preview">{{ aiPrompt() }}</pre>
          </div>
          <div>
            <h3 class="my-1">{{ 'dev.prompts.preview.testContent' | translate }}</h3>
            <p-iftalabel>
              <textarea id="content" [(ngModel)]="description" class="secondary-outline min-h-6rem" autoResize="true" fluid pTextarea rows="3" variant="outlined"></textarea>
              <label for="content">{{ 'dev.prompts.preview.testContentLabel' | translate }}</label>
            </p-iftalabel>
          </div>
          <div class="flex gap-2">
            <p-button [disabled]="!getSelectedPromptConfig()" (onClick)="testResult()">{{ 'dev.prompts.preview.getResult' | translate }}</p-button>
            <p-button [disabled]="!getSelectedPromptConfig()" (onClick)="testResponse()">{{ 'dev.prompts.preview.getResponse' | translate }}</p-button>
          </div>
          @if (aiState().loading) {
            <p-progressspinner />
          }
          @if (aiState().error) {
            <p-message severity="error">{{ aiState().error! }}</p-message>
          }
          @if (aiState().respondingModel) {
            <small>Answered by: {{ aiState().respondingModel }}</small>
          }
          @if (result) {
            {{ result }}
          }
          @if (response) {
            <pre class="prompt-preview">{{ response | json }}</pre>
          }
        </div>
      </div>
    </p-tabpanel>
    <p-tabpanel [value]="11">
      <div [class]="styleCardService.cardStyles(undefined, undefined, undefined, undefined, undefined, 'border-top-none border-noround-top')" class="w-limited">
        <h2 class="my-1">{{ 'dev.prompts.pr.header' | translate }}</h2>
        @if (hasChanges()) {
          @let prompts = tabs[selectedPromptTab()].prompts;
          <!--Review-->
          <div #diffContainer></div>
          <!--Export-->
          <p-fieldset [collapsed]="true" [legend]="'dev.prompts.pr.filePreview' | translate" [toggleable]="true" styleClass="secondary-outline mb-3">
            <pre #filePreview><code class="language-typescript">{{ prompts ? rebuildPromptFile(tabs[selectedPromptTab()].tool, prompts) : rebuildSharedFile() }}</code></pre>
          </p-fieldset>
          <!--Open PR-->
          <p-button [disabled]="!signInService.user()" [label]="'dev.prompts.button.openPR' | translate" (onClick)="openPullRequest(tabs[selectedPromptTab()].tool, prompts)" icon="pi pi-send" />
        } @else {
          <p-message icon="pi pi-info-circle" severity="info">{{ 'dev.prompts.pr.noChangesMessage' | translate }}</p-message>
        }
      </div>
    </p-tabpanel>
  </p-tabpanels>
</p-tabs>
`, styles: ["/* angular:styles/component:css;7024e500bd8685665ff8aa9ee57160cbcad07610618ee047f58bf355b6d8987c;C:/Users/admin/Desktop/Projects/design-assistant/src/app/views/toolbox/dev-tools/prompt-editor-backup/prompt-editor.component.ts */\npre.prompt-preview {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  font-size: 1rem;\n  white-space: pre-wrap !important;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=prompt-editor.component-5Z5Y6CZH.css.map */\n"] }]
  }], () => [], { diffContainer: [{ type: ViewChild, args: ["diffContainer", { isSignal: true }] }], filePreview: [{ type: ViewChild, args: ["filePreview", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorBackupComponent, { className: "PromptEditorBackupComponent", filePath: "src/app/views/toolbox/dev-tools/prompt-editor-backup/prompt-editor.component.ts", lineNumber: 89 });
})();
export {
  PromptEditorBackupComponent
};
//# sourceMappingURL=chunk-MIL7JJB4.js.map
