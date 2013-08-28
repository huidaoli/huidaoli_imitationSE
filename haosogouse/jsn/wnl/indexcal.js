var selYear=0;
var selMonth=0;
var selDay=0;
var _handle = 0;
var _handleW = 0;
var _handleL = 0;
var _handleH = 0;
var __handle = 0;
var __offset = 0;
var _weeks = "日一二三四五六";
var _init = false;
var lmanac = new Array();
var astro = new Array();
var his = new Array();
var _now = new Date();
var _year = _now.getFullYear();
//以下是相关配置
var _max = 3;//历史上的今天显示条数
var _hisUrl = "/tools/his.htm";
var _astroUrl = "http://astro.sina.com.cn/pc/west/frame0_";
var cache = {"syear":0,"smonth":0,"sday":0,"eyear":0,"emonth":0,"eday":0,"type":"","cond":""};
var lang_default=["当前选择：","当日黄历：","年","月","日","星期","今 天 是：","今日黄历：","开始日期应小于等于结束日期!","查询数据应在三个月范围内!","查询中","查  询","全部","农历：","宜：","忌：","冲：","煞：","正冲：","胎神：","宜","忌","综合运势：","爱情运势：","无对应年份黄历数据!","&nbsp;的日子一共有","天","您的浏览器屏蔽了弹窗，无法显示查询结果！\n\n是否在当前窗口显示查询结果?"];
var dir = ["/his_short/","../lmanac/","http://tianqi.2345.com/astro/"];
var _width = ["12%","7%","12%"];
var lmanac_len = [18,10,10,10];
function $(_id){
	return document.getElementById(_id);
}
function $c(_tag){
	return document.createElement(_tag);
}
function init(){
	var _month = _now.getMonth()+1;
	var _day = _now.getDate();
	

	loadJs(dir[1]+_year,1);
	
	

	_year = _now.getFullYear();
	_month = _now.getMonth()+1;
	_day = _now.getDate();
	var _nYear = _month!=12||_year==2011?_year:_year+1;
	var _nMonth = _year==2011?(_month<12?(_month+1)%12:_month):(_month+1)%12;


	var _sDay = _day;
	var _maxS = monthDay(_year,_month-1);
	var _maxE = monthDay(_nYear,_nMonth-1);

}
function isLeapYear(_oYear){
	return(((_oYear%4===0)&&(_oYear%100!==0))||(_oYear%400===0));
}
function monthDay(_oYear,_oMonth){
	return[31,(isLeapYear(_oYear)?29:28),31,30,31,30,31,31,30,31,30,31][_oMonth];
}
function $d(_var){
	return typeof(_var)!="undefined";
}
function setClock(){
	if(_handle==0){
		setTimes("init");
		setWorldTimes();
	}else{
		clearInterval(_handle);
		clearInterval(_handleW);
	}
	_handle = setInterval(setTimes,1000);
	_handleW = setInterval(setWorldTimes,1000);
}
function changeDate(_month,_day,_week){
	var _date = _year+lang_default[2]+_month+lang_default[3]+_day+lang_default[4]+"&nbsp;"+_week;
	var _html = lang_default[0]+'<font class="fred"><b>';
	_html += _date;
	_html += '</b></font><br />';
	$("lm_txt").innerHTML = lang_default[1];
	$("date").innerHTML = _html;
}
function changeWorldClock(){
	__offset = parseInt($("worldTime").value)*60;
	_now = new Date();
	__offset += _now.getTimezoneOffset();
	clearInterval(_handleW);
	setWorldTimes();
	_handleW = setInterval(function(){setWorldTimes()},1000);
}
function setTimes(){
	_now = new Date();
	var _year = _now.getFullYear();
	var _month = _now.getMonth()+1;
	var _day = _now.getDate();
	var _hour = _now.getHours();
	var _minute = _now.getMinutes()<10?"0"+_now.getMinutes():_now.getMinutes();
	var _seconds = _now.getSeconds()<10?"0"+_now.getSeconds():_now.getSeconds();
	var _time = _year+lang_default[2]+_month+lang_default[3]+_day+lang_default[4];
	var _nowTime = _time+"&nbsp;"+_hour+":"+_minute+":"+_seconds;
	$("nowTime").innerHTML = _nowTime;
	if(arguments[0] == "init"){
		var _date = _time+"&nbsp;"+lang_default[5]+_weeks.charAt(_now.getDay());
		var _html = lang_default[6]+'<font class="fred"><b>';
		_html += _date;
		_html += '</b></font><br />';
		$("lm_txt").innerHTML = lang_default[7];
		$("date").innerHTML = _html;
	}
}
function setWorldTimes(){
	_now = new Date();
	_now = new Date(_now.valueOf()+__offset*1000*60);
	var _year = _now.getFullYear();
	var _month = _now.getMonth()+1;
	var _day = _now.getDate();
	var _hour = _now.getHours();
	var _minute = _now.getMinutes()<10?"0"+_now.getMinutes():_now.getMinutes();
	var _seconds = _now.getSeconds()<10?"0"+_now.getSeconds():_now.getSeconds();
	var _time = _year+lang_default[2]+_month+lang_default[3]+_day+lang_default[4];
	var _nowTime = _time+"&nbsp;"+_hour+":"+_minute+":"+_seconds;
	$("worldTimeNow").innerHTML = _nowTime;
}
function loadJs(_url){
	_timeout = arguments[1]||0;
	_id = _url.replace(/\//gi,"_");
	if(typeof($)!="undefined"&&!$(_id)){
		var _js = document.createElement("script"); 
		_js.setAttribute("type", "text/javascript");
		_js.setAttribute("id", _id);
		_js.setAttribute("src", _url+".js"+(_timeout?"?"+_timeout:""));
		document.body.insertBefore(_js, null);
		return true;
	}
	return false;
}

function changeDay(){
	if(isLarge()){
		$("e_day").value = $("s_day").value;
	}
}
function changeAstro(){
	_v = $("astro").value;
	_cache = _now.getMonth()+1+"_"+_now.getDate()+"_"+(_now.getHours()>3?1:0);
	if(!loadJs(dir[2]+_v,_cache)){
		astro_2345(_v);
	}
	$("astroUrl").href = _astroUrl+_v+".html";
}

function astro_2345(_v){
	if(!astro[_v]){
		return false;
	}
	_z = lang_default[22];
	_a = lang_default[23];
	for(_i = 0;_i < 5;_i++){
		_z += astro[_v].z>_i?'<img src="img/star.gif"/>':'<img src="img/star0.gif"/>';
		_a += astro[_v].a>_i?'<img src="img/star.gif"/>':'<img src="img/star0.gif"/>';
	}
	$("astro_z").innerHTML = _z;
	$("astro_a").innerHTML = _a;
}
function isLarge(){//判断结束日期是否小于开始日期
	_sPre = "s_";
	_ePre = "e_";
	_sYear = +$(_sPre+"year").value;
	_eYear = +$(_ePre+"year").value;
	_sMonth = +$(_sPre+"month").value;
	_eMonth = +$(_ePre+"month").value;
	_sDay = +$(_sPre+"day").value;
	_eDay = +$(_ePre+"day").value;
	if((_eYear<_sYear)||(_sYear==_eYear&&_eMonth<_sMonth)||(_sYear==_eYear&&_sMonth==_eMonth&&_eDay<_sDay)){
		return true;
	}
	return false;
}

function lmanac_2345(){
	if(_init&&!arguments[0])return;
	var _month = (_now.getMonth()+1)<10?"0"+(_now.getMonth()+1):_now.getMonth()+1;
	var _day = _now.getDate()<10?"0"+_now.getDate():_now.getDate();
	var _output = "";
	_month = arguments[0]||_month;
	_day = arguments[1]||_day;
	var _today = "d"+_month+_day;
	if(!lmanac[_year]&&$("_lmanac_"+_year)){
		$("luck").innerHTML = lang_default[24];
		$("bad").innerHTML = lang_default[24];
		$("ch").innerHTML = lang_default[24];
		$("s").innerHTML = lang_default[24];
		return false;
	}else if(!lmanac[_year]){
		loadJs(dir[1]+_year,1);
		_handleL = setTimeout(function(){lmanac_2345(_month,_day)},500);
		return false;
	}
	$("luck").innerHTML = "";
	$("bad").innerHTML = "";
	$("ch").innerHTML = "";
	$("s").innerHTML = "";
	
	for(_d in lmanac[_year][_today]){
		
		switch(_d.toLowerCase()){
			case "y":
				var _y = lmanac[_year][_today].y.split(".");
				var _tmp = "";
				for(_k = 0;_k < _y.length-1&&_k < lmanac_len[0];_k++){
					_tmp += _y[_k]+",";
				}
				_tmp = _tmp.substr(0,_tmp.length-1);
				$("luck").innerHTML = _tmp;
				break;
			case "j":
				var _j = lmanac[_year][_today].j.split(".");
				var _tmp = "";
				for(_k = 0;_k < _j.length-1&&_k < lmanac_len[1];_k++){
					_tmp += _j[_k]+",";
				}
				_tmp = _tmp.substr(0,_tmp.length-1);
				$("bad").innerHTML = _tmp;
				break;
			case "c":
				var _c = lmanac[_year][_today].c.split(".");
				var _tmp = "";
				for(_l = 0;_l < _c.length&&_l < lmanac_len[2];_l++){
					_tmp += _c[_l]+",";
				}
				_tmp = _tmp.substr(0,_tmp.length-1);
				$("ch").innerHTML = _tmp;
				break;
			case "s":
				var _s = lmanac[_year][_today].s.split(".");
				var _tmp = "";
				for(_m = 0;_m < _s.length&&_m < lmanac_len[3];_m++){
					_tmp += _s[_m]+",";
				}
				_tmp = _tmp.substr(0,_tmp.length-1);
				$("s").innerHTML = _tmp;
				break;
			default:
				_init = true;
				break;
		}
	}
	

}
function insertHead(_o,_cond,_count){
	_o.style.display = "block";
	_o.innerHTML = '<font class="fred" id="cond">'+_cond+'</font>'+lang_default[25]+'<b id="count">'+_count+'</b>'+lang_default[26];
	return true;
}
function clearTable(_o){
	for(_i=_o.childNodes.length-1;_i>-1;_i--){
		_o.removeChild(_o.childNodes[_i]);
	}
	return true;
}