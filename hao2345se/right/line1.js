function RcCallBack(obj,num){
  var modname,modObj,color,ddidval,end_con,dlclass;
  ddidval = '';
  for(var i=1;i<=num;i++){
      modname = 'mod'+i;
	  modObj = eval(obj[modname]);
	  end_con = '</dd></dl>';
	  if(i==3 || i==4){
	     dlclass = ' class="mt15"';
	  }else{
	     dlclass = '';
	  }
      for(var mod_name in modObj){
		  color='';
		  if(modObj[mod_name]['c']){
		      color = 'class="'+modObj[mod_name]['c']+'"';
		  }
		  if(mod_name==0){
		      ddidval += '<dl'+dlclass+'><dt><a name="2" onclick="clickCount(\'line1_\');" href="'+modObj[mod_name]['u']+'">'+modObj[mod_name]['t']+'</a></dt><dd>';
		  }else{
		  	  ddidval += '<p><a name="2" onclick="clickCount(\'line1_\');" href="'+modObj[mod_name]['u']+'" '+color+'><img src="'+modObj[mod_name]['img']+'" />'+modObj[mod_name]['t']+'</a></p>';
		  }

	  }
      ddidval += end_con;
  }
  ddidval = '<div class="pop_news"><h4><a name="2" onclick="clickCount(\'line1_\');" class="moreR" href="http://tools.2345.com/?r2">����&raquo;</a><strong><a name="2" onclick="clickCount(\'line1_\');" class="t01" href="http://tools.2345.com/?r1">ʵ�ò�ѯ</a></strong></h4></div><div class="t_li">'+ddidval+'</div>';
  $("rc_cont").innerHTML = ddidval;

    if(!$("line1_h6")){
        var h6Element = document.createElement("h6");
        h6Element.id = "line1_h6";
        $("rc_cont").parentNode.appendChild(h6Element);
    }else{
        var h6Element = $("line1_h6");
    }
    h6Element.innerHTML = '<a name="2" onclick="clickCount(\'line1_\');" name="2" href="http://tools.2345.com/?r3" >�����ѯ&raquo;</a><label><input name="oc_pop" type="checkbox" value="" onclick="ocPop(1);clickCount(\'ocPop\');" />�Ժ���չ���˴���</label><span class="tipT" id="tipT1" style="display:none;">�رպ�Ҫ����չ���˴��ڣ�������ҳ���Ͻǵġ�����-�����Ƽ�-����������</span>';

}
if(typeof(RcCallBack)!="undefined"){
	RcCallBack(
	   {'mod1':
		      [   
		          {'t':'�������','u':'http://tools.2345.com/life.htm'},
		          {'t':'������','u':'http://tools.2345.com/rili.htm','img':'i/ic/ic_48.gif'},
		          {'t':'��ݲ�ѯ','u':'http://tools.2345.com/kuaidi.htm','img':'i/ic/ic_01.gif','c':'fgreen'},
		          {'t':'�ֻ����ѳ�ֵ','u':'http://tools.2345.com/huafcx.htm','img':'i/ic/ic_02.gif','c':'fred'},
		          {'t':'���֤��ѯ','u':'http://tools.2345.com/shenfenzheng.htm','img':'i/ic/ic_04.gif','c':'fgreen'},
				  {'t':'�ֻ�������','u':'http://tools.2345.com/shouji.htm','img':'i/ic/ic_03.gif','c':'fgreen'},
				  {'t':'���õ绰','u':'http://tools.2345.com/tefudh.htm','img':'i/ic/ic_41.gif'},
				  {'t':'���ӽ�Ŀ','u':'http://www.tvmao.com/','img':'i/ic/ic_10.gif'},
				  {'t':'����ʱ��','u':'http://tools.2345.com/timebj/','img':'i/ic/ic_51.gif'},
				  {'t':'˫ɫ��','u':'http://www.2345.com/caipiao.htm?','img':'i/ic/ic_06.gif'},
				  {'t':'��ʷ�Ľ���','u':'http://tools.2345.com/his1.htm?','img':'i/ic/ic_44.gif'},
				  {'t':'���߷���','u':'http://tools.2345.com/translate.htm','img':'i/ic/ic_07.gif'},
				  {'t':'��ʳ����','u':'http://tools.2345.com/meishi/','img':'i/ic/ic_05.gif','c':'fgreen'}
	          ],
		'mod2':
			  [
				  {'t':'��ͨ����','u':'http://tools.2345.com/jiaotong.htm'},
				  {'t':'��ʱ��','u':'http://tools.2345.com/lieche.htm','img':'i/ic/ic_13.gif','c':'fred'},
				  {'t':'��ͨΥ��','u':'http://tools.2345.com/weizhang.htm','img':'i/ic/ic_15.gif','c':'fgreen'},
				  {'t':'��ͨ��������','u':'http://tools.2345.com/huocherx.htm','img':'i/ic/ic_20.gif'},
				  {'t':'��ʻ֤','u':'http://www.bitauto.com/weizhang/jiashizheng/','img':'i/ic/ic_16.gif','c':'fgreen'},
				  {'t':'ʵʱ·��','u':'http://www.chinahighway.gov.cn/roadmanager/qglk.jsp','img':'i/ic/ic_22.gif'},
				  {'t':'�ɻ�����','u':'http://jipiao.kuxun.cn/index_s.html?fromid=K2345com1-S1217781-T1202561','img':'i/ic/ic_23.gif'},
				  {'t':'��ʻԱ����','u':'http://tools.2345.com/kaojia.htm','img':'i/ic/ic_18.gif','c':'fgreen'},
				  {'t':'������ѯ','u':'http://tools.2345.com/bus.htm','img':'i/ic/ic_21.gif'},
				  {'t':'������ѯ','u':'http://tools.2345.com/changtu.htm','img':'i/ic/ic_17.gif'},
				  {'t':'���ϵ�ͼ','u':'http://tools.2345.com/map.htm','img':'i/ic/ic_52.gif'},
				  {'t':'������·','u':'http://dujia.kuxun.cn/?fromid=K2345com1-S1217781-T1203551','img':'i/ic/ic_25.gif'},
				  {'t':'�Ƶ��ѯ','u':'http://hotel.kuxun.cn/?fromid=K2345com1-S1217781-T1203531','img':'i/ic/ic_24.gif'}	
			  ],
		'mod3':
			  [
				  {'t':'��������','u':'http://tools.2345.com/xingzuo.htm'},
				  {'t':'�ܹ�����','u':'http://tools.2345.com/zhgjm.htm','img':'i/ic/ic_30.gif','c':'fgreen'},
				  {'t':'��������','u':'http://tools.2345.com/grcf.htm','img':'i/ic/ic_33.gif'},
				  {'t':'�������','u':'http://tools.2345.com/suanming.htm','img':'i/ic/ic_35.gif'},
				  {'t':'�����˳�','u':'http://tools.2345.com/xingzuoyc.htm','img':'i/ic/ic_31.gif'},
				  {'t':'��������','u':'http://tools.2345.com/naonao/index.htm','img':'i/ic/ic_34.gif'},
				  {'t':'Ѫ�����','u':'http://2345.com/shengxiao.htm#blood_div','img':'i/ic/ic_36.gif'},
				  {'t':'��Ф����','u':'http://tools.2345.com/shengxiao.htm','img':'i/ic/ic_32.gif'},
				  {'t':'�ֻ��ż���','u':'http://tools.2345.com/hmjxcx.htm','img':'i/ic/ic_37.gif'}
			  ],
		'mod4':
			  [
				  {'t':'������ѯ','u':'http://tools.2345.com/?r4'},
				  {'t':'���ٲ���','u':'http://www.linkwan.com/gb/broadmeter/SpeedAuto/','img':'i/ic/ic_12.gif','c':'fgreen'},
				  {'t':'IP��ַ','u':'http://tools.2345.com/ipcx.htm','img':'i/ic/ic_40.gif'},
				  {'t':'��ʫ������','u':'http://tools.2345.com/tangshi/','img':'i/ic/ic_50.gif'},
				  {'t':'��ȫ�ڼ�����','u':'http://tools.2345.com/womensafe.htm','img':'i/ic/ic_11.gif'},
				  {'t':'���ƺŲ�ѯ','u':'http://tools.2345.com/carlist.htm','img':'i/ic/ic_53.gif'},
				  {'t':'��׼����','u':'http://tools.2345.com/study_tizhong.htm','img':'i/ic/ic_42.gif'},
				  {'t':'������','u':'http://tools.2345.com/gjjcx.htm','img':'i/ic/ic_08.gif'},
				  {'t':'�ƽ�۸�����','u':'http://tools.2345.com/gold.htm','img':'i/ic/ic_45.gif'}
			  ]
		},4
	);
}