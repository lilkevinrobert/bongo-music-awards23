import{r as c,j as e,a as N}from"./react-b72defc1.js";import{a as y,u as v,b as _,E as C,A as L,c as F,L as S,B as k}from"./index-6c0bf249.js";import{r as l}from"./@material-tailwind-31758b72.js";import{r as z,s as A,G as E,x as O,a3 as T,y as B,z as M}from"./react-icons-f8bf65eb.js";import{N as R}from"./react-router-dom-4c4fad71.js";import{I as q,_ as j}from"./react-hot-toast-7c13a961.js";import{P}from"./react-spinners-e022d723.js";import"./@emotion-dbfef640.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./axios-28bc18a3.js";import"./flowbite-react-155ef844.js";import"./react-indiana-drag-scroll-6942150b.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./react-router-c4d8086b.js";import"./@remix-run-3d0d33fe.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./prop-types-1cbc6ab3.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";import"./goober-70b4b9ca.js";const D=({closeModal:x})=>{const[g,i]=c.useState(!1),[t,p]=c.useState({first_name:"",middle_name:"",last_name:"",stage_name:"",phone_number:"",email:"",bio:""}),a=o=>{const{name:r,value:m}=o.target;p(d=>({...d,[r]:m}))},b=async o=>{i(!0),o.preventDefault(),await y.get("https://api.bongomusicawards.co.tz/sanctum/csrf-cookie").then(()=>{y.post("https://api.bongomusicawards.co.tz/api/artists/1",t).then(r=>{console.log(r),x(),window.setTimeout(()=>j.success(e.jsx("p",{className:"capitalize",children:"Artist Created successful..."})),2e3),i(!1)}).catch(r=>{console.log(r),window.setTimeout(()=>j.error(e.jsx("p",{className:"capitalize",children:"Failed to Create artist..."})),1e3),i(!1)})}).catch(r=>{console.log(r),window.setTimeout(()=>j.error(e.jsx("p",{className:"capitalize",children:"Failed to Create artist..."})),1e3),i(!1)}),console.log("Form submitted:",t)};return e.jsx(l.Card,{className:"mx-auto w-3/4  rounded-lg shadow-lg",children:e.jsxs("form",{className:"w-full px-8 mx-auto my-6",onSubmit:b,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between my-4  uppercase font-semibold",children:[e.jsx(l.Typography,{variant:"h4",children:"Edit Artist"}),e.jsx(z,{className:"w-6 h-6 cursor-pointer rounded-full transition ease-in-out hover:bg-slate-950 hover:text-white",onClick:x})]}),e.jsxs("div",{className:"mb-4 flex items-center gap-12 justify-between ",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx("label",{htmlFor:"firstname",className:"block text-sm font-medium text-gray-700",children:" First Name"}),e.jsx("input",{type:"text",id:"first_name",name:"first_name",required:!0,value:t.first_name,onChange:a,className:"mt-1 p-2 border rounded-md w-full"})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsx("label",{htmlFor:"input2",className:"block text-sm font-medium text-gray-600",children:"Middle Name"}),e.jsx("input",{type:"text",id:"middle_name",name:"middle_name",value:t.middle_name,onChange:a,className:"mt-1 p-2 border rounded-md  w-full"})]})]}),e.jsxs("div",{className:"mb-4 flex items-center gap-12 justify-between ",children:[e.jsxs("div",{className:" w-1/2",children:[e.jsx("label",{htmlFor:"last_name",className:"block text-sm font-medium text-gray-700",children:"Last Name"}),e.jsx("input",{type:"text",id:"last_name",name:"last_name",required:!0,value:t.last_name,onChange:a,className:"mt-1 p-2 w-full border rounded-md bg-transparent"})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsx("label",{htmlFor:"stage_name",className:"block text-sm font-medium text-gray-700",children:"Stage Name"}),e.jsx("input",{type:"text",id:"stage_name",name:"stage_name",required:!0,value:t.stage_name,onChange:a,className:"mt-1 p-2 w-full border rounded-md bg-transparent"})]})]}),e.jsxs("div",{className:"flex items-center gap-12 justify-between",children:[e.jsxs("div",{className:"mb-4 w-1/2",children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),e.jsx("input",{type:"tel",id:"phone_number",name:"phone_number",required:!0,value:t.phone_number,onChange:a,className:"mt-1 p-2 w-full border rounded-md bg-transparent"})]}),e.jsxs("div",{className:"mb-4 w-1/2",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"text",id:"email",name:"email",required:!0,value:t.email,onChange:a,className:"mt-1 p-2 w-full border rounded-md bg-transparent"})]})]}),e.jsxs("div",{className:"mb-4 w-full",children:[e.jsx("label",{htmlFor:"bio",className:"block text-sm font-medium text-gray-700",children:"Biography"}),e.jsx("textarea",{value:t.bio,onChange:a,id:"bio",name:"bio",required:!0,className:"mt-1 p-2 w-full border rounded-md bg-transparent"})]}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex items-center gap-12 justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"w-5 h-5 text-red-500"}),e.jsx(l.Typography,{className:"text-red-500",children:"All fields are required"})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"px-4 py-2 bg-yellow-300 text-slate-950 font-LatoBold rounded-md hover:bg-slate-900 hover:text-yellow-300 transition-all ease-in-out",children:"Submit"})})]})}),e.jsx(q,{position:"top-center"}),g&&e.jsx("div",{className:"flex items-center justify-center mt-4",children:e.jsx(P,{color:"#36d7b7"})})]})})},$=()=>{const x="https://api.bongomusicawards.co.tz/api",[g,i]=c.useState([]),[t,p]=c.useState(""),[a,b]=N.useState(!1),[o,r]=N.useState(!1),m=()=>b(s=>!s),d=()=>r(s=>!s),{data:n,loading:w,error:u}=v(`${x}/artists`);return c.useEffect(()=>{const s=(n==null?void 0:n.data.filter(h=>Object.values(h).some(f=>typeof f=="string"&&f.toLowerCase().includes(t.toLowerCase()))))??[];i(s)},[t,n]),e.jsx(e.Fragment,{children:w?e.jsx(_,{}):u?e.jsx(C,{errorName:u==null?void 0:u.name}):(n==null?void 0:n.data.length)===0?e.jsx(L,{itemName:"artist"}):e.jsxs("div",{className:"mx-auto py-4",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between mb-4 w-full",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between w-auto",children:[e.jsx("input",{type:"text",placeholder:"Search artist...",value:t,onChange:s=>p(s.target.value),className:"p-4 border border-gray-500 rounded-md w-4/4 h-8 font-LatoRegular"}),e.jsxs(l.Button,{size:"sm",className:"ml-2 rounded-md bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2",onClick:()=>p(""),children:[e.jsx(E,{className:"text-lg font-LatoRegular"}),"Clear"]})]}),e.jsxs(l.Button,{size:"sm",onClick:m,className:"flex items-center justify-center gap-2 rounded-md bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-950",children:[e.jsx(O,{className:"text-lg"}),e.jsx(l.Typography,{className:" font-LatoRegular",children:"Add"})]}),e.jsx(l.Dialog,{size:"xs",open:a,handler:m,className:"bg-transparent shadow-none",children:e.jsx("div",{className:"h-full border-red-400 flex items-center",children:e.jsx(F,{closeModal:m})})}),e.jsx(l.Dialog,{size:"xs",open:o,handler:d,className:"bg-transparent shadow-none",children:e.jsx("div",{className:"h-full border-red-400 flex items-center",children:e.jsx(D,{closeModal:d})})})]}),e.jsxs("table",{className:"table-auto w-full bg-white border shadow",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200 text-left font-LatoBold",children:[e.jsx("th",{className:"px-4 py-2",children:"Stage Name"}),e.jsx("th",{className:"px-4 py-2",children:"Genre"}),e.jsx("th",{className:"px-4 py-2",children:"Phone"}),e.jsx("th",{className:"px-4 py-2",children:"Email"}),e.jsx("th",{className:"px-4 py-2 text-center w-40"})]})}),e.jsx("tbody",{className:"font-LatoRegular text-sm",children:g.map((s,h)=>e.jsxs("tr",{className:`${h%2===0?"bg-gray-100":""} group/actions`,children:[e.jsx("td",{className:"border px-4 py-2 capitalize",children:s.stage_name}),e.jsx("td",{className:"border px-4 py-2 capitalize",children:s.genre}),e.jsx("td",{className:"border px-4 py-2 capitalize",children:s.phone}),e.jsx("td",{className:"border px-4 py-2 lowercase",children:s.email}),e.jsxs("td",{className:"border px-4 py-2 opacity-80 transition-all ease-linear group-hover/actions:block",children:[e.jsx(R,{to:`../artists/${s.stage_name}`,children:e.jsx("button",{className:"bg-transparent px-2 py-1 rounded mr-1 hover:bg-blue-700 group",children:e.jsx(T,{className:"w-5 h-5 text-blue-500 group-hover:text-white transition ease-in-out"})})}),e.jsx("button",{className:"bg-transparent px-2 py-1 rounded mr-1 hover:bg-green-700 group",onClick:d,children:e.jsx(B,{className:"w-5 h-5 text-green-500 group-hover:text-white transition ease-in-out"})}),e.jsx("button",{className:"bg-transparent px-2 py-1 rounded hover:bg-red-700 group",children:e.jsx(M,{className:"w-5 h-5 text-red-500 group-hover:text-white transition ease-in-out"})})]})]},h))})]})]})})},fe=()=>e.jsxs(S,{children:[e.jsx(k,{currentPage:"artists"}),e.jsxs("div",{className:"text-slate-900 px-4",children:[e.jsx(l.Typography,{variant:"h4",className:"text-xl",children:"Artists"}),e.jsx($,{})]})]});export{fe as default};
