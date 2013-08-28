/**
 * @object 汽车板块
 * @namespace  T.car
 * @author zzf
 * @update 2013-1-28
 */
T.car = {
  'wrapper' : $('J_carform'),
  'html' : [
       '<span class="c_logo"><a href="http://www.bitauto.com/"><img src="i/search0320/logo_bitauto.png" height="32" width="74" /></a></span>',
        '<span class="c_form">',
          '<form action="http://car.bitauto.com/"  method="get" onsubmit="return T.searchMod.smbFixer($(\'J_carKey\').value);" id="J_carSearch">',
            '<span class="sch_inbox">',
              '<b class="shadowtop"></b>',
              '<b class="shadowleft"></b>',
              '<input type="text" autocomplete="off"  id="J_carKey" name="q">',
            '</span>',       
             '<input type="hidden" value="101154" name="pvareaid">',
            '<input type="submit" id="J_carSbm" value="汽车搜索" class="sch_btn">',
          '</form>',
          '<span style="display:inline-block;height:17px;">',
            '<iframe style="margin-top:2px" id="bitautoifm" frameborder="0" width="314" height="30" scrolling="no" src="http://car.bitauto.com/Interface/LeveldropdownlistData/interface2345.aspx" allowtransparency="true"></iframe>',
          '</iframe>',
         '</span>',
        '</span>',
        '<span class="c_hot">',
          '<a href="http://car.bitauto.com/xuanchegongju/" name="2">5万以下</a>|<a href="http://car.bitauto.com/xuanchegongju/" name="2">5-8万</a>|<a href="http://car.bitauto.com/xuanchegongju/" name="2">8-12万</a>|<a href="http://car.bitauto.com/xuanchegongju/" name="2">12-18万</a><br>',
          '<a href="http://car.bitauto.com/xuanchegongju/" name="2">SUV</a>|<a href="http://car.bitauto.com/volkswagen/" name="2">大众</a>|<a href="http://car.bitauto.com/bmw/" name="2">宝马</a>|<a href="http://car.bitauto.com/audi/" name="2">奥迪</a>|<a href="http://car.bitauto.com/" name="2">更多车型</a>',
        '</span>'
   ].join(''),
  'namespace' : function(str) {
      var parts = str.split('.'),
          parent = window,
          i = 0,
          len =parts.length;
      for (; i < len ; i++) {
          if (typeof parent[parts[i]] === 'undefined') {
              parent[parts[i]] = {};
          }
          parent = parent[parts[i]];
      }
      return parent;
  },
  'init' : function (){
    this.wrapper.innerHTML = this.html;
    T.car.namespace('bitauto.sug');
    $('J_carSbm').onmouseout=function (){
       this.className='sch_btn';
    };
    $('J_carSbm').onmousedown=function (){
      this.className='sch_btn_mousedown';
    };
    BaiduSuggestion.bind('J_carKey',{
      'XOffset':0, 
      'YOffset':0,
      'sugSubmit':true,  
      'openAd': false, //是否打开广告
      'isBitauto':true //是否为易车网
    });
  }
};
   
T.car.init();

