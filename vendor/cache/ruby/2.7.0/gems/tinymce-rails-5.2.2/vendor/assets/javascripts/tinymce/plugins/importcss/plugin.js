/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.2 (2020-04-23)
 */
!function(){"use strict";function t(){}function n(t){return function(){return t}}function e(){return h}var r,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.EditorManager"),l=tinymce.util.Tools.resolve("tinymce.Env"),m=tinymce.util.Tools.resolve("tinymce.util.Tools"),c=function(t){return t.getParam("importcss_merge_classes")},i=function(t){return t.getParam("importcss_exclusive")},p=function(t){return t.getParam("importcss_selector_converter")},g=function(t){return t.getParam("importcss_selector_filter")},y=function(t){return t.getParam("importcss_groups")},v=function(t){return t.getParam("importcss_append")},d=function(t){return t.getParam("importcss_file_filter")},u=n(!1),s=n(!0),h=(r={fold:function(t,n){return t()},is:u,isSome:u,isNone:s,getOr:O,getOrThunk:x,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:n(null),getOrUndefined:n(undefined),or:O,orThunk:x,map:e,each:t,bind:e,exists:u,forall:s,filter:e,equals:_,equals_:_,toArray:function(){return[]},toString:n("none()")},Object.freeze&&Object.freeze(r),r);function _(t){return t.isNone()}function x(t){return t()}function O(t){return t}function T(n){return function(t){return function(t){if(null===t)return"null";var n=typeof t;return"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n}(t)===n}}function b(t,n){return function(t){for(var n=[],e=0,r=t.length;e<r;++e){if(!w(t[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+t);M.apply(n,t[e])}return n}(function(t,n){for(var e=t.length,r=new Array(e),o=0;o<e;o++){var i=t[o];r[o]=n(i,o)}return r}(t,n))}function k(n){return"string"==typeof n?function(t){return-1!==t.indexOf(n)}:n instanceof RegExp?function(t){return n.test(t)}:n}function S(i,t,u){var c=[],e={};function s(t,n){var e,r=t.href;if((r=function(t){var n=l.cacheSuffix;return"string"==typeof t&&(t=t.replace("?"+n,"").replace("&"+n,"")),t}(r))&&u(r,n)&&!function(t,n){var e=t.settings,r=!1!==e.skin&&(e.skin||"oxide");if(r){var o=e.skin_url?t.documentBaseURI.toAbsolute(e.skin_url):f.baseURL+"/skins/ui/"+r,i=f.baseURL+"/skins/content/";return n===o+"/content"+(t.inline?".inline":"")+".min.css"||-1!==n.indexOf(i)}return!1}(i,r)){m.each(t.imports,function(t){s(t,!0)});try{e=t.cssRules||t.rules}catch(o){}m.each(e,function(t){t.styleSheet?s(t.styleSheet,!0):t.selectorText&&m.each(t.selectorText.split(","),function(t){c.push(m.trim(t))})})}}m.each(i.contentCSS,function(t){e[t]=!0}),u=u||function(t,n){return n||e[t]};try{m.each(t.styleSheets,function(t){s(t)})}catch(n){}return c}function A(t,n){var e,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(n);if(r){var o=r[1],i=r[2].substr(1).split(".").join(" "),u=m.makeMap("a,img");return r[1]?(e={title:n},t.schema.getTextBlockElements()[o]?e.block=o:t.schema.getBlockElements()[o]||u[o.toLowerCase()]?e.selector=o:e.inline=o):r[2]&&(e={inline:"span",title:n.substr(1),classes:i}),!1!==c(t)?e.classes=i:e.attributes={"class":i},e}}function P(t,n){return null===n||!1!==i(t)}var w=T("array"),E=T("function"),I=Array.prototype.slice,M=Array.prototype.push,j=(E(Array.from)&&Array.from,A),D=function(s){s.on("init",function(t){function r(t,n){if(function(t,n,e,r){return!(P(t,e)?n in r:n in e.selectors)}(s,t,n,i)){!function(t,n,e,r){P(t,e)?r[n]=!0:e.selectors[n]=!0}(s,t,n,i);var e=function(t,n,e,r){return(r&&r.selector_converter?r.selector_converter:p(t)?p(t):function(){return A(t,e)}).call(n,e,r)}(s,s.plugins.importcss,t,n);if(e){var r=e.name||a.DOM.uniqueId();return s.formatter.register(r,e),m.extend({},{title:e.title,format:r})}}return null}var o=function(){var n=[],e=[],r={};return{addItemToGroup:function(t,n){r[t]?r[t].push(n):(e.push(t),r[t]=[n])},addItem:function(t){n.push(t)},toFormats:function(){return b(e,function(t){var n=r[t];return 0===n.length?[]:[{title:t,items:n}]}).concat(n)}}}(),i={},u=k(g(s)),c=function(t){return m.map(t,function(t){return m.extend({},t,{original:t,selectors:{},filter:k(t.filter),item:{text:t.title,menu:[]}})})}(y(s));m.each(S(s,s.getDoc(),k(d(s))),function(e){if(-1===e.indexOf(".mce-")&&(!u||u(e))){var t=function(t,n){return m.grep(t,function(t){return!t.filter||t.filter(n)})}(c,e);if(0<t.length)m.each(t,function(t){var n=r(e,t);n&&o.addItemToGroup(t.title,n)});else{var n=r(e,null);n&&o.addItem(n)}}});var n=o.toFormats();s.fire("addStyleModifications",{items:n,replace:!v(s)})})},R=function(n){return{convertSelectorToFormat:function(t){return j(n,t)}}};!function U(){o.add("importcss",function(t){return D(t),R(t)})}()}();