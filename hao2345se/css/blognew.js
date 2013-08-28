function changeBlog(type){
  if(type=='user'){
    $("blog_form").action="http://s.weibo.com/user/";
  }else{
    $("blog_form").action="http://s.weibo.com/weibo/";
  }
}
function blogCallBack(_data){
  var hotBlog='',titleStr='';
  for(var i in _data){
          titleStr += _data[i]["title"];
		  if(titleStr.length>24){
		    break;
		  }else{
		  hotBlog += '<a href="'+_data[i]["url"]+'" name="2">'+_data[i]["title"]+'</a>';
		  }
  }
var blog_Html='<form action="http://s.weibo.com/weibo/" target="_blank" id="blog_form"><div class="searchl"><div><p class="p80"><a href="http://weibo.com/?c=spr_web_sq_6164_weibo_t001"><img src="i/blogsina.png" style="margin-top: 4px;" title="点击打开" /></a></p><span class="sugdiv"><p class="p270"><input class="search11" id="search4" type="text" name="search" onfocus="this.select();sug(4);" onmouseover="bd(4);this.focus();_active=$(\'search4\')" onmouseout="bdc(4)" onblur="bdc(4)" autocomplete="off" /></p><p><input class="sbutton" type="submit" value="搜  索" onclick="clickCount(\'weibo_search\');" /><input type="hidden" value="gbk" name="ie"></p></span></div></div><p class="searchr"><span class="mbkeys" id="hotBlogs">'+hotBlog+'</span></p><div class="radiogp"><label for="weibo_blog"><input class="radio01" name="opt-weibo" id="weibo_blog" type="radio" onclick="changeBlog(\'weibo\');clickCount(\'weibo\');" checked="" />微博</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label for="user_blog"><input class="radio01" name="opt-weibo" id="user_blog" type="radio" onclick="changeBlog(\'user\');clickCount(\'user\');" />找人</label></div></form>';
$("blogform").innerHTML = blog_Html;
$("search4").setAttribute("autocomplete",g_cookie("auto4",cookieStore) == "0"?"on":"off");
}
