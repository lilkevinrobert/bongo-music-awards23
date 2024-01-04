import{r as n}from"./react-b2e82637.js";import{i as v,g as U,r as O,j as y,p as I,m as F,A as L,s as T,a as w}from"./@remix-run-3d0d33fe.js";/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},R.apply(this,arguments)}const B=n.createContext(null),k=n.createContext(null),x=n.createContext(null),b=n.createContext(null),C=n.createContext({outlet:null,matches:[],isDataRoute:!1}),j=n.createContext(null);function H(t,e){let{relative:r}=e===void 0?{}:e;E()||v(!1);let{basename:o,navigator:l}=n.useContext(x),{hash:a,pathname:u,search:s}=W(t,{relative:r}),i=u;return o!=="/"&&(i=u==="/"?o:y([o,u])),l.createHref({pathname:i,search:s,hash:a})}function E(){return n.useContext(b)!=null}function N(){return E()||v(!1),n.useContext(b).location}function M(t){n.useContext(x).static||n.useLayoutEffect(t)}function ee(){let{isDataRoute:t}=n.useContext(C);return t?Y():A()}function A(){E()||v(!1);let t=n.useContext(B),{basename:e,navigator:r}=n.useContext(x),{matches:o}=n.useContext(C),{pathname:l}=N(),a=JSON.stringify(U(o).map(i=>i.pathnameBase)),u=n.useRef(!1);return M(()=>{u.current=!0}),n.useCallback(function(i,c){if(c===void 0&&(c={}),!u.current)return;if(typeof i=="number"){r.go(i);return}let d=O(i,JSON.parse(a),l,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:y([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,a,l,t])}function W(t,e){let{relative:r}=e===void 0?{}:e,{matches:o}=n.useContext(C),{pathname:l}=N(),a=JSON.stringify(U(o).map(u=>u.pathnameBase));return n.useMemo(()=>O(t,JSON.parse(a),l,r==="path"),[t,a,l,r])}function te(t,e,r){E()||v(!1);let{navigator:o}=n.useContext(x),{matches:l}=n.useContext(C),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let i=N(),c;if(e){var d;let m=typeof e=="string"?I(e):e;s==="/"||(d=m.pathname)!=null&&d.startsWith(s)||v(!1),c=m}else c=i;let h=c.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",p=F(t,{pathname:g}),f=K(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},u,m.params),pathname:y([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:y([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),l,r);return e&&f?n.createElement(b.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:L.Pop}},f):f}function _(){let t=X(),e=w(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},e),r?n.createElement("pre",{style:l},r):null,a)}const q=n.createElement(_,null);class z extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?n.createElement(C.Provider,{value:this.props.routeContext},n.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G(t){let{routeContext:e,match:r,children:o}=t,l=n.useContext(B);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(C.Provider,{value:e},o)}function K(t,e,r){var o;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let a=t,u=(o=r)==null?void 0:o.errors;if(u!=null){let s=a.findIndex(i=>i.route.id&&(u==null?void 0:u[i.route.id]));s>=0||v(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,i,c)=>{let d=i.route.id?u==null?void 0:u[i.route.id]:null,h=null;r&&(h=i.route.errorElement||q);let g=e.concat(a.slice(0,c+1)),p=()=>{let f;return d?f=h:i.route.Component?f=n.createElement(i.route.Component,null):i.route.element?f=i.route.element:f=s,n.createElement(G,{match:i,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:f})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?n.createElement(z,{location:r.location,revalidation:r.revalidation,component:h,error:d,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var D=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function Q(t){let e=n.useContext(B);return e||v(!1),e}function S(t){let e=n.useContext(k);return e||v(!1),e}function V(t){let e=n.useContext(C);return e||v(!1),e}function J(t){let e=V(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function X(){var t;let e=n.useContext(j),r=S(P.UseRouteError),o=J(P.UseRouteError);return e||((t=r.errors)==null?void 0:t[o])}function Y(){let{router:t}=Q(D.UseNavigateStable),e=J(P.UseNavigateStable),r=n.useRef(!1);return M(()=>{r.current=!0}),n.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,R({fromRouteId:e},a)))},[t,e])}function re(t){let{basename:e="/",children:r=null,location:o,navigationType:l=L.Pop,navigator:a,static:u=!1}=t;E()&&v(!1);let s=e.replace(/^\/*/,"/"),i=n.useMemo(()=>({basename:s,navigator:a,static:u}),[s,a,u]);typeof o=="string"&&(o=I(o));let{pathname:c="/",search:d="",hash:h="",state:g=null,key:p="default"}=o,f=n.useMemo(()=>{let m=T(c,s);return m==null?null:{location:{pathname:m,search:d,hash:h,state:g,key:p},navigationType:l}},[s,c,d,h,g,p,l]);return f==null?null:n.createElement(x.Provider,{value:i},n.createElement(b.Provider,{children:r,value:f}))}new Promise(()=>{});function ne(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:n.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:n.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}export{k as D,x as N,re as R,N as a,B as b,te as c,H as d,ee as e,ne as m,W as u};