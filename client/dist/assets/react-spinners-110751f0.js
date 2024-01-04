import{r as s}from"./react-b2e82637.js";var w={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function P(e){if(typeof e=="number")return{value:e,unit:"px"};var a,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?a=parseFloat(n):a=parseInt(n,10);var t=(e.match(/[^0-9]*$/)||"").toString();return w[t]?{value:a,unit:t}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}var l=function(e,a,n){var t="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return t;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,p=`
    @keyframes `.concat(t,` {
      `).concat(a,`
    }
  `);return i&&i.insertRule(p,0),t},m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++){a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},m.apply(this,arguments)},E=globalThis&&globalThis.__rest||function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n},r=[1,3,5],x=[l("PropagateLoader","25% {transform: translateX(-".concat(r[0],`rem) scale(0.75)}
    50% {transform: translateX(-`).concat(r[1],`rem) scale(0.6)}
    75% {transform: translateX(-`).concat(r[2],`rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}`),"propogate-0"),l("PropagateLoader","25% {transform: translateX(-".concat(r[0],`rem) scale(0.75)}
    50% {transform: translateX(-`).concat(r[1],`rem) scale(0.6)}
    75% {transform: translateX(-`).concat(r[1],`rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}`),"propogate-1"),l("PropagateLoader","25% {transform: translateX(-".concat(r[0],`rem) scale(0.75)}
    75% {transform: translateX(-`).concat(r[0],`rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}`),"propogate-2"),l("PropagateLoader","25% {transform: translateX(".concat(r[0],`rem) scale(0.75)}
    75% {transform: translateX(`).concat(r[0],`rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}`),"propogate-3"),l("PropagateLoader","25% {transform: translateX(".concat(r[0],`rem) scale(0.75)}
    50% {transform: translateX(`).concat(r[1],`rem) scale(0.6)}
    75% {transform: translateX(`).concat(r[1],`rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}`),"propogate-4"),l("PropagateLoader","25% {transform: translateX(".concat(r[0],`rem) scale(0.75)}
    50% {transform: translateX(`).concat(r[1],`rem) scale(0.6)}
    75% {transform: translateX(`).concat(r[2],`rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}`),"propogate-5")];function L(e){var a=e.loading,n=a===void 0?!0:a,t=e.color,o=t===void 0?"#000000":t,i=e.speedMultiplier,p=i===void 0?1:i,d=e.cssOverride,y=d===void 0?{}:d,v=e.size,h=v===void 0?15:v,X=E(e,["loading","color","speedMultiplier","cssOverride","size"]),g=P(h),u=g.value,f=g.unit,b=m({display:"inherit",position:"relative"},y),c=function(O){return{position:"absolute",fontSize:"".concat(u/3).concat(f),width:"".concat(u).concat(f),height:"".concat(u).concat(f),background:o,borderRadius:"50%",animation:"".concat(x[O]," ").concat(1.5/p,"s infinite"),animationFillMode:"forwards"}};return n?s.createElement("span",m({style:b},X),s.createElement("span",{style:c(0)}),s.createElement("span",{style:c(1)}),s.createElement("span",{style:c(2)}),s.createElement("span",{style:c(3)}),s.createElement("span",{style:c(4)}),s.createElement("span",{style:c(5)})):null}export{L as P};
