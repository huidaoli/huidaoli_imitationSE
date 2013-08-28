function loadJs (src) 
{
	var b = document.createElement("script");
	b.setAttribute("type", "text/javascript");
	b.setAttribute("src", src);
	document.getElementsByTagName("head")[0].appendChild(b);

	return true;
}
loadJs('js/siteArr.js');

document.write('<li class="lastmenu" id="historyLi" onmouseover="showHistory();" onmouseout="hideHistory();">');
	document.write('<a href="hiscx.htm" id="historyId" target="_blank"><b>��ʷ��ѯ</b></a>');
	document.write('<dl class="menuPop" id="history" style="display:none;">');
		//document.write('<dt><a href="#">��ռ�¼</a>���ʹ�ù��Ĺ���</dt>');
		//document.write('<dd><a href="#">����Υ�²�ѯ</a></dd>');
		//document.write('<dd><a href="#">���֤��ѯ</a></dd>');
		//document.write('<dd><a href="#">�����׼���ѯ</a></dd>');
		//document.write('<dd><a href="#">���֤��ѯ</a></dd>');
		//document.write('<dd><a href="#">��������</a></dd>');
		//document.write('<dd><a href="#">���֤��ѯ</a></dd>');
		//document.write('<dd><a href="#">�����׼���ѯ</a></dd>');
		//document.write('<dd><a href="#">���֤��ѯ</a></dd>');
		//document.write('<dd><a href="#">�����׼���ѯ</a></dd>');
		//document.write('<dd><a href="#">���֤��ѯ</a></dd>');
		//document.write('<dd class="popMore"><a href="hiscx.htm">����>></a></dd>');
	document.write('</dl>');
	document.write('<iframe frameborder="0" class="menuPop_ifr" style="display:none;"></iframe>');
document.write('</li>');

function setHistoryHtml()
{
	var objHistory = document.getElementById('history');
	objHistory.innerHTML = '';
	
	var historyHtml = '<dt><a href="javascript:;" onclick = "isConfirm();">��ռ�¼</a>���ʹ�ù��Ĺ���</dt>';
	var toolsHistory = getCookie('tools');
	if(toolsHistory == null)
	{
		historyHtml = '<dd class="popMore" style="display:block;text-align:center;width:100%;">������ʷ��ѯ��¼</dd>';
		objHistory.innerHTML = historyHtml;
		objHistory.style.display = 'none';
		return;
	}

		historyArr = toolsHistory.split('|');
	var	len = historyArr.length;
	//alert(len);
	for(var i=0; i<len; i++)
	{
		if(i > 9){
			continue;
		}

		var historyId = historyArr[i];
		var name = siteArr[historyId][0];
		var fileName = siteArr[historyId ][1];
		var icon = siteArr[historyId][2];
		if(fileName.substr(0,4) != 'http')
		{
			var fileName = 'http://tools.2345.com/' + fileName;
		}
		if(fileName.substr(0,4) != 'http')
		{
			var fileName = 'http://tools.2345.com/' + fileName;
		}

		historyHtml += '<dd><a href="' + fileName + '" target="_blank">' + name + '</a></dd>';
	}
	if(len > 9)
	{
		historyHtml += '<dd class="popMore"><a href="hiscx.htm" target="_blank">����>></a></dd>';
	}
	historyHtml += '<iframe frameborder="0" class="menuPop_ifr" style="display:none;"></iframe>';
	objHistory.innerHTML = historyHtml;
	objHistory.style.display = 'none';
}

function showHistoryUl()
{
	var objOne = document.getElementById('ulOne');
	var objTwo = document.getElementById('ulTwo');
	var htmlOne = '';
	var htmlTwo = '';

	var toolsHistory = getCookie('tools');
	if(toolsHistory == null)
	{
		document.getElementById('clear').innerHTML = '���ʹ�ù��Ĺ���   <font color="#666666">������ʷ��ѯ��¼</font>';
		htmlOne = '������ʷ��¼';
		return;
	}
		historyArr = toolsHistory.split('|');
	var	len = historyArr.length;

	for(var i=0; i<len; i++)
	{
		var historyId = historyArr[i];
		var name = siteArr[historyId][0];
		var fileName = siteArr[historyId ][1];
		var icon = siteArr[historyId][2];
		var otherInfo = siteArr[historyId][3];

		if(fileName.substr(0,4) != 'http')
		{
			var fileName = 'http://tools.2345.com/' + fileName;
		}

		if(icon != '')
		{
			htmlOne += '<li><a href="' + fileName + '" target="_blank"><img alt="' + name + '" src="img201202/'+ icon +'" /><p>' + name;
			if(otherInfo == 'hot')
			{
				htmlOne +=  '<i class="iconhot"></i>';
			}
			if(otherInfo == 'new')
			{
				htmlOne += '<i class="iconnew"></i>';
			}
			htmlOne += '</p>';
		}else{
			htmlTwo += '<li><a href="' + fileName + '" target="_blank">' + name + '</a></li>';
		}
		
	}
	

	//if(htmlOne == '' && htmlTwo == '')	
	//{
	//	document.getElementById('clear').innerHTML = '���ʹ�ù��Ĺ���   <font color="#666666">������ʷ��ѯ��¼</font>';
	//	htmlOne = '������ʷ��¼';
	//}

	objOne.innerHTML = htmlOne;
	objTwo.innerHTML = htmlTwo;

}

function showHistory()
{
	document.getElementById('historyId').className = 'menu_d';
	var url = window.location.href;
	var start = url.indexOf('hiscx.htm');
	if (start > 0)
	{
		return;
	}
	document.getElementById('history').style.display = 'block';
}

function hideHistory()
{
	document.getElementById('history').style.display = 'none';
	document.getElementById('historyId').className = '';
}

function isConfirm()
{
	if(confirm('ȷ�������ʷ��ѯ��')){
		delCookie('tools');
		if(document.getElementById('ulOne') && document.getElementById('ulTwo'))
		{
			document.getElementById('ulOne').innerHTML = '';
			document.getElementById('ulTwo').innerHTML = '';
			document.getElementById('clear').innerHTML = '���ʹ�ù��Ĺ���   <font color="#666666">������ʷ��ѯ��¼</font>';
		}

		if(document.getElementById('history'))
		{
			document.getElementById('history').innerHTML = '<dd class="popMore" style="display:block;text-align:center;width:100%;">������ʷ��ѯ��¼</dd>';
		}
		//location.reload();
		return true;
	}else{
		return false;
	}
}

function setHistory(id)
{
	var toolsValue = getCookie('tools');
	if(toolsValue)
	{
		var toolsArr = toolsValue.split('|');
		var len = toolsArr.length;
		var tmp = '';
		toolsValue = '';
		for(var i=0; i< len; i++){
			if(toolsArr[i] == id)
			{
				continue;
			}

			if(i == 0){
				toolsValue += toolsArr[i];
			}else{
				toolsValue += '|' + toolsArr[i];
			}
		}

		if(toolsValue){
			if(toolsValue.substr(0,1) == '|')
			{
				toolsValue = id + toolsValue;
			}else{
				toolsValue = id + '|' + toolsValue;
			}

		}else{
			toolsValue = id;
		}

		toolsArr = toolsValue.split('|');
		if(toolsArr.length > 32){
			toolsArr.length = 32;
		}
		toolsValue = toolsArr.join('|');

	}else{
		toolsValue = id;
	}
	setCookie('tools', toolsValue);
	setHistoryHtml();
	return;
}

//дcookies
function setCookie(name,value)
{
	var Days = 300;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//��ȡcookies
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}
//ɾ��cookies
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}




//document.onclick = function(e)//����IE,FF,OPERA
//{
//	e = window.event || e;
//	sE = e.srcElement || e.target;
//		if (sE.tagName == 'P')
//		{
//			sE = sE.parentNode;
//		}
//
//		var id = sE.id;
//		if(id.substr(0,6) == 'tools_'){
//			id = id.substr(6,(id.length - 6));
//			if(id > 0){
//				setHistory(id);
//			}
//		}
//}