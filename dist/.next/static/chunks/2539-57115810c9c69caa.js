"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2539],{3610:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},9741:(e,t,n)=>{n.d(t,{N:()=>u});var r=n(2115),o=n(8166),i=n(8068),l=n(2317),a=n(5155);function u(e){let t=e+"CollectionProvider",[n,u]=(0,o.A)(t),[s,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,a.jsx)(s,{scope:t,itemMap:i,collectionRef:o,children:n})};d.displayName=t;let f=e+"CollectionSlot",m=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=c(f,n),u=(0,i.s)(t,o.collectionRef);return(0,a.jsx)(l.DX,{ref:u,children:r})});m.displayName=f;let p=e+"CollectionItemSlot",v="data-radix-collection-item",y=r.forwardRef((e,t)=>{let{scope:n,children:o,...u}=e,s=r.useRef(null),d=(0,i.s)(t,s),f=c(p,n);return r.useEffect(()=>(f.itemMap.set(s,{ref:s,...u}),()=>void f.itemMap.delete(s))),(0,a.jsx)(l.DX,{[v]:"",ref:d,children:o})});return y.displayName=p,[{Provider:d,Slot:m,ItemSlot:y},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},u]}},8068:(e,t,n)=>{n.d(t,{s:()=>l,t:()=>i});var r=n(2115);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():o(e[t],null)}}}}function l(...e){return r.useCallback(i(...e),e)}},8166:(e,t,n)=>{n.d(t,{A:()=>l,q:()=>i});var r=n(2115),o=n(5155);function i(e,t){let n=r.createContext(t),i=e=>{let{children:t,...i}=e,l=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:l,children:t})};return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let l=r.createContext(i),a=n.length;n=[...n,i];let u=t=>{let{scope:n,children:i,...u}=t,s=n?.[e]?.[a]||l,c=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(s.Provider,{value:c,children:i})};return u.displayName=t+"Provider",[u,function(n,o){let u=o?.[e]?.[a]||l,s=r.useContext(u);if(s)return s;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},4256:(e,t,n)=>{n.d(t,{jH:()=>i});var r=n(2115);n(5155);var o=r.createContext(void 0);function i(e){let t=r.useContext(o);return e||t||"ltr"}},7668:(e,t,n)=>{n.d(t,{B:()=>u});var r,o=n(2115),i=n(6611),l=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function u(e){let[t,n]=o.useState(l());return(0,i.N)(()=>{e||n(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},7028:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(2115),o=n(8068),i=n(6611),l=e=>{let{present:t,children:n}=e,l=function(e){var t,n;let[o,l]=r.useState(),u=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(u.current);c.current="mounted"===d?e:"none"},[d]),(0,i.N)(()=>{let t=u.current,n=s.current;if(n!==e){let r=c.current,o=a(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,i.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(u.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=a(u.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),l(e)},[])}}(t),u="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),s=(0,o.s)(l.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(u));return"function"==typeof n||l.isPresent?r.cloneElement(u,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},3360:(e,t,n)=>{n.d(t,{hO:()=>u,sG:()=>a});var r=n(2115),o=n(7650),i=n(2317),l=n(5155),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,a=r?i.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function u(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},2317:(e,t,n)=>{n.d(t,{DX:()=>l});var r=n(2115),o=n(8068),i=n(5155),l=r.forwardRef((e,t)=>{let{children:n,...o}=e,l=r.Children.toArray(n),u=l.find(s);if(u){let e=u.props.children,n=l.map(t=>t!==u?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(a,{...o,ref:t,children:n})});l.displayName="Slot";var a=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),l=function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props);return n.type!==r.Fragment&&(l.ref=t?(0,o.t)(t,e):e),r.cloneElement(n,l)}return r.Children.count(n)>1?r.Children.only(null):null});a.displayName="SlotClone";var u=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return r.isValidElement(e)&&e.type===u}},8217:(e,t,n)=>{n.d(t,{UC:()=>z,B8:()=>X,bL:()=>H,l9:()=>q});var r=n(2115),o=n(3610),i=n(8166),l=n(9741),a=n(8068),u=n(7668),s=n(3360),c=n(1524),d=n(1488),f=n(4256),m=n(5155),p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},y="RovingFocusGroup",[b,w,g]=(0,l.N)(y),[N,h]=(0,i.A)(y,[g]),[R,x]=N(y),C=r.forwardRef((e,t)=>(0,m.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,m.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,m.jsx)(E,{...e,ref:t})})}));C.displayName=y;var E=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:i,loop:l=!1,dir:u,currentTabStopId:y,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:g,onEntryFocus:N,preventScrollOnEntryFocus:h=!1,...x}=e,C=r.useRef(null),E=(0,a.s)(t,C),j=(0,f.jH)(u),[A=null,M]=(0,d.i)({prop:y,defaultProp:b,onChange:g}),[T,O]=r.useState(!1),D=(0,c.c)(N),S=w(n),F=r.useRef(!1),[P,_]=r.useState(0);return r.useEffect(()=>{let e=C.current;if(e)return e.addEventListener(p,D),()=>e.removeEventListener(p,D)},[D]),(0,m.jsx)(R,{scope:n,orientation:i,dir:j,loop:l,currentTabStopId:A,onItemFocus:r.useCallback(e=>M(e),[M]),onItemShiftTab:r.useCallback(()=>O(!0),[]),onFocusableItemAdd:r.useCallback(()=>_(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>_(e=>e-1),[]),children:(0,m.jsx)(s.sG.div,{tabIndex:T||0===P?-1:0,"data-orientation":i,...x,ref:E,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!T){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=S().filter(e=>e.focusable);I([e.find(e=>e.active),e.find(e=>e.id===A),...e].filter(Boolean).map(e=>e.ref.current),h)}}F.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>O(!1))})})}),j="RovingFocusGroupItem",A=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:i=!0,active:l=!1,tabStopId:a,...c}=e,d=(0,u.B)(),f=a||d,p=x(j,n),v=p.currentTabStopId===f,y=w(n),{onFocusableItemAdd:g,onFocusableItemRemove:N}=p;return r.useEffect(()=>{if(i)return g(),()=>N()},[i,g,N]),(0,m.jsx)(b.ItemSlot,{scope:n,id:f,focusable:i,active:l,children:(0,m.jsx)(s.sG.span,{tabIndex:v?0:-1,"data-orientation":p.orientation,...c,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{i?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return M[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=y().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)n.reverse();else if("prev"===t||"next"===t){"prev"===t&&n.reverse();let r=n.indexOf(e.currentTarget);n=p.loop?function(e,t){return e.map((n,r)=>e[(t+r)%e.length])}(n,r+1):n.slice(r+1)}setTimeout(()=>I(n))}})})})});A.displayName=j;var M={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var T=n(7028),O="Tabs",[D,S]=(0,i.A)(O,[h]),F=h(),[P,_]=D(O),k=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:l="horizontal",dir:a,activationMode:c="automatic",...p}=e,v=(0,f.jH)(a),[y,b]=(0,d.i)({prop:r,onChange:o,defaultProp:i});return(0,m.jsx)(P,{scope:n,baseId:(0,u.B)(),value:y,onValueChange:b,orientation:l,dir:v,activationMode:c,children:(0,m.jsx)(s.sG.div,{dir:v,"data-orientation":l,...p,ref:t})})});k.displayName=O;var L="TabsList",U=r.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...o}=e,i=_(L,n),l=F(n);return(0,m.jsx)(C,{asChild:!0,...l,orientation:i.orientation,dir:i.dir,loop:r,children:(0,m.jsx)(s.sG.div,{role:"tablist","aria-orientation":i.orientation,...o,ref:t})})});U.displayName=L;var G="TabsTrigger",$=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:i=!1,...l}=e,a=_(G,n),u=F(n),c=B(a.baseId,r),d=W(a.baseId,r),f=r===a.value;return(0,m.jsx)(A,{asChild:!0,...u,focusable:!i,active:f,children:(0,m.jsx)(s.sG.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...l,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():a.onValueChange(r)}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&a.onValueChange(r)}),onFocus:(0,o.m)(e.onFocus,()=>{let e="manual"!==a.activationMode;f||i||!e||a.onValueChange(r)})})})});$.displayName=G;var K="TabsContent",V=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:o,forceMount:i,children:l,...a}=e,u=_(K,n),c=B(u.baseId,o),d=W(u.baseId,o),f=o===u.value,p=r.useRef(f);return r.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,m.jsx)(T.C,{present:i||f,children:n=>{let{present:r}=n;return(0,m.jsx)(s.sG.div,{"data-state":f?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:d,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:r&&l})}})});function B(e,t){return"".concat(e,"-trigger-").concat(t)}function W(e,t){return"".concat(e,"-content-").concat(t)}V.displayName=K;var H=k,X=U,q=$,z=V},1524:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(2115);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(2115),o=n(1524);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,l]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,l=r.useRef(i),a=(0,o.c)(t);return r.useEffect(()=>{l.current!==i&&(a(i),l.current=i)},[i,l,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:i,s=(0,o.c)(n);return[u,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else l(t)},[a,e,l,s])]}},6611:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(2115),o=globalThis?.document?r.useLayoutEffect:()=>{}},1027:(e,t,n)=>{n.d(t,{F:()=>l});var r=n(3463);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,i=r.$,l=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:a}=t,u=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],r=null==a?void 0:a[e];if(null===t)return null;let i=o(t)||o(r);return l[e][i]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return i(e,u,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...s}[t]):({...a,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);