import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { marker } from '@colsen1991/ngx-translate-extract-marker';

//PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';

//Services
import { CompareService, AiTaskOption } from '../compare.service';
import { CompareAiService } from '../compare-ai.service';

//Constants
import { AI_FREE_MODELS, AI_PAID_MODELS } from '../../../common/prompts/ai-models.config';
import { PagePromptKey } from '../../../common/prompts/prompt.model';

/**
 * Reviewed: 2026-08-19 (ng21)
 * 
 * AI options for switching between prompts and models
 */
@Component({
    selector: 'aida-compare-ai-options',
    imports: [
        CommonModule, FormsModule, TranslatePipe,
        AccordionModule, FieldsetModule, ButtonModule, IftaLabelModule, TextareaModule, RadioButtonModule, CheckboxModule, SliderModule, DialogModule, TooltipModule
    ],
    templateUrl: './compare-ai-options.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareAiOptionsComponent {
protected readonly compareService = inject(CompareService)
protected readonly compareAiService = inject(CompareAiService)
private readonly translate = inject(TranslateService)

/** AI model radio buttons */
protected readonly freeModels = AI_FREE_MODELS;
protected readonly paidModels = AI_PAID_MODELS;

/** Task radio buttons */
get tasks(): MenuItem[] { 
    return [
        {label: this.translate.instant('compare.aiOptions.comparison.option.default'),
        value: 'default' as AiTaskOption
        },
        {label: this.translate.instant('compare.aiOptions.comparison.option.prompts'),
        value: 'prompts' as AiTaskOption
        },
        {label: this.translate.instant('compare.aiOptions.comparison.option.models'),
        value: 'models' as AiTaskOption
        },
   ]
}

showTaskHelp = false;

/** Prompt radio buttons */
get prompts(): MenuItem[] {
    return Object.keys(PagePromptKey).map(enumKey => ({
        label: this.translate.instant(PagePromptKey[enumKey as keyof typeof PagePromptKey]),
        value: enumKey,
    }));
}

markForTranslation(){
    marker('compare.aiOptions.comparison.help');
}
 
}