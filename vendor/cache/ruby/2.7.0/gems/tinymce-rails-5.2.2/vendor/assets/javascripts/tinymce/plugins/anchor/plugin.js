/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.2 (2020-04-23)
 */
!function(){"use strict";function o(t,e){return"A"===e.tagName&&""===t.dom.getAttrib(e,"href")}function e(o){return function(t){for(var e=0;e<t.length;e++)(n=t[e]).attr("href")||!n.attr("id")&&!n.attr("name")||n.firstChild||t[e].attr("contenteditable",o);var n}}var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=function(t){return/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t)},r=function(t){var e=t.selection.getNode();return o(t,e)?e.getAttribute("id")||e.getAttribute("name"):""},i=function(t,e){var n=t.selection.getNode();o(t,n)?(n.removeAttribute("name"),n.id=e,t.undoManager.add()):(t.focus(),t.selection.collapse(!0),t.insertContent(t.dom.createHTML("a",{id:e})))},a=function(e){var t=r(e);e.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:t},onSubmit:function(t){!function(t,e){return n(e)?(i(t,e),!0):(t.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),!1)}(e,t.getData().id)||t.close()}})},c=function(t){t.addCommand("mceAnchor",function(){a(t)})},u=function(t){t.on("PreInit",function(){t.parser.addNodeFilter("a",e("false")),t.serializer.addNodeFilter("a",e(null))})},d=function(e){e.ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:function(){return e.execCommand("mceAnchor")},onSetup:function(t){return e.selection.selectorChangedWithUnbind("a:not([href])",t.setActive).unbind}}),e.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:function(){return e.execCommand("mceAnchor")}})};!function l(){t.add("anchor",function(t){u(t),c(t),d(t)})}()}();