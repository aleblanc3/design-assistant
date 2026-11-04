import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { TranslatePipe } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DrawerModule } from 'primeng/drawer';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AddPagesComponent } from '../../../components/add-pages/add-pages.component';
import { MenuPageActionsComponent } from '../../../components/menu-page-actions/menu-page-actions.component';
import { ProjectSettingsComponent } from '../../../components/project-settings/project-settings.component';
import { ViewPagesComponent } from '../../../components/view-pages/view-pages.component';

import { FetchService } from '../../../services/fetch.service';
import { ProjectCacheService } from '../../../services/project-cache.service';
import { ProjectInventoryService, TableItem } from '../../../services/project-inventory.service';
import { ProjectStateService } from '../../../services/project-state.service';
import { StyleCardService } from '../../../services/style-card.service';
import { buildFilterFields, ColumnVisibility, createRowSelection, groupSpans, persisted, rowsPerPageOptions, TableService, trackStuck } from '../../../services/style-table.service';

import { TooltipDirective } from '../../../common/tooltip.directive';

/**
 * Reviewed: 2026-08-14 (ng21)
 *
 * Content inventory table for reviewing all data collected for each page in the project
 *
 * Preferentially displays prototype data but will fall back to live
 *
 * TODO:
 ** add unusual row status filter for booleans (any visible true)
 ** make sure all tooltips have translations
 ** add context menu for proposed status, notes, and template?
 ** add sorting & filtering?
 */
@Component({
  selector: 'aida-page-inventory',
  imports: [
    CommonModule,
    FormsModule,
    TranslatePipe,
    ButtonModule,
    CheckboxModule,
    DrawerModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TableModule,
    AddPagesComponent,
    MenuPageActionsComponent,
    ProjectSettingsComponent,
    TooltipDirective,
    ViewPagesComponent,
  ],
  templateUrl: 'page-inventory.component.html',
  styleUrl: '../../../../sticky.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageInventoryComponent implements OnInit {
  protected readonly projectState = inject(ProjectStateService);
  protected readonly projectCache = inject(ProjectCacheService);
  protected readonly projectInventory = inject(ProjectInventoryService);
  protected readonly tableService = inject(TableService);
  protected readonly styleCardService = inject(StyleCardService);
  protected readonly fetchService = inject(FetchService);

  /* Search term for filtering table rows */
  protected readonly searchTerm = signal<string>('');
  /** Tracks if sticky content is currently stuck to X or Y axis*/
  protected readonly stuck = trackStuck();
  /** Unique instance of visibility class */
  protected readonly visible = new ColumnVisibility('invHidden', [
    persisted('invLang', this.projectCache.selectedLang, ['en', 'fr', 'both'] as const),
    persisted('invScope', this.projectCache.selectedScope, ['inScope', 'all'] as const),
  ]);
  /** Controls visibility of row and column filter drawer */
  protected showDrawer = false;

  ngOnInit() {
    /** Restores users default column settings on load */
    this.visible.restore();
  }

  /** All table rows */
  protected readonly rows = computed(() => {
    return this.projectInventory.flattenInventory(this.projectState.getProject().projectData);
  });

  /** Selected table rows */
  protected readonly selection = createRowSelection(this.rows);

  /** Visible table rows */
  protected readonly visibleRows = computed(() => {
    let rows = this.rows();

    if (this.projectCache.selectedScope() === 'inScope') {
      rows = rows.filter((row) => !(row.inScope.type === 'boolean' && row.inScope.content !== true));
    }

    return rows;
  });

  /** All table columns (keys, groups, version, & an indicator for first column in group) */
  protected readonly columns = computed(() => {
    const first = this.rows()[0] as unknown as Record<string, TableItem> | undefined;
    if (!first) return [];

    const selectedLang = this.projectCache.selectedLang();

    const excluded = selectedLang === 'en' ? ['Fr'] : selectedLang === 'fr' ? ['En'] : [];

    const cols = Object.entries(first).filter(([key, cell]) => cell?.group !== undefined && cell?.column !== undefined && !excluded.some((lang) => key.endsWith(lang)));

    return cols.map(([key, cell], i) => ({
      key,
      group: cell.group,
      column: cell.column,
      isGroupStart: i === 0 || cols[i - 1][1].group !== cell.group,
    }));
  });

  /** Visible table columns */
  protected readonly visibleColumns = computed(() => {
    const cols = this.columns().filter((c) => this.visible.isVisible(c.key));
    return cols.map((col, index) => ({ ...col, isGroupStart: index === 0 || cols[index - 1].group !== col.group }));
  });

  /** Visible table groups (Group names & calculated span for table) */
  protected readonly groups = computed(() => groupSpans(this.visibleColumns()));

  /** Set max rows per page to the total pages in project */
  protected get rowsPerPageOptions(): number[] {
    return rowsPerPageOptions(this.rows().length);
  }

  /** Filters on currently visible columns plus h1, double h1, and path */
  protected readonly filterFields = computed(() => buildFilterFields(this.projectCache.uiLang(), this.visibleColumns()));

  /** Map columns to groups for drawer checkboxes */
  protected readonly columnGroups = computed(() => {
    const map = new Map<string, { key: string; column: string }[]>();
    for (const col of this.columns()) {
      if (!map.has(col.group)) map.set(col.group, []);
      map.get(col.group)!.push({ key: col.key, column: col.column });
    }
    return [...map].map(([group, cols]) => ({ group, cols }));
  });

  private markForTranslation() {
    marker('inventory.table.header.all');
    marker('inventory.table.header.inScope');
  }
}
