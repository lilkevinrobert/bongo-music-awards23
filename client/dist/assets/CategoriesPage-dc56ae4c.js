import{r as t,j as e}from"./react-b2e82637.js";import{z as d}from"./react-icons-a33cfcf6.js";import{L as h}from"./index-f8992d48.js";import{r as s}from"./@material-tailwind-afa50add.js";import{F as g,A as x}from"./FetchingItems-33b39cf7.js";import"./@emotion-a47f5506.js";import"./react-dom-53265323.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./react-router-dom-612f81c8.js";import"./react-router-fd5cd91a.js";import"./@remix-run-3d0d33fe.js";import"./axios-28bc18a3.js";import"./flowbite-react-767da4d2.js";import"./react-indiana-drag-scroll-45a13ea1.js";import"./@floating-ui-d8ef0372.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./prop-types-387d7a00.js";import"./deepmerge-1a216343.js";import"./tslib-364d82a0.js";import"./hey-listen-182987e5.js";import"./style-value-types-86c13b32.js";import"./popmotion-54532aa8.js";import"./framesync-409e5dda.js";import"./@motionone-b992d625.js";import"./material-ripple-effects-ffa693ae.js";const q=()=>{const o="http://localhost:8080/api/v1",[i,l]=t.useState(!1),[n,m]=t.useState([]),[c,p]=t.useState(!1),r=()=>p(a=>!a);return t.useEffect(()=>{fetch(`${o}/admin/categories`).then(a=>a.json()).then(a=>{a.success&&(l(!i),m(a))})},[o,i]),e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx("div",{className:"w-full text-black flex flex-row",children:e.jsx("section",{className:"w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10",children:e.jsxs("div",{className:"px-0",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(s.Typography,{variant:"h5",className:"",children:"Categories"}),e.jsxs(s.Button,{className:"hidden items-center gap-2 bg-yellow-400",onClick:r,children:[e.jsx(d,{className:"w-4 h-4 text-slate-50"}),e.jsx(s.Typography,{className:"text-sm font-LatoRegular",children:"Add Category"})]})]}),e.jsx("div",{className:"w-full h-auto my-4 flex items-center justify-center",children:i?e.jsx(g,{}):n.length>0?e.jsx("p",{children:"ok"}):e.jsx(x,{itemName:"category"})})]})})}),e.jsx(s.Dialog,{size:"md",open:c,handler:r,className:"bg-transparent shadow-none",children:e.jsxs(s.Card,{className:"mx-auto w-full max-w-[24rem]",children:[e.jsxs(s.CardBody,{className:"flex flex-col gap-4",children:[e.jsx(s.Typography,{variant:"h4",color:"blue-gray",children:"Sign In"}),e.jsx(s.Typography,{className:"mb-3 font-normal",variant:"paragraph",color:"gray",children:"Enter your email and password to Sign In."}),e.jsx(s.Typography,{className:"-mb-2",variant:"h6",children:"Your Email"}),e.jsx(s.Input,{label:"Email",size:"lg",crossOrigin:void 0}),e.jsx(s.Typography,{className:"-mb-2",variant:"h6",children:"Your Password"}),e.jsx(s.Input,{label:"Password",size:"lg",crossOrigin:void 0}),e.jsx("div",{className:"-ml-2.5 -mt-3",children:e.jsx(s.Checkbox,{label:"Remember Me",crossOrigin:void 0})})]}),e.jsxs(s.CardFooter,{className:"pt-0",children:[e.jsx(s.Button,{variant:"gradient",onClick:r,fullWidth:!0,children:"Sign In"}),e.jsxs(s.Typography,{variant:"small",className:"mt-4 flex justify-center",children:["Don't have an account?",e.jsx(s.Typography,{as:"a",href:"#signup",variant:"small",color:"blue-gray",className:"ml-1 font-bold",onClick:r,children:"Sign up"})]})]})]})})]})})};export{q as default};
