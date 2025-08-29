(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Vd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fc={exports:{}},jr={},pc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),Bd=Symbol.for("react.portal"),qd=Symbol.for("react.fragment"),zd=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Gd=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.memo"),Jd=Symbol.for("react.lazy"),$o=Symbol.iterator;function Xd(t){return t===null||typeof t!="object"?null:(t=$o&&t[$o]||t["@@iterator"],typeof t=="function"?t:null)}var gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mc=Object.assign,yc={};function Cn(t,e,n){this.props=t,this.context=e,this.refs=yc,this.updater=n||gc}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vc(){}vc.prototype=Cn.prototype;function va(t,e,n){this.props=t,this.context=e,this.refs=yc,this.updater=n||gc}var xa=va.prototype=new vc;xa.constructor=va;mc(xa,Cn.prototype);xa.isPureReactComponent=!0;var Vo=Array.isArray,xc=Object.prototype.hasOwnProperty,wa={current:null},wc={key:!0,ref:!0,__self:!0,__source:!0};function bc(t,e,n){var s,r={},i=null,a=null;if(e!=null)for(s in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)xc.call(e,s)&&!wc.hasOwnProperty(s)&&(r[s]=e[s]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(s in l=t.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:hs,type:t,key:i,ref:a,props:r,_owner:wa.current}}function Zd(t,e){return{$$typeof:hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ba(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs}function ef(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bo=/\/+/g;function mi(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ef(""+t.key):e.toString(36)}function Zs(t,e,n,s,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case hs:case Bd:a=!0}}if(a)return a=t,r=r(a),t=s===""?"."+mi(a,0):s,Vo(r)?(n="",t!=null&&(n=t.replace(Bo,"$&/")+"/"),Zs(r,e,n,"",function(u){return u})):r!=null&&(ba(r)&&(r=Zd(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Bo,"$&/")+"/")+t)),e.push(r)),1;if(a=0,s=s===""?".":s+":",Vo(t))for(var l=0;l<t.length;l++){i=t[l];var c=s+mi(i,l);a+=Zs(i,e,n,c,r)}else if(c=Xd(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=s+mi(i,l++),a+=Zs(i,e,n,c,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Us(t,e,n){if(t==null)return t;var s=[],r=0;return Zs(t,s,"","",function(i){return e.call(n,i,r++)}),s}function tf(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Le={current:null},er={transition:null},nf={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:er,ReactCurrentOwner:wa};function kc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!ba(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Component=Cn;O.Fragment=qd;O.Profiler=Hd;O.PureComponent=va;O.StrictMode=zd;O.Suspense=Qd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf;O.act=kc;O.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var s=mc({},t.props),r=t.key,i=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=wa.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)xc.call(e,c)&&!wc.hasOwnProperty(c)&&(s[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:hs,type:t.type,key:r,ref:i,props:s,_owner:a}};O.createContext=function(t){return t={$$typeof:Gd,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kd,_context:t},t.Consumer=t};O.createElement=bc;O.createFactory=function(t){var e=bc.bind(null,t);return e.type=t,e};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:Wd,render:t}};O.isValidElement=ba;O.lazy=function(t){return{$$typeof:Jd,_payload:{_status:-1,_result:t},_init:tf}};O.memo=function(t,e){return{$$typeof:Yd,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=er.transition;er.transition={};try{t()}finally{er.transition=e}};O.unstable_act=kc;O.useCallback=function(t,e){return Le.current.useCallback(t,e)};O.useContext=function(t){return Le.current.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t){return Le.current.useDeferredValue(t)};O.useEffect=function(t,e){return Le.current.useEffect(t,e)};O.useId=function(){return Le.current.useId()};O.useImperativeHandle=function(t,e,n){return Le.current.useImperativeHandle(t,e,n)};O.useInsertionEffect=function(t,e){return Le.current.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return Le.current.useLayoutEffect(t,e)};O.useMemo=function(t,e){return Le.current.useMemo(t,e)};O.useReducer=function(t,e,n){return Le.current.useReducer(t,e,n)};O.useRef=function(t){return Le.current.useRef(t)};O.useState=function(t){return Le.current.useState(t)};O.useSyncExternalStore=function(t,e,n){return Le.current.useSyncExternalStore(t,e,n)};O.useTransition=function(){return Le.current.useTransition()};O.version="18.3.1";pc.exports=O;var y=pc.exports;const Ec=Vd(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=y,rf=Symbol.for("react.element"),af=Symbol.for("react.fragment"),of=Object.prototype.hasOwnProperty,lf=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cf={key:!0,ref:!0,__self:!0,__source:!0};function Tc(t,e,n){var s,r={},i=null,a=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(s in e)of.call(e,s)&&!cf.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:rf,type:t,key:i,ref:a,props:r,_owner:lf.current}}jr.Fragment=af;jr.jsx=Tc;jr.jsxs=Tc;fc.exports=jr;var o=fc.exports;/**
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
 *//**
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
 */const Nc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},uf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,l=a?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,p=u&63;c||(p=64,a||(f=64)),s.push(n[h],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||d==null)throw new hf;const f=i<<2|l>>4;if(s.push(f),u!==64){const p=l<<4&240|u>>2;if(s.push(p),d!==64){const g=u<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const df=function(t){const e=Nc(t);return _c.encodeByteArray(e,!0)},ur=function(t){return df(t).replace(/\./g,"")},Cc=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pf=()=>ff().__FIREBASE_DEFAULTS__,gf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cc(t[1]);return e&&JSON.parse(e)},ka=()=>{try{return pf()||gf()||mf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ic=t=>{var e,n;return(n=(e=ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yf=t=>{const e=Ic(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sc=()=>{var t;return(t=ka())===null||t===void 0?void 0:t.config},Ac=t=>{var e;return(e=ka())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function xf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ur(JSON.stringify(n)),ur(JSON.stringify(a)),l].join(".")}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function bf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ef(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tf(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _f="FirebaseError";class yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_f,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Cf(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new yt(r,l,s)}}function Cf(t,e){return t.replace(If,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const If=/\{\$([^}]+)}/g;function Sf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(qo(i)&&qo(a)){if(!hr(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qo(t){return t!==null&&typeof t=="object"}/**
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
 */function fs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Af(t,e){const n=new jf(t,e);return n.subscribe.bind(n)}class jf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Df(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=yi),r.error===void 0&&(r.error=yi),r.complete===void 0&&(r.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Df(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yi(){}/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}class Wt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class Rf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mf(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pf(t){return t===$t?void 0:t}function Mf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Of={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Ff=z.INFO,Uf={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},$f=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Uf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ea{constructor(e){this.name=e,this._logLevel=Ff,this._logHandler=$f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Vf=(t,e)=>e.some(n=>t instanceof n);let zo,Ho;function Bf(){return zo||(zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qf(){return Ho||(Ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jc=new WeakMap,Fi=new WeakMap,Dc=new WeakMap,vi=new WeakMap,Ta=new WeakMap;function zf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(_t(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&jc.set(n,t)}).catch(()=>{}),Ta.set(e,t),e}function Hf(t){if(Fi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Fi.set(t,e)}let Ui={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kf(t){Ui=t(Ui)}function Gf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xi(this),e,...n);return Dc.set(s,e.sort?e.sort():[e]),_t(s)}:qf().includes(t)?function(...e){return t.apply(xi(this),e),_t(jc.get(this))}:function(...e){return _t(t.apply(xi(this),e))}}function Wf(t){return typeof t=="function"?Gf(t):(t instanceof IDBTransaction&&Hf(t),Vf(t,Bf())?new Proxy(t,Ui):t)}function _t(t){if(t instanceof IDBRequest)return zf(t);if(vi.has(t))return vi.get(t);const e=Wf(t);return e!==t&&(vi.set(t,e),Ta.set(e,t)),e}const xi=t=>Ta.get(t);function Qf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),l=_t(a);return s&&a.addEventListener("upgradeneeded",c=>{s(_t(a.result),c.oldVersion,c.newVersion,_t(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Yf=["get","getKey","getAll","getAllKeys","count"],Jf=["put","add","delete","clear"],wi=new Map;function Ko(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wi.get(e))return wi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Jf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yf.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return wi.set(e,i),i}Kf(t=>({...t,get:(e,n,s)=>Ko(e,n)||t.get(e,n,s),has:(e,n)=>!!Ko(e,n)||t.has(e,n)}));/**
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
 */class Xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $i="@firebase/app",Go="0.9.13";/**
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
 */const Qt=new Ea("@firebase/app"),ep="@firebase/app-compat",tp="@firebase/analytics-compat",np="@firebase/analytics",sp="@firebase/app-check-compat",rp="@firebase/app-check",ip="@firebase/auth",ap="@firebase/auth-compat",op="@firebase/database",lp="@firebase/database-compat",cp="@firebase/functions",up="@firebase/functions-compat",hp="@firebase/installations",dp="@firebase/installations-compat",fp="@firebase/messaging",pp="@firebase/messaging-compat",gp="@firebase/performance",mp="@firebase/performance-compat",yp="@firebase/remote-config",vp="@firebase/remote-config-compat",xp="@firebase/storage",wp="@firebase/storage-compat",bp="@firebase/firestore",kp="@firebase/firestore-compat",Ep="firebase",Tp="9.23.0";/**
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
 */const Vi="[DEFAULT]",Np={[$i]:"fire-core",[ep]:"fire-core-compat",[np]:"fire-analytics",[tp]:"fire-analytics-compat",[rp]:"fire-app-check",[sp]:"fire-app-check-compat",[ip]:"fire-auth",[ap]:"fire-auth-compat",[op]:"fire-rtdb",[lp]:"fire-rtdb-compat",[cp]:"fire-fn",[up]:"fire-fn-compat",[hp]:"fire-iid",[dp]:"fire-iid-compat",[fp]:"fire-fcm",[pp]:"fire-fcm-compat",[gp]:"fire-perf",[mp]:"fire-perf-compat",[yp]:"fire-rc",[vp]:"fire-rc-compat",[xp]:"fire-gcs",[wp]:"fire-gcs-compat",[bp]:"fire-fst",[kp]:"fire-fst-compat","fire-js":"fire-js",[Ep]:"fire-js-all"};/**
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
 */const dr=new Map,Bi=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(Bi.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Bi.set(e,t);for(const n of dr.values())_p(n,t);return!0}function Na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new ds("app","Firebase",Cp);/**
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
 */class Ip{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const In=Tp;function Rc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=Sc()),!n)throw Ct.create("no-options");const i=dr.get(r);if(i){if(hr(n,i.options)&&hr(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const a=new Lf(r);for(const c of Bi.values())a.addComponent(c);const l=new Ip(n,s,a);return dr.set(r,l),l}function Pc(t=Vi){const e=dr.get(t);if(!e&&t===Vi&&Sc())return Rc();if(!e)throw Ct.create("no-app",{appName:t});return e}function It(t,e,n){var s;let r=(s=Np[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}vn(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Sp="firebase-heartbeat-database",Ap=1,Gn="firebase-heartbeat-store";let bi=null;function Mc(){return bi||(bi=Qf(Sp,Ap,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gn)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),bi}async function jp(t){try{return await(await Mc()).transaction(Gn).objectStore(Gn).get(Lc(t))}catch(e){if(e instanceof yt)Qt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function Wo(t,e){try{const s=(await Mc()).transaction(Gn,"readwrite");await s.objectStore(Gn).put(e,Lc(t)),await s.done}catch(n){if(n instanceof yt)Qt.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function Lc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Dp=1024,Rp=30*24*60*60*1e3;class Pp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qo(),{heartbeatsToSend:n,unsentEntries:s}=Mp(this._heartbeatsCache.heartbeats),r=ur(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qo(){return new Date().toISOString().substring(0,10)}function Mp(t,e=Dp){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Yo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tf()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yo(t){return ur(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Op(t){vn(new Wt("platform-logger",e=>new Xf(e),"PRIVATE")),vn(new Wt("heartbeat",e=>new Pp(e),"PRIVATE")),It($i,Go,t),It($i,Go,"esm2017"),It("fire-js","")}Op("");var Fp="firebase",Up="9.23.0";/**
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
 */It(Fp,Up,"app");function _a(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Oc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $p=Oc,Fc=new ds("auth","Firebase",Oc());/**
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
 */const fr=new Ea("@firebase/auth");function Vp(t,...e){fr.logLevel<=z.WARN&&fr.warn(`Auth (${In}): ${t}`,...e)}function tr(t,...e){fr.logLevel<=z.ERROR&&fr.error(`Auth (${In}): ${t}`,...e)}/**
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
 */function ht(t,...e){throw Ca(t,...e)}function st(t,...e){return Ca(t,...e)}function Bp(t,e,n){const s=Object.assign(Object.assign({},$p()),{[e]:n});return new ds("auth","Firebase",s).create(e,{appName:t.name})}function Ca(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fc.create(t,...e)}function P(t,e,...n){if(!t)throw Ca(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function dt(t,e){t||ot(e)}/**
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
 */function qi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qp(){return Jo()==="http:"||Jo()==="https:"}function Jo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qp()||bf()||"connection"in navigator)?navigator.onLine:!0}function Hp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=wf()||kf()}get(){return zp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ia(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Uc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gp=new ps(3e4,6e4);function Sa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,s,r={}){return $c(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=fs(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Uc.fetch()(Bc(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function $c(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Kp),e);try{const r=new Wp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw $s(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw $s(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw $s(t,"user-disabled",a);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bp(t,h,u);ht(t,h)}}catch(r){if(r instanceof yt)throw r;ht(t,"network-request-failed",{message:String(r)})}}async function Vc(t,e,n,s,r={}){const i=await gs(t,e,n,s,r);return"mfaPendingCredential"in i&&ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ia(t.config,r):`${t.config.apiScheme}://${r}`}class Wp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(st(this.auth,"network-request-failed")),Gp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=st(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Qp(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function Yp(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jp(t,e=!1){const n=ge(t),s=await n.getIdToken(e),r=Aa(s);P(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Vn(ki(r.auth_time)),issuedAtTime:Vn(ki(r.iat)),expirationTime:Vn(ki(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ki(t){return Number(t)*1e3}function Aa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cc(n);return r?JSON.parse(r):(tr("Failed to decode base64 JWT payload"),null)}catch(r){return tr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Xp(t){const e=Aa(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yt&&Zp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Zp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class eg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Wn(t,Yp(n,{idToken:s}));P(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sg(i.providerUserInfo):[],l=ng(t.providerData,a),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new qc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function tg(t){const e=ge(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ng(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function sg(t){return t.map(e=>{var{providerId:n}=e,s=_a(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function rg(t,e){const n=await $c(t,{},async()=>{const s=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=Bc(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uc.fetch()(a,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await rg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new Qn;return s&&(P(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(P(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(P(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function xt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=_a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jp(this,e)}reload(){return tg(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,Qp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,a,l,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,m=(l=n.tenantId)!==null&&l!==void 0?l:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:L,isAnonymous:B,providerData:re,stsTokenManager:pe}=n;P(I&&pe,e,"internal-error");const J=Qn.fromJSON(this.name,pe);P(typeof I=="string",e,"internal-error"),xt(d,e.name),xt(f,e.name),P(typeof L=="boolean",e,"internal-error"),P(typeof B=="boolean",e,"internal-error"),xt(p,e.name),xt(g,e.name),xt(m,e.name),xt(v,e.name),xt(w,e.name),xt(k,e.name);const _=new Kt({uid:I,auth:e,email:f,emailVerified:L,displayName:d,isAnonymous:B,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:J,createdAt:w,lastLoginAt:k});return re&&Array.isArray(re)&&(_.providerData=re.map(X=>Object.assign({},X))),v&&(_._redirectEventId=v),_}static async _fromIdTokenResponse(e,n,s=!1){const r=new Qn;r.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await pr(i),i}}/**
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
 */const Xo=new Map;function lt(t){dt(t instanceof Function,"Expected a class definition");let e=Xo.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xo.set(t,e),e)}/**
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
 */class zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zc.type="NONE";const Zo=zc;/**
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
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=nr(this.userKey,r.apiKey,i),this.fullPersistenceKey=nr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(lt(Zo),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||lt(Zo);const a=nr(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(a);if(h){const d=Kt._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,e,s):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new hn(i,e,s))}}/**
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
 */function el(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qc(e))return"Blackberry";if(Yc(e))return"Webos";if(ja(e))return"Safari";if((e.includes("chrome/")||Kc(e))&&!e.includes("edge/"))return"Chrome";if(Wc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hc(t=De()){return/firefox\//i.test(t)}function ja(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kc(t=De()){return/crios\//i.test(t)}function Gc(t=De()){return/iemobile/i.test(t)}function Wc(t=De()){return/android/i.test(t)}function Qc(t=De()){return/blackberry/i.test(t)}function Yc(t=De()){return/webos/i.test(t)}function Dr(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ig(t=De()){var e;return Dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ag(){return Ef()&&document.documentMode===10}function Jc(t=De()){return Dr(t)||Wc(t)||Yc(t)||Qc(t)||/windows phone/i.test(t)||Gc(t)}function og(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xc(t,e=[]){let n;switch(t){case"Browser":n=el(De());break;case"Worker":n=`${el(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${In}/${s}`}async function Zc(t,e){return gs(t,"GET","/v2/recaptchaConfig",Sa(t,e))}function tl(t){return t!==void 0&&t.enterprise!==void 0}class eu{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function lg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tu(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=st("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",lg().appendChild(s)})}function cg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ug="https://www.google.com/recaptcha/enterprise.js?render=",hg="recaptcha-enterprise",dg="NO_RECAPTCHA";class fg{constructor(e){this.type=hg,this.auth=ms(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{Zc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new eu(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,a,l){const c=window.grecaptcha;tl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(dg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{s(this.auth).then(l=>{if(!n&&tl(window.grecaptcha))r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}tu(ug+l).then(()=>{r(l,i,a)}).catch(c=>{a(c)})}}).catch(l=>{a(l)})})}}/**
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
 */class pg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class gg{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nl(this),this.idTokenSubscription=new nl(this),this.beforeStateQueue=new pg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ge(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}async initializeRecaptchaConfig(){const e=await Zc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new eu(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new fg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return P(a,this,"internal-error"),a.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return ge(t)}class nl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Af(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mg(t,e){const n=Na(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return r;ht(r,"already-initialized")}return n.initialize({options:e})}function yg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vg(t,e,n){const s=ms(t);P(s._canInitEmulator,s,"emulator-config-failed"),P(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=nu(e),{host:a,port:l}=xg(e),c=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${a}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wg()}function nu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xg(t){const e=nu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:sl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:sl(a)}}}function sl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
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
 */async function dn(t,e){return Vc(t,"POST","/v1/accounts:signInWithIdp",Sa(t,e))}/**
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
 */const bg="http://localhost";class Yt extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=_a(n,["providerId","signInMethod"]);if(!s||!r)return null;const a=new Yt(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:bg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fs(n)}return e}}/**
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
 */class ru{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ys extends ru{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends ys{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bt.credential(n,s)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class kt extends ys{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Et extends ys{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */async function kg(t,e){return Vc(t,"POST","/v1/accounts:signUp",Sa(t,e))}/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Kt._fromIdTokenResponse(e,s,r),a=rl(s);return new jt({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=rl(s);return new jt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function rl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Eg(t){var e;const n=ms(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new jt({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await kg(n,{returnSecureToken:!0}),r=await jt._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(r.user),r}/**
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
 */class gr extends yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new gr(e,n,s,r)}}function iu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,i,e,s):i})}async function Tg(t,e,n=!1){const s=await Wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",s)}/**
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
 */async function Ng(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Wn(t,iu(s,r,e,t),n);P(i.idToken,s,"internal-error");const a=Aa(i.idToken);P(a,s,"internal-error");const{sub:l}=a;return P(t.uid===l,s,"user-mismatch"),jt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),i}}/**
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
 */async function _g(t,e,n=!1){const s="signIn",r=await iu(t,s,e),i=await jt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Cg(t,e,n,s){return ge(t).onIdTokenChanged(e,n,s)}function Ig(t,e,n){return ge(t).beforeAuthStateChanged(e,n)}function Sg(t,e,n,s){return ge(t).onAuthStateChanged(e,n,s)}const mr="__sak";/**
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
 */class au{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ag(){const t=De();return ja(t)||Dr(t)}const jg=1e3,Dg=10;class ou extends au{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ag()&&og(),this.fallbackToPolling=Jc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(s);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);ag()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Dg):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ou.type="LOCAL";const Rg=ou;/**
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
 */class lu extends au{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lu.type="SESSION";const cu=lu;/**
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
 */function Pg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async u=>u(n.origin,i)),c=await Pg(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rr.receivers=[];/**
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
 */function Da(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Mg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const u=Da("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function Lg(t){rt().location.href=t}/**
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
 */function uu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Og(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ug(){return uu()?self:null}/**
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
 */const hu="firebaseLocalStorageDb",$g=1,yr="firebaseLocalStorage",du="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function Vg(){const t=indexedDB.deleteDatabase(hu);return new vs(t).toPromise()}function zi(){const t=indexedDB.open(hu,$g);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yr,{keyPath:du})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yr)?e(s):(s.close(),await Vg(),e(await zi()))})})}async function il(t,e,n){const s=Pr(t,!0).put({[du]:e,value:n});return new vs(s).toPromise()}async function Bg(t,e){const n=Pr(t,!1).get(e),s=await new vs(n).toPromise();return s===void 0?null:s.value}function al(t,e){const n=Pr(t,!0).delete(e);return new vs(n).toPromise()}const qg=800,zg=3;class fu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rr._getInstance(Ug()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Og(),!this.activeServiceWorker)return;this.sender=new Mg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zi();return await il(e,mr,"1"),await al(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>il(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>al(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Pr(r,!1).getAll();return new vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fu.type="LOCAL";const Hg=fu;new ps(3e4,6e4);/**
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
 */function Kg(t,e){return e?lt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ra extends su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gg(t){return _g(t.auth,new Ra(t),t.bypassAuthState)}function Wg(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Ng(n,new Ra(t),t.bypassAuthState)}async function Qg(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Tg(n,new Ra(t),t.bypassAuthState)}/**
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
 */class pu{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gg;case"linkViaPopup":case"linkViaRedirect":return Qg;case"reauthViaPopup":case"reauthViaRedirect":return Wg;default:ht(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yg=new ps(2e3,1e4);class cn extends pu{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yg.get())};e()}}cn.currentPopupAction=null;/**
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
 */const Jg="pendingRedirect",sr=new Map;class Xg extends pu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const s=await Zg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zg(t,e){const n=nm(e),s=tm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function em(t,e){sr.set(t._key(),e)}function tm(t){return lt(t._redirectPersistence)}function nm(t){return nr(Jg,t.config.apiKey,t.name)}async function sm(t,e,n=!1){const s=ms(t),r=Kg(s,e),a=await new Xg(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const rm=10*60*1e3;class im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!am(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!gu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(st(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ol(e))}saveEventToCache(e){this.cachedEventUids.add(ol(e)),this.lastProcessedEventTime=Date.now()}}function ol(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function am(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gu(t);default:return!1}}/**
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
 */async function om(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const lm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cm=/^https?/;async function um(t){if(t.config.emulator)return;const{authorizedDomains:e}=await om(t);for(const n of e)try{if(hm(n))return}catch{}ht(t,"unauthorized-domain")}function hm(t){const e=qi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!cm.test(n))return!1;if(lm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const dm=new ps(3e4,6e4);function ll(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fm(t){return new Promise((e,n)=>{var s,r,i;function a(){ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ll(),n(st(t,"network-request-failed"))},timeout:dm.get()})}if(!((r=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)a();else{const l=cg("iframefcb");return rt()[l]=()=>{gapi.load?a():n(st(t,"network-request-failed"))},tu(`https://apis.google.com/js/api.js?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw rr=null,e})}let rr=null;function pm(t){return rr=rr||fm(t),rr}/**
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
 */const gm=new ps(5e3,15e3),mm="__/auth/iframe",ym="emulator/auth/iframe",vm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wm(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ia(e,ym):`https://${t.config.authDomain}/${mm}`,s={apiKey:e.apiKey,appName:t.name,v:In},r=xm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${fs(s).slice(1)}`}async function bm(t){const e=await pm(t),n=rt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:wm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=st(t,"network-request-failed"),l=rt().setTimeout(()=>{i(a)},gm.get());function c(){rt().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const km={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Em=500,Tm=600,Nm="_blank",_m="http://localhost";class cl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cm(t,e,n,s=Em,r=Tm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},km),{width:s.toString(),height:r.toString(),top:i,left:a}),u=De().toLowerCase();n&&(l=Kc(u)?Nm:n),Hc(u)&&(e=e||_m,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(ig(u)&&l!=="_self")return Im(e||"",l),new cl(null);const d=window.open(e||"",l,h);P(d,t,"popup-blocked");try{d.focus()}catch{}return new cl(d)}function Im(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Sm="__/auth/handler",Am="emulator/auth/handler",jm=encodeURIComponent("fac");async function ul(t,e,n,s,r,i){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:In,eventId:r};if(e instanceof ru){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Sf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(i||{}))a[h]=d}if(e instanceof ys){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(a.scopes=h.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${jm}=${encodeURIComponent(c)}`:"";return`${Dm(t)}?${fs(l).slice(1)}${u}`}function Dm({config:t}){return t.emulator?Ia(t,Am):`https://${t.authDomain}/${Sm}`}/**
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
 */const Ei="webStorageSupport";class Rm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cu,this._completeRedirectFn=sm,this._overrideRedirectResult=em}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ul(e,n,s,qi(),r);return Cm(e,a,Da())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ul(e,n,s,qi(),r);return Lg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bm(e),s=new im(e);return n.register("authEvent",r=>(P(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ei,{type:Ei},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ei];a!==void 0&&n(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=um(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jc()||ja()||Dr()}}const Pm=Rm;var hl="@firebase/auth",dl="0.23.2";/**
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
 */class Mm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Om(t){vn(new Wt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;P(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xc(t)},u=new gg(s,r,i,c);return yg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vn(new Wt("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(s=>new Mm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(hl,dl,Lm(t)),It(hl,dl,"esm2017")}/**
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
 */const Fm=5*60,Um=Ac("authIdTokenMaxAge")||Fm;let fl=null;const $m=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Um)return;const r=n==null?void 0:n.token;fl!==r&&(fl=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Vm(t=Pc()){const e=Na(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mg(t,{popupRedirectResolver:Pm,persistence:[Hg,Rg,cu]}),s=Ac("authTokenSyncURL");if(s){const i=$m(s);Ig(n,i,()=>i(n.currentUser)),Cg(n,a=>i(a))}const r=Ic("auth");return r&&vg(n,`http://${r}`),n}Om("Browser");var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Pa=Pa||{},j=Bm||self;function Mr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qm(t){return Object.prototype.hasOwnProperty.call(t,Ti)&&t[Ti]||(t[Ti]=++zm)}var Ti="closure_uid_"+(1e9*Math.random()>>>0),zm=0;function Hm(t,e,n){return t.call.apply(t.bind,arguments)}function Km(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Se(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=Hm:Se=Km,Se.apply(null,arguments)}function Vs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var a=Array(arguments.length-2),l=2;l<arguments.length;l++)a[l-2]=arguments[l];return e.prototype[r].apply(s,a)}}function Lt(){this.s=this.s,this.o=this.o}var Gm=0;Lt.prototype.s=!1;Lt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Gm!=0)&&qm(this)};Lt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ma(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function pl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Mr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let a=0;a<i;a++)t[r+a]=s[a]}else t.push(s)}}function Ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Wm=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function Yn(t){return/^[\s\xa0]*$/.test(t)}function Lr(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function et(t){return Lr().indexOf(t)!=-1}function La(t){return La[" "](t),t}La[" "]=function(){};function Qm(t,e){var n=Vy;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Ym=et("Opera"),xn=et("Trident")||et("MSIE"),yu=et("Edge"),Hi=yu||xn,vu=et("Gecko")&&!(Lr().toLowerCase().indexOf("webkit")!=-1&&!et("Edge"))&&!(et("Trident")||et("MSIE"))&&!et("Edge"),Jm=Lr().toLowerCase().indexOf("webkit")!=-1&&!et("Edge");function xu(){var t=j.document;return t?t.documentMode:void 0}var Ki;e:{var Ni="",_i=function(){var t=Lr();if(vu)return/rv:([^\);]+)(\)|;)/.exec(t);if(yu)return/Edge\/([\d\.]+)/.exec(t);if(xn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jm)return/WebKit\/(\S+)/.exec(t);if(Ym)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_i&&(Ni=_i?_i[1]:""),xn){var Ci=xu();if(Ci!=null&&Ci>parseFloat(Ni)){Ki=String(Ci);break e}}Ki=Ni}var Gi;if(j.document&&xn){var gl=xu();Gi=gl||parseInt(Ki,10)||void 0}else Gi=void 0;var Xm=Gi;function Jn(t,e){if(Ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vu){e:{try{La(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Zm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jn.$.h.call(this)}}xe(Jn,Ae);var Zm={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ws="closure_listenable_"+(1e6*Math.random()|0),ey=0;function ty(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++ey,this.fa=this.ia=!1}function Or(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Oa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ny(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wu(t){const e={};for(const n in t)e[n]=t[n];return e}const ml="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bu(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<ml.length;i++)n=ml[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Fr(t){this.src=t,this.g={},this.h=0}Fr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var a=Qi(t,e,s,r);return-1<a?(e=t[a],n||(e.ia=!1)):(e=new ty(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Wi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=mu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Or(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qi(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Fa="closure_lm_"+(1e6*Math.random()|0),Ii={};function ku(t,e,n,s,r){if(s&&s.once)return Tu(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ku(t,e[i],n,s,r);return null}return n=Va(n),t&&t[ws]?t.O(e,n,xs(s)?!!s.capture:!!s,r):Eu(t,e,n,!1,s,r)}function Eu(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var a=xs(r)?!!r.capture:!!r,l=$a(t);if(l||(t[Fa]=l=new Fr(t)),n=l.add(e,n,s,a,i),n.proxy)return n;if(s=sy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Wm||(r=a),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(_u(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sy(){function t(n){return e.call(t.src,t.listener,n)}const e=ry;return t}function Tu(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tu(t,e[i],n,s,r);return null}return n=Va(n),t&&t[ws]?t.P(e,n,xs(s)?!!s.capture:!!s,r):Eu(t,e,n,!0,s,r)}function Nu(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Nu(t,e[i],n,s,r);else s=xs(s)?!!s.capture:!!s,n=Va(n),t&&t[ws]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qi(i,n,s,r),-1<n&&(Or(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=$a(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qi(e,n,s,r)),(n=-1<t?e[t]:null)&&Ua(n))}function Ua(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ws])Wi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(_u(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=$a(e))?(Wi(n,t),n.h==0&&(n.src=null,e[Fa]=null)):Or(t)}}}function _u(t){return t in Ii?Ii[t]:Ii[t]="on"+t}function ry(t,e){if(t.fa)t=!0;else{e=new Jn(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Ua(t),t=n.call(s,e)}return t}function $a(t){return t=t[Fa],t instanceof Fr?t:null}var Si="__closure_events_fn_"+(1e9*Math.random()>>>0);function Va(t){return typeof t=="function"?t:(t[Si]||(t[Si]=function(e){return t.handleEvent(e)}),t[Si])}function ve(){Lt.call(this),this.i=new Fr(this),this.S=this,this.J=null}xe(ve,Lt);ve.prototype[ws]=!0;ve.prototype.removeEventListener=function(t,e,n,s){Nu(this,t,e,n,s)};function ke(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ae(e,t);else if(e instanceof Ae)e.target=e.target||t;else{var r=e;e=new Ae(s,t),bu(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var a=e.g=n[i];r=Bs(a,s,!0,e)&&r}if(a=e.g=t,r=Bs(a,s,!0,e)&&r,r=Bs(a,s,!1,e)&&r,n)for(i=0;i<n.length;i++)a=e.g=n[i],r=Bs(a,s,!1,e)&&r}ve.prototype.N=function(){if(ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Or(n[s]);delete t.g[e],t.h--}}this.J=null};ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ve.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Bs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var a=e[i];if(a&&!a.fa&&a.capture==n){var l=a.listener,c=a.la||a.src;a.ia&&Wi(t.i,a),r=l.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ba=j.JSON.stringify;class iy{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ay(){var t=qa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oy{constructor(){this.h=this.g=null}add(e,n){const s=Cu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cu=new iy(()=>new ly,t=>t.reset());class ly{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cy(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uy(t){j.setTimeout(()=>{throw t},0)}let Xn,Zn=!1,qa=new oy,Iu=()=>{const t=j.Promise.resolve(void 0);Xn=()=>{t.then(hy)}};var hy=()=>{for(var t;t=ay();){try{t.h.call(t.g)}catch(n){uy(n)}var e=Cu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zn=!1};function Ur(t,e){ve.call(this),this.h=t||1,this.g=e||j,this.j=Se(this.qb,this),this.l=Date.now()}xe(Ur,ve);E=Ur.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(za(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function za(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}E.N=function(){Ur.$.N.call(this),za(this),delete this.g};function Ha(t,e,n){if(typeof t=="function")n&&(t=Se(t,n));else if(t&&typeof t.handleEvent=="function")t=Se(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function Su(t){t.g=Ha(()=>{t.g=null,t.i&&(t.i=!1,Su(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dy extends Lt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Su(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(t){Lt.call(this),this.h=t,this.g={}}xe(es,Lt);var yl=[];function Au(t,e,n,s){Array.isArray(n)||(n&&(yl[0]=n.toString()),n=yl);for(var r=0;r<n.length;r++){var i=ku(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ju(t){Oa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ua(e)},t),t.g={}}es.prototype.N=function(){es.$.N.call(this),ju(this)};es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $r(){this.g=!0}$r.prototype.Ea=function(){this.g=!1};function fy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var a="",l=i.split("&"),c=0;c<l.length;c++){var u=l[c].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");a=2<=d.length&&d[1]=="type"?a+(h+"="+u+"&"):a+(h+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+a})}function py(t,e,n,s,r,i,a){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+a})}function un(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+my(t,n)+(s?" "+s:"")})}function gy(t,e){t.info(function(){return"TIMEOUT: "+e})}$r.prototype.info=function(){};function my(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var a=1;a<r.length;a++)r[a]=""}}}}return Ba(n)}catch{return e}}var tn={},vl=null;function Vr(){return vl=vl||new ve}tn.Ta="serverreachability";function Du(t){Ae.call(this,tn.Ta,t)}xe(Du,Ae);function ts(t){const e=Vr();ke(e,new Du(e))}tn.STAT_EVENT="statevent";function Ru(t,e){Ae.call(this,tn.STAT_EVENT,t),this.stat=e}xe(Ru,Ae);function Me(t){const e=Vr();ke(e,new Ru(e,t))}tn.Ua="timingevent";function Pu(t,e){Ae.call(this,tn.Ua,t),this.size=e}xe(Pu,Ae);function bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Br={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Mu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ka(){}Ka.prototype.h=null;function xl(t){return t.h||(t.h=t.i())}function Lu(){}var ks={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ga(){Ae.call(this,"d")}xe(Ga,Ae);function Wa(){Ae.call(this,"c")}xe(Wa,Ae);var Yi;function qr(){}xe(qr,Ka);qr.prototype.g=function(){return new XMLHttpRequest};qr.prototype.i=function(){return{}};Yi=new qr;function Es(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new es(this),this.P=yy,t=Hi?125:void 0,this.V=new Ur(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ou}function Ou(){this.i=null,this.g="",this.h=!1}var yy=45e3,Ji={},vr={};E=Es.prototype;E.setTimeout=function(t){this.P=t};function Xi(t,e,n){t.L=1,t.v=Hr(ft(e)),t.s=n,t.S=!0,Fu(t,null)}function Fu(t,e){t.G=Date.now(),Ts(t),t.A=ft(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Ku(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Ou,t.g=fh(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dy(Se(t.Pa,t,t.g),t.O)),Au(t.U,t.g,"readystatechange",t.nb),e=t.I?wu(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ts(),fy(t.j,t.u,t.A,t.m,t.W,t.s)}E.nb=function(t){t=t.target;const e=this.M;e&&tt(t)==3?e.l():this.Pa(t)};E.Pa=function(t){try{if(t==this.g)e:{const h=tt(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(h!=3||Hi||this.g&&(this.h.h||this.g.ja()||El(this.g)))){this.J||h!=4||e==7||(e==8||0>=d?ts(3):ts(2)),zr(this);var n=this.g.da();this.ca=n;t:if(Uu(this)){var s=El(this.g);t="";var r=s.length,i=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),Bn(this);var a="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=n==200,py(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yn(l)){var u=l;break t}}u=null}if(n=u)un(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zi(this,n);else{this.i=!1,this.o=3,Me(12),Bt(this),Bn(this);break e}}this.S?($u(this,h,a),Hi&&this.i&&h==3&&(Au(this.U,this.V,"tick",this.mb),this.V.start())):(un(this.j,this.m,a,null),Zi(this,a)),h==4&&Bt(this),this.i&&!this.J&&(h==4?ch(this.l,this):(this.i=!1,Ts(this)))}else Fy(this.g),n==400&&0<a.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Bt(this),Bn(this)}}}catch{}finally{}};function Uu(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function $u(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=vy(t,n),r==vr){e==4&&(t.o=4,Me(14),s=!1),un(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ji){t.o=4,Me(15),un(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else un(t.j,t.m,r,null),Zi(t,r);Uu(t)&&r!=vr&&r!=Ji&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),eo(e),e.M=!0,Me(11))):(un(t.j,t.m,n,"[Invalid Chunked Response]"),Bt(t),Bn(t))}E.mb=function(){if(this.g){var t=tt(this.g),e=this.g.ja();this.C<e.length&&(zr(this),$u(this,t,e),this.i&&t!=4&&Ts(this))}};function vy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?vr:(n=Number(e.substring(n,s)),isNaN(n)?Ji:(s+=1,s+n>e.length?vr:(e=e.slice(s,s+n),t.C=s+n,e)))}E.cancel=function(){this.J=!0,Bt(this)};function Ts(t){t.Y=Date.now()+t.P,Vu(t,t.P)}function Vu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bs(Se(t.lb,t),e)}function zr(t){t.B&&(j.clearTimeout(t.B),t.B=null)}E.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gy(this.j,this.A),this.L!=2&&(ts(),Me(17)),Bt(this),this.o=2,Bn(this)):Vu(this,this.Y-t)};function Bn(t){t.l.H==0||t.J||ch(t.l,t)}function Bt(t){zr(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,za(t.V),ju(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Zi(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ea(n.i,t))){if(!t.K&&ea(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)br(n),Wr(n);else break e;Za(n),Me(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=bs(Se(n.ib,n),6e3));if(1>=Qu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else qt(n,11)}else if((t.K||n.g==t)&&br(n),!Yn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qa(i,i.h),i.h=null))}if(s.F){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,Z(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var a=t;if(s.wa=dh(s,s.J?s.pa:null,s.Y),a.K){Yu(s.i,a);var l=a,c=s.L;c&&l.setTimeout(c),l.B&&(zr(l),Ts(l)),s.g=a}else oh(s);0<n.j.length&&Qr(n)}else u[0]!="stop"&&u[0]!="close"||qt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?qt(n,7):Xa(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ts(4)}catch{}}function xy(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function wy(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Bu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wy(t),s=xy(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var qu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function by(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gt){this.h=t.h,xr(this,t.j),this.s=t.s,this.g=t.g,wr(this,t.m),this.l=t.l;var e=t.i,n=new ns;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wl(this,n),this.o=t.o}else t&&(e=String(t).match(qu))?(this.h=!1,xr(this,e[1]||"",!0),this.s=Ln(e[2]||""),this.g=Ln(e[3]||"",!0),wr(this,e[4]),this.l=Ln(e[5]||"",!0),wl(this,e[6]||"",!0),this.o=Ln(e[7]||"")):(this.h=!1,this.i=new ns(null,this.h))}Gt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(On(e,bl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(On(e,bl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(On(n,n.charAt(0)=="/"?Ty:Ey,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",On(n,_y)),t.join("")};function ft(t){return new Gt(t)}function xr(t,e,n){t.j=n?Ln(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wl(t,e,n){e instanceof ns?(t.i=e,Cy(t.i,t.h)):(n||(e=On(e,Ny)),t.i=new ns(e,t.h))}function Z(t,e,n){t.i.set(e,n)}function Hr(t){return Z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ln(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function On(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ky),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ky(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bl=/[#\/\?@]/g,Ey=/[#\?:]/g,Ty=/[#\?]/g,Ny=/[#\?@]/g,_y=/#/g;function ns(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ot(t){t.g||(t.g=new Map,t.h=0,t.i&&by(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}E=ns.prototype;E.add=function(t,e){Ot(this),this.i=null,t=Sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zu(t,e){Ot(t),e=Sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hu(t,e){return Ot(t),e=Sn(t,e),t.g.has(e)}E.forEach=function(t,e){Ot(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};E.ta=function(){Ot(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};E.Z=function(t){Ot(this);let e=[];if(typeof t=="string")Hu(this,t)&&(e=e.concat(this.g.get(Sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};E.set=function(t,e){return Ot(this),this.i=null,t=Sn(this,t),Hu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};E.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ku(t,e,n){zu(t,e),0<n.length&&(t.i=null,t.g.set(Sn(t,e),Ma(n)),t.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),a=this.Z(s);for(s=0;s<a.length;s++){var r=i;a[s]!==""&&(r+="="+encodeURIComponent(String(a[s]))),t.push(r)}}return this.i=t.join("&")};function Sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Cy(t,e){e&&!t.j&&(Ot(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(zu(this,s),Ku(this,r,n))},t)),t.j=e}var Iy=class{constructor(t,e){this.g=t,this.map=e}};function Gu(t){this.l=t||Sy,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sy=10;function Wu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qu(t){return t.h?1:t.g?t.g.size:0}function ea(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qa(t,e){t.g?t.g.add(e):t.h=e}function Yu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gu.prototype.cancel=function(){if(this.i=Ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ju(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ma(t.i)}var Ay=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function jy(){this.g=new Ay}function Dy(t,e,n){const s=n||"";try{Bu(t,function(r,i){let a=r;xs(r)&&(a=Ba(r)),e.push(s+i+"="+encodeURIComponent(a))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ry(t,e){const n=new $r;if(j.Image){const s=new Image;s.onload=Vs(qs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Vs(qs,n,s,"TestLoadImage: error",!1,e),s.onabort=Vs(qs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Vs(qs,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ns(t){this.l=t.fc||null,this.j=t.ob||!1}xe(Ns,Ka);Ns.prototype.g=function(){return new Kr(this.l,this.j)};Ns.prototype.i=function(t){return function(){return t}}({});function Kr(t,e){ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ya,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(Kr,ve);var Ya=0;E=Kr.prototype;E.open=function(t,e){if(this.readyState!=Ya)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ss(this)};E.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=Ya};E.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xu(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Xu(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}E.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_s(this):ss(this),this.readyState==3&&Xu(this)}};E.Za=function(t){this.g&&(this.response=this.responseText=t,_s(this))};E.Ya=function(t){this.g&&(this.response=t,_s(this))};E.ka=function(){this.g&&_s(this)};function _s(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ss(t)}E.setRequestHeader=function(t,e){this.v.append(t,e)};E.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ss(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Py=j.JSON.parse;function le(t){ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zu,this.L=this.M=!1}xe(le,ve);var Zu="",My=/^https?$/i,Ly=["POST","PUT"];E=le.prototype;E.Oa=function(t){this.M=t};E.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yi.g(),this.C=this.u?xl(this.u):xl(Yi),this.g.onreadystatechange=Se(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){kl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=j.FormData&&t instanceof j.FormData,!(0<=mu(Ly,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nh(this),0<this.B&&((this.L=Oy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.ua,this)):this.A=Ha(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){kl(this,i)}};function Oy(t){return xn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}E.ua=function(){typeof Pa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function kl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eh(t),Gr(t)}function eh(t){t.F||(t.F=!0,ke(t,"complete"),ke(t,"error"))}E.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),Gr(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gr(this,!0)),le.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?th(this):this.kb())};E.kb=function(){th(this)};function th(t){if(t.h&&typeof Pa<"u"&&(!t.C[1]||tt(t)!=4||t.da()!=2)){if(t.v&&tt(t)==4)Ha(t.La,0,t);else if(ke(t,"readystatechange"),tt(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(qu)[1]||null;!r&&j.self&&j.self.location&&(r=j.self.location.protocol.slice(0,-1)),s=!My.test(r?r.toLowerCase():"")}n=s}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var i=2<tt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",eh(t)}}finally{Gr(t)}}}}function Gr(t,e){if(t.g){nh(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function nh(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}E.isActive=function(){return!!this.g};function tt(t){return t.g?t.g.readyState:0}E.da=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Py(e)}};function El(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Zu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Fy(t){const e={};t=(t.g&&2<=tt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Yn(t[s]))continue;var n=cy(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}ny(e,function(s){return s.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sh(t){let e="";return Oa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ja(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=sh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Z(t,e,n))}function Pn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rh(t){this.Ga=0,this.j=[],this.l=new $r,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pn("baseRetryDelayMs",5e3,t),this.hb=Pn("retryDelaySeedMs",1e4,t),this.eb=Pn("forwardChannelMaxRetries",2,t),this.xa=Pn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gu(t&&t.concurrentRequestLimit),this.Ja=new jy,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=rh.prototype;E.ra=8;E.H=1;function Xa(t){if(ih(t),t.H==3){var e=t.W++,n=ft(t.I);if(Z(n,"SID",t.K),Z(n,"RID",e),Z(n,"TYPE","terminate"),Cs(t,n),e=new Es(t,t.l,e),e.L=2,e.v=Hr(ft(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=fh(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ts(e)}hh(t)}function Wr(t){t.g&&(eo(t),t.g.cancel(),t.g=null)}function ih(t){Wr(t),t.u&&(j.clearTimeout(t.u),t.u=null),br(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Qr(t){if(!Wu(t.i)&&!t.m){t.m=!0;var e=t.Na;Xn||Iu(),Zn||(Xn(),Zn=!0),qa.add(e,t),t.C=0}}function Uy(t,e){return Qu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=bs(Se(t.Na,t,e),uh(t,t.C)),t.C++,!0)}E.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Es(this,this.l,t);let i=this.s;if(this.U&&(i?(i=wu(i),bu(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ah(this,r,e),n=ft(this.I),Z(n,"RID",t),Z(n,"CVER",22),this.F&&Z(n,"X-HTTP-Session-Id",this.F),Cs(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(sh(i)))+"&"+e:this.o&&Ja(n,this.o,i)),Qa(this.i,r),this.bb&&Z(n,"TYPE","init"),this.P?(Z(n,"$req",e),Z(n,"SID","null"),r.aa=!0,Xi(r,n,null)):Xi(r,n,e),this.H=2}}else this.H==3&&(t?Tl(this,t):this.j.length==0||Wu(this.i)||Tl(this))};function Tl(t,e){var n;e?n=e.m:n=t.W++;const s=ft(t.I);Z(s,"SID",t.K),Z(s,"RID",n),Z(s,"AID",t.V),Cs(t,s),t.o&&t.s&&Ja(s,t.o,t.s),n=new Es(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ah(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qa(t.i,n),Xi(n,s,e)}function Cs(t,e){t.na&&Oa(t.na,function(n,s){Z(e,s,n)}),t.h&&Bu({},function(n,s){Z(e,s,n)})}function ah(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Se(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const a=["count="+n];i==-1?0<n?(i=r[0].g,a.push("ofs="+i)):i=0:a.push("ofs="+i);let l=!0;for(let c=0;c<n;c++){let u=r[c].g;const h=r[c].map;if(u-=i,0>u)i=Math.max(0,r[c].g-100),l=!1;else try{Dy(h,a,"req"+u+"_")}catch{s&&s(h)}}if(l){s=a.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function oh(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Xn||Iu(),Zn||(Xn(),Zn=!0),qa.add(e,t),t.A=0}}function Za(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=bs(Se(t.Ma,t),uh(t,t.A)),t.A++,!0)}E.Ma=function(){if(this.u=null,lh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=bs(Se(this.jb,this),t)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Me(10),Wr(this),lh(this))};function eo(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function lh(t){t.g=new Es(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ft(t.wa);Z(e,"RID","rpc"),Z(e,"SID",t.K),Z(e,"AID",t.V),Z(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Z(e,"TO",t.qa),Z(e,"TYPE","xmlhttp"),Cs(t,e),t.o&&t.s&&Ja(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hr(ft(e)),n.s=null,n.S=!0,Fu(n,t)}E.ib=function(){this.v!=null&&(this.v=null,Wr(this),Za(this),Me(19))};function br(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function ch(t,e){var n=null;if(t.g==e){br(t),eo(t),t.g=null;var s=2}else if(ea(t.i,e))n=e.F,Yu(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Vr(),ke(s,new Pu(s,n)),Qr(t)}else oh(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&Uy(t,e)||s==2&&Za(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:qt(t,5);break;case 4:qt(t,10);break;case 3:qt(t,6);break;default:qt(t,2)}}}function uh(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function qt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Se(t.pb,t);n||(n=new Gt("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||xr(n,"https"),Hr(n)),Ry(n.toString(),s)}else Me(2);t.H=0,t.h&&t.h.za(e),hh(t),ih(t)}E.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Me(2)):(this.l.info("Failed to ping google.com"),Me(1))};function hh(t){if(t.H=0,t.ma=[],t.h){const e=Ju(t.i);(e.length!=0||t.j.length!=0)&&(pl(t.ma,e),pl(t.ma,t.j),t.i.i.length=0,Ma(t.j),t.j.length=0),t.h.ya()}}function dh(t,e,n){var s=n instanceof Gt?ft(n):new Gt(n);if(s.g!="")e&&(s.g=e+"."+s.g),wr(s,s.m);else{var r=j.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Gt(null);s&&xr(i,s),e&&(i.g=e),r&&wr(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Z(s,n,e),Z(s,"VER",t.ra),Cs(t,s),s}function fh(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new le(new Ns({ob:!0})):new le(t.va),e.Oa(t.J),e}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function ph(){}E=ph.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function kr(){if(xn&&!(10<=Number(Xm)))throw Error("Environmental error: no available transport.")}kr.prototype.g=function(t,e){return new qe(t,e)};function qe(t,e){ve.call(this),this.g=new rh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Yn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new An(this)}xe(qe,ve);qe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=dh(t,null,t.Y),Qr(t)};qe.prototype.close=function(){Xa(this.g)};qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ba(t),t=n);e.j.push(new Iy(e.fb++,t)),e.H==3&&Qr(e)};qe.prototype.N=function(){this.g.h=null,delete this.j,Xa(this.g),delete this.g,qe.$.N.call(this)};function gh(t){Ga.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(gh,Ga);function mh(){Wa.call(this),this.status=1}xe(mh,Wa);function An(t){this.g=t}xe(An,ph);An.prototype.Ba=function(){ke(this.g,"a")};An.prototype.Aa=function(t){ke(this.g,new gh(t))};An.prototype.za=function(t){ke(this.g,new mh)};An.prototype.ya=function(){ke(this.g,"b")};function $y(){this.blockSize=-1}function Ye(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xe(Ye,$y);Ye.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ai(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],a=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(a<<7&4294967295|a>>>25),a=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(a<<12&4294967295|a>>>20),a=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(a<<17&4294967295|a>>>15),a=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(a<<22&4294967295|a>>>10),a=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(a<<7&4294967295|a>>>25),a=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(a<<12&4294967295|a>>>20),a=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(a<<17&4294967295|a>>>15),a=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(a<<22&4294967295|a>>>10),a=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(a<<7&4294967295|a>>>25),a=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(a<<12&4294967295|a>>>20),a=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(a<<17&4294967295|a>>>15),a=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(a<<22&4294967295|a>>>10),a=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(a<<7&4294967295|a>>>25),a=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(a<<12&4294967295|a>>>20),a=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(a<<17&4294967295|a>>>15),a=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(a<<5&4294967295|a>>>27),a=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(a<<14&4294967295|a>>>18),a=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(a<<5&4294967295|a>>>27),a=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(a<<14&4294967295|a>>>18),a=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(a<<5&4294967295|a>>>27),a=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(a<<14&4294967295|a>>>18),a=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(a<<5&4294967295|a>>>27),a=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(a<<14&4294967295|a>>>18),a=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(a<<4&4294967295|a>>>28),a=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(a<<11&4294967295|a>>>21),a=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(a<<16&4294967295|a>>>16),a=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(a<<23&4294967295|a>>>9),a=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(a<<4&4294967295|a>>>28),a=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(a<<11&4294967295|a>>>21),a=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(a<<16&4294967295|a>>>16),a=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(a<<23&4294967295|a>>>9),a=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(a<<4&4294967295|a>>>28),a=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(a<<11&4294967295|a>>>21),a=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(a<<16&4294967295|a>>>16),a=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(a<<23&4294967295|a>>>9),a=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(a<<4&4294967295|a>>>28),a=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(a<<11&4294967295|a>>>21),a=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(a<<16&4294967295|a>>>16),a=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(a<<6&4294967295|a>>>26),a=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(a<<10&4294967295|a>>>22),a=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(a<<15&4294967295|a>>>17),a=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(a<<6&4294967295|a>>>26),a=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(a<<10&4294967295|a>>>22),a=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(a<<15&4294967295|a>>>17),a=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(a<<6&4294967295|a>>>26),a=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(a<<10&4294967295|a>>>22),a=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(a<<15&4294967295|a>>>17),a=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(a<<6&4294967295|a>>>26),a=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(a<<10&4294967295|a>>>22),a=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(a<<15&4294967295|a>>>17),a=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ye.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Ai(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Ai(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Ai(this,s),r=0;break}}this.h=r,this.i+=e};Ye.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function W(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var Vy={};function to(t){return-128<=t&&128>t?Qm(t,function(e){return new W([e|0],0>e?-1:0)}):new W([t|0],0>t?-1:0)}function nt(t){if(isNaN(t)||!isFinite(t))return fn;if(0>t)return be(nt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ta;return new W(e,0)}function yh(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return be(yh(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nt(Math.pow(e,8)),s=fn,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+i),e);8>i?(i=nt(Math.pow(e,i)),s=s.R(i).add(nt(a))):(s=s.R(n),s=s.add(nt(a)))}return s}var ta=4294967296,fn=to(0),na=to(1),Nl=to(16777216);E=W.prototype;E.ea=function(){if(Ke(this))return-be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ta+s)*e,e*=ta}return t};E.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ct(this))return"0";if(Ke(this))return"-"+be(this).toString(t);for(var e=nt(Math.pow(t,6)),n=this,s="";;){var r=Tr(n,e).g;n=Er(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,ct(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};E.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ct(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ke(t){return t.h==-1}E.X=function(t){return t=Er(this,t),Ke(t)?-1:ct(t)?0:1};function be(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new W(n,~t.h).add(na)}E.abs=function(){return Ke(this)?be(this):this};E.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),a=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=a>>>16,i&=65535,a&=65535,n[r]=a<<16|i}return new W(n,n[n.length-1]&-2147483648?-1:0)};function Er(t,e){return t.add(be(e))}E.R=function(t){if(ct(this)||ct(t))return fn;if(Ke(this))return Ke(t)?be(this).R(be(t)):be(be(this).R(t));if(Ke(t))return be(this.R(be(t)));if(0>this.X(Nl)&&0>t.X(Nl))return nt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,a=this.D(s)&65535,l=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=a*c,zs(n,2*s+2*r),n[2*s+2*r+1]+=i*c,zs(n,2*s+2*r+1),n[2*s+2*r+1]+=a*l,zs(n,2*s+2*r+1),n[2*s+2*r+2]+=i*l,zs(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new W(n,0)};function zs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mn(t,e){this.g=t,this.h=e}function Tr(t,e){if(ct(e))throw Error("division by zero");if(ct(t))return new Mn(fn,fn);if(Ke(t))return e=Tr(be(t),e),new Mn(be(e.g),be(e.h));if(Ke(e))return e=Tr(t,be(e)),new Mn(be(e.g),e.h);if(30<t.g.length){if(Ke(t)||Ke(e))throw Error("slowDivide_ only works with positive integers.");for(var n=na,s=e;0>=s.X(t);)n=_l(n),s=_l(s);var r=an(n,1),i=an(s,1);for(s=an(s,2),n=an(n,2);!ct(s);){var a=i.add(s);0>=a.X(t)&&(r=r.add(n),i=a),s=an(s,1),n=an(n,1)}return e=Er(t,r.R(e)),new Mn(r,e)}for(r=fn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=nt(n),a=i.R(e);Ke(a)||0<a.X(t);)n-=s,i=nt(n),a=i.R(e);ct(i)&&(i=na),r=r.add(i),t=Er(t,a)}return new Mn(r,t)}E.gb=function(t){return Tr(this,t).h};E.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new W(n,this.h&t.h)};E.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new W(n,this.h|t.h)};E.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new W(n,this.h^t.h)};function _l(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new W(n,t.h)}function an(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new W(r,t.h)}kr.prototype.createWebChannel=kr.prototype.g;qe.prototype.send=qe.prototype.u;qe.prototype.open=qe.prototype.m;qe.prototype.close=qe.prototype.close;Br.NO_ERROR=0;Br.TIMEOUT=8;Br.HTTP_ERROR=6;Mu.COMPLETE="complete";Lu.EventType=ks;ks.OPEN="a";ks.CLOSE="b";ks.ERROR="c";ks.MESSAGE="d";ve.prototype.listen=ve.prototype.O;le.prototype.listenOnce=le.prototype.P;le.prototype.getLastError=le.prototype.Sa;le.prototype.getLastErrorCode=le.prototype.Ia;le.prototype.getStatus=le.prototype.da;le.prototype.getResponseJson=le.prototype.Wa;le.prototype.getResponseText=le.prototype.ja;le.prototype.send=le.prototype.ha;le.prototype.setWithCredentials=le.prototype.Oa;Ye.prototype.digest=Ye.prototype.l;Ye.prototype.reset=Ye.prototype.reset;Ye.prototype.update=Ye.prototype.j;W.prototype.add=W.prototype.add;W.prototype.multiply=W.prototype.R;W.prototype.modulo=W.prototype.gb;W.prototype.compare=W.prototype.X;W.prototype.toNumber=W.prototype.ea;W.prototype.toString=W.prototype.toString;W.prototype.getBits=W.prototype.D;W.fromNumber=nt;W.fromString=yh;var By=function(){return new kr},qy=function(){return Vr()},ji=Br,zy=Mu,Hy=tn,Cl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ky=Ns,Hs=Lu,Gy=le,Wy=Ye,pn=W;const Il="@firebase/firestore";/**
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
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let jn="9.23.0";/**
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
 */const Jt=new Ea("@firebase/firestore");function Sl(){return Jt.logLevel}function C(t,...e){if(Jt.logLevel<=z.DEBUG){const n=e.map(no);Jt.debug(`Firestore (${jn}): ${t}`,...n)}}function pt(t,...e){if(Jt.logLevel<=z.ERROR){const n=e.map(no);Jt.error(`Firestore (${jn}): ${t}`,...n)}}function wn(t,...e){if(Jt.logLevel<=z.WARN){const n=e.map(no);Jt.warn(`Firestore (${jn}): ${t}`,...n)}}function no(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function A(t="Unexpected state"){const e=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: `+t;throw pt(e),new Error(e)}function te(t,e){t||A()}function M(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class St{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_e.UNAUTHENTICATED))}shutdown(){}}class Yy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jy{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new St;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new St,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new St)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string"),new vh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new _e(e)}}class Xy{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Zy{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Xy(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t0{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.T;return this.T=i.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.T=n.token,new e0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function n0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class xh{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=n0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function H(t,e){return t<e?-1:t>e?1:0}function bn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new se(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new se(0,0))}static max(){return new R(new se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rs{constructor(e,n,s){n===void 0?n=0:n>e.length&&A(),s===void 0?s=e.length-n:s>e.length-n&&A(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),a=n.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends rs{construct(e,n,s){return new ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const s0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends rs{construct(e,n,s){return new Ie(e,n,s)}static isValidIdentifier(e){return s0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new N(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new N(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new N(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(n)}static emptyPath(){return new Ie([])}}/**
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
 */class S{constructor(e){this.path=e}static fromPath(e){return new S(ee.fromString(e))}static fromName(e){return new S(ee.fromString(e).popFirst(5))}static empty(){return new S(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new S(new ee(e.slice()))}}function r0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=R.fromTimestamp(s===1e9?new se(n+1,0):new se(n,s));return new Dt(r,S.empty(),e)}function i0(t){return new Dt(t.readTime,t.key,-1)}class Dt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Dt(R.min(),S.empty(),-1)}static max(){return new Dt(R.max(),S.empty(),-1)}}function a0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=S.comparator(t.documentKey,e.documentKey),n!==0?n:H(t.largestBatchId,e.largestBatchId))}/**
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
 */const o0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Is(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==o0)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,a=!1;e.forEach(l=>{++r,l.next(()=>{++i,a&&i===r&&n()},c=>s(c))}),a=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{a[u]=h,++l,l===i&&s(a)},h=>r(h))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class so{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}so.ct=-1;function Yr(t){return t==null}function Nr(t){return t===0&&1/t==-1/0}function c0(t){return typeof t=="number"&&Number.isInteger(t)&&!Nr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Al(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ae{constructor(e,n){this.comparator=e,this.root=n||we.EMPTY}insert(e,n){return new ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ks(this.root,e,this.comparator,!0)}}class Ks{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??we.RED,this.left=r??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new we(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,n,s,r){return this}insert(t,e,n){return new we(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jl(this.data.getIterator())}getIteratorFrom(e){return new jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Be{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Be([])}unionWith(e){let n=new je(Ie.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Be(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class bh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new bh("Invalid base64 string: "+r):r}}(e);return new Re(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const u0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(t){if(te(!!t),typeof t=="string"){let e=0;const n=u0.exec(t);if(te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xt(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
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
 */function ro(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function io(t){const e=t.mapValue.fields.__previous_value__;return ro(e)?io(e):e}function is(t){const e=Rt(t.mapValue.fields.__local_write_time__.timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class h0{constructor(e,n,s,r,i,a,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class as{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ro(t)?4:d0(t)?9007199254740991:10:A()}function at(t,e){if(t===e)return!0;const n=Zt(t);if(n!==Zt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return is(t).isEqual(is(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Rt(s.timestampValue),a=Rt(r.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Xt(s.bytesValue).isEqual(Xt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return de(s.geoPointValue.latitude)===de(r.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return de(s.integerValue)===de(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=de(s.doubleValue),a=de(r.doubleValue);return i===a?Nr(i)===Nr(a):isNaN(i)&&isNaN(a)}return!1}(t,e);case 9:return bn(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(s,r){const i=s.mapValue.fields||{},a=r.mapValue.fields||{};if(Al(i)!==Al(a))return!1;for(const l in i)if(i.hasOwnProperty(l)&&(a[l]===void 0||!at(i[l],a[l])))return!1;return!0}(t,e);default:return A()}}function os(t,e){return(t.values||[]).find(n=>at(n,e))!==void 0}function kn(t,e){if(t===e)return 0;const n=Zt(t),s=Zt(e);if(n!==s)return H(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(r,i){const a=de(r.integerValue||r.doubleValue),l=de(i.integerValue||i.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Dl(t.timestampValue,e.timestampValue);case 4:return Dl(is(t),is(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(r,i){const a=Xt(r),l=Xt(i);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const a=r.split("/"),l=i.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=H(a[c],l[c]);if(u!==0)return u}return H(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const a=H(de(r.latitude),de(i.latitude));return a!==0?a:H(de(r.longitude),de(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const a=r.values||[],l=i.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=kn(a[c],l[c]);if(u)return u}return H(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Gs.mapValue&&i===Gs.mapValue)return 0;if(r===Gs.mapValue)return 1;if(i===Gs.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=i.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=H(l[h],u[h]);if(d!==0)return d;const f=kn(a[l[h]],c[u[h]]);if(f!==0)return f}return H(l.length,u.length)}(t.mapValue,e.mapValue);default:throw A()}}function Dl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=Rt(t),s=Rt(e),r=H(n.seconds,s.seconds);return r!==0?r:H(n.nanos,s.nanos)}function En(t){return sa(t)}function sa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Rt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,S.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const a of s.values||[])i?i=!1:r+=",",r+=sa(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${sa(s.fields[l])}`;return i+"}"}(t.mapValue):A();var e,n}function Rl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ra(t){return!!t&&"integerValue"in t}function ao(t){return!!t&&"arrayValue"in t}function Pl(t){return!!t&&"nullValue"in t}function Ml(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ir(t){return!!t&&"mapValue"in t}function qn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=qn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function d0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ir(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qn(n)}setAll(e){let n=Ie.emptyPath(),s={},r=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}a?s[l.lastSegment()]=qn(a):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ir(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){nn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Fe(qn(this.value))}}function kh(t){const e=[];return nn(t.fields,(n,s)=>{const r=new Ie([n]);if(ir(s)){const i=kh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)}),new Be(e)}/**
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
 */class Ce{constructor(e,n,s,r,i,a,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ce(e,0,R.min(),R.min(),R.min(),Fe.empty(),0)}static newFoundDocument(e,n,s,r){return new Ce(e,1,n,R.min(),s,r,0)}static newNoDocument(e,n){return new Ce(e,2,n,R.min(),R.min(),Fe.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,R.min(),R.min(),Fe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _r{constructor(e,n){this.position=e,this.inclusive=n}}function Ll(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(i.field.isKeyField()?s=S.comparator(S.fromName(a.referenceValue),n.key):s=kn(a,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ol(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zn{constructor(e,n="asc"){this.field=e,this.dir=n}}function f0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Eh{}class fe extends Eh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new g0(e,n,s):n==="array-contains"?new v0(e,s):n==="in"?new x0(e,s):n==="not-in"?new w0(e,s):n==="array-contains-any"?new b0(e,s):new fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new m0(e,s):new y0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kn(n,this.value)):n!==null&&Zt(this.value)===Zt(n)&&this.matchesComparison(kn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Je extends Eh{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Je(e,n)}matches(e){return Th(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Th(t){return t.op==="and"}function Nh(t){return p0(t)&&Th(t)}function p0(t){for(const e of t.filters)if(e instanceof Je)return!1;return!0}function ia(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+En(t.value);if(Nh(t))return t.filters.map(e=>ia(e)).join(",");{const e=t.filters.map(n=>ia(n)).join(",");return`${t.op}(${e})`}}function _h(t,e){return t instanceof fe?function(n,s){return s instanceof fe&&n.op===s.op&&n.field.isEqual(s.field)&&at(n.value,s.value)}(t,e):t instanceof Je?function(n,s){return s instanceof Je&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,a)=>r&&_h(i,s.filters[a]),!0):!1}(t,e):void A()}function Ch(t){return t instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${En(e.value)}`}(t):t instanceof Je?function(e){return e.op.toString()+" {"+e.getFilters().map(Ch).join(" ,")+"}"}(t):"Filter"}class g0 extends fe{constructor(e,n,s){super(e,n,s),this.key=S.fromName(s.referenceValue)}matches(e){const n=S.comparator(e.key,this.key);return this.matchesComparison(n)}}class m0 extends fe{constructor(e,n){super(e,"in",n),this.keys=Ih("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class y0 extends fe{constructor(e,n){super(e,"not-in",n),this.keys=Ih("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ih(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>S.fromName(s.referenceValue))}class v0 extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ao(n)&&os(n.arrayValue,this.value)}}class x0 extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&os(this.value.arrayValue,n)}}class w0 extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!os(this.value.arrayValue,n)}}class b0 extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ao(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>os(this.value.arrayValue,s))}}/**
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
 */class k0{constructor(e,n=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.dt=null}}function Fl(t,e=null,n=[],s=[],r=null,i=null,a=null){return new k0(t,e,n,s,r,i,a)}function oo(t){const e=M(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ia(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Yr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>En(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>En(s)).join(",")),e.dt=n}return e.dt}function lo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!f0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_h(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ol(t.startAt,e.startAt)&&Ol(t.endAt,e.endAt)}function aa(t){return S.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class As{constructor(e,n=null,s=[],r=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function E0(t,e,n,s,r,i,a,l){return new As(t,e,n,s,r,i,a,l)}function co(t){return new As(t)}function Ul(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ah(t){return t.collectionGroup!==null}function gn(t){const e=M(t);if(e.wt===null){e.wt=[];const n=uo(e),s=Sh(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new zn(n)),e.wt.push(new zn(Ie.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new zn(Ie.keyField(),i))}}}return e.wt}function gt(t){const e=M(t);if(!e._t)if(e.limitType==="F")e._t=Fl(e.path,e.collectionGroup,gn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of gn(e)){const a=i.dir==="desc"?"asc":"desc";n.push(new zn(i.field,a))}const s=e.endAt?new _r(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new _r(e.startAt.position,e.startAt.inclusive):null;e._t=Fl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function oa(t,e){e.getFirstInequalityField(),uo(t);const n=t.filters.concat([e]);return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function la(t,e,n){return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jr(t,e){return lo(gt(t),gt(e))&&t.limitType===e.limitType}function jh(t){return`${oo(gt(t))}|lt:${t.limitType}`}function ca(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ch(s)).join(", ")}]`),Yr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>En(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>En(s)).join(",")),`Target(${n})`}(gt(t))}; limitType=${t.limitType})`}function Xr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):S.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of gn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,a){const l=Ll(r,i,a);return r.inclusive?l<=0:l<0}(n.startAt,gn(n),s)||n.endAt&&!function(r,i,a){const l=Ll(r,i,a);return r.inclusive?l>=0:l>0}(n.endAt,gn(n),s))}(t,e)}function T0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dh(t){return(e,n)=>{let s=!1;for(const r of gn(t)){const i=N0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function N0(t,e,n){const s=t.field.isKeyField()?S.comparator(e.key,n.key):function(r,i,a){const l=i.data.field(r),c=a.data.field(r);return l!==null&&c!==null?kn(l,c):A()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return A()}}/**
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
 */class Dn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
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
 */const _0=new ae(S.comparator);function mt(){return _0}const Rh=new ae(S.comparator);function Fn(...t){let e=Rh;for(const n of t)e=e.insert(n.key,n);return e}function Ph(t){let e=Rh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function zt(){return Hn()}function Mh(){return Hn()}function Hn(){return new Dn(t=>t.toString(),(t,e)=>t.isEqual(e))}const C0=new ae(S.comparator),I0=new je(S.comparator);function U(...t){let e=I0;for(const n of t)e=e.add(n);return e}const S0=new je(H);function A0(){return S0}/**
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
 */function Lh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(e)?"-0":e}}function Oh(t){return{integerValue:""+t}}function j0(t,e){return c0(e)?Oh(e):Lh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Zr{constructor(){this._=void 0}}function D0(t,e,n){return t instanceof ls?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&ro(r)&&(r=io(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof cs?Uh(t,e):t instanceof us?$h(t,e):function(s,r){const i=Fh(s,r),a=$l(i)+$l(s.gt);return ra(i)&&ra(s.gt)?Oh(a):Lh(s.serializer,a)}(t,e)}function R0(t,e,n){return t instanceof cs?Uh(t,e):t instanceof us?$h(t,e):n}function Fh(t,e){return t instanceof Cr?ra(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ls extends Zr{}class cs extends Zr{constructor(e){super(),this.elements=e}}function Uh(t,e){const n=Vh(e);for(const s of t.elements)n.some(r=>at(r,s))||n.push(s);return{arrayValue:{values:n}}}class us extends Zr{constructor(e){super(),this.elements=e}}function $h(t,e){let n=Vh(e);for(const s of t.elements)n=n.filter(r=>!at(r,s));return{arrayValue:{values:n}}}class Cr extends Zr{constructor(e,n){super(),this.serializer=e,this.gt=n}}function $l(t){return de(t.integerValue||t.doubleValue)}function Vh(t){return ao(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class P0{constructor(e,n){this.field=e,this.transform=n}}function M0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof cs&&s instanceof cs||n instanceof us&&s instanceof us?bn(n.elements,s.elements,at):n instanceof Cr&&s instanceof Cr?at(n.gt,s.gt):n instanceof ls&&s instanceof ls}(t.transform,e.transform)}class L0{constructor(e,n){this.version=e,this.transformResults=n}}class Ue{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ar(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ei{}function Bh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ti(t.key,Ue.none()):new js(t.key,t.data,Ue.none());{const n=t.data,s=Fe.empty();let r=new je(Ie.comparator);for(let i of e.fields)if(!r.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Ft(t.key,s,new Be(r.toArray()),Ue.none())}}function O0(t,e,n){t instanceof js?function(s,r,i){const a=s.value.clone(),l=Bl(s.fieldTransforms,r,i.transformResults);a.setAll(l),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ft?function(s,r,i){if(!ar(s.precondition,r))return void r.convertToUnknownDocument(i.version);const a=Bl(s.fieldTransforms,r,i.transformResults),l=r.data;l.setAll(qh(s)),l.setAll(a),r.convertToFoundDocument(i.version,l).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Kn(t,e,n,s){return t instanceof js?function(r,i,a,l){if(!ar(r.precondition,i))return a;const c=r.value.clone(),u=ql(r.fieldTransforms,l,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ft?function(r,i,a,l){if(!ar(r.precondition,i))return a;const c=ql(r.fieldTransforms,l,i),u=i.data;return u.setAll(qh(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,i,a){return ar(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a}(t,e,n)}function F0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Fh(s.transform,r||null);i!=null&&(n===null&&(n=Fe.empty()),n.set(s.field,i))}return n||null}function Vl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&bn(n,s,(r,i)=>M0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class js extends ei{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ft extends ei{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bl(t,e,n){const s=new Map;te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,R0(a,l,n[r]))}return s}function ql(t,e,n){const s=new Map;for(const r of t){const i=r.transform,a=n.data.field(r.field);s.set(r.field,D0(i,a,e))}return s}class ti extends ei{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class U0 extends ei{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&O0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Kn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Kn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Mh();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(r.key)?null:l;const c=Bh(a,l);c!==null&&s.set(r.key,c),a.isValidDocument()||a.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),U())}isEqual(e){return this.batchId===e.batchId&&bn(this.mutations,e.mutations,(n,s)=>Vl(n,s))&&bn(this.baseMutations,e.baseMutations,(n,s)=>Vl(n,s))}}class ho{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){te(e.mutations.length===s.length);let r=C0;const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new ho(e,n,s,r)}}/**
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
 */class V0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class B0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var he,V;function q0(t){switch(t){default:return A();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function zh(t){if(t===void 0)return pt("GRPC error has no .code"),x.UNKNOWN;switch(t){case he.OK:return x.OK;case he.CANCELLED:return x.CANCELLED;case he.UNKNOWN:return x.UNKNOWN;case he.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case he.INTERNAL:return x.INTERNAL;case he.UNAVAILABLE:return x.UNAVAILABLE;case he.UNAUTHENTICATED:return x.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case he.NOT_FOUND:return x.NOT_FOUND;case he.ALREADY_EXISTS:return x.ALREADY_EXISTS;case he.PERMISSION_DENIED:return x.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case he.ABORTED:return x.ABORTED;case he.OUT_OF_RANGE:return x.OUT_OF_RANGE;case he.UNIMPLEMENTED:return x.UNIMPLEMENTED;case he.DATA_LOSS:return x.DATA_LOSS;default:return A()}}(V=he||(he={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ws}static getOrCreateInstance(){return Ws===null&&(Ws=new fo),Ws}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ws=null;/**
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
 */function z0(){return new TextEncoder}/**
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
 */const H0=new pn([4294967295,4294967295],0);function zl(t){const e=z0().encode(t),n=new Wy;return n.update(e),new Uint8Array(n.digest())}function Hl(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pn([n,s],0),new pn([r,i],0)]}class po{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Un(`Invalid padding: ${n}`);if(s<0)throw new Un(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Un(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=pn.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(pn.fromNumber(s)));return r.compare(H0)===1&&(r=new pn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=zl(e),[s,r]=Hl(n);for(let i=0;i<this.hashCount;i++){const a=this.Et(s,r,i);if(!this.At(a))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new po(i,r,n);return s.forEach(l=>a.insert(l)),a}insert(e){if(this.It===0)return;const n=zl(e),[s,r]=Hl(n);for(let i=0;i<this.hashCount;i++){const a=this.Et(s,r,i);this.Rt(a)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ni{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ni(R.min(),r,new ae(H),mt(),U())}}class Ds{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ds(s,n,U(),U(),U())}}/**
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
 */class or{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Hh{constructor(e,n){this.targetId=e,this.Vt=n}}class Kh{constructor(e,n,s=Re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kl{constructor(){this.St=0,this.Dt=Wl(),this.Ct=Re.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=U(),n=U(),s=U();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:A()}}),new Ds(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Wl()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class K0{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=mt(),this.zt=Gl(),this.Wt=new ae(H)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:A()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const a=i.target;if(aa(a))if(r===0){const l=new S(a.path);this.Yt(s,l,Ce.newNoDocument(l,R.min()))}else te(r===1);else{const l=this.ie(s);if(l!==r){const c=this.re(e,l);if(c!==0){this.ee(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=fo.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,h,d){var f,p,g,m,v,w;const k={localCacheCount:h,existenceFilterCount:d.count},I=d.unchangedNames;return I&&(k.bloomFilter={applied:u===0,hashCount:(f=I==null?void 0:I.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(g=(p=I==null?void 0:I.bits)===null||p===void 0?void 0:p.bitmap)===null||g===void 0?void 0:g.length)!==null&&m!==void 0?m:0,padding:(w=(v=I==null?void 0:I.bits)===null||v===void 0?void 0:v.padding)!==null&&w!==void 0?w:0}),k}(c,l,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=s;let c,u;try{c=Xt(i).toUint8Array()}catch(h){if(h instanceof bh)return wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{u=new po(c,a,l)}catch(h){return wn(h instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return u.It===0?1:r!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const a=this.Gt.ue(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;n.vt(l)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,a)=>{const l=this.se(a);if(l){if(i.current&&aa(l.target)){const c=new S(l.target.path);this.jt.get(c)!==null||this.ae(a,c)||this.Yt(a,c,Ce.newNoDocument(c,e))}i.Mt&&(n.set(a,i.Ot()),i.Ft())}});let s=U();this.zt.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const u=this.se(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.jt.forEach((i,a)=>a.setReadTime(e));const r=new ni(e,n,this.Wt,this.jt,s);return this.jt=mt(),this.zt=Gl(),this.Wt=new ae(H),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Kl,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new je(H),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Kl),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Gl(){return new ae(S.comparator)}function Wl(){return new ae(S.comparator)}const G0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Q0=(()=>({and:"AND",or:"OR"}))();class Y0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ua(t,e){return t.useProto3Json||Yr(e)?e:{value:e}}function Ir(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gh(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function J0(t,e){return Ir(t,e.toTimestamp())}function it(t){return te(!!t),R.fromTimestamp(function(e){const n=Rt(e);return new se(n.seconds,n.nanos)}(t))}function go(t,e){return function(n){return new ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wh(t){const e=ee.fromString(t);return te(Xh(e)),e}function ha(t,e){return go(t.databaseId,e.path)}function Di(t,e){const n=Wh(e);if(n.get(1)!==t.databaseId.projectId)throw new N(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new S(Qh(n))}function da(t,e){return go(t.databaseId,e)}function X0(t){const e=Wh(t);return e.length===4?ee.emptyPath():Qh(e)}function fa(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qh(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ql(t,e,n){return{name:ha(t,e),fields:n.value.mapValue.fields}}function Z0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(te(u===void 0||typeof u=="string"),Re.fromBase64String(u||"")):(te(u===void 0||u instanceof Uint8Array),Re.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(c){const u=c.code===void 0?x.UNKNOWN:zh(c.code);return new N(u,c.message||"")}(a);n=new Kh(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Di(t,s.document.name),i=it(s.document.updateTime),a=s.document.createTime?it(s.document.createTime):R.min(),l=new Fe({mapValue:{fields:s.document.fields}}),c=Ce.newFoundDocument(r,i,a,l),u=s.targetIds||[],h=s.removedTargetIds||[];n=new or(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Di(t,s.document),i=s.readTime?it(s.readTime):R.min(),a=Ce.newNoDocument(r,i),l=s.removedTargetIds||[];n=new or([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Di(t,s.document),i=s.removedTargetIds||[];n=new or([],i,r,null)}else{if(!("filter"in e))return A();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new B0(r,i),l=s.targetId;n=new Hh(l,a)}}return n}function ev(t,e){let n;if(e instanceof js)n={update:Ql(t,e.key,e.value)};else if(e instanceof ti)n={delete:ha(t,e.key)};else if(e instanceof Ft)n={update:Ql(t,e.key,e.data),updateMask:cv(e.fieldMask)};else{if(!(e instanceof U0))return A();n={verify:ha(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const a=i.transform;if(a instanceof ls)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof us)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cr)return{fieldPath:i.field.canonicalString(),increment:a.gt};throw A()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:J0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:A()}(t,e.precondition)),n}function tv(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?it(s.updateTime):it(r);return i.isEqual(R.min())&&(i=it(r)),new L0(i,s.transformResults||[])}(n,e))):[]}function nv(t,e){return{documents:[da(t,e.path)]}}function sv(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=da(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=da(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Jh(Je.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:on(h.field),direction:av(h.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const a=ua(t,e.limit);var l;return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rv(t){let e=X0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){te(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(h){const d=Yh(h);return d instanceof Je&&Nh(d)?d.getFilters():[d]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(h=>function(d){return new zn(ln(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let l=null;n.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,Yr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new _r(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new _r(f,d)}(n.endAt)),E0(e,r,a,i,l,"F",c,u)}function iv(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ln(e.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ln(e.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ln(e.unaryFilter.field);return fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ln(e.unaryFilter.field);return fe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(t):t.fieldFilter!==void 0?function(e){return fe.create(ln(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Je.create(e.compositeFilter.filters.map(n=>Yh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(t):A()}function av(t){return G0[t]}function ov(t){return W0[t]}function lv(t){return Q0[t]}function on(t){return{fieldPath:t.canonicalString()}}function ln(t){return Ie.fromServerFormat(t.fieldPath)}function Jh(t){return t instanceof fe?function(e){if(e.op==="=="){if(Ml(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NAN"}};if(Pl(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ml(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NOT_NAN"}};if(Pl(e.value))return{unaryFilter:{field:on(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(e.field),op:ov(e.op),value:e.value}}}(t):t instanceof Je?function(e){const n=e.getFilters().map(s=>Jh(s));return n.length===1?n[0]:{compositeFilter:{op:lv(e.op),filters:n}}}(t):A()}function cv(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Tt{constructor(e,n,s,r,i=R.min(),a=R.min(),l=Re.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uv{constructor(e){this.fe=e}}function hv(t){const e=rv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?la(e,e.limit,"L"):e}/**
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
 */class dv{constructor(){this.rn=new fv}addToCollectionParentIndex(e,n){return this.rn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Dt.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class fv{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(ee.comparator)).toArray()}}/**
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
 */class Tn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Tn(0)}static Mn(){return new Tn(-1)}}/**
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
 */class pv{constructor(){this.changes=new Dn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class gv{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mv{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Kn(s.mutation,r,Be.empty(),se.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,U()).next(()=>s))}getLocalViewOfDocuments(e,n,s=U()){const r=zt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let a=Fn();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const s=zt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,U()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,s,r){let i=mt();const a=Hn(),l=Hn();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ft)?i=i.insert(u.key,u):h!==void 0?(a.set(u.key,h.mutation.getFieldMask()),Kn(h.mutation,u,h.mutation.getFieldMask(),se.now())):a.set(u.key,Be.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>a.set(u,h)),n.forEach((u,h)=>{var d;return l.set(u,new gv(h,(d=a.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const s=Hn();let r=new ae((a,l)=>a-l),i=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||Be.empty();h=l.applyToLocalView(u,h),s.set(c,h);const d=(r.get(l.batchId)||U()).add(c);r=r.insert(l.batchId,d)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=Mh();h.forEach(f=>{if(!i.has(f)){const p=Bh(n.get(f),s.get(f));p!==null&&d.set(f,p),i=i.add(f)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,d))}return b.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return S.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ah(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(zt());let l=-1,c=i;return a.next(u=>b.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?b.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{c=c.insert(h,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,U())).next(h=>({batchId:l,changes:Ph(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new S(n)).next(s=>{let r=Fn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Fn();return this.indexManager.getCollectionParents(e,r).next(a=>b.forEach(a,l=>{const c=function(u,h){return new As(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((h,d)=>{i=i.insert(h,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((l,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ce.newInvalidDocument(u)))});let a=Fn();return i.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Kn(u.mutation,c,Be.empty(),se.now()),Xr(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class yv{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return b.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:it(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:hv(s.bundledQuery),readTime:it(s.readTime)}}(n)),b.resolve()}}/**
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
 */class vv{constructor(){this.overlays=new ae(S.comparator),this.ls=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zt();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=zt(),i=n.length+1,a=new S(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ae((u,h)=>u-h);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=zt(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=zt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=r)););return b.resolve(l)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new V0(n,s));let i=this.ls.get(n);i===void 0&&(i=U(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class mo{constructor(){this.fs=new je(ye.ds),this.ws=new je(ye._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new ye(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new ye(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new S(new ee([])),s=new ye(n,e),r=new ye(n,e+1),i=[];return this.ws.forEachInRange([s,r],a=>{this.ys(a),i.push(a.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new S(new ee([])),s=new ye(n,e),r=new ye(n,e+1);let i=U();return this.ws.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new ye(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ye{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return S.comparator(e.key,n.key)||H(e.As,n.As)}static _s(e,n){return H(e.As,n.As)||S.comparator(e.key,n.key)}}/**
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
 */class xv{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new je(ye.ds)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $0(i,n,s,r);this.mutationQueue.push(a);for(const l of r)this.Rs=this.Rs.add(new ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,n){return b.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ye(n,0),r=new ye(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],a=>{const l=this.Ps(a.As);i.push(l)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(H);return n.forEach(r=>{const i=new ye(r,0),a=new ye(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,a],l=>{s=s.add(l.As)})}),b.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;S.isDocumentKey(i)||(i=i.child(""));const a=new ye(new S(i),0);let l=new je(H);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.As)),!0)},a),b.resolve(this.Vs(l))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){te(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return b.forEach(n.mutations,r=>{const i=new ye(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new ye(n,0),r=this.Rs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wv{constructor(e){this.Ds=e,this.docs=new ae(S.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,a=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let s=mt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ce.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=mt();const a=n.path,l=new S(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||a0(i0(h),s)<=0||(r.has(h.key)||Xr(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){A()}Cs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new bv(this)}getSize(e){return b.resolve(this.size)}}class bv extends pv{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class kv{constructor(e){this.persistence=e,this.xs=new Dn(n=>oo(n),lo),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Ns=0,this.ks=new mo,this.targetCount=0,this.Ms=Tn.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),b.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Tn(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Fn(n),b.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((a,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.xs.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.ks.containsKey(n))}}/**
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
 */class Ev{constructor(e,n){this.$s={},this.overlays={},this.Os=new so(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new kv(this),this.indexManager=new dv,this.remoteDocumentCache=function(s){return new wv(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new uv(n),this.qs=new yv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vv,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new xv(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){C("MemoryPersistence","Starting transaction:",e);const r=new Tv(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return b.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class Tv extends l0{constructor(e){super(),this.currentSequenceNumber=e}}class yo{constructor(e){this.persistence=e,this.Qs=new mo,this.js=null}static zs(e){return new yo(e)}get Ws(){if(this.js)return this.js;throw A()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),b.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ws,s=>{const r=S.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,R.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return b.or([()=>b.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class vo{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=U(),r=U();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new vo(e,n.fromCache,s,r)}}/**
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
 */class Nv{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Ul(n))return b.resolve(null);let s=gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=la(n,null,"F"),s=gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const a=U(...i);return this.Ui.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ji(n,l);return this.zi(n,u,a,c.readTime)?this.Ki(e,la(n,null,"F")):this.Wi(e,u,n,c)}))})))}Gi(e,n,s,r){return Ul(n)||r.isEqual(R.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const a=this.ji(n,i);return this.zi(n,a,s,r)?this.Qi(e,n):(Sl()<=z.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ca(n)),this.Wi(e,a,n,r0(r,-1)))})}ji(e,n){let s=new je(Dh(e));return n.forEach((r,i)=>{Xr(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Sl()<=z.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",ca(n)),this.Ui.getDocumentsMatchingQuery(e,n,Dt.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class _v{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new ae(H),this.Yi=new Dn(i=>oo(i),lo),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mv(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Cv(t,e,n,s){return new _v(t,e,n,s)}async function Zh(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const a=[],l=[];let c=U();for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({er:u,removedBatchIds:a,addedBatchIds:l}))})})}function Iv(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=b.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(g=>{const m=c.docVersions.get(p);te(m!==null),g.version.compareTo(m)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=U();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ed(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Sv(t,e){const n=M(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const l=[];e.targetChanges.forEach((h,d)=>{const f=r.get(d);if(!f)return;l.push(n.Bs.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(i,h.addedDocuments,d)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(Re.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),r=r.insert(d,p),function(g,m,v){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,p,h)&&l.push(n.Bs.updateTargetData(i,p))});let c=mt(),u=U();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(Av(i,a,e.documentUpdates).next(h=>{c=h.nr,u=h.sr})),!s.isEqual(R.min())){const h=n.Bs.getLastRemoteSnapshotVersion(i).next(d=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(h)}return b.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ji=r,i))}function Av(t,e,n){let s=U(),r=U();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let a=mt();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):C("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{nr:a,sr:r}})}function jv(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Dv(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Bs.allocateTargetId(s).next(a=>(r=new Tt(e,a,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function pa(t,e,n){const s=M(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Ss(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Yl(t,e,n){const s=M(t);let r=R.min(),i=U();return s.persistence.runTransaction("Execute query","readonly",a=>function(l,c,u){const h=M(l),d=h.Yi.get(u);return d!==void 0?b.resolve(h.Ji.get(d)):h.Bs.getTargetData(c,u)}(s,a,gt(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(a,e,n?r:R.min(),n?i:U())).next(l=>(Rv(s,T0(e),l),{documents:l,ir:i})))}function Rv(t,e,n){let s=t.Xi.get(e)||R.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Jl{constructor(){this.activeTargetIds=A0()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pv{constructor(){this.Hr=new Jl,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Jl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mv{Yr(e){}shutdown(){}}/**
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
 */class Xl{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qs=null;function Ri(){return Qs===null?Qs=268435456+Math.round(2147483648*Math.random()):Qs++,"0x"+Qs.toString(16)}/**
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
 */const Lv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ov{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ne="WebChannelConnection";class Fv extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const a=Ri(),l=this.To(e,n);C("RestConnection",`Sending RPC '${e}' ${a}:`,l,s);const c={};return this.Eo(c,r,i),this.Ao(e,l,c,s).then(u=>(C("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw wn("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(e,n,s,r,i,a){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=Lv[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Ri();return new Promise((a,l)=>{const c=new Gy;c.setWithCredentials(!0),c.listenOnce(zy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ji.NO_ERROR:const h=c.getResponseJson();C(Ne,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),a(h);break;case ji.TIMEOUT:C(Ne,`RPC '${e}' ${i} timed out`),l(new N(x.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const d=c.getStatus();if(C(Ne,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const g=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(v)>=0?v:x.UNKNOWN}(p.status);l(new N(g,p.message))}else l(new N(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new N(x.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{C(Ne,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);C(Ne,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Ro(e,n,s){const r=Ri(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=By(),l=qy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Ky({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");C(Ne,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=a.createWebChannel(h,c);let f=!1,p=!1;const g=new Ov({ro:v=>{p?C(Ne,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(f||(C(Ne,`Opening RPC '${e}' stream ${r} transport.`),d.open(),f=!0),C(Ne,`RPC '${e}' stream ${r} sending:`,v),d.send(v))},oo:()=>d.close()}),m=(v,w,k)=>{v.listen(w,I=>{try{k(I)}catch(L){setTimeout(()=>{throw L},0)}})};return m(d,Hs.EventType.OPEN,()=>{p||C(Ne,`RPC '${e}' stream ${r} transport opened.`)}),m(d,Hs.EventType.CLOSE,()=>{p||(p=!0,C(Ne,`RPC '${e}' stream ${r} transport closed`),g.wo())}),m(d,Hs.EventType.ERROR,v=>{p||(p=!0,wn(Ne,`RPC '${e}' stream ${r} transport errored:`,v),g.wo(new N(x.UNAVAILABLE,"The operation could not be completed")))}),m(d,Hs.EventType.MESSAGE,v=>{var w;if(!p){const k=v.data[0];te(!!k);const I=k,L=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(L){C(Ne,`RPC '${e}' stream ${r} received error:`,L);const B=L.status;let re=function(J){const _=he[J];if(_!==void 0)return zh(_)}(B),pe=L.message;re===void 0&&(re=x.INTERNAL,pe="Unknown error status: "+B+" with message "+L.message),p=!0,g.wo(new N(re,pe)),d.close()}else C(Ne,`RPC '${e}' stream ${r} received:`,k),g._o(k)}}),m(l,Hy.STAT_EVENT,v=>{v.stat===Cl.PROXY?C(Ne,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Cl.NOPROXY&&C(Ne,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Pi(){return typeof document<"u"?document:null}/**
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
 */function si(t){return new Y0(t,!0)}/**
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
 */class td{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&C("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class nd{constructor(e,n,s,r,i,a,l,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new td(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new N(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uv extends nd{constructor(e,n,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Z0(this.serializer,e),s=function(r){if(!("targetChange"in r))return R.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?R.min():i.readTime?it(i.readTime):R.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=fa(this.serializer),n.addTarget=function(r,i){let a;const l=i.target;if(a=aa(l)?{documents:nv(r,l)}:{query:sv(r,l)},a.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){a.resumeToken=Gh(r,i.resumeToken);const c=ua(r,i.expectedCount);c!==null&&(a.expectedCount=c)}else if(i.snapshotVersion.compareTo(R.min())>0){a.readTime=Ir(r,i.snapshotVersion.toTimestamp());const c=ua(r,i.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=iv(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=fa(this.serializer),n.removeTarget=e,this.Wo(n)}}class $v extends nd{constructor(e,n,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=tv(e.writeResults,e.commitTime),s=it(e.commitTime);return this.listener.cu(s,n)}return te(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=fa(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ev(this.serializer,s))};this.Wo(n)}}/**
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
 */class Vv extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new N(x.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(x.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.vo(e,n,s,i,a,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(x.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Bv{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(pt(n),this.mu=!1):C("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class qv{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(a=>{s.enqueueAndForget(async()=>{sn(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=M(l);c.vu.add(4),await Rs(c),c.bu.set("Unknown"),c.vu.delete(4),await ri(c)}(this))})}),this.bu=new Bv(s,r)}}async function ri(t){if(sn(t))for(const e of t.Ru)await e(!0)}async function Rs(t){for(const e of t.Ru)await e(!1)}function sd(t,e){const n=M(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),bo(n)?wo(n):Rn(n).Ko()&&xo(n,e))}function rd(t,e){const n=M(t),s=Rn(n);n.Au.delete(e),s.Ko()&&id(n,e),n.Au.size===0&&(s.Ko()?s.jo():sn(n)&&n.bu.set("Unknown"))}function xo(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(R.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rn(t).su(e)}function id(t,e){t.Vu.qt(e),Rn(t).iu(e)}function wo(t){t.Vu=new K0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Rn(t).start(),t.bu.gu()}function bo(t){return sn(t)&&!Rn(t).Uo()&&t.Au.size>0}function sn(t){return M(t).vu.size===0}function ad(t){t.Vu=void 0}async function zv(t){t.Au.forEach((e,n)=>{xo(t,e)})}async function Hv(t,e){ad(t),bo(t)?(t.bu.Iu(e),wo(t)):t.bu.set("Unknown")}async function Kv(t,e,n){if(t.bu.set("Online"),e instanceof Kh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const a of r.targetIds)s.Au.has(a)&&(await s.remoteSyncer.rejectListen(a,i),s.Au.delete(a),s.Vu.removeTarget(a))}(t,e)}catch(s){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sr(t,s)}else if(e instanceof or?t.Vu.Ht(e):e instanceof Hh?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(R.min()))try{const s=await ed(t.localStore);n.compareTo(s)>=0&&await function(r,i){const a=r.Vu.ce(i);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.Au.get(c);u&&r.Au.set(c,u.withResumeToken(l.resumeToken,i))}}),a.targetMismatches.forEach((l,c)=>{const u=r.Au.get(l);if(!u)return;r.Au.set(l,u.withResumeToken(Re.EMPTY_BYTE_STRING,u.snapshotVersion)),id(r,l);const h=new Tt(u.target,l,c,u.sequenceNumber);xo(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){C("RemoteStore","Failed to raise snapshot:",s),await Sr(t,s)}}async function Sr(t,e,n){if(!Ss(e))throw e;t.vu.add(1),await Rs(t),t.bu.set("Offline"),n||(n=()=>ed(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ri(t)})}function od(t,e){return e().catch(n=>Sr(t,n,e))}async function ii(t){const e=M(t),n=Pt(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Gv(e);)try{const r=await jv(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,Wv(e,r)}catch(r){await Sr(e,r)}ld(e)&&cd(e)}function Gv(t){return sn(t)&&t.Eu.length<10}function Wv(t,e){t.Eu.push(e);const n=Pt(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function ld(t){return sn(t)&&!Pt(t).Uo()&&t.Eu.length>0}function cd(t){Pt(t).start()}async function Qv(t){Pt(t).hu()}async function Yv(t){const e=Pt(t);for(const n of t.Eu)e.uu(n.mutations)}async function Jv(t,e,n){const s=t.Eu.shift(),r=ho.from(s,e,n);await od(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ii(t)}async function Xv(t,e){e&&Pt(t).ou&&await async function(n,s){if(r=s.code,q0(r)&&r!==x.ABORTED){const i=n.Eu.shift();Pt(n).Qo(),await od(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ii(n)}var r}(t,e),ld(t)&&cd(t)}async function Zl(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const s=sn(n);n.vu.add(3),await Rs(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ri(n)}async function Zv(t,e){const n=M(t);e?(n.vu.delete(2),await ri(n)):e||(n.vu.add(2),await Rs(n),n.bu.set("Unknown"))}function Rn(t){return t.Su||(t.Su=function(e,n,s){const r=M(e);return r.fu(),new Uv(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:zv.bind(null,t),ao:Hv.bind(null,t),nu:Kv.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),bo(t)?wo(t):t.bu.set("Unknown")):(await t.Su.stop(),ad(t))})),t.Su}function Pt(t){return t.Du||(t.Du=function(e,n,s){const r=M(e);return r.fu(),new $v(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:Qv.bind(null,t),ao:Xv.bind(null,t),au:Yv.bind(null,t),cu:Jv.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ii(t)):(await t.Du.stop(),t.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class ko{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,s,r,i){const a=Date.now()+s,l=new ko(e,n,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eo(t,e){if(pt("AsyncQueue",`${e}: ${t}`),Ss(t))return new N(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||S.comparator(n.key,s.key):(n,s)=>S.comparator(n.key,s.key),this.keyedMap=Fn(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ec{constructor(){this.Cu=new ae(S.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):A():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Nn{constructor(e,n,s,r,i,a,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Nn(e,n,mn.emptySet(n),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class ex{constructor(){this.Nu=void 0,this.listeners=[]}}class tx{constructor(){this.queries=new Dn(e=>jh(e),Jr),this.onlineState="Unknown",this.ku=new Set}}async function ud(t,e){const n=M(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ex),r)try{i.Nu=await n.onListen(s)}catch(a){const l=Eo(a,`Initialization of query '${ca(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&To(n)}async function hd(t,e){const n=M(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const a=i.listeners.indexOf(e);a>=0&&(i.listeners.splice(a,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function nx(t,e){const n=M(t);let s=!1;for(const r of e){const i=r.query,a=n.queries.get(i);if(a){for(const l of a.listeners)l.$u(r)&&(s=!0);a.Nu=r}}s&&To(n)}function sx(t,e,n){const s=M(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function To(t){t.ku.forEach(e=>{e.next()})}class dd{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Nn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class fd{constructor(e){this.key=e}}class pd{constructor(e){this.key=e}}class rx{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=U(),this.mutatedKeys=U(),this.tc=Dh(e),this.ec=new mn(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new ec,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,a=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const f=r.get(h),p=Xr(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?g!==m&&(s.track({type:3,doc:p}),v=!0):this.rc(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.tc(p,c)>0||u&&this.tc(p,u)<0)&&(l=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||u)&&(l=!0)),v&&(p?(a=a.add(p),i=m?i.add(h):i.delete(h)):(a=a.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const h=this.query.limitType==="F"?a.last():a.first();a=a.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ec:a,ic:s,zi:l,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((u,h)=>function(d,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return p(d)-p(f)}(u.type,h.type)||this.tc(u.doc,h.doc)),this.oc(s);const a=n?this.uc():[],l=this.Zu.size===0&&this.current?1:0,c=l!==this.Xu;return this.Xu=l,i.length!==0||c?{snapshot:new Nn(this.query,e.ec,r,i,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:a}:{cc:a}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ec,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=U(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new pd(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new fd(s))}),n}hc(e){this.Yu=e.ir,this.Zu=U();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Nn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ix{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ax{constructor(e){this.key=e,this.fc=!1}}class ox{constructor(e,n,s,r,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.dc={},this.wc=new Dn(l=>jh(l),Jr),this._c=new Map,this.mc=new Set,this.gc=new ae(S.comparator),this.yc=new Map,this.Ic=new mo,this.Tc={},this.Ec=new Map,this.Ac=Tn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function lx(t,e){const n=vx(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const a=await Dv(n.localStore,gt(e)),l=n.sharedClientState.addLocalQueryTarget(a.targetId);s=a.targetId,r=await cx(n,e,s,l==="current",a.resumeToken),n.isPrimaryClient&&sd(n.remoteStore,a)}return r}async function cx(t,e,n,s,r){t.Rc=(d,f,p)=>async function(g,m,v,w){let k=m.view.sc(v);k.zi&&(k=await Yl(g.localStore,m.query,!1).then(({documents:B})=>m.view.sc(B,k)));const I=w&&w.targetChanges.get(m.targetId),L=m.view.applyChanges(k,g.isPrimaryClient,I);return nc(g,m.targetId,L.cc),L.snapshot}(t,d,f,p);const i=await Yl(t.localStore,e,!0),a=new rx(e,i.ir),l=a.sc(i.documents),c=Ds.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=a.applyChanges(l,t.isPrimaryClient,c);nc(t,n,u.cc);const h=new ix(e,n,a);return t.wc.set(e,h),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function ux(t,e){const n=M(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Jr(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await pa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),rd(n.remoteStore,s.targetId),ga(n,s.targetId)}).catch(Is)):(ga(n,s.targetId),await pa(n.localStore,s.targetId,!0))}async function hx(t,e,n){const s=xx(t);try{const r=await function(i,a){const l=M(i),c=se.now(),u=a.reduce((f,p)=>f.add(p.key),U());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=mt(),g=U();return l.Zi.getEntries(f,u).next(m=>{p=m,p.forEach((v,w)=>{w.isValidDocument()||(g=g.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(m=>{h=m;const v=[];for(const w of a){const k=F0(w,h.get(w.key).overlayedDocument);k!=null&&v.push(new Ft(w.key,k,kh(k.value.mapValue),Ue.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,v,a)}).next(m=>{d=m;const v=m.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(f,m.batchId,v)})}).then(()=>({batchId:d.batchId,changes:Ph(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,a,l){let c=i.Tc[i.currentUser.toKey()];c||(c=new ae(H)),c=c.insert(a,l),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ps(s,r.changes),await ii(s.remoteStore)}catch(r){const i=Eo(r,"Failed to persist write");n.reject(i)}}async function gd(t,e){const n=M(t);try{const s=await Sv(n.localStore,e);e.targetChanges.forEach((r,i)=>{const a=n.yc.get(i);a&&(te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.fc=!0:r.modifiedDocuments.size>0?te(a.fc):r.removedDocuments.size>0&&(te(a.fc),a.fc=!1))}),await Ps(n,s,e)}catch(s){await Is(s)}}function tc(t,e,n){const s=M(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,a)=>{const l=a.view.Mu(e);l.snapshot&&r.push(l.snapshot)}),function(i,a){const l=M(i);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Mu(a)&&(c=!0)}),c&&To(l)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dx(t,e,n){const s=M(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let a=new ae(S.comparator);a=a.insert(i,Ce.newNoDocument(i,R.min()));const l=U().add(i),c=new ni(R.min(),new Map,new ae(H),a,l);await gd(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),No(s)}else await pa(s.localStore,e,!1).then(()=>ga(s,e,n)).catch(Is)}async function fx(t,e){const n=M(t),s=e.batch.batchId;try{const r=await Iv(n.localStore,e);yd(n,s,null),md(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ps(n,r)}catch(r){await Is(r)}}async function px(t,e,n){const s=M(t);try{const r=await function(i,a){const l=M(i);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(te(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);yd(s,e,n),md(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ps(s,r)}catch(r){await Is(r)}}function md(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function yd(t,e,n){const s=M(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function ga(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||vd(t,s)})}function vd(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(rd(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),No(t))}function nc(t,e,n){for(const s of n)s instanceof fd?(t.Ic.addReference(s.key,e),gx(t,s)):s instanceof pd?(C("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||vd(t,s.key)):A()}function gx(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(C("SyncEngine","New document in limbo: "+n),t.mc.add(s),No(t))}function No(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new S(ee.fromString(e)),s=t.Ac.next();t.yc.set(s,new ax(n)),t.gc=t.gc.insert(n,s),sd(t.remoteStore,new Tt(gt(co(n.path)),s,"TargetPurposeLimboResolution",so.ct))}}async function Ps(t,e,n){const s=M(t),r=[],i=[],a=[];s.wc.isEmpty()||(s.wc.forEach((l,c)=>{a.push(s.Rc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=vo.Li(c.targetId,u);i.push(h)}}))}),await Promise.all(a),s.dc.nu(r),await async function(l,c){const u=M(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(c,d=>b.forEach(d.Fi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>b.forEach(d.Bi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ss(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(d,g)}}}(s.localStore,i))}async function mx(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const s=await Zh(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(a=>{a.forEach(l=>{l.reject(new N(x.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ps(n,s.er)}}function yx(t,e){const n=M(t),s=n.yc.get(e);if(s&&s.fc)return U().add(s.key);{let r=U();const i=n._c.get(e);if(!i)return r;for(const a of i){const l=n.wc.get(a);r=r.unionWith(l.view.nc)}return r}}function vx(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dx.bind(null,e),e.dc.nu=nx.bind(null,e.eventManager),e.dc.Pc=sx.bind(null,e.eventManager),e}function xx(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=px.bind(null,e),e}class sc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=si(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Cv(this.persistence,new Nv,e.initialUser,this.serializer)}createPersistence(e){return new Ev(yo.zs,this.serializer)}createSharedClientState(e){return new Pv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mx.bind(null,this.syncEngine),await Zv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tx}createDatastore(e){const n=si(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Fv(r));var r;return function(i,a,l,c){return new Vv(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=l=>tc(this.syncEngine,l,0),a=Xl.D()?new Xl:new Mv,new qv(n,s,r,i,a);var n,s,r,i,a}createSyncEngine(e,n){return function(s,r,i,a,l,c,u){const h=new ox(s,r,i,a,l,c);return u&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);C("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Rs(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class xd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bx{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=_e.UNAUTHENTICATED,this.clientId=xh.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{C("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(C("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Eo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Mi(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ex(t);C("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zl(e.remoteStore,i)),t._onlineComponents=e}function kx(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ex(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mi(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kx(n))throw n;wn("Error using user provided cache. Falling back to memory cache: "+n),await Mi(t,new sc)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Mi(t,new sc);return t._offlineComponents}async function wd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await rc(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await rc(t,new wx))),t._onlineComponents}function Tx(t){return wd(t).then(e=>e.syncEngine)}async function ma(t){const e=await wd(t),n=e.eventManager;return n.onListen=lx.bind(null,e.syncEngine),n.onUnlisten=ux.bind(null,e.syncEngine),n}function Nx(t,e,n={}){const s=new St;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,a,l,c){const u=new xd({next:d=>{i.enqueueAndForget(()=>hd(r,h)),d.fromCache&&l.source==="server"?c.reject(new N(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new dd(a,u,{includeMetadataChanges:!0,Ku:!0});return ud(r,h)}(await ma(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function bd(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ic=new Map;/**
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
 */function kd(t,e,n){if(!n)throw new N(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _x(t,e,n,s){if(e===!0&&s===!0)throw new N(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ac(t){if(!S.isDocumentKey(t))throw new N(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function oc(t){if(S.isDocumentKey(t))throw new N(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ai(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":A()}function Qe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ai(t);throw new N(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class lc{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new N(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_x("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bd((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class oi{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Qy;switch(n.type){case"firstParty":return new Zy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ic.get(e);n&&(C("ComponentProvider","Removing Datastore"),ic.delete(e),n.terminate())}(this),Promise.resolve()}}function Cx(t,e,n,s={}){var r;const i=(t=Qe(t,oi))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=_e.MOCK_USER;else{l=xf(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new N(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _e(u)}t._authCredentials=new Yy(new vh(l,c))}}/**
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
 */class $e{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class rn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rn(this.firestore,e,this._query)}}class At extends rn{constructor(e,n,s){super(e,n,co(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new S(e))}withConverter(e){return new At(this.firestore,e,this._path)}}function Ve(t,e,...n){if(t=ge(t),kd("collection","path",e),t instanceof oi){const s=ee.fromString(e,...n);return oc(s),new At(t,null,s)}{if(!(t instanceof $e||t instanceof At))throw new N(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ee.fromString(e,...n));return oc(s),new At(t.firestore,null,s)}}function We(t,e,...n){if(t=ge(t),arguments.length===1&&(e=xh.A()),kd("doc","path",e),t instanceof oi){const s=ee.fromString(e,...n);return ac(s),new $e(t,null,new S(s))}{if(!(t instanceof $e||t instanceof At))throw new N(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ee.fromString(e,...n));return ac(s),new $e(t.firestore,t instanceof At?t.converter:null,new S(s))}}/**
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
 */class Ix{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new td(this,"async_queue_retry"),this.Xc=()=>{const n=Pi();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Pi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Pi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new St;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ss(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let a=i.message||"";return i.stack&&(a=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),a}(s);throw pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=ko.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&A()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function cc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Mt extends oi{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Ix,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ed(this),this._firestoreClient.terminate()}}function Sx(t,e){const n=typeof t=="object"?t:Pc(),s=typeof t=="string"?t:e||"(default)",r=Na(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=yf("firestore");i&&Cx(r,...i)}return r}function li(t){return t._firestoreClient||Ed(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ed(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new h0(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,bd(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new bx(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Re.fromBase64String(e))}catch(n){throw new N(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _n(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ms{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ci{constructor(e){this._methodName=e}}/**
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
 */class _o{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
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
 */const Ax=/^__.*__$/;class jx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,n,this.fieldTransforms):new js(e,this.data,n,this.fieldTransforms)}}class Td{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ft(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Nd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Co{constructor(e,n,s,r,i,a){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Co(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ar(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Nd(this.ca)&&Ax.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Dx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||si(e)}ya(e,n,s,r=!1){return new Co({ca:e,methodName:n,ga:s,path:Ie.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ui(t){const e=t._freezeSettings(),n=si(t._databaseId);return new Dx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _d(t,e,n,s,r,i={}){const a=t.ya(i.merge||i.mergeFields?2:0,e,n,r);So("Data must be an object, but it was:",a,s);const l=Sd(s,a);let c,u;if(i.merge)c=new Be(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const f=ya(e,d,n);if(!a.contains(f))throw new N(x.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jd(h,f)||h.push(f)}c=new Be(h),u=a.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=a.fieldTransforms;return new jx(new Fe(l),c,u)}class hi extends ci{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hi}}class Io extends ci{_toFieldTransform(e){return new P0(e.path,new ls)}isEqual(e){return e instanceof Io}}function Cd(t,e,n,s){const r=t.ya(1,e,n);So("Data must be an object, but it was:",r,s);const i=[],a=Fe.empty();nn(s,(c,u)=>{const h=Ao(e,c,n);u=ge(u);const d=r.da(h);if(u instanceof hi)i.push(h);else{const f=Ls(u,d);f!=null&&(i.push(h),a.set(h,f))}});const l=new Be(i);return new Td(a,l,r.fieldTransforms)}function Id(t,e,n,s,r,i){const a=t.ya(1,e,n),l=[ya(e,s,n)],c=[r];if(i.length%2!=0)throw new N(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)l.push(ya(e,i[f])),c.push(i[f+1]);const u=[],h=Fe.empty();for(let f=l.length-1;f>=0;--f)if(!jd(u,l[f])){const p=l[f];let g=c[f];g=ge(g);const m=a.da(p);if(g instanceof hi)u.push(p);else{const v=Ls(g,m);v!=null&&(u.push(p),h.set(p,v))}}const d=new Be(u);return new Td(h,d,a.fieldTransforms)}function Rx(t,e,n,s=!1){return Ls(n,t.ya(s?4:3,e))}function Ls(t,e){if(Ad(t=ge(t)))return So("Unsupported field value:",e,t),Sd(t,e);if(t instanceof ci)return function(n,s){if(!Nd(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const a of n){let l=Ls(a,s.wa(i));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ge(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return j0(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=se.fromDate(n);return{timestampValue:Ir(s.serializer,r)}}if(n instanceof se){const r=new se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ir(s.serializer,r)}}if(n instanceof _o)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _n)return{bytesValue:Gh(s.serializer,n._byteString)};if(n instanceof $e){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:go(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ai(n)}`)}(t,e)}function Sd(t,e){const n={};return wh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(t,(s,r)=>{const i=Ls(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ad(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof se||t instanceof _o||t instanceof _n||t instanceof $e||t instanceof ci)}function So(t,e,n){if(!Ad(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ai(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function ya(t,e,n){if((e=ge(e))instanceof Ms)return e._internalPath;if(typeof e=="string")return Ao(t,e);throw Ar("Field path arguments must be of type string or ",t,!1,void 0,n)}const Px=new RegExp("[~\\*/\\[\\]]");function Ao(t,e,n){if(e.search(Px)>=0)throw Ar(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ms(...e.split("."))._internalPath}catch{throw Ar(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ar(t,e,n,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${s}`),a&&(c+=` in document ${r}`),c+=")"),new N(x.INVALID_ARGUMENT,l+t+c)}function jd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Dd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Mx extends Dd{data(){return super.data()}}function jo(t,e){return typeof e=="string"?Ao(t,e):e instanceof Ms?e._internalPath:e._delegate._internalPath}/**
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
 */function Rd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Do{}class Lx extends Do{}function Nt(t,e,...n){let s=[];e instanceof Do&&s.push(e),s=s.concat(n),function(r){const i=r.filter(l=>l instanceof Ro).length,a=r.filter(l=>l instanceof di).length;if(i>1||i>0&&a>0)throw new N(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class di extends Lx{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new di(e,n,s)}_apply(e){const n=this._parse(e);return Pd(e._query,n),new rn(e.firestore,e.converter,oa(e._query,n))}_parse(e){const n=ui(e.firestore);return function(r,i,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new N(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){hc(h,u);const f=[];for(const p of h)f.push(uc(l,r,p));d={arrayValue:{values:f}}}else d=uc(l,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||hc(h,u),d=Rx(a,i,h,u==="in"||u==="not-in");return fe.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function en(t,e,n){const s=e,r=jo("where",t);return di._create(r,s,n)}class Ro extends Do{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ro(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Je.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const a=r.getFlattenedFilters();for(const l of a)Pd(i,l),i=oa(i,l)}(e._query,n),new rn(e.firestore,e.converter,oa(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function uc(t,e,n){if(typeof(n=ge(n))=="string"){if(n==="")throw new N(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ah(e)&&n.indexOf("/")!==-1)throw new N(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ee.fromString(n));if(!S.isDocumentKey(s))throw new N(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Rl(t,new S(s))}if(n instanceof $e)return Rl(t,n._key);throw new N(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ai(n)}.`)}function hc(t,e){if(!Array.isArray(t)||t.length===0)throw new N(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pd(t,e){if(e.isInequality()){const s=uo(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new N(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Sh(t);i!==null&&Ox(t,r,i)}const n=function(s,r){for(const i of s)for(const a of i.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ox(t,e,n){if(!n.isEqual(e))throw new N(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Fx{convertValue(e,n="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw A()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return nn(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new _o(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=io(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const n=Rt(e);return new se(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ee.fromString(e);te(Xh(s));const r=new as(s.get(1),s.get(3)),i=new S(s.popFirst(5));return r.isEqual(n)||pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Md(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class $n{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ld extends Dd{constructor(e,n,s,r,i,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(jo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class lr extends Ld{data(e={}){return super.data(e)}}class Od{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new $n(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new lr(this._firestore,this._userDataWriter,s.key,s,new $n(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(a=>{const l=new lr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new $n(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new lr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new $n(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=i.indexOf(a.doc.key),i=i.delete(a.doc.key)),a.type!==1&&(i=i.add(a.doc),u=i.indexOf(a.doc.key)),{type:Ux(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ux(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class Po extends Fx{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function fi(t){t=Qe(t,rn);const e=Qe(t.firestore,Mt),n=li(e),s=new Po(e);return Rd(t._query),Nx(n,t._query).then(r=>new Od(e,s,t,r))}function Ys(t,e,n,...s){t=Qe(t,$e);const r=Qe(t.firestore,Mt),i=ui(r);let a;return a=typeof(e=ge(e))=="string"||e instanceof Ms?Id(i,"updateDoc",t._key,e,n,s):Cd(i,"updateDoc",t._key,e),pi(r,[a.toMutation(t._key,Ue.exists(!0))])}function Li(t){return pi(Qe(t.firestore,Mt),[new ti(t._key,Ue.none())])}function Js(t,e){const n=Qe(t.firestore,Mt),s=We(t),r=Md(t.converter,e);return pi(n,[_d(ui(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ue.exists(!1))]).then(()=>s)}function Xs(t,...e){var n,s,r;t=ge(t);let i={includeMetadataChanges:!1},a=0;typeof e[a]!="object"||cc(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges};if(cc(e[a])){const d=e[a];e[a]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[a+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[a+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(t instanceof $e)u=Qe(t.firestore,Mt),h=co(t._key.path),c={next:d=>{e[a]&&e[a]($x(u,t,d))},error:e[a+1],complete:e[a+2]};else{const d=Qe(t,rn);u=Qe(d.firestore,Mt),h=d._query;const f=new Po(u);c={next:p=>{e[a]&&e[a](new Od(u,f,d,p))},error:e[a+1],complete:e[a+2]},Rd(t._query)}return function(d,f,p,g){const m=new xd(g),v=new dd(f,m,p);return d.asyncQueue.enqueueAndForget(async()=>ud(await ma(d),v)),()=>{m.Dc(),d.asyncQueue.enqueueAndForget(async()=>hd(await ma(d),v))}}(li(u),h,l,c)}function pi(t,e){return function(n,s){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>hx(await Tx(n),s,r)),r.promise}(li(t),e)}function $x(t,e,n){const s=n.docs.get(e._key),r=new Po(t);return new Ld(t,r,e._key,s,new $n(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class Vx{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ui(e)}set(e,n,s){this._verifyNotCommitted();const r=Oi(e,this._firestore),i=Md(r.converter,n,s),a=_d(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(a.toMutation(r._key,Ue.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=Oi(e,this._firestore);let a;return a=typeof(n=ge(n))=="string"||n instanceof Ms?Id(this._dataReader,"WriteBatch.update",i._key,n,s,r):Cd(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(a.toMutation(i._key,Ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Oi(e,this._firestore);return this._mutations=this._mutations.concat(new ti(n._key,Ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Oi(t,e){if((t=ge(t)).firestore!==e)throw new N(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Vt(){return new Io("serverTimestamp")}/**
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
 */function Mo(t){return li(t=Qe(t,Mt)),new Vx(t,e=>pi(t,e))}(function(t,e=!0){(function(n){jn=n})(In),vn(new Wt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),a=new Mt(new Jy(n.getProvider("auth-internal")),new t0(n.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new N(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(l.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),It(Il,"3.13.0",t),It(Il,"3.13.0","esm2017")})();src/Nw.jsx;const Bx={apiKey:"AIzaSyB6NiW14iWhlhIRE8ViXYEOS5SMvGd2Yq4",authDomain:"database-parfum-fd2f8.firebaseapp.com",projectId:"database-parfum-fd2f8",storageBucket:"database-parfum-fd2f8.appspot.com",messagingSenderId:"461710865000",appId:"1:461710865000:web:fb0d043d07997c986c01dd"},oe="hasil-ceking-peserta-kokuo-v2",cr=[{key:"daftarHadir",label:"Daftar Hadir Peserta"},{key:"tindakLanjut",label:"Tindak Lanjut"},{key:"hasilKerja",label:"Hasil Kerja Trainer"},{key:"perbaikanData",label:"Perbaikan Data"},{key:"trash",label:"Tong Sampah"},{key:"hapusBeberapa",label:"Hapus Beberapa Data"},{key:"izinAkses",label:"Manajemen Izin Akses",adminOnly:!0}],qx=(t,e=600,n=600)=>new Promise((s,r)=>{const i=new Image;i.src=t,i.onload=()=>{const a=document.createElement("canvas");let{width:l,height:c}=i;l>c?l>e&&(c*=e/l,l=e):c>n&&(l*=n/c,c=n),a.width=l,a.height=c,a.getContext("2d").drawImage(i,0,0,l,c),s(a.toDataURL("image/jpeg",.7))},i.onerror=a=>r(a)}),ut=t=>{if(!t||!t.status)return"Status Tidak Diketahui";const{status:e,evaluationResult:n,cekingResult:s}=t;if(e.startsWith("Evaluasi")){const r=e.replace("Evaluasi ","");return n==="Lulus"?`Lulus Evaluasi ${r}`:`Masih Tahap Evaluasi ${r}`}return e.startsWith("Ceking tahap")?s==="Lulus"?"Lulus Ceking":"Tahap Ceking":e},Lo=(t,e)=>{if(!t)return"Ceking tahap 1";const n=e.filter(s=>s.nama===t&&s.status.match(/Ceking tahap \d+/)).map(s=>parseInt(s.status.replace("Ceking tahap ",""),10)).filter(s=>!isNaN(s));return n.length===0?"Ceking tahap 1":`Ceking tahap ${Math.max(...n)+1}`},zx=(t,e)=>{if(!e||e==="semua")return!0;const n=ut(t);switch(e){case"Trainingan":return t.status==="Trainingan";case"Ceking":return n==="Tahap Ceking";case"Lulus":return n.startsWith("Lulus");case"Resign":return n==="Resign";default:return!0}},Hx=(t,e)=>!e||e==="semua"?!0:t.status===e,yn=t=>{if(!t||typeof t.toDate!="function")return{date:"N/A",time:"N/A"};const e=t.toDate();return{date:e.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}),time:e.toLocaleTimeString("en-GB")}},Ht=t=>{if(!t)return"N/A";try{const e=new Date(`${t}T00:00:00Z`);return isNaN(e.getTime())?"Tanggal Tidak Valid":e.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return"Gagal Memformat"}},Oe=y.createContext(),Kx=({children:t})=>{const[e,n]=y.useState(null),[s,r]=y.useState(!1),[i,a]=y.useState(!1),[l,c]=y.useState([]),[u,h]=y.useState([]),[d,f]=y.useState([]),[p,g]=y.useState(""),[m,v]=y.useState(null),[w,k]=y.useState(null),[I,L]=y.useState("login"),[B,re]=y.useState([]),[pe,J]=y.useState(null),[_,X]=y.useState(null),[q,Pe]=y.useState(!1),[Ge,T]=y.useState(null),[D,$]=y.useState({type:null,props:{}}),Q=y.useMemo(()=>Rc(Bx),[]);y.useEffect(()=>{const ce=Sx(Q),Te=Vm(Q);n(ce);const Xe=Sg(Te,Ze=>{Ze?r(!0):Eg(Te).catch(Ut=>console.error("Gagal masuk secara anonim:",Ut))});return()=>Xe()},[Q]),y.useEffect(()=>{if(!e||!s)return;const ce=Nt(Ve(e,`artifacts/${oe}/public/data/records`)),Te=Xs(ce,me=>c(me.docs.map(G=>({id:G.id,...G.data()})))),Xe=Nt(Ve(e,`artifacts/${oe}/public/data/users`)),Ze=Xs(Xe,me=>{h(me.docs.map(G=>({...G.data(),id:G.id}))),i||a(!0)}),Ut=Nt(Ve(e,`artifacts/${oe}/public/data/perbaikan_requests`)),ze=Xs(Ut,me=>f(me.docs.map(G=>({id:G.id,...G.data()})))),ie=new Date;ie.setDate(ie.getDate()-7);const F=Nt(Ve(e,`artifacts/${oe}/public/data/notifications`),en("createdAt",">=",se.fromDate(ie))),K=Xs(F,me=>{const G=me.docs.map(He=>({id:He.id,...He.data()}));re(G.sort((He,vt)=>vt.createdAt.toDate()-He.createdAt.toDate()))});return()=>{Te(),Ze(),ze(),K()}},[e,s,i]);const Y=y.useCallback(ce=>{g(ce),setTimeout(()=>g(""),3e3)},[]),ne=y.useCallback((ce,Te={})=>$({type:ce,props:Te}),[]),ue=y.useCallback(()=>$({type:null,props:{}}),[]),Ee={db:e,app:Q,isAuthReady:s,isLoginDataReady:i,records:l,users:u,repairRequests:d,showToast:Y,currentUser:m,setCurrentUser:v,userRole:w,setUserRole:k,loginStep:I,setLoginStep:L,activityNotifications:B,recordToAutoEdit:pe,setRecordToAutoEdit:J,lastSaveTimestamp:_,setLastSaveTimestamp:X,setAppUpdateAvailable:Pe,postSaveAction:Ge,setPostSaveAction:T,modal:D,openModal:ne,closeModal:ue};return o.jsxs(Oe.Provider,{value:Ee,children:[t,p&&o.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-[100] animate-fade-in-up",children:p}),q&&o.jsxs("div",{className:"fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-[100] animate-fade-in-up",children:["Pembaruan tersedia! ",o.jsx("button",{className:"font-bold underline ml-2",onClick:()=>window.location.reload(),children:"Muat Ulang"})]})]})},Os=()=>{const{db:t,currentUser:e,showToast:n}=y.useContext(Oe);return{addOrUpdateRecord:async(f,p)=>{var g;if(t)try{if(f)await Ys(We(t,`artifacts/${oe}/public/data/records`,f),{...p,updatedAt:Vt(),lastUpdatedByName:e.nama}),n("Data berhasil diperbarui!");else{const m=await Js(Ve(t,`artifacts/${oe}/public/data/records`),{...p,createdAt:Vt(),createdByName:e.nama,isDeleted:!1});n("Data berhasil ditambahkan!");let v=`${e.nama} menambahkan peserta baru: ${p.nama}.`;(g=p.status)!=null&&g.startsWith("Evaluasi")?v=`${e.nama} menambahkan data evaluasi untuk ${p.nama}.`:p.status==="Lulus"?v=`${e.nama} menindaklanjuti ${p.nama} sebagai Lulus.`:p.status==="Resign"&&(v=`${e.nama} mengubah status ${p.nama} menjadi Resign.`),await Js(Ve(t,`artifacts/${oe}/public/data/notifications`),{message:v,type:"Aktivitas Baru",createdAt:Vt(),createdBy:e.nama,recordId:m.id})}return!0}catch(m){return n("Gagal menyimpan data."),console.error("Error saving record:",m),!1}},addRepairRequest:async f=>{if(t)try{return await Js(Ve(t,`artifacts/${oe}/public/data/perbaikan_requests`),{...f,requestedBy:e.nama,requestedAt:Vt()}),n("Nama duplikat terdeteksi. Permintaan perbaikan telah dikirim ke Admin."),!0}catch{return n("Gagal mengirim permintaan perbaikan."),!1}},resolveRepairRequest:async f=>{if(t)try{await Li(We(t,`artifacts/${oe}/public/data/perbaikan_requests`,f)),n("Tiket perbaikan telah diselesaikan.")}catch{n("Gagal menyelesaikan tiket perbaikan.")}},softDeleteRecord:async(f,p)=>{if(t)try{await Ys(We(t,`artifacts/${oe}/public/data/records`,f),{isDeleted:!0,updatedAt:Vt(),lastUpdatedByName:e.nama}),n(`Data untuk "${p}" telah dipindahkan ke tong sampah.`)}catch{n("Gagal memindahkan data.")}},restoreRecord:async f=>{if(t)try{await Ys(We(t,`artifacts/${oe}/public/data/records`,f),{isDeleted:!1,updatedAt:Vt()}),n("Data berhasil dipulihkan.")}catch{n("Gagal memulihkan data.")}},deleteRecordPermanent:async(f,p)=>{if(t)try{await Li(We(t,`artifacts/${oe}/public/data/records`,f)),n(`Data untuk "${p}" telah dihapus permanen.`)}catch(g){n("Gagal menghapus data secara permanen."),console.error("Error permanent delete:",g)}},addOrUpdateUser:async(f,p)=>{if(t)try{return f?(await Ys(We(t,`artifacts/${oe}/public/data/users`,f),p),n("Pengguna berhasil diperbarui.")):(await Js(Ve(t,`artifacts/${oe}/public/data/users`),p),n("Pengguna baru berhasil ditambahkan.")),!0}catch{return n("Gagal menyimpan data pengguna."),!1}},deleteUser:async(f,p)=>{if(t)try{await Li(We(t,`artifacts/${oe}/public/data/users`,f)),n(`Pengguna "${p}" berhasil dihapus.`)}catch{n("Gagal menghapus pengguna.")}},mergeMasterData:async(f,p,g)=>{if(t){n(`Memproses penggabungan untuk "${p}"...`);try{const m=Ve(t,`artifacts/${oe}/public/data/records`),v=Nt(m,en(f,"==",p)),w=await fi(v);if(w.empty)return n("Tidak ada data yang cocok untuk diperbaiki."),!0;const k=Mo(t);return w.forEach(I=>{const L=We(t,`artifacts/${oe}/public/data/records`,I.id);k.update(L,{[f]:g})}),await k.commit(),n(`${w.size} data berhasil diperbarui dan digabungkan.`),!0}catch(m){return console.error("Error merging master data:",m),n("Gagal menggabungkan data."),!1}}}}},Fd=(t,e)=>{const{records:n}=y.useContext(Oe),s=y.useMemo(()=>n,[n]),r=y.useMemo(()=>s.filter(f=>!f.isDeleted),[s]),i=y.useMemo(()=>s.filter(f=>f.isDeleted),[s]),a=y.useMemo(()=>{const f=r.reduce((p,g)=>(p[g.nama]||(p[g.nama]=[]),p[g.nama].push(g),p),{});return Object.values(f).map(p=>p.sort((g,m)=>{var v,w,k,I;return(((v=m.updatedAt)==null?void 0:v.toDate())||((w=m.createdAt)==null?void 0:w.toDate())||0)-(((k=g.updatedAt)==null?void 0:k.toDate())||((I=g.createdAt)==null?void 0:I.toDate())||0)})[0])},[r]),l=y.useMemo(()=>{const f=new Map;return r.slice().sort((p,g)=>{var m,v;return(((m=p.createdAt)==null?void 0:m.toDate())||0)-(((v=g.createdAt)==null?void 0:v.toDate())||0)}).forEach(p=>{p.nama&&p.photo&&!f.has(p.nama)&&f.set(p.nama,p.photo)}),a.map(p=>({...p,photo:f.get(p.nama)||p.photo}))},[r,a]),c=y.useMemo(()=>l.filter(f=>f.nama.toLowerCase().includes(t.toLowerCase())),[l,t]),u=y.useMemo(()=>e==="semua"?c:c.filter(f=>f.turunKeCabang===e||f.cabang===e||f.trainganDari===e),[c,e]),h=y.useMemo(()=>{const f=[...new Set(l.map(g=>g.turunKeCabang||g.cabang).filter(Boolean))],p=[...new Set(l.map(g=>g.trainganDari).filter(Boolean))];return{cabang:f.sort(),tc:p.sort()}},[l]),d=y.useMemo(()=>a.filter(f=>f.status==="Trainingan"||f.status.startsWith("Ceking tahap")),[a]);return{allRecords:s,activeRecords:r,deletedRecords:i,uniqueLatestRecords:a,filteredRecords:u,allFilterOptions:h,attendanceParticipants:d}},Gx=(t,e,n)=>{const[s,r]=y.useState(t),[i,a]=y.useState(null),[l,c]=y.useState([]),u=y.useCallback(f=>{const{name:p,value:g}=f.target;if(r(m=>({...m,[p]:g})),p==="nama"&&g.trim()!==""){const m=e.filter(v=>v.nama.toLowerCase().includes(g.toLowerCase()));c(m)}else c([])},[e]),h=y.useCallback(f=>{const p=n.filter(g=>g.nama===f.nama&&g.photo).sort((g,m)=>{var v,w;return(((v=g.createdAt)==null?void 0:v.toDate())||0)-(((w=m.createdAt)==null?void 0:w.toDate())||0)})[0];r({...t,nama:f.nama,photo:p?p.photo:f.photo||null}),a(null),c([])},[n,t]),d=y.useCallback(()=>{a(null),r(t)},[t]);return{formValues:s,setFormValues:r,recordToEdit:i,setRecordToEdit:a,nameSuggestions:l,setNameSuggestions:c,handleFormInputChange:u,handleSuggestionClick:h,resetForm:d}},Wx=(t,e)=>{const{db:n,records:s,showToast:r,openModal:i}=y.useContext(Oe);Os();const a=y.useCallback((d,f)=>{if(!d||!f){r("Silakan pilih rentang tanggal.");return}const p=new Date(`${d}T00:00:00`),g=new Date(`${f}T23:59:59`),v=s.filter(w=>{var k;return((k=w.status)==null?void 0:k.startsWith("Evaluasi"))&&w.tgl&&new Date(w.tgl)>=p&&new Date(w.tgl)<=g}).reduce((w,k)=>{const I=k.cabang||"Lainnya";return w[I]||(w[I]={}),w[I][k.status]||(w[I][k.status]=[]),w[I][k.status].push({nama:k.nama,evaluator:k.createdByName||"N/A",tanggal:Ht(k.tgl)}),w},{});i("followUpDetails",{data:v})},[s,r,i]),l=y.useCallback((d,f)=>{const g=f.filter(m=>m.createdByName===d).reduce((m,v)=>{const w=v.cabang||v.turunKeCabang||v.trainganDari||"Lainnya";return m[w]||(m[w]=[]),m[w].push(v),m},{});i("trainerWorkDetail",{trainerName:d,workData:g})},[i]),c=y.useCallback((d,f)=>{if(!d||!f){r("Silakan pilih rentang tanggal.");return}const p=new Date(`${d}T00:00:00`),g=new Date(`${f}T23:59:59`),m=s.filter(k=>{var L;const I=(L=k.createdAt)==null?void 0:L.toDate();return k.createdByName&&I>=p&&I<=g}),v=m.reduce((k,I)=>{const L=I.createdByName;return k[L]||(k[L]={total:0,types:new Set}),k[L].total++,k[L].types.add(I.status.startsWith("Ceking")?"Ceking":I.status),k},{}),w=Object.entries(v).map(([k,I])=>({trainerName:k,total:I.total,summary:Array.from(I.types).slice(0,2).join(", ")+(I.types.size>2?"...":"")})).sort((k,I)=>I.total-k.total);i("trainerPerformanceList",{performanceData:w,onSelectTrainer:k=>l(k,m)})},[s,i,l,r]),u=y.useCallback(async d=>{if(!n)return;r(`Menghapus ${d.length} data...`);const f=Mo(n);d.forEach(p=>{const g=We(n,`artifacts/${oe}/public/data/records`,p);f.delete(g)});try{await f.commit(),r(`${d.length} data berhasil dihapus secara permanen.`),i(null)}catch(p){r("Gagal menghapus data."),console.error("Error performing bulk delete: ",p)}},[n,r,i]),h=y.useCallback(async(d,f)=>{if(!n||!d||!f){r("Silakan pilih rentang tanggal yang valid.");return}r("Mengambil data untuk dihapus...");const p=new Date(`${d}T00:00:00`),g=new Date(`${f}T23:59:59`),m=Nt(Ve(n,`artifacts/${oe}/public/data/records`),en("createdAt",">=",se.fromDate(p)),en("createdAt","<=",se.fromDate(g)));try{const w=(await fi(m)).docs.map(k=>({id:k.id,...k.data()}));i("bulkDeleteData",{records:w,onConfirmDelete:u}),r(`${w.length} data ditemukan.`)}catch(v){r("Gagal mengambil data."),console.error("Error fetching data for bulk delete: ",v)}},[n,r,i,u]);return{handleFetchFollowUp:a,handleFetchTrainerPerformanceByDate:c,handleFetchForBulkDelete:h}},Qx=()=>o.jsxs("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white text-2xl",children:[o.jsxs("svg",{className:"animate-spin h-12 w-12 text-blue-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),o.jsx("p",{className:"mt-4 text-lg text-gray-400",children:"Memuat data..."})]}),Ud=({show:t,onClose:e,onConfirm:n,title:s,message:r,confirmText:i})=>t?o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80] p-4",onClick:e,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-sm space-y-4 border-2 border-yellow-500",onClick:a=>a.stopPropagation(),children:[o.jsx("h3",{className:"text-xl font-bold text-center text-yellow-300",children:s}),o.jsx("p",{className:"text-center text-gray-300",children:r}),o.jsxs("div",{className:"flex justify-center gap-4 pt-4",children:[o.jsx("button",{onClick:e,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Batal"}),o.jsx("button",{onClick:n,className:"px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700",children:i})]})]})}):null,$d=Ec.memo(({record:t,onCardClick:e})=>{const n=ut(t),s=n.startsWith("Lulus"),r=n==="Resign";let i="text-yellow-400";return s&&(i="text-green-400"),r&&(i="text-red-400"),o.jsxs("div",{className:"bg-black rounded-xl shadow-neumorphic p-3 flex flex-col justify-between transition-all hover:scale-105 relative overflow-hidden w-44 flex-shrink-0",children:[o.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1.5 ${s?"bg-green-500":r?"bg-red-500":"bg-yellow-500"}`}),o.jsx("div",{className:"pl-3 h-full",children:o.jsxs("div",{className:"cursor-pointer h-full flex flex-col",onClick:()=>e(t),children:[o.jsx("div",{className:"w-full h-24 rounded-md bg-gray-700 flex items-center justify-center mb-2 overflow-hidden flex-shrink-0",children:t.photo?o.jsx("img",{src:t.photo,alt:t.nama,className:"w-full h-full object-cover"}):o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-gray-500",viewBox:"0 0 20 20",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),o.jsxs("div",{className:"flex flex-col justify-start flex-grow",children:[o.jsx("h3",{className:"text-base font-bold text-blue-300 truncate",children:t.nama}),o.jsxs("p",{className:"text-xs text-gray-300 mt-1",children:[o.jsx("strong",{children:"Trainer:"})," ",t.trainer||"-"]}),o.jsxs("p",{className:"text-xs text-gray-300",children:[o.jsx("strong",{children:"Tgl Terakhir:"})," ",Ht(t.tanggalLulus||t.tgl)]}),o.jsxs("p",{className:"text-xs text-gray-300",children:[o.jsx("strong",{children:"Status:"})," ",o.jsx("span",{className:`font-semibold ${i}`,children:n})]})]})]})})]})}),Oo=({participant:t,allRecords:e,onClose:n,onEdit:s,onDelete:r})=>{const{userRole:i,showToast:a,db:l}=y.useContext(Oe),[c,u]=y.useState("rincian"),[h,d]=y.useState(!1),[f,p]=y.useState([]),[g,m]=y.useState(!1),v=y.useMemo(()=>e.filter(T=>T.nama===t.nama&&!T.isDeleted).sort((T,D)=>{var $,Q;return((($=T.createdAt)==null?void 0:$.toDate())||0)-(((Q=D.createdAt)==null?void 0:Q.toDate())||0)}),[e,t.nama]),w=y.useMemo(()=>t.nama?e.filter(T=>T.nama===t.nama&&!T.isDeleted).sort((T,D)=>{var Y,ne,ue,Ee;const $=((Y=T.updatedAt)==null?void 0:Y.toDate())||((ne=T.createdAt)==null?void 0:ne.toDate())||0,Q=((ue=D.updatedAt)==null?void 0:ue.toDate())||((Ee=D.createdAt)==null?void 0:Ee.toDate())||0;return new Date(Q)-new Date($)}):[],[t.nama,e]),k=y.useMemo(()=>e.filter(T=>T.nama===t.nama&&!T.isDeleted&&T.penilaian).sort((T,D)=>{var $,Q,Y,ne;return((($=D.updatedAt)==null?void 0:$.toDate())||((Q=D.createdAt)==null?void 0:Q.toDate())||0)-(((Y=T.updatedAt)==null?void 0:Y.toDate())||((ne=T.createdAt)==null?void 0:ne.toDate())||0)}),[e,t.nama]),I=y.useMemo(()=>{const T=new Set;v.forEach($=>{$.status==="Trainingan"&&T.add("Trainingan"),$.status.startsWith("Ceking tahap")&&T.add($.status),$.status==="Lulus"&&T.add("Lulus"),$.status.startsWith("Evaluasi")&&T.add($.status)});const D=Array.from(T);return D.sort(($,Q)=>{const Y=["Trainingan","Ceking tahap 1","Ceking tahap 2","Ceking tahap 3","Lulus","Evaluasi Reflexology","Evaluasi Athletic Massage","Evaluasi Seitai"];return Y.indexOf($)-Y.indexOf(Q)}),D},[v]),L=T=>T==="Lulus"?v.find(D=>D.status==="Lulus"):v.find(D=>D.status===T),[B,re]=y.useState(t),pe=[{key:"ketepatanWaktu",label:"Ketepatan Waktu/Attitude"},{key:"bagianKaki",label:"Bagian Kaki/Face Down"},{key:"bagianTangan",label:"Bagian Tangan/Face Up"},{key:"bagianPunggung",label:"Bagian Punggung/Side Lying"},{key:"bagianPundak",label:"Bagian Pundak/Adjustment"},{key:"catatan",label:"Catatan Tambahan"}],J=y.useMemo(()=>{const T=t.status;return T==="Trainingan"||T.startsWith("Ceking tahap")},[t.status]);y.useEffect(()=>{!J&&c==="hadir"&&u("rincian")},[J,c]),y.useEffect(()=>{if(c!=="hadir"||!l||!t.nama)return;(async()=>{m(!0);try{const D=Nt(Ve(l,`artifacts/${oe}/public/data/attendance`),en("participantName","==",t.nama)),Q=(await fi(D)).docs.map(Y=>Y.data());Q.sort((Y,ne)=>ne.date.toDate()-Y.date.toDate()),p(Q)}catch(D){console.error("Error fetching attendance history: ",D),a("Gagal memuat riwayat kehadiran.")}finally{m(!1)}})()},[c,l,t.nama,a]);const _=T=>{const D=L(T);D?(re(D),d(!1),u("rincian")):a(`Data untuk tahap "${T}" tidak ditemukan.`)},X=()=>{const T=e.filter(ce=>ce.nama===t.nama&&!ce.isDeleted),D=T.sort((ce,Te)=>{var Xe,Ze;return(((Xe=ce.createdAt)==null?void 0:Xe.toDate())||0)-(((Ze=Te.createdAt)==null?void 0:Ze.toDate())||0)})[0],$=T.find(ce=>ce.status==="Resign");if(!D||!D.tanggalMasuk){a("Tanggal masuk tidak ditemukan.");return}const Q=new Date(D.tanggalMasuk),Y=$&&$.tanggalResign?new Date($.tanggalResign):new Date;let ne=Y.getFullYear()-Q.getFullYear(),ue=Y.getMonth()-Q.getMonth(),Ee=Y.getDate()-Q.getDate();Ee<0&&(ue--,Ee+=new Date(Y.getFullYear(),Y.getMonth(),0).getDate()),ue<0&&(ne--,ue+=12),a(`Masa kerja: ${ne} tahun, ${ue} bulan, ${Ee} hari.`)},q=()=>{const{status:T,nama:D,kotaAsal:$,tanggalMasuk:Q,refrensi:Y,trainganDari:ne,trainer:ue,tahapCeking:Ee,tgl:ce,tanggalLulus:Te,turunKeCabang:Xe,accYangMeluluskan:Ze,cabang:Ut}=B;let ze;return T==="Trainingan"?ze=o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",D||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",T||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Kota Asal:"})," ",$||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tanggal Masuk:"})," ",Ht(Q)]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Refrensi:"})," ",Y||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Training Dari:"})," ",ne||"-"]})]}):T.startsWith("Ceking tahap")?ze=o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",D||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",B.cekingResult==="Lulus"?`Lulus ${T}`:`Masih ${T}`]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Trainer:"})," ",ue||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tahap Ceking:"})," ",Ee||T]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tanggal Ceking:"})," ",Ht(ce)]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Training Dari:"})," ",ne||"-"]})]}):T==="Lulus"?ze=o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",D||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",T||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Trainer:"})," ",ue||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tahap Ceking:"})," ",Ee||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tanggal Lulus:"})," ",Ht(Te)]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Turun ke Cabang:"})," ",Xe||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Acc Yang Meluluskan:"})," ",Ze||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Training Dari:"})," ",ne||"-"]})]}):T.startsWith("Evaluasi")?ze=o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",D||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",ut(B)]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Trainer:"})," ",ue||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tahap Ceking:"})," ",Ee||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Tanggal Evaluasi:"})," ",Ht(ce)]}),o.jsxs("p",{children:[o.jsx("strong",{className:"text-gray-400",children:"Cabang:"})," ",Ut||"-"]})]}):ze=o.jsx("p",{children:"Rincian tidak tersedia untuk status ini."}),o.jsxs(o.Fragment,{children:[o.jsxs("h2",{className:"text-xl font-bold text-white mb-4 text-center",children:["Rincian Peserta - ",o.jsx("span",{className:"text-yellow-300",children:ut(B)})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4 text-gray-300",children:ze}),o.jsx("div",{className:"horizontal-scroll-container flex overflow-x-auto gap-2 p-1 mb-4",children:I.map(ie=>o.jsx("button",{onClick:()=>_(ie),className:`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${B.status===ie?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:ie},ie))}),h&&o.jsxs("div",{className:"my-4 p-4 bg-gray-900/50 rounded-lg max-h-64 overflow-y-auto",children:[o.jsx("h3",{className:"text-lg font-semibold text-purple-300 mb-3 text-center",children:"Riwayat Penilaian"}),o.jsx("div",{className:"space-y-4 pr-2",children:k.length>0?k.map(ie=>{var F;return o.jsxs("div",{className:"bg-gray-800/70 p-3 rounded-lg",children:[o.jsxs("div",{className:"flex justify-between items-baseline mb-2",children:[o.jsx("h4",{className:"font-bold text-base text-white",children:ut(ie)}),o.jsx("p",{className:"text-xs text-blue-300",children:yn(ie.updatedAt||ie.createdAt).date})]}),(F=ie.penilaian)!=null&&F.ratings?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"space-y-2 text-sm mb-3",children:Object.entries(ie.penilaian.ratings).map(([K,me])=>{var G;return me&&o.jsxs("div",{className:"border-b border-gray-700 py-1",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs("span",{className:"text-gray-400 capitalize",children:[K.replace(/([A-Z])/g," $1"),":"]}),o.jsx("span",{className:`font-semibold px-2 py-0.5 rounded-full text-xs ${me==="Baik"?"bg-green-500/50 text-green-200":me==="Cukup"?"bg-yellow-500/50 text-yellow-200":"bg-red-500/50 text-red-200"}`,children:me})]}),((G=ie.penilaian.manualNotes)==null?void 0:G[K])&&o.jsxs("p",{className:"text-xs text-gray-300 mt-1 pl-2 border-l-2 border-gray-600",children:["Catatan: ",ie.penilaian.manualNotes[K]]})]},K)})}),ie.penilaian.catatan&&o.jsxs("div",{className:"mt-2 pt-2 border-t border-gray-600",children:[o.jsx("p",{className:"text-sm font-semibold text-purple-300 mb-1",children:"Ulasan Akhir:"}),o.jsx("p",{className:"text-sm text-white bg-black/20 p-2 rounded-md",children:ie.penilaian.catatan})]})]}):o.jsx("div",{className:"space-y-1 text-sm",children:pe.map(K=>ie.penilaian[K.key]&&o.jsxs("div",{className:"flex justify-between border-b border-gray-700 py-1 text-xs",children:[o.jsxs("span",{className:"text-gray-400",children:[K.label,":"]}),o.jsx("span",{className:"text-white text-right",children:ie.penilaian[K.key]})]},K.key))})]},ie.id)}):o.jsx("p",{className:"text-center p-8 text-gray-400",children:"Tidak ada riwayat penilaian ditemukan."})})]})]})},Pe=()=>o.jsxs("div",{className:"max-h-96 overflow-y-auto",children:[o.jsx("h2",{className:"text-xl font-bold text-white mb-4 text-center",children:"Riwayat Daftar Hadir"}),g?o.jsx("p",{className:"text-center p-8 text-gray-400",children:"Memuat riwayat..."}):f.length>0?o.jsxs("table",{className:"w-full text-left text-sm",children:[o.jsx("thead",{className:"bg-gray-900 sticky top-0",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-2 font-semibold text-gray-300",children:"Tanggal"}),o.jsx("th",{className:"p-2 font-semibold text-gray-300",children:"Status"}),o.jsx("th",{className:"p-2 font-semibold text-gray-300",children:"Keterangan"})]})}),o.jsx("tbody",{className:"bg-gray-800 divide-y divide-gray-700",children:f.map((T,D)=>o.jsxs("tr",{className:"hover:bg-gray-700/50",children:[o.jsx("td",{className:"p-2 whitespace-nowrap",children:yn(T.date).date}),o.jsx("td",{className:"p-2 whitespace-nowrap",children:T.attendanceStatus}),o.jsx("td",{className:"p-2",children:T.notes||"-"})]},D))})]}):o.jsx("p",{className:"text-center p-8 text-gray-400",children:"Tidak ada riwayat kehadiran ditemukan."})]}),Ge=()=>o.jsxs("div",{className:"max-h-96 overflow-y-auto pr-2",children:[o.jsx("h2",{className:"text-xl font-bold text-white mb-4 text-center",children:"Riwayat Lengkap"}),o.jsx("div",{className:"space-y-3",children:w.length>0?w.map(T=>o.jsxs("div",{className:"bg-gray-900/70 p-3 rounded-lg",children:[o.jsx("p",{className:"font-bold text-lg text-white",children:ut(T)}),o.jsx("p",{className:"text-sm text-blue-300",children:yn(T.updatedAt||T.createdAt).date}),o.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["Diperbarui oleh: ",T.lastUpdatedByName||T.createdByName||"N/A"]})]},T.id)):o.jsx("p",{className:"text-center p-8 text-gray-400",children:"Tidak ada riwayat ditemukan."})})]});return t?o.jsxs("div",{className:"mt-6 bg-gray-800 rounded-xl shadow-neumorphic w-full overflow-hidden border-2 border-blue-500 animate-fade-in-up-view",children:[o.jsx("div",{className:"w-full h-80 bg-black flex items-center justify-center p-2 rounded-t-xl",children:B.photo?o.jsx("img",{src:B.photo,alt:B.nama,className:"max-w-full max-h-full object-contain"}):o.jsx("span",{className:"text-gray-500",children:"Tidak ada foto"})}),o.jsxs("div",{className:`grid ${J?"grid-cols-3":"grid-cols-2"}`,children:[J&&o.jsx("button",{onClick:()=>u("hadir"),className:`py-3 text-sm font-semibold border-b-2 ${c==="hadir"?"bg-indigo-600 border-indigo-400":"bg-gray-700 border-transparent hover:bg-gray-600"}`,children:"Riwayat Daftar Hadir"}),o.jsx("button",{onClick:()=>u("rincian"),className:`py-3 text-sm font-semibold border-b-2 ${c==="rincian"?"bg-indigo-600 border-indigo-400":"bg-gray-700 border-transparent hover:bg-gray-600"}`,children:"Rincian"}),o.jsx("button",{onClick:()=>u("lengkap"),className:`py-3 text-sm font-semibold border-b-2 ${c==="lengkap"?"bg-indigo-600 border-indigo-400":"bg-gray-700 border-transparent hover:bg-gray-600"}`,children:"Riwayat Lengkap"})]}),o.jsxs("div",{className:"p-4 md:p-6",children:[c==="rincian"&&q(),J&&c==="hadir"&&Pe(),c==="lengkap"&&Ge(),o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 mt-6",children:[o.jsxs("div",{className:"flex flex-wrap gap-2",children:[B.status==="Trainingan"&&o.jsx("button",{onClick:X,className:"px-3 py-2 text-xs bg-green-600 rounded-lg hover:bg-green-700",children:"Masa Kerja"}),o.jsx("button",{onClick:()=>d(T=>!T),className:"px-3 py-2 text-xs bg-purple-600 rounded-lg hover:bg-purple-700",children:h?"Sembunyikan Penilaian":"Tampilkan Penilaian"})]}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsx("button",{title:"Edit",onClick:()=>{s(B),n()},className:"p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[o.jsx("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),o.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]})}),i==="admin"&&o.jsx("button",{title:"Hapus",onClick:()=>{r(B.id,B.nama),n()},className:"p-2 bg-red-600 text-white rounded-lg hover:bg-red-700",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z",clipRule:"evenodd"})})}),o.jsx("button",{onClick:n,className:"px-6 py-2 text-sm bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700",children:"Tutup"})]})]})]})]}):null},Yx=Ec.memo(({record:t,onFollowUp:e,onCardClick:n})=>{const s=ut(t),r=t.tanggalLulus||t.tgl;let i="N/A";if(r){const a=new Date(`${r}T00:00:00Z`);if(!isNaN(a.getTime())){const l=new Date(a);l.setMonth(l.getMonth()+3),i=l.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}}return o.jsxs("div",{className:"bg-black rounded-xl shadow-neumorphic p-3 flex flex-col justify-between transition-all hover:scale-105 relative overflow-hidden w-44 flex-shrink-0",children:[o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500"}),o.jsxs("div",{className:"pl-3 flex flex-col h-full",children:[o.jsxs("div",{className:"flex-grow cursor-pointer",onClick:()=>n(t),children:[o.jsx("div",{className:"w-full h-24 rounded-md bg-gray-700 flex items-center justify-center mb-2 overflow-hidden",children:t.photo?o.jsx("img",{src:t.photo,alt:t.nama,className:"w-full h-full object-cover"}):o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-gray-500",viewBox:"0 0 20 20",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),o.jsx("h3",{className:"text-base font-bold text-blue-300 truncate",children:t.nama}),o.jsxs("p",{className:"text-xs text-gray-300 mt-1",children:[o.jsx("strong",{children:"Cabang:"})," ",t.turunKeCabang||t.cabang||"-"]}),o.jsxs("p",{className:"text-xs text-gray-300",children:[o.jsx("strong",{children:"Status Saat Ini:"})," ",o.jsx("span",{className:"font-semibold text-yellow-400",children:s})]}),o.jsxs("p",{className:"text-xs text-gray-300",children:[o.jsx("strong",{children:"Jatuh Tempo:"})," ",o.jsx("span",{className:"font-bold text-red-400",children:i})]})]}),o.jsx("div",{className:"flex justify-end gap-1 mt-2",children:o.jsx("button",{title:"Tindak Lanjut Evaluasi",onClick:()=>e(t),className:"w-full px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow-inner-custom text-xs font-semibold",children:"Tindak Lanjut"})})]})]})}),Jx=({onClose:t,evaluationNotifications:e,activityNotifications:n})=>o.jsxs("div",{className:"absolute top-full right-0 mt-2 w-80 bg-gray-700 rounded-lg shadow-lg z-30 border border-gray-600 p-2 space-y-2 max-h-96 overflow-y-auto",children:[n.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"text-lg font-bold text-white px-2 pt-1",children:"Aktivitas Baru"}),n.map(s=>o.jsxs("div",{className:"bg-gray-800 p-3 rounded-md",children:[o.jsx("p",{className:"text-sm text-gray-200",children:s.message}),o.jsx("p",{className:"text-xs text-gray-400 text-right mt-1",children:yn(s.createdAt).date})]},s.id)),o.jsx("div",{className:"border-t border-gray-600 my-2"})]}),e.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"text-lg font-bold text-white px-2",children:"Jadwal Evaluasi"}),e.map(s=>o.jsxs("div",{className:"bg-gray-800 p-3 rounded-md",children:[o.jsx("p",{className:"font-semibold text-blue-300",children:s.nama}),o.jsxs("p",{className:"text-sm text-gray-300",children:["Jadwal: ",o.jsx("span",{className:"font-medium text-yellow-400",children:s.nextEvaluation})]}),o.jsxs("p",{className:"text-xs text-gray-400",children:["Jatuh Tempo: ",s.dueDate.toLocaleDateString("id-ID",{day:"numeric",month:"long"})]})]},s.id))]}),e.length===0&&n.length===0&&o.jsx("p",{className:"text-gray-400 text-center py-4",children:"Tidak ada notifikasi."})]}),Xx=({onClose:t,onFetch:e})=>{const[n,s]=y.useState(""),[r,i]=y.useState("");return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-red-500",onClick:a=>a.stopPropagation(),children:[o.jsx("h3",{className:"text-2xl font-bold text-center text-red-300",children:"Pilih Rentang Data untuk Dihapus"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Mulai"}),o.jsx("input",{type:"date",value:n,onChange:a=>s(a.target.value),className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Selesai"}),o.jsx("input",{type:"date",value:r,onChange:a=>i(a.target.value),className:"w-full input-rounded-border"})]})]}),o.jsx("button",{onClick:()=>e(n,r),className:"w-full px-6 py-3 bg-red-600 text-white font-bold rounded-xl text-lg hover:bg-red-700 shadow-neumorphic",children:"Tampilkan Data"}),o.jsx("button",{onClick:t,className:"w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700",children:"Tutup"})]})})},Zx=({onClose:t,records:e,onConfirmDelete:n})=>{const[s,r]=y.useState(new Set),i=c=>{if(c.target.checked){const u=new Set(e.map(h=>h.id));r(u)}else r(new Set)},a=c=>{const u=new Set(s);u.has(c)?u.delete(c):u.add(c),r(u)},l=()=>{s.size!==0&&n(Array.from(s))};return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-4xl border-2 border-red-500 flex flex-col max-h-[90vh]",onClick:c=>c.stopPropagation(),children:[o.jsx("h2",{className:"text-2xl font-bold text-center text-red-300 mb-4 flex-shrink-0",children:"Hapus Data Secara Massal"}),o.jsx("div",{className:"flex-grow overflow-auto rounded-lg",children:o.jsxs("table",{className:"w-full text-left text-sm",children:[o.jsx("thead",{className:"bg-gray-900 sticky top-0",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:o.jsx("input",{type:"checkbox",onChange:i,checked:e.length>0&&s.size===e.length,className:"h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-500 focus:ring-red-600"})}),o.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Nama"}),o.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Status"}),o.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Tanggal Dibuat"}),o.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Dibuat Oleh"})]})}),o.jsx("tbody",{className:"bg-gray-800 divide-y divide-gray-700",children:e.length>0?e.map(c=>o.jsxs("tr",{className:`hover:bg-gray-700/50 ${s.has(c.id)?"bg-red-900/30":""}`,children:[o.jsx("td",{className:"p-3",children:o.jsx("input",{type:"checkbox",checked:s.has(c.id),onChange:()=>a(c.id),className:"h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-500 focus:ring-red-600"})}),o.jsx("td",{className:"p-3 whitespace-nowrap",children:c.nama}),o.jsx("td",{className:"p-3 whitespace-nowrap",children:ut(c)}),o.jsx("td",{className:"p-3 whitespace-nowrap",children:yn(c.createdAt).date}),o.jsx("td",{className:"p-3 whitespace-nowrap",children:c.createdByName||"-"})]},c.id)):o.jsx("tr",{children:o.jsx("td",{colSpan:5,className:"text-center p-8 text-gray-400",children:"Tidak ada data untuk rentang tanggal yang dipilih."})})})]})}),o.jsxs("div",{className:"flex justify-between items-center mt-4 flex-shrink-0",children:[o.jsxs("p",{className:"text-sm text-gray-400",children:[s.size," data terpilih"]}),o.jsxs("div",{children:[o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 mr-3",children:"Tutup"}),o.jsx("button",{onClick:l,disabled:s.size===0,className:"px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed",children:"Hapus Data"})]})]})]})})},ew=({onClose:t,performanceData:e,onSelectTrainer:n})=>o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-green-500 flex flex-col max-h-[90vh]",onClick:s=>s.stopPropagation(),children:[o.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Laporan Kinerja Pengguna"}),o.jsx("div",{className:"flex-grow overflow-auto space-y-3 pr-2",children:e.map(({trainerName:s,total:r,summary:i})=>o.jsxs("div",{onClick:()=>n(s),className:"bg-gray-900/70 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-700 transition-colors",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold text-lg text-white",children:s}),o.jsx("p",{className:"text-xs text-gray-400",children:i})]}),o.jsx("span",{className:"text-2xl font-bold text-green-400",children:r})]},s))}),o.jsx("div",{className:"mt-4 pt-4 border-t border-gray-700 flex-shrink-0 flex justify-end",children:o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})}),tw=({onClose:t,trainerName:e,workData:n})=>o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-3xl border-2 border-yellow-500 flex flex-col max-h-[90vh]",onClick:s=>s.stopPropagation(),children:[o.jsxs("h2",{className:"text-2xl font-bold text-center text-yellow-300 mb-4",children:["Hasil Kerja: ",e]}),o.jsx("div",{className:"flex-grow overflow-auto space-y-4 pr-2",children:Object.entries(n).map(([s,r])=>o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold text-white bg-gray-700 px-3 py-2 rounded-t-lg",children:s}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 bg-gray-900/50 rounded-b-lg",children:r.map(i=>{var a;return o.jsxs("div",{className:"bg-black rounded-lg shadow-neumorphic overflow-hidden",children:[o.jsx("img",{src:i.photo||`https://placehold.co/300x200/2d3748/ffffff?text=${i.nama.charAt(0)}`,alt:i.nama,className:"w-full h-24 object-cover"}),o.jsxs("div",{className:"p-2 text-xs",children:[o.jsx("p",{className:"font-bold text-white truncate",children:i.nama}),o.jsx("p",{className:"text-yellow-400",children:ut(i)}),o.jsx("p",{className:"text-gray-400",children:Ht(i.tgl||((a=i.updatedAt)==null?void 0:a.toDate().toISOString().split("T")[0]))})]})]},i.id)})})]},s))}),o.jsx("div",{className:"flex justify-end mt-4",children:o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})}),dc=({onClose:t,onFetch:e})=>{const[n,s]=y.useState(""),[r,i]=y.useState("");return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-green-500",onClick:a=>a.stopPropagation(),children:[o.jsx("h3",{className:"text-2xl font-bold text-center text-green-300",children:"Pilih Rentang Tindak Lanjut"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Mulai"}),o.jsx("input",{type:"date",value:n,onChange:a=>s(a.target.value),className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Selesai"}),o.jsx("input",{type:"date",value:r,onChange:a=>i(a.target.value),className:"w-full input-rounded-border"})]})]}),o.jsx("button",{onClick:()=>e(n,r),className:"w-full px-6 py-3 bg-green-600 text-white font-bold rounded-xl text-lg hover:bg-green-700 shadow-neumorphic",children:"Tampilkan"}),o.jsx("button",{onClick:t,className:"w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700",children:"Tutup"})]})})},nw=({onClose:t,data:e})=>{const n=Object.values(e).reduce((s,r)=>s+Object.values(r).reduce((i,a)=>i+a.length,0),0);return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-indigo-500 flex flex-col max-h-[90vh]",onClick:s=>s.stopPropagation(),children:[o.jsx("h2",{className:"text-2xl font-bold text-center text-indigo-300 mb-2",children:"Rincian Tindak Lanjut Evaluasi"}),o.jsxs("p",{className:"text-center text-gray-400 mb-4",children:["Total Peserta Dievaluasi: ",n]}),o.jsx("div",{className:"flex-grow overflow-auto space-y-4 pr-2",children:Object.entries(e).map(([s,r])=>o.jsxs("div",{children:[o.jsxs("h3",{className:"text-lg font-semibold text-white bg-gray-700 px-3 py-2 rounded-t-lg",children:[s," (",Object.values(r).reduce((i,a)=>i+a.length,0)," Peserta)"]}),o.jsx("div",{className:"bg-gray-900/50 p-3 rounded-b-lg space-y-3",children:Object.entries(r).map(([i,a])=>o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-indigo-300",children:i}),o.jsx("ul",{className:"list-disc list-inside text-sm text-gray-300 pl-2",children:a.map((l,c)=>o.jsxs("li",{children:[l.nama," - dievaluasi oleh ",l.evaluator||"N/A"," pada ",l.tanggal]},c))})]},i))})]},s))}),o.jsx("div",{className:"flex justify-end mt-4",children:o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})})},sw=({onClose:t,title:e,columns:n,data:s})=>{const[r,i]=y.useState("Semua"),a=y.useMemo(()=>s?s.reduce((u,h)=>{const d=h.attendanceStatus||"N/A";return u[d]=(u[d]||0)+1,u},{}):{},[s]),l=y.useMemo(()=>s?r==="Semua"?s:s.filter(u=>u.attendanceStatus===r):[],[s,r]),c=y.useMemo(()=>{const u=Object.entries(a).filter(([,h])=>h>0).map(([h])=>h);return u.length>0&&u.unshift("Semua"),u},[a]);return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-7xl border-2 border-purple-500 flex flex-col max-h-[90vh]",onClick:u=>u.stopPropagation(),children:[o.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-4 flex-shrink-0",children:e}),c.length>0&&o.jsx("div",{className:"flex flex-wrap gap-2 mb-4 flex-shrink-0",children:c.map(u=>o.jsxs("button",{onClick:()=>i(u),className:`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${r===u?"bg-purple-600 text-white":"bg-gray-700 hover:bg-gray-600"}`,children:[u," ",o.jsx("span",{className:"text-xs bg-black/20 px-1.5 py-0.5 rounded-full",children:a[u]||l.length})]},u))}),o.jsx("div",{className:"flex-grow overflow-auto rounded-lg",children:o.jsxs("table",{className:"w-full text-left text-lg",children:[o.jsx("thead",{className:"bg-gray-900 sticky top-0",children:o.jsx("tr",{children:n.map(u=>o.jsx("th",{className:"p-4 font-semibold text-gray-100",children:u.header},u.accessor))})}),o.jsx("tbody",{className:"bg-gray-800 divide-y divide-gray-700",children:l.length>0?l.map((u,h)=>o.jsx("tr",{className:"hover:bg-gray-700/50",children:n.map(d=>o.jsx("td",{className:`p-4 whitespace-nowrap text-gray-200 ${d.accessor==="participantName"?"font-bold text-white text-xl":""}`,children:u[d.accessor]||"-"},`${h}-${d.accessor}`))},h)):o.jsx("tr",{children:o.jsx("td",{colSpan:n.length,className:"text-center p-8 text-gray-400 text-xl",children:"Tidak ada data untuk filter ini."})})})]})}),o.jsx("div",{className:"flex justify-end mt-4 flex-shrink-0",children:o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})})},rw=({onClose:t,onFetch:e,locations:n})=>{const[s,r]=y.useState(""),[i,a]=y.useState(""),[l,c]=y.useState("semua");return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-blue-500",onClick:u=>u.stopPropagation(),children:[o.jsx("h3",{className:"text-2xl font-bold text-center text-blue-300",children:"Rekapan Daftar Hadir Peserta"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Mulai"}),o.jsx("input",{type:"date",value:s,onChange:u=>r(u.target.value),className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Selesai"}),o.jsx("input",{type:"date",value:i,onChange:u=>a(u.target.value),className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Kategori Lokasi TC"}),o.jsxs("select",{value:l,onChange:u=>c(u.target.value),className:"w-full select-rounded-border",children:[o.jsx("option",{value:"semua",children:"Semua Lokasi"}),n.map(u=>o.jsx("option",{value:u,children:u},u))]})]})]}),o.jsx("button",{onClick:()=>e(s,i,l),className:"w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-lg hover:bg-blue-700 shadow-neumorphic",children:"Tampilkan"}),o.jsx("button",{onClick:t,className:"w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700",children:"Tutup"})]})})},iw=({onClose:t,participants:e,locations:n,onEditParticipant:s})=>{const{db:r,showToast:i,currentUser:a,setPostSaveAction:l,openModal:c}=y.useContext(Oe),u=Os(),[h,d]=y.useState(""),[f,p]=y.useState({}),[g,m]=y.useState(null);y.useEffect(()=>{n.length>0&&!h&&d(n[0])},[n,h]);const v=y.useMemo(()=>e.filter(_=>_.trainganDari===h),[e,h]),w=(_,X)=>{p(q=>({...q,[_]:{...q[_],status:X}}))},k=(_,X)=>{p(q=>({...q,[_]:{...q[_],notes:X}}))},I=_=>{m(_)},L=async()=>{if(!g)return;const _={...g,status:"Resign",tanggalResign:new Date().toISOString().split("T")[0]};delete _.id,await u.addOrUpdateRecord(null,_),m(null)},B=_=>{l("reopenAttendance"),s(_),t()},re=async()=>{if(Object.keys(f).length===0){i("Tidak ada perubahan untuk disimpan.");return}const _=Mo(r),X=Ve(r,`artifacts/${oe}/public/data/attendance`);v.forEach(q=>{const Pe=f[q.id];if(Pe&&Pe.status){const Ge=We(X);_.set(Ge,{participantId:q.id,participantName:q.nama,location:h,attendanceStatus:Pe.status,notes:Pe.notes||"",date:Vt(),recordedBy:a.nama})}});try{await _.commit(),i("Daftar hadir berhasil disimpan."),t()}catch{i("Gagal menyimpan daftar hadir.")}},pe=async(_,X,q)=>{if(!r||!_||!X){i("Silakan pilih rentang tanggal yang valid.");return}i("Mengambil data rekapan...");const Pe=se.fromDate(new Date(`${_}T00:00:00`)),Ge=se.fromDate(new Date(`${X}T23:59:59`)),T=Nt(Ve(r,`artifacts/${oe}/public/data/attendance`),en("date",">=",Pe),en("date","<=",Ge));try{let $=(await fi(T)).docs;q!=="semua"&&($=$.filter(ne=>ne.data().location===q));const Y=$.sort((ne,ue)=>ue.data().date.toDate().getTime()-ne.data().date.toDate().getTime()).map(ne=>{const ue=ne.data(),{date:Ee}=yn(ue.date);return{...ue,date:Ee}});c("participantAttendanceReportDisplay",{data:Y,title:"Rekapan Daftar Hadir Peserta",columns:[{header:"Nama",accessor:"participantName"},{header:"Tanggal",accessor:"date"},{header:"Lokasi",accessor:"location"},{header:"Status",accessor:"attendanceStatus"},{header:"Keterangan",accessor:"notes"},{header:"Oleh",accessor:"recordedBy"}]}),i(`Rekapan ditemukan: ${Y.length} data.`)}catch(D){i("Gagal mengambil data rekapan."),console.error("Error fetching participant attendance report:",D)}},J=y.useMemo(()=>Object.values(f).reduce((_,{status:X})=>(X&&(_[X]=(_[X]||0)+1),_),{Hadir:0,Izin:0,Sakit:0,Alpa:0}),[f]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-2xl border-2 border-green-500 flex flex-col",onClick:_=>_.stopPropagation(),children:[o.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Daftar Hadir Peserta TC"}),o.jsxs("div",{className:"mb-4",children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Pilih Lokasi TC"}),o.jsx("select",{value:h,onChange:_=>d(_.target.value),className:"w-full select-rounded-border",children:n.map(_=>o.jsx("option",{value:_,children:_},_))})]}),o.jsx("div",{className:"flex-grow overflow-y-auto max-h-[50vh] pr-2 space-y-4",children:v.map(_=>{var X;return o.jsxs("div",{className:"bg-gray-900 p-4 rounded-lg",children:[o.jsx("p",{className:"font-bold text-lg text-white mb-2",children:_.nama}),o.jsxs("div",{className:"flex flex-wrap gap-2 mb-2",children:[["Hadir","Izin","Sakit","Alpa"].map(q=>{var Pe;return o.jsx("button",{onClick:()=>w(_.id,q),className:`px-3 py-1 text-sm font-semibold rounded-md transition-all ${((Pe=f[_.id])==null?void 0:Pe.status)===q?"text-white "+(q==="Hadir"?"bg-green-500":q==="Izin"?"bg-blue-500":q==="Sakit"?"bg-yellow-500":"bg-orange-500"):"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,children:q},q)}),o.jsx("button",{onClick:()=>B(_),className:"px-3 py-1 text-sm font-semibold rounded-md bg-green-600 text-white hover:bg-green-700",children:"Lulus"}),o.jsx("button",{onClick:()=>I(_),className:"px-3 py-1 text-sm font-semibold rounded-md bg-red-600 text-white hover:bg-red-700",children:"Resign"})]}),o.jsx("input",{type:"text",placeholder:"Keterangan...",value:((X=f[_.id])==null?void 0:X.notes)||"",onChange:q=>k(_.id,q.target.value),className:"w-full input-rounded-border !py-2 !text-sm"})]},_.id)})}),o.jsxs("div",{className:"border-t border-gray-600 mt-4 pt-4",children:[o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-center mb-4",children:[o.jsxs("p",{children:["Hadir: ",o.jsx("span",{className:"font-bold text-green-400",children:J.Hadir})]}),o.jsxs("p",{children:["Izin: ",o.jsx("span",{className:"font-bold text-blue-400",children:J.Izin})]}),o.jsxs("p",{children:["Sakit: ",o.jsx("span",{className:"font-bold text-yellow-400",children:J.Sakit})]}),o.jsxs("p",{children:["Alpa: ",o.jsx("span",{className:"font-bold text-orange-400",children:J.Alpa})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-3",children:[o.jsx("button",{onClick:()=>c("participantAttendanceReportDateRange",{onFetch:pe,locations:n}),className:"px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 w-full sm:w-auto",children:"Rekapan Peserta"}),o.jsxs("div",{className:"flex gap-3 w-full sm:w-auto",children:[o.jsx("button",{onClick:t,className:"w-full px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"}),o.jsx("button",{onClick:re,className:"w-full px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700",children:"Simpan"})]})]})]})]})}),o.jsx(Ud,{show:!!g,onClose:()=>m(null),onConfirm:L,title:"Konfirmasi Resign",message:`Apakah Anda yakin ingin mengubah status ${g==null?void 0:g.nama} menjadi Resign? Status peserta akan diubah dan otomatis masuk ke dalam kelompok Resign.`,confirmText:"Ya, Resign"})]})},Fo=({children:t})=>{const e=y.useRef(null),[n,s]=y.useState(!1);return y.useEffect(()=>{const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(s(!0),r.unobserve(a.target))},{threshold:.1}),i=e.current;return i&&r.observe(i),()=>{i&&r.unobserve(i)}},[]),o.jsx("div",{ref:e,className:n?"animate-on-scroll":"opacity-0",children:t})},aw=({onClose:t,onSuperAdminLogin:e})=>{const[n,s]=y.useState(""),r=()=>e(n);return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-sm space-y-4",onClick:i=>i.stopPropagation(),children:[o.jsx("h3",{className:"text-xl font-bold text-center text-yellow-300",children:"Login Admin Utama"}),o.jsx("input",{type:"password",inputMode:"numeric",value:n,onChange:i=>s(i.target.value),className:"w-full input-rounded-border",placeholder:"Masukkan PIN Admin Utama",onKeyDown:i=>i.key==="Enter"&&r()}),o.jsx("button",{onClick:r,className:"w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl text-lg hover:bg-yellow-600 shadow-neumorphic",children:"Login"})]})})},ow=()=>{const{users:t,showToast:e,setCurrentUser:n,setUserRole:s,setLoginStep:r,openModal:i,closeModal:a}=y.useContext(Oe),[l,c]=y.useState(""),[u,h]=y.useState("");y.useEffect(()=>{if(t.length>0){const g=t.find(m=>m.nama)||t[0];g&&c(g.nama)}},[t]);const d=y.useCallback((g,m)=>{const v=t.find(w=>w.nama===g);v&&v.pin===m?(n(v),s(v.role),r("loggedIn"),e(`Selamat datang, ${v.nama}!`)):e("PIN salah. Coba lagi.")},[t,e,n,s,r]),f=y.useCallback(g=>{if(g==="197385"){const m={nama:"endayshebocah",role:"admin",permissions:cr.reduce((v,w)=>({...v,[w.key]:!0}),{})};n(m),s("admin"),r("loggedIn"),e("Selamat datang, Admin Utama!"),a()}else e("PIN Admin Utama salah.")},[e,n,s,r,a]),p=()=>{if(!l||!u){e("Silakan pilih pengguna dan masukkan PIN.");return}d(l,u)};return o.jsx("div",{className:"h-screen w-screen flex items-center justify-center bg-gray-900 p-4",children:o.jsxs("div",{className:"w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-neumorphic border-2 border-purple-500 space-y-6",children:[o.jsx("h1",{className:"text-3xl font-bold text-center text-blue-300",children:"Login Database"}),t.length>0?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Pilih Pengguna"}),o.jsx("select",{value:l,onChange:g=>c(g.target.value),className:"w-full select-rounded-border",children:t.map(g=>o.jsx("option",{value:g.nama,children:g.nama},g.id))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"PIN"}),o.jsx("input",{type:"password",inputMode:"numeric",value:u,onChange:g=>h(g.target.value),className:"w-full input-rounded-border",placeholder:"****",onKeyDown:g=>g.key==="Enter"&&p()})]})]}),o.jsx("button",{onClick:p,className:"w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-xl text-lg hover:bg-blue-600 shadow-neumorphic",children:"Masuk"})]}):o.jsxs("div",{className:"text-center text-gray-400 p-4 bg-gray-900/50 rounded-lg",children:[o.jsx("p",{children:"Tidak ada pengguna yang terdaftar."}),o.jsx("p",{className:"text-sm mt-2",children:"Silakan hubungi administrator untuk membuat akun pertama."})]}),o.jsx("p",{className:"text-center text-xs text-gray-500 cursor-pointer hover:text-yellow-400 transition-colors",onClick:()=>i("superAdminLogin",{onSuperAdminLogin:f}),children:"endayshebocah"})]})})},lw=()=>{const{users:t,showToast:e}=y.useContext(Oe),n=Os(),s=()=>({nama:"",pin:"",role:"trainer",permissions:cr.reduce((f,p)=>({...f,[p.key]:!p.adminOnly}),{})}),[r,i]=y.useState(s()),[a,l]=y.useState(null),c=f=>{const{name:p,value:g,type:m,checked:v}=f.target;i(m==="checkbox"?w=>({...w,permissions:{...w.permissions,[p]:v}}):w=>({...w,[p]:g}))},u=()=>{i(s()),l(null)},h=f=>{i({nama:f.nama||"",pin:f.pin||"",role:f.role||"trainer",permissions:f.permissions||s().permissions}),l(f.id)},d=async f=>{if(f.preventDefault(),!r.nama||!r.pin){e("Nama dan PIN harus diisi.");return}await n.addOrUpdateUser(a,r)&&u()};return o.jsxs("div",{className:"p-4 md:p-6 space-y-6",children:[o.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-teal-500 p-6 max-w-4xl mx-auto",children:[o.jsx("h2",{className:"text-2xl font-bold text-teal-300 mb-4",children:a?"Edit Pengguna":"Tambah Pengguna Baru"}),o.jsxs("form",{onSubmit:d,className:"space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[o.jsx("input",{type:"text",name:"nama",placeholder:"Nama Pengguna",value:r.nama,onChange:c,className:"input-rounded-border",required:!0}),o.jsx("input",{type:"text",name:"pin",placeholder:"PIN",value:r.pin,onChange:c,className:"input-rounded-border",required:!0}),o.jsxs("select",{name:"role",value:r.role,onChange:c,className:"select-rounded-border",children:[o.jsx("option",{value:"trainer",children:"Trainer"}),o.jsx("option",{value:"admin",children:"Admin"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold text-gray-300 mb-3",children:"Izin Akses Menu"}),o.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",children:cr.map(f=>o.jsxs("label",{className:"flex items-center space-x-3 p-2 bg-gray-900/50 rounded-lg",children:[o.jsx("input",{type:"checkbox",name:f.key,checked:!!r.permissions[f.key],onChange:c,className:"h-5 w-5 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-600"}),o.jsx("span",{className:"text-sm",children:f.label})]},f.key))})]}),o.jsxs("div",{className:"flex justify-end gap-3 pt-4",children:[a&&o.jsx("button",{type:"button",onClick:u,className:"px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700",children:"Batal"}),o.jsx("button",{type:"submit",className:"px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700",children:a?"Simpan Perubahan":"Tambah Pengguna"})]})]})]}),o.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-teal-500 p-6 max-w-4xl mx-auto",children:[o.jsx("h2",{className:"text-2xl font-bold text-teal-300 mb-4",children:"Daftar Pengguna"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left",children:[o.jsx("thead",{className:"border-b border-gray-600",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Nama"}),o.jsx("th",{className:"p-3",children:"Peran"}),o.jsx("th",{className:"p-3",children:"Izin Diberikan"}),o.jsx("th",{className:"p-3 text-right",children:"Aksi"})]})}),o.jsx("tbody",{children:t.map(f=>o.jsxs("tr",{className:"border-b border-gray-700",children:[o.jsx("td",{className:"p-3 align-top",children:f.nama}),o.jsx("td",{className:"p-3 align-top capitalize",children:f.role}),o.jsx("td",{className:"p-3 align-top",children:o.jsx("div",{className:"flex flex-wrap gap-1",children:cr.filter(p=>f.permissions&&f.permissions[p.key]).map(p=>o.jsx("span",{className:"text-xs bg-blue-900/70 text-blue-200 px-2 py-1 rounded-full",children:p.label},p.key))})}),o.jsxs("td",{className:"p-3 flex justify-end gap-2 align-top",children:[o.jsx("button",{onClick:()=>h(f),className:"p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[o.jsx("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),o.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]})}),o.jsx("button",{onClick:()=>n.deleteUser(f.id,f.nama),className:"p-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z",clipRule:"evenodd"})})})]})]},f.id))})]})})]})]})},cw=({latestRecords:t,allRecords:e,onEdit:n,onDelete:s})=>{const[r,i]=y.useState("semua"),[a,l]=y.useState(null),c=["Evaluasi Reflexology","Evaluasi Athletic Massage","Evaluasi Seitai"],u=y.useMemo(()=>["border-indigo-500","border-purple-500","border-teal-500","border-pink-500","border-sky-500"],[]),h=g=>{a&&a.id===g.id?l(null):l(g)},d=y.useMemo(()=>{const g=new Date;g.setHours(0,0,0,0);const m=t.filter(v=>{const w=c.some(re=>v.status.includes(re)),k=v.status==="Lulus";if(!w&&!k)return!1;let I=v.tgl||v.tanggalLulus;if(!I)return!1;const L=new Date(`${I}T00:00:00Z`);if(isNaN(L.getTime()))return!1;const B=new Date(L);return B.setMonth(B.getMonth()+3),B<=g});return r!=="semua"?m.filter(v=>v.status==="Lulus"&&r==="Evaluasi Reflexology"?!0:v.status===r):m},[t,r]),f=y.useMemo(()=>d.reduce((g,m)=>{const v=m.turunKeCabang||m.cabang||"Belum Ditentukan";return g[v]||(g[v]=[]),g[v].push(m),g},{}),[d]),p=y.useMemo(()=>Object.entries(f).sort(([,g],[,m])=>m.length-g.length),[f]);return o.jsxs("div",{className:"p-4 md:p-8 space-y-8",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[o.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-purple-300 text-center sm:text-left",children:"Jadwal Evaluasi"}),o.jsxs("select",{value:r,onChange:g=>i(g.target.value),className:"select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-auto",children:[o.jsx("option",{value:"semua",children:"Semua Kategori"}),c.map(g=>o.jsx("option",{value:g,children:g.replace("Evaluasi ","")},g))]})]}),p.length===0?o.jsx("div",{className:"text-center text-gray-400 mt-10 text-xl",children:"Tidak ada jadwal evaluasi yang jatuh tempo untuk filter ini."}):p.map(([g,m],v)=>o.jsx(Fo,{children:o.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${u[v%u.length]} p-4 sm:p-6 space-y-4`,children:[o.jsx("h3",{className:"text-xl font-semibold text-white",children:g}),o.jsx("div",{className:"flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container",children:m.map(w=>o.jsx(Yx,{record:w,onFollowUp:n,onCardClick:h},w.id))}),a&&m.some(w=>w.id===a.id)&&o.jsx("div",{className:"w-full",children:o.jsx(Oo,{participant:a,allRecords:e,onClose:()=>l(null),onEdit:n,onDelete:s})})]})},g))]})},uw=({deletedRecords:t,onRestore:e,onDeletePermanent:n})=>{const s=(r,i)=>{n(r,i)};return o.jsx("div",{className:"p-4 md:p-8",children:o.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-red-500 p-6",children:[o.jsx("h2",{className:"text-2xl font-bold text-red-300 mb-4",children:"Tong Sampah"}),t.length===0?o.jsx("p",{className:"text-gray-400",children:"Tong sampah kosong."}):o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left",children:[o.jsx("thead",{className:"border-b border-gray-600",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Nama"}),o.jsx("th",{className:"p-3 hidden sm:table-cell",children:"Status Terakhir"}),o.jsx("th",{className:"p-3 text-right",children:"Aksi"})]})}),o.jsx("tbody",{children:t.map(r=>o.jsxs("tr",{className:"border-b border-gray-700",children:[o.jsx("td",{className:"p-3",children:r.nama}),o.jsx("td",{className:"p-3 hidden sm:table-cell",children:r.status}),o.jsxs("td",{className:"p-3 flex justify-end gap-2",children:[o.jsx("button",{onClick:()=>s(r.id,r.nama),className:"p-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"Hapus"}),o.jsx("button",{onClick:()=>e(r.id),className:"p-2 bg-green-600 text-white rounded-md hover:bg-green-700",children:"Pulihkan"})]})]},r.id))})]})})]})})},hw=({onSave:t,onClose:e,initialData:n,evaluationStatus:s})=>{const[r,i]=y.useState(!1),[a,l]=y.useState({ratings:{},manualNotes:{},finalNote:""});y.useEffect(()=>{l({ratings:(n==null?void 0:n.ratings)||{ketepatanWaktu:"",bagianKaki:"",bagianTangan:"",bagianPunggung:"",bagianPundak:""},manualNotes:(n==null?void 0:n.manualNotes)||{ketepatanWaktu:"",bagianKaki:"",bagianTangan:"",bagianPunggung:"",bagianPundak:""},finalNote:(n==null?void 0:n.catatan)||""})},[n]);const c=s==="Evaluasi Seitai",u=[{key:"ketepatanWaktu",label:c?"Attitude":"Ketepatan Waktu (Durasi Sesi)"},{key:"bagianKaki",label:c?"Face Down":"Bagian Kaki"},{key:"bagianTangan",label:c?"Face Up":"Bagian Tangan"},{key:"bagianPunggung",label:c?"Side Lying":"Bagian Punggung"},{key:"bagianPundak",label:c?"Adjustment":"Bagian Pundak & Kepala"}],h=["Kurang","Cukup","Baik"],d=(v,w)=>{l(k=>({...k,ratings:{...k.ratings,[v]:w}}))},f=(v,w)=>{l(k=>({...k,manualNotes:{...k.manualNotes,[v]:w}}))},p=v=>{l(w=>({...w,finalNote:v.target.value}))},g=()=>{i(!0)},m=()=>{const v={ratings:a.ratings,manualNotes:a.manualNotes,catatan:a.finalNote};t(v),i(!1),e()};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:e,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-purple-500 flex flex-col max-h-[90vh]",onClick:v=>v.stopPropagation(),children:[o.jsx("h3",{className:"text-xl font-bold text-center text-purple-300 mb-4 flex-shrink-0",children:"Formulir Penilaian Cepat"}),o.jsx("div",{className:"flex-grow overflow-y-auto space-y-4 pr-2",children:u.map(v=>o.jsxs("div",{className:"bg-gray-900/70 p-4 rounded-lg",children:[o.jsx("label",{className:"font-semibold text-white mb-2 block",children:v.label}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-2",children:h.map(w=>o.jsx("button",{onClick:()=>d(v.key,w),className:`px-4 py-1.5 text-sm font-semibold rounded-md transition-all flex-grow ${a.ratings[v.key]===w?"text-white "+(w==="Baik"?"bg-green-500":w==="Cukup"?"bg-yellow-500":"bg-red-500"):"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,children:w},w))}),o.jsx("input",{type:"text",value:a.manualNotes[v.key]||"",onChange:w=>f(v.key,w.target.value),placeholder:"Tambah catatan spesifik (opsional)...",className:"w-full input-rounded-border !py-2 !text-sm"})]},v.key))}),o.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-700 flex-shrink-0",children:[o.jsx("label",{className:"block mb-2 font-semibold text-white",children:"Catatan / Ulasan Akhir (Opsional)"}),o.jsx("textarea",{name:"catatan",value:a.finalNote||"",onChange:p,placeholder:"Ulasan umum bisa diisi manual di sini...",className:"w-full textarea-rounded-border h-24"}),o.jsxs("div",{className:"flex justify-end gap-3 mt-3",children:[o.jsx("button",{onClick:e,className:"px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700",children:"Batal"}),o.jsx("button",{onClick:g,className:"px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700",children:"Simpan Penilaian"})]})]})]})}),o.jsx(Ud,{show:r,onClose:()=>i(!1),onConfirm:m,title:"Konfirmasi Simpan",message:"Apakah Anda yakin ingin menyimpan penilaian ini? Data akan disimpan sementara dan diterapkan saat Anda menyimpan formulir utama.",confirmText:"Ya, Simpan"})]})},Uo=["Tc Pusat Jakrta","Tc Panimbang","Tc Semarang","Tc Cirebon","Tc Deltamas","Tc Bali"],dw=({formValues:t,handleFormInputChange:e})=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Kota Asal"}),o.jsx("input",{type:"text",name:"kotaAsal",value:t.kotaAsal||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Masuk"}),o.jsx("input",{type:"date",name:"tanggalMasuk",value:t.tanggalMasuk||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Refrensi"}),o.jsx("input",{type:"text",name:"refrensi",value:t.refrensi||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Training Dari"}),o.jsxs("select",{name:"trainganDari",value:t.trainganDari||"",onChange:e,className:"w-full select-rounded-border",children:[o.jsx("option",{value:"",children:"Pilih Lokasi"}),Uo.map(n=>o.jsx("option",{value:n,children:n},n))]})]})]}),fw=({formValues:t,handleFormInputChange:e,onOpenAssessment:n,activeRecords:s})=>{const{userRole:r}=y.useContext(Oe),i=y.useMemo(()=>Lo(t.nama,s),[t.nama,s]);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Trainer"}),o.jsx("input",{type:"text",name:"trainer",value:t.trainer||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tahap Ceking"}),o.jsx("input",{type:"text",name:"tahapCeking",value:t.tahapCeking||"",onChange:e,readOnly:r!=="admin",className:`w-full input-rounded-border ${r!=="admin"?"bg-gray-700 cursor-not-allowed":""}`,placeholder:i})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal"}),o.jsx("input",{type:"date",name:"tgl",value:t.tgl||"",onChange:e,className:"w-full input-rounded-border"})]}),t.cekingResult!=="Lulus"&&o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Training Dari"}),o.jsxs("select",{name:"trainganDari",value:t.trainganDari||"",onChange:e,className:"w-full select-rounded-border",children:[o.jsx("option",{value:"",children:"Pilih Lokasi"}),Uo.map(a=>o.jsx("option",{value:a,children:a},a))]})]}),t.cekingResult==="Lulus"&&o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Lulus"}),o.jsx("input",{type:"date",name:"tanggalLulus",value:t.tanggalLulus||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Hasil Ceking"}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{type:"button",onClick:()=>e({target:{name:"cekingResult",value:"Masih Tahap Ceking"}}),className:`w-full py-2 rounded-lg font-semibold ${t.cekingResult==="Masih Tahap Ceking"||!t.cekingResult?"bg-blue-600 text-white":"bg-gray-600"}`,children:"Masih Tahap Ceking"}),o.jsx("button",{type:"button",onClick:()=>e({target:{name:"cekingResult",value:"Lulus"}}),className:`w-full py-2 rounded-lg font-semibold ${t.cekingResult==="Lulus"?"bg-green-600 text-white":"bg-gray-600"}`,children:"Lulus"})]})]}),o.jsx("div",{className:"sm:col-span-2",children:o.jsx("button",{type:"button",onClick:n,disabled:!t.nama,className:"w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-neumorphic disabled:bg-gray-700 disabled:cursor-not-allowed",children:"Buka & Isi Formulir Penilaian"})}),t.cekingResult==="Lulus"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Cabang"}),o.jsx("input",{type:"text",name:"turunKeCabang",value:t.turunKeCabang||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Acc Yang Meluluskan"}),o.jsx("input",{type:"text",name:"accYangMeluluskan",value:t.accYangMeluluskan||"",onChange:e,className:"w-full input-rounded-border"})]})]})]})},pw=({formValues:t,handleFormInputChange:e,onOpenAssessment:n,activeRecords:s})=>{const{userRole:r}=y.useContext(Oe),i=y.useMemo(()=>Lo(t.nama,s),[t.nama,s]),a=t.status.replace("Evaluasi ","");return o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Trainer"}),o.jsx("input",{type:"text",name:"trainer",value:t.trainer||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tahap Ceking"}),o.jsx("input",{type:"text",name:"tahapCeking",value:t.tahapCeking||"",onChange:e,readOnly:r!=="admin",className:`w-full input-rounded-border ${r!=="admin"?"bg-gray-700 cursor-not-allowed":""}`,placeholder:i})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Cabang"}),o.jsx("input",{type:"text",name:"cabang",value:t.cabang||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Evaluasi"}),o.jsx("input",{type:"date",name:"tgl",value:t.tgl||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Hasil Evaluasi"}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{type:"button",onClick:()=>e({target:{name:"evaluationResult",value:"Masih Tahap Evaluasi"}}),className:`w-full py-2 rounded-lg font-semibold ${t.evaluationResult==="Masih Tahap Evaluasi"||!t.evaluationResult?"bg-purple-600 text-white":"bg-gray-600"}`,children:`Masih Tahap ${a}`}),o.jsx("button",{type:"button",onClick:()=>e({target:{name:"evaluationResult",value:"Lulus"}}),className:`w-full py-2 rounded-lg font-semibold ${t.evaluationResult==="Lulus"?"bg-green-600 text-white":"bg-gray-600"}`,children:`Lulus ${a}`})]})]}),o.jsx("div",{className:"sm:col-span-2",children:o.jsx("button",{type:"button",onClick:n,disabled:!t.nama,className:"w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-neumorphic disabled:bg-gray-700 disabled:cursor-not-allowed",children:"Buka & Isi Formulir Penilaian"})}),t.evaluationResult==="Lulus"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Lulus Evaluasi"}),o.jsx("input",{type:"date",name:"tanggalLulus",value:t.tanggalLulus||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Acc Yang Meluluskan"}),o.jsx("input",{type:"text",name:"accYangMeluluskan",value:t.accYangMeluluskan||"",onChange:e,className:"w-full input-rounded-border"})]})]})]})},gw=({formValues:t,handleFormInputChange:e})=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Kota Asal"}),o.jsx("input",{type:"text",name:"kotaAsal",value:t.kotaAsal||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Masuk"}),o.jsx("input",{type:"date",name:"tanggalMasuk",value:t.tanggalMasuk||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Resign"}),o.jsx("input",{type:"date",name:"tanggalResign",value:t.tanggalResign||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Refrensi"}),o.jsx("input",{type:"text",name:"refrensi",value:t.refrensi||"",onChange:e,className:"w-full input-rounded-border"})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Training Dari"}),o.jsxs("select",{name:"trainganDari",value:t.trainganDari||"",onChange:e,className:"w-full select-rounded-border",children:[o.jsx("option",{value:"",children:"Pilih Lokasi"}),Uo.map(n=>o.jsx("option",{value:n,children:n},n))]})]})]}),mw=({isFormExpanded:t,formValues:e,handleFormInputChange:n,handleAddOrUpdateRecord:s,resetForm:r,fileInputRef:i,handleFileSelect:a,activeRecords:l,uniqueRecords:c,handleSuggestionClick:u,nameSuggestions:h,setNameSuggestions:d,onOpenAssessment:f})=>{const p=()=>{const{status:g}=e,m={formValues:e,handleFormInputChange:n,onOpenAssessment:f,activeRecords:l};return g==="Trainingan"?o.jsx(dw,{...m}):g==="Tahap Ceking"?o.jsx(fw,{...m}):g.startsWith("Evaluasi")?o.jsx(pw,{...m}):g==="Resign"?o.jsx(gw,{...m}):null};return o.jsx("div",{className:`details-section ${t?"p-4 sm:p-8":"details-section-hidden"}`,children:o.jsxs("form",{onSubmit:s,className:"space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4",children:[o.jsxs("div",{className:"sm:col-span-2 relative",children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Nama"}),o.jsx("input",{type:"text",name:"nama",value:e.nama||"",onChange:n,onBlur:()=>setTimeout(()=>d([]),150),required:!0,className:"w-full input-rounded-border",autoComplete:"off"}),h.length>0&&e.nama.length>0&&o.jsx("ul",{className:"absolute z-20 w-full bg-gray-700 border border-gray-600 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg",children:c.filter(g=>g.nama.toLowerCase().includes(e.nama.toLowerCase())).map(g=>o.jsx("li",{className:"px-4 py-2 cursor-pointer hover:bg-gray-600",onMouseDown:()=>u(g),children:g.nama},g.id))})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Status"}),o.jsxs("select",{name:"status",value:e.status||"Trainingan",onChange:n,className:"w-full select-rounded-border",children:[o.jsx("option",{value:"Trainingan",children:"Trainingan"}),o.jsx("option",{value:"Tahap Ceking",children:"Tahap Ceking"}),o.jsx("option",{value:"Evaluasi Reflexology",children:"Evaluasi Reflexology"}),o.jsx("option",{value:"Evaluasi Athletic Massage",children:"Evaluasi Athletic Massage"}),o.jsx("option",{value:"Evaluasi Seitai",children:"Evaluasi Seitai"}),o.jsx("option",{value:"Resign",children:"Resign"})]})]}),p()]}),o.jsxs("div",{className:"flex flex-col sm:flex-row flex-wrap justify-between items-center pt-4 gap-4",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("button",{type:"button",onClick:()=>i.current.click(),className:"px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 shadow-neumorphic",children:"Unggah Foto"}),e.photo&&o.jsx("img",{src:e.photo,alt:"Preview",className:"h-16 w-16 rounded-lg object-cover border-2 border-blue-400"}),o.jsx("input",{type:"file",ref:i,onChange:a,accept:"image/*",className:"hidden"})]}),o.jsxs("div",{className:"flex items-center gap-4 justify-end",children:[o.jsx("button",{type:"button",onClick:r,className:"px-6 py-3 bg-red-500 text-white font-bold rounded-xl text-base hover:bg-red-600 shadow-neumorphic",children:"Batal"}),o.jsx("button",{type:"submit",className:"px-6 py-3 bg-blue-500 text-white font-bold rounded-xl text-base hover:bg-blue-600 shadow-neumorphic",children:"Simpan"})]})]})]})})},yw=({records:t,allRecords:e,onEdit:n,onDelete:s})=>{const[r,i]=y.useState({}),[a,l]=y.useState(null),c=y.useMemo(()=>{const d=t.reduce((f,p)=>{const g=p.trainganDari;return g&&(f[g]=(f[g]||0)+1),f},{});return Object.keys(d).sort((f,p)=>d[p]-d[f])},[t]),u=y.useMemo(()=>["border-indigo-500","border-purple-500","border-teal-500","border-pink-500","border-sky-500"],[]),h=d=>{a&&a.id===d.id?l(null):l(d)};return o.jsx("main",{className:"flex-grow overflow-y-auto p-4 md:p-8 pt-4 flex flex-col gap-8",children:c.map((d,f)=>o.jsx(Fo,{children:o.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${u[f%u.length]} p-4 sm:p-6 space-y-4`,children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[o.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left",children:`Lokasi ${d}`}),o.jsxs("select",{value:r[d]||"semua",onChange:p=>i(g=>({...g,[d]:p.target.value})),onClick:p=>p.stopPropagation(),className:"select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-48",children:[o.jsx("option",{value:"semua",children:"Semua Status"}),o.jsx("option",{value:"Trainingan",children:"Trainingan"}),o.jsx("option",{value:"Ceking",children:"Ceking"}),o.jsx("option",{value:"Lulus",children:"Lulus"}),o.jsx("option",{value:"Resign",children:"Resign"})]})]}),o.jsx("div",{className:"flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container",children:t.filter(p=>p.trainganDari===d&&zx(p,r[d])).map(p=>o.jsx($d,{record:p,onCardClick:h},p.id))}),a&&t.some(p=>p.id===a.id&&p.trainganDari===d)&&o.jsx("div",{className:"w-full",children:o.jsx(Oo,{participant:a,allRecords:e,onClose:()=>l(null),onEdit:n,onDelete:s})})]})},d))})},vw=({records:t,allRecords:e,onEdit:n,onDelete:s})=>{const[r,i]=y.useState({}),[a,l]=y.useState(null),c=y.useMemo(()=>{const d=t.reduce((f,p)=>{const g=p.turunKeCabang||p.cabang;return g&&(f[g]=(f[g]||0)+1),f},{});return Object.keys(d).sort((f,p)=>d[p]-d[f])},[t]),u=y.useMemo(()=>["border-indigo-500","border-purple-500","border-teal-500","border-pink-500","border-sky-500"],[]),h=d=>{a&&a.id===d.id?l(null):l(d)};return o.jsx("main",{className:"flex-grow overflow-y-auto p-4 md:p-8 pt-4 flex flex-col gap-8",children:c.map((d,f)=>o.jsx(Fo,{children:o.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${u[f%u.length]} p-4 sm:p-6 space-y-4`,children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[o.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left",children:`Evaluasi Therapist ${d}`}),o.jsxs("select",{value:r[d]||"semua",onChange:p=>i(g=>({...g,[d]:p.target.value})),onClick:p=>p.stopPropagation(),className:"select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-auto",children:[o.jsx("option",{value:"semua",children:"Tampilkan Semua"}),o.jsx("option",{value:"Evaluasi Reflexology",children:"Evaluasi Reflexology"}),o.jsx("option",{value:"Evaluasi Athletic Massage",children:"Evaluasi Athletic Massage"}),o.jsx("option",{value:"Evaluasi Seitai",children:"Evaluasi Seitai"})]})]}),o.jsx("div",{className:"flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container",children:t.filter(p=>(p.turunKeCabang===d||p.cabang===d)&&Hx(p,r[d])).map(p=>o.jsx($d,{record:p,onCardClick:h},p.id))}),a&&t.some(p=>p.id===a.id&&(p.turunKeCabang===d||p.cabang===d))&&o.jsx("div",{className:"w-full",children:o.jsx(Oo,{participant:a,allRecords:e,onClose:()=>l(null),onEdit:n,onDelete:s})})]})},d))})},xw=({onClose:t,onConfirm:e,field:n,incorrectValue:s,correctValue:r,count:i})=>o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[80] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-green-500",onClick:a=>a.stopPropagation(),children:[o.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Konfirmasi Penggabungan Data"}),o.jsxs("p",{className:"text-center text-gray-300 mb-2",children:["Anda akan menggabungkan ",o.jsx("span",{className:"font-bold text-white",children:i})," data."]}),o.jsxs("div",{className:"text-center bg-gray-900/50 p-4 rounded-lg",children:[o.jsxs("p",{className:"text-gray-400",children:["Pada kolom ",o.jsx("span",{className:"font-semibold text-white",children:n}),":"]}),o.jsx("p",{className:"text-red-400",children:s}),o.jsx("p",{className:"text-gray-400",children:"akan diubah menjadi"}),o.jsx("p",{className:"text-green-400",children:r})]}),o.jsx("p",{className:"text-center text-xs text-gray-500 mt-4",children:"Tindakan ini tidak dapat diurungkan. Pastikan pilihan Anda sudah benar."}),o.jsxs("div",{className:"flex justify-center gap-4 pt-6",children:[o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Batal"}),o.jsx("button",{onClick:e,className:"px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700",children:"Ya, Gabungkan"})]})]})}),ww=({onClose:t,records:e})=>{const n=Os(),{openModal:s,closeModal:r,showToast:i}=y.useContext(Oe),a=[{key:"trainer",label:"Trainer"},{key:"trainganDari",label:"Training Dari"},{key:"turunKeCabang",label:"Turun Ke Cabang"},{key:"cabang",label:"Cabang Evaluasi"},{key:"refrensi",label:"Refrensi"}],[l,c]=y.useState(a[0].key),[u,h]=y.useState(""),[d,f]=y.useState(""),p=y.useMemo(()=>{if(!l||!e)return[];const m=new Set(e.map(v=>v[l]).filter(Boolean));return Array.from(m).sort()},[l,e]),g=async()=>{var v;if(!l||!u||!d||u===d){i("Harap pilih nilai yang valid dan berbeda.");return}const m=e.filter(w=>w[l]===u);s("mergeData",{field:(v=a.find(w=>w.key===l))==null?void 0:v.label,incorrectValue:u,correctValue:d,count:m.length,onConfirm:async()=>{await n.mergeMasterData(l,u,d)&&(r(),r())}})};return o.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4",onClick:t,children:o.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-2xl border-2 border-green-500 flex flex-col max-h-[90vh]",onClick:m=>m.stopPropagation(),children:[o.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Manajemen Data Induk"}),o.jsxs("div",{className:"flex-grow overflow-auto space-y-4 pr-2",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Pilih Kolom Data"}),o.jsx("select",{value:l,onChange:m=>{c(m.target.value),h(""),f("")},className:"w-full select-rounded-border",children:a.map(m=>o.jsx("option",{value:m.key,children:m.label},m.key))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Nilai yang Salah (Akan Diubah)"}),o.jsxs("select",{value:u,onChange:m=>h(m.target.value),className:"w-full select-rounded-border bg-red-900/20 border-red-500",children:[o.jsx("option",{value:"",children:"Pilih nilai..."}),p.map(m=>o.jsx("option",{value:m,children:m},m))]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block mb-2 text-gray-300",children:"Nilai yang Benar (Menjadi Tujuan)"}),o.jsxs("select",{value:d,onChange:m=>f(m.target.value),className:"w-full select-rounded-border bg-green-900/20 border-green-500",children:[o.jsx("option",{value:"",children:"Pilih nilai..."}),p.filter(m=>m!==u).map(m=>o.jsx("option",{value:m,children:m},m))]})]})]}),o.jsxs("div",{className:"flex justify-end gap-3 mt-4 pt-4 border-t border-gray-700",children:[o.jsx("button",{onClick:t,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"}),o.jsx("button",{onClick:g,className:"px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700",children:"Gabungkan Data"})]})]})})},bw=({setActiveView:t,onEditParticipant:e,activeRecords:n})=>{var w,k,I,L,B,re,pe;const{currentUser:s,showToast:r,setCurrentUser:i,setUserRole:a,setLoginStep:l,openModal:c}=y.useContext(Oe),{attendanceParticipants:u,allFilterOptions:h}=Fd("","semua"),d=Wx(),[f,p]=y.useState(!1),g=y.useRef(null);y.useEffect(()=>{const J=_=>{g.current&&!g.current.contains(_.target)&&p(!1)};return document.addEventListener("mousedown",J),()=>document.removeEventListener("mousedown",J)},[]);const m=J=>{J(),p(!1)},v=()=>{i(null),a(null),l("login"),r("Anda telah berhasil logout.")};return o.jsxs("div",{ref:g,className:"relative",children:[o.jsx("button",{onClick:()=>p(J=>!J),className:"p-3 bg-gray-700 rounded-lg shadow-neumorphic",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),f&&o.jsxs("div",{className:"absolute top-full right-0 mt-2 w-64 bg-gray-700 rounded-lg shadow-lg z-20 border border-gray-600 p-2 space-y-1",children:[o.jsxs("div",{className:"px-4 py-2",children:[o.jsx("p",{className:"text-sm text-gray-400",children:"Pengguna:"}),o.jsx("p",{className:"font-bold text-white truncate",children:s==null?void 0:s.nama})]}),o.jsx("div",{className:"border-t border-gray-600 my-1"}),((w=s==null?void 0:s.permissions)==null?void 0:w.daftarHadir)&&o.jsx("button",{onClick:()=>m(()=>c("attendance",{participants:u,locations:h.tc,onEditParticipant:e})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-emerald-500 hover:bg-emerald-600",children:"Daftar Hadir Peserta"}),((k=s==null?void 0:s.permissions)==null?void 0:k.tindakLanjut)&&o.jsx("button",{onClick:()=>m(()=>c("followUpDateRange",{onFetch:d.handleFetchFollowUp})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600",children:"Tindak Lanjut"}),((I=s==null?void 0:s.permissions)==null?void 0:I.hasilKerja)&&o.jsx("button",{onClick:()=>m(()=>c("trainerPerformanceDateRange",{onFetch:d.handleFetchTrainerPerformanceByDate})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600",children:"Hasil Kerja Trainer"}),((L=s==null?void 0:s.permissions)==null?void 0:L.perbaikanData)&&o.jsx("button",{onClick:()=>m(()=>c("masterData",{records:n})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-amber-500 hover:bg-amber-600",children:"Perbaikan Data"}),((B=s==null?void 0:s.permissions)==null?void 0:B.izinAkses)&&o.jsx("button",{onClick:()=>m(()=>t("izinAkses")),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-violet-500 hover:bg-violet-600",children:"Izin Akses"}),((re=s==null?void 0:s.permissions)==null?void 0:re.trash)&&o.jsx("button",{onClick:()=>m(()=>t("trash")),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-rose-500 hover:bg-rose-600",children:"Tong Sampah"}),((pe=s==null?void 0:s.permissions)==null?void 0:pe.hapusBeberapa)&&o.jsx("button",{onClick:()=>m(()=>c("bulkDeleteDateRange",{onFetch:d.handleFetchForBulkDelete})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-red-600 hover:bg-red-700",children:"Hapus Beberapa Data"}),o.jsx("div",{className:"border-t border-gray-600 my-1"}),o.jsx("button",{onClick:()=>m(v),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-slate-500 hover:bg-slate-600",children:"Logout"})]})]})};function kw(){const{showToast:t,activityNotifications:e,setLastSaveTimestamp:n,postSaveAction:s,setPostSaveAction:r,openModal:i}=y.useContext(Oe),a=Os(),[l,c]=y.useState(!1),[u,h]=y.useState(""),[d,f]=y.useState("peserta"),[p,g]=y.useState("semua"),[m,v]=y.useState([]),[w,k]=y.useState(!1),I=y.useRef(null),L=y.useRef(null),B=y.useRef(null),{allRecords:re,activeRecords:pe,deletedRecords:J,uniqueLatestRecords:_,filteredRecords:X,allFilterOptions:q,attendanceParticipants:Pe}=Fd(u,p),Ge=y.useMemo(()=>({nama:"",tgl:"",trainer:"",status:"Trainingan",tahapCeking:"",photo:null,kotaAsal:"",tanggalMasuk:"",refrensi:"",turunKeCabang:"",accYangMeluluskan:"",trainganDari:"",tanggalLulus:"",tanggalResign:"",cabang:"",evaluationResult:"",cekingResult:"",isDeleted:!1,penilaian:null}),[]),{formValues:T,setFormValues:D,recordToEdit:$,setRecordToEdit:Q,nameSuggestions:Y,setNameSuggestions:ne,handleFormInputChange:ue,handleSuggestionClick:Ee,resetForm:ce}=Gx(Ge,_,re),Te=y.useCallback(F=>{let K={...Ge,...F};F.status.startsWith("Ceking tahap")?(K.tahapCeking=F.status,K.status="Tahap Ceking",K.cekingResult="Masih Tahap Ceking"):F.status==="Lulus"&&(K.status="Tahap Ceking",K.cekingResult="Lulus"),Q(F),D(K),c(!0),L.current&&L.current.scrollIntoView({behavior:"smooth",block:"start"}),f("peserta")},[Ge,D,Q]);y.useEffect(()=>{const F=K=>{I.current&&!I.current.contains(K.target)&&k(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]),y.useEffect(()=>{g("semua")},[d]),y.useEffect(()=>{const F=new Date;F.setHours(0,0,0,0);const me=_.filter(G=>G.status==="Lulus"||G.status.startsWith("Evaluasi")).map(G=>{const He=G.tanggalLulus||G.tgl;if(!He)return null;const vt=new Date(`${He}T00:00:00Z`);if(isNaN(vt.getTime()))return null;const Fs=new Date(vt);if(Fs.setMonth(Fs.getMonth()+3),Fs<=F){let gi="Evaluasi Lanjutan";return G.status==="Lulus"?gi="Evaluasi Reflexology":G.status.startsWith("Evaluasi ")&&(gi=G.status),{...G,dueDate:Fs,nextEvaluation:gi}}return null}).filter(Boolean);v(me)},[_]);const Xe=y.useCallback(async F=>{const K=F.target.files[0];if(K){const me=new FileReader;me.onload=async G=>{try{t("Mengompres gambar...");const He=await qx(G.target.result);D(vt=>({...vt,photo:He})),t("Gambar berhasil dikompres!")}catch{t("Gagal mengompres gambar."),D(vt=>({...vt,photo:G.target.result}))}},me.readAsDataURL(K)}},[t,D]),Ze=async F=>{F.preventDefault();let K={...T};if(!$&&T.nama){const G=pe.find(He=>He.nama.toLowerCase()===T.nama.toLowerCase());if(G){await a.addRepairRequest({existingRecord:G,newRecordData:K}),ce();return}}T.status==="Tahap Ceking"&&(K.status=T.cekingResult==="Lulus"?"Lulus":T.tahapCeking||Lo(T.nama,pe)),await a.addOrUpdateRecord($?$.id:null,K)&&(ce(),n(Date.now()),s==="reopenAttendance"&&(i("attendance",{participants:Pe,locations:q.tc,onEditParticipant:Te}),r(null)))},Ut=F=>{D(K=>({...K,penilaian:F})),t("Data penilaian telah disimpan sementara. Klik 'Simpan' untuk finalisasi.")},ze=y.useMemo(()=>d==="peserta"?{label:"Lokasi TC",options:q.tc}:d==="cabang"||d==="jadwal"?{label:"Cabang",options:q.cabang}:{label:"Filter",options:[]},[d,q]),ie=()=>{switch(d){case"peserta":return o.jsx(yw,{records:X,allRecords:re,onEdit:Te,onDelete:a.softDeleteRecord});case"cabang":return o.jsx(vw,{records:X,allRecords:re,onEdit:Te,onDelete:a.softDeleteRecord});case"izinAkses":return o.jsx(lw,{});case"jadwal":return o.jsx(cw,{latestRecords:X,allRecords:re,onEdit:Te,onDelete:a.softDeleteRecord});case"trash":return o.jsx(uw,{deletedRecords:J,onRestore:a.restoreRecord,onDeletePermanent:a.deleteRecordPermanent});default:return null}};return o.jsxs("div",{className:"h-screen flex flex-col bg-gray-900 text-white overflow-hidden",children:[o.jsxs("div",{className:"flex-shrink-0",children:[o.jsx("div",{ref:L,className:"p-4 pt-6 md:px-8",children:o.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-purple-500 overflow-hidden",children:[o.jsxs("div",{onClick:()=>c(F=>!F),className:"p-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-700/50 cursor-pointer",children:[o.jsxs("div",{className:"flex items-center gap-3 self-start",children:[o.jsx("h2",{className:"text-xl font-bold text-blue-300",children:"Pendaftaran Peserta"}),o.jsx("svg",{className:`w-6 h-6 text-blue-300 transition-transform duration-300 ${l?"":"-rotate-180"}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})]}),o.jsx("input",{type:"text",placeholder:"Cari Nama...",onClick:F=>F.stopPropagation(),className:"w-full sm:max-w-xs input-rounded-border",value:u,onChange:F=>h(F.target.value)})]}),o.jsx(mw,{isFormExpanded:l,formValues:T,handleFormInputChange:ue,handleAddOrUpdateRecord:Ze,resetForm:ce,fileInputRef:B,handleFileSelect:Xe,activeRecords:pe,uniqueRecords:_,handleSuggestionClick:Ee,nameSuggestions:Y,setNameSuggestions:ne,onOpenAssessment:()=>i("assessment",{onSave:Ut,initialData:T.penilaian,evaluationStatus:T.status})})]})}),o.jsx("div",{className:"p-4 md:px-8",children:o.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4",children:[o.jsx("button",{onClick:()=>f("peserta"),className:`w-full py-3 rounded-lg text-lg font-bold transition-colors ${d==="peserta"?"bg-purple-600 text-white":"bg-gray-700 text-gray-300"}`,children:"Daftar Peserta"}),o.jsx("button",{onClick:()=>f("cabang"),className:`w-full py-3 rounded-lg text-lg font-bold transition-colors ${d==="cabang"?"bg-purple-600 text-white":"bg-gray-700 text-gray-300"}`,children:"Cabang"}),o.jsx("button",{onClick:()=>f("jadwal"),className:`w-full py-3 rounded-lg text-lg font-bold transition-colors ${d==="jadwal"?"bg-purple-600 text-white":"bg-gray-700 text-gray-300"}`,children:"Jadwal Evaluasi"})]})}),(d==="peserta"||d==="cabang"||d==="jadwal")&&o.jsxs("div",{className:"px-4 md:px-8 pb-4 flex flex-wrap items-center gap-4",children:[o.jsxs("select",{value:p,onChange:F=>g(F.target.value),className:"select-rounded-border flex-grow",children:[o.jsxs("option",{value:"semua",children:["Tampilkan Semua ",ze.label]}),o.jsx("optgroup",{label:ze.label,children:ze.options.map(F=>o.jsx("option",{value:F,children:F},F))})]}),o.jsxs("div",{ref:I,className:"relative",children:[o.jsxs("button",{onClick:()=>k(F=>!F),className:"p-3 bg-gray-700 rounded-lg shadow-neumorphic",children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),m.length+e.length>0&&o.jsx("span",{className:"absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white",children:m.length+e.length})]}),w&&o.jsx(Jx,{evaluationNotifications:m,activityNotifications:e,onClose:()=>k(!1)})]}),o.jsx(bw,{setActiveView:f,onEditParticipant:Te,activeRecords:pe})]})]}),o.jsx("div",{className:"flex-grow overflow-y-auto",children:ie()})]})}const Ew=()=>{const{modal:t,closeModal:e}=y.useContext(Oe);if(!t.type)return null;switch(t.type){case"assessment":return o.jsx(hw,{onClose:e,...t.props});case"attendance":return o.jsx(iw,{onClose:e,...t.props});case"followUpDateRange":return o.jsx(dc,{onClose:e,...t.props});case"followUpDetails":return o.jsx(nw,{onClose:e,...t.props});case"trainerPerformanceDateRange":return o.jsx(dc,{onClose:e,...t.props});case"trainerPerformanceList":return o.jsx(ew,{onClose:e,...t.props});case"trainerWorkDetail":return o.jsx(tw,{onClose:e,...t.props});case"bulkDeleteDateRange":return o.jsx(Xx,{onClose:e,...t.props});case"bulkDeleteData":return o.jsx(Zx,{onClose:e,...t.props});case"masterData":return o.jsx(ww,{onClose:e,...t.props});case"mergeData":return o.jsx(xw,{onClose:e,...t.props});case"superAdminLogin":return o.jsx(aw,{onClose:e,...t.props});case"participantAttendanceReportDateRange":return o.jsx(rw,{onClose:e,...t.props});case"participantAttendanceReportDisplay":return o.jsx(sw,{onClose:e,...t.props});default:return null}};function Tw(){const{loginStep:t,isAuthReady:e,isLoginDataReady:n,setAppUpdateAvailable:s}=y.useContext(Oe);return y.useEffect(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(r=>{console.log("Service Worker berhasil didaftarkan:",r),r.onupdatefound=()=>{const i=r.installing;i&&(i.onstatechange=()=>{i.state==="installed"&&navigator.serviceWorker.controller&&s(!0)})}}).catch(r=>{console.log("Pendaftaran Service Worker gagal:",r)})})},[s]),!e||!n?o.jsx(Qx,{}):o.jsxs(o.Fragment,{children:[t==="login"?o.jsx(ow,{}):o.jsx(kw,{}),o.jsx(Ew,{})]})}function Nw(){y.useEffect(()=>{let e=document.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",e.content="width=device-width, initial-scale=1.0",document.head.appendChild(e));let n=document.querySelector('link[rel="manifest"]');n||(n=document.createElement("link"),n.rel="manifest",n.href="/manifest.json",document.head.appendChild(n));let s=document.querySelector('meta[name="theme-color"]');s||(s=document.createElement("meta"),s.name="theme-color",s.content="#111827",document.head.appendChild(s))},[]);const t=`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      html, body, #root { min-height: 100vh; min-height: -webkit-fill-available; scroll-behavior: smooth; }
      body { font-family: 'Inter', sans-serif; background-color: #111827; color: #ffffff; max-width: 100%; overflow-x: hidden; }
      .shadow-neumorphic { box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6), -4px -4px 6px rgba(255, 255, 255, 0.05); }
      .shadow-inner-custom { box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.1); }
      @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px) translateX(-50%); } to { opacity: 1; transform: translateY(0) translateX(-50%); } }
      .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
      @keyframes fade-in-up-view { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-up-view { animation: fade-in-up-view 0.5s ease-out forwards; }
      .input-rounded-border, .select-rounded-border, .textarea-rounded-border { background-color: #1a1a1a; border: 1px solid #4a90e2; border-radius: 8px; padding: 12px; outline: none; color: #ffffff; font-size: 16px; box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.1); }
      .input-rounded-border:focus, .select-rounded-border:focus, .textarea-rounded-border:focus { border-color: #60a5fa; }
      .select-rounded-border { -webkit-appearance: none; -moz-appearance: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.7rem center; background-size: 1.5em; padding-right: 2.5rem; }
      .horizontal-scroll-container::-webkit-scrollbar { height: 8px; }
      .horizontal-scroll-container::-webkit-scrollbar-track { background: #333; border-radius: 10px; }
      .horizontal-scroll-container::-webkit-scrollbar-thumb { background: #555; border-radius: 10px; }
      .details-section { max-height: 1500px; overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, padding 0.5s ease-in-out; opacity: 1; }
      .details-section-hidden { max-height: 0; opacity: 0; padding-top: 0 !important; padding-bottom: 0 !important; margin-top: 0 !important; }
      @keyframes slide-in-up-scroll { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      .animate-on-scroll { animation: slide-in-up-scroll 0.6s ease-out forwards; }
      .popup-wrapper { transition: opacity 300ms ease-out, transform 300ms ease-out; opacity: 0; transform: scale(0.95); }
      .popup-wrapper-visible { opacity: 1; transform: scale(1); }
    `;return o.jsxs(Kx,{children:[o.jsx("style",{children:t}),o.jsx(Tw,{})]})}
