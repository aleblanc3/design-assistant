import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

import { ColorConverter } from '../../../../common/color-converter.util';
import { ContrastUtil } from '../../../../common/contrast.util';

export interface ContrastTest {
  shade: number;
  textColor: string;
  textColorName: string;
  requiredRatio: number;
}

@Component({
  selector: 'aida-color-picker',
  standalone: true,
  imports: [FormsModule, ButtonModule, ColorPickerModule, InputGroupAddonModule, InputGroupModule, InputTextModule],
  template: `
    <div class="flex flex-column gap-2">
      <!-- Color Picker -->
      <div class="flex align-items-center gap-2 mb-2">
        <p-inputgroup>
          <p-inputgroup-addon>
            <p-colorpicker [(ngModel)]="currentColor" (onChange)="onColorChange()" appendTo="body" />
          </p-inputgroup-addon>
          <input [(ngModel)]="currentColor" (change)="onColorChange()" pInputText placeholder="#000000" type="text" />
          @if (showReset) {
            <p-inputgroup-addon>
              <p-button (onClick)="reset()" class="w-full h-full" label="Reset" severity="secondary" size="small" text />
            </p-inputgroup-addon>
          }
        </p-inputgroup>
      </div>
    </div>

    <!-- Contrast Tests -->
    @if (contrastTests && contrastTests.length > 0) {
      <div class="text-xs">
        @for (test of contrastTests; track test.shade) {
          <div class="flex align-items-center justify-content-between">
            <span>{{ test.shade }} vs {{ test.textColorName }}:</span>
            <div class="flex align-items-center gap-2">
              <span class="font-semibold">{{ getContrastRatio(test) }}</span>
              <span [class.pi-check]="getContrastPasses(test)" [class.pi-times]="!getContrastPasses(test)" [class]="getContrastPasses(test) ? 'text-green-500' : 'text-red-500'" class="pi"> </span>
            </div>
          </div>
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements OnInit, OnChanges {
  @Input() key = '';
  @Input() initialColor = '#000000'; // Can be hex like '#00cccc' or CSS class like 'bg-green-500'
  @Input() externalShades?: Record<number, string>;
  @Input() contrastTests?: ContrastTest[];
  @Input() showReset = true;
  @Output() colorChanged = new EventEmitter<{ hex: string; shades: Record<number, string> }>();

  currentColor = '';
  defaultColor = '';
  generatedShades: Record<number, string> = {};

  ngOnInit() {
    this.loadColor();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['key']) {
      this.loadColor();
    }
    if (changes['externalShades'] && this.externalShades) {
      this.generatedShades = this.externalShades;
      this.currentColor = this.externalShades[500] || this.currentColor;
    }
  }

  private loadColor() {
    this.currentColor = this.parseInitialColor(this.initialColor);
    this.defaultColor = this.currentColor;
    this.loadShadesFromTheme();
    //this.generateShades();
  }

  private loadShadesFromTheme() {
    const root = getComputedStyle(document.documentElement);

    // Extract the color name from initialColor (e.g., 'bg-primary-500' => 'primary')
    const colorMatch = this.initialColor.match(/bg-(\w+)-\d+/);
    const colorName = colorMatch ? colorMatch[1] : 'primary';

    const shades: Record<number, string> = {};
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((shade) => {
      const cssVar = `--p-${colorName}-${shade}`;
      const color = root.getPropertyValue(cssVar).trim();

      if (color?.startsWith('#')) {
        shades[shade] = color;
      } else if (color?.startsWith('rgb')) {
        shades[shade] = ColorConverter.rgbStringToHex(color);
      }
    });

    // Only use generated shades if we couldn't read from theme
    if (Object.keys(shades).length > 0) {
      this.generatedShades = shades;
    } else {
      this.generateShades();
    }
  }

  private parseInitialColor(input: string): string {
    // If it's already a hex color
    if (input.startsWith('#')) {
      return input;
    }

    // If it's a CSS class like 'bg-green-500', extract from computed styles
    if (input.includes('-')) {
      const tempDiv = document.createElement('div');
      tempDiv.className = input;
      tempDiv.style.display = 'none';
      document.body.appendChild(tempDiv);

      const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
      document.body.removeChild(tempDiv);

      if (computedColor && computedColor !== 'rgba(0, 0, 0, 0)') {
        return ColorConverter.rgbStringToHex(computedColor);
      }
    }

    // Fallback
    return input;
  }

  onColorChange() {
    if (!this.currentColor.match(/^#?[0-9A-Fa-f]{6}$/)) {
      return; // Invalid color
    }

    const normalizedHex = this.currentColor.startsWith('#') ? this.currentColor : '#' + this.currentColor;
    this.currentColor = normalizedHex;

    this.generateShades();
    this.emitChange();
  }

  private generateShades() {
    this.generatedShades = this.generateColorShades(this.currentColor);
  }

  private generateColorShades(baseColor: string): Record<number, string> {
    const hsl = ColorConverter.hexToHsl(baseColor);

    console.warn(hsl.l);

    const lightnessMap = {
      50: 95,
      100: 88,
      200: 81,
      300: 74,
      400: 67,
      500: hsl.l,
      600: hsl.l * 0.85,
      700: hsl.l * 0.7,
      800: hsl.l * 0.55,
      900: hsl.l * 0.45,
      950: hsl.l * 0.4,
    };

    const shades: Record<number, string> = {};

    Object.entries(lightnessMap).forEach(([shade, lightness]) => {
      shades[Number(shade)] = ColorConverter.hslToHex(hsl.h, hsl.s, lightness);
    });

    return shades;
  }

  getContrastRatio(test: ContrastTest): string {
    const bgColor = this.generatedShades[test.shade] || this.currentColor;
    const ratio = ContrastUtil.getContrastRatio(test.textColor, bgColor);
    return ratio.toFixed(1);
  }

  getContrastPasses(test: ContrastTest): boolean {
    const bgColor = this.generatedShades[test.shade] || this.currentColor;
    const ratio = ContrastUtil.getContrastRatio(test.textColor, bgColor);
    return ratio >= test.requiredRatio;
  }

  reset() {
    this.currentColor = this.defaultColor;
    this.generateShades();
    this.emitChange();
  }

  private emitChange() {
    this.colorChanged.emit({
      hex: this.currentColor,
      shades: this.generatedShades,
    });
  }
}
