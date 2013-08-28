var req_url="http://d.2345.com/xingzuo";
//返回node的元素子节点集
function get_childnodes(node){
	var nodes_list=node.childNodes;
	var nl=nodes_list.length;
	var arr=new Array();
	if((m.browser()=="chrome") || (m.browser()=="ff") || (m.browser()=="ie9")){
		for(var i=0;i<nl;i++){
			if(nodes_list[i].nodeName != "#text"){
				arr.push(nodes_list[i]);
				}
			}
		return arr;
	}else{
		return nodes_list;
		}
}
function add_class(node,classname){
	node.className=node.className+" "+classname;
}
//待优化
function rem_class(node,classname){
	var arr=node.className.split(" ");
	var new_arr= new Array();	
	for(var i=0;i<arr.length;i++){
	if(arr[i]!=classname){
		new_arr.push(arr[i]);
	}
	}
	node.className=new_arr.join(" ");
}
function get_date(type,tab){
var d=new Date();
y=d.getFullYear();
if(type=="xz"){
	switch(tab){
	case "today": var str=y+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日运势";break;
	case "tomorrow": 
		var c=new Date((d.getTime()/1000+3600*24)*1000);
		var str=c.getFullYear()+"年"+(c.getMonth()+1)+"月"+c.getDate()+"日运势";break;
	case "week":
		var w=getW(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDay()+1));
		var str=y+"年"+w+"周运势";break;
	case "month":
		var str=y+"年"+(d.getMonth()+1)+"月运势";break;
	case "year":
		var str=y+"年运势";break;
	}
	
}else{
	var str=y+"年"+(d.getMonth()+1)+"月运势";
	}$("date_today").innerHTML=str;
}

function getW(ymd){
	if(ymd){
	ymd=ymd.split("-");
	try{
	var year=ymd[0];
	var b=new Date(ymd[0],ymd[1]-1,ymd[2],0,0,0,0);
	var b=b.getDay()>=0?b:false;
	}catch(e){
	var b=false;
	}
	}
	if(!b){
	var b=new Date();
	var year=b.getYear();
	}
	var ds=24*3600*1000;
	var a=new Date(year,0,1,0,0,0,0);
	var ad=a.getDay()==0?7:a.getDay();
	var D=(b.getTime()-a.getTime())/ds;//跟1月1日有几天


	//如果是年初几天
	if(ad<=4){
	if((D+ad)<=7)return 1;
	else D+=a.getDay();
	}else{
	if((D+ad)<=7){
	//去年一年的周数
	year-=1;
	for(var i=31;i>24;i--){
	var x=getW(year+"-12"+"-"+i);
	if(x>10)return x;
	}
	}else{
	D-=7-ad;
	}
	}
	var W=D/7;
	if(Math.ceil(W)==W)return W;
	//如果是年末几天
	var c=new Date(year,11,31,0,0,0,0);
	var cd=c.getDay()==0?7:c.getDay();
	if(cd<4){
	var D2=(c-b)/ds;//跟12月31日有几天
	if(D2<cd)return 1;//移到下一年
	}
	//年中
	return Math.ceil(W);
	}
function get_more_links(){m.show($("hided_links"));m.hide($("more_link"));m.show($("less_link"));}
function get_less_links(){m.hide($("hided_links"));m.hide($("less_link"));m.show($("more_link"));}
function add_query(arr){
    var url=location.href;
    for(var item in arr){
            if(url.indexOf("=")==-1){
            	if(url.indexOf("#")==-1){
                            var add="#"+item+"="+arr[item];
                            url+=add;
            	}else{
            		 var new_url=url.substring(0,url.indexOf("#"));
            		 var add="#"+item+"="+arr[item];
            		 url=new_url+add;
            	}
            
            }else{
                    var paraString = url.substring(url.indexOf("#")+1,url.length).split("&"); 
                    var num= paraString.length;
                    var new_url=url.substring(0,url.indexOf("#"));
                    new_url+="#";
                    for(var i=0;i<num;i++){
                                    var tmp_arr =paraString[i].split("=");
                                    if(tmp_arr[0]!="year"){//取出year参数
                                    if(tmp_arr[0]==item){
                                            paraString[i]=item+"="+arr[item];
                                            var is_true=1;
                                    }
                                    
                                    if(i!=0 && exsit_y !=1){
                                            new_url+="&";
                                    }
                                    if(exsit_y ==1){
                                    	exsit_y=0;
                                    }
                                    new_url+=paraString[i];
                                    }else{
                                    	var exsit_y =1;
                                    }
                    }
                    if(is_true==1){//替换	
                            url=new_url;
                            is_true=0;
                    }else{
                            var add="&"+item+"="+arr[item];
                            url+=add;
                            }
            }

    }
    location.href= url;
}
//获取星座和生肖的url参数
function get_q(type){
	var arr=new Array();
	var url=location.href;
	if(url.indexOf("=")==-1){
		if(type=="xz"){
	     arr['xz']="aries";
	     arr['tab']="today";
		}else if(type=="sx"){
		     arr['sx']="mouse";
		     arr['tab']="love";		
		}
	}else{
        var paraString = url.substring(url.indexOf("#")+1,url.length).split("&"); 
        var num= paraString.length;
        for(var i=0;i<num;i++){
       	 	var tmp_arr =paraString[i].split("=");
       	 	if(num==1){
       	 	if(type=="xz"){
       	 		if(tmp_arr[0]=="xz"){
       	 			arr['tab']="today";
       	 		}else if(tmp_arr[0]=="tab"){
       	 			arr['xz']="aries";
       	 		}
       	 	}else if(type=="sx"){
       	 		if(tmp_arr[0]=="sx"){
       	 			arr['tab']="love";
       	 		}else if(tmp_arr[0]=="tab"){
       	 			arr['sx']="mouse";
       	 		}
       	 	}
       	 	}
       	 	arr[tmp_arr[0]]=tmp_arr[1];
      }
	}
	return arr;
}
//输入年份
function go_check_sx(){
	var arr=new Array();
	arr['sx']=get_ani_byyear($("birth_year").value);
	add_query(arr);
    init();
  	var q=get_q("sx");
  	m.loadJs(req_url+"/dispatch.php?type=sx&catch=all&animal="+arr['sx']);
  	m.loadJs(req_url+"/dispatch.php?type=sx&catch="+q['tab']+"&animal="+arr['sx']);
}
//
function get_ani_byyear(s){
	var l=(s-1900)%12;
	var arr=new Array();
	switch (l){
	case 0: arr['sx']="mouse";break;
	case 1: arr['sx']="ox";break;
	case 2: arr['sx']="tiger";break;
	case 3: arr['sx']="rabbit";break;
	case 4: arr['sx']="dragon";break;
	case 5: arr['sx']="snake";break;
	case 6: arr['sx']="horse";break;
	case 7: arr['sx']="sheep";break;
	case 8: arr['sx']="monkey";break;
	case 9: arr['sx']="chook";break;
	case 10: arr['sx']="dog";break;
	case 11: arr['sx']="pig";break;
	}
	return arr['sx'];
}
//替换星座内容
function change_xz_con(con,type){
	for(var item in con){
		if((item=="paragraph")  || (item=="good_desc" )){
			$("paragraph").innerHTML=con[item];
		}else{
		var nd=item+"_"+type;
		if(item.indexOf("star")!=-1){
			if($(nd)!=null){
			$(nd).innerHTML=get_star(con[item]);
			}
		}else if((item != "all")  &&  (item != "love")  &&  (item != "work")  && (item != "money")){
			if($(nd)!=null){
			$(nd).innerHTML=con[item];
			if(nd=="luck_object_year"){
				$(nd).title=con[item];
			}
			
			}
		}
	}
	}
}
//替换生肖头部内容
function change_all_con(con){
	for(var item in con){
		if(item.indexOf("doc")!=-1){
			$(item).innerHTML=con[item];
		}
		if($(item+"_h")!=null){

			$(item+"_h").innerHTML=con[item];
		}
		if($(item+"_d")!=null){
			$(item+"_d").innerHTML=con[item];
	}
	}
}
//替换生肖主体内容
function change_sx_con(con,type){
	for(var item in con){
		var nd=item+"_"+type;
		if(con[item].indexOf("%")!=-1){
			if($(nd)!=null){
			$(nd).innerHTML=per_to_star(con[item]);
			}
		}else{
		if($(nd)!==null){
			$(nd).innerHTML=con[item];
		}
		}
	}
}
//替换星座测试内容
function change_test_con(con){
	var str="";
	for(var item in con){
		var nd=item+"_test";
		if((item!="top" )&&(item !="hot")){		
			for(var i=0;i<5;i++){
				if(i==0){
					str="<dt>"+con[item][i]['intro']+"</dt>";
				}
					str+="<dd><a href='"+con[item][i]['linkUrl']+"'>"+con[item][i]['title']+"</a></dd>";
			}		
		}else if(item=="top"){
			str="<dt style='padding-left:30px;'><a href='"+con[item]['linkUrl']+"'><img style='width:140px;' src='"+con[item]['imgUrl']+"' alt='"+con[item]['intro']+"'/></a></dt>";
			str+="<dd><a href='"+con[item]['linkUrl']+"'>"+con[item]['title']+"</a></dd>";
		}else{
			for(var i=0;i<5;i++){
				if(i==0){
					str="";
				}
					str+="<li><a href='"+con[item][i]['linkUrl']+"'>"+con[item][i]['intro']+":"+con[item][i]['title']+"</a></li>";
			}	
		}
		$(nd).innerHTML=str;
	}
	
}
//星座页面顶部链接

function change_top_links(cont){
	/*
	if(cont !==null){
	var classes=cont['name'];
	var con=cont['con'];
	if(con !=undefined){
	var len=con.length;
	var str="";
	for(var i=0;i<len;i++){
		if((len>2)&&(i ==len-1)){
			str+="<dl class='clearfix'  id='hided_links' style='display:none;'><dt><span>"+classes[i]+"</span></dt><dd id='link_class"+i+"'></dd></dl>";
		}else{
			str+="<dl class='clearfix'><dt><span>"+classes[i]+"</span></dt><dd id='link_class"+i+"'></dd></dl>";
		}
	}
	if(len>2){
	str+= "<a class='more'  id='more_link'  style='cursor:pointer'  onclick='get_more_links()'>更多<i></i></a><a class='more shrink' id='less_link' style='display:none;cursor:pointer'  onclick='get_less_links()'>收起<i></i></a>";
	}
	$("top_link_div").innerHTML=str;
	str="";
	for(var i=0;i<len;i++){
		for(var j=0;j<con[i].length;j++){
			str+="<span><a title='"+con[i][j]['title']+"' href='"+con[i][j]['url']+"'>"+con[i][j]['title']+"</a></span>";
		}
		$("link_class"+i).innerHTML=str;
		str="";
	}
	}
	}
	*/


}
//星座页面星座血型的链接
function change_xz_sx_links(con){
	var str="";
	for(var i=0;i<con[0].length;i++){
		str+= "<li><a href='"+con[0][i]['url']+"'><img src='"+con[0][i]['src']+"' /></a></li>";
	}
	$("xz_shengxiao").innerHTML=str;
	var list=get_childnodes($("xz_shengxiao"));
	for(var i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			jump_a_little(this);
		}
		list[i].onmouseout=function(){
			bounce_back(this);
		}
	}
	str="";
	for(var i=0;i<con[1].length;i++){
		str+= "<li><a href='"+con[1][i]['url']+"'><img src='"+con[1][i]['src']+"' /></a></li>";
	}
	$("xz_xuexing").innerHTML=str;
	list=get_childnodes($("xz_xuexing"));
	for(var i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			jump_a_little(this);
		}
		list[i].onmouseout=function(){
			bounce_back(this);
		}
	}
}
//生肖血型页面的链接
function change_sx_links(con){
	var str="";
	for(var i=0;i<con.length;i++){
		var nodes=get_childnodes($("link_list"+i));
		for(var j=0;j<nodes.length;j++){
			if(m.browser()==""){
				if(j%2==0){
				nodes[j].href=con[i][j/2]['url'];
				}
			}else{
			nodes[j].href=con[i][j]['url'];
			}
		}
	}
}

//替换星座页面塔罗链接
function change_taluo_part(con){
	var str="";
	var j=1;
	for(var item in con){
		if(j==4){
			str+="<ul class='last'>";
		}else{
			str+="<ul>";
		}
		for(var i=0;i<5;i++){
			str+="<li><a href='"+con[item][i]['url']+"'>"+con[item][i]['title']+"</a></li>";
		}

		str+="</ul>";
		j++;
	}
	$("taluo_links").innerHTML=str;
}
//替换塔罗页面链接
function change_taluo_all(con){
	for(var item in con){
		var str="";
		var nd=item+"_con";
		if(item == "luck" ){
			var nodes_list1=get_childnodes($("luck_con"));
			str="<dl><dt><a href='"+con[item][0]['url']+"'><img src='images/xingzuo/ati1.png'/></a></dt><dd><a href='"+con[item][0]['url']+"'>"+con[item][0]['title']+"</a></dd></dl><ul>";
				//str="<dl><dt><a href='"+con[item][0]['url']+"'><img src='"+con[item][0]['img_src']+"'/></a></dt><dd><a href='"+con[item][0]['url']+"'>"+con[item][0]['title']+"</a></dd></dl><ul>";
			for(var i=1;i<5;i++){
				str+="<li><a href='"+con[item][i]['url']+"'>"+con[item][i]['title']+"</a></li>";
			}
				str+="</ul>";
				nodes_list1[0].innerHTML=str;
				str="";
				str="<dl><dt><a href='"+con[item][5]['url']+"'><img src='images/xingzuo/ati2.png'/></a></dt><dd><a href='"+con[item][5]['url']+"'>"+con[item][5]['title']+"</a></dd></dl><ul>";
				//str="<dl><dt><a href='"+con[item][5]['url']+"'><img src='"+con[item][5]['img_src']+"'/></a></dt><dd><a href='"+con[item][5]['url']+"'>"+con[item][5]['title']+"</a></dd></dl><ul>";
				for(var i=6;i<10;i++){
					str+="<li><a href='"+con[item][i]['url']+"'>"+con[item][i]['title']+"</a></li>";
				}
					str+="</ul>";
					nodes_list1[1].innerHTML=str;
				
		}else if(item == "secret"){
			var nodes_list1=get_childnodes($("secret_con"));
			for(var i=0;i<3;i++){
				var str="";
				var one=2*i;
				var two=2*i+1;
				//str+="<dl><dt><a href='"+con[item][two]['url']+"'><img src='"+con[item][two]['img_src']+"'/></a></dt><dd><a href='"+con[item][two]['url']+"'>"+con[item][two]['title']+"</a></dd></dl>";
				str+="<dl><dt><a href='"+con[item][two]['url']+"'><img src='images/xingzuo/ati"+(i+3)+".png'/></a></dt><dd><a href='"+con[item][two]['url']+"'>"+con[item][two]['title']+"</a></dd></dl>";
				str+="<dl><dt  style='width:170px;margin-left:10px;'><a href='"+con[item][one]['url']+"'>"+con[item][one]['title']+"</a></dt><dd  class='desc'  style='width:150px;margin-left:10px;color:rgb(100,100,100)'>"+con[item][one]['brief']+"</dd></dl>";
				nodes_list1[i].innerHTML=str;
			}
			
		}else{
			for( var i=0;i<24;i++){
				if(i==0){
					str="<ul>";
				}
					str+="<li style='width:150px;'><a title='"+con[item][i]['title']+"' href='"+con[item][i]['url']+"'>"+con[item][i]['title']+"</a></li>";
				if(i==7){
					str+="</ul><ul>";
				}else if(i==15){
					str+="</ul><ul  class='last'>";
				}else if(i==23){
					str+="</ul>";
				}
			}
			$(nd).innerHTML=str;
		}
	}
}
//根据百分比换成星星
function per_to_star(per){
	var num=per.substring(0,per.indexOf("%"));
	return get_star(Math.round(num/20));
}
//根据数字获得星星
function get_star(num){
	var str="";
	for(var i=0;i<num;i++){
		str+= "<img src='images/xingzuo/star.png'/>";
	}
	for(var i=0;i<(5-num);i++){
		str+= "<img src='images/xingzuo/star_gray.png' />";
	}
return str;
}
function display_tip(node,tip){
	node.onblur=function(){
		if(this.value ==""){
		this.value=tip;
		this.style.color="rgb(100,100,100)";
		}
	}
	node.onfocus=function(){
		if(this.value ==tip){
			this.value="";
			this.style.color="black";
		}
	}
}
function jump_a_little(node){
	node.style.position="relative";
	node.style.bottom="5px";
}
function bounce_back(node){
	node.style.position="static";
	node.style.bottom="0px";
}
