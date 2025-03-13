"use strict";exports.id=5777,exports.ids=[5777],exports.modules={39701:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(45512),i=s(16928),a=s(70767);let o=({title:e="星辰资本",showBell:t=!0,showLogo:s=!0,centerTitle:o=!1,leftComponent:l,rightComponent:n})=>(0,r.jsxs)("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10",children:[(0,r.jsx)("div",{className:"flex items-center",children:l||(0,r.jsxs)(r.Fragment,{children:[s&&(0,r.jsx)("div",{className:"mr-3",children:(0,r.jsx)(a.A,{})}),(0,r.jsx)("h1",{className:`text-lg font-semibold ${o?"flex-1 text-center":""}`,children:e})]})}),o&&(0,r.jsx)("div",{className:"flex-1"}),n||t&&(0,r.jsx)(i.A,{className:"h-5 w-5 text-gray-600"})]})},70767:(e,t,s)=>{s.d(t,{A:()=>i});var r=s(45512);let i=({className:e="",size:t="md"})=>(0,r.jsxs)("div",{className:`relative ${{sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[t]} ${e}`,children:[(0,r.jsxs)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"skyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#0F2149"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#1A1B4B"})]}),(0,r.jsxs)("linearGradient",{id:"meteorGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#FFD700"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#FFA500"})]}),(0,r.jsxs)("linearGradient",{id:"tailGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#FFD700",stopOpacity:"0.8"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#FFD700",stopOpacity:"0"})]}),(0,r.jsxs)("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,r.jsx)("feGaussianBlur",{stdDeviation:"2",result:"blur"}),(0,r.jsx)("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),(0,r.jsx)("path",{d:"M10,50 C10,25 25,10 50,10 C75,10 90,25 90,50 C90,75 75,90 50,90 C25,90 10,75 10,50 Z",fill:"url(#skyGradient)"}),(0,r.jsx)("circle",{cx:"25",cy:"30",r:"1",fill:"white",opacity:"0.7"}),(0,r.jsx)("circle",{cx:"35",cy:"65",r:"1.2",fill:"white",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"70",cy:"25",r:"1.5",fill:"white",opacity:"0.9"}),(0,r.jsx)("circle",{cx:"80",cy:"60",r:"1",fill:"white",opacity:"0.7"}),(0,r.jsx)("circle",{cx:"60",cy:"75",r:"1.3",fill:"white",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"20",cy:"50",r:"1",fill:"white",opacity:"0.6"}),(0,r.jsx)("path",{d:"M15,75 Q40,55 65,35",stroke:"url(#tailGradient)",strokeWidth:"6",strokeLinecap:"round",fill:"none",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"65",cy:"35",r:"8",fill:"url(#meteorGradient)",filter:"url(#glow)"}),(0,r.jsx)("path",{d:"M65,27 L67,35 L75,35 L69,40 L71,48 L65,43 L59,48 L61,40 L55,35 L63,35 Z",fill:"white",opacity:"0.7"})]}),(0,r.jsx)("div",{className:"absolute inset-0 opacity-0 animate-pulse",children:(0,r.jsx)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:(0,r.jsx)("circle",{cx:"65",cy:"35",r:"10",fill:"rgba(255, 215, 0, 0.3)"})})})]})},86606:(e,t,s)=>{s.d(t,{A:()=>i});var r=s(45512);let i=({children:e})=>(0,r.jsxs)("div",{className:"relative min-h-screen flex flex-col",children:[(0,r.jsxs)("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25",style:{backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundPosition:"bottom center"}}),(0,r.jsx)("div",{className:"absolute inset-0 bg-blue-100/15"})]}),(0,r.jsx)("div",{className:"relative z-10 flex-1 flex flex-col",children:e})]})},87021:(e,t,s)=>{s.d(t,{$:()=>d});var r=s(45512),i=s(58009),a=s(12705),o=s(21643),l=s(59462);let n=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground bg-blue-gray-100/15",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground bg-blue-gray-100/15",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef(({className:e,variant:t,size:s,asChild:i=!1,...o},d)=>{let c=i?a.DX:"button";return(0,r.jsx)(c,{className:(0,l.cn)(n({variant:t,size:s,className:e})),ref:d,...o})});d.displayName="Button"},97643:(e,t,s)=>{s.d(t,{Wu:()=>l,Zp:()=>o});var r=s(45512),i=s(58009),a=s(59462);let o=i.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));o.displayName="Card",i.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...t})).displayName="CardHeader",i.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t})).displayName="CardTitle",i.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let l=i.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("p-6 pt-0",e),...t}));l.displayName="CardContent",i.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},65518:(e,t,s)=>{s.d(t,{dj:()=>u});var r=s(58009);let i=0,a=new Map,o=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?o(s):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},n=[],d={toasts:[]};function c(e){d=l(d,e),n.forEach(e=>{e(d)})}function f({...e}){let t=(i=(i+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||s()}}}),{id:t,dismiss:s,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function u(){let[e,t]=r.useState(d);return r.useEffect(()=>(n.push(t),()=>{let e=n.indexOf(t);e>-1&&n.splice(e,1)}),[e]),{...e,toast:f,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},16928:(e,t,s)=>{s.d(t,{A:()=>r});let r=(0,s(41680).A)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]])},73727:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=s(58009);function i(e,t){let s=(0,r.useRef)(()=>{}),i=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(s.current(),i.current()):(s.current=a(e,r),i.current=a(t,r))}:e||t,[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let s=e(t);return"function"==typeof s?s:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};