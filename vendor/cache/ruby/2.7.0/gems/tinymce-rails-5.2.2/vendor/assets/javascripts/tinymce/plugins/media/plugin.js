/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.2 (2020-04-23)
 */
!function(){"use strict";function e(){}function o(e){return function(){return e}}function t(){return u}var r,n=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=o(!1),c=o(!0),u=(r={fold:function(e,t){return e()},is:a,isSome:a,isNone:c,getOr:l,getOrThunk:s,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(undefined),or:l,orThunk:s,map:t,each:e,bind:t,exists:a,forall:c,filter:t,equals:i,equals_:i,toArray:function(){return[]},toString:o("none()")},Object.freeze&&Object.freeze(r),r);function i(e){return e.isNone()}function s(e){return e()}function l(e){return e}function d(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===t}}function f(e,t){for(var r=0,n=e.length;r<n;r++){t(e[r],r)}}function h(e,t){return I(e,t)?$.from(e[t]):$.none()}function p(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]}function g(e){return e.replace(/px$/,"")}function v(n,e){var i=R(!1),o={};return Z({validate:!1,allow_conditional_comments:!0,start:function(e,t){if(i.get());else if(I(t.map,"data-ephox-embed-iri"))i.set(!0),o=function(e){var t=e.map.style,r=t?ee.parseStyle(t):{};return{type:"ephox-embed-iri",source:e.map["data-ephox-embed-iri"],altsource:"",poster:"",width:h(r,"max-width").map(g).getOr(""),height:h(r,"max-height").map(g).getOr("")}}(t);else{if(o.source||"param"!==e||(o.source=t.map.movie),"iframe"!==e&&"object"!==e&&"embed"!==e&&"video"!==e&&"audio"!==e||(o.type||(o.type=e),o=X.extend(t.map,o)),"script"===e){var r=p(n,t.map.src);if(!r)return;o={type:"script",source:t.map.src,width:String(r.width),height:String(r.height)}}"source"===e&&(o.source?o.altsource||(o.altsource=t.map.src):o.source=t.map.src),"img"!==e||o.poster||(o.poster=t.map.src)}}}).parse(e),o.source=o.source||o.src||o.data,o.altsource=o.altsource||"",o.poster=o.poster||"",o}function w(e){return/^[0-9.]+$/.test(e)?e+"px":e}function b(e,t){for(var r in t){var n=""+t[r];if(e.map[r])for(var i=e.length;i--;){var o=e[i];o.name===r&&(n?(e.map[r]=n,o.value=n):(delete e.map[r],e.splice(i,1)))}else n&&(e.push({name:r,value:n}),e.map[r]=n)}}function y(r,e){var n=X.extend({},e);if(!n.source&&(X.extend(n,v(q(r),n.embed)),!n.source))return"";n.altsource||(n.altsource=""),n.poster||(n.poster=""),n.source=r.convertURL(n.source,"source"),n.altsource=r.convertURL(n.altsource,"source"),n.sourcemime=te(n.source),n.altsourcemime=te(n.altsource),n.poster=r.convertURL(n.poster,"poster");var t=function(t){var e=ce.filter(function(e){return e.regex.test(t)});return 0<e.length?X.extend({},e[0],{url:function(e,t){for(var r=function(e){var t=e.match(/^(https?:\/\/|www\.)(.+)$/i);return t&&1<t.length?"www."===t[1]?"https://":t[1]:"https://"}(t),n=e.regex.exec(t),i=r+e.url,o=function(e){i=i.replace("$"+e,function(){return n[e]?n[e]:""})},a=0;a<n.length;a++)o(a);return i.replace(/\?$/,"")}(e[0],t)}):null}(n.source);if(t&&(n.source=t.url,n.type=t.type,n.allowFullscreen=t.allowFullscreen,n.width=n.width||String(t.w),n.height=n.height||String(t.h)),n.embed)return ae(n.embed,n,!0);var i=p(q(r),n.source);i&&(n.type="script",n.width=String(i.width),n.height=String(i.height));var o=B(r),a=W(r);return n.width=n.width||"300",n.height=n.height||"150",X.each(n,function(e,t){n[t]=r.dom.encode(""+e)}),"iframe"===n.type?function(e){var t=e.allowFullscreen?' allowFullscreen="1"':"";return'<iframe src="'+e.source+'" width="'+e.width+'" height="'+e.height+'"'+t+"></iframe>"}(n):"application/x-shockwave-flash"===n.sourcemime?function(e){var t='<object data="'+e.source+'" width="'+e.width+'" height="'+e.height+'" type="application/x-shockwave-flash">';return e.poster&&(t+='<img src="'+e.poster+'" width="'+e.width+'" height="'+e.height+'" />'),t+="</object>"}(n):-1!==n.sourcemime.indexOf("audio")?function(e,t){return t?t(e):'<audio controls="controls" src="'+e.source+'">'+(e.altsource?'\n<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</audio>"}(n,o):"script"===n.type?function(e){return'<script src="'+e.source+'"><\/script>'}(n):function(e,t){return t?t(e):'<video width="'+e.width+'" height="'+e.height+'"'+(e.poster?' poster="'+e.poster+'"':"")+' controls="controls">\n<source src="'+e.source+'"'+(e.sourcemime?' type="'+e.sourcemime+'"':"")+" />\n"+(e.altsource?'<source src="'+e.altsource+'"'+(e.altsourcemime?' type="'+e.altsourcemime+'"':"")+" />\n":"")+"</video>"}(n,a)}function x(t){return function(e){return y(t,e)}}function j(e,t){var r=t?function(e,t){return h(t,e).bind(function(e){return h(e,"meta")})}(t,e).getOr({}):{},n=function(o,a,c){return function(e){function t(){return h(o,e)}function r(){return h(a,e)}function n(e){return h(e,"value").bind(function(e){return 0<e.length?$.some(e):$.none()})}var i;return(i={})[e]=(e===c?t().bind(function(e){return M(e)?n(e).orThunk(r):r().orThunk(function(){return $.from(e)})}):r().orThunk(function(){return t().bind(function(e){return M(e)?n(e):$.from(e)})})).getOr(""),i}}(e,r,t);return m(m(m(m(m({},n("source")),n("altsource")),n("poster")),n("embed")),function(e,r){var n={};return h(e,"dimensions").each(function(e){f(["width","height"],function(t){h(r,t).orThunk(function(){return h(e,t)}).each(function(e){return n[t]=e})})}),n}(e,r))}function O(e){var n=m(m({},e),{source:{value:h(e,"source").getOr("")},altsource:{value:h(e,"altsource").getOr("")},poster:{value:h(e,"poster").getOr("")}});return f(["width","height"],function(r){h(e,r).each(function(e){var t=n.dimensions||{};t[r]=e,n.dimensions=t})}),n}function S(r){return function(e){var t=e&&e.msg?"Media embed handler error: "+e.msg:"Media embed handler threw unknown error.";r.notificationManager.open({type:"error",text:t})}}function _(e,t){return v(q(e),t)}function A(i,o){return function(e){if(F(e.url)&&0<e.url.trim().length){var t=e.html,r=_(o,t),n=m(m({},r),{source:e.url,embed:t});i.setData(O(n))}}}function k(e,t){var r=e.dom.select("img[data-mce-object]");e.insertContent(t),function(e,t){for(var r=e.dom.select("img[data-mce-object]"),n=0;n<t.length;n++)for(var i=r.length-1;0<=i;i--)t[n]===r[i]&&r.splice(i,1);e.selection.select(r[0])}(e,r),e.nodeChanged()}function T(e,t){var r,n=t.name;return(r=new pe("img",1)).shortEnded=!0,we(e,t,r),r.attr({width:t.attr("width")||"300",height:t.attr("height")||("audio"===n?"30":"150"),style:t.attr("style"),src:ge.transparentSrc,"data-mce-object":n,"class":"mce-object mce-object-"+n}),r}function C(e,t){var r,n,i,o=t.name;return(r=new pe("span",1)).attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":o,"class":"mce-preview-object mce-object-"+o}),we(e,t,r),(n=new pe(o,1)).attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),style:t.attr("style"),"class":t.attr("class"),width:t.attr("width"),height:t.attr("height"),frameborder:"0"}),(i=new pe("span",1)).attr("class","mce-shim"),r.append(n),r.append(i),r}function P(e){for(;e=e.parent;)if(e.attr("data-ephox-embed-iri")||(void 0,(t=e.attr("class"))&&/\btiny-pageembed\b/.test(t)))return!0;var t;return!1}var D=function(r){function e(){return i}function t(e){return e(r)}var n=o(r),i={fold:function(e,t){return t(r)},is:function(e){return r===e},isSome:c,isNone:a,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:e,orThunk:e,map:function(e){return D(e(r))},each:function(e){e(r)},bind:t,exists:t,forall:t,filter:function(e){return e(r)?i:u},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(e){return e.is(r)},equals_:function(e,t){return e.fold(a,function(e){return t(r,e)})}};return i},$={some:D,none:t,from:function(e){return null===e||e===undefined?u:D(e)}},F=d("string"),M=d("object"),z=d("array"),N=d("function"),U=Array.prototype.slice,E=Array.prototype.push,R=(N(Array.from)&&Array.from,function(e){function t(){return r}var r=e;return{get:t,set:function(e){r=e},clone:function(){return R(t())}}}),L=Object.hasOwnProperty,I=function(e,t){return L.call(e,t)},q=function(e){return e.getParam("media_scripts")},B=function(e){return e.getParam("audio_template_callback")},W=function(e){return e.getParam("video_template_callback")},G=function(e){return e.getParam("media_live_embeds",!0)},H=function(e){return e.getParam("media_filter_html",!0)},J=function(e){return e.getParam("media_url_resolver")},K=function(e){return e.getParam("media_alt_source",!0)},Q=function(e){return e.getParam("media_poster",!0)},V=function(e){return e.getParam("media_dimensions",!0)},X=tinymce.util.Tools.resolve("tinymce.util.Tools"),Y=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Z=tinymce.util.Tools.resolve("tinymce.html.SaxParser"),ee=Y.DOM,te=function(e){var t={mp3:"audio/mpeg",m4a:"audio/x-m4a",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}[e.toLowerCase().split(".").pop()];return t||""},re=tinymce.util.Tools.resolve("tinymce.html.Schema"),ne=tinymce.util.Tools.resolve("tinymce.html.Writer"),ie=Y.DOM,oe=["source","altsource"],ae=function(e,i,o){var a,c=ne(),u=R(!1),s=0;return Z({validate:!1,allow_conditional_comments:!0,comment:function(e){c.comment(e)},cdata:function(e){c.cdata(e)},text:function(e,t){c.text(e,t)},start:function(e,t,r){if(u.get());else if(I(t.map,"data-ephox-embed-iri"))u.set(!0),function(e,t){var r=t.map.style,n=r?ie.parseStyle(r):{};n["max-width"]=w(e.width),n["max-height"]=w(e.height),b(t,{style:ie.serializeStyle(n)})}(i,t);else{switch(e){case"video":case"object":case"embed":case"img":case"iframe":i.height!==undefined&&i.width!==undefined&&b(t,{width:i.width,height:i.height})}if(o)switch(e){case"video":b(t,{poster:i.poster,src:""}),i.altsource&&b(t,{src:""});break;case"iframe":b(t,{src:i.source});break;case"source":if(s<2&&(b(t,{src:i[oe[s]],type:i[oe[s]+"mime"]}),!i[oe[s]]))return;s++;break;case"img":if(!i.poster)return;a=!0}}c.start(e,t,r)},end:function(e){if(!u.get()){if("video"===e&&o)for(var t=0;t<2;t++)if(i[oe[t]]){var r=[];r.map={},s<t&&(b(r,{src:i[oe[t]],type:i[oe[t]+"mime"]}),c.start("source",r,!0))}if(i.poster&&"object"===e&&o&&!a){var n=[];n.map={},b(n,{src:i.poster,width:i.width,height:i.height}),c.start("img",n,!0)}}c.end(e)}},re({})).parse(e),c.getContent()},ce=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$2?$4",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"www.dailymotion.com/embed/video/$1",allowFullscreen:!0}],ue=tinymce.util.Tools.resolve("tinymce.util.Promise"),se={},le=function(e,t){var r=J(e);return r?function(n,i,o){return new ue(function(t,e){function r(e){return e.html&&(se[n.source]=e),t({url:n.source,html:e.html?e.html:i(n)})}se[n.source]?r(se[n.source]):o({url:n.source},r,e)})}(t,x(e),r):function(t,r){return new ue(function(e){e({html:r(t),url:t.source})})}(t,x(e))},me=function(e){return se.hasOwnProperty(e)},de=function(i){var e=function(e){var t=e.selection.getNode(),r=function(e){return e.getAttribute("data-mce-object")||e.getAttribute("data-ephox-embed-iri")}(t)?e.serializer.serialize(t,{selection:!0}):"";return m({embed:r},v(q(e),r))}(i),r=R(e),t=O(e),n={title:"General",name:"general",items:function(e){for(var t=[],r=0,n=e.length;r<n;++r){if(!z(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e);E.apply(t,e[r])}return t}([[{name:"source",type:"urlinput",filetype:"media",label:"Source"}],V(i)?[{type:"sizeinput",name:"dimensions",label:"Constrain proportions",constrain:!0}]:[]])},o={title:"Embed",items:[{type:"textarea",name:"embed",label:"Paste your embed code below:"}]},a=[];K(i)&&a.push({name:"altsource",type:"urlinput",filetype:"media",label:"Alternative source URL"}),Q(i)&&a.push({name:"poster",type:"urlinput",filetype:"image",label:"Media poster (Image URL)"});var c={title:"Advanced",name:"advanced",items:a},u=[n,o];0<a.length&&u.push(c);var s={type:"tabpanel",tabs:u},l=i.windowManager.open({title:"Insert/Edit Media",size:"normal",body:s,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(e){var t=j(e.getData());!function(e,t,r){t.embed=ae(t.embed,t),t.embed&&(e.source===t.source||me(t.source))?k(r,t.embed):le(r,t).then(function(e){k(r,e.html)})["catch"](S(r))}(r.get(),t,i),e.close()},onChange:function(e,t){switch(t.name){case"source":!function(e,t){var r=j(t.getData(),"source");e.source!==r.source&&(A(l,i)({url:r.source,html:""}),le(i,r).then(A(l,i))["catch"](S(i)))}(r.get(),e);break;case"embed":!function(e){var t=j(e.getData()),r=_(i,t.embed);e.setData(O(r))}(e);break;case"dimensions":case"altsource":case"poster":!function(e,t){var r=j(e.getData(),t),n=y(i,r);e.setData(O(m(m({},r),{embed:n})))}(e,t.name)}r.set(j(e.getData()))},initialData:t})},fe=function(e){return{showDialog:function(){de(e)}}},he=function(e){e.addCommand("mceMedia",function(){de(e)})},pe=tinymce.util.Tools.resolve("tinymce.html.Node"),ge=tinymce.util.Tools.resolve("tinymce.Env"),ve=function(o,e){if(!1===H(o))return e;var a,c=ne();return Z({validate:!1,allow_conditional_comments:!1,comment:function(e){c.comment(e)},cdata:function(e){c.cdata(e)},text:function(e,t){c.text(e,t)},start:function(e,t,r){if(a=!0,"script"!==e&&"noscript"!==e&&"svg"!==e){for(var n=t.length-1;0<=n;n--){var i=t[n].name;0===i.indexOf("on")&&(delete t.map[i],t.splice(n,1)),"style"===i&&(t[n].value=o.dom.serializeStyle(o.dom.parseStyle(t[n].value),e))}c.start(e,t,r),a=!1}},end:function(e){a||c.end(e)}},re({})).parse(e),c.getContent()},we=function(e,t,r){var n,i,o,a,c;for(a=(o=t.attributes).length;a--;)n=o[a].name,i=o[a].value,"width"!==n&&"height"!==n&&"style"!==n&&("data"!==n&&"src"!==n||(i=e.convertURL(i,n)),r.attr("data-mce-p-"+n,i));(c=t.firstChild&&t.firstChild.value)&&(r.attr("data-mce-html",escape(ve(e,c))),r.firstChild=null)},be=function(i){return function(e){for(var t,r,n=e.length;n--;)(t=e[n]).parent&&(t.parent.attr("data-mce-object")||"script"===t.name&&!(r=p(q(i),t.attr("src")))||(r&&(r.width&&t.attr("width",r.width.toString()),r.height&&t.attr("height",r.height.toString())),"iframe"===t.name&&G(i)&&ge.ceFalse?P(t)||t.replace(C(i,t)):P(t)||t.replace(T(i,t))))}},ye=function(d){d.on("preInit",function(){var t=d.schema.getSpecialElements();X.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var r=d.schema.getBoolAttrs();X.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){r[e]={}}),d.parser.addNodeFilter("iframe,video,audio,object,embed,script",be(d)),d.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var r,n,i,o,a,c,u,s,l=e.length;l--;)if((r=e[l]).parent){for(u=r.attr(t),n=new pe(u,1),"audio"!==u&&"script"!==u&&((s=r.attr("class"))&&-1!==s.indexOf("mce-preview-object")?n.attr({width:r.firstChild.attr("width"),height:r.firstChild.attr("height")}):n.attr({width:r.attr("width"),height:r.attr("height")})),n.attr({style:r.attr("style")}),i=(o=r.attributes).length;i--;){var m=o[i].name;0===m.indexOf("data-mce-p-")&&n.attr(m.substr(11),o[i].value)}"script"===u&&n.attr("type","text/javascript"),(a=r.attr("data-mce-html"))&&((c=new pe("#text",3)).raw=!0,c.value=ve(d,unescape(a)),n.append(c)),r.replace(n)}})}),d.on("SetContent",function(){d.$("span.mce-preview-object").each(function(e,t){var r=d.$(t);0===r.find("span.mce-shim").length&&r.append('<span class="mce-shim"></span>')})})},xe=function(e){e.on("ResolveName",function(e){var t;1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)})},je=function(t){t.on("click keyup touchend",function(){var e=t.selection.getNode();e&&t.dom.hasClass(e,"mce-preview-object")&&t.dom.getAttrib(e,"data-mce-selected")&&e.setAttribute("data-mce-selected","2")}),t.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");"audio"!==t&&"script"!==t||e.preventDefault()}),t.on("ObjectResized",function(e){var t,r=e.target;r.getAttribute("data-mce-object")&&(t=r.getAttribute("data-mce-html"))&&(t=unescape(t),r.setAttribute("data-mce-html",escape(ae(t,{width:String(e.width),height:String(e.height)}))))})},Oe=function(e){e.ui.registry.addToggleButton("media",{tooltip:"Insert/edit media",icon:"embed",onAction:function(){e.execCommand("mceMedia")},onSetup:function(t,r){return function(e){return t.selection.selectorChangedWithUnbind(r.join(","),e.setActive).unbind}}(e,["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"])}),e.ui.registry.addMenuItem("media",{icon:"embed",text:"Media...",onAction:function(){e.execCommand("mceMedia")}})};!function Se(){n.add("media",function(e){return he(e),Oe(e),xe(e),ye(e),je(e),fe(e)})}()}();