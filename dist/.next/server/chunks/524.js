"use strict";exports.id=524,exports.ids=[524],exports.modules={97335:(e,s,t)=>{t.d(s,{A:()=>f});var a=t(45512),l=t(28531),r=t.n(l),i=t(87137),c=t(94860),x=t(10617),d=t(42417),o=t(87798),n=t(79334);function f(){let e=(0,n.usePathname)(),s=s=>!!("/"===s&&"/"===e||"/"!==s&&e.startsWith(s));return(0,a.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 flex bg-white shadow-md z-50 h-14",children:[(0,a.jsxs)(r(),{href:"/",className:`flex-1 flex flex-col items-center justify-center ${s("/")?"text-primary":"text-gray-500"}`,children:[(0,a.jsx)(i.A,{className:"h-5 w-5 mb-0.5"}),(0,a.jsx)("span",{className:"text-xs",children:"首页"})]}),(0,a.jsxs)(r(),{href:"/market",className:`flex-1 flex flex-col items-center justify-center ${s("/market")?"text-primary":"text-gray-500"}`,children:[(0,a.jsx)(c.A,{className:"h-5 w-5 mb-0.5"}),(0,a.jsx)("span",{className:"text-xs",children:"行情"})]}),(0,a.jsxs)(r(),{href:"/star-invest",className:`flex-1 flex flex-col items-center justify-center ${s("/star-invest")?"text-primary":"text-gray-500"}`,children:[(0,a.jsx)(x.A,{className:"h-5 w-5 mb-0.5"}),(0,a.jsx)("span",{className:"text-xs",children:"星投"})]}),(0,a.jsxs)(r(),{href:"/trade",className:`flex-1 flex flex-col items-center justify-center ${s("/trade")?"text-primary":"text-gray-500"}`,children:[(0,a.jsx)(d.A,{className:"h-5 w-5 mb-0.5"}),(0,a.jsx)("span",{className:"text-xs",children:"交易"})]}),(0,a.jsxs)(r(),{href:"/profile",className:`flex-1 flex flex-col items-center justify-center ${s("/profile")?"text-primary":"text-gray-500"}`,children:[(0,a.jsx)(o.A,{className:"h-5 w-5 mb-0.5"}),(0,a.jsx)("span",{className:"text-xs",children:"我的"})]})]})}},39701:(e,s,t)=>{t.d(s,{A:()=>i});var a=t(45512),l=t(16928),r=t(70767);let i=({title:e="星辰资本",showBell:s=!0,showLogo:t=!0,centerTitle:i=!1,leftComponent:c,rightComponent:x})=>(0,a.jsxs)("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10",children:[(0,a.jsx)("div",{className:"flex items-center",children:c||(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsx)("div",{className:"mr-3",children:(0,a.jsx)(r.A,{})}),(0,a.jsx)("h1",{className:`text-lg font-semibold ${i?"flex-1 text-center":""}`,children:e})]})}),i&&(0,a.jsx)("div",{className:"flex-1"}),x||s&&(0,a.jsx)(l.A,{className:"h-5 w-5 text-gray-600"})]})},70767:(e,s,t)=>{t.d(s,{A:()=>l});var a=t(45512);let l=({className:e="",size:s="md"})=>(0,a.jsxs)("div",{className:`relative ${{sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[s]} ${e}`,children:[(0,a.jsxs)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"skyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#0F2149"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#1A1B4B"})]}),(0,a.jsxs)("linearGradient",{id:"meteorGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#FFD700"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#FFA500"})]}),(0,a.jsxs)("linearGradient",{id:"tailGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#FFD700",stopOpacity:"0.8"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#FFD700",stopOpacity:"0"})]}),(0,a.jsxs)("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,a.jsx)("feGaussianBlur",{stdDeviation:"2",result:"blur"}),(0,a.jsx)("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),(0,a.jsx)("path",{d:"M10,50 C10,25 25,10 50,10 C75,10 90,25 90,50 C90,75 75,90 50,90 C25,90 10,75 10,50 Z",fill:"url(#skyGradient)"}),(0,a.jsx)("circle",{cx:"25",cy:"30",r:"1",fill:"white",opacity:"0.7"}),(0,a.jsx)("circle",{cx:"35",cy:"65",r:"1.2",fill:"white",opacity:"0.8"}),(0,a.jsx)("circle",{cx:"70",cy:"25",r:"1.5",fill:"white",opacity:"0.9"}),(0,a.jsx)("circle",{cx:"80",cy:"60",r:"1",fill:"white",opacity:"0.7"}),(0,a.jsx)("circle",{cx:"60",cy:"75",r:"1.3",fill:"white",opacity:"0.8"}),(0,a.jsx)("circle",{cx:"20",cy:"50",r:"1",fill:"white",opacity:"0.6"}),(0,a.jsx)("path",{d:"M15,75 Q40,55 65,35",stroke:"url(#tailGradient)",strokeWidth:"6",strokeLinecap:"round",fill:"none",opacity:"0.8"}),(0,a.jsx)("circle",{cx:"65",cy:"35",r:"8",fill:"url(#meteorGradient)",filter:"url(#glow)"}),(0,a.jsx)("path",{d:"M65,27 L67,35 L75,35 L69,40 L71,48 L65,43 L59,48 L61,40 L55,35 L63,35 Z",fill:"white",opacity:"0.7"})]}),(0,a.jsx)("div",{className:"absolute inset-0 opacity-0 animate-pulse",children:(0,a.jsx)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:(0,a.jsx)("circle",{cx:"65",cy:"35",r:"10",fill:"rgba(255, 215, 0, 0.3)"})})})]})},86606:(e,s,t)=>{t.d(s,{A:()=>l});var a=t(45512);let l=({children:e})=>(0,a.jsxs)("div",{className:"relative min-h-screen flex flex-col",children:[(0,a.jsxs)("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25",style:{backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundPosition:"bottom center"}}),(0,a.jsx)("div",{className:"absolute inset-0 bg-blue-100/15"})]}),(0,a.jsx)("div",{className:"relative z-10 flex-1 flex flex-col",children:e})]})},97643:(e,s,t)=>{t.d(s,{Wu:()=>c,Zp:()=>i});var a=t(45512),l=t(58009),r=t(59462);let i=l.forwardRef(({className:e,...s},t)=>(0,a.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...s}));i.displayName="Card",l.forwardRef(({className:e,...s},t)=>(0,a.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",e),...s})).displayName="CardHeader",l.forwardRef(({className:e,...s},t)=>(0,a.jsx)("div",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",e),...s})).displayName="CardTitle",l.forwardRef(({className:e,...s},t)=>(0,a.jsx)("div",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",e),...s})).displayName="CardDescription";let c=l.forwardRef(({className:e,...s},t)=>(0,a.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",e),...s}));c.displayName="CardContent",l.forwardRef(({className:e,...s},t)=>(0,a.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",e),...s})).displayName="CardFooter"},666:(e,s,t)=>{t.d(s,{F:()=>c});var a=t(45512),l=t(58009),r=t(53998),i=t(59462);let c=l.forwardRef(({className:e,children:s,...t},l)=>(0,a.jsxs)(r.bL,{ref:l,className:(0,i.cn)("relative overflow-hidden",e),...t,children:[(0,a.jsx)(r.LM,{className:"h-full w-full rounded-[inherit]",children:s}),(0,a.jsx)(x,{}),(0,a.jsx)(r.OK,{})]}));c.displayName=r.bL.displayName;let x=l.forwardRef(({className:e,orientation:s="vertical",...t},l)=>(0,a.jsx)(r.VM,{ref:l,orientation:s,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:(0,a.jsx)(r.lr,{className:"relative flex-1 rounded-full bg-border"})}));x.displayName=r.VM.displayName},99905:(e,s,t)=>{t.d(s,{A:()=>a});let a=(0,t(41680).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},64290:(e,s,t)=>{t.d(s,{A:()=>a});let a=(0,t(41680).A)("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]])},7357:(e,s,t)=>{t.d(s,{A:()=>a});let a=(0,t(41680).A)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},18741:(e,s,t)=>{t.d(s,{A:()=>a});let a=(0,t(41680).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},64977:(e,s,t)=>{t.d(s,{A:()=>a});let a=(0,t(41680).A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])}};