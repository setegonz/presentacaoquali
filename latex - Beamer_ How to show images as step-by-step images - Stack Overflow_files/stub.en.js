"use strict";function IsMalwareProxy(){try{return window.location.host.endsWith(".duapp.com")||window.location.host.endsWith(".25lm.com")}catch(e){return!1}}if(window.StackExchange={},window.jQuery&&!function(e){var t=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{"browser":t[1]||"","version":t[2]||"0"}};if(!e.browser){var n=t(navigator.userAgent),i={};n.browser&&(i[n.browser]=!0,i.version=n.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0),e.browser=i}}(jQuery),top!=self)throw top.location.replace(document.location),$(function(){$("head").add("body").remove()}),alert("For security reasons, framing is not allowed; click OK to remove the frames."),new Error;if(StackExchange.init=function(){function e(){$(document).on("click",".convert-to-post",function(e){e.preventDefault();var t=$(this).attr("data-confirm");if(!t||confirm(t)){var n=$("<form method='post'/>").attr("action",$(this).attr("href")).appendTo("body");n.append($("<input type='hidden' name='fkey' />").attr("value",$(this).attr("data-fkey"))).submit()}})}function t(){function e(e){StackExchange.options.user.fkey!==e&&(StackExchange.options.user.fkey=e,$("input[name=fkey]").val(e))}function t(e,t){try{localStorage.setItem(i,e+","+t)}catch(n){}}function n(){var e=localStorage.getItem(i);if(!e)return{"time":0};var t=e.split(/,/);return{"fkey":t[0],"time":parseInt(t[1],10)}}var i="se:fkey";$(window).on("storage",function(t){t=t.originalEvent,t.key==i&&t.newValue&&e(t.newValue.split(/,/)[0])});try{var r=StackExchange.options.user.fkey,o=n();o.fkey!==r&&(StackExchange.options.serverTime>o.time?t(r,StackExchange.options.serverTime):e(o.fkey))}catch(a){}}function n(){function e(e){var t=r.filter('[data-name="'+e+'"]');r.removeClass("_visible"),t.addClass("_visible")}var t=$(".js-category-trigger"),n=$(".js-footer"),i=$(".js-back"),r=$(".js-category");t.on("click",function(i){i.preventDefault();var r=$(this).data("target");t.removeClass("_active"),$(this).addClass("_active"),n.addClass("_is-category-open"),e(r)}),i.on("click",function(i){i.preventDefault(),t.removeClass("_active"),n.removeClass("_is-category-open"),e("default")})}var i=function(e){if(!window.jQuery){if("complete"!=document.readyState)return setTimeout(function(){i(e)},1e3),void 0;var t=document.createElement("div");t.id="noscript-warning",t.innerHTML=function(e){return e.siteName+" requires external JavaScript from another domain, which is blocked or failed to load."}({"siteName":e}),document.body.appendChild(t);var n=document.getElementById("noscript-css");if(!n)return;var r=document.createElement("div");r.innerHTML=n.innerText,document.head.appendChild(r.getElementsByTagName("style")[0])}},r=function(){var e=function(t,n){if(t){var i=$(t).filter(":not(.popup-stack-hidden)");if(!i.length)return;i.each(function(e,t){var n=$(t),r=n.data("_popup"),o=n.data("_lightbox");r&&(i=i.add(r)),o&&(i=i.add(o))}),i=$($.unique(i.get())),i=i.not(".popup-closing").addClass("popup-closing");var r={"closeTrigger":n},o=$.Event("popupClosing",r);if(i.trigger(o),o.isDefaultPrevented())return i.removeClass("popup-closing"),void 0;i=i.not(".popup-closed").addClass("popup-closed"),i.filter(":not(.esc-hide)").fadeOutAndRemove(),i.filter(".esc-hide").fadeOut("fast",function(){i.removeClass("popup-closing").removeClass("popup-closed")}),i.trigger("popupClose",r)}else StackExchange.topbar&&StackExchange.topbar.hideAll(),e(".lightbox:not(.no-auto-close), .message-dismissable, .popup:not(.no-auto-close), .share-tip, .esc-remove, .esc-hide","esc")};$(document).keyup(function(t){27==t.which&&e()}),$("body").mousedown(function(t){var n=$(t.target);if(!n.closest(".ac_results, .popup, .wmd-prompt-dialog, .message, .modal, .body-click-hide").length){var i="click outside";if(n.closest(".share-tip").length||e(".share-tip",i),1==t.which){if(n.is(".wmd-prompt-background"))return e(".wmd-prompt-dialog, .wmd-prompt-background, .popup#image-upload",i),void 0;n.closest(".popup, .modal").length||e(".popup:not(.no-auto-close), .lightbox:not(.no-auto-close), .modal:not(.no-auto-close)",i),n.closest(".message-config").length||e(".message-config.message-dismissable",i),n.closest(".body-click-hide").length||e(".esc-hide")}}}),$(document).bind("closePopups",function(t){e(t.selectorToClose,t.closeTrigger)});var t=[];$(document).on("popupLoad",function(e){var n=e.popup;if(e.lightbox)for(var i=0;i<t.length;i++)t[i].css("display","none").addClass("popup-stack-hidden");var r=n.data("_lightbox");r&&(n=n.add(r)),n.data("popup-stack-index",t.length),t.push(n)}).on("popupClosing",function(n){if(!n.isDefaultPrevented()){var i,r=$(n.target).data("popup-stack-index");if(null!=r&&!isNaN(r)){for((0>r||r>=t.length)&&StackExchange.debug.log("popupStack index out of bounds");t.length>r;)i=t.pop(),i.data("popup-stack-index",null),e(i,n.closeTrigger);for(;r>0&&(i=t[--r],i.removeClass("popup-stack-hidden").css("display","block"),!i.filter(".lightbox").length););}}})};return function(o,a){StackExchange.options=o,StackExchange.settings=a,o.serverTimeOffsetSec=o.serverTime-(new Date).getTime()/1e3,i(o.site.name),$.ajaxSetup({"cache":!1}),StackExchange.init.createJqueryExtensions(),o.enableLogging=(o.user.isEmployee||o.isDebugBuild)&&"undefined"!=typeof console&&"undefined"!=typeof console.log,$(function(){IsMalwareProxy()&&(window.location.href="https://stackexchange.com/about/malware?host="+window.location.hostname),r(),t(),e(),n(),StackExchange.using(StackExchange.options.user.isAnonymous?"anonymous":"loggedIn",function(){StackExchange.initialized.resolve()},!0,o.fullPostfix);var i=StackExchange.settings.site.styleCodeAdditionalLang;i&&StackExchange.ifUsing("prettify",function(){return StackExchange.loadJsFile("third-party/prettify/additional-langs/"+i)}),StackExchange.ready(function(){o.user.messages&&StackExchange.notify.showMessages(o.user.messages,o.isMobile),a.site.enableUserHovercards&&StackExchange.usermenu.init(),o.site.universalAuthDisabled||UniversalAuth.performAuth(),StackExchange.tagPreferences?StackExchange.tagPreferences.init():StackExchange.tagmenu.init(),o.timingsGuid&&$(window).on("load",function(){setTimeout(StackExchange.processTimings,50)}),$("*[data-tracker]").track(),StackExchange.bindShowMoreHotNetworkQuestions();var e=function(){var e=!1;$("body > script:not([src])").each(function(){return this.textContent.length>4e4&&/currentSelectable/.test(this.textContent)?(e=!0,!1):void 0}),(e||o.user.keyboardShortcuts)&&StackExchange.using("keyboardShortcuts",function(){StackExchange.keyboardShortcuts.init(e)})};document.readyState&&"complete"!==document.readyState?$(window).on("load",function(){setTimeout(e,10)}):setTimeout(e,10),StackExchange.showFlashMessageIfAny()})})}}(),StackExchange.debug={"log":function(){},"init":function(){this.log=function(e){$(function(){var t=$("#debug-messages");t.length||(t=$("<div id='debug-messages' style='text-align:left;position:fixed;top:50px;left:50px;z-index:1000;background:white;border:2px solid black;width:300px;padding:10px;' />").append($("<span style='cursor:pointer;color:#999'>(close debug messages)</span>").click(function(){$("#debug-messages").remove()})).appendTo("body")),$("<div style='margin-top:10px' />").text(e).appendTo(t)})}}},StackExchange.initialized=$.Deferred(),StackExchange.ready=function(e){StackExchange.initialized.done(e)},window.serq)for(var i=0;i<window.serq.length;i++)StackExchange.ready(window.serq[i]);!function(){var e,t={"anonymous":"full-anon.js","loggedIn":"full.js","prettify":"prettify-full.js","pseudoModerator":"moderator.js","inlineEditing":"full.js","beginEditEvent":"full.js","editor":"wmd.js","externalEditor":"external-editor.js","autocomplete":"third-party/jquery.autocomplete.min.js","tagAutocomplete":"tageditor.js","tagEditor":"tageditornew.js","tagSuggestions":"tagsuggestions.js","mobile":"mobile.js","help":"help.js","inlineTagEditing":"inline-tag-editing.js","mathjaxEditing":"mathjax-editing.js","mathjaxEditingBeta":"mathjax-editing.beta.js","revisions":"revisions.js","mockups":"external-editor.js","schematics":"external-editor.js","snippets":"snippet-javascript.js","snippetsJsCodeMirror":"snippet-javascript-codemirror.js","review":"review.js","translation":"full.js","gps":"full-anon.js","postValidation":"post-validation.js","exploreQuestions":"explore-qlist.js","eventCharts":"events.js","virtualKeyboard":"virtual-keyboard.js","keyboardShortcuts":"keyboard-shortcuts.js","adops":"adops.js"},n={},i={},r={},o={},a={},s=function(e,t){return function(n){var i=e[n];return i||(i=e[n]=t(n)),i}},c=function(e){var t,n,i=r[e],o=$.Deferred(),a=$.when(o);if(i)for(var t=0;t<i.length;t++)n=i[t].call(null),n&&$.isFunction(n.promise)&&(a=$.when(a,n));return o.resolve(),a},l=function(){if(!e){var t=$("script[src]").filter(function(){return/stub.*\.js/.test($(this).attr("src"))}).first();0==t.length?(StackExchange.debug.log("couldn't figure out location of stub.js"),e="/content/js/"):e=t.attr("src").replace(/\/stub.*\.js.*$/,"/")}return e},u=function(e){var t=a["js/"+e];return t?"?v="+t:(StackExchange.debug.log("no cache breaker for "+e),"")},d=function(e){return e&&StackExchange.options.locale&&-1==e.indexOf("third-party")&&(e=e.replace(/^(.*)(\.js)(\?.*)?$/,"$1."+StackExchange.options.locale+"$2$3")),e},f=function(e,t){var n=$.Deferred(),i=document.createElement("script");return i.async="async",i.src=t?e:d(e),i.onload=i.onreadystatechange=function(e,t){(!i.readyState||/loaded|complete/.test(i.readyState))&&(t?n.reject():n.resolve())},i.onerror=function(){n.reject()},$("head")[0].appendChild(i),n.promise()},p=function(e){var n=t[e];return n?h(n):$.Deferred().reject().promise()},h=s(i,function(e){return f(l()+e+u(d(e)))}),g=s(n,function(e){function t(){return(i=StackExchange[e])?(c(e).done(function(){n.resolve()}),void 0):r>0?(r--,StackExchange.debug.log("retrying "+e),setTimeout(t,20),void 0):(StackExchange.debug.log("object StackExchange."+e+" not available although file was loaded"),n.reject(),void 0)}var n=$.Deferred(),i=StackExchange[e],r=3;return i?n.resolve():p(e).done(t).fail(n.reject),n.promise()}),m=$.Deferred(),v=function(e,n,i,r){if(!i&&"resolved"!==m.state())return m.done(function(){v(e,n)}),void 0;if(i)for(var o in t)t.hasOwnProperty(o)&&(t[o]=t[o].replace(/^(full(?:-anon)?).js$/,"$1"+(r||"")+".js"));var a=g(e);return i?m.resolve():a=$.when(a,StackExchange.initialized),a.done(function(){n()}).fail(function(){StackExchange.debug.log("failed to provide object "+e)}),a};v.setCacheBreakers=function(e){for(var t in e)e.hasOwnProperty(t)&&(a[t]=e[t])};var b=function(e,t,n){if("undefined"!=typeof n){if(o["u_"+n])return;o["u_"+n]=!0}if(StackExchange[e])return t(),void 0;var i=r[e];i||(i=r[e]=[]),i.push(t)};StackExchange.using=v,StackExchange.ifUsing=b,StackExchange.loadJsFile=function(e,t){return f(l()+e,t)}}(),String.prototype.formatUnicorn=function(){var e=this.toString();if(!arguments.length)return e;var t=typeof arguments[0],n="string"==t||"number"==t?Array.prototype.slice.call(arguments):arguments[0];for(var i in n)e=e.replace(new RegExp("\\{"+i+"\\}","gi"),n[i]);return e},String.prototype.truncate=function(e,t){var n=this.toString();return e&&n.length>e&&(n=n.substr(0,e)+t),n},String.prototype.splitOnLast=function(e){var t=this.lastIndexOf(e);return 0>t?[this]:[this.substr(0,t),this.substr(t)]},String.prototype.contains=function(e){return this.indexOf(e)>-1},String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),StackExchange.init.createJqueryExtensions=function(){var e=StackExchange.helpers;$.extend($.expr[":"],{"working":function(e){var t=$(e).data("working");return"undefined"!=typeof t&&t},"data":function(e,t,n){var i=n[3],r=$(e).data(i);switch(typeof r){case"undefined":return!1;case"boolean":return r;case"object":return null!==r}return!0},"containsCI":function(e,t,n){return jQuery(e).text().toUpperCase().indexOf(n[3].toUpperCase())>=0},"viewport":function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}}),$.fn.extend({"working":function(e){return this.each(function(){$(this).data("working",e)})},"track":function(){return this.each(function(){var e=$(this),t=e.is("a[href]")?e:e.find("a[href]"),n=e.data("tracker");t.each(function(){var e=this.href.splitOnLast("#"),t=e[0];t+=(t.contains("?")?"&":"?")+n+(e[1]||""),this.href=t})})},"fadeOutAndRemove":function(){return this.each(function(){var e=$(this);e.fadeOut("fast",function(){e.trigger("removing").remove()})})},"charCounter":function(t){return this.each(function(){var n=t.target?$(t.target):$(this).parents("form").find("span.text-counter"),i=this,r=function(){var e=t.min,r=t.max,o=(t.setIsValid||function(){}).bind(i),a=0;i.value&&(a=t.ignoreWhitespace?i.value.replace(/\s+/g," ").replace(/^\s+/,"").replace(/\s+$/,"").length:i.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n").length);var s=a>.8*r?"supernova":a>.6*r?"hot":a>.4*r?"warm":"cool",c="";if(0==a)0==e?(c=function(e){return 1==e.max?"enter up to "+e.max+" character":"enter up to "+e.max+" characters"}({"max":r}),o(!0)):(c=function(e){return 1==e.min?"enter at least "+e.min+" character":"enter at least "+e.min+" characters"}({"min":e}),o(!1));else if(e>a)c=function(e){return 1==e.count,e.count+" more to go..."}({"count":e-a}),o(!1);else{var l=r-a;c=l>=0?function(e){return 1==e.count?e.count+" character left":e.count+" characters left"}({"count":l}):function(e){return 1==e.count?"too long by "+e.count+" character":"too long by "+e.count+" characters"}({"count":Math.abs(l)}),o(r>=a)}n.text(c),n.hasClass(s)||n.removeClass("supernova hot warm cool").addClass(s)};$(this).bind("blur focus keyup paste charCounterUpdate",e.DelayedReaction(r,100,{"sliding":!0}).trigger)})},"selectRange":function(e,t){return this.each(function(){if(this.setSelectionRange)this.focus(),this.setSelectionRange(e,t);else if(this.createTextRange){var n=this.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select()}})},"addSpinner":function(t){return this.each(function(){e.addSpinner(this,t)})},"addSpinnerAfter":function(t){return this.each(function(){$(this).after(e.getSpinnerImg(t))})},"addSpinnerBefore":function(t){return this.each(function(){$(this).before(e.getSpinnerImg(t))})},"removeSpinner":function(){return this.each(function(){$(this).find("img.ajax-loader").remove()})},"showErrorMessage":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showErrorPopup":function(t,n){return this.each(function(){e.showErrorMessage(this,t,n)})},"showInfoMessage":function(t,n){return this.each(function(){e.showInfoMessage(this,t,n)})},"center":function(e){if(StackExchange.options.isMobile)return this;e=e||{};var t=this.parent();"static"===t.css("position")&&(t=t.offsetParent());var n=t.offset(),i=$(window),r=e.top||Math.max((i.height()-this.outerHeight())/2+i.scrollTop()-StackExchange.scrollPadding.getPaddingTop()-n.top+(e.dy||0),65);this.css("position","absolute"),this.css("top",r+"px");var o=Math.max(20,(i.width()-this.outerWidth())/2+i.scrollLeft()-n.left);this.css("left",o+"px");var a="calc(50% - "+this.outerWidth()/2+"px)";return this.css("left",a),this.css("left","-webkit-"+a),this},"helpOverlay":function(){return e.bindHelpOverlayEvents(this),this},"hideHelpOverlay":function(){return e.hideHelpOverlay(this),this},"enable":function(){return 0==arguments.length||arguments[0]?this.removeAttr("disabled").css("cursor","pointer").removeClass("disabled-button"):this.attr("disabled","disabled").css("cursor","default").addClass("disabled-button"),this},"disable":function(){return this.enable(!1)},"checked":function(e){return e?this.attr("checked","checked"):this.removeAttr("checked"),this},"loadPopup":function(t){var n=$.Deferred(),i=this,r=t.target||i.parent();if(!t.html&&!t.noSpinner){var o=t.addSpinnerFn||$.fn.addSpinnerAfter;o.call(i,{"padding":"0 3px"})}t.loaded&&n.done(t.loaded);var a=function(o){var a,s=$(o).elementNodesOnly();s.find(".popup-actions-cancel, .popup-close a, .modal-close").click(function(){StackExchange.helpers.closePopups(a?s.add(a):s)}),s.find("input:radio[disabled=disabled] + label.action-label").addClass("action-disabled"),t.hideDescriptions&&s.find("ul.action-list > li:not(.action-selected) .action-desc").hide();var c=s.find("input:radio:not(.action-subform input)");c.closest("li").bind("hide-action",function(){var e=$(this),n=".action-subform"+(t.hideDescriptions?", .action-desc":"");e.removeClass("action-selected").find(n).slideUp("fast")}).bind("show-action",function(e){var n=$(this);return n.hasClass("action-selected")?(e.stopImmediatePropagation(),void 0):(n.siblings(".action-selected").trigger("hide-action"),n.addClass("action-selected").find(".action-subform").slideDown("fast",function(){if(t.subformShow&&t.subformShow($(this)),t.subformFocusInput){var e=$(this).find("input[type=text], textarea").not(".actual-edit-overlay").eq(0);e.length&&e.focus()}}),t.hideDescriptions&&n.find(".action-desc").slideDown("fast"),t.actionSelected&&t.actionSelected(n),s.find(".popup-submit").enable(),void 0)}).filter(".show-action-onload").each(function(){var e=$(this);n.done(function(){e.find("input[type=radio]").click()})}),c.on("click",function(){$(this).closest("li").trigger("show-action")}),(t.insert||function(e){t.prepend?e.prependTo(r):e.appendTo(r)})(s),t.lightbox&&(a=StackExchange.helpers.addLightbox().data("_popup",s),s.css("z-index",+a.css("z-index")+1).data("_lightbox",a)),n.resolveWith(i,[s,a]),r.trigger($.Event("popupLoad",{"popup":s,"lightbox":a}));var l=function(){};if(t.subformShow){var u=s.find("li.action-selected .action-subform");u.length>0&&(l=function(){u.each(function(){t.subformShow($(this))})})}t.dontShow||(s.center().fadeIn("fast",l),a&&a.fadeIn("fast")),e.bindMovablePopups()};return t.html?a(t.html):$.ajax({"type":"GET","url":t.url,"dataType":"html","data":t.data,"success":a,"error":function(e){var i=e.responseText&&e.responseText.length<200?e.responseText:t.defaultErrorMessage||"Unable to load popup - please try again";(t.errorTarget||r).showErrorMessage(i,{"transient":409==e.status}),n.reject(i)},"complete":e.removeSpinner}),n.promise()},"asyncLoad":function(e){return e=$.extend({"callback":null,"cache":{}},e),this.each(function(){var t=".async-load",n=$(this),i=n.find(t);n.is(t)&&(i=i.add(n)),i.each(function(){var t=$(this),n=t.data("load-url")||"";if(n&&!t.is(":working")){t.working(!0).addSpinner();var i=function(n){t.html(n).removeClass("async-load").mathjax();var i=t.data("after-load")||"";if(i||e.callback){for(var r,o=i.split("."),a=0;a<o.length;a++)r=(r||window)[o[a]];r=r||e.callback,"function"==typeof r&&r(t)}},r=e.cache[n];r?window.setTimeout(function(){i(r)},0):$.ajax({"type":"GET","url":n,"dataType":"html"}).done(function(t){e.cache[n]=t,i(t)}).fail(function(){t.removeSpinner().showErrorMessage("An error has occurred; please try again")})}})})},"mathjax":function(){return this.each(function(){"undefined"!=typeof MathJax&&MathJax.Hub.Typeset(this)})},"elementNodesOnly":function(){return this.filter(function(){return 1===this.nodeType})},"scrollIntoView":function(){var e=this.first();return e.is(":viewport")||$("body").animate({"scrollTop":e.offset().top},100),this},"outerHTML":function(){return $("<div>").append(this.eq(0).clone()).html()}})},StackExchange.helpers=function(){function e(e,t,n){for(var i=0;i<n.length;i++){var r=n[i];try{if(/\*/.test(r))for(var o=0;4>o;o++){var a=r.replace(/\*/g,c[o]),s=e.css(a);t.css(a,s)}else t.css(r,e.css(r))}catch(l){}}}function t(t,n,i,r){if(t.is(":visible")){var o=$.browser.msie?0:.4;if(!i())return t.css("opacity",1).css("filter","").removeClass("edit-field-overlayed"),void 0;t.css("opacity",o+(r?.2:0)),t.addClass("edit-field-overlayed");var a=t.prev(".actual-edit-overlay");if(0==a.length){var c=$.trim(s(t).html()),l=t.width(),u=t.height();a=t.clone().prop("className","actual-edit-overlay").attr("name",null).attr("id",null).attr("disabled","disabled").css({"position":"absolute","backgroundColor":"white","color":"black","-webkit-text-fill-color":"black","opacity":1,"width":l,"height":u}),a.is("textarea,input")?(a.val(c),e(n,a,["line-height"])):a.html(c).css("line-height",u+"px").prepend("&nbsp;"),e(n,a,["font-family","font-size","text-align"]),e(t,a,["border-*-style","border-*-color","border-*-width"]),t.css({"zIndex":1,"position":"relative"}),a.insertBefore(t);var d=t.offset().top-a.offset().top;if(0!=d){var f=parseInt(a.css("margin-top")),p=f+d;t.is("textarea")||(p=parseInt(a.prevAll(":visible").eq(0).css("margin-bottom"))+f),a.css("margin-top",p)}var h=t.offset().left-a.offset().left;if(0!=h){var g=parseInt(a.css("margin-left"));a.css("margin-left",g+h)}}}}function n(e,t){$(e).find("input[type='submit']").prop("disabled",t)}var i,r,o,a=function(){if(!StackExchange.options.isMobile){var e=function(){i=r=null,$("body").removeAttr("style")},t=$("div.popup");t.each(function(e,t){var n=$(t).find(".handle");n.length&&(n.css({"cursor":"move"}),n.unbind("mousedown").bind("mousedown",function(e){var n=$(t).offset();r={"x":n.left-e.pageX,"y":n.top-e.pageY},i=$(t);var o=i.offset();i.offset(o).offset(o),$("body").attr("style","cursor:move"),e.preventDefault()}))}),o||(o=!0,$(document).on("mousemove",function(e){if(i){var t=e.pageY+r.y,n=e.pageX+r.x;i.offset({"top":t,"left":n})}}).on("keypress",e).on("mouseup",e))}},s=function(e){return e.parent().find("span.edit-field-overlay")},c=["left","right","top","bottom"],l={"addLightbox":function(){return $('<div class="lightbox"/>').appendTo($("body")).css("height",$(document).height())},"bindMovablePopups":a,"genericBindOverlayEvents":function(e,n,i){StackExchange.options.isMobile||n.not("[placeholder]").bind("keydown contextmenu",function(){l.hideHelpOverlay(e)}).focus(function(){t(e,n,i,!0)}).on("blur change",function(){t(e,n,i)}).each(function(){t(e,n,i)})},"bindHelpOverlayEvents":function(e){e.each(function(){var e=$(this);l.genericBindOverlayEvents(e,e,function(){return""===e.val()})})},"hideHelpOverlay":function(e){e.css("opacity",1),e.css("filter",""),e.removeClass("edit-field-overlayed")},"onClickDraftSave":function(e){return $(e).click(function(e){if(null!=StackExchange.cardiologist){e.preventDefault();var t=this.href;return StackExchange.cardiologist.ensureDraftSaved(function(){window.onbeforeunload=null,window.location.href=t}),!1}}),!0},"showMessage":function(e,t,n){if(e=$(e),e.length){var i={"messageElement":null,"position":"inside","dismissable":!0,"type":"error","closeOthers":!0,"shown":function(){},"relativeToBody":!1,"lightbox":!1,"stopBodyScroll":!1,"fixedTo$elem":!1,"slideDown":!1},r=$.extend({},i,n),o=9;r.closeOthers&&$(".message").fadeOutAndRemove();var a=$('<div class="message"><div class="message-inner"><div class="message-text"></div></div></div>'),s=a.find(".message-inner"),c=a.find(".message-text");if(a.addClass("message-"+r.type),r.cssClass&&a.addClass(r.cssClass),r.messageElement?c.append(r.messageElement):c.html(t),r.dismissable&&(a.addClass("message-dismissable"),c.css("padding-right","48px"),s.prepend($("<div />",{"title":r.closeTitle||"close this message (or hit Esc)","class":"message-close","text":"×"})),a.click(function(e){var t=$(e.target),n=r.dismissable===!0&&!t.is("a")||"x-or-esc"===r.dismissable&&t.is(".message-close, .message-close-inner");n&&(r.dismissing&&r.dismissing(),a.fadeOutAndRemove(),r.lightbox&&$(".lightbox").fadeOutAndRemove())})),r.dismissing&&a.on("popupClose",function(e,t){"esc"==t.closeTrigger&&r.dismissing()}),r.css&&a.css(r.css),"inside"===r.position||"inline"===r.position||"toast"===r.position||r.tip||(r.tip=r.position.my),r.tip&&s.addClass("message-tip message-tip-"+r.tip.replace(" ","-")),"inline"===r.position)e.append(a);else if("inside"===r.position)a.css("position","absolute"),e.append(a);else if("toast"===r.position)a.addClass("toast").appendTo(e);else{a.css("position","absolute");var l=r.relativeToBody?$("body"):e.offsetParent();l.append(a);var u,d=r.relativeToBody?e.offset():e.position(),f=e.outerWidth(!0),p=e.outerHeight(!0),h=a.outerWidth(),g=a.outerHeight(),m=f-e.outerWidth(!1),v=m/2;switch(r.position.at){case"top left":u={"top":0,"left":0};break;case"top center":u={"top":0,"left":f/2+v};break;case"top right":u={"top":0,"left":f};break;case"right top":u={"top":0,"left":f};break;case"right center":u={"top":p/2,"left":f};break;case"right bottom":u={"top":p,"left":f};break;case"bottom right":u={"top":p,"left":f};break;case"bottom center":u={"top":p,"left":f/2+v};break;case"bottom left":u={"top":p,"left":0};break;case"left bottom":u={"top":p,"left":0};break;case"left center":u={"top":p/2,"left":0};break;case"left top":u={"top":0,"left":0}}var b;switch(r.position.my){case"left top":b={"top":0,"left":-o};break;case"top left":b={"top":-o,"left":0};break;case"top center":b={"top":-o,"left":h/2+o};break;case"top right":b={"top":-o,"left":h};break;case"right top":b={"top":0,"left":h+o};break;case"right bottom":b={"top":g,"left":h+o};break;case"bottom right":b={"top":g+o,"left":h};break;case"bottom center":b={"top":g+o,"left":h/2+o};break;case"bottom left":b={"top":g+o,"left":0};break;case"left bottom":b={"top":g,"left":-o}}var y={"left":d.left+u.left-b.left,"top":d.top+u.top-b.top};if(a.data("initialTop",y.top),a.animateOffsetTop=function(e){a.animate({"top":a.data("initialTop")+e})},r.position.offsetTop&&(y.top+=r.position.offsetTop),r.position.offsetLeft&&(y.left+=r.position.offsetLeft),a.css({"top":y.top,"left":y.left}),r.fixedTo$elem){var w=null,x=e.offset(),k=$(window).width(),S="resize.message scroll.message";$(window).on(S,function(){w=w||a.offset();var t=e.offset().top-x.top,n=$(window).width()-k;a.offset({"top":w.top+t,"left":w.left+n/2})}),a.on("removing",function(){$(window).off(S)})}}if(r.showing&&r.showing(),r.lightbox){var E=$("body"),C=$('<div class="lightbox"/>').appendTo(E).css("height",$(document).height()).fadeIn();r.stopBodyScroll&&E.addClass("stop-scrolling"),a.on("removing",function(){C.fadeOutAndRemove(),r.stopBodyScroll&&E.removeClass("stop-scrolling")})}if(r.slideDown){var T=500,_=e.css("margin-top"),I=e.css("margin-bottom");e.css("margin-top",0),e.css("margin-bottom",0),a.css("height",0),e.css("display","block"),a.css("display","block"),e.animate({"margin-top":_,"margin-bottom":I},T),a.animate({"height":a.get(0).scrollHeight},T)}else a.fadeIn(r.shown);if(r.transient){var M=n.transientTimeout||Math.max(2500,t.length*("jp"===StackExchange.options.locale?80:40));setTimeout(function(){a.fadeOutAndRemove()},M)}return r.removing&&a.on("removing",r.removing),StackExchange.options.enableLogging&&a.data("settings",r),a}},"showErrorMessage":function(e,t,n){var i={"position":"inside","type":"error"},r=$.extend({},i,n);return this.showMessage(e,t,r)},"showErrorPopup":function(e,t,n){return this.showErrorMessage(e,t,n)},"showInfoMessage":function(e,t,n){var i={"position":"inside","transient":!0,"type":"info"},r=$.extend({},i,n);return this.showMessage(e,t,r)},"showSuccessMessage":function(e,t,n){var i={"type":"success","position":"toast","transient":!0,"transientTimeout":1e4},r=$.extend({},i,n);return this.showMessage(e,t,r)},"showBannerMessage":function(e,t){var n=$(".banner-message-container").last();0===n.length&&(n=$("<div/>").addClass("top-banner-message-container").css("display","none").insertAfter("#header"));var i={"type":t,"position":"inline","cssClass":"banner-message","slideDown":!0};return this.showMessage(n,e,i)},"showShareTip":function(e,t,n){var i=$("<p></p>").text(t).html(),r='<div class="share-tip" style="display:none">'+i+'<input type="text" style="display:block; width:292px;"><a class="close-share-tip" style="float:right">close</a></div>',o=$(r);return o.find('input[type="text"]').val(n),o.appendTo(e).show().find(".close-share-tip").click(function(){o.fadeOutAndRemove()}).end().find("input[type=text]").select(),o},"removeMessages":function(e){e?$(".message").remove():$(".message").fadeOutAndRemove()},"addSpinner":function(e,t){$(e).append(l.getSpinnerImg(t))},"getSpinnerImg":function(e){var t=$("<img />",{"class":"ajax-loader","src":"/content/img/progress-dots.gif","title":"loading...","alt":"loading..."});return e&&t.css(e),t},"removeSpinner":function(){$("img.ajax-loader").remove()},"closePopups":function(e,t){var n=$.Event("closePopups");n.selectorToClose=e,n.closeTrigger=t||"closePopups",$(document).trigger(n)},"enableSubmitButton":function(e){n(e,!1)},"disableSubmitButton":function(e){n(e,!0)},"loadTicks":function(e){var t;t=e?e.find(".edit-block"):$(".edit-block"),0==t.find("input[name=i1l]").length&&(t.data("loading-ticks")||(t.data("loading-ticks",!0),$.ajax({"url":"/questions/ticks","cache":!1,"success":function(e){t.append("<input type='hidden' name='i1l' value='"+e+"' />")},"complete":function(){t.data("loading-ticks",!1)}})))},"showFancyOverlay":function(e){e=e||{};var t=$('<div id="overlay-header"></div>').prependTo("body"),n=e.message||"",i=$.browser.msie?{"background":"#fff","opacity":0}:{};e.showClose!==!1&&(n+='<br><a class="close-overlay">close this message</a>'),t.html(n).css(i).animate({"opacity":"1","height":"show"},"slow",e.complete).find(".close-overlay").click(function(){t.animate({"opacity":"0","height":"hide"},"fast")})},"DelayedReaction":function(e,t,n){n=n||{};var i,r,o=n.always,a=function(){i=null,e.apply(null,r)};return{"trigger":function(){if(r=arguments,o&&o.apply(null,r),i){if(!n.sliding)return;clearTimeout(i),i=setTimeout(a,t)}else i=setTimeout(a,t)},"cancel":function(){i&&(clearTimeout(i),i=null)}}},"fireAndForget":function(e){$.ajax({"type":"POST","url":e,"async":!0})},"updateQueryStringParameter":function(e,t,n){var i=new RegExp("([?&])"+t+"=.*?(&|$)","i"),r=-1!==e.indexOf("?")?"&":"?";return e.match(i)?e.replace(i,"$1"+t+"="+n+"$2"):e+r+t+"="+n},"parseUrl":function(e){var t=document.createElement("a");return t.href=e,""===t.host&&(t.href=t.href),t},"getLikelyErrorMessage":function(e){if(!e||"string"!=typeof e.responseText||e.responseText.length>250)return"";var t=e.responseText;try{var n=JSON.parse(t);return n.ErrorMessage||n.Message||""}catch(i){return t}},"getRejectedMockXhr":function(e){return $.Deferred().reject({"responseText":e})},"submitFormOnEnterPress":function(e){var t=e.find("textarea"),n=!1,i=!1;t.keyup(function(r){return n||i?(i=!1,void 0):(13!==r.which||r.shiftKey||t.prev("#tabcomplete > li:visible").length||e.submit(),void 0)}).keypress(function(e){return 13!==e.which||e.shiftKey}),t.on("compositionstart",function(){n=!0}).on("compositionend",function(){n=!1,i=!0}).on("keydown",function(e){229!==e.which&&(i=!1)})},"isInNetwork":function(e){if("string"!=typeof e)throw new TypeError;try{var t=StackExchange.helpers.parseUrl(e.trim()).hostname;if(t===window.location.hostname)return!0;for(var n=["stackoverflow.com","stackexchange.com","serverfault.com","superuser.com","stackauth.com","stackapps.com","askubuntu.com","askdifferent.com","mathoverflow.net","askpatents.com"],i=0;i<n.length;i++){var r=n[i];if(t===r||t.endsWith("."+r))return!0}}catch(o){}return!1},"removeParameterFromQueryString":function(e){if(window.history&&window.history.replaceState){var t=window.location.href.replace(new RegExp("^([^#]*?)(([^#]*)&)?"+e+"(=[^&#]*)?(&|#|$)"),"$1$3$5").replace(/^([^#]*)((\?)&|\?(#|$))/,"$1$3$4");try{window.history.replaceState({},document.title,t)}catch(n){}}}};return l}(),StackExchange.switchMobile=function(e){$.post("/mobile/"+e,{"returnurl":window.location.href,"fkey":StackExchange.options.user.fkey},function(e){window.location.href=e})},StackExchange.scrollPadding=function(){function e(){function e(e){var t=e.filter(function(e,t){return t===window||t===document.body||t==document.body.parentElement});return e.length>0&&e.length===t.length}function t(e,t){return function(){if(l)return e.apply(this,arguments);l=!0;try{return t.apply(this,arguments)}finally{l=!1
}}}function i(){var e=$(":target");if(e.length||(location.hash.length>1&&/edge|msie|trident/i.test(navigator.userAgent)&&(e=$(document.getElementsByName(location.hash.substr(1))).first()),e.length)){var t=1;e.is(":empty")&&"inline"===e.css("display")&&(t+=parseInt(e.next().css("margin-top"),10));var i=e.offset().top;e.length&&Math.abs(a.scrollTop()-i-n)<t&&a.scrollTop(i)}}var r=jQuery.fn.animate;jQuery.fn.animate=t(r,function(t){if("scrollTop"in t&&e(this)){var i={};$.extend(i,t),i.scrollTop=parseInt(i.scrollTop,10)-n,arguments[0]=i}return r.apply(this,arguments)});var o=jQuery.fn.scrollTop;jQuery.fn.scrollTop=t(o,function(){if(e(this)){if(0===arguments.length)return o.apply(this,arguments)+n;arguments[0]-=n}return o.apply(this,arguments)});for(var s=document.body.__proto__;s&&!s.hasOwnProperty("scrollIntoView");)s=s.__proto__;if(s){var c=s.scrollIntoView;s.scrollIntoView=t(c,function(e){if(e===!0||null==e||"smooth"!==e.behavior&&"end"!==e.block){var t=document.body.style.marginTop,i=parseInt(getComputedStyle(document.body).marginTop,10);document.body.style.marginTop=i-n+"px";var r=c.apply(this,arguments);return document.body.style.marginTop=t,r}c.apply(this,arguments)})}var l=!1;$("body").on("click","a",function(){var e=$(this).attr("href");e&&/#/.test(e)&&(a.on("scroll",i),setTimeout(function(){a.off("scroll",i)},500))}),a.on("hashchange",i),$(function(){setTimeout(i,10),setTimeout(i,100),setTimeout(i,1e3)})}function t(){var e,t,i,r,o=performance.now?performance.now.bind(performance):Date.now.bind(Date),s=null,c=null,l=!1,u=StackExchange.helpers.DelayedReaction(function(){s=null},100,{"sliding":!0});a.on("keydown",function(n){if(n.target!==document.body)return s=null,void 0;var d=n.which;return 32>d||d>34?(s=null,void 0):(e=s=a.scrollTop(),t=0,r=0,l=!1,c=null,i=o(),u.trigger(),void 0)}),a.on("scroll",function(){if(null!==s){if(l)return a.scrollTop(c),void 0;var d=o(),f=a.scrollTop(),p=d-i,h=f-e,g=h/p,m=0>h?-1:1;null===c&&(c=s+m*(a.height()-n-20));var v=g-t,b=v/p,y=b+(b-r);if(0>g*y){var w=-g/y,x=f+w*(g+.5*y*w),k=c-x;Math.abs(k)<100&&(f+(g+.5*y*p)*p-c)*m>-20&&(a.scrollTop(c),l=!0)}u.trigger(),e=f,i=d,t=g,r=b}})}var n=0,i=0,r=0,o=!1,a=$(window);return{"setPaddingTop":function(a,s){r=s||0,n=a+r,i=a,(a||s)&&(o||(o=!0,e(),/^mac/i.test(navigator.platform)&&!/firefox/i.test(navigator.userAgent)&&t()))},"getPaddingTop":function(){return n},"getPaddingTopMinimal":function(){return i},"getWindowScrollTopMinimal":function(){return a.scrollTop()-r}}}(),jQuery.cookie=function(e,t,n){if("undefined"==typeof t){var i=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),o=0;o<r.length;o++){var a=jQuery.trim(r[o]);if(a.substring(0,e.length+1)==e+"="){i=decodeURIComponent(a.substring(e.length+1));break}}return i}n=n||{},null===t&&(t="",n.expires=-1);var s="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var c;"number"==typeof n.expires?(c=new Date,c.setTime(c.getTime()+24*n.expires*60*60*1e3)):c=n.expires,s="; expires="+c.toUTCString()}var l=n.path?"; path="+n.path:"",u=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),s,l,u,d].join("")},jQuery.expr[":"].regex=function(e,t,n){var i=n[3].split(","),r=/^(data|css):/,o={"method":i[0].match(r)?i[0].split(":")[0]:"attr","property":i.shift().replace(r,"")},a="ig",s=new RegExp(i.join("").replace(/^\s+|\s+$/g,""),a);return s.test(jQuery(e)[o.method](o.property))},$.extend($.expr[":"],{"containsExact":function(e,t,n){return $.trim(e.innerHTML.toLowerCase())===n[3].toLowerCase()},"containsExactCase":function(e,t,n){return $.trim(e.innerHTML)===n[3]},"containsRegex":function(e,t,n){var i=/^\/((?:\\\/|[^\/])+)\/([mig]{0,3})$/,r=i.exec(n[3]);return RegExp(r[1],r[2]).test($.trim(e.innerHTML))}}),function(e){e.fn.typeWatch=function(t){function n(t,n){var i=e(t.el).val();(i.length>r.captureLength&&i.toUpperCase()!=t.text||n&&i.length>r.captureLength)&&(t.text=i.toUpperCase(),t.cb(i))}function i(t){if("TEXT"==t.type.toUpperCase()||"TEXTAREA"==t.nodeName.toUpperCase()){var i={"timer":null,"text":e(t).val().toUpperCase(),"cb":r.callback,"el":t,"wait":r.wait};r.highlight&&e(t).focus(function(){this.select()});var o=function(e){var t=i.wait,r=!1;13==e.keyCode&&"TEXT"==this.type.toUpperCase()&&(t=1,r=!0);var o=function(){n(i,r)};clearTimeout(i.timer),i.timer=setTimeout(o,t)};e(t).keydown(o).bind("paste",null,function(e){e.which||o(this)}).bind("input",null,function(e){e.which||o(this)})}}var r=e.extend({"wait":750,"callback":function(){},"highlight":!0,"captureLength":2},t);return this.each(function(){i(this)})}}(jQuery),function(e){function t(t){var n;return t&&t.constructor==Array&&3==t.length?t:(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])]:(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3])]:(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]:(n=/rgba\(0, 0, 0, 0\)/.exec(t))?i.transparent:i[e.trim(t).toLowerCase()]}function n(n,i){var r;do{if(r=e.css(n,i),""!=r&&"transparent"!=r||e.nodeName(n,"body"))break;i="backgroundColor"}while(n=n.parentNode);return t(r)}e.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(i,r){e.fx.step[r]=function(e){e.colorInit||(e.start=n(e.elem,r),e.end=t(e.end),e.colorInit=!0),e.elem.style[r]="rgb("+[Math.max(Math.min(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1]),255),0),Math.max(Math.min(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2]),255),0)].join(",")+")"}});var i={"transparent":[255,255,255]}}(jQuery),StackExchange.gps=function(){function e(e,t,n,i){t=t||{};var r=null;StackExchange.options&&StackExchange.options.user&&(t.user_type=StackExchange.options.user.userType,r=StackExchange.options.user.ab);var o={"evt":e,"properties":t,"now":(new Date).getTime()};r&&(o.ab=r),StackExchange._gps_track.push(o),i&&i()}return StackExchange._gps_track=[],window.location.href.indexOf("utm_")>=0&&StackExchange.ready(function(){if(StackExchange.options&&StackExchange.options.utm);else{var t=function(e){var t=new RegExp("[\\?&]utm_"+e+"=([^&#]*)").exec(window.location.href);return t?decodeURIComponent(t[1])||void 0:void 0},n={"source":t("source"),"medium":t("medium")||"unknown","medium_s":t("medium")||"unknown","campaign":t("campaign"),"content":t("content"),"term":t("term")};n.source&&n.campaign&&e("utm.view",n,!1),StackExchange.using("gps",function(){StackExchange.gps.sendPending()})}}),{"track":e,"sendPending":function(e){e&&e()}}}();