import{b as p,r as u,c as Xe,e as ae,a as w,j as R,_ as ze}from"./app-3e8e7963.js";import{T as Je,I as Qe}from"./TextInput-f89084b4.js";import{I as Ze}from"./InputLabel-b9d1d275.js";import{l as J,s as j,a as I,u as O,b as de,D as x,X as S,o as $,y as T,p as et,c as Q,f as xe,T as tt,d as nt,S as we,C as rt,e as K,t as te}from"./transition-3ddd8097.js";var ye;let H=(ye=p.useId)!=null?ye:function(){let e=J(),[t,n]=p.useState(e?()=>j.nextId():null);return I(()=>{t===null&&n(j.nextId())},[t]),t!=null?""+t:void 0};function Se(e){return j.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var k=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(k||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),ot=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ot||{});function at(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Te||{});function lt(e,t=0){var n;return e===((n=Se(e))==null?void 0:n.body)?!1:O(t,{[0](){return e.matches(le)},[1](){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var it=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(it||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function A(e){e==null||e.focus({preventScroll:!0})}let ut=["textarea","input"].join(",");function st(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ut))!=null?n:!1}function ct(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),l=t(r);if(a===null||l===null)return 0;let o=a.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?ct(e):e:at(e);a.length>0&&o.length>1&&(o=o.filter(y=>!a.includes(y))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=o.length,m;do{if(c>=f||c+f<=0)return 0;let y=s+c;if(t&16)y=(y+f)%f;else{if(y<0)return 3;if(y>=f)return 1}m=o[y],m==null||m.focus(d),c+=i}while(m!==l.activeElement);return t&6&&st(m)&&m.select(),2}function ne(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return document.addEventListener(e,a,n),()=>document.removeEventListener(e,a,n)},[e,n])}function dt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function a(o,i){if(!r.current||o.defaultPrevented)return;let s=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(o);if(d!==null&&d.getRootNode().contains(d)){for(let c of s){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(d)||o.composed&&o.composedPath().includes(f))return}return!lt(d,Te.Loose)&&d.tabIndex!==-1&&o.preventDefault(),t(o,d)}}let l=u.useRef(null);ne("mousedown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),ne("click",o=>{l.current&&(a(o,()=>l.current),l.current=null)},!0),ne("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ft(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&mt(n)?!1:r}function mt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let pt="div";var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});function gt(e,t){let{features:n=1,...r}=e,a={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return S({ourProps:a,theirProps:r,slot:{},defaultTag:pt,name:"Hidden"})}let ie=x(gt);var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function fe(e,t){let n=u.useRef([]),r=$(e);u.useEffect(()=>{let a=[...n.current];for(let[l,o]of t.entries())if(n.current[l]!==o){let i=r(t,a);return n.current=t,i}},[r,...t])}function vt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ht(e,t,n){let r=de(t);u.useEffect(()=>{function a(l){r.current(l)}return window.addEventListener(e,a,n),()=>window.removeEventListener(e,a,n)},[e,n])}var _=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(_||{});function wt(){let e=u.useRef(0);return ht("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Z(...e){return u.useMemo(()=>Se(...e),[...e])}function Le(e,t,n,r){let a=de(n);u.useEffect(()=>{e=e??window;function l(o){a.current(o)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function yt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Fe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Et="div";var ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ke||{});function bt(e,t){let n=u.useRef(null),r=T(n,t),{initialFocus:a,containers:l,features:o=30,...i}=e;J()||(o=1);let s=Z(n);St({ownerDocument:s},!!(o&16));let d=Pt({ownerDocument:s,container:n,initialFocus:a},!!(o&2));Tt({ownerDocument:s,container:n,containers:l,previousActiveElement:d},!!(o&8));let c=wt(),f=$(v=>{let P=n.current;P&&(L=>L())(()=>{O(c.current,{[_.Forwards]:()=>{q(P,k.First,{skipElements:[v.relatedTarget]})},[_.Backwards]:()=>{q(P,k.Last,{skipElements:[v.relatedTarget]})}})})}),m=et(),y=u.useRef(!1),D={ref:r,onKeyDown(v){v.key=="Tab"&&(y.current=!0,m.requestAnimationFrame(()=>{y.current=!1}))},onBlur(v){let P=Fe(l);n.current instanceof HTMLElement&&P.add(n.current);let L=v.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Ne(P,L)||(y.current?q(n.current,O(c.current,{[_.Forwards]:()=>k.Next,[_.Backwards]:()=>k.Previous})|k.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&A(v.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:X.Focusable}),S({ourProps:D,theirProps:i,defaultTag:Et,name:"FocusTrap"}),!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:X.Focusable}))}let $t=x(bt),B=Object.assign($t,{features:ke}),F=[];yt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function xt(e=!0){let t=u.useRef(F.slice());return fe(([n],[r])=>{r===!0&&n===!1&&Q(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),$(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function St({ownerDocument:e},t){let n=xt(t);fe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&A(n())},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,Q(()=>{r.current&&A(n())})}),[])}function Pt({ownerDocument:e,container:t,initialFocus:n},r){let a=u.useRef(null),l=xe();return fe(()=>{if(!r)return;let o=t.current;o&&Q(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){a.current=i;return}}else if(o.contains(i)){a.current=i;return}n!=null&&n.current?A(n.current):q(o,k.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=e==null?void 0:e.activeElement})},[r]),a}function Tt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},a){let l=xe();Le(e==null?void 0:e.defaultView,"focus",o=>{if(!a||!l.current)return;let i=Fe(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Ne(i,d)?(r.current=d,A(d)):(o.preventDefault(),o.stopPropagation(),A(s)):A(r.current)},!0)}function Ne(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ae=u.createContext(!1);function Dt(){return u.useContext(Ae)}function ue(e){return p.createElement(Ae.Provider,{value:e.force},e.children)}function Lt(e){let t=Dt(),n=u.useContext(Ce),r=Z(e),[a,l]=u.useState(()=>{if(!t&&n!==null||j.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{a!==null&&(r!=null&&r.body.contains(a)||r==null||r.body.appendChild(a))},[a,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),a}let Ft=u.Fragment;function kt(e,t){let n=e,r=u.useRef(null),a=T(tt(c=>{r.current=c}),t),l=Z(r),o=Lt(r),[i]=u.useState(()=>{var c;return j.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),s=J(),d=u.useRef(!1);return I(()=>{if(d.current=!1,!(!o||!i))return o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i)),()=>{d.current=!0,Q(()=>{var c;d.current&&(!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o))))})}},[o,i]),s?!o||!i?null:Xe.createPortal(S({ourProps:{ref:a},theirProps:n,defaultTag:Ft,name:"Portal"}),i):null}let Nt=u.Fragment,Ce=u.createContext(null);function At(e,t){let{target:n,...r}=e,a={ref:T(t)};return p.createElement(Ce.Provider,{value:n},S({ourProps:a,theirProps:r,defaultTag:Nt,name:"Popover.Group"}))}let Ct=x(kt),Mt=x(At),se=Object.assign(Ct,{Group:Mt}),Me=u.createContext(null);function Re(){let e=u.useContext(Me);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Re),t}return e}function Rt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=$(l=>(t(o=>[...o,l]),()=>t(o=>{let i=o.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),a=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Me.Provider,{value:a},n.children)},[t])]}let Ot="p";function It(e,t){let n=H(),{id:r=`headlessui-description-${n}`,...a}=e,l=Re(),o=T(t);I(()=>l.register(r),[r,l.register]);let i={ref:o,...l.props,id:r};return S({ourProps:i,theirProps:a,slot:l.slot||{},defaultTag:Ot,name:l.name||"Description"})}let Ht=x(It),Bt=Object.assign(Ht,{}),me=u.createContext(()=>{});me.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function Ut(){return u.useContext(me)}function _t({children:e,onUpdate:t,type:n,element:r,enabled:a}){let l=Ut(),o=$((...i)=>{t==null||t(...i),l(...i)});return I(()=>{let i=a===void 0||a===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,a]),p.createElement(me.Provider,{value:o},e)}function jt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Wt=typeof Object.is=="function"?Object.is:jt,{useState:Vt,useEffect:Yt,useLayoutEffect:Gt,useDebugValue:Kt}=ae;function qt(e,t,n){const r=t(),[{inst:a},l]=Vt({inst:{value:r,getSnapshot:t}});return Gt(()=>{a.value=r,a.getSnapshot=t,re(a)&&l({inst:a})},[e,r,t]),Yt(()=>(re(a)&&l({inst:a}),e(()=>{re(a)&&l({inst:a})})),[e]),Kt(r),r}function re(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Wt(n,r)}catch{return!0}}function Xt(e,t,n){return t()}const zt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jt=!zt,Qt=Jt?Xt:qt,Zt="useSyncExternalStore"in ae?(e=>e.useSyncExternalStore)(ae):Qt;function en(e){return Zt(e.subscribe,e.getSnapshot,e.getSnapshot)}function tn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(a){return r.add(a),()=>r.delete(a)},dispatch(a,...l){let o=t[a].call(n,...l);o&&(n=o,r.forEach(i=>i()))}}}function nn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,a=r.clientWidth-r.offsetWidth,l=e-a;n.style(r,"paddingRight",`${l}px`)}}}function rn(){if(!vt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function a(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!a(d)&&(l=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function on(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function an(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let N=tn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:nt(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:an(n)},a=[rn(),nn(),on()];a.forEach(({before:l})=>l==null?void 0:l(r)),a.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});N.subscribe(()=>{let e=N.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!r||!a&&r)&&N.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&N.dispatch("TEARDOWN",n)}});function ln(e,t,n){let r=en(N),a=e?r.get(e):void 0,l=a?a.count>0:!1;return I(()=>{if(!(!e||!t))return N.dispatch("PUSH",e,n),()=>N.dispatch("POP",e,n)},[t,e]),l}let oe=new Map,U=new Map;function Ee(e,t=!0){I(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function a(){var o;if(!r)return;let i=(o=U.get(r))!=null?o:1;if(i===1?U.delete(r):U.set(r,i-1),i!==1)return;let s=oe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,oe.delete(r))}let l=(n=U.get(r))!=null?n:0;return U.set(r,l+1),l!==0||(oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),a},[e,t])}var un=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(un||{}),sn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(sn||{});let cn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},z=u.createContext(null);z.displayName="DialogContext";function W(e){let t=u.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function dn(e,t,n=()=>[document.body]){ln(e,t,r=>{var a;return{containers:[...(a=r.containers)!=null?a:[],n]}})}function fn(e,t){return O(t.type,cn,e,t)}let mn="div",pn=we.RenderStrategy|we.Static;function gn(e,t){let n=H(),{id:r=`headlessui-dialog-${n}`,open:a,onClose:l,initialFocus:o,__demoMode:i=!1,...s}=e,[d,c]=u.useState(0),f=rt();a===void 0&&f!==null&&(a=(f&K.Open)===K.Open);let m=u.useRef(null),y=T(m,t),D=u.useRef(null),v=Z(m),P=e.hasOwnProperty("open")||f!==null,L=e.hasOwnProperty("onClose");if(!P&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let E=a?0:1,[C,Oe]=u.useReducer(fn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),M=$(()=>l(!1)),pe=$(g=>Oe({type:0,id:g})),V=J()?i?!1:E===0:!1,Y=d>1,ge=u.useContext(z)!==null,Ie=Y?"parent":"leaf",ve=f!==null?(f&K.Closing)===K.Closing:!1,He=(()=>ge||ve?!1:V)(),Be=u.useCallback(()=>{var g,b;return(b=Array.from((g=v==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(h=>h.id==="headlessui-portal-root"?!1:h.contains(D.current)&&h instanceof HTMLElement))!=null?b:null},[D]);Ee(Be,He);let Ue=(()=>Y?!0:V)(),_e=u.useCallback(()=>{var g,b;return(b=Array.from((g=v==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(h=>h.contains(D.current)&&h instanceof HTMLElement))!=null?b:null},[D]);Ee(_e,Ue);let ee=$(()=>{var g,b;return[...Array.from((g=v==null?void 0:v.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?g:[]).filter(h=>!(h===document.body||h===document.head||!(h instanceof HTMLElement)||h.contains(D.current)||C.panelRef.current&&h.contains(C.panelRef.current))),(b=C.panelRef.current)!=null?b:m.current]}),je=(()=>!(!V||Y))();dt(()=>ee(),M,je);let We=(()=>!(Y||E!==0))();Le(v==null?void 0:v.defaultView,"keydown",g=>{We&&(g.defaultPrevented||g.key===De.Escape&&(g.preventDefault(),g.stopPropagation(),M()))});let Ve=(()=>!(ve||E!==0||ge))();dn(v,Ve,ee),u.useEffect(()=>{if(E!==0||!m.current)return;let g=new ResizeObserver(b=>{for(let h of b){let G=h.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&M()}});return g.observe(m.current),()=>g.disconnect()},[E,m,M]);let[Ye,Ge]=Rt(),Ke=u.useMemo(()=>[{dialogState:E,close:M,setTitleId:pe},C],[E,C,M,pe]),he=u.useMemo(()=>({open:E===0}),[E]),qe={ref:y,id:r,role:"dialog","aria-modal":E===0?!0:void 0,"aria-labelledby":C.titleId,"aria-describedby":Ye};return p.createElement(_t,{type:"Dialog",enabled:E===0,element:m,onUpdate:$((g,b)=>{b==="Dialog"&&O(g,{[ce.Add]:()=>c(h=>h+1),[ce.Remove]:()=>c(h=>h-1)})})},p.createElement(ue,{force:!0},p.createElement(se,null,p.createElement(z.Provider,{value:Ke},p.createElement(se.Group,{target:m},p.createElement(ue,{force:!1},p.createElement(Ge,{slot:he,name:"Dialog.Description"},p.createElement(B,{initialFocus:o,containers:ee,features:V?O(Ie,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},S({ourProps:qe,theirProps:s,slot:he,defaultTag:mn,features:pn,visible:E===0,name:"Dialog"})))))))),p.createElement(ie,{features:X.Hidden,ref:D}))}let vn="div";function hn(e,t){let n=H(),{id:r=`headlessui-dialog-overlay-${n}`,...a}=e,[{dialogState:l,close:o}]=W("Dialog.Overlay"),i=T(t),s=$(c=>{if(c.target===c.currentTarget){if(ft(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),d=u.useMemo(()=>({open:l===0}),[l]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:a,slot:d,defaultTag:vn,name:"Dialog.Overlay"})}let wn="div";function yn(e,t){let n=H(),{id:r=`headlessui-dialog-backdrop-${n}`,...a}=e,[{dialogState:l},o]=W("Dialog.Backdrop"),i=T(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:l===0}),[l]);return p.createElement(ue,{force:!0},p.createElement(se,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:a,slot:s,defaultTag:wn,name:"Dialog.Backdrop"})))}let En="div";function bn(e,t){let n=H(),{id:r=`headlessui-dialog-panel-${n}`,...a}=e,[{dialogState:l},o]=W("Dialog.Panel"),i=T(t,o.panelRef),s=u.useMemo(()=>({open:l===0}),[l]),d=$(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:d},theirProps:a,slot:s,defaultTag:En,name:"Dialog.Panel"})}let $n="h2";function xn(e,t){let n=H(),{id:r=`headlessui-dialog-title-${n}`,...a}=e,[{dialogState:l,setTitleId:o}]=W("Dialog.Title"),i=T(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:l===0}),[l]);return S({ourProps:{ref:i,id:r},theirProps:a,slot:s,defaultTag:$n,name:"Dialog.Title"})}let Sn=x(gn),Pn=x(yn),Tn=x(bn),Dn=x(hn),Ln=x(xn),be=Object.assign(Sn,{Backdrop:Pn,Panel:Tn,Overlay:Dn,Title:Ln,Description:Bt});function $e({className:e="",disabled:t,children:n,...r}){return w("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function Fn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:a=()=>{}}){const l=()=>{r&&a()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return w(te,{show:t,as:u.Fragment,leave:"duration-200",children:R(be,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[w(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:w("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),w(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:w(be.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function kn({type:e="button",className:t="",disabled:n,children:r,...a}){return w("button",{...a,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Rn({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:a,setData:l,delete:o,processing:i,reset:s,errors:d}=ze({password:""}),c=()=>{n(!0)},f=y=>{y.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>r.current.focus(),onFinish:()=>s()})},m=()=>{n(!1),s()};return R("section",{className:`space-y-6 ${e}`,children:[R("header",{children:[w("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),w("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),w($e,{onClick:c,children:"Delete Account"}),w(Fn,{show:t,onClose:m,children:R("form",{onSubmit:f,className:"p-6",children:[w("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),w("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),R("div",{className:"mt-6",children:[w(Ze,{htmlFor:"password",value:"Password",className:"sr-only"}),w(Je,{id:"password",type:"password",name:"password",ref:r,value:a.password,onChange:y=>l("password",y.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),w(Qe,{message:d.password,className:"mt-2"})]}),R("div",{className:"mt-6 flex justify-end",children:[w(kn,{onClick:m,children:"Cancel"}),w($e,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{Rn as default};
