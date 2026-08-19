import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from "@ngx-translate/core";
import { RouterLink } from '@angular/router';
import { marker } from '@colsen1991/ngx-translate-extract-marker';

//PrimeNG
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'aida-dev-tools',
  imports: [
    TranslatePipe, FormsModule, RouterLink,
    CheckboxModule, ButtonModule
  ],
  template: `
    <h2>{{ 'dev._title' | translate}}</h2>
    <p [innerHTML]="'dev.description' | translate"></p>
    <div class="grid py-2 px-4 lg:px-6">
      <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/monitoring" class="text-xl font-semibold">{{'dev.monitoring._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.monitoring.description' | translate}}</p>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/color-generator" class="text-xl font-semibold">{{'dev.colors._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.colors.description' | translate}}</p>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/design-patterns" class="text-xl font-semibold">{{'dev.patterns._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.patterns.description' | translate}}</p>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <a routerLink="/dev/prompt-editor" class="text-xl font-semibold">{{'dev.prompts._title' | translate}}</a>
          <p class="text-color-secondary mt-2">{{'dev.prompts.description' | translate}}</p>
        </div>
  </div>
  `,
  styles: ``
})
export class DevToolsComponent {
  /**
  * Translation markers for visual separators in translation files.
  * These keys (feature._) create visual breaks between feature sections.
  * DO NOT REMOVE - needed to preserve separators during i18n:clean
  */
  markForTranslation() {
    //Separators
    marker('about._');
    marker('actions._');
    marker('addPages._');
    marker('aiPrompt._');
    marker('collaborators._');
    marker('common._');
    marker('compare._');
    marker('dashboard._');
    marker('dev._');
    marker('editNode._');
    marker('export._');
    marker('exportPages._');
    marker('feedback._');
    marker('findPages._');
    marker('github._');
    marker('help._');
    marker('iaDiagram._');
    marker('importPage._');
    marker('invalidUrls._');
    marker('inventory._');
    marker('nav._');
    marker('notFound._');
    marker('problems._');
    marker('project._');
    marker('project.github._');
    marker('project.message._');
    marker('project.phase._');
    marker('project.repo._');
    marker('project.setup._');
    marker('save._');
    marker('search._');
    marker('settings._');
    marker('standalone._');
    marker('switch._');
    marker('template._');
    marker('ucdg._');
    //Other
    marker('common.complete');
    marker('common.cra');
    marker('common.edited');
    marker('common.error');
    marker('common.pending');
  }
}
