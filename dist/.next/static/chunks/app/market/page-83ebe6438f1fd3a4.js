(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2967],{8044:(e,t,s)=>{Promise.resolve().then(s.bind(s,4044))},4044:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var r=s(5155),a=s(2115),l=s(7401);let i=(0,l.A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),c=(0,l.A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),n=(0,l.A)("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),x=(0,l.A)("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);var d=s(853);let o=(0,l.A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);var m=s(5007),f=s(3392),h=s(4223),u=s(866),p=s(3561);let y=["港股","美股","期货","日股"];function j(){let[e,t]=(0,a.useState)("港股"),[s,l]=(0,a.useState)(0),[m,j]=(0,a.useState)({indices:[],sectors:{}}),[v,g]=(0,a.useState)(!0);(0,a.useEffect)(()=>{l(window.innerWidth);let e=()=>l(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let b=async()=>{try{g(!0);let t=await fetch("/api/market?market=".concat(e)),s=await t.json();0===s.code&&j(s.data)}catch(e){console.error("获取市场数据失败:",e)}finally{g(!1)}};(0,a.useEffect)(()=>{b();let e=setInterval(b,5e3);return()=>clearInterval(e)},[e]);let k=e=>{switch(e){case"港股":return(0,r.jsx)(i,{className:"h-3 w-3 mr-1"});case"美股":return(0,r.jsx)(c,{className:"h-3 w-3 mr-1"});case"期货":return(0,r.jsx)(n,{className:"h-3 w-3 mr-1"});case"日股":return(0,r.jsx)(x,{className:"h-3 w-3 mr-1"});default:return null}};return(0,r.jsx)(u.A,{children:(0,r.jsxs)("div",{className:"flex flex-col h-screen w-full mx-auto px-0 pb-14",children:[(0,r.jsx)(h.A,{title:"星辰资本",rightComponent:(0,r.jsx)(d.A,{className:"h-4 w-4"})}),(0,r.jsx)("div",{className:"mt-3 mb-3",children:(0,r.jsxs)("div",{className:"flex w-full",children:[y.map(s=>(0,r.jsxs)("button",{onClick:()=>t(s),className:"flex items-center justify-center py-2 px-2 text-xs flex-1 transition-all duration-200 ".concat(e===s?"bg-white text-primary font-medium border-b-2 border-primary":"text-gray-600 hover:bg-gray-100 bg-gray-50 border-b border-gray-200"),children:[k(s),s]},s)),(0,r.jsx)("button",{className:"flex items-center justify-center py-2 px-2 text-xs bg-gray-50 text-gray-600 hover:bg-gray-100 w-12 border-b border-gray-200",children:(0,r.jsx)(o,{className:"h-4 w-4"})})]})}),(0,r.jsx)(f.F,{className:"flex-1",children:(0,r.jsxs)("div",{className:"px-2 py-1 space-y-4",children:[(0,r.jsx)("div",{className:"grid grid-cols-3 gap-2 mb-4",children:m.indices.map((e,t)=>(0,r.jsx)(w,{title:e.title,value:e.value.toFixed(2),change:e.change.toFixed(2),percentage:e.changePercent.toFixed(2)+"%",isPositive:e.isPositive,windowWidth:s},t))}),Object.entries(m.sectors).map((e,t)=>{let[a,l]=e;return(0,r.jsx)(N,{title:a,items:l,windowWidth:s,className:t>0?"mt-4":""},a)})]})}),(0,r.jsx)(p.A,{})]})})}function w(e){let{title:t,value:s,change:a,percentage:l,isPositive:i,windowWidth:c}=e;return(0,r.jsxs)(m.Zp,{className:"p-2",children:[(0,r.jsx)("div",{className:"text-xs font-medium mb-1 truncate",children:t}),(0,r.jsx)("div",{className:"text-sm font-semibold mb-1",children:s}),(0,r.jsxs)("div",{className:"text-xs ".concat(i?"text-red-500":"text-green-500"),children:[a," (",l,")"]})]})}function N(e){let{title:t,items:s,windowWidth:a,className:l=""}=e;return(0,r.jsxs)("div",{className:"space-y-1 ".concat(l),children:[(0,r.jsx)("div",{className:"flex justify-between items-center",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center mr-1",children:(0,r.jsx)("span",{className:"text-xs",children:"•"})}),(0,r.jsx)("h3",{className:"font-medium text-sm",children:t})]})}),(0,r.jsx)("div",{className:"space-y-2",children:s.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center justify-between py-1",children:[(0,r.jsxs)("div",{className:"flex flex-col w-[35%]",children:[(0,r.jsx)("span",{className:"text-sm font-light truncate leading-none font-sans",children:e.name}),(0,r.jsx)("span",{className:"text-xs text-muted-foreground leading-none mt-1",children:e.symbol})]}),(0,r.jsxs)("div",{className:"text-right w-[30%]",children:[(0,r.jsx)("span",{className:"text-sm font-medium leading-none",children:e.price.toFixed(2)}),(0,r.jsx)("span",{className:"text-xs block leading-none mt-1 ".concat(e.isPositive?"text-red-500":"text-green-500"),children:e.change.toFixed(2)})]}),(0,r.jsxs)("div",{className:"px-2 py-1 rounded-sm ".concat(e.isPositive?"bg-red-500":"bg-green-500"," text-white text-xs w-[25%] text-center"),children:[e.changePercent.toFixed(2),"%"]})]},t))})]})}},3561:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var r=s(5155),a=s(8173),l=s.n(a),i=s(6507),c=s(2320),n=s(865),x=s(6005),d=s(1466),o=s(6046);function m(){let e=(0,o.usePathname)(),t=t=>!!("/"===t&&"/"===e||"/"!==t&&e.startsWith(t));return(0,r.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 flex bg-white shadow-md z-50 h-14",children:[(0,r.jsxs)(l(),{href:"/",className:"flex-1 flex flex-col items-center justify-center ".concat(t("/")?"text-primary":"text-gray-500"),children:[(0,r.jsx)(i.A,{className:"h-5 w-5 mb-0.5"}),(0,r.jsx)("span",{className:"text-xs",children:"首页"})]}),(0,r.jsxs)(l(),{href:"/market",className:"flex-1 flex flex-col items-center justify-center ".concat(t("/market")?"text-primary":"text-gray-500"),children:[(0,r.jsx)(c.A,{className:"h-5 w-5 mb-0.5"}),(0,r.jsx)("span",{className:"text-xs",children:"行情"})]}),(0,r.jsxs)(l(),{href:"/star-invest",className:"flex-1 flex flex-col items-center justify-center ".concat(t("/star-invest")?"text-primary":"text-gray-500"),children:[(0,r.jsx)(n.A,{className:"h-5 w-5 mb-0.5"}),(0,r.jsx)("span",{className:"text-xs",children:"星投"})]}),(0,r.jsxs)(l(),{href:"/trade",className:"flex-1 flex flex-col items-center justify-center ".concat(t("/trade")?"text-primary":"text-gray-500"),children:[(0,r.jsx)(x.A,{className:"h-5 w-5 mb-0.5"}),(0,r.jsx)("span",{className:"text-xs",children:"交易"})]}),(0,r.jsxs)(l(),{href:"/profile",className:"flex-1 flex flex-col items-center justify-center ".concat(t("/profile")?"text-primary":"text-gray-500"),children:[(0,r.jsx)(d.A,{className:"h-5 w-5 mb-0.5"}),(0,r.jsx)("span",{className:"text-xs",children:"我的"})]})]})}},4223:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(5155),a=s(5288),l=s(6901);let i=e=>{let{title:t="星辰资本",showBell:s=!0,showLogo:i=!0,centerTitle:c=!1,leftComponent:n,rightComponent:x}=e;return(0,r.jsxs)("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10",children:[(0,r.jsx)("div",{className:"flex items-center",children:n||(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsx)("div",{className:"mr-3",children:(0,r.jsx)(l.A,{})}),(0,r.jsx)("h1",{className:"text-lg font-semibold ".concat(c?"flex-1 text-center":""),children:t})]})}),c&&(0,r.jsx)("div",{className:"flex-1"}),x||s&&(0,r.jsx)(a.A,{className:"h-5 w-5 text-gray-600"})]})}},6901:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);let a=e=>{let{className:t="",size:s="md"}=e;return(0,r.jsxs)("div",{className:"relative ".concat({sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[s]," ").concat(t),children:[(0,r.jsxs)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"skyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#0F2149"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#1A1B4B"})]}),(0,r.jsxs)("linearGradient",{id:"meteorGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#FFD700"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#FFA500"})]}),(0,r.jsxs)("linearGradient",{id:"tailGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#FFD700",stopOpacity:"0.8"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#FFD700",stopOpacity:"0"})]}),(0,r.jsxs)("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,r.jsx)("feGaussianBlur",{stdDeviation:"2",result:"blur"}),(0,r.jsx)("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),(0,r.jsx)("path",{d:"M10,50 C10,25 25,10 50,10 C75,10 90,25 90,50 C90,75 75,90 50,90 C25,90 10,75 10,50 Z",fill:"url(#skyGradient)"}),(0,r.jsx)("circle",{cx:"25",cy:"30",r:"1",fill:"white",opacity:"0.7"}),(0,r.jsx)("circle",{cx:"35",cy:"65",r:"1.2",fill:"white",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"70",cy:"25",r:"1.5",fill:"white",opacity:"0.9"}),(0,r.jsx)("circle",{cx:"80",cy:"60",r:"1",fill:"white",opacity:"0.7"}),(0,r.jsx)("circle",{cx:"60",cy:"75",r:"1.3",fill:"white",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"20",cy:"50",r:"1",fill:"white",opacity:"0.6"}),(0,r.jsx)("path",{d:"M15,75 Q40,55 65,35",stroke:"url(#tailGradient)",strokeWidth:"6",strokeLinecap:"round",fill:"none",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"65",cy:"35",r:"8",fill:"url(#meteorGradient)",filter:"url(#glow)"}),(0,r.jsx)("path",{d:"M65,27 L67,35 L75,35 L69,40 L71,48 L65,43 L59,48 L61,40 L55,35 L63,35 Z",fill:"white",opacity:"0.7"})]}),(0,r.jsx)("div",{className:"absolute inset-0 opacity-0 animate-pulse",children:(0,r.jsx)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:(0,r.jsx)("circle",{cx:"65",cy:"35",r:"10",fill:"rgba(255, 215, 0, 0.3)"})})})]})}},866:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(5155);let a=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"relative min-h-screen flex flex-col",children:[(0,r.jsxs)("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25",style:{backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundPosition:"bottom center"}}),(0,r.jsx)("div",{className:"absolute inset-0 bg-blue-100/15"})]}),(0,r.jsx)("div",{className:"relative z-10 flex-1 flex flex-col",children:t})]})}},5007:(e,t,s)=>{"use strict";s.d(t,{Wu:()=>c,Zp:()=>i});var r=s(5155),a=s(2115),l=s(9602);let i=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...a})});i.displayName="Card",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",s),...a})}).displayName="CardHeader",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",s),...a})}).displayName="CardTitle",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",s),...a})}).displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",s),...a})});c.displayName="CardContent",a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",s),...a})}).displayName="CardFooter"},3392:(e,t,s)=>{"use strict";s.d(t,{F:()=>c});var r=s(5155),a=s(2115),l=s(1868),i=s(9602);let c=a.forwardRef((e,t)=>{let{className:s,children:a,...c}=e;return(0,r.jsxs)(l.bL,{ref:t,className:(0,i.cn)("relative overflow-hidden",s),...c,children:[(0,r.jsx)(l.LM,{className:"h-full w-full rounded-[inherit]",children:a}),(0,r.jsx)(n,{}),(0,r.jsx)(l.OK,{})]})});c.displayName=l.bL.displayName;let n=a.forwardRef((e,t)=>{let{className:s,orientation:a="vertical",...c}=e;return(0,r.jsx)(l.VM,{ref:t,orientation:a,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",s),...c,children:(0,r.jsx)(l.lr,{className:"relative flex-1 rounded-full bg-border"})})});n.displayName=l.VM.displayName},9602:(e,t,s)=>{"use strict";s.d(t,{MN:()=>c,cn:()=>l,en:()=>n,sJ:()=>i});var r=s(3463),a=s(9795);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.QP)((0,r.$)(t))}let i=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=new Date;return t.setHours(10,0,0,0),t.setDate(t.getDate()+1),{returnTime:t,returnAmount:e+.012*e}};function c(e){return{returnTime:function(e,t){let s=new Date,r=new Date(s);return r.setDate(s.getDate()+1),r.setHours(10,0,0,0),r}(0,0),returnAmount:e+.012*e}}function n(e,t){let s=new Date,r=new Date(e);return s>=t&&r<=t}},853:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(7401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[7525,8190,8697,8441,1517,7358],()=>t(8044)),_N_E=e.O()}]);