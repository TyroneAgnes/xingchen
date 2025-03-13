(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4520],{1263:(e,t,s)=>{Promise.resolve().then(s.bind(s,2386))},2386:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var r=s(5155),i=s(2115),a=s(738),l=s(2598),o=s(4085),n=s(2336),c=s(5785),d=s(6046),u=s(8173),x=s.n(u),f=s(4223),p=s(866),h=s(5346),m=s(241);function b(){let e=(0,d.useRouter)(),{login:t}=(0,h.Pj)(),[s,u]=(0,i.useState)(""),[b,y]=(0,i.useState)(""),[g,v]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[N,A]=(0,i.useState)("");(0,i.useEffect)(()=>{let e=new Date().getHours();e>=5&&e<12?A("早上好"):e>=12&&e<14?A("中午好"):e>=14&&e<18?A("下午好"):A("晚上好")},[]);let S=async r=>{r.preventDefault(),w(!0);try{await t(s,b)?((0,m.oR)({title:"登录成功",description:"欢迎回来"}),e.push("/")):(0,m.oR)({title:"登录失败",description:"用户名或密码错误",variant:"destructive"})}catch(e){console.error("登录失败",e),(0,m.oR)({title:"登录失败",description:"请稍后重试",variant:"destructive"})}finally{w(!1)}};return(0,r.jsx)(p.A,{children:(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)(f.A,{title:"登录"}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col justify-center p-6",children:[(0,r.jsxs)("div",{className:"text-center mb-8",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"星辰资本"}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 mt-2",children:[N,"，欢迎使用星投"]})]}),(0,r.jsxs)("form",{onSubmit:S,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(c.J,{htmlFor:"username",children:"账号"}),(0,r.jsx)(n.p,{id:"username",type:"text",value:s,onChange:e=>u(e.target.value),placeholder:"请输入账号",required:!0})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(c.J,{htmlFor:"password",children:"密码"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(n.p,{id:"password",type:g?"text":"password",value:b,onChange:e=>y(e.target.value),placeholder:"请输入密码",required:!0,className:"pr-10"}),(0,r.jsx)("button",{type:"button",className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500",onClick:()=>v(!g),children:g?(0,r.jsx)(a.A,{className:"h-4 w-4"}):(0,r.jsx)(l.A,{className:"h-4 w-4"})})]})]}),(0,r.jsx)(o.$,{type:"submit",className:"w-full",disabled:j,children:j?"登录中...":"登录"})]}),(0,r.jsx)("div",{className:"mt-6 text-center",children:(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["还没有账号?"," ",(0,r.jsx)(x(),{href:"/register",className:"text-blue-600",children:"立即注册"})]})})]})]})})}},4223:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(5155),i=s(5288),a=s(6901);let l=e=>{let{title:t="星辰资本",showBell:s=!0,showLogo:l=!0,centerTitle:o=!1,leftComponent:n,rightComponent:c}=e;return(0,r.jsxs)("header",{className:"flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-10",children:[(0,r.jsx)("div",{className:"flex items-center",children:n||(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)("div",{className:"mr-3",children:(0,r.jsx)(a.A,{})}),(0,r.jsx)("h1",{className:"text-lg font-semibold ".concat(o?"flex-1 text-center":""),children:t})]})}),o&&(0,r.jsx)("div",{className:"flex-1"}),c||s&&(0,r.jsx)(i.A,{className:"h-5 w-5 text-gray-600"})]})}},6901:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(5155);let i=e=>{let{className:t="",size:s="md"}=e;return(0,r.jsxs)("div",{className:"relative ".concat({sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[s]," ").concat(t),children:[(0,r.jsxs)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"skyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#0F2149"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#1A1B4B"})]}),(0,r.jsxs)("linearGradient",{id:"meteorGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#FFD700"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#FFA500"})]}),(0,r.jsxs)("linearGradient",{id:"tailGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"#FFD700",stopOpacity:"0.8"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#FFD700",stopOpacity:"0"})]}),(0,r.jsxs)("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[(0,r.jsx)("feGaussianBlur",{stdDeviation:"2",result:"blur"}),(0,r.jsx)("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),(0,r.jsx)("path",{d:"M10,50 C10,25 25,10 50,10 C75,10 90,25 90,50 C90,75 75,90 50,90 C25,90 10,75 10,50 Z",fill:"url(#skyGradient)"}),(0,r.jsx)("circle",{cx:"25",cy:"30",r:"1",fill:"white",opacity:"0.7"}),(0,r.jsx)("circle",{cx:"35",cy:"65",r:"1.2",fill:"white",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"70",cy:"25",r:"1.5",fill:"white",opacity:"0.9"}),(0,r.jsx)("circle",{cx:"80",cy:"60",r:"1",fill:"white",opacity:"0.7"}),(0,r.jsx)("circle",{cx:"60",cy:"75",r:"1.3",fill:"white",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"20",cy:"50",r:"1",fill:"white",opacity:"0.6"}),(0,r.jsx)("path",{d:"M15,75 Q40,55 65,35",stroke:"url(#tailGradient)",strokeWidth:"6",strokeLinecap:"round",fill:"none",opacity:"0.8"}),(0,r.jsx)("circle",{cx:"65",cy:"35",r:"8",fill:"url(#meteorGradient)",filter:"url(#glow)"}),(0,r.jsx)("path",{d:"M65,27 L67,35 L75,35 L69,40 L71,48 L65,43 L59,48 L61,40 L55,35 L63,35 Z",fill:"white",opacity:"0.7"})]}),(0,r.jsx)("div",{className:"absolute inset-0 opacity-0 animate-pulse",children:(0,r.jsx)("svg",{viewBox:"0 0 100 100",className:"w-full h-full",children:(0,r.jsx)("circle",{cx:"65",cy:"35",r:"10",fill:"rgba(255, 215, 0, 0.3)"})})})]})}},866:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(5155);let i=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"relative min-h-screen flex flex-col",children:[(0,r.jsxs)("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25",style:{backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundPosition:"bottom center"}}),(0,r.jsx)("div",{className:"absolute inset-0 bg-blue-100/15"})]}),(0,r.jsx)("div",{className:"relative z-10 flex-1 flex flex-col",children:t})]})}},4085:(e,t,s)=>{"use strict";s.d(t,{$:()=>c});var r=s(5155),i=s(2115),a=s(2317),l=s(1027),o=s(9602);let n=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground bg-blue-gray-100/15",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground bg-blue-gray-100/15",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:s,variant:i,size:l,asChild:c=!1,...d}=e,u=c?a.DX:"button";return(0,r.jsx)(u,{className:(0,o.cn)(n({variant:i,size:l,className:s})),ref:t,...d})});c.displayName="Button"},2336:(e,t,s)=>{"use strict";s.d(t,{p:()=>l});var r=s(5155),i=s(2115),a=s(9602);let l=i.forwardRef((e,t)=>{let{className:s,type:i,...l}=e;return(0,r.jsx)("input",{type:i,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/60 backdrop-blur-sm bg-blue-gray-100/15",s),ref:t,...l})});l.displayName="Input"},5785:(e,t,s)=>{"use strict";s.d(t,{J:()=>c});var r=s(5155),i=s(2115),a=s(6195),l=s(1027),o=s(9602);let n=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,r.jsx)(a.b,{ref:t,className:(0,o.cn)(n(),s),...i})});c.displayName=a.b.displayName},241:(e,t,s)=>{"use strict";s.d(t,{dj:()=>x,oR:()=>u});var r=s(2115);let i=0,a=new Map,l=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?l(s):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},n=[],c={toasts:[]};function d(e){c=o(c,e),n.forEach(e=>{e(c)})}function u(e){let{...t}=e,s=(i=(i+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function x(){let[e,t]=r.useState(c);return r.useEffect(()=>(n.push(t),()=>{let e=n.indexOf(t);e>-1&&n.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}}},e=>{var t=t=>e(e.s=t);e.O(0,[7525,8190,1288,5346,8441,1517,7358],()=>t(1263)),_N_E=e.O()}]);