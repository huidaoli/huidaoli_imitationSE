function Mail(a){function b(a){for(var d=0;d<m.length;++d)if(m[d].name.trim()==a)return(a=m[d])?a.jump?(window.open(a.action),a=!1):(f.action=a.action,l=a.params,a=!0):a=!1,a;return!1}var d=a.select,f=a.form,h=a.userInputBox,g=a.passInputBox,j=a.storage,l=null,m=[{mail:"163",name:"@163.com",action:"http://reg.163.com/CheckUser.jsp",params:{url:"http://entry.mail.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15",username:"#{u}",password:"#{p}"}},{mail:"126",name:"@126.com",
action:"https://reg.163.com/logins.jsp",params:{domain:"126.com",username:"#{u}@126.com",password:"#{p}",url:"http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1"}},{mail:"sina",name:"@sina.com",action:"http://mail.sina.com.cn/cgi-bin/login.cgi",params:{u:"#{u}",psw:"#{p}"}},{mail:"yahoocomcn",name:"@yahoo.com.cn",action:"https://edit.bjs.yahoo.com/config/login",params:{login:"#{u}@yahoo.com.cn",passwd:"#{p}",domainss:"yahoo",".intl":"cn",".src":"ym"}},
{mail:"yahoocn",name:"@yahoo.cn",action:"https://edit.bjs.yahoo.com/config/login",params:{login:"#{u}@yahoo.cn",passwd:"#{p}",domainss:"yahoocn",".intl":"cn",".done":"http://mail.cn.yahoo.com/inset.html"}},{mail:"sohu",name:"@sohu.com",action:"http://passport.sohu.com/login.jsp",params:{loginid:"#{u}@sohu.com",passwd:"#{p}",fl:"1",vr:"1|1",appid:"1000",ru:"http://login.mail.sohu.com/servlet/LoginServlet",ct:"1173080990",sg:"5082635c77272088ae7241ccdf7cf062"}},{mail:"yeah",name:"@yeah.net",action:"https://reg.163.com/logins.jsp",
params:{domain:"yeah.net",username:"#{u}@yeah.net",password:"#{p}",url:"http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1"}},{mail:"139",name:"@139.com",action:"https://mail.10086.cn/Login/Login.ashx",params:{UserName:"#{u}",Password:"#{p}",clientid:"5015"}},{mail:"tom",name:"@tom.com",action:"http://login.mail.tom.com/cgi/login",params:{user:"#{u}",pass:"#{p}"}},{mail:"21cn",name:"@21cn.com",action:"http://passport.21cn.com/maillogin.jsp",params:{UserName:"#{u}@21cn.com",
passwd:"#{p}",domainname:"21cn.com"}},{mail:"renren",name:"������",action:"http://passport.renren.com/PLogin.do",params:{email:"#{u}",password:"#{p}",origURL:"http://www.renren.com/Home.do",domain:"renren.com"}},{mail:"baidu",name:"��¼�ٶ�",action:"https://passport.baidu.com/?login",params:{u:"http://passport.baidu.com/center",username:"#{u}",password:"#{p}"}},{mail:"51",name:"51.com",action:"http://passport.51.com/login.5p",params:{passport_51_user:"#{u}",passport_51_password:"#{p}",gourl:"http%3A%2F%2Fmy.51.com%2Fwebim%2Findex.php"}},
{name:"@qq.com",jump:!0,action:"http://mail.qq.com"},{name:"@foxmail.com",jump:!0,action:"http://mail.qq.com/cgi-bin/loginpage?t=fox_loginpage"},{name:"@gmail.com",jump:!0,action:"http://gmail.com"},{name:"@hotmail.com",jump:!0,action:"https://login.live.com"}];(function(){if(d&&f&&h&&g&&(f.onsubmit=function(){if(0==d.getSelectIdx())return alert("��ѡ������"),!1;if(!haveClass(h,"onfocus")||""==h.value.trim())return alert("�����������û���"),!1;if(""==g.value.trim())return alert("��������������"),!1;if(l)for(key in l)a:{var a=
key,b=l[key].replace("#{p}",g.value.trim()).replace("#{u}",h.value.trim()),e=$("mlogin");if(e){for(var f=e.getElementsByTagName("input"),n=0;n<f.length;++n)if(f[n].name==a){f[n].value=b;break a}f=document.createElement("input");f.setAttribute("type","hidden");f.setAttribute("name",a);f.setAttribute("value",b);e.appendChild(f)}}st_get(this,"u01.func.mail",d.getSelectIdx())},d.onchange=function(){b(d.getOptions(d.getSelectIdx()))?j&&j.set("mailselect2",d.getSelectIdx()):d.setSelectIdx(0)},j)){var a=
parseInt(j.get("mailselect2"));a&&d.setSelectIdx(a)&&b(d.getOptions(a))}})()}
function SoSo_SmartBox(a,b,d){var f=this,h="object"==typeof a?a:document.getElementById(a),g=!1,j=-1,l=[],m=[],e="",u="",p=null,t=!1,v=0,n=function(){for(pos in l)l[pos].className="mouseout"},r=function(a){return"string"==typeof a?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):""},q=r(h.value),s=function(){"function"==typeof b&&b()},o=function(){t=!1;j=-1;l=[];m=[];e="";var a="object"==typeof v?v:document.getElementById(v);a&&null!=a&&a.parentNode.removeChild(a)},B=function(){var a=document.createElement("div");
a.id=v="soso_SmartPop_"+Math.round(1E5*Math.random());a.className="soso_SmartPop";a.style.height=""+26*m.length+"px";for(i in m){var d=document.createElement("div");d.style.height="26px";d.seq=parseInt(i);(function(){var a=d;f.Event.add(d,"mouseover",function(){n();a.className="mouseover";j=a.seq})})();(function(){f.Event.add(d,"mouseout",function(){n();j=-1})})();(function(){f.Event.add(d,"click",function(){q=u=h.value=m[j].word;s()})})();var o=document.createElement("div");o.innerHTML=m[i].word;
d.appendChild(o);a.appendChild(d);l.push(d)}return a},C="soso_jpcall_"+Math.round(1E6+1E7*Math.random());window[C]=function(a){g=!0;o();u=e=h.value;if(""==r(a))a=!1;else{a=a.split("\n");res=[];for(i=0;i<a.length;i++)a[i]=a[i].split("\t"),res.push({word:a[i][1],hint:a[i][0],type:a[i][2]});a=res}if(m=a)c=B(),h.parentNode.appendChild(c),t=!0};var x=util.jsLoader,w=function(){if(haveClass(h,"onfocus")){soso_global_smartbox_data=[];g=!1;var a="http://www.soso.com/smart.q?w="+encodeURIComponent(h.value)+
"&m="+C+"&_"+Math.random();x(a)}},D=function(){null!=p&&(clearTimeout(p),p=null);p=setTimeout(function(){!g||r(h.value).length==0?o():d()&&e!=h.value&&w();p=null},300)};(function(){f.Event.add(h,"keypress",function(a){if(!t&&(38==a.keyCode||40==a.keyCode))g=!0,D();0!=l.length&&13==a.keyCode&&-1!=j&&(f.Event.stop(a),q=h.value,s())});f.Event.add(h,"keyup",function(a){if(!t&&(38==a.keyCode||40==a.keyCode))g=!0,D();0!=l.length&&(13==a.keyCode&&-1!=j?(f.Event.stop(a),q=h.value,s()):38==a.keyCode?(f.Event.stop(a),
n(),j=0>j?l.length-1:j-1,-1==j?e=h.value=u:(l[j].className="mouseover",e=h.value=m[j].word)):40==a.keyCode?(f.Event.stop(a),n(),j=j>l.length-1?0:j+1,j==l.length?e=h.value=u:(l[j].className="mouseover",e=h.value=m[j].word)):27==a.keyCode&&(f.Event.stop(a),n(),o(),h.value=u))});f.Event.add(h,"blur",function(){g=!1;haveClass(h,"onfocus")&&D()});f.Event.add(window,"resize",function(){g&&w()});var a,d=function(){a=setTimeout(function(){q!=r(h.value)&&(q=r(h.value),g=!0,D());a=setTimeout(arguments.callee,
80)},80)};f.Event.add(h,"focus",function(){d()});f.Event.add(h,"blur",function(){clearTimeout(a)})})()}SoSo_SmartBox.prototype.Event={add:function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)},remove:function(a,b,d){a.removeEventListener?a.removeEventListener(b,d,!1):a.detachEvent("on"+b,d)},stop:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a.cancelBubble=!0,a.returnValue=!1)}};
function Observable(){var a={};this.addEventListener=function(b,d){if("function"!=typeof d)return!1;"undefined"==typeof a[b]&&(a[b]=[]);for(var f=0;f<a[b].length;++f)if(a[b][f]==d)return!1;a[b].push(d);return!0};this.removeEventListener=function(b,d){if("undefined"==typeof a[b])return!1;for(var f=0;f<a[b].length;++f)if(a[b][f]==d)return a[b].splice(f,1),!0;return!1};this.notify=function(b,d){if(a[b])for(var f=0;f<a[b].length;++f)if("function"==typeof a[b][f])a[b][f](d)}}
function SearchBox(a){function b(a){if(l)for(key in a)if(a[key]){for(var d=l.getElementsByTagName("input"),o=!1,b=0;b<d.length;++b)if(d[b].name.trim()==key.trim()){d[b].value=a[key];o=!0;break}o||(d=document.createElement("input"),d.type="hidden",d.name=key,d.value=a[key],l.appendChild(d))}}function d(a,d){l&&(l.innerHTML="");0==o&&(b(a.hiddeninputs),b(e));u="function"==typeof a.beforesubmit?a.beforesubmit:null;m.acceptCharset="undefined"!=typeof a.acceptCharset?a.acceptCharset:"GBK";m.action=a.action;
d?removeClass(p,"disable_multi"):addClass(p,"disable_multi");var f=typeof a.logo_img&&a.logo_img?a.logo_img:q;p.getElementsByTagName("img")[0].src=f;g.name=typeof a.key_name&&a.key_name?a.key_name:"w"}function f(a){if(""==g.value.trim())return stopBubble(a),!1;"function"==typeof w&&w();if("function"==typeof u&&!u(g.value.trim()))return stopBubble(a),!1;st_get(null,"dh.so.q",0);return!0}function h(){removeClass(p,"active");addClass(t,"hidden");"function"==typeof n&&n()}var g=a.input,j=a.tabBox,l=a.hiddenParamsDiv,
m=a.form,e=a.sourcePara,u=null,p=a.logo,t=a.engine_list,v=a.on_engine_list_open,n=a.on_engine_list_close,r=a.on_engine_change,q="/images/logo_soso_withname.png",s=a.enable_multi_engin,o=s&&a.engin_index||0,B=0,C=[];C[0]=o;if(g){var x=[[{action:"http://www.baidu.com/s",key_name:"wd",hiddeninputs:{rsv_bp:"0",rsv_spt:"3"},logo_img:"/images/logo_baidu.png"},{action:"http://www.baidu.com/s",key_name:"wd",logo_img:"/images/logo_baidu.png"},{action:"http://www.google.com.hk/search",logo_img:"/images/logo_google.png",key_name:"q"}],[{action:"http://image.soso.com/image.cgi",hiddeninputs:{sc:"img"}}],
[{action:"http://video.soso.com/search/"}],[{action:"http://cgi.music.soso.com/fcgi-bin/m.q"}],[{action:"http://wenwen.soso.com/z/Search.e",acceptCharset:"UTF-8",beforesubmit:function(a){a:{for(var a="S"+a+"\ufeff",d=l.getElementsByTagName("input"),o=0;o<d.length;++o)if("sp"==d[o].name){d[o].value=a;break a}d=document.createElement("input");d.type="hidden";d.name="sp";d.value=a;l.appendChild(d)}return!0},hiddeninputs:{ch:"w.search.sb"}}],[{action:"http://news.soso.com/n.q",hiddeninputs:{ty:"c"}}],
[{action:"http://map.soso.com/?pid=haoqq.map"}]],w=function(){0==o&&"undefined"!=typeof g_user&&g_user.isLogin()&&b({cid:e.cid+".q"})};this.closeEnginList=h;(function(){a.button&&(a.button.onclick=function(d){f(d)&&m.submit();if("function"==typeof a.onSearchHintwording&&!haveClass(a.input,"onfocus"))a.onSearchHintwording();g.focus();return!1});addListener(m,"submit",f);if(j){for(var b=j.getElementsByTagName("span"),e=0;e<b.length;++e)(function(b,e,n){addListener(b,"click",function(h){if(!(!j||!b||
b.className&&b.className=="currentTab")){for(var p=j.getElementsByTagName("span"),r=0;r<p.length;++r)p[r].className=p[r]===b?"currentTab":"";o=C[n]||0;B=n}d(e[o],s&&e.length>1);g.focus();!s&&haveClass(a.input,"onfocus")&&f(h)===true&&m.submit()});addListener(b,"mouseover",function(a){haveClass(b,"currentTab")||addClass(b,"hover");stopBubble(a)});addListener(b,"mouseout",function(){haveClass(b,"currentTab")||removeClass(b,"hover")})})(b[e],x[e],e);d(x[0][o],s&&1<x[0].length);addListener(p,"click",
function(a){if(haveClass(p,"disable_multi"))return true;if(haveClass(t,"hidden")){addClass(p,"active");removeClass(t,"hidden");typeof v=="function"&&v()}else h();stopBubble(a)});addListener(t,"click",function(a){for(var b=getEventTarget(a);b!=document.body&&b.tagName!="LI";)b=b.parentNode;if(b.tagName=="LI")for(var e=t.getElementsByTagName("li"),a=0;a<e.length;++a)if(e[a]==b){b=a;if(o!=b){o=b;C[B]=b;d(x[B][b],s&&x[B].length>1);typeof r=="function"&&r(b)}h();st_get(this,"dh.changeengin",a);break}})}})()}}
function Cookie(){this.get=function(a){return(a=document.cookie.match(RegExp("(^| )"+a+"=([^;]*)(;|$)")))?unescape(a[2]):null};this.getNotExpireTime=function(){var a=new Date;a.setTime(a.getTime()+31536E6);return a.toGMTString()};this.set=function(a,b,d,f,h){document.cookie=a+"="+escape(b)+"; expires="+(d?d:this.getNotExpireTime())+";path="+(f?f:"/")+"; domain=."+(h?h:window.location.host)};this.del=function(a,b,d){d=d||document.domain;document.cookie=a+"=;path="+(b?b:"/")+";domain="+d+";expires="+
(new Date("1970/1/1")).toGMTString()}}
function MobileCharge(){function a(a){var d=a.substring(0,3),f=a.substring(0,4);return a=/^1\d{10}$/.test(a)?0<="130,131,132,155,156,185,186,145".indexOf(d)?"��ͨ":0<="133,153,180,189".indexOf(d)?"����":"1349"==f?"����":0<="134,135,136,137,138,139,150,151,152,157,158,159,187,188,147".indexOf(d)?"�ƶ�":!1:!1}(function(){var b=new SelectCtl($("currentCharge"),$("chargeSelect"));b&&$("mobileAutoBtn")&&($("mobileAutoBtn").onclick=function(){var d=$("chgmobile");cVal=d.value;eVal=b.getOptions(b.getSelectIdx());
para="phone="+cVal+"&q="+eVal+"&cat=50004958&pid=mm_10054659_163834_9583678&mode=23&commend=1%2C2";""==cVal?(alert("�������ֻ����롣"),d.focus()):a(cVal)?"30000"==eVal&&"��ͨ"==a(cVal)?(alert("��ͨ�����ݲ�֧��300Ԫ��ֵ��"),b.focus()):window.open("http://s8.taobao.com/search?"+para):(alert("��������ֻ����벻��ȷ�����������룡"),d.focus())})})()}
function Ptlogin2(){var a=null,b=null,d=null;window.ptlogin2_onResize=function(d,h){a.style.width=d+"px";a.style.height=h+"px";b.style.top=(document.documentElement.clientHeight-h)/2+"px";b.style.left=(document.documentElement.clientWidth-d)/2+"px"};window.ptlogin2_onClose=function(){addClass(b,"nodisplay");d&&d.close()};this.open=function(){a||(b=document.createElement("div"),addClass(b,"loginDiv nodisplay"),a=document.createElement("iframe"),a.setAttribute("scrolling","no"),a.setAttribute("frameBorder",
0),b.appendChild(a),document.body.appendChild(b),d=new PageMask);removeClass(b,"nodisplay");a.src="http://web.qq.com"}}
function PageMask(){var a=null;this.open=function(){null==a&&(a=document.createElement("div"),addClass(a,"pageMask"),document.body.appendChild(a));a.style.width=document.body.clientWidth+"px";a.style.height=document.body.clientHeight+"px";a.style.display="block"};this.close=function(){a&&(a.style.display="none")}}
(function(a,b,d){function f(){g(H);g(M);z=y.get("uin");A=y.get("luin");E=y.get("skey");F=y.get("lskey");z&&(z=z.replace(/^o0*/,""));A&&(A=A.replace(/^o0*/,""));z=z?z:"";w("uin",z);E=E?E:"";w("skey",E);A=A?A:"";w("luin",A);F=F?F:"";w("lskey",F);s(I+"navedSite.php?"+v[q]("&"))}function h(){g(L);N||(H&&(H.style.display="block"),$("noLoginQQ").innerHTML=u)}function g(a){a&&(a.style.display="none")}function j(d){var b=d.expireat;"function"==typeof D&&D(d);d.daily||(st_get(null,"dh.sendnavfinish",0),K(d.r,
function(){w("x",o(d.r))("y",o(d.s))("hs",a[p])("ss",a[t]);s(I+"navi.php?callback=avFinishCallback&"+v[q]("&"));y.set(J,1,b)}))}function l(a){a?"function"===typeof G&&(st_get(null,"dh.navfinish",0),G(a)):st_get(null,"dh.navnotfinish",0)}function m(a){for(var d=[],b=(1<<x)-1,o=0,e=a.length;o<e*x;o+=x)d[o>>5]|=(a.charCodeAt(o/x)&b)<<o%32;return d}function e(a){for(var d=r?"0123456789ABCDEF":"0123456789abcdef",b="",o=0,e=a.length;o<4*e;o++)b+=d.charAt(a[o>>2]>>8*(o%4)+4&15)+d.charAt(a[o>>2]>>8*(o%4)&
15);return b}var u=util.readGet().uin,p="haosign",t="sososign",v=[],n={},r=0,q="join",s=util.jsLoader,o=encodeURIComponent,B=Math,C=cd="concat",x=8,w=function(a,d){if(a in n)return w;n[a]=!0;v=v[C](a[cd]("=",d));return w},D,G,y=new Cookie,J="navedDaily",I="http://faxin.soso.com/",L=$("tipLogin"),H=$("tipNoLogin"),M=$("tipErrQQ"),N=y.get(J),z=y.get("uin"),E=y.get("skey"),A=y.get("luin"),F=y.get("lskey"),K=function(d,b){if(!a[p])return setTimeout(function(){K(d,b)},50),!1;var f=z||A;a[t]=e(m(o(a.__nick||
"nologin")+"|"+f+"|"+d)).split("").reverse()[q]("");b()};a[b]=function(e,n){D=e;G=n;a[b+"FinishCallback"]=l;a[b+"Callback"]=j;d.onmousemove=function(b){var b=b||event,e=[],f=z||A;d.onmousemove=null;for(var b=m([o(a.__nick||"nologin"),b.type,b.pageX||b.clientX,f,b.pageY||b.clientY][q]("|")),f=[],n=0,g=b.length;n<g;n++)e[n]=n;e.sort(function(){return 5*B.random()-1});f.push(e[q]("_"));for(n=0;n<g;n++)f.push(b[e[n]]);a[p]=f[q](",")};return{login:f,nologin:h}}})(window,"av",document);
function SelectCtl(a,b){function d(d){if(0>d||d>=u)d=0;g=d;a.innerHTML=e[d].innerHTML.truncate_cn(10);return!0}function f(){j?h():(b.style.display="block",j=!0)}function h(){b.style.display="none";j=!1}if(!a||!b)return null;var g=0,j=!1,l=this,m=b.getElementsByTagName("li"),e=b.getElementsByTagName("a"),u=m.length;this.setSelectIdx=d;this.getSelectIdx=function(){return g};this.getOptions=function(a){a=m[a].getAttribute("optionvalue");"undefined"==typeof a&&(a="");return a};this.toggle=f;(function(){addListener(a,
"click",function(a){f();stopBubble(a)});addListener(b,"click",function(a){stopBubble(a);for(a=getEventTarget(a);"LI"!=a.tagName;){if(a===document.body)return;a=a.parentNode}h();for(var b=0;b<m.length;++b)if(m[b]===a){if(b===g)break;d(b);h();if("function"==typeof l.onchange)l.onchange();break}});addListener(document.body,"click",function(){h()})})()}
(function(){var a="http://dl.softmgr.qq.com/original/im/QQ2011_1.71.5074.0.exe,http://dl.softmgr.qq.com/original/im/Install_WLMessenger_14.0.8117.0416.exe,http://dl.softmgr.qq.com/original/im/Fetion_QQdngj_4.7.800.0.exe,http://dl.softmgr.qq.com/original/im/AliIM2011_taobao_7.00.21C.exe,http://download.ppstream.com/hz/ppstreamsetup_spl001@xp293.exe,http://dl.softmgr.qq.com/original/Video/cboxbeta2.1.0.1.exe,http://go.t3nlink.com/click?pid=97&mid=23740&pt=df&channel=1,http://23740.wauee.com/funshion/full/f_index.html?pid=82&mid=23740&channel=1&pt=df,http://dl_dir.qq.com/invc/cyclone/QQDownload_Setup_39_708_p1.exe,http://dl.softmgr.qq.com/original/Download/Thunder7.2.5.3364.exe,http://dl.softmgr.qq.com/original/Download/eMule0.50a-Installer.exe,http://dl.softmgr.qq.com/original/Download/flashget3.7.0.1198cn.exe,http://dl_dir.qq.com/invc/tt/QQBrowser_Setup_Qqpcmgr_11981.exe,http://dl.softmgr.qq.com/original/Browser/SogouExplorer_3.1.0.3959_6163.exe,http://dl.softmgr.qq.com/original/Browser/chrome_17.0.963.56.exe,http://dl.softmgr.qq.com/original/Browser/Firefox-latest_10.0.2.4428.exe,http://dl.softmgr.qq.com/original/Audio/iTunesSetup_10.5.3.3.exe,http://dl.softmgr.qq.com/original/Drivers/Nokia_PC_Suite_chi_sc_web_7.1.180.46.exe,http://zs.91.com/,http://msoft.qq.com/d/safe/,http://dl.softmgr.qq.com/original/Audio/QQMusic2012_8.12.2412.223.exe,http://dl_dir.qq.com/invc/qqplayer/QQPlayer_Setup_34_871.exe,http://dl.softmgr.qq.com/original/Video/baofeng0222-964.exe,http://dl.softmgr.qq.com/original/Video/QIYImedia-V1.4.0.124.exe,http://dl_dir2.qq.com/invc/qqpcmgr/setup/QQPCMgr_Setup_Basic_66_2156.exe,http://j.union.ijinshan.com/jump.php?u_key=549,http://dl.softmgr.qq.com/original/Safe/ris_xzz_23.00.52.07.exe,http://count.chanet.com.cn/click.cgi?a=212181&d=101083&u=&e=,http://dl_dir3.qq.com/minigamefile/QQGame2011ReleaseP1_setup_guanjia.EXE,http://dl.softmgr.qq.com/original/game/GLWORLD_2.8.6.1.exe,http://dl.softmgr.qq.com/original/game/HFSetup5.8.0.1205.exe,http://oreg.jj.cn/othersite/sitereg_comm.html?siteId=12802,http://dl.softmgr.qq.com/original/Input/QQPinyin_Setup_1.0.1094.400.exe,http://dl.softmgr.qq.com/original/Input/sogou_pinyin_61_5898.exe,http://dl.softmgr.qq.com/original/Input/GooglePinyinInstaller_3.0.1.98.exe,http://dl.softmgr.qq.com/original/Input/wnwb_800_50.exe,http://dl_dir.qq.com/invc/qqimage/QQImage_Setup_20_400.exe,http://dl.softmgr.qq.com/original/Picture/XiuXiu_qqgj_3.0.9.1001.exe,http://dl.softmgr.qq.com/original/Picture/NeoImaging3.1.2.104.exe,http://dl.softmgr.qq.com/original/Picture/conew_setup_2.7.2.2001.exe".split(",");if($("softwareWrap"))for(var b=
$("softwareWrap").getElementsByTagName("a"),d=0;d<b.length;++d)b[d].href=a[d],function(a){addListener(b[a],"click",function(){st_get(this,"dh.soft",a)})}(d)})();
function TopBar(a){a||(a={});var b=a.container||$("topWrap");b.appendChild(function(){var a=document.createElement("div");addClass(a,"fl");for(var b=[{text:"ʵ�ò�ѯ",href:"/chaxun.html"},{text:"��Ӱ",href:"http://v.6164.com/"},{text:"���Ӿ�",href:"http://v.6164.com/tv/"},{text:"�Ź�",href:"http://tuan.6164.com/"},{text:"��Ϸ",href:"/youxi.html"},{text:"��Ʊ",href:"/caipiao.html"}],h=["<a class='setIndex' href='javascript:;' target='_self'><span class='icon'></span><span>��Ϊ��ҳ</span></a><span class='line'></span>"],
g=0;g<b.length;++g)h.push("<a href='{$href}'>{$text}</a>".replace("{$href}",b[g].href).replace("{$text}",b[g].text));a.innerHTML=h.join("");addListener(a,"click",function(b){var f=getEventTarget(b);if("SPAN"==f.tagName||haveClass(f,"setIndex"))stopBubble(b),st_get(f,"dh.leftsethome",0),setHomepage(location.href);else if("A"==f.tagName&&(b=a.getElementsByTagName("a")))for(var g=0;g<b.length;++g)if(b[g]===f)return st_get(f,"dh.topleft",g)});return a}());this.show=function(a){a&&(addClass(a,"fr"),b.appendChild(a))}}
function UserModel(){this.isLogined=!1;this.face=1;this.golds=0;this.isLogin=function(){return this.isLogined};this.getFaceImgUrl=function(){var a=parseInt(this.face),a=parseInt((a+3)/3);if(1>a||180<a)a=1;return"http://cache.soso.com/img/i/faces/u"+a+".gif"};this.getNick=function(){return this.nick||""}}
function UserController(a){function b(){p.set(n,f(s))}function d(){var a=p.get(n),b={};if("string"==typeof a)for(var a=a.split("|"),d=0;d<a.length;++d){var e=a[d].split("=");2==e.length&&(b[e[0]]=e[1])}for(k in s)"undefined"!=typeof b[k]&&(s[k]=b[k])}function f(a){var b=[];for(k in a)b.push(k+"="+a[k]);return b.join("|")}function h(a,b){if(!1!==a)for(k in window.g_user=r,r.isLogined=!0,a)r[k]=a[k];"function"===typeof b&&b(r)}function g(a){try{a&&a.gold&&q&&(r.golds=parseInt(r.golds)+parseInt(a.gold),
q.showItemTip("golds","���("+r.golds+")"))}catch(b){}}function j(a){if(!(p.get("skey")&&p.get("uin")||p.get("lskey")&&p.get("luin")))return st_get(null,"dh.nologin",0),h(!1,a);"function"==typeof av&&(st_get(null,"dh.getinfostart",0),avObj=av(function(b){st_get(null,"dh.getinfoend",0);h(b,a)},g),avObj.login())}function l(a){a.isLogin()?(t.show(q.createLoginView(a)),q.showItemTip("golds","���("+a.golds+")"),e(u)):t.show(q.createUnLoginView())}function m(a){function b(a){a=parseInt(a);return isNaN(a)?
0:a}if(q){for(var d=["weibo","qzone","qqmail"],e=0;e<d.length;++e)a[d[e]]&&a[d[e]].data&&(a[d[e]].data.number=0);try{a.weibo.data.number+=b(a.weibo.data.create),a.weibo.data.number+=b(a.weibo.data.fans),a.weibo.data.number+=b(a.weibo.data.home),a.weibo.data.number+=b(a.weibo.data.mentions),a.weibo.data.number+=b(a.weibo.data["private"]),a.qqmail.data.number=b(a.qqmail.data.unreadcount),a.qzone.data.number=0,a.qzone&&a.qzone.data&&(a.qzone.data.number=b(a.qzone.data.initnum),a.qzone.data.number+=b(a.qzone.data.aboutnum),
a.qzone.data.number+=b(a.qzone.data.passivenum))}catch(f){}for(e=0;e<d.length;++e){var n=a[d[e]].data;if(n){n.number=b(n.number);try{q.showItemTip(d[e],99<n.number?"99+":0!=n.number?n.number:"",0!=n.number&&n.number!=s[d[e]+"num"])}catch(g){}r[d[e]]=n}}}}function e(a){var b="getUnreadNumber"+parseInt(1E6*Math.random());window[b]=function(d){m(d,a);window[b]=null};jsLoader("http://sou.qq.com/online/getunreadnum.php?func="+b)}function u(){}var p=a.cookie,t=new TopBar,v=new Ptlogin2,n="txtips",r=new UserModel,
q=null,s={nologintip:!1,qqmailnum:0,weibonum:0,qzonenum:0};this.loadBasicInfo=function(){j(l)};(function(){d();q=new UserView({nologintip:s.nologintip});q.addEventListener("click_exit",function(){for(var a="uin,skey,luin,lskey,__nick,__face".split(","),b=0;b<a.length;++b)p.del(a[b]);location.href=location.href;st_get(null,"dh.click_exit",0)});q.addEventListener("close_tip",function(){s.nologintip=1;b();st_get(null,"dh.close_tip",0)});q.addEventListener("click_login",function(){s.nologintip=1;b();
v.open();st_get(null,"dh.click_login",0)});q.addEventListener("click_item",function(a){"undefined"!=typeof s[a+"num"]&&"undefined"!=typeof r[a]&&(s[a+"num"]=r[a].number);b();st_get(null,"dh.item."+a,0)})})()}
function UserView(a){function b(a){return 0==a?"":a>u?"99+":a}function d(){var a=document.createElement("span");addClass(a,"line");return a}function f(a,b){var d=document.createElement("a");addClass(d,"user");d.innerHTML="<img class='avatar' src='${avatar}' alt=''/ ><span class='name'>${usernick}</span>".replace("${avatar}",a).replace("${usernick}",b.truncate_cn(12).escapeHTML());d.href="http://soso.qq.com/q?bid=303";return d}function h(a){var b=document.createElement("a"),d=document.createElement("span"),
e=document.createElement("span");a.className&&addClass(b,a.className);addClass(d,"icon");addClass(e,"num");if(a.has_tip){var f=document.createElement("span");addClass(f,"tip hidden");d.appendChild(f)}b.appendChild(d);b.appendChild(e);if(a.menu_config){var g=null;addListener(b,"mouseover",function(d){stopBubble(d);g||(g=new Menu(a.menu_config));g.showAt(b.getBoundingClientRect().top+35,b.getBoundingClientRect().left+10)});addListener(b,"mouseout",function(a){var a=a.relatedTarget||a.toElement,d;if(d=
a){for(;a&&a!=b&&a!=document.body;)a=a.parentNode;d=a==b}d||g&&g.hidden()});addListener(b,"click",function(){g&&g.hidden()})}a.href&&(b.href=a.href);return b}function g(a){var b=100;a.style.zoom=1;var d=setInterval(function(){b-=5;a.style.opacity=parseFloat(b/100);a.style.filter=" alpha(opacity = "+b+");";0>=b&&(clearTimeout(d),addClass(a,"nodisplay"))},15)}function j(){var a=document.createElement("a");a.innerHTML="�˳�";a.href="#";addListener(a,"click",function(a){stopBubble(a);l.notify("click_exit")});
return a}var l=new Observable,m=null,e=null,u=99,p={qzone:{className:"qZone",has_tip:!0,dom:null,href:"http://qzone.qq.com",menu_config:{title:"QQ�ռ�",items:[{html:function(){return!e||!e.qzone||!(e.qzone.initnum+e.qzone.passivenum)?"":"���Ѷ�̬("+b(e.qzone.initnum+e.qzone.passivenum)+")"}},{html:function(){return!e||!e.qzone||!e.qzone.aboutnum?"":"�����й�("+b(e.qzone.aboutnum)+")"}}]}},weibo:{dom:null,menu:null,has_tip:!0,href:"http://t.qq.com",className:"twitter",menu_config:{title:"��Ѷ΢��",items:[{html:function(){return!e||
!e.weibo||!e.weibo.home?"":"δ����Ϣ("+b(e.weibo.home)+")"}},{html:function(){return!e||!e.weibo||!e.weibo["private"]?"":"δ��˽��("+b(e.weibo["private"])+")"}},{html:function(){return!e||!e.weibo||!e.weibo.fans?"":"��������("+b(e.weibo.fans)+")"}},{html:function(){return!e||!e.weibo||!e.weibo.mentions?"":"�ᵽ�ҵ�("+b(e.weibo.mentions)+")"}},{html:function(){return!e||!e.weibo||!e.weibo.create?"":"��ҳ�㲥("+b(e.weibo.create)+")"}}]}},qqmail:{dom:null,className:"mail",hasseperate:!0,has_tip:!0,href:"http://mail.qq.com",
menu_config:{title:"QQ����",items:[{html:function(){return!e||!e.qqmail||!e.qqmail.unreadcount?"":"δ���ʼ�("+b(e.qqmail.unreadcount)+")"}}]}},golds:{className:"gold",href:"http://soso.qq.com/q?bid=303&cid=dh.my.coin&ch=dh.my.coin&channel=naved",hasseperate:!0}},t={},v=a.nologintip||!1;this.createLoginView=function(a){if(!m){m=document.createElement("div");t=f(a.getFaceImgUrl(),a.getNick());m.appendChild(t);m.appendChild(d());for(k in p)p[k].dom=h(p[k]),p[k].dom&&m.appendChild(p[k].dom),function(a,b){addListener(b.dom,
"click",function(){try{for(var d=b.dom.getElementsByTagName("span"),e=0;e<d.length;++e)if(haveClass(d[e],"tip")){addClass(d[e],"hidden");break}l.notify("click_item",a)}catch(f){}})}(k,p[k]),p[k].hasseperate&&m.appendChild(d());m.appendChild(j())}e=a;return m};this.createUnLoginView=function(){var a=document.createElement("x");a.href="http://web.qq.com/";addListener(a,"click",function(a){stopBubble(a);try{l.notify("click_login")}catch(b){}d&&addClass(d,
"nodisplay")});var b=document.createElement("div");addClass(b,"login");b.appendChild(a);if(v)return b;var d=$("loginTip");if(!d)return b;removeClass(d,"nodisplay");addListener(d,"click",function(a){stopBubble(a);if((a=getEventTarget(a))&&"A"==a.tagName)try{g(d),l.notify("close_tip")}catch(b){}});setTimeout(function(){g(d)},1E4);return b};this.showItemTip=function(a,b,d){if(a&&p[a].dom)for(var a=p[a].dom.getElementsByTagName("span"),e=0;e<a.length;++e)d&&haveClass(a[e],"tip")&&removeClass(a[e],"hidden"),
haveClass(a[e],"num")&&b&&(a[e].innerHTML=b)};this.addEventListener=function(a,b){l.addEventListener(a,b)};this.removeEventListener=function(a,b){l.removeEventListener(a,b)}}
function Menu(a){function b(){if(m){m.innerHTML="";for(var a=null,b=0;b<d.length;++b)if(a=h[b])"function"==typeof d[b].html?a.innerHTML=d[b].html():"string"==typeof d[b].html&&""!=d[b].html&&(a.innerHTML=d[b].html),a.innerHTML&&m.appendChild(a)}}var d=a.items||[],f=a.title||"",h=[],g=null,j=null,l=null,m=null;this.showAt=function(a,b){l&&clearTimeout(l)&&(l=null);clearTimeout(j);j=setTimeout(function(){j=null;a&&(g.style.top=parseInt(a)+"px");b&&(g.style.left=parseInt(b)+"px");removeClass(g,"hidden")},
200)};this.hidden=function(){j&&clearTimeout(j)&&(j=null);clearTimeout(l);l=setTimeout(function(){l=null;addClass(g,"hidden")},0)};(function(){g=document.createElement("div");m=document.createElement("ul");addClass(g,"msgTip");for(var a=0;a<d.length;++a){var j=document.createElement("li");h.push(j)}b();a=document.createElement("span");addClass(a,"arrow");g.appendChild(a);f&&(a=document.createElement("h3"),a.innerHTML=f,g.appendChild(a));g.appendChild(m);addListener(g,"click",function(a){stopBubble(a)});
addClass(g,"hidden");document.body.appendChild(g)})()}
(function(){function a(a){setHomepage(location.href);stopBubble(a);return!1}(new UserController({cookie:g_cookie})).loadBasicInfo();new SoSo_SmartBox("soso_input",function(){for(var a=$("hiddenParamsDiv").getElementsByTagName("input"),b=null,d=0;d<a.length;++d)if("cid"==a[d].name){b=a[d];break}if(b){var f=b.value;b.value=g_SourcePara.cid+".smart"+("undefined"!=typeof g_user&&g_user.isLogin()?".q":"")}$("searchForm").submit();st_get(null,"dh.smartbox",0);"undefined"!=typeof f&&f&&(b.value=f);return!0},
function(){return!0});new Mail({select:new SelectCtl($("currentMail"),$("mailSelectList")),form:$("mlogin"),userInputBox:$("mailUserName"),passInputBox:$("mailPassword"),hiddenDiv:$("mailHiddenDiv"),storage:g_cookie});var b=new SearchBox({input:$("soso_input"),tabBox:$("searchTabBox"),hiddenParamsDiv:$("hiddenParamsDiv"),button:$("sosoSearchBtn"),form:$("searchForm"),logo:$("search_engin_logo"),engine_list:$("engineList"),engin_index:g_cookie.get("last_engin"),enable_multi_engin:"object"==typeof AppConfiguration&&
AppConfiguration.enable_multi_engin,sourcePara:{cid:g_SourcePara.cid+".so",unc:g_SourcePara.unc},on_engine_change:function(a){g_cookie.set("last_engin",a)},onSearchHintwording:function(){st_get(null,"dh.queryhint",0);"function"==typeof changeQueryHintwording&&changeQueryHintwording()}});addListener($("setHomeLink"),"click",function(b){st_get(this,"u01.func.homepage",0);a(b)});addListener($("setHome"),"click",function(b){st_get(this,"u01.func.homepage",1);a(b)});addListener($("haoLogo"),"click",function(b){st_get(this,
"u01.func.homepage",2);a(b)});setTimeout(function(){$("soso_input").focus()},0);var d=$("mailPwdHint"),f=$("mailPassword");f&&(f.onfocus=function(){this.value="";this.onfocus=null},f.style.display="none");d&&(d.onfocus=function(){this.style.display="none";if(f){f.style.display="block";f.focus()}});installStat();addListener(document.body,"click",function(){b.closeEnginList()});new MobileCharge;for(var d=document.body.getElementsByTagName("a"),h=0;h<d.length;++h)d[h].hideFocus=!0})();