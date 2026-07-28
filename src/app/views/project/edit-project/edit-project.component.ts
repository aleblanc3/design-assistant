import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

//PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MessageModule } from 'primeng/message';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

//Custom components and services
import { ProjectStateService } from '../../../services/project-state.service';
import { IaDiagramService } from '../../../components/ia-diagram/ia-diagram.service';
import { SetupProjectComponent } from '../../../components/setup-project/setup-project.component';
import { SetupRepoComponent } from '../../../components/setup-repo/setup-repo.component';
import { AddCollaboratorsComponent } from '../../../components/add-collaborators/add-collaborators.component';
import { FindPagesComponent } from '../../../components/find-pages/find-pages.component';
import { AddUrlsComponent } from '../../../components/add-urls/add-urls.component';
import { urlVersion } from '../../../services/fetch.service';

@Component({
  selector: 'aida-edit-project',
  imports: [
    CommonModule, FormsModule, TranslateModule, RouterLink,
    SetupProjectComponent, SetupRepoComponent, AddCollaboratorsComponent, FindPagesComponent, AddUrlsComponent,
    DrawerModule, ButtonModule, MessageModule, SelectButtonModule, TableModule, TooltipModule
  ],
  templateUrl: './edit-project.component.html',
  styles: ``
})
export class EditProjectComponent {
  public projectState = inject(ProjectStateService);
  private translate = inject(TranslateService);
  iaDiagram = inject(IaDiagramService);

  //Check if project is named and has repo
  get hasName(): boolean {
    const name = this.projectState.getProject().projectName;
    return !!name;
  }

  get hasRepo(): boolean {
    const repo = this.projectState.getProject().github.repo;
    return !!repo;
  }

  lang = this.projectState.detectPrimaryLanguage();

  //Todo: Collaborators management
  collaborators = this.projectState.getProject().collaborators;

  //UI elements
  inScopePageCount = computed(() => this.projectState.getProject().inScopePages);
  showUrls = false;
  showIA = false;
  showBreadcrumb = false;

  //URL version selector (for drawer)
  // Export source options
  selectedUrlVersion = signal<urlVersion>('live');

  get urlVersionOptions() {
    const options = [
      { label: this.translate.instant('common.version.canada'), value: 'live' },
      { label: this.translate.instant('common.version.prototype.github'), value: 'protoGH' },
      { label: this.translate.instant('common.version.prototype.local'), value: 'protoUT' }];
    if (this.projectState.getProject().github.hasBaselineRepo) {
      options.push(
        { label: this.translate.instant('common.version.baseline.github'), value: 'baseGH' },
        { label: this.translate.instant('common.version.baseline.local'), value: 'baseUT' }
      )
    }
    return options;
  }

  pairedPagesForTable = computed(() =>
    this.projectState.getPairedPages(this.selectedUrlVersion(), 'all')
  );

  async copyToClipboard(lang: 'en' | 'fr' | 'both'): Promise<void> {
    const pairs = this.pairedPagesForTable();
    let text;
    if (lang === 'both') {
      text = pairs.map(pair => `${pair.en.url}\t${pair.fr.url}`).join('\r\n');
    } else {
      text = pairs.map(pair => `${pair[lang].url}`).join('\r\n');
    }
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  }

}