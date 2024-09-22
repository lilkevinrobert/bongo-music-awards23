import{j as e,r as i}from"./react-b72defc1.js";import{r as t}from"./@material-tailwind-31758b72.js";import{b as I,e as L}from"./index-be54127d.js";import{aH as z,u as N,aI as B,aJ as E,aK as A,aL as M,s as R,v as $}from"./react-icons-3248d540.js";import{I as w,_ as h}from"./react-hot-toast-7c13a961.js";import"./@emotion-dbfef640.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./prop-types-1cbc6ab3.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./react-router-dom-fc96d914.js";import"./react-router-1941b8c8.js";import"./@remix-run-3d0d33fe.js";import"./axios-28bc18a3.js";import"./react-hook-form-592090e6.js";import"./react-spinners-4d5ffb55.js";import"./@hookform-8062e1fd.js";import"./yup-c8f01269.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-dff2028e.js";import"./flowbite-react-4775ba8c.js";import"./react-indiana-drag-scroll-6942150b.js";import"./recharts-b436783c.js";import"./clsx-0839fdbe.js";import"./lodash-36a35ae7.js";import"./react-smooth-ce808070.js";import"./fast-equals-a0711cdd.js";import"./tiny-invariant-dd7d57d2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./eventemitter3-5051c9e6.js";import"./goober-70b4b9ca.js";const H=()=>e.jsxs("div",{className:"w-full h-96 flex items-center justify-center gap-4",children:[e.jsx(t.Spinner,{color:"yellow",className:"h-12 w-12"}),e.jsx(t.Typography,{className:"text-slate-600 font-LatoRegular",children:"Fetching your Items ..."})]}),J=({id:l,name:m})=>{const d="https://api.bongomusicawards.co.tz/api/v1",[p,g]=i.useState(!1),n=()=>g(o=>!o);function x(){fetch(`${d}/genres/${l}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({genreId:l})}),n(),h.success(e.jsx("p",{className:"capitalize",children:"Genre Deleted Successfully!"})),window.setTimeout(()=>window.location.reload(),2e3)}return e.jsxs(e.Fragment,{children:[e.jsx(t.Card,{className:"group w-full h-32 rounded-md cursor-pointer hover:bg-slate-100",children:e.jsxs(t.CardBody,{className:"flex flex-row items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx(z,{className:"sm:w-8 sm:h-8 lg:w-20 lg:h-16"}),e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-2 capitalize",children:m})]}),e.jsx(N,{onClick:n,className:"hidden group-hover:block group-transition-all group-ease-in-out w-14 h-10 rounded-md cursor-pointer transition ease-in-out text-red-400 hover:bg-red-500 hover:text-white"})]})}),e.jsx(w,{position:"top-center",toastOptions:{duration:5e3,style:{background:"#333",color:"#fff"}}}),e.jsx(t.Dialog,{size:"xs",open:p,handler:n,className:"bg-transparent shadow-none py-24 ",animate:{mount:{scale:1,y:0},unmount:{scale:.9,y:-100}},children:e.jsxs(t.Card,{className:"mx-auto w-full max-w-[24rem] p-4 rounded-md",children:[e.jsxs(t.DialogHeader,{className:"flex flex-row items-center justify-between",children:[e.jsx(t.Typography,{variant:"h5",children:" Genre Delete"}),e.jsx(B,{className:"w-8 h-8 hover:cursor-pointer hover:bg-gray-100 rounded-md",onClick:n})]}),e.jsx(t.DialogBody,{className:"capitalize flex flex-row items-start justify-center",children:e.jsxs(t.Typography,{className:"flex items-center gap-4",children:[e.jsx(E,{className:"w-8 h-8 text-yellow-400"}),e.jsx("p",{className:"capitalize",children:"This action is irreversible."})]})}),e.jsx(t.DialogFooter,{className:"flex items-center justify-center",children:e.jsxs(t.Button,{variant:"gradient",className:"flex items-center justify-center gap-2 bg-red-400 hover:bg-red-600 transition ease-in-out",onClick:x,children:[e.jsx(A,{className:"w-8 h-8"}),e.jsx("span",{children:"yes, delete!"})]})})]})})]})},_={genreName:"",categories:[{categoryName:""}]},Ke=()=>{const l="https://api.bongomusicawards.co.tz/api/v1",[m,d]=i.useState(!0),[p,g]=i.useState([]),[n,x]=i.useState(_),[o,u]=i.useState([""]),[j,b]=i.useState(!1),c=()=>{u([""]),b(!j)};i.useEffect(()=>{const s=k();console.log(s);const a={Authorization:`Bearer ${s}`,"Content-Type":"application/json"};fetch(`${l}/admin/genres`,{method:"GET",headers:a}).then(r=>r.json()).then(r=>{r.length==0?d(!1):(d(!1),g(r))})},[l,m]);const C=s=>{x({...n,genreName:s.target.value})},v=()=>{u([...o,""])},D=(s,a)=>{const r=[...o];r[s]=a.target.value,u(r)},G=(s,a)=>{a.preventDefault();const r=[...o];r.splice(s,1),u(r)},O=s=>s.map(r=>({categoryName:r})),S=s=>s.filter(r=>r.categoryName.trim()!=="");function T(s){s.preventDefault();const a=O(o),r=[...n.categories,...a],F=S(r),y={genreName:n.genreName,categories:F};y==null?(c(),h.error(e.jsx("p",{className:"capitalize",children:"All fields are required"}))):(fetch(`${l}/genres/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then(f=>f.json()).then(f=>{f?(h.success(e.jsx("p",{className:"capitalize",children:"Genre Added Successfully"})),window.setTimeout(()=>window.location.reload(),2e3)):h.error(e.jsx("p",{className:"capitalize",children:"Operation Failed!"}))}),c())}function k(){try{const s=localStorage.getItem("bmawards");if(s!==null)return JSON.parse(s)||{}}catch(s){return console.error("Error parsing data from local storage:",s),{}}}return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:[e.jsx("div",{className:"w-full text-black flex flex-row",children:e.jsxs("section",{className:"w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10",children:[e.jsx("div",{className:"px-0",children:e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(t.Typography,{variant:"h5",className:"",children:"Genres"}),e.jsxs(t.Button,{className:"flex items-center gap-2 bg-yellow-400",onClick:c,children:[e.jsx(M,{className:"w-4 h-4 text-slate-50"}),e.jsx(t.Typography,{className:"text-sm font-LatoRegular",children:"Add Genre"})]})]})}),e.jsx("div",{className:"w-full h-auto my-4 flex items-center justify-center",children:m===!0?e.jsx(H,{}):p.length>0?e.jsx("div",{className:"w-full h-full grid grid-cols-4 gap-2 py-4",children:p.map(s=>{const a=s.id,r=s.genreName;return e.jsx(J,{id:a,name:r},a)})}):e.jsx(L,{itemName:"genre"})})]})}),e.jsx(w,{position:"top-center",containerClassName:"font-LatoRegular",toastOptions:{duration:5e3,style:{background:"#333",color:"#fff"}}})]}),e.jsx(t.Dialog,{size:"xs",open:j,handler:c,className:"bg-transparent shadow-none py-24",animate:{mount:{scale:1,y:0},unmount:{scale:.9,y:-100}},children:e.jsxs(t.Card,{className:"mx-auto w-full max-w-[24rem] rounded-md",children:[e.jsxs(t.CardHeader,{className:"bg-transparent shadow-none flex items-center justify-between py-4",children:[e.jsx(t.Typography,{variant:"h4",color:"blue-gray",children:"New Genre"}),e.jsx(R,{className:"w-8 h-8 cursor-pointer transition ease-in-out hover:bg-slate-200 hover:rounded-md",onClick:c})]}),e.jsxs("form",{children:[e.jsxs(t.CardBody,{className:"flex flex-col gap-4 border py-4",children:[e.jsx(t.Typography,{className:"-mb-2 font-LatoBold",children:"Name"}),e.jsx(t.Input,{size:"lg",crossOrigin:void 0,name:"genreName",onChange:C}),e.jsx(t.Typography,{className:"font-LatoBold",children:"Categories"}),o.map((s,a)=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t.Input,{type:"text",value:s,size:"lg",className:"w-3/3",onChange:r=>{D(a,r)},crossOrigin:void 0}),e.jsx(t.Button,{onClick:r=>G(a,r),className:"bg-slate-600",children:e.jsx(N,{className:"w-6 h-6"})})]},a)),e.jsx($,{className:"w-8 h-8 text-slate-500 cursor-pointer rounded-md transition ease-in-out hover:bg-slate-200",onClick:v})]}),e.jsx(t.CardFooter,{className:"pt-4",children:o.length<1?e.jsx(t.Button,{variant:"gradient",onClick:c,fullWidth:!0,disabled:!0,className:"bg-yellow-400 rounded-md",children:"Create Genre"}):e.jsx(t.Button,{variant:"gradient",fullWidth:!0,className:"bg-yellow-400 rounded-md",onClick:T,children:"Create Genre"})})]})]})})]})};export{Ke as default};
