var fw_ = {"b":30768713,"a":23099837};
if(typeof(fwCallBack)!="undefined"){fwCallBack(fw_)};

var searchHotNews=[[{"i":"\u5f20\u99a8\u4e88","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u5f20\u99a8\u4e88"},{"i":"\u65e5\u672c\u5927\u4f7f\u9047\u88ad","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u65e5\u672c\u5927\u4f7f\u9047\u88ad"},{"i":"\u6d77\u5357\u5b09\u6c34\u8282","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u6d77\u5357\u5b09\u6c34\u8282"}],[{"i":"\u4f59\u5bb6\u5934\u6751","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u4f59\u5bb6\u5934\u6751"},{"i":"\u9ec4\u91d1\u87d2\u8d8a\u72f1","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u9ec4\u91d1\u87d2\u8d8a\u72f1"},{"i":"\u4f73\u6728\u65af\u53f0\u98ce","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u4f73\u6728\u65af\u53f0\u98ce"},{"i":"\u5766\u80f8\u65e5","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u5766\u80f8\u65e5"}],[{"i":"\u6d2a\u6cfd\u6e56\u9f99\u5438\u6c34","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u6d2a\u6cfd\u6e56\u9f99\u5438\u6c34"},{"i":"\u82f1\u5fb7\u6d77\u87ba\u7206\u70b8","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=\u82f1\u5fb7\u6d77\u87ba\u7206\u70b8"},{"i":"7000\u4e07\u65e0\u6027\u604b","h":"http:\/\/www.sogou.com\/sogou?pid=sogou-site-220c77af02f8ad85&query=7000\u4e07\u65e0\u6027\u604b"}]];
var hyh_str = '<a class="change" title="µã»÷ÇÐ»»¹Ø¼ü´Ê" target="_self" onclick="clickCount(\'search_hotNews\');changeHotlb();return(false);" href="javascript:void(0);">[»»Ò»»»]</a>';

function showHotSearch(){
	//line1
	var default_search_ad='';
	for(var k=0;k<searchHotNews[0].length;k++){
		if(searchHotNews[0][k]["h"]){
			  if(searchHotNews[0][k]["i"]=='°ÂÔË»áÖ±²¥'){
			    default_search_ad += '<a href="'+searchHotNews[0][k]["h"]+'" name="2" style="color:#fd5151">'+searchHotNews[0][k]["i"]+'</a>';
			  }else{
			    default_search_ad += '<a href="'+searchHotNews[0][k]["h"]+'" name="2">'+searchHotNews[0][k]["i"]+'</a>';
			  }
			  
		}
	}
	if(default_search_ad){
		default_search_ad = hyh_str+default_search_ad;
		$('bd_ad').innerHTML = default_search_ad;
	}
	
    //line2
	var searchHotLine2_str = '<a name="2" href="http://www.google.com.hk/">GoogleËÑË÷</a><a name="2" href="http://www.sogou.com/index.htm?pid=sogou-site-220c77af02f8ad85">ËÑ¹·ËÑË÷</a><a name="2" href="http://www.soso.com/">SOSOËÑË÷</a><a name="2" href="http://www.youdao.com/?keyfrom=dh.win7000&vendor=dh.win7000_3523">ÓÐµÀËÑË÷</a><a name="2" href="http://cn.bing.com/">±ØÓ¦ËÑË÷</a>';
	$('ggsspan').innerHTML = searchHotLine2_str;
}
showHotSearch();

var hotlbNo=1;
function changeHotlb(n){
   var dataStr = '';
   if(hotlbNo==3){
	 hotlbNo = 0;
   }
   if(n!=null && n!=''){
     hotlbNo = parseInt(n);
   }

   for(var j=0;j<searchHotNews[hotlbNo].length;j++){
	    if(searchHotNews[hotlbNo][j]["h"]){
			 if(searchHotNews[hotlbNo][j]["i"]=='°ÂÔË»áÖ±²¥'){
			   dataStr += '<a href="'+searchHotNews[hotlbNo][j]["h"]+'" name="2" style="color:#fd5151">'+searchHotNews[hotlbNo][j]["i"]+'</a>';
			 }else{
			   dataStr += '<a href="'+searchHotNews[hotlbNo][j]["h"]+'" name="2">'+searchHotNews[hotlbNo][j]["i"]+'</a>';
			 }
			
		}
   }
   if(dataStr){
	   dataStr = hyh_str+dataStr;
	   $('bd_ad').innerHTML = dataStr;
   }
   hotlbNo++;
}
