function TuanCallBack(obj,num){
  var modname,modObj,color,ddidval,end_con,n;
  ddidval = '';
  for(var i=1;i<=num;i++){
      modname = 'mod'+i;
	  modObj = eval(obj[modname]);

      if(i==1){
		  end_con = '</ul><dl class="clearfix tuan_words"><dt><h5>热门分类</h5></dt><dd><a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_wanggou_nvzhuang_o_v_0_0_1_sq_0_0">女装</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_b_huoguo_o_v_0_0_1_sq_0_0">火锅</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_b_zizhucan_o_v_0_0_1_sq_0_0">自助餐</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_meishi_chuancai_o_v_0_0_1_sq_0_0">川菜</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_b_dianyingpiao_o_v_0_0_1_sq_0_0">电影票</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_meishi_mianbaotiandian_o_v_0_0_1_sq_0_0">甜点蛋糕</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_b_ktv_o_v_0_0_1_sq_0_0">KTV</a><br /><a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_yule_taiqiuzhuoyou_o_v_0_0_1_sq_0_0">桌球</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/tuangou_search.php?keywords=%B6%FE%C8%D5%D3%CE&search_type=1">二日游</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_b_lianyiqun_o_v_0_0_1_sq_0_0">连衣裙</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_b_niuzaiku_o_v_0_0_1_sq_0_0">牛仔裤</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_meirong_mianbucaizhuang_o_v_0_0_1_sq_0_0">面部彩妆</a>|<a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com/defaultall_meirong_nanshimeirong_o_v_0_0_1_sq_0_0">男士护肤</a></dd><dt><a onclick="clickCount(\'line2_\');" name="2" href="http://tuan.2345.com?r3">更多团购&raquo;</a></dt></dl></div>';
		  ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line2_\');" name="2" class="moreR" href="http://tuan.2345.com?r2">更多&raquo;</a><strong><a onclick="clickCount(\'line2_\');" name="2" class="t02" href="http://tuan.2345.com?r1">今日团购</a></strong></h4></div><div class="tuan"><ul class="tuan_li">';

		  for(var mod_name in modObj){
			ddidval += '<li><dl><dt><a onclick="clickCount(\'line2_\');" name="2" href="'+modObj[mod_name]['u']+'"><img width="230" height="147" src="'+modObj[mod_name]['img']+'" /></a><span class="tuan_lab">'+modObj[mod_name]['sj']+'</span><p><strong>￥<font>'+modObj[mod_name]['jg']+'</font></strong>'+modObj[mod_name]['zk']+'折</p><p class="alphabg"></p></dt><dd><a onclick="clickCount(\'line2_\');" name="2" href="'+modObj[mod_name]['u']+'" title="'+modObj[mod_name]['t']+modObj[mod_name]['s']+'">'+modObj[mod_name]['t']+'</a></dd></dl></li>';
		  }
		  ddidval += end_con;
	  }else{
	      end_con = '</div>';
		  ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line2_\');" name="2" class="moreR" href="http://buy.2345.com?r2">更多&raquo;</a><strong><a onclick="clickCount(\'line2_\');" name="2" class="t03" href="http://buy.2345.com?r1">特价促销</a></strong></h4></div><div class="mod_sale">';
          for(var mod_name in modObj){
			  ddidval += '<dl><dt><a onclick="clickCount(\'line2_\');" name="2" href="'+modObj[mod_name]['u']+'" title="'+modObj[mod_name]['t']+'"><img width="158" height="108" src="'+modObj[mod_name]['img']+'" /></a></dt><dd><p><a onclick="clickCount(\'line2_\');" name="2" href="'+modObj[mod_name]['u2']+'"><strong>['+modObj[mod_name]['c2']+']</strong>'+modObj[mod_name]['t2']+'</a></p><p><a onclick="clickCount(\'line2_\');" name="2" href="'+modObj[mod_name]['u3']+'"><strong>['+modObj[mod_name]['c3']+']</strong>'+modObj[mod_name]['t3']+'</a></p></dd></dl>';
		  }
	      ddidval += end_con;
	  }
	 

  }

  $("tuan_cont").innerHTML = ddidval;

    if(!$("line2_h6")){
        var h6Element = document.createElement("h6");
        h6Element.id = "line2_h6";
        $("tuan_cont").parentNode.appendChild(h6Element);
    }else{
        var h6Element = $("line2_h6");
    }
  h6Element.innerHTML = '<a onclick="clickCount(\'line2_\');" name="2" href="http://buy.2345.com?r3" >更多特价&raquo;</a><label for="line2_pop"><input id="line2_pop" name="oc_pop" type="checkbox" value="" onclick="ocPop(2);clickCount(\'ocPop\');" />以后不再展开此窗口</label><span class="tipT" id="tipT2" style="display:none;">关闭后，要重新展开此窗口，请点击主页右上角的“设置-热门推荐-开启”即可</span>';
}
if(typeof(TuanCallBack)!="undefined"){
    var line2_data = {"mod1":[{"t":"\u7f8e\u68a6\u6210\u771f\uff1a\u8759\u8760\u4fa0+\u8718\u86db\u4fa0\u53cc\u4eba\u7535\u5f71\u7968\uff0c\u7f8e\u56e2\u7f51\u514d\u8d39\u9001","u":"http:\/\/www.meituan.com\/deal\/batspider.html?source=2345com&amp;utm_campaign=2345com&amp;utm_medium=nav&amp;utm_source=2345com&amp;utm_content=pic","img":"http:\/\/img1.2345.com\/tuanimg\/uploadpic\/zhuaquimg2\/expire\/2012\/09\/13\/6552b06ffdec5a714f05c476a361bc34.jpg","sj":"\u7f8e\u56e2\u7f51","jg":"0.00","zk":"-0","s":""},{"t":"\u3010\u6d77\u5b81\u8def\u3011\u4ec5\u552e188\u5143\uff01\u5e02\u573a\u4ef7680\u5143\u7684\u3010\u4e0a\u6d77\u6052\u5347\u534a\u5c9b\u9152\u5e97-\u5317\u5916\u6ee9\u4e4b\u591cS","u":"http:\/\/www.lashou.com\/?id=7229618&qdh=3112","img":"http:\/\/img2.2345.com\/tuanimg\/uploadpic\/zhuaquimg2\/expire\/2012\/08\/30\/a5fe77856556414bbce032cd8f37bfed.jpg","sj":"\u62c9\u624b\u7f51","jg":"188.00","zk":"2.8","s":"tar Club\u3011\u72c2\u6b22\u591c\u5957\u9910\u4e00\u4efd\uff08\u4ec5\u9650\u9ad8\u53f0\u533a\uff09\uff1a\u683c\u5170\u738b\u5b50\u73cd\u85cf\u8c03\u548c\u82cf\u683c\u5170\u5a01\u58eb\u5fcc+\u7eff\u8336+\u6c34\u679c\uff01\u7a7a\u4e2d\u666f\u89c2\u9152\u5427\uff0c\u9ec4\u6d66\u6c5f\u4e24\u5cb8\u7f8e\u666f\u5c3d\u6536"}],"mod2":[{"t":"","u":"http:\/\/buy.2345.com\/mall\/fushixiemao\/xiangbao.html","img":"http:\/\/buy.2345.com\/uploadpic\/2345_buydata\/2345_buydata_1.jpg","t2":"\u6625\u590fT\u60642.9\u6298","c2":"\u670d\u9970","u2":"http:\/\/buy.2345.com\/mall\/fushixiemao\/chaoliunvzhuang-chenshan.html","t3":"\u6362\u5b63\u62a4\u80a4\u5fc5\u59075\u6298","c3":"\u62a4\u80a4","u3":"http:\/\/buy.2345.com\/mall\/muyingyongpin\/meironghuazhuang-hufupin.html"},{"t":"","u":"http:\/\/buy.2345.com\/mall\/fushixiemao\/chaoliunvzhuang-banshenqun.html","img":"http:\/\/buy.2345.com\/uploadpic\/2345_buydata\/2345_buydata_2.jpg","t2":"\u7edd\u7f8e\u5355\u978b39\u5143\u8d77","c2":"\u5355\u978b","u2":"http:\/\/buy.2345.com\/mall\/fushixiemao\/nvxie-danxie-0-2.html","t3":"\u667a\u80fd\u624b\u673a\u767e\u5143\u75af\u62a2","c3":"\u624b\u673a","u3":"http:\/\/buy.2345.com\/mall\/jiadianshuma\/shoujishuma-gshouji.html"},{"t":"","u":"http:\/\/buy.2345.com\/mall\/jiadianshuma\/shoujishuma-gshouji.html","img":"http:\/\/buy.2345.com\/uploadpic\/2345_buydata\/2345_buydata_3.jpg","t2":"\u5e8a\u4e0a\u56db\u4ef6\u5957\u5b63\u672b\u6e05","c2":"\u5bb6\u7eba","u2":"http:\/\/buy.2345.com\/mall\/muyingyongpin\/jiajuriyong-chuangshangsijiantao.html","t3":"\u70ed\u95e8\u4fc3\u9500\u62a2\u5148\u770b\uff01","c3":"\u4fc3\u9500","u3":"http:\/\/buy.2345.com\/activity.html"}]};
    if(g_cookie("wc",cookieStore) in {"54511":"","57516":"","58362":"","54527":"","58321":"","58221":"","58224":"","58334":"","58336":"","58424":"","58429":"","58847":"","59134":"","58946":"","58828":"","59131":"","59126":"","58927":"","52889":"","59287":"","59493":"","59488":"","59316":"","59288":"","59293":"","59297":"","59289":"","59485":"","59473":"","59663":"","59278":"","59280":"","59312":"","59315":"","59471":"","59431":"","59046":"","57957":"","57816":"","59758":"","59948":"","53698":"","54423":"","54449":"","54534":"","54515":"","54602":"","54616":"","53798":"","53892":"","57083":"","57073":"","53898":"","53982":"","53986":"","57178":"","50953":"","50842":"","57494":"","58407":"","57461":"","57496":"","57687":"","57780":"","57773":"","57872":"","57584":"","57662":"","54161":"","54172":"","58238":"","58354":"","58027":"","58343":"","58357":"","58259":"","58044":"","58141":"","58151":"","58245":"","58248":"","58246":"","58131":"","58606":"","57993":"","54342":"","54662":"","54339":"","54337":"","54338":"","54453":"","53463":"","53446":"","71109":"","53614":"","54823":"","54857":"","54830":"","54736":"","54765":"","54843":"","54915":"","54827":"","54774":"","54945":"","54828":"","54714":"","53772":"","57036":"","57048":"","57016":"","56294":"","56196":"","51463":"","51243":"","56778":"","58457":"","58465":"","58659":"","58452":"","58450":"","58453":"","58549":"","58477":"","58651":"","57278":""}){ 
        var callback = function(){TuanCallBack(line2_data,2);};
        var nowdate = new Date();
        var _script = $c("SCRIPT");
        _script.setAttribute("type", "text/javascript");
        if(nowdate.getHours()<9){
            _script.setAttribute("src", "/right/tuan/"+g_cookie("wc",cookieStore)+".js" + '?' + nowdate.getFullYear()+'-'+ nowdate.getMonth()+'-'+nowdate.getDate())+'-1';
        }else{
            _script.setAttribute("src", "/right/tuan/"+g_cookie("wc",cookieStore)+".js" + '?' + nowdate.getFullYear()+'-'+ nowdate.getMonth()+'-'+nowdate.getDate())+'-2';
        }
        $t("head")[0].appendChild(_script);
        if (document.all) {
            _script.onreadystatechange = function() {
                if (/onload|loaded|complete/.test(_script.readyState)) {
                    callback && callback();
                }
            };
        } else {
            _script.onload = function() {
                callback();
            };
        }
    }else{
        TuanCallBack(line2_data,2);
    }
}