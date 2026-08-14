import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

//Services
import { ProjectStateService } from '../services/project-state.service';
import { ProjectCacheService } from '../services/project-cache.service';
import { MailtoService } from '../services/mailto.service';
import { environment } from '../../environments/environment';

/**
 * Reviewed: 2026-08-13 (ng21)
 * 
 * Left side navigation links. Collapses in mobile view.
 */
@Component({
  selector: 'aida-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  private projectState = inject(ProjectStateService);
  private projectCache = inject(ProjectCacheService);
  private mailtoService = inject(MailtoService);

  protected production = environment.production;
  protected sandbox = environment.sandbox;

  protected get projectLoaded(): boolean {
    const name = this.projectState.getProject().projectName;
    return !!name;
  }

  // Section toggle state
  protected isExpanded = {
    project: true,
    tasks: false,
  };

  protected toggleSection(section: keyof typeof this.isExpanded) {
    this.isExpanded[section] = !this.isExpanded[section];
  }

  protected toggleOnEnter(event: KeyboardEvent, section: keyof typeof this.isExpanded) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSection(section);
    }
  }

  protected readonly mailTo = () => {
    this.mailtoService.openMailto(this.mailtoService.generateFeedbackMailto())
  }
  protected readonly checkStatus = () => {
    this.projectCache.checkLocalStatus(); 
    this.projectCache.checkPreviewStatus();
  }
  protected readonly checkLocalStatus = () => {
    this.projectCache.checkLocalStatus(); 
  }
}
