function init_dynmark(){if ($('dynmark').innerHTML == ""){$('dynmark').innerHTML = '<h4 class="dm_loading"><span class="loading">���ڸ������ղػ��ע����վ</span></h4>';}try{call_dynmark();setTimeout(function(){if (dm_info.dynmark == 0){dm_info.dynmark = 2;}},10000);}catch(e){init_block(1);left_block.inits.dynmark = 1;}}function call_dynmark(){if (dm_info.dm_ver == 0){dm_info.dm_ver = (s_vars.ver && /^[.0-9]+$/.test(s_vars.ver) && s_vars.ver > "3.0.0.2700") ? 2 : 1;}if (dm_info.cur_st > 1000 && dm_info.hover){dm_info.exectime.st += dm_info.cur_st;}else{dm_info.exectime.gt = get_datetime(1);dm_info.exectime.t1 = (new Date).getTime();dm_info.calltimes++;var e_url_list = e_vars.urls.join("\n");window.external.StartPageCall('getdynamarkcontent',e_url_list);if (wlh.indexOf("abctest") > -1 && wlh.indexOf("debug_dynmark=on") > -1){$("adword").innerHTML = "<textarea style='width:300px;height:40px;'>���������"+dm_info.calltimes+"\t��ʧ������"+(dm_info.calltimes - dm_info.times - 1)+"</textarea>";}}if (dm_info.dynmark != 2){window.setTimeout(call_dynmark,dm_info.cur_st);}}function onGetDynamarkContent(content){if (!s_vars.dym){return false;}dm_info.exectime.t2 = (new Date).getTime();if (wlh.indexOf("abctest") > -1 && wlh.indexOf("debug_dynmark=on") > -1){$("cool").innerHTML = "<textarea style='width:700px;height:600px;'>"+dm_info.times+"\t"+dm_info.dynmark+"\n"+content+"</textarea>";}var s = content.split('\n');var tc = s[0].split("\t");for (var i=0; i<tc.length; i++){if (tc[i].indexOf("=") == -1) continue;var tcc = tc[i].split("=");if (tcc[0] == "TotalCount") dm_info.totalcount = DH.i(strtrim(tcc[1]));if (tcc[0] == "CheckedCount") dm_info.checkedcount = DH.i(strtrim(tcc[1]));if (tcc[0] == "Enable") dm_info.enable = DH.i(strtrim(tcc[1]));}var dm_f = (dm_info.enable == 1 && dm_info.totalcount > 0 && dm_info.dynmark != 2);if (left_block.inits.dynmark == 0){left_block.inits.dynmark = dm_f ? 2 : 1;init_block(1);}if (dm_f){dm_info.dynmark = 1;dm_exec_content_new(content);$("dynmark").onmouseover = function(){dm_info.hover = true;dm_debug_showtime();};$("dynmark").onmouseout = function(){dm_info.hover = false;dm_debug_showtime();};}}function dm_debug_showtime(){if (wlh.indexOf("abctest") > -1 && wlh.indexOf("debug_dynmark=on") > -1){$("urlcate").innerHTML = "<textarea style='width:240px;height:600px;'>��ǰ��ȡʱ������"+dm_info.cur_st+"����\n�Ƿ���ͣ��ȡ��"+(dm_info.hover ? "��" : "��")+"\n���λ�ȡʱ�䣺"+dm_info.exectime.gt+"\n������Ӧʱ�䣺"+(dm_info.exectime.t2 - dm_info.exectime.t1)+"����\n���ν���ʱ�䣺"+(dm_info.exectime.t3 - dm_info.exectime.t2)+"����\n�´λ�ȡʱ�䣺"+dm_info.exectime.st+"�����\n</textarea>";}}function dm_clear_new(id){if ($(id).className.indexOf("entrysite1 dm_bg") > -1){$(id).className = "entrysite1";}if ($(id).getAttribute("dmlink") != ""){$(id).href = $(id).getAttribute("dmlink");}}function dm_check_url(url_dm,url_et){if (inar(dm_info.et_urllist,url_et) > -1){return true;}return false;}function dm_change_entry_url(){var c_obj = $("hotsitearea1").getElementsByTagName("A");var en_dm_len = 0;for (var mi=0; mi<c_obj.length; mi++){var dm_co_f = 1;for (var j=1; j<dm_info.cur.length; j++){if (!(dm_info.cur[j] && dm_info.cur[j].tablink)) continue;if (inar(dm_info.et_urllist,c_obj[mi].href) > -1 && dm_info.cur[j].isunread && dm_info.cur[j].isunread == 1){if (c_obj[mi].className == "entrysite1"){c_obj[mi].className = "entrysite1 dm_bg";}c_obj[mi].setAttribute("dynmark","on");en_dm_len++;if (s_vars.se == "se") c_obj[mi].ondragstart = function(){this.className = "entrysite1";};dm_co_f = 2;}else if (inar(dm_info.ot_urllist,c_obj[mi].href) > -1){if (c_obj[mi].className == "entrysite1"){c_obj[mi].className = "entrysite1 dm_bg1";}c_obj[mi].setAttribute("dynmark","on");en_dm_len++;if (s_vars.se == "se") c_obj[mi].ondragstart = function(){this.className = "entrysite1";};dm_co_f = 2;}}if (dm_co_f == 1 && c_obj[mi].getAttribute("dynmark") == "on"){if (c_obj[mi].className.indexOf("entrysite1 dm_bg") > -1){c_obj[mi].className = "entrysite1";}c_obj[mi].setAttribute("dynmark","");if (s_vars.se == "se") c_obj[mi].ondragstart = null;}}dm_info.entry_dm_len = en_dm_len;}function dm_shine(){if (/dynmark_bg=[0-9a-f]+/.test(wlh)){dm_info.shine_bg = wlh.replace(/^(.*)(dynmark_bg=)([0-9a-f]+)(.*)$/,"$3");}if (dm_info.shine_bg != ""){if (dm_info.shine_iv) clearInterval(dm_info.shine_iv);dm_shine_each(0);dm_info.shine_iv = setInterval('dm_shine_each(1)',10000);}}function dm_shine_each(f){for (var i=0; i<dm_info.shine_id; i++){if ($("dm_shine_"+i)) $("dm_shine_"+i).style.backgroundColor = f == 0 ? ("#"+dm_info.shine_bg) : "#fff";}}function dm_get_icon(){clearTimeout(dm_info.geticon_iv);if (s_var.dm_ldbicon.length == 0 && dm_info.geticon_times < 8){dm_info.geticon_iv = window.setTimeout(dm_get_icon,500);dm_info.geticon_times++;return;}var get_icon = "";var fill_flag = false;var sv_dm_i = s_var.dm_ldblink.length;for (var i=0; i<dm_info.icon.length; i++){if (dm_info.icon[i] != "" || (dm_info.iconurl[i] && dm_info.iconurl[i].indexOf("http") != 0)) continue;var ldb_pos = inar(s_var.dm_ldblink,dm_info.iconurl[i]);var i_pos = inar(e_vars.urls,dm_info.iconurl[i]);if (ldb_pos > -1 && s_var.dm_ldbicon[ldb_pos] && s_var.dm_ldbicon[ldb_pos].indexOf(".sogou.com/") > -1){dm_info.icon[i] = s_var.dm_ldbicon[ldb_pos];fill_flag = true;}else if (i_pos > -1){dm_info.icon[i] = "http://p9.123.sogou.com/favicon/"+e_vars.icons[i_pos];if (sv_dm_i < 50){s_var.dm_ldblink[sv_dm_i] = dm_info.iconurl[i];s_var.dm_ldbicon[sv_dm_i] = dm_info.icon[i];sv_dm_i++;}fill_flag = true;}else{if (get_icon.length < 2000) get_icon += i+"\t"+dm_info.iconurl[i]+"\t";if (sv_dm_i < 50){s_var.dm_ldblink[sv_dm_i] = dm_info.iconurl[i];s_var.dm_ldbicon[sv_dm_i] = "";sv_dm_i++;}}}if (get_icon != ""){var modify_url = "set_v33.php?";modify_url += (s_vars.m != "") ? ("m="+s_vars.m+"&") : "";modify_url += "act=dm_get_icon&";modify_url += "url="+DH.eu(get_icon);ajaf.ajaf_get(s_vars.dm+modify_url,"dm_get_icon_callback");}else if (fill_flag){dm_fill_icon();}}function dm_get_icon_callback(html){var s = html.split("\t");for (var i=0; i<s.length; i+=2){if (!s[i+1]) continue;var s_pos = DH.i(s[i]);dm_info.icon[s_pos] = "http://p9.123.sogou.com/favicon/"+s[i+1];var ldb_pos = inar(s_var.dm_ldblink,dm_info.iconurl[s_pos]);if (ldb_pos > -1){s_var.dm_ldbicon[ldb_pos] = "http://p9.123.sogou.com/favicon/"+s[i+1];}}if (s.length > 0){if (s_var.db = 1 && localdb_vars.fs == 1 && localdb_vars.pt == 1){put_into_localdb("");}}dm_fill_icon();}function dm_fill_icon(){for (var i=0; i<dm_info.icon.length; i++){if (!(dm_info.icon[i] && dm_info.icon[i] != "")) continue;$("dm_icon_"+i).src = dm_info.icon[i];}}function dm_exec_content_new(content){var s = content.split('\n');if (dm_info.totalcount == 0 && dm_info.checkedcount == 0 && dm_info.times < 120){dm_info.times++;$('dynmark').innerHTML = '<h4 class="dm_loading"><span>���޹�ע����վ</span></h4>';return false;}var str_tab = '';var str_cont = '';var str = '';var tabid = 0;var tabname = '';var tablink = '';var icon_i = dm_info.iconurl.length;var cont_num = 0;var open_flag = 1;var isunread_flag = 1;dm_info.cur = [];dm_info.shine_id = 0;var dm_spline = false;for (var i=1;i<s.length;i++) {if (s[i].indexOf("<CHANGE_SITE>") > -1){var et_arr = s[i].substring(s[i].indexOf("<CHANGE_SITE>")+13).split("\t");for (var et_i=0; et_i<et_arr.length; et_i++){et_arr[et_i] = strtrim(et_arr[et_i]);}dm_info.et_urllist = et_arr;continue;}else if (s[i].indexOf("<OTHER_SITE>") > -1){var ot_arr = s[i].substring(s[i].indexOf("<OTHER_SITE>")+12).split("\t");for (var ot_i=0; ot_i<ot_arr.length; ot_i++){ot_arr[ot_i] = strtrim(ot_arr[ot_i]);}dm_info.ot_urllist = ot_arr;continue;}var t = s[i].split("\t");if ((t.length == 3 && t[0].indexOf("http://") == -1 && (t[1].indexOf("http://") > -1 || t[1].indexOf("https://") > -1)) || (t[0].indexOf("<T>") > -1 && (t[2].indexOf("http://") > -1 || t[2].indexOf("https://") > -1) && t[0].indexOf("<T><Read>") == -1)) {if (cont_num > 0){dm_info.cur[tabid] = {"tabname":tabname,"tablink":tablink,"tabstatus":1,"isunread":isunread_flag};isunread_flag = 1;open_flag = 1;for (var j=0; j<dm_info.last.length; j++){if (!dm_info.last[j] || !dm_info.last[j].tabname || !dm_info.last[j].tabstatus) continue;if (dm_info.last[j].tabname == tabname && dm_info.last[j].tabstatus == 2){dm_info.cur[tabid].tabstatus = 2;open_flag = 2;dm_info.tobeopen.push(tabid);}}str_tab += '<span class="num">' + cont_num + '</span></h2>';var dm_height = (open_flag == 2 || cont_num < dm_info.open) ? (cont_num*22) : (dm_info.open * 22);str_cont = '<div id="dm_cont_'+tabid+'" class="dm_cont" style="height:'+dm_height+'px;" onclick="dm_checkopen()">'+str_cont+'</div>';if (cont_num > dm_info.open){str_cont += '<h3><span id="dm_open_'+tabid+'" class="'+(open_flag == 1 ? 'open' : 'close')+'" num="' + cont_num + '" onclick="dm_open('+tabid+')">'+(open_flag == 1 ? 'չ���б�' : '�����б�')+'</span></h3>';}str += str_tab + str_cont;str_tab = '';str_cont = '';cont_num = 0;}tabid++;tabname = t.length != 3 ? strtrim(t[3]) : strtrim(t[2]);tablink = t.length != 3 ? strtrim(t[2]) : strtrim(t[1]);isunread_flag = (t[0].indexOf("<Read>") > -1) ? 0 : 1;var tabicon = '';var icon_pos = inar(dm_info.iconurl,tablink);if (icon_pos > -1){tabicon = dm_info.icon[icon_pos];}else{dm_info.iconurl[icon_i] = tablink;dm_info.icon[icon_i] = '';icon_pos = icon_i;icon_i++;}tabicon = tabicon == '' ? 'http://p0.123.sogou.com/favicon/default_page.ico' : tabicon;var tabtitle = strtrim(t.length != 3 ? t[1] : t[0]).replace(/<[^>]+>/g,"");str_tab += '<h2';if (dm_spline) str_tab += ' class="dm_spline"';else dm_spline = true;str_tab += '><span class="icon"><img id="dm_icon_'+icon_pos+'" src="'+tabicon+'" width="16" height="16" /></span><span class="title" href="'+tablink.replace(/[\"\']/g,"")+'" tabid="'+tabid+'" onclick="dm_click_or_drag(this)" ondragend="dm_click_or_drag(this);" title="'+tabtitle.replace(/[\"\']/g,"")+'">'+tabtitle+'</span>';}else if (t.length == 3){var t2_f = "";if (t[2].indexOf("_") > -1){var t2_arr = t[2].split("_");t[2] = t2_arr[0];t2_f = t2_arr[1];}str_cont += '<span class="'+(DH.i(strtrim(t[2])) == 1 ? 'read' : "unread")+'"';if (DH.i(Math.random()*3) < 1){str_cont += ' id="dm_shine_'+dm_info.shine_id+'"';dm_info.shine_id++;}str_cont += '><ins href="'+strtrim(t[0]).replace(/[\"\']/g,"")+'" title="'+strtrim(t[1]).replace(/[\"\']/g,"")+'" '+(t2_f ? (' dmitemid="'+t2_f+'"') : '')+'target="_blank" tabid="'+tabid+'" onclick="dm_click_or_drag(this);" ondragend="dm_click_or_drag(this);">'+strtrim(t[1])+'</ins></span>';cont_num++;}}if (cont_num > 0){dm_info.cur[tabid] = {"tabname":tabname,"tablink":tablink,"tabstatus":1,"isunread":isunread_flag};isunread_flag = 1;open_flag = 1;for (var j=0; j<dm_info.last.length; j++){if (!dm_info.last[j] || !dm_info.last[j].tabname || !dm_info.last[j].tabstatus) continue;if (dm_info.last[j].tabname == tabname && dm_info.last[j].tabstatus == 2){dm_info.cur[tabid].tabstatus = 2;open_flag = 2;dm_info.tobeopen.push(tabid);}}str_tab += '<span class="num">' + cont_num + '</span></h2>';var dm_height = (open_flag == 2 || cont_num < dm_info.open) ? (cont_num*22) : (dm_info.open * 22);str_cont = '<div id="dm_cont_'+tabid+'" class="dm_cont" style="height:'+dm_height+'px;" onclick="dm_checkopen()">'+str_cont+'</div>';if (cont_num > dm_info.open){str_cont += '<h3><span id="dm_open_'+tabid+'" class="'+(open_flag == 1 ? 'open' : 'close')+'" num="' + cont_num + '" onclick="dm_open('+tabid+')">'+(open_flag == 1 ? 'չ���б�' : '�����б�')+'</span></h3>';}str += str_tab + str_cont + '<h3 style="height:14px;">&nbsp;</h3>';cont_num = 0;}for (var j=1; j<dm_info.cur.length; j++){dm_info.last[j] = dm_info.cur[j];}dm_info.times++;if (str != $('dynmark').innerHTML) {try{dm_change_entry_url();}catch(e){}}if (str != '' && str != $('dynmark').innerHTML) {$('dynmark').innerHTML = str;dm_info.cur_st = (dm_info.checkedcount < dm_info.totalcount) ? 5000 : 30000;dm_get_icon();}else{if ((content == "" || strtrim(s[1]) == "" || str == "") && ($('dynmark').innerHTML == "" || $('dynmark').innerHTML.indexOf("dm_loading") > -1)){$('dynmark').innerHTML = (dm_info.times > 30) ? '<h4 class="dm_loading"><span>���޹�ע��վ�ĸ���</span></h4>' : '<h4 class="dm_loading"><span class="loading">����ע����վ���ڸ���('+dm_info.times+')</span></h4>';}else if (content == "" || strtrim(s[1]) == "" || str == ""){$('dynmark').innerHTML = '<h4 class="dm_loading"><span>���޹�ע��վ�ĸ���</span></h4>';}dm_info.cur_st = (dm_info.times > 30) ? 5000 : 1000;}if (wlh.indexOf("abctest") > -1 && wlh.indexOf("debug_dynmark=on") > -1){$("hotsite2").innerHTML = "<textarea style='width:700px;height:120px;'>"+$('dynmark').innerHTML+"</textarea>";}dm_info.exectime.st = dm_info.cur_st;dm_info.exectime.t3 = (new Date).getTime();dm_debug_showtime();}function dm_open(tid){if (!$("dm_open_"+tid)) return false;if ($("dm_open_"+tid).className == "open"){$("dm_cont_"+tid).style.overflow = "auto";$("dm_cont_"+tid).style.height = DH.i($("dm_open_"+tid).getAttribute("num")) * 22 + "px";$("dm_open_"+tid).className = "close";$("dm_open_"+tid).innerHTML = "�����б�";dm_info.cur[tid].tabstatus = 2;dm_info.last[tid].tabstatus = 2;}else if ($("dm_open_"+tid).className == "close"){$("dm_cont_"+tid).style.overflow = "hidden";$("dm_cont_"+tid).style.height = dm_info.open * 22 + "px";$("dm_open_"+tid).className = "open";$("dm_open_"+tid).innerHTML = "չ���б�";dm_info.cur[tid].tabstatus = 1;dm_info.last[tid].tabstatus = 1;}}function dm_checkopen(evt){var evt = evt ? evt : window.event;var srcElem=(evt.target)?evt.target:evt.srcElement;var sname = srcElem.tagName.toUpperCase();if (sname == "SPAN") srcElem = srcElem.parentNode;else if (sname != "DIV") return false;if (srcElem.id.indexOf("dm_cont_") > -1){var tid = srcElem.id.substring(8);dm_open(tid);}}function dm_click_or_drag(obj){if (obj.parentNode.className != "dm_spline") obj.parentNode.className = "read";var tabid = DH.i(obj.getAttribute('tabid'));var tablink = (dm_info.cur[tabid] && dm_info.cur[tabid].tablink) ? dm_info.cur[tabid].tablink : '';try{if (dm_info.dm_ver == 2 && obj.getAttribute("dmitemid")){window.external.StartPageCall("opendynamarklink",obj.getAttribute('href')+"\n"+tablink+"\n"+obj.getAttribute("dmitemid"));}else{window.external.StartPageCall("opendynamarklink",obj.getAttribute('href')+"\n"+tablink);}dm_pingclick(obj.innerHTML,obj.getAttribute('href'));}catch (e){}return false;}function dm_pingclick(linkname,address){var ds ="sp:123\t1\tclick\t"+linkname.replace(/<[^>]+>/g,"")+"\t"+DH.eu(address)+"\tdynmark\t123";pb_vars.en_dm = 2;ping_init(2);ping_ot(ds);}var dm_info = {"calltimes":0,"dynmark":0,"cur":[],"cur_st":1000,"last":[],"open":3,"inits":true,"tobeopen":[],"times":0,"totalcount":0,"checkedcount":0,"enable":1,"shine_id":0,"shine_bg":"ffffb3","hover":false,"iconurl":[],"icon":[],"exectime":{"gt":"","st":0,"t1":0,"t2":0,"t3":0,"t4":0,"t5":0},"geticon_iv":null,"geticon_times":0,"entry_dm_len":0,"et_urllist":[],"ot_urllist":[],"dm_ver":0};init_dynmark();