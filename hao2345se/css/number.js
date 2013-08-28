function loadJs(_url){
	var callback = arguments[2]||function(){};
	var charset = arguments[3]||'gbk';
	var _js = document.createElement("script");
	_js.setAttribute("type", "text/javascript");
	_js.setAttribute("charset", charset);
	_js.setAttribute("defer", true);
	_js.setAttribute("src", _url);
	if(document.all){
		_js.onreadystatechange = function(){
			if(this.readyState == "loaded" || this.readyState == 4 || this.readyState == "complete"){
				setTimeout(callback,10);
			}
		};
	}else{
		_js.onload = function(){
			callback();
		};
	}
	document.getElementsByTagName("head")[0].appendChild(_js);
}
function $c(_tag){

	return document.createElement(_tag);

}
function $(_id){

	return document.getElementById(_id);

}
var load;
var date = new Date();
loadJs('http://www.2345.com/right/fw.js?'+date.getMonth()+'_'+date.getDate()+'_'+date.getHours());
function fwCallBack(data){
	$("number").innerHTML = '';
	var num = data.b.toString();
	var length = num.length;
	var li = $c("li");
	$("number").appendChild(li);
	var img = $c("img");
	img.src="images/about/lf.png";
	li.appendChild(img);
	for(var i=0;i<length;i++){
		var fw = num.substr(i,1);
		var li = $c("li");
		$("number").appendChild(li);
		var img = $c("img");
		if(load == 'yes')
		{
			img.src="http://www.2345.com/images/cout/"+fw+".gif";
		}
		else
		{
			img.src="http://www.2345.com/images/cout/"+fw+"a.gif";
		}
		li.appendChild(img);
	}
	var li = $c("li");
	$("number").appendChild(li);
	var img = $c("img");
	img.src="images/about/rt.png";
	li.appendChild(img);
	if( $("fangwen") )
	{
		$("fangwen").innerHTML = data.a;
		$("sheshou").innerHTML = data.b;
	}
}
function loadimg(key){
	if(key<10){
		src = "http://www.2345.com/images/cout/"+key+".gif";
		div = document.getElementById('img_load');
		img = document.createElement("img");
		div.appendChild(img);
		img.src = src;
		key++;
		if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
			var date = new Date();
			loadJs('http://www.2345.com/right/fw.js?'+date.getMonth()+'_'+date.getDate()+'_'+date.getHours());
        return; // 直接返回，不用再处理onload事件
		}
		if (!/*@cc_on!@*/0) {
			img.onload=function(){
				if(this.complete==true){
					loadimg(key);
				}
			}
		}else{
			img.onreadystatechange =function(){
				if(this.readyState=="complete"||this.readyState=="loaded"){
					loadimg(key);
				}
			}
		}
		img.onerror = function(){
                        loadimg(key);
                    }
	}else{		
		load = 'yes';		
		var date = new Date();
		loadJs('http://www.2345.com/right/fw.js?'+date.getMonth()+'_'+date.getDate()+'_'+date.getHours());
	}
}
loadimg(0);