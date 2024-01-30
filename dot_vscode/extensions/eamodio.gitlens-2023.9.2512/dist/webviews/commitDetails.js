var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>fi,F:()=>bi});var o=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(o||{}),n=(e=>(e.Auto="auto",e.List="list",e.Tree="tree",e))(n||{});class i{constructor(e,t=!1){this.method=e,this.reset=t}}class s extends i{}class r extends i{}function a(e,t,o){e.method===t.method&&o(t.params,e)}const c=new s("webview/ready"),l=new s("webview/focus"),h=new s("command/execute");new s("configuration/preview"),new s("configuration/update"),new r("configuration/didChange"),new r("configuration/didPreview"),new r("webview/didOpenAnchor");const d=new s("commit/actions"),u=new s("commit/file/actions"),b=new s("commit/file/open"),f=new s("commit/file/openOnRemote"),p=new s("commit/file/compareWorking"),m=new s("commit/file/comparePrevious"),g=new s("commit/pickCommit"),v=new s("commit/searchCommit"),y=new s("commit/autolinkSettings"),w=new s("commit/explain"),$=new s("commit/pin"),k=new s("commit/navigate"),x=new s("commit/preferences"),_=new r("commit/didChange",!0),C=(new r("commit/didChange/rich"),new r("commit/didExplain"));function S(e,t){let o,n,i,s,r;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{r=setTimeout(c,t-(e-(n??0)))}}function l(){return r=void 0,o?function(){const t=o,n=i;return o=i=void 0,s=e.apply(n,t),s}():(o=i=void 0,s)}function h(...e){const l=Date.now(),h=a(l);return o=e,i=this,n=l,h&&null==r?(r=setTimeout(c,t),s):(null==r&&(r=setTimeout(c,t)),s)}return h.cancel=function(){null!=r&&clearTimeout(r),o=n=i=r=void 0},h.flush=function(){return null!=r?l():s},h.pending=function(){return null!=r},h}const A="";const E=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel=o.Off}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=O(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=O(this._logLevel),e===o.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??A}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??A}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??A}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??A}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??A}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??A}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??A}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??A}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return A;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:A}};function O(e){switch(e){case o.Off:return 0;case o.Error:return 1;case o.Warn:return 2;case o.Info:return 3;case o.Debug:return 4;default:return 0}}var P,T;(T=P||(P={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const s=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,s,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,s,n??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,s,n??!1))}}},T.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},T.resetSlot=function(e){e.replaceChildren(),e.className=""};var B=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(B||{});function M(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function D(e,t){return N(e,-t)}function N(e,t){const o=function(e){const t=Y(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,s,r]=o,a=255*t/100;return`rgba(${M(n,a)}, ${M(i,a)}, ${M(s,a)}, ${r})`}function F(e,t){const o=H.from(e);return null==o?e:o.transparent(t/100).toString()}function L(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class R{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=L(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class U{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=L(Math.max(Math.min(1,t),0),3),this.l=L(Math.max(Math.min(1,o),0),3),this.a=L(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,s=Math.max(t,o,n),r=Math.min(t,o,n);let a=0,c=0;const l=(r+s)/2,h=s-r;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),s){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new U(a,c,l,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let s,r,a;if(0===o)s=r=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;s=U._hue2rgb(i,e,t+1/3),r=U._hue2rgb(i,e,t),a=U._hue2rgb(i,e,t-1/3)}return new R(Math.round(255*s),Math.round(255*r),Math.round(255*a),i)}}class I{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=L(Math.max(Math.min(1,t),0),3),this.v=L(Math.max(Math.min(1,o),0),3),this.a=L(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),s=i-Math.min(t,o,n),r=0===i?0:s/i;let a;return a=0===s?0:i===t?((o-n)/s%6+6)%6:i===o?(n-t)/s+2:(t-o)/s+4,new I(Math.round(60*a),r,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,s=n*o,r=s*(1-Math.abs(t/60%2-1)),a=n-s;let[c,l,h]=[0,0,0];return t<60?(c=s,l=r):t<120?(c=r,l=s):t<180?(l=s,h=r):t<240?(l=r,h=s):t<300?(c=r,h=s):t<=360&&(c=s,h=r),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new R(c,l,h,i)}}function z(e,t){return t.getPropertyValue(e).trim()}const j=class e{static from(t){return t instanceof e?t:Y(t)||e.red}static fromCssVariable(t,o){return Y(z(t,o))||e.red}static fromHex(t){return K(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:U.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:I.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof R)this.rgba=e;else if(e instanceof U)this._hsla=e,this.rgba=U.toRGBA(e);else{if(!(e instanceof I))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=I.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&R.equals(this.rgba,e.rgba)&&U.equals(this.hsla,e.hsla)&&I.equals(this.hsva,e.hsva))}getRelativeLuminance(){return L(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new H(new R(0,0,0,e.rgba.a));if(1===t)return new H(new R(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const s=e.mix(o,.5),r=s.getRelativeLuminance();return Math.abs(t-r)<1e-7||!n--?s:r>t?i(e,s):i(s,o)},s=(o>t?i(H.black,e):i(e,H.white)).rgba;return new H(new R(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new U(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new U(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:o,g:n,b:i,a:s}=this.rgba;return new e(new R(o,n,i,s*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new R(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const o=t.rgba,n=this.rgba.a,i=o.a,s=n+i*(1-n);if(s<1e-6)return e.transparent;const r=this.rgba.r*n/s+o.r*i*(1-n)/s,a=this.rgba.g*n/s+o.g*i*(1-n)/s,c=this.rgba.b*n/s+o.b*i*(1-n)/s;return new e(new R(r,a,c,s))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new H(new R(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:o,g:n,b:i,a:s}=this.rgba;return new e(new R(t.rgba.r-s*(t.rgba.r-o),t.rgba.g-s*(t.rgba.g-n),t.rgba.b-s*(t.rgba.b-i),1))}flatten(...t){const o=t.reduceRight(((t,o)=>e._flatten(o,t)));return e._flatten(this,o)}static _flatten(t,o){const n=1-t.rgba.a;return new e(new R(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return W(e);return q(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};j.white=new j(new R(255,255,255,1)),j.black=new j(new R(0,0,0,1)),j.red=new j(new R(255,0,0,1)),j.blue=new j(new R(0,0,255,1)),j.green=new j(new R(0,255,0,1)),j.cyan=new j(new R(0,255,255,1)),j.lightgrey=new j(new R(211,211,211,1)),j.transparent=new j(new R(0,0,0,0));let H=j;function q(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function V(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function W(e){return`#${V(e.rgba.r)}${V(e.rgba.g)}${V(e.rgba.b)}`}const G=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Y(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===B.Hash)return K(e);const t=G.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new H(new R(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new H(new U(n[0],n[1],n[2],n[3]))}return H.red}function K(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==B.Hash)return null;switch(t){case 7:{const t=16*Q(e.charCodeAt(1))+Q(e.charCodeAt(2)),o=16*Q(e.charCodeAt(3))+Q(e.charCodeAt(4)),n=16*Q(e.charCodeAt(5))+Q(e.charCodeAt(6));return new H(new R(t,o,n,1))}case 9:{const t=16*Q(e.charCodeAt(1))+Q(e.charCodeAt(2)),o=16*Q(e.charCodeAt(3))+Q(e.charCodeAt(4)),n=16*Q(e.charCodeAt(5))+Q(e.charCodeAt(6)),i=16*Q(e.charCodeAt(7))+Q(e.charCodeAt(8));return new H(new R(t,o,n,i/255))}case 4:{const t=Q(e.charCodeAt(1)),o=Q(e.charCodeAt(2)),n=Q(e.charCodeAt(3));return new H(new R(16*t+t,16*o+o,16*n+n))}case 5:{const t=Q(e.charCodeAt(1)),o=Q(e.charCodeAt(2)),n=Q(e.charCodeAt(3)),i=Q(e.charCodeAt(4));return new H(new R(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function Q(e){switch(e){case B.Digit0:return 0;case B.Digit1:return 1;case B.Digit2:return 2;case B.Digit3:return 3;case B.Digit4:return 4;case B.Digit5:return 5;case B.Digit6:return 6;case B.Digit7:return 7;case B.Digit8:return 8;case B.Digit9:return 9;case B.a:case B.A:return 10;case B.b:case B.B:return 11;case B.c:case B.C:return 12;case B.d:case B.D:return 13;case B.e:case B.E:return 14;case B.f:case B.F:return 15}return 0}const Z=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new oe);const i=this.listeners.push(null==o?t:[t,o]),s={dispose:()=>{s.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new oe);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Z._noop=function(){};let X=Z;const J={done:!0,value:void 0},ee=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};ee.Undefined=new ee(void 0);let te=ee;class oe{constructor(){this._first=te.Undefined,this._last=te.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===te.Undefined}clear(){this._first=te.Undefined,this._last=te.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new te(e);if(this._first===te.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===te.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===te.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==te.Undefined&&e.next!==te.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===te.Undefined&&e.next===te.Undefined?(this._first=te.Undefined,this._last=te.Undefined):e.next===te.Undefined?(this._last=this._last.prev,this._last.next=te.Undefined):e.prev===te.Undefined&&(this._first=this._first.next,this._first.prev=te.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===te.Undefined?J:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==te.Undefined;t=t.next)e.push(t.element);return e}}const ne=new X,ie=ne.event;function se(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),s=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),r=t.style,a=z("--vscode-editor-background",o);let c=z("--vscode-editor-foreground",o);c||(c=z("--vscode-foreground",o));let l=z("--color-background",o);return r.setProperty("--color-background--lighten-05",N(l,5)),r.setProperty("--color-background--darken-05",D(l,5)),r.setProperty("--color-background--lighten-075",N(l,7.5)),r.setProperty("--color-background--darken-075",D(l,7.5)),r.setProperty("--color-background--lighten-10",N(l,10)),r.setProperty("--color-background--darken-10",D(l,10)),r.setProperty("--color-background--lighten-15",N(l,15)),r.setProperty("--color-background--darken-15",D(l,15)),r.setProperty("--color-background--lighten-30",N(l,30)),r.setProperty("--color-background--darken-30",D(l,30)),r.setProperty("--color-background--lighten-50",N(l,50)),r.setProperty("--color-background--darken-50",D(l,50)),l=z("--color-button-background",o),r.setProperty("--color-button-background--darken-30",D(l,30)),l=z("--color-highlight",o),r.setProperty("--color-highlight--75",F(l,75)),r.setProperty("--color-highlight--50",F(l,50)),r.setProperty("--color-highlight--25",F(l,25)),l=z("--color-button-secondary-background",o),r.setProperty("--color-button-secondary-background--darken-30",D(l,30)),l=z("--color-foreground",o),r.setProperty("--color-foreground--85",F(l,85)),r.setProperty("--color-foreground--75",F(l,75)),r.setProperty("--color-foreground--65",F(l,65)),r.setProperty("--color-foreground--50",F(l,50)),l=z("--color-link-foreground",o),r.setProperty("--color-link-foreground--darken-20",D(l,20)),r.setProperty("--color-link-foreground--lighten-20",N(l,20)),l=z("--color-alert-infoBackground",o),r.setProperty("--color-alert-infoHoverBackground",i?D(l,5):N(l,5)),l=z("--color-alert-warningBackground",o),r.setProperty("--color-alert-warningHoverBackground",i?D(l,5):N(l,5)),l=z("--color-alert-errorBackground",o),r.setProperty("--color-alert-errorHoverBackground",i?D(l,5):N(l,5)),l=i?D(a,5):N(a,5),r.setProperty("--color-alert-neutralBackground",l),r.setProperty("--color-alert-neutralHoverBackground",i?D(l,5):N(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:s,isInitializing:null==e}}let re=0;function ae(){return 1073741824===re?re=1:re++,`webview:${re}`}class ce{constructor(e){this.appName=e;const t=[],n=se();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(n),t.push(ie(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",E.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},o.Off),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{ne.fire(se(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(P.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(c,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(P.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=S((e=>{this.sendCommand(l,e)}),150);this.bindDisposables.push(P.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),P.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){E.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=ae();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=ae();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const s=[P.on(window,"message",(t=>{a(o,t.data,(o=>{t.data.completionId===n&&(s.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,s.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}const le=window,he=le.ShadowRoot&&(void 0===le.ShadyCSS||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),ue=new WeakMap;class be{constructor(e,t,o){if(this._$cssResult$=!0,o!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(he&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=ue.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ue.set(t,e))}return e}toString(){return this.cssText}}const fe=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new be(o,e,de)},pe=he?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new be("string"==typeof e?e:e+"",void 0,de))(t)})(e):e;var me;const ge=window,ve=ge.trustedTypes,ye=ve?ve.emptyScript:"",we=ge.reactiveElementPolyfillSupport,$e={toAttribute(e,t){switch(t){case Boolean:e=e?ye:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ke=(e,t)=>t!==e&&(t==t||e==e),xe={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:ke},_e="finalized";class Ce extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xe}static finalize(){if(this.hasOwnProperty(_e))return!1;this[_e]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(pe(e))}else void 0!==e&&t.push(pe(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{he?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),n=le.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=xe){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:$e).toAttribute(t,o.type);this._$El=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:$e;this._$El=i,this[i]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||ke)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Se;Ce[_e]=!0,Ce.elementProperties=new Map,Ce.elementStyles=[],Ce.shadowRootOptions={mode:"open"},null==we||we({ReactiveElement:Ce}),(null!==(me=ge.reactiveElementVersions)&&void 0!==me?me:ge.reactiveElementVersions=[]).push("1.6.3");const Ae=window,Ee=Ae.trustedTypes,Oe=Ee?Ee.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pe="$lit$",Te=`lit$${(Math.random()+"").slice(9)}$`,Be="?"+Te,Me=`<${Be}>`,De=document,Ne=()=>De.createComment(""),Fe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Le=Array.isArray,Re=e=>Le(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Ue="[ \t\n\f\r]",Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,je=/>/g,He=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ve=/"/g,We=/^(?:script|style|textarea|title)$/i,Ge=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ye=Ge(1),Ke=(Ge(2),Symbol.for("lit-noChange")),Qe=Symbol.for("lit-nothing"),Ze=new WeakMap,Xe=De.createTreeWalker(De,129,null,!1);function Je(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Oe?Oe.createHTML(t):t}const et=(e,t)=>{const o=e.length-1,n=[];let i,s=2===t?"<svg>":"",r=Ie;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(r.lastIndex=h,c=r.exec(o),null!==c);)h=r.lastIndex,r===Ie?"!--"===c[1]?r=ze:void 0!==c[1]?r=je:void 0!==c[2]?(We.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=He):void 0!==c[3]&&(r=He):r===He?">"===c[0]?(r=null!=i?i:Ie,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?He:'"'===c[3]?Ve:qe):r===Ve||r===qe?r=He:r===ze||r===je?r=Ie:(r=He,i=void 0);const d=r===He&&e[t+1].startsWith("/>")?" ":"";s+=r===Ie?o+Me:l>=0?(n.push(a),o.slice(0,l)+Pe+o.slice(l)+Te+d):o+Te+(-2===l?(n.push(void 0),t):d)}return[Je(e,s+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class tt{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,s=0;const r=e.length-1,a=this.parts,[c,l]=et(e,t);if(this.el=tt.createElement(c,o),Xe.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=Xe.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(Pe)||t.startsWith(Te)){const o=l[s++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+Pe).split(Te),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?rt:"?"===t[1]?ct:"@"===t[1]?lt:st})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(We.test(n.tagName)){const e=n.textContent.split(Te),t=e.length-1;if(t>0){n.textContent=Ee?Ee.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Ne()),Xe.nextNode(),a.push({type:2,index:++i});n.append(e[t],Ne())}}}else if(8===n.nodeType)if(n.data===Be)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(Te,e+1));)a.push({type:7,index:i}),e+=Te.length-1}i++}}static createElement(e,t){const o=De.createElement("template");return o.innerHTML=e,o}}function ot(e,t,o=e,n){var i,s,r,a;if(t===Ke)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=Fe(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=ot(e,c._$AS(e,t.values),c,n)),t}class nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:De).importNode(o,!0);Xe.currentNode=i;let s=Xe.nextNode(),r=0,a=0,c=n[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new it(s,s.nextSibling,this,e):1===c.type?t=new c.ctor(s,c.name,c.strings,this,e):6===c.type&&(t=new ht(s,this,e)),this._$AV.push(t),c=n[++a]}r!==(null==c?void 0:c.index)&&(s=Xe.nextNode(),r++)}return Xe.currentNode=De,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class it{constructor(e,t,o,n){var i;this.type=2,this._$AH=Qe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ot(this,e,t),Fe(e)?e===Qe||null==e||""===e?(this._$AH!==Qe&&this._$AR(),this._$AH=Qe):e!==this._$AH&&e!==Ke&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Re(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Qe&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.$(De.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=tt.createElement(Je(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new nt(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=Ze.get(e.strings);return void 0===t&&Ze.set(e.strings,t=new tt(e)),t}T(e){Le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new it(this.k(Ne()),this.k(Ne()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class st{constructor(e,t,o,n,i){this.type=1,this._$AH=Qe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Qe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let s=!1;if(void 0===i)e=ot(this,e,t,0),s=!Fe(e)||e!==this._$AH&&e!==Ke,s&&(this._$AH=e);else{const n=e;let r,a;for(e=i[0],r=0;r<i.length-1;r++)a=ot(this,n[o+r],t,r),a===Ke&&(a=this._$AH[r]),s||(s=!Fe(a)||a!==this._$AH[r]),a===Qe?e=Qe:e!==Qe&&(e+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===Qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qe?void 0:e}}const at=Ee?Ee.emptyScript:"";class ct extends st{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Qe?this.element.setAttribute(this.name,at):this.element.removeAttribute(this.name)}}class lt extends st{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=ot(this,e,t,0))&&void 0!==o?o:Qe)===Ke)return;const n=this._$AH,i=e===Qe&&n!==Qe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==Qe&&(n===Qe||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class ht{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}}const dt=Ae.litHtmlPolyfillSupport;null==dt||dt(tt,it),(null!==(Se=Ae.litHtmlVersions)&&void 0!==Se?Se:Ae.litHtmlVersions=[]).push("2.8.0");var ut,bt;class ft extends Ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let r=s._$litPart$;if(void 0===r){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=r=new it(t.insertBefore(Ne(),e),e,void 0,null!=o?o:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Ke}}ft.finalized=!0,ft._$litElement$=!0,null===(ut=globalThis.litElementHydrateSupport)||void 0===ut||ut.call(globalThis,{LitElement:ft});const pt=globalThis.litElementPolyfillSupport;null==pt||pt({LitElement:ft});(null!==(bt=globalThis.litElementVersions)&&void 0!==bt?bt:globalThis.litElementVersions=[]).push("3.3.3");const mt=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),gt=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},vt=(e,t,o)=>{t.constructor.createProperty(o,e)};function yt(e){return(t,o)=>void 0!==o?vt(e,t,o):gt(e,t)}function wt(e){return yt({...e,state:!0})}const $t=({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,s=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(s.finisher=function(t){e(t,n)}),s}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}};var kt;const xt=null!=(null===(kt=window.HTMLSlotElement)||void 0===kt?void 0:kt.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));var _t=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,St=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Ct(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&_t(t,o,s),s};let At=class extends ft{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};At.styles=fe`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,St([yt()],At.prototype,"icon",2),St([yt()],At.prototype,"modifier",2),St([yt({type:Number})],At.prototype,"size",2),At=St([mt("code-icon")],At);var Et=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Pt=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Ot(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Et(t,o,s),s};let Tt=class extends ft{constructor(){super(...arguments),this.label="",this.icon=""}render(){return Ye`
			<a
				role="${this.href?Qe:"button"}"
				type="${this.href?Qe:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};Tt.styles=fe`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: inherit;
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,Pt([yt()],Tt.prototype,"href",2),Pt([yt()],Tt.prototype,"label",2),Pt([yt()],Tt.prototype,"icon",2),Tt=Pt([mt("action-item")],Tt);const Bt=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===Bt.trustedTypes&&(Bt.trustedTypes={createPolicy:(e,t)=>t});const Mt={configurable:!1,enumerable:!1,writable:!1};void 0===Bt.FAST&&Reflect.defineProperty(Bt,"FAST",Object.assign({value:Object.create(null)},Mt));const Dt=Bt.FAST;if(void 0===Dt.getById){const e=Object.create(null);Reflect.defineProperty(Dt,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},Mt))}const Nt=Object.freeze([]);function Ft(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const Lt=Bt.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function i(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&Bt.requestAnimationFrame(i),e.push(t)},process:i})})),Rt=Bt.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let Ut=Rt;const It=`fast-${Math.random().toString(36).substring(2,8)}`,zt=`${It}{`,jt=`}${It}`,Ht=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(Ut!==Rt)throw new Error("The HTML policy can only be set once.");Ut=e},createHTML:e=>Ut.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(It),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${It}:`,"")),createInterpolationPlaceholder:e=>`${zt}${e}${jt}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${It}:${e}--\x3e`,queueUpdate:Lt.enqueue,processUpdates:Lt.process,nextUpdate:()=>new Promise(Lt.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class qt{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class Vt{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new qt(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new qt(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const Wt=Dt.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=Ht.queueUpdate;let n,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=i(e):t.set(e,o=new Vt(e))),o}const r=Ft();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,n,t),s(e).notify(this.name)}}}class c extends qt{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return n=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=s(e),r=null===o?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:s,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){s(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));const Gt=Dt.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class Yt{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Gt.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Gt.set(e)}}Wt.defineProperty(Yt.prototype,"index"),Wt.defineProperty(Yt.prototype,"length");const Kt=Object.seal(new Yt);class Qt{constructor(){this.targetIndex=0}}class Zt extends Qt{constructor(){super(...arguments),this.createPlaceholder=Ht.createInterpolationPlaceholder}}class Xt extends Qt{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return Ht.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Jt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=Wt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function eo(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function to(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function oo(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function no(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function io(e){Ht.setAttribute(this.target,this.targetName,e)}function so(e){Ht.setBooleanAttribute(this.target,this.targetName,e)}function ro(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function ao(e){this.target[this.targetName]=e}function co(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,s=i.length;e<s;++e){const s=i[e];""!==s&&(t[s]=n,o.classList.add(s))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class lo extends Zt{constructor(e){super(),this.binding=e,this.bind=Jt,this.unbind=to,this.updateTarget=io,this.isBindingVolatile=Wt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ao,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>Ht.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=so;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=eo,this.unbind=no;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=co)}}targetAtContent(){this.updateTarget=ro,this.unbind=oo}createBehavior(e){return new ho(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ho{constructor(e,t,o,n,i,s,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=s,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Yt.setEvent(e);const t=this.binding(this.source,this.context);Yt.setEvent(null),!0!==t&&e.preventDefault()}}let uo=null;class bo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){uo=this}static borrow(e){const t=uo||new bo;return t.directives=e,t.reset(),uo=null,t}}function fo(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new lo(((e,t)=>{let i="";for(let s=0;s<o;++s)i+=n[s](e,t);return i}));return i.targetName=t,i}const po=jt.length;function mo(e,t){const o=t.split(zt);if(1===o.length)return null;const n=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],s=i.indexOf(jt);let r;if(-1===s)r=i;else{const t=parseInt(i.substring(0,s));n.push(e.directives[t]),r=i.substring(s+po)}""!==r&&n.push(r)}return n}function go(e,t,o=!1){const n=t.attributes;for(let i=0,s=n.length;i<s;++i){const r=n[i],a=r.value,c=mo(e,a);let l=null;null===c?o&&(l=new lo((()=>a)),l.targetName=r.name):l=fo(c),null!==l&&(t.removeAttributeNode(r),i--,s--,e.addFactory(l))}}function vo(e,t,o){const n=mo(e,t.textContent);if(null!==n){let i=t;for(let s=0,r=n.length;s<r;++s){const r=n[s],a=0===s?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const yo=document.createRange();class wo{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,i=this.firstChild;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const i=this.behaviors,s=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(s)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i){const s=o[i];s.unbind(n),s.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){yo.setStartBefore(e[0].firstChild),yo.setEndAfter(e[e.length-1].lastChild),yo.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class $o{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=Ht.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=bo.borrow(t);go(n,e,!0);const i=n.behaviorFactories;n.reset();const s=Ht.createTemplateWalker(o);let r;for(;r=s.nextNode();)switch(n.targetIndex++,r.nodeType){case 1:go(n,r);break;case 3:vo(n,r,s);break;case 8:Ht.isMarker(r)&&n.addFactory(t[Ht.extractDirectiveIndexFromMarker(r)])}let a=0;(Ht.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),i=Ht.createTemplateWalker(t);let s=0,r=this.targetOffset,a=i.nextNode();for(let e=o.length;s<e;++s){const e=o[s],t=e.targetIndex;for(;null!==a;){if(r===t){n[s]=e.createBehavior(a);break}a=i.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++s)n[s]=t[o].createBehavior(e)}return new wo(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,Kt),n.appendTo(t),n}}const ko=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class xo{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=Wt.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Nt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class _o extends xo{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}class Co{createCSS(){return""}createBehavior(){}}class So{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Ao(e){return e.map((e=>e instanceof So?Ao(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function Eo(e){return e.map((e=>e instanceof So?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}So.create=(()=>{if(Ht.supportsAdoptedStyleSheets){const e=new Map;return t=>new To(t,e)}return e=>new Mo(e)})();let Oo=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Po=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(Ht.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Oo=(e,t)=>{e.adoptedStyleSheets.push(...t)},Po=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class To extends So{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Eo(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Ao(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){Oo(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Po(e,this.styleSheets),super.removeStylesFrom(e)}}let Bo=0;class Mo extends So{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Eo(e),this.styleSheets=Ao(e),this.styleClass="fast-style-class-"+ ++Bo}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function Do(e,t){const o=[];let n="";const i=[];for(let s=0,r=e.length-1;s<r;++s){n+=e[s];let r=t[s];if(r instanceof Co){const e=r.createBehavior();r=r.createCSS(),e&&i.push(e)}r instanceof So||r instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(r)):n+=r}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:i}}const No=Object.freeze({locate:Ft()}),Fo={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class Lo{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=Fo)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return Wt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||Ht.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;Ht.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":Ht.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(No.locate(e));for(let n=0,i=t.length;n<i;++n){const i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){const n=i[t];"string"==typeof n?o.push(new Lo(e,n)):o.push(new Lo(e,n.property,n.attribute,n.mode,n.converter))}}return o}}const Ro={mode:"open"},Uo={},Io=Dt.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class zo{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=Lo.collect(e,t.attributes),n=new Array(o.length),i={},s={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,i[t.name]=t,s[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=s,this.shadowOptions=void 0===t.shadowOptions?Ro:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Ro),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Uo:Object.assign(Object.assign({},Uo),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?So.create(t.styles):t.styles instanceof So?t.styles:So.create([t.styles])}get isDefined(){return!!Io.getByType(this.type)}define(e=customElements){const t=this.type;if(Io.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)Wt.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}zo.forType=Io.getByType;const jo=new WeakMap,Ho={bubbles:!0,composed:!0,cancelable:!0};function qo(e){return e.shadowRoot||jo.get(e)||null}class Vo extends Vt{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&jo.set(e,t)}const n=Wt.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){const i=n[o].name,s=e[i];void 0!==s&&(delete e[i],t[i]=s)}}}get isConnected(){return Wt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,Wt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=qo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=qo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,Kt)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,i=[];for(let s=0;s<n;++s){const n=e[s];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,Kt);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,Kt);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Ho),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){const i=o[n];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=qo(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||Ht.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=zo.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Vo(e,o)}}function Wo(e){return class extends e{constructor(){super(),Vo.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const Go=Object.assign(Wo(HTMLElement),{from:e=>Wo(e),define:(e,t)=>new zo(e,t).define().type});var Yo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Qo=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Ko(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Yo(t,o,s),s};const Zo=(function(e,...t){const o=[];let n="";for(let i=0,s=e.length-1;i<s;++i){const s=e[i];let r=t[i];if(n+=s,r instanceof $o){const e=r;r=()=>e}if("function"==typeof r&&(r=new lo(r)),r instanceof Zt){const e=ko.exec(s);null!==e&&(r.targetName=e[2])}r instanceof Qt?(n+=r.createPlaceholder(o.length),o.push(r)):n+=r}return n+=e[e.length-1],new $o(n,o)})`<template role="navigation"><slot ${Xo="actionNodes","string"==typeof Xo&&(Xo={property:Xo}),new Xt("fast-slotted",_o,Xo)}></slot></template>`;var Xo;const Jo=(function(e,...t){const{styles:o,behaviors:n}=Do(e,t),i=So.create(o);return n.length&&i.withBehaviors(...n),i})`
	:host {
		display: flex;
		align-items: center;
		user-select: none;
	}
`;let en=class extends Go{actionNodesChanged(e,t){if(this.actionNodesDisposer?.(),!t?.length)return;const o=this.handleKeydown.bind(this),n=t?.filter((e=>1===e.nodeType)).map(((e,t)=>(e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("keydown",o,!1),{dispose:()=>{e?.removeEventListener("keydown",o,!1)}})));this.actionNodesDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){this.actionNodesDisposer?.()}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target;let o=null;if("ArrowLeft"===e.key){if(o=t.previousElementSibling,null==o){const e=this.actionNodes.filter((e=>1===e.nodeType));o=e[e.length-1]??null}}else"ArrowRight"===e.key&&(o=t.nextElementSibling,null==o&&(o=this.actionNodes.find((e=>1===e.nodeType))??null));null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};var tn;Qo([function(e,t){Wt.defineProperty(e,t)}],en.prototype,"actionNodes",2),en=Qo([(tn={name:"action-nav",template:Zo,styles:Jo},function(e){new zo(e,tn).define()})],en);const on=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,nn=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,sn=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let rn;const an=new Map;let cn,ln,hn;function dn(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let s=an.get(i);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=nn.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(on))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let r;r=null==o?cn:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(r,e),n&&an.set(i,s)}if(null==t||nn.test(t))return s.format(e);function r(e){const t=`${o??""}:time:${e}`;let i=an.get(t);if(null==i){const s={localeMatcher:"best fit",timeStyle:e};let r;r=null==o?cn:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(r,s),n&&an.set(t,i)}return i}const a=s.formatToParts(e);return t.replace(on,((t,o,n,i,s,c,l,h,d,u,b,f,p,m,g)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in g){const o=g[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return bn(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=r("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const un=["th","st","nd","rd"];function bn(e){const t=e%100;return`${e}${un[(t-20)%10]??un[t]??un[0]}`}var fn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,mn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?pn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&fn(t,o,s),s};let gn=class extends ft{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return Ye`<time datetime="${this.date}" title="${dn(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,s]of sn){const r=Math.abs(o);if(r>=n||1e3===n)return t?(null==rn&&(null!=hn?rn=hn.resolvedOptions().locale:null!=ln?rn=ln.resolvedOptions().locale:(hn=new Intl.RelativeTimeFormat(cn,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),rn=hn.resolvedOptions().locale)),"en"===rn||rn?.startsWith("en-")?`${Math.round(r/i)}${s}`:(null==hn&&(hn=new Intl.RelativeTimeFormat(cn,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),hn.format(Math.round(o/i),e))):(null==ln&&(ln=new Intl.RelativeTimeFormat(cn,{localeMatcher:"best fit",numeric:"auto",style:"long"})),ln.format(Math.round(o/i),e))}return""}(this.date)}</time
		>`}};mn([yt()],gn.prototype,"format",2),mn([yt({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],gn.prototype,"date",2),gn=mn([mt("formatted-date")],gn);var vn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,wn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?yn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&vn(t,o,s),s};let $n=class extends ft{constructor(){super(...arguments),this.name="",this.email="",this.date="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){return Ye`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}">
				${this.showAvatar?Ye`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Ye`<code-icon icon="person" size="32"></code-icon>`}
			</a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date">
				${this.actionLabel}
				<formatted-date date=${this.date} format=${this.dateFormat}> </formatted-date>
			</span>
		`}};$n.styles=fe`
		:host {
			display: grid;
			gap: 0rem 1rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.avatar {
			grid-column: 1;
			grid-row: 1 / 3;
			width: 36px;
		}

		.thumb {
			width: 100%;
			height: auto;
			border-radius: 0.4rem;
		}

		.name {
			grid-column: 2;
			grid-row: 1;
			font-size: 1.5rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			font-size: 1.3rem;
		}
	`,wn([yt()],$n.prototype,"name",2),wn([yt()],$n.prototype,"email",2),wn([yt()],$n.prototype,"date",2),wn([yt()],$n.prototype,"avatarUrl",2),wn([yt({type:Boolean})],$n.prototype,"showAvatar",2),wn([yt()],$n.prototype,"dateFormat",2),wn([yt()],$n.prototype,"committer",2),wn([yt()],$n.prototype,"actionLabel",2),$n=wn([mt("commit-identity")],$n);var kn=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,_n=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?xn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&kn(t,o,s),s};let Cn=class extends ft{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.key="#1999"}renderDate(){return""===this.date?Qe:Ye`<formatted-date date="${this.date}"></formatted-date>`}render(){let e="issues";switch(this.status.toLowerCase()){case"":e="link";break;case"merged":e="git-merge";break;case"closed":e="pass"}return Ye`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${""===this.status?this.status:Qe} ${this.renderDate()}</p>
		`}};Cn.styles=fe`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,_n([yt()],Cn.prototype,"url",2),_n([yt()],Cn.prototype,"name",2),_n([yt()],Cn.prototype,"date",2),_n([yt()],Cn.prototype,"status",2),_n([yt()],Cn.prototype,"key",2),Cn=_n([mt("issue-pull-request")],Cn);var Sn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,En=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?An(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Sn(t,o,s),s};let On=class extends ft{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Ye`<div class="skeleton" style=${e}></div>`}};On.styles=fe`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,En([yt({type:Number})],On.prototype,"lines",2),On=En([mt("skeleton-loader")],On);var Pn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Bn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Tn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Pn(t,o,s),s};let Mn=class extends ft{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Ye`
			<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
				><span class="label">+${this.added}</span></span
			>
			<span class="stat modified" title="${this.modified} modified" aria-label="${this.modified} modified"
				><span class="label">~${this.modified}</span></span
			>
			<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
				><span class="label">-${this.removed}</span></span
			>
		`}};Mn.styles=fe`
        :host {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }

        .stat {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
        }

        .stat code-icon {
            margin-right: 0.25rem;
        }

        .added {
            color: var(--vscode-gitDecoration-addedResourceForeground);
        }
        .modified {
            color: var(--vscode-gitDecoration-modifiedResourceForeground);
        }
        .deleted {
            color: var(--vscode-gitDecoration-deletedResourceForeground);
        }

        .label {
            flex-basis: 100%;
            text-align: center;
        }
    }
    `,Bn([yt({type:Number})],Mn.prototype,"added",2),Bn([yt({type:Number})],Mn.prototype,"modified",2),Bn([yt({type:Number})],Mn.prototype,"removed",2),Mn=Bn([mt("commit-stats")],Mn);var Dn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Fn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Nn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Dn(t,o,s),s};let Ln=class extends ft{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Ye`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Ye`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Ye`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" class="content">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Ln.styles=fe`
		:host {
			display: flex;
			flex-direction: column;
			background-color: var(--vscode-sideBar-background);
		}

		* {
			box-sizing: border-box;
		}

		.header {
			flex: none;
			display: flex;
			background-color: var(--vscode-sideBarSectionHeader-background);
			color: var(--vscode-sideBarSectionHeader-foreground);
			border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
			position: relative;
		}

		.header:focus-within {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		.label {
			appearance: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			padding: 0;
			border: none;
			text-align: left;
			font-family: var(--font-family);
			font-size: 1.1rem;
			line-height: 2.2rem;
			height: 2.2rem;
			background: transparent;
			color: inherit;
			cursor: pointer;
			outline: none;
			text-overflow: ellipsis;
		}

		.title {
			font-weight: bold;
			text-transform: uppercase;
		}

		.subtitle {
			margin-left: 1rem;
			opacity: 0.6;
		}

		.icon {
			font-weight: normal;
			margin: 0 0.2rem;
		}

		.content {
			overflow: auto;
			/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
			padding-top: 0.6rem;
		}

		:host([collapsable]:not([expanded])) .content,
		:host([collapsable][expanded='false']) .content {
			display: none;
		}

		slot[name='actions']::slotted(*) {
			flex: none;
			margin-left: auto;
		}
	`,Fn([yt({type:Boolean,reflect:!0})],Ln.prototype,"collapsable",2),Fn([yt({type:Boolean,reflect:!0})],Ln.prototype,"expanded",2),Fn([yt({type:Boolean,reflect:!0})],Ln.prototype,"loading",2),Ln=Fn([mt("webview-pane")],Ln);var Rn=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,In=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Un(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Rn(t,o,s),s};let zn=class extends ft{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Ye`<div class="progress-bar"></div>`}};zn.styles=fe`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,In([yt({reflect:!0})],zn.prototype,"mode",2),In([yt({type:Boolean})],zn.prototype,"active",2),In([yt()],zn.prototype,"position",2),zn=In([mt("progress-indicator")],zn);var jn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,qn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Hn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&jn(t,o,s),s};let Vn=class extends ft{handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),!this._listItems?.length)return;const t=this._listItems.map((e=>{const t=this.handleKeydown.bind(this),o=this.handleBeforeSelected.bind(this),n=this.handleSelected.bind(this);return e.addEventListener("keydown",t,!1),e.addEventListener("select",o,!1),e.addEventListener("selected",n,!1),{dispose:function(){e?.removeEventListener("keydown",t,!1),e?.removeEventListener("select",o,!1),e?.removeEventListener("selected",n,!1)}}}));this._slotSubscriptionsDisposer=()=>{t?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.branch)return;function t(e){return parseInt(e.getAttribute("level")??"0",10)}function o(e){const o=t(e);let n=e.previousElementSibling;for(;n;){if(t(n)<o)return n;n=n.previousElementSibling}}const n=e.target,i=t(n);let s=n.nextElementSibling;for(;s&&i!=t(s);){const t=o(s);s.parentexpanded=!1!==t?.expanded,s.expanded=e.detail.expanded,s=s.nextElementSibling}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}firstUpdated(){this.setAttribute("role","tree")}render(){return Ye`<slot @slotchange=${this.handleSlotChange}></slot>`}};Vn.styles=fe`
		::slotted(*) {
			box-sizing: inherit;
		}
	`,qn([function(e){const{slot:t,selector:o}=null!=e?e:{};return $t({descriptor:n=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(i),r=null!=s?xt(s,e):[];return o?r.filter((e=>e.matches(o))):r},enumerable:!0,configurable:!0})})}()],Vn.prototype,"_listItems",2),Vn=qn([mt("list-container")],Vn);var Wn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Yn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Gn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Wn(t,o,s),s};let Kn=class extends ft{constructor(){super(...arguments),this.tree=!1,this.branch=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1,this.hideIcon=!1}get treeLeaves(){const e=this.level-1;return e<1?[]:Array.from({length:e},((e,t)=>t+1))}get isHidden(){return!1===this.parentexpanded||!this.branch&&!this.expanded?"true":"false"}onItemClick(e){this.select(e.altKey?{viewColumn:-2}:void 0)}onDblItemClick(e){this.select({preview:!1,viewColumn:e.altKey||e.ctrlKey||e.metaKey?-2:void 0})}select(e,t=!1){this.dispatchEvent(new CustomEvent("select")),this.branch&&(this.expanded=!this.expanded),this.active=!0,t||window.requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("selected",{detail:{tree:this.tree,branch:this.branch,expanded:this.expanded,level:this.level,showOptions:e}}))}))}deselect(){this.active=!1}focus(e){this.shadowRoot?.getElementById("item")?.focus(e)}firstUpdated(e){this.setAttribute("role","treeitem")}updated(){this.setAttribute("aria-expanded",this.expanded?"true":"false"),this.setAttribute("aria-hidden",this.isHidden)}render(){return Ye`
			<button
				id="item"
				class="item"
				type="button"
				@click="${this.onItemClick}"
				@dblclick="${this.onDblItemClick}"
			>
				${this.treeLeaves.map((()=>Ye`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`))}
				${this.branch?Ye`<span class="node"
							><code-icon
								class="branch"
								icon="${this.expanded?"chevron-down":"chevron-right"}"
							></code-icon
					  ></span>`:Qe}
				${this.hideIcon?Qe:Ye`<span class="icon"><slot name="icon"></slot></span>`}
				<span class="text">
					<span class="main"><slot></slot></span>
					<span class="description"><slot name="description"></slot></span>
				</span>
			</button>
			<nav class="actions"><slot name="actions"></slot></nav>
		`}};Kn.styles=fe`
		:host {
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			padding-right: var(--gitlens-scrollbar-gutter-width);
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--vscode-sideBar-foreground);

			content-visibility: auto;
			contain-intrinsic-size: auto 2.2rem;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([active]) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		* {
			box-sizing: border-box;
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}

		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
		}

		.node--connector {
			position: relative;
		}
		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-50%, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		:host-context(.indentGuides-always) .node--connector::before,
		:host-context(.indentGuides-onHover:focus-within) .node--connector::before,
		:host-context(.indentGuides-onHover:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.text {
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.description {
			opacity: 0.7;
			margin-left: 0.3rem;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host(:not(:hover):not(:focus-within)) .actions {
			display: none;
		}

		slot[name='actions']::slotted(*) {
			display: flex;
			align-items: center;
		}
	`,Yn([yt({type:Boolean,reflect:!0})],Kn.prototype,"tree",2),Yn([yt({type:Boolean,reflect:!0})],Kn.prototype,"branch",2),Yn([yt({type:Boolean,reflect:!0})],Kn.prototype,"expanded",2),Yn([yt({type:Boolean,reflect:!0})],Kn.prototype,"parentexpanded",2),Yn([yt({type:Number})],Kn.prototype,"level",2),Yn([yt({type:Boolean})],Kn.prototype,"active",2),Yn([yt({attribute:"hide-icon",type:Boolean})],Kn.prototype,"hideIcon",2),Yn([wt()],Kn.prototype,"treeLeaves",1),Yn([wt()],Kn.prototype,"isHidden",1),Kn=Yn([mt("list-item")],Kn);var Qn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Zn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Qn(t,o,s),s};const Jn={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let ei=class extends ft{constructor(){super(...arguments),this.tree=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1,this.stash=!1,this.uncommitted=!1,this.icon="",this.path="",this.repo="",this.staged=!1,this.status=""}select(e){this.baseRef.select(e)}deselect(){this.baseRef.deselect()}focus(e){this.baseRef.focus(e)}get isHidden(){return this.baseRef.isHidden??"false"}get pathIndex(){return this.path.lastIndexOf("/")}get fileName(){return this.pathIndex>-1?this.path.substring(this.pathIndex+1):this.path}get filePath(){return!this.tree&&this.pathIndex>-1?this.path.substring(0,this.pathIndex):""}get statusName(){return""!==this.status?Jn[this.status]:""}render(){return Ye`
			<list-item
				?tree=${this.tree}
				level=${this.level}
				?active=${this.active}
				?expanded=${this.expanded}
				?parentexpanded=${this.parentexpanded}
				@selected=${this.onComparePrevious}
			>
				<img slot="icon" .src=${this.icon} .title=${this.statusName} .alt=${this.statusName} />
				${this.fileName} ${this.tree?Qe:Ye`<span slot="description">${this.filePath}</span>`}
				<span slot="actions">
					<a
						class="change-list__action"
						@click=${this.onOpenFile}
						href="#"
						title="Open file"
						aria-label="Open file"
					>
						<code-icon icon="go-to-file"></code-icon>
					</a>
					${this.uncommitted?Qe:Ye`
								<a
									class="change-list__action"
									@click=${this.onCompareWorking}
									href="#"
									title="Open Changes with Working File"
									aria-label="Open Changes with Working File"
								>
									<code-icon icon="git-compare"></code-icon>
								</a>
								${this.stash?Qe:Ye`
											<a
												class="change-list__action"
												@click=${this.onOpenFileOnRemote}
												href="#"
												title="Open on remote"
												aria-label="Open on remote"
											>
												<code-icon icon="globe"></code-icon>
											</a>
											<a
												class="change-list__action"
												@click=${this.onMoreActions}
												href="#"
												title="Show more actions"
												aria-label="Show more actions"
											>
												<code-icon icon="ellipsis"></code-icon>
											</a>
									  `}
						  `}
				</span>
			</list-item>
		`}onOpenFile(e){const t=new CustomEvent("file-open",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onOpenFileOnRemote(e){const t=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onCompareWorking(e){const t=new CustomEvent("file-compare-working",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onComparePrevious(e){const t=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(e.detail.showOptions)});this.dispatchEvent(t)}onMoreActions(e){const t=new CustomEvent("file-more-actions",{detail:this.getEventDetail()});this.dispatchEvent(t)}getEventDetail(e){return{path:this.path,repoPath:this.repo,staged:this.staged,showOptions:e}}};ei.styles=fe`
		.change-list__action {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.25em;
			color: inherit;
			padding: 2px;
			vertical-align: text-bottom;
			text-decoration: none;
		}
		.change-list__action:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		.change-list__action:hover {
			background-color: var(--vscode-toolbar-hoverBackground);
		}
		.change-list__action:active {
			background-color: var(--vscode-toolbar-activeBackground);
		}
	`,Xn([function(e,t){return $t({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}("list-item")],ei.prototype,"baseRef",2),Xn([yt({type:Boolean})],ei.prototype,"tree",2),Xn([yt({type:Boolean,reflect:!0})],ei.prototype,"expanded",2),Xn([yt({type:Boolean,reflect:!0})],ei.prototype,"parentexpanded",2),Xn([yt({type:Number})],ei.prototype,"level",2),Xn([yt({type:Boolean})],ei.prototype,"active",2),Xn([yt({type:Boolean})],ei.prototype,"stash",2),Xn([yt({type:Boolean})],ei.prototype,"uncommitted",2),Xn([yt({type:String})],ei.prototype,"icon",2),Xn([yt({type:String})],ei.prototype,"path",2),Xn([yt({type:String})],ei.prototype,"repo",2),Xn([yt({type:Boolean})],ei.prototype,"staged",2),Xn([yt({type:String})],ei.prototype,"status",2),Xn([wt()],ei.prototype,"isHidden",1),Xn([wt()],ei.prototype,"pathIndex",1),Xn([wt()],ei.prototype,"fileName",1),Xn([wt()],ei.prototype,"filePath",1),Xn([wt()],ei.prototype,"statusName",1),ei=Xn([mt("file-change-list-item")],ei);const ti=2;class oi{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class ni extends oi{constructor(e){if(super(e),this.et=Qe,e.type!==ti)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Qe||null==e)return this.ft=void 0,this.et=e;if(e===Ke)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}ni.directiveName="unsafeHTML",ni.resultType=1;const ii=(e=>(...t)=>({_$litDirective$:e,values:t}))(ni);function si(e,t,o){return e?t():null==o?void 0:o()}function ri(e,t,o,n=!1,i){const s={name:"",relativePath:"",children:new Map,descendants:[]};let r=e.reduce(((e,n)=>{let i=e,s="";for(const e of t(n)){s=o(s,e),void 0===i.children&&(i.children=new Map);let t=i.children.get(e);void 0===t&&(t={name:e,relativePath:s,parent:i,children:void 0,descendants:void 0},i.children.set(e,t)),void 0===i.descendants&&(i.descendants=[]),i.descendants.push(n),i=t}return i.value=n,e}),s);return n&&(r=ai(r,o,!0,i)),r}function ai(e,t,o=!0,n){if(void 0===e.children)return e;const i=[...e.children.values()];for(const e of i)ai(e,t,!1,n);if(!o&&1===i.length){const o=i[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}var ci=Object.defineProperty,li=Object.getOwnPropertyDescriptor,hi=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?li(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&ci(t,o,s),s};let di=class extends ft{constructor(){super(...arguments),this.explainBusy=!1}get isUncommitted(){return this.state?.selected?.sha===bi}get isStash(){return null!=this.state?.selected?.stashNumber}get shortSha(){return this.state?.selected?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return Ye`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, search for or choose a commit</p>

				<p class="button-container">
					<span class="button-group">
						<button class="button button--full" type="button" data-action="pick-commit">
							Choose Commit...
						</button>
						<button
							class="button"
							type="button"
							data-action="search-commit"
							aria-label="Search for Commit"
							title="Search for Commit"
						>
							<code-icon icon="search"></code-icon>
						</button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){if(null==this.state?.selected)return;const e=this.state.selected.message,t=e.indexOf("\0\n\0");return Ye`
			<div class="section section--message">
				<div class="message-block">
					${si(-1===t,(()=>Ye`<p class="message-block__text scrollable" data-region="message">
								<strong>${ii(e)}</strong>
							</p>`),(()=>Ye`<p class="message-block__text scrollable" data-region="message">
								<strong>${ii(e.substring(0,t))}</strong><br /><span
									>${ii(e.substring(t+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderAutoLinks(){if(this.isUncommitted)return;const e=this.state?.autolinkedIssues?.length??0;let t=this.state?.selected?.autolinks?.length??0,o=t;const n=null!=this.state?.pullRequest,i=n||e>0||t>0;let s=this.state?.selected?.autolinks;return i&&s?.length&&e&&(s=s.filter((e=>!this.state?.autolinkedIssues?.some((t=>t.url===e.url)))),t=s?.length??0,o=(n?1:0)+e+t),Ye`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||t?`${o} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				${si(null==this.state,(()=>Ye`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>i&&0!==o?Ye`
							<div class="section" data-region="autolinks">
								${null!=s&&s.length>0?Ye`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${s.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),Ye`
														<issue-pull-request
															name="${t}"
															url="${e.url}"
															key="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${n?Ye`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												<issue-pull-request
													name="${this.state.pullRequest.title}"
													url="${this.state.pullRequest.url}"
													key="#${this.state.pullRequest.id}"
													status="${this.state.pullRequest.state}"
													date=${this.state.pullRequest.date}
													dateFormat="${this.state.dateFormat}"
												></issue-pull-request>
											</section>
									  `:void 0}
								${this.state?.autolinkedIssues?.length?Ye`
											<section class="issue" aria-label="Issue" data-region="issue">
												${this.state.autolinkedIssues.map((e=>Ye`
														<issue-pull-request
															name="${e.title}"
															url="${e.url}"
															key="${e.id}"
															status="${e.closed?"closed":"opened"}"
															date="${e.closed?e.closedDate:e.date}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`:Ye`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<a href="#" data-action="autolink-settings" title="Configure autolinks"
											>autolinks</a
										>
										to linkify external references, like Jira issues or Zendesk tickets, in commit
										messages.
									</p>
								</div>
							`))}
			</webview-pane>
		`}renderExplainAi(){return Ye`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group">
							<button
								class="button button--full button--busy"
								type="button"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":Qe}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
							>
								<code-icon icon="loading" modifier="spin"></code-icon>Explain this Commit
							</button>
						</span>
					</p>
					${si(this.explain,(()=>Ye`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${si(this.explain?.error,(()=>Ye`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${si(this.explain?.summary,(()=>Ye`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}renderCommitStats(){if(null==this.state?.selected?.stats?.changedFiles)return;if("number"==typeof this.state.selected.stats.changedFiles)return Ye`<commit-stats
				added="?"
				modified="${this.state.selected.stats.changedFiles}"
				removed="?"
			></commit-stats>`;const{added:e,deleted:t,changed:o}=this.state.selected.stats.changedFiles;return Ye`<commit-stats added="${e}" modified="${o}" removed="${t}"></commit-stats>`}renderFileList(){const e=this.state.selected.files;let t,o;if(this.isUncommitted){t=[],o=`indentGuides-${this.state.indentGuides}`;const n=e.filter((e=>e.staged));if(n.length){t.push(Ye`<list-item tree branch hide-icon>Staged Changes</list-item>`);for(const e of n)t.push(this.renderFile(e,2,!0))}const i=e.filter((e=>!e.staged));if(i.length){t.push(Ye`<list-item tree branch hide-icon>Unstaged Changes</list-item>`);for(const e of i)t.push(this.renderFile(e,2,!0))}}else t=e.map((e=>this.renderFile(e)));return Ye`<list-container class=${o??Qe}>${t}</list-container>`}renderFileTree(){const e=this.state.selected.files,t=this.state.preferences?.files?.compact??!0;let o;if(this.isUncommitted){o=[];const n=e.filter((e=>e.staged));n.length&&(o.push(Ye`<list-item tree branch hide-icon>Staged Changes</list-item>`),o.push(...this.renderFileSubtree(n,1,t)));const i=e.filter((e=>!e.staged));i.length&&(o.push(Ye`<list-item tree branch hide-icon>Unstaged Changes</list-item>`),o.push(...this.renderFileSubtree(i,1,t)))}else o=this.renderFileSubtree(e,0,t);return Ye`<list-container class="indentGuides-${this.state.indentGuides}">${o}</list-container>`}renderFileSubtree(e,t,o){const n=ri(e,(e=>e.path.split("/")),((...e)=>e.join("/")),o);return ui(n).map((({level:e,item:o})=>{if(""!==o.name)return null==o.value?Ye`
					<list-item level="${t+e}" tree branch>
						<code-icon slot="icon" icon="folder" title="Directory" aria-label="Directory"></code-icon>
						${o.name}
					</list-item>
				`:this.renderFile(o.value,t+e,!0)}))}renderFile(e,t=1,o=!1){return Ye`
			<file-change-list-item
				?tree=${o}
				level="${t}"
				?stash=${this.isStash}
				?uncommitted=${this.isUncommitted}
				icon="${e.icon.dark}"
				path="${e.path}"
				repo="${e.repoPath}"
				?staged=${e.staged}
				status="${e.status}"
			></file-change-list-item>
		`}renderChangedFiles(){const e=this.state?.preferences?.files?.layout??n.Auto;let t="tree",o="list-tree",i="View as Tree",s=!1;if(null!=this.state?.selected?.files)switch(s=e===n.Auto?this.state.selected.files.length>(this.state.preferences?.files?.threshold??5):e===n.Tree,e){case n.Auto:t="list",o="gl-list-auto",i="View as List";break;case n.List:t="tree",o="list-flat",i="View as Tree";break;case n.Tree:t="auto",o="list-tree",i="View as Auto"}return Ye`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<span slot="subtitle" data-region="stats">${this.renderCommitStats()}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${t}"
						label="${i}"
						icon="${o}"
					></action-item>
				</action-nav>

				<div class="change-list" data-region="files">
					${si(null==this.state?.selected?.files,(()=>Ye`
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
						`),(()=>s?this.renderFileTree():this.renderFileList()))}
				</div>
			</webview-pane>
		`}render(){if(null==this.state?.selected)return Ye` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`;const e=this.state.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";return Ye`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					<div class="top-details">
						<div class="top-details__top-menu">
							<div class="top-details__actionbar${this.state.pinned?" is-pinned":""}">
								<div class="top-details__actionbar-group">
									<a
										class="commit-action${this.state.pinned?" is-active":""}"
										href="#"
										data-action="pin"
										aria-label="${e}"
										title="${e}"
										><code-icon
											icon="${this.state.pinned?"gl-pinned-filled":"pin"}"
											data-region="commit-pin"
										></code-icon
									></a>
									<a
										class="commit-action${this.navigation.back?"":" is-disabled"}"
										aria-disabled="${this.navigation.back?Qe:"true"}"
										href="#"
										data-action="back"
										aria-label="Back"
										title="Back"
										><code-icon icon="arrow-left" data-region="commit-back"></code-icon
									></a>
									${si(this.navigation.forward,(()=>Ye`
											<a
												class="commit-action"
												href="#"
												data-action="forward"
												aria-label="Forward"
												title="Forward"
												><code-icon icon="arrow-right" data-region="commit-forward"></code-icon
											></a>
										`))}
									${si(this.state.navigationStack.hint,(()=>Ye`
											<a
												class="commit-action commit-action--emphasis-low"
												href="#"
												title="View this Commit"
												data-action="${this.state.pinned?"forward":"back"}"
												><code-icon icon="git-commit"></code-icon
												><span data-region="commit-hint"
													>${this.state.navigationStack.hint}</span
												></a
											>
										`))}
								</div>
								<div class="top-details__actionbar-group">
									${si(!this.isUncommitted,(()=>Ye`
											<a
												class="commit-action"
												href="#"
												data-action="commit-actions"
												data-action-type="sha"
												aria-label="Copy SHA
	[⌥] Pick Commit..."
												title="Copy SHA
	[⌥] Pick Commit..."
											>
												<code-icon icon="git-commit"></code-icon>
												<span class="top-details__sha" data-region="shortsha"
													>${this.shortSha}</span
												></a
											>
										`),(()=>Ye`
											<a
												class="commit-action"
												href="#"
												data-action="commit-actions"
												data-action-type="scm"
												aria-label="Open SCM view"
												title="Open SCM view"
												><code-icon icon="source-control"></code-icon
											></a>
										`))}
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="graph"
										aria-label="Open in Commit Graph"
										title="Open in Commit Graph"
										><code-icon icon="gl-graph"></code-icon
									></a>
									${si(!this.isUncommitted,(()=>Ye`
											<a
												class="commit-action"
												href="#"
												data-action="commit-actions"
												data-action-type="more"
												aria-label="Show Commit Actions"
												title="Show Commit Actions"
												><code-icon icon="kebab-vertical"></code-icon
											></a>
										`))}
								</div>
							</div>
							${si(this.state.selected&&null==this.state.selected.stashNumber,(()=>Ye`
									<ul class="top-details__authors" aria-label="Authors">
										<li class="top-details__author" data-region="author">
											<commit-identity
												name="${this.state.selected.author.name}"
												email="${this.state.selected.author.email}"
												date=${this.state.selected.author.date}
												dateFormat="${this.state.dateFormat}"
												avatarUrl="${this.state.selected.author.avatar??""}"
												showAvatar="${this.state.preferences?.avatars??!0}"
												actionLabel="${this.state.selected.sha===bi?"modified":"committed"}"
											></commit-identity>
										</li>
									</ul>
								`))}
						</div>
					</div>
					${this.renderCommitMessage()} ${this.renderAutoLinks()} ${this.renderChangedFiles()}
					${this.renderExplainAi()}
				</main>
			</div>
		`}createRenderRoot(){return this}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}};function ui(e,t=0){const o=[];if(null==e)return o;if(o.push({level:t,item:e}),null!=e.children){const n=Array.from(e.children.values());n.sort(((e,t)=>e.value&&t.value?e.relativePath<t.relativePath?-1:e.relativePath>t.relativePath?1:0:(e.value?1:-1)-(t.value?1:-1))),n.forEach((e=>{o.push(...ui(e,t+1))}))}return o}hi([yt({type:Object})],di.prototype,"state",2),hi([wt()],di.prototype,"explainBusy",2),hi([yt({type:Object})],di.prototype,"explain",2),di=hi([mt("gl-commit-details-app")],di);const bi="0000000000000000000000000000000000000000";class fi extends ce{constructor(){super("CommitDetailsApp")}onInitialize(){this.attachState()}onBind(){return[P.on("file-change-list-item","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),P.on("file-change-list-item","file-open",(e=>this.onOpenFile(e.detail))),P.on("file-change-list-item","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),P.on("file-change-list-item","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),P.on("file-change-list-item","file-more-actions",(e=>this.onFileMoreActions(e.detail))),P.on('[data-action="commit-actions"]',"click",(e=>this.onCommitActions(e))),P.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),P.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),P.on('[data-action="autolink-settings"]',"click",(e=>this.onAutolinkSettings(e))),P.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),P.on('[data-action="pin"]',"click",(e=>this.onTogglePin(e))),P.on('[data-action="back"]',"click",(e=>this.onNavigate("back",e))),P.on('[data-action="forward"]',"click",(e=>this.onNavigate("forward",e))),P.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail))),P.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),P.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e)))]}onMessageReceived(e){const t=e.data;if(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method===_.method)a(_,t,(e=>{e.state,this.state=e.state,this.setState(this.state),this.attachState()}));else super.onMessageReceived?.(e)}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(h,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this.sendCommandWithCompletion(w,void 0,C);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:(this.component.explain=void 0,this.component.explainBusy=!1)}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??n.Auto,compact:this.state.preferences?.files?.compact??!0,threshold:this.state.preferences?.files?.threshold??5,icon:this.state.preferences?.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.attachState(),this.sendCommand(x,{files:o})}onExpandedChange(e){this.state.preferences={...this.state.preferences,autolinksExpanded:e.expanded},this.sendCommand(x,{autolinksExpanded:e.expanded})}onNavigate(e,t){t.preventDefault(),this.sendCommand(k,{direction:e})}onTogglePin(e){e.preventDefault(),this.sendCommand($,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this.sendCommand(y,void 0)}onSearchCommit(e){this.sendCommand(v,void 0)}onPickCommit(e){this.sendCommand(g,void 0)}onOpenFileOnRemote(e){this.sendCommand(f,e)}onOpenFile(e){this.sendCommand(b,e)}onCompareFileWithWorking(e){this.sendCommand(p,e)}onCompareFileWithPrevious(e){this.sendCommand(m,e)}onFileMoreActions(e){this.sendCommand(u,e)}onCommitActions(e){if(e.preventDefault(),void 0===this.state.selected)return void e.stopPropagation();const t=e.target?.getAttribute("data-action-type");null!=t&&this.sendCommand(d,{action:t,alt:e.altKey})}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}}new fi;var pi=t.b,mi=t.F;export{pi as CommitDetailsApp,mi as uncommittedSha};