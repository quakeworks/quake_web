import{r as i,h as o,H as s}from"./p-b4928e3a.js";import{g as t}from"./p-05bc5d89.js";import{s as e}from"./p-789a9b28.js";import{g as r}from"./p-cf71cc83.js";import"./p-9e5a532b.js";import"./p-da3c401c.js";let l=class{constructor(o){i(this,o),this.options=[]}onSelect(i){const o=this.options.find((o=>o.value===i.target.value));o&&e(o.handler)}render(){const i=this.options.find((i=>i.checked)),e=i?i.value:void 0;return o(s,{class:t(this)},o("ion-list",null,void 0!==this.header&&o("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&o("ion-item",null,o("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&o("h3",null,this.subHeader),void 0!==this.message&&o("p",null,this.message))),o("ion-radio-group",{value:e},this.options.map((i=>o("ion-item",{class:r(i.cssClass)},o("ion-label",null,i.text),o("ion-radio",{value:i.value,disabled:i.disabled})))))))}};l.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";export{l as ion_select_popover}