//��Ŷ�Ӧʡ��
var  positions_provn= {
'58362':'�Ϻ�',
'54511':'����',
'59287':'�㶫',
'59758':'����',
'58847':'����',
'59431':'����',
'56778':'����',
'57816':'����',
'57687':'����',
'58457':'�㽭',
'58606':'����',
'57494':'����',
'57516':'����',
'58321':'����',
'58238':'����',
'54823':'ɽ��',
'57083':'����',
'57036':'����',
'56294':'�Ĵ�',
'55591':'����',
'54527':'���',
'53698':'�ӱ�',
'53772':'ɽ��',
'53614':'����',
'52866':'�ຣ',
'54342':'����',
'54161':'����',
'50953':'������',
'53463':'���ɹ�',
'52889':'����',
'51463':'�½�',
'59887':'̨��',
'59889':'���',
'59888':'����'
};

//ʡ�ݶ�Ӧ���
var  positions_provnid= {
'�Ϻ�':'58362',
'̨��':'59887',
'���':'59889',
'����':'59888',
'����':'54511',
'�㶫':'59287',
'����':'59758',
'����':'58847',
'����':'59431',
'����':'56778',
'����':'57816',
'����':'57687',
'�㽭':'58457',
'����':'58606',
'����':'57494',
'����':'57516',
'����':'58321',
'����':'58238',
'ɽ��':'54823',
'����':'57083',
'����':'57036',
'�Ĵ�':'56294',
'����':'55591',
'���':'54527',
'�ӱ�':'53698',
'ɽ��':'53772',
'����':'53614',
'�ຣ':'52866',
'����':'54342',
'����':'54161',
'������':'50953',
'���ɹ�':'53463',
'����':'52889',
'�½�':'51463'
};

var positions = {
'58362':{'x':540,'y':260},//�Ϻ�coords="528,246,565,278"
'54511':{'x':449,'y':145},//����coords="428,131,466,159"
'59287':{'x':441,'y':358},//�㶫coords="423,339,468,366"
'59758':{'x':411,'y':412},//����coords="389,399,433,424"
'58847':{'x':489,'y':329},//����coords="469,317,509,340"
'59431':{'x':393,'y':358},//����coords="367,344,418,372"
'56778':{'x':318,'y':347},//����coords="296,331,340,363"
'57816':{'x':375,'y':323},//����coords="354,310,395,335"
'57687':{'x':425,'y':313},//����coords="404,299,446,327"
'58457':{'x':509,'y':287},//�㽭coords="487,273,530,301"
'58606':{'x':471,'y':303},//����coords="446,290,496,315"
'57494':{'x':432,'y':270},//����coords="411,257,454,283"
'57516':{'x':384,'y':289},//����coords="366,274,402,304"
'58321':{'x':481,'y':263},//����coords="458,248,503,278"
'58238':{'x':502,'y':240},//����coords="480,226,524,253"
'54823':{'x':475,'y':207},//ɽ��coords="455,191,495,223"
'57083':{'x':439,'y':237},//����coords="419,223,459,250"
'57036':{'x':390,'y':236},//����coords="372,222,407,249"
'56294':{'x':332,'y':274},//�Ĵ�coords="309,258,354,290"
'55591':{'x':183,'y':245},//����coords="155,231,211,259"
'54527':{'x':490,'y':174},//���coords="473,161,507,186"
'53698':{'x':443,'y':180},//�ӱ�coords="426,167,459,192"
'53772':{'x':426,'y':203},//ɽ��coords="406,190,445,215"
'53614':{'x':389,'y':201},//����coords="348,184,389,217"
'52866':{'x':269,'y':216},//�ຣcoords="243,197,294,234"
'54342':{'x':513,'y':141},//����coords="495,127,531,154"
'54161':{'x':537,'y':114},//����coords="518,101,555,126"
'50953':{'x':535,'y':74},//������coords="509,59,561,89"
'53463':{'x':380,'y':163},//���ɹ�coords="353,147,407,178"
'52889':{'x':284,'y':164},//����coords="262,144,305,183"
'51463':{'x':173,'y':149}//�½�coords="144,132,201,165"
};

//����ͨѶ��ַ:��ͨ�����ţ��ƶ�
var positions_tongxu = {
'58362':{0:'http://www.2345.com/govinner.htm',1:'http://sh.ct10000.com/',2:'http://www.shanghai.gov.cn/shanghai/node2314/index.html'},//�Ϻ� 
'54511':{0:'http://www.2345.com/govinner.htm',1:'http://bj.ct10000.com/',2:'http://www.beijing.gov.cn/'},//����
'59287':{0:'http://www.2345.com/govinner.htm',1:'http://gd.ct10000.com/',2:'http://www.gd.gov.cn/'},//�㶫
'59758':{0:'http://www.2345.com/govinner.htm',1:'http://hi.ct10000.com/',2:'http://www.hainan.gov.cn/code/html/'},//����
'58847':{0:'http://www.2345.com/govinner.htm',1:'http://www.fj.ct10000.com/',2:'http://www.fujian.gov.cn/'},//����
'59431':{0:'http://www.2345.com/govinner.htm',1:'http://gx.ct10000.com/',2:'http://www.gxzf.gov.cn/'},//����
'56778':{0:'http://www.2345.com/govinner.htm',1:'http://yn.ct10000.com/',2:'http://www.yn.gov.cn/'},//����
'57816':{0:'http://www.2345.com/govinner.htm',1:'http://gz.ct10000.com/',2:'http://www.gzgov.gov.cn/gzgov/216172782113783808/index.html'},//����
'57687':{0:'http://www.2345.com/govinner.htm',1:'http://hn.ct10000.com/',2:'http://www.hunan.gov.cn/'},//����
'58457':{0:'http://www.2345.com/govinner.htm',1:'http://zj.ct10000.com/',2:'http://www.zj.gov.cn/gb/zjnew/index.html'},//�㽭 
'58606':{0:'http://www.2345.com/govinner.htm',1:'http://jx.ct10000.com/',2:'http://www.jiangxi.gov.cn/'},//���� 
'57494':{0:'http://www.2345.com/govinner.htm',1:'http://hb.ct10000.com/',2:'http://www.hubei.gov.cn/'},//���� 
'57516':{0:'http://www.2345.com/govinner.htm',1:'http://cq.ct10000.com/',2:'http://www.cq.gov.cn/'},//���� 
'58321':{0:'http://www.2345.com/govinner.htm',1:'http://ah.ct10000.com/',2:'http://www.ah.gov.cn/'},//���� 
'58238':{0:'http://www.2345.com/govinner.htm',1:'http://js.ct10000.com/',2:'http://www.jiangsu.gov.cn/'},//���� 
'54823':{0:'http://www.2345.com/govinner.htm',1:'http://sd.ct10000.com/',2:'http://www.shandong.gov.cn/'},//ɽ�� 
'57083':{0:'http://www.2345.com/govinner.htm',1:'http://ha.ct10000.com/',2:'http://www.henan.gov.cn/'},//���� 
'57036':{0:'http://www.2345.com/govinner.htm',1:'http://sn.ct10000.com/',2:'http://www.shaanxi.gov.cn/'},//���� 
'56294':{0:'http://www.2345.com/govinner.htm',1:'http://sc.ct10000.com/',2:'http://www.sc.gov.cn/10462/index_wza.shtml'},//�Ĵ� 
'55591':{0:'http://www.2345.com/govinner.htm',1:'http://xz.ct10000.com/',2:'http://www.xizang.gov.cn/index.do'},//���� 
'54527':{0:'http://www.2345.com/govinner.htm',1:'http://tj.ct10000.com/',2:'http://www.tj.gov.cn/'},//���
'53698':{0:'http://www.2345.com/govinner.htm',1:'http://he.ct10000.com/',2:'http://www.hebei.gov.cn/'},//�ӱ� 
'53772':{0:'http://www.2345.com/govinner.htm',1:'http://sx.ct10000.com/',2:'http://www.shanxigov.cn/'},//ɽ�� 
'53614':{0:'http://www.2345.com/govinner.htm',1:'http://www.nx.ct10000.com/',2:'http://www.yc-zwdt.gov.cn/ycswebsite/index.do'},//���� 
'52866':{0:'http://www.2345.com/govinner.htm',1:'http://qh.ct10000.com/',2:'http://www.qh.gov.cn/'},//�ຣ 
'54342':{0:'http://www.2345.com/govinner.htm',1:'http://ln.ct10000.com/',2:'http://www.ln.gov.cn/'},//���� 
'54161':{0:'http://www.2345.com/govinner.htm',1:'http://jl.ct10000.com/',2:'http://www.jl.gov.cn/'},//���� 
'50953':{0:'http://www.2345.com/govinner.htm',1:'http://hl.ct10000.com/',2:'http://www.hlj.gov.cn/'},//������ 
'53463':{0:'http://www.2345.com/govinner.htm',1:'http://nm.ct10000.com/',2:'http://www.nmg.gov.cn/'},//���ɹ� 
'59889':{0:'http://www.2345.com/govinner.htm',1:'http://nm.ct10000.com/',2:'http://www.gov.hk/sc/residents/'},//���
'59888':{0:'http://www.2345.com/govinner.htm',2:'http://www.gov.mo/'},//����
'52889':{0:'http://www.2345.com/govinner.htm',1:'http://gs.ct10000.com/',2:'http://www.gansu.gov.cn/'},//���� 
'51463':{0:'http://www.2345.com/govinner.htm',1:'http://xj.ct10000.com/',2:'http://www.xinjiang.gov.cn/'}//�½� 
};


//�Ƿ��л
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
'52866':'1',//�ຣ
'54342':'1',
'54161':'1',
'50953':'1',
'53463':'1',
'52889':'1',
'51463':'1'
};


//��ʼ��ʡ��
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

//��ʼ������
function initMap(){
	var scrolltop = getScrollTop();

	var mapoffset = Fx.fx.getoffset('map');

	//���ʡ�ݵ�λ��(coords="528,246,565,278")��� shape ��������Ϊ "rect"�����ֵ�涨�������ϽǺ����½ǵ����ꡣmap����(176,325)
	var x = mapoffset.left+145+positions[provinceId]['x'];
	var y = mapoffset.top+positions[provinceId]['y'];
	//����
	Fx.show('js_map');
	Fx.css('js_map',{'top':(y+scrolltop)+'px','left':(x)+'px'})
}

//��ʼ��ʡ��
function initProvince(){
	//��ʾ�
	Fx.html('huodong_area',positions_provn[provinceId]+"����");
	Fx.show('huodong_'+provinceId);
}

//չʾѡ������
function showArea(provn,proid,e){

   hidestate = false;
   if(mapTimer){
       window.clearTimeout(mapTimer);
   }
	var e = e || window.event;
	var x=e.clientX
	var y=e.clientY
	var scrolltop = getScrollTop();

	var liantong = positions_tongxu[proid][0];//�ۺ�ҳ 
	var yidong = positions_tongxu[proid][2];//�Ż���վ

	//
    if(proid =='59889')
	{
		Fx.html('js_gov_box','<a href="'+yidong+'" target="_blank">'+provn+'��������</a>');
	}
	else
	{
		Fx.html('js_gov_box','<a href="'+yidong+'" target="_blank">'+provn+'��������</a><a href="http://www.2345.com/govinner.htm#'+proid+'">'+provn+'������������</a>');
	}
	Fx.show('js_gov_box');
	showAreaS();
	Fx.css('js_gov_box',{'top':(y+scrolltop)+'px','left':(x)+'px'});
	//����
	Fx.show('js_map');
	Fx.css('js_map',{'top':(y+scrolltop-30)+'px','left':x+'px'});
	
	divtimer = setTimeout("hideAreaS()",3000); 
  
}

//��ʾ
function showAreaS(){

	Fx.obj('js_gov_box').style.visibility = "visible";
	if(typeof(divtimer)!='undefined'){
		window.clearTimeout(divtimer);
	}
	//Fx.show('js_yidong_box');
}

function hideAreaS(){
	Fx.obj('js_gov_box').style.visibility = "hidden";
	//Fx.show('js_yidong_box');
}

//��������
function hiddenArea(){
        hidestate = true;
        mapTimer = window.setTimeout("hideBox()",mapTimeOut);
}
function hideBox(){
	hideAreaS();
	Fx.hide('js_gov_box');
}