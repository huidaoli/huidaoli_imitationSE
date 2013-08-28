//编号对应省份
var  positions_provn= {
'58362':'上海',
'54511':'北京',
'59287':'广东',
'59758':'海南',
'58847':'福建',
'59431':'广西',
'56778':'云南',
'57816':'贵州',
'57687':'湖南',
'58457':'浙江',
'58606':'江西',
'57494':'湖北',
'57516':'重庆',
'58321':'安徽',
'58238':'江苏',
'54823':'山东',
'57083':'河南',
'57036':'陕西',
'56294':'四川',
'55591':'西藏',
'54527':'天津',
'53698':'河北',
'53772':'山西',
'53614':'宁夏',
'52866':'青海',
'54342':'辽宁',
'54161':'吉林',
'50953':'黑龙江',
'53463':'内蒙古',
'52889':'甘肃',
'51463':'新疆'
};

//省份对应编号
var  positions_provnid= {
'上海':'58362',
'北京':'54511',
'广东':'59287',
'海南':'59758',
'福建':'58847',
'广西':'59431',
'云南':'56778',
'贵州':'57816',
'湖南':'57687',
'浙江':'58457',
'江西':'58606',
'湖北':'57494',
'重庆':'57516',
'安徽':'58321',
'江苏':'58238',
'山东':'54823',
'河南':'57083',
'陕西':'57036',
'四川':'56294',
'西藏':'55591',
'天津':'54527',
'河北':'53698',
'山西':'53772',
'宁夏':'53614',
'青海':'52866',
'辽宁':'54342',
'吉林':'54161',
'黑龙江':'50953',
'内蒙古':'53463',
'甘肃':'52889',
'新疆':'51463'
};

var positions = {
'58362':{'x':540,'y':260},//上海coords="528,246,565,278"
'54511':{'x':449,'y':145},//北京coords="428,131,466,159"
'59287':{'x':441,'y':358},//广东coords="423,339,468,366"
'59758':{'x':411,'y':412},//海南coords="389,399,433,424"
'58847':{'x':489,'y':329},//福建coords="469,317,509,340"
'59431':{'x':393,'y':358},//广西coords="367,344,418,372"
'56778':{'x':318,'y':347},//云南coords="296,331,340,363"
'57816':{'x':375,'y':323},//贵州coords="354,310,395,335"
'57687':{'x':425,'y':313},//湖南coords="404,299,446,327"
'58457':{'x':509,'y':287},//浙江coords="487,273,530,301"
'58606':{'x':471,'y':303},//江西coords="446,290,496,315"
'57494':{'x':432,'y':270},//湖北coords="411,257,454,283"
'57516':{'x':384,'y':289},//重庆coords="366,274,402,304"
'58321':{'x':481,'y':263},//安徽coords="458,248,503,278"
'58238':{'x':502,'y':240},//江苏coords="480,226,524,253"
'54823':{'x':475,'y':207},//山东coords="455,191,495,223"
'57083':{'x':439,'y':237},//河南coords="419,223,459,250"
'57036':{'x':390,'y':236},//陕西coords="372,222,407,249"
'56294':{'x':332,'y':274},//四川coords="309,258,354,290"
'55591':{'x':183,'y':245},//西藏coords="155,231,211,259"
'54527':{'x':490,'y':174},//天津coords="473,161,507,186"
'53698':{'x':443,'y':180},//河北coords="426,167,459,192"
'53772':{'x':426,'y':203},//山西coords="406,190,445,215"
'53614':{'x':389,'y':201},//宁夏coords="348,184,389,217"
'52866':{'x':269,'y':216},//青海coords="243,197,294,234"
'54342':{'x':513,'y':141},//辽宁coords="495,127,531,154"
'54161':{'x':537,'y':114},//吉林coords="518,101,555,126"
'50953':{'x':535,'y':74},//黑龙江coords="509,59,561,89"
'53463':{'x':380,'y':163},//内蒙古coords="353,147,407,178"
'52889':{'x':284,'y':164},//甘肃coords="262,144,305,183"
'51463':{'x':173,'y':149}//新疆coords="144,132,201,165"
};

//城市通讯地址:联通，电信，移动
var positions_tongxu = {
'58362':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=000100020001&id=1021',1:'http://sh.ct10000.com/',2:'http://www.sh.chinamobile.com/'},//上海(联通，电信，移动)
'54511':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=000100010001&id=1001',1:'http://bj.ct10000.com/',2:'http://www.bj.chinamobile.com/index/?smartID=5576722498'},//北京(联通，电信，移动)
'59287':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010004&id=1677',1:'http://gd.ct10000.com/',2:'http://www.gd.chinamobile.com/'},//广东(联通，电信，移动)
'59758':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010005&id=1645',1:'http://hi.ct10000.com/',2:'http://www.hi.chinamobile.com/'},//海南(联通，电信，移动)
'58847':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010006&id=1820',1:'http://www.fj.ct10000.com/',2:'http://www.fj.chinamobile.com/'},//福建(联通，电信，移动)
'59431':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010014&id=2409',1:'http://gx.ct10000.com/',2:'http://www.gx.chinamobile.com/'},//广西(联通，电信，移动)
'56778':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010026&id=4154',1:'http://yn.ct10000.com/',2:'http://www.yn.chinamobile.com/'},//云南(联通，电信，移动)
'57816':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010027&id=3944',1:'http://gz.ct10000.com/',2:'http://www.gz.chinamobile.com/'},//贵州(联通，电信，移动)
'57687':{0:'http://info.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010017&id=2809',1:'http://hn.ct10000.com/',2:'https://www.hn.chinamobile.com/default.html'},//湖南(联通，电信，移动)
'58457':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010007&id=1914',1:'http://zj.ct10000.com/',2:'http://www.zj.chinamobile.com/'},//浙江(联通，电信，移动)
'58606':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010022&id=1062',1:'http://jx.ct10000.com/',2:'http://www.jx.chinamobile.com/'},//江西(联通，电信，移动)
'57494':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010024&id=1349',1:'http://hb.ct10000.com/',2:'http://www.hb.chinamobile.com/'},//湖北(联通，电信，移动)
'57516':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=000100100001&id=3571',1:'http://cq.ct10000.com/',2:'http://www.cq.chinamobile.com/'},//重庆(联通，电信，移动)
'58321':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010019&id=3077',1:'http://ah.ct10000.com/',2:'http://www.ah.chinamobile.com/'},//安徽(联通，电信，移动)
'58238':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010008&id=2016',1:'http://js.ct10000.com/',2:'http://www.js.chinamobile.com/'},//江苏(联通，电信，移动)
'54823':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010016&id=2651',1:'http://sd.ct10000.com/',2:'http://www.sd.chinamobile.com/'},//山东(联通，电信，移动)
'57083':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010023&id=1173',1:'http://ha.ct10000.com/',2:'http://www.ha.chinamobile.com/portal'},//河南(联通，电信，移动)
'57036':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010015&id=2533',1:'http://sn.ct10000.com/',2:'http://www.sn.chinamobile.com/'},//陕西(联通，电信，移动)
'56294':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010009&id=3368',1:'http://sc.ct10000.com/',2:'http://www.sc.chinamobile.com/'},//四川(联通，电信，移动)
'55591':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010032&id=4156',1:'http://xz.ct10000.com/',2:'http://www.xz.10086.cn/'},//西藏(联通，电信，移动)
'54527':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=000100030001&id=1042',1:'http://tj.ct10000.com/',2:'http://www.tj.chinamobile.com/'},//天津(联通，电信，移动)
'53698':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010025&id=1461',1:'http://he.ct10000.com/',2:'http://www.he.chinamobile.com/'},//河北(联通，电信，移动)
'53772':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010018&id=2946',1:'http://sx.ct10000.com/',2:'http://www.sx.chinamobile.com/'},//山西(联通，电信，移动)
'53614':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010028&id=2382',1:'http://www.nx.ct10000.com/',2:'http://www.nx.chinamobile.com/'},//宁夏(联通，电信，移动)
'52866':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010020&id=3200',1:'http://qh.ct10000.com/',2:'http://www.qh.chinamobile.com/'},//青海(联通，电信，移动)
'54342':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010011&id=3613',1:'http://ln.ct10000.com/',2:'https://www.ln.chinamobile.com/'},//辽宁(联通，电信，移动)
'54161':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010012&id=3728',1:'http://jl.ct10000.com/',2:'http://www.jl.chinamobile.com/'},//吉林(联通，电信，移动)
'50953':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010013&id=3798',1:'http://hl.ct10000.com/',2:'http://www.hl.chinamobile.com/'},//黑龙江(联通，电信，移动)
'53463':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010029&id=4042',1:'http://nm.ct10000.com/',2:'http://www.nm.chinamobile.com/'},//内蒙古(联通，电信，移动)
'52889':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010030&id=2290',1:'http://gs.ct10000.com/',2:'http://www.gs.chinamobile.com/'},//甘肃(联通，电信，移动)
'51463':{0:'http://info2.10010.com/lt/plugin/portal/arealevel/queryCityInfo.do?arno=00010021&id=3255',1:'http://xj.ct10000.com/',2:'http://www.xj.chinamobile.com/'}//新疆(联通，电信，移动)
};


//是否有活动
var  positions_huodong= {
'58362':'1',
'54511':'1',
'59287':'1',
'59758':'1',
'58847':'1',
'59431':'1',
'56778':'1',
'57816':'1',
'57687':'1',
'58457':'1',
'58606':'1',
'57494':'1',
'57516':'1',
'58321':'1',
'58238':'1',
'54823':'1',
'57083':'1',
'57036':'1',
'56294':'1',
'55591':'1',
'54527':'1',
'53698':'1',
'53772':'1',
'53614':'1',  
'52866':'1',//青海
'54342':'1',
'54161':'1',
'50953':'1',
'53463':'1',
'52889':'1',
'51463':'1'
};


//初始化省份
var mapTimeOut = 300;
var mapTimer;
var divtimer;
var provinceId = '';

function cityinfo2(cityid,cityname,citypinyin,provname){
	provinceId = positions_provnid[provname];
}

if(typeof(provinceId)=='undefined' || provinceId==''){
	provinceId = 58362;
}
var old_huodong = 'huodong_'+provinceId;

function getScrollTop()
{
    var dd = document.documentElement, db = document.body;
	if (dd && (dd.scrollTop || dd.scrollLeft)) {
		return dd.scrollTop;
	} else if (db) {
		return db.scrollTop;
	} else {
		return 0;
	}
}

//初始化旗帜
function initMap(){
	var scrolltop = getScrollTop();

	var mapoffset = Fx.fx.getoffset('tongxun_map');

	//获得省份的位置(coords="528,246,565,278")如果 shape 属性设置为 "rect"，则该值规定矩形左上角和右下角的坐标。map坐标(176,325)
	var x = mapoffset.left+145+positions[provinceId]['x'];
	var y = mapoffset.top+positions[provinceId]['y'];

	//旗帜
	Fx.show('js_map');
	Fx.css('js_map',{'top':(y+scrolltop+180)+'px','left':(x-100)+'px'})
}

//初始化省份
function initProvince(){
	//显示活动
	Fx.html('huodong_area',positions_provn[provinceId]+"地区");
	Fx.show('huodong_'+provinceId);
}

//展示选中区域
function showArea(provn,proid,e){

   hidestate = false;
   if(mapTimer){
       window.clearTimeout(mapTimer);
   }
	var e = e || window.event;
	var x=e.clientX
	var y=e.clientY
	var scrolltop = getScrollTop();

	var liantong = positions_tongxu[proid][0];//联通
	var dianxin = positions_tongxu[proid][1];//电信  
	var yidong = positions_tongxu[proid][2];//移动

	//移动，联通，电信导航
	Fx.html('js_yidong_box','<a href="'+yidong+'" target="_blank">'+provn+'移动</a><a href="'+liantong+'">'+provn+'联通</a><a href="'+dianxin+'">'+provn+'电信</a>');
	Fx.show('js_yidong_box');
	showAreaS();
	Fx.css('js_yidong_box',{'top':(y+scrolltop)+'px','left':(x)+'px'});
	//旗帜
	Fx.show('js_map');
	Fx.css('js_map',{'top':(y+scrolltop-30)+'px','left':x+'px'});
	//活动
	Fx.html('huodong_area',provn+"地区");
	Fx.hide(old_huodong);
	if(positions_huodong[proid]>0){
		Fx.show('youhuihuodong');
		Fx.show('huodong_'+proid);
	}else{
		Fx.hide('youhuihuodong');
	}

	old_huodong = 'huodong_'+proid;

	divtimer = setTimeout("hideAreaS()",3000); 
  
}

//显示
function showAreaS(){

	Fx.obj('js_yidong_box').style.visibility = "visible";
	if(typeof(divtimer)!='undefined'){
		window.clearTimeout(divtimer);
	}
	//Fx.show('js_yidong_box');
}

function hideAreaS(){
	Fx.obj('js_yidong_box').style.visibility = "hidden";
	//Fx.show('js_yidong_box');
}

//隐藏区域
function hiddenArea(){
        hidestate = true;
        mapTimer = window.setTimeout("hideBox()",mapTimeOut);
}
function hideBox(){
	hideAreaS();
	Fx.hide('js_yidong_box');
}

