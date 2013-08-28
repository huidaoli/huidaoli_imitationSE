function sAjaj(url) {
    this.url = url || "";
    this.loadData();
}
sAjaj.prototype = { 
    loadData : function () {
    	var C;
    	
		if (C) {
			document.body.removeChild(C);
		}
		C = document.createElement("SCRIPT");	
		C.src = this.url;
		//C.charset = "utf-8";
		document.body.appendChild(C);    
    }
}


eval("var $sForm = document."+(SugPara['sugFormName']||"searchForm")+";");
sugCls = new function(){
this.ali=function(){};

//get parameters from global hash
if (typeof SugPara != "object") return;
var inputid = SugPara['inputid']||"";
var sugType = SugPara['sugType']||"";
if (!inputid||!sugType) return;

var isIe = navigator&&(navigator.userAgent.toLowerCase().indexOf("msie")!=-1);
var isIe8 = !!window.XDomainRequest;
var needIfm = (SugPara['needIframe']&&isIe);

var postFix = SugPara['postFix']||"";
var preFix = SugPara['preFix']||"";
var revsd = SugPara['revsd']||0;
var sugCall = SugPara['sugCall']||"";
var suggestRid = SugPara['suggestRid']||"";
var normalRid = SugPara['normalRid']||"";
var iframeHeight = SugPara['iframeHeight']||50;
var enableSug = SugPara['enableSug']||true;
var sugWidth = SugPara['sugWidth']||0;
var sugLeft = SugPara['sugLeft']||0;
var sugTop = SugPara['sugTop']||0;

SugPara['isSug'] = false;

//local values
var indn = false;//init done flag;
var oqy = "ozia";
var xmlhttp1 = null;
var cline = -1; //current line
var tlines = 0; // total lines
var oldresult = "";
var nothide = false;
var that = this;
var submited = false;
var ctrlenter = false;

//all init
function ali(auto){
  if (indn) return;
  if((navigator.userAgent.toLowerCase().indexOf("msie 5") != -1)) return;
  var hh = sug$(inputid);
  if (hh){
    hh.setAttribute("autocomplete","off");
    csd();
    hh.onblur=function(){if(enableSug){window.setTimeout(function(){if (!nothide) Wb()},100);}};
    //hh.onclick=function(){if(enableSug&&hh.value)getContent(hh.value, true);}
    //reposition suggestion div
    window.onresize=function(){da(sug$('sugmaindivname'));da(sug$('inthefront'));}; 
    sug$('sugmaindivname').onmouseover = function(){hh.focus();nothide = true;}
    sug$('sugmaindivname').onclick = function(){hh.focus();}
    sug$('sugmaindivname').onmouseout = function(){nothide = false;}
    if (sug$('suggimg2')){
	    sug$('suggimg2').onmouseover = function(){hh.focus();nothide = true;}
	    sug$('suggimg2').onmouseout = function(){nothide = false;}
	}

	var oldsub = $sForm.onsubmit;
	$sForm.onsubmit=function(a, b, c){
		if (typeof oldsub == 'function')
			oldsub(a, b, c);
       		if(cline==0){
                   if(clickWeb(sug$("keyword0")))
		   	return false;
                }
		if(!ctrlenter)
			pingBack("sb");

		return true;
	}	
    //if (auto) getContent(sug$(inputid).value, false);
  }else{
    window.setTimeout(function(){ali(auto)},10);
  }
}

this.ali = ali;

//create suggestion div
function csd()
{
  indn = true;
  var oR = document.createElement('div');
  oR.id= 'sugmaindivname';
  oR.style.zIndex="2001";
  oR.style.paddingRight="0px";
  oR.style.paddingLeft="0px";
  oR.style.paddingTop="0px";
  oR.style.paddingBottom="0px";
  oR.style.display="none";
  da(oR);
  oR.style.position="absolute";
  oR.style.backgroundColor="white";
  document.body.appendChild(oR);
  if(needIfm){
    var oFrame=document.createElement("IFRAME");
    var oParentDIV=document.createElement("div");
    oFrame.id='inthefrontIFRAME';
    oFrame.setAttribute("frameBorder", "0");
    oFrame.style.width="2222px";
    oFrame.style.height="2222px";
    oFrame.style.border="0";
    
    oParentDIV.id='inthefront';
    oParentDIV.appendChild(oFrame);
    oParentDIV.style.zIndex="2000";
    oParentDIV.style.paddingRight="0";
    oParentDIV.style.paddingLeft="0";
    oParentDIV.style.paddingTop="0";
    oParentDIV.style.paddingBottom="0";
    oParentDIV.style.display="none";
    oParentDIV.style.width="10px";
    oParentDIV.style.height="10px";
    oParentDIV.style.overflow="hidden";
    da(oParentDIV);
    oParentDIV.style.position="absolute";
    document.body.appendChild(oParentDIV);
  }
  kbd();
}

function da(obj)
{
  if(obj)
  {
    var inp = sug$(inputid);
    var off = kb(inp);
    var left = off[0];
    var top = (off[1]+inp.offsetHeight);        
	if(sugLeft!=0){
    	left += sugLeft;
    	top += sugTop;
    }
    if(isIe8){
		if(sugLeft!=0)
			left -= 1;	
    }     
    obj.style.left=left +"px";
    obj.style.top=top +"px";   
   
    if(sugWidth)
    	obj.style.width=sugWidth+"px"; 
    else
    	obj.style.width=inp.offsetWidth+"px"; 
  }
}

//hide suggestion div
function Wb()
{
  var hh= sug$('sugmaindivname');
  if(hh&&hh.style){
    hh.style.display="none";
    if (sug$('suggimg2'))
	    sug$('suggimg2').src = sug$('suggimg2').src.replace('up', 'down');
    if(needIfm){
      sug$('inthefront').style.display="none";
    }
  }
}

//show hide suggestion div
function onoff(th)
{
  th = th||sug$('suggimg2');
  var hh= sug$('sugmaindivname');

  if(hh&&hh.style){
    if (th&&th.src.indexOf('down.gif') > 0){
      sug$(inputid).focus();
      getContent(sug$(inputid).value, true);
    }else{
      Wb();
    }
  }  
}

this.onoff = onoff;

//key bind
function kbd()
{
  var bt=new Date().getTime();
  var keywordrand=Math.floor((Math.random())*10000);
  var  et=new Date().getTime();
  if((et-bt)<500)
  {	
    var hh= sug$(inputid);
    if(hh.addEventListener){
      hh.addEventListener('keydown',onlyNum,false);
      hh.addEventListener('keyup',press,false);
    }else if(hh.attachEvent){
      hh.attachEvent('onkeydown',onlyNum);
      hh.attachEvent('onkeyup',press);
    }else{
      hh.onkeydown = onlyNum;
      hh.onkeyup = press;
    }
  }
}
//if ( !window.XMLHttpRequest )
  //XMLHttpRequest = function(){return new ActiveXObject("Microsoft.XMLHTTP")};

function handlelines(ls,ll, keywords, rr)
{
  var datas = ls.substring(1,ls.indexOf(']'));
  if (datas)
      datas = datas.split(", ");
  else
      datas = [];

  var hh = "";
  var hasWeb = false;

  for(var i = 0; i < datas.length; i++)
  {
    var nw=datas[i].split(";;");
    if (nw.length < 2)
      continue;

	if(nw[1])
    {	    
      //mark red
      var skey;
	  var show;
	  var attInfo;
	  
	  //isWeb
	  var isWeb = false;	
	  var web = nw[0].split("|");	
	  if(web.length>1){
	  	isWeb=true;
	  	hasWeb=true;
	  	show = web[0];
	  	attInfo = web[1];
	  	skey=web[0];
	  }else{
	  	show=nw[0];
	  	skey=nw[0].replace(/'/g,"\\'");
	  }
		      
      if(isWeb){
	      show = "<em>"+show+"</em>";
	      show += "<br>";
	      show +=  "<span>http://"+attInfo +"</span><font color=#636363> - 推广</font>"; 
	      //show += "<img src=\"http://www.sogou.com/images/star.gif\" align=\"absmiddle\">";    
      }
      show = show+preFix;
      if (nw[2]&&nw[2]!=nw[0]){
        show=show+"("+nw[2]+preFix+")";
        skey=nw[2].replace(/'/g,"\\'");
      }  
      hh +="<li id=\"keyword"+ll+"\" onmouseover='sugCls.ovo("+ll+")' onmouseout='sugCls.ovo(-1)'  onmouseup=\"sugCls.cc('"+ll+"')\" ";
      if(isWeb)
      	hh += " web = '"+ attInfo +"'";
      hh +=" keys='"+skey+"'>";
      
      //if(ll==0&&isWeb)
        //hh += "<span class=\"menutip\">Ctrl+Enter打开网址</span>";
       hh += show+"</li>";
    }
    ll++;
  }
  return [hh,ll,hasWeb];
}

function handleContent(ee)
{
  ee = decodeURIComponent(ee.replace(/\+/g," "));
  oldresult = ee;
  var ret = ee.split(';;&;;');
  var hh;
  var keywords="";
  cline = -1;
  tlines = 0;
  var hasWeb;	
  
  hh='<div id="sugmaindivname2"  class="suggestion">';

  if((ret.length != 3)){
    hh+='<div class="menuintro">输入查询词即在此显示智能提示</div>'; 
  }else{
    keywords = ret[0].substring(ret[0].indexOf('[')+1,ret[0].lastIndexOf(']'));
    if (keywords)
        keywords = keywords.split(", ");
    else
        keywords = [];

    hh += '<ul class="menuitem">';    
    var si = 1;
    if (revsd > 1) si = 2;
    var reth = handlelines(ret[si],0, keywords, si);
    hh += reth[0];
  	hasWeb = reth[2];
  	   
    reth = handlelines(ret[3-si], reth[1], keywords, 3-si);
    hh += reth[0];
    tlines = reth[1];

    hh+='</ul>';
    hh = hh.replace(/undefined/g,"");

  }
  hh+='<div class="menuswitch"><a href="#" onclick="sugCls.disableSug()" class="menuoff">关闭</a>搜狗智能提示</div>';
  
  if(sug$("sugmaindivname"))
  {
    sug$("sugmaindivname").innerHTML=hh;
    if(tlines==0 && keywords.length>0)
      Wb();
    else{
      if(sug$("sugmaindivname").style.display=="none")
      	pingBack("show_s");
      if(hasWeb)
      	pingBack("show_w");
      sug$("sugmaindivname").style.display="block";
      
      if (sug$('suggimg2'))
	      sug$('suggimg2').src = sug$('suggimg2').src.replace('down', 'up');
      if(needIfm){
        sug$('inthefront').style.height = iframeHeight+"px";
        sug$('inthefront').style.display="block";
      }
    }
  } 
}

this.handleContent = handleContent;

this.revs = function(th)
{
    if (revsd == 1)
        revsd = 2;
    else
        revsd = 1;
    handleContent(oldresult);
}

function getContent(keyword, showspace)
{
  if ($sForm.w)
    $sForm.w.value=normalRid||0;
  if(SugPara['enableSug']&&enableSug)
  {
    if ((!showspace)&&(keyword == "")){
      Wb();
      SugPara['isSug'] = false;
      return;
    }

    if (oqy.replace(/\s/g,"").replace(/%20/g,"")&&(oqy == keyword)){
      handleContent(oldresult);  
      return;
    }
    SugPara['isSug'] = false;

    oqy = keyword;
    if(xmlhttp1)
    {
      try{xmlhttp1.destroy();}catch(e){}
      xmlhttp1 = null;
    }
    

    var newStrComment = encodeURIComponent(keyword);
    var domain = SugPara['domain']||"sugg.sogou.com";
    var url="http://"+domain+"/sugg/suggestajaj.jsp?key="+newStrComment+"&type="+sugType+"&pr="+(SugPara['productId']||sugType);
    var tt=new Date().getTime();
    if (newStrComment.replace(/\s/g,"").replace(/%20/g,"") == "")
      url += "&rd="+tt;

    xmlhttp1 = new sAjaj(url);
    
  }else{
    SugPara['isSug'] = false;
    Wb();
    oqy="uaofwequroasjdklf";
  }
}
this.getContent = getContent;

//click one
function cc(ss)
{ 
  document.oncontextmenu = sdf;
  var hh = sug$(inputid);
  var tmp = "";
  var cobj = sug$("keyword"+ss);
  
  if(cobj)
    tmp = cobj.getAttribute("keys").toLowerCase();
  hh.value=tmp;
  Wb();
  hh.focus();
  if ($sForm.w)
    $sForm.w.value=suggestRid||0;
    
  SugPara['isSug'] = true;
  
  if(!clickWeb(cobj)){
	  if (typeof $sForm.onsubmit == 'function'){	
		if(ctrlenter){
		  	cline = 0;
		  	pingBack("ce");
		}		      
	    if (!$sForm.onsubmit()){
	        return;
	    }	     
	  }
	  $sForm.submit(); 
  }
}
this.cc = cc;

function clickWeb(cobj){
  var web = "";

  if(cobj)
        web = cobj.getAttribute("web");

  if(web){
        window.open("http://"+web.toLowerCase());
        cline = 0;
        pingBack("ce_nav");
	return true;
  }	
  return false;
}

function kb(s)
{
  var x=0;
  var y=0;
  while(s)
  {
    x+=s.offsetLeft;
    y+=s.offsetTop;
    s=s.offsetParent;
  }
  return [x,y];
}

this.ovo = function(cur)
{
  cline = cur;
  for(var i =0; i < tlines; i ++)
  {
    if (i == cur){
      sug$("keyword"+i).style.background = "#dcedf6";
    }else{
      sug$("keyword"+i).style.background = "#ffffff";
    }
  }
}

function sdf(ev)
{
  ev = ev||window.event;
  if (ev.preventDefault)
    ev.preventDefault();
  else
    ev.returnValue = false;
  if (ev.stopPropagation)
    ev.stopPropagation();
  else
    ev.cancelBubble = true;    
}
var bak;
function press(ev)
{	
  if (!SugPara['enableSug']) return;
  ev = ev||window.event; 
  sdf(ev);
  if ((ev.keyCode == 9)||(ev.keyCode == 38)||(ev.keyCode == 40))
    return false;
  else
  	bak = sug$(inputid).value;
   
  if (ev.keyCode == 13&&submited){
    submited = false;
    return false;
  }
  
  if(sug$(inputid).value=="")
  	enableSug=true;
  
  getContent(sug$(inputid).value, false);  
}

function onlyNum(ev)
{
  ev = ev||window.event;

	if (ev.keyCode==13){
		submited=true;
		return;		
	}  
  
  if (!SugPara['enableSug']) return;  
  if (!enableSug) return;
  if(!sug$("sugmaindivname"))return;
  if (sug$("sugmaindivname").style.display == 'none')
    return;
    

  var tmp;
  var clineObj;
  if(ev.keyCode==40 || ev.keyCode == 9) // key = down or key = tab
  {
    sdf(ev);
    if (cline < tlines - 1){
      cline++;
    }else if(cline == tlines - 1){
    	cline = tlines;
    }else{
    	cline = 0;
    }
    
  }
  else if(ev.keyCode==38)   //key= up
  {
    sdf(ev);
    if (cline == -1)
      cline = tlines;  
    if (cline >= 0)
    {
      cline--;
    }

  }
  if (ev.keyCode==40 || ev.keyCode == 9 || ev.keyCode==38){
    that.ovo(cline);
    clineObj = sug$("keyword"+cline);
    if(clineObj)
    	tmp = clineObj.getAttribute("keys").toLowerCase();
	else	
    	tmp = bak;
    sug$(inputid).value = tmp;
 
    if(cline == tlines||cline==-1){
	$sForm.w.value=normalRid||0;	
	SugPara['isSug'] = false;    
    }else if ($sForm.w){
	$sForm.w.value=suggestRid||0;
    	SugPara['isSug'] = true;    
    }
    return false;
  }

}

var sugPings = new Array();
//ping back
function pingBack(act){
	var s1 = "http://61.135.188.217:8080/c.jpg";
	var s2 = "http://pb.sogou.com/sugg.gif";	
	var url="?w="+encodeURIComponent(sug$(inputid).value)+"&k="+encodeURIComponent(bak)+"&type="+sugType+"&s=";
	if(SugPara['isSug'])
		url+="t";
	else
		url+="f";
		
	if(cline!=-1)
		url+="&cline="+cline;	
	if(act)
		url+="&act="+act;
	url+="&r="+new Date().getSeconds();

	var V=sugPings.length;
	sugPings[V]=new Image();
	sugPings[V].src=s1+url;
	sugPings[V+1]=new Image();
	sugPings[V+1].src=s2+url;
	
}
//disable sug
function disableSug(){
	Wb();
	enableSug=false;
	pingBack("dis");
	return false;
}
this.disableSug=disableSug;

function sug$(objName)
{
  if(document.getElementById)
    return document.getElementById(objName);
  else
    return document.all[objName];
}
}();

var head=document.getElementsByTagName('HEAD').item(0);
var style=document.createElement('link');
style.href='http://www.sogou.com/css/sugg.css';
style.rel='stylesheet';
style.type='text/css';
head.appendChild(style);

var oMr = $sForm.query.onmouseover;
$sForm.query.onmouseover=function(){if(typeof oMr=='function')oMr();sugCls.ali();};
$sForm.query.onkeydown=sugCls.ali;
var onoff = sugCls.onoff;

//var submitBtn;
//document.getElementById(submitBtn).disabled = false;
