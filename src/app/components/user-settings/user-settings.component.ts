import { Component, inject, input, effect, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { marker } from '@colsen1991/ngx-translate-extract-marker';

import { MenuItem } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';

import { UserSettingsService, ColorScheme } from '../../services/user-settings.service';
import { ProjectStateService } from '../../services/project-state.service';

export type SettingsMode = 'all' | 'language' | 'theme' | 'versions';

@Component({
    selector: 'aida-user-settings',
    imports: [CommonModule, TranslatePipe, FormsModule,
        SelectButtonModule, SelectModule, CheckboxModule, ButtonModule, TooltipModule, DialogModule
    ],
    templateUrl: './user-settings.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettingsComponent {
    protected readonly settingsService = inject(UserSettingsService);
    private readonly translate = inject(TranslateService);
    private readonly projectState = inject(ProjectStateService);

    mode = input<SettingsMode>('all');

    constructor() {
        effect(() => {
            this.selectedTheme = this.settingsService.darkMode();
            this.selectedScheme = this.settingsService.colorScheme();
        });
    }

    // Language
    get langOptions(): MenuItem[] { 
        return[
            { label: this.translate.instant('common.language.english'), value: 'en' }, 
            { label: this.translate.instant('common.language.french'), value: 'fr' }
        ]
    };

    get selectedLang(): string {
        return this.settingsService.currentLang();
    }

    set selectedLang(value: string) {
        this.settingsService.setLanguage(value);
    }

    // Dark & Light theme
    get themeOptions(): MenuItem[] {
        return [
            { label: this.translate.instant('settings.theme.light'), value: false }, 
            { label: this.translate.instant('settings.theme.dark'), value: true }
        ];
    } 

    selectedTheme: boolean = this.settingsService.darkMode();

    changeTheme() {
        this.settingsService.toggle();
    }

    // Default & other themes
    get colorSchemes(): MenuItem[] { 
        return [
        { label: this.translate.instant('settings.theme.default'), value: 'default' as ColorScheme },
        { label: this.translate.instant('settings.theme.deutan'), value: 'deutan' as ColorScheme },
        { label: this.translate.instant('settings.theme.protan'), value: 'protan' as ColorScheme },
        { label: this.translate.instant('settings.theme.tritan'), value: 'tritan' as ColorScheme },
        { label: this.translate.instant('settings.theme.custom'), value: 'custom' as ColorScheme }
    ];
}

    selectedScheme = this.settingsService.colorScheme();

    changeScheme() {
        this.settingsService.setColorScheme(this.selectedScheme);
    }

    // Versions
     get versionOptions(): MenuItem[] {
        const options = [            
            { label: this.translate.instant('common.source.preview'), value: this.settingsService.includePreview },
            { label: this.translate.instant('project.repo.storage.github'), value: this.settingsService.includeGitHub },
            { label: this.translate.instant('project.repo.storage.local'), value: this.settingsService.includeLocal },
        ];
        if(this.projectState.getProject().github.hasBaselineRepo){
            options.push({ label: this.translate.instant('common.version.baseline'), value: this.settingsService.includeBaseline })
        }
        return options;  
    } 

    showVersionHelp = false

    markForTranslation(){
        marker('settings.versions.help');
    }
}