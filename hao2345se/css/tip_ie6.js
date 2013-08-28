 /**
 * @function ie升级提示条
 * @namespace 
 * @author zzf
 */ 
(function(document) {
	//判断是否在框架内
	var FrmList=[
		'http://www.2345.com/?4469',
		'http://www.2345.com/?10213',
		'http://www.2345.com/?10867',
		'http://www.2345.com/?8681',
		'http://www.2345.com/?8540',
		'http://www.2345.com/?9606',
		'http://www.2345.com/?11142',
		'http://www.2345.com/?7889',
		'http://www.2345.com/?10841',
		'http://www.2345.com/?8681',
		'http://www.2345.com/?1297',
		'http://www.2345.com/?9038',
		'http://www.2345.com/?11972',
		'http://www.2345.com/?8157',
		'http://www.2345.com/?12420',
		'http://www.2345.com/?17534',
		'http://www.2345.com/?1313',
		'http://www.2345.com/?1216',
		'http://www.2345.com/?2949',
		'http://www.2345.com/?4822',
		'http://www.2345.com/?8540',
		'http://www.2345.com/?b3',
		'http://www.2345.com/?9820',
		'http://www.2345.com/?9790',
		'http://www.2345.com/?7995',
		'http://www.2345.com/?9659',
		'http://www.2345.com/?8899',
		'http://www.2345.com/?9853',
		'http://www.2345.com/?14540',
		'http://www.2345.com/?12411',
		'http://www.2345.com/?14133',
		'http://www.2345.com/?3488',
		'http://www.2345.com/?11111',
		'http://www.2345.com/?14334',
		'http://www.2345.com/?10804',
		'http://www.2345.com/?9611',
		'http://www.2345.com/?12603',
		'http://www.2345.com/?15030',
		'http://www.2345.com/?511'
	]
	var flag=false;
    for(var i=0; i<FrmList.length; i++) {
		if (FrmList[i]===window.location.href) {
			flag=true;
		}
    }
	if (flag) {return}
	//判断是否只是ie内核的外壳浏览器
	var ieShell = false,
	nVersion = navigator.appVersion;
	try {
		if (window.external && window.external.twGetRunPath) {
			var r = external.twGetRunPath();
			if (r && r.toLowerCase().indexOf("360") > -1) {
				ieShell = true
			}
		}
	} catch(e) {}
	if (/2345Explorer/i.test(nVersion) || /Maxthon/i.test(nVersion) || /TheWorld/i.test(nVersion) || /TencentTraveler/i.test(nVersion) || /SE.*MetaSr/i.test(nVersion) || /QQbrowser/i.test(nVersion) || /GreenBrowser/i.test(nVersion) || /360EE/i.test(nVersion)) {
		ieShell = true
	}
	if (ieShell) {return}

	if (ieStore.get('tip_ie6') !== 'off') {
		var div = document.createElement('DIV'),
		firstChildren = document.body.children[0];
		div.className = 'tip_ie6';
		div.innerHTML = '<div class="tip_ie6_in"><a class="ie6_close" id="J_ie6_close" href="javascript:;" target="_self" title="不再提示">X&nbsp;不再提示</a><p>亲爱的用户，近期IE6浏览器<img src="images/ic_ie6.png" />开始了大规模升级活动，这可能会改变您的主页设置，影响您使用。</p><p>建议您将网址导航下载备份到桌面，使用更放心！ <a class="fblue" href="http://126.am/EYlCL0" title="立即下载" target="_self">立即下载》</a></p></div>';
		firstChildren.parentNode.insertBefore(div, firstChildren);
		$("J_ie6_close").onclick = function() {
			ieStore.set({
				'name': 'tip_ie6',
				'val': 'off'
			});
			document.body.removeChild(div);
			event.returnValue = false
		}
	}
} (document));
