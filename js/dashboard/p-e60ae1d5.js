import{c as a}from"./p-a0f5a938.js";import{g as t}from"./p-5daa7639.js";import"./p-da3c401c.js";import"./p-b4928e3a.js";const o=(o,r)=>{const i="back"===r.direction,s=r.leavingEl,p=t(r.enteringEl),c=p.querySelector("ion-toolbar"),e=a();if(e.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"),i?e.duration(r.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):e.duration(r.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),c){const t=a();t.addElement(c),e.addAnimation(t)}if(s&&i){e.duration(r.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=a();o.addElement(t(s)).onFinish((a=>{1===a&&o.elements.length>0&&o.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),e.addAnimation(o)}return e};export{o as mdTransitionAnimation}