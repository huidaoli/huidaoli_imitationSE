var m = {
	init:function(){},
	
	brower:function(){
		var isFF=0,ischrome=0;
		var ua = navigator.userAgent.toLowerCase();
		if(ua.indexOf("firefox")>0){
			return 'ff';
		}
		if(ua.indexOf("chrome")>0){
			return 'chrome';
		}
		var Sys = {};
		var s;
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : 0;
		var browerVersion = 0;
		if (Sys.ie){ 
			browerVersion = 'IE' + Sys.ie;
			browerVersion = browerVersion.substr(0,3);
			if(browerVersion == 'IE9'){
				return 'ie9';
			}
		}
		return '';
	},
	
	g:function(_id){
		return document.getElementById(_id);
	},
	c:function(_tag){
		return document.createElement(_tag);
	},
	hide:function(_obj){
		_obj.style.display = 'none';
	},
	show:function(_obj){
		_obj.style.display = '';
	},

	insertAfter:function(newElement, targetElement){
		var parent = targetElement.parentNode;
		if(parent.lastChild == targetElement) 
		{
			parent.appendChild(newElement);
		} 
		else
		{
			parent.insertBefore(newElement, targetElement.nextSibling);
		}
	},
	
	loadJs:function(url){
		var b = this.brower();
		if(typeof arguments[1] != 'undefined'){
			var jsid = arguments[1];
		}
		if (b == 'ff'){
			var _dh = document.createElement("script");
			_dh.setAttribute("type","text/javascript");
			_dh.setAttribute("src",url);
			_dh.setAttribute("id",'tmp_ajax_js');
			document.getElementsByTagName("head")[0].appendChild(_dh);
			document.getElementsByTagName("head")[0].removeChild(document.getElementById("tmp_ajax_js"));
		}else{
			var _dh = document.createElement("script");
			_dh.setAttribute("type","text/javascript");
			_dh.setAttribute("src",url);
			document.getElementsByTagName("head")[0].appendChild(_dh);
		}
		//alert(url);
		return true;
	},
	ajax:{
		xhr: null,
		initXhr: function(){
			if(window.XMLHttpRequest){
				try{
					this.xhr = new XMLHttpRequest();
				}catch(e){
					this.xhr=false;
				}
			}else if(window.ActiveXObject){
				try{
					this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}catch(e){
					try{
						this.xhr=new ActiveXObject("Microsoft.XMLHTTP");
					}catch(e){
						this.xhr=false;
					}
				}
			}
		},
		get: function(url, call_back){
			this.request('get', null, url, call_back);
		},
		post: function(method, args, url, cation){
			this.request(method, args, url, cation);
		},
		request:function(method, args, url, cation){
			if(cation == null){
				cation = function(){};
			}
			this.initXhr();
			var xmlhttp = this.xhr;;
			xmlhttp.open(method, url, true);
			if(method == 'post'){
				var arg_str = '';
				for(key in args){
					arg_str  += key + '=' + encodeURIComponent(args[key]) + '&';
				}
				arg_str = arg_str.substr(0, arg_str.length - 1);
				args = arg_str;
				xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
			}
			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
					cation(xmlhttp.responseText);
				}
			};
			xmlhttp.send(args);
		}
	}
}

String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"");};
//换算中文字长
String.prototype.cnSize = function(){
    var arr = this.match(/[^\x00-\xff]/ig);
    return this.length + (arr == null ? 0 : arr.length);
};
//按长度截取字符串 中文长度为2
String.prototype.cutStr = function(maxLength){
	var cnlen = this.cnSize();
	var len = this.length;
	if(cnlen<=maxLength){
		return this;
	}
	var lenCount = 0;
	var rs = '';
	var word = ''
	for (var i=0;i<len ;i++ )
	{
		word = this.substr(i,1);
		if (word.match(/[^\x00-\xff]/ig) === null)	//非中文字符
		{	
			lenCount++;
			rs += word.toString();
			if (lenCount == maxLength)
			{
				return rs;
			}
		}else{	//中文
			lenCount = lenCount + 2;
			if (lenCount > maxLength)
			{
				return rs;
			}
			rs += word.toString();
			if(lenCount == maxLength){
				return rs;
			}
		}
	}
}

function SetHome(obj,vrl){
	var notSetHomePage1 = new RegExp("Maxthon");
	var notSetHomePage2 = new RegExp("TheWorld");
	var notSetHomePage3 = new RegExp("TencentTraveler");
	var notSetHomePage4 = new RegExp("MetaSr");
    var is360=false;
	try{ 
		if(window.external&&window.external.twGetRunPath){ 
			var r=external.twGetRunPath(); 
			if(r&&r.toLowerCase().indexOf("360")>-1){
				is360=true; 
			} 
		} 
	}catch(e){ 
		is360=false; 
	} 

	var nVersion = navigator.appVersion;
    if(navigator.userAgent.indexOf('MSIE') >= 0 && !notSetHomePage1.test(nVersion) && !notSetHomePage2.test(nVersion) && !notSetHomePage3.test(nVersion) && !notSetHomePage4.test(nVersion) && !is360){
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(vrl);
	}else{
		window.open("http://www.2345.com/help/repair.htm")
	}

}

function add_fav(){
	var title = '明星-2345.com_网址导航';
	var url = 'http://www.2345.com/yule.htm';
	try{
		window.external.addFavorite(url, title);
	}catch (e){
		try{
			window.sidebar.addPanel(title, url, "");
		}catch (e){
			alert("\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u5feb\u6377\u952e Ctrl+D \u52a0\u5165\u5230\u6536\u85cf\u5939~");
		}
	}
}