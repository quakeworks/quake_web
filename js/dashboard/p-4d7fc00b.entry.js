import{r as t,c as o}from"./p-b4928e3a.js";let e=class{constructor(e){t(this,e),this.ionRouteDataChanged=o(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const e=t?Object.keys(t):[],n=o?Object.keys(o):[];if(e.length===n.length){for(const n of e)if(t[n]!==o[n])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{e as ion_route}