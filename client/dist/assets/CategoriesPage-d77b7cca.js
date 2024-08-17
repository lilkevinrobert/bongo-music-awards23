import{j as e,r as o}from"./react-b72defc1.js";import{u as A,E as S,d as k,D as I,b as R,B as F,e as G}from"./index-310b4e38.js";import{r as a}from"./@material-tailwind-31758b72.js";import{aA as T,aB as H,aC as M,aD as O,aa as $}from"./react-icons-b7cccd47.js";import{I as P}from"./react-hot-toast-7c13a961.js";import"./@emotion-dbfef640.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./react-router-dom-fc96d914.js";import"./react-router-1941b8c8.js";import"./@remix-run-3d0d33fe.js";import"./axios-28bc18a3.js";import"./react-hook-form-592090e6.js";import"./react-spinners-4d5ffb55.js";import"./flowbite-react-827eff7f.js";import"./react-indiana-drag-scroll-6942150b.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./recharts-b436783c.js";import"./clsx-0839fdbe.js";import"./lodash-36a35ae7.js";import"./react-smooth-ce808070.js";import"./prop-types-1cbc6ab3.js";import"./fast-equals-a0711cdd.js";import"./tiny-invariant-dd7d57d2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./eventemitter3-5051c9e6.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";import"./goober-70b4b9ca.js";const _=({closeModal:l,genre:r,categoryGenre:i})=>e.jsx(a.Card,{className:"mx-auto w-full max-w-[24rem] rounded-md",children:e.jsxs("form",{children:[e.jsxs(a.CardHeader,{className:"shadow-none pt-4 px-2",children:[e.jsx(a.Typography,{variant:"h4",className:"text-2xl capitalize font-LatoBold text-gray-900",children:"Edit Category"}),e.jsxs("div",{className:"text-sm text-gray-800 flex items-center capitalize",children:[e.jsx(T,{className:"text-2xl"}),e.jsxs(a.Typography,{className:"bg-yellow-200 px-4 py-1 rounded-r-full font-LatoRegular",children:["in ~ ",`${i}`]})]})]}),e.jsx(a.CardBody,{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col items-start gap-2 font-LatoBold text-gray-900",children:[e.jsx(a.Typography,{className:"capitalize",children:"name"}),e.jsx("input",{type:"text",value:r==null?void 0:r.name,className:"w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded",placeholder:"Name of Sponsor"})]})}),e.jsxs(a.CardFooter,{className:"flex flex-row items-center justify-end gap-1",children:[e.jsx(a.Button,{size:"md",onClick:l,className:"capitalize text-gray-900 shadow-none bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold rounded-full",children:"cancel"}),e.jsx(a.Button,{size:"md",className:"capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full",children:"save changes"})]})]})}),U=()=>e.jsx("div",{className:"my-2 animate-pulse",children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"}),e.jsx("div",{className:"w-full h-10 rounded bg-slate-200 shadow-sm"})]})}),W=({open:l})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`${l?"rotate-180":""} mr-2 h-5 w-5 text-gray-600 transition-transform`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})}),q=()=>{const l="https://api.bongomusicawards.co.tz/api/v1",{data:r,loading:i,error:d,fetchData:j}=A(`${l}/genres/category/all`),[c,y]=o.useState([]),w=t=>{y(s=>s.includes(t)?s.filter(n=>n!==t):[...s,t])},[m,N]=o.useState(""),[b,p]=o.useState(!1),v=()=>p(t=>!t),x=t=>{t&&N(t),p(s=>!s)},[J,C]=o.useState(null),[h,L]=o.useState(""),[g,B]=o.useState(null),[D,u]=o.useState(!1),f=()=>u(t=>!t),z=(t,s)=>{B(s),t&&s&&(C(s.id),L(t)),u(n=>!n)};return e.jsxs(e.Fragment,{children:[i?e.jsx(U,{}):d?e.jsx(S,{errorName:d.name,message:d.message}):(r==null?void 0:r.data.length)===0?e.jsx(k,{itemName:"category"}):e.jsx("div",{children:r==null?void 0:r.data.map((t,s)=>e.jsxs(a.Accordion,{title:t.name,open:c.includes(s+1),icon:e.jsx(W,{open:c.includes(s+1)}),className:"bg-transparent transition ease-linear hover:bg-yellow-50",children:[e.jsx(a.AccordionHeader,{onClick:()=>w(s+1),children:e.jsxs(a.Typography,{variant:"h6",className:"border-2 border-transparent border-l-yellow-300 border-r-transparent pl-2 font-LatoBold capitalize text-gray-800",children:["in - ",t.name," ",e.jsx("span",{className:"pl-2 font-LatoBold text-xs text-gray-400",children:"genre"})]})}),e.jsxs(a.AccordionBody,{className:"flex flex-row flex-wrap items-center gap-2 bg-white",children:[t.categories&&t.categories.map((n,E)=>e.jsxs("div",{className:"group relative flex w-fit items-center justify-between gap-2 rounded-full bg-amber-100 px-4 py-2 font-LatoBold text-xs uppercase text-gray-800 transition ease-linear hover:bg-gray-800 hover:text-gray-50",children:[e.jsx(H,{className:"text-lg text-gray-700 transition ease-linear group-hover:text-gray-50"}),n.name,e.jsxs("div",{className:"invisible flex flex-row items-center gap-2 rounded-full bg-amber-50 px-2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100",children:[e.jsx(M,{onClick:()=>z(t.name,n),className:"cursor-pointer rounded-full text-xl text-green-500 hover:border-2 hover:border-green-500"}),e.jsx(O,{onClick:()=>x(n.id),className:"cursor-pointer rounded-full text-2xl text-red-500 hover:border-2 hover:border-red-500"})]})]},E)),t.categories.length==0&&e.jsx("div",{className:"w-full text-center font-LatoRegular text-base capitalize text-gray-900",children:e.jsx("span",{className:"rounded-full bg-yellow-100 px-4 py-2",children:"no categories found."})})]})]},s))}),e.jsx(a.Dialog,{size:"md",open:b,handler:x,className:"bg-transparent text-black shadow-none",children:m&&e.jsx(a.DialogBody,{className:"flex items-center justify-center",children:e.jsx(I,{closeModal:v,fetchData:j,deleteId:m,deleteItem:"Genre"})})}),e.jsx(a.Dialog,{size:"md",open:D,handler:f,className:"bg-transparent text-black shadow-none",children:e.jsx(_,{closeModal:f,genre:g&&g,categoryGenre:h&&h})})]})},qe=()=>{const[l,r]=o.useState(!1),i=()=>r(d=>!d);return e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(F,{currentPage:"categories",user:"admin"}),e.jsxs("div",{className:"text-slate-900 px-4",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(a.Typography,{variant:"h4",className:"text-xl font-LatoBold capitalize",children:"Categories"}),e.jsxs(a.Button,{size:"sm",onClick:i,className:"capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out",children:[e.jsx($,{className:"text-lg"})," new"]})]}),e.jsx("div",{children:e.jsx("div",{className:"py-2",children:e.jsx(q,{})})})]}),e.jsx(P,{position:"top-center",containerClassName:"font-LatoRegular"}),e.jsx(a.Dialog,{size:"md",open:l,handler:i,className:"bg-transparent shadow-none",children:e.jsx(G,{closeModal:i})})]})})};export{qe as default};
