const e=(e,t)=>{e.componentOnReady?e.componentOnReady().then((e=>t(e))):i((()=>t(e)))},t=(e,t=[])=>{const n={};return t.forEach((t=>{e.hasAttribute(t)&&(null!==e.getAttribute(t)&&(n[t]=e.getAttribute(t)),e.removeAttribute(t))})),n},n=(e,t,n,r)=>{if("undefined"!=typeof window){const a=window,i=a&&a.Ionic&&a.Ionic.config;if(i){const a=i.get("_ael");if(a)return a(e,t,n,r);if(i._ael)return i._ael(e,t,n,r)}}return e.addEventListener(t,n,r)},r=(e,t,n,r)=>{if("undefined"!=typeof window){const a=window,i=a&&a.Ionic&&a.Ionic.config;if(i){const a=i.get("_rel");if(a)return a(e,t,n,r);if(i._rel)return i._rel(e,t,n,r)}}return e.removeEventListener(t,n,r)},a=(e,t=e)=>e.shadowRoot||t,i=e=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),o=e=>!!e.shadowRoot&&!!e.attachShadow,s=e=>{const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},u=(e,t)=>{let n;const r=e.getAttribute("aria-labelledby"),a=e.id;let i=null!==r&&""!==r.trim()?r:t+"-lbl",o=null!==r&&""!==r.trim()?document.getElementById(r):s(e);return o?(null===r&&(o.id=i),n=o.textContent,o.setAttribute("aria-hidden","true")):""!==a.trim()&&(o=document.querySelector(`label[for="${a}"]`),o&&(""!==o.id?i=o.id:o.id=i=`${a}-lbl`,n=o.textContent)),{label:o,labelId:i,labelText:n}},l=(e,t,n,r,a)=>{if(e||o(t)){let e=t.querySelector("input.aux-input");e||(e=t.ownerDocument.createElement("input"),e.type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=a,e.name=n,e.value=r||""}},d=(e,t,n)=>Math.max(e,Math.min(t,n)),f=(e,t)=>{if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}},c=e=>e.timeStamp||Date.now(),m=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},w=e=>{const t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},_=(e,t)=>{const n=e._original||e;return{_original:e,emit:b(n.emit.bind(n),t)}},b=(e,t=0)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(e,t,...r)}};export{e as a,n as b,d as c,_ as d,r as e,s as f,a as g,o as h,t as i,u as j,l as k,w as l,f as m,b as n,c as o,m as p,i as r}