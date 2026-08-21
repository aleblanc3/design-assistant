import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';

// Custom
import { SignInButtonComponent } from '../components/sign-in/sign-in-button/sign-in-button.component';
import { ProjectStateService } from '../services/project-state.service';
import { UserSettingsService } from '../services/user-settings.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'aida-header',
  imports: [CommonModule, TranslatePipe, ButtonModule, DividerModule, ToastModule, SignInButtonComponent],
  template: `
    <header>
      <div class="flex flex-row gap-2 justify-content-end py-2 border-bottom-1 surface-border">
        <img [alt]="'common.goc' | translate" [src]="logoSrc" class="opacity-70 h-1rem md:h-2rem flex mr-auto" />
        <div class="flex flex-row align-items-center gap-2 lg:gap-3">
          @if (showSaveButton()) {
            <p-button
              [icon]="saveButtonConfig().icon"
              [label]="saveButtonConfig().label"
              [severity]="saveButtonConfig().severity"
              (onClick)="save()"
              rounded
              size="small"
              styleClass="white-space-nowrap -mr-2"
              text
            />
            <p-divider class="mx-0" layout="vertical" />
          }
          <aida-sign-in-button />
          <p-button
            [icon]="settingsService.icon()"
            (onClick)="settingsService.toggle()"
            ariaLabel="Toggle between dark and light mode"
            outlined
            rounded
            severity="secondary"
            size="small"
            styleClass="darkmode-toggle secondary-outline"
          />
          <p-button
            [ariaLabel]="'_app.oppLang' | translate"
            (onClick)="settingsService.toggleLanguage()"
            rounded
            severity="secondary"
            styleClass="underline text-blue-500 hover:text-blue-400 nohover -ml-2"
            text
          >
            <span class="hidden sm:inline w-3rem">{{ '_app.oppLang' | translate }}</span>
            <span class="inline sm:hidden w-1rem uppercase font-bold">{{ '_app.oppLang' | translate | slice: 0 : 2 }}</span>
          </p-button>
        </div>
      </div>
      @if (!production) {
        <div class="sticky top-0 z-2 border-round-bottom-lg bg-primary text-center w-full">
          {{ (sandbox ? '_app.env.sandbox' : '_app.env.dev') | translate }}
        </div>
      }
      <p-toast />
    </header>
  `,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  public settingsService = inject(UserSettingsService);
  private projectState = inject(ProjectStateService);
  public messageService = inject(MessageService);
  public production = environment.production;
  public sandbox = environment.sandbox;

  // Get save status from project state
  saveStatus = this.projectState.getSaveStatus;

  // Show save button when there are unsaved changes
  showSaveButton = computed(() => {
    const status = this.saveStatus();
    return status !== 'saved';
  });

  // Configure save button appearance based on status
  saveButtonConfig = computed(() => {
    const status = this.saveStatus();
    if (status === 'error') {
      return {
        label: this.translate.instant('save.error'),
        icon: 'pi pi-times-circle',
        severity: 'danger' as const,
      };
    }
    if (status === 'saving') {
      return {
        label: this.translate.instant('save.saving'),
        icon: 'pi pi-spin pi-spinner',
        severity: 'info' as const,
      };
    }
    if (status === 'unsaved') {
      return {
        label: this.translate.instant('save.unsaved'),
        icon: 'pi pi-exclamation-triangle',
        severity: 'danger' as const,
      };
    }
    // Default (shouldn't show due to showSaveButton)
    return {
      label: this.translate.instant('save.saved'),
      icon: 'pi pi-check',
      severity: 'success' as const,
    };
  });

  // Manual save
  async save() {
    const success = await this.projectState.saveProject();
    if (success) {
      this.messageService.add({
        severity: 'success',
        summary: this.translate.instant('save.toast.success'),
        detail: this.translate.instant('save.toast.success.details'),
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('save.toast.fail'),
        detail: this.translate.instant('save.toast.fail.details'),
      });
    }
  }

  // Dark/Light logos for different breakpoints
  get logoSrc() {
    return this.settingsService.darkMode() ? 'images/sig-wht-en.svg' : 'images/sig-blk-en.svg';
  }
}
