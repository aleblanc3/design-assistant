import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

//PrimeNG
import { BreadcrumbModule } from 'primeng/breadcrumb';

//Custom
import { ProjectPhase } from '../../../common/data.model';

/**
 * Reviewed: 2026-08-14 (ng21)
 *
 * Doormats for the assess phase
 */
@Component({
  selector: 'aida-assess',
  imports: [CommonModule, TranslatePipe, RouterLink, BreadcrumbModule],
  templateUrl: 'assess.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssessComponent {
  protected readonly breadcrumbs = [{ label: 'dashboard._title', route: '/dashboard' }, { label: ProjectPhase.Assess }];
  /** Set breadcrumb to false if reusing these doormats on another page */
  public readonly breadcrumb = input<boolean>(true);

  protected readonly ProjectPhase = ProjectPhase;
}
