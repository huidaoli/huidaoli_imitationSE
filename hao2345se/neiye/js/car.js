//车型选择下拉框配置数组
var params = {	'tagLogo':'sign',
				'tagSeries':'catesubclass',
				'tagAuto':'',
				'type':'new',
				'selTextLogo':'请选择品牌',
				'selTextSeries':'请选择车系',
				'selTextAuto':'请选择车型',
				'limitLogo':[],
				'limitBrand':[],
				'selValLogo':"-1",
				'selValSeries':"-1",
				'selValAuto':"-1",
				'funcLogo':'',
				'funcSeries':'',
				'funcAuto':''
};

if($("sign"))
{
	initSelectLogo(params);	//初始化车型选择下拉框
}


//搜索按钮点击处理程序
if($("btn_selectCar"))
{
	document.getElementById('btn_selectCar').onclick = function(){
		var sign = document.getElementById('sign').value;
		var catesubclass = document.getElementById('catesubclass').value;
		if(catesubclass == "-1"){
			if(sign == "-1"){
				alert('请选择品牌或者车系');
				return;
			}else{
				//location.href = "http://product.cheshi.com/logo_"+sign+"/";
				window.open("http://product.cheshi.com/logo_"+sign+"/");
				return;
			}
		}else{
			if(catesubclass.indexOf("_b") > 0){
				//location.href = "http://product.cheshi.com/brand_"+catesubclass.replace("_b", "")+"/";
				window.open("http://product.cheshi.com/brand_"+catesubclass.replace("_b", "")+"/");
				return;
			}else{
				//location.href = "http://product.cheshi.com/bseries_"+catesubclass+"/";
				window.open("http://product.cheshi.com/bseries_"+catesubclass+"/");
				return;
			}
		}
	}
}

if($("car_jp_search"))
{
	var car_jp_search=Fx.tag("car_jp_search","li");
	var ck_id=1;
	Fx.each(car_jp_search,function(o,i){
		o.onmouseover=function(){
			Fx.each(car_jp_search,function(o){
				o.className='';
			});
			Fx.hide("car_jg_"+ck_id);
			
			var ii=parseInt(i+1);
			
			Fx.show("car_jg_"+ii);
			o.className='active';
			ck_id=ii;
			return false;
		}
	});	
}

//通用搜索框推荐信息
var suggest_tmp = new Array();
cheshi.$('q').onkeyup = function(e){
	var e = e || window.event;
	var keyvalue = e.keyCode;
	if(keyvalue == 38 || keyvalue == 40 || keyvalue == 13){
		changeSelect(e);
		return;
	}
    if(cheshi.$('q').value){
		cheshi.getJSON("http://search.cheshi.com/auto_suggest/trie.php?q="+encodeURIComponent(cheshi.$('q').value), function(suggest_date){
			var suggest_str = "";
			var suggest_n = 0;
			suggest_tmp = suggest_date['suggest'];
			for(var kid = 0; kid < suggest_date['suggest'].length; kid++){
				suggest_str += "<li><a>"+suggest_date['suggest'][kid]+"</a></li>";
				suggest_n ++;
			}
			if(suggest_str.length == 0){
				var status = 0;
				document.getElementById('popiframe').height = 0;
			}
			
			cheshi.$("cheshi_suggest").innerHTML = suggest_str;
			if(suggest_n > 0){
				cheshi.show(cheshi.$("cheshi_suggest"));
			}else{
				cheshi.hide(cheshi.$("cheshi_suggest"));
				return;
			}
			var items = cheshi.$("cheshi_suggest").getElementsByTagName("li");
			if(items.length > 0) {
				for(var i = 0; i < items.length; i++){
					items[i].onclick = function() {
						cheshi.$("q").value = this.getElementsByTagName("a")[0].innerHTML;
						cheshi.hide(cheshi.$("cheshi_suggest"));
						check_form_s();
					}
					items[i].onmouseover = function() {
						this.className = "action";
					}
					items[i].onmouseout = function() {
						this.className = "";
					}
				}
			}
			if(status != 0)
				document.getElementById('popiframe').height = document.getElementById('popup').offsetHeight;
		});
	}
}
var changeSelect = function(e) {
	if(suggest_tmp.length == 0) return;
	var e = e || window.event;
	var keyvalue = e.keyCode;
	if(keyvalue == 38 || keyvalue == 40 || keyvalue == 13) {
		var items = cheshi.$("cheshi_suggest").getElementsByTagName("li");
		var index = -1;
		if(items.length > 0) {
			if(keyvalue == 38 || keyvalue == 40) {
				for(var i = 0; i < items.length; i++) {
					if(items[i].className == "action") {
						index = i;
						items[i].className = "";
						break;
					}
				}
				if(keyvalue == 38) {
					if(index == -1 || index == 0) {
						items[items.length-1].className = "action";
						cheshi.$("q").value = items[items.length-1].getElementsByTagName("a")[0].innerHTML;
					} else {
						items[index-1].className = "action";
						cheshi.$("q").value = items[index-1].getElementsByTagName("a")[0].innerHTML;
					}
				} else {
					if(index == items.length-1) {
						items[0].className = "action";
						cheshi.$("q").value = items[0].getElementsByTagName("a")[0].innerHTML;
					} else {
						items[index+1].className = "action";
						cheshi.$("q").value = items[index+1].getElementsByTagName("a")[0].innerHTML;
					}
				}
			}
			if(keyvalue == 13){
				cheshi.hide(cheshi.$("cheshi_suggest"));
				check_form_s();
			}
		}
	}
}
cheshi.$("btn_search").onclick = function() {
	check_form_s();
}
var check_form_s = function() {
	document.charset = 'utf-8';
	var q = cheshi.$("q");
	if(q == undefined || q == '' || q == "请输入查询内容"){
		cheshi.$("q").value = '';
	}
	cheshi.$("frm_search").submit();
}

var domclick = document.onclick
document.onclick = function(event){
	if (typeof domclick == 'function')
	{
		domclick(event);
	}
    event = event || window.event;
    var which = event.srcElement || event.target;
    var els = ['cheshi_suggest'];
    for(var i = 0; i < els.length; i++) {
		var d = cheshi.$(els[i]);
		if(d){
			if(which != d){
				cheshi.hide(d);
				cheshi.$('popiframe').height = cheshi.$('popup').offsetHeight;
			} else {
				cheshi.show(d);
			}
		}
	}
}
if(window.addEventListener){
	window.addEventListener("load", function(){
		cheshi.$("q").focus(); 
	}, false);
}else{
	window.attachEvent("onload", function(){
		cheshi.$("q").focus();
	});
}