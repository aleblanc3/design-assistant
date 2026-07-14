import { Component, OnInit, inject, signal, computed, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { marker } from '@colsen1991/ngx-translate-extract-marker';

//PrimeNG Modules
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { IftaLabelModule } from 'primeng/iftalabel';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuModule } from 'primeng/menu';
import { ConfirmationService, MenuItem, SortEvent, TreeNode, SelectItemGroup, SelectItem } from 'primeng/api';
import { ContextMenuModule, ContextMenu } from 'primeng/contextmenu';
import { SelectModule, SelectChangeEvent } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';

//Components and models
import { ExportProjectComponent } from '../../../components/export-project/export-project.component';
import { AddUrlsComponent } from '../../../components/add-urls/add-urls.component';
import { FlattenedTreeNode, TableColumn, COLUMN_GROUPS, FIELD_FILTERS, PageTemplate, MetadataField, MetadataReviewStatus, MetadataReview, ColumnGroups } from '../../../common/data.model';
import { IaTableComponent } from '../../../components/ia-table/ia-table.component';
import { InventoryPrompts } from '../../../common/prompts/inventory.prompts';
import { InventoryPromptKey } from '../../../common/prompts/prompt.model';
import { EditNodeComponent } from '../../../components/edit-node/edit-node.component';

//Services
import { ProjectStateService } from '../../../services/project-state.service';
import { IaDiagramService } from '../../../components/ia-diagram/ia-diagram.service';
import { FindPagesComponent } from "../../../components/find-pages/find-pages.component";
import { OpenRouterService } from '../../../services/ai/openrouter.service';
import { FetchService } from '../../../services/fetch.service';
import { isKnownNumber } from '../../../common/phone-numbers.config';

@Component({
    selector: 'aida-inventory',
    imports: [CommonModule, FormsModule, TranslateModule,
        TableModule, ButtonModule, PopoverModule, TooltipModule,
        ToolbarModule, IftaLabelModule, MultiSelectModule, SelectButtonModule, MenuModule, SelectModule, TextareaModule,
        TagModule, ToggleButtonModule, ConfirmDialogModule, ContextMenuModule, DialogModule,
        RadioButtonModule,
        ExportProjectComponent, AddUrlsComponent, FindPagesComponent, IaTableComponent, EditNodeComponent],
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {
    public projectState = inject(ProjectStateService);
    public translate = inject(TranslateService);
    private confirmationService = inject(ConfirmationService);
    public openRouterService = inject(OpenRouterService);
    private fetchService = inject(FetchService);
    public iaDiagram = inject(IaDiagramService);

    // Variables
    lang = this.projectState.detectPrimaryLanguage();
    github = this.projectState.getProject().github;

    // Effects
    constructor() {
        effect(() => {
            this.allColumns(); // track the signal
            this.updateVisibleColumns();
        });
    }

    // Current selections
    selectedNodes: FlattenedTreeNode[] = [] // Flattened TreeNode data (for delete, status toggles, etc.)
    selectedColumnFields: string[] = []; // Multiselect column data
    selectedGroups: string[] = []; // Multiselect group data
    unselectedGroups: string[] = []; // Multiselect group data

    /***********************************************************/
    // Local storage key for loading previous table settings
    private readonly COLUMN_KEY = 'inventoryColumnVisibility';
    private readonly GROUP_KEY = 'inventoryGroupVisibility';

    // Update column visibility on first load
    ngOnInit() {
        this.loadColumnVisibility(); // Loads previous settings
        this.updateVisibleColumns(); // Updates table
    }

    private loadColumnVisibility() {
        const storedColumns = localStorage.getItem(this.COLUMN_KEY);
        const storedGroups = localStorage.getItem(this.GROUP_KEY);
        if (storedColumns && storedGroups) {
            this.selectedGroups = JSON.parse(storedGroups);
            this.selectedColumnFields = JSON.parse(storedColumns);
        } else {
            // Use default values
            this.selectedColumnFields = this.allColumns()
                .filter(col => col.visibleByDefault && !col.frozen) //We exclude frozen here since visibility is not toggleable for those
                .map(col => col.field);
        }
        // Sync selected groups from selected fields
        this.syncSelectedGroups();
    }

    /**********************************************************/

    /**********************************************************
    *                                                         *
    *    START OF TABLE DATA                                  *
    *    table, headers, boolean icons                        *
    *                                                         *
    **********************************************************/

    // Table - get current data
    @ViewChild('dt') dt!: Table;
    tableData = computed<FlattenedTreeNode[]>(() => {
        const allNodes = this.projectState.flattenTree();
        const filters = this.columnFilters();

        //Apply filters
        const filtered = allNodes.filter(node => {
            if (filters['anyUnusual']) {
                const hasAnyUnusual = this.fieldFilters.some(field => {
                    return node[field as keyof FlattenedTreeNode] === true;
                });
                if (!hasAnyUnusual) return false;
            }
            return Object.entries(filters).every(([field, filterValue]) => {
                if (field === 'anyUnusual') return true; // Skip, not an actual column
                if (!filterValue) return true; // Filter inactive                       
                return node[field as keyof FlattenedTreeNode] === true; // Boolean filters - show only true values
            });
        });

        //Apply sorting
        const field = this.sortField();
        const order = this.sortOrder();
        if (!field) return filtered;

        return [...filtered].sort((a, b) => {
            const valueA = a[field as keyof FlattenedTreeNode];
            const valueB = b[field as keyof FlattenedTreeNode];

            // Get the column type
            const column = this.projectState.treeTableColumns().find(col => col.field === field);
            const colType = column?.type;

            // Handle null/undefined
            const isEmptyA = valueA == null || valueA === '' || (Array.isArray(valueA) && valueA.length === 0);
            const isEmptyB = valueB == null || valueB === '' || (Array.isArray(valueB) && valueB.length === 0);
            if (isEmptyA && isEmptyB) return 0;
            if (colType === 'date' || colType === 'number') {
                // null at the start (by oldest date or smallest number)
                if (isEmptyA) return -order;
                if (isEmptyB) return order;
            } else {
                // null at the end (by z)
                if (isEmptyA) return order;
                if (isEmptyB) return -order;
            }

            let comparison = 0;

            // Type-specific comparison
            if (colType === 'date') {
                // Compare as dates
                const dateA = new Date(valueA as string).getTime();
                const dateB = new Date(valueB as string).getTime();
                comparison = dateA - dateB;
            } else if (colType === 'number') {
                // Compare as numbers
                comparison = (valueA as number) - (valueB as number);
            } else if (colType === 'array') {
                // Compare arrays by joined string
                const strA = (valueA as string[]).join(', ').toLowerCase();
                const strB = (valueB as string[]).join(', ').toLowerCase();
                comparison = strA.localeCompare(strB);
            } else {
                // Default: text comparison (case-insensitive)
                comparison = valueA.toString().toLowerCase().localeCompare(
                    valueB.toString().toLowerCase()
                );
            }

            return order * comparison;
        });
    });

    // Get column group headings (includes frozen)
    get groupedHeaders() {
        const allGroups = this.columnGroups;
        const groups = allGroups.filter(g => {
            const hasFrozenColumns = this.allColumns().some(col => col.group === g && col.frozen);
            return this.selectedGroups.includes(g) || hasFrozenColumns;
        });

        return groups.map(groupKey => ({
            label: this.translate.instant(`inventory.columnGroups.${groupKey}`),
            value: groupKey,
            // Include ALL columns (frozen + non-frozen) for header span calculation
            items: this.allColumns()
                .filter(col => col.group === groupKey)
                .map(col => ({
                    label: col.label,
                    value: col.field
                }))
        }));
    }

    // For colspan - count visible columns in group (including frozen)
    getVisibleColumnCount(group: SelectItemGroup): number {
        return group.items.filter((item: SelectItem) => {
            const col = this.allColumns().find(c => c.field === item.value);
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            return col?.frozen || this.selectedColumnFields.includes(item.value);
        }).length;
    }

    // For column borders
    isLastInGroup(field: string): boolean {
        // Find which group this column belongs to
        const group = this.groupedHeaders.find(g =>
            g.items.some((item: SelectItem) => item.value === field)
        );

        if (!group) return false;

        // Get visible columns in this group
        const visibleInGroup = group.items
            .filter((item: SelectItem) => {
                const col = this.allColumns().find(c => c.field === item.value);
                return col?.frozen ?? this.selectedColumnFields.includes(item.value);
            })
            .map((item: SelectItem) => item.value);

        // Check if this is the last visible column
        const isLast = visibleInGroup[visibleInGroup.length - 1] === field;

        // Don't add border after the very last group
        const isLastGroup = this.groupedHeaders[this.groupedHeaders.length - 1].value === group.value;

        return isLast && !isLastGroup;
    }

    // Table - returns the value of a cell (used by getBooleanIcon)
    getBooleanValue(node: FlattenedTreeNode, col: TableColumn): boolean {
        return node[col.field] as boolean;
    }

    // Table - map status booleans to icons
    getBooleanIcon(value: boolean, field: string): string {
        if (!value) return 'pi pi-minus text-gray-400';

        const trueIcons: Record<string, string> = {
            inScope: 'pi pi-check text-green-500',
            isNew: 'pi pi-plus text-blue-500',
            isMoved: 'pi pi-arrow-right text-orange-500',
            isROT: 'pi pi-trash text-red-500',
            isArchived: 'pi pi-exclamation-triangle text-orange-500',
            noindex: 'pi pi-android text-orange-500',
            isOrphan: 'pi pi-times text-red-500',
            linksToPortal: 'pi pi-external-link text-blue-500',
            hasChatbot: 'pi pi-comments text-blue-500',
        };

        return trueIcons[field] ?? 'pi pi-check text-green-500';
    }

    getBooleanTooltip(value: boolean, field: string): string {
        return `inventory.tooltip.boolean.${field}.${value}`;
    }

    isKnownNumber = isKnownNumber

    /**********************************************************
    *                                                         *
    *    END OF TABLE DATA                                    *
    *    table, headers, boolean icons                        *
    *                                                         *
    **********************************************************/

    /**********************************************************
    *                                                         *
    *    START OF VIEW SETTINGS                               *
    *    columns, sort, filter, ex/hide                       *
    *                                                         *
    **********************************************************/

    // 1. Visible column dropdowns

    // All column groups
    get columnGroups() {
        const groups = [...COLUMN_GROUPS];
        if (this.translate.currentLang.startsWith('fr')) {
            [groups[0], groups[1]] = [groups[1], groups[0]];
        }
        return groups;
    }

    // Multiselect - visible groups
    get groups() {
        return this.columnGroups.map(groupKey => ({
            label: this.translate.instant(`inventory.columnGroups.${groupKey}`),
            value: groupKey,
        }));
    }

    // Multiselect - visible columns
    get groupedColumns() {
        const allGroups = this.columnGroups;
        const groups = allGroups.filter(g => this.selectedGroups.includes(g));

        return groups.map(groupKey => ({
            label: this.translate.instant(`inventory.columnGroups.${groupKey}`),
            value: groupKey,
            items: this.allColumns()
                .filter(col => col.group === groupKey && !col.frozen) // exclude frozen from selection (frozen = always visible)
                .map(col => ({
                    label: col.label,
                    value: col.field
                }))
        }));
    }

    // Multiselect - selection change handler
    onColumnSelectionChange() {
        this.updateVisibleColumns();
        this.saveColumnVisibility();
        this.syncSelectedGroups();
    }

    // Select Button - selection change handler
    onGroupSelectionChange() {
        this.selectedColumnFields = this.allColumns()
            .filter(col => !col.frozen && this.selectedGroups.includes(col.group))
            .map(col => col.field);
        this.updateVisibleColumns();
        this.saveColumnVisibility();
    }

    // Local storage, multiselect & select button - sync column visibility settings to groups (for select button)
    private syncSelectedGroups() {
        const groupMembers = new Map<string, string[]>();
        this.allColumns()
            .filter(col => !col.frozen)
            .forEach(col => {
                if (!groupMembers.has(col.group)) {
                    groupMembers.set(col.group, []);
                }
                groupMembers.get(col.group)!.push(col.field);
            });

        //Fully selected groups
        this.selectedGroups = Array.from(groupMembers.entries())
            .filter(([, fields]) => {
                const hasAnySelected = fields.some(field =>
                    this.selectedColumnFields.includes(field)
                );
                return hasAnySelected;
            })
            .map(([group]) => group);
    }

    // Local storage - save column visibility settings
    private saveColumnVisibility() {
        localStorage.setItem(this.COLUMN_KEY, JSON.stringify(this.selectedColumnFields));
        localStorage.setItem(this.GROUP_KEY, JSON.stringify(this.selectedGroups));
    }

    // All table columns
    allColumns = computed(() => this.projectState.treeTableColumns());

    // Visible table columns
    frozenColumns = signal<TableColumn[]>([]);
    scrollableColumns = signal<TableColumn[]>([]);

    // Update visible columns & check if any data should autoexpand
    private updateVisibleColumns() {
        this.frozenColumns.set(this.allColumns().filter(col => col.frozen));
        this.scrollableColumns.set(this.allColumns().filter(col => !col.frozen && this.selectedColumnFields.includes(col.field)));
        this.checkAutoExpand();
        //this.checkAutoExpandMetadata();
        //this.checkAutoExpandTasks();
        //this.checkAutoExpandNotes();
    }

    // 2. Visible column buttons

    //Default view
    viewDefault() {
        localStorage.removeItem('inventoryColumnVisibility');
        localStorage.removeItem('inventoryGroupVisibility');
        // Reset to defaults
        this.selectedColumnFields = this.allColumns()
            .filter(col => col.visibleByDefault && !col.frozen)
            .map(col => col.field);
        this.syncSelectedGroups();
        this.updateVisibleColumns();
    }

    //Metadata view
    viewMetadata() {
        localStorage.removeItem('inventoryColumnVisibility');
        localStorage.removeItem('inventoryGroupVisibility');
        this.selectedColumnFields = this.allColumns()
            .filter(col => col.group === 'metadata')
            .map(col => col.field);
        this.syncSelectedGroups();
        this.updateVisibleColumns();
    }

    // 3. Sort
    sortField = signal<string | null>(null);
    sortOrder = signal<number>(1); // 1 = ascending, -1 = descending
    lastSortField: string | null = null;
    lastSortOrder: number | null = null;

    // Sort table
    customSort(event: SortEvent): void {
        if (event.field === this.lastSortField && event.order === 1 && this.lastSortOrder === -1) {
            this.sortField.set(null);
            this.sortOrder.set(1);
            this.lastSortField = null;
            this.lastSortOrder = null;
            this.dt.reset();
        } else {
            this.sortField.set(event.field ?? null);
            this.sortOrder.set(event.order ?? 1);
            this.lastSortField = event.field ?? null;
            this.lastSortOrder = event.order ?? null;
        }
    }

    // 4. Filter
    fieldFilters = FIELD_FILTERS;

    columnFilters = signal<Record<string, boolean>>({
        inScope: true,  // Default filter applied
        anyUnusual: false
    });

    resetFilters(): void {
        this.columnFilters.set({
            inScope: true  // Reset to default state
        });
    }

    hasActiveFilters(): boolean {
        const filters = this.columnFilters();
        const activeFilterCount = Object.values(filters).filter(v => v === true).length;
        return activeFilterCount > 1 || !filters['inScope']; // Checks for filters other than inScope
    }

    // Track which boolean columns are filtered
    isColumnFiltered(field: string): boolean {
        return this.columnFilters()[field] || false;
    }

    toggleColumnFilter(field: string): void {
        this.columnFilters.update(current => ({
            ...current,
            [field]: !current[field]
        }));
    }

    toggleFlaggedFilter(): void {
        this.columnFilters.set({
            inScope: this.columnFilters()['anyUnusual'],
            anyUnusual: !this.columnFilters()['anyUnusual']
        });
    }

    toggleInScopeFilter(): void {
        this.columnFilters.set({
            inScope: !this.columnFilters()['inScope'],
            anyUnusual: false
        });
    }

    // 5. Ex/Hides
    // Expand-all state per group
    expandAll: Record<string, boolean> = { metadata: false, notes: false, task: false, phoneNumbers: false, enVanity: false, frVanity: false };

    // Individual cell expansion per group  
    expandedCells: Record<string, Set<string>> = { metadata: new Set(), notes: new Set(), task: new Set(), phoneNumbers: new Set(), enVanity: new Set(), frVanity: new Set() };

    // Auto-expand when group is the only visible one
    private checkAutoExpand() {
        const selectedGroups = new Set(this.scrollableColumns().map(col => col.group));
        const selectedFields = new Set(this.scrollableColumns().map(col => col.field));
        for (const key of Object.keys(this.expandAll)) {
            this.expandAll[key] = selectedGroups.size === 1 && (selectedGroups.has(key as ColumnGroups) || selectedFields.has(key as keyof FlattenedTreeNode));
        }
    }

    // Check if a cell is expanded
    isCellExpanded(key: string, rowIndex: number, field: string): boolean {
        return this.expandAll[key] || this.expandedCells[key]?.has(`${rowIndex}-${field}`);
    }

    // Toggle individual cell
    toggleCell(key: string, rowIndex: number, field: string) {
        const cellKey = `${rowIndex}-${field}`;
        const set = this.expandedCells[key];
        if (set.has(cellKey)) { set.delete(cellKey); } else { set.add(cellKey); }
    }

    // Toggle expand all for a group
    toggleExpandAll(key: string) {
        this.expandAll[key] = !this.expandAll[key];
        if (this.expandAll[key]) this.expandedCells[key]?.clear();
    }

    // Check if a group or field has visible columns
    hasVisible(key: string, byField = false): boolean {
        return this.scrollableColumns().some(col => byField ? col.field === key : col.group === key);
    }

    /**********************************************************
    *                                                         *
    *    END OF VIEW SETTINGS                                 *
    *    columns, sort, filter, ex/hide                       *
    *                                                         *
    **********************************************************/

    /**********************************************************
    *                                                         *
    *    START OF FUNCTIONS                                   *
    *    refresh, generate metadata, edit                     *
    *                                                         *
    **********************************************************/

    // 1. Refresh (prototype or live data)
    async refreshData(version: 'live' | 'prototype') {
        if (!this.selectedNodes.length) return;
        for (const node of this.selectedNodes) {
            const treeNode = this.projectState.findNodeByPath(this.projectState.getProjectTree(), node.enPath, "en");
            if (treeNode) this.projectState.refreshNode(treeNode, version)
        }
    }

    // 2. AI metadata generation
    async generateMetadata(mode: "live" | "prototype" = "live") {
        if (!this.selectedNodes.length) return;

        for (const node of this.selectedNodes) {
            // Set URLs to fetch
            const enUrl = this.fetchService.generateUrl(node.enPath, mode, this.github.owner, this.github.repo)
            const frUrl = this.fetchService.generateUrl(node.frPath, mode, this.github.owner, this.github.repo)

            if (!enUrl && !frUrl) {
                console.warn(`Skipping ${enUrl} — missing EN & FR URLs`);
                continue;
            }

            // Fetch main content
            let enMain: string | null = null;
            let frMain: string | null = null;
            try {
                if (enUrl) {
                    const enDoc = await this.fetchService.fetchContent(enUrl, 'prod', 3, 'none', true);
                    enMain = enDoc.querySelector('main')?.innerHTML ?? enDoc.body.innerHTML;
                }
                if (frUrl) {
                    const frDoc = await this.fetchService.fetchContent(frUrl, 'prod', 3, 'none', true);
                    frMain = frDoc.querySelector('main')?.innerHTML ?? frDoc.body.innerHTML;
                }
            } catch (error) {
                console.warn(`Skipping ${enUrl} — fetch failed`, error);
                continue;
            }

            // Build context for the AI
            const context = {
                en: {
                    url: enUrl,
                    existingDescription: node.descriptionEN,
                    existingKeywords: node.keywordsEN,
                    content: enMain,
                },
                fr: {
                    url: frUrl,
                    existingDescription: node.descriptionFR,
                    existingKeywords: node.keywordsFR,
                    content: frMain,
                }
            };

            // Call OpenRouter
            let response: string;
            try {
                response = await this.openRouterService.getTextFromAI(
                    InventoryPrompts[InventoryPromptKey.Metadata],
                    JSON.stringify(context)
                );
            } catch (error) {
                console.warn(`Skipping ${enUrl} — AI call failed`, error);
                continue;
            }

            // Parse and merge into tree
            const url = this.lang === 'fr' ? frUrl : enUrl;
            try {
                const parsed = JSON.parse(response);
                this.projectState.setMetadataReview(url, {
                    generatedAt: new Date(),
                    model: this.openRouterService.state().respondingModel ?? 'unknown',
                    en: {
                        description: { ai: parsed.en.description, status: 'pending' },
                        keywords: { ai: parsed.en.keywords, status: 'pending' },
                    },
                    fr: {
                        description: { ai: parsed.fr.description, status: 'pending' },
                        keywords: { ai: parsed.fr.keywords, status: 'pending' },
                    },
                }, InventoryPrompts[InventoryPromptKey.Metadata]);
            } catch (error) {
                console.warn(`Skipping ${url} — could not parse AI response`, error);
                continue;
            }

        }
    }

    /**********************************************************
    *                                                         *
    *    END OF FUNCTIONS                                   *
    *    refresh, delete, edit, save                          *
    *                                                         *
    **********************************************************/

    /**********************************************************
     *                                                        *
     *    START OF MENU & POPUP OPTIONS                       *
     *    p-menu, p-contextMenu, p-dialog, p-confirmDialog    *
     *                                                        *
     **********************************************************/

    // 1. Dropdown menus (p-menu)
    itemsDropdown: MenuItem[] = [];
    updateDropdown(mode: "actions" | "view" | "newTab", path?: string) {
        switch (mode) {
            case 'actions': {
                const numPages = this.selectedNodes.length;
                const numChildPages = this.projectState.checkDeletionImpact(this.selectedNodes).length;
                this.itemsDropdown = [
                    {
                        label: this.translate.instant('common.refresh'),
                        styleClass: 'text-primary-500',
                        items: [
                            {
                                label: this.translate.instant('inventory.menu.refresh.prototype', { pageCount: numPages }),
                                icon: 'pi pi-refresh',
                                disabled: numPages === 0,
                                command: () => {
                                    this.refreshData('prototype')
                                }
                            },
                            {
                                label: this.translate.instant('inventory.menu.refresh.live', { pageCount: numPages }),
                                icon: 'pi pi-refresh',
                                disabled: numPages === 0,
                                command: () => {
                                    this.refreshData('live')
                                }
                            },
                        ]
                    },
                    {
                        label: this.translate.instant('inventory.menu.metadata'),
                        styleClass: 'text-primary-500',
                        items: [
                            {
                                label: this.translate.instant('inventory.menu.metadata.generate', { pageCount: numPages }),
                                icon: 'pi pi-sparkles',
                                disabled: numPages === 0,
                                command: () => {
                                    this.generateMetadata()
                                }
                            },
                        ]
                    },
                    {
                        label: this.translate.instant('inventory.menu.delete'),
                        styleClass: 'text-red-500',
                        items: [
                            {
                                label: this.translate.instant('inventory.menu.delete.selected', { pageCount: numPages, childCount: numChildPages }),
                                icon: 'pi pi-trash text-red-500',
                                disabled: numPages === 0,
                                command: () => {
                                    this.onDeleteSelected()
                                }
                            },
                        ]
                    },
                ];
                return;
            }
            case 'view': {
                this.itemsDropdown = [
                    {
                        label: this.translate.instant('common.filters'),
                        items: [
                            {
                                label: this.columnFilters()['anyUnusual']
                                    ? this.translate.instant('inventory.menu.status.filter.remove')
                                    : this.translate.instant('inventory.menu.status.filter.add'),
                                icon: this.columnFilters()['anyUnusual']
                                    ? 'pi pi-filter'
                                    : 'pi pi-filter-slash',
                                command: () => {
                                    this.toggleFlaggedFilter();
                                }
                            },
                            {
                                label: this.columnFilters()['inScope']
                                    ? this.translate.instant('inventory.menu.inscope.filter.remove')
                                    : this.translate.instant('inventory.menu.inscope.filter.add'),
                                icon: this.columnFilters()['inScope']
                                    ? 'pi pi-filter'
                                    : 'pi pi-filter-slash',
                                command: () => {
                                    this.toggleInScopeFilter();
                                }
                            },
                        ]
                    },
                    {
                        label: this.translate.instant('common.expandCollapse'),
                        items: [
                            {
                                label: this.expandAll['metadata']
                                    ? this.translate.instant('inventory.menu.metadata.collapseAll')
                                    : this.translate.instant('inventory.menu.metadata.expandAll'),
                                icon: this.expandAll['metadata'] ? 'pi pi-minus' : 'pi pi-plus',
                                command: () => {
                                    this.toggleExpandAll('metadata')
                                },
                                disabled: !this.hasVisible('metadata')
                            },
                            {
                                label: this.expandAll['task']
                                    ? this.translate.instant('inventory.menu.tasks.collapseAll')
                                    : this.translate.instant('inventory.menu.tasks.expandAll'),
                                icon: this.expandAll['task'] ? 'pi pi-minus' : 'pi pi-plus',
                                command: () => {
                                    this.toggleExpandAll('task')
                                },
                                disabled: !this.hasVisible('task', true)
                            },
                            {
                                label: this.expandAll['notes']
                                    ? this.translate.instant('inventory.menu.notes.collapseAll')
                                    : this.translate.instant('inventory.menu.notes.expandAll'),
                                icon: this.expandAll['notes'] ? 'pi pi-minus' : 'pi pi-plus',
                                command: () => {
                                    this.toggleExpandAll('notes')
                                },
                                disabled: !this.hasVisible('notes')
                            },
                            {
                                label: this.expandAll['phoneNumbers']
                                    ? this.translate.instant('inventory.menu.phoneNumbers.collapseAll')
                                    : this.translate.instant('inventory.menu.phoneNumbers.expandAll'),
                                icon: this.expandAll['phoneNumbers'] ? 'pi pi-minus' : 'pi pi-plus',
                                command: () => {
                                    this.toggleExpandAll('phoneNumbers')
                                },
                                disabled: !this.hasVisible('phoneNumbers', true)
                            },
                            {
                                label: this.expandAll['enVanity'] || this.expandAll['frVanity']
                                    ? this.translate.instant('inventory.menu.vanities.collapseAll')
                                    : this.translate.instant('inventory.menu.vanities.expandAll'),
                                icon: this.expandAll['enVanity'] || this.expandAll['frVanity'] ? 'pi pi-minus' : 'pi pi-plus',
                                command: () => {
                                    this.toggleExpandAll('enVanity');
                                    this.toggleExpandAll('frVanity');
                                },
                                disabled: !this.hasVisible('enVanity', true) && !this.hasVisible('frVanity', true)
                            },
                        ]
                    },
                ];
                return;
            }
            case 'newTab': {
                if (path) {
                    const liveUrl = this.fetchService.generateUrl(path, "live");
                    const previewUrl = this.fetchService.generateUrl(path, "preview");
                    const prototypeUrl = this.fetchService.generateUrl(path, "prototype", this.github.owner, this.github.repo);
                    const baselineUrl = this.fetchService.generateUrl(path, "baseline", this.github.owner, this.github.repo);
                    this.itemsDropdown = [
                        {
                            label: this.translate.instant('common.openNewTab'),
                            items: [
                                {
                                    label: this.translate.instant('inventory.menu.newTab.liveUrl'),
                                    icon: 'pi pi-external-link',
                                    command: () => { window.open(liveUrl, '_blank'); }
                                },
                                {
                                    label: this.translate.instant('inventory.menu.newTab.previewUrl'),
                                    icon: 'pi pi-external-link',
                                    command: () => { window.open(previewUrl, '_blank'); }
                                },
                                {
                                    label: this.translate.instant('inventory.menu.newTab.prototypeUrl'),
                                    icon: 'pi pi-external-link',
                                    command: () => { window.open(prototypeUrl, '_blank'); }
                                },
                                {
                                    label: this.translate.instant('inventory.menu.newTab.baselineUrl'),
                                    icon: 'pi pi-external-link',
                                    command: () => { window.open(baselineUrl, '_blank'); }
                                },
                            ]
                        },
                    ];
                }
                return;
            }
        }

    }

    // 2. Context menus (for flipping booleans)
    @ViewChild('menuContext') menuContext!: ContextMenu;
    itemsContext: MenuItem[] = [];

    hasContextMenu(group: string, type: string): boolean {
        return ['status'].includes(group) || ['template', 'aiText', 'textArea'].includes(type);
    }

    private currentEditNode: FlattenedTreeNode | undefined;
    private currentEditCol: TableColumn | undefined;
    private touchTimer: ReturnType<typeof setTimeout> | null = null;

    onTouchStart(event: TouchEvent, node: FlattenedTreeNode, col: TableColumn) {
        this.touchTimer = setTimeout(() => {
            this.onRightClick(event, node, col);
        }, 500); // 500ms long press
    }

    onTouchEnd() {
        if (this.touchTimer) {
            clearTimeout(this.touchTimer);
            this.touchTimer = null;
        }
    }

    // End editing when clicking outside of cell
    onLeftClick(node: FlattenedTreeNode, col: TableColumn) {
        if (node !== this.currentEditNode) { this.currentEditNode = undefined; }
        if (col !== this.currentEditCol) { this.currentEditCol = undefined; }
    }

    onRightClick(event: MouseEvent | TouchEvent, node: FlattenedTreeNode, col: TableColumn) {
        event.preventDefault();
        this.isEditing = false;
        this.currentEditNode = node;
        this.currentEditCol = col;

        if (!this.currentEditNode || !this.currentEditCol) return;

        switch (col.type) {
            case 'boolean':
                this.updateBoolean(event, node, col);
                break;
            case 'template':
                this.isEditingInline(node, col);
                break;
            case 'textArea':
                this.isEditingInline(node, col);
                break;
            case 'aiText':
                this.updateAItext(event, node, col);
                break;
            default:
                return;
        }
    }

    updateBoolean(event: MouseEvent | TouchEvent, node: FlattenedTreeNode, col: TableColumn) {
        const currentValue = this.getBooleanValue(node, col);

        this.itemsContext = [];

        if (currentValue !== true) {
            this.itemsContext.push({
                label: this.translate.instant(`inventory.contextMenu.${col.field}.true`),
                icon: this.getBooleanIcon(true, col.field),
                command: () => this.saveValue(true)
            });
        }

        if (currentValue !== false) {
            this.itemsContext.push({
                label: this.translate.instant(`inventory.contextMenu.${col.field}.false`),
                icon: this.getBooleanIcon(false, col.field),
                command: () => this.saveValue(false)
            });
        }

        this.menuContext.show(event);
    }

    saveValue(newValue: boolean | string) {
        if (this.currentEditNode && this.currentEditCol?.dataSection) {
            const section = this.currentEditCol.dataSection.replace("lang", this.lang);
            const path = this.lang === 'fr' ? this.currentEditNode['frPath'] : this.currentEditNode['enPath']
            const node = this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, this.lang);
            const currentValue = node?.data[section];
            if (node && (this.currentEditCol.dataSection).match("lang")) {
                const enSection = section.replace("lang", "en");
                const frSection = section.replace("lang", "fr");
                node.data[enSection] ??= {};
                node.data[frSection] ??= {};
                node.data[enSection] = newValue;
                node.data[frSection] = newValue;
                this.projectState.setModifiedDate();
            }
            if (node && currentValue !== newValue) {
                node.data[section] ??= {};
                node.data[section] = newValue;
                this.projectState.setModifiedDate();
            }
        }
    }

    // Edit metadata (context menu)
    isEditing = false

    isEditingMetadata(node: FlattenedTreeNode, col: TableColumn, editing = false) {
        return this.currentEditNode === node && this.currentEditCol === col && editing === true;
    }

    updateMetadata(node: FlattenedTreeNode, col: TableColumn) {
        const compareCol = col.field.slice(2).replace(/^./, c => c.toLowerCase());
        const compareValue = (node as unknown as Record<string, unknown>)[compareCol] as string;
        if ((node[col.field] as MetadataField).edited === compareValue) { this.setStatus(node, col, "noChange") }
        else if ((node[col.field] as MetadataField).edited !== (node[col.field] as MetadataField).ai) { this.setStatus(node, col, "edited") }
        else if ((node[col.field] as MetadataField).edited === (node[col.field] as MetadataField).ai) { this.setStatus(node, col, "pending") }
    }

    onPasteMetadata(node: FlattenedTreeNode, col: TableColumn) {
        setTimeout(() => this.updateMetadata(node, col), 0);
    }

    onBlurMetadata() {
        this.isEditing = false;
    }

    // 3. Edit status
    setStatus(node: FlattenedTreeNode, col: TableColumn, status: MetadataReviewStatus) {
        //Update FlattenedTreeNode
        (node[col.field] as MetadataField).status = status;

        //Update TreeNode
        if (!node['aiGeneratedAt'] || !node['aiModel'] || !node['aiDescriptionEN'] || !node['aiKeywordsEN'] || !node['aiDescriptionFR'] || !node['aiKeywordsFR']) return;
        const path = this.lang === 'fr' ? node['frPath'] : node['enPath']
        const review: MetadataReview = {
            generatedAt: node['aiGeneratedAt'],
            model: node['aiModel'],
            en: {
                description: node['aiDescriptionEN'],
                keywords: node['aiKeywordsEN'],
            },
            fr: {
                description: node['aiDescriptionFR'],
                keywords: node['aiKeywordsFR'],
            }
        };
        this.projectState.setMetadataReview(path, review);
    }

    // 4. Edit template
    isEditingInline(node: FlattenedTreeNode, col: TableColumn) {
        return this.currentEditNode === node && this.currentEditCol === col;
    }

    get templateOptions() {
        return Object.values(PageTemplate)
            .map(key => ({
                value: key,
                label: this.translate.instant(key)
            }))
            .sort((a, b) => a.label.localeCompare(b.label, this.translate.currentLang));
    }

    onTemplateSelect(event: SelectChangeEvent, node: FlattenedTreeNode, col: TableColumn) {
        const path = this.lang === 'fr' ? node['frPath'] : node['enPath'];
        const treeNode = this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, this.lang);
        const newValue = node[col.field] as string;
        const currentValue = treeNode?.data[col.dataSection];
        if (treeNode && currentValue !== newValue) {
            treeNode.data[col.dataSection][col.field] = newValue;
            this.projectState.setModifiedDate();
        }
    }

    // 3. Dialog popup (edit node)
    get currentLang() { return this.translate.currentLang.startsWith('fr') ? 'fr' : 'en' }
    editNode = false;
    selectedNode: TreeNode = {};
    edit(node: FlattenedTreeNode) {
        const path = this.lang === 'fr' ? node.frPath : node.enPath;
        this.selectedNode = this.projectState.findNodeByPath(this.projectState.getProjectTree(), path, this.lang) ?? {};
        this.editNode = true;
    }

    // 4. Confirmation dialogs (deletions)
    onDeleteSelected() {
        if (!this.selectedNodes.length) return;
        const additionalDeletions = this.projectState.checkDeletionImpact(this.selectedNodes);
        if (additionalDeletions.length > 0) {
            this.showDeletionConfirmation(this.selectedNodes.length, additionalDeletions);
        } else {
            this.confirmationService.confirm({
                key: 'inventory',
                message: this.translate.instant('inventory.delete.confirmMessage', { count: this.selectedNodes.length }),
                header: this.translate.instant('inventory.delete._title'),
                icon: 'pi pi-exclamation-circle',
                acceptIcon: 'pi pi-trash',
                acceptLabel: this.translate.instant('common.delete'),
                rejectLabel: this.translate.instant('common.cancel'),
                acceptButtonStyleClass: 'p-button-danger',
                rejectButtonStyleClass: 'p-button-secondary',
                accept: () => {
                    this.projectState.deleteNodes(this.selectedNodes, true);
                    this.selectedNodes = [];
                }
            });
        }
    }

    private showDeletionConfirmation(deleteCount: number, additionalPages: { url: string, h1: string, inScope: boolean }[]) {
        const inScopeCount = additionalPages.filter(p => p.inScope).length;
        const inScopeList = additionalPages
            .filter(p => p.inScope)
            .map(p => `${p.h1}`)
            .join('<br>');
        const baselineCount = additionalPages.filter(p => !p.inScope).length;
        const baselineList = additionalPages
            .filter(p => !p.inScope)
            .map(p => `${p.h1}`)
            .join('<br>');
        const childWarning = this.translate.instant('inventory.delete.childPagesWarning', {
            deleteCount,
            childCount: additionalPages.length
        });

        let message = `<p class="mt-0">${childWarning}</p>`;

        if (inScopeCount > 0) {
            const inScopeWarning = this.translate.instant('inventory.delete.inScopeWarning', { count: inScopeCount });
            const inScopeHeading = this.translate.instant('inventory.delete.inScopeHeading');
            message += `
            <p>${inScopeWarning}</p>
            <h2>${inScopeHeading}</h2>
            <p>${inScopeList}</p>
        `;
        }

        if (baselineCount > 0) {
            const baselineHeading = this.translate.instant('inventory.delete.baselineHeading');
            message += `
            <h2>${baselineHeading}</h2>
            <p>${baselineList}</p>
        `;
        }

        message = message.trim();

        this.confirmationService.confirm({
            key: 'inventory',
            message,
            header: this.translate.instant('inventory.delete._title'),
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-trash',
            acceptLabel: this.translate.instant('common.delete'),
            rejectLabel: this.translate.instant('common.cancel'),
            acceptButtonStyleClass: 'p-button-danger',
            rejectButtonStyleClass: 'p-button-secondary',
            accept: () => {
                this.projectState.deleteNodes(this.selectedNodes, true);
                this.selectedNodes = []; // Clear selection after delete
            }
        });
    }

    // 5. Open in UPD
    openInUPD(node: FlattenedTreeNode): void {
        const updLink = this.fetchService.generateUrl(this.lang === 'fr' ? node.frPath : node.enPath, "upd")
        window.open(updLink, '_blank');
    }

    // 6. Metadata context menu
    updateAItext(event: MouseEvent | TouchEvent, node: FlattenedTreeNode, col: TableColumn) {
        const currentField = node[col.field] as MetadataField;
        if (!currentField) return;
        const status = currentField.status
        const ai = currentField.ai
        const edited = currentField.edited

        this.itemsContext = [
            {
                label: this.translate.instant(`common.edit`),
                icon: 'pi pi-pencil text-primary',
                command: () => { this.isEditing = true; this.isEditingMetadata(node, col, this.isEditing); if (!edited) { (node[col.field] as MetadataField).edited = ai } },
            }
        ];

        if (status !== 'noChange') {
            this.itemsContext.push({
                label: this.translate.instant(`common.accept`),
                icon: 'pi pi-check text-green-500',
                command: () => status === 'edited' ? this.setStatus(node, col, 'approvedEdits') : this.setStatus(node, col, 'approvedAI'),
            })
            this.itemsContext.push({
                label: this.translate.instant(`common.reject`),
                icon: 'pi pi-trash text-red-500',
                command: () => this.setStatus(node, col, 'rejected'),
            })
        }

        if (status !== 'pending') {
            this.itemsContext.push({
                label: this.translate.instant(`common.undo`),
                icon: 'pi pi-undo',
                command: () => this.setStatus(node, col, 'pending'),
            });
        }

        this.menuContext.show(event);
    }

    /*********************************************************
    *                                                        *
    *    END OF MENU & POPUP OPTIONS                         *
    *    p-menu, p-contextMenu, p-dialog, p-confirmDialog    *
    *                                                        *
    *********************************************************/

    private markForTranslation() {
        //Grouped headings
        marker('inventory.columnGroups.english');
        marker('inventory.columnGroups.french');
        marker('inventory.columnGroups.status');
        marker('inventory.columnGroups.actions');
        marker('inventory.columnGroups.notes');
        marker('inventory.columnGroups.problems');
        marker('inventory.columnGroups.pageData');
        marker('inventory.columnGroups.owner');
        marker('inventory.columnGroups.metadata');
        //TODO: Refactor so these don't need to be here
        marker('inventory.view.table');
        marker('inventory.view.tree');
        marker('inventory.tooltip.boolean.inScope.true');
        marker('inventory.tooltip.boolean.inScope.false');
        marker('inventory.tooltip.boolean.isOrphan.true');
        marker('inventory.tooltip.boolean.isOrphan.false');
        marker('inventory.tooltip.boolean.isNew.true');
        marker('inventory.tooltip.boolean.isNew.false');
        marker('inventory.tooltip.boolean.isMoved.true');
        marker('inventory.tooltip.boolean.isMoved.false');
        marker('inventory.tooltip.boolean.isROT.true');
        marker('inventory.tooltip.boolean.isROT.false');
        marker('inventory.tooltip.boolean.linksToPortal.true');
        marker('inventory.tooltip.boolean.linksToPortal.false');
        marker('inventory.tooltip.archive.current');
        marker('inventory.tooltip.archive.to-archive');
        marker('inventory.tooltip.archive.archived');
        marker('inventory.tooltip.archive.unarchive');
        marker('inventory.tooltip.noindex.none');
        marker('inventory.tooltip.noindex.en-only');
        marker('inventory.tooltip.noindex.fr-only');
        marker('inventory.tooltip.noindex.both');
        marker('inventory.tooltip.noindex.to-reindex');
        marker('inventory.tooltip.noindex.to-deindex');
        //Booleans
        marker('inventory.contextMenu.inScope.true');
        marker('inventory.contextMenu.inScope.false');
        marker('inventory.contextMenu.isNew.true');
        marker('inventory.contextMenu.isNew.false');
        marker('inventory.contextMenu.isMoved.true');
        marker('inventory.contextMenu.isMoved.false');
        marker('inventory.contextMenu.isROT.true');
        marker('inventory.contextMenu.isROT.false');
        marker('inventory.contextMenu.linksToPortal.true');
        marker('inventory.contextMenu.linksToPortal.false');
        marker('inventory.contextMenu.isOrphan.true');
        marker('inventory.contextMenu.isOrphan.false');
        marker('inventory.contextMenu.isArchived.true');
        marker('inventory.contextMenu.isArchived.false');
        marker('inventory.contextMenu.noindex.true');
        marker('inventory.contextMenu.noindex.false');
        //Common text       
        marker('common.pending');
        marker('common.edited');
        marker('common.approved');
        marker('common.complete');
        marker('common.error');
        marker('common.yes');
    }

}