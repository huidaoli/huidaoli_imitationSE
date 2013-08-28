	var sosoFootSearchWord = "";
	document.getElementById('swordfoot').style.color = '#aaa';
	document.getElementById('swordfoot').value = sosoFootSearchWord;

	function chkSosoFootFocus(){
		var sw = document.getElementById('swordfoot');
		if(sw.value == this.sosoFootSearchWord){
			sw.value='';
			sw.style.color='#000';

		}
	}

	function chkSosoFootBlur(){
		var sw = document.getElementById('swordfoot');
		if(sw.value == ''){
			sw.value = sosoFootSearchWord;
			sw.style.color='#aaa';
		}
	}


	function setSearchEngine(){
	var ss = document.getElementsByName('sg');
	var len = ss.length;
	for (var i=0;i<len ;i++ ){
		if(ss[i].checked === true){
			var v = ss[i].value;
			break;
		}
	}
	var sf = document.getElementById('searchfooter');
	var ssww = 0;
	switch (v)
	{
		case 'wy':
			sf.action = "http://www.sogou.com/sogou";
			break;
		case 'tp':
			sf.action = "http://pic.sogou.com/pics?";
			break;
		case 'sp':
			sf.action = "http://v.sogou.com/v?p=40230608";
			break;
		case 'yy':
			sf.action = "http://mp3.sogou.com/music.so?";
			break;
		case 'zs':
			//var w = document.getElementById("sword").value;
			sf.action = "http://zhishi.sogou.com/zhishi?";
			break;
		case 'dt':
			var w = document.getElementById("sword").value;
			//var ssunc = document.getElementById("ssunc").value;
			//var sscid = document.getElementById("sscid").value;
			ssww = 1;
			//var wwurl = "http://wenwen.soso.com/z/Search.e?sp=S"+encodeURI(w)+"&w="+encodeURI(w)+"&ch=w.search.sb&unc="+ssunc+"&cid="+sscid;
			//window.open(wwurl);
			sf.action = "http://map.sogou.com/#lq=" + escape(w);
			window.open(sf.action);
			//alert(sf.action);
			break;
		case 'bk':
			sf.action = "http://blogsearch.sogou.com/blog?";
			break;
		case 'xw':
			sf.action = "http://news.sogou.com/news?";
			break;
	}

	if(ssww == 0){
		sf.submit();
	}else{
		return false;
	}
}