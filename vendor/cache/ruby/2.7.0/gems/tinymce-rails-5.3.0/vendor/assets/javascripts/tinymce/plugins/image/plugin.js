/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.3.0 (2020-05-21)
 */
!function(m){"use strict";var e,t,n,r,o,a=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(){},l=function(e){return function(){return e}},s=l(!1),u=l(!0),c=function(){return d},d=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:s,isSome:s,isNone:u,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(undefined),or:n,orThunk:t,map:c,each:i,bind:c,exists:s,forall:u,filter:c,equals:e,equals_:e,toArray:function(){return[]},toString:l("none()")}),g=function(n){var e=l(n),t=function(){return a},r=function(e){return e(n)},a={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:u,isNone:s,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return g(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?a:d},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(s,function(e){return t(n,e)})}};return a},A={some:g,none:c,from:function(e){return null===e||e===undefined?d:g(e)}},f=function(r){return function(e){return n=typeof(t=e),(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)===r;var t,n}},p=function(t){return function(e){return typeof e===t}},S=f("string"),h=f("object"),b=f("array"),v=(r=null,function(e){return r===e}),y=p("boolean"),w=p("number"),D=Array.prototype.push,x=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!b(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);D.apply(t,e[n])}return t},T=Object.prototype.hasOwnProperty,C=(o=function(e,t){return h(e)&&h(t)?C(e,t):t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var a=e[r];for(var i in a)T.call(a,i)&&(n[i]=o(n[i],a[i]))}return n}),U=function(){return(U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},O=("undefined"!=typeof m.window?m.window:Function("return this;")(),function(e,t,n){!function(e,t,n){if(!(S(n)||y(n)||w(n)))throw m.console.error("Invalid call to Attr.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(e.dom(),t,n)}),I=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:l(e)}},N={fromHtml:function(e,t){var n=(t||m.document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw m.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return I(n.childNodes[0])},fromTag:function(e,t){var n=(t||m.document).createElement(e);return I(n)},fromText:function(e,t){var n=(t||m.document).createTextNode(e);return I(n)},fromDom:I,fromPoint:function(e,t,n){var r=e.dom();return A.from(r.elementFromPoint(t,n)).map(I)}},P=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),L=tinymce.util.Tools.resolve("tinymce.util.Promise"),_=tinymce.util.Tools.resolve("tinymce.util.XHR"),E=function(e){return e.getParam("image_dimensions",!0,"boolean")},M=function(e){return e.getParam("images_upload_url","","string")},R=function(e){return e.getParam("images_upload_handler",undefined,"function")},z=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},H=function(e){return e=e&&e.replace(/px$/,"")},k=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},j=function(e){if(e.margin){var t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},B=function(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))},F=P.DOM,G=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?H(e.style.marginLeft):""},W=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?H(e.style.marginTop):""},q=function(e){return e.style.borderWidth?H(e.style.borderWidth):""},$=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},J=function(e,t){return e.style[t]?e.style[t]:""},X=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},V=function(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)},K=function(e){var t,n,r,a;X(e)?(a=(r=e).parentNode,F.insertAfter(r,a),F.remove(a)):(t=e,n=F.create("figure",{"class":"image"}),F.insertAfter(n,t),n.appendChild(t),n.appendChild(F.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false")},Z=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},Q=function(e,r){return function(e,t,n){e.style[t]?(e.style[t]=k(n),Z(e,r)):V(e,t,n)}},Y=function(e,t){return e.style[t]?H(e.style[t]):$(e,t)},ee=function(e,t){var n=k(t);e.style.marginLeft=n,e.style.marginRight=n},te=function(e,t){var n=k(t);e.style.marginTop=n,e.style.marginBottom=n},ne=function(e,t){var n=k(t);e.style.borderWidth=n},re=function(e,t){e.style.borderStyle=t},ae=function(e){return"FIGURE"===e.nodeName},ie=function(e){return 0===F.getAttrib(e,"alt").length&&"presentation"===F.getAttrib(e,"role")},oe=function(){return{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}},le=function(e,t){var n=m.document.createElement("img");return V(n,"style",t.style),!G(n)&&""===t.hspace||ee(n,t.hspace),!W(n)&&""===t.vspace||te(n,t.vspace),!q(n)&&""===t.border||ne(n,t.border),!J(n,"borderStyle")&&""===t.borderStyle||re(n,t.borderStyle),e(n.getAttribute("style"))},se=function(e,t){return{src:$(t,"src"),alt:ie(n=t)?"":$(n,"alt"),title:$(t,"title"),width:Y(t,"width"),height:Y(t,"height"),"class":$(t,"class"),style:e($(t,"style")),caption:X(t),hspace:G(t),vspace:W(t),border:q(t),borderStyle:J(t,"borderStyle"),isDecorative:ie(t)};var n},ue=function(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])},ce=function(e,t,n){if(n){F.setAttrib(e,"role","presentation");var r=N.fromDom(e);O(r,"alt","")}else{if(v(t)){r=N.fromDom(e);a="alt",r.dom().removeAttribute(a)}else{r=N.fromDom(e);O(r,"alt",t)}"presentation"===F.getAttrib(e,"role")&&F.setAttrib(e,"role","")}var a},me=function(r,a){return function(e,t,n){r(e,n),Z(e,a)}},de=function(e,t,n){var r,a,i,o=se(e,n);ue(n,o,t,"caption",function(e,t,n){return K(e)}),ue(n,o,t,"src",V),ue(n,o,t,"title",V),ue(n,o,t,"width",Q(0,e)),ue(n,o,t,"height",Q(0,e)),ue(n,o,t,"class",V),ue(n,o,t,"style",me(function(e,t){return V(e,"style",t)},e)),ue(n,o,t,"hspace",me(ee,e)),ue(n,o,t,"vspace",me(te,e)),ue(n,o,t,"border",me(ne,e)),ue(n,o,t,"borderStyle",me(re,e)),r=n,a=o,(i=t).alt===a.alt&&i.isDecorative===a.isDecorative||ce(r,i.alt,i.isDecorative)},ge=function(e,t){var n=e.dom.styles.parse(t),r=j(n),a=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(a)},fe=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||B(t))?null:t},pe=function(t,e){var n=t.dom,r=n.getParent(e.parentNode,function(e){return!!t.schema.getTextBlockElements()[e.nodeName]},t.getBody());return r?n.split(r,e):e},he=function(t,e){var n=function(e,t){var n=m.document.createElement("img");if(de(e,U(U({},t),{caption:!1}),n),ce(n,t.alt,t.isDecorative),t.caption){var r=F.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(F.create("figcaption",{contentEditable:"true"},"Caption")),r.contentEditable="false",r}return n}(function(e){return ge(t,e)},e);t.dom.setAttrib(n,"data-mce-id","__mcenew"),t.focus(),t.selection.setContent(n.outerHTML);var r=t.dom.select('*[data-mce-id="__mcenew"]')[0];if(t.dom.setAttrib(r,"data-mce-id",null),ae(r)){var a=pe(t,r);t.selection.select(a)}else t.selection.select(r)},be=function(t,e){var n,r,a,i,o,l=fe(t);if(de(function(e){return ge(t,e)},e,l),n=l,t.dom.setAttrib(n,"src",n.getAttribute("src")),ae(l.parentNode)){var s=l.parentNode;pe(t,s),t.selection.select(l.parentNode)}else t.selection.select(l),r=t,a=e,o=function(){i.onload=i.onerror=null,r.selection&&(r.selection.select(i),r.nodeChanged())},(i=l).onload=function(){a.width||a.height||!E(r)||r.dom.setAttribs(i,{width:String(i.clientWidth),height:String(i.clientHeight)}),o()},i.onerror=o},ve=tinymce.util.Tools.resolve("tinymce.util.Tools"),ye=function(e){return S(e.value)?e.value:""},we=function(e,a){var i=[];return ve.each(e,function(e){var t=S(e.text)?e.text:S(e.title)?e.title:"";if(e.menu!==undefined){var n=we(e.menu,a);i.push({text:t,items:n})}else{var r=a(e);i.push({text:t,value:r})}}),i},De=function(t){return void 0===t&&(t=ye),function(e){return e?A.from(e).map(function(e){return we(e,t)}):A.none()}},Ae=function(e,n){return function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n);if(r.isSome())return r}return A.none()}(e,function(e){return t=e,Object.prototype.hasOwnProperty.call(t,"items")?Ae(e.items,n):e.value===n?A.some(e):A.none();var t})},Se=De,xe=function(e){return De(ye)(e)},Te=function(e,t){return e.bind(function(e){return Ae(e,t)})};function Ce(o){var t=function(e,r,a,t){var i,n;(i=new m.XMLHttpRequest).open("POST",o.url),i.withCredentials=o.credentials,i.upload.onprogress=function(e){t(e.loaded/e.total*100)},i.onerror=function(){a("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,t,n;i.status<200||300<=i.status?a("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?r((t=o.basePath,n=e.location,t?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):a("Invalid JSON: "+i.responseText)},(n=new m.FormData).append("file",e.blob(),e.filename()),i.send(n)};return o=ve.extend({credentials:!1,handler:t},o),{upload:function(e){return o.url||o.handler!==t?(r=e,a=o.handler,new L(function(e,t){try{a(r,e,t,i)}catch(n){t(n.message)}})):L.reject("Upload url missing from the settings.");var r,a}}}var Ue=function(e){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"selectbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},Oe=function(r){var t,e,a=Se(function(e){return r.convertURL(e.value||e.url,"src")}),n=new L(function(t){var n,e;n=function(e){t(a(e).map(function(e){return x([[{text:"None",value:""}],e])}))},"string"==typeof(e=r.getParam("image_list",!1))?_.send({url:e,success:function(e){n(JSON.parse(e))}}):"function"==typeof e?e(n):n(e)}),i=xe(r.getParam("image_class_list")),o=r.getParam("image_advtab",!1,"boolean"),l=r.getParam("image_uploadtab",!0,"boolean"),s=!!M(r),u=!!R(r),c=(e=fe(t=r))?se(function(e){return ge(t,e)},e):oe(),m=r.getParam("image_description",!0,"boolean"),d=r.getParam("image_title",!1,"boolean"),g=E(r),f=r.getParam("image_caption",!1,"boolean"),p=r.getParam("a11y_advanced_options",!1,"boolean"),h=M(r),b=r.getParam("images_upload_base_path",undefined,"string"),v=r.getParam("images_upload_credentials",!1,"boolean"),y=R(r),w=r.getParam("automatic_uploads",!0,"boolean"),D=A.some(r.getParam("image_prepend_url","","string")).filter(function(e){return S(e)&&0<e.length});return n.then(function(e){return{image:c,imageList:e,classList:i,hasAdvTab:o,hasUploadTab:l,hasUploadUrl:s,hasUploadHandler:u,hasDescription:m,hasImageTitle:d,hasDimensions:g,hasImageCaption:f,url:h,basePath:b,credentials:v,handler:y,prependURL:D,hasAccessibilityOptions:p,automaticUploads:w}})},Ie=function(e){var t=e.imageList.map(function(e){return{name:"images",type:"selectbox",label:"Image list",items:e}}),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map(function(e){return{name:"classes",type:"selectbox",label:"Class",items:e}});return x([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:x([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},Ne=function(e){return{title:"General",name:"general",items:Ie(e)}},Pe=Ie,Le=function(e){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}},_e=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e["class"],caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}},Ee=function(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,"class":e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}},Me=function(e,t){var n,r,a=t.getData();n=e,r=a.src.value,(/^(?:[a-zA-Z]+:)?\/\//.test(r)?A.none():n.prependURL.bind(function(e){return r.substring(0,e.length)!==e?A.some(e+r):A.none()})).each(function(e){t.setData({src:{value:e,meta:a.src.meta}})})},Re=function(e,t){var n,r,a,i=t.getData(),o=i.src.meta;if(o!==undefined){var l=C({},i);r=l,a=o,(n=e).hasDescription&&S(a.alt)&&(r.alt=a.alt),n.hasAccessibilityOptions&&(r.isDecorative=a.isDecorative||r.isDecorative||!1),n.hasImageTitle&&S(a.title)&&(r.title=a.title),n.hasDimensions&&(S(a.width)&&(r.dimensions.width=a.width),S(a.height)&&(r.dimensions.height=a.height)),S(a["class"])&&Te(n.classList,a["class"]).each(function(e){r.classes=e.value}),n.hasImageCaption&&y(a.caption)&&(r.caption=a.caption),n.hasAdvTab&&(S(a.style)&&(r.style=a.style),S(a.vspace)&&(r.vspace=a.vspace),S(a.border)&&(r.border=a.border),S(a.hspace)&&(r.hspace=a.hspace),S(a.borderstyle)&&(r.borderstyle=a.borderstyle)),t.setData(l)}},ze=function(e,t,n,r){var a,i,o,l,s,u,c,m,d,g,f,p;Me(t,r),Re(t,r),a=e,i=t,o=n,s=(l=r).getData(),u=s.src.value,(c=s.src.meta||{}).width||c.height||!i.hasDimensions||a.imageSize(u).then(function(e){o.open&&l.setData({dimensions:e})}),m=t,d=n,f=(g=r).getData(),p=Te(m.imageList,f.src.value),d.prevImage=p,g.setData({images:p.map(function(e){return e.value}).getOr("")})},He=function(e,t,n){var r,a,i,o,l,s=j(e(n.style)),u=C({},n);return u.vspace=(r=s)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?H(String(r["margin-top"])):"",u.hspace=(a=s)["margin-right"]&&a["margin-left"]&&a["margin-right"]===a["margin-left"]?H(String(a["margin-right"])):"",u.border=(i=s)["border-width"]?H(String(i["border-width"])):"",u.borderstyle=(o=s)["border-style"]?String(o["border-style"]):"",u.style=(l=t)(e(l(s))),u},ke=function(s,u,t,c){var e,n=c.getData();c.block("Uploading image"),(0===(e=n.fileinput).length?A.none():A.some(e[0])).fold(function(){c.unblock()},function(n){var r,a=m.URL.createObjectURL(n),i=Ce({url:u.url,basePath:u.basePath,credentials:u.credentials,handler:u.handler}),o=function(){c.unblock(),m.URL.revokeObjectURL(a)},l=function(e){c.setData({src:{value:e,meta:{}}}),c.showTab("general"),ze(s,u,t,c)};r=n,new L(function(e,t){var n=new m.FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(r)}).then(function(e){var t=s.createBlobCache(n,a,e);u.automaticUploads?i.upload(t).then(function(e){l(e),o()})["catch"](function(e){o(),s.alertErr(c,e)}):(s.addToBlobCache(t),l(t.blobUri()),c.unblock())})})},je=function(h,b,v){return function(e,t){var n,r,a,i,o,l,s,u,c,m,d,g,f,p;"src"===t.name?ze(h,b,v,e):"images"===t.name?(c=h,m=b,d=v,f=(g=e).getData(),(p=Te(m.imageList,f.images)).each(function(e){""===f.alt||d.prevImage.map(function(e){return e.text===f.alt}).getOr(!1)?""===e.value?g.setData({src:e,alt:d.prevAlt}):g.setData({src:e,alt:e.text}):g.setData({src:e})}),d.prevImage=p,ze(c,m,d,g)):"alt"===t.name?v.prevAlt=e.getData().alt:"style"===t.name?(o=h,s=(l=e).getData(),u=He(o.parseStyle,o.serializeStyle,s),l.setData(u)):"vspace"===t.name||"hspace"===t.name||"border"===t.name||"borderstyle"===t.name?(n=h,r=e,a=C(_e(b.image),r.getData()),i=le(n.normalizeCss,Ee(a,!1)),r.setData({style:i})):"fileinput"===t.name?ke(h,b,v,e):"isDecorative"===t.name&&(e.getData().isDecorative?e.disable("alt"):e.enable("alt"))}},Be=function(i){return function(e){var t,n,r,a={prevImage:Te((t=e).imageList,t.image.src),prevAlt:t.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=e).hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:x([[Ne(r)],r.hasAdvTab?[Ue(r)]:[],r.hasUploadTab&&(r.hasUploadUrl||r.hasUploadHandler)?[Le(r)]:[]])}:{type:"panel",items:Pe(r)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:_e(e.image),onSubmit:i.onSubmit(e),onChange:je(i,e,a),onClose:(n=a,function(){n.open=!1})}}},Fe=function(t){return function(e){return a=t.documentBaseURI.toAbsolute(e),new L(function(t){var n=m.document.createElement("img"),r=function(e){n.parentNode&&n.parentNode.removeChild(n),t(e)};n.onload=function(){var e={width:z(n.width,n.clientWidth),height:z(n.height,n.clientHeight)};r(L.resolve(e))},n.onerror=function(){r(L.reject("Failed to get image dimensions for: "+a))};var e=n.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left="0px",e.width=e.height="auto",m.document.body.appendChild(n),n.src=a}).then(function(e){return{width:String(e.width),height:String(e.height)}});var a}},Ge=function(t){var n,r,a,i,o,l,s,e={onSubmit:function(n){return function(e){var t=C(_e(n.image),e.getData());s.execCommand("mceUpdateImage",!1,Ee(t,n.hasAccessibilityOptions)),s.editorUpload.uploadImagesAuto(),e.close()}},imageSize:Fe(s=t),addToBlobCache:function(e){l.editorUpload.blobCache.add(e)},createBlobCache:function(e,t,n){return o.editorUpload.blobCache.create({blob:e,blobUri:t,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,base64:n.split(",")[1]})},alertErr:function(e,t){i.windowManager.alert(t,e.close)},normalizeCss:function(e){return ge(a,e)},parseStyle:function(e){return r.dom.parseStyle(e)},serializeStyle:(n=r=a=i=o=l=t,function(e,t){return n.dom.serializeStyle(e,t)})},u=function(){return Oe(t).then(Be(e)).then(function(e){return t.windowManager.open(e)})};return{open:u,openLater:function(){u()}}},We=function(n){n.addCommand("mceImage",Ge(n).openLater),n.addCommand("mceUpdateImage",function(e,t){n.undoManager.transact(function(){return function(t,e){var n=fe(t);if(n){var r=se(function(e){return ge(t,e)},n),a=U(U({},r),e);a.src?be(t,a):function(e,t){if(t){var n=e.dom.is(t.parentNode,"figure.image")?t.parentNode:t;e.dom.remove(n),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}}(t,n)}else e.src&&he(t,U(U({},oe()),e))}(n,t)})})},qe=function(i){return function(e){for(var t,n=e.length,r=function(e){e.attr("contenteditable",i?"true":null)};n--;){var a=e[n];(t=a.attr("class"))&&/\bimage\b/.test(t)&&(a.attr("contenteditable",i?"false":null),ve.each(a.getAll("figcaption"),r))}}};!function $e(){a.add("image",function(e){var t,n;(t=e).on("PreInit",function(){t.parser.addNodeFilter("figure",qe(!0)),t.serializer.addNodeFilter("figure",qe(!1))}),(n=e).ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:Ge(n).openLater,onSetup:function(e){return n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),n.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:Ge(n).openLater}),n.ui.registry.addContextMenu("image",{update:function(e){return ae(e)||"IMG"===e.nodeName&&!B(e)?["image"]:[]}}),We(e)})}()}(window);