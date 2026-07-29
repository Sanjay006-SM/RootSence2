(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Vx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xd={exports:{}},Oa={},yd={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function FE(){if(tv)return vt;tv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(B,Q,ze){this.props=B,this.context=Q,this.refs=A,this.updater=ze||y}S.prototype.isReactComponent={},S.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(B,Q,ze){this.props=B,this.context=Q,this.refs=A,this.updater=ze||y}var I=L.prototype=new x;I.constructor=L,M(I,S.prototype),I.isPureReactComponent=!0;var R=Array.isArray,P=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(B,Q,ze){var Ke,Xe={},oe=null,Te=null;if(Q!=null)for(Ke in Q.ref!==void 0&&(Te=Q.ref),Q.key!==void 0&&(oe=""+Q.key),Q)P.call(Q,Ke)&&!F.hasOwnProperty(Ke)&&(Xe[Ke]=Q[Ke]);var ve=arguments.length-2;if(ve===1)Xe.children=ze;else if(1<ve){for(var Oe=Array(ve),tt=0;tt<ve;tt++)Oe[tt]=arguments[tt+2];Xe.children=Oe}if(B&&B.defaultProps)for(Ke in ve=B.defaultProps,ve)Xe[Ke]===void 0&&(Xe[Ke]=ve[Ke]);return{$$typeof:n,type:B,key:oe,ref:Te,props:Xe,_owner:D.current}}function N(B,Q){return{$$typeof:n,type:B.type,key:Q,ref:B.ref,props:B.props,_owner:B._owner}}function V(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function z(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ze){return Q[ze]})}var j=/\/+/g;function he(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):Q.toString(36)}function ge(B,Q,ze,Ke,Xe){var oe=typeof B;(oe==="undefined"||oe==="boolean")&&(B=null);var Te=!1;if(B===null)Te=!0;else switch(oe){case"string":case"number":Te=!0;break;case"object":switch(B.$$typeof){case n:case e:Te=!0}}if(Te)return Te=B,Xe=Xe(Te),B=Ke===""?"."+he(Te,0):Ke,R(Xe)?(ze="",B!=null&&(ze=B.replace(j,"$&/")+"/"),ge(Xe,Q,ze,"",function(tt){return tt})):Xe!=null&&(V(Xe)&&(Xe=N(Xe,ze+(!Xe.key||Te&&Te.key===Xe.key?"":(""+Xe.key).replace(j,"$&/")+"/")+B)),Q.push(Xe)),1;if(Te=0,Ke=Ke===""?".":Ke+":",R(B))for(var ve=0;ve<B.length;ve++){oe=B[ve];var Oe=Ke+he(oe,ve);Te+=ge(oe,Q,ze,Oe,Xe)}else if(Oe=g(B),typeof Oe=="function")for(B=Oe.call(B),ve=0;!(oe=B.next()).done;)oe=oe.value,Oe=Ke+he(oe,ve++),Te+=ge(oe,Q,ze,Oe,Xe);else if(oe==="object")throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Te}function Z(B,Q,ze){if(B==null)return B;var Ke=[],Xe=0;return ge(B,Ke,"","",function(oe){return Q.call(ze,oe,Xe++)}),Ke}function pe(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(ze){(B._status===0||B._status===-1)&&(B._status=1,B._result=ze)},function(ze){(B._status===0||B._status===-1)&&(B._status=2,B._result=ze)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var K={current:null},G={transition:null},se={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:G,ReactCurrentOwner:D};function ae(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Z,forEach:function(B,Q,ze){Z(B,function(){Q.apply(this,arguments)},ze)},count:function(B){var Q=0;return Z(B,function(){Q++}),Q},toArray:function(B){return Z(B,function(Q){return Q})||[]},only:function(B){if(!V(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=r,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,vt.act=ae,vt.cloneElement=function(B,Q,ze){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ke=M({},B.props),Xe=B.key,oe=B.ref,Te=B._owner;if(Q!=null){if(Q.ref!==void 0&&(oe=Q.ref,Te=D.current),Q.key!==void 0&&(Xe=""+Q.key),B.type&&B.type.defaultProps)var ve=B.type.defaultProps;for(Oe in Q)P.call(Q,Oe)&&!F.hasOwnProperty(Oe)&&(Ke[Oe]=Q[Oe]===void 0&&ve!==void 0?ve[Oe]:Q[Oe])}var Oe=arguments.length-2;if(Oe===1)Ke.children=ze;else if(1<Oe){ve=Array(Oe);for(var tt=0;tt<Oe;tt++)ve[tt]=arguments[tt+2];Ke.children=ve}return{$$typeof:n,type:B.type,key:Xe,ref:oe,props:Ke,_owner:Te}},vt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},vt.createElement=T,vt.createFactory=function(B){var Q=T.bind(null,B);return Q.type=B,Q},vt.createRef=function(){return{current:null}},vt.forwardRef=function(B){return{$$typeof:f,render:B}},vt.isValidElement=V,vt.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:pe}},vt.memo=function(B,Q){return{$$typeof:h,type:B,compare:Q===void 0?null:Q}},vt.startTransition=function(B){var Q=G.transition;G.transition={};try{B()}finally{G.transition=Q}},vt.unstable_act=ae,vt.useCallback=function(B,Q){return K.current.useCallback(B,Q)},vt.useContext=function(B){return K.current.useContext(B)},vt.useDebugValue=function(){},vt.useDeferredValue=function(B){return K.current.useDeferredValue(B)},vt.useEffect=function(B,Q){return K.current.useEffect(B,Q)},vt.useId=function(){return K.current.useId()},vt.useImperativeHandle=function(B,Q,ze){return K.current.useImperativeHandle(B,Q,ze)},vt.useInsertionEffect=function(B,Q){return K.current.useInsertionEffect(B,Q)},vt.useLayoutEffect=function(B,Q){return K.current.useLayoutEffect(B,Q)},vt.useMemo=function(B,Q){return K.current.useMemo(B,Q)},vt.useReducer=function(B,Q,ze){return K.current.useReducer(B,Q,ze)},vt.useRef=function(B){return K.current.useRef(B)},vt.useState=function(B){return K.current.useState(B)},vt.useSyncExternalStore=function(B,Q,ze){return K.current.useSyncExternalStore(B,Q,ze)},vt.useTransition=function(){return K.current.useTransition()},vt.version="18.3.1",vt}var nv;function kp(){return nv||(nv=1,yd.exports=FE()),yd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function OE(){if(iv)return Oa;iv=1;var n=kp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,v={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:y,props:v,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=u,Oa.jsxs=u,Oa}var rv;function BE(){return rv||(rv=1,xd.exports=OE()),xd.exports}var et=BE(),Ue=kp();const kE=Vx(Ue);var wu={},Sd={exports:{}},jn={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function VE(){return sv||(sv=1,(function(n){function e(G,se){var ae=G.length;G.push(se);e:for(;0<ae;){var B=ae-1>>>1,Q=G[B];if(0<o(Q,se))G[B]=se,G[ae]=Q,ae=B;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var se=G[0],ae=G.pop();if(ae!==se){G[0]=ae;e:for(var B=0,Q=G.length,ze=Q>>>1;B<ze;){var Ke=2*(B+1)-1,Xe=G[Ke],oe=Ke+1,Te=G[oe];if(0>o(Xe,ae))oe<Q&&0>o(Te,Xe)?(G[B]=Te,G[oe]=ae,B=oe):(G[B]=Xe,G[Ke]=ae,B=Ke);else if(oe<Q&&0>o(Te,ae))G[B]=Te,G[oe]=ae,B=oe;else break e}}return se}function o(G,se){var ae=G.sortIndex-se.sortIndex;return ae!==0?ae:G.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,g=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(G){for(var se=t(h);se!==null;){if(se.callback===null)r(h);else if(se.startTime<=G)r(h),se.sortIndex=se.expirationTime,e(d,se);else break;se=t(h)}}function R(G){if(A=!1,I(G),!M)if(t(d)!==null)M=!0,pe(P);else{var se=t(h);se!==null&&K(R,se.startTime-G)}}function P(G,se){M=!1,A&&(A=!1,x(T),T=-1),y=!0;var ae=g;try{for(I(se),v=t(d);v!==null&&(!(v.expirationTime>se)||G&&!z());){var B=v.callback;if(typeof B=="function"){v.callback=null,g=v.priorityLevel;var Q=B(v.expirationTime<=se);se=n.unstable_now(),typeof Q=="function"?v.callback=Q:v===t(d)&&r(d),I(se)}else r(d);v=t(d)}if(v!==null)var ze=!0;else{var Ke=t(h);Ke!==null&&K(R,Ke.startTime-se),ze=!1}return ze}finally{v=null,g=ae,y=!1}}var D=!1,F=null,T=-1,N=5,V=-1;function z(){return!(n.unstable_now()-V<N)}function j(){if(F!==null){var G=n.unstable_now();V=G;var se=!0;try{se=F(!0,G)}finally{se?he():(D=!1,F=null)}}else D=!1}var he;if(typeof L=="function")he=function(){L(j)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Z=ge.port2;ge.port1.onmessage=j,he=function(){Z.postMessage(null)}}else he=function(){S(j,0)};function pe(G){F=G,D||(D=!0,he())}function K(G,se){T=S(function(){G(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,pe(P))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(G){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var ae=g;g=se;try{return G()}finally{g=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,se){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=g;g=G;try{return se()}finally{g=ae}},n.unstable_scheduleCallback=function(G,se,ae){var B=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?B+ae:B):ae=B,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,G={id:m++,callback:se,priorityLevel:G,startTime:ae,expirationTime:Q,sortIndex:-1},ae>B?(G.sortIndex=ae,e(h,G),t(d)===null&&G===t(h)&&(A?(x(T),T=-1):A=!0,K(R,ae-B))):(G.sortIndex=Q,e(d,G),M||y||(M=!0,pe(P))),G},n.unstable_shouldYield=z,n.unstable_wrapCallback=function(G){var se=g;return function(){var ae=g;g=se;try{return G.apply(this,arguments)}finally{g=ae}}}})(Ed)),Ed}var ov;function zE(){return ov||(ov=1,Md.exports=VE()),Md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function GE(){if(av)return jn;av=1;var n=kp(),e=zE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function y(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||y(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,a,c,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,L);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,L);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,L);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,s,a,c){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,c)&&(a=null),c||p===null?g(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),G=Symbol.iterator;function se(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,B;function Q(i){if(B===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);B=s&&s[1]||""}return`
`+B+i}var ze=!1;function Ke(i,s){if(!i||ze)return"";ze=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var c=ue}Reflect.construct(i,[],s)}else{try{s.call()}catch(ue){c=ue}i.call(s.prototype)}else{try{throw Error()}catch(ue){c=ue}i()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var p=ue.stack.split(`
`),_=c.stack.split(`
`),w=p.length-1,O=_.length-1;1<=w&&0<=O&&p[w]!==_[O];)O--;for(;1<=w&&0<=O;w--,O--)if(p[w]!==_[O]){if(w!==1||O!==1)do if(w--,O--,0>O||p[w]!==_[O]){var H=`
`+p[w].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=w&&0<=O);break}}}finally{ze=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?Q(i):""}function Xe(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=Ke(i.type,!1),i;case 11:return i=Ke(i.type.render,!1),i;case 1:return i=Ke(i.type,!0),i;default:return""}}function oe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case D:return"Portal";case N:return"Profiler";case T:return"StrictMode";case he:return"Suspense";case ge:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case V:return(i._context.displayName||"Context")+".Provider";case j:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Z:return s=i.displayName||null,s!==null?s:oe(i.type)||"Memo";case pe:s=i._payload,i=i._init;try{return oe(i(s))}catch{}}return null}function Te(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ve(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tt(i){var s=Oe(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Qe(i){i._valueTracker||(i._valueTracker=tt(i))}function Vt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=Oe(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function ft(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function wt(i,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function _t(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ve(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function dt(i,s){s=s.checked,s!=null&&I(i,"checked",s,!1)}function Lt(i,s){dt(i,s);var a=ve(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ot(i,s.type,a):s.hasOwnProperty("defaultValue")&&Ot(i,s.type,ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Wt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Ot(i,s,a){(s!=="number"||ft(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var Bt=Array.isArray;function At(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+ve(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function kt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function q(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:ve(a)}}function fn(i,s){var a=ve(s.value),c=ve(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function Mt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function U(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?U(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var b,W=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(b=b||document.createElement("div"),b.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=b.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function X(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xe=["Webkit","ms","Moz","O"];Object.keys(de).forEach(function(i){xe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),de[s]=de[i]})});function te(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||de.hasOwnProperty(i)&&de[i]?(""+s).trim():s+"px"}function ce(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=te(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var Se=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(i,s){if(s){if(Se[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Me(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var me=null;function Re(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Pe=null,Fe=null,k=null;function Ee(i){if(i=Ma(i)){if(typeof Pe!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Vl(s),Pe(i.stateNode,i.type,s))}}function fe(i){Fe?k?k.push(i):k=[i]:Fe=i}function Ce(){if(Fe){var i=Fe,s=k;if(k=Fe=null,Ee(i),s)for(i=0;i<s.length;i++)Ee(s[i])}}function Le(i,s){return i(s)}function ye(){}var ke=!1;function Ve(i,s,a){if(ke)return i(s,a);ke=!0;try{return Le(i,s,a)}finally{ke=!1,(Fe!==null||k!==null)&&(ye(),Ce())}}function Rt(i,s){var a=i.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Pt=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Pt=!1}function ai(i,s,a,c,p,_,w,O,H){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(a,ue)}catch(Ae){this.onError(Ae)}}var is=!1,zs=null,rs=!1,ss=null,zc={onError:function(i){is=!0,zs=i}};function Ml(i,s,a,c,p,_,w,O,H){is=!1,zs=null,ai.apply(zc,arguments)}function El(i,s,a,c,p,_,w,O,H){if(Ml.apply(this,arguments),is){if(is){var ue=zs;is=!1,zs=null}else throw Error(t(198));rs||(rs=!0,ss=ue)}}function On(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Gs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function na(i){if(On(i)!==i)throw Error(t(188))}function Tl(i){var s=i.alternate;if(!s){if(s=On(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return na(p),i;if(_===c)return na(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var w=!1,O=p.child;O;){if(O===a){w=!0,a=p,c=_;break}if(O===c){w=!0,c=p,a=_;break}O=O.sibling}if(!w){for(O=_.child;O;){if(O===a){w=!0,a=_,c=p;break}if(O===c){w=!0,c=_,a=p;break}O=O.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function os(i){return i=Tl(i),i!==null?ia(i):null}function ia(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ia(i);if(s!==null)return s;i=i.sibling}return null}var as=e.unstable_scheduleCallback,ra=e.unstable_cancelCallback,wl=e.unstable_shouldYield,Gc=e.unstable_requestPaint,Zt=e.unstable_now,Hc=e.unstable_getCurrentPriorityLevel,sa=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,le=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,Ne=null;function We(i){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(ne,i,void 0,(i.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:lt,$e=Math.log,nt=Math.LN2;function lt(i){return i>>>=0,i===0?32:31-($e(i)/nt|0)|0}var ut=64,Ze=4194304;function Et(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function zt(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,w=a&268435455;if(w!==0){var O=w&~p;O!==0?c=Et(O):(_&=w,_!==0&&(c=Et(_)))}else w=a&~p,w!==0?c=Et(w):_!==0&&(c=Et(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-Ie(s),p=1<<a,c|=i[a],s&=~p;return c}function $t(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-Ie(_),O=1<<w,H=p[w];H===-1?((O&a)===0||(O&c)!==0)&&(p[w]=$t(O,s)):H<=s&&(i.expiredLanes|=O),_&=~O}}function an(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ge(){var i=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),i}function yn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function pt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ie(s),i[s]=a}function Hn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-Ie(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function Wn(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-Ie(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var gt=0;function Ji(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Dt,Xt,Si,Nt,Mi,Oi=!1,ls=[],Mr=null,Er=null,Tr=null,oa=new Map,aa=new Map,wr=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(i,s){switch(i){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":oa.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(s.pointerId)}}function la(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Ma(s),s!==null&&Xt(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function sM(i,s,a,c,p){switch(s){case"focusin":return Mr=la(Mr,i,s,a,c,p),!0;case"dragenter":return Er=la(Er,i,s,a,c,p),!0;case"mouseover":return Tr=la(Tr,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return oa.set(_,la(oa.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,aa.set(_,la(aa.get(_)||null,i,s,a,c,p)),!0}return!1}function km(i){var s=us(i.target);if(s!==null){var a=On(s);if(a!==null){if(s=a.tag,s===13){if(s=Gs(a),s!==null){i.blockedOn=s,Mi(i.priority,function(){Si(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Al(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=Xc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);me=c,a.target.dispatchEvent(c),me=null}else return s=Ma(a),s!==null&&Xt(s),i.blockedOn=a,!1;s.shift()}return!0}function Vm(i,s,a){Al(i)&&a.delete(s)}function oM(){Oi=!1,Mr!==null&&Al(Mr)&&(Mr=null),Er!==null&&Al(Er)&&(Er=null),Tr!==null&&Al(Tr)&&(Tr=null),oa.forEach(Vm),aa.forEach(Vm)}function ua(i,s){i.blockedOn===s&&(i.blockedOn=null,Oi||(Oi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oM)))}function ca(i){function s(p){return ua(p,i)}if(0<ls.length){ua(ls[0],i);for(var a=1;a<ls.length;a++){var c=ls[a];c.blockedOn===i&&(c.blockedOn=null)}}for(Mr!==null&&ua(Mr,i),Er!==null&&ua(Er,i),Tr!==null&&ua(Tr,i),oa.forEach(s),aa.forEach(s),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)km(a),a.blockedOn===null&&wr.shift()}var Hs=R.ReactCurrentBatchConfig,Cl=!0;function aM(i,s,a,c){var p=gt,_=Hs.transition;Hs.transition=null;try{gt=1,Wc(i,s,a,c)}finally{gt=p,Hs.transition=_}}function lM(i,s,a,c){var p=gt,_=Hs.transition;Hs.transition=null;try{gt=4,Wc(i,s,a,c)}finally{gt=p,Hs.transition=_}}function Wc(i,s,a,c){if(Cl){var p=Xc(i,s,a,c);if(p===null)uf(i,s,c,Rl,a),Bm(i,c);else if(sM(p,i,s,a,c))c.stopPropagation();else if(Bm(i,c),s&4&&-1<rM.indexOf(i)){for(;p!==null;){var _=Ma(p);if(_!==null&&Dt(_),_=Xc(i,s,a,c),_===null&&uf(i,s,c,Rl,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else uf(i,s,c,null,a)}}var Rl=null;function Xc(i,s,a,c){if(Rl=null,i=Re(c),i=us(i),i!==null)if(s=On(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Gs(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Rl=i,null}function zm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case sa:return 1;case C:return 4;case $:case le:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Ar=null,Yc=null,bl=null;function Gm(){if(bl)return bl;var i,s=Yc,a=s.length,c,p="value"in Ar?Ar.value:Ar.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var w=a-i;for(c=1;c<=w&&s[a-c]===p[_-c];c++);return bl=p.slice(i,1<c?1-c:void 0)}function Pl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Dl(){return!0}function Hm(){return!1}function Qn(i){function s(a,c,p,_,w){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(a=i[O],this[O]=a?a(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Dl:Hm,this.isPropagationStopped=Hm,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),s}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=Qn(Ws),fa=ae({},Ws,{view:0,detail:0}),uM=Qn(fa),Kc,$c,da,Ll=ae({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==da&&(da&&i.type==="mousemove"?(Kc=i.screenX-da.screenX,$c=i.screenY-da.screenY):$c=Kc=0,da=i),Kc)},movementY:function(i){return"movementY"in i?i.movementY:$c}}),Wm=Qn(Ll),cM=ae({},Ll,{dataTransfer:0}),fM=Qn(cM),dM=ae({},fa,{relatedTarget:0}),jc=Qn(dM),hM=ae({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),pM=Qn(hM),mM=ae({},Ws,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),gM=Qn(mM),vM=ae({},Ws,{data:0}),Xm=Qn(vM),_M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=yM[i])?!!s[i]:!1}function Zc(){return SM}var MM=ae({},fa,{key:function(i){if(i.key){var s=_M[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Pl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?xM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(i){return i.type==="keypress"?Pl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Pl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),EM=Qn(MM),TM=ae({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Qn(TM),wM=ae({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),AM=Qn(wM),CM=ae({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),RM=Qn(CM),bM=ae({},Ll,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Qn(bM),DM=[9,13,27,32],Qc=f&&"CompositionEvent"in window,ha=null;f&&"documentMode"in document&&(ha=document.documentMode);var LM=f&&"TextEvent"in window&&!ha,qm=f&&(!Qc||ha&&8<ha&&11>=ha),Km=" ",$m=!1;function jm(i,s){switch(i){case"keyup":return DM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Xs=!1;function IM(i,s){switch(i){case"compositionend":return Zm(s);case"keypress":return s.which!==32?null:($m=!0,Km);case"textInput":return i=s.data,i===Km&&$m?null:i;default:return null}}function NM(i,s){if(Xs)return i==="compositionend"||!Qc&&jm(i,s)?(i=Gm(),bl=Yc=Ar=null,Xs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return qm&&s.locale!=="ko"?null:s.data;default:return null}}var UM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!UM[i.type]:s==="textarea"}function Jm(i,s,a,c){fe(c),s=Ol(s,"onChange"),0<s.length&&(a=new qc("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var pa=null,ma=null;function FM(i){vg(i,0)}function Il(i){var s=js(i);if(Vt(s))return i}function OM(i,s){if(i==="change")return s}var eg=!1;if(f){var Jc;if(f){var ef="oninput"in document;if(!ef){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),ef=typeof tg.oninput=="function"}Jc=ef}else Jc=!1;eg=Jc&&(!document.documentMode||9<document.documentMode)}function ng(){pa&&(pa.detachEvent("onpropertychange",ig),ma=pa=null)}function ig(i){if(i.propertyName==="value"&&Il(ma)){var s=[];Jm(s,ma,i,Re(i)),Ve(FM,s)}}function BM(i,s,a){i==="focusin"?(ng(),pa=s,ma=a,pa.attachEvent("onpropertychange",ig)):i==="focusout"&&ng()}function kM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Il(ma)}function VM(i,s){if(i==="click")return Il(s)}function zM(i,s){if(i==="input"||i==="change")return Il(s)}function GM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ei=typeof Object.is=="function"?Object.is:GM;function ga(i,s){if(Ei(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!Ei(i[p],s[p]))return!1}return!0}function rg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function sg(i,s){var a=rg(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rg(a)}}function og(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?og(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function ag(){for(var i=window,s=ft();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=ft(i.document)}return s}function tf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function HM(i){var s=ag(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&og(a.ownerDocument.documentElement,a)){if(c!==null&&tf(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=sg(a,_);var w=sg(a,c);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var WM=f&&"documentMode"in document&&11>=document.documentMode,Ys=null,nf=null,va=null,rf=!1;function lg(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rf||Ys==null||Ys!==ft(c)||(c=Ys,"selectionStart"in c&&tf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&ga(va,c)||(va=c,c=Ol(nf,"onSelect"),0<c.length&&(s=new qc("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=Ys)))}function Nl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var qs={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},sf={},ug={};f&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ul(i){if(sf[i])return sf[i];if(!qs[i])return i;var s=qs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in ug)return sf[i]=s[a];return i}var cg=Ul("animationend"),fg=Ul("animationiteration"),dg=Ul("animationstart"),hg=Ul("transitionend"),pg=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(i,s){pg.set(i,s),l(s,[i])}for(var of=0;of<mg.length;of++){var af=mg[of],XM=af.toLowerCase(),YM=af[0].toUpperCase()+af.slice(1);Cr(XM,"on"+YM)}Cr(cg,"onAnimationEnd"),Cr(fg,"onAnimationIteration"),Cr(dg,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(hg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qM=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function gg(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,El(c,s,void 0,i),i.currentTarget=null}function vg(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var w=c.length-1;0<=w;w--){var O=c[w],H=O.instance,ue=O.currentTarget;if(O=O.listener,H!==_&&p.isPropagationStopped())break e;gg(p,O,ue),_=H}else for(w=0;w<c.length;w++){if(O=c[w],H=O.instance,ue=O.currentTarget,O=O.listener,H!==_&&p.isPropagationStopped())break e;gg(p,O,ue),_=H}}}if(rs)throw i=ss,rs=!1,ss=null,i}function Yt(i,s){var a=s[mf];a===void 0&&(a=s[mf]=new Set);var c=i+"__bubble";a.has(c)||(_g(s,i,2,!1),a.add(c))}function lf(i,s,a){var c=0;s&&(c|=4),_g(a,i,c,s)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function xa(i){if(!i[Fl]){i[Fl]=!0,r.forEach(function(a){a!=="selectionchange"&&(qM.has(a)||lf(a,!1,i),lf(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Fl]||(s[Fl]=!0,lf("selectionchange",!1,s))}}function _g(i,s,a,c){switch(zm(s)){case 1:var p=aM;break;case 4:p=lM;break;default:p=Wc}a=p.bind(null,s,a,i),p=void 0,!Pt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function uf(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var O=c.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;w=w.return}for(;O!==null;){if(w=us(O),w===null)return;if(H=w.tag,H===5||H===6){c=_=w;continue e}O=O.parentNode}}c=c.return}Ve(function(){var ue=_,Ae=Re(a),be=[];e:{var we=pg.get(i);if(we!==void 0){var He=qc,qe=i;switch(i){case"keypress":if(Pl(a)===0)break e;case"keydown":case"keyup":He=EM;break;case"focusin":qe="focus",He=jc;break;case"focusout":qe="blur",He=jc;break;case"beforeblur":case"afterblur":He=jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=fM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=AM;break;case cg:case fg:case dg:He=pM;break;case hg:He=RM;break;case"scroll":He=uM;break;case"wheel":He=PM;break;case"copy":case"cut":case"paste":He=gM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Ym}var je=(s&4)!==0,sn=!je&&i==="scroll",ee=je?we!==null?we+"Capture":null:we;je=[];for(var Y=ue,re;Y!==null;){re=Y;var De=re.stateNode;if(re.tag===5&&De!==null&&(re=De,ee!==null&&(De=Rt(Y,ee),De!=null&&je.push(ya(Y,De,re)))),sn)break;Y=Y.return}0<je.length&&(we=new He(we,qe,null,a,Ae),be.push({event:we,listeners:je}))}}if((s&7)===0){e:{if(we=i==="mouseover"||i==="pointerover",He=i==="mouseout"||i==="pointerout",we&&a!==me&&(qe=a.relatedTarget||a.fromElement)&&(us(qe)||qe[er]))break e;if((He||we)&&(we=Ae.window===Ae?Ae:(we=Ae.ownerDocument)?we.defaultView||we.parentWindow:window,He?(qe=a.relatedTarget||a.toElement,He=ue,qe=qe?us(qe):null,qe!==null&&(sn=On(qe),qe!==sn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(He=null,qe=ue),He!==qe)){if(je=Wm,De="onMouseLeave",ee="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(je=Ym,De="onPointerLeave",ee="onPointerEnter",Y="pointer"),sn=He==null?we:js(He),re=qe==null?we:js(qe),we=new je(De,Y+"leave",He,a,Ae),we.target=sn,we.relatedTarget=re,De=null,us(Ae)===ue&&(je=new je(ee,Y+"enter",qe,a,Ae),je.target=re,je.relatedTarget=sn,De=je),sn=De,He&&qe)t:{for(je=He,ee=qe,Y=0,re=je;re;re=Ks(re))Y++;for(re=0,De=ee;De;De=Ks(De))re++;for(;0<Y-re;)je=Ks(je),Y--;for(;0<re-Y;)ee=Ks(ee),re--;for(;Y--;){if(je===ee||ee!==null&&je===ee.alternate)break t;je=Ks(je),ee=Ks(ee)}je=null}else je=null;He!==null&&xg(be,we,He,je,!1),qe!==null&&sn!==null&&xg(be,sn,qe,je,!0)}}e:{if(we=ue?js(ue):window,He=we.nodeName&&we.nodeName.toLowerCase(),He==="select"||He==="input"&&we.type==="file")var Je=OM;else if(Qm(we))if(eg)Je=zM;else{Je=kM;var it=BM}else(He=we.nodeName)&&He.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(Je=VM);if(Je&&(Je=Je(i,ue))){Jm(be,Je,a,Ae);break e}it&&it(i,we,ue),i==="focusout"&&(it=we._wrapperState)&&it.controlled&&we.type==="number"&&Ot(we,"number",we.value)}switch(it=ue?js(ue):window,i){case"focusin":(Qm(it)||it.contentEditable==="true")&&(Ys=it,nf=ue,va=null);break;case"focusout":va=nf=Ys=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,lg(be,a,Ae);break;case"selectionchange":if(WM)break;case"keydown":case"keyup":lg(be,a,Ae)}var rt;if(Qc)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Xs?jm(i,a)&&(at="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(qm&&a.locale!=="ko"&&(Xs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Xs&&(rt=Gm()):(Ar=Ae,Yc="value"in Ar?Ar.value:Ar.textContent,Xs=!0)),it=Ol(ue,at),0<it.length&&(at=new Xm(at,i,null,a,Ae),be.push({event:at,listeners:it}),rt?at.data=rt:(rt=Zm(a),rt!==null&&(at.data=rt)))),(rt=LM?IM(i,a):NM(i,a))&&(ue=Ol(ue,"onBeforeInput"),0<ue.length&&(Ae=new Xm("onBeforeInput","beforeinput",null,a,Ae),be.push({event:Ae,listeners:ue}),Ae.data=rt))}vg(be,s)})}function ya(i,s,a){return{instance:i,listener:s,currentTarget:a}}function Ol(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Rt(i,a),_!=null&&c.unshift(ya(i,_,p)),_=Rt(i,s),_!=null&&c.push(ya(i,_,p))),i=i.return}return c}function Ks(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function xg(i,s,a,c,p){for(var _=s._reactName,w=[];a!==null&&a!==c;){var O=a,H=O.alternate,ue=O.stateNode;if(H!==null&&H===c)break;O.tag===5&&ue!==null&&(O=ue,p?(H=Rt(a,_),H!=null&&w.unshift(ya(a,H,O))):p||(H=Rt(a,_),H!=null&&w.push(ya(a,H,O)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var KM=/\r\n?/g,$M=/\u0000|\uFFFD/g;function yg(i){return(typeof i=="string"?i:""+i).replace(KM,`
`).replace($M,"")}function Bl(i,s,a){if(s=yg(s),yg(i)!==s&&a)throw Error(t(425))}function kl(){}var cf=null,ff=null;function df(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,jM=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,ZM=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(i){return Sg.resolve(null).then(i).catch(QM)}:hf;function QM(i){setTimeout(function(){throw i})}function pf(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),ca(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);ca(s)}function Rr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Mg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Bi="__reactFiber$"+$s,Sa="__reactProps$"+$s,er="__reactContainer$"+$s,mf="__reactEvents$"+$s,JM="__reactListeners$"+$s,eE="__reactHandles$"+$s;function us(i){var s=i[Bi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[er]||a[Bi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Mg(i);i!==null;){if(a=i[Bi])return a;i=Mg(i)}return s}i=a,a=i.parentNode}return null}function Ma(i){return i=i[Bi]||i[er],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Vl(i){return i[Sa]||null}var gf=[],Zs=-1;function br(i){return{current:i}}function qt(i){0>Zs||(i.current=gf[Zs],gf[Zs]=null,Zs--)}function Gt(i,s){Zs++,gf[Zs]=i.current,i.current=s}var Pr={},An=br(Pr),Xn=br(!1),cs=Pr;function Qs(i,s){var a=i.type.contextTypes;if(!a)return Pr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(i){return i=i.childContextTypes,i!=null}function zl(){qt(Xn),qt(An)}function Eg(i,s,a){if(An.current!==Pr)throw Error(t(168));Gt(An,s),Gt(Xn,a)}function Tg(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,Te(i)||"Unknown",p));return ae({},a,c)}function Gl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Pr,cs=An.current,Gt(An,i),Gt(Xn,Xn.current),!0}function wg(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=Tg(i,s,cs),c.__reactInternalMemoizedMergedChildContext=i,qt(Xn),qt(An),Gt(An,i)):qt(Xn),Gt(Xn,a)}var tr=null,Hl=!1,vf=!1;function Ag(i){tr===null?tr=[i]:tr.push(i)}function tE(i){Hl=!0,Ag(i)}function Dr(){if(!vf&&tr!==null){vf=!0;var i=0,s=gt;try{var a=tr;for(gt=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}tr=null,Hl=!1}catch(p){throw tr!==null&&(tr=tr.slice(i+1)),as(sa,Dr),p}finally{gt=s,vf=!1}}return null}var Js=[],eo=0,Wl=null,Xl=0,li=[],ui=0,fs=null,nr=1,ir="";function ds(i,s){Js[eo++]=Xl,Js[eo++]=Wl,Wl=i,Xl=s}function Cg(i,s,a){li[ui++]=nr,li[ui++]=ir,li[ui++]=fs,fs=i;var c=nr;i=ir;var p=32-Ie(c)-1;c&=~(1<<p),a+=1;var _=32-Ie(s)+p;if(30<_){var w=p-p%5;_=(c&(1<<w)-1).toString(32),c>>=w,p-=w,nr=1<<32-Ie(s)+p|a<<p|c,ir=_+i}else nr=1<<_|a<<p|c,ir=i}function _f(i){i.return!==null&&(ds(i,1),Cg(i,1,0))}function xf(i){for(;i===Wl;)Wl=Js[--eo],Js[eo]=null,Xl=Js[--eo],Js[eo]=null;for(;i===fs;)fs=li[--ui],li[ui]=null,ir=li[--ui],li[ui]=null,nr=li[--ui],li[ui]=null}var Jn=null,ei=null,jt=!1,Ti=null;function Rg(i,s){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function bg(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Jn=i,ei=Rr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Jn=i,ei=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=fs!==null?{id:nr,overflow:ir}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Jn=i,ei=null,!0):!1;default:return!1}}function yf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Sf(i){if(jt){var s=ei;if(s){var a=s;if(!bg(i,s)){if(yf(i))throw Error(t(418));s=Rr(a.nextSibling);var c=Jn;s&&bg(i,s)?Rg(c,a):(i.flags=i.flags&-4097|2,jt=!1,Jn=i)}}else{if(yf(i))throw Error(t(418));i.flags=i.flags&-4097|2,jt=!1,Jn=i}}}function Pg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Jn=i}function Yl(i){if(i!==Jn)return!1;if(!jt)return Pg(i),jt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!df(i.type,i.memoizedProps)),s&&(s=ei)){if(yf(i))throw Dg(),Error(t(418));for(;s;)Rg(i,s),s=Rr(s.nextSibling)}if(Pg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){ei=Rr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}ei=null}}else ei=Jn?Rr(i.stateNode.nextSibling):null;return!0}function Dg(){for(var i=ei;i;)i=Rr(i.nextSibling)}function to(){ei=Jn=null,jt=!1}function Mf(i){Ti===null?Ti=[i]:Ti.push(i)}var nE=R.ReactCurrentBatchConfig;function Ea(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var O=p.refs;w===null?delete O[_]:O[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function ql(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lg(i){var s=i._init;return s(i._payload)}function Ig(i){function s(ee,Y){if(i){var re=ee.deletions;re===null?(ee.deletions=[Y],ee.flags|=16):re.push(Y)}}function a(ee,Y){if(!i)return null;for(;Y!==null;)s(ee,Y),Y=Y.sibling;return null}function c(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function p(ee,Y){return ee=kr(ee,Y),ee.index=0,ee.sibling=null,ee}function _(ee,Y,re){return ee.index=re,i?(re=ee.alternate,re!==null?(re=re.index,re<Y?(ee.flags|=2,Y):re):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function w(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function O(ee,Y,re,De){return Y===null||Y.tag!==6?(Y=hd(re,ee.mode,De),Y.return=ee,Y):(Y=p(Y,re),Y.return=ee,Y)}function H(ee,Y,re,De){var Je=re.type;return Je===F?Ae(ee,Y,re.props.children,De,re.key):Y!==null&&(Y.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===pe&&Lg(Je)===Y.type)?(De=p(Y,re.props),De.ref=Ea(ee,Y,re),De.return=ee,De):(De=vu(re.type,re.key,re.props,null,ee.mode,De),De.ref=Ea(ee,Y,re),De.return=ee,De)}function ue(ee,Y,re,De){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==re.containerInfo||Y.stateNode.implementation!==re.implementation?(Y=pd(re,ee.mode,De),Y.return=ee,Y):(Y=p(Y,re.children||[]),Y.return=ee,Y)}function Ae(ee,Y,re,De,Je){return Y===null||Y.tag!==7?(Y=ys(re,ee.mode,De,Je),Y.return=ee,Y):(Y=p(Y,re),Y.return=ee,Y)}function be(ee,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=hd(""+Y,ee.mode,re),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:return re=vu(Y.type,Y.key,Y.props,null,ee.mode,re),re.ref=Ea(ee,null,Y),re.return=ee,re;case D:return Y=pd(Y,ee.mode,re),Y.return=ee,Y;case pe:var De=Y._init;return be(ee,De(Y._payload),re)}if(Bt(Y)||se(Y))return Y=ys(Y,ee.mode,re,null),Y.return=ee,Y;ql(ee,Y)}return null}function we(ee,Y,re,De){var Je=Y!==null?Y.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Je!==null?null:O(ee,Y,""+re,De);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case P:return re.key===Je?H(ee,Y,re,De):null;case D:return re.key===Je?ue(ee,Y,re,De):null;case pe:return Je=re._init,we(ee,Y,Je(re._payload),De)}if(Bt(re)||se(re))return Je!==null?null:Ae(ee,Y,re,De,null);ql(ee,re)}return null}function He(ee,Y,re,De,Je){if(typeof De=="string"&&De!==""||typeof De=="number")return ee=ee.get(re)||null,O(Y,ee,""+De,Je);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case P:return ee=ee.get(De.key===null?re:De.key)||null,H(Y,ee,De,Je);case D:return ee=ee.get(De.key===null?re:De.key)||null,ue(Y,ee,De,Je);case pe:var it=De._init;return He(ee,Y,re,it(De._payload),Je)}if(Bt(De)||se(De))return ee=ee.get(re)||null,Ae(Y,ee,De,Je,null);ql(Y,De)}return null}function qe(ee,Y,re,De){for(var Je=null,it=null,rt=Y,at=Y=0,_n=null;rt!==null&&at<re.length;at++){rt.index>at?(_n=rt,rt=null):_n=rt.sibling;var bt=we(ee,rt,re[at],De);if(bt===null){rt===null&&(rt=_n);break}i&&rt&&bt.alternate===null&&s(ee,rt),Y=_(bt,Y,at),it===null?Je=bt:it.sibling=bt,it=bt,rt=_n}if(at===re.length)return a(ee,rt),jt&&ds(ee,at),Je;if(rt===null){for(;at<re.length;at++)rt=be(ee,re[at],De),rt!==null&&(Y=_(rt,Y,at),it===null?Je=rt:it.sibling=rt,it=rt);return jt&&ds(ee,at),Je}for(rt=c(ee,rt);at<re.length;at++)_n=He(rt,ee,at,re[at],De),_n!==null&&(i&&_n.alternate!==null&&rt.delete(_n.key===null?at:_n.key),Y=_(_n,Y,at),it===null?Je=_n:it.sibling=_n,it=_n);return i&&rt.forEach(function(Vr){return s(ee,Vr)}),jt&&ds(ee,at),Je}function je(ee,Y,re,De){var Je=se(re);if(typeof Je!="function")throw Error(t(150));if(re=Je.call(re),re==null)throw Error(t(151));for(var it=Je=null,rt=Y,at=Y=0,_n=null,bt=re.next();rt!==null&&!bt.done;at++,bt=re.next()){rt.index>at?(_n=rt,rt=null):_n=rt.sibling;var Vr=we(ee,rt,bt.value,De);if(Vr===null){rt===null&&(rt=_n);break}i&&rt&&Vr.alternate===null&&s(ee,rt),Y=_(Vr,Y,at),it===null?Je=Vr:it.sibling=Vr,it=Vr,rt=_n}if(bt.done)return a(ee,rt),jt&&ds(ee,at),Je;if(rt===null){for(;!bt.done;at++,bt=re.next())bt=be(ee,bt.value,De),bt!==null&&(Y=_(bt,Y,at),it===null?Je=bt:it.sibling=bt,it=bt);return jt&&ds(ee,at),Je}for(rt=c(ee,rt);!bt.done;at++,bt=re.next())bt=He(rt,ee,at,bt.value,De),bt!==null&&(i&&bt.alternate!==null&&rt.delete(bt.key===null?at:bt.key),Y=_(bt,Y,at),it===null?Je=bt:it.sibling=bt,it=bt);return i&&rt.forEach(function(UE){return s(ee,UE)}),jt&&ds(ee,at),Je}function sn(ee,Y,re,De){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case P:e:{for(var Je=re.key,it=Y;it!==null;){if(it.key===Je){if(Je=re.type,Je===F){if(it.tag===7){a(ee,it.sibling),Y=p(it,re.props.children),Y.return=ee,ee=Y;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===pe&&Lg(Je)===it.type){a(ee,it.sibling),Y=p(it,re.props),Y.ref=Ea(ee,it,re),Y.return=ee,ee=Y;break e}a(ee,it);break}else s(ee,it);it=it.sibling}re.type===F?(Y=ys(re.props.children,ee.mode,De,re.key),Y.return=ee,ee=Y):(De=vu(re.type,re.key,re.props,null,ee.mode,De),De.ref=Ea(ee,Y,re),De.return=ee,ee=De)}return w(ee);case D:e:{for(it=re.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===re.containerInfo&&Y.stateNode.implementation===re.implementation){a(ee,Y.sibling),Y=p(Y,re.children||[]),Y.return=ee,ee=Y;break e}else{a(ee,Y);break}else s(ee,Y);Y=Y.sibling}Y=pd(re,ee.mode,De),Y.return=ee,ee=Y}return w(ee);case pe:return it=re._init,sn(ee,Y,it(re._payload),De)}if(Bt(re))return qe(ee,Y,re,De);if(se(re))return je(ee,Y,re,De);ql(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Y=p(Y,re),Y.return=ee,ee=Y):(a(ee,Y),Y=hd(re,ee.mode,De),Y.return=ee,ee=Y),w(ee)):a(ee,Y)}return sn}var no=Ig(!0),Ng=Ig(!1),Kl=br(null),$l=null,io=null,Ef=null;function Tf(){Ef=io=$l=null}function wf(i){var s=Kl.current;qt(Kl),i._currentValue=s}function Af(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function ro(i,s){$l=i,Ef=io=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(qn=!0),i.firstContext=null)}function ci(i){var s=i._currentValue;if(Ef!==i)if(i={context:i,memoizedValue:s,next:null},io===null){if($l===null)throw Error(t(308));io=i,$l.dependencies={lanes:0,firstContext:i}}else io=io.next=i;return s}var hs=null;function Cf(i){hs===null?hs=[i]:hs.push(i)}function Ug(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,Cf(s)):(a.next=p.next,p.next=a),s.interleaved=a,rr(i,c)}function rr(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Lr=!1;function Rf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function sr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ir(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,rr(i,a)}return p=c.interleaved,p===null?(s.next=s,Cf(c)):(s.next=p.next,p.next=s),c.interleaved=s,rr(i,a)}function jl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Wn(i,a)}}function Og(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=w:_=_.next=w,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Zl(i,s,a,c){var p=i.updateQueue;Lr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var H=O,ue=H.next;H.next=null,w===null?_=ue:w.next=ue,w=H;var Ae=i.alternate;Ae!==null&&(Ae=Ae.updateQueue,O=Ae.lastBaseUpdate,O!==w&&(O===null?Ae.firstBaseUpdate=ue:O.next=ue,Ae.lastBaseUpdate=H))}if(_!==null){var be=p.baseState;w=0,Ae=ue=H=null,O=_;do{var we=O.lane,He=O.eventTime;if((c&we)===we){Ae!==null&&(Ae=Ae.next={eventTime:He,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var qe=i,je=O;switch(we=s,He=a,je.tag){case 1:if(qe=je.payload,typeof qe=="function"){be=qe.call(He,be,we);break e}be=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=je.payload,we=typeof qe=="function"?qe.call(He,be,we):qe,we==null)break e;be=ae({},be,we);break e;case 2:Lr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,we=p.effects,we===null?p.effects=[O]:we.push(O))}else He={eventTime:He,lane:we,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Ae===null?(ue=Ae=He,H=be):Ae=Ae.next=He,w|=we;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;we=O,O=we.next,we.next=null,p.lastBaseUpdate=we,p.shared.pending=null}}while(!0);if(Ae===null&&(H=be),p.baseState=H,p.firstBaseUpdate=ue,p.lastBaseUpdate=Ae,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);gs|=w,i.lanes=w,i.memoizedState=be}}function Bg(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ta={},ki=br(Ta),wa=br(Ta),Aa=br(Ta);function ps(i){if(i===Ta)throw Error(t(174));return i}function bf(i,s){switch(Gt(Aa,s),Gt(wa,i),Gt(ki,Ta),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}qt(ki),Gt(ki,s)}function so(){qt(ki),qt(wa),qt(Aa)}function kg(i){ps(Aa.current);var s=ps(ki.current),a=E(s,i.type);s!==a&&(Gt(wa,i),Gt(ki,a))}function Pf(i){wa.current===i&&(qt(ki),qt(wa))}var Qt=br(0);function Ql(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Df=[];function Lf(){for(var i=0;i<Df.length;i++)Df[i]._workInProgressVersionPrimary=null;Df.length=0}var Jl=R.ReactCurrentDispatcher,If=R.ReactCurrentBatchConfig,ms=0,Jt=null,dn=null,gn=null,eu=!1,Ca=!1,Ra=0,iE=0;function Cn(){throw Error(t(321))}function Nf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!Ei(i[a],s[a]))return!1;return!0}function Uf(i,s,a,c,p,_){if(ms=_,Jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Jl.current=i===null||i.memoizedState===null?aE:lE,i=a(c,p),Ca){_=0;do{if(Ca=!1,Ra=0,25<=_)throw Error(t(301));_+=1,gn=dn=null,s.updateQueue=null,Jl.current=uE,i=a(c,p)}while(Ca)}if(Jl.current=iu,s=dn!==null&&dn.next!==null,ms=0,gn=dn=Jt=null,eu=!1,s)throw Error(t(300));return i}function Ff(){var i=Ra!==0;return Ra=0,i}function Vi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Jt.memoizedState=gn=i:gn=gn.next=i,gn}function fi(){if(dn===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=dn.next;var s=gn===null?Jt.memoizedState:gn.next;if(s!==null)gn=s,dn=i;else{if(i===null)throw Error(t(310));dn=i,i={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},gn===null?Jt.memoizedState=gn=i:gn=gn.next=i}return gn}function ba(i,s){return typeof s=="function"?s(i):s}function Of(i){var s=fi(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=dn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var O=w=null,H=null,ue=_;do{var Ae=ue.lane;if((ms&Ae)===Ae)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:i(c,ue.action);else{var be={lane:Ae,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(O=H=be,w=c):H=H.next=be,Jt.lanes|=Ae,gs|=Ae}ue=ue.next}while(ue!==null&&ue!==_);H===null?w=c:H.next=O,Ei(c,s.memoizedState)||(qn=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=H,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Jt.lanes|=_,gs|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Bf(i){var s=fi(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Ei(_,s.memoizedState)||(qn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function Vg(){}function zg(i,s){var a=Jt,c=fi(),p=s(),_=!Ei(c.memoizedState,p);if(_&&(c.memoizedState=p,qn=!0),c=c.queue,kf(Wg.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||gn!==null&&gn.memoizedState.tag&1){if(a.flags|=2048,Pa(9,Hg.bind(null,a,c,p,s),void 0,null),vn===null)throw Error(t(349));(ms&30)!==0||Gg(a,s,p)}return p}function Gg(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Hg(i,s,a,c){s.value=a,s.getSnapshot=c,Xg(s)&&Yg(i)}function Wg(i,s,a){return a(function(){Xg(s)&&Yg(i)})}function Xg(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!Ei(i,a)}catch{return!0}}function Yg(i){var s=rr(i,1);s!==null&&Ri(s,i,1,-1)}function qg(i){var s=Vi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:i},s.queue=i,i=i.dispatch=oE.bind(null,Jt,i),[s.memoizedState,i]}function Pa(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function Kg(){return fi().memoizedState}function tu(i,s,a,c){var p=Vi();Jt.flags|=i,p.memoizedState=Pa(1|s,a,void 0,c===void 0?null:c)}function nu(i,s,a,c){var p=fi();c=c===void 0?null:c;var _=void 0;if(dn!==null){var w=dn.memoizedState;if(_=w.destroy,c!==null&&Nf(c,w.deps)){p.memoizedState=Pa(s,a,_,c);return}}Jt.flags|=i,p.memoizedState=Pa(1|s,a,_,c)}function $g(i,s){return tu(8390656,8,i,s)}function kf(i,s){return nu(2048,8,i,s)}function jg(i,s){return nu(4,2,i,s)}function Zg(i,s){return nu(4,4,i,s)}function Qg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Jg(i,s,a){return a=a!=null?a.concat([i]):null,nu(4,4,Qg.bind(null,s,i),a)}function Vf(){}function e0(i,s){var a=fi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Nf(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function t0(i,s){var a=fi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Nf(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function n0(i,s,a){return(ms&21)===0?(i.baseState&&(i.baseState=!1,qn=!0),i.memoizedState=a):(Ei(a,s)||(a=Ge(),Jt.lanes|=a,gs|=a,i.baseState=!0),s)}function rE(i,s){var a=gt;gt=a!==0&&4>a?a:4,i(!0);var c=If.transition;If.transition={};try{i(!1),s()}finally{gt=a,If.transition=c}}function i0(){return fi().memoizedState}function sE(i,s,a){var c=Or(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},r0(i))s0(s,a);else if(a=Ug(i,s,a,c),a!==null){var p=kn();Ri(a,i,c,p),o0(a,s,c)}}function oE(i,s,a){var c=Or(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(r0(i))s0(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,O=_(w,a);if(p.hasEagerState=!0,p.eagerState=O,Ei(O,w)){var H=s.interleaved;H===null?(p.next=p,Cf(s)):(p.next=H.next,H.next=p),s.interleaved=p;return}}catch{}finally{}a=Ug(i,s,p,c),a!==null&&(p=kn(),Ri(a,i,c,p),o0(a,s,c))}}function r0(i){var s=i.alternate;return i===Jt||s!==null&&s===Jt}function s0(i,s){Ca=eu=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function o0(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Wn(i,a)}}var iu={readContext:ci,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},aE={readContext:ci,useCallback:function(i,s){return Vi().memoizedState=[i,s===void 0?null:s],i},useContext:ci,useEffect:$g,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,tu(4194308,4,Qg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return tu(4194308,4,i,s)},useInsertionEffect:function(i,s){return tu(4,2,i,s)},useMemo:function(i,s){var a=Vi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=Vi();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=sE.bind(null,Jt,i),[c.memoizedState,i]},useRef:function(i){var s=Vi();return i={current:i},s.memoizedState=i},useState:qg,useDebugValue:Vf,useDeferredValue:function(i){return Vi().memoizedState=i},useTransition:function(){var i=qg(!1),s=i[0];return i=rE.bind(null,i[1]),Vi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=Jt,p=Vi();if(jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),vn===null)throw Error(t(349));(ms&30)!==0||Gg(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,$g(Wg.bind(null,c,_,i),[i]),c.flags|=2048,Pa(9,Hg.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=Vi(),s=vn.identifierPrefix;if(jt){var a=ir,c=nr;a=(c&~(1<<32-Ie(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ra++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=iE++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},lE={readContext:ci,useCallback:e0,useContext:ci,useEffect:kf,useImperativeHandle:Jg,useInsertionEffect:jg,useLayoutEffect:Zg,useMemo:t0,useReducer:Of,useRef:Kg,useState:function(){return Of(ba)},useDebugValue:Vf,useDeferredValue:function(i){var s=fi();return n0(s,dn.memoizedState,i)},useTransition:function(){var i=Of(ba)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Vg,useSyncExternalStore:zg,useId:i0,unstable_isNewReconciler:!1},uE={readContext:ci,useCallback:e0,useContext:ci,useEffect:kf,useImperativeHandle:Jg,useInsertionEffect:jg,useLayoutEffect:Zg,useMemo:t0,useReducer:Bf,useRef:Kg,useState:function(){return Bf(ba)},useDebugValue:Vf,useDeferredValue:function(i){var s=fi();return dn===null?s.memoizedState=i:n0(s,dn.memoizedState,i)},useTransition:function(){var i=Bf(ba)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Vg,useSyncExternalStore:zg,useId:i0,unstable_isNewReconciler:!1};function wi(i,s){if(i&&i.defaultProps){s=ae({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function zf(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:ae({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var ru={isMounted:function(i){return(i=i._reactInternals)?On(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=kn(),p=Or(i),_=sr(c,p);_.payload=s,a!=null&&(_.callback=a),s=Ir(i,_,p),s!==null&&(Ri(s,i,p,c),jl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=kn(),p=Or(i),_=sr(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Ir(i,_,p),s!==null&&(Ri(s,i,p,c),jl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=kn(),c=Or(i),p=sr(a,c);p.tag=2,s!=null&&(p.callback=s),s=Ir(i,p,c),s!==null&&(Ri(s,i,c,a),jl(s,i,c))}};function a0(i,s,a,c,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,w):s.prototype&&s.prototype.isPureReactComponent?!ga(a,c)||!ga(p,_):!0}function l0(i,s,a){var c=!1,p=Pr,_=s.contextType;return typeof _=="object"&&_!==null?_=ci(_):(p=Yn(s)?cs:An.current,c=s.contextTypes,_=(c=c!=null)?Qs(i,p):Pr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ru,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function u0(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&ru.enqueueReplaceState(s,s.state,null)}function Gf(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Rf(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ci(_):(_=Yn(s)?cs:An.current,p.context=Qs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(zf(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&ru.enqueueReplaceState(p,p.state,null),Zl(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function oo(i,s){try{var a="",c=s;do a+=Xe(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Hf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function Wf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var cE=typeof WeakMap=="function"?WeakMap:Map;function c0(i,s,a){a=sr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){fu||(fu=!0,sd=c),Wf(i,s)},a}function f0(i,s,a){a=sr(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){Wf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Wf(i,s),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function d0(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new cE;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=TE.bind(null,i,s,a),s.then(i,i))}function h0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function p0(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=sr(-1,1),s.tag=2,Ir(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var fE=R.ReactCurrentOwner,qn=!1;function Bn(i,s,a,c){s.child=i===null?Ng(s,null,a,c):no(s,i.child,a,c)}function m0(i,s,a,c,p){a=a.render;var _=s.ref;return ro(s,p),c=Uf(i,s,a,c,_,p),a=Ff(),i!==null&&!qn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,or(i,s,p)):(jt&&a&&_f(s),s.flags|=1,Bn(i,s,c,p),s.child)}function g0(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!dd(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,v0(i,s,_,c,p)):(i=vu(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(w,c)&&i.ref===s.ref)return or(i,s,p)}return s.flags|=1,i=kr(_,c),i.ref=s.ref,i.return=s,s.child=i}function v0(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if(ga(_,c)&&i.ref===s.ref)if(qn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(qn=!0);else return s.lanes=i.lanes,or(i,s,p)}return Xf(i,s,a,c,p)}function _0(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(lo,ti),ti|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(lo,ti),ti|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Gt(lo,ti),ti|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,Gt(lo,ti),ti|=c;return Bn(i,s,p,a),s.child}function x0(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Xf(i,s,a,c,p){var _=Yn(a)?cs:An.current;return _=Qs(s,_),ro(s,p),a=Uf(i,s,a,c,_,p),c=Ff(),i!==null&&!qn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,or(i,s,p)):(jt&&c&&_f(s),s.flags|=1,Bn(i,s,a,p),s.child)}function y0(i,s,a,c,p){if(Yn(a)){var _=!0;Gl(s)}else _=!1;if(ro(s,p),s.stateNode===null)ou(i,s),l0(s,a,c),Gf(s,a,c,p),c=!0;else if(i===null){var w=s.stateNode,O=s.memoizedProps;w.props=O;var H=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ci(ue):(ue=Yn(a)?cs:An.current,ue=Qs(s,ue));var Ae=a.getDerivedStateFromProps,be=typeof Ae=="function"||typeof w.getSnapshotBeforeUpdate=="function";be||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==c||H!==ue)&&u0(s,w,c,ue),Lr=!1;var we=s.memoizedState;w.state=we,Zl(s,c,w,p),H=s.memoizedState,O!==c||we!==H||Xn.current||Lr?(typeof Ae=="function"&&(zf(s,a,Ae,c),H=s.memoizedState),(O=Lr||a0(s,a,O,c,we,H,ue))?(be||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=H),w.props=c,w.state=H,w.context=ue,c=O):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Fg(i,s),O=s.memoizedProps,ue=s.type===s.elementType?O:wi(s.type,O),w.props=ue,be=s.pendingProps,we=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=ci(H):(H=Yn(a)?cs:An.current,H=Qs(s,H));var He=a.getDerivedStateFromProps;(Ae=typeof He=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==be||we!==H)&&u0(s,w,c,H),Lr=!1,we=s.memoizedState,w.state=we,Zl(s,c,w,p);var qe=s.memoizedState;O!==be||we!==qe||Xn.current||Lr?(typeof He=="function"&&(zf(s,a,He,c),qe=s.memoizedState),(ue=Lr||a0(s,a,ue,c,we,qe,H)||!1)?(Ae||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,qe,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,qe,H)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&we===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&we===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=qe),w.props=c,w.state=qe,w.context=H,c=ue):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&we===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&we===i.memoizedState||(s.flags|=1024),c=!1)}return Yf(i,s,a,c,_,p)}function Yf(i,s,a,c,p,_){x0(i,s);var w=(s.flags&128)!==0;if(!c&&!w)return p&&wg(s,a,!1),or(i,s,_);c=s.stateNode,fE.current=s;var O=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&w?(s.child=no(s,i.child,null,_),s.child=no(s,null,O,_)):Bn(i,s,O,_),s.memoizedState=c.state,p&&wg(s,a,!0),s.child}function S0(i){var s=i.stateNode;s.pendingContext?Eg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Eg(i,s.context,!1),bf(i,s.containerInfo)}function M0(i,s,a,c,p){return to(),Mf(p),s.flags|=256,Bn(i,s,a,c),s.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Kf(i){return{baseLanes:i,cachePool:null,transitions:null}}function E0(i,s,a){var c=s.pendingProps,p=Qt.current,_=!1,w=(s.flags&128)!==0,O;if((O=w)||(O=i!==null&&i.memoizedState===null?!1:(p&2)!==0),O?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Gt(Qt,p&1),i===null)return Sf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,i=c.fallback,_?(c=s.mode,_=s.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=_u(w,c,0,null),i=ys(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Kf(a),s.memoizedState=qf,i):$f(s,w));if(p=i.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return dE(i,s,w,c,O,p,a);if(_){_=c.fallback,w=s.mode,p=i.child,O=p.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=H,s.deletions=null):(c=kr(p,H),c.subtreeFlags=p.subtreeFlags&14680064),O!==null?_=kr(O,_):(_=ys(_,w,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,w=i.child.memoizedState,w=w===null?Kf(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~a,s.memoizedState=qf,c}return _=i.child,i=_.sibling,c=kr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function $f(i,s){return s=_u({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function su(i,s,a,c){return c!==null&&Mf(c),no(s,i.child,null,a),i=$f(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function dE(i,s,a,c,p,_,w){if(a)return s.flags&256?(s.flags&=-257,c=Hf(Error(t(422))),su(i,s,w,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=_u({mode:"visible",children:c.children},p,0,null),_=ys(_,p,w,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&no(s,i.child,null,w),s.child.memoizedState=Kf(w),s.memoizedState=qf,_);if((s.mode&1)===0)return su(i,s,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var O=c.dgst;return c=O,_=Error(t(419)),c=Hf(_,c,void 0),su(i,s,w,c)}if(O=(w&i.childLanes)!==0,qn||O){if(c=vn,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,rr(i,p),Ri(c,i,p,-1))}return fd(),c=Hf(Error(t(421))),su(i,s,w,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=wE.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,ei=Rr(p.nextSibling),Jn=s,jt=!0,Ti=null,i!==null&&(li[ui++]=nr,li[ui++]=ir,li[ui++]=fs,nr=i.id,ir=i.overflow,fs=s),s=$f(s,c.children),s.flags|=4096,s)}function T0(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Af(i.return,s,a)}function jf(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function w0(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Bn(i,s,c.children,a),c=Qt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&T0(i,a,s);else if(i.tag===19)T0(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Gt(Qt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Ql(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),jf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ql(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}jf(s,!0,a,null,_);break;case"together":jf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ou(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function or(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),gs|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=kr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=kr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function hE(i,s,a){switch(s.tag){case 3:S0(s),to();break;case 5:kg(s);break;case 1:Yn(s.type)&&Gl(s);break;case 4:bf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Gt(Kl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Qt,Qt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?E0(i,s,a):(Gt(Qt,Qt.current&1),i=or(i,s,a),i!==null?i.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return w0(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Qt,Qt.current),c)break;return null;case 22:case 23:return s.lanes=0,_0(i,s,a)}return or(i,s,a)}var A0,Zf,C0,R0;A0=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zf=function(){},C0=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,ps(ki.current);var _=null;switch(a){case"input":p=wt(i,p),c=wt(i,c),_=[];break;case"select":p=ae({},p,{value:void 0}),c=ae({},c,{value:void 0}),_=[];break;case"textarea":p=kt(i,p),c=kt(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=kl)}_e(a,c);var w;a=null;for(ue in p)if(!c.hasOwnProperty(ue)&&p.hasOwnProperty(ue)&&p[ue]!=null)if(ue==="style"){var O=p[ue];for(w in O)O.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?_||(_=[]):(_=_||[]).push(ue,null));for(ue in c){var H=c[ue];if(O=p!=null?p[ue]:void 0,c.hasOwnProperty(ue)&&H!==O&&(H!=null||O!=null))if(ue==="style")if(O){for(w in O)!O.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&O[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(_||(_=[]),_.push(ue,a)),a=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(_=_||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Yt("scroll",i),_||O===H||(_=[])):(_=_||[]).push(ue,H))}a&&(_=_||[]).push("style",a);var ue=_;(s.updateQueue=ue)&&(s.flags|=4)}},R0=function(i,s,a,c){a!==c&&(s.flags|=4)};function Da(i,s){if(!jt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Rn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function pE(i,s,a){var c=s.pendingProps;switch(xf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Yn(s.type)&&zl(),Rn(s),null;case 3:return c=s.stateNode,so(),qt(Xn),qt(An),Lf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Yl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ti!==null&&(ld(Ti),Ti=null))),Zf(i,s),Rn(s),null;case 5:Pf(s);var p=ps(Aa.current);if(a=s.type,i!==null&&s.stateNode!=null)C0(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(i=ps(ki.current),Yl(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[Bi]=s,c[Sa]=_,i=(s.mode&1)!==0,a){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(p=0;p<_a.length;p++)Yt(_a[p],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":_t(c,_),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Yt("invalid",c);break;case"textarea":q(c,_),Yt("invalid",c)}_e(a,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var O=_[w];w==="children"?typeof O=="string"?c.textContent!==O&&(_.suppressHydrationWarning!==!0&&Bl(c.textContent,O,i),p=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Bl(c.textContent,O,i),p=["children",""+O]):o.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Yt("scroll",c)}switch(a){case"input":Qe(c),Wt(c,_,!0);break;case"textarea":Qe(c),Mt(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=kl)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=U(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=w.createElement(a,{is:c.is}):(i=w.createElement(a),a==="select"&&(w=i,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):i=w.createElementNS(i,a),i[Bi]=s,i[Sa]=c,A0(i,s,!1,!1),s.stateNode=i;e:{switch(w=Me(a,c),a){case"dialog":Yt("cancel",i),Yt("close",i),p=c;break;case"iframe":case"object":case"embed":Yt("load",i),p=c;break;case"video":case"audio":for(p=0;p<_a.length;p++)Yt(_a[p],i);p=c;break;case"source":Yt("error",i),p=c;break;case"img":case"image":case"link":Yt("error",i),Yt("load",i),p=c;break;case"details":Yt("toggle",i),p=c;break;case"input":_t(i,c),p=wt(i,c),Yt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=ae({},c,{value:void 0}),Yt("invalid",i);break;case"textarea":q(i,c),p=kt(i,c),Yt("invalid",i);break;default:p=c}_e(a,p),O=p;for(_ in O)if(O.hasOwnProperty(_)){var H=O[_];_==="style"?ce(i,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&W(i,H)):_==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&X(i,H):typeof H=="number"&&X(i,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Yt("scroll",i):H!=null&&I(i,_,H,w))}switch(a){case"input":Qe(i),Wt(i,c,!1);break;case"textarea":Qe(i),Mt(i);break;case"option":c.value!=null&&i.setAttribute("value",""+ve(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?At(i,!!c.multiple,_,!1):c.defaultValue!=null&&At(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(i&&s.stateNode!=null)R0(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ps(Aa.current),ps(ki.current),Yl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Bi]=s,(_=c.nodeValue!==a)&&(i=Jn,i!==null))switch(i.tag){case 3:Bl(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Bl(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bi]=s,s.stateNode=c}return Rn(s),null;case 13:if(qt(Qt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(jt&&ei!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Dg(),to(),s.flags|=98560,_=!1;else if(_=Yl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Bi]=s}else to(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),_=!1}else Ti!==null&&(ld(Ti),Ti=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Qt.current&1)!==0?hn===0&&(hn=3):fd())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return so(),Zf(i,s),i===null&&xa(s.stateNode.containerInfo),Rn(s),null;case 10:return wf(s.type._context),Rn(s),null;case 17:return Yn(s.type)&&zl(),Rn(s),null;case 19:if(qt(Qt),_=s.memoizedState,_===null)return Rn(s),null;if(c=(s.flags&128)!==0,w=_.rendering,w===null)if(c)Da(_,!1);else{if(hn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Ql(i),w!==null){for(s.flags|=128,Da(_,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Gt(Qt,Qt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Zt()>uo&&(s.flags|=128,c=!0,Da(_,!1),s.lanes=4194304)}else{if(!c)if(i=Ql(w),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!jt)return Rn(s),null}else 2*Zt()-_.renderingStartTime>uo&&a!==1073741824&&(s.flags|=128,c=!0,Da(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(a=_.last,a!==null?a.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Zt(),s.sibling=null,a=Qt.current,Gt(Qt,c?a&1|2:a&1),s):(Rn(s),null);case 22:case 23:return cd(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(ti&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function mE(i,s){switch(xf(s),s.tag){case 1:return Yn(s.type)&&zl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return so(),qt(Xn),qt(An),Lf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Pf(s),null;case 13:if(qt(Qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));to()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return qt(Qt),null;case 4:return so(),null;case 10:return wf(s.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var au=!1,bn=!1,gE=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ao(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tn(i,s,c)}else a.current=null}function Qf(i,s,a){try{a()}catch(c){tn(i,s,c)}}var b0=!1;function vE(i,s){if(cf=Cl,i=ag(),tf(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var w=0,O=-1,H=-1,ue=0,Ae=0,be=i,we=null;t:for(;;){for(var He;be!==a||p!==0&&be.nodeType!==3||(O=w+p),be!==_||c!==0&&be.nodeType!==3||(H=w+c),be.nodeType===3&&(w+=be.nodeValue.length),(He=be.firstChild)!==null;)we=be,be=He;for(;;){if(be===i)break t;if(we===a&&++ue===p&&(O=w),we===_&&++Ae===c&&(H=w),(He=be.nextSibling)!==null)break;be=we,we=be.parentNode}be=He}a=O===-1||H===-1?null:{start:O,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ff={focusedElem:i,selectionRange:a},Cl=!1,Ye=s;Ye!==null;)if(s=Ye,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ye=i;else for(;Ye!==null;){s=Ye;try{var qe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var je=qe.memoizedProps,sn=qe.memoizedState,ee=s.stateNode,Y=ee.getSnapshotBeforeUpdate(s.elementType===s.type?je:wi(s.type,je),sn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){tn(s,s.return,De)}if(i=s.sibling,i!==null){i.return=s.return,Ye=i;break}Ye=s.return}return qe=b0,b0=!1,qe}function La(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Qf(s,a,_)}p=p.next}while(p!==c)}}function lu(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Jf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function P0(i){var s=i.alternate;s!==null&&(i.alternate=null,P0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Bi],delete s[Sa],delete s[mf],delete s[JM],delete s[eE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function D0(i){return i.tag===5||i.tag===3||i.tag===4}function L0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||D0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ed(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=kl));else if(c!==4&&(i=i.child,i!==null))for(ed(i,s,a),i=i.sibling;i!==null;)ed(i,s,a),i=i.sibling}function td(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(td(i,s,a),i=i.sibling;i!==null;)td(i,s,a),i=i.sibling}var Sn=null,Ai=!1;function Nr(i,s,a){for(a=a.child;a!==null;)I0(i,s,a),a=a.sibling}function I0(i,s,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:bn||ao(a,s);case 6:var c=Sn,p=Ai;Sn=null,Nr(i,s,a),Sn=c,Ai=p,Sn!==null&&(Ai?(i=Sn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):Sn.removeChild(a.stateNode));break;case 18:Sn!==null&&(Ai?(i=Sn,a=a.stateNode,i.nodeType===8?pf(i.parentNode,a):i.nodeType===1&&pf(i,a),ca(i)):pf(Sn,a.stateNode));break;case 4:c=Sn,p=Ai,Sn=a.stateNode.containerInfo,Ai=!0,Nr(i,s,a),Sn=c,Ai=p;break;case 0:case 11:case 14:case 15:if(!bn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Qf(a,s,w),p=p.next}while(p!==c)}Nr(i,s,a);break;case 1:if(!bn&&(ao(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){tn(a,s,O)}Nr(i,s,a);break;case 21:Nr(i,s,a);break;case 22:a.mode&1?(bn=(c=bn)||a.memoizedState!==null,Nr(i,s,a),bn=c):Nr(i,s,a);break;default:Nr(i,s,a)}}function N0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new gE),s.forEach(function(c){var p=AE.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function Ci(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,w=s,O=w;e:for(;O!==null;){switch(O.tag){case 5:Sn=O.stateNode,Ai=!1;break e;case 3:Sn=O.stateNode.containerInfo,Ai=!0;break e;case 4:Sn=O.stateNode.containerInfo,Ai=!0;break e}O=O.return}if(Sn===null)throw Error(t(160));I0(_,w,p),Sn=null,Ai=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(ue){tn(p,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)U0(s,i),s=s.sibling}function U0(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ci(s,i),zi(i),c&4){try{La(3,i,i.return),lu(3,i)}catch(je){tn(i,i.return,je)}try{La(5,i,i.return)}catch(je){tn(i,i.return,je)}}break;case 1:Ci(s,i),zi(i),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Ci(s,i),zi(i),c&512&&a!==null&&ao(a,a.return),i.flags&32){var p=i.stateNode;try{X(p,"")}catch(je){tn(i,i.return,je)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=a!==null?a.memoizedProps:_,O=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&dt(p,_),Me(O,w);var ue=Me(O,_);for(w=0;w<H.length;w+=2){var Ae=H[w],be=H[w+1];Ae==="style"?ce(p,be):Ae==="dangerouslySetInnerHTML"?W(p,be):Ae==="children"?X(p,be):I(p,Ae,be,ue)}switch(O){case"input":Lt(p,_);break;case"textarea":fn(p,_);break;case"select":var we=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?At(p,!!_.multiple,He,!1):we!==!!_.multiple&&(_.defaultValue!=null?At(p,!!_.multiple,_.defaultValue,!0):At(p,!!_.multiple,_.multiple?[]:"",!1))}p[Sa]=_}catch(je){tn(i,i.return,je)}}break;case 6:if(Ci(s,i),zi(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(je){tn(i,i.return,je)}}break;case 3:if(Ci(s,i),zi(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(s.containerInfo)}catch(je){tn(i,i.return,je)}break;case 4:Ci(s,i),zi(i);break;case 13:Ci(s,i),zi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(rd=Zt())),c&4&&N0(i);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,i.mode&1?(bn=(ue=bn)||Ae,Ci(s,i),bn=ue):Ci(s,i),zi(i),c&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!Ae&&(i.mode&1)!==0)for(Ye=i,Ae=i.child;Ae!==null;){for(be=Ye=Ae;Ye!==null;){switch(we=Ye,He=we.child,we.tag){case 0:case 11:case 14:case 15:La(4,we,we.return);break;case 1:ao(we,we.return);var qe=we.stateNode;if(typeof qe.componentWillUnmount=="function"){c=we,a=we.return;try{s=c,qe.props=s.memoizedProps,qe.state=s.memoizedState,qe.componentWillUnmount()}catch(je){tn(c,a,je)}}break;case 5:ao(we,we.return);break;case 22:if(we.memoizedState!==null){B0(be);continue}}He!==null?(He.return=we,Ye=He):B0(be)}Ae=Ae.sibling}e:for(Ae=null,be=i;;){if(be.tag===5){if(Ae===null){Ae=be;try{p=be.stateNode,ue?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=be.stateNode,H=be.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=te("display",w))}catch(je){tn(i,i.return,je)}}}else if(be.tag===6){if(Ae===null)try{be.stateNode.nodeValue=ue?"":be.memoizedProps}catch(je){tn(i,i.return,je)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===i)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===i)break e;for(;be.sibling===null;){if(be.return===null||be.return===i)break e;Ae===be&&(Ae=null),be=be.return}Ae===be&&(Ae=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Ci(s,i),zi(i),c&4&&N0(i);break;case 21:break;default:Ci(s,i),zi(i)}}function zi(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(D0(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(X(p,""),c.flags&=-33);var _=L0(i);td(i,_,p);break;case 3:case 4:var w=c.stateNode.containerInfo,O=L0(i);ed(i,O,w);break;default:throw Error(t(161))}}catch(H){tn(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function _E(i,s,a){Ye=i,F0(i)}function F0(i,s,a){for(var c=(i.mode&1)!==0;Ye!==null;){var p=Ye,_=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||au;if(!w){var O=p.alternate,H=O!==null&&O.memoizedState!==null||bn;O=au;var ue=bn;if(au=w,(bn=H)&&!ue)for(Ye=p;Ye!==null;)w=Ye,H=w.child,w.tag===22&&w.memoizedState!==null?k0(p):H!==null?(H.return=w,Ye=H):k0(p);for(;_!==null;)Ye=_,F0(_),_=_.sibling;Ye=p,au=O,bn=ue}O0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ye=_):O0(i)}}function O0(i){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:bn||lu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!bn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:wi(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Bg(s,_,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Bg(s,w,a)}break;case 5:var O=s.stateNode;if(a===null&&s.flags&4){a=O;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var Ae=ue.memoizedState;if(Ae!==null){var be=Ae.dehydrated;be!==null&&ca(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||s.flags&512&&Jf(s)}catch(we){tn(s,s.return,we)}}if(s===i){Ye=null;break}if(a=s.sibling,a!==null){a.return=s.return,Ye=a;break}Ye=s.return}}function B0(i){for(;Ye!==null;){var s=Ye;if(s===i){Ye=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Ye=a;break}Ye=s.return}}function k0(i){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{lu(4,s)}catch(H){tn(s,a,H)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(H){tn(s,p,H)}}var _=s.return;try{Jf(s)}catch(H){tn(s,_,H)}break;case 5:var w=s.return;try{Jf(s)}catch(H){tn(s,w,H)}}}catch(H){tn(s,s.return,H)}if(s===i){Ye=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Ye=O;break}Ye=s.return}}var xE=Math.ceil,uu=R.ReactCurrentDispatcher,nd=R.ReactCurrentOwner,di=R.ReactCurrentBatchConfig,Ct=0,vn=null,ln=null,Mn=0,ti=0,lo=br(0),hn=0,Ia=null,gs=0,cu=0,id=0,Na=null,Kn=null,rd=0,uo=1/0,ar=null,fu=!1,sd=null,Ur=null,du=!1,Fr=null,hu=0,Ua=0,od=null,pu=-1,mu=0;function kn(){return(Ct&6)!==0?Zt():pu!==-1?pu:pu=Zt()}function Or(i){return(i.mode&1)===0?1:(Ct&2)!==0&&Mn!==0?Mn&-Mn:nE.transition!==null?(mu===0&&(mu=Ge()),mu):(i=gt,i!==0||(i=window.event,i=i===void 0?16:zm(i.type)),i)}function Ri(i,s,a,c){if(50<Ua)throw Ua=0,od=null,Error(t(185));pt(i,a,c),((Ct&2)===0||i!==vn)&&(i===vn&&((Ct&2)===0&&(cu|=a),hn===4&&Br(i,Mn)),$n(i,c),a===1&&Ct===0&&(s.mode&1)===0&&(uo=Zt()+500,Hl&&Dr()))}function $n(i,s){var a=i.callbackNode;It(i,s);var c=zt(i,i===vn?Mn:0);if(c===0)a!==null&&ra(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&ra(a),s===1)i.tag===0?tE(z0.bind(null,i)):Ag(z0.bind(null,i)),ZM(function(){(Ct&6)===0&&Dr()}),a=null;else{switch(Ji(c)){case 1:a=sa;break;case 4:a=C;break;case 16:a=$;break;case 536870912:a=ie;break;default:a=$}a=$0(a,V0.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function V0(i,s){if(pu=-1,mu=0,(Ct&6)!==0)throw Error(t(327));var a=i.callbackNode;if(co()&&i.callbackNode!==a)return null;var c=zt(i,i===vn?Mn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=gu(i,c);else{s=c;var p=Ct;Ct|=2;var _=H0();(vn!==i||Mn!==s)&&(ar=null,uo=Zt()+500,_s(i,s));do try{ME();break}catch(O){G0(i,O)}while(!0);Tf(),uu.current=_,Ct=p,ln!==null?s=0:(vn=null,Mn=0,s=hn)}if(s!==0){if(s===2&&(p=an(i),p!==0&&(c=p,s=ad(i,p))),s===1)throw a=Ia,_s(i,0),Br(i,c),$n(i,Zt()),a;if(s===6)Br(i,c);else{if(p=i.current.alternate,(c&30)===0&&!yE(p)&&(s=gu(i,c),s===2&&(_=an(i),_!==0&&(c=_,s=ad(i,_))),s===1))throw a=Ia,_s(i,0),Br(i,c),$n(i,Zt()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:xs(i,Kn,ar);break;case 3:if(Br(i,c),(c&130023424)===c&&(s=rd+500-Zt(),10<s)){if(zt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){kn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=hf(xs.bind(null,i,Kn,ar),s);break}xs(i,Kn,ar);break;case 4:if(Br(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var w=31-Ie(c);_=1<<w,w=s[w],w>p&&(p=w),c&=~_}if(c=p,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*xE(c/1960))-c,10<c){i.timeoutHandle=hf(xs.bind(null,i,Kn,ar),c);break}xs(i,Kn,ar);break;case 5:xs(i,Kn,ar);break;default:throw Error(t(329))}}}return $n(i,Zt()),i.callbackNode===a?V0.bind(null,i):null}function ad(i,s){var a=Na;return i.current.memoizedState.isDehydrated&&(_s(i,s).flags|=256),i=gu(i,s),i!==2&&(s=Kn,Kn=a,s!==null&&ld(s)),i}function ld(i){Kn===null?Kn=i:Kn.push.apply(Kn,i)}function yE(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!Ei(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Br(i,s){for(s&=~id,s&=~cu,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Ie(s),c=1<<a;i[a]=-1,s&=~c}}function z0(i){if((Ct&6)!==0)throw Error(t(327));co();var s=zt(i,0);if((s&1)===0)return $n(i,Zt()),null;var a=gu(i,s);if(i.tag!==0&&a===2){var c=an(i);c!==0&&(s=c,a=ad(i,c))}if(a===1)throw a=Ia,_s(i,0),Br(i,s),$n(i,Zt()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,xs(i,Kn,ar),$n(i,Zt()),null}function ud(i,s){var a=Ct;Ct|=1;try{return i(s)}finally{Ct=a,Ct===0&&(uo=Zt()+500,Hl&&Dr())}}function vs(i){Fr!==null&&Fr.tag===0&&(Ct&6)===0&&co();var s=Ct;Ct|=1;var a=di.transition,c=gt;try{if(di.transition=null,gt=1,i)return i()}finally{gt=c,di.transition=a,Ct=s,(Ct&6)===0&&Dr()}}function cd(){ti=lo.current,qt(lo)}function _s(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,jM(a)),ln!==null)for(a=ln.return;a!==null;){var c=a;switch(xf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:so(),qt(Xn),qt(An),Lf();break;case 5:Pf(c);break;case 4:so();break;case 13:qt(Qt);break;case 19:qt(Qt);break;case 10:wf(c.type._context);break;case 22:case 23:cd()}a=a.return}if(vn=i,ln=i=kr(i.current,null),Mn=ti=s,hn=0,Ia=null,id=cu=gs=0,Kn=Na=null,hs!==null){for(s=0;s<hs.length;s++)if(a=hs[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var w=_.next;_.next=p,c.next=w}a.pending=c}hs=null}return i}function G0(i,s){do{var a=ln;try{if(Tf(),Jl.current=iu,eu){for(var c=Jt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}eu=!1}if(ms=0,gn=dn=Jt=null,Ca=!1,Ra=0,nd.current=null,a===null||a.return===null){hn=1,Ia=s,ln=null;break}e:{var _=i,w=a.return,O=a,H=s;if(s=Mn,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,Ae=O,be=Ae.tag;if((Ae.mode&1)===0&&(be===0||be===11||be===15)){var we=Ae.alternate;we?(Ae.updateQueue=we.updateQueue,Ae.memoizedState=we.memoizedState,Ae.lanes=we.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var He=h0(w);if(He!==null){He.flags&=-257,p0(He,w,O,_,s),He.mode&1&&d0(_,ue,s),s=He,H=ue;var qe=s.updateQueue;if(qe===null){var je=new Set;je.add(H),s.updateQueue=je}else qe.add(H);break e}else{if((s&1)===0){d0(_,ue,s),fd();break e}H=Error(t(426))}}else if(jt&&O.mode&1){var sn=h0(w);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),p0(sn,w,O,_,s),Mf(oo(H,O));break e}}_=H=oo(H,O),hn!==4&&(hn=2),Na===null?Na=[_]:Na.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ee=c0(_,H,s);Og(_,ee);break e;case 1:O=H;var Y=_.type,re=_.stateNode;if((_.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Ur===null||!Ur.has(re)))){_.flags|=65536,s&=-s,_.lanes|=s;var De=f0(_,O,s);Og(_,De);break e}}_=_.return}while(_!==null)}X0(a)}catch(Je){s=Je,ln===a&&a!==null&&(ln=a=a.return);continue}break}while(!0)}function H0(){var i=uu.current;return uu.current=iu,i===null?iu:i}function fd(){(hn===0||hn===3||hn===2)&&(hn=4),vn===null||(gs&268435455)===0&&(cu&268435455)===0||Br(vn,Mn)}function gu(i,s){var a=Ct;Ct|=2;var c=H0();(vn!==i||Mn!==s)&&(ar=null,_s(i,s));do try{SE();break}catch(p){G0(i,p)}while(!0);if(Tf(),Ct=a,uu.current=c,ln!==null)throw Error(t(261));return vn=null,Mn=0,hn}function SE(){for(;ln!==null;)W0(ln)}function ME(){for(;ln!==null&&!wl();)W0(ln)}function W0(i){var s=K0(i.alternate,i,ti);i.memoizedProps=i.pendingProps,s===null?X0(i):ln=s,nd.current=null}function X0(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=pE(a,s,ti),a!==null){ln=a;return}}else{if(a=mE(a,s),a!==null){a.flags&=32767,ln=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{hn=6,ln=null;return}}if(s=s.sibling,s!==null){ln=s;return}ln=s=i}while(s!==null);hn===0&&(hn=5)}function xs(i,s,a){var c=gt,p=di.transition;try{di.transition=null,gt=1,EE(i,s,a,c)}finally{di.transition=p,gt=c}return null}function EE(i,s,a,c){do co();while(Fr!==null);if((Ct&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Hn(i,_),i===vn&&(ln=vn=null,Mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,$0($,function(){return co(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=di.transition,di.transition=null;var w=gt;gt=1;var O=Ct;Ct|=4,nd.current=null,vE(i,a),U0(a,i),HM(ff),Cl=!!cf,ff=cf=null,i.current=a,_E(a),Gc(),Ct=O,gt=w,di.transition=_}else i.current=a;if(du&&(du=!1,Fr=i,hu=p),_=i.pendingLanes,_===0&&(Ur=null),We(a.stateNode),$n(i,Zt()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(fu)throw fu=!1,i=sd,sd=null,i;return(hu&1)!==0&&i.tag!==0&&co(),_=i.pendingLanes,(_&1)!==0?i===od?Ua++:(Ua=0,od=i):Ua=0,Dr(),null}function co(){if(Fr!==null){var i=Ji(hu),s=di.transition,a=gt;try{if(di.transition=null,gt=16>i?16:i,Fr===null)var c=!1;else{if(i=Fr,Fr=null,hu=0,(Ct&6)!==0)throw Error(t(331));var p=Ct;for(Ct|=4,Ye=i.current;Ye!==null;){var _=Ye,w=_.child;if((Ye.flags&16)!==0){var O=_.deletions;if(O!==null){for(var H=0;H<O.length;H++){var ue=O[H];for(Ye=ue;Ye!==null;){var Ae=Ye;switch(Ae.tag){case 0:case 11:case 15:La(8,Ae,_)}var be=Ae.child;if(be!==null)be.return=Ae,Ye=be;else for(;Ye!==null;){Ae=Ye;var we=Ae.sibling,He=Ae.return;if(P0(Ae),Ae===ue){Ye=null;break}if(we!==null){we.return=He,Ye=we;break}Ye=He}}}var qe=_.alternate;if(qe!==null){var je=qe.child;if(je!==null){qe.child=null;do{var sn=je.sibling;je.sibling=null,je=sn}while(je!==null)}}Ye=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,Ye=w;else e:for(;Ye!==null;){if(_=Ye,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:La(9,_,_.return)}var ee=_.sibling;if(ee!==null){ee.return=_.return,Ye=ee;break e}Ye=_.return}}var Y=i.current;for(Ye=Y;Ye!==null;){w=Ye;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,Ye=re;else e:for(w=Y;Ye!==null;){if(O=Ye,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:lu(9,O)}}catch(Je){tn(O,O.return,Je)}if(O===w){Ye=null;break e}var De=O.sibling;if(De!==null){De.return=O.return,Ye=De;break e}Ye=O.return}}if(Ct=p,Dr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(ne,i)}catch{}c=!0}return c}finally{gt=a,di.transition=s}}return!1}function Y0(i,s,a){s=oo(a,s),s=c0(i,s,1),i=Ir(i,s,1),s=kn(),i!==null&&(pt(i,1,s),$n(i,s))}function tn(i,s,a){if(i.tag===3)Y0(i,i,a);else for(;s!==null;){if(s.tag===3){Y0(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){i=oo(a,i),i=f0(s,i,1),s=Ir(s,i,1),i=kn(),s!==null&&(pt(s,1,i),$n(s,i));break}}s=s.return}}function TE(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=kn(),i.pingedLanes|=i.suspendedLanes&a,vn===i&&(Mn&a)===a&&(hn===4||hn===3&&(Mn&130023424)===Mn&&500>Zt()-rd?_s(i,0):id|=a),$n(i,s)}function q0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=kn();i=rr(i,s),i!==null&&(pt(i,s,a),$n(i,a))}function wE(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),q0(i,a)}function AE(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),q0(i,a)}var K0;K0=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Xn.current)qn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return qn=!1,hE(i,s,a);qn=(i.flags&131072)!==0}else qn=!1,jt&&(s.flags&1048576)!==0&&Cg(s,Xl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ou(i,s),i=s.pendingProps;var p=Qs(s,An.current);ro(s,a),p=Uf(null,s,c,i,p,a);var _=Ff();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yn(c)?(_=!0,Gl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Rf(s),p.updater=ru,s.stateNode=p,p._reactInternals=s,Gf(s,c,i,a),s=Yf(null,s,c,!0,_,a)):(s.tag=0,jt&&_&&_f(s),Bn(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(ou(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=RE(c),i=wi(c,i),p){case 0:s=Xf(null,s,c,i,a);break e;case 1:s=y0(null,s,c,i,a);break e;case 11:s=m0(null,s,c,i,a);break e;case 14:s=g0(null,s,c,wi(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:wi(c,p),Xf(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:wi(c,p),y0(i,s,c,p,a);case 3:e:{if(S0(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Fg(i,s),Zl(s,c,null,a);var w=s.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=oo(Error(t(423)),s),s=M0(i,s,c,a,p);break e}else if(c!==p){p=oo(Error(t(424)),s),s=M0(i,s,c,a,p);break e}else for(ei=Rr(s.stateNode.containerInfo.firstChild),Jn=s,jt=!0,Ti=null,a=Ng(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===p){s=or(i,s,a);break e}Bn(i,s,c,a)}s=s.child}return s;case 5:return kg(s),i===null&&Sf(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,df(c,p)?w=null:_!==null&&df(c,_)&&(s.flags|=32),x0(i,s),Bn(i,s,w,a),s.child;case 6:return i===null&&Sf(s),null;case 13:return E0(i,s,a);case 4:return bf(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=no(s,null,c,a):Bn(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:wi(c,p),m0(i,s,c,p,a);case 7:return Bn(i,s,s.pendingProps,a),s.child;case 8:return Bn(i,s,s.pendingProps.children,a),s.child;case 12:return Bn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,Gt(Kl,c._currentValue),c._currentValue=w,_!==null)if(Ei(_.value,w)){if(_.children===p.children&&!Xn.current){s=or(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var O=_.dependencies;if(O!==null){w=_.child;for(var H=O.firstContext;H!==null;){if(H.context===c){if(_.tag===1){H=sr(-1,a&-a),H.tag=2;var ue=_.updateQueue;if(ue!==null){ue=ue.shared;var Ae=ue.pending;Ae===null?H.next=H:(H.next=Ae.next,Ae.next=H),ue.pending=H}}_.lanes|=a,H=_.alternate,H!==null&&(H.lanes|=a),Af(_.return,a,s),O.lanes|=a;break}H=H.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=a,O=w.alternate,O!==null&&(O.lanes|=a),Af(w,a,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}Bn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,ro(s,a),p=ci(p),c=c(p),s.flags|=1,Bn(i,s,c,a),s.child;case 14:return c=s.type,p=wi(c,s.pendingProps),p=wi(c.type,p),g0(i,s,c,p,a);case 15:return v0(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:wi(c,p),ou(i,s),s.tag=1,Yn(c)?(i=!0,Gl(s)):i=!1,ro(s,a),l0(s,c,p),Gf(s,c,p,a),Yf(null,s,c,!0,i,a);case 19:return w0(i,s,a);case 22:return _0(i,s,a)}throw Error(t(156,s.tag))};function $0(i,s){return as(i,s)}function CE(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(i,s,a,c){return new CE(i,s,a,c)}function dd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function RE(i){if(typeof i=="function")return dd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===Z)return 14}return 2}function kr(i,s){var a=i.alternate;return a===null?(a=hi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function vu(i,s,a,c,p,_){var w=2;if(c=i,typeof i=="function")dd(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case F:return ys(a.children,p,_,s);case T:w=8,p|=8;break;case N:return i=hi(12,a,s,p|2),i.elementType=N,i.lanes=_,i;case he:return i=hi(13,a,s,p),i.elementType=he,i.lanes=_,i;case ge:return i=hi(19,a,s,p),i.elementType=ge,i.lanes=_,i;case K:return _u(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case V:w=10;break e;case z:w=9;break e;case j:w=11;break e;case Z:w=14;break e;case pe:w=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=hi(w,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function ys(i,s,a,c){return i=hi(7,i,c,s),i.lanes=a,i}function _u(i,s,a,c){return i=hi(22,i,c,s),i.elementType=K,i.lanes=a,i.stateNode={isHidden:!1},i}function hd(i,s,a){return i=hi(6,i,null,s),i.lanes=a,i}function pd(i,s,a){return s=hi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function bE(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function md(i,s,a,c,p,_,w,O,H){return i=new bE(i,s,a,O,H),s===1?(s=1,_===!0&&(s|=8)):s=0,_=hi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(_),i}function PE(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function j0(i){if(!i)return Pr;i=i._reactInternals;e:{if(On(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Yn(a))return Tg(i,a,s)}return s}function Z0(i,s,a,c,p,_,w,O,H){return i=md(a,c,!0,i,p,_,w,O,H),i.context=j0(null),a=i.current,c=kn(),p=Or(a),_=sr(c,p),_.callback=s??null,Ir(a,_,p),i.current.lanes=p,pt(i,p,c),$n(i,c),i}function xu(i,s,a,c){var p=s.current,_=kn(),w=Or(p);return a=j0(a),s.context===null?s.context=a:s.pendingContext=a,s=sr(_,w),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Ir(p,s,w),i!==null&&(Ri(i,p,w,_),jl(i,p,w)),w}function yu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Q0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function gd(i,s){Q0(i,s),(i=i.alternate)&&Q0(i,s)}function DE(){return null}var J0=typeof reportError=="function"?reportError:function(i){console.error(i)};function vd(i){this._internalRoot=i}Su.prototype.render=vd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));xu(i,s,null,null)},Su.prototype.unmount=vd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;vs(function(){xu(null,i,null,null)}),s[er]=null}};function Su(i){this._internalRoot=i}Su.prototype.unstable_scheduleHydration=function(i){if(i){var s=Nt();i={blockedOn:null,target:i,priority:s};for(var a=0;a<wr.length&&s!==0&&s<wr[a].priority;a++);wr.splice(a,0,i),a===0&&km(i)}};function _d(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Mu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ev(){}function LE(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var ue=yu(w);_.call(ue)}}var w=Z0(s,c,i,0,null,!1,!1,"",ev);return i._reactRootContainer=w,i[er]=w.current,xa(i.nodeType===8?i.parentNode:i),vs(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var O=c;c=function(){var ue=yu(H);O.call(ue)}}var H=md(i,0,!1,null,null,!1,!1,"",ev);return i._reactRootContainer=H,i[er]=H.current,xa(i.nodeType===8?i.parentNode:i),vs(function(){xu(s,H,a,c)}),H}function Eu(i,s,a,c,p){var _=a._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var O=p;p=function(){var H=yu(w);O.call(H)}}xu(s,w,i,p)}else w=LE(a,s,i,p,c);return yu(w)}Dt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Et(s.pendingLanes);a!==0&&(Wn(s,a|1),$n(s,Zt()),(Ct&6)===0&&(uo=Zt()+500,Dr()))}break;case 13:vs(function(){var c=rr(i,1);if(c!==null){var p=kn();Ri(c,i,1,p)}}),gd(i,1)}},Xt=function(i){if(i.tag===13){var s=rr(i,134217728);if(s!==null){var a=kn();Ri(s,i,134217728,a)}gd(i,134217728)}},Si=function(i){if(i.tag===13){var s=Or(i),a=rr(i,s);if(a!==null){var c=kn();Ri(a,i,s,c)}gd(i,s)}},Nt=function(){return gt},Mi=function(i,s){var a=gt;try{return gt=i,s()}finally{gt=a}},Pe=function(i,s,a){switch(s){case"input":if(Lt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=Vl(c);if(!p)throw Error(t(90));Vt(c),Lt(c,p)}}}break;case"textarea":fn(i,a);break;case"select":s=a.value,s!=null&&At(i,!!a.multiple,s,!1)}},Le=ud,ye=vs;var IE={usingClientEntryPoint:!1,Events:[Ma,js,Vl,fe,Ce,ud]},Fa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NE={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=os(i),i===null?null:i.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||DE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{ne=Tu.inject(NE),Ne=Tu}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IE,jn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(s))throw Error(t(200));return PE(i,s,null,a)},jn.createRoot=function(i,s){if(!_d(i))throw Error(t(299));var a=!1,c="",p=J0;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=md(i,1,!1,null,null,a,!1,c,p),i[er]=s.current,xa(i.nodeType===8?i.parentNode:i),new vd(s)},jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=os(s),i=i===null?null:i.stateNode,i},jn.flushSync=function(i){return vs(i)},jn.hydrate=function(i,s,a){if(!Mu(s))throw Error(t(200));return Eu(null,i,s,!0,a)},jn.hydrateRoot=function(i,s,a){if(!_d(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",w=J0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Z0(s,null,i,1,a??null,p,!1,_,w),i[er]=s.current,xa(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Su(s)},jn.render=function(i,s,a){if(!Mu(s))throw Error(t(200));return Eu(null,i,s,!1,a)},jn.unmountComponentAtNode=function(i){if(!Mu(i))throw Error(t(40));return i._reactRootContainer?(vs(function(){Eu(null,null,i,!1,function(){i._reactRootContainer=null,i[er]=null})}),!0):!1},jn.unstable_batchedUpdates=ud,jn.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!Mu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Eu(i,s,a,!1,c)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var lv;function HE(){if(lv)return Sd.exports;lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sd.exports=GE(),Sd.exports}var uv;function WE(){if(uv)return wu;uv=1;var n=HE();return wu.createRoot=n.createRoot,wu.hydrateRoot=n.hydrateRoot,wu}var XE=WE();const YE=Vx(XE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="185",qE=0,cv=1,KE=2,sc=1,$E=2,Za=3,Jr=0,Zn=1,hr=2,mr=0,Vo=1,No=2,fv=3,dv=4,jE=5,bs=100,ZE=101,QE=102,JE=103,eT=104,tT=200,nT=201,iT=202,rT=203,bh=204,Ph=205,sT=206,oT=207,aT=208,lT=209,uT=210,cT=211,fT=212,dT=213,hT=214,Dh=0,Lh=1,Ih=2,Ho=3,Nh=4,Uh=5,Fh=6,Oh=7,zx=0,pT=1,mT=2,qi=0,Gx=1,zp=2,Hx=3,Wx=4,Xx=5,Yx=6,qx=7,Kx=300,Us=301,Wo=302,Td=303,wd=304,Lc=306,Bh=1e3,pr=1001,kh=1002,Tn=1003,gT=1004,Au=1005,In=1006,Ad=1007,Ds=1008,xi=1009,$x=1010,jx=1011,ul=1012,Gp=1013,Zi=1014,Ii=1015,xr=1016,Hp=1017,Wp=1018,cl=1020,Zx=35902,Qx=35899,Jx=1021,ey=1022,Ni=1023,yr=1026,Ls=1027,Xp=1028,Yp=1029,Fs=1030,qp=1031,Kp=1033,oc=33776,ac=33777,lc=33778,uc=33779,Vh=35840,zh=35841,Gh=35842,Hh=35843,Wh=36196,Xh=37492,Yh=37496,qh=37488,Kh=37489,pc=37490,$h=37491,jh=37808,Zh=37809,Qh=37810,Jh=37811,ep=37812,tp=37813,np=37814,ip=37815,rp=37816,sp=37817,op=37818,ap=37819,lp=37820,up=37821,cp=36492,fp=36494,dp=36495,hp=36283,pp=36284,mc=36285,mp=36286,vT=3200,hv=0,_T=1,$r="",vi="srgb",gc="srgb-linear",vc="linear",Ut="srgb",fo=7680,pv=519,xT=512,yT=513,ST=514,$p=515,MT=516,ET=517,jp=518,TT=519,gp=35044,ho=35048,mv="300 es",Yi=2e3,_c=2001;function wT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AT(){const n=xc("canvas");return n.style.display="block",n}const gv={};function yc(...n){const e="THREE."+n.shift();console.log(e,...n)}function ty(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=ty(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Tt(...n){n=ty(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function zo(...n){const e=n.join(" ");e in gv||(gv[e]=!0,ot(...n))}function CT(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const RT={[Dh]:Lh,[Ih]:Fh,[Nh]:Oh,[Ho]:Uh,[Lh]:Dh,[Fh]:Ih,[Oh]:Nh,[Uh]:Ho};class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,vp=180/Math.PI;function Qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function bT(n,e){return(n%e+e)%e}function Rd(n,e,t){return(1-t)*n+t*e}function Xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Im=class Im{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Im.prototype.isVector2=!0;let mt=Im;class jo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],g=l[u+0],y=l[u+1],M=l[u+2],A=l[u+3];if(v!==A||d!==g||h!==y||m!==M){let S=d*g+h*y+m*M+v*A;S<0&&(g=-g,y=-y,M=-M,A=-A,S=-S);let x=1-f;if(S<.9995){const L=Math.acos(S),I=Math.sin(L);x=Math.sin(x*L)/I,f=Math.sin(f*L)/I,d=d*x+g*f,h=h*x+y*f,m=m*x+M*f,v=v*x+A*f}else{d=d*x+g*f,h=h*x+y*f,m=m*x+M*f,v=v*x+A*f;const L=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=L,h*=L,m*=L,v*=L}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=l[u],g=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+m*v+d*y-h*g,e[t+1]=d*M+m*g+h*v-f*y,e[t+2]=h*M+m*y+f*g-d*v,e[t+3]=m*M-f*v-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),v=f(l/2),g=d(r/2),y=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=g*m*v+h*y*M,this._y=h*y*v-g*m*M,this._z=h*m*M+g*y*v,this._w=h*m*v-g*y*M;break;case"YXZ":this._x=g*m*v+h*y*M,this._y=h*y*v-g*m*M,this._z=h*m*M-g*y*v,this._w=h*m*v+g*y*M;break;case"ZXY":this._x=g*m*v-h*y*M,this._y=h*y*v+g*m*M,this._z=h*m*M+g*y*v,this._w=h*m*v-g*y*M;break;case"ZYX":this._x=g*m*v-h*y*M,this._y=h*y*v+g*m*M,this._z=h*m*M-g*y*v,this._w=h*m*v+g*y*M;break;case"YZX":this._x=g*m*v+h*y*M,this._y=h*y*v+g*m*M,this._z=h*m*M-g*y*v,this._w=h*m*v-g*y*M;break;case"XZY":this._x=g*m*v-h*y*M,this._y=h*y*v-g*m*M,this._z=h*m*M+g*y*v,this._w=h*m*v+g*y*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],g=r+f+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-h)*y,this._z=(u-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(m-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-o)/y,this._x=(l+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nm=class Nm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+d*h+u*v-f*m,this.y=r+d*m+f*h-l*v,this.z=o+d*v+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nm.prototype.isVector3=!0;let J=Nm;const bd=new J,vv=new jo,Um=class Um{constructor(e,t,r,o,l,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],v=r[7],g=r[2],y=r[5],M=r[8],A=o[0],S=o[3],x=o[6],L=o[1],I=o[4],R=o[7],P=o[2],D=o[5],F=o[8];return l[0]=u*A+f*L+d*P,l[3]=u*S+f*I+d*D,l[6]=u*x+f*R+d*F,l[1]=h*A+m*L+v*P,l[4]=h*S+m*I+v*D,l[7]=h*x+m*R+v*F,l[2]=g*A+y*L+M*P,l[5]=g*S+y*I+M*D,l[8]=g*x+y*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*u-f*h,g=f*d-m*l,y=h*l-u*d,M=t*v+r*g+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-m*r)*A,e[2]=(f*r-o*u)*A,e[3]=g*A,e[4]=(m*t-o*d)*A,e[5]=(o*l-f*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return zo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pd.makeScale(e,t)),this}rotate(e){return zo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pd.makeRotation(-e)),this}translate(e,t){return zo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Um.prototype.isMatrix3=!0;let ct=Um;const Pd=new ct,_v=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const n={enabled:!0,workingColorSpace:gc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=Go(o.r),o.g=Go(o.g),o.b=Go(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$r?vc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[gc]:{primaries:e,whitePoint:r,transfer:vc,toXYZ:_v,fromXYZ:xv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:_v,fromXYZ:xv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),n}const yt=PT();function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let po;class DT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=xc("canvas")),po.width=e.width,po.height=e.height;const o=po.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LT=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Dd(o[u].image)):l.push(Dd(o[u]))}else l=Dd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Dd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?DT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let IT=0;const Ld=new J;class Fn extends Bs{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=pr,o=pr,l=In,u=Ds,f=Ni,d=xi,h=Fn.DEFAULT_ANISOTROPY,m=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Qr(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Kx;Fn.DEFAULT_ANISOTROPY=1;const Fm=class Fm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],v=d[8],g=d[1],y=d[5],M=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,R=(y+1)/2,P=(x+1)/2,D=(m+g)/4,F=(v+A)/4,T=(M+S)/4;return I>R&&I>P?I<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(I),o=D/r,l=F/r):R>P?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=D/o,l=T/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=F/l,o=T/l),this.set(r,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(g-m)*(g-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-A)/L,this.z=(g-m)/L,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fm.prototype.isVector4=!0;let rn=Fm;class NT extends Bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Fn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Zp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends NT{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ny extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UT extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dc=class Dc{constructor(e,t,r,o,l,u,f,d,h,m,v,g,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,v,g,y,M,A,S)}set(e,t,r,o,l,u,f,d,h,m,v,g,y,M,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=m,x[10]=v,x[14]=g,x[3]=y,x[7]=M,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/mo.setFromMatrixColumn(e,0).length(),l=1/mo.setFromMatrixColumn(e,1).length(),u=1/mo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=u*m,y=u*v,M=f*m,A=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=g-A*h,t[9]=-f*d,t[2]=A-g*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*m,y=d*v,M=h*m,A=h*v;t[0]=g+A*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=y*f-M,t[6]=A+g*f,t[10]=u*d}else if(e.order==="ZXY"){const g=d*m,y=d*v,M=h*m,A=h*v;t[0]=g-A*f,t[4]=-u*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*m,t[9]=A-g*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const g=u*m,y=u*v,M=f*m,A=f*v;t[0]=d*m,t[4]=M*h-y,t[8]=g*h+A,t[1]=d*v,t[5]=A*h+g,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*m,t[4]=A-g*v,t[8]=M*v+y,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*v+M,t[10]=g-A*v}else if(e.order==="XZY"){const g=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=g*v+A,t[5]=u*m,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*m,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FT,e,OT)}lookAt(e,t,r){const o=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),zr.crossVectors(r,ni),zr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),zr.crossVectors(r,ni)),zr.normalize(),Cu.crossVectors(ni,zr),o[0]=zr.x,o[4]=Cu.x,o[8]=ni.x,o[1]=zr.y,o[5]=Cu.y,o[9]=ni.y,o[2]=zr.z,o[6]=Cu.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],v=r[5],g=r[9],y=r[13],M=r[2],A=r[6],S=r[10],x=r[14],L=r[3],I=r[7],R=r[11],P=r[15],D=o[0],F=o[4],T=o[8],N=o[12],V=o[1],z=o[5],j=o[9],he=o[13],ge=o[2],Z=o[6],pe=o[10],K=o[14],G=o[3],se=o[7],ae=o[11],B=o[15];return l[0]=u*D+f*V+d*ge+h*G,l[4]=u*F+f*z+d*Z+h*se,l[8]=u*T+f*j+d*pe+h*ae,l[12]=u*N+f*he+d*K+h*B,l[1]=m*D+v*V+g*ge+y*G,l[5]=m*F+v*z+g*Z+y*se,l[9]=m*T+v*j+g*pe+y*ae,l[13]=m*N+v*he+g*K+y*B,l[2]=M*D+A*V+S*ge+x*G,l[6]=M*F+A*z+S*Z+x*se,l[10]=M*T+A*j+S*pe+x*ae,l[14]=M*N+A*he+S*K+x*B,l[3]=L*D+I*V+R*ge+P*G,l[7]=L*F+I*z+R*Z+P*se,l[11]=L*T+I*j+R*pe+P*ae,l[15]=L*N+I*he+R*K+P*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],g=e[10],y=e[14],M=e[3],A=e[7],S=e[11],x=e[15],L=d*y-h*g,I=f*y-h*v,R=f*g-d*v,P=u*y-h*m,D=u*g-d*m,F=u*v-f*m;return t*(A*L-S*I+x*R)-r*(M*L-S*P+x*D)+o*(M*I-A*P+x*F)-l*(M*R-A*D+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],d=e[2],h=e[6],m=e[10];return t*(u*m-f*h)-r*(l*m-f*d)+o*(l*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],g=e[10],y=e[11],M=e[12],A=e[13],S=e[14],x=e[15],L=t*f-r*u,I=t*d-o*u,R=t*h-l*u,P=r*d-o*f,D=r*h-l*f,F=o*h-l*d,T=m*A-v*M,N=m*S-g*M,V=m*x-y*M,z=v*S-g*A,j=v*x-y*A,he=g*x-y*S,ge=L*he-I*j+R*z+P*V-D*N+F*T;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ge;return e[0]=(f*he-d*j+h*z)*Z,e[1]=(o*j-r*he-l*z)*Z,e[2]=(A*F-S*D+x*P)*Z,e[3]=(g*D-v*F-y*P)*Z,e[4]=(d*V-u*he-h*N)*Z,e[5]=(t*he-o*V+l*N)*Z,e[6]=(S*R-M*F-x*I)*Z,e[7]=(m*F-g*R+y*I)*Z,e[8]=(u*j-f*V+h*T)*Z,e[9]=(r*V-t*j-l*T)*Z,e[10]=(M*D-A*R+x*L)*Z,e[11]=(v*R-m*D-y*L)*Z,e[12]=(f*N-u*z-d*T)*Z,e[13]=(t*z-r*N+o*T)*Z,e[14]=(A*I-M*P-S*L)*Z,e[15]=(m*P-v*I+g*L)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,v=f+f,g=l*h,y=l*m,M=l*v,A=u*m,S=u*v,x=f*v,L=d*h,I=d*m,R=d*v,P=r.x,D=r.y,F=r.z;return o[0]=(1-(A+x))*P,o[1]=(y+R)*P,o[2]=(M-I)*P,o[3]=0,o[4]=(y-R)*D,o[5]=(1-(g+x))*D,o[6]=(S+L)*D,o[7]=0,o[8]=(M+I)*F,o[9]=(S-L)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=mo.set(o[0],o[1],o[2]).length();const f=mo.set(o[4],o[5],o[6]).length(),d=mo.set(o[8],o[9],o[10]).length();l<0&&(u=-u),bi.copy(this);const h=1/u,m=1/f,v=1/d;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=m,bi.elements[5]*=m,bi.elements[6]*=m,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,t.setFromRotationMatrix(bi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,u,f=Yi,d=!1){const h=this.elements,m=2*l/(t-e),v=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=l/(u-l),A=u*l/(u-l);else if(f===Yi)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===_c)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Yi,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(u-l),A=u/(u-l);else if(f===Yi)M=-2/(u-l),A=-(u+l)/(u-l);else if(f===_c)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Dc.prototype.isMatrix4=!0;let Ht=Dc;const mo=new J,bi=new Ht,FT=new J(0,0,0),OT=new J(1,1,1),zr=new J,Cu=new J,ni=new J,yv=new Ht,Sv=new jo;class Os{constructor(e=0,t=0,r=0,o=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],v=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sv.setFromEuler(this),this.setFromQuaternion(Sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class iy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BT=0;const Mv=new J,go=new jo,lr=new Ht,Ru=new J,Ba=new J,kT=new J,VT=new jo,Ev=new J(1,0,0),Tv=new J(0,1,0),wv=new J(0,0,1),Av={type:"added"},zT={type:"removed"},vo={type:"childadded",child:null},Id={type:"childremoved",child:null};class Gn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new J,t=new Os,r=new jo,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ct}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(Ev,e)}rotateY(e){return this.rotateOnAxis(Tv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,t){return Mv.copy(e).applyQuaternion(this.quaternion),this.position.add(Mv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ev,e)}translateY(e){return this.translateOnAxis(Tv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ru.copy(e):Ru.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Ba,Ru,this.up):lr.lookAt(Ru,Ba,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),go.setFromRotationMatrix(lr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Av),vo.child=e,this.dispatchEvent(vo),vo.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zT),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Av),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,kT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,VT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),v=u(e.shapes),g=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new J(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qa extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),x=this._getHandJoint(h,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&g>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ry={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},bu={h:0,s:0,l:0};function Ud(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=yt.workingColorSpace){if(e=bT(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ud(u,l,e+1/3),this.g=Ud(u,l,e),this.b=Ud(u,l,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,t=vi){function r(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const r=ry[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return yt.workingToColorSpace(Dn.copy(this),e),Math.round(St(Dn.r*255,0,255))*65536+Math.round(St(Dn.g*255,0,255))*256+Math.round(St(Dn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Dn.copy(this),t);const r=Dn.r,o=Dn.g,l=Dn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=vi){yt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,r=Dn.g,o=Dn.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(bu);const r=Rd(Gr.h,bu.h,t),o=Rd(Gr.s,bu.s,t),l=Rd(Gr.l,bu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new xt;xt.NAMES=ry;class HT extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Os,this.environmentIntensity=1,this.environmentRotation=new Os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pi=new J,ur=new J,Fd=new J,cr=new J,_o=new J,xo=new J,Cv=new J,Od=new J,Bd=new J,kd=new J,Vd=new rn,zd=new rn,Gd=new rn;class yi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Pi.subVectors(e,t),o.cross(Pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Pi.subVectors(o,t),ur.subVectors(r,t),Fd.subVectors(e,t);const u=Pi.dot(Pi),f=Pi.dot(ur),d=Pi.dot(Fd),h=ur.dot(ur),m=ur.dot(Fd),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,y=(h*d-f*m)*g,M=(u*m-f*d)*g;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,cr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,cr.x),d.addScaledVector(u,cr.y),d.addScaledVector(f,cr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Vd.setScalar(0),zd.setScalar(0),Gd.setScalar(0),Vd.fromBufferAttribute(e,t),zd.fromBufferAttribute(e,r),Gd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Vd,l.x),u.addScaledVector(zd,l.y),u.addScaledVector(Gd,l.z),u}static isFrontFacing(e,t,r,o){return Pi.subVectors(r,t),ur.subVectors(e,t),Pi.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Pi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;_o.subVectors(o,r),xo.subVectors(l,r),Od.subVectors(e,r);const d=_o.dot(Od),h=xo.dot(Od);if(d<=0&&h<=0)return t.copy(r);Bd.subVectors(e,o);const m=_o.dot(Bd),v=xo.dot(Bd);if(m>=0&&v<=m)return t.copy(o);const g=d*v-m*h;if(g<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(_o,u);kd.subVectors(e,l);const y=_o.dot(kd),M=xo.dot(kd);if(M>=0&&y<=M)return t.copy(l);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(xo,f);const S=m*M-y*v;if(S<=0&&v-m>=0&&y-M>=0)return Cv.subVectors(l,o),f=(v-m)/(v-m+(y-M)),t.copy(o).addScaledVector(Cv,f);const x=1/(S+A+g);return u=A*x,f=g*x,t.copy(r).addScaledVector(_o,u).addScaledVector(xo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ks{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(l,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pu.copy(r.boundingBox)),Pu.applyMatrix4(e.matrixWorld),this.union(Pu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Du.subVectors(this.max,ka),yo.subVectors(e.a,ka),So.subVectors(e.b,ka),Mo.subVectors(e.c,ka),Hr.subVectors(So,yo),Wr.subVectors(Mo,So),Ss.subVectors(yo,Mo);let t=[0,-Hr.z,Hr.y,0,-Wr.z,Wr.y,0,-Ss.z,Ss.y,Hr.z,0,-Hr.x,Wr.z,0,-Wr.x,Ss.z,0,-Ss.x,-Hr.y,Hr.x,0,-Wr.y,Wr.x,0,-Ss.y,Ss.x,0];return!Hd(t,yo,So,Mo,Du)||(t=[1,0,0,0,1,0,0,0,1],!Hd(t,yo,So,Mo,Du))?!1:(Lu.crossVectors(Hr,Wr),t=[Lu.x,Lu.y,Lu.z],Hd(t,yo,So,Mo,Du))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new J,new J,new J,new J,new J,new J,new J,new J],Di=new J,Pu=new ks,yo=new J,So=new J,Mo=new J,Hr=new J,Wr=new J,Ss=new J,ka=new J,Du=new J,Lu=new J,Ms=new J;function Hd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){Ms.fromArray(n,l);const f=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),d=e.dot(Ms),h=t.dot(Ms),m=r.dot(Ms);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const un=new J,Iu=new mt;let WT=0;class Nn extends Bs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=gp,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Iu.fromBufferAttribute(this,t),Iu.applyMatrix3(e),this.setXY(t,Iu.x,Iu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sy extends Nn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class oy extends Nn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ui extends Nn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const XT=new ks,Va=new J,Wd=new J;class Zo{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):XT.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Va,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Wd)),this.expandByPoint(Va.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YT=0;const pi=new Ht,Xd=new Gn,Eo=new J,ii=new ks,za=new ks,xn=new J;class si extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wT(e)?oy:sy)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ui(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];za.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ii.min,za.min),ii.expandByPoint(xn),xn.addVectors(ii.max,za.max),ii.expandByPoint(xn)):(ii.expandByPoint(za.min),ii.expandByPoint(za.max))}ii.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(xn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)xn.fromBufferAttribute(f,h),d&&(Eo.fromBufferAttribute(e,h),xn.add(Eo)),o=Math.max(o,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Nn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let T=0;T<r.count;T++)f[T]=new J,d[T]=new J;const h=new J,m=new J,v=new J,g=new mt,y=new mt,M=new mt,A=new J,S=new J;function x(T,N,V){h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,N),v.fromBufferAttribute(r,V),g.fromBufferAttribute(l,T),y.fromBufferAttribute(l,N),M.fromBufferAttribute(l,V),m.sub(h),v.sub(h),y.sub(g),M.sub(g);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(z),S.copy(v).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),f[T].add(A),f[N].add(A),f[V].add(A),d[T].add(S),d[N].add(S),d[V].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,N=L.length;T<N;++T){const V=L[T],z=V.start,j=V.count;for(let he=z,ge=z+j;he<ge;he+=3)x(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const I=new J,R=new J,P=new J,D=new J;function F(T){P.fromBufferAttribute(o,T),D.copy(P);const N=f[T];I.copy(N),I.sub(P.multiplyScalar(P.dot(N))).normalize(),R.crossVectors(D,N);const z=R.dot(d[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,z)}for(let T=0,N=L.length;T<N;++T){const V=L[T],z=V.start,j=V.count;for(let he=z,ge=z+j;he<ge;he+=3)F(e.getX(he+0)),F(e.getX(he+1)),F(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new J,l=new J,u=new J,f=new J,d=new J,h=new J,m=new J,v=new J;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,g=new h.constructor(d.length*m);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){f.isInterleavedBufferAttribute?y=d[A]*f.data.stride+f.offset:y=d[A]*m;for(let x=0;x<m;x++)g[M++]=h[y++]}return new Nn(g,m,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const g=h[m],y=e(g,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,g=h.length;v<g;v++){const y=h[v];m.push(y.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let g=0,y=v.length;g<y;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gp,this.updateRanges=[],this.version=0,this.uuid=Qr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new J;class Sc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){yc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let KT=0;class Qo extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=Vo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ph,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(r.blending=this.blending),this.side!==Jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ph&&(r.blendDst=this.blendDst),this.blendEquation!==bs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ay extends Qo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let To;const Ga=new J,wo=new J,Ao=new J,Co=new mt,Ha=new mt,ly=new Ht,Nu=new J,Wa=new J,Uu=new J,Rv=new mt,Yd=new mt,bv=new mt;class $T extends Gn{constructor(e=new ay){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new si;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new qT(t,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new Sc(r,3,0,!1)),To.setAttribute("uv",new Sc(r,2,3,!1))}this.geometry=To,this.material=e,this.center=new mt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wo.setFromMatrixScale(this.matrixWorld),ly.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wo.multiplyScalar(-Ao.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Fu(Nu.set(-.5,-.5,0),Ao,u,wo,o,l),Fu(Wa.set(.5,-.5,0),Ao,u,wo,o,l),Fu(Uu.set(.5,.5,0),Ao,u,wo,o,l),Rv.set(0,0),Yd.set(1,0),bv.set(1,1);let f=e.ray.intersectTriangle(Nu,Wa,Uu,!1,Ga);if(f===null&&(Fu(Wa.set(-.5,.5,0),Ao,u,wo,o,l),Yd.set(0,1),f=e.ray.intersectTriangle(Nu,Uu,Wa,!1,Ga),f===null))return;const d=e.ray.origin.distanceTo(Ga);d<e.near||d>e.far||t.push({distance:d,point:Ga.clone(),uv:yi.getInterpolation(Ga,Nu,Wa,Uu,Rv,Yd,bv,new mt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fu(n,e,t,r,o,l){Co.subVectors(n,t).addScalar(.5).multiply(r),o!==void 0?(Ha.x=l*Co.x-o*Co.y,Ha.y=o*Co.x+l*Co.y):Ha.copy(Co),n.copy(e),n.x+=Ha.x,n.y+=Ha.y,n.applyMatrix4(ly)}const dr=new J,qd=new J,Ou=new J,Xr=new J,Kd=new J,Bu=new J,$d=new J;class uy{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){qd.copy(e).add(t).multiplyScalar(.5),Ou.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(qd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ou),f=Xr.dot(this.direction),d=-Xr.dot(Ou),h=Xr.lengthSq(),m=Math.abs(1-u*u);let v,g,y,M;if(m>0)if(v=u*d-f,g=u*f-d,M=l*m,v>=0)if(g>=-M)if(g<=M){const A=1/m;v*=A,g*=A,y=v*(v+u*g+2*f)+g*(u*v+g+2*d)+h}else g=l,v=Math.max(0,-(u*g+f)),y=-v*v+g*(g+2*d)+h;else g=-l,v=Math.max(0,-(u*g+f)),y=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-u*l+f)),g=v>0?-l:Math.min(Math.max(-l,-d),l),y=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-l,-d),l),y=g*(g+2*d)+h):(v=Math.max(0,-(u*l+f)),g=v>0?l:Math.min(Math.max(-l,-d),l),y=-v*v+g*(g+2*d)+h);else g=u>0?-l:l,v=Math.max(0,-(u*g+f)),y=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(qd).addScaledVector(Ou,g),y}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),o=dr.dot(dr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,u=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,u=(e.min.y-g.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,o,l){Kd.subVectors(t,e),Bu.subVectors(r,e),$d.crossVectors(Kd,Bu);let u=this.direction.dot($d),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const d=f*this.direction.dot(Bu.crossVectors(Xr,Bu));if(d<0)return null;const h=f*this.direction.dot(Kd.cross(Xr));if(h<0||d+h>u)return null;const m=-f*Xr.dot($d);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qp extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Os,this.combine=zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pv=new Ht,Es=new uy,ku=new Zo,Dv=new J,Vu=new J,zu=new J,Gu=new J,jd=new J,Hu=new J,Lv=new J,Wu=new J;class Fi extends Gn{constructor(e=new si,t=new Qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Hu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(jd.fromBufferAttribute(v,e),u?Hu.addScaledVector(jd,m):Hu.addScaledVector(jd.sub(t),m))}t.add(Hu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ku.copy(r.boundingSphere),ku.applyMatrix4(l),Es.copy(e.ray).recast(e.near),!(ku.containsPoint(Es.origin)===!1&&(Es.intersectSphere(ku,Dv)===null||Es.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(Pv.copy(l).invert(),Es.copy(e.ray).applyMatrix4(Pv),!(r.boundingBox!==null&&Es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const S=g[M],x=u[S.materialIndex],L=Math.max(S.start,y.start),I=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=L,P=I;R<P;R+=3){const D=f.getX(R),F=f.getX(R+1),T=f.getX(R+2);o=Xu(this,x,e,r,h,m,v,D,F,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const L=f.getX(S),I=f.getX(S+1),R=f.getX(S+2);o=Xu(this,u,e,r,h,m,v,L,I,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const S=g[M],x=u[S.materialIndex],L=Math.max(S.start,y.start),I=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=L,P=I;R<P;R+=3){const D=R,F=R+1,T=R+2;o=Xu(this,x,e,r,h,m,v,D,F,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const L=S,I=S+1,R=S+2;o=Xu(this,u,e,r,h,m,v,L,I,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function jT(n,e,t,r,o,l,u,f){let d;if(e.side===Zn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Jr,f),d===null)return null;Wu.copy(f),Wu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Wu);return h<t.near||h>t.far?null:{distance:h,point:Wu.clone(),object:n}}function Xu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,Vu),n.getVertexPosition(d,zu),n.getVertexPosition(h,Gu);const m=jT(n,e,t,r,Vu,zu,Gu,Lv);if(m){const v=new J;yi.getBarycoord(Lv,Vu,zu,Gu,v),o&&(m.uv=yi.getInterpolatedAttribute(o,f,d,h,v,new mt)),l&&(m.uv1=yi.getInterpolatedAttribute(l,f,d,h,v,new mt)),u&&(m.normal=yi.getInterpolatedAttribute(u,f,d,h,v,new J),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new J,materialIndex:0};yi.getNormal(Vu,zu,Gu,g.normal),m.face=g,m.barycoord=v}return m}class cy extends Fn{constructor(e=null,t=1,r=1,o,l,u,f,d,h=Tn,m=Tn,v,g){super(null,u,f,d,h,m,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _p extends Nn{constructor(e,t,r,o=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new Ht,Iv=new Ht,Yu=[],Nv=new ks,ZT=new Ht,Xa=new Fi,Ya=new Zo;class QT extends Fi{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _p(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,ZT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ks),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Ro),Nv.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(Nv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Ro),Ya.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(Ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=r.length+1,u=e*l+1;for(let f=0;f<r.length;f++)r[f]=o[u+f]}raycast(e,t){const r=this.matrixWorld,o=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(r),e.ray.intersectsSphere(Ya)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,Ro),Iv.multiplyMatrices(r,Ro),Xa.matrixWorld=Iv,Xa.raycast(e,Yu);for(let u=0,f=Yu.length;u<f;u++){const d=Yu[u];d.instanceId=l,d.object=this,t.push(d)}Yu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _p(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new cy(new Float32Array(o*this.count),o,this.count,Xp,Ii));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<r.length;h++)u+=r[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=o*e;return l[d]=f,l.set(r,d+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zd=new J,JT=new J,e1=new ct;class As{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Zd.subVectors(r,t).cross(JT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Zd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||e1.getNormalMatrix(e),o=this.coplanarPoint(Zd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Zo,t1=new mt(.5,.5),qu=new J;class fy{constructor(e=new As,t=new As,r=new As,o=new As,l=new As,u=new As){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],g=l[6],y=l[7],M=l[8],A=l[9],S=l[10],x=l[11],L=l[12],I=l[13],R=l[14],P=l[15];if(o[0].setComponents(h-u,y-m,x-M,P-L).normalize(),o[1].setComponents(h+u,y+m,x+M,P+L).normalize(),o[2].setComponents(h+f,y+v,x+A,P+I).normalize(),o[3].setComponents(h-f,y-v,x-A,P-I).normalize(),r)o[4].setComponents(d,g,S,R).normalize(),o[5].setComponents(h-d,y-g,x-S,P-R).normalize();else if(o[4].setComponents(h-d,y-g,x-S,P-R).normalize(),t===Yi)o[5].setComponents(h+d,y+g,x+S,P+R).normalize();else if(t===_c)o[5].setComponents(d,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=t1.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(qu.x=o.normal.x>0?e.max.x:e.min.x,qu.y=o.normal.y>0?e.max.y:e.min.y,qu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends Qo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new J,Ec=new J,Uv=new Ht,qa=new uy,Ku=new Zo,Qd=new J,Fv=new J;class dy extends Gn{constructor(e=new si,t=new xp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Mc.fromBufferAttribute(t,o-1),Ec.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Mc.distanceTo(Ec);e.setAttribute("lineDistance",new Ui(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ku.copy(r.boundingSphere),Ku.applyMatrix4(o),Ku.radius+=l,e.ray.intersectsSphere(Ku)===!1)return;Uv.copy(o).invert(),qa.copy(e.ray).applyMatrix4(Uv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=h){const x=m.getX(A),L=m.getX(A+1),I=$u(this,e,qa,d,x,L,A);I&&t.push(I)}if(this.isLineLoop){const A=m.getX(M-1),S=m.getX(y),x=$u(this,e,qa,d,A,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=h){const x=$u(this,e,qa,d,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=$u(this,e,qa,d,M-1,y,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function $u(n,e,t,r,o,l,u){const f=n.geometry.attributes.position;if(Mc.fromBufferAttribute(f,o),Ec.fromBufferAttribute(f,l),t.distanceSqToSegment(Mc,Ec,Qd,Fv)>r)return;Qd.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Qd);if(!(h<e.near||h>e.far))return{distance:h,point:Fv.clone().applyMatrix4(n.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:n}}const Ov=new J,Bv=new J;class n1 extends dy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Ov.fromBufferAttribute(t,o),Bv.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Ov.distanceTo(Bv);e.setAttribute("lineDistance",new Ui(r,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hy extends Fn{constructor(e=[],t=Us,r,o,l,u,f,d,h,m){super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xo extends Fn{constructor(e,t,r=Zi,o,l,u,f=Tn,d=Tn,h,m=yr,v=1){if(m!==yr&&m!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class i1 extends Xo{constructor(e,t=Zi,r=Us,o,l,u=Tn,f=Tn,d,h=yr){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class py extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gl extends si{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],v=[];let g=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Ui(h,3)),this.setAttribute("normal",new Ui(m,3)),this.setAttribute("uv",new Ui(v,2));function M(A,S,x,L,I,R,P,D,F,T,N){const V=R/F,z=P/T,j=R/2,he=P/2,ge=D/2,Z=F+1,pe=T+1;let K=0,G=0;const se=new J;for(let ae=0;ae<pe;ae++){const B=ae*z-he;for(let Q=0;Q<Z;Q++){const ze=Q*V-j;se[A]=ze*L,se[S]=B*I,se[x]=ge,h.push(se.x,se.y,se.z),se[A]=0,se[S]=0,se[x]=D>0?1:-1,m.push(se.x,se.y,se.z),v.push(Q/F),v.push(1-ae/T),K+=1}}for(let ae=0;ae<T;ae++)for(let B=0;B<F;B++){const Q=g+B+Z*ae,ze=g+B+Z*(ae+1),Ke=g+(B+1)+Z*(ae+1),Xe=g+(B+1)+Z*ae;d.push(Q,ze,Xe),d.push(ze,Ke,Xe),G+=6}f.addGroup(y,G,N),y+=G,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vl extends si{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,v=e/f,g=t/d,y=[],M=[],A=[],S=[];for(let x=0;x<m;x++){const L=x*g-u;for(let I=0;I<h;I++){const R=I*v-l;M.push(R,-L,0),A.push(0,0,1),S.push(I/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<f;L++){const I=L+h*x,R=L+h*(x+1),P=L+1+h*(x+1),D=L+1+h*x;y.push(I,R,D),y.push(R,P,D)}this.setIndex(y),this.setAttribute("position",new Ui(M,3)),this.setAttribute("normal",new Ui(A,3)),this.setAttribute("uv",new Ui(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(kv(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(kv(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function zn(n){const e={};for(let t=0;t<n.length;t++){const r=Yo(n[t]);for(const o in r)e[o]=r[o]}return e}function kv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function r1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function my(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const s1={clone:Yo,merge:zn};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new mt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new J().fromArray(o.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Ht().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class l1 extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class u1 extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c1 extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ju=new J,Zu=new jo,Gi=new J;class gy extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ju,Zu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ju,Zu,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ju,Zu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ju,Zu,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new J,Vv=new mt,zv=new mt;class _i extends gy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Vv,zv),t.subVectors(zv,Vv)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class vy extends gy{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bo=-90,Po=1;class f1 extends Gn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _i(bo,Po,e,t);o.layers=this.layers,this.add(o);const l=new _i(bo,Po,e,t);l.layers=this.layers,this.add(l);const u=new _i(bo,Po,e,t);u.layers=this.layers,this.add(u);const f=new _i(bo,Po,e,t);f.layers=this.layers,this.add(f);const d=new _i(bo,Po,e,t);d.layers=this.layers,this.add(d);const h=new _i(bo,Po,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===_c)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class d1 extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Om=class Om{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Om.prototype.isMatrix2=!0;let Gv=Om;function Hv(n,e,t,r){const o=h1(r);switch(t){case Jx:return n*e;case Xp:return n*e/o.components*o.byteLength;case Yp:return n*e/o.components*o.byteLength;case Fs:return n*e*2/o.components*o.byteLength;case qp:return n*e*2/o.components*o.byteLength;case ey:return n*e*3/o.components*o.byteLength;case Ni:return n*e*4/o.components*o.byteLength;case Kp:return n*e*4/o.components*o.byteLength;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zh:case Hh:return Math.max(n,16)*Math.max(e,8)/4;case Vh:case Gh:return Math.max(n,8)*Math.max(e,8)/2;case Wh:case Xh:case qh:case Kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yh:case pc:case $h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case op:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ap:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case up:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cp:case fp:case dp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hp:case pp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mc:case mp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h1(n){switch(n){case xi:case $x:return{byteLength:1,components:1};case ul:case jx:case xr:return{byteLength:2,components:1};case Hp:case Wp:return{byteLength:2,components:4};case Zi:case Gp:case Ii:return{byteLength:4,components:1};case Zx:case Qx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _y(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function p1(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,m);else{v.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<v.length;y++){const M=v[g],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,v[g]=A)}v.length=g+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var m1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,T1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ow=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,aw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ww=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Aw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ww=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:m1,alphahash_pars_fragment:g1,alphamap_fragment:v1,alphamap_pars_fragment:_1,alphatest_fragment:x1,alphatest_pars_fragment:y1,aomap_fragment:S1,aomap_pars_fragment:M1,batching_pars_vertex:E1,batching_vertex:T1,begin_vertex:w1,beginnormal_vertex:A1,bsdfs:C1,iridescence_fragment:R1,bumpmap_pars_fragment:b1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:D1,clipping_planes_pars_vertex:L1,clipping_planes_vertex:I1,color_fragment:N1,color_pars_fragment:U1,color_pars_vertex:F1,color_vertex:O1,common:B1,cube_uv_reflection_fragment:k1,defaultnormal_vertex:V1,displacementmap_pars_vertex:z1,displacementmap_vertex:G1,emissivemap_fragment:H1,emissivemap_pars_fragment:W1,colorspace_fragment:X1,colorspace_pars_fragment:Y1,envmap_fragment:q1,envmap_common_pars_fragment:K1,envmap_pars_fragment:$1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:aw,envmap_vertex:Z1,fog_vertex:Q1,fog_pars_vertex:J1,fog_fragment:ew,fog_pars_fragment:tw,gradientmap_pars_fragment:nw,lightmap_pars_fragment:iw,lights_lambert_fragment:rw,lights_lambert_pars_fragment:sw,lights_pars_begin:ow,lights_toon_fragment:lw,lights_toon_pars_fragment:uw,lights_phong_fragment:cw,lights_phong_pars_fragment:fw,lights_physical_fragment:dw,lights_physical_pars_fragment:hw,lights_fragment_begin:pw,lights_fragment_maps:mw,lights_fragment_end:gw,lightprobes_pars_fragment:vw,logdepthbuf_fragment:_w,logdepthbuf_pars_fragment:xw,logdepthbuf_pars_vertex:yw,logdepthbuf_vertex:Sw,map_fragment:Mw,map_pars_fragment:Ew,map_particle_fragment:Tw,map_particle_pars_fragment:ww,metalnessmap_fragment:Aw,metalnessmap_pars_fragment:Cw,morphinstance_vertex:Rw,morphcolor_vertex:bw,morphnormal_vertex:Pw,morphtarget_pars_vertex:Dw,morphtarget_vertex:Lw,normal_fragment_begin:Iw,normal_fragment_maps:Nw,normal_pars_fragment:Uw,normal_pars_vertex:Fw,normal_vertex:Ow,normalmap_pars_fragment:Bw,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:Vw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Gw,opaque_fragment:Hw,packing:Ww,premultiplied_alpha_fragment:Xw,project_vertex:Yw,dithering_fragment:qw,dithering_pars_fragment:Kw,roughnessmap_fragment:$w,roughnessmap_pars_fragment:jw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Qw,shadowmap_vertex:Jw,shadowmask_pars_fragment:eA,skinbase_vertex:tA,skinning_pars_vertex:nA,skinning_vertex:iA,skinnormal_vertex:rA,specularmap_fragment:sA,specularmap_pars_fragment:oA,tonemapping_fragment:aA,tonemapping_pars_fragment:lA,transmission_fragment:uA,transmission_pars_fragment:cA,uv_pars_fragment:fA,uv_pars_vertex:dA,uv_vertex:hA,worldpos_vertex:pA,background_vert:mA,background_frag:gA,backgroundCube_vert:vA,backgroundCube_frag:_A,cube_vert:xA,cube_frag:yA,depth_vert:SA,depth_frag:MA,distance_vert:EA,distance_frag:TA,equirect_vert:wA,equirect_frag:AA,linedashed_vert:CA,linedashed_frag:RA,meshbasic_vert:bA,meshbasic_frag:PA,meshlambert_vert:DA,meshlambert_frag:LA,meshmatcap_vert:IA,meshmatcap_frag:NA,meshnormal_vert:UA,meshnormal_frag:FA,meshphong_vert:OA,meshphong_frag:BA,meshphysical_vert:kA,meshphysical_frag:VA,meshtoon_vert:zA,meshtoon_frag:GA,points_vert:HA,points_frag:WA,shadow_vert:XA,shadow_frag:YA,sprite_vert:qA,sprite_frag:KA},Be={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Wi={basic:{uniforms:zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:zn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:zn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new xt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:zn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:zn([Be.points,Be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:zn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:zn([Be.common,Be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:zn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:zn([Be.sprite,Be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:zn([Be.common,Be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:zn([Be.lights,Be.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Wi.physical={uniforms:zn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Qu={r:0,b:0,g:0},$A=new Ht,xy=new ct;xy.set(-1,0,0,0,1,0,0,0,1);function jA(n,e,t,r,o,l){const u=new xt(0);let f=o===!0?0:1,d,h,m=null,v=0,g=null;function y(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const R=L.backgroundBlurriness>0;I=e.get(I,R)}return I}function M(L){let I=!1;const R=y(L);R===null?S(u,f):R&&R.isColor&&(S(R,1),I=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(L,I){const R=y(I);R&&(R.isCubeTexture||R.mapping===Lc)?(h===void 0&&(h=new Fi(new gl(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Yo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($A.makeRotationFromEuler(I.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(xy),h.material.toneMapped=yt.getTransfer(R.colorSpace)!==Ut,(m!==R||v!==R.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=R,v=R.version,g=n.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Fi(new vl(2,2),new Qi({name:"BackgroundMaterial",uniforms:Yo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=yt.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||v!==R.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,m=R,v=R.version,g=n.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function S(L,I){L.getRGB(Qu,my(n)),t.buffers.color.setClear(Qu.r,Qu.g,Qu.b,I,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,I=1){u.set(L),f=I,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,S(u,f)},render:M,addToRenderList:A,dispose:x}}function ZA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(z,j,he,ge,Z){let pe=!1;const K=v(z,ge,he,j);l!==K&&(l=K,h(l.object)),pe=y(z,ge,he,Z),pe&&M(z,ge,he,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(z,j,he,ge),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return n.createVertexArray()}function h(z){return n.bindVertexArray(z)}function m(z){return n.deleteVertexArray(z)}function v(z,j,he,ge){const Z=ge.wireframe===!0;let pe=r[j.id];pe===void 0&&(pe={},r[j.id]=pe);const K=z.isInstancedMesh===!0?z.id:0;let G=pe[K];G===void 0&&(G={},pe[K]=G);let se=G[he.id];se===void 0&&(se={},G[he.id]=se);let ae=se[Z];return ae===void 0&&(ae=g(d()),se[Z]=ae),ae}function g(z){const j=[],he=[],ge=[];for(let Z=0;Z<t;Z++)j[Z]=0,he[Z]=0,ge[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:he,attributeDivisors:ge,object:z,attributes:{},index:null}}function y(z,j,he,ge){const Z=l.attributes,pe=j.attributes;let K=0;const G=he.getAttributes();for(const se in G)if(G[se].location>=0){const B=Z[se];let Q=pe[se];if(Q===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;K++}return l.attributesNum!==K||l.index!==ge}function M(z,j,he,ge){const Z={},pe=j.attributes;let K=0;const G=he.getAttributes();for(const se in G)if(G[se].location>=0){let B=pe[se];B===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),Z[se]=Q,K++}l.attributes=Z,l.attributesNum=K,l.index=ge}function A(){const z=l.newAttributes;for(let j=0,he=z.length;j<he;j++)z[j]=0}function S(z){x(z,0)}function x(z,j){const he=l.newAttributes,ge=l.enabledAttributes,Z=l.attributeDivisors;he[z]=1,ge[z]===0&&(n.enableVertexAttribArray(z),ge[z]=1),Z[z]!==j&&(n.vertexAttribDivisor(z,j),Z[z]=j)}function L(){const z=l.newAttributes,j=l.enabledAttributes;for(let he=0,ge=j.length;he<ge;he++)j[he]!==z[he]&&(n.disableVertexAttribArray(he),j[he]=0)}function I(z,j,he,ge,Z,pe,K){K===!0?n.vertexAttribIPointer(z,j,he,Z,pe):n.vertexAttribPointer(z,j,he,ge,Z,pe)}function R(z,j,he,ge){A();const Z=ge.attributes,pe=he.getAttributes(),K=j.defaultAttributeValues;for(const G in pe){const se=pe[G];if(se.location>=0){let ae=Z[G];if(ae===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ae!==void 0){const B=ae.normalized,Q=ae.itemSize,ze=e.get(ae);if(ze===void 0)continue;const Ke=ze.buffer,Xe=ze.type,oe=ze.bytesPerElement,Te=Xe===n.INT||Xe===n.UNSIGNED_INT||ae.gpuType===Gp;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Oe=ve.stride,tt=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<se.locationSize;Qe++)x(se.location+Qe,ve.meshPerAttribute);z.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<se.locationSize;Qe++)S(se.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Qe=0;Qe<se.locationSize;Qe++)I(se.location+Qe,Q/se.locationSize,Xe,B,Oe*oe,(tt+Q/se.locationSize*Qe)*oe,Te)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<se.locationSize;ve++)x(se.location+ve,ae.meshPerAttribute);z.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<se.locationSize;ve++)S(se.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let ve=0;ve<se.locationSize;ve++)I(se.location+ve,Q/se.locationSize,Xe,B,Q*oe,Q/se.locationSize*ve*oe,Te)}}else if(K!==void 0){const B=K[G];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(se.location,B);break;case 3:n.vertexAttrib3fv(se.location,B);break;case 4:n.vertexAttrib4fv(se.location,B);break;default:n.vertexAttrib1fv(se.location,B)}}}}L()}function P(){N();for(const z in r){const j=r[z];for(const he in j){const ge=j[he];for(const Z in ge){const pe=ge[Z];for(const K in pe)m(pe[K].object),delete pe[K];delete ge[Z]}}delete r[z]}}function D(z){if(r[z.id]===void 0)return;const j=r[z.id];for(const he in j){const ge=j[he];for(const Z in ge){const pe=ge[Z];for(const K in pe)m(pe[K].object),delete pe[K];delete ge[Z]}}delete r[z.id]}function F(z){for(const j in r){const he=r[j];for(const ge in he){const Z=he[ge];if(Z[z.id]===void 0)continue;const pe=Z[z.id];for(const K in pe)m(pe[K].object),delete pe[K];delete Z[z.id]}}}function T(z){for(const j in r){const he=r[j],ge=z.isInstancedMesh===!0?z.id:0,Z=he[ge];if(Z!==void 0){for(const pe in Z){const K=Z[pe];for(const G in K)m(K[G].object),delete K[G];delete Z[pe]}delete he[ge],Object.keys(he).length===0&&delete r[j]}}}function N(){V(),u=!0,l!==o&&(l=o,h(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function QA(n,e,t){let r;function o(d){r=d}function l(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,m){m!==0&&(n.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let g=0;for(let y=0;y<m;y++)g+=h[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function JA(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ni&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const T=F===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==xi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!T)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(ot("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:R,maxSamples:P,samples:D}}function eC(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new As,f=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||r!==0||o;return o=g,r=v.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const L=l?0:r,I=L*4;let R=x.clippingState||null;d.value=R,R=m(M,g,I,y);for(let P=0;P!==I;++P)R[P]=t[P];x.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,g,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const x=y+A*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,R=y;I!==A;++I,R+=4)u.copy(v[I]).applyMatrix4(L,f),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const jr=4,Wv=[.125,.215,.35,.446,.526,.582],Ps=20,tC=256,Ka=new vy,Xv=new xt;let Jd=null,eh=0,th=0,nh=!1;const nC=new J;class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=nC}=l;Jd=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:xr,format:Ni,colorSpace:gc,depthBuffer:!1},o=qv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qv(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iC(l)),this._blurMaterial=sC(l,e,t),this._ggxMaterial=rC(l,e,t)}return o}_compileMaterial(e){const t=new Fi(new si,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,r,o,l){const d=new _i(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Xv),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new gl,new Qp({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,x=!0):(S.color.copy(Xv),x=!0);for(let I=0;I<6;I++){const R=I%3;R===0?(d.up.set(0,h[I],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[I],l.y,l.z)):R===1?(d.up.set(0,0,h[I]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[I],l.z)):(d.up.set(0,h[I],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[I]));const P=this._cubeSize;Do(o,R*P,I>2?P:0,P,P),v.setRenderTarget(o),x&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=g,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Us||e.mapping===Wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Do(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ka)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),g=0+h*1.25,y=v*g,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-jr?r-M+jr:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Do(l,S,x,3*A,2*A),o.setRenderTarget(l),o.render(f,Ka),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,Do(e,S,x,3*A,2*A),o.setRenderTarget(e),o.render(f,Ka)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Ps-1),A=l/M,S=isFinite(l)?1+Math.floor(m*A):Ps;S>Ps&&ot(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ps}`);const x=[];let L=0;for(let F=0;F<Ps;++F){const T=F/A,N=Math.exp(-T*T/2);x.push(N),F===0?L+=N:F<S&&(L+=2*N)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:I}=this;g.dTheta.value=M,g.mipInt.value=I-r;const R=this._sizeLods[o],P=3*R*(o>I-jr?o-I+jr:0),D=4*(this._cubeSize-R);Do(t,P,D,3*R,2*R),d.setRenderTarget(t),d.render(v,Ka)}}function iC(n){const e=[],t=[],r=[];let o=n;const l=n-jr+1+Wv.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>n-jr?d=Wv[u-n+jr-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,v=1+h,g=[m,m,v,m,v,v,m,m,v,v,m,v],y=6,M=6,A=3,S=2,x=1,L=new Float32Array(A*M*y),I=new Float32Array(S*M*y),R=new Float32Array(x*M*y);for(let D=0;D<y;D++){const F=D%3*2/3-1,T=D>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];L.set(N,A*M*D),I.set(g,S*M*D);const V=[D,D,D,D,D,D];R.set(V,x*M*D)}const P=new si;P.setAttribute("position",new Nn(L,A)),P.setAttribute("uv",new Nn(I,S)),P.setAttribute("faceIndex",new Nn(R,x)),r.push(new Fi(P,null)),o>jr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function qv(n,e,t){const r=new Ki(n,e,t);return r.texture.mapping=Lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Do(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function rC(n,e,t){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function sC(n,e,t){const r=new Float32Array(Ps),o=new J(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Kv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function $v(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yy extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new hy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new gl(5,5,5),l=new Qi({name:"CubemapFromEquirect",uniforms:Yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:mr});l.uniforms.tEquirect.value=t;const u=new Fi(o,l),f=t.minFilter;return t.minFilter===Ds&&(t.minFilter=In),new f1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function oC(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Td||y===wd)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new yy(M.height);return A.fromEquirectangularTexture(n,g),e.set(g,A),g.addEventListener("dispose",h),f(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,M=y===Td||y===wd,A=y===Us||y===Wo;if(M||A){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Yv(n)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const L=g.image;return M&&L&&L.height>0||A&&L&&d(L)?(r===null&&(r=new Yv(n)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",m),S.texture):null}}}return g}function f(g,y){return y===Td?g.mapping=Us:y===wd&&(g.mapping=Wo),g}function d(g){let y=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&y++;return y===M}function h(g){const y=g.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function m(g){const y=g.target;y.removeEventListener("dispose",m);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function aC(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&zo("WebGLRenderer: "+r+" extension not supported."),o}}}function lC(n,e,t,r){const o={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const y in g)e.update(g[y],n.ARRAY_BUFFER)}function h(v){const g=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const L=y.array;A=y.version;for(let I=0,R=L.length;I<R;I+=3){const P=L[I+0],D=L[I+1],F=L[I+2];g.push(P,D,D,F,F,P)}}else{const L=M.array;A=M.version;for(let I=0,R=L.length/3-1;I<R;I+=3){const P=I+0,D=I+1,F=I+2;g.push(P,D,D,F,F,P)}}const S=new(M.count>=65535?oy:sy)(g,1);S.version=A;const x=l.get(v);x&&e.remove(x),l.set(v,S)}function m(v){const g=l.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function uC(n,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,g){n.drawElements(r,g,l,v*u),t.update(g,r,1)}function h(v,g,y){y!==0&&(n.drawElementsInstanced(r,g,l,v*u,y),t.update(g,r,y))}function m(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,v,0,y);let A=0;for(let S=0;S<y;S++)A+=g[S];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function cC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:Tt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function fC(n,e,t){const r=new WeakMap,o=new rn;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=r.get(f);if(g===void 0||g.count!==v){let V=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",V)};var y=V;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),S===!0&&(R=3);let P=f.attributes.position.count*R,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*D*4*v),T=new ny(F,P,D,v);T.type=Ii,T.needsUpdate=!0;const N=R*4;for(let z=0;z<v;z++){const j=x[z],he=L[z],ge=I[z],Z=P*D*4*z;for(let pe=0;pe<j.count;pe++){const K=pe*N;M===!0&&(o.fromBufferAttribute(j,pe),F[Z+K+0]=o.x,F[Z+K+1]=o.y,F[Z+K+2]=o.z,F[Z+K+3]=0),A===!0&&(o.fromBufferAttribute(he,pe),F[Z+K+4]=o.x,F[Z+K+5]=o.y,F[Z+K+6]=o.z,F[Z+K+7]=0),S===!0&&(o.fromBufferAttribute(ge,pe),F[Z+K+8]=o.x,F[Z+K+9]=o.y,F[Z+K+10]=o.z,F[Z+K+11]=ge.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new mt(P,D)},r.set(f,g),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:l}}function dC(n,e,t,r,o){let l=new WeakMap;function u(h){const m=o.render.frame,v=h.geometry,g=e.get(h,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:f}}const hC={[Gx]:"LINEAR_TONE_MAPPING",[zp]:"REINHARD_TONE_MAPPING",[Hx]:"CINEON_TONE_MAPPING",[Wx]:"ACES_FILMIC_TONE_MAPPING",[Yx]:"AGX_TONE_MAPPING",[qx]:"NEUTRAL_TONE_MAPPING",[Xx]:"CUSTOM_TONE_MAPPING"};function pC(n,e,t,r,o,l){const u=new Ki(e,t,{type:n,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new Xo(e,t):void 0}),f=new Ki(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),d=new si;d.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const h=new l1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Fi(d,h),v=new vy(-1,1,1,-1,0,1);let g=null,y=null,M=!1,A,S=null,x=[],L=!1;this.setSize=function(I,R){u.setSize(I,R),f.setSize(I,R);for(let P=0;P<x.length;P++){const D=x[P];D.setSize&&D.setSize(I,R)}},this.setEffects=function(I){x=I,L=x.length>0&&x[0].isRenderPass===!0;const R=u.width,P=u.height;for(let D=0;D<x.length;D++){const F=x[D];F.setSize&&F.setSize(R,P)}},this.begin=function(I,R){if(M||I.toneMapping===qi&&x.length===0)return!1;if(S=R,R!==null){const P=R.width,D=R.height;(u.width!==P||u.height!==D)&&this.setSize(P,D)}return L===!1&&I.setRenderTarget(u),A=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return L},this.end=function(I,R){I.toneMapping=A,M=!0;let P=u,D=f;for(let F=0;F<x.length;F++){const T=x[F];if(T.enabled!==!1&&(T.render(I,D,P,R),T.needsSwap!==!1)){const N=P;P=D,D=N}}if(g!==I.outputColorSpace||y!==I.toneMapping){g=I.outputColorSpace,y=I.toneMapping,h.defines={},yt.getTransfer(g)===Ut&&(h.defines.SRGB_TRANSFER="");const F=hC[y];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,I.setRenderTarget(S),I.render(m,v),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),d.dispose(),h.dispose()}}const Sy=new Fn,yp=new Xo(1,1),My=new ny,Ey=new UT,Ty=new hy,jv=[],Zv=[],Qv=new Float32Array(16),Jv=new Float32Array(9),e_=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=jv[o];if(l===void 0&&(l=new Float32Array(o),jv[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Nc(n,e){let t=Zv[e];t===void 0&&(t=new Int32Array(e),Zv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function mC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function vC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function xC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;e_.set(r),n.uniformMatrix2fv(this.addr,!1,e_),mn(t,r)}}function yC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;Jv.set(r),n.uniformMatrix3fv(this.addr,!1,Jv),mn(t,r)}}function SC(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;Qv.set(r),n.uniformMatrix4fv(this.addr,!1,Qv),mn(t,r)}}function MC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function EC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function TC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function wC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function AC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function RC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function bC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function PC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(yp.compareFunction=t.isReversedDepthBuffer()?jp:$p,l=yp):l=Sy,t.setTexture2D(e||l,o)}function DC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Ey,o)}function LC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ty,o)}function IC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||My,o)}function NC(n){switch(n){case 5126:return mC;case 35664:return gC;case 35665:return vC;case 35666:return _C;case 35674:return xC;case 35675:return yC;case 35676:return SC;case 5124:case 35670:return MC;case 35667:case 35671:return EC;case 35668:case 35672:return TC;case 35669:case 35673:return wC;case 5125:return AC;case 36294:return CC;case 36295:return RC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return PC;case 35679:case 36299:case 36307:return DC;case 35680:case 36300:case 36308:case 36293:return LC;case 36289:case 36303:case 36311:case 36292:return IC}}function UC(n,e){n.uniform1fv(this.addr,e)}function FC(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function OC(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function BC(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function kC(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VC(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zC(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GC(n,e){n.uniform1iv(this.addr,e)}function HC(n,e){n.uniform2iv(this.addr,e)}function WC(n,e){n.uniform3iv(this.addr,e)}function XC(n,e){n.uniform4iv(this.addr,e)}function YC(n,e){n.uniform1uiv(this.addr,e)}function qC(n,e){n.uniform2uiv(this.addr,e)}function KC(n,e){n.uniform3uiv(this.addr,e)}function $C(n,e){n.uniform4uiv(this.addr,e)}function jC(n,e,t){const r=this.cache,o=e.length,l=Nc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));let u;this.type===n.SAMPLER_2D_SHADOW?u=yp:u=Sy;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function ZC(n,e,t){const r=this.cache,o=e.length,l=Nc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Ey,l[u])}function QC(n,e,t){const r=this.cache,o=e.length,l=Nc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ty,l[u])}function JC(n,e,t){const r=this.cache,o=e.length,l=Nc(t,o);pn(r,l)||(n.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||My,l[u])}function eR(n){switch(n){case 5126:return UC;case 35664:return FC;case 35665:return OC;case 35666:return BC;case 35674:return kC;case 35675:return VC;case 35676:return zC;case 5124:case 35670:return GC;case 35667:case 35671:return HC;case 35668:case 35672:return WC;case 35669:case 35673:return XC;case 5125:return YC;case 36294:return qC;case 36295:return KC;case 36296:return $C;case 35678:case 36198:case 36298:case 36306:case 35682:return jC;case 35679:case 36299:case 36307:return ZC;case 35680:case 36300:case 36308:case 36293:return QC;case 36289:case 36303:case 36311:case 36292:return JC}}class tR{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NC(t.type)}}class nR{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eR(t.type)}}class iR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function t_(n,e){n.seq.push(e),n.map[e.id]=e}function rR(n,e,t){const r=n.name,o=r.length;for(ih.lastIndex=0;;){const l=ih.exec(r),u=ih.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){t_(t,h===void 0?new tR(f,n,e):new nR(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new iR(f),t_(t,v)),t=v}}}class cc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);rR(f,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function n_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const sR=37297;let oR=0;function aR(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const i_=new ct;function lR(n){yt._getMatrix(i_,yt.workingColorSpace,n);const e=`mat3( ${i_.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case vc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function r_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+aR(n.getShaderSource(e),f)}else return l}function uR(n,e){const t=lR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cR={[Gx]:"Linear",[zp]:"Reinhard",[Hx]:"Cineon",[Wx]:"ACESFilmic",[Yx]:"AgX",[qx]:"Neutral",[Xx]:"Custom"};function fR(n,e){const t=cR[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ju=new J;function dR(){yt.getLuminanceCoefficients(Ju);const n=Ju.x.toFixed(4),e=Ju.y.toFixed(4),t=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function pR(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function mR(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Ja(n){return n!==""}function s_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(n){return n.replace(gR,_R)}const vR=new Map;function _R(n,e){let t=ht[e];if(t===void 0){const r=vR.get(e);if(r!==void 0)t=ht[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sp(t)}const xR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(n){return n.replace(xR,yR)}function yR(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function l_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SR={[sc]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function MR(n){return SR[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ER={[Us]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function TR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ER[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const wR={[Wo]:"ENVMAP_MODE_REFRACTION"};function AR(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CR={[zx]:"ENVMAP_BLENDING_MULTIPLY",[pT]:"ENVMAP_BLENDING_MIX",[mT]:"ENVMAP_BLENDING_ADD"};function RR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":CR[n.combine]||"ENVMAP_BLENDING_NONE"}function bR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function PR(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=MR(t),h=TR(t),m=AR(t),v=RR(t),g=bR(t),y=hR(t),M=pR(l),A=o.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ja).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ja).join(`
`),x.length>0&&(x+=`
`)):(S=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),x=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ht.tonemapping_pars_fragment:"",t.toneMapping!==qi?fR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,uR("linearToOutputTexel",t.outputColorSpace),dR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),u=Sp(u),u=s_(u,t),u=o_(u,t),f=Sp(f),f=s_(f,t),f=o_(f,t),u=a_(u),f=a_(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=L+S+u,R=L+x+f,P=n_(o,o.VERTEX_SHADER,I),D=n_(o,o.FRAGMENT_SHADER,R);o.attachShader(A,P),o.attachShader(A,D),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(z){if(n.debug.checkShaderErrors){const j=o.getProgramInfoLog(A)||"",he=o.getShaderInfoLog(P)||"",ge=o.getShaderInfoLog(D)||"",Z=j.trim(),pe=he.trim(),K=ge.trim();let G=!0,se=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,P,D);else{const ae=r_(o,P,"vertex"),B=r_(o,D,"fragment");Tt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+ae+`
`+B)}else Z!==""?ot("WebGLProgram: Program Info Log:",Z):(pe===""||K==="")&&(se=!1);se&&(z.diagnostics={runnable:G,programLog:Z,vertexShader:{log:pe,prefix:S},fragmentShader:{log:K,prefix:x}})}o.deleteShader(P),o.deleteShader(D),T=new cc(o,A),N=mR(o,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(A,sR)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=D,this}let DR=0;class LR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new IR(e),t.set(e,r)),r}}class IR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function NR(n){return n===Fs||n===pc||n===mc}function UR(n,e,t,r,o,l){const u=new iy,f=new LR,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function A(T,N,V,z,j,he){const ge=z.fog,Z=j.geometry,pe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||pe,K),se=G&&G.mapping===Lc?G.image.height:null,ae=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const B=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=B!==void 0?B.length:0;let ze=0;Z.morphAttributes.position!==void 0&&(ze=1),Z.morphAttributes.normal!==void 0&&(ze=2),Z.morphAttributes.color!==void 0&&(ze=3);let Ke,Xe,oe,Te;if(ae){const Ve=Wi[ae];Ke=Ve.vertexShader,Xe=Ve.fragmentShader}else{Ke=T.vertexShader,Xe=T.fragmentShader;const Ve=f.getVertexShaderStage(T),Rt=f.getFragmentShaderStage(T);f.update(T,Ve,Rt),oe=Ve.id,Te=Rt.id}const ve=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),tt=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,Vt=!!T.map,ft=!!T.matcap,wt=!!G,_t=!!T.aoMap,dt=!!T.lightMap,Lt=!!T.bumpMap&&T.wireframe===!1,Wt=!!T.normalMap,Ot=!!T.displacementMap,Bt=!!T.emissiveMap,At=!!T.metalnessMap,kt=!!T.roughnessMap,q=T.anisotropy>0,fn=T.clearcoat>0,Mt=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,b=T.transmission>0,W=q&&!!T.anisotropyMap,X=fn&&!!T.clearcoatMap,de=fn&&!!T.clearcoatNormalMap,xe=fn&&!!T.clearcoatRoughnessMap,te=U&&!!T.iridescenceMap,ce=U&&!!T.iridescenceThicknessMap,Se=E&&!!T.sheenColorMap,_e=E&&!!T.sheenRoughnessMap,Me=!!T.specularMap,me=!!T.specularColorMap,Re=!!T.specularIntensityMap,Pe=b&&!!T.transmissionMap,Fe=b&&!!T.thicknessMap,k=!!T.gradientMap,Ee=!!T.alphaMap,fe=T.alphaTest>0,Ce=!!T.alphaHash,Le=!!T.extensions;let ye=qi;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ye=n.toneMapping);const ke={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:Ke,fragmentShader:Xe,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&j._colorsTexture!==null,instancing:tt,instancingColor:tt&&j.instanceColor!==null,instancingMorph:tt&&j.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Vt,matcap:ft,envMap:wt,envMapMode:wt&&G.mapping,envMapCubeUVHeight:se,aoMap:_t,lightMap:dt,bumpMap:Lt,normalMap:Wt,displacementMap:Ot,emissiveMap:Bt,normalMapObjectSpace:Wt&&T.normalMapType===_T,normalMapTangentSpace:Wt&&T.normalMapType===hv,packedNormalMap:Wt&&T.normalMapType===hv&&NR(T.normalMap.format),metalnessMap:At,roughnessMap:kt,anisotropy:q,anisotropyMap:W,clearcoat:fn,clearcoatMap:X,clearcoatNormalMap:de,clearcoatRoughnessMap:xe,dispersion:Mt,iridescence:U,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:E,sheenColorMap:Se,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:me,specularIntensityMap:Re,transmission:b,transmissionMap:Pe,thicknessMap:Fe,gradientMap:k,opaque:T.transparent===!1&&T.blending===Vo&&T.alphaToCoverage===!1,alphaMap:Ee,alphaTest:fe,alphaHash:Ce,combine:T.combine,mapUv:Vt&&M(T.map.channel),aoMapUv:_t&&M(T.aoMap.channel),lightMapUv:dt&&M(T.lightMap.channel),bumpMapUv:Lt&&M(T.bumpMap.channel),normalMapUv:Wt&&M(T.normalMap.channel),displacementMapUv:Ot&&M(T.displacementMap.channel),emissiveMapUv:Bt&&M(T.emissiveMap.channel),metalnessMapUv:At&&M(T.metalnessMap.channel),roughnessMapUv:kt&&M(T.roughnessMap.channel),anisotropyMapUv:W&&M(T.anisotropyMap.channel),clearcoatMapUv:X&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:de&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&M(T.sheenRoughnessMap.channel),specularMapUv:Me&&M(T.specularMap.channel),specularColorMapUv:me&&M(T.specularColorMap.channel),specularIntensityMapUv:Re&&M(T.specularIntensityMap.channel),transmissionMapUv:Pe&&M(T.transmissionMap.channel),thicknessMapUv:Fe&&M(T.thicknessMap.channel),alphaMapUv:Ee&&M(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Wt||q),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(Vt||Ee),fog:!!ge,useFog:T.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&Wt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Oe,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ze,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Vt&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===Ut,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&yt.getTransfer(T.emissiveMap.colorSpace)===Ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===hr,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ke.vertexUv1s=d.has(1),ke.vertexUv2s=d.has(2),ke.vertexUv3s=d.has(3),d.clear(),ke}function S(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)N.push(V),N.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(x(N,T),L(N,T),N.push(n.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function x(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function L(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const N=y[T.type];let V;if(N){const z=Wi[N];V=s1.clone(z.uniforms)}else V=T.uniforms;return V}function R(T,N){let V=m.get(N);return V!==void 0?++V.usedTimes:(V=new PR(n,N,T,o),h.push(V),m.set(N,V)),V}function P(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function D(T){f.remove(T)}function F(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:I,acquireProgram:R,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:F}}function FR(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function OR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function c_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,M,A,S,x){let L=n[e];return L===void 0?(L={id:g.id,object:g,geometry:y,material:M,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:x},n[e]=L):(L.id=g.id,L.object=g,L.geometry=y,L.material=M,L.materialVariant=u(g),L.groupOrder=A,L.renderOrder=g.renderOrder,L.z=S,L.group=x),e++,L}function d(g,y,M,A,S,x){const L=f(g,y,M,A,S,x);M.transmission>0?r.push(L):M.transparent===!0?o.push(L):t.push(L)}function h(g,y,M,A,S,x){const L=f(g,y,M,A,S,x);M.transmission>0?r.unshift(L):M.transparent===!0?o.unshift(L):t.unshift(L)}function m(g,y,M){t.length>1&&t.sort(g||OR),r.length>1&&r.sort(y||u_),o.length>1&&o.sort(y||u_),M&&(t.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,y=n.length;g<y;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:m}}function BR(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new c_,n.set(r,[u])):o>=l.length?(u=new c_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function kR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new xt};break;case"SpotLight":t={position:new J,direction:new J,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function VR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zR=0;function GR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HR(n){const e=new kR,t=VR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,l=new Ht,u=new Ht;function f(h){let m=0,v=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let y=0,M=0,A=0,S=0,x=0,L=0,I=0,R=0,P=0,D=0,F=0;h.sort(GR);for(let N=0,V=h.length;N<V;N++){const z=h[N],j=z.color,he=z.intensity,ge=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Fs?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=j.r*he,v+=j.g*he,g+=j.b*he;else if(z.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(z.sh.coefficients[pe],he);F++}else if(z.isDirectionalLight){const pe=e.get(z);if(pe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,G=t.get(z);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.directionalShadow[y]=G,r.directionalShadowMap[y]=Z,r.directionalShadowMatrix[y]=z.shadow.matrix,L++}r.directional[y]=pe,y++}else if(z.isSpotLight){const pe=e.get(z);pe.position.setFromMatrixPosition(z.matrixWorld),pe.color.copy(j).multiplyScalar(he),pe.distance=ge,pe.coneCos=Math.cos(z.angle),pe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),pe.decay=z.decay,r.spot[A]=pe;const K=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,K.updateMatrices(z),z.castShadow&&D++),r.spotLightMatrix[A]=K.matrix,z.castShadow){const G=t.get(z);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,r.spotShadow[A]=G,r.spotShadowMap[A]=Z,R++}A++}else if(z.isRectAreaLight){const pe=e.get(z);pe.color.copy(j).multiplyScalar(he),pe.halfWidth.set(z.width*.5,0,0),pe.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=pe,S++}else if(z.isPointLight){const pe=e.get(z);if(pe.color.copy(z.color).multiplyScalar(z.intensity),pe.distance=z.distance,pe.decay=z.decay,z.castShadow){const K=z.shadow,G=t.get(z);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,r.pointShadow[M]=G,r.pointShadowMap[M]=Z,r.pointShadowMatrix[M]=z.shadow.matrix,I++}r.point[M]=pe,M++}else if(z.isHemisphereLight){const pe=e.get(z);pe.skyColor.copy(z.color).multiplyScalar(he),pe.groundColor.copy(z.groundColor).multiplyScalar(he),r.hemi[x]=pe,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==A||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==L||T.numPointShadows!==I||T.numSpotShadows!==R||T.numSpotMaps!==P||T.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=R+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=F,T.directionalLength=y,T.pointLength=M,T.spotLength=A,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=L,T.numPointShadows=I,T.numSpotShadows=R,T.numSpotMaps=P,T.numLightProbes=F,r.version=zR++)}function d(h,m){let v=0,g=0,y=0,M=0,A=0;const S=m.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const I=h[x];if(I.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),v++}else if(I.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(I.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(I.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(S),A++}}}return{setup:f,setupView:d,state:r}}function f_(n){const e=new HR(n),t=[],r=[],o=[];function l(g){v.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function m(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function WR(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new f_(n),e.set(o,[f])):l>=u.length?(f=new f_(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qR=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],KR=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],d_=new Ht,$a=new J,rh=new J;function $R(n,e,t){let r=new fy;const o=new mt,l=new mt,u=new rn,f=new u1,d=new c1,h={},m=t.maxTextureSize,v={[Jr]:Zn,[Zn]:Jr,[hr]:hr},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:XR,fragmentShader:YR}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new si;M.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Fi(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let x=this.type;this.render=function(D,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;this.type===$E&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sc);const N=n.getRenderTarget(),V=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),j=n.state;j.setBlending(mr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const he=x!==this.type;he&&F.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(Z=>Z.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,Z=D.length;ge<Z;ge++){const pe=D[ge],K=pe.shadow;if(K===void 0){ot("WebGLShadowMap:",pe,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const G=K.getFrameExtents();o.multiply(G),l.copy(K.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/G.x),o.x=l.x*G.x,K.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/G.y),o.y=l.y*G.y,K.mapSize.y=l.y));const se=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=se,K.map===null||he===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Za){if(pe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ki(o.x,o.y,{format:Fs,type:xr,minFilter:In,magFilter:In,generateMipmaps:!1}),K.map.texture.name=pe.name+".shadowMap",K.map.depthTexture=new Xo(o.x,o.y,Ii),K.map.depthTexture.name=pe.name+".shadowMapDepth",K.map.depthTexture.format=yr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn}else pe.isPointLight?(K.map=new yy(o.x),K.map.depthTexture=new i1(o.x,Zi)):(K.map=new Ki(o.x,o.y),K.map.depthTexture=new Xo(o.x,o.y,Zi)),K.map.depthTexture.name=pe.name+".shadowMap",K.map.depthTexture.format=yr,this.type===sc?(K.map.depthTexture.compareFunction=se?jp:$p,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn);K.camera.updateProjectionMatrix()}const ae=K.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ae;B++){if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,B),n.clear();else{B===0&&(n.setRenderTarget(K.map),n.clear());const Q=K.getViewport(B);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),j.viewport(u)}if(pe.isPointLight){const Q=K.camera,ze=K.matrix,Ke=pe.distance||Q.far;Ke!==Q.far&&(Q.far=Ke,Q.updateProjectionMatrix()),$a.setFromMatrixPosition(pe.matrixWorld),Q.position.copy($a),rh.copy(Q.position),rh.add(qR[B]),Q.up.copy(KR[B]),Q.lookAt(rh),Q.updateMatrixWorld(),ze.makeTranslation(-$a.x,-$a.y,-$a.z),d_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),K._frustum.setFromProjectionMatrix(d_,Q.coordinateSystem,Q.reversedDepth)}else K.updateMatrices(pe);r=K.getFrustum(),R(F,T,K.camera,pe,this.type)}K.isPointLightShadow!==!0&&this.type===Za&&L(K,T),K.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(N,V,z)};function L(D,F){const T=e.update(A);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ki(o.x,o.y,{format:Fs,type:xr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(F,null,T,g,A,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(F,null,T,y,A,null)}function I(D,F,T,N){let V=null;const z=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)V=z;else if(V=T.isPointLight===!0?d:f,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=V.uuid,he=F.uuid;let ge=h[j];ge===void 0&&(ge={},h[j]=ge);let Z=ge[he];Z===void 0&&(Z=V.clone(),ge[he]=Z,F.addEventListener("dispose",P)),V=Z}if(V.visible=F.visible,V.wireframe=F.wireframe,N===Za?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:v[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const j=n.properties.get(V);j.light=T}return V}function R(D,F,T,N,V){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===Za)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const he=e.update(D),ge=D.material;if(Array.isArray(ge)){const Z=he.groups;for(let pe=0,K=Z.length;pe<K;pe++){const G=Z[pe],se=ge[G.materialIndex];if(se&&se.visible){const ae=I(D,se,N,V);D.onBeforeShadow(n,D,F,T,he,ae,G),n.renderBufferDirect(T,null,he,ae,D,G),D.onAfterShadow(n,D,F,T,he,ae,G)}}}else if(ge.visible){const Z=I(D,ge,N,V);D.onBeforeShadow(n,D,F,T,he,Z,null),n.renderBufferDirect(T,null,he,Z,D,null),D.onAfterShadow(n,D,F,T,he,Z,null)}}const j=D.children;for(let he=0,ge=j.length;he<ge;he++)R(j[he],F,T,N,V)}function P(D){D.target.removeEventListener("dispose",P);for(const T in h){const N=h[T],V=D.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function jR(n,e){function t(){let k=!1;const Ee=new rn;let fe=null;const Ce=new rn(0,0,0,0);return{setMask:function(Le){fe!==Le&&!k&&(n.colorMask(Le,Le,Le,Le),fe=Le)},setLocked:function(Le){k=Le},setClear:function(Le,ye,ke,Ve,Rt){Rt===!0&&(Le*=Ve,ye*=Ve,ke*=Ve),Ee.set(Le,ye,ke,Ve),Ce.equals(Ee)===!1&&(n.clearColor(Le,ye,ke,Ve),Ce.copy(Ee))},reset:function(){k=!1,fe=null,Ce.set(-1,0,0,0)}}}function r(){let k=!1,Ee=!1,fe=null,Ce=null,Le=null;return{setReversed:function(ye){if(Ee!==ye){const ke=e.get("EXT_clip_control");ye?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ee=ye;const Ve=Le;Le=null,this.setClear(Ve)}},getReversed:function(){return Ee},setTest:function(ye){ye?ve(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(ye){fe!==ye&&!k&&(n.depthMask(ye),fe=ye)},setFunc:function(ye){if(Ee&&(ye=RT[ye]),Ce!==ye){switch(ye){case Dh:n.depthFunc(n.NEVER);break;case Lh:n.depthFunc(n.ALWAYS);break;case Ih:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case Nh:n.depthFunc(n.EQUAL);break;case Uh:n.depthFunc(n.GEQUAL);break;case Fh:n.depthFunc(n.GREATER);break;case Oh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Le!==ye&&(Le=ye,Ee&&(ye=1-ye),n.clearDepth(ye))},reset:function(){k=!1,fe=null,Ce=null,Le=null,Ee=!1}}}function o(){let k=!1,Ee=null,fe=null,Ce=null,Le=null,ye=null,ke=null,Ve=null,Rt=null;return{setTest:function(Pt){k||(Pt?ve(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Pt){Ee!==Pt&&!k&&(n.stencilMask(Pt),Ee=Pt)},setFunc:function(Pt,wn,ai){(fe!==Pt||Ce!==wn||Le!==ai)&&(n.stencilFunc(Pt,wn,ai),fe=Pt,Ce=wn,Le=ai)},setOp:function(Pt,wn,ai){(ye!==Pt||ke!==wn||Ve!==ai)&&(n.stencilOp(Pt,wn,ai),ye=Pt,ke=wn,Ve=ai)},setLocked:function(Pt){k=Pt},setClear:function(Pt){Rt!==Pt&&(n.clearStencil(Pt),Rt=Pt)},reset:function(){k=!1,Ee=null,fe=null,Ce=null,Le=null,ye=null,ke=null,Ve=null,Rt=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},v={},g={},y=new WeakMap,M=[],A=null,S=!1,x=null,L=null,I=null,R=null,P=null,D=null,F=null,T=new xt(0,0,0),N=0,V=!1,z=null,j=null,he=null,ge=null,Z=null;const pe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(se)[1]),K=G>=1):se.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),K=G>=2);let ae=null,B={};const Q=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Ke=new rn().fromArray(Q),Xe=new rn().fromArray(ze);function oe(k,Ee,fe,Ce){const Le=new Uint8Array(4),ye=n.createTexture();n.bindTexture(k,ye),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<fe;ke++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Ee+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return ye}const Te={};Te[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(n.DEPTH_TEST),u.setFunc(Ho),Lt(!1),Wt(cv),ve(n.CULL_FACE),_t(mr);function ve(k){m[k]!==!0&&(n.enable(k),m[k]=!0)}function Oe(k){m[k]!==!1&&(n.disable(k),m[k]=!1)}function tt(k,Ee){return g[k]!==Ee?(n.bindFramebuffer(k,Ee),g[k]=Ee,k===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ee),k===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Qe(k,Ee){let fe=M,Ce=!1;if(k){fe=y.get(Ee),fe===void 0&&(fe=[],y.set(Ee,fe));const Le=k.textures;if(fe.length!==Le.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,ke=Le.length;ye<ke;ye++)fe[ye]=n.COLOR_ATTACHMENT0+ye;fe.length=Le.length,Ce=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(fe)}function Vt(k){return A!==k?(n.useProgram(k),A=k,!0):!1}const ft={[bs]:n.FUNC_ADD,[ZE]:n.FUNC_SUBTRACT,[QE]:n.FUNC_REVERSE_SUBTRACT};ft[JE]=n.MIN,ft[eT]=n.MAX;const wt={[tT]:n.ZERO,[nT]:n.ONE,[iT]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[uT]:n.SRC_ALPHA_SATURATE,[aT]:n.DST_COLOR,[sT]:n.DST_ALPHA,[rT]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[lT]:n.ONE_MINUS_DST_COLOR,[oT]:n.ONE_MINUS_DST_ALPHA,[cT]:n.CONSTANT_COLOR,[fT]:n.ONE_MINUS_CONSTANT_COLOR,[dT]:n.CONSTANT_ALPHA,[hT]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(k,Ee,fe,Ce,Le,ye,ke,Ve,Rt,Pt){if(k===mr){S===!0&&(Oe(n.BLEND),S=!1);return}if(S===!1&&(ve(n.BLEND),S=!0),k!==jE){if(k!==x||Pt!==V){if((L!==bs||P!==bs)&&(n.blendEquation(n.FUNC_ADD),L=bs,P=bs),Pt)switch(k){case Vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFunc(n.ONE,n.ONE);break;case fv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Tt("WebGLState: Invalid blending: ",k);break}else switch(k){case Vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fv:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dv:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",k);break}I=null,R=null,D=null,F=null,T.set(0,0,0),N=0,x=k,V=Pt}return}Le=Le||Ee,ye=ye||fe,ke=ke||Ce,(Ee!==L||Le!==P)&&(n.blendEquationSeparate(ft[Ee],ft[Le]),L=Ee,P=Le),(fe!==I||Ce!==R||ye!==D||ke!==F)&&(n.blendFuncSeparate(wt[fe],wt[Ce],wt[ye],wt[ke]),I=fe,R=Ce,D=ye,F=ke),(Ve.equals(T)===!1||Rt!==N)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Rt),T.copy(Ve),N=Rt),x=k,V=!1}function dt(k,Ee){k.side===hr?Oe(n.CULL_FACE):ve(n.CULL_FACE);let fe=k.side===Zn;Ee&&(fe=!fe),Lt(fe),k.blending===Vo&&k.transparent===!1?_t(mr):_t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ce=k.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Bt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(k){z!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),z=k)}function Wt(k){k!==qE?(ve(n.CULL_FACE),k!==j&&(k===cv?n.cullFace(n.BACK):k===KE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),j=k}function Ot(k){k!==he&&(K&&n.lineWidth(k),he=k)}function Bt(k,Ee,fe){k?(ve(n.POLYGON_OFFSET_FILL),(ge!==Ee||Z!==fe)&&(ge=Ee,Z=fe,u.getReversed()&&(Ee=-Ee),n.polygonOffset(Ee,fe))):Oe(n.POLYGON_OFFSET_FILL)}function At(k){k?ve(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function kt(k){k===void 0&&(k=n.TEXTURE0+pe-1),ae!==k&&(n.activeTexture(k),ae=k)}function q(k,Ee,fe){fe===void 0&&(ae===null?fe=n.TEXTURE0+pe-1:fe=ae);let Ce=B[fe];Ce===void 0&&(Ce={type:void 0,texture:void 0},B[fe]=Ce),(Ce.type!==k||Ce.texture!==Ee)&&(ae!==fe&&(n.activeTexture(fe),ae=fe),n.bindTexture(k,Ee||Te[k]),Ce.type=k,Ce.texture=Ee)}function fn(){const k=B[ae];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Mt(){try{n.compressedTexImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function E(){try{n.texSubImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function b(){try{n.texSubImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function de(){try{n.texStorage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function xe(){try{n.texStorage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function te(){try{n.texImage2D(...arguments)}catch(k){Tt("WebGLState:",k)}}function ce(){try{n.texImage3D(...arguments)}catch(k){Tt("WebGLState:",k)}}function Se(k){return v[k]!==void 0?v[k]:n.getParameter(k)}function _e(k,Ee){v[k]!==Ee&&(n.pixelStorei(k,Ee),v[k]=Ee)}function Me(k){Ke.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function me(k){Xe.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function Re(k,Ee){let fe=h.get(Ee);fe===void 0&&(fe=new WeakMap,h.set(Ee,fe));let Ce=fe.get(k);Ce===void 0&&(Ce=n.getUniformBlockIndex(Ee,k.name),fe.set(k,Ce))}function Pe(k,Ee){const Ce=h.get(Ee).get(k);d.get(Ee)!==Ce&&(n.uniformBlockBinding(Ee,Ce,k.__bindingPointIndex),d.set(Ee,Ce))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},ae=null,B={},g={},y=new WeakMap,M=[],A=null,S=!1,x=null,L=null,I=null,R=null,P=null,D=null,F=null,T=new xt(0,0,0),N=0,V=!1,z=null,j=null,he=null,ge=null,Z=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Oe,bindFramebuffer:tt,drawBuffers:Qe,useProgram:Vt,setBlending:_t,setMaterial:dt,setFlipSided:Lt,setCullFace:Wt,setLineWidth:Ot,setPolygonOffset:Bt,setScissorTest:At,activeTexture:kt,bindTexture:q,unbindTexture:fn,compressedTexImage2D:Mt,compressedTexImage3D:U,texImage2D:te,texImage3D:ce,pixelStorei:_e,getParameter:Se,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:de,texStorage3D:xe,texSubImage2D:E,texSubImage3D:b,compressedTexSubImage2D:W,compressedTexSubImage3D:X,scissor:Me,viewport:me,reset:Fe}}function ZR(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,m=new WeakMap,v=new Set;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):xc("canvas")}function S(U,E,b){let W=1;const X=Mt(U);if((X.width>b||X.height>b)&&(W=b/Math.max(X.width,X.height)),W<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(W*X.width),xe=Math.floor(W*X.height);g===void 0&&(g=A(de,xe));const te=E?A(de,xe):g;return te.width=de,te.height=xe,te.getContext("2d").drawImage(U,0,0,de,xe),ot("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+de+"x"+xe+")."),te}else return"data"in U&&ot("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),U;return U}function x(U){return U.generateMipmaps}function L(U){n.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(U,E,b,W,X,de=!1){if(U!==null){if(n[U]!==void 0)return n[U];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xe;W&&(xe=e.get("EXT_texture_norm16"),xe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===n.RED&&(b===n.FLOAT&&(te=n.R32F),b===n.HALF_FLOAT&&(te=n.R16F),b===n.UNSIGNED_BYTE&&(te=n.R8),b===n.UNSIGNED_SHORT&&xe&&(te=xe.R16_EXT),b===n.SHORT&&xe&&(te=xe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(b===n.UNSIGNED_BYTE&&(te=n.R8UI),b===n.UNSIGNED_SHORT&&(te=n.R16UI),b===n.UNSIGNED_INT&&(te=n.R32UI),b===n.BYTE&&(te=n.R8I),b===n.SHORT&&(te=n.R16I),b===n.INT&&(te=n.R32I)),E===n.RG&&(b===n.FLOAT&&(te=n.RG32F),b===n.HALF_FLOAT&&(te=n.RG16F),b===n.UNSIGNED_BYTE&&(te=n.RG8),b===n.UNSIGNED_SHORT&&xe&&(te=xe.RG16_EXT),b===n.SHORT&&xe&&(te=xe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(b===n.UNSIGNED_BYTE&&(te=n.RG8UI),b===n.UNSIGNED_SHORT&&(te=n.RG16UI),b===n.UNSIGNED_INT&&(te=n.RG32UI),b===n.BYTE&&(te=n.RG8I),b===n.SHORT&&(te=n.RG16I),b===n.INT&&(te=n.RG32I)),E===n.RGB_INTEGER&&(b===n.UNSIGNED_BYTE&&(te=n.RGB8UI),b===n.UNSIGNED_SHORT&&(te=n.RGB16UI),b===n.UNSIGNED_INT&&(te=n.RGB32UI),b===n.BYTE&&(te=n.RGB8I),b===n.SHORT&&(te=n.RGB16I),b===n.INT&&(te=n.RGB32I)),E===n.RGBA_INTEGER&&(b===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),b===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),b===n.UNSIGNED_INT&&(te=n.RGBA32UI),b===n.BYTE&&(te=n.RGBA8I),b===n.SHORT&&(te=n.RGBA16I),b===n.INT&&(te=n.RGBA32I)),E===n.RGB&&(b===n.UNSIGNED_SHORT&&xe&&(te=xe.RGB16_EXT),b===n.SHORT&&xe&&(te=xe.RGB16_SNORM_EXT),b===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),b===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),E===n.RGBA){const ce=de?vc:yt.getTransfer(X);b===n.FLOAT&&(te=n.RGBA32F),b===n.HALF_FLOAT&&(te=n.RGBA16F),b===n.UNSIGNED_BYTE&&(te=ce===Ut?n.SRGB8_ALPHA8:n.RGBA8),b===n.UNSIGNED_SHORT&&xe&&(te=xe.RGBA16_EXT),b===n.SHORT&&xe&&(te=xe.RGBA16_SNORM_EXT),b===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),b===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(U,E){let b;return U?E===null||E===Zi||E===cl?b=n.DEPTH24_STENCIL8:E===Ii?b=n.DEPTH32F_STENCIL8:E===ul&&(b=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===cl?b=n.DEPTH_COMPONENT24:E===Ii?b=n.DEPTH_COMPONENT32F:E===ul&&(b=n.DEPTH_COMPONENT16),b}function D(U,E){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),N(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&v.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),z(E)}function N(U){const E=r.get(U);if(E.__webglInit===void 0)return;const b=U.source,W=y.get(b);if(W){const X=W[E.__cacheKey];X.usedTimes--,X.usedTimes===0&&V(U),Object.keys(W).length===0&&y.delete(b)}r.remove(U)}function V(U){const E=r.get(U);n.deleteTexture(E.__webglTexture);const b=U.source,W=y.get(b);delete W[E.__cacheKey],u.memory.textures--}function z(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let X=0;X<E.__webglFramebuffer[W].length;X++)n.deleteFramebuffer(E.__webglFramebuffer[W][X]);else n.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)n.deleteFramebuffer(E.__webglFramebuffer[W]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const b=U.textures;for(let W=0,X=b.length;W<X;W++){const de=r.get(b[W]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(b[W])}r.remove(U)}let j=0;function he(){j=0}function ge(){return j}function Z(U){j=U}function pe(){const U=j;return U>=o.maxTextures&&ot("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function G(U,E){const b=r.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&b.__version!==U.version){const W=U.image;if(W===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(b,U,E);return}}else U.isExternalTexture&&(b.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,b.__webglTexture,n.TEXTURE0+E)}function se(U,E){const b=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&b.__version!==U.version){Oe(b,U,E);return}else U.isExternalTexture&&(b.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,b.__webglTexture,n.TEXTURE0+E)}function ae(U,E){const b=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&b.__version!==U.version){Oe(b,U,E);return}t.bindTexture(n.TEXTURE_3D,b.__webglTexture,n.TEXTURE0+E)}function B(U,E){const b=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&b.__version!==U.version){tt(b,U,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+E)}const Q={[Bh]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[kh]:n.MIRRORED_REPEAT},ze={[Tn]:n.NEAREST,[gT]:n.NEAREST_MIPMAP_NEAREST,[Au]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Ad]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},Ke={[xT]:n.NEVER,[TT]:n.ALWAYS,[yT]:n.LESS,[$p]:n.LEQUAL,[ST]:n.EQUAL,[jp]:n.GEQUAL,[MT]:n.GREATER,[ET]:n.NOTEQUAL};function Xe(U,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Ad||E.magFilter===Au||E.magFilter===Ds||E.minFilter===In||E.minFilter===Ad||E.minFilter===Au||E.minFilter===Ds)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,Q[E.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,ze[E.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Ke[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Au&&E.minFilter!==Ds||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const b=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function oe(U,E){let b=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const W=E.source;let X=y.get(W);X===void 0&&(X={},y.set(W,X));const de=K(E);if(de!==U.__cacheKey){X[de]===void 0&&(X[de]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,b=!0),X[de].usedTimes++;const xe=X[U.__cacheKey];xe!==void 0&&(X[U.__cacheKey].usedTimes--,xe.usedTimes===0&&V(E)),U.__cacheKey=de,U.__webglTexture=X[de].texture}return b}function Te(U,E,b){return Math.floor(Math.floor(U/b)/E)}function ve(U,E,b,W){const de=U.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,b,W,E.data);else{de.sort((_e,Me)=>_e.start-Me.start);let xe=0;for(let _e=1;_e<de.length;_e++){const Me=de[xe],me=de[_e],Re=Me.start+Me.count,Pe=Te(me.start,E.width,4),Fe=Te(Me.start,E.width,4);me.start<=Re+1&&Pe===Fe&&Te(me.start+me.count-1,E.width,4)===Pe?Me.count=Math.max(Me.count,me.start+me.count-Me.start):(++xe,de[xe]=me)}de.length=xe+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),ce=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Me=de.length;_e<Me;_e++){const me=de[_e],Re=Math.floor(me.start/4),Pe=Math.ceil(me.count/4),Fe=Re%E.width,k=Math.floor(Re/E.width),Ee=Pe,fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Fe,k,Ee,fe,b,W,E.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function Oe(U,E,b){let W=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=n.TEXTURE_3D);const X=oe(U,E),de=E.source;t.bindTexture(W,U.__webglTexture,n.TEXTURE0+b);const xe=r.get(de);if(de.version!==xe.__version||X===!0){if(t.activeTexture(n.TEXTURE0+b),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const fe=yt.getPrimaries(yt.workingColorSpace),Ce=E.colorSpace===$r?null:yt.getPrimaries(E.colorSpace),Le=E.colorSpace===$r||fe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ce=S(E.image,!1,o.maxTextureSize);ce=fn(E,ce);const Se=l.convert(E.format,E.colorSpace),_e=l.convert(E.type);let Me=R(E.internalFormat,Se,_e,E.normalized,E.colorSpace,E.isVideoTexture);Xe(W,E);let me;const Re=E.mipmaps,Pe=E.isVideoTexture!==!0,Fe=xe.__version===void 0||X===!0,k=de.dataReady,Ee=D(E,ce);if(E.isDepthTexture)Me=P(E.format===Ls,E.type),Fe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Me,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Me,ce.width,ce.height,0,Se,_e,null));else if(E.isDataTexture)if(Re.length>0){Pe&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ee,Me,Re[0].width,Re[0].height);for(let fe=0,Ce=Re.length;fe<Ce;fe++)me=Re[fe],Pe?k&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,Se,_e,me.data):t.texImage2D(n.TEXTURE_2D,fe,Me,me.width,me.height,0,Se,_e,me.data);E.generateMipmaps=!1}else Pe?(Fe&&t.texStorage2D(n.TEXTURE_2D,Ee,Me,ce.width,ce.height),k&&ve(E,ce,Se,_e)):t.texImage2D(n.TEXTURE_2D,0,Me,ce.width,ce.height,0,Se,_e,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Me,Re[0].width,Re[0].height,ce.depth);for(let fe=0,Ce=Re.length;fe<Ce;fe++)if(me=Re[fe],E.format!==Ni)if(Se!==null)if(Pe){if(k)if(E.layerUpdates.size>0){const Le=Hv(me.width,me.height,E.format,E.type);for(const ye of E.layerUpdates){const ke=me.data.subarray(ye*Le/me.data.BYTES_PER_ELEMENT,(ye+1)*Le/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,ye,me.width,me.height,1,Se,ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,ce.depth,Se,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Me,me.width,me.height,ce.depth,0,me.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,me.width,me.height,ce.depth,Se,_e,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Me,me.width,me.height,ce.depth,0,Se,_e,me.data)}else{Pe&&Fe&&t.texStorage2D(n.TEXTURE_2D,Ee,Me,Re[0].width,Re[0].height);for(let fe=0,Ce=Re.length;fe<Ce;fe++)me=Re[fe],E.format!==Ni?Se!==null?Pe?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Me,me.width,me.height,0,me.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?k&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,me.width,me.height,Se,_e,me.data):t.texImage2D(n.TEXTURE_2D,fe,Me,me.width,me.height,0,Se,_e,me.data)}else if(E.isDataArrayTexture)if(Pe){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Me,ce.width,ce.height,ce.depth),k)if(E.layerUpdates.size>0){const fe=Hv(ce.width,ce.height,E.format,E.type);for(const Ce of E.layerUpdates){const Le=ce.data.subarray(Ce*fe/ce.data.BYTES_PER_ELEMENT,(Ce+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,ce.width,ce.height,1,Se,_e,Le)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,_e,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ce.width,ce.height,ce.depth,0,Se,_e,ce.data);else if(E.isData3DTexture)Pe?(Fe&&t.texStorage3D(n.TEXTURE_3D,Ee,Me,ce.width,ce.height,ce.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,_e,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ce.width,ce.height,ce.depth,0,Se,_e,ce.data);else if(E.isFramebufferTexture){if(Fe)if(Pe)t.texStorage2D(n.TEXTURE_2D,Ee,Me,ce.width,ce.height);else{let fe=ce.width,Ce=ce.height;for(let Le=0;Le<Ee;Le++)t.texImage2D(n.TEXTURE_2D,Le,Me,fe,Ce,0,Se,_e,null),fe>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const fe=n.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ce.parentNode!==fe){fe.appendChild(ce),v.add(E),fe.onpaint=Ce=>{const Le=Ce.changedElements;for(const ye of v)Le.includes(ye.image)&&(ye.needsUpdate=!0)},fe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ce);else{const Le=n.RGBA,ye=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,ye,ke,ce)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&Fe){const fe=Mt(Re[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Me,fe.width,fe.height)}for(let fe=0,Ce=Re.length;fe<Ce;fe++)me=Re[fe],Pe?k&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Se,_e,me):t.texImage2D(n.TEXTURE_2D,fe,Me,Se,_e,me);E.generateMipmaps=!1}else if(Pe){if(Fe){const fe=Mt(ce);t.texStorage2D(n.TEXTURE_2D,Ee,Me,fe.width,fe.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,_e,ce)}else t.texImage2D(n.TEXTURE_2D,0,Me,Se,_e,ce);x(E)&&L(W),xe.__version=de.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function tt(U,E,b){if(E.image.length!==6)return;const W=oe(U,E),X=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+b);const de=r.get(X);if(X.version!==de.__version||W===!0){t.activeTexture(n.TEXTURE0+b);const xe=yt.getPrimaries(yt.workingColorSpace),te=E.colorSpace===$r?null:yt.getPrimaries(E.colorSpace),ce=E.colorSpace===$r||xe===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let ye=0;ye<6;ye++)!Se&&!_e?Me[ye]=S(E.image[ye],!0,o.maxCubemapSize):Me[ye]=_e?E.image[ye].image:E.image[ye],Me[ye]=fn(E,Me[ye]);const me=Me[0],Re=l.convert(E.format,E.colorSpace),Pe=l.convert(E.type),Fe=R(E.internalFormat,Re,Pe,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ee=de.__version===void 0||W===!0,fe=X.dataReady;let Ce=D(E,me);Xe(n.TEXTURE_CUBE_MAP,E);let Le;if(Se){k&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Fe,me.width,me.height);for(let ye=0;ye<6;ye++){Le=Me[ye].mipmaps;for(let ke=0;ke<Le.length;ke++){const Ve=Le[ke];E.format!==Ni?Re!==null?k?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,Fe,Ve.width,Ve.height,0,Ve.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,0,0,Ve.width,Ve.height,Re,Pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,Fe,Ve.width,Ve.height,0,Re,Pe,Ve.data)}}}else{if(Le=E.mipmaps,k&&Ee){Le.length>0&&Ce++;const ye=Mt(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Fe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(_e){k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Me[ye].width,Me[ye].height,Re,Pe,Me[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Fe,Me[ye].width,Me[ye].height,0,Re,Pe,Me[ye].data);for(let ke=0;ke<Le.length;ke++){const Rt=Le[ke].image[ye].image;k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,0,0,Rt.width,Rt.height,Re,Pe,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,Fe,Rt.width,Rt.height,0,Re,Pe,Rt.data)}}else{k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re,Pe,Me[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Fe,Re,Pe,Me[ye]);for(let ke=0;ke<Le.length;ke++){const Ve=Le[ke];k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,0,0,Re,Pe,Ve.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,Fe,Re,Pe,Ve.image[ye])}}}x(E)&&L(n.TEXTURE_CUBE_MAP),de.__version=X.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Qe(U,E,b,W,X,de){const xe=l.convert(b.format,b.colorSpace),te=l.convert(b.type),ce=R(b.internalFormat,xe,te,b.normalized,b.colorSpace),Se=r.get(E),_e=r.get(b);if(_e.__renderTarget=E,!Se.__hasExternalTextures){const Me=Math.max(1,E.width>>de),me=Math.max(1,E.height>>de);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,de,ce,Me,me,E.depth,0,xe,te,null):t.texImage2D(X,de,ce,Me,me,0,xe,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),kt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,X,_e.__webglTexture,0,At(E)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,X,_e.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(U,E,b){if(n.bindRenderbuffer(n.RENDERBUFFER,U),E.depthBuffer){const W=E.depthTexture,X=W&&W.isDepthTexture?W.type:null,de=P(E.stencilBuffer,X),xe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;kt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At(E),de,E.width,E.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,At(E),de,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,de,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,U)}else{const W=E.textures;for(let X=0;X<W.length;X++){const de=W[X],xe=l.convert(de.format,de.colorSpace),te=l.convert(de.type),ce=R(de.internalFormat,xe,te,de.normalized,de.colorSpace);kt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At(E),ce,E.width,E.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,At(E),ce,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ce,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(U,E,b){const W=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=r.get(E.depthTexture);if(X.__renderTarget=E,(!X.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W){if(X.__webglInit===void 0&&(X.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,E.depthTexture);const Se=l.convert(E.depthTexture.format),_e=l.convert(E.depthTexture.type);let Me;E.depthTexture.format===yr?Me=n.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(Me=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Me,E.width,E.height,0,Se,_e,null)}}else G(E.depthTexture,0);const de=X.__webglTexture,xe=At(E),te=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+b:n.TEXTURE_2D,ce=E.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===yr)kt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,te,de,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ce,te,de,0);else if(E.depthTexture.format===Ls)kt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,te,de,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ce,te,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(U){const E=r.get(U),b=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const W=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){const X=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",X)};W.addEventListener("dispose",X),E.__depthDisposeCallback=X}E.__boundDepthTexture=W}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(b)for(let W=0;W<6;W++)ft(E.__webglFramebuffer[W],U,W);else{const W=U.texture.mipmaps;W&&W.length>0?ft(E.__webglFramebuffer[0],U,0):ft(E.__webglFramebuffer,U,0)}else if(b){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=n.createRenderbuffer(),Vt(E.__webglDepthbuffer[W],U,!1);else{const X=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,de)}}else{const W=U.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Vt(E.__webglDepthbuffer,U,!1);else{const X=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(U,E,b){const W=r.get(U);E!==void 0&&Qe(W.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),b!==void 0&&wt(U)}function dt(U){const E=U.texture,b=r.get(U),W=r.get(E);U.addEventListener("dispose",T);const X=U.textures,de=U.isWebGLCubeRenderTarget===!0,xe=X.length>1;if(xe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=E.version,u.memory.textures++),de){b.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0){b.__webglFramebuffer[te]=[];for(let ce=0;ce<E.mipmaps.length;ce++)b.__webglFramebuffer[te][ce]=n.createFramebuffer()}else b.__webglFramebuffer[te]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){b.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)b.__webglFramebuffer[te]=n.createFramebuffer()}else b.__webglFramebuffer=n.createFramebuffer();if(xe)for(let te=0,ce=X.length;te<ce;te++){const Se=r.get(X[te]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),u.memory.textures++)}if(U.samples>0&&kt(U)===!1){b.__webglMultisampledFramebuffer=n.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let te=0;te<X.length;te++){const ce=X[te];b.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,b.__webglColorRenderbuffer[te]);const Se=l.convert(ce.format,ce.colorSpace),_e=l.convert(ce.type),Me=R(ce.internalFormat,Se,_e,ce.normalized,ce.colorSpace,U.isXRRenderTarget===!0),me=At(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Me,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,b.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(b.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(b.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Qe(b.__webglFramebuffer[te][ce],U,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ce);else Qe(b.__webglFramebuffer[te],U,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);x(E)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,ce=X.length;te<ce;te++){const Se=X[te],_e=r.get(Se);let Me=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,_e.__webglTexture),Xe(Me,Se),Qe(b.__webglFramebuffer,U,Se,n.COLOR_ATTACHMENT0+te,Me,0),x(Se)&&L(Me)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(te=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,W.__webglTexture),Xe(te,E),E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)Qe(b.__webglFramebuffer[ce],U,E,n.COLOR_ATTACHMENT0,te,ce);else Qe(b.__webglFramebuffer,U,E,n.COLOR_ATTACHMENT0,te,0);x(E)&&L(te),t.unbindTexture()}U.depthBuffer&&wt(U)}function Lt(U){const E=U.textures;for(let b=0,W=E.length;b<W;b++){const X=E[b];if(x(X)){const de=I(U),xe=r.get(X).__webglTexture;t.bindTexture(de,xe),L(de),t.unbindTexture()}}}const Wt=[],Ot=[];function Bt(U){if(U.samples>0){if(kt(U)===!1){const E=U.textures,b=U.width,W=U.height;let X=n.COLOR_BUFFER_BIT;const de=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=r.get(U),te=E.length>1;if(te)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ce=U.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const _e=r.get(E[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,b,W,0,0,b,W,X,n.NEAREST),d===!0&&(Wt.length=0,Ot.length=0,Wt.push(n.COLOR_ATTACHMENT0+Se),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Wt.push(de),Ot.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const _e=r.get(E[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const E=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function At(U){return Math.min(o.maxSamples,U.samples)}function kt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(U){const E=u.render.frame;m.get(U)!==E&&(m.set(U,E),U.update())}function fn(U,E){const b=U.colorSpace,W=U.format,X=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||b!==gc&&b!==$r&&(yt.getTransfer(b)===Ut?(W!==Ni||X!==xi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",b)),E}function Mt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=pe,this.resetTextureUnits=he,this.getTextureUnits=ge,this.setTextureUnits=Z,this.setTexture2D=G,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=B,this.rebindTextures=_t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function QR(n,e){function t(r,o=$r){let l;const u=yt.getTransfer(o);if(r===xi)return n.UNSIGNED_BYTE;if(r===Hp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Zx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Qx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===$x)return n.BYTE;if(r===jx)return n.SHORT;if(r===ul)return n.UNSIGNED_SHORT;if(r===Gp)return n.INT;if(r===Zi)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===xr)return n.HALF_FLOAT;if(r===Jx)return n.ALPHA;if(r===ey)return n.RGB;if(r===Ni)return n.RGBA;if(r===yr)return n.DEPTH_COMPONENT;if(r===Ls)return n.DEPTH_STENCIL;if(r===Xp)return n.RED;if(r===Yp)return n.RED_INTEGER;if(r===Fs)return n.RG;if(r===qp)return n.RG_INTEGER;if(r===Kp)return n.RGBA_INTEGER;if(r===oc||r===ac||r===lc||r===uc)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===oc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===oc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vh||r===zh||r===Gh||r===Hh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Vh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wh||r===Xh||r===Yh||r===qh||r===Kh||r===pc||r===$h)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Wh||r===Xh)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===qh)return l.COMPRESSED_R11_EAC;if(r===Kh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===pc)return l.COMPRESSED_RG11_EAC;if(r===$h)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===jh||r===Zh||r===Qh||r===Jh||r===ep||r===tp||r===np||r===ip||r===rp||r===sp||r===op||r===ap||r===lp||r===up)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===jh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jh)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ep)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tp)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===np)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ip)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rp)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sp)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===op)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ap)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lp)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===up)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cp||r===fp||r===dp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cp)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hp||r===pp||r===mc||r===mp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hp)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new py(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Qi({vertexShader:JR,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends Bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,g=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new tb,x={},L=t.getContextAttributes();let I=null,R=null;const P=[],D=[],F=new mt;let T=null;const N=new _i;N.viewport=new rn;const V=new _i;V.viewport=new rn;const z=[N,V],j=new d1;let he=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Te=P[oe];return Te===void 0&&(Te=new Nd,P[oe]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(oe){let Te=P[oe];return Te===void 0&&(Te=new Nd,P[oe]=Te),Te.getGripSpace()},this.getHand=function(oe){let Te=P[oe];return Te===void 0&&(Te=new Nd,P[oe]=Te),Te.getHandSpace()};function Z(oe){const Te=D.indexOf(oe.inputSource);if(Te===-1)return;const ve=P[Te];ve!==void 0&&(ve.update(oe.inputSource,oe.frame,h||u),ve.dispatchEvent({type:oe.type,data:oe.inputSource}))}function pe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",pe),o.removeEventListener("inputsourceschange",K);for(let oe=0;oe<P.length;oe++){const Te=D[oe];Te!==null&&(D[oe]=null,P[oe].disconnect(Te))}he=null,ge=null,S.reset();for(const oe in x)delete x[oe];e.setRenderTarget(I),y=null,g=null,v=null,o=null,R=null,Xe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",pe),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Oe=null,tt=null;L.depth&&(tt=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=L.stencil?Ls:yr,Oe=L.stencil?cl:Zi);const Qe={colorFormat:t.RGBA8,depthFormat:tt,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Qe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ki(g.textureWidth,g.textureHeight,{format:Ni,type:xi,depthTexture:new Xo(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ve={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Ki(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),Xe.setContext(o),Xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(oe){for(let Te=0;Te<oe.removed.length;Te++){const ve=oe.removed[Te],Oe=D.indexOf(ve);Oe>=0&&(D[Oe]=null,P[Oe].disconnect(ve))}for(let Te=0;Te<oe.added.length;Te++){const ve=oe.added[Te];let Oe=D.indexOf(ve);if(Oe===-1){for(let Qe=0;Qe<P.length;Qe++)if(Qe>=D.length){D.push(ve),Oe=Qe;break}else if(D[Qe]===null){D[Qe]=ve,Oe=Qe;break}if(Oe===-1)break}const tt=P[Oe];tt&&tt.connect(ve)}}const G=new J,se=new J;function ae(oe,Te,ve){G.setFromMatrixPosition(Te.matrixWorld),se.setFromMatrixPosition(ve.matrixWorld);const Oe=G.distanceTo(se),tt=Te.projectionMatrix.elements,Qe=ve.projectionMatrix.elements,Vt=tt[14]/(tt[10]-1),ft=tt[14]/(tt[10]+1),wt=(tt[9]+1)/tt[5],_t=(tt[9]-1)/tt[5],dt=(tt[8]-1)/tt[0],Lt=(Qe[8]+1)/Qe[0],Wt=Vt*dt,Ot=Vt*Lt,Bt=Oe/(-dt+Lt),At=Bt*-dt;if(Te.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(At),oe.translateZ(Bt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),tt[10]===-1)oe.projectionMatrix.copy(Te.projectionMatrix),oe.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const kt=Vt+Bt,q=ft+Bt,fn=Wt-At,Mt=Ot+(Oe-At),U=wt*ft/q*kt,E=_t*ft/q*kt;oe.projectionMatrix.makePerspective(fn,Mt,U,E,kt,q),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function B(oe,Te){Te===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Te.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let Te=oe.near,ve=oe.far;S.texture!==null&&(S.depthNear>0&&(Te=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),j.near=V.near=N.near=Te,j.far=V.far=N.far=ve,(he!==j.near||ge!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),he=j.near,ge=j.far),j.layers.mask=oe.layers.mask|6,N.layers.mask=j.layers.mask&-5,V.layers.mask=j.layers.mask&-3;const Oe=oe.parent,tt=j.cameras;B(j,Oe);for(let Qe=0;Qe<tt.length;Qe++)B(tt[Qe],Oe);tt.length===2?ae(j,N,V):j.projectionMatrix.copy(N.projectionMatrix),Q(oe,j,Oe)};function Q(oe,Te,ve){ve===null?oe.matrix.copy(Te.matrixWorld):(oe.matrix.copy(ve.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Te.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Te.projectionMatrix),oe.projectionMatrixInverse.copy(Te.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=vp*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(oe){return x[oe]};let ze=null;function Ke(oe,Te){if(m=Te.getViewerPose(h||u),M=Te,m!==null){const ve=m.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let Oe=!1;ve.length!==j.cameras.length&&(j.cameras.length=0,Oe=!0);for(let ft=0;ft<ve.length;ft++){const wt=ve[ft];let _t=null;if(y!==null)_t=y.getViewport(wt);else{const Lt=v.getViewSubImage(g,wt);_t=Lt.viewport,ft===0&&(e.setRenderTargetTextures(R,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(R))}let dt=z[ft];dt===void 0&&(dt=new _i,dt.layers.enable(ft),dt.viewport=new rn,z[ft]=dt),dt.matrix.fromArray(wt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(wt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(_t.x,_t.y,_t.width,_t.height),ft===0&&(j.matrix.copy(dt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Oe===!0&&j.cameras.push(dt)}const tt=o.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const ft=v.getDepthInformation(ve[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(tt&&tt.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<ve.length;ft++){const wt=ve[ft].camera;if(wt){let _t=x[wt];_t||(_t=new py,x[wt]=_t);const dt=v.getCameraImage(wt);_t.sourceTexture=dt}}}}for(let ve=0;ve<P.length;ve++){const Oe=D[ve],tt=P[ve];Oe!==null&&tt!==void 0&&tt.update(Oe,Te,h||u)}ze&&ze(oe,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),M=null}const Xe=new _y;Xe.setAnimationLoop(Ke),this.setAnimationLoop=function(oe){ze=oe},this.dispose=function(){}}}const ib=new Ht,wy=new ct;wy.set(-1,0,0,0,1,0,0,0,1);function rb(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,my(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,L,I,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(S,x):x.isMeshLambertMaterial?(l(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),A(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,L,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Zn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Zn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),I=L.envMap,R=L.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(R)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(wy),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,L,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sb(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,P){const D=P.program;r.uniformBlockBinding(R,D)}function h(R,P){let D=o[R.id];D===void 0&&(S(R),D=m(R),o[R.id]=D,R.addEventListener("dispose",L));const F=P.program;r.updateUBOMapping(R,F);const T=e.render.frame;l[R.id]!==T&&(g(R),l[R.id]=T)}function m(R){const P=v();R.__bindingPointIndex=P;const D=n.createBuffer(),F=R.__size,T=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,F,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,D),D}function v(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const P=o[R.id],D=R.uniforms,F=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let T=0,N=D.length;T<N;T++){const V=D[T];if(Array.isArray(V))for(let z=0,j=V.length;z<j;z++)y(V[z],T,z,F);else y(V,T,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(R,P,D,F){if(A(R,P,D,F)===!0){const T=R.__offset,N=R.value;if(Array.isArray(N)){let V=0;for(let z=0;z<N.length;z++){const j=N[z],he=x(j);M(j,R.__data,V),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(V+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,R.__data)}}function M(R,P,D){typeof R=="number"||typeof R=="boolean"?P[0]=R:R.isMatrix3?(P[0]=R.elements[0],P[1]=R.elements[1],P[2]=R.elements[2],P[3]=0,P[4]=R.elements[3],P[5]=R.elements[4],P[6]=R.elements[5],P[7]=0,P[8]=R.elements[6],P[9]=R.elements[7],P[10]=R.elements[8],P[11]=0):ArrayBuffer.isView(R)?P.set(new R.constructor(R.buffer,R.byteOffset,P.length)):R.toArray(P,D)}function A(R,P,D,F){const T=R.value,N=P+"_"+D;if(F[N]===void 0)return typeof T=="number"||typeof T=="boolean"?F[N]=T:ArrayBuffer.isView(T)?F[N]=T.slice():F[N]=T.clone(),!0;{const V=F[N];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return F[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function S(R){const P=R.uniforms;let D=0;const F=16;for(let N=0,V=P.length;N<V;N++){const z=Array.isArray(P[N])?P[N]:[P[N]];for(let j=0,he=z.length;j<he;j++){const ge=z[j],Z=Array.isArray(ge.value)?ge.value:[ge.value];for(let pe=0,K=Z.length;pe<K;pe++){const G=Z[pe],se=x(G),ae=D%F,B=ae%se.boundary,Q=ae+B;D+=B,Q!==0&&F-Q<se.storage&&(D+=F-Q),ge.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=D,D+=se.storage}}}const T=D%F;return T>0&&(D+=F-T),R.__size=D,R.__cache={},this}function x(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",R),P}function L(R){const P=R.target;P.removeEventListener("dispose",L);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function I(){for(const R in o)n.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:d,update:h,dispose:I}}const ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function ab(){return Hi===null&&(Hi=new cy(ob,16,16,Fs,xr),Hi.name="DFG_LUT",Hi.minFilter=In,Hi.magFilter=In,Hi.wrapS=pr,Hi.wrapT=pr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class lb{constructor(e={}){const{canvas:t=AT(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=xi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=y,S=new Set([Kp,qp,Yp]),x=new Set([xi,Zi,ul,cl,Hp,Wp]),L=new Uint32Array(4),I=new Int32Array(4),R=new J;let P=null,D=null;const F=[],T=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,j=null,he=null,ge=null,Z=null;this._outputColorSpace=vi;let pe=0,K=0,G=null,se=-1,ae=null;const B=new rn,Q=new rn;let ze=null;const Ke=new xt(0);let Xe=0,oe=t.width,Te=t.height,ve=1,Oe=null,tt=null;const Qe=new rn(0,0,oe,Te),Vt=new rn(0,0,oe,Te);let ft=!1;const wt=new fy;let _t=!1,dt=!1;const Lt=new Ht,Wt=new J,Ot=new rn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function kt(){return G===null?ve:1}let q=r;function fn(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vp}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",wn,!1),q===null){const $="webgl2";if(q=fn($,C),q===null)throw fn($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Tt("WebGLRenderer: "+C.message),C}let Mt,U,E,b,W,X,de,xe,te,ce,Se,_e,Me,me,Re,Pe,Fe,k,Ee,fe,Ce,Le,ye;function ke(){Mt=new aC(q),Mt.init(),Ce=new QR(q,Mt),U=new JA(q,Mt,e,Ce),E=new jR(q,Mt),U.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),he=q.createFramebuffer(),ge=q.createFramebuffer(),Z=q.createFramebuffer(),b=new cC(q),W=new FR,X=new ZR(q,Mt,E,W,U,Ce,b),de=new oC(V),xe=new p1(q),Le=new ZA(q,xe),te=new lC(q,xe,b,Le),ce=new dC(q,te,xe,Le,b),k=new fC(q,U,X),Re=new eC(W),Se=new UR(V,de,Mt,U,Le,Re),_e=new rb(V,W),Me=new BR,me=new WR(Mt),Fe=new jA(V,de,E,ce,M,d),Pe=new $R(V,ce,U),ye=new sb(q,b,U,E),Ee=new QA(q,Mt,b),fe=new uC(q,Mt,b),b.programs=Se.programs,V.capabilities=U,V.extensions=Mt,V.properties=W,V.renderLists=Me,V.shadowMap=Pe,V.state=E,V.info=b}ke(),A!==xi&&(N=new pC(A,t.width,t.height,f,o,l));const Ve=new nb(V,q);this.xr=Ve,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize(oe,Te,!1))},this.getSize=function(C){return C.set(oe,Te)},this.setSize=function(C,$,le=!0){if(Ve.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,Te=$,t.width=Math.floor(C*ve),t.height=Math.floor($*ve),le===!0&&(t.style.width=C+"px",t.style.height=$+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(oe*ve,Te*ve).floor()},this.setDrawingBufferSize=function(C,$,le){oe=C,Te=$,ve=le,t.width=Math.floor(C*le),t.height=Math.floor($*le),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(A===xi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(Qe)},this.setViewport=function(C,$,le,ie){C.isVector4?Qe.set(C.x,C.y,C.z,C.w):Qe.set(C,$,le,ie),E.viewport(B.copy(Qe).multiplyScalar(ve).round())},this.getScissor=function(C){return C.copy(Vt)},this.setScissor=function(C,$,le,ie){C.isVector4?Vt.set(C.x,C.y,C.z,C.w):Vt.set(C,$,le,ie),E.scissor(Q.copy(Vt).multiplyScalar(ve).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){E.setScissorTest(ft=C)},this.setOpaqueSort=function(C){Oe=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,le=!0){let ie=0;if(C){let ne=!1;if(G!==null){const Ne=G.texture.format;ne=S.has(Ne)}if(ne){const Ne=G.texture.type,We=x.has(Ne),Ie=Fe.getClearColor(),$e=Fe.getClearAlpha(),nt=Ie.r,lt=Ie.g,ut=Ie.b;We?(L[0]=nt,L[1]=lt,L[2]=ut,L[3]=$e,q.clearBufferuiv(q.COLOR,0,L)):(I[0]=nt,I[1]=lt,I[2]=ut,I[3]=$e,q.clearBufferiv(q.COLOR,0,I))}else ie|=q.COLOR_BUFFER_BIT}$&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),Fe.dispose(),Me.dispose(),me.dispose(),W.dispose(),de.dispose(),ce.dispose(),Le.dispose(),ye.dispose(),Se.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Ml),Ve.removeEventListener("sessionend",El),On.stop()};function Rt(C){C.preventDefault(),yc("WebGLRenderer: Context Lost."),z=!0}function Pt(){yc("WebGLRenderer: Context Restored."),z=!1;const C=b.autoReset,$=Pe.enabled,le=Pe.autoUpdate,ie=Pe.needsUpdate,ne=Pe.type;ke(),b.autoReset=C,Pe.enabled=$,Pe.autoUpdate=le,Pe.needsUpdate=ie,Pe.type=ne}function wn(C){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ai(C){const $=C.target;$.removeEventListener("dispose",ai),is($)}function is(C){zs(C),W.remove(C)}function zs(C){const $=W.get(C).programs;$!==void 0&&($.forEach(function(le){Se.releaseProgram(le)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,le,ie,ne,Ne){$===null&&($=Bt);const We=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ie=Zt(C,$,le,ie,ne);E.setMaterial(ie,We);let $e=le.index,nt=1;if(ie.wireframe===!0){if($e=te.getWireframeAttribute(le),$e===void 0)return;nt=2}const lt=le.drawRange,ut=le.attributes.position;let Ze=lt.start*nt,Et=(lt.start+lt.count)*nt;Ne!==null&&(Ze=Math.max(Ze,Ne.start*nt),Et=Math.min(Et,(Ne.start+Ne.count)*nt)),$e!==null?(Ze=Math.max(Ze,0),Et=Math.min(Et,$e.count)):ut!=null&&(Ze=Math.max(Ze,0),Et=Math.min(Et,ut.count));const zt=Et-Ze;if(zt<0||zt===1/0)return;Le.setup(ne,ie,Ie,le,$e);let $t,It=Ee;if($e!==null&&($t=xe.get($e),It=fe,It.setIndex($t)),ne.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*kt()),It.setMode(q.LINES)):It.setMode(q.TRIANGLES);else if(ne.isLine){let an=ie.linewidth;an===void 0&&(an=1),E.setLineWidth(an*kt()),ne.isLineSegments?It.setMode(q.LINES):ne.isLineLoop?It.setMode(q.LINE_LOOP):It.setMode(q.LINE_STRIP)}else ne.isPoints?It.setMode(q.POINTS):ne.isSprite&&It.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const an=ne._multiDrawStarts,Ge=ne._multiDrawCounts,yn=ne._multiDrawCount,pt=$e?xe.get($e).bytesPerElement:1,Hn=W.get(ie).currentProgram.getUniforms();for(let Wn=0;Wn<yn;Wn++)Hn.setValue(q,"_gl_DrawID",Wn),It.render(an[Wn]/pt,Ge[Wn])}else if(ne.isInstancedMesh)It.renderInstances(Ze,zt,ne.count);else if(le.isInstancedBufferGeometry){const an=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ge=Math.min(le.instanceCount,an);It.renderInstances(Ze,zt,Ge)}else It.render(Ze,zt)};function rs(C,$,le){C.transparent===!0&&C.side===hr&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,as(C,$,le),C.side=Jr,C.needsUpdate=!0,as(C,$,le),C.side=hr):as(C,$,le)}this.compile=function(C,$,le=null){le===null&&(le=C),D=me.get(le),D.init($),T.push(D),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),C!==le&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),D.setupLights();const ie=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let We=0;We<Ne.length;We++){const Ie=Ne[We];rs(Ie,le,ne),ie.add(Ie)}else rs(Ne,le,ne),ie.add(Ne)}),D=T.pop(),ie},this.compileAsync=function(C,$,le=null){const ie=this.compile(C,$,le);return new Promise(ne=>{function Ne(){if(ie.forEach(function(We){W.get(We).currentProgram.isReady()&&ie.delete(We)}),ie.size===0){ne(C);return}setTimeout(Ne,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ss=null;function zc(C){ss&&ss(C)}function Ml(){On.stop()}function El(){On.start()}const On=new _y;On.setAnimationLoop(zc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){ss=C,Ve.setAnimationLoop(C),C===null?On.stop():On.start()},Ve.addEventListener("sessionstart",Ml),Ve.addEventListener("sessionend",El),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;j!==null&&j.renderStart(C,$);const le=Ve.enabled===!0&&Ve.isPresenting===!0,ie=N!==null&&(G===null||le)&&N.begin(V,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera($),$=Ve.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,$,G),D=me.get(C,T.length),D.init($),D.state.textureUnits=X.getTextureUnits(),T.push(D),Lt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),wt.setFromProjectionMatrix(Lt,Yi,$.reversedDepth),dt=this.localClippingEnabled,_t=Re.init(this.clippingPlanes,dt),P=Me.get(C,F.length),P.init(),F.push(P),Ve.enabled===!0&&Ve.isPresenting===!0){const We=V.xr.getDepthSensingMesh();We!==null&&Gs(We,$,-1/0,V.sortObjects)}Gs(C,$,0,V.sortObjects),P.finish(),V.sortObjects===!0&&P.sort(Oe,tt,$.reversedDepth),At=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,At&&Fe.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Re.beginShadows();const ne=D.state.shadowsArray;if(Pe.render(ne,C,$),_t===!0&&Re.endShadows(),(ie&&N.hasRenderPass())===!1){const We=P.opaque,Ie=P.transmissive;if(D.setupLights(),$.isArrayCamera){const $e=$.cameras;if(Ie.length>0)for(let nt=0,lt=$e.length;nt<lt;nt++){const ut=$e[nt];Tl(We,Ie,C,ut)}At&&Fe.render(C);for(let nt=0,lt=$e.length;nt<lt;nt++){const ut=$e[nt];na(P,C,ut,ut.viewport)}}else Ie.length>0&&Tl(We,Ie,C,$),At&&Fe.render(C),na(P,C,$)}G!==null&&K===0&&(X.updateMultisampleRenderTarget(G),X.updateRenderTargetMipmap(G)),ie&&N.end(V),C.isScene===!0&&C.onAfterRender(V,C,$),Le.resetDefaultState(),se=-1,ae=null,T.pop(),T.length>0?(D=T[T.length-1],X.setTextureUnits(D.state.textureUnits),_t===!0&&Re.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,j!==null&&j.renderEnd()};function Gs(C,$,le,ie){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)D.pushLightProbeGrid(C);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||wt.intersectsSprite(C)){ie&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Lt);const We=ce.update(C),Ie=C.material;Ie.visible&&P.push(C,We,Ie,le,Ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||wt.intersectsObject(C))){const We=ce.update(C),Ie=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Ot.copy(We.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ie)){const $e=We.groups;for(let nt=0,lt=$e.length;nt<lt;nt++){const ut=$e[nt],Ze=Ie[ut.materialIndex];Ze&&Ze.visible&&P.push(C,We,Ze,le,Ot.z,ut)}}else Ie.visible&&P.push(C,We,Ie,le,Ot.z,null)}}const Ne=C.children;for(let We=0,Ie=Ne.length;We<Ie;We++)Gs(Ne[We],$,le,ie)}function na(C,$,le,ie){const{opaque:ne,transmissive:Ne,transparent:We}=C;D.setupLightsView(le),_t===!0&&Re.setGlobalState(V.clippingPlanes,le),ie&&E.viewport(B.copy(ie)),ne.length>0&&os(ne,$,le),Ne.length>0&&os(Ne,$,le),We.length>0&&os(We,$,le),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Tl(C,$,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ie.id]===void 0){const Ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ie.id]=new Ki(1,1,{generateMipmaps:!0,type:Ze?xr:xi,minFilter:Ds,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[ie.id],We=ie.viewport||B;Ne.setSize(We.z*V.transmissionResolutionScale,We.w*V.transmissionResolutionScale);const Ie=V.getRenderTarget(),$e=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(Ne),V.getClearColor(Ke),Xe=V.getClearAlpha(),Xe<1&&V.setClearColor(16777215,.5),V.clear(),At&&Fe.render(le);const lt=V.toneMapping;V.toneMapping=qi;const ut=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),D.setupLightsView(ie),_t===!0&&Re.setGlobalState(V.clippingPlanes,ie),os(C,le,ie),X.updateMultisampleRenderTarget(Ne),X.updateRenderTargetMipmap(Ne),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Et=0,zt=$.length;Et<zt;Et++){const $t=$[Et],{object:It,geometry:an,material:Ge,group:yn}=$t;if(Ge.side===hr&&It.layers.test(ie.layers)){const pt=Ge.side;Ge.side=Zn,Ge.needsUpdate=!0,ia(It,le,ie,an,Ge,yn),Ge.side=pt,Ge.needsUpdate=!0,Ze=!0}}Ze===!0&&(X.updateMultisampleRenderTarget(Ne),X.updateRenderTargetMipmap(Ne))}V.setRenderTarget(Ie,$e,nt),V.setClearColor(Ke,Xe),ut!==void 0&&(ie.viewport=ut),V.toneMapping=lt}function os(C,$,le){const ie=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Ne=C.length;ne<Ne;ne++){const We=C[ne],{object:Ie,geometry:$e,group:nt}=We;let lt=We.material;lt.allowOverride===!0&&ie!==null&&(lt=ie),Ie.layers.test(le.layers)&&ia(Ie,$,le,$e,lt,nt)}}function ia(C,$,le,ie,ne,Ne){C.onBeforeRender(V,$,le,ie,ne,Ne),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(V,$,le,ie,C,Ne),ne.transparent===!0&&ne.side===hr&&ne.forceSinglePass===!1?(ne.side=Zn,ne.needsUpdate=!0,V.renderBufferDirect(le,$,ie,ne,C,Ne),ne.side=Jr,ne.needsUpdate=!0,V.renderBufferDirect(le,$,ie,ne,C,Ne),ne.side=hr):V.renderBufferDirect(le,$,ie,ne,C,Ne),C.onAfterRender(V,$,le,ie,ne,Ne)}function as(C,$,le){$.isScene!==!0&&($=Bt);const ie=W.get(C),ne=D.state.lights,Ne=D.state.shadowsArray,We=ne.state.version,Ie=Se.getParameters(C,ne.state,Ne,$,le,D.state.lightProbeGridArray),$e=Se.getProgramCacheKey(Ie);let nt=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;const lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=de.get(C.envMap||ie.environment,lt),ie.envMapRotation=ie.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",ai),nt=new Map,ie.programs=nt);let ut=nt.get($e);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===We)return wl(C,Ie),ut}else Ie.uniforms=Se.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,le,Ie),C.onBeforeCompile(Ie,V),ut=Se.acquireProgram(Ie,$e),nt.set($e,ut),ie.uniforms=Ie.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Re.uniform),wl(C,Ie),ie.needsLights=sa(C),ie.lightsStateVersion=We,ie.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=D.state.lightProbeGridArray.length>0,ie.currentProgram=ut,ie.uniformsList=null,ut}function ra(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=cc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function wl(C,$){const le=W.get(C);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function Gc(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition($.matrixWorld);for(let le=0,ie=C.length;le<ie;le++){const ne=C[le];if(ne.texture!==null&&ne.boundingBox.containsPoint(R))return ne}return null}function Zt(C,$,le,ie,ne){$.isScene!==!0&&($=Bt),X.resetTextureUnits();const Ne=$.fog,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,Ie=G===null?V.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:yt.workingColorSpace,$e=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,nt=de.get(ie.envMap||We,$e),lt=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!le.morphAttributes.position,Et=!!le.morphAttributes.normal,zt=!!le.morphAttributes.color;let $t=qi;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=V.toneMapping);const It=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,an=It!==void 0?It.length:0,Ge=W.get(ie),yn=D.state.lights;if(_t===!0&&(dt===!0||C!==ae)){const Nt=C===ae&&ie.id===se;Re.setState(ie,C,Nt)}let pt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==yn.state.version||Ge.outputColorSpace!==Ie||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==nt||ie.fog===!0&&Ge.fog!==Ne||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Re.numPlanes||Ge.numIntersection!==Re.numIntersection)||Ge.vertexAlphas!==lt||Ge.vertexTangents!==ut||Ge.morphTargets!==Ze||Ge.morphNormals!==Et||Ge.morphColors!==zt||Ge.toneMapping!==$t||Ge.morphTargetsCount!==an||!!Ge.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ge.__version=ie.version);let Hn=Ge.currentProgram;pt===!0&&(Hn=as(ie,$,ne),j&&ie.isNodeMaterial&&j.onUpdateProgram(ie,Hn,Ge));let Wn=!1,gt=!1,Ji=!1;const Dt=Hn.getUniforms(),Xt=Ge.uniforms;if(E.useProgram(Hn.program)&&(Wn=!0,gt=!0,Ji=!0),ie.id!==se&&(se=ie.id,gt=!0),Ge.needsLights){const Nt=Gc(D.state.lightProbeGridArray,ne);Ge.lightProbeGrid!==Nt&&(Ge.lightProbeGrid=Nt,gt=!0)}if(Wn||ae!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Dt.setValue(q,"projectionMatrix",C.projectionMatrix),Dt.setValue(q,"viewMatrix",C.matrixWorldInverse);const Mi=Dt.map.cameraPosition;Mi!==void 0&&Mi.setValue(q,Wt.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Dt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Dt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),ae!==C&&(ae=C,gt=!0,Ji=!0)}if(Ge.needsLights&&(yn.state.directionalShadowMap.length>0&&Dt.setValue(q,"directionalShadowMap",yn.state.directionalShadowMap,X),yn.state.spotShadowMap.length>0&&Dt.setValue(q,"spotShadowMap",yn.state.spotShadowMap,X),yn.state.pointShadowMap.length>0&&Dt.setValue(q,"pointShadowMap",yn.state.pointShadowMap,X)),ne.isSkinnedMesh){Dt.setOptional(q,ne,"bindMatrix"),Dt.setOptional(q,ne,"bindMatrixInverse");const Nt=ne.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Dt.setValue(q,"boneTexture",Nt.boneTexture,X))}ne.isBatchedMesh&&(Dt.setOptional(q,ne,"batchingTexture"),Dt.setValue(q,"batchingTexture",ne._matricesTexture,X),Dt.setOptional(q,ne,"batchingIdTexture"),Dt.setValue(q,"batchingIdTexture",ne._indirectTexture,X),Dt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Dt.setValue(q,"batchingColorTexture",ne._colorsTexture,X));const Si=le.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&k.update(ne,le,Hn),(gt||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Dt.setValue(q,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(Xt.envMapIntensity.value=$.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=ab()),gt){if(Dt.setValue(q,"toneMappingExposure",V.toneMappingExposure),Ge.needsLights&&Hc(Xt,Ji),Ne&&ie.fog===!0&&_e.refreshFogUniforms(Xt,Ne),_e.refreshMaterialUniforms(Xt,ie,ve,Te,D.state.transmissionRenderTarget[C.id]),Ge.needsLights&&Ge.lightProbeGrid){const Nt=Ge.lightProbeGrid;Xt.probesSH.value=Nt.texture,Xt.probesMin.value.copy(Nt.boundingBox.min),Xt.probesMax.value.copy(Nt.boundingBox.max),Xt.probesResolution.value.copy(Nt.resolution)}cc.upload(q,ra(Ge),Xt,X)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(cc.upload(q,ra(Ge),Xt,X),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Dt.setValue(q,"center",ne.center),Dt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Dt.setValue(q,"normalMatrix",ne.normalMatrix),Dt.setValue(q,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let Mi=0,Oi=Nt.length;Mi<Oi;Mi++){const ls=Nt[Mi];ye.update(ls,Hn),ye.bind(ls,Hn)}}return Hn}function Hc(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function sa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,$,le){const ie=W.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),W.get(C.texture).__webglTexture=$,W.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const le=W.get(C);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,le=0){G=C,pe=$,K=le;let ie=null,ne=!1,Ne=!1;if(C){const Ie=W.get(C);if(Ie.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(q.FRAMEBUFFER,Ie.__webglFramebuffer),B.copy(C.viewport),Q.copy(C.scissor),ze=C.scissorTest,E.viewport(B),E.scissor(Q),E.setScissorTest(ze),se=-1;return}else if(Ie.__webglFramebuffer===void 0)X.setupRenderTarget(C);else if(Ie.__hasExternalTextures)X.rebindTextures(C,W.get(C.texture).__webglTexture,W.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const lt=C.depthTexture;if(Ie.__boundDepthTexture!==lt){if(lt!==null&&W.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const nt=W.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?ie=nt[$][le]:ie=nt[$],ne=!0):C.samples>0&&X.useMultisampledRTT(C)===!1?ie=W.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[le]:ie=nt,B.copy(C.viewport),Q.copy(C.scissor),ze=C.scissorTest}else B.copy(Qe).multiplyScalar(ve).floor(),Q.copy(Vt).multiplyScalar(ve).floor(),ze=ft;if(le!==0&&(ie=he),E.bindFramebuffer(q.FRAMEBUFFER,ie)&&E.drawBuffers(C,ie),E.viewport(B),E.scissor(Q),E.setScissorTest(ze),ne){const Ie=W.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,le)}else if(Ne){const Ie=$;for(let $e=0;$e<C.textures.length;$e++){const nt=W.get(C.textures[$e]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+$e,nt.__webglTexture,le,Ie)}}else if(C!==null&&le!==0){const Ie=W.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ie.__webglTexture,le)}se=-1},this.readRenderTargetPixels=function(C,$,le,ie,ne,Ne,We,Ie=0){if(!(C&&C.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){E.bindFramebuffer(q.FRAMEBUFFER,$e);try{const nt=C.textures[Ie],lt=nt.format,ut=nt.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie),!U.textureFormatReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ut)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ie&&le>=0&&le<=C.height-ne&&q.readPixels($,le,ie,ne,Ce.convert(lt),Ce.convert(ut),Ne)}finally{const nt=G!==null?W.get(G).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,$,le,ie,ne,Ne,We,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e)if($>=0&&$<=C.width-ie&&le>=0&&le<=C.height-ne){E.bindFramebuffer(q.FRAMEBUFFER,$e);const nt=C.textures[Ie],lt=nt.format,ut=nt.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie),!U.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.bufferData(q.PIXEL_PACK_BUFFER,Ne.byteLength,q.STREAM_READ),q.readPixels($,le,ie,ne,Ce.convert(lt),Ce.convert(ut),0);const Et=G!==null?W.get(G).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,Et);const zt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await CT(q,zt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ze),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ne),q.deleteBuffer(Ze),q.deleteSync(zt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,le=0){const ie=Math.pow(2,-le),ne=Math.floor(C.image.width*ie),Ne=Math.floor(C.image.height*ie),We=$!==null?$.x:0,Ie=$!==null?$.y:0;X.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,le,0,0,We,Ie,ne,Ne),E.unbindTexture()},this.copyTextureToTexture=function(C,$,le=null,ie=null,ne=0,Ne=0){let We,Ie,$e,nt,lt,ut,Ze,Et,zt;const $t=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(le!==null)We=le.max.x-le.min.x,Ie=le.max.y-le.min.y,$e=le.isBox3?le.max.z-le.min.z:1,nt=le.min.x,lt=le.min.y,ut=le.isBox3?le.min.z:0;else{const Xt=Math.pow(2,-ne);We=Math.floor($t.width*Xt),Ie=Math.floor($t.height*Xt),C.isDataArrayTexture?$e=$t.depth:C.isData3DTexture?$e=Math.floor($t.depth*Xt):$e=1,nt=0,lt=0,ut=0}ie!==null?(Ze=ie.x,Et=ie.y,zt=ie.z):(Ze=0,Et=0,zt=0);const It=Ce.convert($.format),an=Ce.convert($.type);let Ge;$.isData3DTexture?(X.setTexture3D($,0),Ge=q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(X.setTexture2DArray($,0),Ge=q.TEXTURE_2D_ARRAY):(X.setTexture2D($,0),Ge=q.TEXTURE_2D),E.activeTexture(q.TEXTURE0),E.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);const yn=E.getParameter(q.UNPACK_ROW_LENGTH),pt=E.getParameter(q.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(q.UNPACK_SKIP_PIXELS),Wn=E.getParameter(q.UNPACK_SKIP_ROWS),gt=E.getParameter(q.UNPACK_SKIP_IMAGES);E.pixelStorei(q.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(q.UNPACK_SKIP_PIXELS,nt),E.pixelStorei(q.UNPACK_SKIP_ROWS,lt),E.pixelStorei(q.UNPACK_SKIP_IMAGES,ut);const Ji=C.isDataArrayTexture||C.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Xt=W.get(C),Si=W.get($),Nt=W.get(Xt.__renderTarget),Mi=W.get(Si.__renderTarget);E.bindFramebuffer(q.READ_FRAMEBUFFER,Nt.__webglFramebuffer),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Oi=0;Oi<$e;Oi++)Ji&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,W.get(C).__webglTexture,ne,ut+Oi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,W.get($).__webglTexture,Ne,zt+Oi)),q.blitFramebuffer(nt,lt,We,Ie,Ze,Et,We,Ie,q.DEPTH_BUFFER_BIT,q.NEAREST);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||W.has(C)){const Xt=W.get(C),Si=W.get($);E.bindFramebuffer(q.READ_FRAMEBUFFER,ge),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,Z);for(let Nt=0;Nt<$e;Nt++)Ji?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xt.__webglTexture,ne,ut+Nt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Xt.__webglTexture,ne),Dt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Si.__webglTexture,Ne,zt+Nt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Si.__webglTexture,Ne),ne!==0?q.blitFramebuffer(nt,lt,We,Ie,Ze,Et,We,Ie,q.COLOR_BUFFER_BIT,q.NEAREST):Dt?q.copyTexSubImage3D(Ge,Ne,Ze,Et,zt+Nt,nt,lt,We,Ie):q.copyTexSubImage2D(Ge,Ne,Ze,Et,nt,lt,We,Ie);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(Ge,Ne,Ze,Et,zt,We,Ie,$e,It,an,$t.data):$.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Ne,Ze,Et,zt,We,Ie,$e,It,$t.data):q.texSubImage3D(Ge,Ne,Ze,Et,zt,We,Ie,$e,It,an,$t):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ne,Ze,Et,We,Ie,It,an,$t.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ne,Ze,Et,$t.width,$t.height,It,$t.data):q.texSubImage2D(q.TEXTURE_2D,Ne,Ze,Et,We,Ie,It,an,$t);E.pixelStorei(q.UNPACK_ROW_LENGTH,yn),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(q.UNPACK_SKIP_ROWS,Wn),E.pixelStorei(q.UNPACK_SKIP_IMAGES,gt),Ne===0&&$.generateMipmaps&&q.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(C){W.get(C).__webglFramebuffer===void 0&&X.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?X.setTextureCube(C,0):C.isData3DTexture?X.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?X.setTexture2DArray(C,0):X.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){pe=0,K=0,G=null,E.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function ub(){const[n,e]=Ue.useState(!1);return Ue.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),r=()=>e(t.matches);return r(),t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[]),n}const cn={background:"#000000",topRadius:380,waistRadius:53,waistPosition:50,bottomRadius:1150,twist:3,zoom:75,speed:10,direction:"right",lineOptions:{count:240,color:"#ffffff",glow:10},dots:!0,dotOptions:{count:8e3,size:20,color:"#ffffff",glow:10,flicker:10},comets:!0,cometOptions:{count:10,speed:6,color:"#F9731A",glow:6,tail:19,delay:8,collide:6},repel:!1,repelOptions:{radius:60,strength:10}},il=Math.PI*2,sh=60,oh=1024,Lo=400,ah=.008,ec=.15,rl=10,Ay=67,lh=n=>Kr(2*Ay-n,1,175),cb=1,fb=4.2,db=.15,hb=1,pb=1e3,h_=2,p_=.5,mb=9,gb=11,vb=1.8,_b=5,m_=1.2,xb=.8,yb=2.5,Sb=.04,uh=16,ch=.03,fh=.95,g_=.1,v_=.8,__=1.6,x_=.4,y_=6,S_=.6,M_=1.3,Mb=8,E_=1/30,Io={strandStart:0,strandEnd:2,dotStart:1.2,dotEnd:3,cometStart:3,cometEnd:5},Eb=.45,Kr=(n,e,t)=>Math.min(Math.max(n,e),t);function dh(n,e,t){if(n<=e)return 0;if(n>=t)return 1;const r=(n-e)/(t-e);return 1-(1-r)*(1-r)*(1-r)}function hh(n){const e=n.length,t=[];for(let o=0;o<e-1;o++)t[o]=(n[o+1][1]-n[o][1])/(n[o+1][0]-n[o][0]);const r=[t[0]];for(let o=1;o<e-1;o++)r[o]=t[o-1]*t[o]<=0?0:(t[o-1]+t[o])/2;r[e-1]=t[e-2];for(let o=0;o<e-1;o++){if(Math.abs(t[o])<1e-12){r[o]=r[o+1]=0;continue}const l=r[o]/t[o],u=r[o+1]/t[o],f=l*l+u*u;if(f>9){const d=3/Math.sqrt(f);r[o]=d*l*t[o],r[o+1]=d*u*t[o]}}return o=>{if(o<=n[0][0])return n[0][1];if(o>=n[e-1][0])return n[e-1][1];let l=0;for(;l<e-2&&n[l+1][0]<o;)l++;const u=n[l+1][0]-n[l][0],f=(o-n[l][0])/u,d=f*f,h=d*f;return(2*h-3*d+1)*n[l][1]+(h-2*d+f)*u*r[l]+(-2*h+3*d)*n[l+1][1]+(h-d)*u*r[l+1]}}function ph(n){const e=new Float32Array(oh);for(let t=0;t<oh;t++)e[t]=n(t/(oh-1));return e}function mh(n,e){if(e<=0)return n[0];const t=n.length-1;if(e>=1)return n[t];const r=e*t,o=r|0;return n[o]+(n[o+1]-n[o])*(r-o)}function Tb(n){const e=Kr(n.waistAt,.08,.92),t=n.floorRadius,r=n.crownRadius,o=n.twist*il,l=ph(hh([[0,t],[.24*e,t*.667],[.5*e,t*.3],[.76*e,t*.08],[e,n.waistRadius],[e+.3*(1-e),r*.2],[e+.6*(1-e),r*.44],[1,r]])),u=ph(hh([[0,0],[.1,.2],[.2,.8],[.35,2],[.5,rl*.38],[.75,rl*.7],[1,rl]])),f=ph(hh([[0,0],[.15,.15*o],[.25,.25*o],[.45,.55*o],[.6,.7*o],[.8,.88*o],[1,o]]));return{writePoint(d,h,m,v,g,y,M,A){const S=mh(l,m),x=mh(u,m),L=mh(f,m)+v+g,I=S+Math.sin(m*25+M+A*.3)*y*S;d[h]=Math.cos(L)*I,d[h+1]=x,d[h+2]=Math.sin(L)*I},lane:(d,h)=>d/h*il}}function wb(n,e,t){const r=new lb({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setClearColor(0,0),r.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),r.toneMapping=zp,r.toneMappingExposure=1.25;const o=new HT,l=new _i(lh(t.current.zoom),1,.1,500),u=new Qa;o.add(u);const f={uMouse:{value:new mt(0,0)},uAspect:{value:1},uRadius:{value:.2},uStrength:{value:0}},d=b=>(b.onBeforeCompile=W=>{W.uniforms.uMouse=f.uMouse,W.uniforms.uAspect=f.uAspect,W.uniforms.uRadius=f.uRadius,W.uniforms.uStrength=f.uStrength,W.vertexShader=W.vertexShader.replace("void main() {",`
                    uniform vec2 uMouse;
                    uniform float uAspect;
                    uniform float uRadius;
                    uniform float uStrength;
                    void main() {
                    `).replace("#include <fog_vertex>",`
                    #include <fog_vertex>
                    if (uStrength > 0.0 && uRadius > 0.0 && gl_Position.w > 0.0) {
                        vec2 ndc = gl_Position.xy / gl_Position.w;
                        vec2 off = ndc - uMouse;
                        float dist = length(off * vec2(uAspect, 1.0));
                        float f = uStrength * exp(-(dist * dist) / (2.0 * uRadius * uRadius));
                        float m = length(off);
                        if (m > 1e-4) {
                            ndc += (off / m) * f;
                            gl_Position.xy = ndc * gl_Position.w;
                        }
                    }
                    `)},b);let h,m=[];const v=b=>(m.push(b),b);let g=[],y=new Float32Array(0),M=new Float32Array(0),A=null,S=[],x=0,L=null,I=new Float32Array(0),R=new Float32Array(0),P=new Float32Array(0),D=new Float32Array(0),F=new Float32Array(0),T=new Float32Array(0),N=new Float32Array(0),V=new Float32Array(0),z=new Float32Array(0),j=!1,he=[],ge=null,Z=[],pe=!1;const K=new Ht,G={strand:new xt,dot:new xt,comet:new xt};let se={line:"",dot:"",comet:""};function ae(b){if(b.lineColor!==se.line&&(G.strand.set(b.lineColor),se.line=b.lineColor),b.dotColor!==se.dot&&(G.dot.set(b.dotColor),se.dot=b.dotColor),b.cometColor!==se.comet){G.comet.set(b.cometColor),se.comet=b.cometColor;for(const W of he)W.head.material&&W.head.material.color.setRGB(G.comet.r*1.2,G.comet.g*1.2,G.comet.b*1.2)}}function B(b,W){const X=document.createElement("canvas");X.width=X.height=b;const de=X.getContext("2d");if(de){const te=de.createRadialGradient(b/2,b/2,0,b/2,b/2,b/2);for(const[ce,Se]of W)te.addColorStop(ce,Se);de.fillStyle=te,de.fillRect(0,0,b,b)}const xe=new Fn(X);return xe.needsUpdate=!0,xe}function Q(){const b=t.current;for(let _e=u.children.length-1;_e>=0;_e--)u.remove(u.children[_e]);for(const _e of m)_e.dispose();m=[],h=Tb(b),l.fov=lh(b.zoom),l.updateProjectionMatrix(),ae(b);const W=Math.max(3,Math.round(b.lineCount)),X=Lo-1,de=W*X*2;y=new Float32Array(de*3),M=new Float32Array(de*3),A=v(new si),A.setAttribute("position",new Nn(y,3).setUsage(ho)),A.setAttribute("color",new Nn(M,3).setUsage(ho));const xe=v(d(new xp({vertexColors:!0,transparent:!0,opacity:.5,blending:No,depthWrite:!1}))),te=new n1(A,xe);te.frustumCulled=!1,u.add(te),g=[];for(let _e=0;_e<W;_e++)g.push({lane:h.lane(_e,W),speed:.95+Math.random()*.1,pulse:Math.random()*il,wobblePhase:Math.random()*il,from:0,to:1,bright:.5,offset:_e*X*2*3,pts:new Float32Array(Lo*3),cols:new Float32Array(Lo*3)});x=b.showDots?Math.max(0,Math.round(b.dotCount)):0,S=[];for(let _e=0;_e<x;_e++){const Me=Math.random()<.5?.2+Math.random()*.4:.05+Math.random()*.9,me=Math.floor(Math.random()*g.length);S.push({s:Me,lane:g[me].lane,strand:me,pulse:Math.random()*il,flickerRate:.15+Math.random()*4.5,bright:.04+Math.random()**1.5*.96})}if(R=new Float32Array(x*3),P=new Float32Array(x*3),D=new Float32Array(x*3),F=new Float32Array(x).fill(1),T=new Float32Array(x),N=new Float32Array(x),V=new Float32Array(x),z=new Float32Array(x).fill(1),I=new Float32Array(x*3),j=!1,x>0){const _e=v(new vl(1,1)),Me=v(d(new Qp({color:16777215,transparent:!0,opacity:.9,blending:No,depthWrite:!1})));L=new QT(_e,Me,x),L.instanceMatrix.setUsage(ho),L.instanceColor=new _p(I,3),L.instanceColor.setUsage(ho),L.frustumCulled=!1,u.add(L)}else L=null;Z=[];for(let _e=0;_e<uh;_e++)Z.push({active:!1,x:0,y:0,z:0,at:0,amp:1});pe=!1,ge=v(B(32,[[0,"rgba(255,255,255,0.9)"],[.3,"rgba(255,120,255,0.4)"],[.7,"rgba(200,50,200,0.08)"],[1,"rgba(0,0,0,0)"]]));const ce=b.showComets?Math.max(0,Math.round(b.cometCount)):0,Se=Math.max(2,Math.round(b.cometTail));he=[];for(let _e=0;_e<ce;_e++){const Me=new Float32Array(Se*3),me=new Float32Array(Se*3),Re=v(new si);Re.setAttribute("position",new Nn(Me,3).setUsage(ho)),Re.setAttribute("color",new Nn(me,3).setUsage(ho));const Pe=v(d(new xp({vertexColors:!0,transparent:!0,opacity:.9,blending:No,depthWrite:!1}))),Fe=new dy(Re,Pe);Fe.frustumCulled=!1;const k=v(new ay({map:ge,transparent:!0,opacity:0,blending:No,depthWrite:!1,color:new xt(G.comet.r*1.2,G.comet.g*1.2,G.comet.b*1.2)})),Ee=new $T(k);Ee.scale.set(.35,.35,1),u.add(Fe),u.add(Ee);const fe=g[Math.floor(Math.random()*g.length)],Ce=b.cometSpeed*(.7+Math.random()*.6);he.push({bright:.7+Math.random()*.3,lane:fe.lane,speed:Ce,pulse:fe.speed,wobblePhase:fe.wobblePhase,base:Ce,boost:0,boostMul:1,racing:!1,s:0,idle:0,idleFor:.4+_e/ce*b.cometDelay,trail:Me,trailCol:me,geo:Re,line:Fe,head:Ee})}Lt=0,Te()}const ze=rl/2/Math.tan(Ay*Math.PI/180/2),Ke=new J(3.4,-.6,10).normalize(),Xe=new J(0,rl/2,0);l.position.copy(Xe).addScaledVector(Ke,ze),l.lookAt(Xe);let oe=1;function Te(){const b=t.current,W=e.clientWidth||1,X=e.clientHeight||1;oe=X,r.setSize(W,X,!1),l.aspect=W/X,l.updateProjectionMatrix(),f.uAspect.value=W/X,f.uRadius.value=Kr(b.repelRadius/(X/2),.01,3),b.running||r.render(o,l)}const ve=new ResizeObserver(Te);let Oe=0;const tt=b=>{const W=t.current,X=e.getBoundingClientRect();!X.width||!X.height||(f.uMouse.value.set((b.clientX-X.left)/X.width*2-1,-((b.clientY-X.top)/X.height*2-1)),Oe=W.hoverRepel&&W.running?Kr(W.repelStrength/100,0,1)*Eb:0)},Qe=()=>{Oe=0};e.addEventListener("pointermove",tt),e.addEventListener("pointerleave",Qe),e.addEventListener("pointercancel",Qe);function Vt(b,W,X,de,xe){pe=!0;let te=0,ce=1/0;for(let Se=0;Se<uh;Se++){if(!Z[Se].active){te=Se;break}Z[Se].at<ce&&(ce=Z[Se].at,te=Se)}Z[te]={active:!0,x:b,y:W,z:X,at:de,amp:xe}}function ft(b,W,X,de,xe,te,ce){let Se=0,_e=0,Me=0,me=!1;for(let Re=0;Re<uh;Re++){const Pe=Z[Re];if(!Pe.active)continue;const Fe=de-Pe.at;if(Fe>yb){Pe.active=!1;continue}me=!0;const k=b-Pe.x,Ee=W-Pe.y,fe=X-Pe.z,Ce=Math.sqrt(k*k+Ee*Ee+fe*fe);if(Ce<.001||Ce>ce*1.5)continue;const Le=Math.abs(Ce-_b*Fe);if(Le>m_)continue;const ye=Math.cos(Le/m_*Math.PI/2),ke=Math.exp(-Fe/xb),Ve=1/Math.max(Ce,.3),Rt=p_*Pe.amp*Sb*ye*ke*Ve;Se+=k/Ce*Rt,_e+=Ee/Ce*Rt,Me+=fe/Ce*Rt}me||(pe=!1),xe[te]+=Se,xe[te+1]+=_e,xe[te+2]+=Me}function wt(b,W,X){j=!0;const de=R[b*3],xe=R[b*3+1],te=R[b*3+2];Vt(de,xe,te,W,X);const ce=h_,Se=ce*ce;for(let _e=0;_e<x;_e++){const Me=R[_e*3]-de,me=R[_e*3+1]-xe,Re=R[_e*3+2]-te,Pe=Me*Me+me*me+Re*Re;if(Pe>Se||Pe<1e-4)continue;const Fe=Math.sqrt(Pe),k=1-Fe/ce,Ee=p_*X*k*k/Math.max(Fe,.1);D[_e*3]+=Me*Ee,D[_e*3+1]+=me*Ee,D[_e*3+2]+=Re*Ee;const fe=1+(vb-1)*X*k*k;fe>F[_e]&&(F[_e]=fe,T[_e]=0)}}function _t(b){let W=!1;for(let X=0;X<x;X++){const de=X*3;for(let Se=0;Se<3;Se++){const _e=-50*P[de+Se]-mb*D[de+Se];D[de+Se]+=_e*b,P[de+Se]+=D[de+Se]*b}const xe=P[de]**2+P[de+1]**2+P[de+2]**2,te=D[de]**2+D[de+1]**2+D[de+2]**2;xe<1e-8&&te<1e-8?(P[de]=P[de+1]=P[de+2]=0,D[de]=D[de+1]=D[de+2]=0):W=!0;const ce=-65*(F[X]-1)-gb*T[X];T[X]+=ce*b,F[X]+=T[X]*b,Math.abs(F[X]-1)<.001&&Math.abs(T[X])<.001?(F[X]=1,T[X]=0):W=!0}W||(j=!1)}let dt=0,Lt=0,Wt=0,Ot=0,Bt=0,At=!1,kt=0,q=performance.now();function fn(b,W,X){const de=t.current,xe=Ot*b.speed,te=b.bright*de.lineGlow,ce=.15+te*1.5,Se=Math.min(te*.5*(.9+.1*Math.sin(W*.18+b.pulse)),.7)*Math.min(X*3,1),_e=b.from+X*(b.to-b.from),Me=.15*(b.to-b.from),{pts:me,cols:Re}=b;for(let Fe=0;Fe<Lo;Fe++){const k=Fe/(Lo-1),Ee=b.from+k*(b.to-b.from),fe=Fe*3;h.writePoint(me,fe,Ee,b.lane,xe,ah,b.wobblePhase,W),pe&&ft(me[fe],me[fe+1],me[fe+2],W,me,fe,h_);let Ce=1;if(k<ec){const ke=k/ec;Ce=ke*ke}else if(k>1-ec){const ke=(1-k)/ec;Ce=ke*ke}let Le=1;Ee>_e?Le=0:Ee>_e-Me&&(Le=(_e-Ee)/Me,Le*=Le);const ye=Ce*ce*Le*Se;Re[fe]=G.strand.r*ye,Re[fe+1]=G.strand.g*ye,Re[fe+2]=G.strand.b*ye}let Pe=b.offset;for(let Fe=0;Fe<Lo-1;Fe++){const k=Fe*3,Ee=(Fe+1)*3;y[Pe]=me[k],y[Pe+1]=me[k+1],y[Pe+2]=me[k+2],M[Pe]=Re[k],M[Pe+1]=Re[k+1],M[Pe+2]=Re[k+2],Pe+=3,y[Pe]=me[Ee],y[Pe+1]=me[Ee+1],y[Pe+2]=me[Ee+2],M[Pe]=Re[Ee],M[Pe+1]=Re[Ee+1],M[Pe+2]=Re[Ee+2],Pe+=3}}function Mt(b,W,X,de){const xe=t.current,te=b.trail.length/3;if(!b.racing){if(b.head.material&&(b.head.material.opacity=0),de<.3)return;if(b.idle+=X,b.idle>b.idleFor){b.racing=!0,b.s=xe.flowDir<0?fh:ch,b.base=xe.cometSpeed*(.7+Math.random()*.6),b.speed=b.base,b.boost=0,b.boostMul=1;const Me=g[Math.floor(Math.random()*g.length)];b.lane=Me.lane,b.pulse=Me.speed,b.wobblePhase=Me.wobblePhase}return}if(b.boost>0&&(b.boost-=X,b.boost<=0?(b.boost=0,b.boostMul=1):b.boostMul=1+(__-1)*(b.boost/x_),b.speed=b.base*b.boostMul),b.s+=X*b.speed*xe.flowDir,xe.flowDir<0?b.s<ch:b.s>fh){b.racing=!1,b.idle=0,b.idleFor=xe.cometDelay*(.6+Math.random()*.8),b.trailCol.fill(0),b.geo.attributes.color&&(b.geo.attributes.color.needsUpdate=!0),b.head.material&&(b.head.material.opacity=0);return}const ce=Ot*b.pulse,Se=Kr((b.s-ch)/g_,0,1)*Kr((fh-b.s)/g_,0,1);for(let Me=0;Me<te;Me++){const me=Kr(b.s-Me*.005*xe.flowDir,.005,.995),Re=Me*3;h.writePoint(b.trail,Re,me,b.lane,ce,ah,b.wobblePhase,W);const Pe=(1-Me/te)**2,Fe=b.bright*xe.cometGlow*Pe*Se,k=de*(Me<3?1.3:1);b.trailCol[Re]=G.comet.r*Fe*k,b.trailCol[Re+1]=G.comet.g*Fe*k,b.trailCol[Re+2]=G.comet.b*Fe*k}b.head.position.set(b.trail[0],b.trail[1],b.trail[2]);const _e=b.boost>0?1+(b.boostMul-1)*.8:1;b.head.material&&(b.head.material.opacity=Se*.35*de*_e),b.head.scale.set(.35*_e,.35*_e,1),b.geo.attributes.position&&(b.geo.attributes.position.needsUpdate=!0),b.geo.attributes.color&&(b.geo.attributes.color.needsUpdate=!0)}function U(b){const X=t.current.collideForce;if(X<=0)return;const de=v_*v_;for(const xe of he){if(!xe.racing)continue;const te=xe.trail[0],ce=xe.trail[1],Se=xe.trail[2];if(!(te===0&&ce===0&&Se===0))for(let _e=0;_e<x;_e+=3){const Me=R[_e*3]-te,me=R[_e*3+1]-ce,Re=R[_e*3+2]-Se;Me*Me+me*me+Re*Re<de&&N[_e]===0&&(N[_e]=.001,V[_e]=y_*X,F[_e]=1+(M_-1)*X,wt(_e,b,X),xe.boost=x_,xe.boostMul=1+(__-1)*X,xe.speed=xe.base*xe.boostMul)}}}function E(b){dt=requestAnimationFrame(E);const W=t.current,X=Math.min((b-q)/1e3,.04);if(q=b,!W.running){At||(r.render(o,l),At=!0);return}At=!1,Lt===0&&(Lt=b),Wt=(b-Lt)/1e3;const de=Wt,xe=dh(de,Io.strandStart,Io.strandEnd),te=dh(de,Io.dotStart,Io.dotEnd),ce=dh(de,Io.cometStart,Io.cometEnd);ae(W);const Se=lh(W.zoom);l.fov!==Se&&(l.fov=Se,l.updateProjectionMatrix()),f.uRadius.value=Kr(W.repelRadius/(oe/2),.01,3),Ot+=X*W.flowSpeed;const _e=f.uStrength;if(_e.value+=(Oe-_e.value)*Math.min(1,X*12),Bt+=X,Bt>=E_&&A){Bt-=E_;for(const Me of g)fn(Me,de,xe);A.attributes.position&&(A.attributes.position.needsUpdate=!0),A.attributes.color&&(A.attributes.color.needsUpdate=!0)}if(j&&_t(X),L&&x>0){const Me=W.dotSize;for(let me=0;me<x;me++){const Re=S[me],Pe=g[Re.strand]??g[0],Fe=Ot*Pe.speed,k=me*3;if(h.writePoint(R,k,Re.s,Re.lane,Fe,ah,Pe.wobblePhase,de),N[me]>0){N[me]+=X;const ke=N[me];if(ke<S_){const Ve=ke/S_;z[me]=(1+(M_-1)*(1-Ve))*(1-Ve*Ve),V[me]=y_*(1-Ve*Ve)*(1-Ve*Ve)}else z[me]=0,V[me]=0;ke>Mb&&(N[me]=0,z[me]=1,V[me]=0)}const Ee=z[me],fe=Me*F[me]*Ee;K.makeScale(fe,fe,fe),K.setPosition(R[k]+P[k],R[k+1]+P[k+1],R[k+2]+P[k+2]),L.setMatrixAt(me,K);const Ce=1-W.dotFlicker+W.dotFlicker*(.08+.92*Math.max(0,Math.sin(de*Re.flickerRate+Re.pulse))**2.5),Le=F[me]>1.02?1+(F[me]-1)*.5:1,ye=Re.bright*Ce*W.dotGlow*Le*te*(1+V[me])*Ee;I[k]=G.dot.r*ye,I[k+1]=G.dot.g*ye,I[k+2]=G.dot.b*ye}L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),L.material&&(L.material.opacity=.9*te)}for(const Me of he)Mt(Me,de,X,ce);kt++,kt%2===0&&x>0&&U(de),r.render(o,l)}return Q(),ve.observe(e),q=performance.now(),dt=requestAnimationFrame(E),{rebuild(){Q()},dispose(){var b;cancelAnimationFrame(dt),ve.disconnect(),e.removeEventListener("pointermove",tt),e.removeEventListener("pointerleave",Qe),e.removeEventListener("pointercancel",Qe);for(const W of m)W.dispose();r.dispose(),(b=r.forceContextLoss)==null||b.call(r)}}}function Ab(n){const{background:e=cn.background,topRadius:t=cn.topRadius,waistRadius:r=cn.waistRadius,waistPosition:o=cn.waistPosition,bottomRadius:l=cn.bottomRadius,twist:u=cn.twist,zoom:f=cn.zoom,speed:d=cn.speed,direction:h=cn.direction,lineOptions:m=cn.lineOptions,dots:v=cn.dots,dotOptions:g=cn.dotOptions,comets:y=cn.comets,cometOptions:M=cn.cometOptions,repel:A=cn.repel,repelOptions:S=cn.repelOptions,style:x}=n,L=Ue.useRef(null),I=Ue.useRef(null),P=!ub(),D={...cn.lineOptions,...m},F={...cn.dotOptions,...g},T={...cn.cometOptions,...M},N={...cn.repelOptions,...S},V={floorRadius:l/sh,waistRadius:r/sh,crownRadius:t/sh,waistAt:1-o/100,twist:u,zoom:f,flowDir:h==="left"?-1:1,flowSpeed:d/100*(h==="left"?-1:1),lineCount:D.count,lineColor:D.color,lineGlow:D.glow/10*cb,showDots:v,dotCount:F.count,dotSize:F.size/pb,dotColor:F.color,dotGlow:F.glow/10*fb,dotFlicker:F.flicker/10,showComets:y,cometCount:T.count,cometSpeed:T.speed/10*db,cometColor:T.color,cometGlow:T.glow/10*hb,cometTail:T.tail,cometDelay:T.delay,collideForce:T.collide/10,hoverRepel:A,repelRadius:N.radius,repelStrength:N.strength,running:P},z=JSON.stringify([V.floorRadius,V.waistRadius,V.crownRadius,V.waistAt,V.twist,V.lineCount,V.showDots,V.dotCount,V.showComets,V.cometCount,V.cometTail]),j=Ue.useRef(V);return j.current=V,Ue.useEffect(()=>{if(!L.current||!I.current)return;const he=wb(I.current,L.current,j);return()=>he.dispose()},[z]),et.jsx("div",{ref:L,style:{position:"absolute",inset:0,overflow:"hidden",backgroundColor:e,...x},children:et.jsx("canvas",{ref:I,style:{display:"block",width:"100%",height:"100%",pointerEvents:"auto"}})})}const Jp=Ue.createContext({});function em(n){const e=Ue.useRef(null);return e.current===null&&(e.current=n()),e.current}const Uc=Ue.createContext(null),tm=Ue.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class Cb extends Ue.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Rb({children:n,isPresent:e}){const t=Ue.useId(),r=Ue.useRef(null),o=Ue.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=Ue.useContext(tm);return Ue.useInsertionEffect(()=>{const{width:u,height:f,top:d,left:h}=o.current;if(e||!r.current||!u||!f)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${f}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),et.jsx(Cb,{isPresent:e,childRef:r,sizeRef:o,children:Ue.cloneElement(n,{ref:r})})}const bb=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u})=>{const f=em(Pb),d=Ue.useId(),h=Ue.useCallback(v=>{f.set(v,!0);for(const g of f.values())if(!g)return;r&&r()},[f,r]),m=Ue.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(f.set(v,!1),()=>f.delete(v))}),l?[Math.random(),h]:[t,h]);return Ue.useMemo(()=>{f.forEach((v,g)=>f.set(g,!1))},[t]),Ue.useEffect(()=>{!t&&!f.size&&r&&r()},[t]),u==="popLayout"&&(n=et.jsx(Rb,{isPresent:t,children:n})),et.jsx(Uc.Provider,{value:m,children:n})};function Pb(){return new Map}function Cy(n=!0){const e=Ue.useContext(Uc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Ue.useId();Ue.useEffect(()=>{n&&o(l)},[n]);const u=Ue.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const tc=n=>n.key||"";function T_(n){const e=[];return Ue.Children.forEach(n,t=>{Ue.isValidElement(t)&&e.push(t)}),e}const nm=typeof window<"u",Ry=nm?Ue.useLayoutEffect:Ue.useEffect,Mp=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[f,d]=Cy(u),h=Ue.useMemo(()=>T_(n),[n]),m=u&&!f?[]:h.map(tc),v=Ue.useRef(!0),g=Ue.useRef(h),y=em(()=>new Map),[M,A]=Ue.useState(h),[S,x]=Ue.useState(h);Ry(()=>{v.current=!1,g.current=h;for(let R=0;R<S.length;R++){const P=tc(S[R]);m.includes(P)?y.delete(P):y.get(P)!==!0&&y.set(P,!1)}},[S,m.length,m.join("-")]);const L=[];if(h!==M){let R=[...h];for(let P=0;P<S.length;P++){const D=S[P],F=tc(D);m.includes(F)||(R.splice(P,0,D),L.push(D))}l==="wait"&&L.length&&(R=L),x(T_(R)),A(h);return}const{forceRender:I}=Ue.useContext(Jp);return et.jsx(et.Fragment,{children:S.map(R=>{const P=tc(R),D=u&&!f?!1:h===S||m.includes(P),F=()=>{if(y.has(P))y.set(P,!0);else return;let T=!0;y.forEach(N=>{N||(T=!1)}),T&&(I==null||I(),x(g.current),u&&(d==null||d()),r&&r())};return et.jsx(bb,{isPresent:D,initial:!v.current||t?void 0:!1,custom:D?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:D?void 0:F,children:R},P)})})},ri=n=>n;let by=ri;function im(n){let e;return()=>(e===void 0&&(e=n()),e)}const qo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},vr=n=>n*1e3,_r=n=>n/1e3,Db={useManualTiming:!1};function Lb(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,v=!1)=>{const y=v&&r?e:t;return m&&l.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const nc=["read","resolveKeyframes","update","preRender","render","postRender"],Ib=40;function Py(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=nc.reduce((x,L)=>(x[L]=Lb(l),x),{}),{read:f,resolveKeyframes:d,update:h,preRender:m,render:v,postRender:g}=u,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,Ib),1),o.timestamp=x,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),v.process(o),g.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:nc.reduce((x,L)=>{const I=u[L];return x[L]=(R,P=!1,D=!1)=>(t||M(),I.schedule(R,P,D)),x},{}),cancel:x=>{for(let L=0;L<nc.length;L++)u[nc[L]].cancel(x)},state:o,steps:u}}const{schedule:Kt,cancel:es,state:En,steps:gh}=Py(typeof requestAnimationFrame<"u"?requestAnimationFrame:ri,!0),Dy=Ue.createContext({strict:!1}),w_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ko={};for(const n in w_)Ko[n]={isEnabled:e=>w_[n].some(t=>!!e[t])};function Nb(n){for(const e in n)Ko[e]={...Ko[e],...n[e]}}const Ub=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Tc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Ub.has(n)}let Ly=n=>!Tc(n);function Fb(n){n&&(Ly=e=>e.startsWith("on")?!Tc(e):n(e))}try{Fb(require("@emotion/is-prop-valid").default)}catch{}function Ob(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(Ly(o)||t===!0&&Tc(o)||!e&&!Tc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function Bb(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Fc=Ue.createContext({});function fl(n){return typeof n=="string"||Array.isArray(n)}function Oc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const rm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sm=["initial",...rm];function Bc(n){return Oc(n.animate)||sm.some(e=>fl(n[e]))}function Iy(n){return!!(Bc(n)||n.variants)}function kb(n,e){if(Bc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||fl(t)?t:void 0,animate:fl(r)?r:void 0}}return n.inherit!==!1?e:{}}function Vb(n){const{initial:e,animate:t}=kb(n,Ue.useContext(Fc));return Ue.useMemo(()=>({initial:e,animate:t}),[A_(e),A_(t)])}function A_(n){return Array.isArray(n)?n.join(" "):n}const zb=Symbol.for("motionComponentSymbol");function Uo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Gb(n,e,t){return Ue.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Uo(t)&&(t.current=r))},[e])}const om=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Hb="framerAppearId",Ny="data-"+om(Hb),{schedule:am}=Py(queueMicrotask,!1),Uy=Ue.createContext({});function Wb(n,e,t,r,o){var l,u;const{visualElement:f}=Ue.useContext(Fc),d=Ue.useContext(Dy),h=Ue.useContext(Uc),m=Ue.useContext(tm).reducedMotion,v=Ue.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const g=v.current,y=Ue.useContext(Uy);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&Xb(v.current,t,o,y);const M=Ue.useRef(!1);Ue.useInsertionEffect(()=>{g&&M.current&&g.update(t,h)});const A=t[Ny],S=Ue.useRef(!!A&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,A))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,A)));return Ry(()=>{g&&(M.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),am.render(g.render),S.current&&g.animationState&&g.animationState.animateChanges())}),Ue.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,A)}),S.current=!1))}),g}function Xb(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Fy(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&Uo(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function Fy(n){if(n)return n.options.allowProjection!==!1?n.projection:Fy(n.parent)}function Yb({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&Nb(n);function f(h,m){let v;const g={...Ue.useContext(tm),...h,layoutId:qb(h)},{isStatic:y}=g,M=Vb(h),A=r(h,y);if(!y&&nm){Kb();const S=$b(g);v=S.MeasureLayout,M.visualElement=Wb(o,A,g,e,S.ProjectionNode)}return et.jsxs(Fc.Provider,{value:M,children:[v&&M.visualElement?et.jsx(v,{visualElement:M.visualElement,...g}):null,t(o,h,Gb(A,M.visualElement,m),A,y,M.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Ue.forwardRef(f);return d[zb]=o,d}function qb({layoutId:n}){const e=Ue.useContext(Jp).id;return e&&n!==void 0?e+"-"+n:n}function Kb(n,e){Ue.useContext(Dy).strict}function $b(n){const{drag:e,layout:t}=Ko;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const jb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lm(n){return typeof n!="string"||n.includes("-")?!1:!!(jb.indexOf(n)>-1||/[A-Z]/u.test(n))}function C_(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function um(n,e,t,r){if(typeof e=="function"){const[o,l]=C_(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=C_(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Ep=n=>Array.isArray(n),Zb=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Qb=n=>Ep(n)?n[n.length-1]||0:n,Un=n=>!!(n&&n.getVelocity);function fc(n){const e=Un(n)?n.get():n;return Zb(e)?e.toValue():e}function Jb({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:eP(r,o,l,n),renderState:e()};return t&&(u.onMount=f=>t({props:r,current:f,...u}),u.onUpdate=f=>t(f)),u}const Oy=n=>(e,t)=>{const r=Ue.useContext(Fc),o=Ue.useContext(Uc),l=()=>Jb(n,e,r,o);return t?l():em(l)};function eP(n,e,t,r){const o={},l=r(n,{});for(const g in l)o[g]=fc(l[g]);let{initial:u,animate:f}=n;const d=Bc(n),h=Iy(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const v=m?f:u;if(v&&typeof v!="boolean"&&!Oc(v)){const g=Array.isArray(v)?v:[v];for(let y=0;y<g.length;y++){const M=um(n,g[y]);if(M){const{transitionEnd:A,transition:S,...x}=M;for(const L in x){let I=x[L];if(Array.isArray(I)){const R=m?I.length-1:0;I=I[R]}I!==null&&(o[L]=I)}for(const L in A)o[L]=A[L]}}}return o}const ea=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vs=new Set(ea),By=n=>e=>typeof e=="string"&&e.startsWith(n),ky=By("--"),tP=By("var(--"),cm=n=>tP(n)?nP.test(n.split("/*")[0].trim()):!1,nP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Vy=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Sr=(n,e,t)=>t>e?e:t<n?n:t,ta={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},dl={...ta,transform:n=>Sr(0,1,n)},ic={...ta,default:1},_l=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),qr=_l("deg"),$i=_l("%"),st=_l("px"),iP=_l("vh"),rP=_l("vw"),R_={...$i,parse:n=>$i.parse(n)/100,transform:n=>$i.transform(n*100)},sP={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st},oP={rotate:qr,rotateX:qr,rotateY:qr,rotateZ:qr,scale:ic,scaleX:ic,scaleY:ic,scaleZ:ic,skew:qr,skewX:qr,skewY:qr,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:dl,originX:R_,originY:R_,originZ:st},b_={...ta,transform:Math.round},fm={...sP,...oP,zIndex:b_,size:st,fillOpacity:dl,strokeOpacity:dl,numOctaves:b_},aP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lP=ea.length;function uP(n,e,t){let r="",o=!0;for(let l=0;l<lP;l++){const u=ea[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=Vy(f,fm[u]);if(!d){o=!1;const m=aP[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function dm(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(Vs.has(d)){u=!0;continue}else if(ky(d)){o[d]=h;continue}else{const m=Vy(h,fm[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=uP(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const cP={offset:"stroke-dashoffset",array:"stroke-dasharray"},fP={offset:"strokeDashoffset",array:"strokeDasharray"};function dP(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?cP:fP;n[l.offset]=st.transform(-r);const u=st.transform(e),f=st.transform(t);n[l.array]=`${u} ${f}`}function P_(n,e,t){return typeof n=="string"?n:st.transform(e+t*n)}function hP(n,e,t){const r=P_(e,n.x,n.width),o=P_(t,n.y,n.height);return`${r} ${o}`}function hm(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...h},m,v){if(dm(n,h,v),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:y,dimensions:M}=n;g.transform&&(M&&(y.transform=g.transform),delete g.transform),M&&(o!==void 0||l!==void 0||y.transform)&&(y.transformOrigin=hP(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),r!==void 0&&(g.scale=r),u!==void 0&&dP(g,u,f,d,!1)}const pm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),zy=()=>({...pm(),attrs:{}}),mm=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Gy(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const Hy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Wy(n,e,t,r){Gy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Hy.has(o)?o:om(o),e.attrs[o])}const wc={};function pP(n){Object.assign(wc,n)}function Xy(n,{layout:e,layoutId:t}){return Vs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!wc[n]||n==="opacity")}function gm(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(Un(o[u])||e.style&&Un(e.style[u])||Xy(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function Yy(n,e,t){const r=gm(n,e,t);for(const o in n)if(Un(n[o])||Un(e[o])){const l=ea.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function mP(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const D_=["x","y","width","height","cx","cy","r"],gP={useVisualState:Oy({scrapeMotionValuesFromProps:Yy,createRenderState:zy,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const f in o)if(Vs.has(f)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let f=0;f<D_.length;f++){const d=D_[f];n[d]!==e[d]&&(u=!0)}u&&Kt.read(()=>{mP(t,r),Kt.render(()=>{hm(r,o,mm(t.tagName),n.transformTemplate),Wy(t,r)})})}})},vP={useVisualState:Oy({scrapeMotionValuesFromProps:gm,createRenderState:pm})};function qy(n,e,t){for(const r in e)!Un(e[r])&&!Xy(r,t)&&(n[r]=e[r])}function _P({transformTemplate:n},e){return Ue.useMemo(()=>{const t=pm();return dm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function xP(n,e){const t=n.style||{},r={};return qy(r,t,n),Object.assign(r,_P(n,e)),r}function yP(n,e){const t={},r=xP(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function SP(n,e,t,r){const o=Ue.useMemo(()=>{const l=zy();return hm(l,e,mm(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};qy(l,n.style,n),o.style={...l,...o.style}}return o}function MP(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(lm(t)?SP:yP)(r,l,u,t),h=Ob(r,typeof t=="string",n),m=t!==Ue.Fragment?{...h,...d,ref:o}:{},{children:v}=r,g=Ue.useMemo(()=>Un(v)?v.get():v,[v]);return Ue.createElement(t,{...m,children:g})}}function EP(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...lm(r)?gP:vP,preloadedFeatures:n,useRender:MP(o),createVisualElement:e,Component:r};return Yb(u)}}function Ky(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function kc(n,e,t){const r=n.getProps();return um(r,e,t!==void 0?t:r.custom,n)}const TP=im(()=>window.ScrollTimeline!==void 0);class wP{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(TP()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class AP extends wP{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function vm(n,e){return n?n[e]||n.default||n:void 0}const Tp=2e4;function $y(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Tp;)e+=t,r=n.next(e);return e>=Tp?1/0:e}function _m(n){return typeof n=="function"}function L_(n,e){n.timeline=e,n.onfinish=null}const xm=n=>Array.isArray(n)&&typeof n[0]=="number",CP={linearEasing:void 0};function RP(n,e){const t=im(n);return()=>{var r;return(r=CP[e])!==null&&r!==void 0?r:t()}}const Ac=RP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),jy=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(qo(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function Zy(n){return!!(typeof n=="function"&&Ac()||!n||typeof n=="string"&&(n in wp||Ac())||xm(n)||Array.isArray(n)&&n.every(Zy))}const el=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,wp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:el([0,.65,.55,1]),circOut:el([.55,0,1,.45]),backIn:el([.31,.01,.66,-.59]),backOut:el([.33,1.53,.69,.99])};function Qy(n,e){if(n)return typeof n=="function"&&Ac()?jy(n,e):xm(n)?el(n):Array.isArray(n)?n.map(t=>Qy(t,e)||wp.easeOut):wp[n]}const Li={x:!1,y:!1};function Jy(){return Li.x||Li.y}function bP(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function eS(n,e){const t=bP(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function I_(n){return e=>{e.pointerType==="touch"||Jy()||n(e)}}function PP(n,e,t={}){const[r,o,l]=eS(n,t),u=I_(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const m=I_(v=>{h(v),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const tS=(n,e)=>e?n===e?!0:tS(n,e.parentElement):!1,ym=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,DP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LP(n){return DP.has(n.tagName)||n.tabIndex!==-1}const tl=new WeakSet;function N_(n){return e=>{e.key==="Enter"&&n(e)}}function vh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const IP=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=N_(()=>{if(tl.has(t))return;vh(t,"down");const o=N_(()=>{vh(t,"up")}),l=()=>vh(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function U_(n){return ym(n)&&!Jy()}function NP(n,e,t={}){const[r,o,l]=eS(n,t),u=f=>{const d=f.currentTarget;if(!U_(f)||tl.has(d))return;tl.add(d);const h=e(f),m=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),!(!U_(y)||!tl.has(d))&&(tl.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{m(y,t.useGlobalTarget||tS(d,y.target))},g=y=>{m(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(f=>{!LP(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),f.addEventListener("focus",h=>IP(h,o),o)}),l}function UP(n){return n==="x"||n==="y"?Li[n]?null:(Li[n]=!0,()=>{Li[n]=!1}):Li.x||Li.y?null:(Li.x=Li.y=!0,()=>{Li.x=Li.y=!1})}const nS=new Set(["width","height","top","left","right","bottom",...ea]);let dc;function FP(){dc=void 0}const ji={now:()=>(dc===void 0&&ji.set(En.isProcessing||Db.useManualTiming?En.timestamp:performance.now()),dc),set:n=>{dc=n,queueMicrotask(FP)}};function Sm(n,e){n.indexOf(e)===-1&&n.push(e)}function Mm(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Em{constructor(){this.subscriptions=[]}add(e){return Sm(this.subscriptions,e),()=>Mm(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function iS(n,e){return e?n*(1e3/e):0}const F_=30,OP=n=>!isNaN(parseFloat(n));class BP{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=ji.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ji.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=OP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Em);const r=this.events[e].add(t);return e==="change"?()=>{r(),Kt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ji.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>F_)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,F_);return iS(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hl(n,e){return new BP(n,e)}function kP(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,hl(t))}function VP(n,e){const t=kc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=Qb(l[u]);kP(n,u,f)}}function zP(n){return!!(Un(n)&&n.add)}function Ap(n,e){const t=n.getValue("willChange");if(zP(t))return t.add(e)}function rS(n){return n.props[Ny]}const sS=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,GP=1e-7,HP=12;function WP(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=sS(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>GP&&++f<HP);return u}function xl(n,e,t,r){if(n===e&&t===r)return ri;const o=l=>WP(l,0,1,n,t);return l=>l===0||l===1?l:sS(o(l),e,r)}const oS=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,aS=n=>e=>1-n(1-e),lS=xl(.33,1.53,.69,.99),Tm=aS(lS),uS=oS(Tm),cS=n=>(n*=2)<1?.5*Tm(n):.5*(2-Math.pow(2,-10*(n-1))),wm=n=>1-Math.sin(Math.acos(n)),fS=aS(wm),dS=oS(wm),hS=n=>/^0[^.\s]+$/u.test(n);function XP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||hS(n):!0}const sl=n=>Math.round(n*1e5)/1e5,Am=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function YP(n){return n==null}const qP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cm=(n,e)=>t=>!!(typeof t=="string"&&qP.test(t)&&t.startsWith(n)||e&&!YP(t)&&Object.prototype.hasOwnProperty.call(t,e)),pS=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(Am);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},KP=n=>Sr(0,255,n),_h={...ta,transform:n=>Math.round(KP(n))},Is={test:Cm("rgb","red"),parse:pS("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+_h.transform(n)+", "+_h.transform(e)+", "+_h.transform(t)+", "+sl(dl.transform(r))+")"};function $P(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Cp={test:Cm("#"),parse:$P,transform:Is.transform},Fo={test:Cm("hsl","hue"),parse:pS("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+$i.transform(sl(e))+", "+$i.transform(sl(t))+", "+sl(dl.transform(r))+")"},Ln={test:n=>Is.test(n)||Cp.test(n)||Fo.test(n),parse:n=>Is.test(n)?Is.parse(n):Fo.test(n)?Fo.parse(n):Cp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Is.transform(n):Fo.transform(n)},jP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ZP(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Am))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(jP))===null||t===void 0?void 0:t.length)||0)>0}const mS="number",gS="color",QP="var",JP="var(",O_="${}",e3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pl(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(e3,d=>(Ln.test(d)?(r.color.push(l),o.push(gS),t.push(Ln.parse(d))):d.startsWith(JP)?(r.var.push(l),o.push(QP),t.push(d)):(r.number.push(l),o.push(mS),t.push(parseFloat(d))),++l,O_)).split(O_);return{values:t,split:f,indexes:r,types:o}}function vS(n){return pl(n).values}function _S(n){const{split:e,types:t}=pl(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const f=t[u];f===mS?l+=sl(o[u]):f===gS?l+=Ln.transform(o[u]):l+=o[u]}return l}}const t3=n=>typeof n=="number"?0:n;function n3(n){const e=vS(n);return _S(n)(e.map(t3))}const ts={test:ZP,parse:vS,createTransformer:_S,getAnimatableNone:n3},i3=new Set(["brightness","contrast","saturate","opacity"]);function r3(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Am)||[];if(!r)return n;const o=t.replace(r,"");let l=i3.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const s3=/\b([a-z-]*)\(.*?\)/gu,Rp={...ts,getAnimatableNone:n=>{const e=n.match(s3);return e?e.map(r3).join(" "):n}},o3={...fm,color:Ln,backgroundColor:Ln,outlineColor:Ln,fill:Ln,stroke:Ln,borderColor:Ln,borderTopColor:Ln,borderRightColor:Ln,borderBottomColor:Ln,borderLeftColor:Ln,filter:Rp,WebkitFilter:Rp},Rm=n=>o3[n];function xS(n,e){let t=Rm(n);return t!==Rp&&(t=ts),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const a3=new Set(["auto","none","0"]);function l3(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!a3.has(l)&&pl(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=xS(t,o)}const B_=n=>n===ta||n===st,k_=(n,e)=>parseFloat(n.split(", ")[e]),V_=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return k_(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?k_(l[1],n):0}},u3=new Set(["x","y","z"]),c3=ea.filter(n=>!u3.has(n));function f3(n){const e=[];return c3.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const $o={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:V_(4,13),y:V_(5,14)};$o.translateX=$o.x;$o.translateY=$o.y;const Ns=new Set;let bp=!1,Pp=!1;function yS(){if(Pp){const n=Array.from(Ns).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=f3(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var f;(f=r.getValue(l))===null||f===void 0||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Pp=!1,bp=!1,Ns.forEach(n=>n.complete()),Ns.clear()}function SS(){Ns.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Pp=!0)})}function d3(){SS(),yS()}class bm{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ns.add(this),bp||(bp=!0,Kt.read(SS),Kt.resolveKeyframes(yS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),f=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ns.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ns.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const MS=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),h3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function p3(n){const e=h3.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function ES(n,e,t=1){const[r,o]=p3(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return MS(u)?parseFloat(u):u}return cm(o)?ES(o,e,t+1):o}const TS=n=>e=>e.test(n),m3={test:n=>n==="auto",parse:n=>n},wS=[ta,st,$i,qr,rP,iP,m3],z_=n=>wS.find(TS(n));class AS extends bm{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),cm(h))){const m=ES(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!nS.has(r)||e.length!==2)return;const[o,l]=e,u=z_(o),f=z_(l);if(u!==f)if(B_(u)&&B_(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)XP(e[o])&&r.push(o);r.length&&l3(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$o[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=$o[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const G_=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ts.test(n)||n==="0")&&!n.startsWith("url("));function g3(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function v3(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=G_(o,e),f=G_(l,e);return!u||!f?!1:g3(n)||(t==="spring"||_m(t))&&r}const _3=n=>n!==null;function Vc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(_3),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const x3=40;class CS{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ji.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>x3?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&d3(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=ji.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!v3(e,r,o,l))if(u)this.options.duration=0;else{d&&d(Vc(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const en=(n,e,t)=>n+(e-n)*t;function xh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function y3({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=xh(d,f,n+1/3),l=xh(d,f,n),u=xh(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Cc(n,e){return t=>t>0?e:n}const yh=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},S3=[Cp,Is,Fo],M3=n=>S3.find(e=>e.test(n));function H_(n){const e=M3(n);if(!e)return!1;let t=e.parse(n);return e===Fo&&(t=y3(t)),t}const W_=(n,e)=>{const t=H_(n),r=H_(e);if(!t||!r)return Cc(n,e);const o={...t};return l=>(o.red=yh(t.red,r.red,l),o.green=yh(t.green,r.green,l),o.blue=yh(t.blue,r.blue,l),o.alpha=en(t.alpha,r.alpha,l),Is.transform(o))},E3=(n,e)=>t=>e(n(t)),yl=(...n)=>n.reduce(E3),Dp=new Set(["none","hidden"]);function T3(n,e){return Dp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function w3(n,e){return t=>en(n,e,t)}function Pm(n){return typeof n=="number"?w3:typeof n=="string"?cm(n)?Cc:Ln.test(n)?W_:R3:Array.isArray(n)?RS:typeof n=="object"?Ln.test(n)?W_:A3:Cc}function RS(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Pm(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function A3(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Pm(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function C3(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],f=n.indexes[u][o[u]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const R3=(n,e)=>{const t=ts.createTransformer(e),r=pl(n),o=pl(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Dp.has(n)&&!o.values.length||Dp.has(e)&&!r.values.length?T3(n,e):yl(RS(C3(r,o),o.values),t):Cc(n,e)};function bS(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?en(n,e,t):Pm(n)(n,e)}const b3=5;function PS(n,e,t){const r=Math.max(e-b3,0);return iS(t-n(r),e-r)}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Sh=.001;function P3({duration:n=nn.duration,bounce:e=nn.bounce,velocity:t=nn.velocity,mass:r=nn.mass}){let o,l,u=1-e;u=Sr(nn.minDamping,nn.maxDamping,u),n=Sr(nn.minDuration,nn.maxDuration,_r(n)),u<1?(o=h=>{const m=h*u,v=m*n,g=m-t,y=Lp(h,u),M=Math.exp(-v);return Sh-g/y*M},l=h=>{const v=h*u*n,g=v*t+t,y=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=Lp(Math.pow(h,2),u);return(-o(h)+Sh>0?-1:1)*((g-y)*M)/A}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-Sh+m*v},l=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const f=5/n,d=L3(o,l,f);if(n=vr(n),isNaN(d))return{stiffness:nn.stiffness,damping:nn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const D3=12;function L3(n,e,t){let r=t;for(let o=1;o<D3;o++)r=r-n(r)/e(r);return r}function Lp(n,e){return n*Math.sqrt(1-e*e)}const I3=["duration","bounce"],N3=["stiffness","damping","mass"];function X_(n,e){return e.some(t=>n[t]!==void 0)}function U3(n){let e={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...n};if(!X_(n,N3)&&X_(n,I3))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*Sr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:nn.mass,stiffness:o,damping:l}}else{const t=P3(n);e={...e,...t,mass:nn.mass},e.isResolvedFromDuration=!0}return e}function DS(n=nn.visualDuration,e=nn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:v,velocity:g,isResolvedFromDuration:y}=U3({...t,velocity:-_r(t.velocity||0)}),M=g||0,A=h/(2*Math.sqrt(d*m)),S=u-l,x=_r(Math.sqrt(d/m)),L=Math.abs(S)<5;r||(r=L?nn.restSpeed.granular:nn.restSpeed.default),o||(o=L?nn.restDelta.granular:nn.restDelta.default);let I;if(A<1){const P=Lp(x,A);I=D=>{const F=Math.exp(-A*x*D);return u-F*((M+A*x*S)/P*Math.sin(P*D)+S*Math.cos(P*D))}}else if(A===1)I=P=>u-Math.exp(-x*P)*(S+(M+x*S)*P);else{const P=x*Math.sqrt(A*A-1);I=D=>{const F=Math.exp(-A*x*D),T=Math.min(P*D,300);return u-F*((M+A*x*S)*Math.sinh(T)+P*S*Math.cosh(T))/P}}const R={calculatedDuration:y&&v||null,next:P=>{const D=I(P);if(y)f.done=P>=v;else{let F=0;A<1&&(F=P===0?vr(M):PS(I,P,D));const T=Math.abs(F)<=r,N=Math.abs(u-D)<=o;f.done=T&&N}return f.value=f.done?u:D,f},toString:()=>{const P=Math.min($y(R),Tp),D=jy(F=>R.next(P*F).value,P,30);return P+"ms "+D}};return R}function Y_({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],g={done:!1,value:v},y=T=>f!==void 0&&T<f||d!==void 0&&T>d,M=T=>f===void 0?d:d===void 0||Math.abs(f-T)<Math.abs(d-T)?f:d;let A=t*e;const S=v+A,x=u===void 0?S:u(S);x!==S&&(A=x-v);const L=T=>-A*Math.exp(-T/r),I=T=>x+L(T),R=T=>{const N=L(T),V=I(T);g.done=Math.abs(N)<=h,g.value=g.done?x:V};let P,D;const F=T=>{y(g.value)&&(P=T,D=DS({keyframes:[g.value,M(g.value)],velocity:PS(I,T,g.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return F(0),{calculatedDuration:null,next:T=>{let N=!1;return!D&&P===void 0&&(N=!0,R(T),F(T)),P!==void 0&&T>=P?D.next(T-P):(!N&&R(T),g)}}}const F3=xl(.42,0,1,1),O3=xl(0,0,.58,1),LS=xl(.42,0,.58,1),B3=n=>Array.isArray(n)&&typeof n[0]!="number",k3={linear:ri,easeIn:F3,easeInOut:LS,easeOut:O3,circIn:wm,circInOut:dS,circOut:fS,backIn:Tm,backInOut:uS,backOut:lS,anticipate:cS},q_=n=>{if(xm(n)){by(n.length===4);const[e,t,r,o]=n;return xl(e,t,r,o)}else if(typeof n=="string")return k3[n];return n};function V3(n,e,t){const r=[],o=t||bS,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||ri:e;f=yl(d,f)}r.push(f)}return r}function z3(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(by(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=V3(e,r,o),d=f.length,h=m=>{if(u&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const g=qo(n[v],n[v+1],m);return f[v](g)};return t?m=>h(Sr(n[0],n[l-1],m)):h}function G3(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=qo(0,e,r);n.push(en(t,1,o))}}function H3(n){const e=[0];return G3(e,n.length-1),e}function W3(n,e){return n.map(t=>t*e)}function X3(n,e){return n.map(()=>e||LS).splice(0,n.length-1)}function Rc({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=B3(r)?r.map(q_):q_(r),l={done:!1,value:e[0]},u=W3(t&&t.length===e.length?t:H3(e),n),f=z3(u,e,{ease:Array.isArray(o)?o:X3(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const Y3=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Kt.update(e,!0),stop:()=>es(e),now:()=>En.isProcessing?En.timestamp:ji.now()}},q3={decay:Y_,inertia:Y_,tween:Rc,keyframes:Rc,spring:DS},K3=n=>n/100;class Dm extends CS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||bm,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,f=_m(t)?t:q3[t]||Rc;let d,h;f!==Rc&&typeof e[0]!="number"&&(d=yl(K3,bS(e[0],e[1])),e=[0,100]);const m=f({...this.options,keyframes:e});l==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=$y(m));const{calculatedDuration:v}=m,g=v+o,y=g*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:g,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:v}=r;if(this.startTime===null)return l.next(0);const{delay:g,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-g*(this.speed>=0?1:-1),L=this.speed>=0?x<0:x>m;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let I=this.currentTime,R=l;if(y){const T=Math.min(this.currentTime,m)/v;let N=Math.floor(T),V=T%1;!V&&T>=1&&(V=1),V===1&&N--,N=Math.min(N,y+1),!!(N%2)&&(M==="reverse"?(V=1-V,A&&(V-=A/v)):M==="mirror"&&(R=u)),I=Sr(0,1,V)*v}const P=L?{done:!1,value:d[0]}:R.next(I);f&&(P.value=f(P.value));let{done:D}=P;!L&&h!==null&&(D=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return F&&o!==void 0&&(P.value=Vc(d,this.options,o)),S&&S(P.value),F&&this.finish(),P}get duration(){const{resolved:e}=this;return e?_r(e.calculatedDuration):0}get time(){return _r(this.currentTime)}set time(e){e=vr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=_r(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=Y3,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const $3=new Set(["opacity","clipPath","filter","transform"]);function j3(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=Qy(f,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const Z3=im(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),bc=10,Q3=2e4;function J3(n){return _m(n.type)||n.type==="spring"||!Zy(n.ease)}function e2(n,e){const t=new Dm({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<Q3;)r=t.sample(l),o.push(r.value),l+=bc;return{times:void 0,keyframes:o,duration:l-bc,ease:"linear"}}const IS={anticipate:cS,backInOut:uS,circInOut:dS};function t2(n){return n in IS}class K_ extends CS{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new AS(l,(u,f)=>this.onKeyframesResolved(u,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof l=="string"&&Ac()&&t2(l)&&(l=IS[l]),J3(this.options)){const{onComplete:v,onUpdate:g,motionValue:y,element:M,...A}=this.options,S=e2(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const m=j3(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(L_(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:v}=this.options;f.set(Vc(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return _r(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return _r(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=vr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return ri;const{animation:r}=t;L_(r,e)}return ri}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:v,element:g,...y}=this.options,M=new Dm({...y,keyframes:r,duration:o,type:l,ease:u,times:f,isGenerator:!0}),A=vr(this.time);h.setWithVelocity(M.sample(A-bc).value,M.sample(A).value,bc)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return Z3()&&r&&$3.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&f!=="inertia"}}const n2={type:"spring",stiffness:500,damping:25,restSpeed:10},i2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),r2={type:"keyframes",duration:.8},s2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},o2=(n,{keyframes:e})=>e.length>2?r2:Vs.has(n)?n.startsWith("scale")?i2(e[1]):n2:s2;function a2({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Lm=(n,e,t,r={},o,l)=>u=>{const f=vm(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-vr(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:g=>{e.set(g),f.onUpdate&&f.onUpdate(g)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};a2(f)||(m={...m,...o2(n,m)}),m.duration&&(m.duration=vr(m.duration)),m.repeatDelay&&(m.repeatDelay=vr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(v=!0)),v&&!l&&e.get()!==void 0){const g=Vc(m.keyframes,f);if(g!==void 0)return Kt.update(()=>{m.onUpdate(g),m.onComplete()}),new AP([])}return!l&&K_.supports(m)?new K_(m):new Dm(m)};function l2({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function NS(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const g=n.getValue(v,(l=n.latestValues[v])!==null&&l!==void 0?l:null),y=d[v];if(y===void 0||m&&l2(m,v))continue;const M={delay:t,...vm(u||{},v)};let A=!1;if(window.MotionHandoffAnimation){const x=rS(n);if(x){const L=window.MotionHandoffAnimation(x,v,Kt);L!==null&&(M.startTime=L,A=!0)}}Ap(n,v),g.start(Lm(v,g,y,n.shouldReduceMotion&&nS.has(v)?{type:!1}:M,n,A));const S=g.animation;S&&h.push(S)}return f&&Promise.all(h).then(()=>{Kt.update(()=>{f&&VP(n,f)})}),h}function Ip(n,e,t={}){var r;const o=kc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(NS(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:g}=l;return u2(n,e,m+h,v,g,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,f]:[f,u];return h().then(()=>m())}else return Promise.all([u(),f(t.delay)])}function u2(n,e,t=0,r=0,o=1,l){const u=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(c2).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Ip(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function c2(n,e){return n.sortNodePosition(e)}function f2(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Ip(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Ip(n,e,t);else{const o=typeof e=="function"?kc(n,e,t.custom):e;r=Promise.all(NS(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const d2=sm.length;function US(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?US(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<d2;t++){const r=sm[t],o=n.props[r];(fl(o)||o===!1)&&(e[r]=o)}return e}const h2=[...rm].reverse(),p2=rm.length;function m2(n){return e=>Promise.all(e.map(({animation:t,options:r})=>f2(n,t,r)))}function g2(n){let e=m2(n),t=$_(),r=!0;const o=d=>(h,m)=>{var v;const g=kc(n,m,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(g){const{transition:y,transitionEnd:M,...A}=g;h={...h,...A,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=US(n.parent)||{},v=[],g=new Set;let y={},M=1/0;for(let S=0;S<p2;S++){const x=h2[S],L=t[x],I=h[x]!==void 0?h[x]:m[x],R=fl(I),P=x===d?L.isActive:null;P===!1&&(M=S);let D=I===m[x]&&I!==h[x]&&R;if(D&&r&&n.manuallyAnimateOnMount&&(D=!1),L.protectedKeys={...y},!L.isActive&&P===null||!I&&!L.prevProp||Oc(I)||typeof I=="boolean")continue;const F=v2(L.prevProp,I);let T=F||x===d&&L.isActive&&!D&&R||S>M&&R,N=!1;const V=Array.isArray(I)?I:[I];let z=V.reduce(o(x),{});P===!1&&(z={});const{prevResolvedValues:j={}}=L,he={...j,...z},ge=K=>{T=!0,g.has(K)&&(N=!0,g.delete(K)),L.needsAnimating[K]=!0;const G=n.getValue(K);G&&(G.liveStyle=!1)};for(const K in he){const G=z[K],se=j[K];if(y.hasOwnProperty(K))continue;let ae=!1;Ep(G)&&Ep(se)?ae=!Ky(G,se):ae=G!==se,ae?G!=null?ge(K):g.add(K):G!==void 0&&g.has(K)?ge(K):L.protectedKeys[K]=!0}L.prevProp=I,L.prevResolvedValues=z,L.isActive&&(y={...y,...z}),r&&n.blockInitialAnimation&&(T=!1),T&&(!(D&&F)||N)&&v.push(...V.map(K=>({animation:K,options:{type:x}})))}if(g.size){const S={};g.forEach(x=>{const L=n.getBaseTarget(x),I=n.getValue(x);I&&(I.liveStyle=!0),S[x]=L??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function f(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=u(d);for(const g in t)t[g].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>t,reset:()=>{t=$_(),r=!0}}}function v2(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Ky(e,n):!1}function ws(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $_(){return{animate:ws(!0),whileInView:ws(),whileHover:ws(),whileTap:ws(),whileDrag:ws(),whileFocus:ws(),exit:ws()}}class ns{constructor(e){this.isMounted=!1,this.node=e}update(){}}class _2 extends ns{constructor(e){super(e),e.animationState||(e.animationState=g2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Oc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let x2=0;class y2 extends ns{constructor(){super(...arguments),this.id=x2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const S2={animation:{Feature:_2},exit:{Feature:y2}};function ml(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Sl(n){return{point:{x:n.pageX,y:n.pageY}}}const M2=n=>e=>ym(e)&&n(e,Sl(e));function ol(n,e,t,r){return ml(n,e,M2(t),r)}const j_=(n,e)=>Math.abs(n-e);function E2(n,e){const t=j_(n.x,e.x),r=j_(n.y,e.y);return Math.sqrt(t**2+r**2)}class FS{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Eh(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=E2(v.offset,{x:0,y:0})>=3;if(!g&&!y)return;const{point:M}=v,{timestamp:A}=En;this.history.push({...M,timestamp:A});const{onStart:S,onMove:x}=this.handlers;g||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,v)},this.handlePointerMove=(v,g)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Mh(g,this.transformPagePoint),Kt.update(this.updatePoint,!0)},this.handlePointerUp=(v,g)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Eh(v.type==="pointercancel"?this.lastMoveEventInfo:Mh(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!ym(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Sl(e),f=Mh(u,this.transformPagePoint),{point:d}=f,{timestamp:h}=En;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,Eh(f,this.history)),this.removeListeners=yl(ol(this.contextWindow,"pointermove",this.handlePointerMove),ol(this.contextWindow,"pointerup",this.handlePointerUp),ol(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),es(this.updatePoint)}}function Mh(n,e){return e?{point:e(n.point)}:n}function Z_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Eh({point:n},e){return{point:n,delta:Z_(n,OS(e)),offset:Z_(n,T2(e)),velocity:w2(e,.1)}}function T2(n){return n[0]}function OS(n){return n[n.length-1]}function w2(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=OS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>vr(e)));)t--;if(!r)return{x:0,y:0};const l=_r(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const BS=1e-4,A2=1-BS,C2=1+BS,kS=.01,R2=0-kS,b2=0+kS;function oi(n){return n.max-n.min}function P2(n,e,t){return Math.abs(n-e)<=t}function Q_(n,e,t,r=.5){n.origin=r,n.originPoint=en(e.min,e.max,n.origin),n.scale=oi(t)/oi(e),n.translate=en(t.min,t.max,n.origin)-n.originPoint,(n.scale>=A2&&n.scale<=C2||isNaN(n.scale))&&(n.scale=1),(n.translate>=R2&&n.translate<=b2||isNaN(n.translate))&&(n.translate=0)}function al(n,e,t,r){Q_(n.x,e.x,t.x,r?r.originX:void 0),Q_(n.y,e.y,t.y,r?r.originY:void 0)}function J_(n,e,t){n.min=t.min+e.min,n.max=n.min+oi(e)}function D2(n,e,t){J_(n.x,e.x,t.x),J_(n.y,e.y,t.y)}function ex(n,e,t){n.min=e.min-t.min,n.max=n.min+oi(e)}function ll(n,e,t){ex(n.x,e.x,t.x),ex(n.y,e.y,t.y)}function L2(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?en(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?en(t,n,r.max):Math.min(n,t)),n}function tx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function I2(n,{top:e,left:t,bottom:r,right:o}){return{x:tx(n.x,t,o),y:tx(n.y,e,r)}}function nx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function N2(n,e){return{x:nx(n.x,e.x),y:nx(n.y,e.y)}}function U2(n,e){let t=.5;const r=oi(n),o=oi(e);return o>r?t=qo(e.min,e.max-r,n.min):r>o&&(t=qo(n.min,n.max-o,e.min)),Sr(0,1,t)}function F2(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Np=.35;function O2(n=Np){return n===!1?n=0:n===!0&&(n=Np),{x:ix(n,"left","right"),y:ix(n,"top","bottom")}}function ix(n,e,t){return{min:rx(n,e),max:rx(n,t)}}function rx(n,e){return typeof n=="number"?n:n[e]||0}const sx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oo=()=>({x:sx(),y:sx()}),ox=()=>({min:0,max:0}),on=()=>({x:ox(),y:ox()});function gi(n){return[n("x"),n("y")]}function VS({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function B2({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function k2(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Th(n){return n===void 0||n===1}function Up({scale:n,scaleX:e,scaleY:t}){return!Th(n)||!Th(e)||!Th(t)}function Cs(n){return Up(n)||zS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function zS(n){return ax(n.x)||ax(n.y)}function ax(n){return n&&n!=="0%"}function Pc(n,e,t){const r=n-t,o=e*r;return t+o}function lx(n,e,t,r,o){return o!==void 0&&(n=Pc(n,o,r)),Pc(n,t,r)+e}function Fp(n,e=0,t=1,r,o){n.min=lx(n.min,e,t,r,o),n.max=lx(n.max,e,t,r,o)}function GS(n,{x:e,y:t}){Fp(n.x,e.translate,e.scale,e.originPoint),Fp(n.y,t.translate,t.scale,t.originPoint)}const ux=.999999999999,cx=1.0000000000001;function V2(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let f=0;f<o;f++){l=t[f],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&ko(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,GS(n,u)),r&&Cs(l.latestValues)&&ko(n,l.latestValues))}e.x<cx&&e.x>ux&&(e.x=1),e.y<cx&&e.y>ux&&(e.y=1)}function Bo(n,e){n.min=n.min+e,n.max=n.max+e}function fx(n,e,t,r,o=.5){const l=en(n.min,n.max,o);Fp(n,e,t,l,r)}function ko(n,e){fx(n.x,e.x,e.scaleX,e.scale,e.originX),fx(n.y,e.y,e.scaleY,e.scale,e.originY)}function HS(n,e){return VS(k2(n.getBoundingClientRect(),e))}function z2(n,e,t){const r=HS(n,t),{scroll:o}=e;return o&&(Bo(r.x,o.offset.x),Bo(r.y,o.offset.y)),r}const WS=({current:n})=>n?n.ownerDocument.defaultView:null,G2=new WeakMap;class H2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=on(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Sl(m).point)},l=(m,v)=>{const{drag:g,dragPropagation:y,onDragStart:M}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UP(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gi(S=>{let x=this.getAxisMotionValue(S).get()||0;if($i.test(x)){const{projection:L}=this.visualElement;if(L&&L.layout){const I=L.layout.layoutBox[S];I&&(x=oi(I)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&Kt.postRender(()=>M(m,v)),Ap(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},u=(m,v)=>{const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=W2(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(m,v)},f=(m,v)=>this.stop(m,v),d=()=>gi(m=>{var v;return this.getAnimationState(m)==="paused"&&((v=this.getAxisMotionValue(m).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new FS(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:WS(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Kt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!rc(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=L2(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&Uo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=I2(o.layoutBox,t):this.constraints=!1,this.elastic=O2(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&gi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=F2(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Uo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=z2(r,o.root,this.visualElement.getTransformPagePoint());let u=N2(o.layout.layoutBox,l);if(t){const f=t(B2(u));this.hasMutatedConstraints=!!f,f&&(u=VS(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=gi(m=>{if(!rc(m,t,this.currentDirection))return;let v=d&&d[m]||{};u&&(v={min:0,max:0});const g=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:g,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Ap(this.visualElement,e),r.start(Lm(e,r,0,t,this.visualElement,!1))}stopAnimation(){gi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){gi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){gi(t=>{const{drag:r}=this.getProps();if(!rc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];l.set(e[t]-en(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Uo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};gi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=U2({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),gi(u=>{if(!rc(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(en(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;G2.set(this.visualElement,this);const e=this.visualElement.current,t=ol(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Uo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Kt.read(r);const u=ml(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(gi(m=>{const v=this.getAxisMotionValue(m);v&&(this.originPoint[m]+=d[m].translate,v.set(v.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Np,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function rc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function W2(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class X2 extends ns{constructor(e){super(e),this.removeGroupControls=ri,this.removeListeners=ri,this.controls=new H2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ri}unmount(){this.removeGroupControls(),this.removeListeners()}}const dx=n=>(e,t)=>{n&&Kt.postRender(()=>n(e,t))};class Y2 extends ns{constructor(){super(...arguments),this.removePointerDownListener=ri}onPointerDown(e){this.session=new FS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:WS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:dx(e),onStart:dx(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Kt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=ol(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const hc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function hx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ja={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const t=hx(n,e.target.x),r=hx(n,e.target.y);return`${t}% ${r}%`}},q2={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ts.parse(n);if(o.length>5)return r;const l=ts.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=en(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class K2 extends Ue.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;pP($2),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),hc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Kt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),am.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function XS(n){const[e,t]=Cy(),r=Ue.useContext(Jp);return et.jsx(K2,{...n,layoutGroup:r,switchLayoutGroup:Ue.useContext(Uy),isPresent:e,safeToRemove:t})}const $2={borderRadius:{...ja,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ja,borderTopRightRadius:ja,borderBottomLeftRadius:ja,borderBottomRightRadius:ja,boxShadow:q2};function j2(n,e,t){const r=Un(n)?n:hl(n);return r.start(Lm("",r,e,t)),r.animation}function Z2(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Q2=(n,e)=>n.depth-e.depth;class J2{constructor(){this.children=[],this.isDirty=!1}add(e){Sm(this.children,e),this.isDirty=!0}remove(e){Mm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Q2),this.isDirty=!1,this.children.forEach(e)}}function eD(n,e){const t=ji.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(es(r),n(l-e))};return Kt.read(r,!0),()=>es(r)}const YS=["TopLeft","TopRight","BottomLeft","BottomRight"],tD=YS.length,px=n=>typeof n=="string"?parseFloat(n):n,mx=n=>typeof n=="number"||st.test(n);function nD(n,e,t,r,o,l){o?(n.opacity=en(0,t.opacity!==void 0?t.opacity:1,iD(r)),n.opacityExit=en(e.opacity!==void 0?e.opacity:1,0,rD(r))):l&&(n.opacity=en(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<tD;u++){const f=`border${YS[u]}Radius`;let d=gx(e,f),h=gx(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||mx(d)===mx(h)?(n[f]=Math.max(en(px(d),px(h),r),0),($i.test(h)||$i.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=en(e.rotate||0,t.rotate||0,r))}function gx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const iD=qS(0,.5,fS),rD=qS(.5,.95,ri);function qS(n,e,t){return r=>r<n?0:r>e?1:t(qo(n,e,r))}function vx(n,e){n.min=e.min,n.max=e.max}function mi(n,e){vx(n.x,e.x),vx(n.y,e.y)}function _x(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function xx(n,e,t,r,o){return n-=e,n=Pc(n,1/t,r),o!==void 0&&(n=Pc(n,1/o,r)),n}function sD(n,e=0,t=1,r=.5,o,l=n,u=n){if($i.test(e)&&(e=parseFloat(e),e=en(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=en(l.min,l.max,r);n===l&&(f-=e),n.min=xx(n.min,e,t,f,o),n.max=xx(n.max,e,t,f,o)}function yx(n,e,[t,r,o],l,u){sD(n,e[t],e[r],e[o],e.scale,l,u)}const oD=["x","scaleX","originX"],aD=["y","scaleY","originY"];function Sx(n,e,t,r){yx(n.x,e,oD,t?t.x:void 0,r?r.x:void 0),yx(n.y,e,aD,t?t.y:void 0,r?r.y:void 0)}function Mx(n){return n.translate===0&&n.scale===1}function KS(n){return Mx(n.x)&&Mx(n.y)}function Ex(n,e){return n.min===e.min&&n.max===e.max}function lD(n,e){return Ex(n.x,e.x)&&Ex(n.y,e.y)}function Tx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function $S(n,e){return Tx(n.x,e.x)&&Tx(n.y,e.y)}function wx(n){return oi(n.x)/oi(n.y)}function Ax(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class uD{constructor(){this.members=[]}add(e){Sm(this.members,e),e.scheduleRender()}remove(e){if(Mm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cD(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:g,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const Rs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},nl=typeof window<"u"&&window.MotionDebug!==void 0,wh=["","X","Y","Z"],fD={visibility:"hidden"},Cx=1e3;let dD=0;function Ah(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function jS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=rS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Kt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&jS(r)}function ZS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=dD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,nl&&(Rs.totalNodes=Rs.resolvedTargetDeltas=Rs.recalculatedProjection=0),this.nodes.forEach(mD),this.nodes.forEach(yD),this.nodes.forEach(SD),this.nodes.forEach(gD),nl&&window.MotionDebug.record(Rs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new J2)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Em),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Z2(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const g=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=eD(g,250),hc.hasAnimatedSinceResize&&(hc.hasAnimatedSinceResize=!1,this.nodes.forEach(bx))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:g,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||m.getDefaultTransition()||AD,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=m.getProps(),L=!this.targetLayout||!$S(this.targetLayout,M)||y,I=!g&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||I||g&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,I);const R={...vm(A,"layout"),onPlay:S,onComplete:x};(m.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else g||bx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,es(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(MD),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rx);return}this.isUpdating||this.nodes.forEach(_D),this.isUpdating=!1,this.nodes.forEach(xD),this.nodes.forEach(hD),this.nodes.forEach(pD),this.clearAllSnapshots();const f=ji.now();En.delta=Sr(0,1e3/60,f-En.timestamp),En.timestamp=f,En.isProcessing=!0,gh.update.process(En),gh.preRender.process(En),gh.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,am.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vD),this.sharedNodes.forEach(ED)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=on(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!KS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(f||Cs(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),CD(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return on();const d=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(RD))){const{scroll:m}=this.root;m&&(Bo(d.x,m.offset.x),Bo(d.y,m.offset.y))}return d}removeElementScroll(u){var f;const d=on();if(mi(d,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:g}=m;m!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&mi(d,u),Bo(d.x,v.offset.x),Bo(d.y,v.offset.y))}return d}applyTransform(u,f=!1){const d=on();mi(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&ko(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Cs(m.latestValues)&&ko(d,m.latestValues)}return Cs(this.latestValues)&&ko(d,this.latestValues),d}removeTransform(u){const f=on();mi(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Cs(h.latestValues))continue;Up(h.latestValues)&&h.updateSnapshot();const m=on(),v=h.measurePageBox();mi(m,v),Sx(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return Cs(this.latestValues)&&Sx(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:g}=this.options;if(!(!this.layout||!(v||g))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),ll(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=on(),this.targetWithTransforms=on()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),D2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mi(this.target,this.layout.layoutBox),GS(this.target,this.targetDelta)):mi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=on(),this.relativeTargetOrigin=on(),ll(this.relativeTargetOrigin,this.target,y.target),mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}nl&&Rs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Up(this.parent.latestValues)||zS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===En.timestamp&&(h=!1),h)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;mi(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,y=this.treeScale.y;V2(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=on());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_x(this.prevProjectionDelta.x,this.projectionDelta.x),_x(this.prevProjectionDelta.y,this.projectionDelta.y)),al(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==y||!Ax(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ax(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),nl&&Rs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oo(),this.projectionDelta=Oo(),this.projectionDeltaWithTransform=Oo()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=Oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const g=on(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),x=!S||S.members.length<=1,L=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(wD));this.animationProgress=0;let I;this.mixTargetDelta=R=>{const P=R/1e3;Px(v.x,u.x,P),Px(v.y,u.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ll(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TD(this.relativeTarget,this.relativeTargetOrigin,g,P),I&&lD(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=on()),mi(I,this.relativeTarget)),A&&(this.animationValues=m,nD(m,h,this.latestValues,P,L,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(es(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Kt.update(()=>{hc.hasAnimatedSinceResize=!0,this.currentAnimation=j2(0,Cx,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Cx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&QS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||on();const v=oi(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const g=oi(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+g}mi(f,d),ko(f,m),al(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new uD),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Ah("z",u,h,this.animationValues);for(let m=0;m<wh.length;m++)Ah(`rotate${wh[m]}`,u,h,this.animationValues),Ah(`skew${wh[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return fD;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=fc(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=fc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Cs(this.latestValues)&&(A.transform=m?m({},""):"none",this.hasProjected=!1),A}const g=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=cD(this.projectionDeltaWithTransform,this.treeScale,g),m&&(h.transform=m(g,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(f=g.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:h.opacity=v===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const A in wc){if(g[A]===void 0)continue;const{correct:S,applyTo:x}=wc[A],L=h.transform==="none"?g[A]:S(g[A],v);if(x){const I=x.length;for(let R=0;R<I;R++)h[x[R]]=L}else h[A]=L}return this.options.layoutId&&(h.pointerEvents=v===this?fc(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(Rx),this.root.sharedNodes.clear()}}}function hD(n){n.updateLayout()}function pD(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?gi(v=>{const g=u?t.measuredBox[v]:t.layoutBox[v],y=oi(g);g.min=r[v].min,g.max=g.min+y}):QS(l,t.layoutBox,r)&&gi(v=>{const g=u?t.measuredBox[v]:t.layoutBox[v],y=oi(r[v]);g.max=g.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const f=Oo();al(f,r,t.layoutBox);const d=Oo();u?al(d,n.applyTransform(o,!0),t.measuredBox):al(d,r,t.layoutBox);const h=!KS(f);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:y}=v;if(g&&y){const M=on();ll(M,t.layoutBox,g.layoutBox);const A=on();ll(A,r,y.layoutBox),$S(M,A)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function mD(n){nl&&Rs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function gD(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function vD(n){n.clearSnapshot()}function Rx(n){n.clearMeasurements()}function _D(n){n.isLayoutDirty=!1}function xD(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function bx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function yD(n){n.resolveTargetDelta()}function SD(n){n.calcProjection()}function MD(n){n.resetSkewAndRotation()}function ED(n){n.removeLeadSnapshot()}function Px(n,e,t){n.translate=en(e.translate,0,t),n.scale=en(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Dx(n,e,t,r){n.min=en(e.min,t.min,r),n.max=en(e.max,t.max,r)}function TD(n,e,t,r){Dx(n.x,e.x,t.x,r),Dx(n.y,e.y,t.y,r)}function wD(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const AD={duration:.45,ease:[.4,0,.1,1]},Lx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ix=Lx("applewebkit/")&&!Lx("chrome/")?Math.round:ri;function Nx(n){n.min=Ix(n.min),n.max=Ix(n.max)}function CD(n){Nx(n.x),Nx(n.y)}function QS(n,e,t){return n==="position"||n==="preserve-aspect"&&!P2(wx(e),wx(t),.2)}function RD(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const bD=ZS({attachResizeListener:(n,e)=>ml(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ch={current:void 0},JS=ZS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Ch.current){const n=new bD({});n.mount(window),n.setOptions({layoutScroll:!0}),Ch.current=n}return Ch.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),PD={pan:{Feature:Y2},drag:{Feature:X2,ProjectionNode:JS,MeasureLayout:XS}};function Ux(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Kt.postRender(()=>l(e,Sl(e)))}class DD extends ns{mount(){const{current:e}=this.node;e&&(this.unmount=PP(e,t=>(Ux(this.node,t,"Start"),r=>Ux(this.node,r,"End"))))}unmount(){}}class LD extends ns{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yl(ml(this.node.current,"focus",()=>this.onFocus()),ml(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Fx(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Kt.postRender(()=>l(e,Sl(e)))}class ID extends ns{mount(){const{current:e}=this.node;e&&(this.unmount=NP(e,t=>(Fx(this.node,t,"Start"),(r,{success:o})=>Fx(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Op=new WeakMap,Rh=new WeakMap,ND=n=>{const e=Op.get(n.target);e&&e(n)},UD=n=>{n.forEach(ND)};function FD({root:n,...e}){const t=n||document;Rh.has(t)||Rh.set(t,{});const r=Rh.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(UD,{root:n,...e})),r[o]}function OD(n,e,t){const r=FD(e);return Op.set(n,t),r.observe(n),()=>{Op.delete(n),r.unobserve(n)}}const BD={some:0,all:1};class kD extends ns{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:BD[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),g=h?m:v;g&&g(d)};return OD(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(VD(e,t))&&this.startObserver()}unmount(){}}function VD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const zD={inView:{Feature:kD},tap:{Feature:ID},focus:{Feature:LD},hover:{Feature:DD}},GD={layout:{ProjectionNode:JS,MeasureLayout:XS}},Bp={current:null},eM={current:!1};function HD(){if(eM.current=!0,!!nm)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Bp.current=n.matches;n.addListener(e),e()}else Bp.current=!1}const WD=[...wS,Ln,ts],XD=n=>WD.find(TS(n)),Ox=new WeakMap;function YD(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Un(o))n.addValue(r,o);else if(Un(l))n.addValue(r,hl(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,hl(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Bx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qD{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=bm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=ji.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Kt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=Bc(t),this.isVariantNode=Iy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in g){const M=g[y];d[y]!==void 0&&Un(M)&&M.set(d[y],!1)}}mount(e){this.current=e,Ox.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),eM.current||HD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Bp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ox.delete(this.current),this.projection&&this.projection.unmount(),es(this.notifyUpdate),es(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Vs.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&Kt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ko){const t=Ko[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):on()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Bx.length;r++){const o=Bx[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=YD(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=hl(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(MS(o)||hS(o))?o=parseFloat(o):!XD(o)&&ts.test(t)&&(o=xS(e,t)),this.setBaseTarget(e,Un(o)?o.get():o)),Un(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=um(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Un(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Em),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class tM extends qD{constructor(){super(...arguments),this.KeyframeResolver=AS}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Un(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function KD(n){return window.getComputedStyle(n)}class $D extends tM{constructor(){super(...arguments),this.type="html",this.renderInstance=Gy}readValueFromInstance(e,t){if(Vs.has(t)){const r=Rm(t);return r&&r.default||0}else{const r=KD(e),o=(ky(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return HS(e,t)}build(e,t,r){dm(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return gm(e,t,r)}}class jD extends tM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=on}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vs.has(t)){const r=Rm(t);return r&&r.default||0}return t=Hy.has(t)?t:om(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Yy(e,t,r)}build(e,t,r){hm(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){Wy(e,t,r,o)}mount(e){this.isSVGTag=mm(e.tagName),super.mount(e)}}const ZD=(n,e)=>lm(n)?new jD(e):new $D(e,{allowProjection:n!==Ue.Fragment}),QD=EP({...S2,...zD,...PD,...GD},ZD),Zr=Bb(QD),kx=[{label:"Features",href:"#features"},{label:"Architecture",href:"#architecture"},{label:"Tech Stack",href:"#tech-stack"},{label:"Console",href:"dashboard.html"}];function JD(){const[n,e]=Ue.useState(!1);return et.jsxs(et.Fragment,{children:[et.jsxs("header",{className:"fixed top-0 inset-x-0 z-50 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/10",children:[et.jsxs("a",{href:"#",className:"flex flex-row items-center gap-2 group",children:[et.jsx("span",{className:"text-[21px] sm:text-[26px] tracking-tight text-white font-bold select-none group-hover:text-orange-400 transition-colors",children:"RootSense®"}),et.jsx("span",{className:"text-[22px] sm:text-[26px] text-orange-500 select-none tracking-[-0.02em] font-medium leading-none mb-1 animate-pulse",children:"✱"})]}),et.jsx("nav",{className:"hidden md:flex flex-row items-center text-[17px] font-medium text-neutral-300 gap-6",children:kx.map(t=>et.jsx("a",{href:t.href,className:"hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all",children:t.label},t.label))}),et.jsx("a",{href:"dashboard.html",className:"hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-5 py-2 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5",children:"Launch Console →"}),et.jsxs("button",{type:"button",className:"md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]",onClick:()=>e(t=>!t),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[et.jsx("span",{className:`w-6 h-[2px] bg-white transition-all duration-300 ${n?"rotate-45 translate-y-[7px]":""}`}),et.jsx("span",{className:`w-6 h-[2px] bg-white transition-all duration-300 ${n?"opacity-0":""}`}),et.jsx("span",{className:`w-6 h-[2px] bg-white transition-all duration-300 ${n?"-rotate-45 -translate-y-[7px]":""}`})]})]}),et.jsx(Mp,{children:n&&et.jsxs(Zr.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},className:"md:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8",children:[kx.map(t=>et.jsx("a",{href:t.href,onClick:()=>e(!1),className:"text-2xl text-neutral-200 font-medium hover:text-orange-400 transition-colors",children:t.label},t.label)),et.jsx("a",{href:"dashboard.html",onClick:()=>e(!1),className:"text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 rounded-full mt-4 shadow-lg shadow-orange-500/30",children:"Launch Console →"})]})})]})}function eL(n,e=38,t=600){const[r,o]=Ue.useState(""),[l,u]=Ue.useState(!1);return Ue.useEffect(()=>{o(""),u(!1);let f=null,d=0;const h=setTimeout(()=>{f=setInterval(()=>{d+=1,o(n.slice(0,d)),d>=n.length&&(clearInterval(f),u(!0))},e)},t);return()=>{clearTimeout(h),f&&clearInterval(f)}},[n,e,t]),{displayed:r,done:l}}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nM=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=Ue.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},d)=>Ue.createElement("svg",{ref:d,...nL,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:nM("lucide",o),...f},[...u.map(([h,m])=>Ue.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=(n,e)=>{const t=Ue.forwardRef(({className:r,...o},l)=>Ue.createElement(iL,{ref:l,iconNode:e,className:nM(`lucide-${tL(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=iM("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=iM("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),oL=["Deadlock","Timeout","OOM","Other"];function aL(){const[n,e]=Ue.useState([]),t=r=>{e(o=>o.includes(r)?o.filter(l=>l!==r):[...o,r])};return et.jsxs("section",{id:"features",className:"w-full",children:[et.jsx("h2",{className:"text-2xl font-medium tracking-tight mb-2 text-white",children:"What type of incident?"}),et.jsx("p",{className:"text-neutral-400 mb-8 text-sm",children:"Select all that apply"}),et.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:oL.map(r=>{const o=n.includes(r);return et.jsxs(Zr.button,{type:"button",onClick:()=>t(r),whileTap:{scale:.97},className:`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${o?"bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25 border border-orange-400/50 transform":"bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-orange-500/40 hover:text-white backdrop-blur-md"}`,children:[r,et.jsx(Mp,{children:o&&et.jsx(Zr.span,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:et.jsx(sL,{className:"w-4 h-4",strokeWidth:2.5})})})]},r)})}),et.jsx(Mp,{mode:"wait",children:n.length===0?et.jsx(Zr.p,{initial:{opacity:0},animate:{opacity:.6},exit:{opacity:0},transition:{duration:.2},className:"italic text-xs text-neutral-400",children:"Please click to select incident types above."},"placeholder"):et.jsx(Zr.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{type:"spring",stiffness:300,damping:30},className:"overflow-hidden",children:et.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 backdrop-blur-xl shadow-xl",children:[et.jsxs("p",{className:"text-sm text-neutral-200",children:["Ready to analyze:"," ",et.jsx("span",{className:"font-semibold text-white",children:n.join(", ")})]}),et.jsxs("a",{href:"dashboard.html",className:"inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold tracking-wider uppercase text-xs transition-colors",children:["Launch Console",et.jsx(rL,{className:"w-4 h-4"})]})]})},"banner")})]})}function lL(){const{displayed:n,done:e}=eL(`we'd love to
analyze your incidents!`,38,600);return et.jsxs("main",{id:"spade-hero",className:"w-full max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1 flex flex-col justify-center relative z-10",children:[et.jsx(Zr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:et.jsxs("h1",{className:"text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-white leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap drop-shadow-lg",children:[n,!e&&et.jsx("span",{className:"inline-block w-[3px] h-[1.1em] bg-orange-500 align-middle ml-[4px] animate-blink shadow-[0_0_12px_#F9731A]"})]})}),et.jsx(Zr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:et.jsxs("p",{className:"text-lg md:text-xl text-neutral-300 leading-relaxed font-normal mb-14 max-w-2xl backdrop-blur-xs",children:["Whether you have production errors, stack traces, or webhook alerts,",et.jsx("br",{}),"paste them in and get instant root cause analysis powered by AI."]})}),et.jsx(Zr.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:et.jsx(aL,{})})]})}function uL(){return et.jsxs("div",{className:"relative bg-[#000000] text-white font-sans selection:bg-orange-500/30 selection:text-orange-200 antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen",children:[et.jsx(Ab,{}),et.jsx(JD,{}),et.jsx("div",{className:"relative z-10 flex flex-col order-first lg:order-none w-full lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen",children:et.jsx(lL,{})})]})}YE.createRoot(document.getElementById("root")).render(et.jsx(kE.StrictMode,{children:et.jsx(uL,{})}));
