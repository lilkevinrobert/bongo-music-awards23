import{j as e,r as c}from"./react-b72defc1.js";import{u as z,E,d as S,D as C,b as F,B as D}from"./index-fcf50a11.js";import{r as t}from"./@material-tailwind-31758b72.js";import{Y as I,aB as A,aC as R,aa as k}from"./react-icons-e27cb2b1.js";import{u as T}from"./react-hook-form-592090e6.js";import{E as $}from"./ErrorFormField-6ee19dad.js";import{o as U}from"./@hookform-8062e1fd.js";import{c as _,a as O}from"./yup-b6e2225a.js";import{a as b}from"./axios-28bc18a3.js";import{_ as l,I as v}from"./react-hot-toast-7c13a961.js";import"./@emotion-dbfef640.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./react-router-dom-fc96d914.js";import"./react-router-1941b8c8.js";import"./@remix-run-3d0d33fe.js";import"./react-spinners-4d5ffb55.js";import"./flowbite-react-49ea4efe.js";import"./react-indiana-drag-scroll-6942150b.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./recharts-b436783c.js";import"./clsx-0839fdbe.js";import"./lodash-36a35ae7.js";import"./react-smooth-ce808070.js";import"./prop-types-1cbc6ab3.js";import"./fast-equals-a0711cdd.js";import"./tiny-invariant-dd7d57d2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./eventemitter3-5051c9e6.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";import"./goober-70b4b9ca.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-dff2028e.js";const q=_().shape({name:O().required()}),H=({closeModal:r})=>{var p;const o="https://api.bongomusicawards.co.tz/api",{register:i,handleSubmit:d,formState:{errors:s}}=T({resolver:U(q)}),f=async x=>{const n=l.loading("Processing..");b.post(`${o}/v1/genres`,x).then(m=>{if(r(),m.status==201){l.dismiss(n);const u=l.success("Genre created successfully.");setTimeout(()=>{l.dismiss(u),window.location.reload()},3e3)}}).catch(()=>{r(),l.dismiss(n),l.error("Failed to create.")})};return e.jsx(t.Card,{className:"mx-auto max-h-[95vh] w-full max-w-[24rem] overflow-y-auto rounded-md",children:e.jsx("form",{onSubmit:d(f),children:e.jsxs(t.CardBody,{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex flex-row items-center justify-between uppercase",children:e.jsx(t.Typography,{variant:"h4",className:"font-LatoBold text-xl capitalize text-gray-900",children:"New Genre"})}),e.jsxs("div",{className:"my-4 w-full",children:[e.jsx("label",{htmlFor:"firstname",className:"block font-LatoBold text-sm capitalize text-gray-900",children:"Genre"}),e.jsx("input",{type:"text",className:"mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular",placeholder:"Enter Genre name",...i("name",{required:!0})}),s.name&&e.jsx($,{message:`Genre ${(p=s.name)==null?void 0:p.message}`})]}),e.jsxs("div",{className:"flex flex-row items-center justify-end gap-1",children:[e.jsx(t.Button,{size:"sm",onClick:r,className:"h-10 rounded-full bg-transparent font-LatoBold capitalize text-gray-900 shadow-none transition ease-in-out hover:bg-gray-200",children:"cancel"}),e.jsx(t.Button,{type:"submit",size:"sm",className:"h-10 rounded-full bg-gray-900 font-LatoBold capitalize transition ease-in-out hover:bg-yellow-300 hover:text-gray-900",children:"create"})]})]})})})},P=({closeModal:r,fetchData:o,genre:i})=>{const d="https://api.bongomusicawards.co.tz/api",[s,f]=c.useState(i),p=n=>{const{name:m,value:u}=n.target;f(g=>({...g,[m]:u}))},x=n=>{n.preventDefault(),b.patch(`${d}/v1/genres/${s==null?void 0:s.id}`,{name:s==null?void 0:s.name}).then(m=>{m.status==200?(r(),o(),l.success("Genre Updated Successfully")):(r(),l.error("Failed to Update Genre."))}).catch(()=>{r(),l.error("Failed to Update Genre.")})};return e.jsx(t.Card,{className:"mx-auto w-full max-w-[24rem] rounded-md",children:e.jsxs("form",{onSubmit:n=>x(n),children:[e.jsx(t.CardHeader,{className:"px-2 py-4 shadow-none",children:e.jsx(t.Typography,{variant:"h4",className:"font-LatoBold text-2xl capitalize text-gray-900",children:"Edit Genre"})}),e.jsx(t.CardBody,{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col items-start gap-2 font-LatoBold text-gray-900",children:[e.jsx(t.Typography,{className:"capitalize",children:"name"}),e.jsx("input",{type:"text",value:s==null?void 0:s.name,name:"name",className:"h-[2rem] w-full rounded border-gray-300 font-LatoRegular text-sm",placeholder:"Name of Genre",onChange:n=>p(n),required:!0})]})}),e.jsxs(t.CardFooter,{className:"flex flex-row items-center justify-end gap-1",children:[e.jsx(t.Button,{size:"md",onClick:r,className:"rounded-full bg-transparent font-LatoBold capitalize text-gray-900 shadow-none transition ease-in-out hover:bg-gray-200",children:"cancel"}),e.jsx(t.Button,{type:"submit",size:"md",className:"rounded-full font-LatoRegular capitalize transition ease-in-out hover:bg-yellow-300 hover:font-LatoBold hover:text-gray-900",children:"save changes"})]})]})})},Y=()=>e.jsx("div",{className:"flex flex-row items-center justify-between my-2 animate-pulse",children:e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx("div",{className:"py-5 px-24 rounded-full bg-slate-200 shadow-sm"}),e.jsx("div",{className:"py-5 px-14 rounded-full bg-slate-200 shadow-sm"}),e.jsx("div",{className:"py-5 px-16 rounded-full bg-slate-200 shadow-sm"}),e.jsx("div",{className:"py-5 px-14 rounded-full bg-slate-200 shadow-sm"}),e.jsx("div",{className:"py-5 px-20 rounded-full bg-slate-200 shadow-sm"})]})}),J=()=>{const r="https://api.bongomusicawards.co.tz/api",{data:o,loading:i,error:d,fetchData:s}=z(`${r}/v1/genres`),[f,p]=c.useState(null),[x,n]=c.useState(null),[m,u]=c.useState(!1),g=()=>u(a=>!a),w=a=>{n(a),a.id&&p(a.id),u(h=>!h)},[j,B]=c.useState(""),[G,y]=c.useState(!1),L=()=>y(a=>!a),N=a=>{a&&B(a),y(h=>!h)};return e.jsxs(e.Fragment,{children:[i?e.jsx(Y,{}):d?e.jsx(E,{errorName:d.name}):(o==null?void 0:o.data.length)===0?e.jsx(S,{itemName:"genre"}):e.jsx("div",{className:"flex flex-row flex-wrap gap-2 py-2",children:o==null?void 0:o.data.map((a,h)=>e.jsxs("div",{className:"group flex w-fit items-center justify-between gap-2 rounded-full bg-amber-100 px-4 py-2 font-LatoBold text-xs uppercase text-gray-800",children:[a.name,e.jsx(I,{className:"text-lg text-gray-500 transition ease-linear group-hover:hidden"}),e.jsxs("div",{className:"hidden flex-row items-center gap-2 rounded-full bg-amber-50 px-2 transition ease-linear group-hover:flex",children:[e.jsx(A,{onClick:()=>w(a),className:"cursor-pointer rounded-full text-lg text-green-500 hover:border-2 hover:border-green-500"}),e.jsx(R,{onClick:()=>N(a.id),className:"cursor-pointer rounded-full text-xl text-red-500 hover:border-2 hover:border-red-500"})]})]},h))}),e.jsx(v,{position:"top-center",containerClassName:"font-LatoRegular"}),e.jsx(t.Dialog,{size:"md",open:m,handler:g,className:"bg-transparent text-black shadow-none",children:e.jsx(P,{closeModal:g,fetchData:s,genre:x&&x})}),e.jsx(t.Dialog,{size:"md",open:G,handler:N,className:"bg-transparent text-black shadow-none",children:j&&e.jsx(t.DialogBody,{className:"flex items-center justify-center",children:e.jsx(C,{closeModal:L,fetchData:s,deleteId:j,deleteItem:"Genre"})})})]})},Xe=()=>{const[r,o]=c.useState(!1),i=()=>o(d=>!d);return e.jsx(e.Fragment,{children:e.jsxs(F,{children:[e.jsx(D,{currentPage:"genres",user:"admin"}),e.jsxs("div",{className:"text-slate-900 px-4",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(t.Typography,{variant:"h4",className:"text-xl font-LatoBold capitalize",children:"genres"}),e.jsxs(t.Button,{size:"sm",onClick:i,className:"capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out",children:[e.jsx(k,{className:"text-lg"})," new"]})]}),e.jsx("div",{children:e.jsx("div",{className:"py-2",children:e.jsx(J,{})})})]}),e.jsx(v,{position:"top-center",containerClassName:"font-LatoRegular"}),e.jsx(t.Dialog,{size:"md",open:r,handler:i,className:"bg-transparent shadow-none",children:e.jsx(H,{closeModal:i})})]})})};export{Xe as default};
