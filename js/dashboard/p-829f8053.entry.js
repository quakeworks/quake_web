import{r as s,h as t,H as i}from"./p-b4928e3a.js";import{g as o}from"./p-05bc5d89.js";import{m as a}from"./p-f9072165.js";import{u as e}from"./p-19ab0146.js";import"./p-9e5a532b.js";import"./p-da3c401c.js";import"./p-a0f5a938.js";let r=class{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await e(this.menu)}render(){const s=o(this),a=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":a?"true":null,class:{[s]:!0,"menu-toggle-hidden":a}},t("slot",null))}};r.style=":host(.menu-toggle-hidden){display:none}";export{r as ion_menu_toggle}