var GetDataController = function(obj){
	var _DataSource = {};
	var _refashTime = 0;
	var _config = obj;
	var model = new Model("script","js_top_load_box");
	var url = "http://hq.sinajs.cn/rn="+model.stringMark+"&list=" + _config.params.toString();
	model.stringUrl = url;
	model.intInterval = _config.refash ?  -1 : 5000;
	model.processData = function () {
		_DataSource = {};
		for(var i = 0,len = _config.keys.length; i < len; i++){
			var item = _config.keys[i];
			if(window[item] == undefined){
				continue;
			}
			_DataSource[item] = window[item];
		}
		if(_refashTime < 5){
			_refashTime++;
		}
	}
	model.updateView = function () {
			if(_config.callback){
				_config.callback(_DataSource);
			}
		if(_refashTime >= 5){
			model.intInterval = 10000;
		}
	}
	model.start();
	
	this.ChangeData = function(params,keys){
		_config.params = params;
		_config.keys = keys;
		var url = "http://hq.sinajs.cn/rn="+model.stringMark+"&list=" + _config.params.toString();
		model.stringUrl = url;
		model.start();
	},
	this.Stop = function(){
		model.stop();
	}
}

var Cookie={
	set:function(name,value,expires,path,domain){
		if(typeof expires=="undefined"){
			expires=new Date(new Date().getTime()+1000*3600*24*30);
		}
		document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path="+path:"; path=/")+((domain)?";domain="+domain:"");
	},
	get:function(name){
		var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr!=null){
			return unescape(arr[2]);
		}
		return "";
	},
	clear:function(name,path,domain){
		if(this.get(name)){
		document.cookie=name+"="+((path)?"; path="+path:"; path=/")+((domain)?"; domain="+domain:"")+";expires=Fri, 02-Jan-1970 00:00:00 GMT";
		}
	}
}

var CheckStockType = function(pNum){
	var result = "";
	var regHash = {
		"stock":/^s[z|h][0-9]{6}$/,
		"fund":/^(fsz|of)[0-9]{6}$/,
		"hkstock":/^[0-9]{5}$/,
		"usstock":/^[a-z]{0,4}$/
	};
	for(var key in regHash){
		if(regHash[key].test(pNum)){
			result = key;
			break;
		}
	}
	return result;
}

//策略选择器
var StrategySelector = (function(){
	var _performs = [];
	var _initState = false;
	var _active;

	//公有对象
	var Public = {
		Register: function(perform){
			//注册执行策略
			_performs[perform.Key] = perform;
		},
		Select: function(key){
			//选择策略
			for(var i = 0,len = _performs.length; i < len; i++){
				if(key == _performs[i].key){
					_active = _perform[i].fun;
					showActive();
					return true;
				}
			}
			return false;
		},
		Add: function(pNum){
			//增加自选股/自选基金
			var type = CheckStockType(pNum);
			if(type == ""){
				alert("添加股票关注失败。\n请确认您所输入的股票代码是否正确。");
				return false;
			}
			var pf = _performs[(type == "fund"? type : "stock")];
			
			if(pf){
				SelectMenu((type == "fund"?1 : 0),document.getElementById((type == "fund"?"js_myfund_menu" : "js_mystock_menu")));
				pf.AddCookie(pNum);
			}
		},
		Delete: function(pNum){
			var type = CheckStockType(pNum);
			var pf = _performs[(type == "fund"? type : "stock")];
			if(pf){
				pf.DeleteCookie(pNum);
			}
		},
		Goto: function(ele,value){
			if(value == ""){
				ele.href = "javascript://";
				return false;
			}
			var type = CheckStockType(value);
			if(type == ""){
				return false;
			}
			else{
				switch(type){
					case "fund":
						ele.href = "http://finance.sina.com.cn/fund/quotes/" + value + "/bc.shtml";
						break;
					case "stock":
						ele.href = "http://finance.sina.com.cn/realstock/company/" + value + "/nc.shtml";
						break;
					case "hkstock":
						ele.href = "http://finance.sina.com.cn/stock/hkstock/quote.html?code=" + value;
						break;
					case "usstock":
						ele.href = "http://finance.sina.com.cn/stock/usstock/US100_" + value.toUpperCase() + ".shtml";
						break;
					default:
						ele.href = "javascript://";
						break;
				}
				return true;
			}
		}
	};
	return Public;
})();

var PerformConfig = {Max:6};
var PerformBase = function(cookieKey){
	this.Key = cookieKey;
	var _self = this;
	var name = (cookieKey == "fund")? "基金" : "股票";
	var searchController;
	
	StrategySelector.Register(cookieKey,_self);
	
	var cutPNum = function(pNum){
		var type = CheckStockType(pNum);
		switch(type){
			case "usstock":
				pNum = "gb_" + pNum;
				break;
			case "hkstock":
				pNum = "hk" + pNum;
				break;
			case "fund":
				pNum = pNum.replace("of","fu_");
				pNum = pNum.replace("fsz","sz");
				break;
		}
		return pNum;
	}
	
	this.DeleteCookie = function(pNum){
		pNum = cutPNum(pNum);
		var cstr = Cookie.get(_self.Key);
		if(cstr != ""){
			data = cstr.split(",");
		}
		else{
			data = [];
		}
		var index = -1;
		for(var i = 0,len = data.length; i < len; i++){
			var item = data[i];
			if(data[i] == pNum){
				index = i;
				break;
			}
		}
		if(index > -1){
			data.splice(index,1);
			Cookie.set(_self.Key,data);
			_self.GetCustomData(data,true);
		}
	},
	this.AddCookie = function(pNum){
		var cstr = Cookie.get(_self.Key);
		var value = cutPNum(pNum);
		
		if(cstr != ""){
			data = cstr.split(",");
		}else{
			data = [];
		}
		for (var i = 0; i < data.length; i++){
			if (data[i] == value) {
				alert("您已经添加过此"+name+"。");
				return;
			}
		}
		if(data.length > PerformConfig.Max){
			document.getElementById("stock_inp").blur();
			alert("对不起，最多只能添加" + (PerformConfig.Max +1)+ "个"+name+"，请您删除现有的"+name+"再添加！");
			return;
		}
		
		data.push(value);
		Cookie.set(_self.Key,data);
		_self.GetCustomData(data);
	},
	this.GetCustomData = function(p,newobj){
		var k =[];
		for(var i =0,len =p.length;i<len;++i){
			var k_item = "hq_str_"+p[i];
			k.push(k_item);
		}
		if(newobj){
			if(searchController){
				searchController.Stop();
			}
			searchController = undefined;
		}
		
		if(searchController == undefined){
			if(k.length > 0){
				searchController = new GetDataController({
					params:p,
					keys:k,
					callback: function(result){
						_self.Display(result);
					}
				});
			}
			else{
				_self.Display(null);
			}
		}
		else{
			searchController.ChangeData(p,k);
		}
	}
}

//股票
var StockPerform = function(){
	PerformBase.call(this,"stock");		//继承父类
	var _self = this;
	//var defaulf_Stock = ["sz000002","sh600036","sh601318","sh601899"];
	var defaulf_Stock = ["sh601398","sh600030","sz000002","sh600547","sh601857"];
	var data = Cookie.get("stock");
	if(data !== ""){
		_self.GetCustomData(data.split(","));
	}else{
		Cookie.set("stock",defaulf_Stock);
		_self.GetCustomData(defaulf_Stock);
	}
	
	this.Display = function(result){
		var box = document.getElementById("my_stock_list");
		box.innerHTML = "";
		var html = "";
		html += '<table id="my_stock" cellspacing="1" cellpadding="0" border="0" width="100%">';
		html += '<tr class="tl"><th scope="col">我的自选股</th><th scope="col">当前价</th><th scope="col">涨跌幅</th><th scope="col">涨跌额</th><th scope="col">昨收</th><th scope="col">今开</th><th scope="col">成交量</th><th scope="col">删除</th></tr>';
		
		for(var item in result){
			if(result[item] != ""){
				var num = item.replace("hq_str_","");
				var stockType = 0;
				if(/^hk[0-9]{5}$/.test(num)){
					num = num.replace("hk","");
					stockType = 1;
				}
				else if(/^gb_[a-z]{0,4}$/.test(num)){
					num = num.replace("gb_","");
					stockType = 2;
				}
				var objItem = result[item].split(",");
				switch(stockType){
					case 0:
						var upValue = (objItem[3] - objItem[2]);
						var upPsn = (upValue/Number(objItem[2]) * 100).toFixed(2);
						var t = upValue > 0 ? "red":"green";
						if(upValue == 0){
							t = "";
						}
						var t2 = "",t3 = "", t4 = "",t5 = "";;
						if(objItem[1]>objItem[2]){
							t2 ="green",t3 = "red";
						}else if(objItem[1]<objItem[2]){
							t3 ="green",t2 = "red";
						}
						if(objItem[7]>objItem[6]){
							t4 ="green",t5 = "red";
						}else if(objItem[7]<objItem[6]){
							t5 ="green",t4 = "red";
						}
						
						html+='<tr><td class="name"><a title="点击查看详情" href="http://finance.sina.com.cn/realstock/company/'+item.substr(7,8)+'/nc.shtml" target="_blank">'+objItem[0]+'</a></td>'; //名称									
						html+='<td class="'+t+'">'+((objItem[3]==0) ? "-":objItem[3]) +'</td>';	 //当前价
						html+='<td class="'+t+'">'+((objItem[3]==0) ? "-":upPsn+"%")+'</td>';     //涨跌幅
						html+='<td class="'+t+'">'+((objItem[3]==0) ? "-":upValue.toFixed(2))+'</td>';     //涨跌额
						html+='<td class="'+t2+'">'+objItem[2]+'</td>';     //昨收
						
						html+='<td class="'+t3+'">'+((objItem[3]==0) ? "-":objItem[1])+'</td>';     //今开
						
/*						html+='<td><span class="red">'+((objItem[4]==0) ? "-":objItem[4])+'</span>/<span class="green">'+((objItem[5]==0) ? "-":objItem[5])+'</span></td>';     //最高/最低价*/
						html+='<td class="'+t+'">'+ Math.ceil(objItem[8]/100) +'</td>';     //买入/卖出价
						html+='<td><a href="javascript://" onclick="StrategySelector.Delete(\''+num+'\');"><img alt="删除" src="images/delete_s.gif"/></a></td></tr>';
						
						break;
					case 1:
						var t = (objItem[2] < 0)? "green" : "red";
						html+='<tr><td class="name"><a title="点击查看详情" href="http://finance.sina.com.cn/stock/hkstock/quote.html?code='+item.replace("hq_str_","").replace("hk","")+'" target="_blank">'+objItem[1]+'</a></td>'; //名称									
						html+='<td class="'+t+'">' + objItem[6] +'</td>';	 //当前价
						html+='<td class="'+t+'">' + objItem[8] + "%" + '</td>';     //涨跌幅
						html+='<td class="'+t+'">' + (objItem[6]*(objItem[8]/100)).toFixed(3) + '</td>';     //涨跌额
						html+='<td class="'+t+'">' + objItem[3] + '</td>';     //昨收
						
						html+='<td class="'+t+'">' + objItem[9] + '</td>';     //今开
						
/*						html+='<td><span class="red">'+ objItem[4] +'</span>/<span class="green">'+ objItem[5] +'</span></td>';     //最高/最低价*/
						html+='<td class="red">' + (objItem[12]/10000).toFixed(0) + '</td>';     //买入/卖出价
						html+='<td><a href="javascript://" onclick="StrategySelector.Delete(\''+num+'\');"><img alt="删除" src="images/delete_s.gif"/></a></td></tr>';
						break;
					case 2:
						var t = (objItem[2] < 0)? "green" : "red";
						html+='<tr><td class="name"><a title="点击查看详情" href="http://finance.sina.com.cn/stock/usstock/US100_'+item.replace("hq_str_","").replace("gb_","").toUpperCase()+'.shtml" target="_blank">'+objItem[0]+'</a></td>'; //名称									
						html+='<td class="'+t+'">' + objItem[1] +'</td>';	 //当前价
						html+='<td class="'+t+'">' + objItem[2] + "%" + '</td>';     //涨跌幅
						html+='<td class="'+t+'">' + (objItem[1]*(objItem[2]/100)).toFixed(2) + '</td>';     //涨跌额
						html+='<td class="'+t+'">' + objItem[26] + '</td>';     //昨收
						
						html+='<td class="'+t+'">' + objItem[5] + '</td>';     //今开
						
/*						html+='<td><span class="red">'+ objItem[6] +'</span>/<span class="green">'+ objItem[7] +'</span></td>';     //最高/最低价*/
						html+='<td class="red">' + (objItem[10]/10000).toFixed(2) + '</td>';     //买入/卖出价
						html+='<td><a href="javascript://" onclick="StrategySelector.Delete(\''+num+'\');"><img alt="删除" src="images/delete_s.gif"/></a></td></tr>';
						break;
				}
			}
			else{
				var no = item.replace("hq_str_","");
				alert("添加股票失败，" + no + "已摘牌！");
				_self.DeleteCookie(no);
			}
		}
		html+="</table>";
		box.innerHTML = html;
		
	}
}

//基金
var FundPerform = function(){
	PerformBase.call(this,"fund");		//继承父类
	var _self = this;
	var defaulf_Stock = ["fu_000001","fu_000021","fu_162204","fu_162703","fu_260104"];
	var data = Cookie.get("fund");
	if(data !== ""){
		_self.GetCustomData(data.split(","));
	}else{
		Cookie.set("fund",defaulf_Stock);
		_self.GetCustomData(defaulf_Stock);
	}
	
	this.Display = function(result){
		var box = document.getElementById("my_fund_list");
		box.innerHTML = "";
		var html = "";
		html += '<table cellspacing="1" cellpadding="0" border="0" width="100%">';
		html += '<tr class="tl"><th scope="col">基金名称</th><th scope="col">最新估值</th><th scope="col">单位净值</th><th scope="col">累计单位净值</th><th scope="col">五分钟涨速</th><th scope="col">涨跌幅</th><th scope="col">更新时间</th><th scope="col">删除</th></tr>';
		for(var item in result){
			if(result[item] != ""){
				var objItem = result[item].split(",");
				var num = item.replace("hq_str_","");
				if(/^sz[0-9]{6}$/.test(num)){
					//ETF/LOF基金
				}else{
					var t = (objItem[6] < 0)? "green" : "red";
					html+='<tr><td class="name"><a title="点击查看详情" href="http://finance.sina.com.cn/fund/quotes/'+item.replace("hq_str_","").replace("fu_","of")+'/bc.shtml" target="_blank">'+objItem[0]+'</a></td>'; //基金名称
					html+='<td class="'+t+'">' + objItem[3] +'</td>';	 //最新估值
					html+='<td class="'+t+'">' + objItem[3] +'</td>';	 //单位净值
					html+='<td class="'+t+'">' + objItem[4] + '</td>';     //累计单位净值
					html+='<td class="'+t+'">' + objItem[5] + '</td>';     //五分钟涨速
					html+='<td class="'+t+'">' + objItem[6] + "%" + '</td>';     //涨跌幅
					html+='<td class="'+t+'">' + objItem[1] + '</td>';     //更新时间
					html+='<td><a href="javascript://" onclick="StrategySelector.Delete(\''+num.replace("fu_","of")+'\');"><img alt="删除" src="images/delete_s.gif"/></a></td></tr>';
				}
			}
			else{
				var no = item.replace("hq_str_","");
				if(no.indexOf("fu_") == -1){
					alert("添加股票失败，" + no + "已摘牌！");
					_self.DeleteCookie(no);
				}
				else{
					//alert("抱歉，暂只支持选择开发式基金！");
					_self.DeleteCookie(no);
				}
			}
		}
		html+="</table>";
		box.innerHTML = html;
	}
}

StrategySelector.Register(new StockPerform());
StrategySelector.Register(new FundPerform());


//***********下面是总体走向功能块
function locaImg(_j, _k, _h) {
	var _l = typeof _j == "string" ? document.getElementById(_j) : _j;
	var _m = _l.cloneNode(true);
	_m._A = _l;
	_m._y = typeof _h != "undefined" ? _h: new Function();
	_m[document.all ? "onreadystatechange": "onload"] = function() {
		if (document.all && this.readyState != "loaded" && this.readyState != "complete") {
			return;
		}
		this._A.parentNode.replaceChild(this, this._A);
		_m._y(this);
		_m._y = null;
		this._A = null;
		this[document.all ? "onreadystatechange": "onload"] = null;
	};
	_m.src = _k;
};

var imgPathObj = {
	"hq_str_s_sh000001":"http://image.sinajs.cn/newchart/small/nsh000001.gif",
	"hq_str_sh000300":"http://image.sinajs.cn/newchart/small/nsh000300.gif",
	"hq_str_sz399001":"http://image.sinajs.cn/newchart/small/nsz399001.gif",
	"hq_str_hkHSI":"http://image.sinajs.cn/newchart/hk_stock/min_small/HSI.gif",
	"hq_str_hf_GC":"http://image.sinajs.cn/newchart/v5/futures/global/mins/GC.gif",
	"hq_str_hf_CL":"http://image.sinajs.cn/newchart/v5/futures/global/mins/CL.gif"
};

var BoardDataSource = [
	{
		contentbox:document.getElementById("js_all_first"),
		params:["s_sh000001","sz399001","hf_GC","hf_CL"],
		img:"js_img_first",
		defaultimg:"hq_str_s_sh000001"
	},
	{
		contentbox:document.getElementById("js_all_second"),
		params:["sz399001","hf_GC"],
		img:"js_img_second",
		defaultimg:"hq_str_sz399001"
	},
	{
		contentbox:document.getElementById("js_all_third"),
		params:["hkHSI","hf_CL"],
		img:"js_img_third",
		defaultimg:"hq_str_hkHSI"
	}
]

var ChangeImg = function(imgboxid,key,ele){
	var url = imgPathObj[key] + "?" + (new Date()).getTime();
	locaImg(imgboxid, url);
	if(ele){
		var dl = ele.parentNode.parentNode;
		var div = dl.parentNode;
		var dlList = div.getElementsByTagName("dl");
		for(var i = 0, len = dlList.length; i < len; i++){
			dlList[i].className = "";
		}
		
		for(var i = 0, len = BoardDataSource.length; i < len; i++){
			var item = BoardDataSource[i];
			for(var j = 0, jlen = item.params.length; j < jlen; j++){
				if(("hq_str_" + item.params[j]) == key){
					item.defaultimg = key;
				}
			}
		}
		dl.className = "current";
	}
}

var BoardShowed = function(obj){
	//obj模型
	obj.keys = [];
	for(var i = 0,len = obj.params.length; i < len; i++){
		obj.keys.push("hq_str_" + obj.params[i]);
	}
	var activedImg = "";
	if(obj.defaultimg){
		ChangeImg(obj.img,obj.defaultimg);
	}
	GetDataController({
		params: obj.params,
		keys: obj.keys,
		callback: function(result){
			var box = obj.contentbox; 
			var html = "";
			for(var item in result){
				var objItem = result[item].split(",");
				var up1 = Number(objItem[2]).toFixed(2),up2 = objItem[3];
				if(up1>0){
					up1 = (Number(objItem[2]) > 0? "+" : "")+up1;
					up2 = (Number(objItem[3]) > 0? "+" : "")+up2;
				}else if(up1==0){
					up1="-";
					up2="-";
				}
				
				var current = "";
				if(item == obj.defaultimg){
					current = " class='current'";
				}
				
				if(item != "hq_str_hkHSI" && item != "hq_str_hf_GC" && item != "hq_str_hf_CL" && item !="hq_str_sh000300" && item !="hq_str_sz399001" && item !="hq_str_sz399329"){
					html += "<dl " + current + ">";
					html += '<dt><a href="javascript://" onclick="ChangeImg(\''+obj.img+'\',\''+item+'\',this);">'+objItem[0]+'</a></dt>';
					html += '<dd class="'+(Number(objItem[2]) > 0? "red" : "green")+'">'+ Number(objItem[1]).toFixed(2) +'</dd>';
					html += '<dd class="'+(Number(objItem[2]) > 0? "red" : "green")+'">'+ up2 + "%" + "</dd>";
					html += "</dl>";
					
				}
				else if(item == "hq_str_hkHSI"){
					var t = (objItem[7] > 0)? "red" : "green";
					html += "<dl " + current + ">";
					html += '<dt><a href="javascript://" onclick="ChangeImg(\''+obj.img+'\',\''+item+'\',this);">'+objItem[1]+'</a></dt>';
					html += '<dd class="'+t+'">'+ Number(objItem[4]).toFixed(2) +'</dd>';
					html += '<dd class="'+t+'">'+ (objItem[7] > 0?"+":"") + objItem[8] + "%" +"</dd>";
					html += "</dl>";
				}
				else if(item == "hq_str_hf_GC"){
					var nu3 = (objItem[1]/objItem[0]*100).toFixed(2);
					var lh = "";
					if(objItem[7] > objItem[0]){
						lh = "-";
					}else if(objItem[7] < objItem[0]){
						lh= "+";
					}

					var cssText = lh=="+"?"red":"green";
					
					html += '<dl ' + current + '>';
					html += '<dt><a href="javascript://" onclick="ChangeImg(\''+obj.img+'\',\''+item+'\',this);">黄金</a></dt>';
					html += '<dd class="'+cssText+'">'+ Number(objItem[0]).toFixed(2) +"</dd>";
					html += '<dd class="'+cssText+'">'+ lh + Number(objItem[1]).toFixed(2) +"</dd>";
					html += "</dl>";
				}
				else if(item == "hq_str_hf_CL"){
					var nu3 = (objItem[1]/objItem[0]*100).toFixed(2);
					var l = "";
					if(objItem[7] > objItem[0]){
						l = "-";
					}else if(objItem[7] < objItem[0]){
						l= "+";
					}
					var cssText = l=="+"?"red":"green";
					
					html += '<dl ' + current + '>';
					html += '<dt><a href="javascript://" onclick="ChangeImg(\''+obj.img+'\',\''+item+'\',this);">原油</a></dt>';
					html += '<dd class="'+cssText+'">'+ Number(objItem[0]).toFixed(2) +"</dd>";
					html += '<dd class="'+cssText+'">'+ l + Number(objItem[1]).toFixed(2) +"</dd>";
					html += "</dl>";
				}else if(item=="hq_str_sh000300" || item=="hq_str_sz399001" || item=="hq_str_sz399329"){
					var upValue = (objItem[3] - objItem[2]);
					var upPsn = (upValue/Number(objItem[2]) * 100).toFixed(2);
					var t = upValue > 0 ? "red":"green";
					if(upValue == 0){
						t = "";
					}
					var t2 = "",t3 = "", t4 = "",t5 = "";;
					if(objItem[1]>objItem[2]){
						t2 ="green",t3 = "red";
					}else if(objItem[1]<objItem[2]){
						t3 ="green",t2 = "red";
					}
					if(objItem[7]>objItem[6]){
						t4 ="green",t5 = "red";
					}else if(objItem[7]<objItem[6]){
						t5 ="green",t4 = "red";
					}
					html += "<dl " + current + ">";
					html += '<dt><a href="javascript://" onclick="ChangeImg(\''+obj.img+'\',\''+item+'\',this);">'+objItem[0]+'</a></dt>';
					html += '<dd class="'+t+'">'+ Number(objItem[3]).toFixed(2) +'</dd>';
					html += '<dd class="'+t+'">'+ ((upValue > 0)? "+":"") + ((objItem[3]==0) ?  "-" : upPsn) + "%" +"</dd>";
					html += "</dl>";
					document.getElementById("update_time").innerHTML = objItem[objItem.length - 2] + " \u6570\u636e";
					
				}
			}
			box.innerHTML = "";
			box.innerHTML = html;
		}
	});
}

BoardShowed(BoardDataSource[0]);