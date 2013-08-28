var buy_parameters = {
	"taobao":[{"formAction":"http://s8.taobao.com/browse/search_auction.htm","inputName":"q","logo_img":"i/search1216/taobaobuy.gif","logo_u":"http://www.taobao.com/go/chn/tbk_channel/channelcode.php?pid=mm_10054659_1405058_10347650&eventid=101329"}],
    "tuan":[{"formAction":"http://tao765.gouwuke.com/tuan/searchproduct.do","inputName":"kw","logo_img":"i/search1216/tuanbuy.gif","logo_u":"http://tao765.gouwuke.com/tuan/index.html?e=2345"}]
	};
 function changeBuy(type){
    $("buyHidden").innerHTML ='';
	switch (type)
	{
	case "taobao":
      $("buy_form").action= buy_parameters.taobao[0].formAction;
	  $("search6").name = buy_parameters.taobao[0].inputName;
	  $("buy_logo").src = buy_parameters.taobao[0].logo_img;
	  $("buy_logo_u").href = buy_parameters.taobao[0].logo_u;
	  $("buyHidden").innerHTML ='<input type="hidden" name="pid" value="mm_10054659_0_0"><input type="hidden" name="search_type" value="auction"><input type="hidden" name="commend" value="all"><input type="hidden" name="at_topsearch" value="1">'; 
	  break;
	 case "tuan":
	  $("buy_form").action= buy_parameters.tuan[0].formAction;
	  $("search6").name =  buy_parameters.tuan[0].inputName;
      $("buy_logo").src =  buy_parameters.tuan[0].logo_img;
	  $("buy_logo_u").href =  buy_parameters.tuan[0].logo_u;
	  $("buyHidden").innerHTML ='<input type="hidden" name="city" value="all"><input type="hidden" name="fromIframe" value="">'; 
	  break;
	}
	localStorage.setItem('buyType', type);
}

var buy_str = '',buy_Html1,buy_Html2='',buy_Html3,buy_checkradio='';
buy_Html3 = '</div></form>';
var buy_ad = '<p class="searchr"><span class="mbkeys"><a name="2" href="tuan.htm">今日团购</a><a name="2" href="http://dianpu.tao123.com/?pid=mm_10054659_1405058_10347650&eventid=102167">淘宝皇冠店</a><a name="2" href="http://s.click.taobao.com/t_9?p=mm_10054659_1405058_10347648&l=http%3A%2F%2Fwww.tmall.com">淘宝商城</a><a name="2" href="http://p.yiqifa.com/c?s=5308bddc&w=253302&c=254&i=160&l=0&e=2345&t=http://www.360buy.com">京东商城</a><a name="2" href="http://p.yiqifa.com/c?s=a2a2a463&w=253302&c=247&i=159&l=0&e=2345&t=http://www.dangdang.com">当当网</a></span></p>';
var buyType = localStorage.getItem('buyType');
if(buyType==null || buyType==''){
	buyType = 'taobao';
}
var buy_arr = {"taobao":"淘宝","tuan":"团购"};
var buyTypeObj,buyHiddenValue='';
if(buyType in buy_arr){
	  for(x in buy_arr){
	     if(buyType==x){
            buy_checkradio = 'checked=""';
		 }else{
		    buy_checkradio = '';
		 }
		 buy_Html2 += '<label for="'+x+'_buy"><input class="radio01" name="opt-buy" id="'+x+'_buy" type="radio" onclick="changeBuy(\''+x+'\');clickCount(\''+x+'buy\');" '+buy_checkradio+' />'+buy_arr[x]+'</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	  }
	  switch (buyType)
	  {
		  case "taobao":
			 buyTypeObj = buy_parameters.taobao[0];
		     buyHiddenValue = '<input type="hidden" name="pid" value="mm_10054659_0_0"><input type="hidden" name="search_type" value="auction"><input type="hidden" name="commend" value="all"><input type="hidden" name="at_topsearch" value="1">';
			 break;
		  case "tuan":
			 buyTypeObj = buy_parameters.tuan[0];
		     buyHiddenValue = '<input type="hidden" name="city" value="all"><input type="hidden" name="fromIframe" value="">';
			 break;
	  }
      buy_Html1 = '<form action="'+buyTypeObj.formAction+'" target="_blank" id="buy_form"><span id="buyHidden">'+buyHiddenValue+'</span><div class="searchl"><div><p class="p80" ><a href="'+buyTypeObj.logo_u+'" id="buy_logo_u"><img width="68" height="23" id="buy_logo" src="'+buyTypeObj.logo_img+'" style="margin-top: 4px;" title="点击打开" /></a></p><span class="sugdiv"><p class="p270"><input class="search11" id="search6" type="text" name="'+buyTypeObj.inputName+'" onfocus="this.select();sug(6);" onmouseover="bd(6);this.focus();_active=$(\'search6\')" onmouseout="bdc(6)" onblur="bdc(6)" autocomplete="off" /></p><p><input class="sbutton" type="submit" value="搜  索" onclick="clickCount(\'buy_search\');" /></p></span></div></div>'+buy_ad+'<div class="radiogp">';
}

var buy_Html= buy_Html1+buy_Html2+buy_Html3;
$("buyform").innerHTML = buy_Html;
$("search6").setAttribute("autocomplete",g_cookie("auto6",cookieStore) == "0"?"on":"off");
