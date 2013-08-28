/*********************
author : vellen
create : 2011-01-18
email : xpow@yahoo.cn
**********************/

var Fx = {
	version : '2.0.1',
	isFunction : function(o){ return typeof o==="function" },
	isObject : function(o){ return(o && (typeof o==="object"||this.isFunction(o) ) )||false },
	isJSON : function(o){ return this.isObject(o)?true : o.isJSON() },
	isUndefined : function(o){ return typeof o==="undefined" },
	isArray : function(o){ return Object.prototype.toString.call(o) === '[object Array]' },
	isEmpty : function(o){ return (o==null || o=='') ? true : false;  },
	isNum : function(o){ return o*1>0 || o==0},
	isMoney : function(o){var patrn=/^(-?\d+)(\.\d+)?$/; return patrn.exec(o) },
	obj : function (el){ 
		if (this.isObject(el))return el;
		var obj = document.getElementById(el);
		if (obj){
			if (obj.id!=el){
				if (document.all){
					var obj;
					for(var i=0; i<document.all.length; i++){
						if (Fx.fx.attr(document.all[i],'id')==el){
							obj=document.all[i]
						}
					}
					return obj;
				}
			}
		}
		return obj
	},
	name : function(o,t){
		if (document.all){
			if (t=='input') return document.getElementsByName(o)
			var objs = [];
			arry = t?document.getElementsByTagName(t):document.all; 
			for(var i=0; i<arry.length; i++){
				if (Fx.fx.attr(arry[i],'name')==o){
					objs[objs.length]=arry[i]
				}
			}
			return objs;
		}else{
			return document.getElementsByName(o)
		}
	},
	tag : function(o,t){ return this.obj(o).getElementsByTagName(t) },
	hide : function(o){ return this.css(o,{'display':'none'}) },
	show : function(o){ return this.css(o,{'display':''}); },
	html : function(o,s){ var obj = this.obj(o); if (!this.isUndefined(s)) {obj.innerHTML = s.toString()}else{ return obj.innerHTML } },
	disable : function(o){ return this.fx.attr(o,{'disabled':'disabled'})},
	enable : function(o){ var obj = this.obj(o); return obj.removeAttribute('disabled')},
	css : function(o,json){ return this.fx.css(o,json)},
	getCss : function(o,node){ return this.fx.getCss(o,node)},
	c : function(o){ return document.getElementsByClassName(o) },
	toCenter : function(o,style){ // style {width:'220px',height:220}
		var obj = Fx.obj(o)
		var ostyle = obj.style
		if (!style){
			style = {
				width : obj.offsetWidth,
				height : obj.offsetHeight
			}
		}
		tparam = {}
		tparam.elmtSl_h = document.documentElement.scrollHeight
		tparam.elmtSl_l = this.Browser.safari? document.body.scrollLeft : document.documentElement.scrollLeft
		tparam.elmtSl_t = this.Browser.safari? document.body.scrollTop : document.documentElement.scrollTop
		tparam.elmtCl_w = document.documentElement.clientWidth
		tparam.elmtCl_h = document.documentElement.clientHeight
		tparam.bodyCl_h = document.body.clientHeight
		tparam.bodyCl_w = document.body.clientWidth
		tparam.elmtCl_w = tparam.elmtCl_w?tparam.elmtCl_w:tparam.bodyCl_w
		tparam.elmtCl_h = tparam.elmtCl_h?tparam.elmtCl_h:tparam.bodyCl_h
		if (!this.Browser.ie6)tparam.elmtSl_t = 0;
		left = ((tparam.elmtCl_w-style.width.toString().PxtoInt())/2+tparam.elmtSl_l)+'px'
		xtop = ((tparam.elmtCl_h-style.height.toString().PxtoInt())/2+tparam.elmtSl_t)+'px'
		Fx.css(obj,{left:left,top:xtop})
		return obj
	},
	getSize : function(o,v){
		
	},
	each : function(oarray,func){
		if (!this.isArray(oarray)) return ;
		for(var i=0; i<oarray.length; i++){
			func.apply(oarray[i])
		}
	},
	value : function(o,v,node){
		if (!node){
			var obj = this.obj(o);
			if (!this.isUndefined(v) && v!='NULL'){
				return obj.value = v.toString().trim();
			}else{
				return obj?obj.value.trim():'';
			}
		}
		
		if (!this.isArray(o)) o=this.name(o);
		var _val = '';
		switch(node.toLowerCase()){
			case 'radio' :
				for(var i=0; i<o.length; i++){
					if (o[i].checked) return o[i].value;
				}
				return '';
				break;
			case 'checkbox' :
				for(var i=0; i<o.length; i++){
					if (o[i].checked)_val += o[i].value +',';
				}
				return _val;
				break;
		}
	},
	init : function(){
		this.Extend()
	},
	click : function(o,fun){
		var obj = this.obj(o);
		if (!obj) return false;
		if (!this.isFunction(fun)){
			obj.onclick();
		}else{
			obj.onclick = fun;
		}
		return obj;
	},
	blur : function(o,fun){
		var obj = this.obj(o)
		if (!obj || !this.isFunction(fun)) return false;
		obj.onblur = fun
		return obj
	},
	keydown : function(o,fun){
		var obj = this.obj(o)
		if (!obj || !this.isFunction(fun)) return false;
		obj.onkeydown = fun
		return obj
	},
	keyup : function(o,fun){
		var obj = this.obj(o)
		if (!obj || !this.isFunction(fun)) return false;
		obj.onkeyup = fun
		return obj
	},
	timer : {},
	Browser : {},
	Extend : function(){
		if (this.isExtend)return; this.isExtend = true;
		Object.extend = function(destination, source) {for (var property in source) {destination[property] = source[property];};return destination}
		Object.extend(String.prototype,{
			trim : function(){ return this.replace(/^[ ¡¡]*(.*?)[ ¡¡]*$/g,'$1'); }, //(/^\s*|\s*$/g,'');
			htmlTrim : function(){
				var str=this,isnb=true,isbr=true ,reg = /(^&nbsp;*)|(&nbsp;*$)/g,regbr = /(<br \/>*$)/g;
				do{
					str = str.trim()
					str = str.replace("\r\n","")
					str = str.replace("\r","")
					str = str.replace("\n","")
					isnb = reg.test(str);
					str = str.replace(reg, "");
					str = str.trim()
					str = str.replace("\r\n","")
					str = str.replace("\r","")
					str = str.replace("\n","")
					isbr = regbr.test(str);
					str = str.replace(regbr, "");
				}while(isbr==true || isnb==true)
				return str;
			},
			evalJSON : function(){ return eval('('+this+')'); },
			PxtoInt : function(){return this.replace('px','');},
			isJSON : function(){
				json = this.replace(/\\["\\\/bfnrtu]/g, '@');
				json = json.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
				json = json.replace(/(?:^|:|,)(?:\s*\[)+/g,'');
				return (/^[\],:{}\s]*$/.test(json));
			},
			toMid : function(len){ return this.substr(len,this.length-len-len)},
			toLen : function(){
				var len=0; 
				for(var i=0;i<this.length;i++){ 
					char = this.charCodeAt(i); 
					if(!(char>255)){ 
						len = len + 1; 
					}else{ 
						len = len + 2; 
					}
				}
				return len; 
			}
		})
		Object.extend(Array.prototype,{
			each : function(func){
				Fx.each(this,func)
			}
		})
		
		var bw = navigator.userAgent.toLowerCase();
		Object.extend(this.Browser,{
			version: (bw.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
			safari: /webkit/i.test(bw) && !(/chrome/i.test(bw) && /webkit/i.test(bw) && /mozilla/i.test(bw)),
			opera: /opera/i.test(bw),
			firefox:/firefox/i.test(bw.toLowerCase()),
			ie: /msie/i.test(bw) && !/opera/.test(bw),
			ie6 : ( /msie/i.test(bw) && !/opera/.test(bw) )? bw.match(/msie (\d)\.0/i)[1]==6:false ,
			mozilla: /mozilla/i.test(bw) && !/(compatible|webkit)/.test(bw) && !(/chrome/i.test(bw) && /webkit/i.test(bw) && /mozilla/i.test(bw)),
			chrome: /chrome/i.test(bw) && /webkit/i.test(bw) && /mozilla/i.test(bw),
			google: /chrome/i.test(bw) && /mozilla/i.test(bw) && /applewebkit/i.test(bw) && /safari/i.test(bw)
		})
	},
	regExps : {
		patrn : '', regStr : '', regMode : 0, result : '', res : '', reArry : '', oReg : '', debug : 0,
		init : function(p,re,md){
			this.patrn = p
			this.regStr = re
			this.regMode = md
		},
		Create : function(){
			if (this.regMode){
				this.oReg = new RegExp(this.patrn,'ig')
			}else{
				this.oReg = this.patrn
			}
		},
		Match : function(re){
			this.Create()
			if (Fx.isEmpty(re))re='$1'
			if (re.indexOf(',')>0){
				this.oReg.exec(this.regStr)
				this.reArry = re.split(',')
				for (i=0; i<this.reArry.length; i++){this.result += eval('Fx.regExps.oReg.'+re) + ','}
			}else{
				this.result = this.regStr.match(this.patrn)// eval('RegExp.'+re)
			}
			if (this.debug)this.test()
			return (this.result==null)?'':this.result
		},
		Light : function(node,key){
			var thtml;
			jQuery(node).each(function(){
				jQuery(this).children().each(function(){
					if (this.innerHTML){
						thtml = this.innerHTML;
						this.innerHTML = thtml.replace(eval('/'+key+'/ig'),'<font class="light">'+key+'</font>')
					}
				})
			})
		},
		Replace : function(strReg,fstr,tostr){
			return strReg.replace(fstr,tostr)
		},
		ReplaceTo : function(tostr){
			return this.regStr.replace(this.oReg,tostr)
		},
		test : function(){
			var re = '',tBr='\n\n'
			re += 'regMode : '+ this.regMode + tBr
			re += 'patrn : '+ this.patrn + tBr
			re += (this.regMode)?'express : RegExp("'+this.patrn+'","ig")':''
			re += tBr + 'result : '+this.result + tBr
			re += 'regStr : '+ this.regStr
			alert(re)
		}
	},
	
	
	Event : {
		evt : '',	debug : 0, srcElement : '', keycode : '',button : '',cX : '',cY : '',
		setEvent : function(t){if (!this.evt) this.Catch(); try{this.evt.keycode=t}catch(e){}},
		Search : function(){
			func=this.Search.caller;
			while(func!=null){
				var arg0=func.arguments[0];
				if(arg0){
					if(arg0.constructor==MouseEvent) return arg0;
					if(arg0.constructor==KeyboardEvent){this.keycode=arg0.which; return arg0}
					if (this.debug)alert('event:\n'+arg0.constructor+'=='+Event+'+'+(arg0.constructor==MouseEvent)+' **which='+arg0.which)
				}
				func=func.caller;
			}
			return null;
		},
		Catch : function(){ if (window.event){this.evt = window.event; this.button=window.event.button ;this.keycode = window.event.keyCode}else{this.evt = this.Search(); this.button=this.evt.button; this.keycode = this.evt.keyCode }; return this.evt },
		catchSrc : function(){ this.Catch(); if (this.evt.srcElement){this.srcElement = this.evt.srcElement}else{this.srcElement = this.evt.target}; this.getX(); this.getY(); return this.srcElement},
		getX : function(){ this.cX = (window.event)?event.x:this.evt.pageX; return this.cX },
		getY : function(){ this.cY = (window.event)?event.y:this.evt.pageY; return this.cY }
	},
	
	Try: {
		sn : 0, emssage : '', isreport : 0, _err_ : {location:'',line:0,name:''}, foundErr : false,
		these: function() {
			var returnValue
			this.Clear()
			for (var i = 0, length = arguments.length; i < length; i++) {
				var lambda = arguments[i];
				if(i==0){if(lambda==1){this.isreport=1}}
				if(i==1 && this.isreport){this._err_ = lambda }
				if (typeof lambda == 'function'){
					try {
						returnValue = lambda();
						break;
					} catch (e) {
						this.sn += 1
						this.foundErr = true
						this.emssage += 'error #'+this.sn+': '+e.message+'\n'
					}
				}
			}
			if (this.isreport){this.outErr()}
			return returnValue;
		},
		outErr : function(){
			var tMsg = '[Fx.Try] catch these errors:\n'
			if (this.foundErr){
				for (var i in this._err_){
					tMsg += i+': '+this._err_[i]+'\n'	
				}
				this.emssage = tMsg+'\n'+this.emssage;
				alert(this.emssage);
			}
			this.Clear();
		},
		Clear : function(){
			this.emssage = '';
			this._err_ = {location:'',line:0,name:''};
			this.isreport = 0;
			this.sn = 0;
			this.foundErr = false;
		}
	},
	
	//Fx.cookie('cookie_name') //read
	//Fx.cookie('cookie_name','value',expires_time) //write //expires_time(1)=1h
	cookie : function(n,v,h,host){
		if (!this.isUndefined(v)){
			var expire = '';
			if(h){
				expire = new Date((new Date()).getTime() + h * 3600000);
				expire = '; expires=' + expire.toGMTString();
			}
			host = host?host : location.host
			document.cookie = n + '=' + escape(v) + expire+';path=/;domain='+host; 
		}else{
			var cookieValue = '';
			var search = n + '=';
			if(document.cookie.length > 0){ 
				offset = document.cookie.indexOf(search);
				if (offset != -1){ 
					offset += search.length;
					end = document.cookie.indexOf(';', offset);
					if (end == -1) end = document.cookie.length;
					cookieValue = unescape(document.cookie.substring(offset, end))
				}
			}
			return cookieValue;
		}
	},
	
	ajax : {
		xmlHttp : '', q :'',inprocess:[],
		init : function(){
			
		},
		create : function(t){
			if (this.xmlHttp && !Fx.Browser.ie6 && t!='newinall') return
			this.xmlHttp = Fx.Try.these(
			function() {return new XMLHttpRequest()},
			function() {return new ActiveXObject('Msxml2.XMLHTTP')},
			function() {return new ActiveXObject('Microsoft.XMLHTTP')}
			) || false;
		},
		set : function(json){ //query,target,waite,callback,method,data,handleBefor,onsucc,onfaild,ontimeout
			this.q = json;
		},
		get : function(json){
			this.set(json);
			this.create(this.q['newinall']);
			this.parseItem();
			this.send();
		},
		parseItem : function(){
			var qc = this.q['query'].indexOf('?')>=0?'&':'?'
			this.q['query'] += qc+'timeStamp=' + new Date().getTime();
			this.q['process'] = this.q['query'];
			if (this.q['waite']) Fx.html(this.q['target'],this.q['waite'])
			this.q['method'] = this.q['method']?this.q['method']:'GET'
			this.q['data'] = this.q['data']?this.q['data']: null
			if (this.q['onhandleBefor'])this.q['onhandleBefor']();
		},
		send : function(){
			if (this.inprocess[this.q['process']]) return
			this.inprocess = true
			this.xmlHttp.onreadystatechange = this.handleStateChange;
			this.xmlHttp.open(this.q['method'], this.q['query'], true);
			this.xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			this.xmlHttp.send(this.q['data'])
		},
		handleStateChange : function(){
			if(Fx.ajax.xmlHttp.readyState == 4) {
				if(Fx.ajax.xmlHttp.status == 200) {Fx.ajax.parseResults()}
				else if (Fx.ajax.xmlHttp.status == 404){alert('AJAX Error (error:404): \n\nRequest Server Page Not Found! ')}
				else if (Fx.ajax.xmlHttp.status == 500){if (Fx.ajax.q['onfaild']){ return Fx.ajax.q['onfaild'](Fx.ajax.xmlHttp.responseText) } alert('AJAX Error (error:500): \n\nRequest Server Return Error! \n\n'+Fx.ajax.xmlHttp.responseText)}
			}
		},
		parseResults : function(){
			var vdata = this.xmlHttp.responseText
			var nreg = '',tsctag=/\[script\](.+?)\[\/script\]/ig,tscstag = /\[script\](.+?)\[\/script\]/ig
			this.inprocess[this.q['process']] = false
			if (vdata){
				Fx.regExps.init(tsctag,vdata,0)
				nreg = Fx.regExps.Match().toString()
			}
			vdata = vdata.replace(tscstag,'')
			nreg = nreg.replace(/\[script\]/ig,'').replace(/\[\/script\]/ig,'')
			try{ Fx.html(this.q['target'],vdata)}catch(e){}
			if (nreg != null){ var tSyb = ';'; if (nreg.indexOf(tSyb)>0){var scAry = nreg.split(tSyb);for (var i=0; i<scAry.length;i++){if (scAry[i] != ''){try{eval(scAry[i])}catch(e){}}}}else{eval(nreg)}}
			if (this.q['onsucc']) this.q['onsucc'](vdata)
		}
	},
	
	inArray: function( elem, array ) {
		for ( var i = 0, length = array.length; i < length; i++ ){
			if ( array[ i ] === elem ) return i;
		}
		return -1;
	},
	
	parseClass : function( elem ,css){
		var obj = this.obj(elem);
		var tcss = obj.className;
		var tary = tcss.split(/\s+/),tccary = [];
		for(var i=0; i<tary.length; i++){
			if ( !this.hasClass(css,tary[i] )){
				tccary.push(tary[i]);
			}
		}
		return tccary.join(' ');
	},

	hasClass: function( elem, className ) {
		return this.inArray( className, (elem.className || elem).toString().split(/\s+/) ) > -1;
	},
	
	addClass : function(elem,css){
		var tcss = this.parseClass(elem,css);
		this.obj(elem).className = tcss+' '+css;
		return this.obj(elem)
	},
	
	removeClass : function(elem,css){
		var tcss = this.parseClass(elem,css);
		this.obj(elem).className = tcss;
		return this.obj(elem)
	},
	
	appendNode : function(elem,context,node,args){
		var context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		var obj = context.createElement(node);
		if (args){
			if (args.css){
				this.fx.css(obj,args.css);
			}
			
			if (args.attr){
				this.fx.attr(obj,args.attr);
			}
			
			if (args.html){
				this.html(obj,args.html);
			}
			
			if (args.parent){
				this.obj(args.parent).appendChild(obj);
			}
			
			this.obj(elem).appendChild(obj);
		} 
		return this.obj(elem);
	},
	
	fx : {
		orgi : {},
		events : {},
		getEvent : function( elem ){ return this.events[elem] },
		setEvent : function( elem , node){ this.events[ elem ] = node },
		set : function( elem, json ){
			this.orgi[elem] = json;
		},

		get : function( elem, node ){
			var obj = Fx.obj(elem),d = this.getNode(obj.id, node);
			if (!d){
				this.set(obj.id,{
					'height' : obj.style.height? obj.style.height.PxtoInt() : obj.offsetHeight,
					'width' : obj.style.width? obj.style.width.PxtoInt() : obj.offsetWidth
				}) 
			}
			return this.orgi[obj.id][node];
		},
		
		getNode : function( elem , node ){
			if (!this.orgi[elem]){ this.orgi[elem] = {} }
			return this.orgi[elem][node];
		},
		getoffset : function(elem) {
			var obj = Fx.obj(elem);
			var et = obj.offsetTop,el = obj.offsetLeft,eh = obj.offsetHeight,ew = obj.offsetWidth;
			while(obj = obj.offsetParent){
				et += obj.offsetTop;
				el += obj.offsetLeft;
				eh += obj.offsetHeight;
				ew += obj.offsetWidth;
			}
			return {top:et,left:el,height:eh,width:ew}
		},
		attr : function( elem, json ){
			var obj = Fx.obj(elem);
			if (!obj) return false;
			
			if (Fx.isJSON(json)){
				if (!Fx.isObject(json)) json = json.evalJSON();
				for(var i in json){ obj.setAttribute(i,json[i]); }
			}else{
				return obj.getAttribute(json);
			}
			return obj
		},
		getCss : function( elem, node ){
			var obj = Fx.obj(elem);
			if (!obj || !node) return false;
			return obj.style[node];
		},
		css : function( elem, json ){
			var obj = Fx.obj(elem);
			if (!obj || !json) return obj;
			if (!Fx.isJSON(json)) json = json.evalJSON();
			for(var i in json){ obj.style[i] = json[i]}
			return obj;
		}
	},
	
	animate : function(elem, options){
		var obj = this.obj(elem);
		options.eq = 1
		switch(options.timernode){
			case 'slideup' : 
			case 'slideleft' :
				options.css = {'display' : 'none'};
				options.eq = -1;
				options.node = 'width';
				if (options.timernode == 'slideup') options.node = 'height';
				break;
			case 'slidedown' : options.node = 'height'; options.css = {'display' : '', 'height' : '{$max}px'}; break;
			case 'slideright' : options.node = 'width'; options.css = {'display' : '', 'width' : '{$max}px'}; break;
		}
	
		options.d = options.eq==1 ? 0 : this.fx.get(obj,options.node);
		options.maxs = this.fx.get(obj,options.node);
		options.timernode += obj.id;
		options.speed = options.speed ? options.speed : 5;

		if ( options.eq == 1 ){
			options.css[options.node] = options.css[options.node].replace('{$max}',options.maxs);
		}else{
			this.fx.css(obj,{'overflow':'hidden','display':''});
		}
		
		if (this.fx.getEvent(options.timernode) || this.fx.getEvent(options.band + obj.id)) return
		this.fx.setEvent(options.timernode,true);
		this.timer[options.timernode] = setInterval(function(){
			if (options.d <= 0 && options.eq == -1){
				return F();
			}else if (options.d >= options.maxs && options.eq == 1){
				return F();
			}
			if (options.eq == 1){
				options.d += options.speed;
				if ( Fx.fx.getCss(obj,'display')=='none' ) Fx.fx.css(obj,{'overflow':'hidden','display':''});
			}else{
				options.d -= options.speed;
			}
			try{ Fx.fx.css(obj,'{\''+options.node +'\':\''+ options.d +'px\'}') }catch(e){}
		},1)
		
		function F(){
			clearInterval(Fx.timer[options.timernode]);
			Fx.fx.css(obj,options.css);
			Fx.fx.setEvent(options.timernode,false);
			if (options.complete) return options.complete();
			return obj;
		}
	}
}

function formatFloat(src, pos){
	pos = pos ?pos : 4
	return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}

FxCtrl = {
	o : function(el){
		return this.init(el);
	},
	init : function(selector,ct){
		if (!Fx.obj(selector)) return false;
		return Object.extend(Fx.obj(selector),FxCtrl);
	},
	attr : function(attrjson){
		return Fx.fx.attr(this,attrjson);
	},
	tag : function(node){
		return Fx.tag(this,node)	
	},
	css : function(cssjson){
		return Fx.css(this,cssjson);
	},
	getCss : function(node){
		return Fx.getCss(this,node);
	},
	hide : function(){
		return Fx.hide(this);
	},
	show : function(){
		return Fx.show(this);
	},
	val : function(v,node){
		return Fx.value(this,v,node);
	},
	disable : function(){
		return Fx.disable(this)
	},
	enable : function(){
		return Fx.enable(this)
	},
	html : function(v){
		return Fx.html(this,v);
	},
	toJSON : function(){
		return this.evalJSON()
	},
	slideUp : function( complete, speed){
		return Fx.animate(this,{complete : complete, speed : speed, timernode : 'slideup', band : 'slidedown'});
	},
	slideDown : function( complete, speed ){
		return Fx.animate(this,{complete : complete, speed : speed, timernode : 'slidedown', band : 'slideup'});
	},
	slideLeft : function( complete, speed ){
		return Fx.animate(this,{complete : complete, speed : speed, timernode : 'slideleft', band : 'slideright' });
	},
	slideRight : function( complete, speed ){
		return Fx.animate(this,{complete : complete, speed : speed, timernode : 'slideright', band : 'slideleft'});
	},
	appendNode : function(node,args){
		return Fx.appendNode(this,node,args)
	},
	removeClass : function(css){
		return Fx.removeClass(this,css)	
	},
	addClass : function(css){
		return Fx.addClass(this,css)	
	},
	hasClass : function(css){
		return Fx.hasClass(this,css)
	},
	click : function(fun){
		return Fx.click(this,fun);
	},
	blur : function(fun){
		return Fx.blur(this,fun);
	},
	keydown : function(fun){
		return Fx.keydown(this,fun);
	},
	keyup : function(fun){
		return Fx.keyup(this,fun);
	},
	hover : function(funin,funout){
		this.onmouseover = funin
		this.onmouseout = funout
		return this
	},
	center : function(css){
		return Fx.toCenter(this,css)
	},
	toggle : function(du,callback){
		if (!du){
			Fx.getCss(this,'display')=='none'?Fx.show(this):Fx.hide(this);
		}else{
			if (Fx.isArray(du)){
				if (Fx.hasClass(this,du[0]))	{
					Fn(this).removeClass(du[0]).addClass(du[1]);
				}else{
					Fn(this).removeClass(du[1]).addClass(du[0]);
				}
			}
		}
		if (Fx.isFunction(callback))callback();
		return this;
	}
}

Fn = function(el){ return FxCtrl.init(el) }
Fn.extend = Fx.extend = function(){var obj = arguments[0] || {}; for(var i in obj){ if (!this[i]) this[i] = obj[i]; }; return this;};

Fn.extend({
	ajax : function(json){ return Fx.ajax.get(json) },
	event : {
		srcElement : '', keycode : '', button : '', x : 0, y : 0,
		init : function(){
			this.srcElement = Fx.Event.catchSrc();
			this.keycode = Fx.Event.keycode;
			this.button = Fx.Event.button;
			this.x = Fx.Event.cX;
			this.y = Fx.Event.cY;
		}
	},
	isFunction : function(o){ return typeof o==="function" },
	isObject : function(o){ return(o && (typeof o==="object"||this.isFunction(o) ) )||false },
	isJSON : function(o){ return this.isObject(o)?true : o.isJSON() },
	isUndefined : function(o){ return typeof o==="undefined" },
	isArray : function(o){ return Object.prototype.toString.call(o) === '[object Array]' },
	isEmpty : function(o){ return (o==null || o=='') ? true : false;  },
	isNum : function(o){ return o*1>0},
	isMoney : function(o){var patrn=/^(-?\d+)(\.\d+)?$/; return patrn.exec(o) }
})

Fx.init()
