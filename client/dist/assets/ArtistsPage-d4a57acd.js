import{r as l,a as p,j as e}from"./react-b72defc1.js";import{u as C,d as E,E as z,c as O,e as A,f as R,L as S,B as D}from"./index-1e71b3d6.js";import{r as s}from"./@material-tailwind-31758b72.js";import{G as T,C as _,I as k,aw as M,D as $,E as F}from"./react-icons-2ecf48f6.js";import{N as P}from"./react-router-dom-fc96d914.js";import"./@emotion-dbfef640.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./axios-28bc18a3.js";import"./react-hook-form-eb4a3cdd.js";import"./react-hot-toast-7c13a961.js";import"./goober-70b4b9ca.js";import"./react-spinners-e022d723.js";import"./react-router-1941b8c8.js";import"./@remix-run-3d0d33fe.js";import"./flowbite-react-8a55e8bd.js";import"./react-indiana-drag-scroll-6942150b.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./recharts-b436783c.js";import"./clsx-0839fdbe.js";import"./lodash-36a35ae7.js";import"./react-smooth-ce808070.js";import"./prop-types-1cbc6ab3.js";import"./fast-equals-a0711cdd.js";import"./tiny-invariant-dd7d57d2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./eventemitter3-5051c9e6.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";const G=()=>{const u="https://api.bongomusicawards.co.tz/api",[g,j]=l.useState([]),[n,x]=l.useState(""),[o,f]=l.useState(),[b,y]=p.useState(!1),[N,v]=p.useState(!1),[w,L]=p.useState(!1),c=()=>y(t=>!t),m=()=>v(t=>!t),d=t=>{t&&f(t),L(r=>!r)},{data:a,loading:B,error:i}=C(`${u}/artists`);return l.useEffect(()=>{const t=(a==null?void 0:a.data.filter(r=>Object.values(r).some(h=>typeof h=="string"&&h.toLowerCase().includes(n.toLowerCase()))))??[];j(t)},[n,a]),e.jsx(e.Fragment,{children:B?e.jsx(E,{}):i?e.jsx(z,{errorName:i==null?void 0:i.name}):(a==null?void 0:a.data.length)===0?e.jsx(O,{itemName:"artist"}):e.jsxs("div",{className:"mx-auto py-4",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between mb-4 w-full",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between w-auto",children:[e.jsx("input",{type:"text",placeholder:"Search artist...",value:n,onChange:t=>x(t.target.value),className:"p-4 border border-gray-500 rounded-md w-4/4 h-8 font-LatoRegular"}),e.jsxs(s.Button,{size:"sm",className:"ml-2 rounded-md bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2",onClick:()=>x(""),children:[e.jsx(T,{className:"text-lg font-LatoRegular"}),"Clear"]})]}),e.jsxs(s.Button,{size:"sm",onClick:c,className:"flex items-center justify-center gap-2 rounded-md bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-950",children:[e.jsx(_,{className:"text-lg"}),e.jsx(s.Typography,{className:" font-LatoRegular",children:"Add"})]}),e.jsx(s.Dialog,{size:"xs",open:b,handler:c,className:"bg-transparent shadow-none",children:e.jsx("div",{className:"h-full border-red-400 flex items-center",children:e.jsx(A,{closeModal:c})})}),e.jsx(s.Dialog,{size:"xs",open:N,handler:m,className:"bg-transparent shadow-none",children:e.jsx("div",{className:"h-full border-red-400 flex items-center",children:e.jsx(R,{closeModal:m})})}),e.jsx(s.Dialog,{size:"xs",open:w,handler:d,className:"bg-transparent shadow-none flex flex-row items-center justify-center",children:e.jsx("div",{className:"h-full border-red-400 flex items-center",children:e.jsxs("div",{className:"bg-white p-8 rounded-md shadow-md",children:[e.jsx(s.Typography,{className:"text-slate-900 font-LatoBold text-center",children:"Are you sure you want to Delete?"}),e.jsxs("div",{className:"flex flex-col items-center justify-center py-4",children:[e.jsx(k,{className:"text-4xl text-yellow-400"}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(s.Typography,{className:"text-slate-900 font-LatoRegular",children:"This action is irreversible"}),e.jsx(s.Typography,{className:"text-slate-900 font-LatoRegular",children:"You are about to delete an acount for"}),e.jsx("span",{className:"text-slate-900 uppercase font-LatoBold",children:o&&(o==null?void 0:o.stage_name)})]})]}),e.jsxs("div",{className:"flex items-center justify-center mt-4 bg-transparent",children:[e.jsx(s.Button,{size:"sm",type:"button",onClick:()=>d(void 0),className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-LatoBold py-2 px-4 rounded mr-2 transition ease-in-out",children:"Cancel"}),e.jsx(s.Button,{size:"sm",type:"button",className:"bg-red-500 hover:bg-red-600 text-white font-LatoBold py-2 px-4 rounded",children:"Confirm Delete"})]})]})})})]}),e.jsxs("table",{className:"table-auto w-full bg-white border shadow",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200 text-left font-LatoBold",children:[e.jsx("th",{className:"px-4 py-1",children:"Stage Name"}),e.jsx("th",{className:"px-4 py-1",children:"Full Name"}),e.jsx("th",{className:"px-4 py-1",children:"Genre"}),e.jsx("th",{className:"px-4 py-1",children:"Phone"}),e.jsx("th",{className:"px-4 py-1",children:"Email"}),e.jsx("th",{className:"px-4 py-1 text-center w-40"})]})}),e.jsx("tbody",{className:"font-LatoRegular text-sm",children:g.map((t,r)=>e.jsxs("tr",{className:`${r%2===0?"bg-gray-100":""} group/actions`,children:[e.jsx("td",{className:"border px-4 py-1 capitalize",children:t.stage_name}),e.jsx("td",{className:"border px-4 py-1 capitalize font-normal",children:`${t.first_name} ${t.middle_name!=null?t.middle_name:""} ${t.last_name}`}),e.jsx("td",{className:"border px-4 py-1 capitalize",children:t.genre}),e.jsx("td",{className:"border px-4 py-1 capitalize",children:t.phone}),e.jsx("td",{className:"border px-4 py-1 lowercase",children:t.email}),e.jsxs("td",{className:"border px-4 py-1 opacity-80 transition-all ease-linear group-hover/actions:block",children:[e.jsx(P,{to:`../artists/${t.user_id}`,children:e.jsx("button",{className:"bg-transparent px-2 py-1 rounded mr-1 hover:bg-blue-700 group",children:e.jsx(M,{className:"w-5 h-5 text-blue-500 group-hover:text-white transition ease-in-out"})})}),e.jsx("button",{className:"bg-transparent px-2 py-1 rounded mr-1 hover:bg-green-700 group",onClick:m,children:e.jsx($,{className:"w-5 h-5 text-green-500 group-hover:text-white transition ease-in-out"})}),e.jsx("button",{onClick:()=>d(t),className:"bg-transparent px-2 py-1 rounded hover:bg-red-700 group",children:e.jsx(F,{className:"w-5 h-5 text-red-500 group-hover:text-white transition ease-in-out"})})]})]},r))})]})]})})},Pe=()=>e.jsxs(S,{children:[e.jsx(D,{currentPage:"artists"}),e.jsxs("div",{className:"text-slate-900 px-4",children:[e.jsx(s.Typography,{variant:"h4",className:"text-lg font-LatoBold",children:"Artists"}),e.jsx(G,{})]})]});export{Pe as default};
