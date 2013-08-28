function get_date_selector(node_y,node_m,node_d,num){
	if((m.browser()=="chrome") || (m.browser()=="ff")){
	var str="";
	var d=new Date();
	for (var i=0;i<num;i++){
		var y=d.getFullYear()-i;
		str+="<option value='"+y+"'>"+y+"</option>";
	}
	node_y.innerHTML=str;
	str="";
	for (var i=1;i<13;i++){
		str+="<option value='"+i+"'>"+i+"</option>";
	}
	node_m.innerHTML=str;
node_m.onchange=function(){
	var str="";
	var m=this.value;
	var d=new Date();
	if((m=="1") ||  (m=="3") || (m=="5") || (m=="7") || (m=="8") || (m=="10") || (m=="12")){
		num=31;
	}else if((m=="4") || (m=="6") || (m=="9") || (m=="11")){
		num=30;
	}else if((node_y.value-1900)%4==0){
		num=29;
	}else{
		num=28;
	}
	for (var i=1;i<num+1;i++){
		str+="<option value='"+i+"'>"+i+"</option>";
	}
	node_d.innerHTML=str;
}
	}
}