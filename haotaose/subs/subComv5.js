/**************
* @title  内页统一js 12-05-02 xm
* @des    内页统一js 包含 收藏、设为首页、统一日志处理。
* @cancel 搜索提示功能由于页面样式众多，且使用少，不纳入，搜索提示拆为单独js。
***/

var addFavorite =  AddFavorite = function(sURL,sTitle){
   var sURL =  sURL || window.location.href;
   var sTitle = sTitle ||  document.title;
   try{
      window.external.addFavorite(sURL,sTitle);
   } catch (e){
      try{
         window.sidebar.addPanel(sTitle, sURL, "");
      }catch (e){
         alert("请使用Ctrl+D收藏我们");
      }
   }
};

var setHomePage = setHomepage = function(e_obj, url){
   var helpUrl = 'http://www.tao123.com/help/?page=setHomePage';
   if (document.all) {
      try {
         document.body.style.behavior = 'url(#default#homepage)';
         document.body.setHomePage(url);
      } catch (e) {
         try {
            e_obj.style.behavior = 'url(#default#homepage)';
            e_obj.setHomePage(url);
         } catch (e) {
            window.open(helpUrl);
         }
      }
   } else if (window.sidebar) {
      try {
         var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
         prefs.setCharPref('browser.startup.homepage', url);
         alert('设置成功');
      } catch (e) {
      window.open(helpUrl);
   }
   } else {
   window.open(helpUrl);
   }
};

/************
* 日志统一 xm
* @des 80%y页面是8080生成，因此尽量照顾后台生成页采用精简模式,相通部分内置，不同部分配置。垂直频道再增加配置代码增强。
* @param name 约定为可扩展层级格式，上下级之前用|，模块附加值用（），同级模块用;分割，例如：xxx|xxx()|xxx;xxx()
* @param configs 配置项，用于特殊频道细化日志。
* @param configs 配置项请用 LOG.specialConfig(cssStr)生成，照顾80%页面，因此没有集成到日志对象内。 
* @use   垂直频道先引入 LOG.specialConfig 函数，然后使用var LOG = new LOG(LOG.specialConfig(".a"));主动触发相同上。
* @use   一般内页直接var LOG = new LOG();即可，主动触发用LOG.saveLog(P);   
* @other 传递参数P的格式如下，值不用encode：
*        P = {
            name:"xxxx",//模块值
            position:"xxxxx"// 区域值
         }
******/
function LOG(configs){
   var menuPage = "",mouseDiff = "",THIS = this;
   //日志核心方法
   function _sendCore(url)
   {
      var curTime = parseInt((new Date().getTime()) * Math.random()),n = "log" + curTime,c = window[n] = new Image();
      c.onload = (c.onerror = function() {window[n] = null;});
      c.src = url + '&t=' + curTime;
      c = null;
   }
   //计算位置，用于热图
   function getPos(tar)
   {
      var tar = $(tar),offset = tar.offset();
      return [tar.width()/2 + offset.left -mouseDiff,offset.top + tar.height()/2].join(",");
   }

   function getMousesDiff()
   {
       var $header = $(".h").length?$(".h"):$(".header");
       return $header.offset().left;
   }

   function getMenuPage()
   {
      return !THIS.getMenuPage?(function(){
         return location.href.replace(/.*\/html\/(.*)\/.*/,"$1");
       })():THIS.getMenuPage();
   }

   //混合函数
   function mixConfig(arg)
   {
      for(var p in arg){ THIS[p] = arg[p];}
   }

   function gloableSend(tar)
   {
      var a = tar.closest("a"),val_r =  a.attr("l-r"),clo_l =  a.closest("[l]");
      a.length && THIS.saveLog({
         "name": val_r?val_r:a.text(),
         "position": clo_l.length? clo_l.attr("l") : "",
         "pos":tar
      });
   }

   function eventBind() 
   {
       $("body").bind("click",function(e){ 
         var tar = $(e.target);
         !THIS.filter?gloableSend(tar):!THIS.filter.call(THIS,tar) && gloableSend(tar);
      });
      $(window).resize(function(){ mouseDiff = getMousesDiff();});
   }

   function init()
   {
       configs && mixConfig(configs);
       mouseDiff = getMousesDiff();
       menupage = getMenuPage();
       eventBind();
   }

   this.saveLog = function(p){
      p.menupage = menupage;
      p.pos && (p.pos = getPos(p.pos));
      _sendCore("http://log.mmstat.com/twz.2?" + $.param(p));
       typeof(THIS.formate) != 'undefined' && (p.name = p.menupage + '|' + p.position + '|' +  p.name);// 暂时分开格式日志
      _sendCore("http://krq.tao123.com/log.php?" + $.param(p));
   };

   init();
   
}