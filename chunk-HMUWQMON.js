import{u as we,v as Be,y as Ie}from"./chunk-K4NKLC4A.js";import{G as Me,H as ke,Ha as N,Ia as p,La as S,Oa as re,Sa as se,Ta as pe,Wa as de,Xa as M,c as ae,e as Se,fb as $e,g as R,l as x}from"./chunk-6DHRFH3Q.js";import{$ as L,$a as _,Db as A,Eb as r,Fb as V,Gb as j,Ib as B,Kb as I,La as s,Lb as F,M as X,N as h,O as y,Pb as $,Qb as P,Rb as Y,T as f,Tb as ee,Ub as te,Vb as ne,Wb as T,Xa as b,Ya as v,Yb as me,Zb as oe,_ as E,ab as fe,ba as u,bb as d,ec as U,fc as Q,ha as q,hb as C,ib as c,ic as Te,jb as be,kb as O,lb as z,mb as k,nb as D,qb as he,qc as w,rb as ye,rc as ie,sb as g,tb as m,ub as Z,uc as xe,vb as ve,wb as _e,xb as K,yb as W,zb as Ce}from"./chunk-SMC25M3G.js";import{d as le,e as J}from"./chunk-R6NUDN4T.js";var Pe=["icon"],Ue=["*"];function Qe(e,a){if(e&1&&Z(0,"span",4),e&2){let t=r(2);c("ngClass",t.icon)}}function Ge(e,a){if(e&1&&(ve(0),d(1,Qe,1,1,"span",3),_e()),e&2){let t=r();s(),c("ngIf",t.icon)}}function Re(e,a){}function He(e,a){e&1&&d(0,Re,0,0,"ng-template")}function qe(e,a){if(e&1&&(g(0,"span",5),d(1,He,1,0,null,6),m()),e&2){let t=r();s(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Ke=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,We={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Fe=(()=>{class e extends S{name="tag";theme=Ke;classes=We;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var Ye=(()=>{class e extends M{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=f(Fe);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-tag"]],contentQueries:function(o,n,i){if(o&1&&(B(i,Pe,4),B(i,N,4)),o&2){let l;I(l=F())&&(n.iconTemplate=l.first),I(l=F())&&(n.templates=l)}},hostVars:4,hostBindings:function(o,n){o&2&&(z(n.style),k(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",w]},features:[T([Fe]),_],ngContentSelectors:Ue,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(o,n){o&1&&(V(),j(0),d(1,Ge,2,1,"ng-container",0)(2,qe,2,1,"span",1),g(3,"span",2),$(4),m()),o&2&&(s(),c("ngIf",!n.iconTemplate&&!n._iconTemplate),s(),c("ngIf",n.iconTemplate||n._iconTemplate),s(2),P(n.value))},dependencies:[x,ae,Se,R,p],encapsulation:2,changeDetection:0})}return e})(),Xt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[Ye,p,p]})}return e})();var Je=["*"],Xe=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,Ze={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},et={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},Ee=(()=>{class e extends S{name="divider";theme=Xe;classes=et;inlineStyles=Ze;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var tt=(()=>{class e extends M{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=f(Ee);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,n){o&2&&(C("aria-orientation",n.layout)("data-pc-name","divider")("role","separator"),k(n.hostClass),be("justify-content",n.layout==="horizontal"?n.align==="center"||n.align===void 0?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null)("align-items",n.layout==="vertical"?n.align==="center"||n.align===void 0?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null),O("p-divider",!0)("p-component",!0)("p-divider-horizontal",n.layout==="horizontal")("p-divider-vertical",n.layout==="vertical")("p-divider-solid",n.type==="solid")("p-divider-dashed",n.type==="dashed")("p-divider-dotted",n.type==="dotted")("p-divider-left",n.layout==="horizontal"&&(!n.align||n.align==="left"))("p-divider-center",n.layout==="horizontal"&&n.align==="center"||n.layout==="vertical"&&(!n.align||n.align==="center"))("p-divider-right",n.layout==="horizontal"&&n.align==="right")("p-divider-top",n.layout==="vertical"&&n.align==="top")("p-divider-bottom",n.layout==="vertical"&&n.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[T([Ee]),_],ngContentSelectors:Je,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,n){o&1&&(V(),g(0,"div",0),j(1),m())},dependencies:[x,p],encapsulation:2,changeDetection:0})}return e})(),gn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[tt]})}return e})();var nt=["icon"],ot=["content"],Oe=e=>({$implicit:e}),it=(e,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":a});function at(e,a){e&1&&K(0)}function lt(e,a){if(e&1&&Z(0,"span",0),e&2){let t=r(3);k(t.checked?t.onIcon:t.offIcon),c("ngClass",oe(4,it,t.iconPos==="left",t.iconPos==="right")),C("data-pc-section","icon")}}function rt(e,a){if(e&1&&d(0,lt,1,7,"span",2),e&2){let t=r(2);D(t.onIcon||t.offIcon?0:-1)}}function st(e,a){e&1&&K(0)}function pt(e,a){if(e&1&&d(0,st,1,0,"ng-container",1),e&2){let t=r(2);c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",me(2,Oe,t.checked))}}function dt(e,a){if(e&1&&(d(0,rt,1,1)(1,pt,1,4,"ng-container"),g(2,"span",0),$(3),m()),e&2){let t=r();D(t.iconTemplate?1:0),s(2),c("ngClass",t.cx("label")),C("data-pc-section","label"),s(),P(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var ct=({dt:e})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
    padding: ${e("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${e("togglebutton.content.border.radius")};
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${e("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${e("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,ut={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Le=(()=>{class e extends S{name="togglebutton";theme=ct;classes=ut;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var gt={provide:re,useExisting:X(()=>ce),multi:!0},ce=(()=>{class e extends M{get hostClass(){return this.styleClass||""}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new q;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=f(Le);onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&(B(i,nt,4),B(i,ot,4),B(i,N,4)),o&2){let l;I(l=F())&&(n.iconTemplate=l.first),I(l=F())&&(n.contentTemplate=l.first),I(l=F())&&(n.templates=l)}},hostVars:23,hostBindings:function(o,n){o&1&&A("keydown",function(l){return n.onKeyDown(l)})("click",function(l){return n.toggle(l)}),o&2&&(Ce("tabindex",n.tabindex),C("disabled",n.disabled)("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled)("type","button"),k(n.hostClass),O("p-togglebutton",!0)("p-togglebutton-checked",n.checked)("p-disabled",n.disabled)("p-togglebutton-sm",n.size==="small")("p-inputfield-sm",n.size==="small")("p-togglebutton-lg",n.size==="large")("p-inputfield-lg",n.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",w],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ie],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",w],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[T([gt,Le]),fe([$e]),_],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(o,n){o&1&&(g(0,"span",0),d(1,at,1,0,"ng-container",1)(2,dt,4,4),m()),o&2&&(c("ngClass",n.cx("content")),s(),c("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",me(4,Oe,n.checked)),s(),D(n.contentTemplate?-1:2))},dependencies:[x,ae,R,p],encapsulation:2,changeDetection:0})}return e})(),Dn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[ce,p,p]})}return e})();var ft=["item"],bt=(e,a)=>({$implicit:e,index:a});function ht(e,a){return this.getOptionLabel(a)}function yt(e,a){e&1&&K(0)}function vt(e,a){if(e&1&&d(0,yt,1,0,"ng-container",3),e&2){let t=r(2),o=t.$implicit,n=t.$index,i=r();c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",oe(2,bt,o,n))}}function _t(e,a){e&1&&d(0,vt,1,5,"ng-template",null,0,Te)}function Ct(e,a){if(e&1){let t=W();g(0,"p-toggleButton",2),A("onChange",function(n){let i=E(t),l=i.$implicit,G=i.$index,ge=r();return L(ge.onOptionSelect(n,l,G))}),d(1,_t,2,0),m()}if(e&2){let t=a.$implicit,o=r();c("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(t))("onLabel",o.getOptionLabel(t))("offLabel",o.getOptionLabel(t))("disabled",o.disabled||o.isOptionDisabled(t))("allowEmpty",o.getAllowEmpty())("size",o.size),s(),D(o.itemTemplate||o._itemTemplate?1:-1)}}var Tt=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,xt={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},ze=(()=>{class e extends S{name="selectbutton";theme=Tt;classes=xt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var St={provide:re,useExisting:X(()=>ue),multi:!0},ue=(()=>{class e extends M{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new q;onChange=new q;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=f(ze);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(t){return this.optionLabel?le(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?le(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?le(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,o,n){if(this.disabled||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let l=this.getOptionValue(o),G;if(this.multiple)i?G=this.value.filter(ge=>!J(ge,l,this.equalityKey)):G=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;G=i?null:l}this.focusedIndex=n,this.value=G,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:o,index:n})}changeTabIndexes(t,o){let n,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[l],index:l});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(o=>!J(o,this.getOptionValue(t),this.dataKey))}isSelected(t){let o=!1,n=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(J(i,n,this.dataKey)){o=!0;break}}}else o=J(this.getOptionValue(t),this.value,this.equalityKey);return o}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&(B(i,ft,4),B(i,N,4)),o&2){let l;I(l=F())&&(n.itemTemplate=l.first),I(l=F())&&(n.templates=l)}},hostVars:10,hostBindings:function(o,n){o&2&&(C("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),z(n.style),O("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",w],tabindex:[2,"tabindex","tabindex",ie],multiple:[2,"multiple","multiple",w],allowEmpty:[2,"allowEmpty","allowEmpty",w],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",w],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",w]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[T([St,ze]),_],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&he(0,Ct,2,9,"p-toggleButton",1,ht,!0),o&2&&ye(n.options)},dependencies:[ce,de,se,pe,x,R,p],encapsulation:2,changeDetection:0})}return e})(),Ve=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[ue,p,p]})}return e})();function kt(e,a){if(e&1&&($(0),U(1,"translate")),e&2){let t=a.$implicit;Y(" ",Q(1,1,t.label)," ")}}function $t(e,a){if(e&1){let t=W();g(0,"div",1)(1,"span",2),$(2),U(3,"translate"),m(),g(4,"p-selectbutton",3),ne("ngModelChange",function(n){E(t);let i=r();return te(i.selectedLang,n)||(i.selectedLang=n),L(n)}),d(5,kt,2,3,"ng-template",4),m()()}if(e&2){let t=r();s(2),P(Q(3,3,"settings.language")),s(2),c("options",t.langOptions),ee("ngModel",t.selectedLang)}}function wt(e,a){if(e&1&&($(0),U(1,"translate")),e&2){let t=a.$implicit;Y(" ",Q(1,1,t.label)," ")}}function Bt(e,a){if(e&1&&($(0),U(1,"translate")),e&2){let t=a.$implicit;Y(" ",Q(1,1,t.label)," ")}}function It(e,a){if(e&1&&($(0),U(1,"translate")),e&2){let t=a.$implicit;Y(" ",Q(1,1,t.label)," ")}}function Ft(e,a){if(e&1){let t=W();g(0,"div",1)(1,"span",2),$(2),U(3,"translate"),m(),g(4,"div",5)(5,"p-selectbutton",6),ne("ngModelChange",function(n){E(t);let i=r();return te(i.selectedTheme,n)||(i.selectedTheme=n),L(n)}),A("onChange",function(){E(t);let n=r();return L(n.changeTheme())}),d(6,wt,2,3,"ng-template",4),m(),g(7,"p-select",7),ne("ngModelChange",function(n){E(t);let i=r();return te(i.selectedScheme,n)||(i.selectedScheme=n),L(n)}),A("onChange",function(){E(t);let n=r();return L(n.changeScheme())}),d(8,Bt,2,3,"ng-template",4)(9,It,2,3,"ng-template",8),m()()()}if(e&2){let t=r();s(2),P(Q(3,5,"settings.theme")),s(3),c("options",t.themeOptions),ee("ngModel",t.selectedTheme),s(2),c("options",t.colorSchemes),ee("ngModel",t.selectedScheme)}}var je=class e{settingsService=f(Ie);mode="all";constructor(){xe(()=>{this.selectedTheme=this.settingsService.darkMode(),this.selectedScheme=this.settingsService.colorScheme()})}langOptions=[{label:"common.language.english",value:"en"},{label:"common.language.french",value:"fr"}];get selectedLang(){return this.settingsService.currentLang()}set selectedLang(a){this.settingsService.setLanguage(a)}themeOptions=[{label:"settings.theme.light",value:!1},{label:"settings.theme.dark",value:!0}];selectedTheme=this.settingsService.darkMode();changeTheme(){this.settingsService.toggle()}colorSchemes=[{label:"settings.theme.default",value:"default"},{label:"settings.theme.deutan",value:"deutan"},{label:"settings.theme.protan",value:"protan"},{label:"settings.theme.tritan",value:"tritan"},{label:"settings.theme.custom",value:"custom"}];markForTranslation(){}selectedScheme=this.settingsService.colorScheme();changeScheme(){this.settingsService.setColorScheme(this.selectedScheme)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["aida-user-settings"]],inputs:{mode:"mode"},decls:3,vars:2,consts:[[1,"flex","flex-column","gap-2"],[1,"flex","flex-column","border-round","p-1","surface-100","text-color-secondary","hover:surface-200","hover:text-primary"],[1,"text-xs","my-1"],["unselectable","true","optionLabel","label","optionValue","value",1,"mb-0",3,"ngModelChange","options","ngModel"],["pTemplate","item"],[1,"flex","flex-row","gap-2"],["unselectable","true","optionLabel","label","optionValue","value",1,"mb-0",3,"ngModelChange","onChange","options","ngModel"],["optionLabel","label","optionValue","value","styleClass","flex-1","appendTo","body",1,"mb-0",3,"ngModelChange","onChange","options","ngModel"],["pTemplate","selectedItem"]],template:function(t,o){t&1&&(g(0,"div",0),d(1,$t,6,5,"div",1)(2,Ft,10,7,"div",1),m()),t&2&&(s(),D(o.mode==="language"||o.mode==="all"?1:-1),s(),D(o.mode==="theme"||o.mode==="all"?2:-1))},dependencies:[ke,Me,de,se,pe,Ve,ue,N,Be,we],encapsulation:2})};var Dt=["*"],Et=({dt:e})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${e("inputgroup.addon.padding")};
    background: ${e("inputgroup.addon.background")};
    color: ${e("inputgroup.addon.color")};
    border-block-start: 1px solid ${e("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${e("inputgroup.addon.border.color")};
    min-width: ${e("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}
`,Lt={root:({props:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},Ne=(()=>{class e extends S{name="inputgroup";theme=Et;classes=Lt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})();var Ot=(()=>{class e extends M{style;styleClass;_componentStyle=f(Ne);static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(o,n){o&2&&(C("data-pc-name","inputgroup"),z(n.style),k(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[T([Ne]),_],ngContentSelectors:Dt,decls:1,vars:0,template:function(o,n){o&1&&(V(),j(0))},dependencies:[x,p],encapsulation:2})}return e})(),Co=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[Ot,p,p]})}return e})();var zt=["*"],Vt={root:"p-inputgroupaddon"},Ae=(()=>{class e extends S{name="inputgroupaddon";classes=Vt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=h({token:e,factory:e.\u0275fac})}return e})(),jt=(()=>{class e extends M{style;styleClass;_componentStyle=f(Ae);get hostStyle(){return this.style}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(o,n){o&2&&(C("data-pc-name","inputgroupaddon"),z(n.hostStyle),k(n.styleClass),O("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[T([Ae]),_],ngContentSelectors:zt,decls:1,vars:0,template:function(o,n){o&1&&(V(),j(0))},dependencies:[x],encapsulation:2})}return e})(),Eo=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=y({imports:[jt,p,p]})}return e})();export{Ye as a,Xt as b,tt as c,gn as d,Dn as e,ue as f,Ve as g,Ot as h,Co as i,jt as j,Eo as k,je as l};
