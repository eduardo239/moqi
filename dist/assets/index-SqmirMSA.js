(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ue={},Rn=[],rt=()=>{},oh=()=>!1,vs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jr=t=>t.startsWith("onUpdate:"),De=Object.assign,Hr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ah=Object.prototype.hasOwnProperty,se=(t,e)=>ah.call(t,e),G=Array.isArray,Pn=t=>ys(t)==="[object Map]",xl=t=>ys(t)==="[object Set]",q=t=>typeof t=="function",ye=t=>typeof t=="string",Kt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Ml=t=>(pe(t)||q(t))&&q(t.then)&&q(t.catch),Ul=Object.prototype.toString,ys=t=>Ul.call(t),lh=t=>ys(t).slice(8,-1),Fl=t=>ys(t)==="[object Object]",Vr=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ch=/-(\w)/g,$t=ws(t=>t.replace(ch,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,fn=ws(t=>t.replace(uh,"-$1").toLowerCase()),jl=ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),Js=ws(t=>t?`on${jl(t)}`:""),Wt=(t,e)=>!Object.is(t,e),Yi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hl=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},mr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _a;const Vl=()=>_a||(_a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Br(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ye(i)?ph(i):Br(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(ye(t)||pe(t))return t}const hh=/;(?![^(]*\))/g,fh=/:([^]+)/,dh=/\/\*[^]*?\*\//g;function ph(t){const e={};return t.replace(dh,"").split(hh).forEach(n=>{if(n){const i=n.split(fh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $r(t){let e="";if(ye(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const i=$r(t[n]);i&&(e+=i+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mh=Fr(gh);function Bl(t){return!!t||t===""}const $l=t=>!!(t&&t.__v_isRef===!0),_r=t=>ye(t)?t:t==null?"":G(t)||pe(t)&&(t.toString===Ul||!q(t.toString))?$l(t)?_r(t.value):JSON.stringify(t,Wl,2):String(t),Wl=(t,e)=>$l(e)?Wl(t,e.value):Pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[Xs(i,o)+" =>"]=r,n),{})}:xl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xs(n))}:Kt(e)?Xs(e):pe(e)&&!G(e)&&!Fl(e)?String(e):e,Xs=(t,e="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class _h{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function vh(){return $e}let he;const Ys=new WeakSet;class Kl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$e&&$e.active&&$e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ys.has(this)&&(Ys.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,va(this),ql(this);const e=he,n=Qe;he=this,Qe=!0;try{return this.fn()}finally{Jl(this),he=e,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zr(e);this.deps=this.depsTail=void 0,va(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ys.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vr(this)&&this.run()}get dirty(){return vr(this)}}let zl=0,Sn;function Gl(t){t.flags|=8,t.next=Sn,Sn=t}function Wr(){zl++}function Kr(){if(--zl>0)return;let t;for(;Sn;){let e=Sn,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Sn,Sn=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function ql(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jl(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),zr(i),yh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function vr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===di))return;t.globalVersion=di;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vr(t)){t.flags&=-3;return}const n=he,i=Qe;he=t,Qe=!0;try{ql(t);const r=t.fn(t._value);(e.version===0||Wt(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{he=n,Qe=i,Jl(t),t.flags&=-3}}function zr(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i),!n.subs&&n.computed){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)zr(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qe=!0;const Yl=[];function zt(){Yl.push(Qe),Qe=!1}function Gt(){const t=Yl.pop();Qe=t===void 0?!0:t}function va(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=he;he=void 0;try{e()}finally{he=n}}}let di=0;class wh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!he||!Qe||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new wh(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,Ql(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=i)}return n}trigger(e){this.version++,di++,this.notify(e)}notify(e){Wr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kr()}}}function Ql(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ql(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const yr=new WeakMap,ln=Symbol(""),wr=Symbol(""),pi=Symbol("");function Ne(t,e,n){if(Qe&&he){let i=yr.get(t);i||yr.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Gr),r.target=t,r.map=i,r.key=n),r.track()}}function wt(t,e,n,i,r,o){const l=yr.get(t);if(!l){di++;return}const u=h=>{h&&h.trigger()};if(Wr(),e==="clear")l.forEach(u);else{const h=G(t),_=h&&Vr(n);if(h&&n==="length"){const w=Number(i);l.forEach((S,R)=>{(R==="length"||R===pi||!Kt(R)&&R>=w)&&u(S)})}else switch(n!==void 0&&u(l.get(n)),_&&u(l.get(pi)),e){case"add":h?_&&u(l.get("length")):(u(l.get(ln)),Pn(t)&&u(l.get(wr)));break;case"delete":h||(u(l.get(ln)),Pn(t)&&u(l.get(wr)));break;case"set":Pn(t)&&u(l.get(ln));break}}Kr()}function Tn(t){const e=oe(t);return e===t?e:(Ne(e,"iterate",pi),Ze(t)?e:e.map(Ue))}function qr(t){return Ne(t=oe(t),"iterate",pi),t}const Eh={__proto__:null,[Symbol.iterator](){return Qs(this,Symbol.iterator,Ue)},concat(...t){return Tn(this).concat(...t.map(e=>G(e)?Tn(e):e))},entries(){return Qs(this,"entries",t=>(t[1]=Ue(t[1]),t))},every(t,e){return dt(this,"every",t,e,void 0,arguments)},filter(t,e){return dt(this,"filter",t,e,n=>n.map(Ue),arguments)},find(t,e){return dt(this,"find",t,e,Ue,arguments)},findIndex(t,e){return dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dt(this,"findLast",t,e,Ue,arguments)},findLastIndex(t,e){return dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zs(this,"includes",t)},indexOf(...t){return Zs(this,"indexOf",t)},join(t){return Tn(this).join(t)},lastIndexOf(...t){return Zs(this,"lastIndexOf",t)},map(t,e){return dt(this,"map",t,e,void 0,arguments)},pop(){return ni(this,"pop")},push(...t){return ni(this,"push",t)},reduce(t,...e){return ya(this,"reduce",t,e)},reduceRight(t,...e){return ya(this,"reduceRight",t,e)},shift(){return ni(this,"shift")},some(t,e){return dt(this,"some",t,e,void 0,arguments)},splice(...t){return ni(this,"splice",t)},toReversed(){return Tn(this).toReversed()},toSorted(t){return Tn(this).toSorted(t)},toSpliced(...t){return Tn(this).toSpliced(...t)},unshift(...t){return ni(this,"unshift",t)},values(){return Qs(this,"values",Ue)}};function Qs(t,e,n){const i=qr(t),r=i[e]();return i!==t&&!Ze(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Ih=Array.prototype;function dt(t,e,n,i,r,o){const l=qr(t),u=l!==t&&!Ze(t),h=l[e];if(h!==Ih[e]){const S=h.apply(t,o);return u?Ue(S):S}let _=n;l!==t&&(u?_=function(S,R){return n.call(this,Ue(S),R,t)}:n.length>2&&(_=function(S,R){return n.call(this,S,R,t)}));const w=h.call(l,_,i);return u&&r?r(w):w}function ya(t,e,n,i){const r=qr(t);let o=n;return r!==t&&(Ze(t)?n.length>3&&(o=function(l,u,h){return n.call(this,l,u,h,t)}):o=function(l,u,h){return n.call(this,l,Ue(u),h,t)}),r[e](o,...i)}function Zs(t,e,n){const i=oe(t);Ne(i,"iterate",pi);const r=i[e](...n);return(r===-1||r===!1)&&Zr(n[0])?(n[0]=oe(n[0]),i[e](...n)):r}function ni(t,e,n=[]){zt(),Wr();const i=oe(t)[e].apply(t,n);return Kr(),Gt(),i}const Th=Fr("__proto__,__v_isRef,__isVue"),Zl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt));function bh(t){Kt(t)||(t=String(t));const e=oe(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class ec{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?Uh:sc:o?ic:nc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const l=G(e);if(!r){let h;if(l&&(h=Eh[n]))return h;if(n==="hasOwnProperty")return bh}const u=Reflect.get(e,n,ke(e)?e:i);return(Kt(n)?Zl.has(n):Th(n))||(r||Ne(e,"get",n),o)?u:ke(u)?l&&Vr(n)?u:u.value:pe(u)?r?rc(u):Yr(u):u}}class tc extends ec{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];if(!this._isShallow){const h=cn(o);if(!Ze(i)&&!cn(i)&&(o=oe(o),i=oe(i)),!G(e)&&ke(o)&&!ke(i))return h?!1:(o.value=i,!0)}const l=G(e)&&Vr(n)?Number(n)<e.length:se(e,n),u=Reflect.set(e,n,i,ke(e)?e:r);return e===oe(r)&&(l?Wt(i,o)&&wt(e,"set",n,i):wt(e,"add",n,i)),u}deleteProperty(e,n){const i=se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&wt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Kt(n)||!Zl.has(n))&&Ne(e,"has",n),i}ownKeys(e){return Ne(e,"iterate",G(e)?"length":ln),Reflect.ownKeys(e)}}class Ah extends ec{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sh=new tc,Ch=new Ah,Rh=new tc(!0);const Jr=t=>t,Es=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,i=!1){t=t.__v_raw;const r=oe(t),o=oe(e);n||(Wt(e,o)&&Ne(r,"get",e),Ne(r,"get",o));const{has:l}=Es(r),u=i?Jr:n?eo:Ue;if(l.call(r,e))return u(t.get(e));if(l.call(r,o))return u(t.get(o));t!==r&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,i=oe(n),r=oe(t);return e||(Wt(t,r)&&Ne(i,"has",t),Ne(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ki(t,e=!1){return t=t.__v_raw,!e&&Ne(oe(t),"iterate",ln),Reflect.get(t,"size",t)}function wa(t,e=!1){!e&&!Ze(t)&&!cn(t)&&(t=oe(t));const n=oe(this);return Es(n).has.call(n,t)||(n.add(t),wt(n,"add",t,t)),this}function Ea(t,e,n=!1){!n&&!Ze(e)&&!cn(e)&&(e=oe(e));const i=oe(this),{has:r,get:o}=Es(i);let l=r.call(i,t);l||(t=oe(t),l=r.call(i,t));const u=o.call(i,t);return i.set(t,e),l?Wt(e,u)&&wt(i,"set",t,e):wt(i,"add",t,e),this}function Ia(t){const e=oe(this),{has:n,get:i}=Es(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),i&&i.call(e,t);const o=e.delete(t);return r&&wt(e,"delete",t,void 0),o}function Ta(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&wt(t,"clear",void 0,void 0),n}function zi(t,e){return function(i,r){const o=this,l=o.__v_raw,u=oe(l),h=e?Jr:t?eo:Ue;return!t&&Ne(u,"iterate",ln),l.forEach((_,w)=>i.call(r,h(_),h(w),o))}}function Gi(t,e,n){return function(...i){const r=this.__v_raw,o=oe(r),l=Pn(o),u=t==="entries"||t===Symbol.iterator&&l,h=t==="keys"&&l,_=r[t](...i),w=n?Jr:e?eo:Ue;return!e&&Ne(o,"iterate",h?wr:ln),{next(){const{value:S,done:R}=_.next();return R?{value:S,done:R}:{value:u?[w(S[0]),w(S[1])]:w(S),done:R}},[Symbol.iterator](){return this}}}}function kt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ph(){const t={get(o){return $i(this,o)},get size(){return Ki(this)},has:Wi,add:wa,set:Ea,delete:Ia,clear:Ta,forEach:zi(!1,!1)},e={get(o){return $i(this,o,!1,!0)},get size(){return Ki(this)},has:Wi,add(o){return wa.call(this,o,!0)},set(o,l){return Ea.call(this,o,l,!0)},delete:Ia,clear:Ta,forEach:zi(!1,!0)},n={get(o){return $i(this,o,!0)},get size(){return Ki(this,!0)},has(o){return Wi.call(this,o,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:zi(!0,!1)},i={get(o){return $i(this,o,!0,!0)},get size(){return Ki(this,!0)},has(o){return Wi.call(this,o,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Gi(o,!1,!1),n[o]=Gi(o,!0,!1),e[o]=Gi(o,!1,!0),i[o]=Gi(o,!0,!0)}),[t,n,e,i]}const[Oh,kh,Dh,Nh]=Ph();function Xr(t,e){const n=e?t?Nh:Dh:t?kh:Oh;return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(se(n,r)&&r in i?n:i,r,o)}const Lh={get:Xr(!1,!1)},xh={get:Xr(!1,!0)},Mh={get:Xr(!0,!1)};const nc=new WeakMap,ic=new WeakMap,sc=new WeakMap,Uh=new WeakMap;function Fh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jh(t){return t.__v_skip||!Object.isExtensible(t)?0:Fh(lh(t))}function Yr(t){return cn(t)?t:Qr(t,!1,Sh,Lh,nc)}function Hh(t){return Qr(t,!1,Rh,xh,ic)}function rc(t){return Qr(t,!0,Ch,Mh,sc)}function Qr(t,e,n,i,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const l=jh(t);if(l===0)return t;const u=new Proxy(t,l===2?i:n);return r.set(t,u),u}function li(t){return cn(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function Ze(t){return!!(t&&t.__v_isShallow)}function Zr(t){return t?!!t.__v_raw:!1}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Vh(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&Hl(t,"__v_skip",!0),t}const Ue=t=>pe(t)?Yr(t):t,eo=t=>pe(t)?rc(t):t;function ke(t){return t?t.__v_isRef===!0:!1}function Bh(t){return $h(t,!1)}function $h(t,e){return ke(t)?t:new Wh(t,e)}class Wh{constructor(e,n){this.dep=new Gr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:oe(e),this._value=n?e:Ue(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Ze(e)||cn(e);e=i?e:oe(e),Wt(e,n)&&(this._rawValue=e,this._value=i?e:Ue(e),this.dep.trigger())}}function Kh(t){return ke(t)?t.value:t}const zh={get:(t,e,n)=>e==="__v_raw"?t:Kh(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return ke(r)&&!ke(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function oc(t){return li(t)?t:new Proxy(t,zh)}class Gh{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Gl(this),!0}get value(){const e=this.dep.track();return Xl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qh(t,e,n=!1){let i,r;return q(t)?i=t:(i=t.get,r=t.set),new Gh(i,r,n)}const qi={},rs=new WeakMap;let rn;function Jh(t,e=!1,n=rn){if(n){let i=rs.get(n);i||rs.set(n,i=[]),i.push(t)}}function Xh(t,e,n=ue){const{immediate:i,deep:r,once:o,scheduler:l,augmentJob:u,call:h}=n,_=B=>r?B:Ze(B)||r===!1||r===0?gt(B,1):gt(B);let w,S,R,H,F=!1,W=!1;if(ke(t)?(S=()=>t.value,F=Ze(t)):li(t)?(S=()=>_(t),F=!0):G(t)?(W=!0,F=t.some(B=>li(B)||Ze(B)),S=()=>t.map(B=>{if(ke(B))return B.value;if(li(B))return _(B);if(q(B))return h?h(B,2):B()})):q(t)?e?S=h?()=>h(t,2):t:S=()=>{if(R){zt();try{R()}finally{Gt()}}const B=rn;rn=w;try{return h?h(t,3,[H]):t(H)}finally{rn=B}}:S=rt,e&&r){const B=S,le=r===!0?1/0:r;S=()=>gt(B(),le)}const J=vh(),Y=()=>{w.stop(),J&&Hr(J.effects,w)};if(o&&e){const B=e;e=(...le)=>{B(...le),Y()}}let Q=W?new Array(t.length).fill(qi):qi;const X=B=>{if(!(!(w.flags&1)||!w.dirty&&!B))if(e){const le=w.run();if(r||F||(W?le.some((de,E)=>Wt(de,Q[E])):Wt(le,Q))){R&&R();const de=rn;rn=w;try{const E=[le,Q===qi?void 0:W&&Q[0]===qi?[]:Q,H];h?h(e,3,E):e(...E),Q=le}finally{rn=de}}}else w.run()};return u&&u(X),w=new Kl(S),w.scheduler=l?()=>l(X,!1):X,H=B=>Jh(B,!1,w),R=w.onStop=()=>{const B=rs.get(w);if(B){if(h)h(B,4);else for(const le of B)le();rs.delete(w)}},e?i?X(!0):Q=w.run():l?l(X.bind(null,!0),!0):w.run(),Y.pause=w.pause.bind(w),Y.resume=w.resume.bind(w),Y.stop=Y,Y}function gt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ke(t))gt(t.value,e,n);else if(G(t))for(let i=0;i<t.length;i++)gt(t[i],e,n);else if(xl(t)||Pn(t))t.forEach(i=>{gt(i,e,n)});else if(Fl(t)){for(const i in t)gt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&gt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ii(t,e,n,i){try{return i?t(...i):t()}catch(r){Is(r,e,n)}}function lt(t,e,n,i){if(q(t)){const r=Ii(t,e,n,i);return r&&Ml(r)&&r.catch(o=>{Is(o,e,n)}),r}if(G(t)){const r=[];for(let o=0;o<t.length;o++)r.push(lt(t[o],e,n,i));return r}}function Is(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||ue;if(e){let u=e.parent;const h=e.proxy,_=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const w=u.ec;if(w){for(let S=0;S<w.length;S++)if(w[S](t,h,_)===!1)return}u=u.parent}if(o){zt(),Ii(o,null,10,[t,h,_]),Gt();return}}Yh(t,n,r,i,l)}function Yh(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}let gi=!1,Er=!1;const Fe=[];let it=0;const On=[];let Nt=null,bn=0;const ac=Promise.resolve();let to=null;function Qh(t){const e=to||ac;return t?e.then(this?t.bind(this):t):e}function Zh(t){let e=gi?it+1:0,n=Fe.length;for(;e<n;){const i=e+n>>>1,r=Fe[i],o=mi(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function no(t){if(!(t.flags&1)){const e=mi(t),n=Fe[Fe.length-1];!n||!(t.flags&2)&&e>=mi(n)?Fe.push(t):Fe.splice(Zh(e),0,t),t.flags|=1,lc()}}function lc(){!gi&&!Er&&(Er=!0,to=ac.then(uc))}function ef(t){G(t)?On.push(...t):Nt&&t.id===-1?Nt.splice(bn+1,0,t):t.flags&1||(On.push(t),t.flags|=1),lc()}function ba(t,e,n=gi?it+1:0){for(;n<Fe.length;n++){const i=Fe[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Fe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function cc(t){if(On.length){const e=[...new Set(On)].sort((n,i)=>mi(n)-mi(i));if(On.length=0,Nt){Nt.push(...e);return}for(Nt=e,bn=0;bn<Nt.length;bn++){const n=Nt[bn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,bn=0}}const mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function uc(t){Er=!1,gi=!0;try{for(it=0;it<Fe.length;it++){const e=Fe[it];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ii(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;it<Fe.length;it++){const e=Fe[it];e&&(e.flags&=-2)}it=0,Fe.length=0,cc(),gi=!1,to=null,(Fe.length||On.length)&&uc()}}let qe=null,hc=null;function os(t){const e=qe;return qe=t,hc=t&&t.type.__scopeId||null,e}function tf(t,e=qe,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Na(-1);const o=os(e);let l;try{l=t(...r)}finally{os(o),i._d&&Na(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Aa(t,e){if(qe===null)return t;const n=Cs(qe),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,u,h=ue]=e[r];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&gt(l),i.push({dir:o,instance:n,value:l,oldValue:void 0,arg:u,modifiers:h}))}return t}function nn(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let l=0;l<r.length;l++){const u=r[l];o&&(u.oldValue=o[l].value);let h=u.dir[i];h&&(zt(),lt(h,n,8,[t.el,u,t,e]),Gt())}}const nf=Symbol("_vte"),sf=t=>t.__isTeleport;function io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ir(t,e,n,i,r=!1){if(G(t)){t.forEach((F,W)=>Ir(F,e&&(G(e)?e[W]:e),n,i,r));return}if(ci(i)&&!r)return;const o=i.shapeFlag&4?Cs(i.component):i.el,l=r?null:o,{i:u,r:h}=t,_=e&&e.r,w=u.refs===ue?u.refs={}:u.refs,S=u.setupState,R=oe(S),H=S===ue?()=>!1:F=>se(R,F);if(_!=null&&_!==h&&(ye(_)?(w[_]=null,H(_)&&(S[_]=null)):ke(_)&&(_.value=null)),q(h))Ii(h,u,12,[l,w]);else{const F=ye(h),W=ke(h);if(F||W){const J=()=>{if(t.f){const Y=F?H(h)?S[h]:w[h]:h.value;r?G(Y)&&Hr(Y,o):G(Y)?Y.includes(o)||Y.push(o):F?(w[h]=[o],H(h)&&(S[h]=w[h])):(h.value=[o],t.k&&(w[t.k]=h.value))}else F?(w[h]=l,H(h)&&(S[h]=l)):W&&(h.value=l,t.k&&(w[t.k]=l))};l?(J.id=-1,Be(J,n)):J()}}}const ci=t=>!!t.type.__asyncLoader,dc=t=>t.type.__isKeepAlive;function rf(t,e){pc(t,"a",e)}function of(t,e){pc(t,"da",e)}function pc(t,e,n=je){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ts(e,i,n),n){let r=n.parent;for(;r&&r.parent;)dc(r.parent.vnode)&&af(i,e,n,r),r=r.parent}}function af(t,e,n,i){const r=Ts(e,t,i,!0);gc(()=>{Hr(i[e],r)},n)}function Ts(t,e,n=je,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...l)=>{zt();const u=Ti(n),h=lt(e,n,t,l);return u(),Gt(),h});return i?r.unshift(o):r.push(o),o}}const bt=t=>(e,n=je)=>{(!Ss||t==="sp")&&Ts(t,(...i)=>e(...i),n)},lf=bt("bm"),cf=bt("m"),uf=bt("bu"),hf=bt("u"),ff=bt("bum"),gc=bt("um"),df=bt("sp"),pf=bt("rtg"),gf=bt("rtc");function mf(t,e=je){Ts("ec",t,e)}const _f=Symbol.for("v-ndc"),Tr=t=>t?xc(t)?Cs(t):Tr(t.parent):null,ui=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>so(t),$forceUpdate:t=>t.f||(t.f=()=>{no(t.update)}),$nextTick:t=>t.n||(t.n=Qh.bind(t.proxy)),$watch:t=>jf.bind(t)}),er=(t,e)=>t!==ue&&!t.__isScriptSetup&&se(t,e),vf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:l,type:u,appContext:h}=t;let _;if(e[0]!=="$"){const H=l[e];if(H!==void 0)switch(H){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(er(i,e))return l[e]=1,i[e];if(r!==ue&&se(r,e))return l[e]=2,r[e];if((_=t.propsOptions[0])&&se(_,e))return l[e]=3,o[e];if(n!==ue&&se(n,e))return l[e]=4,n[e];br&&(l[e]=0)}}const w=ui[e];let S,R;if(w)return e==="$attrs"&&Ne(t.attrs,"get",""),w(t);if((S=u.__cssModules)&&(S=S[e]))return S;if(n!==ue&&se(n,e))return l[e]=4,n[e];if(R=h.config.globalProperties,se(R,e))return R[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return er(r,e)?(r[e]=n,!0):i!==ue&&se(i,e)?(i[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},l){let u;return!!n[l]||t!==ue&&se(t,l)||er(e,l)||(u=o[0])&&se(u,l)||se(i,l)||se(ui,l)||se(r.config.globalProperties,l)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sa(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let br=!0;function yf(t){const e=so(t),n=t.proxy,i=t.ctx;br=!1,e.beforeCreate&&Ca(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:l,watch:u,provide:h,inject:_,created:w,beforeMount:S,mounted:R,beforeUpdate:H,updated:F,activated:W,deactivated:J,beforeDestroy:Y,beforeUnmount:Q,destroyed:X,unmounted:B,render:le,renderTracked:de,renderTriggered:E,errorCaptured:d,serverPrefetch:m,expose:y,inheritAttrs:I,components:b,directives:g,filters:Ve}=e;if(_&&wf(_,i,null),l)for(const ae in l){const ee=l[ae];q(ee)&&(i[ae]=ee.bind(n))}if(r){const ae=r.call(n,n);pe(ae)&&(t.data=Yr(ae))}if(br=!0,o)for(const ae in o){const ee=o[ae],Je=q(ee)?ee.bind(n,n):q(ee.get)?ee.get.bind(n,n):rt,Jt=!q(ee)&&q(ee.set)?ee.set.bind(n):rt,ct=od({get:Je,set:Jt});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>ct.value,set:_e=>ct.value=_e})}if(u)for(const ae in u)mc(u[ae],i,n,ae);if(h){const ae=q(h)?h.call(n):h;Reflect.ownKeys(ae).forEach(ee=>{Sf(ee,ae[ee])})}w&&Ca(w,t,"c");function Ee(ae,ee){G(ee)?ee.forEach(Je=>ae(Je.bind(n))):ee&&ae(ee.bind(n))}if(Ee(lf,S),Ee(cf,R),Ee(uf,H),Ee(hf,F),Ee(rf,W),Ee(of,J),Ee(mf,d),Ee(gf,de),Ee(pf,E),Ee(ff,Q),Ee(gc,B),Ee(df,m),G(y))if(y.length){const ae=t.exposed||(t.exposed={});y.forEach(ee=>{Object.defineProperty(ae,ee,{get:()=>n[ee],set:Je=>n[ee]=Je})})}else t.exposed||(t.exposed={});le&&t.render===rt&&(t.render=le),I!=null&&(t.inheritAttrs=I),b&&(t.components=b),g&&(t.directives=g),m&&fc(t)}function wf(t,e,n=rt){G(t)&&(t=Ar(t));for(const i in t){const r=t[i];let o;pe(r)?"default"in r?o=Qi(r.from||i,r.default,!0):o=Qi(r.from||i):o=Qi(r),ke(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Ca(t,e,n){lt(G(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function mc(t,e,n,i){let r=i.includes(".")?Oc(n,i):()=>n[i];if(ye(t)){const o=e[t];q(o)&&nr(r,o)}else if(q(t))nr(r,t.bind(n));else if(pe(t))if(G(t))t.forEach(o=>mc(o,e,n,i));else{const o=q(t.handler)?t.handler.bind(n):e[t.handler];q(o)&&nr(r,o,t)}}function so(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:l}}=t.appContext,u=o.get(e);let h;return u?h=u:!r.length&&!n&&!i?h=e:(h={},r.length&&r.forEach(_=>as(h,_,l,!0)),as(h,e,l)),pe(e)&&o.set(e,h),h}function as(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&as(t,o,n,!0),r&&r.forEach(l=>as(t,l,n,!0));for(const l in e)if(!(i&&l==="expose")){const u=Ef[l]||n&&n[l];t[l]=u?u(t[l],e[l]):e[l]}return t}const Ef={data:Ra,props:Pa,emits:Pa,methods:si,computed:si,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:si,directives:si,watch:Tf,provide:Ra,inject:If};function Ra(t,e){return e?t?function(){return De(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function If(t,e){return si(Ar(t),Ar(e))}function Ar(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function si(t,e){return t?De(Object.create(null),t,e):e}function Pa(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:De(Object.create(null),Sa(t),Sa(e??{})):e}function Tf(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const i in e)n[i]=Me(t[i],e[i]);return n}function _c(){return{app:null,config:{isNativeTag:oh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function Af(t,e){return function(i,r=null){q(i)||(i=De({},i)),r!=null&&!pe(r)&&(r=null);const o=_c(),l=new WeakSet,u=[];let h=!1;const _=o.app={_uid:bf++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:ad,get config(){return o.config},set config(w){},use(w,...S){return l.has(w)||(w&&q(w.install)?(l.add(w),w.install(_,...S)):q(w)&&(l.add(w),w(_,...S))),_},mixin(w){return o.mixins.includes(w)||o.mixins.push(w),_},component(w,S){return S?(o.components[w]=S,_):o.components[w]},directive(w,S){return S?(o.directives[w]=S,_):o.directives[w]},mount(w,S,R){if(!h){const H=_._ceVNode||Et(i,r);return H.appContext=o,R===!0?R="svg":R===!1&&(R=void 0),S&&e?e(H,w):t(H,w,R),h=!0,_._container=w,w.__vue_app__=_,Cs(H.component)}},onUnmount(w){u.push(w)},unmount(){h&&(lt(u,_._instance,16),t(null,_._container),delete _._container.__vue_app__)},provide(w,S){return o.provides[w]=S,_},runWithContext(w){const S=kn;kn=_;try{return w()}finally{kn=S}}};return _}}let kn=null;function Sf(t,e){if(je){let n=je.provides;const i=je.parent&&je.parent.provides;i===n&&(n=je.provides=Object.create(i)),n[t]=e}}function Qi(t,e,n=!1){const i=je||qe;if(i||kn){const r=kn?kn._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&q(e)?e.call(i&&i.proxy):e}}const vc={},yc=()=>Object.create(vc),wc=t=>Object.getPrototypeOf(t)===vc;function Cf(t,e,n,i=!1){const r={},o=yc();t.propsDefaults=Object.create(null),Ec(t,e,r,o);for(const l in t.propsOptions[0])l in r||(r[l]=void 0);n?t.props=i?r:Hh(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Rf(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:l}}=t,u=oe(r),[h]=t.propsOptions;let _=!1;if((i||l>0)&&!(l&16)){if(l&8){const w=t.vnode.dynamicProps;for(let S=0;S<w.length;S++){let R=w[S];if(bs(t.emitsOptions,R))continue;const H=e[R];if(h)if(se(o,R))H!==o[R]&&(o[R]=H,_=!0);else{const F=$t(R);r[F]=Sr(h,u,F,H,t,!1)}else H!==o[R]&&(o[R]=H,_=!0)}}}else{Ec(t,e,r,o)&&(_=!0);let w;for(const S in u)(!e||!se(e,S)&&((w=fn(S))===S||!se(e,w)))&&(h?n&&(n[S]!==void 0||n[w]!==void 0)&&(r[S]=Sr(h,u,S,void 0,t,!0)):delete r[S]);if(o!==u)for(const S in o)(!e||!se(e,S))&&(delete o[S],_=!0)}_&&wt(t.attrs,"set","")}function Ec(t,e,n,i){const[r,o]=t.propsOptions;let l=!1,u;if(e)for(let h in e){if(ai(h))continue;const _=e[h];let w;r&&se(r,w=$t(h))?!o||!o.includes(w)?n[w]=_:(u||(u={}))[w]=_:bs(t.emitsOptions,h)||(!(h in i)||_!==i[h])&&(i[h]=_,l=!0)}if(o){const h=oe(n),_=u||ue;for(let w=0;w<o.length;w++){const S=o[w];n[S]=Sr(r,h,S,_[S],t,!se(_,S))}}return l}function Sr(t,e,n,i,r,o){const l=t[n];if(l!=null){const u=se(l,"default");if(u&&i===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&q(h)){const{propsDefaults:_}=r;if(n in _)i=_[n];else{const w=Ti(r);i=_[n]=h.call(null,e),w()}}else i=h;r.ce&&r.ce._setProp(n,i)}l[0]&&(o&&!u?i=!1:l[1]&&(i===""||i===fn(n))&&(i=!0))}return i}const Pf=new WeakMap;function Ic(t,e,n=!1){const i=n?Pf:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,l={},u=[];let h=!1;if(!q(t)){const w=S=>{h=!0;const[R,H]=Ic(S,e,!0);De(l,R),H&&u.push(...H)};!n&&e.mixins.length&&e.mixins.forEach(w),t.extends&&w(t.extends),t.mixins&&t.mixins.forEach(w)}if(!o&&!h)return pe(t)&&i.set(t,Rn),Rn;if(G(o))for(let w=0;w<o.length;w++){const S=$t(o[w]);Oa(S)&&(l[S]=ue)}else if(o)for(const w in o){const S=$t(w);if(Oa(S)){const R=o[w],H=l[S]=G(R)||q(R)?{type:R}:De({},R),F=H.type;let W=!1,J=!0;if(G(F))for(let Y=0;Y<F.length;++Y){const Q=F[Y],X=q(Q)&&Q.name;if(X==="Boolean"){W=!0;break}else X==="String"&&(J=!1)}else W=q(F)&&F.name==="Boolean";H[0]=W,H[1]=J,(W||se(H,"default"))&&u.push(S)}}const _=[l,u];return pe(t)&&i.set(t,_),_}function Oa(t){return t[0]!=="$"&&!ai(t)}const Tc=t=>t[0]==="_"||t==="$stable",ro=t=>G(t)?t.map(st):[st(t)],Of=(t,e,n)=>{if(e._n)return e;const i=tf((...r)=>ro(e(...r)),n);return i._c=!1,i},bc=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Tc(r))continue;const o=t[r];if(q(o))e[r]=Of(r,o,i);else if(o!=null){const l=ro(o);e[r]=()=>l}}},Ac=(t,e)=>{const n=ro(e);t.slots.default=()=>n},Sc=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},kf=(t,e,n)=>{const i=t.slots=yc();if(t.vnode.shapeFlag&32){const r=e._;r?(Sc(i,e,n),n&&Hl(i,"_",r,!0)):bc(e,i)}else e&&Ac(t,e)},Df=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,l=ue;if(i.shapeFlag&32){const u=e._;u?n&&u===1?o=!1:Sc(r,e,n):(o=!e.$stable,bc(e,r)),l=e}else e&&(Ac(t,e),l={default:1});if(o)for(const u in r)!Tc(u)&&l[u]==null&&delete r[u]},Be=zf;function Nf(t){return Lf(t)}function Lf(t,e){const n=Vl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:l,createText:u,createComment:h,setText:_,setElementText:w,parentNode:S,nextSibling:R,setScopeId:H=rt,insertStaticContent:F}=t,W=(p,v,C,k=null,P=null,O=null,M=void 0,L=null,N=!!v.dynamicChildren)=>{if(p===v)return;p&&!ii(p,v)&&(k=ut(p),_e(p,P,O,!0),p=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:D,ref:$,shapeFlag:U}=v;switch(D){case As:J(p,v,C,k);break;case _i:Y(p,v,C,k);break;case sr:p==null&&Q(v,C,k,M);break;case Ye:b(p,v,C,k,P,O,M,L,N);break;default:U&1?le(p,v,C,k,P,O,M,L,N):U&6?g(p,v,C,k,P,O,M,L,N):(U&64||U&128)&&D.process(p,v,C,k,P,O,M,L,N,tt)}$!=null&&P&&Ir($,p&&p.ref,O,v||p,!v)},J=(p,v,C,k)=>{if(p==null)i(v.el=u(v.children),C,k);else{const P=v.el=p.el;v.children!==p.children&&_(P,v.children)}},Y=(p,v,C,k)=>{p==null?i(v.el=h(v.children||""),C,k):v.el=p.el},Q=(p,v,C,k)=>{[p.el,p.anchor]=F(p.children,v,C,k,p.el,p.anchor)},X=({el:p,anchor:v},C,k)=>{let P;for(;p&&p!==v;)P=R(p),i(p,C,k),p=P;i(v,C,k)},B=({el:p,anchor:v})=>{let C;for(;p&&p!==v;)C=R(p),r(p),p=C;r(v)},le=(p,v,C,k,P,O,M,L,N)=>{v.type==="svg"?M="svg":v.type==="math"&&(M="mathml"),p==null?de(v,C,k,P,O,M,L,N):m(p,v,P,O,M,L,N)},de=(p,v,C,k,P,O,M,L)=>{let N,D;const{props:$,shapeFlag:U,transition:V,dirs:j}=p;if(N=p.el=l(p.type,O,$&&$.is,$),U&8?w(N,p.children):U&16&&d(p.children,N,null,k,P,tr(p,O),M,L),j&&nn(p,null,k,"created"),E(N,p,p.scopeId,M,k),$){for(const ie in $)ie!=="value"&&!ai(ie)&&o(N,ie,null,$[ie],O,k);"value"in $&&o(N,"value",null,$.value,O),(D=$.onVnodeBeforeMount)&&nt(D,k,p)}j&&nn(p,null,k,"beforeMount");const K=xf(P,V);K&&V.beforeEnter(N),i(N,v,C),((D=$&&$.onVnodeMounted)||K||j)&&Be(()=>{D&&nt(D,k,p),K&&V.enter(N),j&&nn(p,null,k,"mounted")},P)},E=(p,v,C,k,P)=>{if(C&&H(p,C),k)for(let O=0;O<k.length;O++)H(p,k[O]);if(P){let O=P.subTree;if(v===O||Dc(O.type)&&(O.ssContent===v||O.ssFallback===v)){const M=P.vnode;E(p,M,M.scopeId,M.slotScopeIds,P.parent)}}},d=(p,v,C,k,P,O,M,L,N=0)=>{for(let D=N;D<p.length;D++){const $=p[D]=L?Lt(p[D]):st(p[D]);W(null,$,v,C,k,P,O,M,L)}},m=(p,v,C,k,P,O,M)=>{const L=v.el=p.el;let{patchFlag:N,dynamicChildren:D,dirs:$}=v;N|=p.patchFlag&16;const U=p.props||ue,V=v.props||ue;let j;if(C&&sn(C,!1),(j=V.onVnodeBeforeUpdate)&&nt(j,C,v,p),$&&nn(v,p,C,"beforeUpdate"),C&&sn(C,!0),(U.innerHTML&&V.innerHTML==null||U.textContent&&V.textContent==null)&&w(L,""),D?y(p.dynamicChildren,D,L,C,k,tr(v,P),O):M||ee(p,v,L,null,C,k,tr(v,P),O,!1),N>0){if(N&16)I(L,U,V,C,P);else if(N&2&&U.class!==V.class&&o(L,"class",null,V.class,P),N&4&&o(L,"style",U.style,V.style,P),N&8){const K=v.dynamicProps;for(let ie=0;ie<K.length;ie++){const te=K[ie],be=U[te],we=V[te];(we!==be||te==="value")&&o(L,te,be,we,P,C)}}N&1&&p.children!==v.children&&w(L,v.children)}else!M&&D==null&&I(L,U,V,C,P);((j=V.onVnodeUpdated)||$)&&Be(()=>{j&&nt(j,C,v,p),$&&nn(v,p,C,"updated")},k)},y=(p,v,C,k,P,O,M)=>{for(let L=0;L<v.length;L++){const N=p[L],D=v[L],$=N.el&&(N.type===Ye||!ii(N,D)||N.shapeFlag&70)?S(N.el):C;W(N,D,$,null,k,P,O,M,!0)}},I=(p,v,C,k,P)=>{if(v!==C){if(v!==ue)for(const O in v)!ai(O)&&!(O in C)&&o(p,O,v[O],null,P,k);for(const O in C){if(ai(O))continue;const M=C[O],L=v[O];M!==L&&O!=="value"&&o(p,O,L,M,P,k)}"value"in C&&o(p,"value",v.value,C.value,P)}},b=(p,v,C,k,P,O,M,L,N)=>{const D=v.el=p?p.el:u(""),$=v.anchor=p?p.anchor:u("");let{patchFlag:U,dynamicChildren:V,slotScopeIds:j}=v;j&&(L=L?L.concat(j):j),p==null?(i(D,C,k),i($,C,k),d(v.children||[],C,$,P,O,M,L,N)):U>0&&U&64&&V&&p.dynamicChildren?(y(p.dynamicChildren,V,C,P,O,M,L),(v.key!=null||P&&v===P.subTree)&&Cc(p,v,!0)):ee(p,v,C,$,P,O,M,L,N)},g=(p,v,C,k,P,O,M,L,N)=>{v.slotScopeIds=L,p==null?v.shapeFlag&512?P.ctx.activate(v,C,k,M,N):Ve(v,C,k,P,O,M,N):St(p,v,N)},Ve=(p,v,C,k,P,O,M)=>{const L=p.component=ed(p,k,P);if(dc(p)&&(L.ctx.renderer=tt),td(L,!1,M),L.asyncDep){if(P&&P.registerDep(L,Ee,M),!p.el){const N=L.subTree=Et(_i);Y(null,N,v,C)}}else Ee(L,p,v,C,P,O,M)},St=(p,v,C)=>{const k=v.component=p.component;if(Wf(p,v,C))if(k.asyncDep&&!k.asyncResolved){ae(k,v,C);return}else k.next=v,k.update();else v.el=p.el,k.vnode=v},Ee=(p,v,C,k,P,O,M)=>{const L=()=>{if(p.isMounted){let{next:U,bu:V,u:j,parent:K,vnode:ie}=p;{const Ae=Rc(p);if(Ae){U&&(U.el=ie.el,ae(p,U,M)),Ae.asyncDep.then(()=>{p.isUnmounted||L()});return}}let te=U,be;sn(p,!1),U?(U.el=ie.el,ae(p,U,M)):U=ie,V&&Yi(V),(be=U.props&&U.props.onVnodeBeforeUpdate)&&nt(be,K,U,ie),sn(p,!0);const we=ir(p),Ie=p.subTree;p.subTree=we,W(Ie,we,S(Ie.el),ut(Ie),p,P,O),U.el=we.el,te===null&&Kf(p,we.el),j&&Be(j,P),(be=U.props&&U.props.onVnodeUpdated)&&Be(()=>nt(be,K,U,ie),P)}else{let U;const{el:V,props:j}=v,{bm:K,m:ie,parent:te,root:be,type:we}=p,Ie=ci(v);if(sn(p,!1),K&&Yi(K),!Ie&&(U=j&&j.onVnodeBeforeMount)&&nt(U,te,v),sn(p,!0),V&&gn){const Ae=()=>{p.subTree=ir(p),gn(V,p.subTree,p,P,null)};Ie&&we.__asyncHydrate?we.__asyncHydrate(V,p,Ae):Ae()}else{be.ce&&be.ce._injectChildStyle(we);const Ae=p.subTree=ir(p);W(null,Ae,C,k,p,P,O),v.el=Ae.el}if(ie&&Be(ie,P),!Ie&&(U=j&&j.onVnodeMounted)){const Ae=v;Be(()=>nt(U,te,Ae),P)}(v.shapeFlag&256||te&&ci(te.vnode)&&te.vnode.shapeFlag&256)&&p.a&&Be(p.a,P),p.isMounted=!0,v=C=k=null}};p.scope.on();const N=p.effect=new Kl(L);p.scope.off();const D=p.update=N.run.bind(N),$=p.job=N.runIfDirty.bind(N);$.i=p,$.id=p.uid,N.scheduler=()=>no($),sn(p,!0),D()},ae=(p,v,C)=>{v.component=p;const k=p.vnode.props;p.vnode=v,p.next=null,Rf(p,v.props,k,C),Df(p,v.children,C),zt(),ba(p),Gt()},ee=(p,v,C,k,P,O,M,L,N=!1)=>{const D=p&&p.children,$=p?p.shapeFlag:0,U=v.children,{patchFlag:V,shapeFlag:j}=v;if(V>0){if(V&128){Jt(D,U,C,k,P,O,M,L,N);return}else if(V&256){Je(D,U,C,k,P,O,M,L,N);return}}j&8?($&16&&Yt(D,P,O),U!==D&&w(C,U)):$&16?j&16?Jt(D,U,C,k,P,O,M,L,N):Yt(D,P,O,!0):($&8&&w(C,""),j&16&&d(U,C,k,P,O,M,L,N))},Je=(p,v,C,k,P,O,M,L,N)=>{p=p||Rn,v=v||Rn;const D=p.length,$=v.length,U=Math.min(D,$);let V;for(V=0;V<U;V++){const j=v[V]=N?Lt(v[V]):st(v[V]);W(p[V],j,C,null,P,O,M,L,N)}D>$?Yt(p,P,O,!0,!1,U):d(v,C,k,P,O,M,L,N,U)},Jt=(p,v,C,k,P,O,M,L,N)=>{let D=0;const $=v.length;let U=p.length-1,V=$-1;for(;D<=U&&D<=V;){const j=p[D],K=v[D]=N?Lt(v[D]):st(v[D]);if(ii(j,K))W(j,K,C,null,P,O,M,L,N);else break;D++}for(;D<=U&&D<=V;){const j=p[U],K=v[V]=N?Lt(v[V]):st(v[V]);if(ii(j,K))W(j,K,C,null,P,O,M,L,N);else break;U--,V--}if(D>U){if(D<=V){const j=V+1,K=j<$?v[j].el:k;for(;D<=V;)W(null,v[D]=N?Lt(v[D]):st(v[D]),C,K,P,O,M,L,N),D++}}else if(D>V)for(;D<=U;)_e(p[D],P,O,!0),D++;else{const j=D,K=D,ie=new Map;for(D=K;D<=V;D++){const Le=v[D]=N?Lt(v[D]):st(v[D]);Le.key!=null&&ie.set(Le.key,D)}let te,be=0;const we=V-K+1;let Ie=!1,Ae=0;const Ct=new Array(we);for(D=0;D<we;D++)Ct[D]=0;for(D=j;D<=U;D++){const Le=p[D];if(be>=we){_e(Le,P,O,!0);continue}let ze;if(Le.key!=null)ze=ie.get(Le.key);else for(te=K;te<=V;te++)if(Ct[te-K]===0&&ii(Le,v[te])){ze=te;break}ze===void 0?_e(Le,P,O,!0):(Ct[ze-K]=D+1,ze>=Ae?Ae=ze:Ie=!0,W(Le,v[ze],C,null,P,O,M,L,N),be++)}const mn=Ie?Mf(Ct):Rn;for(te=mn.length-1,D=we-1;D>=0;D--){const Le=K+D,ze=v[Le],_n=Le+1<$?v[Le+1].el:k;Ct[D]===0?W(null,ze,C,_n,P,O,M,L,N):Ie&&(te<0||D!==mn[te]?ct(ze,C,_n,2):te--)}}},ct=(p,v,C,k,P=null)=>{const{el:O,type:M,transition:L,children:N,shapeFlag:D}=p;if(D&6){ct(p.component.subTree,v,C,k);return}if(D&128){p.suspense.move(v,C,k);return}if(D&64){M.move(p,v,C,tt);return}if(M===Ye){i(O,v,C);for(let U=0;U<N.length;U++)ct(N[U],v,C,k);i(p.anchor,v,C);return}if(M===sr){X(p,v,C);return}if(k!==2&&D&1&&L)if(k===0)L.beforeEnter(O),i(O,v,C),Be(()=>L.enter(O),P);else{const{leave:U,delayLeave:V,afterLeave:j}=L,K=()=>i(O,v,C),ie=()=>{U(O,()=>{K(),j&&j()})};V?V(O,K,ie):ie()}else i(O,v,C)},_e=(p,v,C,k=!1,P=!1)=>{const{type:O,props:M,ref:L,children:N,dynamicChildren:D,shapeFlag:$,patchFlag:U,dirs:V,cacheIndex:j}=p;if(U===-2&&(P=!1),L!=null&&Ir(L,null,C,p,!0),j!=null&&(v.renderCache[j]=void 0),$&256){v.ctx.deactivate(p);return}const K=$&1&&V,ie=!ci(p);let te;if(ie&&(te=M&&M.onVnodeBeforeUnmount)&&nt(te,v,p),$&6)Xt(p.component,C,k);else{if($&128){p.suspense.unmount(C,k);return}K&&nn(p,null,v,"beforeUnmount"),$&64?p.type.remove(p,v,C,tt,k):D&&!D.hasOnce&&(O!==Ye||U>0&&U&64)?Yt(D,v,C,!1,!0):(O===Ye&&U&384||!P&&$&16)&&Yt(N,v,C),k&&ve(p)}(ie&&(te=M&&M.onVnodeUnmounted)||K)&&Be(()=>{te&&nt(te,v,p),K&&nn(p,null,v,"unmounted")},C)},ve=p=>{const{type:v,el:C,anchor:k,transition:P}=p;if(v===Ye){Ds(C,k);return}if(v===sr){B(p);return}const O=()=>{r(C),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(p.shapeFlag&1&&P&&!P.persisted){const{leave:M,delayLeave:L}=P,N=()=>M(C,O);L?L(p.el,O,N):N()}else O()},Ds=(p,v)=>{let C;for(;p!==v;)C=R(p),r(p),p=C;r(v)},Xt=(p,v,C)=>{const{bum:k,scope:P,job:O,subTree:M,um:L,m:N,a:D}=p;ka(N),ka(D),k&&Yi(k),P.stop(),O&&(O.flags|=8,_e(M,p,v,C)),L&&Be(L,v),Be(()=>{p.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Yt=(p,v,C,k=!1,P=!1,O=0)=>{for(let M=O;M<p.length;M++)_e(p[M],v,C,k,P)},ut=p=>{if(p.shapeFlag&6)return ut(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const v=R(p.anchor||p.el),C=v&&v[nf];return C?R(C):v};let $n=!1;const Oi=(p,v,C)=>{p==null?v._vnode&&_e(v._vnode,null,null,!0):W(v._vnode||null,p,v,null,null,null,C),v._vnode=p,$n||($n=!0,ba(),cc(),$n=!1)},tt={p:W,um:_e,m:ct,r:ve,mt:Ve,mc:d,pc:ee,pbc:y,n:ut,o:t};let Qt,gn;return{render:Oi,hydrate:Qt,createApp:Af(Oi,Qt)}}function tr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cc(t,e,n=!1){const i=t.children,r=e.children;if(G(i)&&G(r))for(let o=0;o<i.length;o++){const l=i[o];let u=r[o];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=r[o]=Lt(r[o]),u.el=l.el),!n&&u.patchFlag!==-2&&Cc(l,u)),u.type===As&&(u.el=l.el)}}function Mf(t){const e=t.slice(),n=[0];let i,r,o,l,u;const h=t.length;for(i=0;i<h;i++){const _=t[i];if(_!==0){if(r=n[n.length-1],t[r]<_){e[i]=r,n.push(i);continue}for(o=0,l=n.length-1;o<l;)u=o+l>>1,t[n[u]]<_?o=u+1:l=u;_<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=e[l];return n}function Rc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rc(e)}function ka(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uf=Symbol.for("v-scx"),Ff=()=>Qi(Uf);function nr(t,e,n){return Pc(t,e,n)}function Pc(t,e,n=ue){const{immediate:i,deep:r,flush:o,once:l}=n,u=De({},n);let h;if(Ss)if(o==="sync"){const R=Ff();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!e||i)u.once=!0;else{const R=()=>{};return R.stop=rt,R.resume=rt,R.pause=rt,R}const _=je;u.call=(R,H,F)=>lt(R,_,H,F);let w=!1;o==="post"?u.scheduler=R=>{Be(R,_&&_.suspense)}:o!=="sync"&&(w=!0,u.scheduler=(R,H)=>{H?R():no(R)}),u.augmentJob=R=>{e&&(R.flags|=4),w&&(R.flags|=2,_&&(R.id=_.uid,R.i=_))};const S=Xh(t,e,u);return h&&h.push(S),S}function jf(t,e,n){const i=this.proxy,r=ye(t)?t.includes(".")?Oc(i,t):()=>i[t]:t.bind(i,i);let o;q(e)?o=e:(o=e.handler,n=e);const l=Ti(this),u=Pc(r,o.bind(i),n);return l(),u}function Oc(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Hf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${fn(e)}Modifiers`];function Vf(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ue;let r=n;const o=e.startsWith("update:"),l=o&&Hf(i,e.slice(7));l&&(l.trim&&(r=n.map(w=>ye(w)?w.trim():w)),l.number&&(r=n.map(mr)));let u,h=i[u=Js(e)]||i[u=Js($t(e))];!h&&o&&(h=i[u=Js(fn(e))]),h&&lt(h,t,6,r);const _=i[u+"Once"];if(_){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,lt(_,t,6,r)}}function kc(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let l={},u=!1;if(!q(t)){const h=_=>{const w=kc(_,e,!0);w&&(u=!0,De(l,w))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!u?(pe(t)&&i.set(t,null),null):(G(o)?o.forEach(h=>l[h]=null):De(l,o),pe(t)&&i.set(t,l),l)}function bs(t,e){return!t||!vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,fn(e))||se(t,e))}function ir(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:l,attrs:u,emit:h,render:_,renderCache:w,props:S,data:R,setupState:H,ctx:F,inheritAttrs:W}=t,J=os(t);let Y,Q;try{if(n.shapeFlag&4){const B=r||i,le=B;Y=st(_.call(le,B,w,S,H,R,F)),Q=u}else{const B=e;Y=st(B.length>1?B(S,{attrs:u,slots:l,emit:h}):B(S,null)),Q=e.props?u:Bf(u)}}catch(B){hi.length=0,Is(B,t,1),Y=Et(_i)}let X=Y;if(Q&&W!==!1){const B=Object.keys(Q),{shapeFlag:le}=X;B.length&&le&7&&(o&&B.some(jr)&&(Q=$f(Q,o)),X=Mn(X,Q,!1,!0))}return n.dirs&&(X=Mn(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&io(X,n.transition),Y=X,os(J),Y}const Bf=t=>{let e;for(const n in t)(n==="class"||n==="style"||vs(n))&&((e||(e={}))[n]=t[n]);return e},$f=(t,e)=>{const n={};for(const i in t)(!jr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Wf(t,e,n){const{props:i,children:r,component:o}=t,{props:l,children:u,patchFlag:h}=e,_=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?Da(i,l,_):!!l;if(h&8){const w=e.dynamicProps;for(let S=0;S<w.length;S++){const R=w[S];if(l[R]!==i[R]&&!bs(_,R))return!0}}}else return(r||u)&&(!u||!u.$stable)?!0:i===l?!1:i?l?Da(i,l,_):!0:!!l;return!1}function Da(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(e[o]!==t[o]&&!bs(n,o))return!0}return!1}function Kf({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dc=t=>t.__isSuspense;function zf(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):ef(t)}const Ye=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),_i=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),hi=[];let We=null;function oo(t=!1){hi.push(We=t?null:[])}function Gf(){hi.pop(),We=hi[hi.length-1]||null}let vi=1;function Na(t){vi+=t,t<0&&We&&(We.hasOnce=!0)}function qf(t){return t.dynamicChildren=vi>0?We||Rn:null,Gf(),vi>0&&We&&We.push(t),t}function ao(t,e,n,i,r,o){return qf(me(t,e,n,i,r,o,!0))}function Nc(t){return t?t.__v_isVNode===!0:!1}function ii(t,e){return t.type===e.type&&t.key===e.key}const Lc=({key:t})=>t??null,Zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||ke(t)||q(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,i=0,r=null,o=t===Ye?0:1,l=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lc(e),ref:e&&Zi(e),scopeId:hc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qe};return u?(lo(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=ye(n)?8:16),vi>0&&!l&&We&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&We.push(h),h}const Et=Jf;function Jf(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===_f)&&(t=_i),Nc(t)){const u=Mn(t,e,!0);return n&&lo(u,n),vi>0&&!o&&We&&(u.shapeFlag&6?We[We.indexOf(t)]=u:We.push(u)),u.patchFlag=-2,u}if(rd(t)&&(t=t.__vccOpts),e){e=Xf(e);let{class:u,style:h}=e;u&&!ye(u)&&(e.class=$r(u)),pe(h)&&(Zr(h)&&!G(h)&&(h=De({},h)),e.style=Br(h))}const l=ye(t)?1:Dc(t)?128:sf(t)?64:pe(t)?4:q(t)?2:0;return me(t,e,n,i,r,l,o,!0)}function Xf(t){return t?Zr(t)||wc(t)?De({},t):t:null}function Mn(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:l,children:u,transition:h}=t,_=e?Yf(r||{},e):r,w={__v_isVNode:!0,__v_skip:!0,type:t.type,props:_,key:_&&Lc(_),ref:e&&e.ref?n&&o?G(o)?o.concat(Zi(e)):[o,Zi(e)]:Zi(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&io(w,h.clone(w)),w}function on(t=" ",e=0){return Et(As,null,t,e)}function st(t){return t==null||typeof t=="boolean"?Et(_i):G(t)?Et(Ye,null,t.slice()):Nc(t)?Lt(t):Et(As,null,String(t))}function Lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function lo(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),lo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!wc(e)?e._ctx=qe:r===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),i&64?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yf(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=$r([e.class,i.class]));else if(r==="style")e.style=Br([e.style,i.style]);else if(vs(r)){const o=e[r],l=i[r];l&&o!==l&&!(G(o)&&o.includes(l))&&(e[r]=o?[].concat(o,l):l)}else r!==""&&(e[r]=i[r])}return e}function nt(t,e,n,i=null){lt(t,e,7,[n,i])}const Qf=_c();let Zf=0;function ed(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Qf,o={uid:Zf++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ic(i,r),emitsOptions:kc(i,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:i.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Vf.bind(null,o),t.ce&&t.ce(o),o}let je=null,ls,Cr;{const t=Vl(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(l=>l(o)):r[0](o)}};ls=e("__VUE_INSTANCE_SETTERS__",n=>je=n),Cr=e("__VUE_SSR_SETTERS__",n=>Ss=n)}const Ti=t=>{const e=je;return ls(t),t.scope.on(),()=>{t.scope.off(),ls(e)}},La=()=>{je&&je.scope.off(),ls(null)};function xc(t){return t.vnode.shapeFlag&4}let Ss=!1;function td(t,e=!1,n=!1){e&&Cr(e);const{props:i,children:r}=t.vnode,o=xc(t);Cf(t,i,o,e),kf(t,r,n);const l=o?nd(t,e):void 0;return e&&Cr(!1),l}function nd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vf);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?sd(t):null,o=Ti(t);zt();const l=Ii(i,t,0,[t.props,r]);if(Gt(),o(),Ml(l)){if(ci(t)||fc(t),l.then(La,La),e)return l.then(u=>{xa(t,u,e)}).catch(u=>{Is(u,t,0)});t.asyncDep=l}else xa(t,l,e)}else Mc(t,e)}function xa(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=oc(e)),Mc(t,n)}let Ma;function Mc(t,e,n){const i=t.type;if(!t.render){if(!e&&Ma&&!i.render){const r=i.template||so(t).template;if(r){const{isCustomElement:o,compilerOptions:l}=t.appContext.config,{delimiters:u,compilerOptions:h}=i,_=De(De({isCustomElement:o,delimiters:u},l),h);i.render=Ma(r,_)}}t.render=i.render||rt}{const r=Ti(t);zt();try{yf(t)}finally{Gt(),r()}}}const id={get(t,e){return Ne(t,"get",""),t[e]}};function sd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,id),slots:t.slots,emit:t.emit,expose:e}}function Cs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(oc(Vh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}})):t.proxy}function rd(t){return q(t)&&"__vccOpts"in t}const od=(t,e)=>qh(t,e,Ss),ad="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rr;const Ua=typeof window<"u"&&window.trustedTypes;if(Ua)try{Rr=Ua.createPolicy("vue",{createHTML:t=>t})}catch{}const Uc=Rr?t=>Rr.createHTML(t):t=>t,ld="http://www.w3.org/2000/svg",cd="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,Fa=pt&&pt.createElement("template"),ud={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?pt.createElementNS(ld,t):e==="mathml"?pt.createElementNS(cd,t):n?pt.createElement(t,{is:n}):pt.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const l=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Fa.innerHTML=Uc(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const u=Fa.content;if(i==="svg"||i==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}e.insertBefore(u,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hd=Symbol("_vtc");function fd(t,e,n){const i=t[hd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ja=Symbol("_vod"),dd=Symbol("_vsh"),pd=Symbol(""),gd=/(^|;)\s*display\s*:/;function md(t,e,n){const i=t.style,r=ye(n);let o=!1;if(n&&!r){if(e)if(ye(e))for(const l of e.split(";")){const u=l.slice(0,l.indexOf(":")).trim();n[u]==null&&es(i,u,"")}else for(const l in e)n[l]==null&&es(i,l,"");for(const l in n)l==="display"&&(o=!0),es(i,l,n[l])}else if(r){if(e!==n){const l=i[pd];l&&(n+=";"+l),i.cssText=n,o=gd.test(n)}}else e&&t.removeAttribute("style");ja in t&&(t[ja]=o?i.display:"",t[dd]&&(i.display="none"))}const Ha=/\s*!important$/;function es(t,e,n){if(G(n))n.forEach(i=>es(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=_d(t,e);Ha.test(n)?t.setProperty(fn(i),n.replace(Ha,""),"important"):t[i]=n}}const Va=["Webkit","Moz","ms"],rr={};function _d(t,e){const n=rr[e];if(n)return n;let i=$t(e);if(i!=="filter"&&i in t)return rr[e]=i;i=jl(i);for(let r=0;r<Va.length;r++){const o=Va[r]+i;if(o in t)return rr[e]=o}return e}const Ba="http://www.w3.org/1999/xlink";function $a(t,e,n,i,r,o=mh(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ba,e.slice(6,e.length)):t.setAttributeNS(Ba,e,n):n==null||o&&!Bl(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Kt(n)?String(n):n)}function Wa(t,e,n,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Uc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bl(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function An(t,e,n,i){t.addEventListener(e,n,i)}function vd(t,e,n,i){t.removeEventListener(e,n,i)}const Ka=Symbol("_vei");function yd(t,e,n,i,r=null){const o=t[Ka]||(t[Ka]={}),l=o[e];if(i&&l)l.value=i;else{const[u,h]=wd(e);if(i){const _=o[e]=Td(i,r);An(t,u,_,h)}else l&&(vd(t,u,l,h),o[e]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function wd(t){let e;if(za.test(t)){e={};let i;for(;i=t.match(za);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fn(t.slice(2)),e]}let or=0;const Ed=Promise.resolve(),Id=()=>or||(Ed.then(()=>or=0),or=Date.now());function Td(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;lt(bd(i,n.value),e,5,[i])};return n.value=t,n.attached=Id(),n}function bd(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ad=(t,e,n,i,r,o)=>{const l=r==="svg";e==="class"?fd(t,i,l):e==="style"?md(t,n,i):vs(e)?jr(e)||yd(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sd(t,e,i,l))?(Wa(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$a(t,e,i,l,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(i))?Wa(t,$t(e),i):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$a(t,e,i,l))};function Sd(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ga(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ga(e)&&ye(n)?!1:e in t}const qa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Yi(e,n):e};function Cd(t){t.target.composing=!0}function Ja(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ar=Symbol("_assign"),Xa={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[ar]=qa(r);const o=i||r.props&&r.props.type==="number";An(t,e?"change":"input",l=>{if(l.target.composing)return;let u=t.value;n&&(u=u.trim()),o&&(u=mr(u)),t[ar](u)}),n&&An(t,"change",()=>{t.value=t.value.trim()}),e||(An(t,"compositionstart",Cd),An(t,"compositionend",Ja),An(t,"change",Ja))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:o}},l){if(t[ar]=qa(l),t.composing)return;const u=(o||t.type==="number")&&!/^0\d/.test(t.value)?mr(t.value):t.value,h=e??"";u!==h&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===h)||(t.value=h))}},Rd=De({patchProp:Ad},ud);let Ya;function Pd(){return Ya||(Ya=Nf(Rd))}const Od=(...t)=>{const e=Pd().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Dd(i);if(!r)return;const o=e._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=n(r,!1,kd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},e};function kd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dd(t){return ye(t)?document.querySelector(t):t}const Nd="/vite.svg",Ld="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",co=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},xd={class:"card"},Md={__name:"HelloWorld",props:{msg:String},setup(t){const e=Bh(0);return(n,i)=>(oo(),ao(Ye,null,[me("h1",null,_r(t.msg),1),me("div",xd,[me("button",{type:"button",onClick:i[0]||(i[0]=r=>e.value++)},"count is "+_r(e.value),1),i[1]||(i[1]=me("p",null,[on(" Edit "),me("code",null,"components/HelloWorld.vue"),on(" to test HMR ")],-1))]),i[2]||(i[2]=me("p",null,[on(" Check out "),me("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),on(", the official Vue + Vite starter ")],-1)),i[3]||(i[3]=me("p",null,[on(" Learn more about IDE Support for Vue in the "),me("a",{href:"https://vuejs.org/guide/scaling-up/tooling.html#ide-support",target:"_blank"},"Vue Docs Scaling up Guide"),on(". ")],-1)),i[4]||(i[4]=me("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1))],64))}},Ud=co(Md,[["__scopeId","data-v-830e400e"]]);var Qa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Fd=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],l=t[n++],u=t[n++],h=((r&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|l&63)}}return e.join("")},jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],l=r+1<t.length,u=l?t[r+1]:0,h=r+2<t.length,_=h?t[r+2]:0,w=o>>2,S=(o&3)<<4|u>>4;let R=(u&15)<<2|_>>6,H=_&63;h||(H=64,l||(R=64)),i.push(n[w],n[S],n[R],n[H])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],u=r<t.length?n[t.charAt(r)]:0;++r;const _=r<t.length?n[t.charAt(r)]:64;++r;const S=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||u==null||_==null||S==null)throw new jd;const R=o<<2|u>>4;if(i.push(R),_!==64){const H=u<<4&240|_>>2;if(i.push(H),S!==64){const F=_<<6&192|S;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hd=function(t){const e=Fc(t);return jc.encodeByteArray(e,!0)},cs=function(t){return Hd(t).replace(/\./g,"")},Hc=function(t){try{return jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=()=>Vd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof Qa>"u")return;const t=Qa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hc(t[1]);return e&&JSON.parse(e)},uo=()=>{try{return Bd()||$d()||Wd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vc=t=>{var e,n;return(n=(e=uo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kd=t=>{const e=Vc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Bc=()=>{var t;return(t=uo())===null||t===void 0?void 0:t.config},$c=t=>{var e;return(e=uo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cs(JSON.stringify(n)),cs(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Jd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qd(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zd(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class At extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=tp,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],l=o?np(o,i):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new At(r,u,i)}}function np(t,e){return t.replace(ip,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const ip=/\{\$([^}]+)}/g;function sp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function us(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],l=e[r];if(Za(o)&&Za(l)){if(!us(o,l))return!1}else if(o!==l)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Za(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,o]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rp(t,e){const n=new op(t,e);return n.subscribe.bind(n)}class op{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ap(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=lr),r.error===void 0&&(r.error=lr),r.complete===void 0&&(r.complete=lr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ap(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zd;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&l.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const l=this.instances.get(r);return l&&e(l,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(t){return t===an?void 0:t}function up(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const fp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},dp=re.INFO,pp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=pp[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ho{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let el,tl;function _p(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wc=new WeakMap,Pr=new WeakMap,Kc=new WeakMap,cr=new WeakMap,fo=new WeakMap;function yp(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(jt(t.result)),r()},l=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Wc.set(n,t)}).catch(()=>{}),fo.set(e,t),e}function wp(t){if(Pr.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),r()},l=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});Pr.set(t,e)}let Or={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ep(t){Or=t(Or)}function Ip(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ur(this),e,...n);return Kc.set(i,e.sort?e.sort():[e]),jt(i)}:vp().includes(t)?function(...e){return t.apply(ur(this),e),jt(Wc.get(this))}:function(...e){return jt(t.apply(ur(this),e))}}function Tp(t){return typeof t=="function"?Ip(t):(t instanceof IDBTransaction&&wp(t),mp(t,_p())?new Proxy(t,Or):t)}function jt(t){if(t instanceof IDBRequest)return yp(t);if(cr.has(t))return cr.get(t);const e=Tp(t);return e!==t&&(cr.set(t,e),fo.set(e,t)),e}const ur=t=>fo.get(t);function bp(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const l=indexedDB.open(t,e),u=jt(l);return i&&l.addEventListener("upgradeneeded",h=>{i(jt(l.result),h.oldVersion,h.newVersion,jt(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",_=>r(_.oldVersion,_.newVersion,_))}).catch(()=>{}),u}const Ap=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],hr=new Map;function nl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Sp.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Ap.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,r?"readwrite":"readonly");let _=h.store;return i&&(_=_.index(u.shift())),(await Promise.all([_[n](...u),r&&h.done]))[0]};return hr.set(e,o),o}Ep(t=>({...t,get:(e,n,i)=>nl(e,n)||t.get(e,n,i),has:(e,n)=>!!nl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Rp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kr="@firebase/app",il="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new ho("@firebase/app"),Pp="@firebase/app-compat",Op="@firebase/analytics-compat",kp="@firebase/analytics",Dp="@firebase/app-check-compat",Np="@firebase/app-check",Lp="@firebase/auth",xp="@firebase/auth-compat",Mp="@firebase/database",Up="@firebase/database-compat",Fp="@firebase/functions",jp="@firebase/functions-compat",Hp="@firebase/installations",Vp="@firebase/installations-compat",Bp="@firebase/messaging",$p="@firebase/messaging-compat",Wp="@firebase/performance",Kp="@firebase/performance-compat",zp="@firebase/remote-config",Gp="@firebase/remote-config-compat",qp="@firebase/storage",Jp="@firebase/storage-compat",Xp="@firebase/firestore",Yp="@firebase/vertexai-preview",Qp="@firebase/firestore-compat",Zp="firebase",eg="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]",tg={[kr]:"fire-core",[Pp]:"fire-core-compat",[kp]:"fire-analytics",[Op]:"fire-analytics-compat",[Np]:"fire-app-check",[Dp]:"fire-app-check-compat",[Lp]:"fire-auth",[xp]:"fire-auth-compat",[Mp]:"fire-rtdb",[Up]:"fire-rtdb-compat",[Fp]:"fire-fn",[jp]:"fire-fn-compat",[Hp]:"fire-iid",[Vp]:"fire-iid-compat",[Bp]:"fire-fcm",[$p]:"fire-fcm-compat",[Wp]:"fire-perf",[Kp]:"fire-perf-compat",[zp]:"fire-rc",[Gp]:"fire-rc-compat",[qp]:"fire-gcs",[Jp]:"fire-gcs-compat",[Xp]:"fire-fst",[Qp]:"fire-fst-compat",[Yp]:"fire-vertex","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Map,ng=new Map,Nr=new Map;function sl(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Nr.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Nr.set(e,t);for(const n of hs.values())sl(n,t);for(const n of ng.values())sl(n,t);return!0}function po(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new bi("app","Firebase",ig);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=eg;function zc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(n||(n=Bc()),!n)throw Ht.create("no-options");const o=hs.get(r);if(o){if(us(n,o.options)&&us(i,o.config))return o;throw Ht.create("duplicate-app",{appName:r})}const l=new hp(r);for(const h of Nr.values())l.addComponent(h);const u=new sg(n,i,l);return hs.set(r,u),u}function Gc(t=Dr){const e=hs.get(t);if(!e&&t===Dr&&Bc())return zc();if(!e)throw Ht.create("no-app",{appName:t});return e}function Vt(t,e,n){var i;let r=(i=tg[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(u.join(" "));return}Un(new un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="firebase-heartbeat-database",og=1,yi="firebase-heartbeat-store";let fr=null;function qc(){return fr||(fr=bp(rg,og,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),fr}async function ag(t){try{const n=(await qc()).transaction(yi),i=await n.objectStore(yi).get(Jc(t));return await n.done,i}catch(e){if(e instanceof At)It.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(n.message)}}}async function rl(t,e){try{const i=(await qc()).transaction(yi,"readwrite");await i.objectStore(yi).put(e,Jc(t)),await i.done}catch(n){if(n instanceof At)It.warn(n.message);else{const i=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});It.warn(i.message)}}}function Jc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=1024,cg=30*24*60*60*1e3;class ug{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ol();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=cg}),this._storage.overwrite(this._heartbeatsCache))}catch(i){It.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ol(),{heartbeatsToSend:i,unsentEntries:r}=hg(this._heartbeatsCache.heartbeats),o=cs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return It.warn(n),""}}}function ol(){return new Date().toISOString().substring(0,10)}function hg(t,e=lg){const n=[];let i=t.slice();for(const r of t){const o=n.find(l=>l.agent===r.agent);if(o){if(o.dates.push(r.date),al(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),al(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zd()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ag(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function al(t){return cs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){Un(new un("platform-logger",e=>new Cp(e),"PRIVATE")),Un(new un("heartbeat",e=>new ug(e),"PRIVATE")),Vt(kr,il,t),Vt(kr,il,"esm2017"),Vt("fire-js","")}dg("");function go(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Xc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pg=Xc,Yc=new bi("auth","Firebase",Xc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new ho("@firebase/auth");function gg(t,...e){fs.logLevel<=re.WARN&&fs.warn(`Auth (${Hn}): ${t}`,...e)}function ts(t,...e){fs.logLevel<=re.ERROR&&fs.error(`Auth (${Hn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw mo(t,...e)}function ot(t,...e){return mo(t,...e)}function Qc(t,e,n){const i=Object.assign(Object.assign({},pg()),{[e]:n});return new bi("auth","Firebase",i).create(e,{appName:t.name})}function Bt(t){return Qc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Yc.create(t,...e)}function z(t,e,...n){if(!t)throw mo(e,...n)}function _t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ts(e),new Error(e)}function Tt(t,e){t||_t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mg(){return ll()==="http:"||ll()==="https:"}function ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mg()||Xd()||"connection"in navigator)?navigator.onLine:!0}function vg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tt(n>e,"Short delay should be less than long delay!"),this.isMobile=qd()||Yd()}get(){return _g()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e){Tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new Si(3e4,6e4);function pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qt(t,e,n,i,r={}){return eu(t,r,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const u=Ai(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const _=Object.assign({method:e,headers:h},o);return Jd()||(_.referrerPolicy="no-referrer"),Zc.fetch()(tu(t,t.config.apiHost,n,u),_)})}async function eu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},yg),e);try{const r=new Ig(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Ji(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,_]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw Ji(t,"user-disabled",l);const w=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Qc(t,w,_);et(t,w)}}catch(r){if(r instanceof At)throw r;et(t,"network-request-failed",{message:String(r)})}}async function Rs(t,e,n,i,r={}){const o=await qt(t,e,n,i,r);return"mfaPendingCredential"in o&&et(t,"multi-factor-auth-required",{_serverResponse:o}),o}function tu(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?_o(t.config,r):`${t.config.apiScheme}://${r}`}function Eg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ig{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ot(this.auth,"network-request-failed")),wg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ot(t,e,i);return r.customData._tokenResponse=n,r}function cl(t){return t!==void 0&&t.enterprise!==void 0}class Tg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Eg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bg(t,e){return qt(t,"GET","/v2/recaptchaConfig",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e){return qt(t,"POST","/v1/accounts:delete",e)}async function nu(t,e){return qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sg(t,e=!1){const n=dn(t),i=await n.getIdToken(e),r=vo(i);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:fi(dr(r.auth_time)),issuedAtTime:fi(dr(r.iat)),expirationTime:fi(dr(r.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function vo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const r=Hc(n);return r?JSON.parse(r):(ts("Failed to decode base64 JWT payload"),null)}catch(r){return ts("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ul(t){const e=vo(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof At&&Cg(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Cg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t){var e;const n=t.auth,i=await t.getIdToken(),r=await wi(t,nu(n,{idToken:i}));z(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?iu(o.providerUserInfo):[],u=Og(t.providerData,l),h=t.isAnonymous,_=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),w=h?_:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new xr(o.createdAt,o.lastLoginAt),isAnonymous:w};Object.assign(t,S)}async function Pg(t){const e=dn(t);await ds(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Og(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function iu(t){return t.map(e=>{var{providerId:n}=e,i=go(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e){const n=await eu(t,{},async()=>{const i=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,l=tu(t,r,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Zc.fetch()(l,{method:"POST",headers:u,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dg(t,e){return qt(t,"POST","/v2/accounts:revokeToken",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=ul(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await kg(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,l=new Dn;return i&&(z(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),r&&(z(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),o&&(z(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=go(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await wi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sg(this,e)}reload(){return Pg(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await wi(this,Ag(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,l,u,h,_,w;const S=(i=n.displayName)!==null&&i!==void 0?i:void 0,R=(r=n.email)!==null&&r!==void 0?r:void 0,H=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,F=(l=n.photoURL)!==null&&l!==void 0?l:void 0,W=(u=n.tenantId)!==null&&u!==void 0?u:void 0,J=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,Y=(_=n.createdAt)!==null&&_!==void 0?_:void 0,Q=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:X,emailVerified:B,isAnonymous:le,providerData:de,stsTokenManager:E}=n;z(X&&E,e,"internal-error");const d=Dn.fromJSON(this.name,E);z(typeof X=="string",e,"internal-error"),Dt(S,e.name),Dt(R,e.name),z(typeof B=="boolean",e,"internal-error"),z(typeof le=="boolean",e,"internal-error"),Dt(H,e.name),Dt(F,e.name),Dt(W,e.name),Dt(J,e.name),Dt(Y,e.name),Dt(Q,e.name);const m=new vt({uid:X,auth:e,email:R,emailVerified:B,displayName:S,isAnonymous:le,photoURL:F,phoneNumber:H,tenantId:W,stsTokenManager:d,createdAt:Y,lastLoginAt:Q});return de&&Array.isArray(de)&&(m.providerData=de.map(y=>Object.assign({},y))),J&&(m._redirectEventId=J),m}static async _fromIdTokenResponse(e,n,i=!1){const r=new Dn;r.updateFromServerResponse(n);const o=new vt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ds(o),o}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];z(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?iu(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),u=new Dn;u.updateFromIdToken(i);const h=new vt({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:l}),_={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new xr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,_),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function yt(t){Tt(t instanceof Function,"Expected a class definition");let e=hl.get(t);return e?(Tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}su.type="NONE";const fl=su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e,n){return`firebase:${t}:${e}:${n}`}class Nn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=ns(this.userKey,r.apiKey,o),this.fullPersistenceKey=ns("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Nn(yt(fl),e,i);const r=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let o=r[0]||yt(fl);const l=ns(i,e.config.apiKey,e.name);let u=null;for(const _ of n)try{const w=await _._get(l);if(w){const S=vt._fromJSON(e,w);_!==o&&(u=S),o=_;break}}catch{}const h=r.filter(_=>_._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Nn(o,e,i):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async _=>{if(_!==o)try{await _._remove(l)}catch{}})),new Nn(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ru(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uu(e))return"Blackberry";if(hu(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||au(e))&&!e.includes("edge/"))return"Chrome";if(cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ru(t=He()){return/firefox\//i.test(t)}function ou(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function au(t=He()){return/crios\//i.test(t)}function lu(t=He()){return/iemobile/i.test(t)}function cu(t=He()){return/android/i.test(t)}function uu(t=He()){return/blackberry/i.test(t)}function hu(t=He()){return/webos/i.test(t)}function yo(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ng(t=He()){var e;return yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lg(){return Qd()&&document.documentMode===10}function fu(t=He()){return yo(t)||cu(t)||hu(t)||uu(t)||/windows phone/i.test(t)||lu(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e=[]){let n;switch(t){case"Browser":n=dl(He());break;case"Worker":n=`${dl(He())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e={}){return qt(t,"GET","/v2/passwordPolicy",pn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=6;class Fg{constructor(e){var n,i,r,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Ug,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pl(this),this.idTokenSubscription=new pl(this),this.beforeStateQueue=new xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Nn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nu(this,{idToken:e}),i=await vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(r=h.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ds(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Bt(this));const n=e?dn(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mg(this),n=new Fg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Dg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vn(t){return dn(t)}class pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=rp(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hg(t){Ps=t}function pu(t){return Ps.loadJS(t)}function Vg(){return Ps.recaptchaEnterpriseScript}function Bg(){return Ps.gapiScript}function $g(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Wg="recaptcha-enterprise",Kg="NO_RECAPTCHA";class zg{constructor(e){this.type=Wg,this.auth=Vn(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{bg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const _=new Tg(h);return o.tenantId==null?o._agentRecaptchaConfig=_:o._tenantRecaptchaConfigs[o.tenantId]=_,l(_.siteKey)}}).catch(h=>{u(h)})})}function r(o,l,u){const h=window.grecaptcha;cl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(_=>{l(_)}).catch(()=>{l(Kg)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{i(this.auth).then(u=>{if(!n&&cl(window.grecaptcha))r(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Vg();h.length!==0&&(h+=u),pu(h).then(()=>{r(u,o,l)}).catch(_=>{l(_)})}}).catch(u=>{l(u)})})}}async function gl(t,e,n,i=!1){const r=new zg(t);let o;try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l=Object.assign({},e);return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ml(t,e,n,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gl(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await gl(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e){const n=po(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(us(o,e??{}))return r;et(r,"already-initialized")}return n.initialize({options:e})}function qg(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Jg(t,e,n){const i=Vn(t);z(i._canInitEmulator,i,"emulator-config-failed"),z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,o=gu(e),{host:l,port:u}=Xg(e),h=u===null?"":`:${u}`;i.config.emulator={url:`${o}//${l}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),Yg()}function gu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xg(t){const e=gu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:_l(i.substr(o.length+1))}}else{const[o,l]=i.split(":");return{host:o,port:_l(l)}}}function _l(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,n){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}async function Qg(t,e){return qt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(t,e){return Rs(t,"POST","/v1/accounts:signInWithPassword",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e){return Rs(t,"POST","/v1/accounts:signInWithEmailLink",pn(t,e))}async function tm(t,e){return Rs(t,"POST","/v1/accounts:signInWithEmailLink",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends wo{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ei(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,n,"signInWithPassword",Zg);case"emailLink":return em(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,i,"signUpPassword",Qg);case"emailLink":return tm(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e){return Rs(t,"POST","/v1/accounts:signInWithIdp",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="http://localhost";class hn extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=go(n,["providerId","signInMethod"]);if(!i||!r)return null;const l=new hn(i,r);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Ln(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ln(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ln(e,n)}buildRequest(){const e={requestUri:nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sm(t){const e=ri(oi(t)).link,n=e?ri(oi(e)).deep_link_id:null,i=ri(oi(t)).deep_link_id;return(i?ri(oi(i)).link:null)||i||n||e||t}class Eo{constructor(e){var n,i,r,o,l,u;const h=ri(oi(e)),_=(n=h.apiKey)!==null&&n!==void 0?n:null,w=(i=h.oobCode)!==null&&i!==void 0?i:null,S=im((r=h.mode)!==null&&r!==void 0?r:null);z(_&&w&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=w,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=h.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=sm(e);try{return new Eo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Eo.parseLink(n);return z(i,"argument-error"),Ei._fromEmailAndCode(e,i.code,i.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends mu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ci{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mt.credential(n,i)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ci{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ci{constructor(){super("twitter.com")}static credential(e,n){return hn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ft.credential(n,i)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await vt._fromIdTokenResponse(e,i,r),l=vl(i);return new Fn({user:o,providerId:l,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=vl(i);return new Fn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function vl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends At{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ps.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ps(e,n,i,r)}}function _u(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ps._fromErrorAndOperation(t,o,e,i):o})}async function rm(t,e,n=!1){const i=await wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(t,e,n=!1){const{auth:i}=t;if(mt(i.app))return Promise.reject(Bt(i));const r="reauthenticate";try{const o=await wi(t,_u(i,r,e,t),n);z(o.idToken,i,"internal-error");const l=vo(o.idToken);z(l,i,"internal-error");const{sub:u}=l;return z(t.uid===u,i,"user-mismatch"),Fn._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&et(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t,e,n=!1){if(mt(t.app))return Promise.reject(Bt(t));const i="signIn",r=await _u(t,i,e),o=await Fn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}async function am(t,e){return vu(Vn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t){const e=Vn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function cm(t,e,n){return mt(t.app)?Promise.reject(Bt(t)):am(dn(t),Bn.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lm(t),i})}function um(t,e,n,i){return dn(t).onIdTokenChanged(e,n,i)}function hm(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}const gs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=1e3,dm=10;class wu extends yu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(i);!n&&this.localCache[i]===l||this.notifyListeners(i,l)},o=this.storage.getItem(i);Lg()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,dm):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wu.type="LOCAL";const pm=wu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends yu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eu.type="SESSION";const Iu=Eu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Os(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const u=Array.from(l).map(async _=>_(n.origin,o)),h=await gm(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const _=Io("",20);r.port1.start();const w=setTimeout(()=>{h(new Error("unsupported_event"))},i);l={messageChannel:r,onMessage(S){const R=S;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(w),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(R.data.response);break;default:clearTimeout(w),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function _m(t){at().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function vm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ym(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wm(){return Tu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="firebaseLocalStorageDb",Em=1,ms="firebaseLocalStorage",Au="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ks(t,e){return t.transaction([ms],e?"readwrite":"readonly").objectStore(ms)}function Im(){const t=indexedDB.deleteDatabase(bu);return new Ri(t).toPromise()}function Mr(){const t=indexedDB.open(bu,Em);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ms,{keyPath:Au})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ms)?e(i):(i.close(),await Im(),e(await Mr()))})})}async function yl(t,e,n){const i=ks(t,!0).put({[Au]:e,value:n});return new Ri(i).toPromise()}async function Tm(t,e){const n=ks(t,!1).get(e),i=await new Ri(n).toPromise();return i===void 0?null:i.value}function wl(t,e){const n=ks(t,!0).delete(e);return new Ri(n).toPromise()}const bm=800,Am=3;class Su{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Am)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Os._getInstance(wm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vm(),!this.activeServiceWorker)return;this.sender=new mm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mr();return await yl(e,gs,"1"),await wl(e,gs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yl(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Tm(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=ks(r,!1).getAll();return new Ri(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Su.type="LOCAL";const Sm=Su;new Si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){return e?yt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rm(t){return vu(t.auth,new To(t),t.bypassAuthState)}function Pm(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),om(n,new To(t),t.bypassAuthState)}async function Om(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),rm(n,new To(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rm;case"linkViaPopup":case"linkViaRedirect":return Om;case"reauthViaPopup":case"reauthViaRedirect":return Pm;default:et(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Si(2e3,1e4);class Cn extends Cu{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,km.get())};e()}}Cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="pendingRedirect",is=new Map;class Nm extends Cu{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const i=await Lm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lm(t,e){const n=Um(e),i=Mm(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function xm(t,e){is.set(t._key(),e)}function Mm(t){return yt(t._redirectPersistence)}function Um(t){return ns(Dm,t.config.apiKey,t.name)}async function Fm(t,e,n=!1){if(mt(t.app))return Promise.reject(Bt(t));const i=Vn(t),r=Cm(i,e),l=await new Nm(i,r,n).execute();return l&&!n&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=10*60*1e3;class Hm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ru(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jm&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ru({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ru(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(t,e={}){return qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wm=/^https?/;async function Km(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bm(t);for(const n of e)try{if(zm(n))return}catch{}et(t,"unauthorized-domain")}function zm(t){const e=Lr(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===i}if(!Wm.test(n))return!1;if($m.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Si(3e4,6e4);function Il(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qm(t){return new Promise((e,n)=>{var i,r,o;function l(){Il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Il(),n(ot(t,"network-request-failed"))},timeout:Gm.get()})}if(!((r=(i=at().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=at().gapi)===null||o===void 0)&&o.load)l();else{const u=$g("iframefcb");return at()[u]=()=>{gapi.load?l():n(ot(t,"network-request-failed"))},pu(`${Bg()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw ss=null,e})}let ss=null;function Jm(t){return ss=ss||qm(t),ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Si(5e3,15e3),Ym="__/auth/iframe",Qm="emulator/auth/iframe",Zm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t_(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_o(e,Qm):`https://${t.config.authDomain}/${Ym}`,i={apiKey:e.apiKey,appName:t.name,v:Hn},r=e_.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Ai(i).slice(1)}`}async function n_(t){const e=await Jm(t),n=at().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:t_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zm,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const l=ot(t,"network-request-failed"),u=at().setTimeout(()=>{o(l)},Xm.get());function h(){at().clearTimeout(u),r(i)}i.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s_=500,r_=600,o_="_blank",a_="http://localhost";class Tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l_(t,e,n,i=s_,r=r_){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h=Object.assign(Object.assign({},i_),{width:i.toString(),height:r.toString(),top:o,left:l}),_=He().toLowerCase();n&&(u=au(_)?o_:n),ru(_)&&(e=e||a_,h.scrollbars="yes");const w=Object.entries(h).reduce((R,[H,F])=>`${R}${H}=${F},`,"");if(Ng(_)&&u!=="_self")return c_(e||"",u),new Tl(null);const S=window.open(e||"",u,w);z(S,t,"popup-blocked");try{S.focus()}catch{}return new Tl(S)}function c_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="__/auth/handler",h_="emulator/auth/handler",f_=encodeURIComponent("fac");async function bl(t,e,n,i,r,o){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Hn,eventId:r};if(e instanceof mu){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",sp(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))l[w]=S}if(e instanceof Ci){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(l.scopes=w.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const w of Object.keys(u))u[w]===void 0&&delete u[w];const h=await t._getAppCheckToken(),_=h?`#${f_}=${encodeURIComponent(h)}`:"";return`${d_(t)}?${Ai(u).slice(1)}${_}`}function d_({config:t}){return t.emulator?_o(t,h_):`https://${t.authDomain}/${u_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="webStorageSupport";class p_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iu,this._completeRedirectFn=Fm,this._overrideRedirectResult=xm}async _openPopup(e,n,i,r){var o;Tt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await bl(e,n,i,Lr(),r);return l_(e,l,Io())}async _openRedirect(e,n,i,r){await this._originValidation(e);const o=await bl(e,n,i,Lr(),r);return _m(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(Tt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await n_(e),i=new Hm(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pr,{type:pr},r=>{var o;const l=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[pr];l!==void 0&&n(!!l),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Km(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fu()||ou()||yo()}}const g_=p_;var Al="@firebase/auth",Sl="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v_(t){Un(new un("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;z(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:du(t)},_=new jg(i,r,o,h);return qg(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Un(new un("auth-internal",e=>{const n=Vn(e.getProvider("auth").getImmediate());return(i=>new m_(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Al,Sl,__(t)),Vt(Al,Sl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=5*60,w_=$c("authIdTokenMaxAge")||y_;let Cl=null;const E_=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>w_)return;const r=n==null?void 0:n.token;Cl!==r&&(Cl=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function I_(t=Gc()){const e=po(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gg(t,{popupRedirectResolver:g_,persistence:[Sm,pm,Iu]}),i=$c("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const l=E_(o.toString());hm(n,l,()=>l(n.currentUser)),um(n,u=>l(u))}}const r=Vc("auth");return r&&Jg(n,`http://${r}`),n}function T_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Hg({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=ot("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",T_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v_("Browser");var b_="firebase",A_="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(b_,A_,"app");var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pu;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(y,I,b){for(var g=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)g[Ve-2]=arguments[Ve];return d.prototype[I].apply(y,g)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,d,m){m||(m=0);var y=Array(16);if(typeof d=="string")for(var I=0;16>I;++I)y[I]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(I=0;16>I;++I)y[I]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],I=E.g[2];var b=E.g[3],g=d+(b^m&(I^b))+y[0]+3614090360&4294967295;d=m+(g<<7&4294967295|g>>>25),g=b+(I^d&(m^I))+y[1]+3905402710&4294967295,b=d+(g<<12&4294967295|g>>>20),g=I+(m^b&(d^m))+y[2]+606105819&4294967295,I=b+(g<<17&4294967295|g>>>15),g=m+(d^I&(b^d))+y[3]+3250441966&4294967295,m=I+(g<<22&4294967295|g>>>10),g=d+(b^m&(I^b))+y[4]+4118548399&4294967295,d=m+(g<<7&4294967295|g>>>25),g=b+(I^d&(m^I))+y[5]+1200080426&4294967295,b=d+(g<<12&4294967295|g>>>20),g=I+(m^b&(d^m))+y[6]+2821735955&4294967295,I=b+(g<<17&4294967295|g>>>15),g=m+(d^I&(b^d))+y[7]+4249261313&4294967295,m=I+(g<<22&4294967295|g>>>10),g=d+(b^m&(I^b))+y[8]+1770035416&4294967295,d=m+(g<<7&4294967295|g>>>25),g=b+(I^d&(m^I))+y[9]+2336552879&4294967295,b=d+(g<<12&4294967295|g>>>20),g=I+(m^b&(d^m))+y[10]+4294925233&4294967295,I=b+(g<<17&4294967295|g>>>15),g=m+(d^I&(b^d))+y[11]+2304563134&4294967295,m=I+(g<<22&4294967295|g>>>10),g=d+(b^m&(I^b))+y[12]+1804603682&4294967295,d=m+(g<<7&4294967295|g>>>25),g=b+(I^d&(m^I))+y[13]+4254626195&4294967295,b=d+(g<<12&4294967295|g>>>20),g=I+(m^b&(d^m))+y[14]+2792965006&4294967295,I=b+(g<<17&4294967295|g>>>15),g=m+(d^I&(b^d))+y[15]+1236535329&4294967295,m=I+(g<<22&4294967295|g>>>10),g=d+(I^b&(m^I))+y[1]+4129170786&4294967295,d=m+(g<<5&4294967295|g>>>27),g=b+(m^I&(d^m))+y[6]+3225465664&4294967295,b=d+(g<<9&4294967295|g>>>23),g=I+(d^m&(b^d))+y[11]+643717713&4294967295,I=b+(g<<14&4294967295|g>>>18),g=m+(b^d&(I^b))+y[0]+3921069994&4294967295,m=I+(g<<20&4294967295|g>>>12),g=d+(I^b&(m^I))+y[5]+3593408605&4294967295,d=m+(g<<5&4294967295|g>>>27),g=b+(m^I&(d^m))+y[10]+38016083&4294967295,b=d+(g<<9&4294967295|g>>>23),g=I+(d^m&(b^d))+y[15]+3634488961&4294967295,I=b+(g<<14&4294967295|g>>>18),g=m+(b^d&(I^b))+y[4]+3889429448&4294967295,m=I+(g<<20&4294967295|g>>>12),g=d+(I^b&(m^I))+y[9]+568446438&4294967295,d=m+(g<<5&4294967295|g>>>27),g=b+(m^I&(d^m))+y[14]+3275163606&4294967295,b=d+(g<<9&4294967295|g>>>23),g=I+(d^m&(b^d))+y[3]+4107603335&4294967295,I=b+(g<<14&4294967295|g>>>18),g=m+(b^d&(I^b))+y[8]+1163531501&4294967295,m=I+(g<<20&4294967295|g>>>12),g=d+(I^b&(m^I))+y[13]+2850285829&4294967295,d=m+(g<<5&4294967295|g>>>27),g=b+(m^I&(d^m))+y[2]+4243563512&4294967295,b=d+(g<<9&4294967295|g>>>23),g=I+(d^m&(b^d))+y[7]+1735328473&4294967295,I=b+(g<<14&4294967295|g>>>18),g=m+(b^d&(I^b))+y[12]+2368359562&4294967295,m=I+(g<<20&4294967295|g>>>12),g=d+(m^I^b)+y[5]+4294588738&4294967295,d=m+(g<<4&4294967295|g>>>28),g=b+(d^m^I)+y[8]+2272392833&4294967295,b=d+(g<<11&4294967295|g>>>21),g=I+(b^d^m)+y[11]+1839030562&4294967295,I=b+(g<<16&4294967295|g>>>16),g=m+(I^b^d)+y[14]+4259657740&4294967295,m=I+(g<<23&4294967295|g>>>9),g=d+(m^I^b)+y[1]+2763975236&4294967295,d=m+(g<<4&4294967295|g>>>28),g=b+(d^m^I)+y[4]+1272893353&4294967295,b=d+(g<<11&4294967295|g>>>21),g=I+(b^d^m)+y[7]+4139469664&4294967295,I=b+(g<<16&4294967295|g>>>16),g=m+(I^b^d)+y[10]+3200236656&4294967295,m=I+(g<<23&4294967295|g>>>9),g=d+(m^I^b)+y[13]+681279174&4294967295,d=m+(g<<4&4294967295|g>>>28),g=b+(d^m^I)+y[0]+3936430074&4294967295,b=d+(g<<11&4294967295|g>>>21),g=I+(b^d^m)+y[3]+3572445317&4294967295,I=b+(g<<16&4294967295|g>>>16),g=m+(I^b^d)+y[6]+76029189&4294967295,m=I+(g<<23&4294967295|g>>>9),g=d+(m^I^b)+y[9]+3654602809&4294967295,d=m+(g<<4&4294967295|g>>>28),g=b+(d^m^I)+y[12]+3873151461&4294967295,b=d+(g<<11&4294967295|g>>>21),g=I+(b^d^m)+y[15]+530742520&4294967295,I=b+(g<<16&4294967295|g>>>16),g=m+(I^b^d)+y[2]+3299628645&4294967295,m=I+(g<<23&4294967295|g>>>9),g=d+(I^(m|~b))+y[0]+4096336452&4294967295,d=m+(g<<6&4294967295|g>>>26),g=b+(m^(d|~I))+y[7]+1126891415&4294967295,b=d+(g<<10&4294967295|g>>>22),g=I+(d^(b|~m))+y[14]+2878612391&4294967295,I=b+(g<<15&4294967295|g>>>17),g=m+(b^(I|~d))+y[5]+4237533241&4294967295,m=I+(g<<21&4294967295|g>>>11),g=d+(I^(m|~b))+y[12]+1700485571&4294967295,d=m+(g<<6&4294967295|g>>>26),g=b+(m^(d|~I))+y[3]+2399980690&4294967295,b=d+(g<<10&4294967295|g>>>22),g=I+(d^(b|~m))+y[10]+4293915773&4294967295,I=b+(g<<15&4294967295|g>>>17),g=m+(b^(I|~d))+y[1]+2240044497&4294967295,m=I+(g<<21&4294967295|g>>>11),g=d+(I^(m|~b))+y[8]+1873313359&4294967295,d=m+(g<<6&4294967295|g>>>26),g=b+(m^(d|~I))+y[15]+4264355552&4294967295,b=d+(g<<10&4294967295|g>>>22),g=I+(d^(b|~m))+y[6]+2734768916&4294967295,I=b+(g<<15&4294967295|g>>>17),g=m+(b^(I|~d))+y[13]+1309151649&4294967295,m=I+(g<<21&4294967295|g>>>11),g=d+(I^(m|~b))+y[4]+4149444226&4294967295,d=m+(g<<6&4294967295|g>>>26),g=b+(m^(d|~I))+y[11]+3174756917&4294967295,b=d+(g<<10&4294967295|g>>>22),g=I+(d^(b|~m))+y[2]+718787259&4294967295,I=b+(g<<15&4294967295|g>>>17),g=m+(b^(I|~d))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+b&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,y=this.B,I=this.h,b=0;b<d;){if(I==0)for(;b<=m;)r(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<d;)if(y[I++]=E.charCodeAt(b++),I==this.blockSize){r(this,y),I=0;break}}else for(;b<d;)if(y[I++]=E[b++],I==this.blockSize){r(this,y),I=0;break}}this.h=I,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var y=0;32>y;y+=8)E[m++]=this.g[d]>>>y&255;return E};function o(E,d){var m=u;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function l(E,d){this.h=d;for(var m=[],y=!0,I=E.length-1;0<=I;I--){var b=E[I]|0;y&&b==d||(m[I]=b,y=!1)}this.g=m}var u={};function h(E){return-128<=E&&128>E?o(E,function(d){return new l([d|0],0>d?-1:0)}):new l([E|0],0>E?-1:0)}function _(E){if(isNaN(E)||!isFinite(E))return S;if(0>E)return J(_(-E));for(var d=[],m=1,y=0;E>=m;y++)d[y]=E/m|0,m*=4294967296;return new l(d,0)}function w(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return J(w(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=_(Math.pow(d,8)),y=S,I=0;I<E.length;I+=8){var b=Math.min(8,E.length-I),g=parseInt(E.substring(I,I+b),d);8>b?(b=_(Math.pow(d,b)),y=y.j(b).add(_(g))):(y=y.j(m),y=y.add(_(g)))}return y}var S=h(0),R=h(1),H=h(16777216);t=l.prototype,t.m=function(){if(W(this))return-J(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var y=this.i(m);E+=(0<=y?y:4294967296+y)*d,d*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(F(this))return"0";if(W(this))return"-"+J(this).toString(E);for(var d=_(Math.pow(E,6)),m=this,y="";;){var I=B(m,d).g;m=Y(m,I.j(d));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=I,F(m))return b+y;for(;6>b.length;)b="0"+b;y=b+y}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function F(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function W(E){return E.h==-1}t.l=function(E){return E=Y(this,E),W(E)?-1:F(E)?0:1};function J(E){for(var d=E.g.length,m=[],y=0;y<d;y++)m[y]=~E.g[y];return new l(m,~E.h).add(R)}t.abs=function(){return W(this)?J(this):this},t.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],y=0,I=0;I<=d;I++){var b=y+(this.i(I)&65535)+(E.i(I)&65535),g=(b>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);y=g>>>16,b&=65535,g&=65535,m[I]=g<<16|b}return new l(m,m[m.length-1]&-2147483648?-1:0)};function Y(E,d){return E.add(J(d))}t.j=function(E){if(F(this)||F(E))return S;if(W(this))return W(E)?J(this).j(J(E)):J(J(this).j(E));if(W(E))return J(this.j(J(E)));if(0>this.l(H)&&0>E.l(H))return _(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],y=0;y<2*d;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<E.g.length;I++){var b=this.i(y)>>>16,g=this.i(y)&65535,Ve=E.i(I)>>>16,St=E.i(I)&65535;m[2*y+2*I]+=g*St,Q(m,2*y+2*I),m[2*y+2*I+1]+=b*St,Q(m,2*y+2*I+1),m[2*y+2*I+1]+=g*Ve,Q(m,2*y+2*I+1),m[2*y+2*I+2]+=b*Ve,Q(m,2*y+2*I+2)}for(y=0;y<d;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=d;y<2*d;y++)m[y]=0;return new l(m,0)};function Q(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function X(E,d){this.g=E,this.h=d}function B(E,d){if(F(d))throw Error("division by zero");if(F(E))return new X(S,S);if(W(E))return d=B(J(E),d),new X(J(d.g),J(d.h));if(W(d))return d=B(E,J(d)),new X(J(d.g),d.h);if(30<E.g.length){if(W(E)||W(d))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=d;0>=y.l(E);)m=le(m),y=le(y);var I=de(m,1),b=de(y,1);for(y=de(y,2),m=de(m,2);!F(y);){var g=b.add(y);0>=g.l(E)&&(I=I.add(m),b=g),y=de(y,1),m=de(m,1)}return d=Y(E,I.j(d)),new X(I,d)}for(I=S;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),b=_(m),g=b.j(d);W(g)||0<g.l(E);)m-=y,b=_(m),g=b.j(d);F(b)&&(b=R),I=I.add(b),E=Y(E,g)}return new X(I,E)}t.A=function(E){return B(this,E).h},t.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],y=0;y<d;y++)m[y]=this.i(y)&E.i(y);return new l(m,this.h&E.h)},t.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],y=0;y<d;y++)m[y]=this.i(y)|E.i(y);return new l(m,this.h|E.h)},t.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],y=0;y<d;y++)m[y]=this.i(y)^E.i(y);return new l(m,this.h^E.h)};function le(E){for(var d=E.g.length+1,m=[],y=0;y<d;y++)m[y]=E.i(y)<<1|E.i(y-1)>>>31;return new l(m,E.h)}function de(E,d){var m=d>>5;d%=32;for(var y=E.g.length-m,I=[],b=0;b<y;b++)I[b]=0<d?E.i(b+m)>>>d|E.i(b+m+1)<<32-d:E.i(b+m);return new l(I,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=w,Pu=l}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xi=="object"&&Xi];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=n(this);function r(s,a){if(a)e:{var c=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in c))break e;c=c[T]}s=s[s.length-1],f=c[s],a=a(f),a!=f&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,f=!1,T={next:function(){if(!f&&c<s.length){var A=c++;return{value:a(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}r("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function _(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function w(s,a,c){return s.call.apply(s.bind,arguments)}function S(s,a,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,R.apply(null,arguments)}function H(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function F(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,T,A){for(var x=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)x[ce-2]=arguments[ce];return a.prototype[T].apply(f,x)}}function W(s){const a=s.length;if(0<a){const c=Array(a);for(let f=0;f<a;f++)c[f]=s[f];return c}return[]}function J(s,a){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const T=s.length||0,A=f.length||0;s.length=T+A;for(let x=0;x<A;x++)s[T+x]=f[x]}else s.push(f)}}class Y{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Q(s){return/^[\s\xa0]*$/.test(s)}function X(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function B(s){return B[" "](s),s}B[" "]=function(){};var le=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function de(s,a,c){for(const f in s)a.call(c,s[f],f,s)}function E(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function d(s){const a={};for(const c in s)a[c]=s[c];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(c in f)s[c]=f[c];for(let A=0;A<m.length;A++)c=m[A],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function I(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function b(s){u.setTimeout(()=>{throw s},0)}function g(){var s=Je;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ve{constructor(){this.h=this.g=null}add(a,c){const f=St.get();f.set(a,c),this.h?this.h.next=f:this.g=f,this.h=f}}var St=new Y(()=>new Ee,s=>s.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ee=!1,Je=new Ve,Jt=()=>{const s=u.Promise.resolve(void 0);ae=()=>{s.then(ct)}};var ct=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){b(c)}var a=St;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ee=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Ds=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Xt(s,a){if(ve.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(le){e:{try{B(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Yt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Xt.aa.h.call(this)}}F(Xt,ve);var Yt={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),$n=0;function Oi(s,a,c,f,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!f,this.ha=T,this.key=++$n,this.da=this.fa=!1}function tt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Qt(s){this.src=s,this.g={},this.h=0}Qt.prototype.add=function(s,a,c,f,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var x=p(s,a,f,T);return-1<x?(a=s[x],c||(a.fa=!1)):(a=new Oi(a,this.src,A,!!f,T),a.fa=c,s.push(a)),a};function gn(s,a){var c=a.type;if(c in s.g){var f=s.g[c],T=Array.prototype.indexOf.call(f,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(tt(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function p(s,a,c,f){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==f)return T}return-1}var v="closure_lm_"+(1e6*Math.random()|0),C={};function k(s,a,c,f,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)k(s,a[A],c,f,T);return null}return c=V(c),s&&s[ut]?s.K(a,c,_(f)?!!f.capture:!!f,T):P(s,a,c,!1,f,T)}function P(s,a,c,f,T,A){if(!a)throw Error("Invalid event type");var x=_(T)?!!T.capture:!!T,ce=$(s);if(ce||(s[v]=ce=new Qt(s)),c=ce.add(a,c,f,x,A),c.proxy)return c;if(f=O(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Ds||(T=x),T===void 0&&(T=!1),s.addEventListener(a.toString(),f,T);else if(s.attachEvent)s.attachEvent(N(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function O(){function s(c){return a.call(s.src,s.listener,c)}const a=D;return s}function M(s,a,c,f,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)M(s,a[A],c,f,T);else f=_(f)?!!f.capture:!!f,c=V(c),s&&s[ut]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],c=p(A,c,f,T),-1<c&&(tt(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=$(s))&&(a=s.g[a.toString()],s=-1,a&&(s=p(a,c,f,T)),(c=-1<s?a[s]:null)&&L(c))}function L(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[ut])gn(a.i,s);else{var c=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(c,f,s.capture):a.detachEvent?a.detachEvent(N(c),f):a.addListener&&a.removeListener&&a.removeListener(f),(c=$(a))?(gn(c,s),c.h==0&&(c.src=null,a[v]=null)):tt(s)}}}function N(s){return s in C?C[s]:C[s]="on"+s}function D(s,a){if(s.da)s=!0;else{a=new Xt(a,this);var c=s.listener,f=s.ha||s.src;s.fa&&L(s),s=c.call(f,a)}return s}function $(s){return s=s[v],s instanceof Qt?s:null}var U="__closure_events_fn_"+(1e9*Math.random()>>>0);function V(s){return typeof s=="function"?s:(s[U]||(s[U]=function(a){return s.handleEvent(a)}),s[U])}function j(){_e.call(this),this.i=new Qt(this),this.M=this,this.F=null}F(j,_e),j.prototype[ut]=!0,j.prototype.removeEventListener=function(s,a,c,f){M(this,s,a,c,f)};function K(s,a){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new ve(a,s);else if(a instanceof ve)a.target=a.target||s;else{var T=a;a=new ve(f,s),y(a,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var x=a.g=c[A];T=ie(x,f,!0,a)&&T}if(x=a.g=s,T=ie(x,f,!0,a)&&T,T=ie(x,f,!1,a)&&T,c)for(A=0;A<c.length;A++)x=a.g=c[A],T=ie(x,f,!1,a)&&T}j.prototype.N=function(){if(j.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],f=0;f<c.length;f++)tt(c[f]);delete s.g[a],s.h--}}this.F=null},j.prototype.K=function(s,a,c,f){return this.i.add(String(s),a,!1,c,f)},j.prototype.L=function(s,a,c,f){return this.i.add(String(s),a,!0,c,f)};function ie(s,a,c,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var x=a[A];if(x&&!x.da&&x.capture==c){var ce=x.listener,Te=x.ha||x.src;x.fa&&gn(s.i,x),T=ce.call(Te,f)!==!1&&T}}return T&&!f.defaultPrevented}function te(s,a,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function be(s){s.g=te(()=>{s.g=null,s.i&&(s.i=!1,be(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class we extends _e{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:be(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(s){_e.call(this),this.h=s,this.g={}}F(Ie,_e);var Ae=[];function Ct(s){de(s.g,function(a,c){this.g.hasOwnProperty(c)&&L(a)},s),s.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),Ct(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mn=u.JSON.stringify,Le=u.JSON.parse,ze=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function _n(){}_n.prototype.h=null;function Ro(s){return s.h||(s.h=s.i())}function xu(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ns(){ve.call(this,"d")}F(Ns,ve);function Ls(){ve.call(this,"c")}F(Ls,ve);var vn={},Po=null;function xs(){return Po=Po||new j}vn.La="serverreachability";function Oo(s){ve.call(this,vn.La,s)}F(Oo,ve);function Kn(s){const a=xs();K(a,new Oo(a))}vn.STAT_EVENT="statevent";function ko(s,a){ve.call(this,vn.STAT_EVENT,s),this.stat=a}F(ko,ve);function xe(s){const a=xs();K(a,new ko(a,s))}vn.Ma="timingevent";function Do(s,a){ve.call(this,vn.Ma,s),this.size=a}F(Do,ve);function zn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function Mu(s,a,c,f,T,A){s.info(function(){if(s.g)if(A)for(var x="",ce=A.split("&"),Te=0;Te<ce.length;Te++){var ne=ce[Te].split("=");if(1<ne.length){var Se=ne[0];ne=ne[1];var Ce=Se.split("_");x=2<=Ce.length&&Ce[1]=="type"?x+(Se+"="+ne+"&"):x+(Se+"=redacted&")}}else x=null;else x=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+a+`
`+c+`
`+x})}function Uu(s,a,c,f,T,A,x){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+x})}function yn(s,a,c,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ju(s,c)+(f?" "+f:"")})}function Fu(s,a){s.info(function(){return"TIMEOUT: "+a})}Gn.prototype.info=function(){};function ju(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var x=1;x<T.length;x++)T[x]=""}}}}return mn(c)}catch{return a}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Us;function ki(){}F(ki,_n),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Us=new ki;function Rt(s,a,c,f){this.j=s,this.i=a,this.l=c,this.R=f||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new No}function No(){this.i=null,this.g="",this.h=!1}var Lo={},Fs={};function js(s,a,c){s.L=1,s.v=xi(ht(a)),s.m=c,s.P=!0,xo(s,null)}function xo(s,a){s.F=Date.now(),Di(s),s.A=ht(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Jo(c.i,"t",f),s.C=0,c=s.j.J,s.h=new No,s.g=da(s.j,c?a:null,!s.m),0<s.O&&(s.M=new we(R(s.Y,s,s.g),s.O)),a=s.U,c=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ae[0]=T.toString()),T=Ae);for(var A=0;A<T.length;A++){var x=k(c,T[A],f||a.handleEvent,!1,a.h||a);if(!x)break;a.g[x.key]=x}a=s.H?d(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Kn(),Mu(s.i,s.u,s.A,s.l,s.R,s.m)}Rt.prototype.ca=function(s){s=s.target;const a=this.M;a&&ft(s)==3?a.j():this.Y(s)},Rt.prototype.Y=function(s){try{if(s==this.g)e:{const Ce=ft(this.g);var a=this.g.Ba();const In=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||Ce!=4||a==7||(a==8||0>=In?Kn(3):Kn(2)),Hs(this);var c=this.g.Z();this.X=c;t:if(Mo(this)){var f=na(this.g);s="";var T=f.length,A=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),qn(this);var x="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(A&&a==T-1)});f.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,Uu(this.i,this.u,this.A,this.l,this.R,Ce,c),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Te=this.g;if((ce=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(ce)){var ne=ce;break t}}ne=null}if(c=ne)yn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vs(this,c);else{this.o=!1,this.s=3,xe(12),Zt(this),qn(this);break e}}if(this.P){c=!0;let Xe;for(;!this.J&&this.C<x.length;)if(Xe=Vu(this,x),Xe==Fs){Ce==4&&(this.s=4,xe(14),c=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==Lo){this.s=4,xe(15),yn(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else yn(this.i,this.l,Xe,null),Vs(this,Xe);if(Mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||x.length!=0||this.h.h||(this.s=1,xe(16),c=!1),this.o=this.o&&c,!c)yn(this.i,this.l,x,"[Invalid Chunked Response]"),Zt(this),qn(this);else if(0<x.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Gs(Se),Se.M=!0,xe(11))}}else yn(this.i,this.l,x,null),Vs(this,x);Ce==4&&Zt(this),this.o&&!this.J&&(Ce==4?ca(this.j,this):(this.o=!1,Di(this)))}else sh(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),Zt(this),qn(this)}}}catch{}finally{}};function Mo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Vu(s,a){var c=s.C,f=a.indexOf(`
`,c);return f==-1?Fs:(c=Number(a.substring(c,f)),isNaN(c)?Lo:(f+=1,f+c>a.length?Fs:(a=a.slice(f,f+c),s.C=f+c,a)))}Rt.prototype.cancel=function(){this.J=!0,Zt(this)};function Di(s){s.S=Date.now()+s.I,Uo(s,s.I)}function Uo(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=zn(R(s.ba,s),a)}function Hs(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Rt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Fu(this.i,this.A),this.L!=2&&(Kn(),xe(17)),Zt(this),this.s=2,qn(this)):Uo(this,this.S-s)};function qn(s){s.j.G==0||s.J||ca(s.j,s)}function Zt(s){Hs(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ct(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Vs(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Bs(c.h,s))){if(!s.K&&Bs(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Vi(c),ji(c);else break e;zs(c),xe(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=zn(R(c.Za,c),6e3));if(1>=Ho(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else tn(c,11)}else if((s.K||c.g==s)&&Vi(c),!Q(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let ne=T[a];if(c.T=ne[0],ne=ne[1],c.G==2)if(ne[0]=="c"){c.K=ne[1],c.ia=ne[2];const Se=ne[3];Se!=null&&(c.la=Se,c.j.info("VER="+c.la));const Ce=ne[4];Ce!=null&&(c.Aa=Ce,c.j.info("SVER="+c.Aa));const In=ne[5];In!=null&&typeof In=="number"&&0<In&&(f=1.5*In,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Xe=s.g;if(Xe){const Bi=Xe.g?Xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var A=f.h;A.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&($s(A,A.h),A.h=null))}if(f.D){const qs=Xe.g?Xe.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(f.ya=qs,fe(f.I,f.D,qs))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var x=s;if(f.qa=fa(f,f.J?f.ia:null,f.W),x.K){Vo(f.h,x);var ce=x,Te=f.L;Te&&(ce.I=Te),ce.B&&(Hs(ce),Di(ce)),f.g=x}else aa(f);0<c.i.length&&Hi(c)}else ne[0]!="stop"&&ne[0]!="close"||tn(c,7);else c.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?tn(c,7):Ks(c):ne[0]!="noop"&&c.l&&c.l.ta(ne),c.v=0)}}Kn(4)}catch{}}var Bu=class{constructor(s,a){this.g=s,this.map=a}};function Fo(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ho(s){return s.h?1:s.g?s.g.size:0}function Bs(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function $s(s,a){s.g?s.g.add(a):s.h=a}function Vo(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Fo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Bo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return W(s.i)}function $u(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,f=0;f<c;f++)a.push(s[f]);return a}a=[],c=0;for(f in s)a[c++]=s[f];return a}function Wu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const f in s)a[c++]=f;return a}}}function $o(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Wu(s),f=$u(s),T=f.length,A=0;A<T;A++)a.call(void 0,f[A],c&&c[A],s)}var Wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),T=null;if(0<=f){var A=s[c].substring(0,f);T=s[c].substring(f+1)}else A=s[c];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function en(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof en){this.h=s.h,Ni(this,s.j),this.o=s.o,this.g=s.g,Li(this,s.s),this.l=s.l;var a=s.i,c=new Yn;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Ko(this,c),this.m=s.m}else s&&(a=String(s).match(Wo))?(this.h=!1,Ni(this,a[1]||"",!0),this.o=Jn(a[2]||""),this.g=Jn(a[3]||"",!0),Li(this,a[4]),this.l=Jn(a[5]||"",!0),Ko(this,a[6]||"",!0),this.m=Jn(a[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}en.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Xn(a,zo,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Xn(a,zo,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Xn(c,c.charAt(0)=="/"?qu:Gu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Xn(c,Xu)),s.join("")};function ht(s){return new en(s)}function Ni(s,a,c){s.j=c?Jn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Li(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ko(s,a,c){a instanceof Yn?(s.i=a,Yu(s.i,s.h)):(c||(a=Xn(a,Ju)),s.i=new Yn(a,s.h))}function fe(s,a,c){s.i.set(a,c)}function xi(s){return fe(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Jn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Xn(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,zu),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function zu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var zo=/[#\/\?@]/g,Gu=/[#\?:]/g,qu=/[#\?]/g,Ju=/[#\?@]/g,Xu=/#/g;function Yn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Pt(s){s.g||(s.g=new Map,s.h=0,s.i&&Ku(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=Yn.prototype,t.add=function(s,a){Pt(this),this.i=null,s=wn(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Go(s,a){Pt(s),a=wn(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function qo(s,a){return Pt(s),a=wn(s,a),s.g.has(a)}t.forEach=function(s,a){Pt(this),this.g.forEach(function(c,f){c.forEach(function(T){s.call(a,T,f,this)},this)},this)},t.na=function(){Pt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let f=0;f<a.length;f++){const T=s[f];for(let A=0;A<T.length;A++)c.push(a[f])}return c},t.V=function(s){Pt(this);let a=[];if(typeof s=="string")qo(this,s)&&(a=a.concat(this.g.get(wn(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},t.set=function(s,a){return Pt(this),this.i=null,s=wn(this,s),qo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},t.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Jo(s,a,c){Go(s,a),0<c.length&&(s.i=null,s.g.set(wn(s,a),W(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var f=a[c];const A=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var T=A;x[f]!==""&&(T+="="+encodeURIComponent(String(x[f]))),s.push(T)}}return this.i=s.join("&")};function wn(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Yu(s,a){a&&!s.j&&(Pt(s),s.i=null,s.g.forEach(function(c,f){var T=f.toLowerCase();f!=T&&(Go(this,f),Jo(this,T,c))},s)),s.j=a}function Qu(s,a){const c=new Gn;if(u.Image){const f=new Image;f.onload=H(Ot,c,"TestLoadImage: loaded",!0,a,f),f.onerror=H(Ot,c,"TestLoadImage: error",!1,a,f),f.onabort=H(Ot,c,"TestLoadImage: abort",!1,a,f),f.ontimeout=H(Ot,c,"TestLoadImage: timeout",!1,a,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function Zu(s,a){const c=new Gn,f=new AbortController,T=setTimeout(()=>{f.abort(),Ot(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?Ot(c,"TestPingServer: ok",!0,a):Ot(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ot(c,"TestPingServer: error",!1,a)})}function Ot(s,a,c,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(c)}catch{}}function eh(){this.g=new ze}function th(s,a,c){const f=c||"";try{$o(s,function(T,A){let x=T;_(T)&&(x=mn(T)),a.push(f+A+"="+encodeURIComponent(x))})}catch(T){throw a.push(f+"type="+encodeURIComponent("_badmap")),T}}function Mi(s){this.l=s.Ub||null,this.j=s.eb||!1}F(Mi,_n),Mi.prototype.g=function(){return new Ui(this.l,this.j)},Mi.prototype.i=function(s){return function(){return s}}({});function Ui(s,a){j.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Ui,j),t=Ui.prototype,t.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Zn(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Qn(this):Zn(this),this.readyState==3&&Xo(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,Qn(this))},t.Qa=function(s){this.g&&(this.response=s,Qn(this))},t.ga=function(){this.g&&Qn(this)};function Qn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Zn(s)}t.setRequestHeader=function(s,a){this.u.append(s,a)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Zn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Yo(s){let a="";return de(s,function(c,f){a+=f,a+=":",a+=c,a+=`\r
`}),a}function Ws(s,a,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Yo(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):fe(s,a,c))}function ge(s){j.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(ge,j);var nh=/^https?$/i,ih=["POST","PUT"];t=ge.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,a,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Us.g(),this.v=this.o?Ro(this.o):Ro(Us),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){Qo(this,A);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)c.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())c.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ih,a,void 0))||f||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,x]of c)this.g.setRequestHeader(A,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ta(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Qo(this,A)}};function Qo(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Zo(s),Fi(s)}function Zo(s){s.A||(s.A=!0,K(s,"complete"),K(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,K(this,"complete"),K(this,"abort"),Fi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},t.bb=function(){ea(this)};function ea(s){if(s.h&&typeof l<"u"&&(!s.v[1]||ft(s)!=4||s.Z()!=2)){if(s.u&&ft(s)==4)te(s.Ea,0,s);else if(K(s,"readystatechange"),ft(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var f;if(f=x===0){var T=String(s.D).match(Wo)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),f=!nh.test(T?T.toLowerCase():"")}c=f}if(c)K(s,"complete"),K(s,"success");else{s.m=6;try{var A=2<ft(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Zo(s)}}finally{Fi(s)}}}}function Fi(s,a){if(s.g){ta(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||K(s,"ready");try{c.onreadystatechange=f}catch{}}}function ta(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function ft(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Le(a)}};function na(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function sh(s){const a={};s=(s.g&&2<=ft(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(Q(s[f]))continue;var c=I(s[f]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}E(a,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ei(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function ia(s){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ei("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ei("baseRetryDelayMs",5e3,s),this.cb=ei("retryDelaySeedMs",1e4,s),this.Wa=ei("forwardChannelMaxRetries",2,s),this.wa=ei("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Fo(s&&s.concurrentRequestLimit),this.Da=new eh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ia.prototype,t.la=8,t.G=1,t.connect=function(s,a,c,f){xe(0),this.W=s,this.H=a||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=fa(this,null,this.W),Hi(this)};function Ks(s){if(sa(s),s.G==3){var a=s.U++,c=ht(s.I);if(fe(c,"SID",s.K),fe(c,"RID",a),fe(c,"TYPE","terminate"),ti(s,c),a=new Rt(s,s.j,a),a.L=2,a.v=xi(ht(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=da(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Di(a)}ha(s)}function ji(s){s.g&&(Gs(s),s.g.cancel(),s.g=null)}function sa(s){ji(s),s.u&&(u.clearTimeout(s.u),s.u=null),Vi(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Hi(s){if(!jo(s.h)&&!s.s){s.s=!0;var a=s.Ga;ae||Jt(),ee||(ae(),ee=!0),Je.add(a,s),s.B=0}}function rh(s,a){return Ho(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=zn(R(s.Ga,s,a),ua(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Rt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=d(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=oa(this,T,a),c=ht(this.I),fe(c,"RID",s),fe(c,"CVER",22),this.D&&fe(c,"X-HTTP-Session-Id",this.D),ti(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(Yo(A)))+"&"+a:this.m&&Ws(c,this.m,A)),$s(this.h,T),this.Ua&&fe(c,"TYPE","init"),this.P?(fe(c,"$req",a),fe(c,"SID","null"),T.T=!0,js(T,c,null)):js(T,c,a),this.G=2}}else this.G==3&&(s?ra(this,s):this.i.length==0||jo(this.h)||ra(this))};function ra(s,a){var c;a?c=a.l:c=s.U++;const f=ht(s.I);fe(f,"SID",s.K),fe(f,"RID",c),fe(f,"AID",s.T),ti(s,f),s.m&&s.o&&Ws(f,s.m,s.o),c=new Rt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=oa(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),$s(s.h,c),js(c,f,a)}function ti(s,a){s.H&&de(s.H,function(c,f){fe(a,f,c)}),s.l&&$o({},function(c,f){fe(a,f,c)})}function oa(s,a,c){c=Math.min(s.i.length,c);var f=s.l?R(s.l.Na,s.l,s):null;e:{var T=s.i;let A=-1;for(;;){const x=["count="+c];A==-1?0<c?(A=T[0].g,x.push("ofs="+A)):A=0:x.push("ofs="+A);let ce=!0;for(let Te=0;Te<c;Te++){let ne=T[Te].g;const Se=T[Te].map;if(ne-=A,0>ne)A=Math.max(0,T[Te].g-100),ce=!1;else try{th(Se,x,"req"+ne+"_")}catch{f&&f(Se)}}if(ce){f=x.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,f}function aa(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;ae||Jt(),ee||(ae(),ee=!0),Je.add(a,s),s.v=0}}function zs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=zn(R(s.Fa,s),ua(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,la(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=zn(R(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),ji(this),la(this))};function Gs(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function la(s){s.g=new Rt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=ht(s.qa);fe(a,"RID","rpc"),fe(a,"SID",s.K),fe(a,"AID",s.T),fe(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&fe(a,"TO",s.ja),fe(a,"TYPE","xmlhttp"),ti(s,a),s.m&&s.o&&Ws(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=xi(ht(a)),c.m=null,c.P=!0,xo(c,s)}t.Za=function(){this.C!=null&&(this.C=null,ji(this),zs(this),xe(19))};function Vi(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function ca(s,a){var c=null;if(s.g==a){Vi(s),Gs(s),s.g=null;var f=2}else if(Bs(s.h,a))c=a.D,Vo(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;f=xs(),K(f,new Do(f,c)),Hi(s)}else aa(s);else if(T=a.s,T==3||T==0&&0<a.X||!(f==1&&rh(s,a)||f==2&&zs(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:tn(s,5);break;case 4:tn(s,10);break;case 3:tn(s,6);break;default:tn(s,2)}}}function ua(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function tn(s,a){if(s.j.info("Error code "+a),a==2){var c=R(s.fb,s),f=s.Xa;const T=!f;f=new en(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ni(f,"https"),xi(f),T?Qu(f.toString(),c):Zu(f.toString(),c)}else xe(2);s.G=0,s.l&&s.l.sa(a),ha(s),sa(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function ha(s){if(s.G=0,s.ka=[],s.l){const a=Bo(s.h);(a.length!=0||s.i.length!=0)&&(J(s.ka,a),J(s.ka,s.i),s.h.i.length=0,W(s.i),s.i.length=0),s.l.ra()}}function fa(s,a,c){var f=c instanceof en?ht(c):new en(c);if(f.g!="")a&&(f.g=a+"."+f.g),Li(f,f.s);else{var T=u.location;f=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new en(null);f&&Ni(A,f),a&&(A.g=a),T&&Li(A,T),c&&(A.l=c),f=A}return c=s.D,a=s.ya,c&&a&&fe(f,c,a),fe(f,"VER",s.la),ti(s,f),f}function da(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ge(new Mi({eb:c})):new ge(s.pa),a.Ha(s.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}t=pa.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ge(s,a){j.call(this),this.g=new ia(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!Q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new En(this)}F(Ge,j),Ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){Ks(this.g)},Ge.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=mn(s),s=c);a.i.push(new Bu(a.Ya++,s)),a.G==3&&Hi(a)},Ge.prototype.N=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,Ge.aa.N.call(this)};function ga(s){Ns.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}F(ga,Ns);function ma(){Ls.call(this),this.status=1}F(ma,Ls);function En(s){this.g=s}F(En,pa),En.prototype.ua=function(){K(this.g,"a")},En.prototype.ta=function(s){K(this.g,new ga(s))},En.prototype.sa=function(s){K(this.g,new ma)},En.prototype.ra=function(){K(this.g,"b")},Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,Hu.COMPLETE="complete",xu.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",j.prototype.listen=j.prototype.K,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});const Pl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new ho("@firebase/firestore");function Ke(t,...e){if(jn.logLevel<=re.DEBUG){const n=e.map(Ao);jn.debug(`Firestore (${Pi}): ${t}`,...n)}}function bo(t,...e){if(jn.logLevel<=re.ERROR){const n=e.map(Ao);jn.error(`Firestore (${Pi}): ${t}`,...n)}}function S_(t,...e){if(jn.logLevel<=re.WARN){const n=e.map(Ao);jn.warn(`Firestore (${Pi}): ${t}`,...n)}}function Ao(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t="Unexpected state"){const e=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+t;throw bo(e),new Error(e)}function Ur(t,e){t||So()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Oe extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class R_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class P_{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new xn,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{Ke("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(Ke("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new xn)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Ke("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ur(typeof i.accessToken=="string"),new Ou(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ur(e===null||typeof e=="string"),new Re(e)}}class O_{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k_{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new O_(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=o=>{o.error!=null&&Ke("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,Ke("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{Ke("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):Ke("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ur(typeof n.token=="string"),this.R=n.token,new D_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=L_(40);for(let o=0;o<r.length;++o)i.length<20&&r[o]<n&&(i+=e.charAt(r[o]%e.length))}return i}}function ku(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,i,r,o,l,u,h,_){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=_}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ol,Z;(Z=Ol||(Ol={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Pu([4294967295,4294967295],0);function gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,i=1e3,r=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=i,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&Ke("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,o){const l=Date.now()+i,u=new Co(e,n,l,r,o);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Oe(Pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F_(t,e){if(bo("AsyncQueue",`${e}: ${t}`),ku(t))return new Oe(Pe.UNAVAILABLE,`${e}: ${t}`);throw t}var kl,Dl;(Dl=kl||(kl={})).ea="default",Dl.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=x_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{Ke("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(Ke("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Oe(Pe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=F_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map;function H_(t,e,n,i){if(e===!0&&i===!0)throw new Oe(Pe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function V_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":So()}function B_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Oe(Pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=V_(t);throw new Oe(Pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Oe(Pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Oe(Pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Du((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Oe(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nu{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ll({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Oe(Pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Oe(Pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ll(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new C_;switch(i.type){case"firstParty":return new k_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Oe(Pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Nl.get(n);i&&(Ke("ComponentProvider","Removing Datastore"),Nl.delete(n),i.terminate())}(this),Promise.resolve()}}function $_(t,e,n,i={}){var r;const o=(t=B_(t,Nu))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&S_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let u,h;if(typeof i.mockUserToken=="string")u=i.mockUserToken,h=Re.MOCK_USER;else{u=Gd(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new Oe(Pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Re(_)}t._authCredentials=new R_(new Ou(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new U_(this,"async_queue_retry"),this.Eu=()=>{const n=gr();n&&Ke("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=gr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=gr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new xn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ku(e))throw e;Ke("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(i=>{this.hu=i,this.Pu=!1;const r=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(i);throw bo("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Pu=!1,i))));return this.au=n,n}enqueueAfterDelay(e,n,i){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const r=Co.createAndSchedule(this,e,n,i,o=>this.Vu(o));return this.lu.push(r),r}du(){this.hu&&So()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class K_ extends Nu{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new W_}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G_(this),this._firestoreClient.terminate()}}function z_(t,e){const n=typeof t=="object"?t:Gc(),i=typeof t=="string"?t:"(default)",r=po(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=Kd("firestore");o&&$_(r,...o)}return r}function G_(t){var e,n,i;const r=t._freezeSettings(),o=function(u,h,_,w){return new M_(u,h,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Du(w.experimentalLongPollingOptions),w.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new j_(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){Pi=r})(Hn),Un(new un("firestore",(i,{instanceIdentifier:r,options:o})=>{const l=i.getProvider("app").getImmediate(),u=new K_(new P_(i.getProvider("auth-internal")),new N_(i.getProvider("app-check-internal")),function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new Oe(Pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(_.options.projectId,w)}(l,r),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Vt(Pl,"4.7.2",e),Vt(Pl,"4.7.2","esm2017")})();const q_={apiKey:"AIzaSyBQ78yrj5W735OKNntiXat8WeynIqLSZ1s",authDomain:"moqi-e4690.firebaseapp.com",projectId:"moqi-e4690",storageBucket:"moqi-e4690.appspot.com",messagingSenderId:"172671172918",appId:"1:172671172918:web:ab56dfaf029436a9f0b397"},Lu=zc(q_);z_(Lu);const J_=I_(Lu),X_={data(){return{email:"",password:""}},methods:{async login(){try{await cm(J_,this.email,this.password),alert("Login successful!")}catch(t){alert("Login failed: "+t.message)}}}};function Y_(t,e,n,i,r,o){return oo(),ao("div",null,[e[3]||(e[3]=me("h2",null,"Login",-1)),Aa(me("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),placeholder:"Email"},null,512),[[Xa,r.email]]),Aa(me("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>r.password=l),type:"password",placeholder:"Password"},null,512),[[Xa,r.password]]),me("button",{onClick:e[2]||(e[2]=(...l)=>o.login&&o.login(...l))},"Login")])}const Q_=co(X_,[["render",Y_]]),Z_={__name:"App",setup(t){return(e,n)=>(oo(),ao(Ye,null,[n[0]||(n[0]=me("div",null,[me("a",{href:"https://vitejs.dev",target:"_blank"},[me("img",{src:Nd,class:"logo",alt:"Vite logo"})]),me("a",{href:"https://vuejs.org/",target:"_blank"},[me("img",{src:Ld,class:"logo vue",alt:"Vue logo"})])],-1)),Et(Ud,{msg:"Vite + Vue"}),Et(Q_)],64))}},ev=co(Z_,[["__scopeId","data-v-ba5ce790"]]);Od(ev).mount("#app");
