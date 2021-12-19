import{G as e}from"./p-5ec72e2a.js";export{G as GESTURE_CONTROLLER}from"./p-5ec72e2a.js";const t=(e,t,n,r)=>{const s=o(e)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;let c,i;return e.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",i="__zone_symbol__removeEventListener"):(c="addEventListener",i="removeEventListener"),e[c](t,n,s),()=>{e[i](t,n,s)}},o=e=>{if(void 0===n)try{const t=Object.defineProperty({},"passive",{get:()=>{n=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(e){n=!1}return!!n};let n;const r=e=>e instanceof Document?e:e.ownerDocument,s=o=>{let n=!1,s=!1,u=!0,d=!1;const l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},o),v=l.canStart,m=l.onWillStart,p=l.onStart,f=l.onEnd,y=l.notCaptured,_=l.onMove,h=l.threshold,b=l.passive,E=l.blurOnStart,L={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},x=((e,t,o)=>{const n=o*(Math.PI/180),r="x"===e,s=Math.cos(n),c=t*t;let i=0,a=0,u=!1,d=0;return{start(e,t){i=e,a=t,d=0,u=!0},detect(e,t){if(!u)return!1;const o=e-i,n=t-a,l=o*o+n*n;if(l<c)return!1;const v=Math.sqrt(l),m=(r?o:n)/v;return d=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(l.direction,l.threshold,l.maxAngle),D=e.createGesture({name:o.gestureName,priority:o.gesturePriority,disableScroll:o.disableScroll}),T=()=>{n&&(d=!1,_&&_(L))},g=()=>!(D&&!D.capture()||(n=!0,u=!1,L.startX=L.currentX,L.startY=L.currentY,L.startTime=L.currentTime,m?m(L).then(j):j(),0)),j=()=>{E&&(()=>{if("undefined"!=typeof document){const e=document.activeElement;null!==e&&e.blur&&e.blur()}})(),p&&p(L),u=!0},G=()=>{n=!1,s=!1,d=!1,u=!0,D.release()},O=e=>{const t=n,o=u;G(),o&&(c(L,e),t?f&&f(L):y&&y(L))},X=((e,o,n,s,c)=>{let i,a,u,d,l,v,m,p=0;const f=r=>{p=Date.now()+2e3,o(r)&&(!a&&n&&(a=t(e,"touchmove",n,c)),u||(u=t(r.target,"touchend",_,c)),d||(d=t(r.target,"touchcancel",_,c)))},y=s=>{p>Date.now()||o(s)&&(!v&&n&&(v=t(r(e),"mousemove",n,c)),m||(m=t(r(e),"mouseup",h,c)))},_=e=>{b(),s&&s(e)},h=e=>{E(),s&&s(e)},b=()=>{a&&a(),u&&u(),d&&d(),a=u=d=void 0},E=()=>{v&&v(),m&&m(),v=m=void 0},L=()=>{b(),E()},x=(o=!0)=>{o?(i||(i=t(e,"touchstart",f,c)),l||(l=t(e,"mousedown",y,c))):(i&&i(),l&&l(),i=l=void 0,L())};return{enable:x,stop:L,destroy:()=>{x(!1),s=n=o=void 0}}})(l.el,(e=>{const t=a(e);return!(s||!u)&&(i(e,L),L.startX=L.currentX,L.startY=L.currentY,L.startTime=L.currentTime=t,L.velocityX=L.velocityY=L.deltaX=L.deltaY=0,L.event=e,(!v||!1!==v(L))&&(D.release(),!!D.start()&&(s=!0,0===h?g():(x.start(L.startX,L.startY),!0))))}),(e=>{n?!d&&u&&(d=!0,c(L,e),requestAnimationFrame(T)):(c(L,e),x.detect(L.currentX,L.currentY)&&(x.isGesture()&&g()||Y()))}),O,{capture:!1,passive:b}),Y=()=>{G(),X.stop(),y&&y(L)};return{enable(e=!0){e||(n&&O(void 0),G()),X.enable(e)},destroy(){D.destroy(),X.destroy()}}},c=(e,t)=>{if(!t)return;const o=e.currentX,n=e.currentY,r=e.currentTime;i(t,e);const s=e.currentX,c=e.currentY,u=(e.currentTime=a(t))-r;if(u>0&&u<100){const t=(c-n)/u;e.velocityX=(s-o)/u*.7+.3*e.velocityX,e.velocityY=.7*t+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=c-e.startY,e.event=t},i=(e,t)=>{let o=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];o=e.clientX,n=e.clientY}else void 0!==e.pageX&&(o=e.pageX,n=e.pageY)}t.currentX=o,t.currentY=n},a=e=>e.timeStamp||Date.now();export{s as createGesture}