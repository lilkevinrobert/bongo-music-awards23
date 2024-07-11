import{j as e}from"./react-b72defc1.js";import{r}from"./@material-tailwind-31758b72.js";import{u as d,L as c,A as m,P as x}from"./index-2c059930.js";import{aa as p,ab as u,ac as g,ad as j,ae as h,af as y}from"./react-icons-895b01f1.js";import{R as b,B as f,C as v,X as N,Y as w,T as B,a as C}from"./recharts-b436783c.js";import"./@emotion-dbfef640.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./prop-types-1cbc6ab3.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./react-router-dom-fc96d914.js";import"./react-router-1941b8c8.js";import"./@remix-run-3d0d33fe.js";import"./axios-28bc18a3.js";import"./react-hook-form-eb4a3cdd.js";import"./react-hot-toast-7c13a961.js";import"./goober-70b4b9ca.js";import"./react-spinners-e022d723.js";import"./flowbite-react-e1125f98.js";import"./react-indiana-drag-scroll-6942150b.js";import"./clsx-0839fdbe.js";import"./lodash-36a35ae7.js";import"./react-smooth-ce808070.js";import"./fast-equals-a0711cdd.js";import"./tiny-invariant-dd7d57d2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./eventemitter3-5051c9e6.js";const A=({count:i,title:a,type:o})=>{const l=()=>{switch(o){case"users":return e.jsx("div",{className:"hidden sm:block bg-blue-200 p-2 rounded",children:e.jsx(y,{className:"text-blue-600 text-2xl"})});case"active_events":return e.jsx("div",{className:"hidden sm:block bg-green-200 p-2 rounded",children:e.jsx(h,{className:"text-green-600 text-2xl"})});case"genres":return e.jsx("div",{className:"hidden sm:block bg-purple-200 p-2 rounded",children:e.jsx(j,{className:"text-purple-600 text-2xl"})});case"categories":return e.jsx("div",{className:"hidden sm:block bg-red-200 p-2 rounded",children:e.jsx(g,{className:"text-red-600 text-2xl"})});case"nominators":return e.jsx("div",{className:"hidden sm:block bg-yellow-200 p-2 rounded",children:e.jsx(u,{className:"text-yellow-600 text-2xl"})});default:return e.jsx("div",{className:"hidden sm:block bg-cyan-200 p-2 rounded",children:e.jsx(p,{className:"text-cyan-600 text-2xl"})})}},n=()=>{switch(o){case"users":return"text-blue-500 font-LatoBold text-2xl self-end";case"active_events":return"text-green-500 font-LatoBold text-2xl self-end";case"genres":return"text-purple-500 font-LatoBold text-2xl self-end";case"categories":return"text-red-500 font-LatoBold text-2xl self-end";case"nominators":return"text-yellow-500 font-LatoBold text-2xl self-end";default:return"text-cyan-500 font-LatoBold text-2xl self-end"}},s=()=>{switch(o){case"users":return"bg-blue-50";case"active_events":return"bg-green-50";case"genres":return"bg-purple-50";case"categories":return"bg-red-50";case"nominators":return"bg-yellow-50";default:return"bg-cyan-50"}};return e.jsxs(r.Card,{className:`w-6/6 px-4 py-6 flex flex-row items-center justify-center gap-2 md:justify-between ${s()} text-slate-800 shadow-md rounded-lg`,children:[l(),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(r.Typography,{className:"text-sm md:text-base capitalize text-end",children:a=="active_events"?"active events":a}),e.jsx(r.Typography,{className:n(),children:i})]})]})},t=()=>e.jsx(r.Card,{className:"w-6/6 h-24 py-6 flex animate-pulse flex-wrap items-center gap-8 bg-slate-200 rounded-lg shadow-sm",children:e.jsx(r.Typography,{className:"hidden",children:"Loading"})}),L=[{category:"Best Song",votes:500},{category:"Best Album",votes:450},{category:"Best Male Artist",votes:497},{category:"Best Female Artist",votes:690},{category:"Best Group Artist",votes:121},{category:"Best Male Dancer",votes:230},{category:"Best Female Dancer",votes:530},{category:"Best Dance Group",votes:170},{category:"Best Artist",votes:870}],T=()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r.Typography,{variant:"h3",className:"capitalize text-lg text-slate-700 my-2",children:"votes by category"}),e.jsx(b,{className:"w-auto h-full",children:e.jsxs(f,{data:L,children:[e.jsx(v,{stroke:"#36454F",strokeDasharray:"5 5"}),e.jsx(N,{dataKey:"category",hide:!0}),e.jsx(w,{hide:!0}),e.jsx(B,{contentStyle:{backgroundColor:"rgba(255, 255, 255, 0.3)",color:"#0d0d0d",borderRadius:"8px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)"}}),e.jsx(C,{dataKey:"votes",fill:"#36454F",barSize:50})]})})]}),Le=()=>{const i="https://api.bongomusicawards.co.tz/api",{data:a,loading:o,error:l}=d(`${i}/admin/counts`),n=()=>new Date().toDateString();return e.jsx(c,{children:e.jsxs("div",{className:"text-slate-950 px-4",children:[e.jsxs("section",{className:"py-2 flex flex-row items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(m,{})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Typography,{className:"text-base text-gray-500 font-LatoRegular",children:n()}),e.jsx(x,{profileAddress:"/admin/profile"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"capitalize text-gray-700 text-lg pl-1",children:"overview"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 py-4",children:o?e.jsxs(e.Fragment,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]}):l==null&&a!==null?Object.keys(a).map(s=>e.jsx(A,{count:a[s],title:s,type:s},s)):e.jsxs(e.Fragment,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]})})]}),e.jsx("div",{className:"grid grid-cols-1 my-4 h-96 bg-transparent",children:e.jsx(T,{})})]})})};export{Le as default};
