import {
  Breadcrumb,
  BreadcrumbModule
} from "./chunk-AWV5PA24.js";
import {
  AiPromptService,
  ExportGitHubService,
  FieldsetModule,
  InventoryPromptKey,
  InventoryPrompts,
  MultiSelect,
  MultiSelectModule,
  OpenRouterService,
  OutputFragment,
  OutputKey,
  PagePromptKey,
  ProblemPromptKey,
  ProgressSpinner,
  ProgressSpinnerModule,
  RadioButton,
  RadioButtonModule,
  RoleFragment,
  RoleKey,
  RubricFragment,
  RubricKey
} from "./chunk-54TV6LFN.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-FDCWAJTY.js";
import {
  IftaLabel,
  IftaLabelModule,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-C7IJWWJT.js";
import {
  Message,
  MessageModule,
  Select,
  SelectModule,
  Textarea,
  TextareaModule,
  UserSettingsService
} from "./chunk-GXRH6D34.js";
import "./chunk-FL5HWTGW.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  JsonPipe,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  marker
} from "./chunk-PHIIS6EE.js";
import "./chunk-JKR6TEEB.js";
import {
  Component,
  effect,
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
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WJ2KUPA4.js";
import "./chunk-XHF6QEKU.js";
import "./chunk-RRA4XQT4.js";
import "./chunk-CYNOUPYD.js";
import "./chunk-UN6MRPJZ.js";
import "./chunk-5XTRDBGH.js";
import "./chunk-6EM4UOB6.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/common/prompts/page.prompts.ts
var PagePrompts = {
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
Return only updated HTML code with no other commentary. 
  `,
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
Return only updated HTML code with no other commentary. 
`,
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
Return only updated HTML code with no other commentary. 
`,
    rubric: [RubricKey.NoCommentary, RubricKey.PreserveHtmlStructure],
    output: OutputKey.Html
  }
};

// src/app/common/prompts/problems.prompts.ts
var ProblemPrompts = {
  [ProblemPromptKey.Alerts]: {
    role: RoleKey.ContentDesigner,
    task: "This is where the alert prompt will go",
    rubric: [RubricKey.NoCommentary],
    output: OutputKey.Json
  }
};

// src/app/views/standalone/components/dev-tools/prompt-editor/prompt-editor.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.enumKey;
function PromptEditorComponent_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, item_r1.label));
  }
}
function PromptEditorComponent_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r1.label));
  }
}
function PromptEditorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PromptEditorComponent_ng_template_1_Conditional_0_Template, 3, 4, "a", 7)(1, PromptEditorComponent_ng_template_1_Conditional_1_Template, 3, 3, "span", 8);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(item_r1.route ? 0 : 1);
  }
}
function PromptEditorComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 9);
    \u0275\u0275listener("click", function PromptEditorComponent_For_12_Template_p_tab_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    \u0275\u0275property("value", tab_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, tab_r4.title));
  }
}
function PromptEditorComponent_For_15_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "p-radioButton", 13);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_15_Conditional_2_For_1_Template_p_radioButton_ngModelChange_1_listener() {
      const fragment_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleFragment(fragment_r6.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fragment_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("inputId", "show_" + fragment_r6.key)("binary", true)("ngModel", ctx_r2.isFragmentVisible(fragment_r6.key));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + fragment_r6.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, fragment_r6.label));
  }
}
function PromptEditorComponent_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_15_Conditional_2_For_1_Template, 5, 7, "div", 12, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_15_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-checkbox", 13);
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_15_Conditional_3_For_1_Template_p_checkbox_ngModelChange_1_listener() {
      const prompt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.togglePrompt(prompt_r9.enumKey));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("inputId", "show_" + prompt_r9.enumKey)("binary", true)("ngModel", ctx_r2.isPromptVisible(prompt_r9.enumKey));
    \u0275\u0275advance();
    \u0275\u0275property("for", "show_" + prompt_r9.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, prompt_r9.translationKey));
  }
}
function PromptEditorComponent_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_15_Conditional_3_For_1_Template, 5, 7, "div", 15, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_15_Conditional_5_For_1_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_5_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.promptText, $event) || (item_r11.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_15_Conditional_5_For_1_Conditional_0_For_4_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", item_r11.enumKey);
    \u0275\u0275twoWayProperty("ngModel", item_r11.promptText);
    \u0275\u0275advance();
    \u0275\u0275property("for", item_r11.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, item_r11.translationKey));
  }
}
function PromptEditorComponent_For_15_Conditional_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PromptEditorComponent_For_15_Conditional_5_For_1_Conditional_0_For_4_Template, 5, 6, "p-iftalabel", null, _forTrack2);
  }
  if (rf & 2) {
    const fragment_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, fragment_r12.label));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fragment_r12.data);
  }
}
function PromptEditorComponent_For_15_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PromptEditorComponent_For_15_Conditional_5_For_1_Conditional_0_Template, 5, 3);
  }
  if (rf & 2) {
    const fragment_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.isFragmentVisible(fragment_r12.key) ? 0 : -1);
  }
}
function PromptEditorComponent_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_15_Conditional_5_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(tab_r7.fragments);
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText, $event) || (prompt_r14.promptText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_0_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", prompt_r14.enumKey);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, prompt_r14.translationKey));
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r16.label), " ");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r17.label), " ");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r18.label), " ");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r19.label), " ");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, option_r20.label), " ");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    const \u0275$index_140_r22 = ctx.$index;
    const \u0275$count_140_r23 = ctx.$count;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(1, 2, option_r21.label), "", \u0275$index_140_r22 === \u0275$count_140_r23 - 1 ? "" : ", ", " ");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Conditional_0_For_1_Template, 2, 4, null, null, _forTrack0);
  }
  if (rf & 2) {
    const options_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(options_r24);
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const options_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", options_r24 == null ? null : options_r24.length, " ", \u0275\u0275pipeBind1(1, 2, "common.selected"), "");
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Conditional_0_Template, 2, 0)(1, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const options_r24 = ctx.$implicit;
    \u0275\u0275conditional((options_r24 == null ? null : options_r24.length) <= 2 ? 0 : 1);
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-iftalabel")(1, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Conditional_31_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.jsonSchema, $event) || (prompt_r14.promptText.jsonSchema = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Conditional_31_Template_textarea_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", prompt_r14.enumKey + "_jsonSchema");
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.jsonSchema);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey + "_jsonSchema");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "aiPrompt.component.jsonSchema"));
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "p-iftalabel", 20)(5, "p-select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.role, $event) || (prompt_r14.promptText.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(6, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_6_Template, 2, 3, "ng-template", 1)(7, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_7_Template, 2, 3, "ng-template", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-iftalabel", 20)(12, "p-select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.output, $event) || (prompt_r14.promptText.output = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_p_select_onChange_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(13, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_13_Template, 2, 3, "ng-template", 1)(14, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_14_Template, 2, 3, "ng-template", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 18);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p-iftalabel", 20)(19, "p-multiselect", 23);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_p_multiselect_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.rubric, $event) || (prompt_r14.promptText.rubric = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_p_multiselect_onChange_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275template(21, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_21_Template, 2, 3, "ng-template", 1)(22, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_ng_template_22_Template, 2, 1, "ng-template", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label", 18);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "p-iftalabel")(27, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prompt_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(prompt_r14.promptText.task, $event) || (prompt_r14.promptText.task = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template_textarea_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateDiff());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 18);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Conditional_31_Template, 5, 6, "p-iftalabel");
  }
  if (rf & 2) {
    const prompt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 22, prompt_r14.translationKey));
    \u0275\u0275advance(4);
    \u0275\u0275property("id", prompt_r14.enumKey + "_role")("options", ctx_r2.roleOptions);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.role);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r14.enumKey + "_role");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 24, "aiPrompt.component.role"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", prompt_r14.enumKey + "_output")("options", ctx_r2.outputOptions);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.output);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", prompt_r14.enumKey + "_output");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 26, "aiPrompt.component.output"));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(20, 28, "common.none"));
    \u0275\u0275property("id", prompt_r14.enumKey + "_rubric")("options", ctx_r2.rubricOptions);
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.rubric);
    \u0275\u0275advance(4);
    \u0275\u0275property("for", prompt_r14.enumKey + "_rubric");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 30, "aiPrompt.component.rubric"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", prompt_r14.enumKey + "_task");
    \u0275\u0275twoWayProperty("ngModel", prompt_r14.promptText.task);
    \u0275\u0275advance();
    \u0275\u0275property("for", prompt_r14.enumKey + "_task");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 32, "aiPrompt.component.task"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(prompt_r14.promptText.output === ctx_r2.OutputKey.Json ? 31 : -1);
  }
}
function PromptEditorComponent_For_15_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_0_Template, 5, 6, "p-iftalabel")(1, PromptEditorComponent_For_15_Conditional_6_For_1_Conditional_1_Template, 32, 34);
  }
  if (rf & 2) {
    const prompt_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.isPromptString(prompt_r14) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPromptConfig(prompt_r14) && ctx_r2.isPromptVisible(prompt_r14.enumKey) ? 1 : -1);
  }
}
function PromptEditorComponent_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PromptEditorComponent_For_15_Conditional_6_For_1_Template, 2, 2, null, null, _forTrack2);
  }
  if (rf & 2) {
    const tab_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(tab_r7.prompts);
  }
}
function PromptEditorComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabpanel", 4)(1, "div", 10);
    \u0275\u0275template(2, PromptEditorComponent_For_15_Conditional_2_Template, 2, 0)(3, PromptEditorComponent_For_15_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275template(5, PromptEditorComponent_For_15_Conditional_5_Template, 2, 0)(6, PromptEditorComponent_For_15_Conditional_6_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", tab_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isFragmentsTab(tab_r7) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isFragmentsTab(tab_r7) ? 6 : -1);
  }
}
function PromptEditorComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
function PromptEditorComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r2.aiState().error);
  }
}
function PromptEditorComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Answered by: ", ctx_r2.aiState().respondingModel, "");
  }
}
var PromptEditorComponent = class _PromptEditorComponent {
  exportGitHubService = inject(ExportGitHubService);
  settingsService = inject(UserSettingsService);
  openRouterService = inject(OpenRouterService);
  aiPromptService = inject(AiPromptService);
  // Breadcrumbs
  breadcrumbs = [{ label: "dev._title", route: "/dev" }, { label: "dev.prompts._title" }];
  constructor() {
    effect(() => {
      const isDarkMode = this.settingsService.darkMode();
      this.updateDiff();
    });
    effect(() => {
      const tab = this.selectedTab;
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
    { key: "role", label: "aiPrompt.component.role", data: this.roleFragment },
    { key: "output", label: "aiPrompt.component.output", data: this.outputFragment },
    { key: "rubric", label: "aiPrompt.component.rubric", data: this.rubricFragment }
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
  rubricOptions = Object.values(RubricKey).map((key) => ({
    value: key,
    label: key
  }));
  outputOptions = Object.values(OutputKey).map((key) => ({
    value: key,
    label: key
  }));
  // Prompts
  inventoryPrompts = Object.keys(InventoryPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: InventoryPromptKey[enumKey],
    promptText: InventoryPrompts[InventoryPromptKey[enumKey]]
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
  selectedPrompts = new Set([
    this.inventoryPrompts[0]?.enumKey,
    this.pagePrompts[0]?.enumKey,
    this.problemPrompts[0]?.enumKey
  ].filter(Boolean));
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
  selectedTab = 0;
  tabs = [
    { title: "aiPrompt.shared._title", value: 0, fragments: this.fragments, tool: "Shared", original: this.rebuildSharedFile() },
    { title: "aiPrompt.inventory._title", value: 1, prompts: this.inventoryPrompts, tool: "Inventory", original: this.rebuildPromptFile("Inventory", this.inventoryPrompts) },
    { title: "aiPrompt.pages._title", value: 2, prompts: this.pagePrompts, tool: "Page", original: this.rebuildPromptFile("Page", this.pagePrompts) },
    { title: "aiPrompt.problems._title", value: 3, prompts: this.problemPrompts, tool: "Problem", original: this.rebuildPromptFile("Problem", this.problemPrompts) }
  ];
  markForTranslation() {
    marker("aiPrompt.shared._title");
    marker("aiPrompt.inventory._title");
    marker("aiPrompt.pages._title");
    marker("aiPrompt.problems._title");
    marker("aiPrompt.component.role");
    marker("aiPrompt.component.output");
    marker("aiPrompt.component.rubric");
    marker("aiPrompt.component.task");
    marker("aiPrompt.component.jsonSchema");
    marker("dev.prompts.button.openPR");
  }
  rebuildSharedFile() {
    return "";
  }
  rebuildPromptFile(tool, prompts) {
    return "";
  }
  updateDiff() {
  }
  //For testing
  aiState = this.openRouterService.state;
  aiPrompt = this.aiPromptService.composePrompt(InventoryPrompts[InventoryPromptKey.Metadata]);
  description = "Official CRA information on Canadian taxes. File your return, manage payments, and explore credits and deductions for individuals and businesses.";
  response = null;
  result = "";
  testResponse() {
    return __async(this, null, function* () {
      this.response = yield this.openRouterService.sendToAI(InventoryPrompts[InventoryPromptKey.Metadata], this.description);
    });
  }
  testResult() {
    return __async(this, null, function* () {
      this.result = yield this.openRouterService.getTextFromAI(InventoryPrompts[InventoryPromptKey.Metadata], this.description);
    });
  }
  static \u0275fac = function PromptEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromptEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromptEditorComponent, selectors: [["aida-prompt-editor"]], decls: 36, vars: 20, consts: [[3, "model"], ["pTemplate", "item"], ["id", "wb-cont"], [3, "valueChange", "value"], [3, "value"], [3, "click"], ["severity", "error", 3, "text"], [1, "p-menuitem-link", 3, "routerLink"], [1, "p-menuitem-text"], [3, "click", "value"], [1, "flex", "flex-row", "flex-wrap", "gap-4", "mt-0", "mb-4"], [1, "flex", "flex-column", "gap-3", "mt-0"], [1, "flex", "flex-row", "align-items-center", "gap-2"], [3, "ngModelChange", "inputId", "binary", "ngModel"], [1, "cursor-pointer", "font-semibold", 3, "for"], [1, "flex", "flex-row", "align-content-center", "gap-2"], [1, "my-0"], ["autoResize", "true", "rows", "2", "pTextarea", "", "fluid", "", 3, "ngModelChange", "id", "ngModel"], [3, "for"], [1, "flex", "flex-column", "lg:flex-row", "gap-2"], [1, "flex-1"], ["optionLabel", "label", "optionValue", "value", "fluid", "", "styleClass", "h-full", "appendTo", "body", 3, "ngModelChange", "onChange", "id", "options", "ngModel"], ["pTemplate", "selectedItem"], ["optionLabel", "label", "optionValue", "value", "fluid", "", "size", "small", "appendTo", "body", 3, "ngModelChange", "onChange", "id", "options", "ngModel", "placeholder"], ["pTemplate", "selectedItems"]], template: function PromptEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-breadcrumb", 0);
      \u0275\u0275template(1, PromptEditorComponent_ng_template_1_Template, 2, 1, "ng-template", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-tabs", 3);
      \u0275\u0275twoWayListener("valueChange", function PromptEditorComponent_Template_p_tabs_valueChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
        return $event;
      });
      \u0275\u0275elementStart(10, "p-tablist");
      \u0275\u0275repeaterCreate(11, PromptEditorComponent_For_12_Template, 3, 4, "p-tab", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-tabpanels");
      \u0275\u0275repeaterCreate(14, PromptEditorComponent_For_15_Template, 7, 4, "p-tabpanel", 4, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h2");
      \u0275\u0275text(17, "Test prompt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "pre");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h2");
      \u0275\u0275text(21, "Test description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p-button", 5);
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_24_listener() {
        return ctx.testResult();
      });
      \u0275\u0275text(25, "Test result");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p-button", 5);
      \u0275\u0275listener("click", function PromptEditorComponent_Template_p_button_click_28_listener() {
        return ctx.testResponse();
      });
      \u0275\u0275text(29, "Test response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "pre");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "json");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, PromptEditorComponent_Conditional_33_Template, 1, 0, "p-progressSpinner")(34, PromptEditorComponent_Conditional_34_Template, 1, 1, "p-message", 6)(35, PromptEditorComponent_Conditional_35_Template, 2, 1, "small");
    }
    if (rf & 2) {
      \u0275\u0275property("model", ctx.breadcrumbs);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "dev.prompts._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 14, "dev.prompts.description"), " ", \u0275\u0275pipeBind1(8, 16, "dev.prompts.description2"), "");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("value", ctx.selectedTab);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.aiPrompt);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.description);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Result: ", ctx.result, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Response: ", \u0275\u0275pipeBind1(32, 18, ctx.response), "");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.aiState().loading ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().error ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.aiState().respondingModel ? 35 : -1);
    }
  }, dependencies: [
    CommonModule,
    JsonPipe,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslateModule,
    TranslatePipe,
    RouterLink,
    BreadcrumbModule,
    Breadcrumb,
    PrimeTemplate,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    TextareaModule,
    Textarea,
    IftaLabelModule,
    IftaLabel,
    FieldsetModule,
    ButtonModule,
    Button,
    SelectModule,
    Select,
    MultiSelectModule,
    MultiSelect,
    CheckboxModule,
    Checkbox,
    RadioButtonModule,
    RadioButton,
    ProgressSpinnerModule,
    ProgressSpinner,
    MessageModule,
    Message
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromptEditorComponent, [{
    type: Component,
    args: [{ selector: "aida-prompt-editor", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      RouterLink,
      BreadcrumbModule,
      TabsModule,
      TextareaModule,
      IftaLabelModule,
      FieldsetModule,
      ButtonModule,
      SelectModule,
      MultiSelectModule,
      CheckboxModule,
      RadioButtonModule,
      ProgressSpinnerModule,
      MessageModule
    ], template: `<p-breadcrumb [model]="breadcrumbs">\r
    <ng-template pTemplate="item" let-item>\r
        @if(item.route){\r
        <a [routerLink]="item.route" class="p-menuitem-link">{{ item.label | translate }}</a>\r
        }\r
        @else{\r
        <span class="p-menuitem-text">{{ item.label | translate }}</span>\r
        }\r
    </ng-template>\r
</p-breadcrumb>\r
\r
<h1 id="wb-cont">{{ 'dev.prompts._title' | translate}}</h1>\r
<p>{{ 'dev.prompts.description' | translate}} {{ 'dev.prompts.description2' | translate}}</p>\r
\r
<p-tabs [(value)]="selectedTab">\r
    <p-tablist>\r
        @for (tab of tabs; track tab.value) {\r
        <p-tab [value]="tab.value" (click)="updateDiff()">{{ tab.title | translate }}</p-tab>\r
        }\r
    </p-tablist>\r
    <p-tabpanels>\r
        @for (tab of tabs; track tab.value) {\r
        <p-tabpanel [value]="tab.value">\r
            <!--Checkboxes-->\r
            <div class="flex flex-row flex-wrap gap-4 mt-0 mb-4">\r
                @if(isFragmentsTab(tab)) {\r
                @for(fragment of tab.fragments; track fragment.key){\r
                <div class="flex flex-row align-items-center gap-2">\r
                    <p-radioButton [inputId]="'show_' + fragment.key" [binary]="true"\r
                                   [ngModel]="isFragmentVisible(fragment.key)"\r
                                   (ngModelChange)="toggleFragment(fragment.key)" />\r
                    <label [for]="'show_' + fragment.key" class="cursor-pointer font-semibold">{{ fragment.label | translate }}</label>\r
                </div>\r
                }\r
                }\r
                @else{\r
                @for(prompt of tab.prompts; track prompt.enumKey){\r
                <div class="flex flex-row align-content-center gap-2">\r
                    <p-checkbox [inputId]="'show_' + prompt.enumKey" [binary]="true"\r
                                [ngModel]="isPromptVisible(prompt.enumKey)"\r
                                (ngModelChange)="togglePrompt(prompt.enumKey)" />\r
                    <label [for]="'show_' + prompt.enumKey" class="cursor-pointer font-semibold">{{ prompt.translationKey | translate }}</label>\r
                </div>\r
                }}\r
            </div>\r
            <!--Inputs-->\r
            <div class="flex flex-column gap-3 mt-0">\r
                <!--Fragments-->\r
                @if(isFragmentsTab(tab)) {\r
                @for(fragment of tab.fragments; track fragment.key){\r
                @if(isFragmentVisible(fragment.key)) {\r
\r
                <h2 class="my-0">{{ fragment.label | translate }}</h2>\r
                @for(item of fragment.data; track item.enumKey){\r
                <p-iftalabel>\r
                    <textarea [id]="item.enumKey" autoResize="true" rows="2" pTextarea fluid\r
                              [(ngModel)]="item.promptText" (ngModelChange)="updateDiff()"></textarea>\r
                    <label [for]="item.enumKey">{{item.translationKey | translate}}</label>\r
                </p-iftalabel>\r
                }\r
                }\r
                }\r
                }\r
                <!--Full prompts-->\r
                @if(!isFragmentsTab(tab)) {\r
                @for(prompt of tab.prompts; track prompt.enumKey){\r
                <!-- String editor -->\r
                @if(isPromptString(prompt)){\r
                <p-iftalabel>\r
                    <textarea [id]="prompt.enumKey" autoResize="true" rows="2" pTextarea fluid\r
                              [(ngModel)]="prompt.promptText" (ngModelChange)="updateDiff()"></textarea>\r
                    <label [for]="prompt.enumKey">{{prompt.translationKey| translate}}</label>\r
                </p-iftalabel>\r
                }\r
                <!-- Config editor -->\r
                @if(isPromptConfig(prompt) && isPromptVisible(prompt.enumKey)) {\r
                <h2 class="my-0">{{ prompt.translationKey | translate }}</h2>\r
                <!--Fragment dropdowns-->\r
                <div class="flex flex-column lg:flex-row gap-2">\r
                    <!-- Role dropdown -->\r
                    <p-iftalabel class="flex-1">\r
                        <p-select [id]="prompt.enumKey + '_role'" optionLabel="label" optionValue="value" fluid styleClass="h-full"\r
                                  [options]="roleOptions" [(ngModel)]="prompt.promptText.role"\r
                                  (onChange)="updateDiff()" appendTo="body">\r
                            <ng-template let-option pTemplate="item">\r
                                {{ option.label | translate }}\r
                            </ng-template>\r
                            <ng-template let-option pTemplate="selectedItem">\r
                                {{ option.label | translate }}\r
                            </ng-template>\r
                        </p-select>\r
                        <label [for]="prompt.enumKey + '_role'">{{ 'aiPrompt.component.role' | translate }}</label>\r
                    </p-iftalabel>\r
                    <!-- Output format dropdown -->\r
                    <p-iftalabel class="flex-1">\r
                        <p-select [id]="prompt.enumKey + '_output'" optionLabel="label" optionValue="value" fluid styleClass="h-full"\r
                                  [options]="outputOptions" [(ngModel)]="prompt.promptText.output"\r
                                  (onChange)="updateDiff()" appendTo="body">\r
                            <ng-template let-option pTemplate="item">\r
                                {{ option.label | translate }}\r
                            </ng-template>\r
                            <ng-template let-option pTemplate="selectedItem">\r
                                {{ option.label | translate }}\r
                            </ng-template>\r
                        </p-select>\r
                        <label [for]="prompt.enumKey + '_output'">{{ 'aiPrompt.component.output' | translate }}</label>\r
                    </p-iftalabel>\r
                    <!-- Rubric multi-select -->\r
                    <p-iftalabel class="flex-1">\r
                        <p-multiselect [id]="prompt.enumKey + '_rubric'" optionLabel="label" optionValue="value" fluid size="small"\r
                                       [options]="rubricOptions" [(ngModel)]="prompt.promptText.rubric" placeholder="{{ 'common.none' | translate }}"\r
                                       (onChange)="updateDiff()" appendTo="body">\r
                            <ng-template let-option pTemplate="item">\r
                                {{ option.label | translate }}\r
                            </ng-template>\r
                            <ng-template let-options pTemplate="selectedItems">\r
                                @if (options?.length <= 2) {\r
                                   @for(option of options; track option.value; let last=$last){\r
                                   {{ option.label | translate }}{{ last ? '' : ', ' }}\r
                                   }\r
                                   } @else{ {{ options?.length }} {{ 'common.selected' | translate }}}\r
                                   </ng-template>\r
                        </p-multiselect>\r
                        <label [for]="prompt.enumKey + '_rubric'">{{ 'aiPrompt.component.rubric' | translate }}</label>\r
                    </p-iftalabel>\r
                </div>\r
                <!-- Task textarea -->\r
                <p-iftalabel>\r
                    <textarea [id]="prompt.enumKey + '_task'" autoResize="true" rows="2" pTextarea fluid\r
                              [(ngModel)]="prompt.promptText.task" (ngModelChange)="updateDiff()"></textarea>\r
                    <label [for]="prompt.enumKey + '_task'">{{ 'aiPrompt.component.task' | translate }}</label>\r
                </p-iftalabel>\r
\r
\r
                <!-- JSON schema -->\r
                @if(prompt.promptText.output === OutputKey.Json) {\r
                <p-iftalabel>\r
                    <textarea [id]="prompt.enumKey + '_jsonSchema'" autoResize="true" rows="2" pTextarea fluid\r
                              [(ngModel)]="prompt.promptText.jsonSchema" (ngModelChange)="updateDiff()"></textarea>\r
                    <label [for]="prompt.enumKey + '_jsonSchema'">{{ 'aiPrompt.component.jsonSchema' | translate }}</label>\r
                </p-iftalabel>\r
                }\r
                }\r
                }\r
                }\r
            </div>\r
        </p-tabpanel>\r
        }\r
    </p-tabpanels>\r
</p-tabs>\r
\r
<h2>Test prompt</h2>\r
<pre>{{ aiPrompt }}</pre>\r
<h2>Test description</h2>\r
<p>{{ description }}</p>\r
<p-button (click)="testResult()">Test result</p-button>\r
<p>Result: {{ result }}</p>\r
<p-button (click)="testResponse()">Test response</p-button>\r
<pre>Response: {{ response | json }}</pre>\r
@if(aiState().loading){\r
<p-progressSpinner />\r
}\r
@if(aiState().error){\r
<p-message severity="error" [text]="aiState().error!" />\r
}\r
@if(aiState().respondingModel){\r
<small>Answered by: {{ aiState().respondingModel }}</small>\r
}` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromptEditorComponent, { className: "PromptEditorComponent", filePath: "src/app/views/standalone/components/dev-tools/prompt-editor/prompt-editor.component.ts", lineNumber: 64 });
})();
export {
  PromptEditorComponent
};
//# sourceMappingURL=chunk-WBXF6L37.js.map
