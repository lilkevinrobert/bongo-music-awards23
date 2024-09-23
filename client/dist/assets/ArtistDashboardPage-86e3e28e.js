import{j as t}from"./react-b72defc1.js";import{r as e}from"./@material-tailwind-31758b72.js";import{c,B as m}from"./index-be54127d.js";import{N as n}from"./react-router-dom-fc96d914.js";import{al as x,U as d,P as p,L as g,Q as h,ax as o}from"./react-icons-3248d540.js";import"./@emotion-dbfef640.js";import"./classnames-63c61219.js";import"./tailwind-merge-4e201461.js";import"./prop-types-1cbc6ab3.js";import"./deepmerge-1a216343.js";import"./tslib-e99c189e.js";import"./hey-listen-e9db0d45.js";import"./style-value-types-86c13b32.js";import"./popmotion-e8151042.js";import"./framesync-409e5dda.js";import"./@motionone-d9be48c4.js";import"./material-ripple-effects-ffa693ae.js";import"./@floating-ui-b9e68a19.js";import"./aria-hidden-318acb9e.js";import"./tabbable-6ab97b54.js";import"./react-dom-c53f0256.js";import"./scheduler-765c72db.js";import"./tw-elements-ab3535c4.js";import"./axios-28bc18a3.js";import"./react-hook-form-592090e6.js";import"./react-hot-toast-7c13a961.js";import"./goober-70b4b9ca.js";import"./react-spinners-4d5ffb55.js";import"./@hookform-8062e1fd.js";import"./yup-c8f01269.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-dff2028e.js";import"./react-router-1941b8c8.js";import"./@remix-run-3d0d33fe.js";import"./flowbite-react-4775ba8c.js";import"./react-indiana-drag-scroll-6942150b.js";import"./recharts-b436783c.js";import"./clsx-0839fdbe.js";import"./lodash-36a35ae7.js";import"./react-smooth-ce808070.js";import"./fast-equals-a0711cdd.js";import"./tiny-invariant-dd7d57d2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./eventemitter3-5051c9e6.js";const y=()=>t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"search",name:"artist_nominations",className:"w-full h-[2rem] pl-6 border-gray-300 rounded-full font-LatoRegular text-sm",placeholder:"Search by Award event or Year"}),t.jsx(e.Button,{size:"sm",className:"rounded-full font-LatoBold capitalize text-white hover:text-gray-900 bg-gray-900 hover:bg-amber-300 transition ease-linear",children:"search"})]}),f="/music-poster.jpg",j=()=>{var r;const a={title:"Bongo Music Awards 2024",awardsId:"ndk44ojnd",poster:f,date:"31 August 2024",location:"Mlimani City",isActive:!0,nominations:[{category:"song of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:1243}},{category:"artist of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:547}},{category:"song of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:1243}},{category:"song of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:1243}},{category:"song of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:1243}},{category:"artist of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:547}},{category:"artist of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:547}},{category:"artist of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:547}},{category:"artist of the year",categoryId:"wjwk332d",nomination:{title:"Some song",artist:"Stage name",votes:547}}]};return t.jsxs("div",{className:"py-2 bg-transparent",children:[t.jsx("div",{className:"w-full hidden items-center gap-2",children:t.jsx(y,{})}),t.jsxs("section",{className:"py-4",children:[t.jsx(e.Typography,{variant:"h6",className:"capitalize font-LatoBold text-base text-gray-900 mb-4",children:"active event"}),t.jsxs("div",{className:"flex flex-nowrap items-center gap-12",children:[a&&t.jsxs("div",{className:"w-fit h-16 flex gap-2",children:[t.jsx("div",{className:"w-12 h-12",children:t.jsx("img",{src:a.poster,alt:"event poster",className:"w-full object-cover object-center text-xs font-LatoRegular text-gray-900"})}),t.jsxs("div",{className:"flex flex-col items-start justify-start h-full",children:[t.jsx(e.Typography,{className:"font-LatoBold text-base text-gray-900",children:a.title}),t.jsxs(e.Typography,{className:"font-LatoRegular text-base text-gray-900",children:[a.date,", ",a.location]})]})]}),!a&&t.jsx("div",{className:"w-full p-2 rounded bg-yellow-100",children:t.jsx(e.Typography,{className:"font-LatoBold text-base text-gray-900 text-center",children:"No on-going event at the moment."})})]})]}),t.jsxs("section",{children:[t.jsx(e.Typography,{variant:"h6",className:"capitalize font-LatoBold text-base text-gray-900 mb-4",children:"your nominations"}),t.jsxs("div",{className:"flex flex-col gap-2",children:[(r=a.nominations)==null?void 0:r.splice(0,5).map((s,l)=>t.jsxs("div",{className:"w-full h-14 flex flex-row justify-between bg-stone-50 shadow",children:[t.jsxs("div",{className:"w-full py-2 px-4 border-2 border-stone-100 border-l-amber-300 border-r-transparent",children:[t.jsx(e.Typography,{className:"font-LatoBold uppercase text-base text-amber-600",children:s.category}),t.jsx(e.Typography,{className:"font-LatoBold text-sm capitalize",children:s.nomination.title})]}),t.jsxs("div",{className:"w-fit h-full self-end flex flex-col items-center justify-center px-2 py-4 text-gray-900 bg-amber-300",children:[t.jsx("span",{className:"font-LatoBold text-lg",children:s.nomination.votes}),t.jsx("span",{className:"font-LatoBold text-sm",children:"votes"})]})]},l)),t.jsx(n,{to:"#",className:"text-center text-sm text-gray-900 hover:text-amber-700 hover:underline hover:underline-offset-2 font-LatoRegular capitalize transition ease-linear",children:"see all"})]})]})]})},i=({title:a})=>{const r=s=>{switch(s){case"profile":return t.jsx(h,{className:"text-3xl text-gray-800"});case"songs":return t.jsx(g,{className:"text-3xl text-gray-800"});case"nominations":return t.jsx(p,{className:"text-3xl text-gray-800"});case"settings":return t.jsx(d,{className:"text-3xl text-gray-800"});default:return t.jsx(x,{className:"text-3xl text-gray-800"})}};return t.jsx(n,{to:`/artist/${a}`,children:t.jsxs(e.Card,{className:"w-fit px-10 py-5 rounded-md flex flex-col items-center justify-center gap-2 hover:scale-110 bg-white hover:bg-amber-200 transition-all ease-linear",children:[r(a),t.jsx(e.Typography,{className:"font-LatoBold text-base text-gray-900 capitalize",children:a})]})})},u=()=>t.jsxs("div",{className:"h-auto",children:[t.jsx(e.Typography,{variant:"h2",className:"capitalize font-LatoBold text-xl text-center text-gray-950",children:"quick actions"}),t.jsxs("div",{className:"my-6 flex flex-row flex-wrap items-center justify-center gap-5",children:[t.jsx(i,{title:"songs"}),t.jsx(i,{title:"nominations"}),t.jsx(i,{title:"profile"}),t.jsx(i,{title:"settings"})]})]}),N=()=>t.jsxs("div",{className:"relative w-full h-full flex items-center justify-center rounded-full bg-transparent",children:[t.jsxs("div",{className:"absolute z-20 flex flex-col items-center justify-center",children:[t.jsx(e.Typography,{className:"font-LatoBold text-xl text-gray-900",children:"Hello, VFX Artist"}),t.jsx(e.Typography,{className:"font-LatoRegular text-xl text-center text-gray-900",children:"Welcome, to your Bongo Music Awards Dashboard"})]}),t.jsx(e.Typography,{className:"hidden absolute capitalize text-8xl text-amber-50 font-LatoBold opacity-50 top-0 left-0 z-10",children:"bongo music awards"}),t.jsx(o,{className:"absolute text-9xl hidden text-gray-900 top-0 left-0 z-10 animate-none"}),t.jsx(o,{className:"absolute text-9xl hidden text-amber-100 bottom-0 left-10 z-10 animate-none"}),t.jsx(o,{className:"absolute text-9xl hidden text-amber-100 top-0 right-0 z-10 animate-none"}),t.jsx(o,{className:"absolute text-9xl hidden text-gray-900 bottom-0 right-10 z-10 animate-none"})]}),Lt=()=>t.jsxs(c,{children:[t.jsx("div",{className:"md:hidden",children:t.jsx(m,{currentPage:"home",user:"artist"})}),t.jsxs("div",{className:"flex w-full flex-col gap-8 md:flex-row",children:[t.jsxs("section",{className:"w-full space-y-6",children:[t.jsx("div",{className:"h-2/6 py-20",children:t.jsx(N,{})}),t.jsx("div",{className:"h-4/6 px-6 py-6",children:t.jsx(u,{})})]}),t.jsxs("section",{className:"hidden bg-transparent px-4 py-5",children:[t.jsx(e.Typography,{variant:"h4",className:"font-LatoBold text-lg capitalize text-gray-900",children:"nominations"}),t.jsx(j,{})]})]})]});export{Lt as default};
