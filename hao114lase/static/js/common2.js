var search_config={baidu:{action:"http://www.baidu.com/s",name:"wd",url:"http://www.baidu.com/index.php?tn=divencheng_pg&ch=7",img:["\u767e\u5ea6","../static/images/s/baidu.gif"],btn:"\u767e\u5ea6\u4e00\u4e0b",params:{tn:"divencheng_pg",ch:"7"}},google:{action:"http://www.google.com.hk/search",name:"q",url:"http://www.google.com.hk/webhp?prog=aff&client=pub-0123456789&channel=5676023677",img:["\u8c37\u6b4c","../static/images/s/google.gif"],btn:"Google \u641c\u7d22",
params:{client:"pub-0123456789",channel:"2000040001",forid:"1",prog:"aff",hl:"zh-CN",source:"sdo_sb_html",ie:"gb2312"}},sogou:{action:"http://www.sogou.com/sogou",name:"query",url:"http://www.sogou.com/sogou?pid=sogou-site-220c77af02f8ad85",img:["\u641c\u7d22","../static/images/s/sogou.gif"],btn:"\u641c \u7d22",params:{pid:"sogou-site-220c77af02f8ad85"}},taobao:{action:"http://search8.taobao.com/browse/search_auction.htm",name:"q",btn:"\u6dd8\u5b9d\u641c\u7d22",img:["\u6dd8\u5b9d\u7f51",
"../static/images/s/taobao.gif"],url:"http://www.taobao.com/go/chn/tbk_channel/channelcode.php?pid=mm_10054659_3403176_11429697&eventid=101329",params:{pid:"mm_10054659_3403176_11429697",mode:"86",commend:"all",search_type:"action",user_action:"initiative",f:"D9_5_1",at_topsearch:"1",sid:"(05ba391dbdcada4634d4077c189eeef7)",sort:"",spercent:"0"}}},SearchBox=function(){var c=[$("#searchForm").el.pid,$("#searchForm").el.ch];return{set:function(a){function d(a){for(var c=0,e=a.length;c<e;c++)$("#searchForm").remove(a[c]);
return[]}$("#searchForm").el.action=a.action;$("#searchForm .label img").el.src=a.img[1];$("#searchForm .label img").el.setAttribute("alt",a.img[0]);$("#searchForm .text").el.name=a.name;$("#searchForm .submit").el.value=a.btn;$("#searchForm .label").el.href=a.url;c.length>0&&(c=d(c));for(var e in a.params)$("#searchForm").create("input",{name:e,value:a.params[e],type:"hidden"},function(a){c.push(a);this.append(a)})}}}();
$(".searchform .ctrl label").on("click",function(){var c=this.firstChild;c.checked&&c.value!=""&&(SearchBox.set(search_config[c.value]),$(".searchform .text").el.focus())});$(".searchform .ctrl label").each(function(c){c=c.firstChild;c.checked&&c.value!=""&&(SearchBox.set(search_config[c.value]),$(".searchform .text").el.focus())});
(function(){var c=window.baidu||{version:"1-1-0"};c.object=c.object||{};c.object.extend=function(a,c){for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])};c.extend=c.object.extend;c.dom=c.dom||{};c.dom.g=function(a){if("string"==typeof a||a instanceof String)return document.getElementById(a);else if(a&&a.nodeName&&(a.nodeType==1||a.nodeType==9))return a;return null};c.g=c.G=c.dom.g;c.dom.getDocument=function(a){a=c.dom.g(a);return a.nodeType==9?a:a.ownerDocument||a.document};c.dom._styleFixer=c.dom._styleFixer||
{};c.dom._styleFilter=c.dom._styleFilter||[];c.dom._styleFilter.filter=function(a,d,e){for(var h=0,f=c.dom._styleFilter,g;g=f[h];h++)if(g=g[e])d=g(a,d);return d};c.string=c.string||{};c.string.toCamelCase=function(a){return String(a).replace(/[-_]\D/g,function(a){return a.charAt(1).toUpperCase()})};c.dom.getStyle=function(a,d){var e=c.dom,a=e.g(a),d=c.string.toCamelCase(d),h=a.style[d];if(h)return h;var f=e._styleFixer[d],h=a.currentStyle||(c.browser.ie?a.style:getComputedStyle(a,null)),h="object"==
typeof f&&f.get?f.get(a,h):h[f||d];if(f=e._styleFilter)h=f.filter(d,h,"get");return h};c.getStyle=c.dom.getStyle;c.browser=c.browser||{};if(/msie (\d+\.\d)/i.test(navigator.userAgent))c.ie=c.browser.ie=parseFloat(RegExp.$1);if(/opera\/(\d+\.\d)/i.test(navigator.userAgent))c.browser.opera=parseFloat(RegExp.$1);c.browser.isWebkit=/webkit/i.test(navigator.userAgent);c.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);c.browser.isStrict=document.compatMode==
"CSS1Compat";c.dom.getPosition=function(a){var d=c.dom.getDocument(a),e=c.browser,a=c.dom.g(a),h=e.isGecko>0&&d.getBoxObjectFor&&c.dom.getStyle(a,"position")=="absolute"&&(a.style.top===""||a.style.left===""),f={left:0,top:0},g=e.ie&&!e.isStrict?d.body:d.documentElement;if(a==g)return f;var j=null;if(a.getBoundingClientRect)a=a.getBoundingClientRect(),f.left=Math.floor(a.left)+Math.max(d.documentElement.scrollLeft,d.body.scrollLeft),f.top=Math.floor(a.top)+Math.max(d.documentElement.scrollTop,d.body.scrollTop),
f.left-=d.documentElement.clientLeft,f.top-=d.documentElement.clientTop,e.ie&&!e.isStrict&&(f.left-=2,f.top-=2);else if(d.getBoxObjectFor&&!h)a=d.getBoxObjectFor(a),d=d.getBoxObjectFor(g),f.left=a.screenX-d.screenX,f.top=a.screenY-d.screenY;else{j=a;do{f.left+=j.offsetLeft;f.top+=j.offsetTop;if(e.isWebkit>0&&c.dom.getStyle(j,"position")=="fixed"){f.left+=d.body.scrollLeft;f.top+=d.body.scrollTop;break}j=j.offsetParent}while(j&&j!=a);if(e.opera>0||e.isWebkit>0&&c.dom.getStyle(a,"position")=="absolute")f.top-=
d.body.offsetTop;for(j=a.offsetParent;j&&j!=d.body;){f.left-=j.scrollLeft;if(!b.opera||j.tagName!="TR")f.top-=j.scrollTop;j=j.offsetParent}}return f};c.event=c.event||{};c.event._unload=function(){for(var a=c.event._listeners,d=a.length,e=!!window.removeEventListener,h,f;d--;)h=a[d],f=h[0],f.removeEventListener?f.removeEventListener(h[1],h[3],!1):f.detachEvent&&f.detachEvent("on"+h[1],h[3]);e?window.removeEventListener("unload",c.event._unload,!1):window.detachEvent("onunload",c.event._unload)};window.attachEvent?
window.attachEvent("onunload",c.event._unload):window.addEventListener("unload",c.event._unload,!1);c.event._listeners=c.event._listeners||[];c.event.on=function(a,d,e){d=d.replace(/^on/i,"");"string"==typeof a&&(a=c.dom.g(a));var h=function(c){e.call(a,c)},f=c.event._listeners;f[f.length]=[a,d,e,h];a.attachEvent?a.attachEvent("on"+d,h):a.addEventListener&&a.addEventListener(d,h,!1);return a};c.on=c.event.on;c.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};
c.ui=c.ui||{};c.suggestion=c.ui.suggestion=c.ui.suggestion||{};(function(){var a={},d=function(a){var c={};a.listen=function(d,g){c[d]=c[d]||[];for(var j=0;j<c[d].length&&c[d][j]!=g;)j++;j==c[d].length&&c[d].push(g);return a};a.call=function(d){if(c[d])for(var g=0;g<c[d].length;g++)c[d][g].apply(this,Array.prototype.slice.call(arguments,1));return a}};a.extend=function(a){new d(a);return a};a.extend(a);c.suggestion._Central=a})();c.ui.suggestion._Div=function(a,d,e,h,f){function g(c,d){if(n.style.display==
"none")a.call("need_data",e.getValue());else{var g=r()[0];j();if(c){if(g==0){l(d);return}if(g==-1)g=o.length;g--}else{if(g==o.length-1){l(d);return}g++}k(g);s();c=e.getValue();l(g);g=r();f.onpick(c,g[0],g[1],g[2])}}function j(){for(var a=0;a<q.length;a++)q[a].className=u+"ml"}function r(){if(q&&n.style.display!="none")for(var a=0;a<q.length;a++)if(q[a].className==u+"mo")return[a,o[a],t[a]];return[-1,""]}function s(){var a=r();f.onhighlight(e.getValue(),a[0],a[1],a[2])}function k(a){j();q[a].className=
u+"mo"}function l(c){a.call("pick_word",o&&typeof c=="number"&&typeof o[c]!="undefined"?o[c]:c)}function m(){if(n.style.display=="none")return null;v.style.display=n.style.display="none";f.onhide()}function p(c){return function(){a.call("confirm_item",e.getValue(),o[c],c,t[c]);var j=e.getValue();l(o[c]);f.onpick(j,c,o[c],t[c]);f.onconfirm(e.getValue(),c,o[c],t[c]);m()}}var w=this,o,t,x,u=f.class_prefix,q,n=document.createElement("DIV");n.id=u+(new Date).getTime();n.className=u+"wpr";n.style.display=
"none";var v=document.createElement("IFRAME");v.className=u+"sd";v.style.display="none";v.style.position="absolute";v.style.borderWidth="0px";f.apd_body?document.body.appendChild(n):d.parentNode.appendChild(n);n.parentNode.insertBefore(v,n);a.listen("start",function(){c.on(document,"mousedown",function(a){a=a||window.event;a=a.target||a.srcElement;if(a!=d){for(;a=a.parentNode;)if(a==n)return;m()}});c.on(window,"blur",m)});a.listen("key_enter",function(){var a=r(),c=a[0]==-1?x:a[1];f.onconfirm(e.getValue(),
a[0],c,a[2],!0);m()});a.listen("key_up",function(a){g(1,a)});a.listen("key_down",function(a){g(0,a)});a.listen("key_tab",m);a.listen("key_esc",m);a.listen("all_clear",m);a.listen("data_ready",function(d,g){x=g;o=[];t=[];for(var d=0,e=g.length;d<e;d++)typeof g[d].input!="undefined"?(o[d]=g[d].input,t[d]=g[d].selection):t[d]=o[d]=g[d];if(o.length!=0){q=h(n,t,w);d=0;for(e=q.length;d<e;d++)c.on(q[d],"mouseover",function(){j();this.className=u+"mo";s()}),c.on(q[d],"mouseout",j),c.on(q[d],"mousedown",function(d){a.call("mousedown_item");
if(!c.ie)return d.stopPropagation(),d.preventDefault(),!1}),c.on(q[d],"click",p(d))}else m()});return{element:n,shade:v,pick:l,highlight:k,hide:m,dispose:function(){n.parentNode.removeChild(n)}}};c.ui.suggestion._Data=function(a,c){var e={};a.listen("response_data",function(c,d){e[c]=d;a.call("data_ready",c,d)});a.listen("need_data",function(h){typeof e[h]=="undefined"?c(h):a.call("data_ready",h,e[h])});return{}};c.ui.suggestion._InputWatcher=function(a,d){var e,h=0,f="",g="",j="",r,s=!1,k=!1,l=!1;
d.setAttribute("autocomplete","off");c.on(d,"keydown",function(d){l||(a.call("start"),l=!0);var d=d||window.event,j;switch(d.keyCode){case 9:j="tab";break;case 27:j="esc";break;case 13:j="enter";break;case 38:j="up";c.event.preventDefault(d);break;case 40:j="down"}j&&a.call("key_"+j,g)});c.on(d,"mousedown",function(){l||(a.call("start"),l=!0)});c.on(d,"beforedeactivate",function(){if(s)window.event.cancelBubble=!0,window.event.returnValue=!1});a.listen("start",function(){j=d.value;h=setInterval(function(){if(!k){c.G(d)==
null&&suggestion.dispose();var h=d.value;h==f&&h!=""&&h!=j&&h!=r?e==0&&(e=setTimeout(function(){a.call("need_data",h)},100)):(clearTimeout(e),e=0,h==""&&f!=""&&(r="",a.call("all_clear")),f=h,h!=r&&(g=h),j!=d.value&&(j=""))}},10)});a.listen("pick_word",function(a){s&&d.blur();d.value=r=a;s&&d.focus()});a.listen("mousedown_item",function(){k=s=!0;setTimeout(function(){s=k=!1},500)});a.listen("confirm_item",function(a,c,d){k=!1;g=f=d});return{getValue:function(){return d.value},dispose:function(){clearInterval(h)}}};
c.ui.suggestion._Suggestion=function(a,d){var e=this;e.options={onpick:function(){},onconfirm:function(){},onhighlight:function(){},onhide:function(){},view:null,getData:!1,prepend_html:"",append_html:"",class_prefix:"tangram_sug_",apd_body:!1};c.extend(e.options,d);if(!(a=c.G(a)))return null;e.inputElement=a;a.id?e.options._inputId=a.id:a.id=e.options._inputId=e.options.class_prefix+"ipt"+(new Date).getTime();e._adjustPos=function(d){var f=g.element,h=g.shade,k=document,k=k.compatMode=="BackCompat"?
k.body:k.documentElement,l=k.clientHeight,m=k.clientWidth;if(!(f.style.display=="none"&&d)){d=c.dom.getPosition(a);d=[d.top+a.offsetHeight-1,d.left,a.offsetWidth];d=typeof e.options.view=="function"?e.options.view(d):d;f.style.display=h.style.display="block";h.style.top=d[0]+"px";h.style.left=d[1]+"px";h.style.width=d[2]+"px";var p=parseFloat(c.getStyle(f,"marginTop"))||0,w=parseFloat(c.getStyle(f,"marginLeft"))||0;f.style.top=d[0]-p+"px";f.style.left=d[1]-w+"px";if(c.ie&&document.compatMode=="BackCompat")f.style.width=
d[2]+"px";else{var p=parseFloat(c.getStyle(f,"borderLeftWidth"))||0,o=parseFloat(c.getStyle(f,"borderRightWidth"))||0,t=parseFloat(c.getStyle(f,"marginRight"))||0;f.style.width=d[2]-p-o-w-t+"px"}h.style.height=f.offsetHeight+"px";(l!=k.clientHeight||m!=k.clientWidth)&&e._adjustPos()}};e._draw=function(a,c){var d=[],g=document.createElement("TABLE");g.cellPadding=2;g.cellSpacing=0;var f=document.createElement("TBODY");g.appendChild(f);for(var h=0,p=c.length;h<p;h++){var w=f.insertRow(-1);d.push(w);
w.insertCell(-1).innerHTML=c[h]}c=document.createElement("DIV");c.className=e.options.class_prefix+"pre";c.innerHTML=e.options.prepend_html;f=document.createElement("DIV");f.className=e.options.class_prefix+"app";f.innerHTML=e.options.append_html;a.innerHTML="";a.appendChild(c);a.appendChild(g);a.appendChild(f);e._adjustPos();return d};var h=c.suggestion._Central.extend(e);new c.ui.suggestion._Data(h,e.options.getData);var f=new c.ui.suggestion._InputWatcher(h,a,g),g=new c.ui.suggestion._Div(h,a,
f,e._draw,e.options);h.listen("start",function(){setInterval(function(){var c=g.element;c.offsetWidth!=0&&a.offsetWidth!=c.offsetWidth&&e._adjustPos()},100);c.on(window,"resize",function(){e._adjustPos(!0)})});return{pick:g.pick,hide:g.hide,highlight:g.highlight,getElement:function(){return g.element},getData:e.options.getData,giveData:function(a,c){h.call("response_data",a,c)},dispose:function(){g.dispose();f.dispose()}}};c.ui.suggestion.create=function(a,d){return new c.ui.suggestion._Suggestion(a,
d)};window.baidu=c})();
var BaiduSuggestion=function(){function c(a){for(;a!=document.body&&a.tagName!="FORM";)a=a.parentNode;return a.tagName=="FORM"?a:null}function a(a,c){var d=document.styleSheets;if(!d||d.length<=0)d=document.createElement("STYLE"),d.type="text/css",document.getElementsByTagName("HEAD")[0].appendChild(d);d=document.styleSheets;d=d[d.length-1];baidu.ie?d.addRule(a,c):d.insertRule(a+" { "+c+" }",d.cssRules.length)}function d(a,c,d){if(a)if(d!=void 0)a.style[c]=d;else if(a.style[c])return a.style[c];else if(a.currentStyle)return a.currentStyle[c];
else if(document.defaultView&&document.defaultView.getComputedStyle)return c=c.replace(/([A-Z])/g,"-$1").toLowerCase(),(a=document.defaultView.getComputedStyle(a,""))&&a.getPropertyValue(c)||""}var e={},h={},f={createSugOptions:function(a,c,d,e){return{class_prefix:"bdSug_",onconfirm:function(a,c,f,g,j){if(d&&c>-1)try{d.apply(window,[f])}catch(h){}e&&!j&&e.submit()},view:function(a){c&&c.width&&(a[2]=parseInt(c.width));if(c&&c.XOffset&&c.YOffset)return[a[0]-c.YOffset,a[1]-c.XOffset,a[2]];return[a[0],
a[1],a[2]]},getData:function(c){var d=(new Date).getTime(),e=baidu.G("bdSug_script");e&&document.body.removeChild(e);e=document.createElement("script");e.setAttribute("charset","gbk");e.src="http://unionsug.baidu.com/su?wd="+encodeURIComponent(c)+"&p=3&cb=BaiduSuggestion.callbacks.give"+a+"&t="+d;e.id="bdSug_script";document.body.appendChild(e)},apd_body:!0}},createSugCallback:function(a){return function(c){if(c){for(var d=[],e=0;e<c.s.length;e++){var f={};f.input=c.s[e];f.selection=c.s[e];d.push(f)}h["sug"+
a].giveData(c.q,d)}}}};a(".bdSug_wpr","line-height:normal;background:#FFF;padding:0;margin:0;border:1px solid #817F82;position:absolute;z-index:9999;");a(".bdSug_wpr table","padding:0;width:100%;background:#fff;cursor:default;");a(".bdSug_wpr tr","padding:0;margin:0");a(".bdSug_wpr td","padding:4px;margin:0;text-align:left;vertical-align:middle;font:14px verdana;font-weight:normal;text-decoration:none;text-indent:0");a(".bdSug_mo","background:#36c;color:#fff");a(".bdSug_app","padding:0;margin:0;background:#fff");
a(".bdSug_pre","padding:0;margin:0");a(".bdsug_copy","width:10px;height:10px; margin:0;font-size:13px;color:#77c;text-decoration:none;padding:0 2px 0 16px;");return{bind:function(g,j,r,s){if(g){if(typeof g=="string"||g instanceof String)g=baidu.G(g);if(!g.sugId)g.sugId=(new Date).getTime();if(h["sug"+g.sugId])return!1;if(j==null)j=[];else{var s=j.sugSubmit,k=j.fontSize?j.fontSize:"14px",l=j.fontFamily?j.fontFamily:"Tahoma, Helvetica, Arial, sans-serif",m=j.bgcolorHI?j.bgcolorHI:"#36c",p=j.fontColorHI?
j.fontColorHI:"#FFF";a(".bdSug_wpr","border:1px solid "+(j.borderColor?j.borderColor:"#817f82")+";position:absolute;z-index:9;top:28px;left:0;color:"+(j.fontColor?j.fontColor:"#000"));a(".bdSug_wpr td","font-size:"+k+";font-family:"+l);a(".bdSug_mo","background-color:"+m+";color:"+p)}if(d(document.body,"position")=="relative"||d(document.body,"position")=="absolute"){k=document.body;l=document;p=m=0;if(k.getBoundingClientRect)k=k.getBoundingClientRect(),m=k.left+Math.max(l.documentElement.scrollLeft,
l.body.scrollLeft),p=k.top+Math.max(l.documentElement.scrollTop,l.body.scrollTop),m-=l.documentElement.clientLeft,p-=l.documentElement.clientTop;else for(;k=k.offsetParent;)m+=k.offsetLeft,p+=k.offsetTop;k={x:m,y:p};j.XOffset=(j.XOffset?parseInt(j.XOffset):0)+k.x;j.YOffset=(j.YOffset?parseInt(j.YOffset):0)+k.y}h["sug"+g.sugId]=baidu.suggestion.create(g,f.createSugOptions(g.sugId,j,r,s?c(g):null));e["give"+g.sugId]=f.createSugCallback(g.sugId)}},callbacks:e}}();
function getElementsByClass(c){for(var a=[],a=typeof document.all!="undefined"?document.all:document.getElementsByTagName("*"),d=[],c=RegExp("(^| )"+c+"( |$)"),e=0;e<a.length;e++)c.test(a[e].className)&&(d[d.length]=a[e]);return d}function setFocus(c){var a=c.createTextRange();a.moveStart("character",c.value.length);a.collapse(!0);a.select()}
for(var text=getElementsByClass("text"),radio=getElementsByClass("radio"),params={XOffset:0,YOffset:0,width:371,fontColor:"#111",fontColorHI:"#fff",fontSize:"14px",fontFamily:"Tahoma, Helvetica, Arial, sans-serif;",borderColor:"#666",bgcolorHI:"#36c",sugSubmit:!0},i=0;i<text.length;i++);BaiduSuggestion.bind(text[i],params);function DOMReady(c){/(?!.*?compatible|.*?webkit)^mozilla|opera/i.test(navigator.userAgent)?document.addEventListener("DOMContentLoaded",c,!1):window.setTimeout(c,0)}
var backTop=function(c){function a(){d.style.display=e.scrollTop?"block":"none"}var d=document.getElementById(c),e=document.documentElement;window.onscroll=a;d.onclick=function(){d.style.display="none";window.onscroll=null;this.timer=setInterval(function(){e.scrollTop-=Math.ceil(e.scrollTop*0.1);if(e.scrollTop==0)clearInterval(d.timer,window.onscroll=a)},10);for(var c=this.offsetTop,f=0;f<20;f++)setTimeout("scrollBy(0,-"+parseInt(c/20)+")",f*50+1);return!1}};
DOMReady(function(){$("#ctrl_form").el.reset();window.location.hash||window.location.hash==""||$(".searchform .text").el.focus();backTop("gotop")});