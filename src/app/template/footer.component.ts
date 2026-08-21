import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserSettingsService } from '../services/user-settings.service';
import { version as appVersion } from '../../../package.json';

/**
 * Reviewed: 2026-08-13 (ng21)
 *
 * Footer with currect version and theme-responsive logo
 */
@Component({
  selector: 'aida-footer',
  imports: [TranslatePipe],
  template: `
    <footer>
      <div class="flex flex-row justify-content-between align-items-end mt-auto pt-2">
        <p class="white-space-nowrap text-color-secondary text-sm mb-0">{{ '_app.version' | translate }} {{ appVersion }}</p>
        <img [alt]="'common.goc' | translate" [src]="logoSrc" class="opacity-70 h-2rem md:h-3rem" />
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly settingsService = inject(UserSettingsService);
  protected readonly appVersion = appVersion;

  protected get logoSrc() {
    return this.settingsService.darkMode() ? 'images/wmms-wht.svg' : 'images/wmms-blk.svg';
  }
}
