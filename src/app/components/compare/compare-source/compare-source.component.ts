import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';

import { FetchService } from '../../../services/fetch.service';
import { HtmlNormalizationService, htmlProcessingResult } from '../../../services/html-normalization.service';
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
  imports: [CommonModule, FormsModule, TranslatePipe, RadioButtonModule],
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
      if (beforeContent && afterContent && container) {
        this.rebuildSourceContent(container.nativeElement, viewType, beforeContent, afterContent);
      }
    });
  }

  async rebuildSourceContent(container: HTMLElement, viewType: SourceViewType, beforeContent: htmlProcessingResult, afterContent: htmlProcessingResult): Promise<void> {
    const token = ++this.renderToken;

    const beforePath = this.fetchService.generatePath(beforeContent.url ?? '');
    const afterPath = this.fetchService.generatePath(afterContent.url ?? '');

    const beforeHTML = await this.htmlNormalizationService.formatHtml(beforeContent.html);
    const afterHTML = await this.htmlNormalizationService.formatHtml(afterContent.html);

    await this.compareSourceService.generateSourceContent(container, viewType, beforeHTML, afterHTML, beforePath, afterPath);

    if (token !== this.renderToken) return; // a newer call started while we were awaiting — abandon this one
  }
}
