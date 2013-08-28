//搜索
var searchsite = {
baidu:["http://news.baidu.com/ns", "word", "百度"],
sogou:["http://news.sogou.com/news", "query", "搜狗"],
soso:["http://news.soso.com/n.q","w",'搜搜']
};
//要点,国内,国际,娱乐,财经,体育,军事,汽车,科技,热词,微博
var news_class_id=new Array('yd','gn','gj','yl','cj','ty','js','qc','kj','rc','wb','df');
var ct={
		init:function (){
			var today = new Date();
			var y=today.getFullYear();
			var m=today.getMonth()+1;
			var d=today.getDate();
			ct.$("date_time").innerHTML = y+"年"+m+"月"+d+"日";
			var news_class;
			//新闻分类列表
			if(ct.getcookie('news_class')==null){
				news_class=news_class_id;
				ct.setcookie({'name':'news_class','val':news_class_id});
			}else{
				news_class=ct.getcookie('news_class');
			}
			if(news_class.length>0){			
				news_class=typeof(news_class)=='object'?news_class:news_class.split(',');
				for(var i=0;i<news_class.length;i++){
					ct.$(news_class[i]+'_check').checked=true;
					ct.$(news_class[i]).style.display='';
					if(news_class[i]=='df'){
						//本地新闻
						var news_local=ct.getcookie('news_locid');
						if(news_local!=null){
							news_local=news_local.split(',');
							ct.showNewsCity(news_local[0],news_local[1],news_local[2]);
						}else{
							ct.loadJs('http://tianqi.2345.com/t/cityInfo2.php');
						}
					}
				}
				var news_url='http://d.2345.com/news/newsdata.js';
				ct.loadJs(news_url);
			}
			//判断全选状态
			var all_chek= document.getElementsByName('newcateory[]');
			var all_chek_nums=0;
			for (var i=0; i<all_chek.length; i++){
				if(all_chek[i].checked == true){
					all_chek_nums++;
				}
			}
			if(all_chek_nums==12){
				ct.$('all-news').checked=true;
			}else{
				ct.$('all-news').checked=false;
			}
			//添加事件
			addEvent(ct.$('dz_txt'), 'click', function(){ct.showDiv();});
			addEvent(ct.$('cancel'), 'click', function(){ct.clearNewsCheck();});
			addEvent(ct.$('city_a'),'click', function(){ct.showCity();});
			addEvent(ct.$('city_back'),'click', function(){ct.list_city();});
			addEvent(ct.$('city_close'),'click', function(){ct.showCity();});
			addEvent(ct.$('search_show'),'click',function(){ct.showSearch();});
			addEvent(ct.$('serach_sub'),'click',function(){ct.subSearch();});
			addEvent(ct.$('all-news'),'click',function(){ct.checkAll(this,'newcateory[]');});
			//城市列表
			ct.list_city();
		},
		$:function(_ele){
			return document.getElementById(_ele);
		},
		setcookie:function(a){
			var b = new Date();
			var c = a.name;
			var _domain='2345.com';
			var _exps=366;
			var  _secure= "";
			_val = a.val;
			_exps = typeof(a.exps) != "undefined" ? a.exps:_exps;
			_domain = a.domain ||_domain;
			_path = a.path || "/";
			_secure = a.secure || _secure;
			b.setDate(b.getDate() + _exps);
			var d = c + "=" + escape(_val) + (_exps ? ";expires=" + b.toUTCString() : "") + (_path ? ";path=" + _path: "") + (_domain ? ";domain=" + _domain: "") + (_secure ? ";secure=": "");
			document.cookie = d;
		},
		getcookie:function(a){
			var b = document.cookie.split("; ");
			for (var c = 0; c < b.length; c++) {
				tmp = b[c].split("=");
				if (tmp[0] == a) {
					try {
						return decodeURIComponent(tmp[1]);
					} catch(e) {
						return unescape(tmp[1]);
					}
				}
			}
			return null;
		},
		delcookie: function(a) {
                if(String.prototype.toLowerCase.apply( typeof (a)) == "string") {
                    _name = a;
                    a = {
                        name : _name,
                        val : ""
                    }
                }
                a.exps = -1;
                a.secure = "";
                this.setcookie(a)
        },
		subSearch:function(){
			var url=ct.$('sh_form').action+'?'+ct.$('news_inp').name+'='+ct.$('news_inp').value;
			window.open(url);
		},
		showSearch:function(a){
			if(typeof(a)=='undefined'){
				ct.$('news_search_m').style.display='';
			}else{
				ct.$('sh_form').action=searchsite[a][0];
				ct.$('news_inp').name=searchsite[a][1];
				ct.$('search_show').innerHTML=searchsite[a][2]+'新闻';
				ct.$('news_search_m').style.display='none';
			}
		},
		showDiv:function (){
			if(ct.$("fenlei_list").style.display == "none"){
				ct.$("fenlei_list").style.display = "";
				ct.$("dz_txt").className="dz_txt down";
			}else{
				ct.$("fenlei_list").style.display = "none";
				ct.$("dz_txt").className="dz_txt up";
			}
		},
		showNewsCity:function(a,b,c){
			ct.$('city_name').innerHTML=a+'新闻';
			ct.$('df_list').innerHTML='<font style="font-size:14px;">数据加载中,请稍后...</font>';
			ct.loadJs('http://d.2345.com/news/get_city_news.php?pinyin='+b+'&name='+a+'&locid='+c);
		},
		showCity:function(){
			if(ct.$("city").style.display == "none"){
				ct.$("city").style.display = "";
				ct.$("city_a").className="up";
			}else{
				ct.$("city").style.display = "none";
				ct.$("city_a").className="down";
			}
		},
		clearNewsCheck:function(){
			var _check=ct.getcookie('news_check');
			var _uncheck=ct.getcookie('news_uncheck');
			if(_check!=null){
				_check=_check.split(',');
				for(var i in _check){
					if(_check[i]!=''){
						ct.$(_check[i]+'_check').checked=false;
						ct.$(_check[i]).style.display='none';
					}
				}
				ct.delcookie('news_check');	
			}
			if(_uncheck!=null){
				_uncheck=_uncheck.split(',');
				for(var i in _uncheck){
					if(_uncheck[i]!=''){
						ct.$(_uncheck[i]+'_check').checked=true;
						ct.$(_uncheck[i]).style.display='';
					}
				}
				ct.delcookie('news_uncheck');
			}
			ct.$("fenlei_list").style.display = "none";
			ct.$("dz_txt").className="dz_txt up";
		},
		hideNews:function(e){
			var id=e.substring(0,2);
			var _check=ct.getcookie('news_check')!=null?ct.getcookie('news_check'):'';
			var _uncheck=ct.getcookie('news_uncheck')!=null?ct.getcookie('news_uncheck'):'';
			if(ct.$(e).checked==true){
				ct.$(id).style.display = "";				
				_uncheck=_uncheck.replace(id+',','');
				_check=_check.replace(id+',','');
				_check+=id+',';
				ct.setcookie({'name':'news_check','val':_check});
				ct.setcookie({'name':'news_uncheck','val':_uncheck});
				var lists=ct.$(id+'_list').innerHTML;
				if(lists.length<15&&id!='df'){
					ct.loadJs('http://d.2345.com/news/newsdata.js');
				}
				var df_list=ct.$('df_list').innerHTML
				if(id=='df'&&df_list.length<50){
					ct.loadJs('http://tianqi.2345.com/t/cityInfo2.php');
				}
			}else{
				ct.$('all-news').checked=false;
				_check=_check.replace(id+',','');
				_uncheck=_uncheck.replace(id+',','');
				_uncheck+=id+',';
				ct.setcookie({'name':'news_uncheck','val':_uncheck});
				ct.setcookie({'name':'news_check','val':_check});
				ct.$(id).style.display = "none";
			}
		},
		loadJs:function(_url) {
			var callback = arguments[1] || function() {
			};
			var _script = document.createElement("SCRIPT");
			_script.setAttribute("type", "text/javascript");
			_script.setAttribute("src", _url);
			document.getElementsByTagName("head")[0].appendChild(_script);
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
		},
		list_city:function(a,b){
			var city_key='';
			var list='';
			var province,city;
			if(b==''){
				city_key=a+'||0'
				var arr=news_cities[city_key]
				if(arr!=''){
					for(var i in arr){
						city=arr[i].split('|');
						list+='<li><a href="javascript:void(0);" onclick="cityinfo2(\'\',\''+city[0]+'\',\''+city[2]+'\',\'\','+city[1]+');">'+city[0]+'</a></li>';
					}
					ct.$('btn_back').style.display='';
				}
			}else{
				for(var key in news_cities){
					province=key.split('|');
					if(province[1]!=''){
						list+='<li><a href="javascript:void(0);" onclick="cityinfo2(\'\',\''+province[0]+'\',\''+province[2]+'\',\'\','+province[1]+')">'+province[0]+'</a></li>';
					}else{
						list+='<li><a href="javascript:void(0);" onclick="ct.list_city(\''+province[0]+'\',\'\')">'+province[0]+'</a></li>';
					}
				}
				ct.$('btn_back').style.display='none';
			}
			ct.$('city_list').innerHTML=list+'<div class="clear"></div>';
		},
		showNews:function(_news,_keywords){
			//搜索热词
			var reci=_keywords['t'].length<=10?_keywords['t']:(_keywords['t'].substring(0,10)+'...');
			ct.$('keywords').innerHTML='<a href="http://news.soso.com/n.q?w='+_keywords['t']+'" target="_blank">'+reci+'</a>';
			var _cookie=ct.getcookie('news_class');
			var _news_class_id = new Array();
			if(_cookie!=null){
				_cookie=_cookie.split(',');
				var obj = document.getElementsByName('newcateory[]');
				for (var i=0; i<obj.length; i++){
					if(obj[i].checked == true){
						var _val = obj[i].id.toString().substr(0,2);
							_news_class_id.push(_val);
					}
				}
			}
			_cookie=_news_class_id!=''?_news_class_id:_cookie;
			if(_cookie!=''){
				var len=_cookie.length;
				for(var i=0;i<len;i++){
					if(_cookie[i]!='df'){
						ct.$(_cookie[i]+'_list').innerHTML=ct.foreach(_news[_cookie[i]],'');
						if(_cookie[i]!='rc'&&_cookie[i]!='wb'){
							ct.$(_cookie[i]+'_list').innerHTML=ct.foreach(_news[_cookie[i]],'');
						}else{
							ct.$(_cookie[i]+'_list').innerHTML=ct.foreach(_news[_cookie[i]],'reci');
						}
					}
					ct.$(_cookie[i]).style.display='';
				}
			}
		},
		checkAll:function(e, itemName){
			var _check,_uncheck;
			if(e.checked){
				_check=news_class_id;
				for(var i in _check){
					ct.$(_check[i]).style.display='';
				}
				var news_url='http://d.2345.com/news/newsdata.js';
				ct.loadJs(news_url);
				ct.setcookie({'name':'news_check','val':_check});
				ct.delcookie('news_uncheck');
			}else{
				_uncheck=news_class_id;
				for(var i in _uncheck){
					ct.$(_uncheck[i]).style.display='none';
				}
				ct.setcookie({'name':'news_uncheck','val':_uncheck});
				ct.delcookie('news_check');
			}
			var obj = document.getElementsByName(itemName);
			for (var i=0; i<obj.length; i++){
				obj[i].checked = e.checked;	 
			}  
		},
		foreach:function(from,ctype){
			var htm='';
			var title='';
			for(i in from){
				if(ctype!='reci'){
					if(i==0){
						htm+='<li><i>·</i><strong><a href="'+from[i].u+'" target="_blank" title="'+from[i].t+'">'+from[i].t+'</a></strong></li>'
					}else{
						htm+='<li><i>·</i><a href="'+from[i].u+'" target="_blank" title="'+from[i].t+'">'+from[i].t+'</a></li>'
					}
				}else{
					title=from[i].t;
					if(title.length>12){
						title=title.substring(0,12)+'...';
					}
					htm+='<li><a href="'+from[i].u+'" needrecord="record" cat="reci" target="_blank" title="'+from[i].t+'">'+title+'</a></li>'
				}
			}
			return htm;
		},
		saveDiyNews:function(obj){
			if(obj == "default"){
				//恢复默认设置
				news_class_cookie={'name':'news_class','val':news_class_id};
				ct.setcookie(news_class_cookie);
			}else{
				//自己定制保存
				var _news_class_id = new Array();
				var obj = document.getElementsByName('newcateory[]');
				for (var i=0; i<obj.length; i++){
					if(obj[i].checked == true){
						var _val = obj[i].id.toString().substr(0,2);
							_news_class_id.push(_val);
					}
				}
				ct.setcookie({"name":'news_class','val':_news_class_id});
				ct.showDiv();
			}
			ct.delcookie('news_check');
			window.location.reload(true);
		}
	};
function addEvent(element, type, handler) {
	if(!element) return false;
	if (!handler.$$guid) handler.$$guid = addEvent.guid++;
	if (!element || !element.events) element.events = {};
	var handlers = element.events[type];
	if (!handlers) {
		handlers = element.events[type] = {};
		if (element["on" + type]) {
			handlers[0] = element["on" + type];
		}
	}
	handlers[handler.$$guid] = handler;
	element["on" + type] = handleEvent;
};
addEvent.guid = 1;
function removeEvent(element, type, handler) {
	if (element.events && element.events[type]) {
		delete element.events[type][handler.$$guid];
	}
};
function handleEvent(event) {
	event = event || window.event;
	var handlers = this.events[event.type];
	for (var i in handlers) {
		this.$$handleEvent = handlers[i];
		this.$$handleEvent(event);
	}
}; 
function showNewsCity(a,b,c){
	if(typeof(b[0])=='undefined'){
		ct.$('df_list').innerHTML='<font style="font-size:14px;">该城市暂无新闻数据！</font>';
		return ;
	}
	ct.$('df_list').innerHTML=ct.foreach(b,'');
};
function cityinfo2(a,b,c,d){
	ct.$('city').style.display='none';
	var news_city=c||'beijing';
	var news_locname=b||'北京';
	var province='';
	var locid=arguments[4]||'';
	for(var city in news_cities){
		if(typeof(news_cities[city][0])=='undefined'){
			province=city.split('|');
		}else{
			for(var i in news_cities[city]){
				province=news_cities[city][i].split('|');
			}
		}
		if(province[2]==news_city){
			locid=province[1];
			news_locname=province[0];
		}
	}
	//地方新闻
	var news_locid=new Array(news_locname,news_city,locid);
	ct.setcookie({'name':'news_locid','val':news_locid});
	
	ct.$('city_news_more').innerHTML='<a href="http://news.baidu.com/n?cmd=7&loc='+locid+'&name='+b+'" target="_blank">更多>></a>';
	ct.$('city_name').innerHTML=b+'新闻';
	ct.$('df_list').innerHTML='<font style="font-size:14px;">数据加载中,请稍后...</font>';
	ct.loadJs('http://d.2345.com/news/get_city_news.php?pinyin='+news_city+'&name='+news_locname+'&locid='+locid);
}
var is2345=top.location==self.location?1:0;
function SetHome(a,b){
	if(is2345){
		var c=top.location;
		var d=new RegExp("http://www.2345.com/\\?k");
		if(d.test(c)){
			b=c
		}
	}
	var f=false;
	try{
		if(window.external&&window.external.twGetRunPath){
			var r=external.twGetRunPath();
			if(r&&r.toLowerCase().indexOf("360")>-1){
				f=true
			}
		}
	}
	catch(e){
		f=false
	}
	var g=navigator.appVersion;
	if(navigator.userAgent.indexOf('MSIE')>=0&&!/(2345Explorer|Maxthon|TheWorld|TencentTraveler|MetaSr|QQbrowser|GreenBrowser)/i.test(g)&&!f){
		a.style.behavior='url(#default#homepage)';
		a.setHomePage(b)
	}
	else{
		window.open("/help/szsy.htm")
	}
}
function addFavorite() {
	var url = window.location;
	var name = document.title;
	try
    {
        window.external.addFavorite(url, name);
    }catch (e){
		try{
				window.sidebar.addPanel(name, url, "");
		}catch (e){
				alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
    } 
}
function cc(a) {
    var b = arguments,
    web = "ajax6",
    a2,
    i1 = document.cookie.indexOf("uUiD="),
    i2;
    if (b.length > 1) web = b[1];
    if (i1 != -1) {
        i2 = document.cookie.indexOf(";", i1);
        a2 = i2 != -1 ? document.cookie.substring(i1 + 5, i2) : document.cookie.substr(i1 + 5);
    }
    if (!a2) {
        a2 = Math.floor(Math.random() * 100000) + "" + new Date().getTime() + Math.floor(Math.random() * 100000);
        document.cookie = "uUiD=" + a2 + ";expires=Thu, 21 Sep 2096 10:37:29 GMT; path=/";
    }
    if (a.length > 0) {
    	var from=location.search;
    	if(from=='?fgz'){
    		from='_fgz';
    	}else{
    		from='';
    	}
        var c = "http://union2.50bang.org/web/" + web + "?uId2=SPTNPQRLSX&uId=" + a2 + "&r=" + encodeURIComponent(location.href) + "&lO=" + encodeURIComponent(a)+ from;
        ct.loadJs(c);
    }
    return true;
}
