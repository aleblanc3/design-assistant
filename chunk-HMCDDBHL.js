import {
  SaveButtonComponent
} from "./chunk-U4QMJZ2H.js";
import {
  Menu,
  MenuModule
} from "./chunk-2TAUS52W.js";
import {
  AddUrlsService,
  TreeNodeStyleService
} from "./chunk-5IF5B4GD.js";
import {
  EditNodeComponent
} from "./chunk-LJSDRI7U.js";
import "./chunk-252626R6.js";
import "./chunk-KGAQLXO4.js";
import "./chunk-VDGWUB54.js";
import {
  IaDiagramService
} from "./chunk-7WYF77OF.js";
import "./chunk-P6AHYBO2.js";
import {
  AddPagesLinkComponent
} from "./chunk-EK5ZHEPL.js";
import {
  ProjectSettingsComponent
} from "./chunk-TCDRCBMB.js";
import {
  Dialog,
  DialogModule
} from "./chunk-B7UQRAZM.js";
import "./chunk-L3YRAVQQ.js";
import "./chunk-LDQ2EBYC.js";
import {
  ChevronUpIcon,
  ProjectCacheService
} from "./chunk-HR4YR3UR.js";
import "./chunk-4HPV3GUF.js";
import {
  ProjectStateService
} from "./chunk-2XIXW3TN.js";
import "./chunk-Z6M6OINJ.js";
import "./chunk-WDIDPUKP.js";
import "./chunk-POEP37ML.js";
import "./chunk-NTW7IUNV.js";
import {
  FetchService
} from "./chunk-JQTGLD45.js";
import "./chunk-4Y476ECU.js";
import {
  BaseComponent,
  Bind,
  BindModule,
  Button,
  ButtonModule,
  ChevronDownIcon,
  FormsModule,
  PARENT_INSTANCE,
  Tooltip,
  TooltipModule
} from "./chunk-MJIYSJ7V.js";
import "./chunk-DMOF7S63.js";
import {
  BaseStyle,
  PrimeTemplate,
  SharedModule,
  tt
} from "./chunk-T4NCAOXG.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-TULSGE2I.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Subject,
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-LBDVV6V6.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// node_modules/@primeuix/styles/dist/organizationchart/index.mjs
var style = "\n    .p-organizationchart-table {\n        border-spacing: 0;\n        border-collapse: separate;\n        margin: 0 auto;\n    }\n\n    .p-organizationchart-table > tbody > tr > td {\n        text-align: center;\n        vertical-align: top;\n        padding: 0 dt('organizationchart.gutter');\n    }\n\n    .p-organizationchart-node {\n        display: inline-block;\n        position: relative;\n        border: 1px solid dt('organizationchart.node.border.color');\n        background: dt('organizationchart.node.background');\n        color: dt('organizationchart.node.color');\n        padding: dt('organizationchart.node.padding');\n        border-radius: dt('organizationchart.node.border.radius');\n        transition:\n            background dt('organizationchart.transition.duration'),\n            border-color dt('organizationchart.transition.duration'),\n            color dt('organizationchart.transition.duration'),\n            box-shadow dt('organizationchart.transition.duration');\n    }\n\n    .p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {\n        padding: dt('organizationchart.node.toggleable.padding');\n    }\n\n    .p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {\n        background: dt('organizationchart.node.hover.background');\n        color: dt('organizationchart.node.hover.color');\n    }\n\n    .p-organizationchart-node-selected {\n        background: dt('organizationchart.node.selected.background');\n        color: dt('organizationchart.node.selected.color');\n    }\n\n    .p-organizationchart-node-toggle-button {\n        position: absolute;\n        inset-block-end: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));\n        margin-inline-start: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));\n        z-index: 2;\n        inset-inline-start: 50%;\n        user-select: none;\n        cursor: pointer;\n        width: dt('organizationchart.node.toggle.button.size');\n        height: dt('organizationchart.node.toggle.button.size');\n        text-decoration: none;\n        background: dt('organizationchart.node.toggle.button.background');\n        color: dt('organizationchart.node.toggle.button.color');\n        border-radius: dt('organizationchart.node.toggle.button.border.radius');\n        border: 1px solid dt('organizationchart.node.toggle.button.border.color');\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        outline-color: transparent;\n        transition:\n            background dt('organizationchart.transition.duration'),\n            color dt('organizationchart.transition.duration'),\n            border-color dt('organizationchart.transition.duration'),\n            outline-color dt('organizationchart.transition.duration'),\n            box-shadow dt('organizationchart.transition.duration');\n    }\n\n    .p-organizationchart-node-toggle-button:hover {\n        background: dt('organizationchart.node.toggle.button.hover.background');\n        color: dt('organizationchart.node.toggle.button.hover.color');\n    }\n\n    .p-organizationchart-node-toggle-button:focus-visible {\n        box-shadow: dt('organizationchart.node.toggle.button.focus.ring.shadow');\n        outline: dt('organizationchart.node.toggle.button.focus.ring.width') dt('organizationchart.node.toggle.button.focus.ring.style') dt('organizationchart.node.toggle.button.focus.ring.color');\n        outline-offset: dt('organizationchart.node.toggle.button.focus.ring.offset');\n    }\n\n    .p-organizationchart-node-toggle-button-icon {\n        position: relative;\n        inset-block-start: 1px;\n    }\n\n    .p-organizationchart-connector-down {\n        margin: 0 auto;\n        height: dt('organizationchart.connector.height');\n        width: 1px;\n        background: dt('organizationchart.connector.color');\n    }\n\n    .p-organizationchart-connector-right {\n        border-radius: 0;\n    }\n\n    .p-organizationchart-connector-left {\n        border-radius: 0;\n        border-inline-end: 1px solid dt('organizationchart.connector.color');\n    }\n\n    .p-organizationchart-connector-top {\n        border-block-start: 1px solid dt('organizationchart.connector.color');\n    }\n\n    .p-organizationchart-node-selectable {\n        cursor: pointer;\n    }\n\n    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {\n        border-inline-end: 0 none;\n    }\n\n    .p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {\n        border-start-end-radius: dt('organizationchart.connector.border.radius');\n    }\n\n    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {\n        border-inline-start: 1px solid dt('organizationchart.connector.color');\n        border-start-start-radius: dt('organizationchart.connector.border.radius');\n    }\n";

// node_modules/primeng/fesm2022/primeng-organizationchart.mjs
var _c0 = ["pOrganizationChartNode", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
var _c2 = (a0) => ({
  first: a0
});
var _c3 = (a0) => ({
  last: a0
});
function OrganizationChartNode_tbody_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.node.label);
  }
}
function OrganizationChartNode_tbody_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function OrganizationChartNode_tbody_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_div_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chart.getTemplateForNode(ctx_r1.node))("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, ctx_r1.node));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButtonIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButtonIcon"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButtonIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButtonIcon"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 10)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.node.expanded);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_1_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButtonIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButtonIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chart.togglerIconTemplate || ctx_r1.chart._togglerIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c1, ctx_r1.node.expanded));
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.enter", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode($event, ctx_r1.node));
    })("keydown.space", function OrganizationChartNode_tbody_0_ng_container_6_a_1_Template_a_keydown_space_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleNode($event, ctx_r1.node));
    });
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_ng_container_1_Template, 3, 2, "ng-container", 3)(2, OrganizationChartNode_tbody_0_ng_container_6_a_1_span_2_Template, 2, 7, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("nodeToggleButton"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("nodeToggleButton"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chart.togglerIconTemplate && !ctx_r1.chart._togglerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chart.togglerIconTemplate || ctx_r1.chart._togglerIconTemplate);
  }
}
function OrganizationChartNode_tbody_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_6_a_1_Template, 3, 5, "a", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.leaf);
  }
}
function OrganizationChartNode_tbody_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 1);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("lineCell"));
    \u0275\u0275attribute("colspan", ctx_r1.colspan);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectorDown"));
    \u0275\u0275property("pBind", ctx_r1.ptm("connectorDown"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 1);
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td", 1);
    \u0275\u0275text(3, "\xA0");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    const index_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("connectorLeft", \u0275\u0275pureFunction1(6, _c2, first_r4)));
    \u0275\u0275property("pBind", ctx_r1.getNodeOptions(!(index_r6 === 0), "connectorLeft"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("connectorRight", \u0275\u0275pureFunction1(8, _c3, last_r5)));
    \u0275\u0275property("pBind", ctx_r1.getNodeOptions(!(index_r6 === ctx_r1.node.children.length - 1), "connectorRight"));
  }
}
function OrganizationChartNode_tbody_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OrganizationChartNode_tbody_0_ng_container_12_ng_template_1_Template, 4, 10, "ng-template", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.node.children);
  }
}
function OrganizationChartNode_tbody_0_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275element(1, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r1.ptm("nodeCell"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("table"));
    \u0275\u0275property("unstyled", ctx_r1.unstyled())("pt", ctx_r1.pt)("node", child_r7)("collapsible", ctx_r1.node.children && ctx_r1.node.children.length > 0 && ctx_r1.collapsible);
  }
}
function OrganizationChartNode_tbody_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tbody", 1)(1, "tr", 1)(2, "td", 1)(3, "div", 2);
    \u0275\u0275listener("click", function OrganizationChartNode_tbody_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeClick($event, ctx_r1.node));
    });
    \u0275\u0275template(4, OrganizationChartNode_tbody_0_div_4_Template, 2, 1, "div", 3)(5, OrganizationChartNode_tbody_0_div_5_Template, 2, 4, "div", 3)(6, OrganizationChartNode_tbody_0_ng_container_6_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "tr", 4)(8, "td", 1);
    \u0275\u0275element(9, "div", 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tr", 4);
    \u0275\u0275template(11, OrganizationChartNode_tbody_0_ng_container_11_Template, 3, 5, "ng-container", 3)(12, OrganizationChartNode_tbody_0_ng_container_12_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "tr", 4);
    \u0275\u0275template(14, OrganizationChartNode_tbody_0_td_14_Template, 2, 7, "td", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pBind", ctx_r1.ptm("body"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("row"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("cell"));
    \u0275\u0275attribute("colspan", ctx_r1.colspan);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("node"), ctx_r1.node.styleClass));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions("node"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chart.getTemplateForNode(ctx_r1.node));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.collapsible);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectors"));
    \u0275\u0275property("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("pBind", ctx_r1.ptm("connectors"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("lineCell"));
    \u0275\u0275attribute("colspan", ctx_r1.colspan);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectorDown"));
    \u0275\u0275property("pBind", ctx_r1.ptm("connectorDown"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("connectors"));
    \u0275\u0275property("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("pBind", ctx_r1.ptm("connectors"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.children && ctx_r1.node.children.length === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.node.children && ctx_r1.node.children.length > 1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("nodeChildren"));
    \u0275\u0275property("ngStyle", ctx_r1.getChildStyle(ctx_r1.node))("pBind", ctx_r1.ptm("nodeChildren"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.node.children);
  }
}
var _c4 = ["togglericon"];
function OrganizationChart_table_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "table", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("table"));
    \u0275\u0275property("collapsible", ctx_r0.collapsible)("pt", ctx_r0.pt)("unstyled", ctx_r0.unstyled())("node", ctx_r0.root)("pBind", ctx_r0.ptm("table"));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-organizationchart p-component", {
    "p-organizationchart-preservespace": instance.preserveSpace
  }],
  table: "p-organizationchart-table",
  node: ({
    instance
  }) => ["p-organizationchart-node", {
    "p-organizationchart-node": true,
    "p-organizationchart-node-selectable": instance.chart.selectionMode && instance.node.selectable !== false,
    "p-organizationchart-node-selected": instance.isSelected()
  }],
  nodeToggleButton: "p-organizationchart-node-toggle-button",
  nodeToggleButtonIcon: "p-organizationchart-node-toggle-button-icon",
  connectors: "p-organizationchart-connectors",
  connectorDown: "p-organizationchart-connector-down",
  connectorLeft: ({
    first
  }) => ["p-organizationchart-connector-left", {
    "p-organizationchart-connector-top": !first
  }],
  connectorRight: ({
    last
  }) => ["p-organizationchart-connector-right", {
    "p-organizationchart-connector-top": !last
  }],
  nodeChildren: "p-organizationchart-node-children"
};
var OrganizationChartStyle = class _OrganizationChartStyle extends BaseStyle {
  name = "organizationchart";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OrganizationChartStyle_BaseFactory;
    return function OrganizationChartStyle_Factory(__ngFactoryType__) {
      return (\u0275OrganizationChartStyle_BaseFactory || (\u0275OrganizationChartStyle_BaseFactory = \u0275\u0275getInheritedFactory(_OrganizationChartStyle)))(__ngFactoryType__ || _OrganizationChartStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OrganizationChartStyle,
    factory: _OrganizationChartStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartStyle, [{
    type: Injectable
  }], null, null);
})();
var OrganizationChartClasses;
(function(OrganizationChartClasses2) {
  OrganizationChartClasses2["root"] = "p-organizationchart";
  OrganizationChartClasses2["table"] = "p-organizationchart-table";
  OrganizationChartClasses2["node"] = "p-organizationchart-node";
  OrganizationChartClasses2["nodeToggleButton"] = "p-organizationchart-node-toggle-button";
  OrganizationChartClasses2["nodeToggleButtonIcon"] = "p-organizationchart-node-toggle-button-icon";
  OrganizationChartClasses2["connectors"] = "p-organizationchart-connectors";
  OrganizationChartClasses2["connectorDown"] = "p-organizationchart-connector-down";
  OrganizationChartClasses2["connectorLeft"] = "p-organizationchart-connector-left";
  OrganizationChartClasses2["connectorRight"] = "p-organizationchart-connector-right";
  OrganizationChartClasses2["nodeChildren"] = "p-organizationchart-node-children";
})(OrganizationChartClasses || (OrganizationChartClasses = {}));
var ORGANIZATIONCHART_INSTANCE = new InjectionToken("ORGANIZATIONCHART_INSTANCE");
var OrganizationChartNode = class _OrganizationChartNode extends BaseComponent {
  cd;
  node;
  root;
  first;
  last;
  collapsible;
  chart;
  subscription;
  _componentStyle = inject(OrganizationChartStyle);
  constructor(chart, cd) {
    super();
    this.cd = cd;
    this.chart = chart;
    this.subscription = this.chart.selectionSource$.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  get leaf() {
    if (this.node) {
      return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    }
  }
  get colspan() {
    if (this.node) {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    }
  }
  getChildStyle(node) {
    return {
      visibility: !this.leaf && node.expanded ? "inherit" : "hidden"
    };
  }
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        expanded: this.node?.expanded,
        selectable: this.node?.selectable !== false && this.chart.selectionMode,
        selected: this.isSelected(),
        toggleable: this.collapsible && !this.leaf,
        active: this.isSelected()
      }
    });
  }
  getNodeOptions(lineTop, key) {
    return this.ptm(key, {
      context: {
        lineTop
      }
    });
  }
  onNodeClick(event, node) {
    this.chart.onNodeClick(event, node);
  }
  toggleNode(event, node) {
    node.expanded = !node.expanded;
    if (node.expanded) this.chart.onNodeExpand.emit({
      originalEvent: event,
      node: this.node
    });
    else this.chart.onNodeCollapse.emit({
      originalEvent: event,
      node: this.node
    });
    event.preventDefault();
  }
  isSelected() {
    return this.chart.isSelected(this.node);
  }
  onDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function OrganizationChartNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChartNode)(\u0275\u0275directiveInject(forwardRef(() => OrganizationChart)), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OrganizationChartNode,
    selectors: [["", "pOrganizationChartNode", ""]],
    inputs: {
      node: "node",
      root: [2, "root", "root", booleanAttribute],
      first: [2, "first", "first", booleanAttribute],
      last: [2, "last", "last", booleanAttribute],
      collapsible: [2, "collapsible", "collapsible", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([OrganizationChartStyle, {
      provide: PARENT_INSTANCE,
      useExisting: _OrganizationChartNode
    }]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[3, "pBind", 4, "ngIf"], [3, "pBind"], [3, "click", "pBind"], [4, "ngIf"], [3, "ngStyle", "pBind"], ["colspan", "2", 3, "pBind", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 3, "class", "pBind", "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["tabindex", "0", 3, "click", "keydown.enter", "keydown.space", "pBind"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["colspan", "2", 3, "pBind"], ["pOrganizationChartNode", "", 3, "unstyled", "pt", "node", "collapsible"]],
    template: function OrganizationChartNode_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrganizationChartNode_tbody_0_Template, 15, 30, "tbody", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.node);
      }
    },
    dependencies: [_OrganizationChartNode, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartNode, [{
    type: Component,
    args: [{
      selector: "[pOrganizationChartNode]",
      standalone: true,
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule],
      template: `
        <tbody *ngIf="node" [pBind]="ptm('body')">
            <tr [pBind]="ptm('row')">
                <td [attr.colspan]="colspan" [pBind]="ptm('cell')">
                    <div [class]="cn(cx('node'), node.styleClass)" (click)="onNodeClick($event, node)" [pBind]="getPTOptions('node')">
                        <div *ngIf="!chart.getTemplateForNode(node)">{{ node.label }}</div>
                        <div *ngIf="chart.getTemplateForNode(node)">
                            <ng-container *ngTemplateOutlet="chart.getTemplateForNode(node); context: { $implicit: node }"></ng-container>
                        </div>
                        <ng-container *ngIf="collapsible">
                            <a
                                *ngIf="!leaf"
                                tabindex="0"
                                [class]="cx('nodeToggleButton')"
                                (click)="toggleNode($event, node)"
                                (keydown.enter)="toggleNode($event, node)"
                                (keydown.space)="toggleNode($event, node)"
                                [pBind]="getPTOptions('nodeToggleButton')"
                            >
                                <ng-container *ngIf="!chart.togglerIconTemplate && !chart._togglerIconTemplate">
                                    <svg data-p-icon="chevron-down" *ngIf="node.expanded" [class]="cx('nodeToggleButtonIcon')" [pBind]="getPTOptions('nodeToggleButtonIcon')" />
                                    <svg data-p-icon="chevron-up" *ngIf="!node.expanded" [class]="cx('nodeToggleButtonIcon')" [pBind]="getPTOptions('nodeToggleButtonIcon')" />
                                </ng-container>
                                <span [class]="cx('nodeToggleButtonIcon')" *ngIf="chart.togglerIconTemplate || chart._togglerIconTemplate" [pBind]="getPTOptions('nodeToggleButtonIcon')">
                                    <ng-template *ngTemplateOutlet="chart.togglerIconTemplate || chart._togglerIconTemplate; context: { $implicit: node.expanded }"></ng-template>
                                </span>
                            </a>
                        </ng-container>
                    </div>
                </td>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" [class]="cx('connectors')" [pBind]="ptm('connectors')">
                <td [pBind]="ptm('lineCell')" [attr.colspan]="colspan">
                    <div [pBind]="ptm('connectorDown')" [class]="cx('connectorDown')"></div>
                </td>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" [class]="cx('connectors')" [pBind]="ptm('connectors')">
                <ng-container *ngIf="node.children && node.children.length === 1">
                    <td [pBind]="ptm('lineCell')" [attr.colspan]="colspan">
                        <div [pBind]="ptm('connectorDown')" [class]="cx('connectorDown')"></div>
                    </td>
                </ng-container>
                <ng-container *ngIf="node.children && node.children.length > 1">
                    <ng-template ngFor let-child [ngForOf]="node.children" let-first="first" let-last="last" let-index="index">
                        <td [class]="cx('connectorLeft', { first })" [pBind]="getNodeOptions(!(index === 0), 'connectorLeft')">&nbsp;</td>
                        <td [class]="cx('connectorRight', { last })" [pBind]="getNodeOptions(!(index === node.children.length - 1), 'connectorRight')">&nbsp;</td>
                    </ng-template>
                </ng-container>
            </tr>
            <tr [ngStyle]="getChildStyle(node)" [class]="cx('nodeChildren')" [pBind]="ptm('nodeChildren')">
                <td *ngFor="let child of node.children" colspan="2" [pBind]="ptm('nodeCell')">
                    <table [class]="cx('table')" pOrganizationChartNode [unstyled]="unstyled()" [pt]="pt" [node]="child" [collapsible]="node.children && node.children.length > 0 && collapsible"></table>
                </td>
            </tr>
        </tbody>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [OrganizationChartStyle, {
        provide: PARENT_INSTANCE,
        useExisting: OrganizationChartNode
      }]
    }]
  }], () => [{
    type: OrganizationChart,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => OrganizationChart)]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    node: [{
      type: Input
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    first: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    last: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var OrganizationChart = class _OrganizationChart extends BaseComponent {
  el;
  cd;
  componentName = "OrganizationChart";
  /**
   * An array of nested TreeNodes.
   * @group Props
   */
  value;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines the selection mode.
   * @group Props
   */
  selectionMode;
  /**
   * Whether the nodes can be expanded or toggled.
   * @group Props
   */
  collapsible;
  /**
   * Whether the space allocated by a node is preserved when hidden.
   * @deprecated since v20.0.0.
   * @group Props
   */
  preserveSpace = true;
  /**
   * A single treenode instance or an array to refer to the selections.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
    if (this.initialized) this.selectionSource.next(null);
  }
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selected value.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {OrganizationChartNodeSelectEvent} event - custom node select event.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {OrganizationChartNodeUnSelectEvent} event - custom node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {OrganizationChartNodeExpandEvent} event - custom node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {OrganizationChartNodeCollapseEvent} event - custom node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  templates;
  togglerIconTemplate;
  templateMap;
  _togglerIconTemplate;
  selectionSource = new Subject();
  _selection;
  initialized;
  selectionSource$ = this.selectionSource.asObservable();
  _componentStyle = inject(OrganizationChartStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcOrganizationChart = inject(ORGANIZATIONCHART_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  constructor(el, cd) {
    super();
    this.el = el;
    this.cd = cd;
  }
  ngAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  get root() {
    return this.value && this.value.length ? this.value[0] : null;
  }
  onAfterContentInit() {
    if (this.templates.length) {
      this.templateMap = {};
    }
    this.templates.forEach((item) => {
      if (item.getType() === "togglericon") {
        this._togglerIconTemplate = item.template;
      } else {
        this.templateMap[item.getType()] = item.template;
      }
    });
    this.initialized = true;
  }
  getTemplateForNode(node) {
    if (this.templateMap) return node.type ? this.templateMap[node.type] : this.templateMap["default"];
    else return null;
  }
  onNodeClick(event, node) {
    let eventTarget = event.target;
    if (tt(eventTarget, "data-pc-section", "nodetogglebutton") || tt(eventTarget, "data-pc-section", "nodetogglebuttonicon")) {
      return;
    } else if (this.selectionMode) {
      if (node.selectable === false) {
        return;
      }
      let index = this.findIndexInSelection(node);
      let selected = index >= 0;
      if (this.selectionMode === "single") {
        if (selected) {
          this.selection = null;
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = node;
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      } else if (this.selectionMode === "multiple") {
        if (selected) {
          this.selection = this.selection.filter((val, i) => i != index);
          this.onNodeUnselect.emit({
            originalEvent: event,
            node
          });
        } else {
          this.selection = [...this.selection || [], node];
          this.onNodeSelect.emit({
            originalEvent: event,
            node
          });
        }
      }
      this.selectionChange.emit(this.selection);
      this.selectionSource.next(null);
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selectionMode && this.selection) {
      if (this.selectionMode === "single") {
        index = this.selection == node ? 0 : -1;
      } else if (this.selectionMode === "multiple") {
        for (let i = 0; i < this.selection.length; i++) {
          if (this.selection[i] == node) {
            index = i;
            break;
          }
        }
      }
    }
    return index;
  }
  isSelected(node) {
    return this.findIndexInSelection(node) != -1;
  }
  static \u0275fac = function OrganizationChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChart)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _OrganizationChart,
    selectors: [["p-organizationChart"], ["p-organization-chart"], ["p-organizationchart"]],
    contentQueries: function OrganizationChart_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.togglerIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function OrganizationChart_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      styleClass: "styleClass",
      selectionMode: "selectionMode",
      collapsible: [2, "collapsible", "collapsible", booleanAttribute],
      preserveSpace: [2, "preserveSpace", "preserveSpace", booleanAttribute],
      selection: "selection"
    },
    outputs: {
      selectionChange: "selectionChange",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse"
    },
    features: [\u0275\u0275ProvidersFeature([OrganizationChartStyle, {
      provide: ORGANIZATIONCHART_INSTANCE,
      useExisting: _OrganizationChart
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _OrganizationChart
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["pOrganizationChartNode", "", 3, "class", "collapsible", "pt", "unstyled", "node", "pBind", 4, "ngIf"], ["pOrganizationChartNode", "", 3, "collapsible", "pt", "unstyled", "node", "pBind"]],
    template: function OrganizationChart_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OrganizationChart_table_0_Template, 1, 7, "table", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.root);
      }
    },
    dependencies: [CommonModule, NgIf, OrganizationChartNode, SharedModule, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChart, [{
    type: Component,
    args: [{
      selector: "p-organizationChart, p-organization-chart, p-organizationchart",
      standalone: true,
      imports: [CommonModule, OrganizationChartNode, SharedModule, BindModule],
      template: ` <table [class]="cx('table')" [collapsible]="collapsible" pOrganizationChartNode [pt]="pt" [unstyled]="unstyled()" [node]="root" *ngIf="root" [pBind]="ptm('table')"></table> `,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [OrganizationChartStyle, {
        provide: ORGANIZATIONCHART_INSTANCE,
        useExisting: OrganizationChart
      }, {
        provide: PARENT_INSTANCE,
        useExisting: OrganizationChart
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    collapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveSpace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selection: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    togglerIconTemplate: [{
      type: ContentChild,
      args: ["togglericon", {
        descendants: false
      }]
    }]
  });
})();
var OrganizationChartModule = class _OrganizationChartModule {
  static \u0275fac = function OrganizationChartModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationChartModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OrganizationChartModule,
    imports: [OrganizationChart, OrganizationChartNode, SharedModule],
    exports: [OrganizationChart, OrganizationChartNode, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OrganizationChart, OrganizationChartNode, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationChartModule, [{
    type: NgModule,
    args: [{
      imports: [OrganizationChart, OrganizationChartNode, SharedModule],
      exports: [OrganizationChart, OrganizationChartNode, SharedModule]
    }]
  }], null, null);
})();

// src/app/components/ia-diagram/ia-diagram.component.ts
var _c02 = ["menu"];
var _c12 = () => ({ height: "90vh" });
var _c22 = (a0) => ({ number: a0 });
var _forTrack0 = ($index, $item) => $item.text;
function IaDiagramComponent_Conditional_6_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
  if (rf & 2) {
    const colour_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", colour_r2);
  }
}
function IaDiagramComponent_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, IaDiagramComponent_Conditional_6_For_3_For_2_Template, 1, 1, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.context);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, item_r3.text));
  }
}
function IaDiagramComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "editNode.isOrphan"));
  }
}
function IaDiagramComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "aida-save-button");
    \u0275\u0275repeaterCreate(2, IaDiagramComponent_Conditional_6_For_3_Template, 6, 3, "div", 15, _forTrack0);
    \u0275\u0275conditionalCreate(4, IaDiagramComponent_Conditional_6_Conditional_4_Template, 5, 3, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.legendItems);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.hasIaOrphan ? 4 : -1);
  }
}
function IaDiagramComponent_Conditional_12_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(2, 1, "iaDiagram.tooltip.orphan"));
  }
}
function IaDiagramComponent_Conditional_12_ng_template_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const node_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind2(1, 1, "iaDiagram.tooltip.hiddenPages", \u0275\u0275pureFunction1(4, _c22, (node_r6.data.collapsedChildren == null ? null : node_r6.data.collapsedChildren.length) + (node_r6.data.hiddenChildrenUrls == null ? null : node_r6.data.hiddenChildrenUrls.length))));
  }
}
function IaDiagramComponent_Conditional_12_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function IaDiagramComponent_Conditional_12_ng_template_1_Conditional_6_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const node_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.addUrlsService.addChildren(ctx_r3.resolveRealNode(node_r6), ctx_r3.primaryLang));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("loading", ctx_r3.addUrlsService.urlState().isAdding)("pTooltip", \u0275\u0275pipeBind1(1, 2, "iaDiagram.menu.findChildren"));
  }
}
function IaDiagramComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, IaDiagramComponent_Conditional_12_ng_template_1_Conditional_0_Template, 3, 3, "div", 20);
    \u0275\u0275elementStart(1, "p-button", 21);
    \u0275\u0275listener("click", function IaDiagramComponent_Conditional_12_ng_template_1_Template_p_button_click_1_listener($event) {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onMenuClick($event, node_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275listener("dragleave", function IaDiagramComponent_Conditional_12_ng_template_1_Template_div_dragleave_2_listener() {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDragLeave(node_r6));
    })("dragover", function IaDiagramComponent_Conditional_12_ng_template_1_Template_div_dragover_2_listener($event) {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDragOver($event, node_r6));
    })("dragstart", function IaDiagramComponent_Conditional_12_ng_template_1_Template_div_dragstart_2_listener() {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDragStart(node_r6));
    })("drop", function IaDiagramComponent_Conditional_12_ng_template_1_Template_div_drop_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDrop());
    });
    \u0275\u0275elementStart(3, "p", 23)(4, "a", 24);
    \u0275\u0275listener("click", function IaDiagramComponent_Conditional_12_ng_template_1_Template_a_click_4_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, IaDiagramComponent_Conditional_12_ng_template_1_Conditional_5_Template, 2, 6, "i", 25);
    \u0275\u0275conditionalCreate(6, IaDiagramComponent_Conditional_12_ng_template_1_Conditional_6_Template, 2, 4, "p-button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r3.projectCache.selectedLang() === "en" ? node_r6.data.live.en.isOrphan : node_r6.data.live.fr.isOrphan) ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("cursor-move", ctx_r3.projectCache.selectedViewIA() === "changes");
    \u0275\u0275property("href", ctx_r3.projectCache.selectedLang() === "en" ? `https://www.canada.ca/${node_r6.data.path.en}` : `https://www.canada.ca/${node_r6.data.path.fr}`, \u0275\u0275sanitizeUrl)("innerHTML", ctx_r3.getH1Display(node_r6), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional((node_r6.data.collapsedChildren == null ? null : node_r6.data.collapsedChildren.length) || (node_r6.data.hiddenChildrenUrls == null ? null : node_r6.data.hiddenChildrenUrls.length) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!node_r6.data.isCrawled && !node_r6.data.isNavChild && !node_r6.data.status.isNew && ctx_r3.projectCache.selectedViewIA() === "changes" ? 6 : -1);
  }
}
function IaDiagramComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-organization-chart", 10);
    \u0275\u0275template(1, IaDiagramComponent_Conditional_12_ng_template_1_Template, 7, 7, "ng-template", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.projectTree());
  }
}
function IaDiagramComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 29)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("onClick", function IaDiagramComponent_Conditional_13_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.iaDiagram.resetTree());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "iaDiagram.allHiddenMessage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 4, "iaDiagram.resetTree"));
  }
}
function IaDiagramComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "aida-add-pages-link");
    \u0275\u0275elementEnd();
  }
}
function IaDiagramComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aida-edit-node", 31);
    \u0275\u0275listener("dialogClose", function IaDiagramComponent_Conditional_18_Template_aida_edit_node_dialogClose_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("initialShowNotes", ctx_r3.showNotes)("isOpen", ctx_r3.editNode)("node", ctx_r3.selectedNode);
  }
}
var IaDiagramComponent = class _IaDiagramComponent {
  projectState = inject(ProjectStateService);
  projectCache = inject(ProjectCacheService);
  translate = inject(TranslateService);
  iaDiagram = inject(IaDiagramService);
  treeNodeStyleService = inject(TreeNodeStyleService);
  addUrlsService = inject(AddUrlsService);
  fetchService = inject(FetchService);
  primaryLang = this.projectState.detectPrimaryLanguage();
  //Signals
  projectData = this.projectState.getProject;
  constructor() {
    effect(() => {
      const applyStatusColors = this.projectCache.selectedViewIA() === "changes";
      this.treeNodeStyleService.updateNodeStyles(this.projectTree(), 0, applyStatusColors);
    });
  }
  projectTree = computed(() => {
    let tree = this.projectState.getProject().projectData;
    if (!tree)
      return [];
    tree = this.projectState.expandNodes(tree);
    if (this.iaDiagram.selectedTree() !== "full") {
      const custom = this.projectState.findNodeByPath(tree, this.iaDiagram.selectedTree(), this.primaryLang);
      if (custom) {
        tree = [custom];
      }
    }
    if (this.projectCache.selectedViewIA() === "baseline") {
      tree = this.projectState.getBaselineTree(tree, this.iaDiagram.selectedTree() === "full" ? "full" : "custom");
    } else if (this.projectCache.selectedViewIA() === "final") {
      tree = this.projectState.getFinalTree(tree);
    }
    if (this.iaDiagram.collapsedNodes().size > 0 || this.iaDiagram.hiddenNodes().size > 0 || this.iaDiagram.navNodes().size > 0) {
      tree = this.projectState.getDisplayTree(tree, this.iaDiagram.collapsedNodes(), this.iaDiagram.hiddenNodes(), this.iaDiagram.navNodes());
    }
    this.treeNodeStyleService.updateNodeStyles(tree);
    return tree;
  }, ...ngDevMode ? [{ debugName: "projectTree" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Needed to get the actual node reference from a cloned getDisplayTree */
  resolveRealNode(cloneNode) {
    if (!cloneNode)
      return null;
    return this.projectState.findNodeByPath(this.projectState.getProjectTree(), cloneNode.data.path[this.primaryLang], this.primaryLang);
  }
  resolveParentNode(parentPath) {
    if (!parentPath)
      return null;
    return this.projectState.findNodeByPath(this.projectState.getProjectTree(), parentPath, this.primaryLang);
  }
  // Display H1
  getH1Display(node) {
    const lang = this.projectCache.selectedLang();
    const liveH1 = node.data?.live?.[lang]?.h1 ?? "";
    const protoH1 = node.data?.prototype?.[lang]?.h1 ?? "";
    const changed = liveH1 !== protoH1;
    if (this.projectCache.selectedViewIA() === "baseline")
      return liveH1;
    else if (this.projectCache.selectedViewIA() === "final")
      return protoH1;
    else if (changed)
      return `<s class="text-color-secondary text-sm">${liveH1}</s><br>${protoH1}`;
    else
      return protoH1;
  }
  //Menu options
  menu = viewChild.required("menu");
  items = [];
  editNode = false;
  showNotes = false;
  selectedNode = void 0;
  closeDialog() {
    this.editNode = false;
    this.showNotes = false;
    this.selectedNode = void 0;
  }
  onMenuClick(event, displayNode) {
    const projectNode = this.resolveRealNode(displayNode);
    if (!projectNode)
      return;
    event.preventDefault();
    this.items = [
      {
        label: this.translate.instant(`common.actions`),
        items: [
          {
            label: this.translate.instant(`common.editNode`),
            icon: "pi pi-pen-to-square",
            command: () => {
              this.selectedNode = projectNode;
              this.showNotes = false;
              this.editNode = true;
            }
          }
        ]
      },
      {
        label: this.translate.instant(`common.viewOptions`),
        items: []
      }
    ];
    if ((projectNode.data?.notes?.issue?.length ?? 0) + (projectNode.data?.notes?.solution?.length ?? 0) > 0) {
      this.items[0].items.push({
        label: this.translate.instant(`common.viewNotes`),
        icon: "pi pi-list",
        command: () => {
          this.selectedNode = projectNode;
          this.showNotes = true;
          this.editNode = true;
        }
      });
    }
    const siblings = this.projectState.getSiblings(projectNode);
    const index = siblings.indexOf(projectNode);
    const canMoveLeft = index > 0 && !projectNode.data.isNavChild;
    const canMoveRight = index < siblings.length - 1 && !projectNode.data.isNavChild;
    const isMoved = projectNode.data.status.isMoved && !projectNode.data.isNavChild;
    const originalParent = this.resolveParentNode(projectNode.data.baseline[this.primaryLang].parentPath);
    if (this.projectCache.selectedViewIA() === "changes" && (canMoveRight || canMoveLeft || isMoved)) {
      this.items[0].items.push({ separator: true });
    }
    if (this.projectCache.selectedViewIA() === "changes" && canMoveLeft) {
      this.items[0].items.push({
        label: this.translate.instant(`common.moveLeft`),
        icon: "pi pi-arrow-left",
        command: () => this.projectState.reorderNode(projectNode, "left")
      });
    }
    if (this.projectCache.selectedViewIA() === "changes" && canMoveRight) {
      this.items[0].items.push({
        label: this.translate.instant(`common.moveRight`),
        icon: "pi pi-arrow-right",
        command: () => this.projectState.reorderNode(projectNode, "right")
      });
    }
    if (this.projectCache.selectedViewIA() === "changes" && isMoved) {
      this.items[0].items.push({
        label: this.translate.instant(`common.undoMove`),
        icon: "pi pi-undo",
        command: () => {
          console.log(originalParent);
          if (originalParent) {
            this.projectState.moveNode(projectNode, originalParent);
          }
        }
      });
    }
    if (this.projectCache.selectedViewIA() === "changes" && (canMoveRight || canMoveLeft || isMoved)) {
      this.items[0].items.push({ separator: true });
    }
    if (this.projectCache.selectedViewIA() === "changes" && !projectNode.data.isNavChild) {
      if (!projectNode.data.isCrawled) {
        this.items[0].items.push({
          label: this.translate.instant(`iaDiagram.menu.findChildren`),
          icon: "pi pi-search",
          command: () => {
            this.addUrlsService.addChildren(projectNode, this.primaryLang);
          }
        });
      }
      this.items[0].items.push({
        label: this.translate.instant(`iaDiagram.menu.createChild`),
        icon: "pi pi-file-plus text-green-500",
        command: () => {
          this.selectedNode = this.projectState.createNode(projectNode);
          this.showNotes = false;
          this.editNode = true;
        }
      }, {
        label: this.translate.instant(`iaDiagram.menu.deleteNode`),
        icon: "pi pi-trash text-red-500",
        command: () => {
          this.projectState.deleteNode(projectNode);
        }
      });
    }
    if (this.projectTree()[0].data.path[this.primaryLang] !== projectNode.data.path[this.primaryLang] && !displayNode.data.isNavChild) {
      this.items[1].items.push({
        label: this.translate.instant(`iaDiagram.menu.viewAsRoot`),
        icon: "pi pi-window-minimize",
        command: () => this.iaDiagram.selectedTree.set(projectNode.data.path[this.primaryLang])
      });
    }
    if (this.iaDiagram.selectedTree() !== "full") {
      this.items[1].items.push({
        label: this.translate.instant(`iaDiagram.menu.viewFullTree`),
        icon: "pi pi-window-maximize",
        command: () => this.iaDiagram.selectedTree.set("full")
      });
    }
    if (this.projectTree()[0].data.path[this.primaryLang] !== projectNode.data.path[this.primaryLang] && !displayNode.data.isNavChild || this.iaDiagram.selectedTree() !== "full") {
      this.items[1].items.push({ separator: true });
    }
    if (!displayNode.data.isNavChild) {
      const path = displayNode.data.path[this.primaryLang];
      const navChildrenVisible = this.iaDiagram.navNodes().has(path);
      this.items[1].items.push({
        label: navChildrenVisible ? this.translate.instant(`iaDiagram.menu.hideNavChildren`) : this.translate.instant(`iaDiagram.menu.showNavChildren`),
        icon: navChildrenVisible ? "pi pi-eye-slash" : "pi pi-eye",
        command: () => __async(this, null, function* () {
          if (this.iaDiagram.navNodes().has(path)) {
            this.iaDiagram.navNodes.update((map) => {
              const next = new Map(map);
              next.delete(path);
              return next;
            });
            return;
          }
          const type = this.projectState.getProject().repoType;
          const version = type === "github" && this.projectCache.hasGitHub() ? "protoGH" : type === "local" && this.projectCache.hasLocal() ? "protoUT" : "live";
          const url = this.fetchService.generateUrl(path, version, this.projectData().github.owner, this.projectData().github.repo);
          const viaProxy = version.endsWith("UT");
          let linkedPaths = yield this.fetchService.getPaths(url, viaProxy);
          if (version !== "live" && linkedPaths.length === 0) {
            const urlLive = this.fetchService.generateUrl(path, "live");
            linkedPaths = yield this.fetchService.getPaths(urlLive, false);
          }
          const projectPaths = new Set(this.projectState.getAllPages(this.primaryLang).map((p) => p.path));
          const directChildPaths = new Set((projectNode.children ?? []).map((child) => child.data.path[this.primaryLang]));
          const filteredPaths = linkedPaths.filter((p) => projectPaths.has(p) && !directChildPaths.has(p) && p !== path);
          console.log(filteredPaths);
          this.iaDiagram.navNodes.update((map) => new Map(map).set(path, filteredPaths));
        })
      });
      if (displayNode.children?.length && displayNode.data.hiddenChildrenUrls?.length) {
        this.items[1].items.push({
          label: this.translate.instant(`iaDiagram.menu.showHiddenNodes`),
          icon: "pi pi-eye",
          command: () => this.iaDiagram.hiddenNodes.update((set) => {
            const next = new Set(set);
            displayNode.data.hiddenChildrenUrls.forEach((url) => next.delete(url));
            return next;
          })
        });
      }
      if (!displayNode.children?.length && (displayNode.data.collapsedChildren?.length || displayNode.data.hiddenChildrenUrls?.length)) {
        this.items[1].items.push({
          label: this.translate.instant(`iaDiagram.menu.showNextChildren`),
          icon: "pi pi-eye",
          command: () => {
            this.iaDiagram.collapsedNodes.update((set) => {
              const next = new Set(set);
              next.delete(displayNode.data.path[this.primaryLang]);
              return next;
            });
            this.iaDiagram.hiddenNodes.update((set) => {
              const next = new Set(set);
              (displayNode.data.hiddenChildrenUrls ?? []).forEach((path2) => next.delete(path2));
              return next;
            });
          }
        });
      }
      console.log("Clicked node path:", projectNode.data?.path[this.primaryLang]);
      console.log("Direct children:", (projectNode.children ?? []).map((c) => c.data?.path[this.primaryLang]));
      console.log("Hidden set:", [...this.iaDiagram.hiddenNodes()]);
      console.log("Collapsed set:", [...this.iaDiagram.collapsedNodes()]);
      console.log("Result:", this.hasDeepHiddenContent(projectNode));
      if (projectNode && this.hasDeepHiddenContent(projectNode)) {
        this.items[1].items.push({
          label: this.translate.instant("iaDiagram.menu.showAllChildren"),
          icon: "pi pi-eye",
          command: () => {
            const descendants = this.projectState.getSubtreePaths(projectNode, this.primaryLang);
            this.iaDiagram.collapsedNodes.update((set) => {
              const next = new Set(set);
              descendants.forEach((path2) => next.delete(path2));
              return next;
            });
            this.iaDiagram.hiddenNodes.update((set) => {
              const next = new Set(set);
              descendants.forEach((path2) => next.delete(path2));
              return next;
            });
          }
        });
      }
      if (displayNode.parent || displayNode.children?.length) {
        this.items[1].items.push({ separator: true });
      }
      if (displayNode.parent) {
        this.items[1].items.push({
          label: this.translate.instant(`iaDiagram.menu.hideNode`),
          icon: "pi pi-eye-slash",
          command: () => this.iaDiagram.hiddenNodes.update((set) => /* @__PURE__ */ new Set([...set, displayNode.data.path[this.primaryLang]]))
        });
      }
      if (displayNode.children?.length) {
        const visibleDepth = this.projectState.getSubtreeMaxDepth(displayNode);
        const realMaxDepth = this.projectState.getSubtreeMaxDepth(projectNode);
        for (let level = 1; level <= visibleDepth; level++) {
          this.items[1].items.push({
            label: this.translate.instant("iaDiagram.menu.hideLevelChildren", { level: level + this.projectState.getOrdinalSuffix(level) }),
            icon: "pi pi-eye-slash",
            command: () => {
              const cutNodes = [];
              for (let targetLevel = realMaxDepth; targetLevel >= level; targetLevel--) {
                cutNodes.push(...this.projectState.getNodesAtRelativeDepth(displayNode, targetLevel - 1).filter((n) => (n.children?.length ?? 0) > 0));
              }
              this.iaDiagram.collapsedNodes.update((set) => {
                const next = new Set(set);
                cutNodes.forEach((node) => {
                  if (node.data)
                    next.add(node.data.path[this.primaryLang]);
                });
                return next;
              });
            }
          });
        }
      }
    }
    if (this.items[1].items.length === 0) {
      this.items[1].items.push({
        label: this.translate.instant(`iaDiagram.menu.noActions`),
        disabled: true
      });
    }
    this.menu().toggle(event);
  }
  /** Returns true if any child nodes have collapsed or hidden nodes and those child nodes also have child nodes */
  hasDeepHiddenContent(node) {
    const checkBelow = (currentNode) => {
      const path = currentNode.data?.path[this.primaryLang];
      if (path && (this.iaDiagram.collapsedNodes().has(path) || this.iaDiagram.hiddenNodes().has(path))) {
        return true;
      }
      return (currentNode.children ?? []).some((child) => checkBelow(child));
    };
    return (node.children ?? []).some((child) => checkBelow(child));
  }
  // Drag & drop
  dragNode = signal(null, ...ngDevMode ? [{ debugName: "dragNode" }] : (
    /* istanbul ignore next */
    []
  ));
  dropTarget = signal(null, ...ngDevMode ? [{ debugName: "dropTarget" }] : (
    /* istanbul ignore next */
    []
  ));
  onDragStart(node) {
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    this.dragNode.set(node);
  }
  onDragOver(event, node) {
    event.preventDefault();
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    if (node.data.path[this.primaryLang] !== this.dragNode()?.data?.path[this.primaryLang]) {
      this.dropTarget.set(node);
    }
  }
  onDragLeave(node) {
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    if (this.dropTarget()?.data?.path[this.primaryLang] === node.data.path[this.primaryLang]) {
      this.dropTarget.set(null);
    }
  }
  onDrop() {
    if (this.projectCache.selectedViewIA() !== "changes")
      return;
    const realDrag = this.resolveRealNode(this.dragNode());
    const realDrop = this.resolveRealNode(this.dropTarget());
    if (!realDrag || !realDrop || realDrag?.data.path[this.primaryLang] === realDrop?.data.path[this.primaryLang] || realDrag?.parent?.data?.path[this.primaryLang] === realDrop?.data.path[this.primaryLang]) {
      this.dragNode.set(null);
      this.dropTarget.set(null);
      return;
    }
    this.projectState.moveNode(realDrag, realDrop);
    this.dragNode.set(null);
    this.dropTarget.set(null);
  }
  get legendItems() {
    const items = [];
    const tree = this.projectTree();
    if (tree.length === 0)
      return items;
    const mainColours = this.treeNodeStyleService.bgColors;
    const allColours = this.treeNodeStyleService.contextStyles;
    const depth = this.projectState.getInScopeMaxDepth(tree[0]);
    if (depth) {
      const inScopeColours = Array.from({ length: depth + 1 }, (_, i) => mainColours[i]);
      items.push({ context: inScopeColours, text: this.translate.instant("editNode.inScope") });
    }
    const hasOutOfScope = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.inScope === false) !== null;
    if (hasOutOfScope) {
      items.push({ context: [allColours["template"]], text: this.translate.instant("iaDiagram.outOfScope") });
    }
    const hasNew = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.isNew === true) !== null;
    const hasMoves = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.isMoved === true) !== null;
    const hasROT = this.projectState.findNodeWhere(tree, (node) => node.data?.status?.isROT === true) !== null;
    const inScopePaths = new Set(this.projectState.getAllPages(this.primaryLang, "live", "inScope").map((p) => p.path));
    const allRescuePaths = Array.from(this.iaDiagram.navNodes().values()).flat();
    const hasInScopeRescues = allRescuePaths.some((p) => inScopePaths.has(p));
    const hasOutOfScopeRescues = allRescuePaths.some((p) => !inScopePaths.has(p));
    const rescueColours = [...hasInScopeRescues ? [allColours["navChild"]] : [], ...hasOutOfScopeRescues ? [allColours["navChildTemp"]] : []];
    if (this.projectCache.selectedViewIA() === "changes") {
      if (hasNew) {
        items.push({ context: [allColours["new"]], text: this.translate.instant("editNode.isNew") });
      }
      if (hasMoves) {
        items.push({ context: [allColours["move"]], text: this.translate.instant("editNode.isMoved") });
      }
      if (hasROT) {
        items.push({ context: [allColours["rot"]], text: this.translate.instant("editNode.isROT") });
      }
      if (hasInScopeRescues || hasOutOfScopeRescues) {
        items.push({ context: rescueColours, text: this.translate.instant("iaDiagram.hasRescues") });
      }
    }
    return items;
  }
  get hasIaOrphan() {
    const tree = this.projectTree();
    if (tree.length === 0)
      return false;
    const lang = this.projectCache.selectedLang() ?? "en";
    return this.projectState.findNodeWhere(tree, (node) => node.data?.live?.[lang].isOrphan === true) !== null;
  }
  static \u0275fac = function IaDiagramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IaDiagramComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IaDiagramComponent, selectors: [["aida-ia-diagram"]], viewQuery: function IaDiagramComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.menu, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 19, vars: 20, consts: [["menu", ""], [1, "fullscreen-overlay", "surface-card"], [1, "flex", "flex-row", "justify-content-between", "align-items-center", "pl-2", "mx-3", "border-bottom-1", "border-200"], [1, "mb-2", "noline"], [1, "flex", "flex-row", "align-items-end"], [1, "flex", "flex-wrap", "gap-3", "min-w-min", "-mb-2"], ["icon", "pi pi-times", "rounded", "", "text", "", 1, "align-items-start", "mb-1", 3, "onClick"], [1, "overflow-auto"], [1, "flex", "flex-row", "absolute", "z-1", "ml-4"], ["]", "", 3, "showLang", "showViewIA"], [3, "value"], [1, "flex", "justify-content-center", "mt-8"], [3, "model", "popup"], ["styleClass", "w-10", 3, "visibleChange", "visible", "header", "maximizable", "modal"], [3, "initialShowNotes", "isOpen", "node"], [1, "flex", "align-items-center", "gap-1"], [1, "legend-box", "border-2", "border-primary", "border-round", "shadow-2", 3, "ngClass"], [1, "legend-text"], [1, "pi", "pi-times", "text-red-500"], ["pTemplate", "default"], [1, "-mt-6", "mb-6"], ["icon", "pi pi-ellipsis-h", "size", "small", "text", "", 1, "absolute", "top-0", "right-0", "-mt-1", "-mr-1", 3, "click"], [1, "h-full", 3, "dragleave", "dragover", "dragstart", "drop"], [1, "pb-2"], ["target", "_blank", 1, "no-underline", "text-primary", 3, "click", "href", "innerHTML"], ["tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "pi", "pi-eye-slash", "text-sm", "text-color-secondary", "opacity-70", "absolute", "bottom-0", "right-0", "mb-1", "mr-2", 3, "pTooltip"], ["icon", "pi pi-plus-circle", "rounded", "", "size", "small", "text", "", "tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "absolute", "left-50", "-translate-x-50", "bottom-0", "-mb-1", 3, "loading", "pTooltip"], ["tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "pi", "pi-times", "text-red-500", 3, "pTooltip"], ["icon", "pi pi-plus-circle", "rounded", "", "size", "small", "text", "", "tooltipPosition", "top", "tooltipStyleClass", "z-200", 1, "absolute", "left-50", "-translate-x-50", "bottom-0", "-mb-1", 3, "click", "loading", "pTooltip"], [1, "flex", "flex-column", "gap-2"], [3, "onClick", "label"], [3, "dialogClose", "initialShowNotes", "isOpen", "node"]], template: function IaDiagramComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275conditionalCreate(6, IaDiagramComponent_Conditional_6_Template, 5, 1, "div", 5);
      \u0275\u0275elementStart(7, "p-button", 6);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("onClick", function IaDiagramComponent_Template_p_button_onClick_7_listener() {
        return ctx.iaDiagram.closeDiagram();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "aida-project-settings", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, IaDiagramComponent_Conditional_12_Template, 2, 1, "p-organization-chart", 10)(13, IaDiagramComponent_Conditional_13_Template, 7, 6, "div", 11)(14, IaDiagramComponent_Conditional_14_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "p-menu", 12, 0);
      \u0275\u0275elementStart(17, "p-dialog", 13);
      \u0275\u0275twoWayListener("visibleChange", function IaDiagramComponent_Template_p_dialog_visibleChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editNode, $event) || (ctx.editNode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(18, IaDiagramComponent_Conditional_18_Template, 1, 3, "aida-edit-node", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "iaDiagram._title"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.legendItems ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 17, "common.close"));
      \u0275\u0275advance(4);
      \u0275\u0275property("showLang", true)("showViewIA", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.projectTree().length > 0 ? 12 : ctx.iaDiagram.collapsedNodes().size > 0 || ctx.iaDiagram.hiddenNodes().size > 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275property("model", ctx.items)("popup", true);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c12));
      \u0275\u0275twoWayProperty("visible", ctx.editNode);
      \u0275\u0275property("header", ctx.selectedNode == null ? null : ctx.selectedNode.data == null ? null : ctx.selectedNode.data.prototype == null ? null : (tmp_11_0 = ctx.selectedNode.data.prototype[ctx.projectCache.selectedLang()]) == null ? null : tmp_11_0.h1)("maximizable", true)("modal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedNode ? 18 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    ButtonModule,
    Button,
    PrimeTemplate,
    DialogModule,
    Dialog,
    MenuModule,
    Menu,
    OrganizationChartModule,
    OrganizationChart,
    TooltipModule,
    Tooltip,
    AddPagesLinkComponent,
    EditNodeComponent,
    ProjectSettingsComponent,
    SaveButtonComponent,
    TranslatePipe
  ], styles: ["\n.fullscreen-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n}\n.z-200[_ngcontent-%COMP%] {\n  z-index: 200 !important;\n}\n.legend-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=ia-diagram.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IaDiagramComponent, [{
    type: Component,
    args: [{ selector: "aida-ia-diagram", imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      ButtonModule,
      DialogModule,
      MenuModule,
      OrganizationChartModule,
      TooltipModule,
      AddPagesLinkComponent,
      EditNodeComponent,
      ProjectSettingsComponent,
      SaveButtonComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="fullscreen-overlay surface-card">
  <div class="flex flex-row justify-content-between align-items-center pl-2 mx-3 border-bottom-1 border-200">
    <h1 class="mb-2 noline">{{ 'iaDiagram._title' | translate }}</h1>
    <div class="flex flex-row align-items-end">
      @if (legendItems) {
        <div class="flex flex-wrap gap-3 min-w-min -mb-2">
          <aida-save-button />
          @for (item of legendItems; track item.text) {
            <div class="flex align-items-center gap-1">
              @for (colour of item.context; track $index) {
                <div [ngClass]="colour" class="legend-box border-2 border-primary border-round shadow-2"></div>
              }
              <span class="legend-text">{{ item.text | translate }}</span>
            </div>
          }
          @if (hasIaOrphan) {
            <div class="flex align-items-center gap-1">
              <i class="pi pi-times text-red-500"></i>
              <span class="legend-text">{{ 'editNode.isOrphan' | translate }}</span>
            </div>
          }
        </div>
      }
      <p-button [attr.aria-label]="'common.close' | translate" (onClick)="iaDiagram.closeDiagram()" class="align-items-start mb-1" icon="pi pi-times" rounded text />
    </div>
  </div>

  <div class="overflow-auto">
    <!--Toggle View-->
    <div class="flex flex-row absolute z-1 ml-4">
      <aida-project-settings [showLang]="true" [showViewIA]="true" ] />
    </div>
    @if (projectTree().length > 0) {
      <!--IA Diagram-->
      <p-organization-chart [value]="projectTree()">
        <ng-template let-node pTemplate="default">
          <!--ORPHAN STATUS-->
          @if (projectCache.selectedLang() === 'en' ? node.data.live.en.isOrphan : node.data.live.fr.isOrphan) {
            <div class="-mt-6 mb-6">
              <i [pTooltip]="'iaDiagram.tooltip.orphan' | translate" class="pi pi-times text-red-500" tooltipPosition="top" tooltipStyleClass="z-200"></i>
            </div>
          }
          <!--PAGE-->
          <p-button (click)="onMenuClick($event, node)" class="absolute top-0 right-0 -mt-1 -mr-1" icon="pi pi-ellipsis-h" size="small" text />
          <div (dragleave)="onDragLeave(node)" (dragover)="onDragOver($event, node)" (dragstart)="onDragStart(node)" (drop)="onDrop()" class="h-full">
            <p class="pb-2">
              <a
                [class.cursor-move]="projectCache.selectedViewIA() === 'changes'"
                [href]="projectCache.selectedLang() === 'en' ? \`https://www.canada.ca/\${node.data.path.en}\` : \`https://www.canada.ca/\${node.data.path.fr}\`"
                [innerHTML]="getH1Display(node)"
                (click)="$event.preventDefault()"
                class="no-underline text-primary"
                target="_blank"
              >
              </a>
            </p>
            @if (node.data.collapsedChildren?.length || node.data.hiddenChildrenUrls?.length) {
              <i
                [pTooltip]="'iaDiagram.tooltip.hiddenPages' | translate: { number: node.data.collapsedChildren?.length + node.data.hiddenChildrenUrls?.length }"
                class="pi pi-eye-slash text-sm text-color-secondary opacity-70 absolute bottom-0 right-0 mb-1 mr-2"
                tooltipPosition="top"
                tooltipStyleClass="z-200"
              ></i>
            }
            @if (!node.data.isCrawled && !node.data.isNavChild && !node.data.status.isNew && projectCache.selectedViewIA() === 'changes') {
              <p-button
                [loading]="addUrlsService.urlState().isAdding"
                [pTooltip]="'iaDiagram.menu.findChildren' | translate"
                (click)="addUrlsService.addChildren(resolveRealNode(node), primaryLang)"
                class="absolute left-50 -translate-x-50 bottom-0 -mb-1"
                icon="pi pi-plus-circle"
                rounded
                size="small"
                text
                tooltipPosition="top"
                tooltipStyleClass="z-200"
              />
            }
          </div>
        </ng-template>
      </p-organization-chart>
    } @else if (iaDiagram.collapsedNodes().size > 0 || iaDiagram.hiddenNodes().size > 0) {
      <div class="flex justify-content-center mt-8">
        <div class="flex flex-column gap-2">
          <p>{{ 'iaDiagram.allHiddenMessage' | translate }}</p>
          <p-button [label]="'iaDiagram.resetTree' | translate" (onClick)="iaDiagram.resetTree()" />
        </div>
      </div>
    } @else {
      <div class="flex justify-content-center mt-8">
        <aida-add-pages-link />
      </div>
    }
  </div>
</div>
<!--Context Menu-->
<p-menu [model]="items" [popup]="true" #menu />

<p-dialog [(visible)]="editNode" [header]="selectedNode?.data?.prototype?.[projectCache.selectedLang()]?.h1" [maximizable]="true" [modal]="true" [style]="{ height: '90vh' }" styleClass="w-10">
  @if (selectedNode) {
    <aida-edit-node [initialShowNotes]="showNotes" [isOpen]="editNode" [node]="selectedNode" (dialogClose)="closeDialog()" />
  }
</p-dialog>
`, styles: ["/* src/app/components/ia-diagram/ia-diagram.component.css */\n.fullscreen-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n}\n.z-200 {\n  z-index: 200 !important;\n}\n.legend-box {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=ia-diagram.component.css.map */\n"] }]
  }], () => [], { menu: [{ type: ViewChild, args: ["menu", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IaDiagramComponent, { className: "IaDiagramComponent", filePath: "src/app/components/ia-diagram/ia-diagram.component.ts", lineNumber: 48 });
})();
export {
  IaDiagramComponent
};
//# sourceMappingURL=chunk-HMCDDBHL.js.map
