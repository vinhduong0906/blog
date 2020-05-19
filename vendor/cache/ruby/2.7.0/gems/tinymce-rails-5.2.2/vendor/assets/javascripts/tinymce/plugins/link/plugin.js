/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.2 (2020-04-23)
 */
!function(c){"use strict";function n(t){return function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"==t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===t}}function u(){}function i(n){return function(){return n}}function t(){return C}var e,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.util.VK"),a=n("string"),f=n("array"),l=n("boolean"),s=n("function"),d=function(n){var t=n.getParam("link_assume_external_targets",!1);return l(t)&&t?1:!a(t)||"http"!==t&&"https"!==t?0:t},m=function(n){return n.getParam("link_context_toolbar",!1,"boolean")},h=function(n){return n.getParam("link_list")},p=function(n){return n.getParam("default_link_target")},g=function(n){return n.getParam("target_list",!0)},v=function(n){return n.getParam("rel_list",[],"array")},y=function(n){return n.getParam("link_class_list",[],"array")},w=function(n){return n.getParam("link_title",!0,"boolean")},k=function(n){return n.getParam("allow_unsafe_link_target",!1,"boolean")},x=function(n){return n.getParam("link_quicklink",!1,"boolean")},b=function(n){return n.getParam("link_default_protocol","http","string")},_=function(n){var t=c.document.createElement("a");t.target="_blank",t.href=n,t.rel="noreferrer noopener";var e=c.document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,c.window,0,0,0,0,0,!1,!1,!1,!1,0,null),function(n,t){c.document.body.appendChild(n),n.dispatchEvent(t),c.document.body.removeChild(n)}(t,e)},T=function(){return(T=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},O=i(!1),A=i(!0),C=(e={fold:function(n,t){return n()},is:O,isSome:O,isNone:A,getOr:E,getOrThunk:N,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(undefined),or:E,orThunk:N,map:t,each:u,bind:t,exists:O,forall:A,filter:t,equals:P,equals_:P,toArray:function(){return[]},toString:i("none()")},Object.freeze&&Object.freeze(e),e);function P(n){return n.isNone()}function N(n){return n()}function E(n){return n}function I(n,t){return-1<function(n,t){return Z.call(n,t)}(n,t)}function S(n,t){for(var e=0,r=n.length;e<r;e++){t(n[e],e)}}function j(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!f(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n);nn.apply(t,n[e])}return t}function F(n,t){return j(function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o)}return r}(n,t))}function L(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e);if(r.isSome())return r}return Q.none()}function R(n){return/^\w+:/i.test(n)}function D(n){var t=n.getAttribute("data-mce-href");return t||n.getAttribute("href")}function U(n,t){var e,r,o=["noopener"],i=n?n.split(/\s+/):[],u=function(n){return n.filter(function(n){return-1===tn.inArray(o,n)})},c=t?0<(e=u(e=i)).length?e.concat(o):o:u(i);return 0<c.length?(r=c,tn.trim(r.sort().join(" "))):""}function M(n,t){return t=t||n.selection.getNode(),en(t)?n.dom.select("a[href]",t)[0]:n.dom.getParent(t,"a[href]")}function z(n){return n&&"A"===n.nodeName&&!!D(n)}function q(n){return function(n,t,e){return S(n,function(n){e=t(e,n)}),e}(["title","rel","class","target"],function(t,e){return n[e].each(function(n){t[e]=0<n.length?n:null}),t},{href:n.href})}function K(n,t){var e=T({},t);if(!(0<v(n).length)&&!1===k(n)){var r=U(e.rel,"_blank"===e.target);e.rel=r||null}return Q.from(e.target).isNone()&&!1===g(n)&&(e.target=p(n)),e.href=function(n,t){return"http"!==t&&"https"!==t||R(n)?n:t+"://"+n}(e.href,d(n)),e}function B(n){return a(n.value)?n.value:""}function V(t){return void 0===t&&(t=B),function(n){return Q.from(n).map(function(n){return function(n,r){var o=[];return tn.each(n,function(n){var t=a(n.text)?n.text:a(n.title)?n.title:"";if(n.menu!==undefined);else{var e=r(n);o.push({text:t,value:e})}}),o}(n,t)})}}function W(t,n,e,r){var o=r[n],i=0<t.length;return o!==undefined?function(t,n){return L(n,function(n){return Q.some(n).filter(function(n){return n.value===t})})}(o,e).map(function(n){return{url:{value:n.value,meta:{text:i?t:n.text,attach:u}},text:i?t:n.text}}):Q.none()}var H,$,G,J,X=function(e){function n(){return o}function t(n){return n(e)}var r=i(e),o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:A,isNone:O,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:n,orThunk:n,map:function(n){return X(n(e))},each:function(n){n(e)},bind:t,exists:t,forall:t,filter:function(n){return n(e)?o:C},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(O,function(n){return t(e,n)})}};return o},Q={some:X,none:t,from:function(n){return null===n||n===undefined?C:X(n)}},Y=Array.prototype.slice,Z=Array.prototype.indexOf,nn=Array.prototype.push,tn=(s(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.Tools")),en=function(n){return n&&"FIGURE"===n.nodeName&&/\bimage\b/i.test(n.className)},rn=function(n,t){var e=n.dom.select("img",t)[0];if(e){var r=n.dom.getParents(e,"a[href]",t)[0];r&&(r.parentNode.insertBefore(e,r),n.dom.remove(r))}},on=function(n,t,e){var r=n.dom.select("img",t)[0];if(r){var o=n.dom.create("a",e);r.parentNode.insertBefore(o,r),o.appendChild(r)}},un=function(n,t,e){var r=n.selection.getNode(),o=M(n,r),i=K(n,q(e));n.undoManager.transact(function(){e.href===t.href&&t.attach(),o?(n.focus(),function(n,t,e,r){e.each(function(n){t.hasOwnProperty("innerText")?t.innerText=n:t.textContent=n}),n.dom.setAttribs(t,r),n.selection.select(t)}(n,o,e.text,i)):function(t,n,e,r){en(n)?on(t,n,r):e.fold(function(){t.execCommand("mceInsertLink",!1,r)},function(n){t.insertContent(t.dom.createHTML("a",r,t.dom.encode(n)))})}(n,r,e.text,i)})},cn=function(e){e.undoManager.transact(function(){var n=e.selection.getNode();if(en(n))rn(e,n);else{var t=e.dom.getParent(n,"a[href]",e.getBody());t&&e.dom.remove(t,!0)}e.focus()})},an=function(n){return 0<tn.grep(n,z).length},fn=D,ln=function(n){return!(/</.test(n)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(n)||-1===n.indexOf("href=")))},sn=M,dn=function(n,t){return function(n){return n.replace(/\uFEFF/g,"")}(t?t.innerText||t.textContent:n.getContent({format:"text"}))},mn=U,hn=R,pn={sanitize:function(n){return V(B)(n)},sanitizeWith:V,createUi:function(t,e){return function(n){return{name:t,type:"selectbox",label:e,items:n}}},getValue:B},gn=function(n){function t(){return e}var e=n;return{get:t,set:function(n){e=n},clone:function(){return gn(t())}}},vn=function(n,r){function e(n,t){var e=function(n,t){return"link"===t?n.catalogs.link:"anchor"===t?n.catalogs.anchor:Q.none()}(r,t.name).getOr([]);return W(o.get(),t.name,e,n)}var o=gn(n.text);return{onChange:function(n,t){return"url"===t.name?function(n){if(o.get().length<=0){var t=n.url.meta.text!==undefined?n.url.meta.text:n.url.value,e=n.url.meta.title!==undefined?n.url.meta.title:"";return Q.some({text:t,title:e})}return Q.none()}(n()):I(["anchor","link"],t.name)?e(n(),t):("text"===t.name&&o.set(n().text),Q.none())}}},yn={},wn={exports:yn};H=undefined,$=yn,G=wn,J=undefined,function(n){"object"==typeof $&&void 0!==G?G.exports=n():"function"==typeof H&&H.amd?H([],n):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=n()}(function(){return function l(i,u,c){function a(t,n){if(!u[t]){if(!i[t]){var e="function"==typeof J&&J;if(!n&&e)return e(t,!0);if(f)return f(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[t]={exports:{}};i[t][0].call(o.exports,function(n){return a(i[t][1][n]||n)},o,o.exports,l,i,u,c)}return u[t].exports}for(var f="function"==typeof J&&J,n=0;n<c.length;n++)a(c[n]);return a}({1:[function(n,t,e){var r,o,i=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(n){if(r===setTimeout)return setTimeout(n,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(n,0);try{return r(n,0)}catch(t){try{return r.call(null,n,0)}catch(t){return r.call(this,n,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(n){r=u}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(n){o=c}}();var f,l=[],s=!1,d=-1;function m(){s&&f&&(s=!1,f.length?l=f.concat(l):d=-1,l.length&&h())}function h(){if(!s){var n=a(m);s=!0;for(var t=l.length;t;){for(f=l,l=[];++d<t;)f&&f[d].run();d=-1,t=l.length}f=null,s=!1,function e(n){if(o===clearTimeout)return clearTimeout(n);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(n);try{return o(n)}catch(t){try{return o.call(null,n)}catch(t){return o.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function g(){}i.nextTick=function(n){var t=new Array(arguments.length-1);if(1<arguments.length)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];l.push(new p(n,t)),1!==l.length||s||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(n,s,t){(function(t){function r(){}function i(n){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof n)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(n,this)}function o(r,o){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var n=1===r._state?o.onFulfilled:o.onRejected;if(null!==n){var t;try{t=n(r._value)}catch(e){return void c(o.promise,e)}u(o.promise,t)}else(1===r._state?u:c)(o.promise,r._value)})):r._deferreds.push(o)}function u(n,t){try{if(t===n)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if(t instanceof i)return n._state=3,n._value=t,void a(n);if("function"==typeof e)return void l(function r(n,t){return function(){n.apply(t,arguments)}}(e,t),n)}n._state=1,n._value=t,a(n)}catch(o){c(n,o)}}function c(n,t){n._state=2,n._value=t,a(n)}function a(n){2===n._state&&0===n._deferreds.length&&i._immediateFn(function(){n._handled||i._unhandledRejectionFn(n._value)});for(var t=0,e=n._deferreds.length;t<e;t++)o(n,n._deferreds[t]);n._deferreds=null}function f(n,t,e){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof t?t:null,this.promise=e}function l(n,t){var e=!1;try{n(function(n){e||(e=!0,u(t,n))},function(n){e||(e=!0,c(t,n))})}catch(r){if(e)return;e=!0,c(t,r)}}var n,e;n=this,e=setTimeout,i.prototype["catch"]=function(n){return this.then(null,n)},i.prototype.then=function(n,t){var e=new this.constructor(r);return o(this,new f(n,t,e)),e},i.all=function(n){var a=Array.prototype.slice.call(n);return new i(function(o,i){if(0===a.length)return o([]);var u=a.length;function c(t,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var e=n.then;if("function"==typeof e)return void e.call(n,function(n){c(t,n)},i)}a[t]=n,0==--u&&o(a)}catch(r){i(r)}}for(var n=0;n<a.length;n++)c(n,a[n])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(n){n(t)})},i.reject=function(e){return new i(function(n,t){t(e)})},i.race=function(o){return new i(function(n,t){for(var e=0,r=o.length;e<r;e++)o[e].then(n,t)})},i._immediateFn="function"==typeof t?function(n){t(n)}:function(n){e(n,0)},i._unhandledRejectionFn=function(n){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",n)},i._setImmediateFn=function(n){i._immediateFn=n},i._setUnhandledRejectionFn=function(n){i._unhandledRejectionFn=n},void 0!==s&&s.exports?s.exports=i:n.Promise||(n.Promise=i)}).call(this,n("timers").setImmediate)},{timers:3}],3:[function(a,n,f){(function(n,t){var r=a("process/browser.js").nextTick,e=Function.prototype.apply,o=Array.prototype.slice,i={},u=0;function c(n,t){this._id=n,this._clearFn=t}f.setTimeout=function(){return new c(e.call(setTimeout,window,arguments),clearTimeout)},f.setInterval=function(){return new c(e.call(setInterval,window,arguments),clearInterval)},f.clearTimeout=f.clearInterval=function(n){n.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(window,this._id)},f.enroll=function(n,t){clearTimeout(n._idleTimeoutId),n._idleTimeout=t},f.unenroll=function(n){clearTimeout(n._idleTimeoutId),n._idleTimeout=-1},f._unrefActive=f.active=function(n){clearTimeout(n._idleTimeoutId);var t=n._idleTimeout;0<=t&&(n._idleTimeoutId=setTimeout(function(){n._onTimeout&&n._onTimeout()},t))},f.setImmediate="function"==typeof n?n:function(n){var t=u++,e=!(arguments.length<2)&&o.call(arguments,1);return i[t]=!0,r(function(){i[t]&&(e?n.apply(null,e):n.call(null),f.clearImmediate(t))}),t},f.clearImmediate="function"==typeof t?t:function(n){delete i[n]}}).call(this,a("timers").setImmediate,a("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(n,t,e){var r=n("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")();t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});function kn(n){c.setTimeout(function(){throw n},0)}function xn(n){var t=n.href;return 0<t.indexOf("@")&&-1===t.indexOf("//")&&-1===t.indexOf("mailto:")?Q.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(n){return T(T({},n),{href:"mailto:"+t})}}):Q.none()}function bn(n,t,e){var r=n.getAttrib(t,e);return null!==r&&0<r.length?Q.some(r):Q.none()}function _n(n,t){return n.dom.getParent(t,"a[href]")}function Tn(n){return _n(n,n.selection.getStart())}function On(n,t){if(t){var e=fn(t);if(/^#/.test(e)){var r=n.$(e);r.length&&n.selection.scrollIntoView(r[0],!0)}else _(t.href)}}var An=wn.exports.boltExport,Cn=function(n){var e=Q.none(),t=[],r=function(n){o()?u(n):t.push(n)},o=function(){return e.isSome()},i=function(n){S(n,u)},u=function(t){e.each(function(n){c.setTimeout(function(){t(n)},0)})};return n(function(n){e=Q.some(n),i(t),t=[]}),{get:r,map:function(e){return Cn(function(t){r(function(n){t(e(n))})})},isReady:o}},Pn={nu:Cn,pure:function(t){return Cn(function(n){n(t)})}},Nn=function(e){function n(n){e().then(n,kn)}return{map:function(n){return Nn(function(){return e().then(n)})},bind:function(t){return Nn(function(){return e().then(function(n){return t(n).toPromise()})})},anonBind:function(n){return Nn(function(){return e().then(function(){return n.toPromise()})})},toLazy:function(){return Pn.nu(n)},toCached:function(){var n=null;return Nn(function(){return null===n&&(n=e()),n})},toPromise:e,get:n}},En=function(n){return Nn(function(){return new An(n)})},In=function(n){return Nn(function(){return An.resolve(n)})},Sn=tinymce.util.Tools.resolve("tinymce.util.Delay"),jn=function(n,r){return L([xn,function(e,r){return function(n){var t=n.href;return 1===e&&!hn(t)||0===e&&/^\s*www[\.|\d\.]/i.test(t)?Q.some({message:"The URL you entered seems to be an external link. Do you want to add the required "+r+":// prefix?",preprocess:function(n){return T(T({},n),{href:r+"://"+t})}}):Q.none()}}(d(n),b(n))],function(n){return n(r)}).fold(function(){return In(r)},function(e){return En(function(t){!function(t,n,e){var r=t.selection.getRng();Sn.setEditorTimeout(t,function(){t.windowManager.confirm(n,function(n){t.selection.setRng(r),e(n)})})}(n,e.message,function(n){t(n?e.preprocess(r):r)})})})},Fn=function(n){var t=n.dom.select("a:not([href])"),e=F(t,function(n){var t=n.name||n.id;return t?[{text:t,value:"#"+t}]:[]});return 0<e.length?Q.some([{text:"None",value:""}].concat(e)):Q.none()},Ln=function(n){var t=y(n);return 0<t.length?pn.sanitize(t):Q.none()},Rn=tinymce.util.Tools.resolve("tinymce.util.XHR"),Dn=function(t){function e(n){return t.convertURL(n.value||n.url,"href")}var n=h(t);return En(function(t){a(n)?Rn.send({url:n,success:function(n){return t(function(n){try{return Q.some(JSON.parse(n))}catch(t){return Q.none()}}(n))},error:function(n){return t(Q.none())}}):s(n)?n(function(n){return t(Q.some(n))}):t(Q.from(n))}).map(function(n){return n.bind(pn.sanitizeWith(e)).map(function(n){return 0<n.length?[{text:"None",value:""}].concat(n):n})})},Un=function(n,t){var e=v(n);if(0<e.length){var r=t.is("_blank");return(!1===k(n)?pn.sanitizeWith(function(n){return mn(pn.getValue(n),r)}):pn.sanitize)(e)}return Q.none()},Mn=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],zn=function(n){var t=g(n);return f(t)?pn.sanitize(t).orThunk(function(){return Q.some(Mn)}):!1===t?Q.none():Q.some(Mn)},qn=function(e,r){return Dn(e).map(function(n){var t=function(n,t){var e=n.dom,r=ln(n.selection.getContent())?Q.some(dn(n.selection,t)):Q.none(),o=t?Q.some(e.getAttrib(t,"href")):Q.none(),i=t?Q.from(e.getAttrib(t,"target")):Q.none(),u=bn(e,t,"rel"),c=bn(e,t,"class");return{url:o,text:r,title:bn(e,t,"title"),target:i,rel:u,linkClass:c}}(e,r);return{anchor:t,catalogs:{targets:zn(e),rels:Un(e,t.target),classes:Ln(e),anchor:Fn(e),link:n},optNode:Q.from(r),flags:{titleEnabled:w(e)}}})},Kn=function(t){(function(n){var t=sn(n);return qn(n,t)})(t).map(function(n){return function(n,t,e){var r=n.anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),o=n.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],i=function(n,t){return{url:{value:n.anchor.url.getOr(""),meta:{attach:function(){},text:n.anchor.url.fold(function(){return""},function(){return n.anchor.text.getOr("")}),original:{value:n.anchor.url.getOr("")}}},text:n.anchor.text.getOr(""),title:n.anchor.title.getOr(""),anchor:n.anchor.url.getOr(""),link:n.anchor.url.getOr(""),rel:n.anchor.rel.getOr(""),target:n.anchor.target.or(t).getOr(""),linkClass:n.anchor.linkClass.getOr("")}}(n,Q.from(p(e))),u=vn(i,n),c=n.catalogs;return{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:j([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],r,o,function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e);return t}([c.anchor.map(pn.createUi("anchor","Anchors")),c.rels.map(pn.createUi("rel","Rel")),c.targets.map(pn.createUi("target","Open link in...")),c.link.map(pn.createUi("link","Link list")),c.classes.map(pn.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:i,onChange:function(t,n){var e=n.name;u.onChange(t.getData,{name:e}).each(function(n){t.setData(n)})},onSubmit:t}}(n,function(i,u){return function(n){var e=n.getData();if(!e.url.value)return cn(i),void n.close();function t(t){return Q.from(e[t]).filter(function(n){return!u.anchor[t].is(n)})}var r={href:e.url.value,text:t("text"),target:t("target"),rel:t("rel"),"class":t("linkClass"),title:t("title")},o={href:e.url.value,attach:e.url.meta!==undefined&&e.url.meta.attach?e.url.meta.attach:function(){}};jn(i,r).get(function(n){un(i,o,n)}),n.close()}}(t,n),t)}).get(function(n){t.windowManager.open(n)})},Bn=function(n){return function(){Kn(n)}},Vn=function(n){return function(){On(n,Tn(n))}},Wn=function(e){e.on("click",function(n){var t=_n(e,n.target);t&&o.metaKeyPressed(n)&&(n.preventDefault(),On(e,t))}),e.on("keydown",function(n){var t=Tn(e);t&&13===n.keyCode&&function(n){return!0===n.altKey&&!1===n.shiftKey&&!1===n.ctrlKey&&!1===n.metaKey}(n)&&(n.preventDefault(),On(e,t))})},Hn=function(e){return function(t){function n(n){return t.setActive(!e.mode.isReadOnly()&&!!sn(e,n.element))}return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},$n=function(r){return function(t){var n=r.dom.getParents(r.selection.getStart());t.setDisabled(!an(n));function e(n){return t.setDisabled(!an(n.parents))}return r.on("NodeChange",e),function(){return r.off("NodeChange",e)}}},Gn=function(n){n.addCommand("mceLink",function(){x(n)?n.fire("contexttoolbar-show",{toolbarKey:"quicklink"}):Bn(n)()})},Jn=function(n){n.addShortcut("Meta+K","",function(){n.execCommand("mceLink")})},Xn=function(n){n.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:Bn(n),onSetup:Hn(n)}),n.ui.registry.addButton("openlink",{icon:"new-tab",tooltip:"Open link",onAction:Vn(n),onSetup:$n(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:function(){return cn(n)},onSetup:$n(n)})},Qn=function(n){n.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Vn(n),onSetup:$n(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:Bn(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:function(){return cn(n)},onSetup:$n(n)})},Yn=function(t){t.ui.registry.addContextMenu("link",{update:function(n){return an(t.dom.getParents(n,"a"))?"link unlink openlink":"link"}})},Zn=function(i){function n(n){var t=i.selection.getNode();return n.setDisabled(!sn(i,t)),function(){}}i.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:Hn(i)},label:"Link",predicate:function(n){return!!sn(i,n)&&m(i)},initValue:function(){var n=sn(i);return n?fn(n):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(n){var t=i.selection.getNode();return n.setActive(!!sn(i,t)),Hn(i)(n)},onAction:function(n){var t=sn(i),e=n.getValue();if(t)i.dom.setAttrib(t,"href",e),function(n){n.selection.collapse(!1)}(i),n.hide();else{var r={href:e,attach:function(){}},o=ln(i.selection.getContent())?Q.some(dn(i.selection,t)).filter(function(n){return 0<n.length}).or(Q.from(e)):Q.none();un(i,r,{href:e,text:o,title:Q.none(),rel:Q.none(),target:Q.none(),"class":Q.none()}),n.hide()}}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:n,onAction:function(n){cn(i),n.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:n,onAction:function(n){Vn(i)(),n.hide()}}]})};!function nt(){r.add("link",function(n){Xn(n),Qn(n),Yn(n),Zn(n),Wn(n),Gn(n),Jn(n)})}()}(window);