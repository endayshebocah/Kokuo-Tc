(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function Nd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ic={exports:{}},Ds={},Ac={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),Sd=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Od=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Ld=Symbol.for("react.suspense"),Fd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),ll=Symbol.iterator;function Bd(n){return n===null||typeof n!="object"?null:(n=ll&&n[ll]||n["@@iterator"],typeof n=="function"?n:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rc=Object.assign,Cc={};function jn(n,e,t){this.props=n,this.context=e,this.refs=Cc,this.updater=t||kc}jn.prototype.isReactComponent={};jn.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};jn.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Nc(){}Nc.prototype=jn.prototype;function ca(n,e,t){this.props=n,this.context=e,this.refs=Cc,this.updater=t||kc}var ua=ca.prototype=new Nc;ua.constructor=ca;Rc(ua,jn.prototype);ua.isPureReactComponent=!0;var cl=Array.isArray,Sc=Object.prototype.hasOwnProperty,ha={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Dc(n,e,t){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Sc.call(e,r)&&!Pc.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=t;else if(1<c){for(var h=Array(c),f=0;f<c;f++)h[f]=arguments[f+2];s.children=h}if(n&&n.defaultProps)for(r in c=n.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:_r,type:n,key:i,ref:o,props:s,_owner:ha.current}}function $d(n,e){return{$$typeof:_r,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function da(n){return typeof n=="object"&&n!==null&&n.$$typeof===_r}function qd(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ul=/\/+/g;function Ei(n,e){return typeof n=="object"&&n!==null&&n.key!=null?qd(""+n.key):e.toString(36)}function is(n,e,t,r,s){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case _r:case Sd:o=!0}}if(o)return o=n,s=s(o),n=r===""?"."+Ei(o,0):r,cl(s)?(t="",n!=null&&(t=n.replace(ul,"$&/")+"/"),is(s,e,t,"",function(f){return f})):s!=null&&(da(s)&&(s=$d(s,t+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ul,"$&/")+"/")+n)),e.push(s)),1;if(o=0,r=r===""?".":r+":",cl(n))for(var c=0;c<n.length;c++){i=n[c];var h=r+Ei(i,c);o+=is(i,e,t,h,s)}else if(h=Bd(n),typeof h=="function")for(n=h.call(n),c=0;!(i=n.next()).done;)i=i.value,h=r+Ei(i,c++),o+=is(i,e,t,h,s);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yr(n,e,t){if(n==null)return n;var r=[],s=0;return is(n,r,"","",function(i){return e.call(t,i,s++)}),r}function zd(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var He={current:null},as={transition:null},Hd={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:as,ReactCurrentOwner:ha};function jc(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Yr,forEach:function(n,e,t){Yr(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Yr(n,function(){e++}),e},toArray:function(n){return Yr(n,function(e){return e})||[]},only:function(n){if(!da(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};J.Component=jn;J.Fragment=Pd;J.Profiler=jd;J.PureComponent=ca;J.StrictMode=Dd;J.Suspense=Ld;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd;J.act=jc;J.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=Rc({},n.props),s=n.key,i=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ha.current),e.key!==void 0&&(s=""+e.key),n.type&&n.type.defaultProps)var c=n.type.defaultProps;for(h in e)Sc.call(e,h)&&!Pc.hasOwnProperty(h)&&(r[h]=e[h]===void 0&&c!==void 0?c[h]:e[h])}var h=arguments.length-2;if(h===1)r.children=t;else if(1<h){c=Array(h);for(var f=0;f<h;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:_r,type:n.type,key:s,ref:i,props:r,_owner:o}};J.createContext=function(n){return n={$$typeof:Od,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Vd,_context:n},n.Consumer=n};J.createElement=Dc;J.createFactory=function(n){var e=Dc.bind(null,n);return e.type=n,e};J.createRef=function(){return{current:null}};J.forwardRef=function(n){return{$$typeof:Md,render:n}};J.isValidElement=da;J.lazy=function(n){return{$$typeof:Ud,_payload:{_status:-1,_result:n},_init:zd}};J.memo=function(n,e){return{$$typeof:Fd,type:n,compare:e===void 0?null:e}};J.startTransition=function(n){var e=as.transition;as.transition={};try{n()}finally{as.transition=e}};J.unstable_act=jc;J.useCallback=function(n,e){return He.current.useCallback(n,e)};J.useContext=function(n){return He.current.useContext(n)};J.useDebugValue=function(){};J.useDeferredValue=function(n){return He.current.useDeferredValue(n)};J.useEffect=function(n,e){return He.current.useEffect(n,e)};J.useId=function(){return He.current.useId()};J.useImperativeHandle=function(n,e,t){return He.current.useImperativeHandle(n,e,t)};J.useInsertionEffect=function(n,e){return He.current.useInsertionEffect(n,e)};J.useLayoutEffect=function(n,e){return He.current.useLayoutEffect(n,e)};J.useMemo=function(n,e){return He.current.useMemo(n,e)};J.useReducer=function(n,e,t){return He.current.useReducer(n,e,t)};J.useRef=function(n){return He.current.useRef(n)};J.useState=function(n){return He.current.useState(n)};J.useSyncExternalStore=function(n,e,t){return He.current.useSyncExternalStore(n,e,t)};J.useTransition=function(){return He.current.useTransition()};J.version="18.3.1";Ac.exports=J;var N=Ac.exports;const Vc=Nd(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=N,Kd=Symbol.for("react.element"),Gd=Symbol.for("react.fragment"),Qd=Object.prototype.hasOwnProperty,Yd=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jd={key:!0,ref:!0,__self:!0,__source:!0};function Oc(n,e,t){var r,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qd.call(e,r)&&!Jd.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Kd,type:n,key:i,ref:o,props:s,_owner:Yd.current}}Ds.Fragment=Gd;Ds.jsx=Oc;Ds.jsxs=Oc;Ic.exports=Ds;var l=Ic.exports;/**
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
 */const Mc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],h=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let g=(c&15)<<2|f>>6,b=f&63;h||(b=64,o||(g=64)),r.push(t[m],t[y],t[g],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||y==null)throw new Zd;const g=i<<2|c>>4;if(r.push(g),f!==64){const b=c<<4&240|f>>2;if(r.push(b),y!==64){const T=f<<6&192|y;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ef=function(n){const e=Mc(n);return Lc.encodeByteArray(e,!0)},ys=function(n){return ef(n).replace(/\./g,"")},Fc=function(n){try{return Lc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nf=()=>tf().__FIREBASE_DEFAULTS__,rf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fc(n[1]);return e&&JSON.parse(e)},js=()=>{try{return nf()||rf()||sf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uc=n=>{var e,t;return(t=(e=js())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},af=n=>{const e=Uc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Bc=()=>{var n;return(n=js())===null||n===void 0?void 0:n.config},$c=n=>{var e;return(e=js())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function lf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[ys(JSON.stringify(t)),ys(JSON.stringify(o)),c].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function uf(){var n;const e=(n=js())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function df(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ff(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pf(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mf(){return!uf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gf(){try{return typeof indexedDB=="object"}catch{return!1}}function yf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const _f="FirebaseError";class Tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=_f,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vf(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,c,r)}}function vf(n,e){return n.replace(bf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bf=/\{\$([^}]+)}/g;function wf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(hl(i)&&hl(o)){if(!_s(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hl(n){return n!==null&&typeof n=="object"}/**
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
 */function br(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xf(n,e){const t=new Tf(n,e);return t.subscribe.bind(t)}class Tf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ii),s.error===void 0&&(s.error=Ii),s.complete===void 0&&(s.complete=Ii);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ii(){}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class If{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new of;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kf(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Af(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Af(n){return n===Jt?void 0:n}function kf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new If(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Cf={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Nf=te.INFO,Sf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Pf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Sf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fa{constructor(e){this.name=e,this._logLevel=Nf,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Df=(n,e)=>e.some(t=>n instanceof t);let dl,fl;function jf(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vf(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qc=new WeakMap,Li=new WeakMap,zc=new WeakMap,Ai=new WeakMap,pa=new WeakMap;function Of(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Vt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qc.set(t,n)}).catch(()=>{}),pa.set(e,n),e}function Mf(n){if(Li.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Li.set(n,e)}let Fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Li.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lf(n){Fi=n(Fi)}function Ff(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ki(this),e,...t);return zc.set(r,e.sort?e.sort():[e]),Vt(r)}:Vf().includes(n)?function(...e){return n.apply(ki(this),e),Vt(qc.get(this))}:function(...e){return Vt(n.apply(ki(this),e))}}function Uf(n){return typeof n=="function"?Ff(n):(n instanceof IDBTransaction&&Mf(n),Df(n,jf())?new Proxy(n,Fi):n)}function Vt(n){if(n instanceof IDBRequest)return Of(n);if(Ai.has(n))return Ai.get(n);const e=Uf(n);return e!==n&&(Ai.set(n,e),pa.set(e,n)),e}const ki=n=>pa.get(n);function Bf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=Vt(o);return r&&o.addEventListener("upgradeneeded",h=>{r(Vt(o.result),h.oldVersion,h.newVersion,Vt(o.transaction),h)}),t&&o.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const $f=["get","getKey","getAll","getAllKeys","count"],qf=["put","add","delete","clear"],Ri=new Map;function pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$f.includes(t)))return;const i=async function(o,...c){const h=this.transaction(o,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&h.done]))[0]};return Ri.set(e,i),i}Lf(n=>({...n,get:(e,t,r)=>pl(e,t)||n.get(e,t,r),has:(e,t)=>!!pl(e,t)||n.has(e,t)}));/**
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
 */class zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Hf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ui="@firebase/app",ml="0.10.13";/**
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
 */const _t=new fa("@firebase/app"),Wf="@firebase/app-compat",Kf="@firebase/analytics-compat",Gf="@firebase/analytics",Qf="@firebase/app-check-compat",Yf="@firebase/app-check",Jf="@firebase/auth",Xf="@firebase/auth-compat",Zf="@firebase/database",ep="@firebase/data-connect",tp="@firebase/database-compat",np="@firebase/functions",rp="@firebase/functions-compat",sp="@firebase/installations",ip="@firebase/installations-compat",ap="@firebase/messaging",op="@firebase/messaging-compat",lp="@firebase/performance",cp="@firebase/performance-compat",up="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",pp="@firebase/firestore",mp="@firebase/vertexai-preview",gp="@firebase/firestore-compat",yp="firebase",_p="10.14.1";/**
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
 */const Bi="[DEFAULT]",vp={[Ui]:"fire-core",[Wf]:"fire-core-compat",[Gf]:"fire-analytics",[Kf]:"fire-analytics-compat",[Yf]:"fire-app-check",[Qf]:"fire-app-check-compat",[Jf]:"fire-auth",[Xf]:"fire-auth-compat",[Zf]:"fire-rtdb",[ep]:"fire-data-connect",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[rp]:"fire-fn-compat",[sp]:"fire-iid",[ip]:"fire-iid-compat",[ap]:"fire-fcm",[op]:"fire-fcm-compat",[lp]:"fire-perf",[cp]:"fire-perf-compat",[up]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[pp]:"fire-fst",[gp]:"fire-fst-compat",[mp]:"fire-vertex","fire-js":"fire-js",[yp]:"fire-js-all"};/**
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
 */const vs=new Map,bp=new Map,$i=new Map;function gl(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function An(n){const e=n.name;if($i.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;$i.set(e,n);for(const t of vs.values())gl(t,n);for(const t of bp.values())gl(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ft(n){return n.settings!==void 0}/**
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
 */const wp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new vr("app","Firebase",wp);/**
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
 */class xp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const Vn=_p;function Hc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(t||(t=Bc()),!t)throw Ot.create("no-options");const i=vs.get(s);if(i){if(_s(t,i.options)&&_s(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new Rf(s);for(const h of $i.values())o.addComponent(h);const c=new xp(t,r,o);return vs.set(s,c),c}function Wc(n=Bi){const e=vs.get(n);if(!e&&n===Bi&&Bc())return Hc();if(!e)throw Ot.create("no-app",{appName:n});return e}function Mt(n,e,t){var r;let s=(r=vp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(c.join(" "));return}An(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Tp="firebase-heartbeat-database",Ep=1,cr="firebase-heartbeat-store";let Ci=null;function Kc(){return Ci||(Ci=Bf(Tp,Ep,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),Ci}async function Ip(n){try{const t=(await Kc()).transaction(cr),r=await t.objectStore(cr).get(Gc(n));return await t.done,r}catch(e){if(e instanceof Tt)_t.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function yl(n,e){try{const r=(await Kc()).transaction(cr,"readwrite");await r.objectStore(cr).put(e,Gc(n)),await r.done}catch(t){if(t instanceof Tt)_t.warn(t.message);else{const r=Ot.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function Gc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ap=1024,kp=30*24*60*60*1e3;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Np(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_l();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=kp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_l(),{heartbeatsToSend:r,unsentEntries:s}=Cp(this._heartbeatsCache.heartbeats),i=ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return _t.warn(t),""}}}function _l(){return new Date().toISOString().substring(0,10)}function Cp(n,e=Ap){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Np{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gf()?yf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ip(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return yl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return yl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vl(n){return ys(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Sp(n){An(new nn("platform-logger",e=>new zf(e),"PRIVATE")),An(new nn("heartbeat",e=>new Rp(e),"PRIVATE")),Mt(Ui,ml,n),Mt(Ui,ml,"esm2017"),Mt("fire-js","")}Sp("");var Pp="firebase",Dp="10.14.1";/**
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
 */Mt(Pp,Dp,"app");function ga(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Qc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jp=Qc,Yc=new vr("auth","Firebase",Qc());/**
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
 */const bs=new fa("@firebase/auth");function Vp(n,...e){bs.logLevel<=te.WARN&&bs.warn(`Auth (${Vn}): ${n}`,...e)}function os(n,...e){bs.logLevel<=te.ERROR&&bs.error(`Auth (${Vn}): ${n}`,...e)}/**
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
 */function vt(n,...e){throw ya(n,...e)}function it(n,...e){return ya(n,...e)}function Jc(n,e,t){const r=Object.assign(Object.assign({},jp()),{[e]:t});return new vr("auth","Firebase",r).create(e,{appName:n.name})}function Lt(n){return Jc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ya(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yc.create(n,...e)}function z(n,e,...t){if(!n)throw ya(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw os(e),new Error(e)}function bt(n,e){n||pt(e)}/**
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
 */function qi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Op(){return bl()==="http:"||bl()==="https:"}function bl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Mp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Op()||df()||"connection"in navigator)?navigator.onLine:!0}function Lp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wr{constructor(e,t){this.shortDelay=e,this.longDelay=t,bt(t>e,"Short delay should be less than long delay!"),this.isMobile=cf()||ff()}get(){return Mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _a(n,e){bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Up=new wr(3e4,6e4);function Vs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function On(n,e,t,r,s={}){return Zc(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=br(Object.assign({key:n.config.apiKey},o)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:h},i);return hf()||(f.referrerPolicy="no-referrer"),Xc.fetch()(tu(n,n.config.apiHost,t,c),f)})}async function Zc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fp),e);try{const s=new Bp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jr(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[h,f]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(n,"credential-already-in-use",o);if(h==="EMAIL_EXISTS")throw Jr(n,"email-already-in-use",o);if(h==="USER_DISABLED")throw Jr(n,"user-disabled",o);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Jc(n,m,f);vt(n,m)}}catch(s){if(s instanceof Tt)throw s;vt(n,"network-request-failed",{message:String(s)})}}async function eu(n,e,t,r,s={}){const i=await On(n,e,t,r,s);return"mfaPendingCredential"in i&&vt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function tu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?_a(n.config,s):`${n.config.apiScheme}://${s}`}class Bp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=it(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function $p(n,e){return On(n,"POST","/v1/accounts:delete",e)}async function nu(n,e){return On(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qp(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),s=va(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:sr(Ni(s.auth_time)),issuedAtTime:sr(Ni(s.iat)),expirationTime:sr(Ni(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(n){return Number(n)*1e3}function va(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fc(t);return s?JSON.parse(s):(os("Failed to decode base64 JWT payload"),null)}catch(s){return os("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wl(n){const e=va(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tt&&zp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ws(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ur(n,nu(t,{idToken:r}));z(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ru(i.providerUserInfo):[],c=Kp(n.providerData,o),h=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=h?f:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new zi(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function Wp(n){const e=Ie(n);await ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ru(n){return n.map(e=>{var{providerId:t}=e,r=ga(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Gp(n,e){const t=await Zc(n,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=tu(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Xc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qp(n,e){return On(n,"POST","/v2/accounts:revokeToken",Vs(n,e))}/**
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
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=wl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new wn;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Rt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ga(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qp(this,e)}reload(){return Wp(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ws(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await ur(this,$p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,h,f,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,P=(f=t.createdAt)!==null&&f!==void 0?f:void 0,V=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:L,emailVerified:q,isAnonymous:G,providerData:Y,stsTokenManager:I}=t;z(L&&I,e,"internal-error");const v=wn.fromJSON(this.name,I);z(typeof L=="string",e,"internal-error"),Rt(y,e.name),Rt(g,e.name),z(typeof q=="boolean",e,"internal-error"),z(typeof G=="boolean",e,"internal-error"),Rt(b,e.name),Rt(T,e.name),Rt(R,e.name),Rt(C,e.name),Rt(P,e.name),Rt(V,e.name);const _=new mt({uid:L,auth:e,email:g,emailVerified:q,displayName:y,isAnonymous:G,photoURL:T,phoneNumber:b,tenantId:R,stsTokenManager:v,createdAt:P,lastLoginAt:V});return Y&&Array.isArray(Y)&&(_.providerData=Y.map(x=>Object.assign({},x))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new wn;s.updateFromServerResponse(t);const i=new mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ws(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ru(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new wn;c.updateFromIdToken(r);const h=new mt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(h,f),h}}/**
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
 */const xl=new Map;function gt(n){bt(n instanceof Function,"Expected a class definition");let e=xl.get(n);return e?(bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xl.set(n,e),e)}/**
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
 */class su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}su.type="NONE";const Tl=su;/**
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
 */function ls(n,e,t){return`firebase:${n}:${e}:${t}`}class xn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ls(this.userKey,s.apiKey,i),this.fullPersistenceKey=ls("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xn(gt(Tl),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||gt(Tl);const o=ls(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(o);if(m){const y=mt._fromJSON(e,m);f!==i&&(c=y),i=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!h.length?new xn(i,e,r):(i=h[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new xn(i,e,r))}}/**
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
 */function El(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uu(e))return"Blackberry";if(hu(e))return"Webos";if(au(e))return"Safari";if((e.includes("chrome/")||ou(e))&&!e.includes("edge/"))return"Chrome";if(cu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iu(n=$e()){return/firefox\//i.test(n)}function au(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ou(n=$e()){return/crios\//i.test(n)}function lu(n=$e()){return/iemobile/i.test(n)}function cu(n=$e()){return/android/i.test(n)}function uu(n=$e()){return/blackberry/i.test(n)}function hu(n=$e()){return/webos/i.test(n)}function ba(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yp(n=$e()){var e;return ba(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jp(){return pf()&&document.documentMode===10}function du(n=$e()){return ba(n)||cu(n)||hu(n)||uu(n)||/windows phone/i.test(n)||lu(n)}/**
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
 */function fu(n,e=[]){let t;switch(n){case"Browser":t=El($e());break;case"Worker":t=`${El($e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vn}/${r}`}/**
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
 */class Xp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const h=e(i);o(h)}catch(h){c(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Zp(n,e={}){return On(n,"GET","/v2/passwordPolicy",Vs(n,e))}/**
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
 */const em=6;class tm{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:em,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(i=h.containsUppercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsNumericCharacter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Il(this),this.idTokenSubscription=new Il(this),this.beforeStateQueue=new Xp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nu(this,{idToken:e}),r=await mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!o||o===c)&&(h!=null&&h.user)&&(s=h.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(Lt(this));const t=e?Ie(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zp(this),t=new tm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{o=!0,h()}}else{const h=e.addObserver(t);return()=>{o=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Vp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Os(n){return Ie(n)}class Il{constructor(e){this.auth=e,this.observer=null,this.addObserver=xf(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rm(n){wa=n}function sm(n){return wa.loadJS(n)}function im(){return wa.gapiScript}function am(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function om(n,e){const t=ma(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_s(i,e??{}))return s;vt(s,"already-initialized")}return t.initialize({options:e})}function lm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cm(n,e,t){const r=Os(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=pu(e),{host:o,port:c}=um(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hm()}function pu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function um(n){const e=pu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Al(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Al(o)}}}function Al(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class mu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
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
 */async function Tn(n,e){return eu(n,"POST","/v1/accounts:signInWithIdp",Vs(n,e))}/**
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
 */const dm="http://localhost";class rn extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ga(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:dm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=br(t)}return e}}/**
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
 */class gu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xr extends gu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends xr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class St extends xr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class Pt extends xr{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function fm(n,e){return eu(n,"POST","/v1/accounts:signUp",Vs(n,e))}/**
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
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await mt._fromIdTokenResponse(e,r,s),o=kl(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=kl(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function pm(n){var e;if(ft(n.app))return Promise.reject(Lt(n));const t=Os(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Bt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await fm(t,{returnSecureToken:!0}),s=await Bt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class xs extends Tt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xs(e,t,r,s)}}function yu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(n,i,e,r):i})}async function mm(n,e,t=!1){const r=await ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bt._forOperation(n,"link",r)}/**
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
 */async function gm(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(Lt(r));const s="reauthenticate";try{const i=await ur(n,yu(r,s,e,n),t);z(i.idToken,r,"internal-error");const o=va(i.idToken);z(o,r,"internal-error");const{sub:c}=o;return z(n.uid===c,r,"user-mismatch"),Bt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),i}}/**
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
 */async function ym(n,e,t=!1){if(ft(n.app))return Promise.reject(Lt(n));const r="signIn",s=await yu(n,r,e),i=await Bt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function _m(n,e,t,r){return Ie(n).onIdTokenChanged(e,t,r)}function vm(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function bm(n,e,t,r){return Ie(n).onAuthStateChanged(e,t,r)}const Ts="__sak";/**
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
 */class _u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wm=1e3,xm=10;class vu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,h)=>{this.notifyListeners(o,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Jp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xm):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vu.type="LOCAL";const Tm=vu;/**
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
 */class bu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bu.type="SESSION";const wu=bu;/**
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
 */function Em(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async f=>f(t.origin,i)),h=await Em(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
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
 */function xa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Im{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,h)=>{const f=xa("",20);s.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const g=y;if(g.data.eventId===f)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(m),clearTimeout(i),h(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function Am(n){at().location.href=n}/**
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
 */function xu(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function km(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cm(){return xu()?self:null}/**
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
 */const Tu="firebaseLocalStorageDb",Nm=1,Es="firebaseLocalStorage",Eu="fbase_key";class Tr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ls(n,e){return n.transaction([Es],e?"readwrite":"readonly").objectStore(Es)}function Sm(){const n=indexedDB.deleteDatabase(Tu);return new Tr(n).toPromise()}function Hi(){const n=indexedDB.open(Tu,Nm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Es,{keyPath:Eu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Es)?e(r):(r.close(),await Sm(),e(await Hi()))})})}async function Rl(n,e,t){const r=Ls(n,!0).put({[Eu]:e,value:t});return new Tr(r).toPromise()}async function Pm(n,e){const t=Ls(n,!1).get(e),r=await new Tr(t).toPromise();return r===void 0?null:r.value}function Cl(n,e){const t=Ls(n,!0).delete(e);return new Tr(t).toPromise()}const Dm=800,jm=3;class Iu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(Cm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await km(),!this.activeServiceWorker)return;this.sender=new Im(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hi();return await Rl(e,Ts,"1"),await Cl(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Pm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ls(s,!1).getAll();return new Tr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iu.type="LOCAL";const Vm=Iu;new wr(3e4,6e4);/**
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
 */function Om(n,e){return e?gt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ta extends mu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mm(n){return ym(n.auth,new Ta(n),n.bypassAuthState)}function Lm(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),gm(t,new Ta(n),n.bypassAuthState)}async function Fm(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),mm(t,new Ta(n),n.bypassAuthState)}/**
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
 */class Au{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mm;case"linkViaPopup":case"linkViaRedirect":return Fm;case"reauthViaPopup":case"reauthViaRedirect":return Lm;default:vt(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Um=new wr(2e3,1e4);class bn extends Au{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Um.get())};e()}}bn.currentPopupAction=null;/**
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
 */const Bm="pendingRedirect",cs=new Map;class $m extends Au{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qm(n,e){const t=Wm(e),r=Hm(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function zm(n,e){cs.set(n._key(),e)}function Hm(n){return gt(n._redirectPersistence)}function Wm(n){return ls(Bm,n.config.apiKey,n.name)}async function Km(n,e,t=!1){if(ft(n.app))return Promise.reject(Lt(n));const r=Os(n),s=Om(r,e),o=await new $m(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gm=10*60*1e3;class Qm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ym(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ku(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(e))}saveEventToCache(e){this.cachedEventUids.add(Nl(e)),this.lastProcessedEventTime=Date.now()}}function Nl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ku({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ym(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ku(n);default:return!1}}/**
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
 */async function Jm(n,e={}){return On(n,"GET","/v1/projects",e)}/**
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
 */const Xm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zm=/^https?/;async function eg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jm(n);for(const t of e)try{if(tg(t))return}catch{}vt(n,"unauthorized-domain")}function tg(n){const e=qi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Zm.test(t))return!1;if(Xm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ng=new wr(3e4,6e4);function Sl(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rg(n){return new Promise((e,t)=>{var r,s,i;function o(){Sl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sl(),t(it(n,"network-request-failed"))},timeout:ng.get()})}if(!((s=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const c=am("iframefcb");return at()[c]=()=>{gapi.load?o():t(it(n,"network-request-failed"))},sm(`${im()}?onload=${c}`).catch(h=>t(h))}}).catch(e=>{throw us=null,e})}let us=null;function sg(n){return us=us||rg(n),us}/**
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
 */const ig=new wr(5e3,15e3),ag="__/auth/iframe",og="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ug(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_a(e,og):`https://${n.config.authDomain}/${ag}`,r={apiKey:e.apiKey,appName:n.name,v:Vn},s=cg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${br(r).slice(1)}`}async function hg(n){const e=await sg(n),t=at().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:ug(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=it(n,"network-request-failed"),c=at().setTimeout(()=>{i(o)},ig.get());function h(){at().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{i(o)})}))}/**
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
 */const dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fg=500,pg=600,mg="_blank",gg="http://localhost";class Pl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(n,e,t,r=fg,s=pg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},dg),{width:r.toString(),height:s.toString(),top:i,left:o}),f=$e().toLowerCase();t&&(c=ou(f)?mg:t),iu(f)&&(e=e||gg,h.scrollbars="yes");const m=Object.entries(h).reduce((g,[b,T])=>`${g}${b}=${T},`,"");if(Yp(f)&&c!=="_self")return _g(e||"",c),new Pl(null);const y=window.open(e||"",c,m);z(y,n,"popup-blocked");try{y.focus()}catch{}return new Pl(y)}function _g(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const vg="__/auth/handler",bg="emulator/auth/handler",wg=encodeURIComponent("fac");async function Dl(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vn,eventId:s};if(e instanceof gu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries(i||{}))o[m]=y}if(e instanceof xr){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await n._getAppCheckToken(),f=h?`#${wg}=${encodeURIComponent(h)}`:"";return`${xg(n)}?${br(c).slice(1)}${f}`}function xg({config:n}){return n.emulator?_a(n,bg):`https://${n.authDomain}/${vg}`}/**
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
 */const Si="webStorageSupport";class Tg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wu,this._completeRedirectFn=Km,this._overrideRedirectResult=zm}async _openPopup(e,t,r,s){var i;bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dl(e,t,r,qi(),s);return yg(e,o,xa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Dl(e,t,r,qi(),s);return Am(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hg(e),r=new Qm(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Si,{type:Si},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Si];o!==void 0&&t(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return du()||au()||ba()}}const Eg=Tg;var jl="@firebase/auth",Vl="1.7.9";/**
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
 */class Ig{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ag(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kg(n){An(new nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(n)},f=new nm(r,s,i,h);return lm(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),An(new nn("auth-internal",e=>{const t=Os(e.getProvider("auth").getImmediate());return(r=>new Ig(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(jl,Vl,Ag(n)),Mt(jl,Vl,"esm2017")}/**
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
 */const Rg=5*60,Cg=$c("authIdTokenMaxAge")||Rg;let Ol=null;const Ng=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Cg)return;const s=t==null?void 0:t.token;Ol!==s&&(Ol=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sg(n=Wc()){const e=ma(n,"auth");if(e.isInitialized())return e.getImmediate();const t=om(n,{popupRedirectResolver:Eg,persistence:[Vm,Tm,wu]}),r=$c("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ng(i.toString());vm(t,o,()=>o(t.currentUser)),_m(t,c=>o(c))}}const s=Uc("auth");return s&&cm(t,`http://${s}`),t}function Pg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}rm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Pg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kg("Browser");var Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,Ru;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function _(){}_.prototype=v.prototype,I.D=v.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(x,E,A){for(var w=Array(arguments.length-2),O=2;O<arguments.length;O++)w[O-2]=arguments[O];return v.prototype[E].apply(x,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,_){_||(_=0);var x=Array(16);if(typeof v=="string")for(var E=0;16>E;++E)x[E]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(E=0;16>E;++E)x[E]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=I.g[0],_=I.g[1],E=I.g[2];var A=I.g[3],w=v+(A^_&(E^A))+x[0]+3614090360&4294967295;v=_+(w<<7&4294967295|w>>>25),w=A+(E^v&(_^E))+x[1]+3905402710&4294967295,A=v+(w<<12&4294967295|w>>>20),w=E+(_^A&(v^_))+x[2]+606105819&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(v^E&(A^v))+x[3]+3250441966&4294967295,_=E+(w<<22&4294967295|w>>>10),w=v+(A^_&(E^A))+x[4]+4118548399&4294967295,v=_+(w<<7&4294967295|w>>>25),w=A+(E^v&(_^E))+x[5]+1200080426&4294967295,A=v+(w<<12&4294967295|w>>>20),w=E+(_^A&(v^_))+x[6]+2821735955&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(v^E&(A^v))+x[7]+4249261313&4294967295,_=E+(w<<22&4294967295|w>>>10),w=v+(A^_&(E^A))+x[8]+1770035416&4294967295,v=_+(w<<7&4294967295|w>>>25),w=A+(E^v&(_^E))+x[9]+2336552879&4294967295,A=v+(w<<12&4294967295|w>>>20),w=E+(_^A&(v^_))+x[10]+4294925233&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(v^E&(A^v))+x[11]+2304563134&4294967295,_=E+(w<<22&4294967295|w>>>10),w=v+(A^_&(E^A))+x[12]+1804603682&4294967295,v=_+(w<<7&4294967295|w>>>25),w=A+(E^v&(_^E))+x[13]+4254626195&4294967295,A=v+(w<<12&4294967295|w>>>20),w=E+(_^A&(v^_))+x[14]+2792965006&4294967295,E=A+(w<<17&4294967295|w>>>15),w=_+(v^E&(A^v))+x[15]+1236535329&4294967295,_=E+(w<<22&4294967295|w>>>10),w=v+(E^A&(_^E))+x[1]+4129170786&4294967295,v=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(v^_))+x[6]+3225465664&4294967295,A=v+(w<<9&4294967295|w>>>23),w=E+(v^_&(A^v))+x[11]+643717713&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^v&(E^A))+x[0]+3921069994&4294967295,_=E+(w<<20&4294967295|w>>>12),w=v+(E^A&(_^E))+x[5]+3593408605&4294967295,v=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(v^_))+x[10]+38016083&4294967295,A=v+(w<<9&4294967295|w>>>23),w=E+(v^_&(A^v))+x[15]+3634488961&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^v&(E^A))+x[4]+3889429448&4294967295,_=E+(w<<20&4294967295|w>>>12),w=v+(E^A&(_^E))+x[9]+568446438&4294967295,v=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(v^_))+x[14]+3275163606&4294967295,A=v+(w<<9&4294967295|w>>>23),w=E+(v^_&(A^v))+x[3]+4107603335&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^v&(E^A))+x[8]+1163531501&4294967295,_=E+(w<<20&4294967295|w>>>12),w=v+(E^A&(_^E))+x[13]+2850285829&4294967295,v=_+(w<<5&4294967295|w>>>27),w=A+(_^E&(v^_))+x[2]+4243563512&4294967295,A=v+(w<<9&4294967295|w>>>23),w=E+(v^_&(A^v))+x[7]+1735328473&4294967295,E=A+(w<<14&4294967295|w>>>18),w=_+(A^v&(E^A))+x[12]+2368359562&4294967295,_=E+(w<<20&4294967295|w>>>12),w=v+(_^E^A)+x[5]+4294588738&4294967295,v=_+(w<<4&4294967295|w>>>28),w=A+(v^_^E)+x[8]+2272392833&4294967295,A=v+(w<<11&4294967295|w>>>21),w=E+(A^v^_)+x[11]+1839030562&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^v)+x[14]+4259657740&4294967295,_=E+(w<<23&4294967295|w>>>9),w=v+(_^E^A)+x[1]+2763975236&4294967295,v=_+(w<<4&4294967295|w>>>28),w=A+(v^_^E)+x[4]+1272893353&4294967295,A=v+(w<<11&4294967295|w>>>21),w=E+(A^v^_)+x[7]+4139469664&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^v)+x[10]+3200236656&4294967295,_=E+(w<<23&4294967295|w>>>9),w=v+(_^E^A)+x[13]+681279174&4294967295,v=_+(w<<4&4294967295|w>>>28),w=A+(v^_^E)+x[0]+3936430074&4294967295,A=v+(w<<11&4294967295|w>>>21),w=E+(A^v^_)+x[3]+3572445317&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^v)+x[6]+76029189&4294967295,_=E+(w<<23&4294967295|w>>>9),w=v+(_^E^A)+x[9]+3654602809&4294967295,v=_+(w<<4&4294967295|w>>>28),w=A+(v^_^E)+x[12]+3873151461&4294967295,A=v+(w<<11&4294967295|w>>>21),w=E+(A^v^_)+x[15]+530742520&4294967295,E=A+(w<<16&4294967295|w>>>16),w=_+(E^A^v)+x[2]+3299628645&4294967295,_=E+(w<<23&4294967295|w>>>9),w=v+(E^(_|~A))+x[0]+4096336452&4294967295,v=_+(w<<6&4294967295|w>>>26),w=A+(_^(v|~E))+x[7]+1126891415&4294967295,A=v+(w<<10&4294967295|w>>>22),w=E+(v^(A|~_))+x[14]+2878612391&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~v))+x[5]+4237533241&4294967295,_=E+(w<<21&4294967295|w>>>11),w=v+(E^(_|~A))+x[12]+1700485571&4294967295,v=_+(w<<6&4294967295|w>>>26),w=A+(_^(v|~E))+x[3]+2399980690&4294967295,A=v+(w<<10&4294967295|w>>>22),w=E+(v^(A|~_))+x[10]+4293915773&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~v))+x[1]+2240044497&4294967295,_=E+(w<<21&4294967295|w>>>11),w=v+(E^(_|~A))+x[8]+1873313359&4294967295,v=_+(w<<6&4294967295|w>>>26),w=A+(_^(v|~E))+x[15]+4264355552&4294967295,A=v+(w<<10&4294967295|w>>>22),w=E+(v^(A|~_))+x[6]+2734768916&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~v))+x[13]+1309151649&4294967295,_=E+(w<<21&4294967295|w>>>11),w=v+(E^(_|~A))+x[4]+4149444226&4294967295,v=_+(w<<6&4294967295|w>>>26),w=A+(_^(v|~E))+x[11]+3174756917&4294967295,A=v+(w<<10&4294967295|w>>>22),w=E+(v^(A|~_))+x[2]+718787259&4294967295,E=A+(w<<15&4294967295|w>>>17),w=_+(A^(E|~v))+x[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var _=v-this.blockSize,x=this.B,E=this.h,A=0;A<v;){if(E==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(x[E++]=I.charCodeAt(A++),E==this.blockSize){s(this,x),E=0;break}}else for(;A<v;)if(x[E++]=I[A++],E==this.blockSize){s(this,x),E=0;break}}this.h=E,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var _=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=_&255,_/=256;for(this.u(I),I=Array(16),v=_=0;4>v;++v)for(var x=0;32>x;x+=8)I[_++]=this.g[v]>>>x&255;return I};function i(I,v){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=v(I)}function o(I,v){this.h=v;for(var _=[],x=!0,E=I.length-1;0<=E;E--){var A=I[E]|0;x&&A==v||(_[E]=A,x=!1)}this.g=_}var c={};function h(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function f(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return C(f(-I));for(var v=[],_=1,x=0;I>=_;x++)v[x]=I/_|0,_*=4294967296;return new o(v,0)}function m(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return C(m(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(v,8)),x=y,E=0;E<I.length;E+=8){var A=Math.min(8,I.length-E),w=parseInt(I.substring(E,E+A),v);8>A?(A=f(Math.pow(v,A)),x=x.j(A).add(f(w))):(x=x.j(_),x=x.add(f(w)))}return x}var y=h(0),g=h(1),b=h(16777216);n=o.prototype,n.m=function(){if(R(this))return-C(this).m();for(var I=0,v=1,_=0;_<this.g.length;_++){var x=this.i(_);I+=(0<=x?x:4294967296+x)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(R(this))return"-"+C(this).toString(I);for(var v=f(Math.pow(I,6)),_=this,x="";;){var E=q(_,v).g;_=P(_,E.j(v));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=E,T(_))return A+x;for(;6>A.length;)A="0"+A;x=A+x}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function R(I){return I.h==-1}n.l=function(I){return I=P(this,I),R(I)?-1:T(I)?0:1};function C(I){for(var v=I.g.length,_=[],x=0;x<v;x++)_[x]=~I.g[x];return new o(_,~I.h).add(g)}n.abs=function(){return R(this)?C(this):this},n.add=function(I){for(var v=Math.max(this.g.length,I.g.length),_=[],x=0,E=0;E<=v;E++){var A=x+(this.i(E)&65535)+(I.i(E)&65535),w=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);x=w>>>16,A&=65535,w&=65535,_[E]=w<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function P(I,v){return I.add(C(v))}n.j=function(I){if(T(this)||T(I))return y;if(R(this))return R(I)?C(this).j(C(I)):C(C(this).j(I));if(R(I))return C(this.j(C(I)));if(0>this.l(b)&&0>I.l(b))return f(this.m()*I.m());for(var v=this.g.length+I.g.length,_=[],x=0;x<2*v;x++)_[x]=0;for(x=0;x<this.g.length;x++)for(var E=0;E<I.g.length;E++){var A=this.i(x)>>>16,w=this.i(x)&65535,O=I.i(E)>>>16,$=I.i(E)&65535;_[2*x+2*E]+=w*$,V(_,2*x+2*E),_[2*x+2*E+1]+=A*$,V(_,2*x+2*E+1),_[2*x+2*E+1]+=w*O,V(_,2*x+2*E+1),_[2*x+2*E+2]+=A*O,V(_,2*x+2*E+2)}for(x=0;x<v;x++)_[x]=_[2*x+1]<<16|_[2*x];for(x=v;x<2*v;x++)_[x]=0;return new o(_,0)};function V(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function L(I,v){this.g=I,this.h=v}function q(I,v){if(T(v))throw Error("division by zero");if(T(I))return new L(y,y);if(R(I))return v=q(C(I),v),new L(C(v.g),C(v.h));if(R(v))return v=q(I,C(v)),new L(C(v.g),v.h);if(30<I.g.length){if(R(I)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,x=v;0>=x.l(I);)_=G(_),x=G(x);var E=Y(_,1),A=Y(x,1);for(x=Y(x,2),_=Y(_,2);!T(x);){var w=A.add(x);0>=w.l(I)&&(E=E.add(_),A=w),x=Y(x,1),_=Y(_,1)}return v=P(I,E.j(v)),new L(E,v)}for(E=y;0<=I.l(v);){for(_=Math.max(1,Math.floor(I.m()/v.m())),x=Math.ceil(Math.log(_)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),A=f(_),w=A.j(v);R(w)||0<w.l(I);)_-=x,A=f(_),w=A.j(v);T(A)&&(A=g),E=E.add(A),I=P(I,w)}return new L(E,I)}n.A=function(I){return q(this,I).h},n.and=function(I){for(var v=Math.max(this.g.length,I.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)&I.i(x);return new o(_,this.h&I.h)},n.or=function(I){for(var v=Math.max(this.g.length,I.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)|I.i(x);return new o(_,this.h|I.h)},n.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)^I.i(x);return new o(_,this.h^I.h)};function G(I){for(var v=I.g.length+1,_=[],x=0;x<v;x++)_[x]=I.i(x)<<1|I.i(x-1)>>>31;return new o(_,I.h)}function Y(I,v){var _=v>>5;v%=32;for(var x=I.g.length-_,E=[],A=0;A<x;A++)E[A]=0<v?I.i(A+_)>>>v|I.i(A+_+1)<<32-v:I.i(A+_);return new o(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ru=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=m,tn=o}).apply(typeof Ml<"u"?Ml:typeof self<"u"?self:typeof window<"u"?window:{});var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cu,er,Nu,hs,Wi,Su,Pu,Du;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xr=="object"&&Xr];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var k=a[p];if(!(k in d))break e;d=d[k]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,p=!1,k={next:function(){if(!p&&d<a.length){var S=d++;return{value:u(S,a[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function h(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function f(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function m(a,u,d){return a.call.apply(a.bind,arguments)}function y(a,u,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),a.apply(u,k)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,g.apply(null,arguments)}function b(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function T(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,k,S){for(var M=Array(arguments.length-2),de=2;de<arguments.length;de++)M[de-2]=arguments[de];return u.prototype[k].apply(p,M)}}function R(a){const u=a.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(h(p)){const k=a.length||0,S=p.length||0;a.length=k+S;for(let M=0;M<S;M++)a[k+M]=p[M]}else a.push(p)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var G=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Y(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,u){let d,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(d in p)a[d]=p[d];for(let S=0;S<_.length;S++)d=_[S],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function w(){var a=he;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class O{constructor(){this.h=this.g=null}add(u,d){const p=$.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new P(()=>new X,a=>a.reset());class X{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let re,se=!1,he=new O,ye=()=>{const a=c.Promise.resolve(void 0);re=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){A(d)}var u=$;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}se=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Ze=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function je(a,u){if(ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(G){e:{try{q(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&je.aa.h.call(this)}}T(je,ie);var ut={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),fe=0;function Q(a,u,d,p,k){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=k,this.key=++fe,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _e(a){this.src=a,this.g={},this.h=0}_e.prototype.add=function(a,u,d,p,k){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var M=Ve(a,u,p,k);return-1<M?(u=a[M],d||(u.fa=!1)):(u=new Q(u,this.src,S,!!p,k),u.fa=d,a.push(u)),u};function ae(a,u){var d=u.type;if(d in a.g){var p=a.g[d],k=Array.prototype.indexOf.call(p,u,void 0),S;(S=0<=k)&&Array.prototype.splice.call(p,k,1),S&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ve(a,u,d,p){for(var k=0;k<a.length;++k){var S=a[k];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==p)return k}return-1}var et="closure_lm_"+(1e6*Math.random()|0),Et={};function dn(a,u,d,p,k){if(p&&p.once)return co(a,u,d,p,k);if(Array.isArray(u)){for(var S=0;S<u.length;S++)dn(a,u[S],d,p,k);return null}return d=oi(d),a&&a[ke]?a.K(u,d,f(p)?!!p.capture:!!p,k):lo(a,u,d,!1,p,k)}function lo(a,u,d,p,k,S){if(!u)throw Error("Invalid event type");var M=f(k)?!!k.capture:!!k,de=ii(a);if(de||(a[et]=de=new _e(a)),d=de.add(u,d,p,M,S),d.proxy)return d;if(p=nd(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Ze||(k=M),k===void 0&&(k=!1),a.addEventListener(u.toString(),p,k);else if(a.attachEvent)a.attachEvent(ho(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function nd(){function a(d){return u.call(a.src,a.listener,d)}const u=rd;return a}function co(a,u,d,p,k){if(Array.isArray(u)){for(var S=0;S<u.length;S++)co(a,u[S],d,p,k);return null}return d=oi(d),a&&a[ke]?a.L(u,d,f(p)?!!p.capture:!!p,k):lo(a,u,d,!0,p,k)}function uo(a,u,d,p,k){if(Array.isArray(u))for(var S=0;S<u.length;S++)uo(a,u[S],d,p,k);else p=f(p)?!!p.capture:!!p,d=oi(d),a&&a[ke]?(a=a.i,u=String(u).toString(),u in a.g&&(S=a.g[u],d=Ve(S,d,p,k),-1<d&&(ee(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete a.g[u],a.h--)))):a&&(a=ii(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ve(u,d,p,k)),(d=-1<a?u[a]:null)&&si(d))}function si(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ke])ae(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(ho(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=ii(u))?(ae(d,a),d.h==0&&(d.src=null,u[et]=null)):ee(a)}}}function ho(a){return a in Et?Et[a]:Et[a]="on"+a}function rd(a,u){if(a.da)a=!0;else{u=new je(u,this);var d=a.listener,p=a.ha||a.src;a.fa&&si(a),a=d.call(p,u)}return a}function ii(a){return a=a[et],a instanceof _e?a:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function oi(a){return typeof a=="function"?a:(a[ai]||(a[ai]=function(u){return a.handleEvent(u)}),a[ai])}function Oe(){ce.call(this),this.i=new _e(this),this.M=this,this.F=null}T(Oe,ce),Oe.prototype[ke]=!0,Oe.prototype.removeEventListener=function(a,u,d,p){uo(this,a,u,d,p)};function qe(a,u){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new ie(u,a);else if(u instanceof ie)u.target=u.target||a;else{var k=u;u=new ie(p,a),x(u,k)}if(k=!0,d)for(var S=d.length-1;0<=S;S--){var M=u.g=d[S];k=jr(M,p,!0,u)&&k}if(M=u.g=a,k=jr(M,p,!0,u)&&k,k=jr(M,p,!1,u)&&k,d)for(S=0;S<d.length;S++)M=u.g=d[S],k=jr(M,p,!1,u)&&k}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],p=0;p<d.length;p++)ee(d[p]);delete a.g[u],a.h--}}this.F=null},Oe.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},Oe.prototype.L=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function jr(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,S=0;S<u.length;++S){var M=u[S];if(M&&!M.da&&M.capture==d){var de=M.listener,Ce=M.ha||M.src;M.fa&&ae(a.i,M),k=de.call(Ce,p)!==!1&&k}}return k&&!p.defaultPrevented}function fo(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function po(a){a.g=fo(()=>{a.g=null,a.i&&(a.i=!1,po(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class sd extends ce{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:po(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(a){ce.call(this),this.h=a,this.g={}}T(Un,ce);var mo=[];function go(a){Y(a.g,function(u,d){this.g.hasOwnProperty(d)&&si(u)},a),a.g={}}Un.prototype.N=function(){Un.aa.N.call(this),go(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var li=c.JSON.stringify,id=c.JSON.parse,ad=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ci(){}ci.prototype.h=null;function yo(a){return a.h||(a.h=a.i())}function _o(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ui(){ie.call(this,"d")}T(ui,ie);function hi(){ie.call(this,"c")}T(hi,ie);var Kt={},vo=null;function Vr(){return vo=vo||new Oe}Kt.La="serverreachability";function bo(a){ie.call(this,Kt.La,a)}T(bo,ie);function $n(a){const u=Vr();qe(u,new bo(u))}Kt.STAT_EVENT="statevent";function wo(a,u){ie.call(this,Kt.STAT_EVENT,a),this.stat=u}T(wo,ie);function ze(a){const u=Vr();qe(u,new wo(u,a))}Kt.Ma="timingevent";function xo(a,u){ie.call(this,Kt.Ma,a),this.size=u}T(xo,ie);function qn(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function od(a,u,d,p,k,S){a.info(function(){if(a.g)if(S)for(var M="",de=S.split("&"),Ce=0;Ce<de.length;Ce++){var oe=de[Ce].split("=");if(1<oe.length){var Me=oe[0];oe=oe[1];var Le=Me.split("_");M=2<=Le.length&&Le[1]=="type"?M+(Me+"="+oe+"&"):M+(Me+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+u+`
`+d+`
`+M})}function ld(a,u,d,p,k,S,M){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+u+`
`+d+`
`+S+" "+M})}function fn(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+ud(a,d)+(p?" "+p:"")})}function cd(a,u){a.info(function(){return"TIMEOUT: "+u})}zn.prototype.info=function(){};function ud(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var S=k[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<k.length;M++)k[M]=""}}}}return li(d)}catch{return u}}var Or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},To={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},di;function Mr(){}T(Mr,ci),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},di=new Mr;function It(a,u,d,p){this.j=a,this.i=u,this.l=d,this.R=p||1,this.U=new Un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eo}function Eo(){this.i=null,this.g="",this.h=!1}var Io={},fi={};function pi(a,u,d){a.L=1,a.v=Br(ht(u)),a.m=d,a.P=!0,Ao(a,null)}function Ao(a,u){a.F=Date.now(),Lr(a),a.A=ht(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Uo(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Eo,a.g=sl(a.j,d?u:null,!a.m),0<a.O&&(a.M=new sd(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,p=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(mo[0]=k.toString()),k=mo);for(var S=0;S<k.length;S++){var M=dn(d,k[S],p||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),$n(),od(a.i,a.u,a.A,a.l,a.R,a.m)}It.prototype.ca=function(a){a=a.target;const u=this.M;u&&dt(a)==3?u.j():this.Y(a)},It.prototype.Y=function(a){try{if(a==this.g)e:{const Le=dt(this.g);var u=this.g.Ba();const gn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||Ko(this.g)))){this.J||Le!=4||u==7||(u==8||0>=gn?$n(3):$n(2)),mi(this);var d=this.g.Z();this.X=d;t:if(ko(this)){var p=Ko(this.g);a="";var k=p.length,S=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Hn(this);var M="";break t}this.h.i=new c.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(S&&u==k-1)});p.length=0,this.h.g+=a,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,ld(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Ce=this.g;if((de=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(de)){var oe=de;break t}}oe=null}if(d=oe)fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gi(this,d);else{this.o=!1,this.s=3,ze(12),Gt(this),Hn(this);break e}}if(this.P){d=!0;let tt;for(;!this.J&&this.C<M.length;)if(tt=hd(this,M),tt==fi){Le==4&&(this.s=4,ze(14),d=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Io){this.s=4,ze(15),fn(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else fn(this.i,this.l,tt,null),gi(this,tt);if(ko(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||M.length!=0||this.h.h||(this.s=1,ze(16),d=!1),this.o=this.o&&d,!d)fn(this.i,this.l,M,"[Invalid Chunked Response]"),Gt(this),Hn(this);else if(0<M.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),xi(Me),Me.M=!0,ze(11))}}else fn(this.i,this.l,M,null),gi(this,M);Le==4&&Gt(this),this.o&&!this.J&&(Le==4?el(this.j,this):(this.o=!1,Lr(this)))}else Rd(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Gt(this),Hn(this)}}}catch{}finally{}};function ko(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function hd(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?fi:(d=Number(u.substring(d,p)),isNaN(d)?Io:(p+=1,p+d>u.length?fi:(u=u.slice(p,p+d),a.C=p+d,u)))}It.prototype.cancel=function(){this.J=!0,Gt(this)};function Lr(a){a.S=Date.now()+a.I,Ro(a,a.I)}function Ro(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qn(g(a.ba,a),u)}function mi(a){a.B&&(c.clearTimeout(a.B),a.B=null)}It.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(cd(this.i,this.A),this.L!=2&&($n(),ze(17)),Gt(this),this.s=2,Hn(this)):Ro(this,this.S-a)};function Hn(a){a.j.G==0||a.J||el(a.j,a)}function Gt(a){mi(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,go(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function gi(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||yi(d.h,a))){if(!a.K&&yi(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Kr(d),Hr(d);else break e;wi(d),ze(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=qn(g(d.Za,d),6e3));if(1>=So(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yt(d,11)}else if((a.K||d.g==a)&&Kr(d),!V(u))for(k=d.Da.g.parse(u),u=0;u<k.length;u++){let oe=k[u];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Me=oe[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const Le=oe[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const gn=oe[5];gn!=null&&typeof gn=="number"&&0<gn&&(p=1.5*gn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const tt=a.g;if(tt){const Qr=tt.g?tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var S=p.h;S.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(_i(S,S.h),S.h=null))}if(p.D){const Ti=tt.g?tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ti&&(p.ya=Ti,pe(p.I,p.D,Ti))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var M=a;if(p.qa=rl(p,p.J?p.ia:null,p.W),M.K){Po(p.h,M);var de=M,Ce=p.L;Ce&&(de.I=Ce),de.B&&(mi(de),Lr(de)),p.g=M}else Xo(p);0<d.i.length&&Wr(d)}else oe[0]!="stop"&&oe[0]!="close"||Yt(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Yt(d,7):bi(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}$n(4)}catch{}}var dd=class{constructor(a,u){this.g=a,this.map=u}};function Co(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function No(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function So(a){return a.h?1:a.g?a.g.size:0}function yi(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function _i(a,u){a.g?a.g.add(u):a.h=u}function Po(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Co.prototype.cancel=function(){if(this.i=Do(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Do(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return R(a.i)}function fd(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(h(a)){for(var u=[],d=a.length,p=0;p<d;p++)u.push(a[p]);return u}u=[],d=0;for(p in a)u[d++]=a[p];return u}function pd(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(h(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const p in a)u[d++]=p;return u}}}function jo(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(h(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=pd(a),p=fd(a),k=p.length,S=0;S<k;S++)u.call(void 0,p[S],d&&d[S],a)}var Vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function md(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),k=null;if(0<=p){var S=a[d].substring(0,p);k=a[d].substring(p+1)}else S=a[d];u(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Qt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qt){this.h=a.h,Fr(this,a.j),this.o=a.o,this.g=a.g,Ur(this,a.s),this.l=a.l;var u=a.i,d=new Gn;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Oo(this,d),this.m=a.m}else a&&(u=String(a).match(Vo))?(this.h=!1,Fr(this,u[1]||"",!0),this.o=Wn(u[2]||""),this.g=Wn(u[3]||"",!0),Ur(this,u[4]),this.l=Wn(u[5]||"",!0),Oo(this,u[6]||"",!0),this.m=Wn(u[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}Qt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Kn(u,Mo,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Kn(u,Mo,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Kn(d,d.charAt(0)=="/"?_d:yd,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Kn(d,bd)),a.join("")};function ht(a){return new Qt(a)}function Fr(a,u,d){a.j=d?Wn(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ur(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Oo(a,u,d){u instanceof Gn?(a.i=u,wd(a.i,a.h)):(d||(u=Kn(u,vd)),a.i=new Gn(u,a.h))}function pe(a,u,d){a.i.set(u,d)}function Br(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Wn(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Kn(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,gd),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mo=/[#\/\?@]/g,yd=/[#\?:]/g,_d=/[#\?]/g,vd=/[#\?@]/g,bd=/#/g;function Gn(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function At(a){a.g||(a.g=new Map,a.h=0,a.i&&md(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Gn.prototype,n.add=function(a,u){At(this),this.i=null,a=pn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Lo(a,u){At(a),u=pn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Fo(a,u){return At(a),u=pn(a,u),a.g.has(u)}n.forEach=function(a,u){At(this),this.g.forEach(function(d,p){d.forEach(function(k){a.call(u,k,p,this)},this)},this)},n.na=function(){At(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const k=a[p];for(let S=0;S<k.length;S++)d.push(u[p])}return d},n.V=function(a){At(this);let u=[];if(typeof a=="string")Fo(this,a)&&(u=u.concat(this.g.get(pn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return At(this),this.i=null,a=pn(this,a),Fo(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Uo(a,u,d){Lo(a,u),0<d.length&&(a.i=null,a.g.set(pn(a,u),R(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const S=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var k=S;M[p]!==""&&(k+="="+encodeURIComponent(String(M[p]))),a.push(k)}}return this.i=a.join("&")};function pn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function wd(a,u){u&&!a.j&&(At(a),a.i=null,a.g.forEach(function(d,p){var k=p.toLowerCase();p!=k&&(Lo(this,p),Uo(this,k,d))},a)),a.j=u}function xd(a,u){const d=new zn;if(c.Image){const p=new Image;p.onload=b(kt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=b(kt,d,"TestLoadImage: error",!1,u,p),p.onabort=b(kt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(kt,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function Td(a,u){const d=new zn,p=new AbortController,k=setTimeout(()=>{p.abort(),kt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(S=>{clearTimeout(k),S.ok?kt(d,"TestPingServer: ok",!0,u):kt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),kt(d,"TestPingServer: error",!1,u)})}function kt(a,u,d,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(d)}catch{}}function Ed(){this.g=new ad}function Id(a,u,d){const p=d||"";try{jo(a,function(k,S){let M=k;f(k)&&(M=li(k)),u.push(p+S+"="+encodeURIComponent(M))})}catch(k){throw u.push(p+"type="+encodeURIComponent("_badmap")),k}}function $r(a){this.l=a.Ub||null,this.j=a.eb||!1}T($r,ci),$r.prototype.g=function(){return new qr(this.l,this.j)},$r.prototype.i=function(a){return function(){return a}}({});function qr(a,u){Oe.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(qr,Oe),n=qr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Yn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bo(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bo(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Qn(this):Yn(this),this.readyState==3&&Bo(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Qn(this))},n.Qa=function(a){this.g&&(this.response=a,Qn(this))},n.ga=function(){this.g&&Qn(this)};function Qn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Yn(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Yn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $o(a){let u="";return Y(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function vi(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=$o(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):pe(a,u,d))}function be(a){Oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(be,Oe);var Ad=/^https?$/i,kd=["POST","PUT"];n=be.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():di.g(),this.v=this.o?yo(this.o):yo(di),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){qo(this,S);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)d.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(kd,u,void 0))||p||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of d)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wo(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){qo(this,S)}};function qo(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,zo(a),zr(a)}function zo(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,qe(this,"complete"),qe(this,"abort"),zr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zr(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ho(this):this.bb())},n.bb=function(){Ho(this)};function Ho(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dt(a)!=4||a.Z()!=2)){if(a.u&&dt(a)==4)fo(a.Ea,0,a);else if(qe(a,"readystatechange"),dt(a)==4){a.h=!1;try{const M=a.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=M===0){var k=String(a.D).match(Vo)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),p=!Ad.test(k?k.toLowerCase():"")}d=p}if(d)qe(a,"complete"),qe(a,"success");else{a.m=6;try{var S=2<dt(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",zo(a)}}finally{zr(a)}}}}function zr(a,u){if(a.g){Wo(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||qe(a,"ready");try{d.onreadystatechange=p}catch{}}}function Wo(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function dt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),id(u)}};function Ko(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Rd(a){const u={};a=(a.g&&2<=dt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(V(a[p]))continue;var d=E(a[p]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[k]||[];u[k]=S,S.push(d)}I(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Go(a){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,a),this.cb=Jn("retryDelaySeedMs",1e4,a),this.Wa=Jn("forwardChannelMaxRetries",2,a),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Co(a&&a.concurrentRequestLimit),this.Da=new Ed,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Go.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,p){ze(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=rl(this,null,this.W),Wr(this)};function bi(a){if(Qo(a),a.G==3){var u=a.U++,d=ht(a.I);if(pe(d,"SID",a.K),pe(d,"RID",u),pe(d,"TYPE","terminate"),Xn(a,d),u=new It(a,a.j,u),u.L=2,u.v=Br(ht(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=sl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Lr(u)}nl(a)}function Hr(a){a.g&&(xi(a),a.g.cancel(),a.g=null)}function Qo(a){Hr(a),a.u&&(c.clearTimeout(a.u),a.u=null),Kr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Wr(a){if(!No(a.h)&&!a.s){a.s=!0;var u=a.Ga;re||ye(),se||(re(),se=!0),he.add(u,a),a.B=0}}function Cd(a,u){return So(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qn(g(a.Ga,a,u),tl(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new It(this,this.j,a);let S=this.o;if(this.S&&(S?(S=v(S),x(S,this.S)):S=this.S),this.m!==null||this.O||(k.H=S,S=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Jo(this,k,u),d=ht(this.I),pe(d,"RID",a),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Xn(this,d),S&&(this.O?u="headers="+encodeURIComponent(String($o(S)))+"&"+u:this.m&&vi(d,this.m,S)),_i(this.h,k),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",u),pe(d,"SID","null"),k.T=!0,pi(k,d,null)):pi(k,d,u),this.G=2}}else this.G==3&&(a?Yo(this,a):this.i.length==0||No(this.h)||Yo(this))};function Yo(a,u){var d;u?d=u.l:d=a.U++;const p=ht(a.I);pe(p,"SID",a.K),pe(p,"RID",d),pe(p,"AID",a.T),Xn(a,p),a.m&&a.o&&vi(p,a.m,a.o),d=new It(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Jo(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_i(a.h,d),pi(d,p,u)}function Xn(a,u){a.H&&Y(a.H,function(d,p){pe(u,p,d)}),a.l&&jo({},function(d,p){pe(u,p,d)})}function Jo(a,u,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let S=-1;for(;;){const M=["count="+d];S==-1?0<d?(S=k[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let de=!0;for(let Ce=0;Ce<d;Ce++){let oe=k[Ce].g;const Me=k[Ce].map;if(oe-=S,0>oe)S=Math.max(0,k[Ce].g-100),de=!1;else try{Id(Me,M,"req"+oe+"_")}catch{p&&p(Me)}}if(de){p=M.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,p}function Xo(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;re||ye(),se||(re(),se=!0),he.add(u,a),a.v=0}}function wi(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qn(g(a.Fa,a),tl(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Zo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qn(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Hr(this),Zo(this))};function xi(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Zo(a){a.g=new It(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ht(a.qa);pe(u,"RID","rpc"),pe(u,"SID",a.K),pe(u,"AID",a.T),pe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(u,"TO",a.ja),pe(u,"TYPE","xmlhttp"),Xn(a,u),a.m&&a.o&&vi(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Br(ht(u)),d.m=null,d.P=!0,Ao(d,a)}n.Za=function(){this.C!=null&&(this.C=null,Hr(this),wi(this),ze(19))};function Kr(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function el(a,u){var d=null;if(a.g==u){Kr(a),xi(a),a.g=null;var p=2}else if(yi(a.h,u))d=u.D,Po(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var k=a.B;p=Vr(),qe(p,new xo(p,d)),Wr(a)}else Xo(a);else if(k=u.s,k==3||k==0&&0<u.X||!(p==1&&Cd(a,u)||p==2&&wi(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),k){case 1:Yt(a,5);break;case 4:Yt(a,10);break;case 3:Yt(a,6);break;default:Yt(a,2)}}}function tl(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Yt(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),p=a.Xa;const k=!p;p=new Qt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fr(p,"https"),Br(p),k?xd(p.toString(),d):Td(p.toString(),d)}else ze(2);a.G=0,a.l&&a.l.sa(u),nl(a),Qo(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function nl(a){if(a.G=0,a.ka=[],a.l){const u=Do(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function rl(a,u,d){var p=d instanceof Qt?ht(d):new Qt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ur(p,p.s);else{var k=c.location;p=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var S=new Qt(null);p&&Fr(S,p),u&&(S.g=u),k&&Ur(S,k),d&&(S.l=d),p=S}return d=a.D,u=a.ya,d&&u&&pe(p,d,u),pe(p,"VER",a.la),Xn(a,p),p}function sl(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new be(new $r({eb:d})):new be(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function il(){}n=il.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gr(){}Gr.prototype.g=function(a,u){return new Ye(a,u)};function Ye(a,u){Oe.call(this),this.g=new Go(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!V(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!V(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new mn(this)}T(Ye,Oe),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){bi(this.g)},Ye.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=li(a),a=d);u.i.push(new dd(u.Ya++,a)),u.G==3&&Wr(u)},Ye.prototype.N=function(){this.g.l=null,delete this.j,bi(this.g),delete this.g,Ye.aa.N.call(this)};function al(a){ui.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}T(al,ui);function ol(){hi.call(this),this.status=1}T(ol,hi);function mn(a){this.g=a}T(mn,il),mn.prototype.ua=function(){qe(this.g,"a")},mn.prototype.ta=function(a){qe(this.g,new al(a))},mn.prototype.sa=function(a){qe(this.g,new ol)},mn.prototype.ra=function(){qe(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,Du=function(){return new Gr},Pu=function(){return Vr()},Su=Kt,Wi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,hs=Or,To.COMPLETE="complete",Nu=To,_o.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,er=_o,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Cu=be}).apply(typeof Xr<"u"?Xr:typeof self<"u"?self:typeof window<"u"?window:{});const Ll="@firebase/firestore";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let Mn="10.14.0";/**
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
 */const sn=new fa("@firebase/firestore");function Zn(){return sn.logLevel}function U(n,...e){if(sn.logLevel<=te.DEBUG){const t=e.map(Ea);sn.debug(`Firestore (${Mn}): ${n}`,...t)}}function wt(n,...e){if(sn.logLevel<=te.ERROR){const t=e.map(Ea);sn.error(`Firestore (${Mn}): ${n}`,...t)}}function kn(n,...e){if(sn.logLevel<=te.WARN){const t=e.map(Ea);sn.warn(`Firestore (${Mn}): ${n}`,...t)}}function Ea(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: `+n;throw wt(e),new Error(e)}function ue(n,e){n||H()}function K(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ju{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}}class jg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Vg{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=i;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new ju(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Ue(e)}}class Og{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Og(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ue(this.o===void 0);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string"),this.R=t.token,new Lg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ug(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Vu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ug(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Rn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new ge(0,0))}static max(){return new W(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hr{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class me extends hr{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new me(t)}static emptyPath(){return new me([])}}const Bg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends hr{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return Bg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(me.fromString(e))}static fromName(e){return new B(me.fromString(e).popFirst(5))}static empty(){return new B(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new me(e.slice()))}}function $g(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new $t(s,B.empty(),e)}function qg(n){return new $t(n.readTime,n.key,-1)}class $t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $t(W.min(),B.empty(),-1)}static max(){return new $t(W.max(),B.empty(),-1)}}function zg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const Hg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Er(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Hg)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},h=>r(h))}),o=!0,i===s&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(s=>s?j.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let h=0;h<i;h++){const f=h;t(e[f]).next(m=>{o[f]=m,++c,c===i&&r(o)},m=>s(m))}})}static doWhile(e,t){return new j((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Kg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ir(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ia{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ia.oe=-1;function Fs(n){return n==null}function Is(n){return n===0&&1/n==-1/0}function Gg(n){return typeof n=="number"&&Number.isInteger(n)&&!Is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ou(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ve{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zr(this.root,e,this.comparator,!0)}}class Zr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(e){return new Ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new Pe(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Mu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mu("Invalid base64 string: "+i):i}}(e);return new De(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(ue(!!n),typeof n=="string"){let e=0;const t=Qg.exec(n);if(ue(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
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
 */function Aa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ka(n){const e=n.mapValue.fields.__previous_value__;return Aa(e)?ka(e):e}function dr(n){const e=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class Yg{constructor(e,t,r,s,i,o,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class fr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const es={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function on(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Aa(n)?4:Xg(n)?9007199254740991:Jg(n)?10:11:H()}function ct(n,e){if(n===e)return!0;const t=on(n);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dr(n).isEqual(dr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=qt(s.timestampValue),c=qt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=xe(s.doubleValue),c=xe(i.doubleValue);return o===c?Is(o)===Is(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Rn(n.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fl(o)!==Fl(c))return!1;for(const h in o)if(o.hasOwnProperty(h)&&(c[h]===void 0||!ct(o[h],c[h])))return!1;return!0}(n,e);default:return H()}}function pr(n,e){return(n.values||[]).find(t=>ct(t,e))!==void 0}function Cn(n,e){if(n===e)return 0;const t=on(n),r=on(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=xe(i.integerValue||i.doubleValue),h=xe(o.integerValue||o.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return Bl(n.timestampValue,e.timestampValue);case 4:return Bl(dr(n),dr(e));case 5:return le(n.stringValue,e.stringValue);case 6:return function(i,o){const c=an(i),h=an(o);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),h=o.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=le(c[f],h[f]);if(m!==0)return m}return le(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=le(xe(i.latitude),xe(o.latitude));return c!==0?c:le(xe(i.longitude),xe(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return $l(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,h,f,m;const y=i.fields||{},g=o.fields||{},b=(c=y.value)===null||c===void 0?void 0:c.arrayValue,T=(h=g.value)===null||h===void 0?void 0:h.arrayValue,R=le(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((m=T==null?void 0:T.values)===null||m===void 0?void 0:m.length)||0);return R!==0?R:$l(b,T)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===es.mapValue&&o===es.mapValue)return 0;if(i===es.mapValue)return 1;if(o===es.mapValue)return-1;const c=i.fields||{},h=Object.keys(c),f=o.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const g=le(h[y],m[y]);if(g!==0)return g;const b=Cn(c[h[y]],f[m[y]]);if(b!==0)return b}return le(h.length,m.length)}(n.mapValue,e.mapValue);default:throw H()}}function Bl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=qt(n),r=qt(e),s=le(t.seconds,r.seconds);return s!==0?s:le(t.nanos,r.nanos)}function $l(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Cn(t[s],r[s]);if(i)return i}return le(t.length,r.length)}function Nn(n){return Ki(n)}function Ki(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ki(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ki(t.fields[o])}`;return s+"}"}(n.mapValue):H()}function ql(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gi(n){return!!n&&"integerValue"in n}function Ra(n){return!!n&&"arrayValue"in n}function zl(n){return!!n&&"nullValue"in n}function Hl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ds(n){return!!n&&"mapValue"in n}function Jg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ir(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ir(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ds(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(t)}setAll(e){let t=Se.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ir(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ds(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ds(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(ir(this.value))}}function Lu(n){const e=[];return cn(n.fields,(t,r)=>{const s=new Se([t]);if(ds(r)){const i=Lu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xe(e)}/**
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
 */class Be{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,W.min(),W.min(),W.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Be(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Be(e,2,t,W.min(),W.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,W.min(),W.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class As{constructor(e,t){this.position=e,this.inclusive=t}}function Wl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=Cn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ct(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ks{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Fu{}class Ee extends Fu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ty(e,t,r):t==="array-contains"?new sy(e,r):t==="in"?new iy(e,r):t==="not-in"?new ay(e,r):t==="array-contains-any"?new oy(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ny(e,r):new ry(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Cn(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(Cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends Fu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new st(e,t)}matches(e){return Uu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uu(n){return n.op==="and"}function Bu(n){return ey(n)&&Uu(n)}function ey(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function Qi(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(Bu(n))return n.filters.map(e=>Qi(e)).join(",");{const e=n.filters.map(t=>Qi(t)).join(",");return`${n.op}(${e})`}}function $u(n,e){return n instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.field.isEqual(s.field)&&ct(r.value,s.value)}(n,e):n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&$u(o,s.filters[c]),!0):!1}(n,e):void H()}function qu(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Nn(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(qu).join(" ,")+"}"}(n):"Filter"}class ty extends Ee{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class ny extends Ee{constructor(e,t){super(e,"in",t),this.keys=zu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ry extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=zu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class sy extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ra(t)&&pr(t.arrayValue,this.value)}}class iy extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pr(this.value.arrayValue,t)}}class ay extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!pr(this.value.arrayValue,t)}}class oy extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>pr(this.value.arrayValue,r))}}/**
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
 */class ly{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Gl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new ly(n,e,t,r,s,i,o)}function Ca(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Nn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Nn(r)).join(",")),e.ue=t}return e.ue}function Na(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$u(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Kl(n.startAt,e.startAt)&&Kl(n.endAt,e.endAt)}function Yi(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ar{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cy(n,e,t,r,s,i,o,c){return new Ar(n,e,t,r,s,i,o,c)}function Sa(n){return new Ar(n)}function Ql(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hu(n){return n.collectionGroup!==null}function ar(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Pe(Se.comparator);return o.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ks(i,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new ks(Se.keyField(),r))}return e.ce}function ot(n){const e=K(n);return e.le||(e.le=uy(e,ar(n))),e.le}function uy(n,e){if(n.limitType==="F")return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ks(s.field,i)});const t=n.endAt?new As(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new As(n.startAt.position,n.startAt.inclusive):null;return Gl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ji(n,e){const t=n.filters.concat([e]);return new Ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xi(n,e,t){return new Ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Us(n,e){return Na(ot(n),ot(e))&&n.limitType===e.limitType}function Wu(n){return`${Ca(ot(n))}|lt:${n.limitType}`}function yn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>qu(s)).join(", ")}]`),Fs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Nn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Nn(s)).join(",")),`Target(${r})`}(ot(n))}; limitType=${n.limitType})`}function Bs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ar(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,h){const f=Wl(o,c,h);return o.inclusive?f<=0:f<0}(r.startAt,ar(r),s)||r.endAt&&!function(o,c,h){const f=Wl(o,c,h);return o.inclusive?f>=0:f>0}(r.endAt,ar(r),s))}(n,e)}function hy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ku(n){return(e,t)=>{let r=!1;for(const s of ar(n)){const i=dy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dy(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const h=o.data.field(i),f=c.data.field(i);return h!==null&&f!==null?Cn(h,f):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ou(this.inner)}size(){return this.innerSize}}/**
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
 */const fy=new ve(B.comparator);function xt(){return fy}const Gu=new ve(B.comparator);function tr(...n){let e=Gu;for(const t of n)e=e.insert(t.key,t);return e}function Qu(n){let e=Gu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Zt(){return or()}function Yu(){return or()}function or(){return new Ln(n=>n.toString(),(n,e)=>n.isEqual(e))}const py=new ve(B.comparator),my=new Pe(B.comparator);function Z(...n){let e=my;for(const t of n)e=e.add(t);return e}const gy=new Pe(le);function yy(){return gy}/**
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
 */function Pa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Is(e)?"-0":e}}function Ju(n){return{integerValue:""+n}}function _y(n,e){return Gg(e)?Ju(e):Pa(n,e)}/**
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
 */class $s{constructor(){this._=void 0}}function vy(n,e,t){return n instanceof mr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Aa(i)&&(i=ka(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof gr?Zu(n,e):n instanceof yr?eh(n,e):function(s,i){const o=Xu(s,i),c=Yl(o)+Yl(s.Pe);return Gi(o)&&Gi(s.Pe)?Ju(c):Pa(s.serializer,c)}(n,e)}function by(n,e,t){return n instanceof gr?Zu(n,e):n instanceof yr?eh(n,e):t}function Xu(n,e){return n instanceof Rs?function(r){return Gi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mr extends $s{}class gr extends $s{constructor(e){super(),this.elements=e}}function Zu(n,e){const t=th(e);for(const r of n.elements)t.some(s=>ct(s,r))||t.push(r);return{arrayValue:{values:t}}}class yr extends $s{constructor(e){super(),this.elements=e}}function eh(n,e){let t=th(e);for(const r of n.elements)t=t.filter(s=>!ct(s,r));return{arrayValue:{values:t}}}class Rs extends $s{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Yl(n){return xe(n.integerValue||n.doubleValue)}function th(n){return Ra(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class wy{constructor(e,t){this.field=e,this.transform=t}}function xy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof gr&&s instanceof gr||r instanceof yr&&s instanceof yr?Rn(r.elements,s.elements,ct):r instanceof Rs&&s instanceof Rs?ct(r.Pe,s.Pe):r instanceof mr&&s instanceof mr}(n.transform,e.transform)}class Ty{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qs{}function nh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zs(n.key,Ge.none()):new kr(n.key,n.data,Ge.none());{const t=n.data,r=Ke.empty();let s=new Pe(Se.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wt(n.key,r,new Xe(s.toArray()),Ge.none())}}function Ey(n,e,t){n instanceof kr?function(s,i,o){const c=s.value.clone(),h=Xl(s.fieldTransforms,i,o.transformResults);c.setAll(h),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Wt?function(s,i,o){if(!fs(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xl(s.fieldTransforms,i,o.transformResults),h=i.data;h.setAll(rh(s)),h.setAll(c),i.convertToFoundDocument(o.version,h).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function lr(n,e,t,r){return n instanceof kr?function(i,o,c,h){if(!fs(i.precondition,o))return c;const f=i.value.clone(),m=Zl(i.fieldTransforms,h,o);return f.setAll(m),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Wt?function(i,o,c,h){if(!fs(i.precondition,o))return c;const f=Zl(i.fieldTransforms,h,o),m=o.data;return m.setAll(rh(i)),m.setAll(f),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,o,c){return fs(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Iy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Xu(r.transform,s||null);i!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,i))}return t||null}function Jl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rn(r,s,(i,o)=>xy(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class kr extends qs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wt extends qs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Xl(n,e,t){const r=new Map;ue(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,by(o,c,t[s]))}return r}function Zl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,vy(i,o,e))}return r}class zs extends qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ay extends qs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ky{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ey(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yu();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const h=nh(o,c);h!==null&&r.set(s.key,h),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(t,r)=>Jl(t,r))&&Rn(this.baseMutations,e.baseMutations,(t,r)=>Jl(t,r))}}class Da{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ue(e.mutations.length===r.length);let s=function(){return py}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Da(e,t,r,s)}}/**
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
 */class Ry{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Cy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,ne;function Ny(n){switch(n){default:return H();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function sh(n){if(n===void 0)return wt("GRPC error has no .code"),D.UNKNOWN;switch(n){case Te.OK:return D.OK;case Te.CANCELLED:return D.CANCELLED;case Te.UNKNOWN:return D.UNKNOWN;case Te.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Te.INTERNAL:return D.INTERNAL;case Te.UNAVAILABLE:return D.UNAVAILABLE;case Te.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Te.NOT_FOUND:return D.NOT_FOUND;case Te.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Te.ABORTED:return D.ABORTED;case Te.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Te.DATA_LOSS:return D.DATA_LOSS;default:return H()}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Sy(){return new TextEncoder}/**
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
 */const Py=new tn([4294967295,4294967295],0);function ec(n){const e=Sy().encode(n),t=new Ru;return t.update(e),new Uint8Array(t.digest())}function tc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([t,r],0),new tn([s,i],0)]}class ja{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(r<0)throw new nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=tn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(tn.fromNumber(r)));return s.compare(Py)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ec(e),[r,s]=tc(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ja(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=ec(e),[r,s]=tc(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hs(W.min(),s,new ve(le),xt(),Z())}}class Rr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rr(r,t,Z(),Z(),Z())}}/**
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
 */class ps{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ih{constructor(e,t){this.targetId=e,this.me=t}}class ah{constructor(e,t,r=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class nc{constructor(){this.fe=0,this.ge=sc(),this.pe=De.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Rr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=sc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dy{constructor(e){this.Le=e,this.Be=new Map,this.ke=xt(),this.qe=rc(),this.Qe=new ve(le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Yi(i))if(r===0){const o=new B(i.path);this.Ue(t,o,Be.newNoDocument(o,W.min()))}else ue(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),h=c?this.Xe(c,e,o):1;if(h!==0){this.je(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=an(r).toUint8Array()}catch(h){if(h instanceof Mu)return kn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ja(o,s,i)}catch(h){return kn(h instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Yi(c.target)){const h=new B(c.target.path);this.ke.get(h)!==null||this.it(o,h)||this.Ue(o,h,Be.newNoDocument(h,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=Z();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Hs(e,t,this.Qe,this.ke,r);return this.ke=xt(),this.qe=rc(),this.Qe=new ve(le),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new nc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pe(le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new nc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function rc(){return new ve(B.comparator)}function sc(){return new ve(B.comparator)}const jy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Oy=(()=>({and:"AND",or:"OR"}))();class My{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zi(n,e){return n.useProto3Json||Fs(e)?e:{value:e}}function Cs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ly(n,e){return Cs(n,e.toTimestamp())}function lt(n){return ue(!!n),W.fromTimestamp(function(t){const r=qt(t);return new ge(r.seconds,r.nanos)}(n))}function Va(n,e){return ea(n,e).canonicalString()}function ea(n,e){const t=function(s){return new me(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lh(n){const e=me.fromString(n);return ue(fh(e)),e}function ta(n,e){return Va(n.databaseId,e.path)}function Pi(n,e){const t=lh(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(uh(t))}function ch(n,e){return Va(n.databaseId,e)}function Fy(n){const e=lh(n);return e.length===4?me.emptyPath():uh(e)}function na(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uh(n){return ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ic(n,e,t){return{name:ta(n,e),fields:t.value.mapValue.fields}}function Uy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,m){return f.useProto3Json?(ue(m===void 0||typeof m=="string"),De.fromBase64String(m||"")):(ue(m===void 0||m instanceof Buffer||m instanceof Uint8Array),De.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(f){const m=f.code===void 0?D.UNKNOWN:sh(f.code);return new F(m,f.message||"")}(o);t=new ah(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pi(n,r.document.name),i=lt(r.document.updateTime),o=r.document.createTime?lt(r.document.createTime):W.min(),c=new Ke({mapValue:{fields:r.document.fields}}),h=Be.newFoundDocument(s,i,o,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new ps(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pi(n,r.document),i=r.readTime?lt(r.readTime):W.min(),o=Be.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ps([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pi(n,r.document),i=r.removedTargetIds||[];t=new ps([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Cy(s,i),c=r.targetId;t=new ih(c,o)}}return t}function By(n,e){let t;if(e instanceof kr)t={update:ic(n,e.key,e.value)};else if(e instanceof zs)t={delete:ta(n,e.key)};else if(e instanceof Wt)t={update:ic(n,e.key,e.data),updateMask:Yy(e.fieldMask)};else{if(!(e instanceof Ay))return H();t={verify:ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof mr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rs)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ly(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(n,e.precondition)),t}function $y(n,e){return n&&n.length>0?(ue(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?lt(s.updateTime):lt(i);return o.isEqual(W.min())&&(o=lt(i)),new Ty(o,s.transformResults||[])}(t,e))):[]}function qy(n,e){return{documents:[ch(n,e.path)]}}function zy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ch(n,s);const i=function(f){if(f.length!==0)return dh(st.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(f){if(f.length!==0)return f.map(m=>function(g){return{field:_n(g.field),direction:Ky(g.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Zi(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:t,parent:s}}function Hy(n){let e=Fy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ue(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const g=hh(y);return g instanceof st&&Bu(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(y){return y.map(g=>function(T){return new ks(vn(T.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(y){let g;return g=typeof y=="object"?y.value:y,Fs(g)?null:g}(t.limit));let h=null;t.startAt&&(h=function(y){const g=!!y.before,b=y.values||[];return new As(b,g)}(t.startAt));let f=null;return t.endAt&&(f=function(y){const g=!y.before,b=y.values||[];return new As(b,g)}(t.endAt)),cy(e,s,o,i,c,"F",h,f)}function Wy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=vn(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vn(t.unaryFilter.field);return Ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vn(t.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vn(t.unaryFilter.field);return Ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(vn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(r=>hh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function Ky(n){return jy[n]}function Gy(n){return Vy[n]}function Qy(n){return Oy[n]}function _n(n){return{fieldPath:n.canonicalString()}}function vn(n){return Se.fromServerFormat(n.fieldPath)}function dh(n){return n instanceof Ee?function(t){if(t.op==="=="){if(Hl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NAN"}};if(zl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NAN"}};if(zl(t.value))return{unaryFilter:{field:_n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(t.field),op:Gy(t.op),value:t.value}}}(n):n instanceof st?function(t){const r=t.getFilters().map(s=>dh(s));return r.length===1?r[0]:{compositeFilter:{op:Qy(t.op),filters:r}}}(n):H()}function Yy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Dt{constructor(e,t,r,s,i=W.min(),o=W.min(),c=De.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Jy{constructor(e){this.ct=e}}function Xy(n){const e=Hy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xi(e,e.limit,"L"):e}/**
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
 */class Zy{constructor(){this.un=new e_}addToCollectionParentIndex(e,t){return this.un.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve($t.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class e_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Pe(me.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Pe(me.comparator)).toArray()}}/**
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
 */class Sn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Sn(0)}static kn(){return new Sn(-1)}}/**
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
 */class t_{constructor(){this.changes=new Ln(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class n_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class r_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&lr(r.mutation,s,Xe.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const s=Zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=tr();return i.forEach((c,h)=>{o=o.insert(c,h.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=xt();const o=or(),c=function(){return or()}();return t.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Wt)?i=i.insert(f.key,f):m!==void 0?(o.set(f.key,m.mutation.getFieldMask()),lr(m.mutation,f,m.mutation.getFieldMask(),ge.now())):o.set(f.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(h=>(h.forEach((f,m)=>o.set(f,m)),t.forEach((f,m)=>{var y;return c.set(f,new n_(m,(y=o.get(f))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=or();let s=new ve((o,c)=>o-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let m=r.get(h)||Xe.empty();m=c.applyToLocalView(f,m),r.set(h,m);const y=(s.get(c.batchId)||Z()).add(h);s=s.insert(c.batchId,y)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,y=Yu();m.forEach(g=>{if(!i.has(g)){const b=nh(t.get(g),r.get(g));b!==null&&y.set(g,b),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,f,y))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):j.resolve(Zt());let c=-1,h=i;return o.next(f=>j.forEach(f,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?j.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{h=h.insert(m,g)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,h,f,Z())).next(m=>({batchId:c,changes:Qu(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=tr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=tr();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,h=>{const f=function(y,g){return new Ar(g,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(m=>{m.forEach((y,g)=>{o=o.insert(y,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((h,f)=>{const m=f.getKey();o.get(m)===null&&(o=o.insert(m,Be.newInvalidDocument(m)))});let c=tr();return o.forEach((h,f)=>{const m=i.get(h);m!==void 0&&lr(m.mutation,f,Xe.empty(),ge.now()),Bs(t,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class s_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return j.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:lt(s.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Xy(s.bundledQuery),readTime:lt(s.readTime)}}(t)),j.resolve()}}/**
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
 */class i_{constructor(){this.overlays=new ve(B.comparator),this.Ir=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return j.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const s=Zt(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return j.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve((f,m)=>f-m);const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=i.get(f.largestBatchId);m===null&&(m=Zt(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=Zt(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return j.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ry(t,r));let i=this.Ir.get(t);i===void 0&&(i=Z(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class Oa{constructor(){this.Tr=new Pe(Re.Er),this.dr=new Pe(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Re(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Re(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new me([])),r=new Re(t,e),s=new Re(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new me([])),r=new Re(t,e),s=new Re(t,e+1);let i=Z();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Re(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||le(e.wr,t.wr)}static Ar(e,t){return le(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class o_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Pe(Re.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ky(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,t){return j.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(le);return t.forEach(s=>{const i=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Re(new B(i),0);let c=new Pe(le);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)},o),j.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(t.mutations,s=>{const i=new Re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Re(t,0),s=this.br.firstAfterOrEqual(r);return j.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class l_{constructor(e){this.Mr=e,this.docs=function(){return new ve(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Be.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xt();const o=t.path,c=new B(o.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||zg(qg(m),r)<=0||(s.has(m.key)||Bs(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H()}Or(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new c_(this)}getSize(e){return j.resolve(this.size)}}class c_ extends t_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class u_{constructor(e){this.persistence=e,this.Nr=new Ln(t=>Ca(t),Na),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Oa,this.targetCount=0,this.kr=Sn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),j.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Sn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Kn(t),j.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Br.containsKey(t))}}/**
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
 */class h_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ia(0),this.Kr=!1,this.Kr=!0,this.$r=new a_,this.referenceDelegate=e(this),this.Ur=new u_(this),this.indexManager=new Zy,this.remoteDocumentCache=function(s){return new l_(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Jy(t),this.Gr=new s_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new o_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new d_(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class d_ extends Wg{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.Jr=new Oa,this.Yr=null}static Zr(e){return new Ma(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),j.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=B.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return j.or([()=>j.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class La{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new La(e,t.fromCache,r,s)}}/**
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
 */class f_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class p_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return mf()?8:Kg($e())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new f_;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(Zn()<=te.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Zn()<=te.DEBUG&&U("QueryEngine","Query:",yn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Zn()<=te.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):j.resolve())}Yi(e,t){if(Ql(t))return j.resolve(null);let r=ot(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Xi(t,null,"F"),r=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Z(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.ts(t,c);return this.ns(t,f,o,h.readTime)?this.Yi(e,Xi(t,null,"F")):this.rs(e,f,t,h)}))})))}Zi(e,t,r,s){return Ql(t)||s.isEqual(W.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?j.resolve(null):(Zn()<=te.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yn(t)),this.rs(e,o,t,$g(s,-1)).next(c=>c))})}ts(e,t){let r=new Pe(Ku(e));return t.forEach((s,i)=>{Bs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Zn()<=te.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",yn(t)),this.Ji.getDocumentsMatchingQuery(e,t,$t.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class m_{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ve(le),this._s=new Ln(i=>Ca(i),Na),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function g_(n,e,t,r){return new m_(n,e,t,r)}async function ph(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let h=Z();for(const f of s){o.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:o,addedBatchIds:c}))})})}function y_(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const y=f.batch,g=y.keys();let b=j.resolve();return g.forEach(T=>{b=b.next(()=>m.getEntry(h,T)).next(R=>{const C=f.docVersions.get(T);ue(C!==null),R.version.compareTo(C)<0&&(y.applyToRemoteDocument(R,f),R.isValidDocument()&&(R.setReadTime(f.commitVersion),m.addEntry(R)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=Z();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function mh(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function __(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,y)=>{const g=s.get(y);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,y)));let b=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(De.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(y,b),function(R,C,P){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(g,b,m)&&c.push(t.Ur.updateTargetData(i,b))});let h=xt(),f=Z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(v_(i,o,e.documentUpdates).next(m=>{h=m.Ps,f=m.Is})),!r.isEqual(W.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,h,f)).next(()=>h)}).then(i=>(t.os=s,i))}function v_(n,e,t){let r=Z(),s=Z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=xt();return t.forEach((c,h)=>{const f=i.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(W.min())?(e.removeEntry(c,h.readTime),o=o.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),o=o.insert(c,h)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:o,Is:s}})}function b_(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function w_(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new Dt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ra(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ir(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ac(n,e,t){const r=K(n);let s=W.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(h,f,m){const y=K(h),g=y._s.get(m);return g!==void 0?j.resolve(y.os.get(g)):y.Ur.getTargetData(f,m)}(r,o,ot(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(h=>{i=h})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:Z())).next(c=>(x_(r,hy(e),c),{documents:c,Ts:i})))}function x_(n,e,t){let r=n.us.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class oc{constructor(){this.activeTargetIds=yy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T_{constructor(){this.so=new oc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new oc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E_{_o(e){}shutdown(){}}/**
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
 */class lc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ts=null;function Di(){return ts===null?ts=function(){return 268435456+Math.round(2147483648*Math.random())}():ts++,"0x"+ts.toString(16)}/**
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
 */const I_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class A_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Fe="WebChannelConnection";class k_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=Di(),h=this.xo(t,r.toUriEncodedString());U("RestConnection",`Sending RPC '${t}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,o),this.No(t,h,f,s).then(m=>(U("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw kn("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=I_[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Di();return new Promise((o,c)=>{const h=new Cu;h.setWithCredentials(!0),h.listenOnce(Nu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case hs.NO_ERROR:const m=h.getResponseJson();U(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case hs.TIMEOUT:U(Fe,`RPC '${e}' ${i} timed out`),c(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case hs.HTTP_ERROR:const y=h.getStatus();if(U(Fe,`RPC '${e}' ${i} failed with status:`,y,"response text:",h.getResponseText()),y>0){let g=h.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g==null?void 0:g.error;if(b&&b.status&&b.message){const T=function(C){const P=C.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(P)>=0?P:D.UNKNOWN}(b.status);c(new F(T,b.message))}else c(new F(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new F(D.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(Fe,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);U(Fe,`RPC '${e}' ${i} sending request:`,s),h.send(t,"POST",f,r,15)})}Bo(e,t,r){const s=Di(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Du(),c=Pu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=i.join("");U(Fe,`Creating RPC '${e}' stream ${s}: ${m}`,h);const y=o.createWebChannel(m,h);let g=!1,b=!1;const T=new A_({Io:C=>{b?U(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(U(Fe,`Opening RPC '${e}' stream ${s} transport.`),y.open(),g=!0),U(Fe,`RPC '${e}' stream ${s} sending:`,C),y.send(C))},To:()=>y.close()}),R=(C,P,V)=>{C.listen(P,L=>{try{V(L)}catch(q){setTimeout(()=>{throw q},0)}})};return R(y,er.EventType.OPEN,()=>{b||(U(Fe,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),R(y,er.EventType.CLOSE,()=>{b||(b=!0,U(Fe,`RPC '${e}' stream ${s} transport closed`),T.So())}),R(y,er.EventType.ERROR,C=>{b||(b=!0,kn(Fe,`RPC '${e}' stream ${s} transport errored:`,C),T.So(new F(D.UNAVAILABLE,"The operation could not be completed")))}),R(y,er.EventType.MESSAGE,C=>{var P;if(!b){const V=C.data[0];ue(!!V);const L=V,q=L.error||((P=L[0])===null||P===void 0?void 0:P.error);if(q){U(Fe,`RPC '${e}' stream ${s} received error:`,q);const G=q.status;let Y=function(_){const x=Te[_];if(x!==void 0)return sh(x)}(G),I=q.message;Y===void 0&&(Y=D.INTERNAL,I="Unknown error status: "+G+" with message "+q.message),b=!0,T.So(new F(Y,I)),y.close()}else U(Fe,`RPC '${e}' stream ${s} received:`,V),T.bo(V)}}),R(c,Su.STAT_EVENT,C=>{C.stat===Wi.PROXY?U(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Wi.NOPROXY&&U(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function ji(){return typeof document<"u"?document:null}/**
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
 */function Ws(n){return new My(n,!0)}/**
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
 */class gh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class yh{constructor(e,t,r,s,i,o,c,h){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new gh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R_ extends yh{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Uy(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?lt(o.readTime):W.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=na(this.serializer),t.addTarget=function(i,o){let c;const h=o.target;if(c=Yi(h)?{documents:qy(i,h)}:{query:zy(i,h)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=oh(i,o.resumeToken);const f=Zi(i,o.expectedCount);f!==null&&(c.expectedCount=f)}else if(o.snapshotVersion.compareTo(W.min())>0){c.readTime=Cs(i,o.snapshotVersion.toTimestamp());const f=Zi(i,o.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=Wy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=na(this.serializer),t.removeTarget=e,this.a_(t)}}class C_ extends yh{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=$y(e.writeResults,e.commitTime),r=lt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=na(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>By(this.serializer,r))};this.a_(t)}}/**
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
 */class N_ extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,ea(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,ea(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class S_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wt(t),this.D_=!1):U("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class P_{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{un(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=K(h);f.L_.add(4),await Cr(f),f.q_.set("Unknown"),f.L_.delete(4),await Ks(f)}(this))})}),this.q_=new S_(r,s)}}async function Ks(n){if(un(n))for(const e of n.B_)await e(!0)}async function Cr(n){for(const e of n.B_)await e(!1)}function _h(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),$a(t)?Ba(t):Fn(t).r_()&&Ua(t,e))}function Fa(n,e){const t=K(n),r=Fn(t);t.N_.delete(e),r.r_()&&vh(t,e),t.N_.size===0&&(r.r_()?r.o_():un(t)&&t.q_.set("Unknown"))}function Ua(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fn(n).A_(e)}function vh(n,e){n.Q_.xe(e),Fn(n).R_(e)}function Ba(n){n.Q_=new Dy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Fn(n).start(),n.q_.v_()}function $a(n){return un(n)&&!Fn(n).n_()&&n.N_.size>0}function un(n){return K(n).L_.size===0}function bh(n){n.Q_=void 0}async function D_(n){n.q_.set("Online")}async function j_(n){n.N_.forEach((e,t)=>{Ua(n,e)})}async function V_(n,e){bh(n),$a(n)?(n.q_.M_(e),Ba(n)):n.q_.set("Unknown")}async function O_(n,e,t){if(n.q_.set("Online"),e instanceof ah&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ns(n,r)}else if(e instanceof ps?n.Q_.Ke(e):e instanceof ih?n.Q_.He(e):n.Q_.We(e),!t.isEqual(W.min()))try{const r=await mh(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.N_.get(f);m&&i.N_.set(f,m.withResumeToken(h.resumeToken,o))}}),c.targetMismatches.forEach((h,f)=>{const m=i.N_.get(h);if(!m)return;i.N_.set(h,m.withResumeToken(De.EMPTY_BYTE_STRING,m.snapshotVersion)),vh(i,h);const y=new Dt(m.target,h,f,m.sequenceNumber);Ua(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ns(n,r)}}async function Ns(n,e,t){if(!Ir(e))throw e;n.L_.add(1),await Cr(n),n.q_.set("Offline"),t||(t=()=>mh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ks(n)})}function wh(n,e){return e().catch(t=>Ns(n,t,e))}async function Gs(n){const e=K(n),t=zt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;M_(e);)try{const s=await b_(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,L_(e,s)}catch(s){await Ns(e,s)}xh(e)&&Th(e)}function M_(n){return un(n)&&n.O_.length<10}function L_(n,e){n.O_.push(e);const t=zt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function xh(n){return un(n)&&!zt(n).n_()&&n.O_.length>0}function Th(n){zt(n).start()}async function F_(n){zt(n).p_()}async function U_(n){const e=zt(n);for(const t of n.O_)e.m_(t.mutations)}async function B_(n,e,t){const r=n.O_.shift(),s=Da.from(r,e,t);await wh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gs(n)}async function $_(n,e){e&&zt(n).V_&&await async function(r,s){if(function(o){return Ny(o)&&o!==D.ABORTED}(s.code)){const i=r.O_.shift();zt(r).s_(),await wh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gs(r)}}(n,e),xh(n)&&Th(n)}async function cc(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=un(t);t.L_.add(3),await Cr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ks(t)}async function q_(n,e){const t=K(n);e?(t.L_.delete(2),await Ks(t)):e||(t.L_.add(2),await Cr(t),t.q_.set("Unknown"))}function Fn(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new R_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:D_.bind(null,n),Ro:j_.bind(null,n),mo:V_.bind(null,n),d_:O_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),$a(n)?Ba(n):n.q_.set("Unknown")):(await n.K_.stop(),bh(n))})),n.K_}function zt(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new C_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:F_.bind(null,n),mo:$_.bind(null,n),f_:U_.bind(null,n),g_:B_.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Gs(n)):(await n.U_.stop(),n.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class qa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new qa(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function za(n,e){if(wt("AsyncQueue",`${e}: ${n}`),Ir(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class En{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=tr(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new En(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof En)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new En;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class uc{constructor(){this.W_=new ve(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pn{constructor(e,t,r,s,i,o,c,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Pn(e,t,En.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Us(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class z_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class H_{constructor(){this.queries=hc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=hc(),i.forEach((o,c)=>{for(const h of c.j_)h.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function hc(){return new Ln(n=>Wu(n),Us)}async function Eh(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new z_,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=za(o,`Initialization of query '${yn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Ha(t)}async function Ih(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function W_(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Ha(t)}function K_(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Ha(n){n.Y_.forEach(e=>{e.next()})}var sa,dc;(dc=sa||(sa={})).ea="default",dc.Cache="cache";class Ah{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==sa.Cache}}/**
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
 */class kh{constructor(e){this.key=e}}class Rh{constructor(e){this.key=e}}class G_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=Ku(e),this.Ra=new En(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new uc,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const g=s.get(m),b=Bs(this.query,y)?y:null,T=!!g&&this.mutatedKeys.has(g.key),R=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;g&&b?g.data.isEqual(b.data)?T!==R&&(r.track({type:3,doc:b}),C=!0):this.ga(g,b)||(r.track({type:2,doc:b}),C=!0,(h&&this.Aa(b,h)>0||f&&this.Aa(b,f)<0)&&(c=!0)):!g&&b?(r.track({type:0,doc:b}),C=!0):g&&!b&&(r.track({type:1,doc:g}),C=!0,(h||f)&&(c=!0)),C&&(b?(o=o.add(b),i=R?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,y)=>function(b,T){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return R(b)-R(T)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,o.length!==0||f?{snapshot:new Pn(this.query,e.Ra,i,o,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Rh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new kh(r))}),t}ba(e){this.Ta=e.Ts,this.da=Z();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Pn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Q_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Y_{constructor(e){this.key=e,this.va=!1}}class J_{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ln(c=>Wu(c),Us),this.Ma=new Map,this.xa=new Set,this.Oa=new ve(B.comparator),this.Na=new Map,this.La=new Oa,this.Ba={},this.ka=new Map,this.qa=Sn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function X_(n,e,t=!0){const r=jh(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Ch(r,e,t,!0),s}async function Z_(n,e){const t=jh(n);await Ch(t,e,!0,!1)}async function Ch(n,e,t,r){const s=await w_(n.localStore,ot(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await e0(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&_h(n.remoteStore,s),c}async function e0(n,e,t,r,s){n.Ka=(y,g,b)=>async function(R,C,P,V){let L=C.view.ma(P);L.ns&&(L=await ac(R.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,L)));const q=V&&V.targetChanges.get(C.targetId),G=V&&V.targetMismatches.get(C.targetId)!=null,Y=C.view.applyChanges(L,R.isPrimaryClient,q,G);return pc(R,C.targetId,Y.wa),Y.snapshot}(n,y,g,b);const i=await ac(n.localStore,e,!0),o=new G_(e,i.Ts),c=o.ma(i.documents),h=Rr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=o.applyChanges(c,n.isPrimaryClient,h);pc(n,t,f.wa);const m=new Q_(e,t,o);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function t0(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Us(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ra(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Fa(r.remoteStore,s.targetId),ia(r,s.targetId)}).catch(Er)):(ia(r,s.targetId),await ra(r.localStore,s.targetId,!0))}async function n0(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Fa(t.remoteStore,r.targetId))}async function r0(n,e,t){const r=u0(n);try{const s=await function(o,c){const h=K(o),f=ge.now(),m=c.reduce((b,T)=>b.add(T.key),Z());let y,g;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let T=xt(),R=Z();return h.cs.getEntries(b,m).next(C=>{T=C,T.forEach((P,V)=>{V.isValidDocument()||(R=R.add(P))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,T)).next(C=>{y=C;const P=[];for(const V of c){const L=Iy(V,y.get(V.key).overlayedDocument);L!=null&&P.push(new Wt(V.key,L,Lu(L.value.mapValue),Ge.exists(!0)))}return h.mutationQueue.addMutationBatch(b,f,P,c)}).next(C=>{g=C;const P=C.applyToLocalDocumentSet(y,R);return h.documentOverlayCache.saveOverlays(b,C.batchId,P)})}).then(()=>({batchId:g.batchId,changes:Qu(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,h){let f=o.Ba[o.currentUser.toKey()];f||(f=new ve(le)),f=f.insert(c,h),o.Ba[o.currentUser.toKey()]=f}(r,s.batchId,t),await Nr(r,s.changes),await Gs(r.remoteStore)}catch(s){const i=za(s,"Failed to persist write");t.reject(i)}}async function Nh(n,e){const t=K(n);try{const r=await __(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ue(o.va):s.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await Nr(t,r,e)}catch(r){await Er(r)}}function fc(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const h=K(o);h.onlineState=c;let f=!1;h.queries.forEach((m,y)=>{for(const g of y.j_)g.Z_(c)&&(f=!0)}),f&&Ha(h)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s0(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ve(B.comparator);o=o.insert(i,Be.newNoDocument(i,W.min()));const c=Z().add(i),h=new Hs(W.min(),new Map,new ve(le),o,c);await Nh(r,h),r.Oa=r.Oa.remove(i),r.Na.delete(e),Wa(r)}else await ra(r.localStore,e,!1).then(()=>ia(r,e,t)).catch(Er)}async function i0(n,e){const t=K(n),r=e.batch.batchId;try{const s=await y_(t.localStore,e);Ph(t,r,null),Sh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Nr(t,s)}catch(s){await Er(s)}}async function a0(n,e,t){const r=K(n);try{const s=await function(o,c){const h=K(o);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(y=>(ue(y!==null),m=y.keys(),h.mutationQueue.removeMutationBatch(f,y))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,e);Ph(r,e,t),Sh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Nr(r,s)}catch(s){await Er(s)}}function Sh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ph(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Dh(n,r)})}function Dh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Fa(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Wa(n))}function pc(n,e,t){for(const r of t)r instanceof kh?(n.La.addReference(r.key,e),o0(n,r)):r instanceof Rh?(U("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Dh(n,r.key)):H()}function o0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(U("SyncEngine","New document in limbo: "+t),n.xa.add(r),Wa(n))}function Wa(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(me.fromString(e)),r=n.qa.next();n.Na.set(r,new Y_(t)),n.Oa=n.Oa.insert(t,r),_h(n.remoteStore,new Dt(ot(Sa(t.path)),r,"TargetPurposeLimboResolution",Ia.oe))}}async function Nr(n,e,t){const r=K(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{o.push(r.Ka(h,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const y=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){s.push(f);const y=La.Wi(h.targetId,f);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(h,f){const m=K(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>j.forEach(f,g=>j.forEach(g.$i,b=>m.persistence.referenceDelegate.addReference(y,g.targetId,b)).next(()=>j.forEach(g.Ui,b=>m.persistence.referenceDelegate.removeReference(y,g.targetId,b)))))}catch(y){if(!Ir(y))throw y;U("LocalStore","Failed to update sequence numbers: "+y)}for(const y of f){const g=y.targetId;if(!y.fromCache){const b=m.os.get(g),T=b.snapshotVersion,R=b.withLastLimboFreeSnapshotVersion(T);m.os=m.os.insert(g,R)}}}(r.localStore,i))}async function l0(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await ph(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(h=>{h.reject(new F(D.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nr(t,r.hs)}}function c0(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return Z().add(r.key);{let s=Z();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function jh(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s0.bind(null,e),e.Ca.d_=W_.bind(null,e.eventManager),e.Ca.$a=K_.bind(null,e.eventManager),e}function u0(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=i0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a0.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ws(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return g_(this.persistence,new p_,e.initialUser,this.serializer)}Ga(e){return new h_(Ma.Zr,this.serializer)}Wa(e){return new T_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=l0.bind(null,this.syncEngine),await q_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new H_}()}createDatastore(e){const t=Ws(e.databaseInfo.databaseId),r=function(i){return new k_(i)}(e.databaseInfo);return function(i,o,c,h){return new N_(i,o,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new P_(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>fc(this.syncEngine,t,0),function(){return lc.D()?new lc:new E_}())}createSyncEngine(e,t){return function(s,i,o,c,h,f,m){const y=new J_(s,i,o,c,h,f);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);U("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Cr(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}aa.provider={build:()=>new aa};/**
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
 */class Vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class h0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=Vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=za(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vi(n,e){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ph(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function mc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await d0(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>cc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>cc(e.remoteStore,s)),n._onlineComponents=e}async function d0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;kn("Error using user provided cache. Falling back to memory cache: "+t),await Vi(n,new Ss)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Vi(n,new Ss);return n._offlineComponents}async function Oh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await mc(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await mc(n,new aa))),n._onlineComponents}function f0(n){return Oh(n).then(e=>e.syncEngine)}async function oa(n){const e=await Oh(n),t=e.eventManager;return t.onListen=X_.bind(null,e.syncEngine),t.onUnlisten=t0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Z_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=n0.bind(null,e.syncEngine),t}function p0(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,h,f){const m=new Vh({next:g=>{m.Za(),o.enqueueAndForget(()=>Ih(i,y)),g.fromCache&&h.source==="server"?f.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(g)},error:g=>f.reject(g)}),y=new Ah(c,m,{includeMetadataChanges:!0,_a:!0});return Eh(i,y)}(await oa(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Mh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const gc=new Map;/**
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
 */function Lh(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function m0(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yc(n){if(!B.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _c(n){if(B.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qs(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class vc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ys{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dg;switch(r.type){case"firstParty":return new Mg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=gc.get(t);r&&(U("ComponentProvider","Removing Datastore"),gc.delete(t),r.terminate())}(this),Promise.resolve()}}function g0(n,e,t,r={}){var s;const i=(n=rt(n,Ys))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Ue.MOCK_USER;else{c=lf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ue(f)}n._authCredentials=new jg(new ju(c,h))}}/**
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
 */class hn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hn(this.firestore,e,this._query)}}class Qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class Ut extends hn{constructor(e,t,r){super(e,t,Sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new B(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function Je(n,e,...t){if(n=Ie(n),Lh("collection","path",e),n instanceof Ys){const r=me.fromString(e,...t);return _c(r),new Ut(n,null,r)}{if(!(n instanceof Qe||n instanceof Ut))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return _c(r),new Ut(n.firestore,null,r)}}function nt(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=Vu.newId()),Lh("doc","path",e),n instanceof Ys){const r=me.fromString(e,...t);return yc(r),new Qe(n,null,new B(r))}{if(!(n instanceof Qe||n instanceof Ut))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return yc(r),new Qe(n.firestore,n instanceof Ut?n.converter:null,new B(r))}}/**
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
 */class bc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new gh(this,"async_queue_retry"),this.Vu=()=>{const r=ji();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ir(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=qa.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function wc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ht extends Ys{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bc(e),this._firestoreClient=void 0,await e}}}function y0(n,e){const t=typeof n=="object"?n:Wc(),r=typeof n=="string"?n:e||"(default)",s=ma(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=af("firestore");i&&g0(s,...i)}return s}function Js(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_0(n),n._firestoreClient}function _0(n){var e,t,r;const s=n._freezeSettings(),i=function(c,h,f,m){return new Yg(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Mh(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new h0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(De.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dn(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xs{constructor(e){this._methodName=e}}/**
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
 */class Ka{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const v0=/^__.*__$/;class b0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new kr(e,this.data,t,this.fieldTransforms)}}class Fh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Uh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Qa{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ps(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Uh(this.Cu)&&v0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class w0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ws(e)}Qu(e,t,r,s=!1){return new Qa({Cu:e,methodName:t,qu:r,path:Se.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zs(n){const e=n._freezeSettings(),t=Ws(n._databaseId);return new w0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bh(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ja("Data must be an object, but it was:",o,r);const c=zh(r,o);let h,f;if(i.merge)h=new Xe(o.fieldMask),f=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const g=la(e,y,t);if(!o.contains(g))throw new F(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Wh(m,g)||m.push(g)}h=new Xe(m),f=o.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,f=o.fieldTransforms;return new b0(new Ke(c),h,f)}class ei extends Xs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ei}}class Ya extends Xs{_toFieldTransform(e){return new wy(e.path,new mr)}isEqual(e){return e instanceof Ya}}function $h(n,e,t,r){const s=n.Qu(1,e,t);Ja("Data must be an object, but it was:",s,r);const i=[],o=Ke.empty();cn(r,(h,f)=>{const m=Xa(e,h,t);f=Ie(f);const y=s.Nu(m);if(f instanceof ei)i.push(m);else{const g=Pr(f,y);g!=null&&(i.push(m),o.set(m,g))}});const c=new Xe(i);return new Fh(o,c,s.fieldTransforms)}function qh(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[la(e,r,t)],h=[s];if(i.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(la(e,i[g])),h.push(i[g+1]);const f=[],m=Ke.empty();for(let g=c.length-1;g>=0;--g)if(!Wh(f,c[g])){const b=c[g];let T=h[g];T=Ie(T);const R=o.Nu(b);if(T instanceof ei)f.push(b);else{const C=Pr(T,R);C!=null&&(f.push(b),m.set(b,C))}}const y=new Xe(f);return new Fh(m,y,o.fieldTransforms)}function x0(n,e,t,r=!1){return Pr(t,n.Qu(r?4:3,e))}function Pr(n,e){if(Hh(n=Ie(n)))return Ja("Unsupported field value:",e,n),zh(n,e);if(n instanceof Xs)return function(r,s){if(!Uh(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let h=Pr(c,s.Lu(o));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _y(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:Cs(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cs(s.serializer,i)}}if(r instanceof Ka)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:oh(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Va(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ga)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Pa(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Qs(r)}`)}(n,e)}function zh(n,e){const t={};return Ou(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,s)=>{const i=Pr(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Hh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof Ka||n instanceof Dn||n instanceof Qe||n instanceof Xs||n instanceof Ga)}function Ja(n,e,t){if(!Hh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Qs(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function la(n,e,t){if((e=Ie(e))instanceof Sr)return e._internalPath;if(typeof e=="string")return Xa(n,e);throw Ps("Field path arguments must be of type string or ",n,!1,void 0,t)}const T0=new RegExp("[~\\*/\\[\\]]");function Xa(n,e,t){if(e.search(T0)>=0)throw Ps(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sr(...e.split("."))._internalPath}catch{throw Ps(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ps(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(i||o)&&(h+=" (found",i&&(h+=` in field ${r}`),o&&(h+=` in document ${s}`),h+=")"),new F(D.INVALID_ARGUMENT,c+n+h)}function Wh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Kh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Za("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class E0 extends Kh{data(){return super.data()}}function Za(n,e){return typeof e=="string"?Xa(n,e):e instanceof Sr?e._internalPath:e._delegate._internalPath}/**
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
 */function Gh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eo{}class I0 extends eo{}function jt(n,e,...t){let r=[];e instanceof eo&&r.push(e),r=r.concat(t),function(i){const o=i.filter(h=>h instanceof to).length,c=i.filter(h=>h instanceof ti).length;if(o>1||o>0&&c>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ti extends I0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ti(e,t,r)}_apply(e){const t=this._parse(e);return Qh(e._query,t),new hn(e.firestore,e.converter,Ji(e._query,t))}_parse(e){const t=Zs(e.firestore);return function(i,o,c,h,f,m,y){let g;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Tc(y,m);const b=[];for(const T of y)b.push(xc(h,i,T));g={arrayValue:{values:b}}}else g=xc(h,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Tc(y,m),g=x0(c,o,y,m==="in"||m==="not-in");return Ee.create(f,m,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ln(n,e,t){const r=e,s=Za("where",n);return ti._create(s,r,t)}class to extends eo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new to(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:st.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const h of c)Qh(o,h),o=Ji(o,h)}(e._query,t),new hn(e.firestore,e.converter,Ji(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xc(n,e,t){if(typeof(t=Ie(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hu(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(me.fromString(t));if(!B.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ql(n,new B(r))}if(t instanceof Qe)return ql(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qs(t)}.`)}function Tc(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qh(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class A0{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>xe(o.doubleValue));return new Ga(i)}convertGeoPoint(e){return new Ka(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ka(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(dr(e));default:return null}}convertTimestamp(e){const t=qt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);ue(fh(r));const s=new fr(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Yh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jh extends Kh{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ms(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Za("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ms extends Jh{data(e={}){return super.data(e)}}class Xh{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ms(this._firestore,this._userDataWriter,r.key,r,new rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const h=new ms(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const h=new ms(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:k0(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function k0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class no extends A0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,t)}}function ni(n){n=rt(n,hn);const e=rt(n.firestore,Ht),t=Js(e),r=new no(e);return Gh(n._query),p0(t,n._query).then(s=>new Xh(e,r,n,s))}function ns(n,e,t,...r){n=rt(n,Qe);const s=rt(n.firestore,Ht),i=Zs(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof Sr?qh(i,"updateDoc",n._key,e,t,r):$h(i,"updateDoc",n._key,e),ri(s,[o.toMutation(n._key,Ge.exists(!0))])}function Oi(n){return ri(rt(n.firestore,Ht),[new zs(n._key,Ge.none())])}function rs(n,e){const t=rt(n.firestore,Ht),r=nt(n),s=Yh(n.converter,e);return ri(t,[Bh(Zs(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ge.exists(!1))]).then(()=>r)}function ss(n,...e){var t,r,s;n=Ie(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||wc(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(wc(e[o])){const y=e[o];e[o]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let h,f,m;if(n instanceof Qe)f=rt(n.firestore,Ht),m=Sa(n._key.path),h={next:y=>{e[o]&&e[o](R0(f,n,y))},error:e[o+1],complete:e[o+2]};else{const y=rt(n,hn);f=rt(y.firestore,Ht),m=y._query;const g=new no(f);h={next:b=>{e[o]&&e[o](new Xh(f,g,y,b))},error:e[o+1],complete:e[o+2]},Gh(n._query)}return function(g,b,T,R){const C=new Vh(R),P=new Ah(b,C,T);return g.asyncQueue.enqueueAndForget(async()=>Eh(await oa(g),P)),()=>{C.Za(),g.asyncQueue.enqueueAndForget(async()=>Ih(await oa(g),P))}}(Js(f),m,c,h)}function ri(n,e){return function(r,s){const i=new Ft;return r.asyncQueue.enqueueAndForget(async()=>r0(await f0(r),s,i)),i.promise}(Js(n),e)}function R0(n,e,t){const r=t.docs.get(e._key),s=new no(n);return new Jh(n,s,e._key,r,new rr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class C0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Zs(e)}set(e,t,r){this._verifyNotCommitted();const s=Mi(e,this._firestore),i=Yh(s.converter,t,r),o=Bh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ge.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Mi(e,this._firestore);let o;return o=typeof(t=Ie(t))=="string"||t instanceof Sr?qh(this._dataReader,"WriteBatch.update",i._key,t,r,s):$h(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Ge.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mi(e,this._firestore);return this._mutations=this._mutations.concat(new zs(t._key,Ge.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mi(n,e){if((n=Ie(n)).firestore!==e)throw new F(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Xt(){return new Ya("serverTimestamp")}/**
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
 */function ro(n){return Js(n=rt(n,Ht)),new C0(n,e=>ri(n,e))}(function(e,t=!0){(function(s){Mn=s})(Vn),An(new nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Ht(new Vg(r.getProvider("auth-internal")),new Fg(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(f.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Mt(Ll,"4.7.3",e),Mt(Ll,"4.7.3","esm2017")})();src/fv.jsx;const N0={apiKey:"AIzaSyB6NiW14iWhlhIRE8ViXYEOS5SMvGd2Yq4",authDomain:"database-parfum-fd2f8.firebaseapp.com",projectId:"database-parfum-fd2f8",storageBucket:"database-parfum-fd2f8.appspot.com",messagingSenderId:"461710865000",appId:"1:461710865000:web:fb0d043d07997c986c01dd"},we="hasil-ceking-peserta-kokuo-v2",gs=[{key:"daftarHadir",label:"Daftar Hadir Peserta"},{key:"tindakLanjut",label:"Tindak Lanjut"},{key:"hasilKerja",label:"Hasil Kerja Trainer"},{key:"perbaikanData",label:"Perbaikan Data"},{key:"trash",label:"Tong Sampah"},{key:"hapusBeberapa",label:"Hapus Beberapa Data"},{key:"izinAkses",label:"Manajemen Izin Akses",adminOnly:!0}],S0=(n,e=600,t=600)=>new Promise((r,s)=>{const i=new Image;i.src=n,i.onload=()=>{const o=document.createElement("canvas");let{width:c,height:h}=i;c>h?c>e&&(h*=e/c,c=e):h>t&&(c*=t/h,h=t),o.width=c,o.height=h,o.getContext("2d").drawImage(i,0,0,c,h),r(o.toDataURL("image/jpeg",.7))},i.onerror=o=>s(o)}),yt=n=>{if(!n||!n.status)return"Status Tidak Diketahui";const{status:e,evaluationResult:t,cekingResult:r}=n;if(e.startsWith("Evaluasi")){const s=e.replace("Evaluasi ","");return t==="Lulus"?`Lulus Evaluasi ${s}`:`Masih Tahap Evaluasi ${s}`}return e.startsWith("Ceking tahap")?r==="Lulus"?"Lulus Ceking":"Tahap Ceking":e},so=(n,e)=>{if(!n)return"Ceking tahap 1";const t=e.filter(r=>r.nama===n&&r.status.match(/Ceking tahap \d+/)).map(r=>parseInt(r.status.replace("Ceking tahap ",""),10)).filter(r=>!isNaN(r));return t.length===0?"Ceking tahap 1":`Ceking tahap ${Math.max(...t)+1}`},P0=(n,e)=>{if(!e||e==="semua")return!0;const t=yt(n);switch(e){case"Trainingan":return n.status==="Trainingan";case"Ceking":return t==="Tahap Ceking";case"Lulus":return t.startsWith("Lulus");case"Resign":return t==="Resign";default:return!0}},D0=(n,e)=>!e||e==="semua"?!0:n.status===e,In=n=>{if(!n||typeof n.toDate!="function")return{date:"N/A",time:"N/A"};const e=n.toDate();return{date:e.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}),time:e.toLocaleTimeString("en-GB")}},en=n=>{if(!n)return"N/A";try{const e=new Date(`${n}T00:00:00Z`);return isNaN(e.getTime())?"Tanggal Tidak Valid":e.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch{return"Gagal Memformat"}},We=N.createContext(),j0=({children:n})=>{const[e,t]=N.useState(null),[r,s]=N.useState(!1),[i,o]=N.useState(!1),[c,h]=N.useState([]),[f,m]=N.useState([]),[y,g]=N.useState([]),[b,T]=N.useState(""),[R,C]=N.useState(null),[P,V]=N.useState(null),[L,q]=N.useState("login"),[G,Y]=N.useState([]),[I,v]=N.useState(null),[_,x]=N.useState(null),[E,A]=N.useState(!1),[w,O]=N.useState(null),[$,X]=N.useState({type:null,props:{}}),re=N.useMemo(()=>Hc(N0),[]);N.useEffect(()=>{const ce=y0(re),ie=Sg(re);t(ce);const Ze=bm(ie,je=>{je?s(!0):pm(ie).catch(ut=>console.error("Gagal masuk secara anonim:",ut))});return()=>Ze()},[re]),N.useEffect(()=>{if(!e||!r)return;const ce=jt(Je(e,`artifacts/${we}/public/data/records`)),ie=ss(ce,_e=>h(_e.docs.map(ae=>({id:ae.id,...ae.data()})))),Ze=jt(Je(e,`artifacts/${we}/public/data/users`)),je=ss(Ze,_e=>{m(_e.docs.map(ae=>({...ae.data(),id:ae.id}))),i||o(!0)}),ut=jt(Je(e,`artifacts/${we}/public/data/perbaikan_requests`)),ke=ss(ut,_e=>g(_e.docs.map(ae=>({id:ae.id,...ae.data()})))),fe=new Date;fe.setDate(fe.getDate()-7);const Q=jt(Je(e,`artifacts/${we}/public/data/notifications`),ln("createdAt",">=",ge.fromDate(fe))),ee=ss(Q,_e=>{const ae=_e.docs.map(Ve=>({id:Ve.id,...Ve.data()}));Y(ae.sort((Ve,et)=>et.createdAt.toDate()-Ve.createdAt.toDate()))});return()=>{ie(),je(),ke(),ee()}},[e,r,i]);const se=N.useCallback(ce=>{T(ce),setTimeout(()=>T(""),3e3)},[]),he=N.useCallback((ce,ie={})=>X({type:ce,props:ie}),[]),ye=N.useCallback(()=>X({type:null,props:{}}),[]),Ae={db:e,app:re,isAuthReady:r,isLoginDataReady:i,records:c,users:f,repairRequests:y,showToast:se,currentUser:R,setCurrentUser:C,userRole:P,setUserRole:V,loginStep:L,setLoginStep:q,activityNotifications:G,recordToAutoEdit:I,setRecordToAutoEdit:v,lastSaveTimestamp:_,setLastSaveTimestamp:x,setAppUpdateAvailable:A,postSaveAction:w,setPostSaveAction:O,modal:$,openModal:he,closeModal:ye};return l.jsxs(We.Provider,{value:Ae,children:[n,b&&l.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-[100] animate-fade-in-up",children:b}),E&&l.jsxs("div",{className:"fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-[100] animate-fade-in-up",children:["Pembaruan tersedia! ",l.jsx("button",{className:"font-bold underline ml-2",onClick:()=>window.location.reload(),children:"Muat Ulang"})]})]})},Dr=()=>{const{db:n,currentUser:e,showToast:t}=N.useContext(We);return{addOrUpdateRecord:async(g,b)=>{var T;if(n)try{if(g)await ns(nt(n,`artifacts/${we}/public/data/records`,g),{...b,updatedAt:Xt(),lastUpdatedByName:e.nama}),t("Data berhasil diperbarui!");else{const R=await rs(Je(n,`artifacts/${we}/public/data/records`),{...b,createdAt:Xt(),createdByName:e.nama,isDeleted:!1});t("Data berhasil ditambahkan!");let C=`${e.nama} menambahkan peserta baru: ${b.nama}.`;(T=b.status)!=null&&T.startsWith("Evaluasi")?C=`${e.nama} menambahkan data evaluasi untuk ${b.nama}.`:b.status==="Lulus"?C=`${e.nama} menindaklanjuti ${b.nama} sebagai Lulus.`:b.status==="Resign"&&(C=`${e.nama} mengubah status ${b.nama} menjadi Resign.`),await rs(Je(n,`artifacts/${we}/public/data/notifications`),{message:C,type:"Aktivitas Baru",createdAt:Xt(),createdBy:e.nama,recordId:R.id})}return!0}catch(R){return t("Gagal menyimpan data."),console.error("Error saving record:",R),!1}},addRepairRequest:async g=>{if(n)try{return await rs(Je(n,`artifacts/${we}/public/data/perbaikan_requests`),{...g,requestedBy:e.nama,requestedAt:Xt()}),t("Nama duplikat terdeteksi. Permintaan perbaikan telah dikirim ke Admin."),!0}catch{return t("Gagal mengirim permintaan perbaikan."),!1}},resolveRepairRequest:async g=>{if(n)try{await Oi(nt(n,`artifacts/${we}/public/data/perbaikan_requests`,g)),t("Tiket perbaikan telah diselesaikan.")}catch{t("Gagal menyelesaikan tiket perbaikan.")}},softDeleteRecord:async(g,b)=>{if(n)try{await ns(nt(n,`artifacts/${we}/public/data/records`,g),{isDeleted:!0,updatedAt:Xt(),lastUpdatedByName:e.nama}),t(`Data untuk "${b}" telah dipindahkan ke tong sampah.`)}catch{t("Gagal memindahkan data.")}},restoreRecord:async g=>{if(n)try{await ns(nt(n,`artifacts/${we}/public/data/records`,g),{isDeleted:!1,updatedAt:Xt()}),t("Data berhasil dipulihkan.")}catch{t("Gagal memulihkan data.")}},deleteRecordPermanent:async(g,b)=>{if(n)try{await Oi(nt(n,`artifacts/${we}/public/data/records`,g)),t(`Data untuk "${b}" telah dihapus permanen.`)}catch(T){t("Gagal menghapus data secara permanen."),console.error("Error permanent delete:",T)}},addOrUpdateUser:async(g,b)=>{if(n)try{return g?(await ns(nt(n,`artifacts/${we}/public/data/users`,g),b),t("Pengguna berhasil diperbarui.")):(await rs(Je(n,`artifacts/${we}/public/data/users`),b),t("Pengguna baru berhasil ditambahkan.")),!0}catch{return t("Gagal menyimpan data pengguna."),!1}},deleteUser:async(g,b)=>{if(n)try{await Oi(nt(n,`artifacts/${we}/public/data/users`,g)),t(`Pengguna "${b}" berhasil dihapus.`)}catch{t("Gagal menghapus pengguna.")}},mergeMasterData:async(g,b,T)=>{if(n){t(`Memproses penggabungan untuk "${b}"...`);try{const R=Je(n,`artifacts/${we}/public/data/records`),C=jt(R,ln(g,"==",b)),P=await ni(C);if(P.empty)return t("Tidak ada data yang cocok untuk diperbaiki."),!0;const V=ro(n);return P.forEach(L=>{const q=nt(n,`artifacts/${we}/public/data/records`,L.id);V.update(q,{[g]:T})}),await V.commit(),t(`${P.size} data berhasil diperbarui dan digabungkan.`),!0}catch(R){return console.error("Error merging master data:",R),t("Gagal menggabungkan data."),!1}}}}},Zh=(n,e)=>{const{records:t}=N.useContext(We),r=N.useMemo(()=>t,[t]),s=N.useMemo(()=>r.filter(g=>!g.isDeleted),[r]),i=N.useMemo(()=>r.filter(g=>g.isDeleted),[r]),o=N.useMemo(()=>{const g=s.reduce((b,T)=>(b[T.nama]||(b[T.nama]=[]),b[T.nama].push(T),b),{});return Object.values(g).map(b=>b.sort((T,R)=>{var C,P,V,L;return(((C=R.updatedAt)==null?void 0:C.toDate())||((P=R.createdAt)==null?void 0:P.toDate())||0)-(((V=T.updatedAt)==null?void 0:V.toDate())||((L=T.createdAt)==null?void 0:L.toDate())||0)})[0])},[s]),c=N.useMemo(()=>{const g=new Map;return s.slice().sort((b,T)=>{var R,C;return(((R=b.createdAt)==null?void 0:R.toDate())||0)-(((C=T.createdAt)==null?void 0:C.toDate())||0)}).forEach(b=>{b.nama&&b.photo&&!g.has(b.nama)&&g.set(b.nama,b.photo)}),o.map(b=>({...b,photo:g.get(b.nama)||b.photo}))},[s,o]),h=N.useMemo(()=>c.filter(g=>g.nama.toLowerCase().includes(n.toLowerCase())),[c,n]),f=N.useMemo(()=>e==="semua"?h:h.filter(g=>g.turunKeCabang===e||g.cabang===e||g.trainganDari===e),[h,e]),m=N.useMemo(()=>{const g=[...new Set(c.map(T=>T.turunKeCabang||T.cabang).filter(Boolean))],b=[...new Set(c.map(T=>T.trainganDari).filter(Boolean))];return{cabang:g.sort(),tc:b.sort()}},[c]),y=N.useMemo(()=>o.filter(g=>g.status==="Trainingan"||g.status.startsWith("Ceking tahap")),[o]);return{allRecords:r,activeRecords:s,deletedRecords:i,uniqueLatestRecords:o,filteredRecords:f,allFilterOptions:m,attendanceParticipants:y}},V0=(n,e,t)=>{const[r,s]=N.useState(n),[i,o]=N.useState(null),[c,h]=N.useState([]),f=N.useCallback(g=>{const{name:b,value:T}=g.target;if(s(R=>({...R,[b]:T})),b==="nama"&&T.trim()!==""){const R=e.filter(C=>C.nama.toLowerCase().includes(T.toLowerCase()));h(R)}else h([])},[e]),m=N.useCallback(g=>{const b=t.filter(T=>T.nama===g.nama&&T.photo).sort((T,R)=>{var C,P;return(((C=T.createdAt)==null?void 0:C.toDate())||0)-(((P=R.createdAt)==null?void 0:P.toDate())||0)})[0];s({...n,nama:g.nama,photo:b?b.photo:g.photo||null}),o(null),h([])},[t,n]),y=N.useCallback(()=>{o(null),s(n)},[n]);return{formValues:r,setFormValues:s,recordToEdit:i,setRecordToEdit:o,nameSuggestions:c,setNameSuggestions:h,handleFormInputChange:f,handleSuggestionClick:m,resetForm:y}},O0=(n,e)=>{const{db:t,records:r,showToast:s,openModal:i}=N.useContext(We);Dr();const o=N.useCallback((y,g)=>{if(!y||!g){s("Silakan pilih rentang tanggal.");return}const b=new Date(`${y}T00:00:00`),T=new Date(`${g}T23:59:59`),C=r.filter(P=>{var V;return((V=P.status)==null?void 0:V.startsWith("Evaluasi"))&&P.tgl&&new Date(P.tgl)>=b&&new Date(P.tgl)<=T}).reduce((P,V)=>{const L=V.cabang||"Lainnya";return P[L]||(P[L]={}),P[L][V.status]||(P[L][V.status]=[]),P[L][V.status].push({nama:V.nama,evaluator:V.createdByName||"N/A",tanggal:en(V.tgl)}),P},{});i("followUpDetails",{data:C})},[r,s,i]),c=N.useCallback((y,g)=>{const T=g.filter(R=>R.createdByName===y).reduce((R,C)=>{const P=C.cabang||C.turunKeCabang||C.trainganDari||"Lainnya";return R[P]||(R[P]=[]),R[P].push(C),R},{});i("trainerWorkDetail",{trainerName:y,workData:T})},[i]),h=N.useCallback((y,g)=>{if(!y||!g){s("Silakan pilih rentang tanggal.");return}const b=new Date(`${y}T00:00:00`),T=new Date(`${g}T23:59:59`),R=r.filter(V=>{var q;const L=(q=V.createdAt)==null?void 0:q.toDate();return V.createdByName&&L>=b&&L<=T}),C=R.reduce((V,L)=>{const q=L.createdByName;return V[q]||(V[q]={total:0,types:new Set}),V[q].total++,V[q].types.add(L.status.startsWith("Ceking")?"Ceking":L.status),V},{}),P=Object.entries(C).map(([V,L])=>({trainerName:V,total:L.total,summary:Array.from(L.types).slice(0,2).join(", ")+(L.types.size>2?"...":"")})).sort((V,L)=>L.total-V.total);i("trainerPerformanceList",{performanceData:P,onSelectTrainer:V=>c(V,R)})},[r,i,c,s]),f=N.useCallback(async y=>{if(!t)return;s(`Menghapus ${y.length} data...`);const g=ro(t);y.forEach(b=>{const T=nt(t,`artifacts/${we}/public/data/records`,b);g.delete(T)});try{await g.commit(),s(`${y.length} data berhasil dihapus secara permanen.`),i(null)}catch(b){s("Gagal menghapus data."),console.error("Error performing bulk delete: ",b)}},[t,s,i]),m=N.useCallback(async(y,g)=>{if(!t||!y||!g){s("Silakan pilih rentang tanggal yang valid.");return}s("Mengambil data untuk dihapus...");const b=new Date(`${y}T00:00:00`),T=new Date(`${g}T23:59:59`),R=jt(Je(t,`artifacts/${we}/public/data/records`),ln("createdAt",">=",ge.fromDate(b)),ln("createdAt","<=",ge.fromDate(T)));try{const P=(await ni(R)).docs.map(V=>({id:V.id,...V.data()}));i("bulkDeleteData",{records:P,onConfirmDelete:f}),s(`${P.length} data ditemukan.`)}catch(C){s("Gagal mengambil data."),console.error("Error fetching data for bulk delete: ",C)}},[t,s,i,f]);return{handleFetchFollowUp:o,handleFetchTrainerPerformanceByDate:h,handleFetchForBulkDelete:m}},M0=()=>l.jsxs("div",{className:"h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white text-2xl",children:[l.jsxs("svg",{className:"animate-spin h-12 w-12 text-blue-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[l.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),l.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),l.jsx("p",{className:"mt-4 text-lg text-gray-400",children:"Memuat data..."})]}),ed=({show:n,onClose:e,onConfirm:t,title:r,message:s,confirmText:i})=>n?l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80] p-4",onClick:e,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-sm space-y-4 border-2 border-yellow-500",onClick:o=>o.stopPropagation(),children:[l.jsx("h3",{className:"text-xl font-bold text-center text-yellow-300",children:r}),l.jsx("p",{className:"text-center text-gray-300",children:s}),l.jsxs("div",{className:"flex justify-center gap-4 pt-4",children:[l.jsx("button",{onClick:e,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Batal"}),l.jsx("button",{onClick:t,className:"px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700",children:i})]})]})}):null,td=Vc.memo(({record:n,onCardClick:e})=>{const t=yt(n),r=t.startsWith("Lulus"),s=t==="Resign";let i="text-yellow-400";return r&&(i="text-green-400"),s&&(i="text-red-400"),l.jsxs("div",{className:"bg-black rounded-xl shadow-neumorphic p-3 flex flex-col justify-between transition-all hover:scale-105 relative overflow-hidden w-44 flex-shrink-0",children:[l.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1.5 ${r?"bg-green-500":s?"bg-red-500":"bg-yellow-500"}`}),l.jsx("div",{className:"pl-3 h-full",children:l.jsxs("div",{className:"cursor-pointer h-full flex flex-col",onClick:()=>e(n),children:[l.jsx("div",{className:"w-full h-24 rounded-md bg-gray-700 flex items-center justify-center mb-2 overflow-hidden flex-shrink-0",children:n.photo?l.jsx("img",{src:n.photo,alt:n.nama,className:"w-full h-full object-cover"}):l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-gray-500",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),l.jsxs("div",{className:"flex flex-col justify-start flex-grow",children:[l.jsx("h3",{className:"text-base font-bold text-blue-300 truncate",children:n.nama}),l.jsxs("p",{className:"text-xs text-gray-300 mt-1",children:[l.jsx("strong",{children:"Trainer:"})," ",n.trainer||"-"]}),l.jsxs("p",{className:"text-xs text-gray-300",children:[l.jsx("strong",{children:"Tgl Terakhir:"})," ",en(n.tanggalLulus||n.tgl)]}),l.jsxs("p",{className:"text-xs text-gray-300",children:[l.jsx("strong",{children:"Status:"})," ",l.jsx("span",{className:`font-semibold ${i}`,children:t})]})]})]})})]})}),io=({participant:n,allRecords:e,onClose:t,onEdit:r,onDelete:s})=>{const{userRole:i,showToast:o,db:c}=N.useContext(We),[h,f]=N.useState("rincian"),[m,y]=N.useState(!1),[g,b]=N.useState([]),[T,R]=N.useState(!1),C=N.useMemo(()=>e.filter(O=>O.nama===n.nama&&!O.isDeleted).sort((O,$)=>{var X,re;return(((X=O.createdAt)==null?void 0:X.toDate())||0)-(((re=$.createdAt)==null?void 0:re.toDate())||0)}),[e,n.nama]),P=N.useMemo(()=>n.nama?e.filter(O=>O.nama===n.nama&&!O.isDeleted).sort((O,$)=>{var se,he,ye,Ae;const X=((se=O.updatedAt)==null?void 0:se.toDate())||((he=O.createdAt)==null?void 0:he.toDate())||0,re=((ye=$.updatedAt)==null?void 0:ye.toDate())||((Ae=$.createdAt)==null?void 0:Ae.toDate())||0;return new Date(re)-new Date(X)}):[],[n.nama,e]),V=N.useMemo(()=>e.filter(O=>O.nama===n.nama&&!O.isDeleted&&O.penilaian).sort((O,$)=>{var X,re,se,he;return(((X=$.updatedAt)==null?void 0:X.toDate())||((re=$.createdAt)==null?void 0:re.toDate())||0)-(((se=O.updatedAt)==null?void 0:se.toDate())||((he=O.createdAt)==null?void 0:he.toDate())||0)}),[e,n.nama]),L=N.useMemo(()=>{const O=new Set;C.forEach(X=>{X.status==="Trainingan"&&O.add("Trainingan"),X.status.startsWith("Ceking tahap")&&O.add(X.status),X.status==="Lulus"&&O.add("Lulus"),X.status.startsWith("Evaluasi")&&O.add(X.status)});const $=Array.from(O);return $.sort((X,re)=>{const se=["Trainingan","Ceking tahap 1","Ceking tahap 2","Ceking tahap 3","Lulus","Evaluasi Reflexology","Evaluasi Athletic Massage","Evaluasi Seitai"];return se.indexOf(X)-se.indexOf(re)}),$},[C]),q=O=>O==="Lulus"?C.find($=>$.status==="Lulus"):C.find($=>$.status===O),[G,Y]=N.useState(n),I=[{key:"ketepatanWaktu",label:"Ketepatan Waktu/Attitude"},{key:"bagianKaki",label:"Bagian Kaki/Face Down"},{key:"bagianTangan",label:"Bagian Tangan/Face Up"},{key:"bagianPunggung",label:"Bagian Punggung/Side Lying"},{key:"bagianPundak",label:"Bagian Pundak/Adjustment"},{key:"catatan",label:"Catatan Tambahan"}],v=N.useMemo(()=>{const O=n.status;return O==="Trainingan"||O.startsWith("Ceking tahap")},[n.status]);N.useEffect(()=>{!v&&h==="hadir"&&f("rincian")},[v,h]),N.useEffect(()=>{if(h!=="hadir"||!c||!n.nama)return;(async()=>{R(!0);try{const $=jt(Je(c,`artifacts/${we}/public/data/attendance`),ln("participantName","==",n.nama)),re=(await ni($)).docs.map(se=>se.data());re.sort((se,he)=>he.date.toDate()-se.date.toDate()),b(re)}catch($){console.error("Error fetching attendance history: ",$),o("Gagal memuat riwayat kehadiran.")}finally{R(!1)}})()},[h,c,n.nama,o]);const _=O=>{const $=q(O);$?(Y($),y(!1),f("rincian")):o(`Data untuk tahap "${O}" tidak ditemukan.`)},x=()=>{const O=e.filter(ce=>ce.nama===n.nama&&!ce.isDeleted),$=O.sort((ce,ie)=>{var Ze,je;return(((Ze=ce.createdAt)==null?void 0:Ze.toDate())||0)-(((je=ie.createdAt)==null?void 0:je.toDate())||0)})[0],X=O.find(ce=>ce.status==="Resign");if(!$||!$.tanggalMasuk){o("Tanggal masuk tidak ditemukan.");return}const re=new Date($.tanggalMasuk),se=X&&X.tanggalResign?new Date(X.tanggalResign):new Date;let he=se.getFullYear()-re.getFullYear(),ye=se.getMonth()-re.getMonth(),Ae=se.getDate()-re.getDate();Ae<0&&(ye--,Ae+=new Date(se.getFullYear(),se.getMonth(),0).getDate()),ye<0&&(he--,ye+=12),o(`Masa kerja: ${he} tahun, ${ye} bulan, ${Ae} hari.`)},E=()=>{const{status:O,nama:$,kotaAsal:X,tanggalMasuk:re,refrensi:se,trainganDari:he,trainer:ye,tahapCeking:Ae,tgl:ce,tanggalLulus:ie,turunKeCabang:Ze,accYangMeluluskan:je,cabang:ut}=G;let ke;return O==="Trainingan"?ke=l.jsxs(l.Fragment,{children:[l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",$||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",O||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Kota Asal:"})," ",X||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tanggal Masuk:"})," ",en(re)]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Refrensi:"})," ",se||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Training Dari:"})," ",he||"-"]})]}):O.startsWith("Ceking tahap")?ke=l.jsxs(l.Fragment,{children:[l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",$||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",G.cekingResult==="Lulus"?`Lulus ${O}`:`Masih ${O}`]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Trainer:"})," ",ye||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tahap Ceking:"})," ",Ae||O]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tanggal Ceking:"})," ",en(ce)]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Training Dari:"})," ",he||"-"]})]}):O==="Lulus"?ke=l.jsxs(l.Fragment,{children:[l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",$||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",O||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Trainer:"})," ",ye||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tahap Ceking:"})," ",Ae||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tanggal Lulus:"})," ",en(ie)]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Turun ke Cabang:"})," ",Ze||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Acc Yang Meluluskan:"})," ",je||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Training Dari:"})," ",he||"-"]})]}):O.startsWith("Evaluasi")?ke=l.jsxs(l.Fragment,{children:[l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Nama:"})," ",$||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Status:"})," ",yt(G)]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Trainer:"})," ",ye||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tahap Ceking:"})," ",Ae||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Tanggal Evaluasi:"})," ",en(ce)]}),l.jsxs("p",{children:[l.jsx("strong",{className:"text-gray-400",children:"Cabang:"})," ",ut||"-"]})]}):ke=l.jsx("p",{children:"Rincian tidak tersedia untuk status ini."}),l.jsxs(l.Fragment,{children:[l.jsxs("h2",{className:"text-xl font-bold text-white mb-4 text-center",children:["Rincian Peserta - ",l.jsx("span",{className:"text-yellow-300",children:yt(G)})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4 text-gray-300",children:ke}),l.jsx("div",{className:"horizontal-scroll-container flex overflow-x-auto gap-2 p-1 mb-4",children:L.map(fe=>l.jsx("button",{onClick:()=>_(fe),className:`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${G.status===fe?"bg-blue-600 text-white":"bg-gray-600 text-gray-300"}`,children:fe},fe))}),m&&l.jsxs("div",{className:"my-4 p-4 bg-gray-900/50 rounded-lg max-h-64 overflow-y-auto",children:[l.jsx("h3",{className:"text-lg font-semibold text-purple-300 mb-3 text-center",children:"Riwayat Penilaian"}),l.jsx("div",{className:"space-y-4 pr-2",children:V.length>0?V.map(fe=>{var Q;return l.jsxs("div",{className:"bg-gray-800/70 p-3 rounded-lg",children:[l.jsxs("div",{className:"flex justify-between items-baseline mb-2",children:[l.jsx("h4",{className:"font-bold text-base text-white",children:yt(fe)}),l.jsx("p",{className:"text-xs text-blue-300",children:In(fe.updatedAt||fe.createdAt).date})]}),(Q=fe.penilaian)!=null&&Q.ratings?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"space-y-2 text-sm mb-3",children:Object.entries(fe.penilaian.ratings).map(([ee,_e])=>{var ae;return _e&&l.jsxs("div",{className:"border-b border-gray-700 py-1",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("span",{className:"text-gray-400 capitalize",children:[ee.replace(/([A-Z])/g," $1"),":"]}),l.jsx("span",{className:`font-semibold px-2 py-0.5 rounded-full text-xs ${_e==="Baik"?"bg-green-500/50 text-green-200":_e==="Cukup"?"bg-yellow-500/50 text-yellow-200":"bg-red-500/50 text-red-200"}`,children:_e})]}),((ae=fe.penilaian.manualNotes)==null?void 0:ae[ee])&&l.jsxs("p",{className:"text-xs text-gray-300 mt-1 pl-2 border-l-2 border-gray-600",children:["Catatan: ",fe.penilaian.manualNotes[ee]]})]},ee)})}),fe.penilaian.catatan&&l.jsxs("div",{className:"mt-2 pt-2 border-t border-gray-600",children:[l.jsx("p",{className:"text-sm font-semibold text-purple-300 mb-1",children:"Ulasan Akhir:"}),l.jsx("p",{className:"text-sm text-white bg-black/20 p-2 rounded-md",children:fe.penilaian.catatan})]})]}):l.jsx("div",{className:"space-y-1 text-sm",children:I.map(ee=>fe.penilaian[ee.key]&&l.jsxs("div",{className:"flex justify-between border-b border-gray-700 py-1 text-xs",children:[l.jsxs("span",{className:"text-gray-400",children:[ee.label,":"]}),l.jsx("span",{className:"text-white text-right",children:fe.penilaian[ee.key]})]},ee.key))})]},fe.id)}):l.jsx("p",{className:"text-center p-8 text-gray-400",children:"Tidak ada riwayat penilaian ditemukan."})})]})]})},A=()=>l.jsxs("div",{className:"max-h-96 overflow-y-auto",children:[l.jsx("h2",{className:"text-xl font-bold text-white mb-4 text-center",children:"Riwayat Daftar Hadir"}),T?l.jsx("p",{className:"text-center p-8 text-gray-400",children:"Memuat riwayat..."}):g.length>0?l.jsxs("table",{className:"w-full text-left text-sm",children:[l.jsx("thead",{className:"bg-gray-900 sticky top-0",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-2 font-semibold text-gray-300",children:"Tanggal"}),l.jsx("th",{className:"p-2 font-semibold text-gray-300",children:"Status"}),l.jsx("th",{className:"p-2 font-semibold text-gray-300",children:"Keterangan"})]})}),l.jsx("tbody",{className:"bg-gray-800 divide-y divide-gray-700",children:g.map((O,$)=>l.jsxs("tr",{className:"hover:bg-gray-700/50",children:[l.jsx("td",{className:"p-2 whitespace-nowrap",children:In(O.date).date}),l.jsx("td",{className:"p-2 whitespace-nowrap",children:O.attendanceStatus}),l.jsx("td",{className:"p-2",children:O.notes||"-"})]},$))})]}):l.jsx("p",{className:"text-center p-8 text-gray-400",children:"Tidak ada riwayat kehadiran ditemukan."})]}),w=()=>l.jsxs("div",{className:"max-h-96 overflow-y-auto pr-2",children:[l.jsx("h2",{className:"text-xl font-bold text-white mb-4 text-center",children:"Riwayat Lengkap"}),l.jsx("div",{className:"space-y-3",children:P.length>0?P.map(O=>l.jsxs("div",{className:"bg-gray-900/70 p-3 rounded-lg",children:[l.jsx("p",{className:"font-bold text-lg text-white",children:yt(O)}),l.jsx("p",{className:"text-sm text-blue-300",children:In(O.updatedAt||O.createdAt).date}),l.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["Diperbarui oleh: ",O.lastUpdatedByName||O.createdByName||"N/A"]})]},O.id)):l.jsx("p",{className:"text-center p-8 text-gray-400",children:"Tidak ada riwayat ditemukan."})})]});return n?l.jsxs("div",{className:"mt-6 bg-gray-800 rounded-xl shadow-neumorphic w-full overflow-hidden border-2 border-blue-500 animate-fade-in-up-view",children:[l.jsx("div",{className:"w-full h-80 bg-black flex items-center justify-center p-2 rounded-t-xl",children:G.photo?l.jsx("img",{src:G.photo,alt:G.nama,className:"max-w-full max-h-full object-contain"}):l.jsx("span",{className:"text-gray-500",children:"Tidak ada foto"})}),l.jsxs("div",{className:`grid ${v?"grid-cols-3":"grid-cols-2"}`,children:[v&&l.jsx("button",{onClick:()=>f("hadir"),className:`py-3 text-sm font-semibold border-b-2 ${h==="hadir"?"bg-indigo-600 border-indigo-400":"bg-gray-700 border-transparent hover:bg-gray-600"}`,children:"Riwayat Daftar Hadir"}),l.jsx("button",{onClick:()=>f("rincian"),className:`py-3 text-sm font-semibold border-b-2 ${h==="rincian"?"bg-indigo-600 border-indigo-400":"bg-gray-700 border-transparent hover:bg-gray-600"}`,children:"Rincian"}),l.jsx("button",{onClick:()=>f("lengkap"),className:`py-3 text-sm font-semibold border-b-2 ${h==="lengkap"?"bg-indigo-600 border-indigo-400":"bg-gray-700 border-transparent hover:bg-gray-600"}`,children:"Riwayat Lengkap"})]}),l.jsxs("div",{className:"p-4 md:p-6",children:[h==="rincian"&&E(),v&&h==="hadir"&&A(),h==="lengkap"&&w(),l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 mt-6",children:[l.jsxs("div",{className:"flex flex-wrap gap-2",children:[G.status==="Trainingan"&&l.jsx("button",{onClick:x,className:"px-3 py-2 text-xs bg-green-600 rounded-lg hover:bg-green-700",children:"Masa Kerja"}),l.jsx("button",{onClick:()=>y(O=>!O),className:"px-3 py-2 text-xs bg-purple-600 rounded-lg hover:bg-purple-700",children:m?"Sembunyikan Penilaian":"Tampilkan Penilaian"})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsx("button",{title:"Edit",onClick:()=>{r(G),t()},className:"p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[l.jsx("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),l.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]})}),i==="admin"&&l.jsx("button",{title:"Hapus",onClick:()=>{s(G.id,G.nama),t()},className:"p-2 bg-red-600 text-white rounded-lg hover:bg-red-700",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z",clipRule:"evenodd"})})}),l.jsx("button",{onClick:t,className:"px-6 py-2 text-sm bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700",children:"Tutup"})]})]})]})]}):null},L0=Vc.memo(({record:n,onFollowUp:e,onCardClick:t})=>{const r=yt(n),s=n.tanggalLulus||n.tgl;let i="N/A";if(s){const o=new Date(`${s}T00:00:00Z`);if(!isNaN(o.getTime())){const c=new Date(o);c.setMonth(c.getMonth()+3),i=c.toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}}return l.jsxs("div",{className:"bg-black rounded-xl shadow-neumorphic p-3 flex flex-col justify-between transition-all hover:scale-105 relative overflow-hidden w-44 flex-shrink-0",children:[l.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500"}),l.jsxs("div",{className:"pl-3 flex flex-col h-full",children:[l.jsxs("div",{className:"flex-grow cursor-pointer",onClick:()=>t(n),children:[l.jsx("div",{className:"w-full h-24 rounded-md bg-gray-700 flex items-center justify-center mb-2 overflow-hidden",children:n.photo?l.jsx("img",{src:n.photo,alt:n.nama,className:"w-full h-full object-cover"}):l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10 text-gray-500",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),l.jsx("h3",{className:"text-base font-bold text-blue-300 truncate",children:n.nama}),l.jsxs("p",{className:"text-xs text-gray-300 mt-1",children:[l.jsx("strong",{children:"Cabang:"})," ",n.turunKeCabang||n.cabang||"-"]}),l.jsxs("p",{className:"text-xs text-gray-300",children:[l.jsx("strong",{children:"Status Saat Ini:"})," ",l.jsx("span",{className:"font-semibold text-yellow-400",children:r})]}),l.jsxs("p",{className:"text-xs text-gray-300",children:[l.jsx("strong",{children:"Jatuh Tempo:"})," ",l.jsx("span",{className:"font-bold text-red-400",children:i})]})]}),l.jsx("div",{className:"flex justify-end gap-1 mt-2",children:l.jsx("button",{title:"Tindak Lanjut Evaluasi",onClick:()=>e(n),className:"w-full px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow-inner-custom text-xs font-semibold",children:"Tindak Lanjut"})})]})]})}),F0=({onClose:n,evaluationNotifications:e,activityNotifications:t})=>l.jsxs("div",{className:"absolute top-full right-0 mt-2 w-80 bg-gray-700 rounded-lg shadow-lg z-30 border border-gray-600 p-2 space-y-2 max-h-96 overflow-y-auto",children:[t.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("h3",{className:"text-lg font-bold text-white px-2 pt-1",children:"Aktivitas Baru"}),t.map(r=>l.jsxs("div",{className:"bg-gray-800 p-3 rounded-md",children:[l.jsx("p",{className:"text-sm text-gray-200",children:r.message}),l.jsx("p",{className:"text-xs text-gray-400 text-right mt-1",children:In(r.createdAt).date})]},r.id)),l.jsx("div",{className:"border-t border-gray-600 my-2"})]}),e.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("h3",{className:"text-lg font-bold text-white px-2",children:"Jadwal Evaluasi"}),e.map(r=>l.jsxs("div",{className:"bg-gray-800 p-3 rounded-md",children:[l.jsx("p",{className:"font-semibold text-blue-300",children:r.nama}),l.jsxs("p",{className:"text-sm text-gray-300",children:["Jadwal: ",l.jsx("span",{className:"font-medium text-yellow-400",children:r.nextEvaluation})]}),l.jsxs("p",{className:"text-xs text-gray-400",children:["Jatuh Tempo: ",r.dueDate.toLocaleDateString("id-ID",{day:"numeric",month:"long"})]})]},r.id))]}),e.length===0&&t.length===0&&l.jsx("p",{className:"text-gray-400 text-center py-4",children:"Tidak ada notifikasi."})]}),U0=({onClose:n,onFetch:e})=>{const[t,r]=N.useState(""),[s,i]=N.useState("");return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-red-500",onClick:o=>o.stopPropagation(),children:[l.jsx("h3",{className:"text-2xl font-bold text-center text-red-300",children:"Pilih Rentang Data untuk Dihapus"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Mulai"}),l.jsx("input",{type:"date",value:t,onChange:o=>r(o.target.value),className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Selesai"}),l.jsx("input",{type:"date",value:s,onChange:o=>i(o.target.value),className:"w-full input-rounded-border"})]})]}),l.jsx("button",{onClick:()=>e(t,s),className:"w-full px-6 py-3 bg-red-600 text-white font-bold rounded-xl text-lg hover:bg-red-700 shadow-neumorphic",children:"Tampilkan Data"}),l.jsx("button",{onClick:n,className:"w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700",children:"Tutup"})]})})},B0=({onClose:n,records:e,onConfirmDelete:t})=>{const[r,s]=N.useState(new Set),i=h=>{if(h.target.checked){const f=new Set(e.map(m=>m.id));s(f)}else s(new Set)},o=h=>{const f=new Set(r);f.has(h)?f.delete(h):f.add(h),s(f)},c=()=>{r.size!==0&&t(Array.from(r))};return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-4xl border-2 border-red-500 flex flex-col max-h-[90vh]",onClick:h=>h.stopPropagation(),children:[l.jsx("h2",{className:"text-2xl font-bold text-center text-red-300 mb-4 flex-shrink-0",children:"Hapus Data Secara Massal"}),l.jsx("div",{className:"flex-grow overflow-auto rounded-lg",children:l.jsxs("table",{className:"w-full text-left text-sm",children:[l.jsx("thead",{className:"bg-gray-900 sticky top-0",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-3",children:l.jsx("input",{type:"checkbox",onChange:i,checked:e.length>0&&r.size===e.length,className:"h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-500 focus:ring-red-600"})}),l.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Nama"}),l.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Status"}),l.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Tanggal Dibuat"}),l.jsx("th",{className:"p-3 font-semibold text-gray-300",children:"Dibuat Oleh"})]})}),l.jsx("tbody",{className:"bg-gray-800 divide-y divide-gray-700",children:e.length>0?e.map(h=>l.jsxs("tr",{className:`hover:bg-gray-700/50 ${r.has(h.id)?"bg-red-900/30":""}`,children:[l.jsx("td",{className:"p-3",children:l.jsx("input",{type:"checkbox",checked:r.has(h.id),onChange:()=>o(h.id),className:"h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-500 focus:ring-red-600"})}),l.jsx("td",{className:"p-3 whitespace-nowrap",children:h.nama}),l.jsx("td",{className:"p-3 whitespace-nowrap",children:yt(h)}),l.jsx("td",{className:"p-3 whitespace-nowrap",children:In(h.createdAt).date}),l.jsx("td",{className:"p-3 whitespace-nowrap",children:h.createdByName||"-"})]},h.id)):l.jsx("tr",{children:l.jsx("td",{colSpan:5,className:"text-center p-8 text-gray-400",children:"Tidak ada data untuk rentang tanggal yang dipilih."})})})]})}),l.jsxs("div",{className:"flex justify-between items-center mt-4 flex-shrink-0",children:[l.jsxs("p",{className:"text-sm text-gray-400",children:[r.size," data terpilih"]}),l.jsxs("div",{children:[l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 mr-3",children:"Tutup"}),l.jsx("button",{onClick:c,disabled:r.size===0,className:"px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed",children:"Hapus Data"})]})]})]})})},$0=({onClose:n,performanceData:e,onSelectTrainer:t})=>l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-green-500 flex flex-col max-h-[90vh]",onClick:r=>r.stopPropagation(),children:[l.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Laporan Kinerja Pengguna"}),l.jsx("div",{className:"flex-grow overflow-auto space-y-3 pr-2",children:e.map(({trainerName:r,total:s,summary:i})=>l.jsxs("div",{onClick:()=>t(r),className:"bg-gray-900/70 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-700 transition-colors",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-lg text-white",children:r}),l.jsx("p",{className:"text-xs text-gray-400",children:i})]}),l.jsx("span",{className:"text-2xl font-bold text-green-400",children:s})]},r))}),l.jsx("div",{className:"mt-4 pt-4 border-t border-gray-700 flex-shrink-0 flex justify-end",children:l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})}),q0=({onClose:n,trainerName:e,workData:t})=>l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-3xl border-2 border-yellow-500 flex flex-col max-h-[90vh]",onClick:r=>r.stopPropagation(),children:[l.jsxs("h2",{className:"text-2xl font-bold text-center text-yellow-300 mb-4",children:["Hasil Kerja: ",e]}),l.jsx("div",{className:"flex-grow overflow-auto space-y-4 pr-2",children:Object.entries(t).map(([r,s])=>l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-white bg-gray-700 px-3 py-2 rounded-t-lg",children:r}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 bg-gray-900/50 rounded-b-lg",children:s.map(i=>{var o;return l.jsxs("div",{className:"bg-black rounded-lg shadow-neumorphic overflow-hidden",children:[l.jsx("img",{src:i.photo||`https://placehold.co/300x200/2d3748/ffffff?text=${i.nama.charAt(0)}`,alt:i.nama,className:"w-full h-24 object-cover"}),l.jsxs("div",{className:"p-2 text-xs",children:[l.jsx("p",{className:"font-bold text-white truncate",children:i.nama}),l.jsx("p",{className:"text-yellow-400",children:yt(i)}),l.jsx("p",{className:"text-gray-400",children:en(i.tgl||((o=i.updatedAt)==null?void 0:o.toDate().toISOString().split("T")[0]))})]})]},i.id)})})]},r))}),l.jsx("div",{className:"flex justify-end mt-4",children:l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})}),Ec=({onClose:n,onFetch:e})=>{const[t,r]=N.useState(""),[s,i]=N.useState("");return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-green-500",onClick:o=>o.stopPropagation(),children:[l.jsx("h3",{className:"text-2xl font-bold text-center text-green-300",children:"Pilih Rentang Tindak Lanjut"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Mulai"}),l.jsx("input",{type:"date",value:t,onChange:o=>r(o.target.value),className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Selesai"}),l.jsx("input",{type:"date",value:s,onChange:o=>i(o.target.value),className:"w-full input-rounded-border"})]})]}),l.jsx("button",{onClick:()=>e(t,s),className:"w-full px-6 py-3 bg-green-600 text-white font-bold rounded-xl text-lg hover:bg-green-700 shadow-neumorphic",children:"Tampilkan"}),l.jsx("button",{onClick:n,className:"w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700",children:"Tutup"})]})})},z0=({onClose:n,data:e})=>{const t=Object.values(e).reduce((r,s)=>r+Object.values(s).reduce((i,o)=>i+o.length,0),0);return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-indigo-500 flex flex-col max-h-[90vh]",onClick:r=>r.stopPropagation(),children:[l.jsx("h2",{className:"text-2xl font-bold text-center text-indigo-300 mb-2",children:"Rincian Tindak Lanjut Evaluasi"}),l.jsxs("p",{className:"text-center text-gray-400 mb-4",children:["Total Peserta Dievaluasi: ",t]}),l.jsx("div",{className:"flex-grow overflow-auto space-y-4 pr-2",children:Object.entries(e).map(([r,s])=>l.jsxs("div",{children:[l.jsxs("h3",{className:"text-lg font-semibold text-white bg-gray-700 px-3 py-2 rounded-t-lg",children:[r," (",Object.values(s).reduce((i,o)=>i+o.length,0)," Peserta)"]}),l.jsx("div",{className:"bg-gray-900/50 p-3 rounded-b-lg space-y-3",children:Object.entries(s).map(([i,o])=>l.jsxs("div",{children:[l.jsx("h4",{className:"font-bold text-indigo-300",children:i}),l.jsx("ul",{className:"list-disc list-inside text-sm text-gray-300 pl-2",children:o.map((c,h)=>l.jsxs("li",{children:[c.nama," - dievaluasi oleh ",c.evaluator||"N/A"," pada ",c.tanggal]},h))})]},i))})]},r))}),l.jsx("div",{className:"flex justify-end mt-4",children:l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})})},H0=({onClose:n,title:e,columns:t,data:r})=>{const[s,i]=N.useState("Semua"),o=N.useMemo(()=>r?r.reduce((f,m)=>{const y=m.attendanceStatus||"N/A";return f[y]=(f[y]||0)+1,f},{}):{},[r]),c=N.useMemo(()=>r?s==="Semua"?r:r.filter(f=>f.attendanceStatus===s):[],[r,s]),h=N.useMemo(()=>{const f=Object.entries(o).filter(([,m])=>m>0).map(([m])=>m);return f.length>0&&f.unshift("Semua"),f},[o]);return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-7xl border-2 border-purple-500 flex flex-col max-h-[90vh]",onClick:f=>f.stopPropagation(),children:[l.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-4 flex-shrink-0",children:e}),h.length>0&&l.jsx("div",{className:"flex flex-wrap gap-2 mb-4 flex-shrink-0",children:h.map(f=>l.jsxs("button",{onClick:()=>i(f),className:`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${s===f?"bg-purple-600 text-white":"bg-gray-700 hover:bg-gray-600"}`,children:[f," ",l.jsx("span",{className:"text-xs bg-black/20 px-1.5 py-0.5 rounded-full",children:o[f]||c.length})]},f))}),l.jsx("div",{className:"flex-grow overflow-auto rounded-lg",children:l.jsxs("table",{className:"w-full text-left text-lg",children:[l.jsx("thead",{className:"bg-gray-900 sticky top-0",children:l.jsx("tr",{children:t.map(f=>l.jsx("th",{className:"p-4 font-semibold text-gray-100",children:f.header},f.accessor))})}),l.jsx("tbody",{className:"bg-gray-800 divide-y divide-gray-700",children:c.length>0?c.map((f,m)=>l.jsx("tr",{className:"hover:bg-gray-700/50",children:t.map(y=>l.jsx("td",{className:`p-4 whitespace-nowrap text-gray-200 ${y.accessor==="participantName"?"font-bold text-white text-xl":""}`,children:f[y.accessor]||"-"},`${m}-${y.accessor}`))},m)):l.jsx("tr",{children:l.jsx("td",{colSpan:t.length,className:"text-center p-8 text-gray-400 text-xl",children:"Tidak ada data untuk filter ini."})})})]})}),l.jsx("div",{className:"flex justify-end mt-4 flex-shrink-0",children:l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"})})]})})},W0=({onClose:n,onFetch:e,locations:t})=>{const[r,s]=N.useState(""),[i,o]=N.useState(""),[c,h]=N.useState("semua");return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-blue-500",onClick:f=>f.stopPropagation(),children:[l.jsx("h3",{className:"text-2xl font-bold text-center text-blue-300",children:"Rekapan Daftar Hadir Peserta"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Mulai"}),l.jsx("input",{type:"date",value:r,onChange:f=>s(f.target.value),className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Tanggal Selesai"}),l.jsx("input",{type:"date",value:i,onChange:f=>o(f.target.value),className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Kategori Lokasi TC"}),l.jsxs("select",{value:c,onChange:f=>h(f.target.value),className:"w-full select-rounded-border",children:[l.jsx("option",{value:"semua",children:"Semua Lokasi"}),t.map(f=>l.jsx("option",{value:f,children:f},f))]})]})]}),l.jsx("button",{onClick:()=>e(r,i,c),className:"w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-lg hover:bg-blue-700 shadow-neumorphic",children:"Tampilkan"}),l.jsx("button",{onClick:n,className:"w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700",children:"Tutup"})]})})},K0=({onClose:n,participants:e,locations:t,onEditParticipant:r})=>{const{db:s,showToast:i,currentUser:o,setPostSaveAction:c,openModal:h}=N.useContext(We),f=Dr(),[m,y]=N.useState(""),[g,b]=N.useState({}),[T,R]=N.useState(null);N.useEffect(()=>{t.length>0&&!m&&y(t[0])},[t,m]);const C=N.useMemo(()=>e.filter(_=>_.trainganDari===m),[e,m]),P=(_,x)=>{b(E=>({...E,[_]:{...E[_],status:x}}))},V=(_,x)=>{b(E=>({...E,[_]:{...E[_],notes:x}}))},L=_=>{R(_)},q=async()=>{if(!T)return;const _={...T,status:"Resign",tanggalResign:new Date().toISOString().split("T")[0]};delete _.id,await f.addOrUpdateRecord(null,_),R(null)},G=_=>{c("reopenAttendance"),r(_),n()},Y=async()=>{if(Object.keys(g).length===0){i("Tidak ada perubahan untuk disimpan.");return}const _=ro(s),x=Je(s,`artifacts/${we}/public/data/attendance`);C.forEach(E=>{const A=g[E.id];if(A&&A.status){const w=nt(x);_.set(w,{participantId:E.id,participantName:E.nama,location:m,attendanceStatus:A.status,notes:A.notes||"",date:Xt(),recordedBy:o.nama})}});try{await _.commit(),i("Daftar hadir berhasil disimpan."),n()}catch{i("Gagal menyimpan daftar hadir.")}},I=async(_,x,E)=>{if(!s||!_||!x){i("Silakan pilih rentang tanggal yang valid.");return}i("Mengambil data rekapan...");const A=ge.fromDate(new Date(`${_}T00:00:00`)),w=ge.fromDate(new Date(`${x}T23:59:59`)),O=jt(Je(s,`artifacts/${we}/public/data/attendance`),ln("date",">=",A),ln("date","<=",w));try{let X=(await ni(O)).docs;E!=="semua"&&(X=X.filter(he=>he.data().location===E));const se=X.sort((he,ye)=>ye.data().date.toDate().getTime()-he.data().date.toDate().getTime()).map(he=>{const ye=he.data(),{date:Ae}=In(ye.date);return{...ye,date:Ae}});h("participantAttendanceReportDisplay",{data:se,title:"Rekapan Daftar Hadir Peserta",columns:[{header:"Nama",accessor:"participantName"},{header:"Tanggal",accessor:"date"},{header:"Lokasi",accessor:"location"},{header:"Status",accessor:"attendanceStatus"},{header:"Keterangan",accessor:"notes"},{header:"Oleh",accessor:"recordedBy"}]}),i(`Rekapan ditemukan: ${se.length} data.`)}catch($){i("Gagal mengambil data rekapan."),console.error("Error fetching participant attendance report:",$)}},v=N.useMemo(()=>Object.values(g).reduce((_,{status:x})=>(x&&(_[x]=(_[x]||0)+1),_),{Hadir:0,Izin:0,Sakit:0,Alpa:0}),[g]);return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-2xl border-2 border-green-500 flex flex-col",onClick:_=>_.stopPropagation(),children:[l.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Daftar Hadir Peserta TC"}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Pilih Lokasi TC"}),l.jsx("select",{value:m,onChange:_=>y(_.target.value),className:"w-full select-rounded-border",children:t.map(_=>l.jsx("option",{value:_,children:_},_))})]}),l.jsx("div",{className:"flex-grow overflow-y-auto max-h-[50vh] pr-2 space-y-4",children:C.map(_=>{var x;return l.jsxs("div",{className:"bg-gray-900 p-4 rounded-lg",children:[l.jsx("p",{className:"font-bold text-lg text-white mb-2",children:_.nama}),l.jsxs("div",{className:"flex flex-wrap gap-2 mb-2",children:[["Hadir","Izin","Sakit","Alpa"].map(E=>{var A;return l.jsx("button",{onClick:()=>P(_.id,E),className:`px-3 py-1 text-sm font-semibold rounded-md transition-all ${((A=g[_.id])==null?void 0:A.status)===E?"text-white "+(E==="Hadir"?"bg-green-500":E==="Izin"?"bg-blue-500":E==="Sakit"?"bg-yellow-500":"bg-orange-500"):"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,children:E},E)}),l.jsx("button",{onClick:()=>G(_),className:"px-3 py-1 text-sm font-semibold rounded-md bg-green-600 text-white hover:bg-green-700",children:"Lulus"}),l.jsx("button",{onClick:()=>L(_),className:"px-3 py-1 text-sm font-semibold rounded-md bg-red-600 text-white hover:bg-red-700",children:"Resign"})]}),l.jsx("input",{type:"text",placeholder:"Keterangan...",value:((x=g[_.id])==null?void 0:x.notes)||"",onChange:E=>V(_.id,E.target.value),className:"w-full input-rounded-border !py-2 !text-sm"})]},_.id)})}),l.jsxs("div",{className:"border-t border-gray-600 mt-4 pt-4",children:[l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-center mb-4",children:[l.jsxs("p",{children:["Hadir: ",l.jsx("span",{className:"font-bold text-green-400",children:v.Hadir})]}),l.jsxs("p",{children:["Izin: ",l.jsx("span",{className:"font-bold text-blue-400",children:v.Izin})]}),l.jsxs("p",{children:["Sakit: ",l.jsx("span",{className:"font-bold text-yellow-400",children:v.Sakit})]}),l.jsxs("p",{children:["Alpa: ",l.jsx("span",{className:"font-bold text-orange-400",children:v.Alpa})]})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-3",children:[l.jsx("button",{onClick:()=>h("participantAttendanceReportDateRange",{onFetch:I,locations:t}),className:"px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 w-full sm:w-auto",children:"Rekapan Peserta"}),l.jsxs("div",{className:"flex gap-3 w-full sm:w-auto",children:[l.jsx("button",{onClick:n,className:"w-full px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"}),l.jsx("button",{onClick:Y,className:"w-full px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700",children:"Simpan"})]})]})]})]})}),l.jsx(ed,{show:!!T,onClose:()=>R(null),onConfirm:q,title:"Konfirmasi Resign",message:`Apakah Anda yakin ingin mengubah status ${T==null?void 0:T.nama} menjadi Resign? Status peserta akan diubah dan otomatis masuk ke dalam kelompok Resign.`,confirmText:"Ya, Resign"})]})},ao=({children:n})=>{const e=N.useRef(null),[t,r]=N.useState(!1);return N.useEffect(()=>{const s=new IntersectionObserver(([o])=>{o.isIntersecting&&(r(!0),s.unobserve(o.target))},{threshold:.1}),i=e.current;return i&&s.observe(i),()=>{i&&s.unobserve(i)}},[]),l.jsx("div",{ref:e,className:t?"animate-on-scroll":"opacity-0",children:n})},G0=({onClose:n,onSuperAdminLogin:e})=>{const[t,r]=N.useState(""),s=()=>e(t);return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-sm space-y-4",onClick:i=>i.stopPropagation(),children:[l.jsx("h3",{className:"text-xl font-bold text-center text-yellow-300",children:"Login Admin Utama"}),l.jsx("input",{type:"password",inputMode:"numeric",value:t,onChange:i=>r(i.target.value),className:"w-full input-rounded-border",placeholder:"Masukkan PIN Admin Utama",onKeyDown:i=>i.key==="Enter"&&s()}),l.jsx("button",{onClick:s,className:"w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl text-lg hover:bg-yellow-600 shadow-neumorphic",children:"Login"})]})})},Q0=()=>{const{users:n,showToast:e,setCurrentUser:t,setUserRole:r,setLoginStep:s,openModal:i,closeModal:o}=N.useContext(We),[c,h]=N.useState(""),[f,m]=N.useState("");N.useEffect(()=>{if(n.length>0){const T=n.find(R=>R.nama)||n[0];T&&h(T.nama)}},[n]);const y=N.useCallback((T,R)=>{const C=n.find(P=>P.nama===T);C&&C.pin===R?(t(C),r(C.role),s("loggedIn"),e(`Selamat datang, ${C.nama}!`)):e("PIN salah. Coba lagi.")},[n,e,t,r,s]),g=N.useCallback(T=>{if(T==="197385"){const R={nama:"endayshebocah",role:"admin",permissions:gs.reduce((C,P)=>({...C,[P.key]:!0}),{})};t(R),r("admin"),s("loggedIn"),e("Selamat datang, Admin Utama!"),o()}else e("PIN Admin Utama salah.")},[e,t,r,s,o]),b=()=>{if(!c||!f){e("Silakan pilih pengguna dan masukkan PIN.");return}y(c,f)};return l.jsx("div",{className:"h-screen w-screen flex items-center justify-center bg-gray-900 p-4",children:l.jsxs("div",{className:"w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-neumorphic border-2 border-purple-500 space-y-6",children:[l.jsx("h1",{className:"text-3xl font-bold text-center text-blue-300",children:"Login Database"}),n.length>0?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Pilih Pengguna"}),l.jsx("select",{value:c,onChange:T=>h(T.target.value),className:"w-full select-rounded-border",children:n.map(T=>l.jsx("option",{value:T.nama,children:T.nama},T.id))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"PIN"}),l.jsx("input",{type:"password",inputMode:"numeric",value:f,onChange:T=>m(T.target.value),className:"w-full input-rounded-border",placeholder:"****",onKeyDown:T=>T.key==="Enter"&&b()})]})]}),l.jsx("button",{onClick:b,className:"w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-xl text-lg hover:bg-blue-600 shadow-neumorphic",children:"Masuk"})]}):l.jsxs("div",{className:"text-center text-gray-400 p-4 bg-gray-900/50 rounded-lg",children:[l.jsx("p",{children:"Tidak ada pengguna yang terdaftar."}),l.jsx("p",{className:"text-sm mt-2",children:"Silakan hubungi administrator untuk membuat akun pertama."})]}),l.jsx("p",{className:"text-center text-xs text-gray-500 cursor-pointer hover:text-yellow-400 transition-colors",onClick:()=>i("superAdminLogin",{onSuperAdminLogin:g}),children:"endayshebocah"})]})})},Y0=()=>{const{users:n,showToast:e}=N.useContext(We),t=Dr(),r=()=>({nama:"",pin:"",role:"trainer",permissions:gs.reduce((g,b)=>({...g,[b.key]:!b.adminOnly}),{})}),[s,i]=N.useState(r()),[o,c]=N.useState(null),h=g=>{const{name:b,value:T,type:R,checked:C}=g.target;i(R==="checkbox"?P=>({...P,permissions:{...P.permissions,[b]:C}}):P=>({...P,[b]:T}))},f=()=>{i(r()),c(null)},m=g=>{i({nama:g.nama||"",pin:g.pin||"",role:g.role||"trainer",permissions:g.permissions||r().permissions}),c(g.id)},y=async g=>{if(g.preventDefault(),!s.nama||!s.pin){e("Nama dan PIN harus diisi.");return}await t.addOrUpdateUser(o,s)&&f()};return l.jsxs("div",{className:"p-4 md:p-6 space-y-6",children:[l.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-teal-500 p-6 max-w-4xl mx-auto",children:[l.jsx("h2",{className:"text-2xl font-bold text-teal-300 mb-4",children:o?"Edit Pengguna":"Tambah Pengguna Baru"}),l.jsxs("form",{onSubmit:y,className:"space-y-6",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsx("input",{type:"text",name:"nama",placeholder:"Nama Pengguna",value:s.nama,onChange:h,className:"input-rounded-border",required:!0}),l.jsx("input",{type:"text",name:"pin",placeholder:"PIN",value:s.pin,onChange:h,className:"input-rounded-border",required:!0}),l.jsxs("select",{name:"role",value:s.role,onChange:h,className:"select-rounded-border",children:[l.jsx("option",{value:"trainer",children:"Trainer"}),l.jsx("option",{value:"admin",children:"Admin"})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-300 mb-3",children:"Izin Akses Menu"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",children:gs.map(g=>l.jsxs("label",{className:"flex items-center space-x-3 p-2 bg-gray-900/50 rounded-lg",children:[l.jsx("input",{type:"checkbox",name:g.key,checked:!!s.permissions[g.key],onChange:h,className:"h-5 w-5 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-600"}),l.jsx("span",{className:"text-sm",children:g.label})]},g.key))})]}),l.jsxs("div",{className:"flex justify-end gap-3 pt-4",children:[o&&l.jsx("button",{type:"button",onClick:f,className:"px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700",children:"Batal"}),l.jsx("button",{type:"submit",className:"px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700",children:o?"Simpan Perubahan":"Tambah Pengguna"})]})]})]}),l.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-teal-500 p-6 max-w-4xl mx-auto",children:[l.jsx("h2",{className:"text-2xl font-bold text-teal-300 mb-4",children:"Daftar Pengguna"}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left",children:[l.jsx("thead",{className:"border-b border-gray-600",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-3",children:"Nama"}),l.jsx("th",{className:"p-3",children:"Peran"}),l.jsx("th",{className:"p-3",children:"Izin Diberikan"}),l.jsx("th",{className:"p-3 text-right",children:"Aksi"})]})}),l.jsx("tbody",{children:n.map(g=>l.jsxs("tr",{className:"border-b border-gray-700",children:[l.jsx("td",{className:"p-3 align-top",children:g.nama}),l.jsx("td",{className:"p-3 align-top capitalize",children:g.role}),l.jsx("td",{className:"p-3 align-top",children:l.jsx("div",{className:"flex flex-wrap gap-1",children:gs.filter(b=>g.permissions&&g.permissions[b.key]).map(b=>l.jsx("span",{className:"text-xs bg-blue-900/70 text-blue-200 px-2 py-1 rounded-full",children:b.label},b.key))})}),l.jsxs("td",{className:"p-3 flex justify-end gap-2 align-top",children:[l.jsx("button",{onClick:()=>m(g),className:"p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[l.jsx("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),l.jsx("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]})}),l.jsx("button",{onClick:()=>t.deleteUser(g.id,g.nama),className:"p-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:l.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z",clipRule:"evenodd"})})})]})]},g.id))})]})})]})]})},J0=({latestRecords:n,allRecords:e,onEdit:t,onDelete:r})=>{const[s,i]=N.useState("semua"),[o,c]=N.useState(null),h=["Evaluasi Reflexology","Evaluasi Athletic Massage","Evaluasi Seitai"],f=N.useMemo(()=>["border-indigo-500","border-purple-500","border-teal-500","border-pink-500","border-sky-500"],[]),m=T=>{o&&o.id===T.id?c(null):c(T)},y=N.useMemo(()=>{const T=new Date;T.setHours(0,0,0,0);const R=n.filter(C=>{const P=h.some(Y=>C.status.includes(Y)),V=C.status==="Lulus";if(!P&&!V)return!1;let L=C.tgl||C.tanggalLulus;if(!L)return!1;const q=new Date(`${L}T00:00:00Z`);if(isNaN(q.getTime()))return!1;const G=new Date(q);return G.setMonth(G.getMonth()+3),G<=T});return s!=="semua"?R.filter(C=>C.status==="Lulus"&&s==="Evaluasi Reflexology"?!0:C.status===s):R},[n,s]),g=N.useMemo(()=>y.reduce((T,R)=>{const C=R.turunKeCabang||R.cabang||"Belum Ditentukan";return T[C]||(T[C]=[]),T[C].push(R),T},{}),[y]),b=N.useMemo(()=>Object.entries(g).sort(([,T],[,R])=>R.length-T.length),[g]);return l.jsxs("div",{className:"p-4 md:p-8 space-y-8",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[l.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-purple-300 text-center sm:text-left",children:"Jadwal Evaluasi"}),l.jsxs("select",{value:s,onChange:T=>i(T.target.value),className:"select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-auto",children:[l.jsx("option",{value:"semua",children:"Semua Kategori"}),h.map(T=>l.jsx("option",{value:T,children:T.replace("Evaluasi ","")},T))]})]}),b.length===0?l.jsx("div",{className:"text-center text-gray-400 mt-10 text-xl",children:"Tidak ada jadwal evaluasi yang jatuh tempo untuk filter ini."}):b.map(([T,R],C)=>l.jsx(ao,{children:l.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${f[C%f.length]} p-4 sm:p-6 space-y-4`,children:[l.jsx("h3",{className:"text-xl font-semibold text-white",children:T}),l.jsx("div",{className:"flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container",children:R.map(P=>l.jsx(L0,{record:P,onFollowUp:t,onCardClick:m},P.id))}),o&&R.some(P=>P.id===o.id)&&l.jsx("div",{className:"w-full",children:l.jsx(io,{participant:o,allRecords:e,onClose:()=>c(null),onEdit:t,onDelete:r})})]})},T))]})},X0=({deletedRecords:n,onRestore:e,onDeletePermanent:t})=>{const r=(s,i)=>{t(s,i)};return l.jsx("div",{className:"p-4 md:p-8",children:l.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-red-500 p-6",children:[l.jsx("h2",{className:"text-2xl font-bold text-red-300 mb-4",children:"Tong Sampah"}),n.length===0?l.jsx("p",{className:"text-gray-400",children:"Tong sampah kosong."}):l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left",children:[l.jsx("thead",{className:"border-b border-gray-600",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-3",children:"Nama"}),l.jsx("th",{className:"p-3 hidden sm:table-cell",children:"Status Terakhir"}),l.jsx("th",{className:"p-3 text-right",children:"Aksi"})]})}),l.jsx("tbody",{children:n.map(s=>l.jsxs("tr",{className:"border-b border-gray-700",children:[l.jsx("td",{className:"p-3",children:s.nama}),l.jsx("td",{className:"p-3 hidden sm:table-cell",children:s.status}),l.jsxs("td",{className:"p-3 flex justify-end gap-2",children:[l.jsx("button",{onClick:()=>r(s.id,s.nama),className:"p-2 bg-red-600 text-white rounded-md hover:bg-red-700",children:"Hapus"}),l.jsx("button",{onClick:()=>e(s.id),className:"p-2 bg-green-600 text-white rounded-md hover:bg-green-700",children:"Pulihkan"})]})]},s.id))})]})})]})})},Z0=({onSave:n,onClose:e,initialData:t,evaluationStatus:r})=>{const[s,i]=N.useState(!1),[o,c]=N.useState({ratings:{},manualNotes:{},finalNote:""});N.useEffect(()=>{c({ratings:(t==null?void 0:t.ratings)||{ketepatanWaktu:"",bagianKaki:"",bagianTangan:"",bagianPunggung:"",bagianPundak:""},manualNotes:(t==null?void 0:t.manualNotes)||{ketepatanWaktu:"",bagianKaki:"",bagianTangan:"",bagianPunggung:"",bagianPundak:""},finalNote:(t==null?void 0:t.catatan)||""})},[t]);const h=r==="Evaluasi Seitai",f=[{key:"ketepatanWaktu",label:h?"Attitude":"Ketepatan Waktu (Durasi Sesi)"},{key:"bagianKaki",label:h?"Face Down":"Bagian Kaki"},{key:"bagianTangan",label:h?"Face Up":"Bagian Tangan"},{key:"bagianPunggung",label:h?"Side Lying":"Bagian Punggung"},{key:"bagianPundak",label:h?"Adjustment":"Bagian Pundak & Kepala"}],m=["Kurang","Cukup","Baik"],y=(C,P)=>{c(V=>({...V,ratings:{...V.ratings,[C]:P}}))},g=(C,P)=>{c(V=>({...V,manualNotes:{...V.manualNotes,[C]:P}}))},b=C=>{c(P=>({...P,finalNote:C.target.value}))},T=()=>{i(!0)},R=()=>{const C={ratings:o.ratings,manualNotes:o.manualNotes,catatan:o.finalNote};n(C),i(!1),e()};return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4",onClick:e,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-purple-500 flex flex-col max-h-[90vh]",onClick:C=>C.stopPropagation(),children:[l.jsx("h3",{className:"text-xl font-bold text-center text-purple-300 mb-4 flex-shrink-0",children:"Formulir Penilaian Cepat"}),l.jsx("div",{className:"flex-grow overflow-y-auto space-y-4 pr-2",children:f.map(C=>l.jsxs("div",{className:"bg-gray-900/70 p-4 rounded-lg",children:[l.jsx("label",{className:"font-semibold text-white mb-2 block",children:C.label}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-2",children:m.map(P=>l.jsx("button",{onClick:()=>y(C.key,P),className:`px-4 py-1.5 text-sm font-semibold rounded-md transition-all flex-grow ${o.ratings[C.key]===P?"text-white "+(P==="Baik"?"bg-green-500":P==="Cukup"?"bg-yellow-500":"bg-red-500"):"bg-gray-600 text-gray-300 hover:bg-gray-500"}`,children:P},P))}),l.jsx("input",{type:"text",value:o.manualNotes[C.key]||"",onChange:P=>g(C.key,P.target.value),placeholder:"Tambah catatan spesifik (opsional)...",className:"w-full input-rounded-border !py-2 !text-sm"})]},C.key))}),l.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-700 flex-shrink-0",children:[l.jsx("label",{className:"block mb-2 font-semibold text-white",children:"Catatan / Ulasan Akhir (Opsional)"}),l.jsx("textarea",{name:"catatan",value:o.finalNote||"",onChange:b,placeholder:"Ulasan umum bisa diisi manual di sini...",className:"w-full textarea-rounded-border h-24"}),l.jsxs("div",{className:"flex justify-end gap-3 mt-3",children:[l.jsx("button",{onClick:e,className:"px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700",children:"Batal"}),l.jsx("button",{onClick:T,className:"px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700",children:"Simpan Penilaian"})]})]})]})}),l.jsx(ed,{show:s,onClose:()=>i(!1),onConfirm:R,title:"Konfirmasi Simpan",message:"Apakah Anda yakin ingin menyimpan penilaian ini? Data akan disimpan sementara dan diterapkan saat Anda menyimpan formulir utama.",confirmText:"Ya, Simpan"})]})},oo=["Tc Pusat Jakrta","Tc Panimbang","Tc Semarang","Tc Cirebon","Tc Deltamas","Tc Bali"],ev=({formValues:n,handleFormInputChange:e})=>l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Kota Asal"}),l.jsx("input",{type:"text",name:"kotaAsal",value:n.kotaAsal||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Masuk"}),l.jsx("input",{type:"date",name:"tanggalMasuk",value:n.tanggalMasuk||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Refrensi"}),l.jsx("input",{type:"text",name:"refrensi",value:n.refrensi||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Training Dari"}),l.jsxs("select",{name:"trainganDari",value:n.trainganDari||"",onChange:e,className:"w-full select-rounded-border",children:[l.jsx("option",{value:"",children:"Pilih Lokasi"}),oo.map(t=>l.jsx("option",{value:t,children:t},t))]})]})]}),tv=({formValues:n,handleFormInputChange:e,onOpenAssessment:t,activeRecords:r})=>{const{userRole:s}=N.useContext(We),i=N.useMemo(()=>so(n.nama,r),[n.nama,r]);return l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Trainer"}),l.jsx("input",{type:"text",name:"trainer",value:n.trainer||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tahap Ceking"}),l.jsx("input",{type:"text",name:"tahapCeking",value:n.tahapCeking||"",onChange:e,readOnly:s!=="admin",className:`w-full input-rounded-border ${s!=="admin"?"bg-gray-700 cursor-not-allowed":""}`,placeholder:i})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal"}),l.jsx("input",{type:"date",name:"tgl",value:n.tgl||"",onChange:e,className:"w-full input-rounded-border"})]}),n.cekingResult!=="Lulus"&&l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Training Dari"}),l.jsxs("select",{name:"trainganDari",value:n.trainganDari||"",onChange:e,className:"w-full select-rounded-border",children:[l.jsx("option",{value:"",children:"Pilih Lokasi"}),oo.map(o=>l.jsx("option",{value:o,children:o},o))]})]}),n.cekingResult==="Lulus"&&l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Lulus"}),l.jsx("input",{type:"date",name:"tanggalLulus",value:n.tanggalLulus||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Hasil Ceking"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{type:"button",onClick:()=>e({target:{name:"cekingResult",value:"Masih Tahap Ceking"}}),className:`w-full py-2 rounded-lg font-semibold ${n.cekingResult==="Masih Tahap Ceking"||!n.cekingResult?"bg-blue-600 text-white":"bg-gray-600"}`,children:"Masih Tahap Ceking"}),l.jsx("button",{type:"button",onClick:()=>e({target:{name:"cekingResult",value:"Lulus"}}),className:`w-full py-2 rounded-lg font-semibold ${n.cekingResult==="Lulus"?"bg-green-600 text-white":"bg-gray-600"}`,children:"Lulus"})]})]}),l.jsx("div",{className:"sm:col-span-2",children:l.jsx("button",{type:"button",onClick:t,disabled:!n.nama,className:"w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-neumorphic disabled:bg-gray-700 disabled:cursor-not-allowed",children:"Buka & Isi Formulir Penilaian"})}),n.cekingResult==="Lulus"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Cabang"}),l.jsx("input",{type:"text",name:"turunKeCabang",value:n.turunKeCabang||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Acc Yang Meluluskan"}),l.jsx("input",{type:"text",name:"accYangMeluluskan",value:n.accYangMeluluskan||"",onChange:e,className:"w-full input-rounded-border"})]})]})]})},nv=({formValues:n,handleFormInputChange:e,onOpenAssessment:t,activeRecords:r})=>{const{userRole:s}=N.useContext(We),i=N.useMemo(()=>so(n.nama,r),[n.nama,r]),o=n.status.replace("Evaluasi ","");return l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Trainer"}),l.jsx("input",{type:"text",name:"trainer",value:n.trainer||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tahap Ceking"}),l.jsx("input",{type:"text",name:"tahapCeking",value:n.tahapCeking||"",onChange:e,readOnly:s!=="admin",className:`w-full input-rounded-border ${s!=="admin"?"bg-gray-700 cursor-not-allowed":""}`,placeholder:i})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Cabang"}),l.jsx("input",{type:"text",name:"cabang",value:n.cabang||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Evaluasi"}),l.jsx("input",{type:"date",name:"tgl",value:n.tgl||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Hasil Evaluasi"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{type:"button",onClick:()=>e({target:{name:"evaluationResult",value:"Masih Tahap Evaluasi"}}),className:`w-full py-2 rounded-lg font-semibold ${n.evaluationResult==="Masih Tahap Evaluasi"||!n.evaluationResult?"bg-purple-600 text-white":"bg-gray-600"}`,children:`Masih Tahap ${o}`}),l.jsx("button",{type:"button",onClick:()=>e({target:{name:"evaluationResult",value:"Lulus"}}),className:`w-full py-2 rounded-lg font-semibold ${n.evaluationResult==="Lulus"?"bg-green-600 text-white":"bg-gray-600"}`,children:`Lulus ${o}`})]})]}),l.jsx("div",{className:"sm:col-span-2",children:l.jsx("button",{type:"button",onClick:t,disabled:!n.nama,className:"w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-neumorphic disabled:bg-gray-700 disabled:cursor-not-allowed",children:"Buka & Isi Formulir Penilaian"})}),n.evaluationResult==="Lulus"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Lulus Evaluasi"}),l.jsx("input",{type:"date",name:"tanggalLulus",value:n.tanggalLulus||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Acc Yang Meluluskan"}),l.jsx("input",{type:"text",name:"accYangMeluluskan",value:n.accYangMeluluskan||"",onChange:e,className:"w-full input-rounded-border"})]})]})]})},rv=({formValues:n,handleFormInputChange:e})=>l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Kota Asal"}),l.jsx("input",{type:"text",name:"kotaAsal",value:n.kotaAsal||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Masuk"}),l.jsx("input",{type:"date",name:"tanggalMasuk",value:n.tanggalMasuk||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Tanggal Resign"}),l.jsx("input",{type:"date",name:"tanggalResign",value:n.tanggalResign||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Refrensi"}),l.jsx("input",{type:"text",name:"refrensi",value:n.refrensi||"",onChange:e,className:"w-full input-rounded-border"})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Training Dari"}),l.jsxs("select",{name:"trainganDari",value:n.trainganDari||"",onChange:e,className:"w-full select-rounded-border",children:[l.jsx("option",{value:"",children:"Pilih Lokasi"}),oo.map(t=>l.jsx("option",{value:t,children:t},t))]})]})]}),sv=({isFormExpanded:n,formValues:e,handleFormInputChange:t,handleAddOrUpdateRecord:r,resetForm:s,fileInputRef:i,handleFileSelect:o,activeRecords:c,uniqueRecords:h,handleSuggestionClick:f,nameSuggestions:m,setNameSuggestions:y,onOpenAssessment:g})=>{const b=()=>{const{status:T}=e,R={formValues:e,handleFormInputChange:t,onOpenAssessment:g,activeRecords:c};return T==="Trainingan"?l.jsx(ev,{...R}):T==="Tahap Ceking"?l.jsx(tv,{...R}):T.startsWith("Evaluasi")?l.jsx(nv,{...R}):T==="Resign"?l.jsx(rv,{...R}):null};return l.jsx("div",{className:`details-section ${n?"p-4 sm:p-8":"details-section-hidden"}`,children:l.jsxs("form",{onSubmit:r,className:"space-y-6",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4",children:[l.jsxs("div",{className:"sm:col-span-2 relative",children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Nama"}),l.jsx("input",{type:"text",name:"nama",value:e.nama||"",onChange:t,onBlur:()=>setTimeout(()=>y([]),150),required:!0,className:"w-full input-rounded-border",autoComplete:"off"}),m.length>0&&e.nama.length>0&&l.jsx("ul",{className:"absolute z-20 w-full bg-gray-700 border border-gray-600 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg",children:h.filter(T=>T.nama.toLowerCase().includes(e.nama.toLowerCase())).map(T=>l.jsx("li",{className:"px-4 py-2 cursor-pointer hover:bg-gray-600",onMouseDown:()=>f(T),children:T.nama},T.id))})]}),l.jsxs("div",{className:"sm:col-span-2",children:[l.jsx("label",{className:"block mb-2 text-gray-300 text-base",children:"Status"}),l.jsxs("select",{name:"status",value:e.status||"Trainingan",onChange:t,className:"w-full select-rounded-border",children:[l.jsx("option",{value:"Trainingan",children:"Trainingan"}),l.jsx("option",{value:"Tahap Ceking",children:"Tahap Ceking"}),l.jsx("option",{value:"Evaluasi Reflexology",children:"Evaluasi Reflexology"}),l.jsx("option",{value:"Evaluasi Athletic Massage",children:"Evaluasi Athletic Massage"}),l.jsx("option",{value:"Evaluasi Seitai",children:"Evaluasi Seitai"}),l.jsx("option",{value:"Resign",children:"Resign"})]})]}),b()]}),l.jsxs("div",{className:"flex flex-col sm:flex-row flex-wrap justify-between items-center pt-4 gap-4",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("button",{type:"button",onClick:()=>i.current.click(),className:"px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 shadow-neumorphic",children:"Unggah Foto"}),e.photo&&l.jsx("img",{src:e.photo,alt:"Preview",className:"h-16 w-16 rounded-lg object-cover border-2 border-blue-400"}),l.jsx("input",{type:"file",ref:i,onChange:o,accept:"image/*",className:"hidden"})]}),l.jsxs("div",{className:"flex items-center gap-4 justify-end",children:[l.jsx("button",{type:"button",onClick:s,className:"px-6 py-3 bg-red-500 text-white font-bold rounded-xl text-base hover:bg-red-600 shadow-neumorphic",children:"Batal"}),l.jsx("button",{type:"submit",className:"px-6 py-3 bg-blue-500 text-white font-bold rounded-xl text-base hover:bg-blue-600 shadow-neumorphic",children:"Simpan"})]})]})]})})},iv=({records:n,allRecords:e,onEdit:t,onDelete:r})=>{const[s,i]=N.useState({}),[o,c]=N.useState(null),h=N.useMemo(()=>{const y=n.reduce((g,b)=>{const T=b.trainganDari;return T&&(g[T]=(g[T]||0)+1),g},{});return Object.keys(y).sort((g,b)=>y[b]-y[g])},[n]),f=N.useMemo(()=>["border-indigo-500","border-purple-500","border-teal-500","border-pink-500","border-sky-500"],[]),m=y=>{o&&o.id===y.id?c(null):c(y)};return l.jsx("main",{className:"flex-grow overflow-y-auto p-4 md:p-8 pt-4 flex flex-col gap-8",children:h.map((y,g)=>l.jsx(ao,{children:l.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${f[g%f.length]} p-4 sm:p-6 space-y-4`,children:[l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left",children:`Lokasi ${y}`}),l.jsxs("select",{value:s[y]||"semua",onChange:b=>i(T=>({...T,[y]:b.target.value})),onClick:b=>b.stopPropagation(),className:"select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-48",children:[l.jsx("option",{value:"semua",children:"Semua Status"}),l.jsx("option",{value:"Trainingan",children:"Trainingan"}),l.jsx("option",{value:"Ceking",children:"Ceking"}),l.jsx("option",{value:"Lulus",children:"Lulus"}),l.jsx("option",{value:"Resign",children:"Resign"})]})]}),l.jsx("div",{className:"flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container",children:n.filter(b=>b.trainganDari===y&&P0(b,s[y])).map(b=>l.jsx(td,{record:b,onCardClick:m},b.id))}),o&&n.some(b=>b.id===o.id&&b.trainganDari===y)&&l.jsx("div",{className:"w-full",children:l.jsx(io,{participant:o,allRecords:e,onClose:()=>c(null),onEdit:t,onDelete:r})})]})},y))})},av=({records:n,allRecords:e,onEdit:t,onDelete:r})=>{const[s,i]=N.useState({}),[o,c]=N.useState(null),h=N.useMemo(()=>{const y=n.reduce((g,b)=>{const T=b.turunKeCabang||b.cabang;return T&&(g[T]=(g[T]||0)+1),g},{});return Object.keys(y).sort((g,b)=>y[b]-y[g])},[n]),f=N.useMemo(()=>["border-indigo-500","border-purple-500","border-teal-500","border-pink-500","border-sky-500"],[]),m=y=>{o&&o.id===y.id?c(null):c(y)};return l.jsx("main",{className:"flex-grow overflow-y-auto p-4 md:p-8 pt-4 flex flex-col gap-8",children:h.map((y,g)=>l.jsx(ao,{children:l.jsxs("div",{className:`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${f[g%f.length]} p-4 sm:p-6 space-y-4`,children:[l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[l.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left",children:`Evaluasi Therapist ${y}`}),l.jsxs("select",{value:s[y]||"semua",onChange:b=>i(T=>({...T,[y]:b.target.value})),onClick:b=>b.stopPropagation(),className:"select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-auto",children:[l.jsx("option",{value:"semua",children:"Tampilkan Semua"}),l.jsx("option",{value:"Evaluasi Reflexology",children:"Evaluasi Reflexology"}),l.jsx("option",{value:"Evaluasi Athletic Massage",children:"Evaluasi Athletic Massage"}),l.jsx("option",{value:"Evaluasi Seitai",children:"Evaluasi Seitai"})]})]}),l.jsx("div",{className:"flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container",children:n.filter(b=>(b.turunKeCabang===y||b.cabang===y)&&D0(b,s[y])).map(b=>l.jsx(td,{record:b,onCardClick:m},b.id))}),o&&n.some(b=>b.id===o.id&&(b.turunKeCabang===y||b.cabang===y))&&l.jsx("div",{className:"w-full",children:l.jsx(io,{participant:o,allRecords:e,onClose:()=>c(null),onEdit:t,onDelete:r})})]})},y))})},ov=({onClose:n,onConfirm:e,field:t,incorrectValue:r,correctValue:s,count:i})=>l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[80] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-green-500",onClick:o=>o.stopPropagation(),children:[l.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Konfirmasi Penggabungan Data"}),l.jsxs("p",{className:"text-center text-gray-300 mb-2",children:["Anda akan menggabungkan ",l.jsx("span",{className:"font-bold text-white",children:i})," data."]}),l.jsxs("div",{className:"text-center bg-gray-900/50 p-4 rounded-lg",children:[l.jsxs("p",{className:"text-gray-400",children:["Pada kolom ",l.jsx("span",{className:"font-semibold text-white",children:t}),":"]}),l.jsx("p",{className:"text-red-400",children:r}),l.jsx("p",{className:"text-gray-400",children:"akan diubah menjadi"}),l.jsx("p",{className:"text-green-400",children:s})]}),l.jsx("p",{className:"text-center text-xs text-gray-500 mt-4",children:"Tindakan ini tidak dapat diurungkan. Pastikan pilihan Anda sudah benar."}),l.jsxs("div",{className:"flex justify-center gap-4 pt-6",children:[l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Batal"}),l.jsx("button",{onClick:e,className:"px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700",children:"Ya, Gabungkan"})]})]})}),lv=({onClose:n,records:e})=>{const t=Dr(),{openModal:r,closeModal:s,showToast:i}=N.useContext(We),o=[{key:"trainer",label:"Trainer"},{key:"trainganDari",label:"Training Dari"},{key:"turunKeCabang",label:"Turun Ke Cabang"},{key:"cabang",label:"Cabang Evaluasi"},{key:"refrensi",label:"Refrensi"}],[c,h]=N.useState(o[0].key),[f,m]=N.useState(""),[y,g]=N.useState(""),b=N.useMemo(()=>{if(!c||!e)return[];const R=new Set(e.map(C=>C[c]).filter(Boolean));return Array.from(R).sort()},[c,e]),T=async()=>{var C;if(!c||!f||!y||f===y){i("Harap pilih nilai yang valid dan berbeda.");return}const R=e.filter(P=>P[c]===f);r("mergeData",{field:(C=o.find(P=>P.key===c))==null?void 0:C.label,incorrectValue:f,correctValue:y,count:R.length,onConfirm:async()=>{await t.mergeMasterData(c,f,y)&&(s(),s())}})};return l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4",onClick:n,children:l.jsxs("div",{className:"popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-2xl border-2 border-green-500 flex flex-col max-h-[90vh]",onClick:R=>R.stopPropagation(),children:[l.jsx("h2",{className:"text-2xl font-bold text-center text-green-300 mb-4",children:"Manajemen Data Induk"}),l.jsxs("div",{className:"flex-grow overflow-auto space-y-4 pr-2",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Pilih Kolom Data"}),l.jsx("select",{value:c,onChange:R=>{h(R.target.value),m(""),g("")},className:"w-full select-rounded-border",children:o.map(R=>l.jsx("option",{value:R.key,children:R.label},R.key))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Nilai yang Salah (Akan Diubah)"}),l.jsxs("select",{value:f,onChange:R=>m(R.target.value),className:"w-full select-rounded-border bg-red-900/20 border-red-500",children:[l.jsx("option",{value:"",children:"Pilih nilai..."}),b.map(R=>l.jsx("option",{value:R,children:R},R))]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-2 text-gray-300",children:"Nilai yang Benar (Menjadi Tujuan)"}),l.jsxs("select",{value:y,onChange:R=>g(R.target.value),className:"w-full select-rounded-border bg-green-900/20 border-green-500",children:[l.jsx("option",{value:"",children:"Pilih nilai..."}),b.filter(R=>R!==f).map(R=>l.jsx("option",{value:R,children:R},R))]})]})]}),l.jsxs("div",{className:"flex justify-end gap-3 mt-4 pt-4 border-t border-gray-700",children:[l.jsx("button",{onClick:n,className:"px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700",children:"Tutup"}),l.jsx("button",{onClick:T,className:"px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700",children:"Gabungkan Data"})]})]})})},cv=({setActiveView:n,onEditParticipant:e,activeRecords:t})=>{var P,V,L,q,G,Y,I;const{currentUser:r,showToast:s,setCurrentUser:i,setUserRole:o,setLoginStep:c,openModal:h}=N.useContext(We),{attendanceParticipants:f,allFilterOptions:m}=Zh("","semua"),y=O0(),[g,b]=N.useState(!1),T=N.useRef(null);N.useEffect(()=>{const v=_=>{T.current&&!T.current.contains(_.target)&&b(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]);const R=v=>{v(),b(!1)},C=()=>{i(null),o(null),c("login"),s("Anda telah berhasil logout.")};return l.jsxs("div",{ref:T,className:"relative",children:[l.jsx("button",{onClick:()=>b(v=>!v),className:"p-3 bg-gray-700 rounded-lg shadow-neumorphic",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),g&&l.jsxs("div",{className:"absolute top-full right-0 mt-2 w-64 bg-gray-700 rounded-lg shadow-lg z-20 border border-gray-600 p-2 space-y-1",children:[l.jsxs("div",{className:"px-4 py-2",children:[l.jsx("p",{className:"text-sm text-gray-400",children:"Pengguna:"}),l.jsx("p",{className:"font-bold text-white truncate",children:r==null?void 0:r.nama})]}),l.jsx("div",{className:"border-t border-gray-600 my-1"}),((P=r==null?void 0:r.permissions)==null?void 0:P.daftarHadir)&&l.jsx("button",{onClick:()=>R(()=>h("attendance",{participants:f,locations:m.tc,onEditParticipant:e})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-emerald-500 hover:bg-emerald-600",children:"Daftar Hadir Peserta"}),((V=r==null?void 0:r.permissions)==null?void 0:V.tindakLanjut)&&l.jsx("button",{onClick:()=>R(()=>h("followUpDateRange",{onFetch:y.handleFetchFollowUp})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600",children:"Tindak Lanjut"}),((L=r==null?void 0:r.permissions)==null?void 0:L.hasilKerja)&&l.jsx("button",{onClick:()=>R(()=>h("trainerPerformanceDateRange",{onFetch:y.handleFetchTrainerPerformanceByDate})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600",children:"Hasil Kerja Trainer"}),((q=r==null?void 0:r.permissions)==null?void 0:q.perbaikanData)&&l.jsx("button",{onClick:()=>R(()=>h("masterData",{records:t})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-amber-500 hover:bg-amber-600",children:"Perbaikan Data"}),((G=r==null?void 0:r.permissions)==null?void 0:G.izinAkses)&&l.jsx("button",{onClick:()=>R(()=>n("izinAkses")),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-violet-500 hover:bg-violet-600",children:"Izin Akses"}),((Y=r==null?void 0:r.permissions)==null?void 0:Y.trash)&&l.jsx("button",{onClick:()=>R(()=>n("trash")),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-rose-500 hover:bg-rose-600",children:"Tong Sampah"}),((I=r==null?void 0:r.permissions)==null?void 0:I.hapusBeberapa)&&l.jsx("button",{onClick:()=>R(()=>h("bulkDeleteDateRange",{onFetch:y.handleFetchForBulkDelete})),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-red-600 hover:bg-red-700",children:"Hapus Beberapa Data"}),l.jsx("div",{className:"border-t border-gray-600 my-1"}),l.jsx("button",{onClick:()=>R(C),className:"w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-slate-500 hover:bg-slate-600",children:"Logout"})]})]})};function uv(){const{showToast:n,activityNotifications:e,setLastSaveTimestamp:t,postSaveAction:r,setPostSaveAction:s,openModal:i}=N.useContext(We),o=Dr(),[c,h]=N.useState(!1),[f,m]=N.useState(""),[y,g]=N.useState("peserta"),[b,T]=N.useState("semua"),[R,C]=N.useState([]),[P,V]=N.useState(!1),L=N.useRef(null),q=N.useRef(null),G=N.useRef(null),{allRecords:Y,activeRecords:I,deletedRecords:v,uniqueLatestRecords:_,filteredRecords:x,allFilterOptions:E,attendanceParticipants:A}=Zh(f,b),w=N.useMemo(()=>({nama:"",tgl:"",trainer:"",status:"Trainingan",tahapCeking:"",photo:null,kotaAsal:"",tanggalMasuk:"",refrensi:"",turunKeCabang:"",accYangMeluluskan:"",trainganDari:"",tanggalLulus:"",tanggalResign:"",cabang:"",evaluationResult:"",cekingResult:"",isDeleted:!1,penilaian:null}),[]),{formValues:O,setFormValues:$,recordToEdit:X,setRecordToEdit:re,nameSuggestions:se,setNameSuggestions:he,handleFormInputChange:ye,handleSuggestionClick:Ae,resetForm:ce}=V0(w,_,Y),ie=N.useCallback(Q=>{let ee={...w,...Q};Q.status.startsWith("Ceking tahap")?(ee.tahapCeking=Q.status,ee.status="Tahap Ceking",ee.cekingResult="Masih Tahap Ceking"):Q.status==="Lulus"&&(ee.status="Tahap Ceking",ee.cekingResult="Lulus"),re(Q),$(ee),h(!0),q.current&&q.current.scrollIntoView({behavior:"smooth",block:"start"}),g("peserta")},[w,$,re]);N.useEffect(()=>{const Q=ee=>{L.current&&!L.current.contains(ee.target)&&V(!1)};return document.addEventListener("mousedown",Q),()=>document.removeEventListener("mousedown",Q)},[]),N.useEffect(()=>{T("semua")},[y]),N.useEffect(()=>{const Q=new Date;Q.setHours(0,0,0,0);const _e=_.filter(ae=>ae.status==="Lulus"||ae.status.startsWith("Evaluasi")).map(ae=>{const Ve=ae.tanggalLulus||ae.tgl;if(!Ve)return null;const et=new Date(`${Ve}T00:00:00Z`);if(isNaN(et.getTime()))return null;const Et=new Date(et);if(Et.setMonth(Et.getMonth()+3),Et<=Q){let dn="Evaluasi Lanjutan";return ae.status==="Lulus"?dn="Evaluasi Reflexology":ae.status.startsWith("Evaluasi ")&&(dn=ae.status),{...ae,dueDate:Et,nextEvaluation:dn}}return null}).filter(Boolean);C(_e)},[_]);const Ze=N.useCallback(async Q=>{const ee=Q.target.files[0];if(ee){const _e=new FileReader;_e.onload=async ae=>{try{n("Mengompres gambar...");const Ve=await S0(ae.target.result);$(et=>({...et,photo:Ve})),n("Gambar berhasil dikompres!")}catch{n("Gagal mengompres gambar."),$(et=>({...et,photo:ae.target.result}))}},_e.readAsDataURL(ee)}},[n,$]),je=async Q=>{Q.preventDefault();let ee={...O};if(!X&&O.nama){const ae=I.find(Ve=>Ve.nama.toLowerCase()===O.nama.toLowerCase());if(ae){await o.addRepairRequest({existingRecord:ae,newRecordData:ee}),ce();return}}O.status==="Tahap Ceking"&&(ee.status=O.cekingResult==="Lulus"?"Lulus":O.tahapCeking||so(O.nama,I)),await o.addOrUpdateRecord(X?X.id:null,ee)&&(ce(),t(Date.now()),r==="reopenAttendance"&&(i("attendance",{participants:A,locations:E.tc,onEditParticipant:ie}),s(null)))},ut=Q=>{$(ee=>({...ee,penilaian:Q})),n("Data penilaian telah disimpan sementara. Klik 'Simpan' untuk finalisasi.")},ke=N.useMemo(()=>y==="peserta"?{label:"Lokasi TC",options:E.tc}:y==="cabang"||y==="jadwal"?{label:"Cabang",options:E.cabang}:{label:"Filter",options:[]},[y,E]),fe=()=>{switch(y){case"peserta":return l.jsx(iv,{records:x,allRecords:Y,onEdit:ie,onDelete:o.softDeleteRecord});case"cabang":return l.jsx(av,{records:x,allRecords:Y,onEdit:ie,onDelete:o.softDeleteRecord});case"izinAkses":return l.jsx(Y0,{});case"jadwal":return l.jsx(J0,{latestRecords:x,allRecords:Y,onEdit:ie,onDelete:o.softDeleteRecord});case"trash":return l.jsx(X0,{deletedRecords:v,onRestore:o.restoreRecord,onDeletePermanent:o.deleteRecordPermanent});default:return null}};return l.jsxs("div",{className:"h-screen flex flex-col bg-gray-900 text-white overflow-hidden",children:[l.jsxs("div",{className:"flex-shrink-0",children:[l.jsx("div",{ref:q,className:"p-4 pt-6 md:px-8",children:l.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-neumorphic border-2 border-purple-500 overflow-hidden",children:[l.jsxs("div",{onClick:()=>h(Q=>!Q),className:"p-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-700/50 cursor-pointer",children:[l.jsxs("div",{className:"flex items-center gap-3 self-start",children:[l.jsx("h2",{className:"text-xl font-bold text-blue-300",children:"Pendaftaran Peserta"}),l.jsx("svg",{className:`w-6 h-6 text-blue-300 transition-transform duration-300 ${c?"":"-rotate-180"}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})})]}),l.jsx("input",{type:"text",placeholder:"Cari Nama...",onClick:Q=>Q.stopPropagation(),className:"w-full sm:max-w-xs input-rounded-border",value:f,onChange:Q=>m(Q.target.value)})]}),l.jsx(sv,{isFormExpanded:c,formValues:O,handleFormInputChange:ye,handleAddOrUpdateRecord:je,resetForm:ce,fileInputRef:G,handleFileSelect:Ze,activeRecords:I,uniqueRecords:_,handleSuggestionClick:Ae,nameSuggestions:se,setNameSuggestions:he,onOpenAssessment:()=>i("assessment",{onSave:ut,initialData:O.penilaian,evaluationStatus:O.status})})]})}),l.jsx("div",{className:"p-4 md:px-8",children:l.jsxs("div",{className:"flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4",children:[l.jsx("button",{onClick:()=>g("peserta"),className:`w-full py-3 rounded-lg text-lg font-bold transition-colors ${y==="peserta"?"bg-purple-600 text-white":"bg-gray-700 text-gray-300"}`,children:"Daftar Peserta"}),l.jsx("button",{onClick:()=>g("cabang"),className:`w-full py-3 rounded-lg text-lg font-bold transition-colors ${y==="cabang"?"bg-purple-600 text-white":"bg-gray-700 text-gray-300"}`,children:"Cabang"}),l.jsx("button",{onClick:()=>g("jadwal"),className:`w-full py-3 rounded-lg text-lg font-bold transition-colors ${y==="jadwal"?"bg-purple-600 text-white":"bg-gray-700 text-gray-300"}`,children:"Jadwal Evaluasi"})]})}),(y==="peserta"||y==="cabang"||y==="jadwal")&&l.jsxs("div",{className:"px-4 md:px-8 pb-4 flex flex-wrap items-center gap-4",children:[l.jsxs("select",{value:b,onChange:Q=>T(Q.target.value),className:"select-rounded-border flex-grow",children:[l.jsxs("option",{value:"semua",children:["Tampilkan Semua ",ke.label]}),l.jsx("optgroup",{label:ke.label,children:ke.options.map(Q=>l.jsx("option",{value:Q,children:Q},Q))})]}),l.jsxs("div",{ref:L,className:"relative",children:[l.jsxs("button",{onClick:()=>V(Q=>!Q),className:"p-3 bg-gray-700 rounded-lg shadow-neumorphic",children:[l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),R.length+e.length>0&&l.jsx("span",{className:"absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white",children:R.length+e.length})]}),P&&l.jsx(F0,{evaluationNotifications:R,activityNotifications:e,onClose:()=>V(!1)})]}),l.jsx(cv,{setActiveView:g,onEditParticipant:ie,activeRecords:I})]})]}),l.jsx("div",{className:"flex-grow overflow-y-auto",children:fe()})]})}const hv=()=>{const{modal:n,closeModal:e}=N.useContext(We);if(!n.type)return null;switch(n.type){case"assessment":return l.jsx(Z0,{onClose:e,...n.props});case"attendance":return l.jsx(K0,{onClose:e,...n.props});case"followUpDateRange":return l.jsx(Ec,{onClose:e,...n.props});case"followUpDetails":return l.jsx(z0,{onClose:e,...n.props});case"trainerPerformanceDateRange":return l.jsx(Ec,{onClose:e,...n.props});case"trainerPerformanceList":return l.jsx($0,{onClose:e,...n.props});case"trainerWorkDetail":return l.jsx(q0,{onClose:e,...n.props});case"bulkDeleteDateRange":return l.jsx(U0,{onClose:e,...n.props});case"bulkDeleteData":return l.jsx(B0,{onClose:e,...n.props});case"masterData":return l.jsx(lv,{onClose:e,...n.props});case"mergeData":return l.jsx(ov,{onClose:e,...n.props});case"superAdminLogin":return l.jsx(G0,{onClose:e,...n.props});case"participantAttendanceReportDateRange":return l.jsx(W0,{onClose:e,...n.props});case"participantAttendanceReportDisplay":return l.jsx(H0,{onClose:e,...n.props});default:return null}};function dv(){const{loginStep:n,isAuthReady:e,isLoginDataReady:t,setAppUpdateAvailable:r}=N.useContext(We);return N.useEffect(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(s=>{console.log("Service Worker berhasil didaftarkan:",s),s.onupdatefound=()=>{const i=s.installing;i&&(i.onstatechange=()=>{i.state==="installed"&&navigator.serviceWorker.controller&&r(!0)})}}).catch(s=>{console.log("Pendaftaran Service Worker gagal:",s)})})},[r]),!e||!t?l.jsx(M0,{}):l.jsxs(l.Fragment,{children:[n==="login"?l.jsx(Q0,{}):l.jsx(uv,{}),l.jsx(hv,{})]})}function fv(){N.useEffect(()=>{let e=document.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",e.content="width=device-width, initial-scale=1.0",document.head.appendChild(e));let t=document.querySelector('link[rel="manifest"]');t||(t=document.createElement("link"),t.rel="manifest",t.href="/manifest.json",document.head.appendChild(t));let r=document.querySelector('meta[name="theme-color"]');r||(r=document.createElement("meta"),r.name="theme-color",r.content="#111827",document.head.appendChild(r))},[]);const n=`
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
    `;return l.jsxs(j0,{children:[l.jsx("style",{children:n}),l.jsx(dv,{})]})}
