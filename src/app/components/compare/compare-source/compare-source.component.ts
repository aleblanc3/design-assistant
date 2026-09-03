import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';

import { FetchService } from '../../../services/fetch.service';
import { HtmlNormalizationService, htmlProcessingResult } from '../../../services/html-normalization.service';
import { UserSettingsService } from '../../../services/user-settings.service';
import { CompareSourceService } from './compare-source.service';

export enum SourceViewType {
  Original = 'original',
  Modified = 'modified',
  SideBySide = 'side-by-side',
  LineByLine = 'line-by-line',
}

export interface ViewOption<T = string> {
  label: string;
  value: T;
  icon: string;
}

@Component({
  selector: 'aida-compare-source',
  imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, MessageModule, RadioButtonModule],
  templateUrl: './compare-source.component.html',
  styleUrl: './compare-source.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareSourceComponent {
  private readonly translate = inject(TranslateService);
  private readonly messageService = inject(MessageService);
  private readonly compareSourceService = inject(CompareSourceService);
  private readonly fetchService = inject(FetchService);
  private readonly htmlNormalizationService = inject(HtmlNormalizationService);

  private readonly settingsService = inject(UserSettingsService);

  // Inputs
  public readonly beforeContent = input<htmlProcessingResult | undefined>();
  public readonly afterContent = input<htmlProcessingResult | undefined>();
  public readonly canUndo = input<boolean>(false);

  // Adjust inputs if one is undefined so we can render page with no changes
  private readonly resolvedBefore = computed(() => this.beforeContent() ?? this.afterContent());
  private readonly resolvedAfter = computed(() => this.afterContent() ?? this.beforeContent());

  // Outputs
  public readonly contentChanged = output<{
    beforeContent: htmlProcessingResult;
    afterContent: htmlProcessingResult;
  }>();
  public readonly hasChanges = output<boolean>();
  public readonly undoChanges = output<void>();

  // Get DOM elements from template
  public readonly sourceContainer = viewChild<ElementRef>('sourceContainer');

  // Signals
  protected readonly enableOriginalEdits = signal<boolean>(false);

  // Prevent duplicate effects
  private renderToken = 0;

  // Source view options
  protected readonly SourceViewType = SourceViewType;
  protected readonly sourceSelectedView = signal<SourceViewType>(SourceViewType.SideBySide);

  protected get sourceViewOptions(): ViewOption<SourceViewType>[] {
    const editedText = ` (${this.translate.instant('common.edited').toLowerCase()})`;

    const beforeVersion = this.beforeContent()?.version;
    const beforeBase = beforeVersion ? this.translate.instant('common.source.' + beforeVersion) : this.translate.instant('common.before');
    const beforeLabel = beforeBase + (this.beforeContent()?.edited ? editedText : '');

    const afterVersion = this.afterContent()?.version;
    const afterBase = afterVersion ? this.translate.instant('common.source.' + afterVersion) : this.translate.instant('common.after');
    const afterLabel = afterBase + (this.afterContent()?.edited ? editedText : '');
    return [
      {
        label: beforeLabel,
        value: SourceViewType.Original,
        icon: 'pi pi-file',
      },
      {
        label: this.translate.instant('compare.source.view.sidebyside'),
        value: SourceViewType.SideBySide,
        icon: 'pi pi-pause',
      },
      {
        label: this.translate.instant('compare.source.view.linebyline'),
        value: SourceViewType.LineByLine,
        icon: 'pi pi-equals',
      },
      {
        label: afterLabel,
        value: SourceViewType.Modified,
        icon: 'pi pi-file-edit',
      },
    ];
  }

  protected onSourceViewChange(viewType: SourceViewType) {
    this.sourceSelectedView.set(viewType);
  }

  constructor() {
    effect(() => {
      const viewType = this.sourceSelectedView();
      const beforeContent = this.resolvedBefore();
      const afterContent = this.resolvedAfter();
      const container = this.sourceContainer();
      this.translate.currentLang();
      this.settingsService.darkMode();
      if (beforeContent && afterContent && container) {
        this.rebuildSourceContent(container.nativeElement, viewType, beforeContent, afterContent);
      }
      this.enableOriginalEdits.set(false);
      this.editing.set(false);
    });
  }

  async rebuildSourceContent(container: HTMLElement, viewType: SourceViewType, beforeContent: htmlProcessingResult, afterContent: htmlProcessingResult): Promise<void> {
    const token = ++this.renderToken;

    const beforePath = this.fetchService.generatePath(beforeContent.url ?? '');
    const afterPath = this.fetchService.generatePath(afterContent.url ?? '');

    const beforeHTML = await this.htmlNormalizationService.formatHtml(beforeContent.html);
    const afterHTML = await this.htmlNormalizationService.formatHtml(afterContent.html);

    await this.compareSourceService.generateSourceContent(container, viewType, beforeHTML, afterHTML, beforePath, afterPath);

    if (token !== this.renderToken) return; // cancel if a newer call was started while awaiting

    const elements = container.querySelectorAll<HTMLElement>('.hljs');

    if (elements.length > 0) {
      this.hasChanges.emit(true);
    } else if (this.sourceSelectedView() === SourceViewType.LineByLine || this.sourceSelectedView() === SourceViewType.SideBySide) {
      this.hasChanges.emit(false);
    }
    console.log(elements.length);
  }

  // Legend
  protected get legendItems() {
    const view = this.sourceSelectedView();
    const items: { text: string; colour: string; style: string; lineStyle?: string }[] = [];

    const red = this.settingsService.darkMode() ? 'rgba(248, 81, 73, 0.4)' : '#ffb6ba';
    const green = this.settingsService.darkMode() ? 'rgba(46, 160, 67, .4)' : '#97F295';

    if (view === SourceViewType.SideBySide || view === SourceViewType.LineByLine) {
      items.push(
        { text: this.translate.instant('compare.rendered.legend.previousVersion'), colour: red, style: 'highlight' },
        { text: this.translate.instant('compare.rendered.legend.updatedVersion'), colour: green, style: 'highlight' },
      );
    } else if (view === SourceViewType.Original) {
      items.push({ text: this.translate.instant('compare.rendered.legend.previousVersion'), colour: red, style: 'line' });
    } else if (view === SourceViewType.Modified) {
      items.push({ text: this.translate.instant('compare.rendered.legend.updatedVersion'), colour: green, style: 'line' });
    }

    return items;
  }

  protected readonly editing = signal<boolean>(false);
  protected async toggleEditing(view: SourceViewType): Promise<void> {
    this.editing.set(!this.editing());

    const editable = this.sourceContainer()?.nativeElement;
    if (!editable) {
      console.warn('Editable area not found.');
      this.editing.set(false);
      return;
    }
    if (this.editing()) {
      //edit
      editable.setAttribute('contenteditable', 'true');
      editable.focus();
    } else {
      //save
      editable.setAttribute('contenteditable', 'false');

      const updatedContent = await this.htmlNormalizationService.formatHtml(editable.textContent);

      const beforeContent = this.resolvedBefore();
      const afterContent = this.resolvedAfter();

      if (!beforeContent || !afterContent) return;

      this.contentChanged.emit({
        beforeContent: view === SourceViewType.Original ? { ...beforeContent, html: updatedContent, edited: true } : beforeContent,
        afterContent: view === SourceViewType.Modified ? { ...afterContent, html: updatedContent, edited: true } : afterContent,
      });
    }
  }

  // 6. Before/After - Copy
  protected readonly copying = signal<boolean>(false);
  protected async toggleCopying(view: SourceViewType): Promise<void> {
    this.copying.set(true);

    const htmlToCopy = view === SourceViewType.Original ? (this.resolvedBefore()?.html ?? '') : view === SourceViewType.Modified ? (this.resolvedAfter()?.html ?? '') : '';
    navigator.clipboard
      .writeText(htmlToCopy)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('common.copiedToClipboard'),
          detail: htmlToCopy.slice(0, 100),
          life: 3000,
        });
        setTimeout(() => this.copying.set(false), 1000);
      })
      .catch((err) => {
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('common.copyError'),
          detail: this.translate.instant('compare.rendered.noHtmlToCopy'),
          life: 5000,
        });
        this.copying.set(false);
        console.error('Clipboard copy failed:', err);
      });
  }

  protected getUrl(): string | null {
    const url = this.sourceSelectedView() === SourceViewType.Original ? this.beforeContent()?.url : this.sourceSelectedView() === SourceViewType.Modified ? this.afterContent()?.url : null;

    return this.fetchService.isValidUrl(url) ? url : null;
  }
}
