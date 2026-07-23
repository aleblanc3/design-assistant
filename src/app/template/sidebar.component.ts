import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectStateService } from '../services/project-state.service';
import { MailtoService } from '../services/mailto.service';
import { environment } from '../../environments/environment';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'aida-sidebar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  public production = environment.production;
  public sandbox = environment.sandbox;
  public mailtoService = inject(MailtoService);
  private projectState = inject(ProjectStateService);
  private fetchService = inject(FetchService)

  get projectLoaded(): boolean {
    const name = this.projectState.getProject().projectName;
    return !!name;
  }

  // Section toggle state
  isExpanded = {
    project: true,
    tasks: false,
  };

  toggleSection(section: keyof typeof this.isExpanded) {
    this.isExpanded[section] = !this.isExpanded[section];
  }

  toggleOnEnter(event: KeyboardEvent, section: keyof typeof this.isExpanded) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSection(section);
    }
  }

  private checkInProgress = false;
  public checkLocalStatus(): void {
    if (this.checkInProgress) return;
    if (this.projectState.hasLocal() !== null) return;
    const owner = this.projectState.getProject().github.owner;
    const repo = this.projectState.getProject().github.repo;
    if (!owner || !repo) return;
    this.checkInProgress = true;
    const url = this.fetchService.generateUrl("index.html", "ut", owner, repo);
    const checks: Promise<void>[] = [
      this.fetchService.fetchStatusViaProxy(url).then(result => this.projectState.hasLocal.set(result))
    ];
    if (this.projectState.getProject().github.hasBaselineRepo) {
      const urlBL = this.fetchService.generateUrl("index.html", "ut-base", owner, repo);
      checks.push(
        this.fetchService.fetchStatusViaProxy(urlBL).then(result => this.projectState.hasLocalBL.set(result))
      );
    }
    Promise.all(checks).finally(() => { this.checkInProgress = false; });
  }
}
