(function(){var seSepcial=function(){var sid=external.twGetSecurityID(window),seVer=+external.twGetVersion(sid).replace(/\./g,""),sePath=external.twGetRunPath;if(!is360se){is360se=sePath.toLowerCase().indexOf("360se")>-1?true:false;}if(!is360se){document.getElementById("topbar-homepage").style.visibility="";return;}try{var baokuVersion=external.SendMessageToExt(sid,"pluginbar","GetPluginbarVersion","","");if(baokuVersion!==""&&typeof baokuVersion!=="undefined"){document.getElementById("topbar-homepage").style.display="none";document.getElementById("topbar-baoku").style.display="";}else{document.getElementById("topbar-homepage").style.visibility="";}}catch(e){document.getElementById("topbar-homepage").style.visibility="";}if(seVer)setTimeout(function(){qtool.load("jq",function(){if(seVer>=3103&&location.search.indexOf("src=sehomeb")>0){$("#J_SemodeBox").show();$("#J_SemodeBox input").click(function(){external.SetOptionValue(sid,"option","UseSimple","0");location.replace("se:home");});}$("#mynav-op").attr("href","http://hao.360.cn/unclose2011614.html").text("\u6700\u8fd1\u672a\u5173\u95ed\u9875").removeAttr("id").click(function(e){e.stopPropagation();});});},200);var isHide=false;try{isHide=(!!external.GetOptionValue(sid,"haostorage","hideMostVisited"))||false;}catch(e){}if(isHide)return;qtool.userData=function(ns){this.ns=ns;var el=document.createElement('script');el.id=ns;el.style.display='none';el.addBehavior('#default#userdata');document.getElementsByTagName('head')[0].appendChild(el);this.el=el;};qtool.userData.ins=(function(){var _objs={};return function(ns){var key="Qsto"+ns;if(!_objs[key])_objs[key]=new qtool.userData(ns);return _objs[key];}})();qtool.userData.prototype.set=function(key,val){this.el.setAttribute(key,escape(val));this.el.save(this.ns);};qtool.userData.prototype.get=function(key){try{this.el.load(this.ns);var val=this.el.getAttribute(key);return val?unescape(val):val;}catch(e){return null;}};qtool.userData.prototype.remove=function(key){this.el.load(this.ns);var val=this.el.getAttribute(key);this.el.removeAttribute(key);this.el.save(this.ns);return val?unescape(val):val;};qtool.getByteLength=function(source){return String(source).replace(/[^\x00-\xff]/g,"ci").length;};qtool.subByte=function(source,length,tail){source=String(source);tail=tail||'';if(length<0||qtool.getByteLength(source)<=length){return source;}source=source.substr(0,length).replace(/([^\x00-\xff])/g,"\x241 ").substr(0,length).replace(/[^\x00-\xff]$/,"").replace(/([^\x00-\xff]) /g,"\x241");return source+tail;};var _fixBlankData=function(){var blankData=[];if(dataMode==="v4"){var parseXML=function(data,xml,tmp){if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}tmp=xml.documentElement;if(!tmp||!tmp.nodeName||tmp.nodeName==="parsererror"){return"";}return xml;};var newTab=external.GetNewTabWebObj(sid),xmldoc=parseXML(newTab.GetBrowserData('oftenUrls'));if(xmldoc){var websiteWrap=xmldoc.getElementsByTagName("websites")[0];if(websiteWrap){var websites=websiteWrap.getElementsByTagName("website"),i=0,max=websites.length;for(;i<max;i++){siteurl=websites[i].getAttribute("url"),sitename=websites[i].getAttribute("title");if(siteurl&&siteurl!=="null"&&sitename&&sitename!=="null"){var iconsrc=external.GetUrlIconPath(sid,siteurl);if(!iconsrc){iconsrc="http://img.qihoo.com/images/2008/hao360/20110308/siteico.gif";}blankData.push([sitename,siteurl,iconsrc]);}}}}}else{var list=external.GetBlankItemData().split("@@@");for(var i=0,max=list.length;i<max;i++){var itemsplit=list[i].split("##"),siteurl=itemsplit[1],sitename=itemsplit[0].split("&|")[0];if(siteurl&&siteurl!=="null"&&sitename&&sitename!=="null"){var iconsrc=external.GetUrlIconPath(sid,siteurl);if(!iconsrc){iconsrc="http://img.qihoo.com/images/2008/hao360/20110308/siteico.gif";}else{iconsrc="file:///"+iconsrc;}blankData.push([sitename,siteurl,iconsrc]);}}}return blankData;},loadMostVisited=function(){var blankData=_fixBlankData(),contHtml="",existCnt=0;outerloop:for(var i=0,max=blankData.length;i<max;i++){var siteurl=blankData[i][1],sitename=blankData[i][0],iconsrc=blankData[i][2];if(!/^[\w-]+:/ig.test(siteurl)){siteurl="http://"+siteurl;}var siteKey=(siteurl.substr(7,4)==="www.")?siteurl.substr(11,2):siteurl.substr(7,2);if(famousSite[siteKey]){for(var j=0,maxj=famousSite[siteKey].length;j<maxj;j++){var site=famousSite[siteKey][j];if(siteurl.indexOf(site)>-1){continue outerloop;}}}var sitename_short=sitename;if(sitename.length>5){sitename_short=qtool.subByte(sitename,10,"...");}contHtml+='<li title="'+sitename+'"><a href="'+siteurl+'"><b><img src="'+iconsrc+'" /></b>'+sitename_short+'</a><a index="'+i+'" title="\u5220\u9664" url="'+siteurl+'" class="close"></a></li>';existCnt++;}contHtml=(existCnt>0)?'<ul class="visited-list">'+contHtml+'</ul>':"\u8fd9\u91cc\u5c06\u81ea\u52a8\u6dfb\u52a0\u60a8\u6700\u5e38\u8bbf\u95ee\u7684\u7f51\u5740";document.getElementById("most-visited-cont").innerHTML=contHtml;},startVer=3706,canShow=false,dataMode="v3",storer=qtool.userData.ins("hao360"),contHtml="\u6570\u636e\u8bfb\u53d6\u4e2d....";if(seVer>startVer||seVer===3615||seVer===3617){canShow=true;}try{if(typeof external.GetNewTabWebObj(sid)!=="undefined"){dataMode="v4";}}catch(e){}if(!isHide){isHide=qtool.cookie.get("hideMostVisited")||false;}if(!isHide){isHide=(storer.get("hideMostVisited"))?true:false;}if(canShow&&!isHide){var famousSite={"ha":["hao.360.cn"],"tu":["tuan.360.cn","tudou.com"],"di":["dianying.360.cn"],"tv":["tv.360.cn","tv.sohu.com"],"v.":["v.360.cn"],"xi":["xiaoshuo.360.cn","xiaoyouxi.360.cn","xinhuanet.com"],"36":["360.cn","360buy.com"],"ma":["mall.360.cn"],"to":["tools.360.cn"],"ba":["baidu.com"],"ti":["tieba.baidu.com","tianya.cn"],"si":["sina.com.cn"],"so":["sohu.com"],"16":["163.com"],"em":["email.163.com"],"if":["ifeng.com"],"qq":["qq.com"],"re":["renren.com"],"ka":["kaixin001.com"],"go":["gov.cn","google.com"],"10":["10086.cn"],"yo":["youku.com"],"ea":["eastmoney.com"],"pe":["people.com.cn"],"cn":["cntv.cn"],"zh":["zhcw.com","zhenai.com","zhaopin.com"],"ta":["taobao.com"],"zo":["zol.com.cn"],"bi":["bitauto.com"],"ji":["jiayuan.com"],"mo":["mop.com"],"ic":["icbc.com.cn"],"58":["58.com"],"ga":["ganji.com"],"51":["51.com","51seer.com"],"ct":["ctrip.com"],"va":["vancl.com"],"da":["dangdang.com"],"am":["amazon.cn"],"pc":["pconline.com.cn"],"qu":["qunar.com"],"fo":["focus.cn"],"su":["suning.com"],"le":["letao.com"],"wa":["wan.360.cn"],"m1":["m18.com"],"mb":["mbaobao.com"],"la":["lashou.com"]};document.getElementById("most-visited-wrap").innerHTML='<div id="most-visited"><h2 class="title">\u6700\u5e38\u8bbf\u95ee\uff1a</h2><div class="content" id="most-visited-cont">'+contHtml+'</div><a class="visited-remove" title="\u5173\u95ed\u8fd9\u4e00\u884c"></a></div>';setTimeout(function(){loadMostVisited();qtool.load("jq",function(){$("#most-visited .content li").hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});$("#most-visited li .close").click(function(){var index=$(this).attr("index"),url=$(this).attr("url");if(dataMode==="v4"){var newTab=external.GetNewTabWebObj(sid);newTab.AddUrlToBlack(url);}else{external.SendMessageToExt(sid,"extpages","DeleteItem","",index+"");}$(this).parents("li").remove();existCnt--;if(existCnt===0){$("#most-visited .content").html("\u8fd9\u91cc\u5c06\u81ea\u52a8\u6dfb\u52a0\u60a8\u6700\u5e38\u8bbf\u95ee\u7684\u7f51\u5740");}});$(".visited-remove").click(function(){if(confirm('\u5173\u95ed\u201c\u6700\u5e38\u8bbf\u95ee\u201d\u8fd9\u4e00\u884c\uff0c\u4e0d\u518d\u663e\u793a')){setTimeout(function(){$("#most-visited").html("").hide();},100);try{external.SetOptionValue(sid,"haostorage","hideMostVisited","true");}catch(e){storer.set("hideMostVisited","1");qtool.cookie.set("hideMostVisited","1",{expires:30});}}});});},200);}};try{seSepcial();}catch(e){document.getElementById("topbar-homepage").style.visibility="";}})();