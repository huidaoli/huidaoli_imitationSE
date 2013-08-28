var map_parameters = {
	"google":[{"formAction":"http://ditu.google.cn/maps","inputName":"q","logo_img":"i/search1216/googlemap.gif","logo_u":"http://ditu.google.cn"}],
	"baidu":[{"formAction":"http://map.baidu.com/m","inputName":"word","logo_img":"i/search1216/baidumap.gif","logo_u":"http://map.baidu.com"}],
	"sougou":[{"formAction":"http://map.sogou.com/","inputName":"lq","logo_img":"i/search1216/sougoumap.gif","logo_u":"http://map.sogou.com"}],
	"soso":[{"formAction":"http://map.soso.com/","inputName":"w","logo_img":"i/search1216/sosomap.gif","logo_u":"http://map.soso.com"}]};
function changeMap(type){
	switch (type)
	{
	case "google":
      $("map_form").action=map_parameters.google[0].formAction;
	  $("search5").name = map_parameters.google[0].inputName;
	  $("map_logo").src = map_parameters.google[0].logo_img;
	  $("map_logo_u").href = map_parameters.google[0].logo_u;
	  $("search5").setAttribute("autocomplete",g_cookie("auto5",cookieStore) == "0"?"on":"off");
	  break;
	case "baidu":
	  $("map_form").action=map_parameters.baidu[0].formAction;
	  $("search5").name = map_parameters.baidu[0].inputName;
      $("map_logo").src =  map_parameters.baidu[0].logo_img;
	  $("map_logo_u").href = map_parameters.baidu[0].logo_u;
	  $("search5").setAttribute("autocomplete",g_cookie("auto5",cookieStore) == "0"?"on":"off");
	  break;
	case "sougou":
	  $("map_form").action=map_parameters.sougou[0].formAction;
	  $("search5").name = map_parameters.sougou[0].inputName;
      $("map_logo").src =  map_parameters.sougou[0].logo_img;
	  $("map_logo_u").href = map_parameters.sougou[0].logo_u;
	  $("search5").setAttribute("autocomplete","on");
	  break;
	case "soso":
	  $("map_form").action=map_parameters.soso[0].formAction;
	  $("search5").name = map_parameters.soso[0].inputName;
      $("map_logo").src =  map_parameters.soso[0].logo_img;
	  $("map_logo_u").href = map_parameters.soso[0].logo_u;
	  $("search5").setAttribute("autocomplete",g_cookie("auto5",cookieStore) == "0"?"on":"off");
	  break;
	}
	localStorage.setItem('mapType', type);
}
var map_str = '',map_Html1,map_Html2='',map_Html3,checkradio='';
map_Html3 = '</div></form>';
var map_ad = '<p class="searchr"><span class="mbkeys"><a name="2" href="http://www.chinahighway.gov.cn/roadmanager/qglk.jsp">实时路况查询</a><a name="2" href="http://ditu.mapabc.com/lukuang/index.shtml">市区路况查询</a><a name="2" href="http://www.ip138.com/weizhang.htm">交通违章查询</a><a name="2" href="http://p.yiqifa.com/c?s=ff90ab53&w=253302&c=5112&i=9542&l=0&e=2345&t=http://www.mangocity.com/">旅游景点</a></span></p>';
var mapType = localStorage.getItem('mapType');
if(mapType==null || mapType==''){
	mapType = 'google';
}
var map_arr = {"google":"Google","baidu":"百度","sougou":"搜狗","soso":"SOSO"};
var mapTypeObj;
if(mapType in map_arr){
	  for(x in map_arr){
	     if(mapType==x){
            checkradio = 'checked=""';
		 }else{
		    checkradio = '';
		 }
		 map_Html2 += '<label for="'+x+'_map"><input class="radio01" name="opt-map" id="'+x+'_map" type="radio" onclick="changeMap(\''+x+'\');clickCount(\''+x+'map\');" '+checkradio+' />'+map_arr[x]+'</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	  }
	  switch (mapType)
	  {
		  case "google":
			 mapTypeObj = map_parameters.google[0];
			 break;
		  case "baidu":
			 mapTypeObj = map_parameters.baidu[0];
			 break;
		  case "sougou":
			 mapTypeObj = map_parameters.sougou[0];
			 break;
		  case "soso":
			 mapTypeObj = map_parameters.soso[0];
			 break;
	  }
      map_Html1 = '<form onsubmit="return checkMapForm()" action="'+mapTypeObj.formAction+'" target="_blank" id="map_form"><div class="searchl"><div><p class="p80" ><a href="'+mapTypeObj.logo_u+'" id="map_logo_u"><img id="map_logo" src="'+mapTypeObj.logo_img+'" style="margin-top: 4px;" title="点击打开" /></a></p><span class="sugdiv"><p class="p270"><input class="search11" id="search5" type="text" name="'+mapTypeObj.inputName+'" onfocus="this.select();sug(5);" onmouseover="bd(5);this.focus();_active=$(\'search5\')" onmouseout="bdc(5)" onblur="bdc(5)" autocomplete="off" /></p><p><input class="sbutton" type="submit" value="搜  索" onclick="clickCount(\'map_search\');" /><input type="hidden" value="gbk" name="ie"></p></span></div></div>'+map_ad+'<div class="radiogp">';
}

var map_Html= map_Html1+map_Html2+map_Html3;
$("mapform").innerHTML = map_Html;
if(mapType=="sougou"){
  $("search5").setAttribute("autocomplete","on");
}else{
  $("search5").setAttribute("autocomplete",g_cookie("auto5",cookieStore) == "0"?"on":"off");
}

function checkMapForm(){
if($("sougou_map").checked==true){
     window.open("http://map.sogou.com/#lq="+$("search5").value)
	 return false
   }
}

