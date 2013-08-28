document.write('<div class="foot-sch" id="foot-sch">');



document.write('<form method="get" target="_blank" action="http://www.sogou.com/sogou" name="searchfooter" id="searchfooter">');



document.write('<p><b><a style="color:#0033cc" href="http://www.sogou.com/sogou?query=%c8%ab%c7%f2%b8%bb%ce%cc%c5%c5%d0%d0%b0%f1&pid=sogou-site-220c77af02f8ad85" target="_blank">全球富翁排行榜</a></b>	<a href="http://www.sogou.com/index.htm?pid=sogou-site-220c77af02f8ad85" target="_blank"><img src="/neiye/images/logo_sougou.gif" /></a><input class="input_ss_sch" name="query" type="text" id="swordfoot" onblur="chkSosoFootBlur()" onfocus="chkSosoFootFocus()" /> <input type="hidden" value="1341200376" name="_ast"><input type="hidden" value="01019901" name="w"><input type="hidden" value="40040702" name="p"><input type="hidden" value="sogou-site-220c77af02f8ad85" name="pid"><input class="butn_ss_sch" type="button" name="" id="button" value="搜 索" onclick="setSearchEngine()"/>');







//关键字



document.write('');







document.write('</p>');



document.write('<div class="option-grp">');

//新闻    网页    音乐     图片    视频     知识     博客     地图

document.write('	<input name="sg" type="radio" value="xw" /><a href="http://news.sogou.com/news?" target="_blank">新闻</a>  ');



document.write('	<input name="sg" type="radio" value="wy" checked /><a href="http://www.sogou.com/sogou?" target="_blank">网页</a> '); 



document.write('	<input name="sg" type="radio" value="yy" /><a href="http://mp3.sogou.com/music.so?" target="_blank">音乐</a>  ');



document.write('	<input name="sg" type="radio" value="tp" /><a href="http://pic.sogou.com/pics?" target="_blank">图片</a> '); 



document.write('	<input name="sg" type="radio" value="sp" /><a href="http://v.sogou.com/v?p=40230608" target="_blank">视频</a>  ');



document.write('	<input name="sg" type="radio" value="zs" /><a href="http://zhishi.sogou.com/zhishi?" target="_blank">知识</a>  ');



document.write('	<input name="sg" type="radio" value="bk" /><a href="http://blogsearch.sogou.com/blog?" target="_blank">博客</a>  ');



document.write('	<input name="sg" type="radio" value="dt" /><a href="http://map.sogou.com/#lq=" + escape(document.getElementById("swordfoot").value)" target="_blank">地图</a>');



document.write('</div>');



document.write('</form>');



document.write('</div>');







document.write('<div class="tool-bar" id="tool-bar"><p>&nbsp;</p><input class="fh" type="button" onclick="window.location.href=\'/?footer\'" /><input class="gb" type="button" onclick="window.opener=null;window.close()" /></div>');







	







	//搜索框默认文字



	var sosoFootSearchWord = "";







	document.getElementById('swordfoot').style.color = '#aaa';



	document.getElementById('swordfoot').value = sosoFootSearchWord;







	function chkSosoFootFocus(){



		var sw = document.getElementById('swordfoot');



		if(sw.value == this.sosoFootSearchWord)



		{



			sw.value='';



			sw.style.color='#000';



		}



	}







	function chkSosoFootBlur(){



		var sw = document.getElementById('swordfoot');



		if(sw.value == '')



		{



			sw.value = sosoFootSearchWord;



			sw.style.color='#aaa';



		}



	}







function setSearchEngine(){
	var ss = document.getElementsByName('sg');
	var len = ss.length;
	for (var i=0;i<len ;i++ )
	{
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
			var w = document.getElementById("swordfoot").value;
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



