var ClickMonkey=function(){function m(a){return RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(a)&&(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]||null:null}var g="http://nsclick.baidu.com/h.gif?pid=113&v="+pageId,i=m("BAIDUID");null!=i&&(g+="&hao123_baiduid="+i.split(":")[0]);var k=function(a){var c=(new Date).getTime(),b=window["bd_clickmonkey"+c]=new Image,d="",e=m("FLASHID"),h;for(h in a)d+="&"+h+"="+a[h];b.src=g+(null==e?"":"&hao123_flashid="+
e.split(":")[0])+"&r="+c+d;b.onload=b.onerror=function(){b=null}},e="",l=function(a,c){c=c||[];e=e||a.monkey||a.getAttribute("monkey");a.parentNode&&"BODY"!=a.parentNode.tagName.toUpperCase()&&(c=l(a.parentNode,c));if(a.previousSibling){var b=1,d=a.previousSibling;do 1==d.nodeType&&d.nodeName==a.nodeName&&b++,d=d.previousSibling;while(d)}1==a.nodeType&&c.push(a.nodeName.toLowerCase()+(1<b?b:""));return c};(function(a,c,b,d){if(a.addEventListener)return a.addEventListener(c,b,d),!0;if(a.attachEvent)return a.attachEvent("on"+
c,b)})(document.body,"mousedown",function(a){a=window.event||a;a=a.srcElement||a.target;if("A"!=a.tagName.toUpperCase())if("A"==a.parentNode.tagName.toUpperCase())a=a.parentNode;else if(!("INPUT"==a.tagName.toUpperCase()&&("checkbox"==a.type.toLowerCase()||"radio"==a.type.toLowerCase()))&&"AREA"!=a.tagName.toUpperCase())return;e="";var c={xp:l(a).join("-")},b=a.getAttribute("href",2);c.objurl=b&&!/^javascript|#/.test(b)?encodeURIComponent(b):"none";c.title=(b=a.getAttribute("title"))?encodeURIComponent(b):
a.innerHTML?encodeURIComponent(a.innerHTML.replace(/<.*?>/g,"")):"none";e&&(c.monkey=e);k(c)});return{log:function(a,c,b){a={xp:"_"+a+"_"};a.objurl=c?encodeURIComponent(c):"none";a.title=b?encodeURIComponent(b):"none";k(a)}}}();
(function(){function m(){var a;if(e.plugins&&e.mimeTypes.length){if((a=e.plugins["Shockwave Flash"])&&a.description)return a.description.match(/\d+/g).join(".")}else{var b=window.ActiveXObject;try{a=new b("ShockwaveFlash.ShockwaveFlash.7")}catch(d){try{return a=new b("ShockwaveFlash.ShockwaveFlash.6"),a.AllowScriptAccess="always",6}catch(g){}try{a=new b("ShockwaveFlash.ShockwaveFlash")}catch(h){}}if(null!=a)try{return a.GetVariable("$version").match(/\d+/g).join(".")}catch(f){}}return[0]}function g(a){return(result=
e.userAgent.match(RegExp(a+"\\b[ \\/]?([\\w\\.]*)","i")))?result.slice(1):["",""]}if("undefined"==typeof UA2Config||!(UA2Config instanceof Object))return"UA2Config is undefined";if(100*Math.random()>UA2Config.rate)return"wash wash and sleep";var i=window,k=screen,e=navigator,l=document.body,a=document.documentElement;(function(){m();var c,b=["",""];c=g("(msie|safari|firefox|chrome|opera)");if("msie"==c[0].toLowerCase()){b=!1;-1<e.userAgent.toLowerCase().indexOf("360chrome")&&(b=!0);try{if(i.external&&
i.external.twGetRunPath){var d=external.twGetRunPath();d&&-1<d.toLowerCase().indexOf("360se")&&(b=!0)}}catch(w){b=!1}if(b)b=["360se",""];else if(","==(b=g("(maxthon|360se|theworld|se|theworld|greenbrowser)")))b=g("(tencenttraveler)")}else"safari"==c[0].toLowerCase()&&(c[1]=g("version")+"."+c[1]);d=g("(windows nt|macintosh|solaris|linux)");c=[c.join(","),b.join(","),d.join(",")];var h,f,j;i.innerHeight?(f=i.innerWidth,j=i.innerHeight):a&&a.clientHeight?(f=a.clientWidth,j=a.clientHeight):l&&(f=l.clientWidth,
j=l.clientHeight);h=[f,j];f=c[0];j=c[1];c=c[2];var b=e.platform,d=e.systemLanguage||e.language,q=k.width,r=k.height,s=h[0];h=h[1];var t=k.colorDepth,u=e.cookieEnabled?1:0,v=m(),o="http://"+location.host,p="0",n=document.createElement("div");n.style.display="none";n.style.behavior="url(#default#homePage)";document.body.appendChild(n);try{if(n.isHomePage(o)||n.isHomePage(o+"/"))p="1"}catch(x){}f=[f,j,c,b,d,q,r,s,h,t,u,v,p].join(";").toLowerCase();f=UA2Config.action+"ua2.gif?i="+UA2Config.id+"&p="+f+
"&r="+Math.random();j="log_"+(new Date).getTime();(window[j]=new Image).src=f})()})(UA2Config);
