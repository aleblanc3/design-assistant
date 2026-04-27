import{b as gt}from"./chunk-K4NKLC4A.js";import{$ as E,D as bt,Ha as vt,Ia as L,La as U,S as ut,Xa as y,Z as dt,_ as ft,c as ct,cb as mt,fb as et,g as pt,gb as yt,ia as J,l as g,m as W,ma as O,ra as X,xa as ht}from"./chunk-6DHRFH3Q.js";import{$ as N,$a as p,Db as M,Eb as w,Fb as v,Gb as m,Ib as K,Jb as B,Kb as u,La as x,Lb as d,M as F,N as P,O as R,T as b,Ua as A,Wb as q,Xa as c,Ya as z,Yb as rt,_ as S,aa as nt,ab as at,ba as s,bb as h,hb as l,ib as Q,ka as _,kb as C,la as it,ma as j,mb as ot,nb as $,qc as D,rc as st,sb as T,tb as k,tc as r,ub as I,uc as lt,xb as Z,yb as H}from"./chunk-SMC25M3G.js";import{e as tt}from"./chunk-R6NUDN4T.js";var $t=["*"],kt=({dt:t})=>`
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: ${t("iftalabel.top")};
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: ${t("iftalabel.font.size")};
    font-weight: ${t("iftalabel.font.weight")};
    inset-inline-start: ${t("iftalabel.position.x")};
    color: ${t("iftalabel.color")};
    transition-duration: ${t("iftalabel.transition.duration")};
}

.p-iftalabel .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label-container,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label,
.p-iftalabel .p-datepicker-input,
.p-iftalabel .p-inputmask,
.p-iftalabel .p-autocomplete .p-inputtext,
.p-iftalabel .p-inputnumber .p-inputtext,
.p-iftalabel .p-password .p-inputtext,
.p-iftalabel > .p-iconfield .p-inputtext {
    padding-top: ${t("iftalabel.input.padding.top")};
}

.p-iftalabel:has(.ng-invalid.ng-dirty) label {
    color: ${t("iftalabel.invalid.color")};
}

.p-iftalabel:has(input:focus) label,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label,
.p-iftalabel:has(.p-inputwrapper-focus) label {
    color: ${t("iftalabel.focus.color")};
}

.p-iftalabel .p-inputicon {
    top: ${t("iftalabel.input.padding.top")};
    transform: translateY(25%);
    margin-top: 0;
}

/*.p-iftalabel .p-placeholder,
.p-iftalabel input::placeholder,
.p-iftalabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-iftalabel .p-focus .p-placeholder,
.p-iftalabel input:focus::placeholder,
.p-iftalabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}*/
`,It={root:"p-iftalabel"},_t=(()=>{class t extends U{name="iftalabel";theme=kt;classes=It;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var se=(()=>{class t extends y{_componentStyle=b(_t);static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=c({type:t,selectors:[["p-iftalabel"],["p-iftaLabel"],["p-ifta-label"]],hostAttrs:[1,"p-iftalabel"],features:[q([_t]),p],ngContentSelectors:$t,decls:1,vars:0,template:function(i,n){i&1&&(v(),m(0))},encapsulation:2,changeDetection:0})}return t})(),le=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=z({type:t});static \u0275inj=R({imports:[g,L,bt,L]})}return t})();var wt=(()=>{class t extends mt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=c({type:t,selectors:[["ChevronLeftIcon"]],features:[p],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(nt(),T(0,"svg",0),I(1,"path",1),k()),i&2&&(ot(n.getClassNames()),l("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Bt=["previcon"],Dt=["nexticon"],Lt=["content"],Ft=["prevButton"],Mt=["nextButton"],Et=["inkbar"],Ot=["tabs"],V=["*"],Vt=t=>({"p-tablist-viewport":t});function Pt(t,f){t&1&&Z(0)}function Rt(t,f){if(t&1&&h(0,Pt,1,0,"ng-container",11),t&2){let e=w(2);Q("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function St(t,f){t&1&&I(0,"ChevronLeftIcon")}function Nt(t,f){if(t&1){let e=H();T(0,"button",10,3),M("click",function(){S(e);let n=w();return N(n.onPrevButtonClick())}),h(2,Rt,1,1,"ng-container")(3,St,1,0,"ChevronLeftIcon"),k()}if(t&2){let e=w();l("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),x(2),$(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function jt(t,f){t&1&&Z(0)}function At(t,f){if(t&1&&h(0,jt,1,0,"ng-container",11),t&2){let e=w(2);Q("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function zt(t,f){t&1&&I(0,"ChevronRightIcon")}function Qt(t,f){if(t&1){let e=H();T(0,"button",12,4),M("click",function(){S(e);let n=w();return N(n.onNextButtonClick())}),h(2,At,1,1,"ng-container")(3,zt,1,0,"ChevronRightIcon"),k()}if(t&2){let e=w();l("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),x(2),$(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function Ht(t,f){t&1&&m(0)}var Kt=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${t("tabs.tab.gap")};
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,qt={root:({props:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable}]},xt=(()=>{class t extends U{name="tabs";theme=Kt;classes=qt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ct=(()=>{class t extends y{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=b(F(()=>G));isPrevButtonEnabled=j(!1);isNextButtonEnabled=j(!1);resizeObserver;showNavigators=r(()=>this.pcTabs.showNavigators());tabindex=r(()=>this.pcTabs.tabindex());scrollable=r(()=>this.pcTabs.scrollable());constructor(){super(),lt(()=>{this.pcTabs.value(),W(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&W(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=O(e),n=Math.abs(e.scrollLeft)-i,a=n<=0?0:n;e.scrollLeft=X(e)?-1*a:a}onNextButtonClick(){let e=this.content.nativeElement,i=O(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,a=e.scrollWidth-i,o=n>=a?a:n;e.scrollLeft=X(e)?-1*o:o}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=e,o=Math.abs(e.scrollLeft),Y=O(e);this.isPrevButtonEnabled.set(o!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&o!==n-Y)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,a=dt(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=ut(a)+"px",i.style.left=J(a).left-J(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,a)=>a?n+O(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&(K(a,Bt,4),K(a,Dt,4),K(a,vt,4)),i&2){let o;u(o=d())&&(n.prevIconTemplate=o.first),u(o=d())&&(n.nextIconTemplate=o.first),u(o=d())&&(n.templates=o)}},viewQuery:function(i,n){if(i&1&&(B(Lt,5),B(Ft,5),B(Mt,5),B(Et,5),B(Ot,5)),i&2){let a;u(a=d())&&(n.content=a.first),u(a=d())&&(n.prevButton=a.first),u(a=d())&&(n.nextButton=a.first),u(a=d())&&(n.inkbar=a.first),u(a=d())&&(n.tabs=a.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(l("data-pc-name","tablist"),C("p-tablist",!0)("p-component",!0))},features:[p],ngContentSelectors:V,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){if(i&1){let a=H();v(),h(0,Nt,4,4,"button",5),T(1,"div",6,0),M("scroll",function(Y){return S(a),N(n.onScroll(Y))}),T(3,"div",7,1),m(5),I(6,"span",8,2),k()(),h(8,Qt,4,4,"button",9)}i&2&&($(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),x(),Q("ngClass",rt(4,Vt,n.scrollable())),x(5),l("data-pc-section","inkbar"),x(2),$(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[g,ct,pt,wt,gt,yt,et,L],encapsulation:2,changeDetection:0})}return t})(),Wt=(()=>{class t extends y{value=A();disabled=_(!1,{transform:D});pcTabs=b(F(()=>G));pcTabList=b(F(()=>Ct));el=b(it);ripple=r(()=>this.config.ripple());id=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=r(()=>tt(this.pcTabs.value(),this.value()));tabindex=r(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?E(n,"data-p-disabled")||E(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?E(n,"data-p-disabled")||E(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){ft(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){W(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=c({type:t,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&M("focus",function(o){return n.onFocus(o)})("click",function(o){return n.onClick(o)})("keydown",function(o){return n.onKeyDown(o)}),i&2&&(l("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),C("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[at([et]),p],ngContentSelectors:V,decls:1,vars:0,template:function(i,n){i&1&&(v(),m(0))},dependencies:[g,L],encapsulation:2,changeDetection:0})}return t})(),Ut=(()=>{class t extends y{pcTabs=b(F(()=>G));value=A(void 0);id=r(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=r(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=r(()=>tt(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=c({type:t,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(l("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),C("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[p],ngContentSelectors:V,decls:1,vars:1,template:function(i,n){i&1&&(v(),h(0,Ht,1,0)),i&2&&$(n.active()?0:-1)},dependencies:[g],encapsulation:2,changeDetection:0})}return t})(),Gt=(()=>{class t extends y{static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=c({type:t,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(l("data-pc-name","tabpanels")("role","presentation"),C("p-tabpanels",!0)("p-component",!0))},features:[p],ngContentSelectors:V,decls:1,vars:0,template:function(i,n){i&1&&(v(),m(0))},dependencies:[g],encapsulation:2,changeDetection:0})}return t})(),G=(()=>{class t extends y{value=A(void 0);scrollable=_(!1,{transform:D});lazy=_(!1,{transform:D});selectOnFocus=_(!1,{transform:D});showNavigators=_(!0,{transform:D});tabindex=_(0,{transform:st});id=j(ht("pn_id_"));_componentStyle=b(xt);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=s(t)))(n||t)}})();static \u0275cmp=c({type:t,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(l("data-pc-name","tabs")("id",n.id()),C("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[q([xt]),p],ngContentSelectors:V,decls:1,vars:0,template:function(i,n){i&1&&(v(),m(0))},dependencies:[g],encapsulation:2,changeDetection:0})}return t})(),Me=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=z({type:t});static \u0275inj=R({imports:[G,Gt,Ut,Ct,Wt]})}return t})();export{wt as a,se as b,le as c,Ct as d,Wt as e,Ut as f,Gt as g,G as h,Me as i};
