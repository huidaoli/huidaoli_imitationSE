var d_host = "http://d.2345.com/star";
var	nowpage = 1;
var	nowregion = '';
var	nowfirst = '';
var	keyword = '';
var totalpage = 0;
var nocache = 0;
var rownum = 0;

init_hotwords();
init_link();
init_hot();
init_hotso();
init_so();

function init_so() {
	star_so();
}

function star_so(p, region, first, q) {
	if (typeof(p) == "undefined") {
		p = 1;
	}
	if (typeof(region) == "undefined") {
		region = "";
	}
	if (typeof(first) == "undefined") {
		first = "";
	}
	if (typeof(q) == "undefined") {
		q = "";
	}
	if (q == '请输入明星名字') {
		q = "";
	}
	
	nowpage = p;
	nowregion = region;
	nowfirst = first;
	keyword = q;

	var url_params = "p="+nowpage+"&region="+nowregion+"&first="+nowfirst+"&q="+keyword;
	m.loadJs(d_host+"/dispatch.php?"+url_params+"&nocache="+nocache,'dispatch');
	return false;	
}

function star_set_list(list, count) {
	var region_aObj = m.g("sort_region").childNodes;
	for(var i=0;i<region_aObj.length;i++) {
		if (nowregion == region_aObj[i].innerHTML) {
			region_aObj[i].className = "red2";
		} else {
			region_aObj[i].className = "";
		}
	}
	if (nowregion == "") {
		m.g("region_all").className = "red2";
	}

	var first_aObj = m.g("sort_first").childNodes;
	for(var i=0;i<first_aObj.length;i++) {
		if (nowfirst == first_aObj[i].innerHTML) {
			first_aObj[i].className = "red2";
		} else {
			first_aObj[i].className = "";
		}
	}
	if (nowfirst == "") {
		m.g("first_all").className = "red2";
	}

	totalpage = Math.ceil(count/40);
	star_set_pagestr();

	m.g("allstar_div").innerHTML = "";
	var table = document.createElement("TABLE");
	table.width = "100%";
	table.border = "0";
	table.setAttribute("cellspacing", "0");
	table.setAttribute("cellpadding", "0");
	table.className = "allstar";
	if (list) {
		var newRow;
		for (var i=0;i<list.length;i++) {
			if (i%4	== 0) {
				newRow = table.insertRow(-1);
				rownum++;
			}
			if ((i+1)%8 == 0) {
				newRow.className = "bbg";
			}			
			var k = i%4;
			var newCol = newRow.insertCell(k);
			newCol.width = "216";
			var tmp = "";
			tmp += '<dl><dt><a href="yule_detail.htm#'+list[i].id+'" title="'+list[i].cname+'">'+list[i].cname+'</a></dt><dd>';
			if (list[i].weibo != "") {
				tmp += '<a href="" onclick="window.open(\''+list[i].weibo+'\');return false;">微博</a>';
			} else {
				tmp += '<a onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;">微博</a>';				
			}
			if (list[i].haspic) {
				tmp += '<a href="'+list[i].picurl+'">写真</a>';
			} else {
				tmp += '<a onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;">写真</a>';
			}
			if (list[i].hastv) {
				tmp += '<a href="'+list[i].tvurl+'">电视</a>';
			} else {
				tmp += '<a onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;">电视</a>';
			}
			if (list[i].hasmovie) {
				tmp += '<a href="'+list[i].movieurl+'" class="mrn2">电影</a>';
			} else {
				tmp += '<a onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;" class="mrn2">电影</a>';
			}
			tmp += '</dd></dl';
			if ((k+1)%4 == 0) {
				newCol.className = "nobrt";
			}
			newCol.innerHTML = tmp;
		}
		if ((k+1) < 4) {
			for(var i=k+1;i<4;i++) {
				var newCol = newRow.insertCell(i);
				if (i%4 == 0) {
					newCol.className = "nobrt";
				}
				newCol.innerHTML = '<dl><dt style="border:0px;">&nbsp;</dt><dd>&nbsp;</dd></dl></td>';
			}
		}
	}
	m.g("allstar_div").appendChild(table);
}

function init_hotwords() {
	document.write('<script type="text/javascript" src="'+d_host+'/hot_search/hot_search.js?'+new Date().getHours()+'"></script>');
}

function star_set_hotwords(hotwords) {
	if (hotwords) {
		for (var i=0;i<hotwords.length;i++) {
			if (i >= 6) {
				break;
			}
			var aObj = document.createElement("A");
			aObj.href = hotwords[i].url;
			aObj.appendChild(document.createTextNode(hotwords[i].w));
			document.getElementById("hotwords").appendChild(aObj);
		}
	}
}

function init_hot() {
	document.write('<script type="text/javascript" src="'+d_host+'/hot/hot.js?'+new Date().getHours()+'"></script>');
}

function star_set_hot(hotstar) {
	var ul_html = "";
	if (hotstar) {
		var newRow;
		var table = m.g("hot_star_table");
		for (var i=0;i<hotstar.length;i++) {
			if (i == 30) {
				break;
			}
			if (i < 5) {
				ul_html += '<li><dl><dt><a href="yule_detail.htm#'+hotstar[i].id+'" title="'+hotstar[i].cname+'"><img src="'+hotstar[i].hotlogo+'" /></a></dt><dd><b><a href="yule_detail.htm#'+hotstar[i].id+'" title="'+hotstar[i].cname+'">'+hotstar[i].cname+'</a></b>';
				if (hotstar[i].weibo != "") {
					ul_html += '<input name="" type="button" value="微博" onclick="window.open(\''+hotstar[i].weibo+'\');"/>';
				} else {
					ul_html += '<input name="" type="button" value="微博" disabled="disabled" style="color:gray;"/>';
				}
				if (hotstar[i].haspic) {
					ul_html += '<input name="" type="button" value="写真" onclick="window.open(\''+hotstar[i].picurl+'\');"/><br />';
				} else {
					ul_html += '<input name="" type="button" value="写真" disabled="disabled" style="color:gray;"/><br />';
				}
				if (hotstar[i].hastv) {
					ul_html += '<input name="" type="button" value="电视"  onclick="window.open(\''+hotstar[i].tvurl+'\');"/>';
				} else {
					ul_html += '<input name="" type="button" value="电视" disabled="disabled" style="color:gray;"/>';
				}
				if (hotstar[i].hasmovie) {
					ul_html += '<input name="" type="button" value="电影"  onclick="window.open(\''+hotstar[i].movieurl+'\');"/>';
				} else {
					ul_html += '<input name="" type="button" value="电影" disabled="disabled" style="color:gray;"/>';
				}
				ul_html += '</dd></dl></li>';
			} else {
				if (i%5 == 0) {
					newRow = table.insertRow(-1);
				}
				var tmp = '';
				tmp += '<span><b>';
				if (hotstar[i].weibo != "") {
					tmp += '<input name="" type="button" class="btn_wb"  value="微博" onclick="window.open(\''+hotstar[i].weibo+'\');"/>';
				} else {
					tmp += '<input name="" type="button" class="btn_wb"  value="微博" disabled="disabled" style="color:gray;"/>';
				}
				tmp += '<a href="yule_detail.htm#'+hotstar[i].id+'" title="'+hotstar[i].cname+'">'+hotstar[i].cname+'</a></b><i>';
				if (hotstar[i].haspic) {
					tmp += '<a href="'+hotstar[i].picurl+'">写真</a>';
				} else {
					tmp += '<a onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;">写真</a>';
				}
				if (hotstar[i].hastv) {
					tmp += '<a href="'+hotstar[i].tvurl+'">电视</a>';
				} else {
					tmp += '<a onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;">电视</a>';
				}
				if (hotstar[i].hasmovie) {
					tmp += '<a class="mrn" href="'+hotstar[i].movieurl+'">电影</a>';
				} else {
					tmp += '<a class="mrn" onclick="return false;" style="color:#aaa;cursor:auto;text-decoration:none;">电影</a>';
				}
				tmp += '</i></span>';
				
				var k = i%5;
				var newCol = newRow.insertCell(k);
				if ((k+1)%5 == 0) {
					newCol.className = "nobrt";
				}
				newCol.innerHTML = tmp;
			}
		}
	}
	m.g("hot_star_ul").innerHTML = ul_html;
}

function init_link() {
	document.write('<script type="text/javascript" src="'+d_host+'/link/link.js?'+new Date().getHours()+'"></script>');
}

function star_set_link(link_html) {
	m.g("link_box").innerHTML = link_html;
}

function init_hotso() {
	document.write('<script type="text/javascript" src="'+d_host+'/hot_search/hot_star.js?'+new Date().getHours()+'"></script>');	
}

function star_set_hotso(hotso_html) {
	m.g("hotso").innerHTML = hotso_html;
}

function star_set_pagestr() {
	var pagestr = '';
	var start = nowpage-4;
	var end = nowpage+4;
	if (start < 1) {
		start = 1;
	}
	if (start == 1) {
		end = start + 8;
	}
	if (end > totalpage) {
		end = totalpage;
	}
	if (end == totalpage) {
		start = end - 8;
	}
	if (start < 1) {
		start = 1;
	}
	
	if (nowpage > 1) {
		pagestr += '<a onclick="return star_so(1,\''+nowregion+'\',\''+nowfirst+'\',\''+keyword+'\');" href="javascript:void(0)" target="_self">首页</a>';
		pagestr += '<a class="last" onclick="return star_so('+(parseInt(nowpage)-1)+',\''+nowregion+'\',\''+nowfirst+'\',\''+keyword+'\');" href="javascript:void(0)" target="_self">上一页</a>';
	}
	for(var i=start;i<=end;i++) {
		if (nowpage == i) {
			pagestr += '<a class="cur" style="color:red" onclick="return star_so('+i+',\''+nowregion+'\',\''+nowfirst+'\',\''+keyword+'\');" href="javascript:void(0)" target="_self">'+i+'</a>'
		} else {
			pagestr += '<a onclick="return star_so('+i+',\''+nowregion+'\',\''+nowfirst+'\',\''+keyword+'\');" href="javascript:void(0)" target="_self">'+i+'</a>'
		}
	}
	if (nowpage < totalpage) {
		pagestr += '<a class="next" onclick="return star_so('+(parseInt(nowpage)+1)+',\''+nowregion+'\',\''+nowfirst+'\',\''+keyword+'\');" href="javascript:void(0)" target="_self">下一页</a>';
		pagestr += '<a onclick="return star_so('+totalpage+',\''+nowregion+'\',\''+nowfirst+'\',\''+keyword+'\');" href="javascript:void(0)" target="_self">尾页</a>';
	}
	pagestr += ' 共'+totalpage+'页 到 <input type="text" name="" class="ipt_page" id="goto_page" onkeydown="if(event.keyCode==\'13\'){goto_page();}" value="'+nowpage+'"> 页 <input type="button" value="确定" name="" class="btn_page" onclick="goto_page()"></div><div class="clear">';
	m.g('page_str').innerHTML = pagestr;	
}

function goto_page() {
	var pnum = m.g('goto_page').value;
	if (pnum == '') {
		return;
	}
	pnum = parseInt(pnum);
	if (pnum == nowpage) {
		return;
	}
	if (pnum < 1) {
		pnum = 1;
	}
	if (pnum > totalpage) {
		pnum = totalpage;
	}
	star_so(pnum, nowregion, nowfirst, keyword);
}

function soFocus() {
	var default_keyword = '请输入明星名字';
	var val = m.g("so").value;
	if (val == default_keyword) {
		m.g("so").value = "";
	}
}

function soBlur() {
	var default_keyword = '请输入明星名字';
	var val = m.g("so").value;
	if (val == "") {
		m.g("so").value = default_keyword;
	}
}