var T,baidu=T=baidu||{version:"1.5.0"};baidu.guid="$BAIDU$";window[baidu.guid]=window[baidu.guid]||{};baidu.json=baidu.json||{};baidu.json.stringify=(function(){var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function g(a){if(/["\\\x00-\x1f]/.test(a)){a=a.replace(/["\\\x00-\x1f]/g,function(c){var b=f[c];if(b){return b}b=c.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)})}return'"'+a+'"'}function i(a){var e=["["],d=a.length,l,c,b;for(c=0;c<d;c++){b=a[c];switch(typeof b){case"undefined":case"function":case"unknown":break;default:if(l){e.push(",")}e.push(baidu.json.stringify(b));l=1}}e.push("]");return e.join("")}function j(a){return a<10?"0"+a:a}function h(a){return'"'+a.getFullYear()+"-"+j(a.getMonth()+1)+"-"+j(a.getDate())+"T"+j(a.getHours())+":"+j(a.getMinutes())+":"+j(a.getSeconds())+'"'}return function(a){switch(typeof a){case"undefined":return"undefined";case"number":return isFinite(a)?String(a):"null";case"string":return g(a);case"boolean":return String(a);default:if(a===null){return"null"}else{if(a instanceof Array){return i(a)}else{if(a instanceof Date){return h(a)}else{var e=["{"],b=baidu.json.stringify,l,c;for(var d in a){if(Object.prototype.hasOwnProperty.call(a,d)){c=a[d];switch(typeof c){case"undefined":case"unknown":case"function":break;default:if(l){e.push(",")}l=1;e.push(b(d)+":"+b(c))}}}e.push("}");return e.join("")}}}}}})();T.undope=true;function getHost(b){var c=b||location.host,a=c.indexOf(":");return(a==-1)?c:c.substring(0,a)}var Browser=(function(){var c=navigator.userAgent;var b=0,l=0,g=0,a=0,f=0,d=0,j=0,i;if(c.indexOf("Chrome")>-1&&/Chrome\/(\d+(\.d+)?)/.test(c)){j=RegExp.$1}if(c.indexOf("Safari")>-1&&/Version\/(\d+(\.\d+)?)/.test(c)){b=RegExp.$1}if(window.opera&&/Opera(\s|\/)(\d+(\.\d+)?)/.test(c)){g=RegExp.$2}if(c.indexOf("Gecko")>-1&&c.indexOf("KHTML")==-1&&/rv\:(\d+(\.\d+)?)/.test(c)){f=RegExp.$1}if(/MSIE (\d+(\.\d+)?)/.test(c)){a=RegExp.$1}if(/Firefox(\s|\/)(\d+(\.\d+)?)/.test(c)){d=RegExp.$2}if(c.indexOf("KHTML")>-1&&/AppleWebKit\/([^\s]*)/.test(c)){l=RegExp.$1}try{i=!!external.max_version}catch(k){}function h(){var o=false;if(navigator.plugins){for(var n=0;n<navigator.plugins.length;n++){if(navigator.plugins[n].name.toLowerCase().indexOf("shockwave flash")>=0){o=true}}}if(!o){try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(m){o=true}}catch(p){o=false}}return o}return({isStrict:document.compatMode=="CSS1Compat",isChrome:j,isSafari:b,isWebkit:l,isOpera:g,isGecko:f,isIE:a,isFF:d,isMaxthon:i,isFlash:h(),isCookie:(navigator.cookieEnabled)?true:false})})();var ieUserData={init:function(){this.defaultExps=365;this.input=document.createElement("input");this.input.type="hidden";this.input.id="ieuserdata";this.input.addBehavior("#default#userData");document.body.appendChild(this.input);return this},set:function(a,b,c){this.input.load(a);var e=new Date();c=c||this.defaultExps;e.setDate(e.getDate()+c);this.input.load(a);this.input.expires=e.toUTCString();this.input.setAttribute("code",b);this.input.save(a)},get:function(a,c){this.input.load(a);var c=c||function(){},b=this.input.getAttribute("code");c(b);return b},is:function(b,c){var a=this.get(b);return(a!=null&&a!="")?true:false},remove:function(a){this.set(a,false,-this.defaultExps)}};var mozlliaStorage={init:function(){this.domain=getHost();return this},set:function(a,b){window.globalStorage[this.domain].setItem(a,b)},get:function(a,d){try{var d=d||function(){},b=window.globalStorage[this.domain].getItem(a)}catch(c){}d(b);return b},is:function(b){var a=this.get(b);return(a!=null&&a!="")?true:false},remove:function(a){window.globalStorage[this.domain].removeItem(a)}};var flashStorage=(function(){function e(){var h=document.createElement("span");h.style.position="absolute";h.style.display="block";var g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="1" height="1" id="GlobalSharedObject"><param name="movie" value="http://www.hao123.com/swf/SwfObject.swf?+'+new Date().getTime()+'" /><param name="quality" value="low" /><param name="flashvars" value="dbName=hao123&callbackName=FlashCallBack" /><param name="wmode" value="transparent" /><param name="swliveconnect" value="true" /><param name="allowScriptAccess" value="always" /><embed src="swf/SwfObject.swf?'+new Date().getTime()+'" flashvars="dbName=hao123&callbackName=FlashCallBack" quality="low" swLiveConnect="true" width="1" height="1" allowScriptAccess="always" wmode="transparent" name="GlobalSharedObject" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed></object>';(document.body||document.documentElement).appendChild(h);h.innerHTML=g}function c(){return Browser.isIE?window.GlobalSharedObject:document.GlobalSharedObject}function f(g,h){var i=c();i.set(g,h)}function b(g,i){var h=c(),i=i||function(){};data=h.get(g);i(data);return data}function d(h){var g=b(h);return(g!=undefined&&g!="")?true:false}function a(g){f(g,"")}return{init:e,set:f,get:b,is:d,remove:a}})();var userCookie={init:function(b,d,c){var c=(c!==undefined)?c:365;var a=new Date();a.setTime(a.getTime()+(86400*1000*c));this.domain=b||getHost();this.path=d||"/";this.expdate=a;this.time=c;return this},set:function(b,d,c){var a=this.expdate,c=c||this.domain;if(this.time==0){document.cookie=b+"="+d+";path="+this.path+";domain="+c}else{document.cookie=b+"="+d+";expires="+a.toGMTString()+";path="+this.path+";domain="+c}},get:function(e,g){var c=document.cookie.split(";"),e=e+"=",g=g||function(){};for(var d=0,b=c.length;d<b;d++){if(c[d].indexOf(e)!="-1"){var f=c[d].replace(e,"");g(f);return f}}g(null);return null},is:function(b){var a=this.get(b);return(a!=null&&a!="")?true:false},remove:function(a,b){var b=b||this.domain;if(this.is(a)){document.cookie=a+"="+((this.path)?"; path="+this.path:"")+((this.domain)?"; domain="+b:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT"}}};if(!window.UserData){var UserData=null,bUseCookie=false,isIE9=document.documentMode&&document.documentMode==9;if(Browser.isIE&&!isIE9){UserData=ieUserData.init()}else{if(Browser.isFF){UserData=mozlliaStorage.init()}else{if(Browser.isFlash){flashStorage.init();UserData=flashStorage}else{if(Browser.isCookie){UserData=userCookie.init();bUseCookie=true}else{alert("�Բ��������������֧�����ݴ洢���뿪��Cookie��װflash6.0���ϰ汾��")}}}}}function fnSetCookie(b,c,a){var e=b;var d=escape(c);UserData.set(e,d)}function fnGetCookie(key){var cookieKey=key;var cookieStr=UserData.get(key)+"";if(cookieStr==""){return null}var cookieValue=cookieStr;return eval("("+unescape(cookieValue)+")")}$(function(){var a=$("li",$(".search_type"));a.click(function(){a.removeClass("cur");$(this).addClass("cur")});var b=$(".all_item_container");$("li",b).live("mouseover",function(){$("li",b).removeClass("cur");$(this).addClass("cur");if($(".tooltip_succ",$(this)).length!=0||$(".tooltip_existed",$(this)).length!=0){$(this).removeClass("cur");$(this).find(".tool_title").css("borderBottom","1px solid #fff")}});$("li",b).live("mouseout",function(){$(this).removeClass("cur")});$('.all_item_container form input[type="text"]').live("focusin",function(){var c=$(this).attr("defaultTxt");if($(this).val()==c){$(this).css("color","black").val("")}});$('.all_item_container form input[type="text"]').live("focusout",function(){var c=$(this).attr("defaultTxt");if($(this).val()==""){$(this).css("color","gray").val(c)}})});