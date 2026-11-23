import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { ColorSchemeType } from 'diff2html/lib/types';
import type { Diff2HtmlUIConfig } from 'diff2html/lib/ui/js/diff2html-ui-slim';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { TextareaModule } from 'primeng/textarea';

import { AlertContextService } from '../../../../components/compare/compare-problems/design-components/alerts/alert-context.service';
import { OpenRouterResponse, OpenRouterService } from '../../../../services/ai/openrouter.service';
import { AiPromptService } from '../../../../services/ai/prompt.service';
import { FetchService } from '../../../../services/fetch.service';
import { ExportGitHubService } from '../../../../services/github/export-github.service';
import { SignInService } from '../../../../services/github/sign-in.service';
import { StyleCardService } from '../../../../services/style-card.service';
import { UserSettingsService } from '../../../../services/user-settings.service';
import { CompareService } from '../../../tasks/compare-versions/compare-versions.service';

import { AlertRewriteExamples, type AlertRewriteExample } from '../../../../common/prompts/alert-rewrite.examples';
import { PagePrompts } from '../../../../common/prompts/page.prompts';
import { ProblemPrompts } from '../../../../common/prompts/problems.prompts';
import { OutputKey, PagePromptKey, ProblemPromptKey, PromptConfig, RoleKey, RubricKey, SkillPromptKey, ToolsPromptKey } from '../../../../common/prompts/prompt.model';
import { OutputFragment, RoleFragment, RubricFragment } from '../../../../common/prompts/shared.prompts';
import { SkillPromptConfig, SkillPromptRule, SkillPrompts } from '../../../../common/prompts/skills.prompts';
import { ToolsPrompts } from '../../../../common/prompts/tools.prompts';

interface PromptEntry {
  enumKey: string;
  translationKey: string;
  promptText: string | string[] | PromptConfig;
}

interface SkillEntry {
  enumKey: string;
  translationKey: string;
  promptText: SkillPromptConfig;
}

interface SkillGroupEntry {
  key: string;
  rules: readonly SkillPromptRule[];
}

type PreviewEntry = PromptEntry | SkillEntry;

interface TabConfig {
  title: string;
  description: string;
  value: number;
  prompts?: PromptEntry[];
  skills?: SkillEntry[];
  fragments?: { key: string; label: string; data: PromptEntry[] }[];
  tool: string;
  original: string;
}

interface PromptPipelineSection {
  key: string;
  label?: string;
  hideLabel?: boolean;
  content?: string;
  bulletItems?: string[];
  conditionItems?: PromptConditionItem[];
  collapsed?: boolean;
  options?: PromptPipelineOption[];
}

interface PromptPipelineGroup {
  key: string;
  label: string;
  sections: PromptPipelineSection[];
}

interface PromptConditionItem {
  condition: string;
  instruction?: string;
  bulletItems?: readonly string[];
}

interface PromptPipelineOption {
  key: string;
  label: string;
  content?: string;
  bulletItems?: string[];
  collapsed: boolean;
}

@Component({
  selector: 'aida-prompt-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslatePipe,
    ButtonModule,
    CheckboxModule,
    FieldsetModule,
    IftaLabelModule,
    InputTextModule,
    MessageModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    SelectModule,
    TabsModule,
    TextareaModule,
  ],
  templateUrl: './prompt-editor.component.html',
  styles: `
    pre.prompt-preview {
      display: block;
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      font-size: 1rem;
      white-space: pre-wrap !important;
      overflow-wrap: anywhere;
      word-break: break-word;
      overflow-x: hidden;
    }

    .prompt-content-sized {
      field-sizing: content;
      min-height: 24rem;
      overflow-y: auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromptEditorComponent {
  private readonly translate = inject(TranslateService);
  private readonly exportGitHubService = inject(ExportGitHubService);
  private readonly fetchService = inject(FetchService);
  private readonly settingsService = inject(UserSettingsService);
  private readonly openRouterService = inject(OpenRouterService);
  private readonly aiPromptService = inject(AiPromptService);
  private readonly alertContextService = inject(AlertContextService);
  private readonly compareService = inject(CompareService);
  protected readonly signInService = inject(SignInService);
  protected readonly styleCardService = inject(StyleCardService);

  constructor() {
    effect(() => {
      void this.settingsService.darkMode(); //watching for changes to dark mode to update diff theme
      this.updateDiff();
    });
    effect(() => {
      const tab = this.selectedTab(); //watching for changes to selected tab
      if (tab < 5) {
        this.selectedPromptTab.set(tab);
      }
      this.updateDiff();
    });
  }

  // Type guard
  protected isPromptConfig(entry: PreviewEntry): entry is PromptEntry & { promptText: PromptConfig } {
    return typeof entry.promptText === 'object' && entry.promptText !== null && 'role' in entry.promptText && 'task' in entry.promptText;
  }

  protected isPromptString(entry: PromptEntry): entry is PromptEntry & { promptText: string } {
    return typeof entry.promptText === 'string';
  }

  protected isAlertRewritePipeline(entry: PreviewEntry): boolean {
    return entry.enumKey === 'AlertRewrite';
  }

  protected isAlertRewriteExamples(entry: PreviewEntry): boolean {
    return entry.enumKey === 'AlertExamples';
  }

  protected isFragmentsTab(tab: TabConfig): boolean {
    return tab.fragments !== undefined;
  }

  protected isSkillsTab(tab: TabConfig): tab is TabConfig & { skills: SkillEntry[] } {
    return tab.skills !== undefined;
  }

  protected isSkillEntry(entry: PreviewEntry): entry is SkillEntry {
    return typeof entry.promptText === 'object' && entry.promptText !== null && 'groups' in entry.promptText;
  }

  protected readonly OutputKey = OutputKey;

  // Shared prompt fragments
  private readonly roleFragment: PromptEntry[] = Object.keys(RoleKey).map((enumKey) => ({
    enumKey,
    translationKey: RoleKey[enumKey as keyof typeof RoleKey],
    promptText: RoleFragment[RoleKey[enumKey as keyof typeof RoleKey]],
  }));

  private readonly outputFragment: PromptEntry[] = Object.keys(OutputKey).map((enumKey) => ({
    enumKey,
    translationKey: OutputKey[enumKey as keyof typeof OutputKey],
    promptText: OutputFragment[OutputKey[enumKey as keyof typeof OutputKey]],
  }));

  private readonly rubricFragment: PromptEntry[] = Object.keys(RubricKey).map((enumKey) => ({
    enumKey,
    translationKey: RubricKey[enumKey as keyof typeof RubricKey],
    promptText: RubricFragment[RubricKey[enumKey as keyof typeof RubricKey]],
  }));

  fragments = [
    { key: 'role', label: marker('aiPrompt.component.role'), data: this.roleFragment },
    { key: 'output', label: marker('aiPrompt.component.output'), data: this.outputFragment },
    { key: 'rubric', label: marker('aiPrompt.component.rubric'), data: this.rubricFragment },
  ];

  selectedFragment = 'role';

  toggleFragment(type: string) {
    this.selectedFragment = type;
  }

  isFragmentVisible(type: string): boolean {
    return this.selectedFragment === type;
  }

  // Dropdown values
  roleOptions = Object.values(RoleKey).map((key) => ({
    value: key,
    label: key,
  }));

  protected readonly rubricOptions = computed(() => {
    this.translate.currentLang();
    return Object.values(RubricKey).map((key) => ({
      value: key,
      label: this.translate.instant(key),
    }));
  });

  outputOptions = Object.values(OutputKey).map((key) => ({
    value: key,
    label: key,
  }));

  protected readonly skillSeverityOptions = [
    { value: 'must', label: marker('dev.prompts.skills.severity.must') },
    { value: 'should', label: marker('dev.prompts.skills.severity.should') },
  ];

  // Prompts
  inventoryPrompts: PromptEntry[] = Object.keys(ToolsPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ToolsPromptKey[enumKey as keyof typeof ToolsPromptKey],
    promptText: ToolsPrompts[ToolsPromptKey[enumKey as keyof typeof ToolsPromptKey]],
  }));

  pagePrompts: PromptEntry[] = Object.keys(PagePromptKey).map((enumKey) => ({
    enumKey,
    translationKey: PagePromptKey[enumKey as keyof typeof PagePromptKey],
    promptText: PagePrompts[PagePromptKey[enumKey as keyof typeof PagePromptKey]],
  }));

  problemPrompts: PromptEntry[] = Object.keys(ProblemPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: ProblemPromptKey[enumKey as keyof typeof ProblemPromptKey],
    promptText: ProblemPrompts[ProblemPromptKey[enumKey as keyof typeof ProblemPromptKey]],
  }));

  skillPrompts: SkillEntry[] = Object.keys(SkillPromptKey).map((enumKey) => ({
    enumKey,
    translationKey: SkillPromptKey[enumKey as keyof typeof SkillPromptKey],
    promptText: SkillPrompts[SkillPromptKey[enumKey as keyof typeof SkillPromptKey]],
  }));

  protected get alertRewritePipelineGroups(): PromptPipelineGroup[] {
    return this.buildAlertRewritePipelineGroups();
  }
  protected get alertProblemsSections(): PromptPipelineSection[] {
    return this.buildAlertProblemsSections();
  }
  protected readonly alertRewriteExamples = AlertRewriteExamples;

  selectedPrompts = new Set<string>([this.inventoryPrompts[0]?.enumKey, this.pagePrompts[0]?.enumKey, this.problemPrompts[0]?.enumKey, this.skillPrompts[0]?.enumKey].filter(Boolean));

  togglePrompt(enumKey: string) {
    if (this.selectedPrompts.has(enumKey)) {
      this.selectedPrompts.delete(enumKey);
    } else {
      this.selectedPrompts.add(enumKey);
    }
  }

  isPromptVisible(enumKey: string): boolean {
    return this.selectedPrompts.has(enumKey);
  }

  // Tabs
  protected readonly selectedTab = signal<number>(1);
  protected readonly selectedPromptTab = signal<number>(1);
  tabs: TabConfig[] = [
    { title: marker('aiPrompt.shared._title'), description: marker('aiPrompt.shared._description'), value: 0, fragments: this.fragments, tool: 'Shared', original: this.rebuildSharedFile() },
    {
      title: marker('aiPrompt.tools._title'),
      description: marker('aiPrompt.tools._description'),
      value: 1,
      prompts: this.inventoryPrompts,
      tool: 'Tools',
      original: this.rebuildPromptFile('Tools', this.inventoryPrompts),
    },
    {
      title: marker('aiPrompt.page._title'),
      description: marker('aiPrompt.page._description'),
      value: 2,
      prompts: this.pagePrompts,
      tool: 'Page',
      original: this.rebuildPromptFile('Page', this.pagePrompts),
    },
    {
      title: marker('aiPrompt.problems._title'),
      description: marker('aiPrompt.problems._description'),
      value: 3,
      prompts: this.problemPrompts,
      tool: 'Problem',
      original: this.rebuildPromptFile('Problem', this.problemPrompts),
    },
    {
      title: marker('aiPrompt.skills._title'),
      description: marker('aiPrompt.skills._description'),
      value: 4,
      skills: this.skillPrompts,
      tool: 'Skills',
      original: this.rebuildSkillsFile(),
    },
  ];

  // Dropdown
  protected readonly promptGroups = [
    {
      label: 'aiPrompt.alerts._title',
      items: [
        ...this.problemPrompts.filter((prompt) => prompt.enumKey === 'AlertsProblems'),
        ...this.pagePrompts.filter((prompt) => prompt.enumKey === 'AlertRewrite'),
        {
          enumKey: 'AlertExamples',
          translationKey: 'aiPrompt.page.alertExamples',
          promptText: '',
        },
      ],
    },
    { label: 'aiPrompt.tools._title', items: this.inventoryPrompts },
    { label: 'aiPrompt.skills._title', items: this.skillPrompts },
    { label: 'aiPrompt.page._title', items: this.pagePrompts.filter((prompt) => prompt.enumKey !== 'AlertRewrite') },
    {
      label: 'aiPrompt.problems._title',
      items: this.problemPrompts.filter((prompt) => prompt.enumKey !== 'AlertsProblems'),
    },
  ];
  protected readonly selectedPrompt = signal<PreviewEntry | undefined>(this.pagePrompts.find((prompt) => prompt.enumKey === 'AlertRewrite'));
  protected readonly selectedPromptIsAlertRewritePipeline = computed(() => {
    const selected = this.selectedPrompt();
    return !!selected && this.isAlertRewritePipeline(selected);
  });
  protected readonly selectedPromptIsAlertRewriteExamples = computed(() => {
    const selected = this.selectedPrompt();
    return !!selected && this.isAlertRewriteExamples(selected);
  });
  protected readonly selectedPromptIsAlertProblems = computed(() => this.selectedPrompt()?.enumKey === 'AlertsProblems');
  protected readonly selectedPromptIsSkill = computed(() => {
    const selected = this.selectedPrompt();
    return !!selected && this.isSkillEntry(selected);
  });
  protected aiPrompt(): string {
    const selected = this.selectedPrompt();
    if (!selected || this.isSkillEntry(selected) || !this.isPromptConfig(selected)) return '';
    return this.aiPromptService.composePrompt(selected.promptText);
  }

  protected getSkillGroups(skill: SkillEntry): SkillGroupEntry[] {
    return Object.entries(skill.promptText.groups).map(([key, rules]) => ({ key, rules }));
  }

  protected getSelectedSkillGroups(): SkillGroupEntry[] {
    const selected = this.selectedPrompt();
    return selected && this.isSkillEntry(selected) ? this.getSkillGroups(selected) : [];
  }

  protected getSkillGroupLabel(groupKey: string): string {
    return `dev.prompts.skills.group.${groupKey}`;
  }

  private buildAlertRewritePipelineGroups(): PromptPipelineGroup[] {
    const promptConfig = PagePrompts[PagePromptKey.AlertRewrite];
    const rules = promptConfig.pipeline;
    return [
      {
        key: 'alertRewrite',
        label: 'dev.prompts.alertRewrite.group.alertRewrite',
        sections: [
          {
            key: 'role',
            label: 'dev.prompts.alertRewrite.role',
            content: RoleFragment[promptConfig.role],
            collapsed: false,
          },
          {
            key: 'aiInstructions',
            hideLabel: true,
            options: [
              {
                key: 'systemWithExamples',
                label: 'dev.prompts.alertRewrite.examplesIncluded',
                bulletItems: rules.systemPromptWithExamplesLines,
                collapsed: false,
              },
              {
                key: 'systemWithoutExamples',
                label: 'dev.prompts.alertRewrite.examplesNotIncluded',
                bulletItems: rules.systemPromptWithoutExamplesLines,
                collapsed: false,
              },
            ],
          },
          {
            key: 'baseRules',
            label: 'dev.prompts.alertRewrite.baseRules',
            bulletItems: rules.styleRulesBase,
            collapsed: false,
          },
          {
            key: 'outputRequirement',
            label: 'dev.prompts.alertRewrite.outputRequirement',
            content: OutputFragment[promptConfig.output],
            collapsed: false,
          },
          {
            key: 'outputSchemas',
            hideLabel: true,
            options: [
              {
                key: 'outputSchemaWithExamples',
                label: 'dev.prompts.alertRewrite.outputSchemaWithExamples',
                content: this.formatPromptSchema(rules.outputSchemas.withExamples),
                collapsed: false,
              },
              {
                key: 'outputSchemaWithoutExamples',
                label: 'dev.prompts.alertRewrite.outputSchemaWithoutExamples',
                content: this.formatPromptSchema(rules.outputSchemas.withoutExamples),
                collapsed: false,
              },
            ],
          },
          {
            key: 'retryInstructions',
            label: 'dev.prompts.alertRewrite.retryInstructions',
            conditionItems: [
              {
                condition: 'dev.prompts.alertRewrite.retry.invalidWrapperHtml',
                instruction: rules.retryInstructions.invalidWrapperHtml,
              },
              {
                condition: 'dev.prompts.alertRewrite.retry.noLinksAllowed',
                instruction: rules.retryInstructions.noLinksAllowed,
              },
              {
                condition: 'dev.prompts.alertRewrite.retry.mustKeepLink',
                instruction: rules.retryInstructions.mustKeepLink,
              },
              {
                condition: 'dev.prompts.alertRewrite.retry.mustKeepAllLinks',
                instruction: rules.retryInstructions.mustKeepAllLinks,
              },
              {
                condition: 'dev.prompts.alertRewrite.retry.mustHaveHeading',
                instruction: rules.retryInstructions.mustHaveHeading,
              },
              {
                condition: 'dev.prompts.alertRewrite.retry.avoidExampleCopy',
                instruction: rules.retryInstructions.avoidExampleCopy,
              },
              {
                condition: 'dev.prompts.alertRewrite.retry.fullSentenceLinksNeedLeadIn',
                bulletItems: rules.retryInstructions.fullSentenceLinksNeedLeadIn,
              },
            ],
            collapsed: false,
          },
        ],
      },
      {
        key: 'style',
        label: 'dev.prompts.alertRewrite.group.style',
        sections: [
          {
            key: 'canadaCaStyleRules',
            label: 'dev.prompts.alertRewrite.canadaCaStyle',
            content: this.formatCanadaCaStyleRulesJson(),
            collapsed: false,
          },
        ],
      },
      {
        key: 'links',
        label: 'dev.prompts.alertRewrite.group.links',
        sections: [
          {
            key: 'linkRulesCommon',
            label: 'dev.prompts.alertRewrite.linkRulesCommon',
            bulletItems: SkillPrompts[SkillPromptKey.LinkWriting].groups.common.map((rule) => rule.text),
            collapsed: false,
          },
          {
            key: 'linkRules',
            hideLabel: true,
            options: [
              {
                key: 'linkRulesDefault',
                label: 'dev.prompts.alertRewrite.linkRulesDefault',
                bulletItems: SkillPrompts[SkillPromptKey.LinkWriting].groups.preserveLinks.map((rule) => rule.text),
                collapsed: false,
              },
              {
                key: 'linkRulesTooMany',
                label: 'dev.prompts.alertRewrite.linkRulesTooMany',
                bulletItems: SkillPrompts[SkillPromptKey.LinkWriting].groups.tooManyLinks.map((rule) => rule.text),
                collapsed: false,
              },
            ],
          },
          {
            key: 'preserveFinalStandaloneLink',
            label: 'dev.prompts.alertRewrite.condition.finalStandaloneLink',
            content: rules.conditionalInstructions.preserveFinalStandaloneLink,
            collapsed: false,
          },
          {
            key: 'enforceLinkManifest',
            label: 'dev.prompts.alertRewrite.condition.originalHasLinks',
            content: rules.conditionalInstructions.enforceLinkManifest,
            collapsed: false,
          },
        ],
      },
    ];
  }

  private buildAlertProblemsSections(): PromptPipelineSection[] {
    const prompt = ProblemPrompts[ProblemPromptKey.AlertsProblems];
    const rubric = prompt.rubric.flatMap((key) => RubricFragment[key]);

    return [
      {
        key: 'role',
        label: 'aiPrompt.component.role',
        content: RoleFragment[prompt.role],
        collapsed: false,
      },
      {
        key: 'task',
        label: 'aiPrompt.component.task',
        content: prompt.task,
        collapsed: false,
      },
      ...(rubric.length
        ? [
            {
              key: 'rubric',
              label: 'aiPrompt.component.rubric',
              content: rubric.map((criterion, index) => `${index + 1}. ${criterion}`).join('\n'),
              collapsed: false,
            },
          ]
        : []),
      {
        key: 'outputRequirement',
        label: 'dev.prompts.alertRewrite.outputRequirement',
        content: OutputFragment[prompt.output],
        collapsed: false,
      },
      ...(prompt.jsonSchema
        ? [
            {
              key: 'jsonSchema',
              label: 'aiPrompt.component.jsonSchema',
              content: prompt.jsonSchema,
              collapsed: false,
            },
          ]
        : []),
    ];
  }

  protected getAlertRewriteExampleLegend(example: AlertRewriteExample): string {
    return `${example.id} — ${example.egHeading || example.egText}`;
  }

  protected getPipelineOptionContent(option: PromptPipelineOption): string {
    return option.content ?? option.bulletItems?.map((item) => `- ${item}`).join('\n') ?? '';
  }

  protected getPipelineSectionContent(section: PromptPipelineSection): string {
    if (section.content) return section.content;
    if (section.bulletItems?.length) return section.bulletItems.map((item) => `- ${item}`).join('\n');
    return (section.conditionItems ?? [])
      .map((item) => {
        const instruction = item.bulletItems?.length ? item.bulletItems.map((line) => `- ${line}`).join('\n') : (item.instruction ?? '');
        return `${this.translate.instant(item.condition)}\n${instruction}`.trim();
      })
      .join('\n\n');
  }

  private formatPromptSchema(schema: string): string {
    try {
      const lines = JSON.stringify(JSON.parse(schema), null, 2)
        .replace(/\[\n\s+("(?:\\.|[^"\\])*")\n\s+\]/g, '[$1]')
        .split('\n');

      if (lines.length < 3) return lines.join('\n');

      lines[1] = `{ ${lines[1].trimStart()}`;
      lines[lines.length - 2] = `${lines[lines.length - 2]} }`;
      return lines.slice(1, -1).join('\n');
    } catch {
      return schema;
    }
  }

  private formatCanadaCaStyleRulesJson(): string {
    const rules = SkillPrompts[SkillPromptKey.CanadaCaStyle].groups.common.map((rule) => `{\n      "id": ${JSON.stringify(rule.id)}, "severity": ${JSON.stringify(rule.severity)},\n      "text": ${JSON.stringify(rule.text)} }`).join(
      ',\n    ',
    );

    return `{ "rules": [ ${rules} ]}`;
  }

  markForTranslation() {
    marker('aiPrompt.alerts._title');
    marker('aiPrompt.page.alertExamples');
    marker('dev.prompts.alertRewrite.baseRules');
    marker('dev.prompts.alertRewrite.canadaCaStyle');
    marker('dev.prompts.alertRewrite.linkRulesDefault');
    marker('dev.prompts.alertRewrite.linkRulesTooMany');
    marker('dev.prompts.alertRewrite.outputRequirement');
    marker('dev.prompts.alertRewrite.outputSchemaWithExamples');
    marker('dev.prompts.alertRewrite.outputSchemaWithoutExamples');
    marker('dev.prompts.alertRewrite.linkRulesCommon');
    marker('dev.prompts.alertRewrite.group.alertRewrite');
    marker('dev.prompts.alertRewrite.group.style');
    marker('dev.prompts.alertRewrite.group.links');
    marker('dev.prompts.alertRewrite.condition.finalStandaloneLink');
    marker('dev.prompts.alertRewrite.condition.originalHasLinks');
    marker('dev.prompts.alertRewrite.retry.invalidWrapperHtml');
    marker('dev.prompts.alertRewrite.retry.noLinksAllowed');
    marker('dev.prompts.alertRewrite.retry.mustKeepLink');
    marker('dev.prompts.alertRewrite.retry.mustKeepAllLinks');
    marker('dev.prompts.alertRewrite.retry.mustHaveHeading');
    marker('dev.prompts.alertRewrite.retry.avoidExampleCopy');
    marker('dev.prompts.alertRewrite.retry.fullSentenceLinksNeedLeadIn');
    marker('dev.prompts.alertRewrite.retryInstructions');
    marker('dev.prompts.alertRewrite.role');
    marker('dev.prompts.alertRewrite.examplesIncluded');
    marker('dev.prompts.alertRewrite.examplesNotIncluded');
    marker('dev.prompts.alertRewrite.testUnavailable');
  }

  // Test prompts
  readonly aiState = this.openRouterService.state;
  description = 'Official CRA information on Canadian taxes. File your return, manage payments, and explore credits and deductions for individuals and businesses.';
  protected alertProblemsTestUrl = '';
  protected alertProblemsTestContent = '';
  protected readonly alertProblemsTestLoading = signal(false);
  protected readonly alertProblemsTestError = signal<string | null>(null);
  protected readonly alertProblemsTestPayloadInvalid = signal(false);
  response: OpenRouterResponse | null = null;
  result = '';

  protected onAlertProblemsTestUrlChange(url: string) {
    this.alertProblemsTestUrl = url;
    this.alertProblemsTestContent = '';
    this.alertProblemsTestError.set(null);
    this.alertProblemsTestPayloadInvalid.set(false);
    this.response = null;
    this.result = '';
  }

  protected async loadAlertProblemsTestPage() {
    const url = this.alertProblemsTestUrl.trim();
    this.alertProblemsTestError.set(null);
    this.alertProblemsTestPayloadInvalid.set(false);
    this.alertProblemsTestContent = '';
    this.response = null;
    this.result = '';

    if (!url) return;

    this.alertProblemsTestLoading.set(true);
    try {
      let doc: Document;
      try {
        doc = await this.fetchService.fetchContent(url, 'both', 3, 'none');
      } catch {
        doc = this.fetchService.stringToDoc(await this.fetchService.fetchViaProxy(url));
      }

      const payload = this.alertContextService.buildCompactAlertsIssuesPayload(doc.documentElement.outerHTML);
      const alerts = payload['alerts'];
      if (!Array.isArray(alerts) || alerts.length === 0) {
        throw new Error(this.translate.instant('dev.prompts.preview.alertProblems.noAlerts'));
      }
      this.alertProblemsTestContent = JSON.stringify(payload, null, 2);
    } catch (error) {
      this.alertProblemsTestError.set(error instanceof Error ? error.message : String(error));
    } finally {
      this.alertProblemsTestLoading.set(false);
    }
  }

  protected hasTestContent(): boolean {
    return (this.selectedPromptIsAlertProblems() ? this.alertProblemsTestContent : this.description).trim().length > 0;
  }

  private getTestContent(): string | null {
    if (!this.selectedPromptIsAlertProblems()) return this.description;

    try {
      const compactPayload = JSON.stringify(JSON.parse(this.alertProblemsTestContent));
      this.alertProblemsTestPayloadInvalid.set(false);
      return compactPayload;
    } catch {
      this.alertProblemsTestPayloadInvalid.set(true);
      return null;
    }
  }

  protected formatTestResult(result: string): string {
    try {
      return JSON.stringify(JSON.parse(result), null, 2);
    } catch {
      return result;
    }
  }

  async testResponse() {
    const config = this.getSelectedPromptConfig();
    if (!config) return;
    const testContent = this.getTestContent();
    if (testContent === null) return;
    this.response = await this.openRouterService.sendToAI(config, testContent, this.compareService.selectedModel());
  }
  async testResult() {
    const config = this.getSelectedPromptConfig();
    if (!config) return;
    const testContent = this.getTestContent();
    if (testContent === null) return;
    this.result = await this.openRouterService.getTextFromAI(config, testContent, this.compareService.selectedModel());
  }

  // Rebuild prompt file
  rebuildPromptFile(tool: string, prompts: PromptEntry[]) {
    const updatedPrompts = prompts
      .map((prompt) => {
        let value: string;
        if (this.isPromptConfig(prompt)) {
          value = this.serializePromptConfig(prompt.promptText, prompt.enumKey);
        } else if (this.isPromptString(prompt)) {
          value = this.toSourceStringLiteral(prompt.promptText);
        } else {
          throw new Error(`Unsupported prompt value for ${prompt.enumKey}`);
        }
        return `  [${tool}PromptKey.${prompt.enumKey}]: ${value},`;
      })
      .join('\n');

    const isPagePrompts = tool === 'Page';
    const configType = isPagePrompts ? 'PagePromptConfigs' : `Record<${tool}PromptKey, PromptConfig>`;
    const configImport = isPagePrompts ? 'PagePromptConfigs' : 'PromptConfig';
    const imports = ['OutputKey', `${tool}PromptKey`, configImport, 'RoleKey', 'RubricKey'].sort();
    const pipelineImport = isPagePrompts ? `import { AlertRewritePipeline } from './alert-rewrite.prompt';\n` : '';

    return `${pipelineImport}import { ${imports.join(', ')} } from './prompt.model';\n\nexport const ${tool}Prompts: ${configType} = {\n${updatedPrompts}\n};\n`;
  }

  protected getSelectedPromptConfig(): PromptConfig | null {
    const selected = this.selectedPrompt();
    return selected && !this.isSkillEntry(selected) && this.isPromptConfig(selected) ? selected.promptText : null;
  }

  private serializePromptConfig(config: PromptConfig, enumKey: string): string {
    const lines = [
      '{',
      `    role: RoleKey.${this.getEnumKey(RoleKey, config.role)},`,
      `    task: ${this.toSourceStringLiteral(config.task)},`,
      `    rubric: [${config.rubric.map((rubric) => `RubricKey.${this.getEnumKey(RubricKey, rubric)}`).join(', ')}],`,
      `    output: OutputKey.${this.getEnumKey(OutputKey, config.output)},`,
    ];

    if (config.jsonSchema !== undefined) lines.push(`    jsonSchema: ${this.toSourceStringLiteral(config.jsonSchema)},`);
    if (config.examples !== undefined) lines.push(`    examples: ${this.toSourceStringLiteral(config.examples)},`);
    if (config.available !== undefined) lines.push(`    available: ${config.available},`);
    if (config.pipeline !== undefined) {
      if (enumKey === 'AlertRewrite') {
        lines.push('    pipeline: AlertRewritePipeline,');
      } else {
        const pipeline = JSON.stringify(config.pipeline, null, 2)
          .split('\n')
          .map((line, index) => (index === 0 ? line : `    ${line}`))
          .join('\n');
        lines.push(`    pipeline: ${pipeline},`);
      }
    }
    lines.push('  }');
    return lines.join('\n');
  }

  private getEnumKey<T extends Record<string, string>>(enumObject: T, value: T[keyof T]): string {
    const key = Object.entries(enumObject).find(([, enumValue]) => enumValue === value)?.[0];
    if (!key) throw new Error(`Unknown prompt enum value: ${value}`);
    return key;
  }

  private toSourceStringLiteral(value: string): string {
    if (!/[\r\n]/.test(value)) {
      return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
    }
    return `\`${value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\``;
  }

  rebuildSkillsFile(): string {
    const skillEntries = this.skillPrompts
      .map((skill) => {
        const groupEntries = this.getSkillGroups(skill)
          .map((group) => {
            const ruleEntries = group.rules
              .map((rule) => {
                const severity = rule.severity ? `\n          severity: '${rule.severity}',` : '';
                return `        {\n          id: '${rule.id}',${severity}\n          text: ${this.toSkillStringLiteral(rule.text)},\n        },`;
              })
              .join('\n');
            return `      ${group.key}: [\n${ruleEntries}\n      ],`;
          })
          .join('\n');
        return `  [SkillPromptKey.${skill.enumKey}]: {\n    groups: {\n${groupEntries}\n    },\n  },`;
      })
      .join('\n');

    return `import { SkillPromptKey } from './prompt.model';

export type SkillPromptRuleSeverity = 'must' | 'should';

export interface SkillPromptRule {
  id: string;
  severity?: SkillPromptRuleSeverity;
  text: string;
}

export interface SkillPromptConfig {
  groups: Readonly<Record<string, readonly SkillPromptRule[]>>;
}

export const SkillPrompts = {
${skillEntries}
} satisfies Record<SkillPromptKey, SkillPromptConfig>;

export interface LinkWritingPromptOptions {
  hasTooManyLinksIssue: boolean;
}

export function getCanadaCaStylePromptRules(): string[] {
  return SkillPrompts[SkillPromptKey.CanadaCaStyle].groups.common.map((rule) => \`[Canada.ca style \${rule.id} \${rule.severity}] \${rule.text}\`);
}

export function getLinkWritingPromptRules(options: LinkWritingPromptOptions): string[] {
  const groups = SkillPrompts[SkillPromptKey.LinkWriting].groups;
  const conditionalRules = options.hasTooManyLinksIssue ? groups.tooManyLinks : groups.preserveLinks;
  return [...groups.common, ...conditionalRules].map((rule) => rule.text);
}
`;
  }

  private toSkillStringLiteral(value: string): string {
    if (value.includes("'")) return JSON.stringify(value);
    return `'${value.replace(/\\/g, '\\\\')}'`;
  }

  // Rebuild prompt file (older version)
  rebuildPromptFileOld(tool: string, prompts: PromptEntry[]) {
    const updatedPrompts = prompts.map((p) => ` [${tool}PromptKey.${p.enumKey}]: \`${p.promptText}\`,`).join('\n');

    return `import { ${tool}PromptKey } from './prompt.model'\nexport const ${tool}Prompts: Record<${tool}PromptKey, string> = {\n${updatedPrompts}\n};`;
  }

  rebuildSharedFile(): string {
    const roleEntries = this.roleFragment.map((p) => `\t[RoleKey.${p.enumKey}]: \`${p.promptText}\`,`).join('\n');

    const outputEntries = this.outputFragment.map((p) => `\t[OutputKey.${p.enumKey}]: \`${p.promptText}\`,`).join('\n');

    const rubricEntries = this.rubricFragment.map((p) => `\t[RubricKey.${p.enumKey}]: \`${p.promptText}\`,`).join('\n');

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

  protected rebuildTabFile(tab: TabConfig): string {
    if (tab.fragments) return this.rebuildSharedFile();
    if (tab.skills) return this.rebuildSkillsFile();
    if (tab.prompts) return this.rebuildPromptFile(tab.tool, tab.prompts);
    return '';
  }

  /** Tracks if changes have been made to current tab */
  hasChanges(promptTab?: number): boolean {
    const tabNumber = promptTab ?? this.selectedPromptTab();
    const tab = this.tabs[tabNumber];
    if (!tab) return false;
    return this.rebuildTabFile(tab) !== tab.original;
  }

  // Open pull request
  pullRequestUrl: string | null = null;
  /** Open pull request for selected tab */
  async openPullRequest(tab: TabConfig) {
    const content = this.rebuildTabFile(tab);
    const toolLC = tab.tool.toLowerCase();
    try {
      const result = await this.exportGitHubService.createPullRequestForPrompts(toolLC, `src/app/common/prompts/${toolLC}.prompts.ts`, `${toolLC}.prompts.ts`, content);
      this.pullRequestUrl = result.prUrl;
    } catch (error) {
      console.error('Failed to create PR:', error);
    }
  }

  /** Update prompts diff */
  protected readonly diffContainer = viewChild<ElementRef<HTMLElement>>('diffContainer');
  async updateDiff() {
    const diffContainer = this.diffContainer();
    if (!diffContainer) return;

    // Lazy load both modules
    const [{ createPatch }, { Diff2HtmlUI }] = await Promise.all([import('diff'), import('diff2html/lib-esm/ui/js/diff2html-ui-slim')]);
    const tab = this.tabs[this.selectedPromptTab()];
    const updatedContent = this.rebuildTabFile(tab);
    const originalContent = tab.original;

    // Create the patch
    const patch = createPatch(`${tab.tool.toLowerCase()}.prompts.ts`, originalContent, updatedContent);

    // Render it
    const config: Diff2HtmlUIConfig = {
      drawFileList: false,
      matching: 'words',
      outputFormat: 'line-by-line', // or 'side-by-side'
      highlight: true,
      colorScheme: this.settingsService.darkMode() ? ColorSchemeType.DARK : ColorSchemeType.LIGHT,
    };

    const diff2htmlUi = new Diff2HtmlUI(diffContainer.nativeElement, patch, config);

    diff2htmlUi.draw();
    this.highlightFilePreview();
  }

  /** Highlight code for export preview */
  protected readonly filePreview = viewChild<ElementRef<HTMLPreElement>>('filePreview');
  async highlightFilePreview(): Promise<void> {
    const filePreview = this.filePreview();
    if (!filePreview) return;
    const tab = this.tabs[this.selectedPromptTab()];
    if (!tab) return;

    try {
      const { default: Prism } = await import('prismjs');
      await import('prismjs/components/prism-typescript');

      this.loadPrismTheme(this.settingsService.darkMode());

      const pre = filePreview.nativeElement;
      const codeBlock = pre.querySelector('code');

      if (codeBlock) {
        pre.className = ''; // Clear pre classes
        pre.removeAttribute('data-highlighted');
        pre.removeAttribute('tabindex');
        codeBlock.className = 'language-typescript';
        codeBlock.textContent = this.rebuildTabFile(tab);
        Prism.highlightElement(codeBlock);
      }
    } catch (error) {
      console.error('Failed to load Prism:', error);
    }
  }

  /** Load light/dark prism theme */
  private loadPrismTheme(isDarkMode: boolean): void {
    const existingLink = document.getElementById('prism-theme') as HTMLLinkElement;
    const newHref = isDarkMode ? 'css/prism-okaidia.min.css' : 'css/prism.min.css';

    if (existingLink) {
      if (existingLink.href.endsWith(newHref)) return;
      existingLink.href = newHref;
    } else {
      const link = document.createElement('link');
      link.id = 'prism-theme';
      link.rel = 'stylesheet';
      link.href = newHref;
      document.head.appendChild(link);
    }
  }
}
