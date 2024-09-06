(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();var Fe="_3j9ps0",je="_1c1ulax0",qe="_1c1ulax1",Ae="_1c1ulax2",He="_1c1ulax3",Ve="_1c1ulax4",ze="_1c1ulax5",Ge="_1c1ulax6";const Xe=new DOMParser().parseFromString('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>trash-can</title><rect x="12" y="12" width="2" height="12"/><rect x="18" y="12" width="2" height="12"/><path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"/><rect x="12" y="2" width="8" height="2"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>',"image/svg+xml").documentElement;var Ze=Object.defineProperty,Ke=(t,e,s)=>e in t?Ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,j=(t,e,s)=>(Ke(t,typeof e!="symbol"?e+"":e,s),s),he=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},i=(t,e,s)=>(he(t,e,"read from private field"),s?s.call(t):e.get(t)),d=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},h=(t,e,s,n)=>(he(t,e,"write to private field"),e.set(t,s),s),O=(t,e,s)=>(he(t,e,"access private method"),s);const Qe=t=>{var e,s,n,r;return r=class extends t{constructor(...o){super(...o),d(this,e,void 0),d(this,s,void 0),d(this,n,void 0),h(this,e,null),h(this,s,[]),h(this,n,{parent:null,children:[]})}get parent(){return i(this,e)}set parent(o){h(this,e,o)}get child(){return i(this,s)[0]}set child(o){i(this,s)[0]=o}get children(){return i(this,s)}set children(o){h(this,s,o)}addChild(o){i(this,s).push(o)}get shortcutParent(){return i(this,n).parent}set shortcutParent(o){i(this,n).parent=o}get shortcutChildren(){return i(this,n).children}addShortcutChild(o){i(this,n).children.push(o)}traverseShortcutParent(o,a){o.shortcutParent&&((a(o.shortcutParent)??!1)||this.shortcutParent.traverseShortcutParent(this.shortcutParent,a))}},e=new WeakMap,s=new WeakMap,n=new WeakMap,r},Ye=t=>Array.isArray(t),Je=t=>typeof t=="function",et=t=>typeof t=="string",we=t=>typeof t=="function"&&t.hasOwnProperty("$$typeof"),L=t=>typeof t=="object"&&t!==null&&t.hasOwnProperty("$$typeof"),be=Symbol.for("rvjs.componentBlock"),A=Symbol.for("rvjs.elementBlock"),Ee=Symbol.for("rvjs.forFlowBlock"),Oe=Symbol.for("rvjs.switchFlowBlock"),Pe=Symbol.for("rvjs.toggleFlowBlock"),Se=Symbol.for("rvjs.textNodeBlock"),tt=Symbol.for("rvjs.dynamicRender"),Y=Symbol.for("rvjs.getState"),H=t=>L(t)&&t.$$typeof===be,v=t=>L(t)&&t.$$typeof===A,_e=t=>L(t)&&t.$$typeof===Ee,st=t=>L(t)&&t.$$typeof===Oe,nt=t=>L(t)&&t.$$typeof===Pe,T=t=>L(t)&&t.$$typeof===Se,rt=t=>{var e,s,n,r,o,a,c;return c=class extends t{constructor(...l){super(...l),d(this,e,void 0),d(this,s,void 0),d(this,n,void 0),d(this,r,void 0),d(this,o,void 0),d(this,a,void 0);const{element:u}=l[0];this.element=u,h(this,s,[]),h(this,n,0),h(this,r,0),h(this,o,0),h(this,a,[])}get element(){return i(this,e)}set element(l){h(this,e,l)}get nestedNodes(){return i(this,s)}set nestedNodes(l){h(this,s,l)}get nodes(){return i(this,s).flat(1/0)}get domIndex(){return i(this,n)}set domIndex(l){h(this,n,l)}get domLength(){return i(this,r)}set domLength(l){h(this,r,l)}get rerenderableIndex(){return i(this,o)}set rerenderableIndex(l){h(this,o,l)}get rerenderableChildren(){return i(this,a)}set rerenderableChildren(l){h(this,a,l)}initialDOMUpdate(l){const u=l.parent;u.$$typeof===A?u.requestDOMPushUpdate(u,u.nodes):u.initialDOMUpdate(u)}requestDOMPushUpdate(l,u){const b=document.createDocumentFragment();b.append(...u),l.$$typeof===A&&i(l,e).append(b)}requestRerenderableChildrenUpdate(l,u){this.rerenderableChildren.slice(l.rerenderableIndex+1).forEach(b=>{b.domIndex+=u}),this.domLength+=u}requestDOMSwapUpdate(l,u,b,k,B,y,S,_){const p=u.parent;if(v(u)){const{domIndex:F}=u.rerenderableChildren[B];for(let N=0;N<k.length;N++){const x=k[N],X=[],Z=m=>{if(m)if(v(m)||T(m))X.push(m.element);else if(_e(m))for(let K=0;K<m.children.length;K++)Z(m.children[K]);else Z(m.child)};Z(x),x==null||x.triggerDestroy();for(let m=0;m<X.length;m++)X[m].remove()}const Be=[...u.element.childNodes].slice(y+F,y+F+S);let ue=0;b.forEach(N=>{const x=Be[ue];N===x?ue++:v(u)&&u.element.insertBefore(N,x)}),u.requestRerenderableChildrenUpdate(u,_)}else{const{domIndex:F}=u.rerenderableChildren[B];u.nestedNodes[l.domIndex]=l.nestedNodes,u.domLength+=_,p.requestDOMSwapUpdate(u,p,b,k,u.rerenderableIndex,y+F,S,_),u.requestRerenderableChildrenUpdate(u,_)}}},e=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,o=new WeakMap,a=new WeakMap,c};class ot{}const Ce=t=>{var e,s,n,r,o,a;return a=class extends t{constructor(...c){super(...c),d(this,e,void 0),d(this,s,void 0),d(this,n,void 0),d(this,r,void 0),d(this,o,void 0),h(this,e,""),h(this,s,{}),h(this,n,null),h(this,r,null),h(this,o,null)}get pathname(){return i(this,e)}set pathname(c){h(this,e,c)}get queryParams(){return i(this,s)}set queryParams(c){h(this,s,c)}get pathParam(){return i(this,n)}set pathParam(c){h(this,n,c)}get setOutlet(){return i(this,r)}set setOutlet(c){h(this,r,c)}set lazySetOutlet(c){h(this,o,c)}triggerLazySetOutlet(){i(this,o)&&i(this,o).call(this)}},e=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,o=new WeakMap,a},it=t=>{var e,s;return s=class extends t{constructor(...n){super(...n),d(this,e,void 0),h(this,e,{state:[],globalState:[]})}addStateUnsubscribeHandler(n){i(this,e).state.push(n)}addUnsubscribeGlobalStateHandler(n){i(this,e).globalState.push(n)}cleanUpUnsubscribeState(){i(this,e).state.forEach(n=>n(this)),i(this,e).globalState.forEach(n=>{n(this)})}},e=new WeakMap,s},at={COMPONENT:be,ELEMENT:A,FOR:Ee,SWITCH:Oe,TOGGLE:Pe,TEXT:Se};var J,Me,ee,ke;class G extends Ce(it(rt(Qe(ot)))){constructor(...e){super(...e),d(this,J),d(this,ee),j(this,"$$typeof");const{type:s}=e[0];this.$$typeof=at[s]}traverseChildren(e,s){s(e)&&(H(e)||st(e)||nt(e)?e.child&&e.child.traverseChildren(e.child,s):v(e)?e.children.flat().forEach(n=>{n.traverseChildren(n,s)}):_e(e)&&e.children.flat().forEach(n=>{n.traverseChildren(n,s)}))}triggerCommit(){O(this,J,Me).call(this)}triggerDestroy(){O(this,ee,ke).call(this)}}J=new WeakSet,Me=function(){this.traverseChildren(this,t=>(H(t)&&(t.isRendered()||t.triggerLazyRender(),t.triggerOnMount()),!0))},ee=new WeakSet,ke=function(){this.traverseChildren(this,t=>(H(t)&&(t.triggerOnDestroy(),t.deleteAllContextProviders()),T(t)||t.cleanUpUnsubscribeState(),!0))};var R;class U{constructor(e){d(this,R,void 0),h(this,R,e??null)}has(){return i(this,R)!==null}get(){return i(this,R)}set(e){h(this,R,e)}}R=new WeakMap;const g=new U,P=new U,pe=new U([]),V=t=>we(t)&&(t==null?void 0:t.$$typeof)===tt,Ne=(t,e)=>{Object.entries(e).forEach(([s,n])=>{ce(t,s,n)})},ce=(t,e,s)=>{V(s)?lt(t,e,s):me.hasOwnProperty(e)?me[e](t,s):t.element.hasAttribute(e)?t.element.setAttribute(e,s):t.element[e]=s},lt=(t,e,s)=>{g.set({block:t,type:"domProperty",property:e,value:s}),ce(t,e,s()),g.set(null)},me={ref:(t,e)=>{e!==void 0&&(e.current=t.element)},children:(t,e)=>{t.appendChildren(e)},style:(t,e)=>{Object.entries(e).forEach(([s,n])=>{V(n)?(g.set({block:t,type:"styleProperty",property:s,value:n}),t.element.style[s]=n(),g.set(null)):t.element.style[s]=n})},animation:(t,e)=>{t.element.animate(e.keyframes,e.options)},className:(t,e)=>{const s=e.split(" ");t.element.classList.add(...s)},classes:(t,e)=>{e.forEach(s=>{if(V(s)){const n=s();g.set({block:t,type:"classesProperty",property:"classes",value:{classFn:s,removePrevClassFn:()=>{n.split(" ").forEach(r=>{t.element.classList.remove(r)})}}}),s().split(" ").forEach(r=>{t.element.classList.add(r)}),g.set(null)}else et(s)&&s.split(" ").forEach(n=>{t.element.classList.add(n)})})}},ht=(t,e,s)=>{V(s)?t.element.style[e]=s():t.element.style[e]=s};class xe{constructor(){j(this,"data"),j(this,"front"),j(this,"end"),this.data={},this.front=0,this.end=0}get size(){return this.end-this.front}get items(){return Object.values(this.data)}get first(){return this.data[this.front]}push(e){this.data[this.end]=e,this.end++}pop(){if(this.size===0)return null;const e=this.data[this.front];return delete this.data[this.front],this.front++,e}popAll(e){for(;this.size>0;)e(this.pop())}}var E;class ct{constructor(){d(this,E,void 0),h(this,E,new Map)}hasValueBySubscriber(e){return i(this,E).has(e)}getValueBySubscriber(e){return i(this,E).get(e)}createEmptyValue(e,s){i(this,E).set(e,s)}subscribe(e,s){i(this,E).set(e,s)}unsubscribe(e){i(this,E).delete(e)}notify(e){i(this,E).forEach((s,n)=>{e(n,s)})}}E=new WeakMap;const te=t=>{let e=t;const s=new ut;let n=!1;const r=new xe,o=()=>{if(g.has()){const c=g.get();n?r.push(c):s.subscribeState(c)}return pe.set([...pe.get()??[],o]),e};o.$$typeof=Y;const a=c=>{c!==e&&(Je(c)?e=c(e):e=c,n=!0,dt(s),n=!1,r.popAll(l=>{s.subscribeState(l)}))};return a.$$typeof=Y,[o,a]},dt=t=>{const e=[];t.notify((s,n)=>{Object.entries(n.domProperty).forEach(([r,o])=>{v(s)&&ce(s,r,o())}),Object.entries(n.styleProperty).forEach(([r,o])=>{v(s)&&ht(s,r,o())}),n.childrenRender.forEach(r=>{r()}),n.flowRender.forEach(r=>{r()}),n.classesProperty.forEach(r=>{const{classFn:o,removePrevClassFn:a}=r,c=o();a(),v(s)&&c.split(" ").forEach(l=>{s.element.classList.add(l)}),r.removePrevClassFn=()=>{v(s)&&c.split(" ").forEach(l=>{s.element.classList.remove(l)})}}),e.push(n.useEffect)}),e.flat().forEach(s=>{s()})},Re=t=>we(t)&&(t==null?void 0:t.$$typeof)===Y;class ut extends ct{constructor(){super()}subscribeState(e){const{block:s=null,type:n,property:r,value:o}=e;this.hasValueBySubscriber(s)||(super.createEmptyValue(s,{useEffect:[],childrenRender:[],domProperty:{},styleProperty:{},classesProperty:[],flowRender:[]}),s&&!T(s)&&s.addStateUnsubscribeHandler(this.unsubscribe.bind(this)));const a=this.getValueBySubscriber(s);Ye(a[n])?a[n].push(o):a[n][r]=o}}var w;class Le{constructor(){d(this,w,void 0),h(this,w,new Map)}has(e){return i(this,w).has(e)}getFirst(e){return this.has(e)?i(this,w).get(e).first:0}getSize(e){return this.has(e)?i(this,w).get(e).size:0}push(e,s){if(this.has(e))i(this,w).get(e).push(s);else{const n=new xe;n.push(s),i(this,w).set(e,n)}}pop(e){if(this.has(e)){const s=i(this,w).get(e),n=s.pop();return s.size===0&&i(this,w).delete(e),n}}}w=new WeakMap;var C,z,I,se,Te,ne,fe,q,Q,re,ge;class pt extends G{constructor(e){const{dependency:s,render:n}=e;super({type:"FOR"}),d(this,se),d(this,ne),d(this,q),d(this,re),d(this,C,void 0),d(this,z,void 0),d(this,I,void 0),h(this,C,s),h(this,z,n),h(this,I,new Le),O(this,se,Te).call(this)}}C=new WeakMap,z=new WeakMap,I=new WeakMap,se=new WeakSet,Te=function(){O(this,q,Q).call(this,!0)},ne=new WeakSet,fe=function(){const{triggerBlocks:t,deletable:e,increased:s}=O(this,q,Q).call(this,!1);this.parent.requestDOMSwapUpdate(this,this.parent,this.nodes,[...e],this.rerenderableIndex,0,this.domLength,s);for(let n=0;n<t.length;n++)t[n].triggerCommit()},q=new WeakSet,Q=function(t){const e=(()=>{if(t){g.set({block:this,type:"flowRender",property:"flowRender",value:()=>{O(this,ne,fe).call(this)}});const y=Re(i(this,C))?i(this,C).call(this):i(this,C);return g.set(null),y}else return i(this,C).call(this)})(),s=i(this,I),n=new Le,r=[],o=[],a=[],c=new Set(this.children),l=[];let u=0,b=0;for(let y=0;y<e.length;y++){const S=e[y],_=s.has(S),p=_?s.pop(S).block:O(this,re,ge).call(this,S,y);_?c.delete(p):a.push(p),o.push(p),n.push(S,{index:y,block:p}),v(p)||T(p)?(u+=1,r.push(p.element)):(p.rerenderableIndex=b++,p.domIndex=u,u+=p.domLength,l.push(p),r.push(p.nestedNodes))}const k=r.flat(1/0).length,B=k-this.domLength;return this.nestedNodes=r,this.children=o,h(this,I,n),this.domLength=k,this.rerenderableChildren=l,{triggerBlocks:a,deletable:c,increased:B}},re=new WeakSet,ge=function(t,e){const s=i(this,z).call(this,t,e);return s&&(s.parent=this),s};const mt=(t,e)=>new pt({dependency:t,render:e}),ft=t=>{var e,s,n;return n=class extends t{constructor(...r){super(...r),d(this,e,void 0),d(this,s,void 0),h(this,e,new Set),h(this,s,[])}addContextProvider(r){i(this,e).add(r)}hasContextProvider(r){return i(this,e).has(r)}addDeleteContextProviderHandler(r){i(this,s).push(r)}deleteAllContextProviders(){i(this,e).forEach(r=>{i(this,e).delete(r),i(this,s).forEach(o=>o(this))})}},e=new WeakMap,s=new WeakMap,n},gt=t=>{var e,s;return s=class extends t{constructor(...n){super(...n),d(this,e,void 0),h(this,e,{onMount:null,onDestroy:null})}setOnMountHandler(n){i(this,e).onMount=n}setOnDestroyHandler(n){i(this,e).onDestroy=n}triggerOnMount(){i(this,e).onMount&&(i(this,e).onMount(),i(this,e).onMount=null)}triggerOnDestroy(){i(this,e).onDestroy&&(i(this,e).onDestroy(),i(this,e).onDestroy=null)}},e=new WeakMap,s};var $,f,oe,We,ie,$e;class yt extends ft(Ce(gt(G))){constructor(){super({type:"COMPONENT"}),d(this,oe),d(this,ie),d(this,$,void 0),d(this,f,void 0),h(this,$,null),h(this,f,{tempElement:null,isRendered:!1,renderFn:null,previousComponent:null}),O(this,oe,We).call(this)}set key(e){h(this,$,e)}get key(){return i(this,$)}set renderFn(e){i(this,f).renderFn=e}get tempElement(){return i(this,f).tempElement}triggerLazyRender(){const e=P.get();e&&(this.shortcutParent=e,this.shortcutParent.addShortcutChild(this)),P.set(this);const s=i(this,f).renderFn();i(this,f).renderFn=null,i(this,f).isRendered=!0,H(i(this,f).previousComponent)&&P.set(i(this,f).previousComponent),O(this,ie,$e).call(this,s),this.triggerLazySetOutlet()}isRendered(){return i(this,f).isRendered}}$=new WeakMap,f=new WeakMap,oe=new WeakSet,We=function(){const t=document.createComment("lazy-component");i(this,f).tempElement=t,this.nestedNodes=[t],this.domLength=1},ie=new WeakSet,$e=function(t){this.child=t,this.domLength=t.domLength,t.parent=this;const e=[],s=[];v(t)||T(t)?e.push(t.element):(e.push(t.nestedNodes),s.push(t)),this.nestedNodes=e,this.rerenderableChildren=s;const n=document.createDocumentFragment();n.append(...this.nodes),this.tempElement.replaceWith(n),this.parent.requestRerenderableChildrenUpdate(this,t.domLength-1)};const ye=new U;new U({});const Ie=t=>function(e){const{key:s,...n}=e??{},r=new yt;let o=null;if(r.key=s??null,P.has()&&(o=P.get()),P.set(r),ye.get()){const{pathname:a,query:c,dynamicKey:l}=ye.get();r.pathname=a,r.queryParams=c,l&&(r.pathParam={key:l,value:a})}return r.renderFn=()=>t(n),P.set(o),r};class de extends G{constructor(...e){super({type:"ELEMENT",element:e[0].element}),this.domLength=1}appendChildren(e){let s=0,n=0;const r=[],o=[];for(let c=0;c<e.length;c++){const l=e[c];l&&(l.parent=this,this.addChild(l),v(l)||T(l)?(o.push(l.element),s+=1):(l.rerenderableIndex=n++,r.push(l),l.domIndex=s,s+=l.domLength,o.push(l.nestedNodes)))}this.rerenderableChildren=r,this.nestedNodes=o;const a=document.createDocumentFragment();a.append(...this.nodes),this.element.appendChild(a)}}const vt=(t,e)=>{const s=new de({element:t});s.appendChildren([e]),s.triggerCommit()};class wt extends G{constructor(...e){super({type:"TEXT",element:e[0].element})}}const D=(t,e={})=>{const s=new de({element:document.createElement(t)});return Ne(s,e),s},bt=(t,e={})=>{const s=new de({element:t.cloneNode(!0)});return Ne(s,e),s},Et=t=>D("button",t),ae=t=>D("div",t),le=t=>D("p",t),Ue=t=>D("section",t),Ot=t=>D("span",t),Pt=(t,e)=>bt(t,e),St=t=>{const e=document.createTextNode(t);return new wt({element:e})},_t=(t,e)=>{e.forEach(s=>{Re(s)&&(g.set({type:"useEffect",property:"useEffect",value:t}),s(),g.set(null))})},Ct=()=>({current:null}),Mt={CREATE_CONTEXT_NOT_IN_COMPONENT_ERROR:"The `createContext` hook can only be used inside components.",USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR:"The `useGlobalState` hook can only be used inside components.",ON_MOUNT_NOT_IN_COMPONENT_ERROR:"The `onMount` lifecycle hook can only be used inside components.",ON_DESTROY_NOT_IN_COMPONENT_ERROR:"The `onDestroy` lifecycle hook can only be used inside components.",USE_OUTLET_NOT_IN_COMPONENT_ERROR:"The `useOutlet` hook can only be used inside components.",USE_QUERY_PARAMS_NOT_IN_COMPONENT_ERROR:"The `useQueryParams` hook can only be used inside components."},kt=t=>{throw new Error(Mt[t])},M=new Map,De=(t,e,s)=>{const{overwrite:n=!1}={},r=P.get();if(r||kt("USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR"),Nt(r,t),M.has(t)){const{getState:o,setState:a}=M.get(t);return n&&a(e),M.get(t).count+=1,[o,a]}else{const[o,a]=te(e);return M.set(t,{count:0,getState:o,setState:a}),[o,a]}},Nt=(t,e)=>{t.addUnsubscribeGlobalStateHandler(()=>{M.get(e).count-=1,M.get(e).count===0&&M.delete(e)})},W=()=>{var t;return((t=window.history.state)==null?void 0:t.newPath)||window.location.pathname},ve=t=>t.length===0||t.length===1&&t[0]==="/"?[{pathname:"/",query:{}}]:t.split("/").filter(Boolean).map(e=>{const s=e.split(/[?&]/g),n=s.slice(1).reduce((r,o)=>{const a=o.split("=");return r[a[0]]=a[1],r},{});return{pathname:`/${s[0]}`,query:n}}),xt=(t,e)=>{const s=ve(t),n=ve(e);if(s.length!==n.length)return!1;for(let r=0;r<s.length;r++)if(!Rt(s[r],n[r]))return!1;return!0},Rt=(t,e)=>{if(t===void 0&&e===void 0)return!0;if(!t||!e)return!1;const s=t.query,n=e.query;if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const r in s)if(s[r]!==n[r])return!1;return t.pathname===e.pathname};(()=>{const t={prevPath:"",newPath:""},[e,s]=te([]),[n,r]=te(W());return window.addEventListener("popstate",()=>{const o=W();t.prevPath=t.newPath,t.newPath=o,window.dispatchEvent(new Event("navigate"))}),{navigate:o=>{const a=W();if(!xt(a,o)){t.prevPath=a,t.newPath=o;try{new URL(o).origin!==window.location.origin?window.open(o,"_blank"):(window.history.pushState({prevPath:a,newPath:o},"",o),window.dispatchEvent(new Event("navigate")))}catch{window.history.pushState({prevPath:a,newPath:o},"",o),window.dispatchEvent(new Event("navigate"))}}},onPathChange:o=>{r(W()),window.addEventListener("navigate",()=>{o(t),r(W())})},getPathname:n,getRoutes:e,setRoutes:s}})();var Lt="_1su8wj90";const Tt=Ie(()=>{const[t,e]=De("LOGS",[]),s=Ct();return _t(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[t]),Ue({classes:[je],children:[ae({classes:[qe],children:[Et({classes:[Ae],onclick:()=>{e([])},children:[Pt(Xe,{classes:[He]})]}),le({classes:[Ve],textContent:"Console"})]}),ae({ref:s,classes:[ze,Lt],children:[mt(t,n=>le({classes:[Ge],textContent:`${n}`}))]})]})});var Wt="_8tdhcf0";const $t=t=>{const{web:e}=t;return Ue({classes:[Wt],children:[e]})},It=()=>{const t=console.log,[e,s]=De("LOGS",[]);console.log=(...r)=>{t.apply(console,r),n(r)};const n=r=>{const o=r.map(a=>typeof a=="string"?a:JSON.stringify(a)).join(" ");s([...e(),o])}},Ut=(t,e)=>t?[e()]:[],Dt=Ie(t=>{const{showConsole:e,web:s}=t;return e&&It(),document.querySelector("body").style.margin="0",ae({classes:[Fe],style:{height:"100vh"},children:[$t({web:s}),...Ut(e,()=>Tt())]})}),Bt=()=>le({children:[Ot({style:{fontWeight:"bold"},textContent:"Hello "}),St("World!")]});document.title="textNode Ex1";vt(document.getElementById("app"),Dt({web:Bt()}));
