import"./assets/styles-D7i-6tQE.js";import{f as h,i as y}from"./assets/vendor-BbSUbo7J.js";const o=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let d,a;const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],a<=new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}};h("#datetime-picker",E);o.disabled=!0;function s(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));function r(t){return String(t).padStart(2,"0")}function u({days:t,hours:e,minutes:n,seconds:c}){p.textContent=r(t),S.textContent=r(e),g.textContent=r(n),C.textContent=r(c)}function T(){o.disabled=!0,d=setInterval(()=>{const e=a-new Date,n=s(e);u(n),e<=0&&(clearInterval(d),u({days:0,hours:0,minutes:0,seconds:0}))},1e3)}o.addEventListener("click",T);
//# sourceMappingURL=1-timer.js.map