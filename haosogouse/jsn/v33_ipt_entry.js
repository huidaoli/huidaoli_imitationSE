var mouseOffset = null;var iMouseDown = false;var lMouseState = false;var dragObject = null;var DragDrops = [];var curTarget = null;var lastTarget = null;var isA = false;var dragHelper = null;var tempDiv = null;var rootParent = null;var rootSibling = null;var beforeid = null;Number.prototype.NaN0=function(){return isNaN(this)?0:this;};function CreateDragContainer(){var cDrag = DragDrops.length;DragDrops[cDrag] = [];for(var i=0; i<arguments.length; i++){var cObj = arguments[i];if (!cObj) continue;DragDrops[cDrag].push(cObj);cObj.setAttribute('DropObj',cDrag);for(var j=0; j<cObj.childNodes.length; j++){if(cObj.childNodes[j].nodeName=='#text') continue;cObj.childNodes[j].setAttribute('DragObj',cDrag);}}}function resetDragContainer() { for (var k=0;k<DragDrops.length; k++)for(var i=0; i<DragDrops[k].length; i++){var cObj = DragDrops[k][i];for(var j=0; j<cObj.childNodes.length; j++){if(cObj.childNodes[j].nodeName=='#text') continue;cObj.childNodes[j].setAttribute('DragObj',k);}}}function mouseCoords(ev){if(ev.pageX || ev.pageY){return {x:ev.pageX,y:ev.pageY};}return {x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,y:ev.clientY + document.body.scrollTop - document.body.clientTop};}function getMouseOffset(target,ev){ev = ev || window.event;var docPos = getPosition(target);var mousePos = mouseCoords(ev);return {x:mousePos.x - docPos.x,y:mousePos.y - docPos.y};}function getPosition(e){var left = 0;var top = 0;while (e.offsetParent){left += e.offsetLeft + (e.currentStyle?(parseInt(e.currentStyle.borderLeftWidth)).NaN0():0);top += e.offsetTop + (e.currentStyle?(parseInt(e.currentStyle.borderTopWidth)).NaN0():0);e = e.offsetParent;}left += e.offsetLeft + (e.currentStyle?(parseInt(e.currentStyle.borderLeftWidth)).NaN0():0);top += e.offsetTop + (e.currentStyle?(parseInt(e.currentStyle.borderTopWidth)).NaN0():0);return {x:left,y:top};}function setLine(cont) {var n1 = 0;var n0 = -1;var nd = null;for(var i=0;i<cont.childNodes.length; i++){var n = cont.childNodes[i];if (n.id=='line' && n1==30) return; if (n.id.indexOf('e_')>=0 && n.style.display!='none' ) {n1++;if (n1==31) nd = n;}}if (nd!=null) cont.insertBefore($('line'),nd);}function mouseMove(ev){ev = ev || window.event;var target = ev.target || ev.srcElement;if (target.className=='entryimg'){target = target.parentNode;} var mousePos = mouseCoords(ev);if(lastTarget && (target!==lastTarget)){var origClass = lastTarget.getAttribute('origClass');if (origClass) lastTarget.className = origClass;}var dragObj = target.getAttribute('DragObj');if(dragObj!=null){if(target!=lastTarget){var oClass = target.getAttribute('overClass');if(oClass){target.setAttribute('origClass',target.className);target.className = oClass;}}if(iMouseDown && !lMouseState){curTarget = target;rootParent = curTarget.parentNode;rootSibling = curTarget.nextSibling;mouseOffset = getMouseOffset(target,ev);for(var i=0; i<dragHelper.childNodes.length; i++) dragHelper.removeChild(dragHelper.childNodes[i]);var newobj = curTarget.cloneNode(true);dragHelper.appendChild(newobj);dragHelper.style.display = 'block';var dragClass = curTarget.getAttribute('dragClass');if(dragClass){dragHelper.firstChild.className = dragClass;}dragHelper.firstChild.removeAttribute('DragObj');var dragConts = DragDrops[dragObj];curTarget.setAttribute('startWidth',parseInt(curTarget.offsetWidth));curTarget.setAttribute('startHeight',parseInt(curTarget.offsetHeight));curTarget.style.display = 'none';curTarget.className = curTarget.className+' onmove';setLine(DragDrops[0][0]);curTargetInt = parseInt(curTarget.id.substring(2));for(var i=0; i<dragConts.length; i++){with(dragConts[i]){var pos = getPosition(dragConts[i]);setAttribute('startWidth',parseInt(offsetWidth));setAttribute('startHeight',parseInt(offsetHeight));setAttribute('startLeft',pos.x);setAttribute('startTop',pos.y);}for(var j=0; j<dragConts[i].childNodes.length; j++){with(dragConts[i].childNodes[j]){if((nodeName=='#text') || (dragConts[i].childNodes[j]==curTarget)) continue;var pos = getPosition(dragConts[i].childNodes[j]);setAttribute('startWidth',parseInt(offsetWidth));setAttribute('startHeight',parseInt(offsetHeight));setAttribute('startLeft',pos.x);setAttribute('startTop',pos.y);}}}}}if(curTarget){dragHelper.style.top = (mousePos.y - mouseOffset.y)+'px';dragHelper.style.left = (mousePos.x - mouseOffset.x)+'px';var dragConts = DragDrops[curTarget.getAttribute('DragObj')];var activeCont = null;var xPos = mousePos.x - mouseOffset.x + (parseInt(curTarget.getAttribute('startWidth')) /2);var yPos = mousePos.y - mouseOffset.y + (parseInt(curTarget.getAttribute('startHeight'))/2);for(var i=0; i<dragConts.length; i++){with(dragConts[i]){var x0 = parseInt(getAttribute('startLeft'));var y0 = parseInt(getAttribute('startTop'));var w0 = parseInt(getAttribute('startWidth'));var h0 = parseInt(getAttribute('startHeight'));if((x0 < xPos) && (y0 < yPos) && (x0+w0>xPos) && (y0+h0>yPos)) {activeCont = dragConts[i];break;}}}if(activeCont){var beforeNode = null;for(var i=activeCont.childNodes.length-1; i>=0; i--){if (curTarget != activeCont.childNodes[i]){with(activeCont.childNodes[i]){if(nodeName=='#text') continue;if (id && id=='line') continue;var x0 = parseInt(getAttribute('startLeft'));var y0 = parseInt(getAttribute('startTop'));var w0 = parseInt(getAttribute('startWidth'));var h0 = parseInt(getAttribute('startHeight'));if (x0+w0+5 >= xPos && y0+h0+5>= yPos && x0<=xPos && y0<=yPos){beforeNode = activeCont.childNodes[i];}}}}if(beforeNode){beforeNode.getAttribute('startHeight');try {beforeNodeInt = parseInt(beforeNode.id.substring(2)); } catch (e) {beforeNodeInt = -1;};if(beforeNode!=curTarget.nextSibling){activeCont.insertBefore(curTarget,beforeNode);beforeid = beforeNode.id;};}if(curTarget.style.display!=''){curTarget.style.display = '';}setLine(activeCont);} else {DragDrops[0][0].insertBefore(curTarget,rootSibling);if(curTarget.style.display!=''){curTarget.style.display = '';}setLine(DragDrops[0][0]);beforeid = null;}}lMouseState = iMouseDown;lastTarget = target;lMouseState = iMouseDown;var target = ev.target || ev.srcElement;if (curTarget) return false;return true;}function mouseUp(ev){var s = '';if(curTarget){dragHelper.style.display = 'none';curTarget.className = curTarget.className.replace(/\sonmove/,'');s = curTarget.id;if(curTarget.style.display == 'none'){if(rootSibling){rootParent.insertBefore(curTarget,rootSibling);} else {rootParent.appendChild(curTarget);}}curTarget.style.display = '';setLine(DragDrops[0][0]);}curTarget = null;iMouseDown = false;var b = beforeid;beforeid=null;if (s!=null && b !='') {domoventry(s,b);}}function mouseDown(ev){ev = ev || window.event;var target = ev.target || ev.srcElement;if (target.className=='entryimg'){iMouseDown = true;return false;}return true;}function openhotsitearea(){if (entry_vars.noinit){init_entry_edit();entry_vars.noinit = false;}var est = entry_vars.entry_status;if (est == 1) $("onup_1").checked = true;else $("onup_0").checked = true;initEntryEdit();resetDragContainer();if (est == 5){$("defshow_entry").style.display = "inline";}$("hover").style.height = document.body.clientHeight + "px";$("hovercont").style.display="block";$("hoverbg").style.display="block";$("hover").style.display="block";}function start_use_entry(){entry_vars.entry_status = entry_vars.auto_update == "off" ? 1 : 0;callfunc("","entry_show","on");entry_show_view();initEntryText();}function hidehotsitearea(){var es_tmp = -1;var est = entry_vars.entry_status;for (var i=0; i<2; i++){var es = $("onup_"+i);if (es && es.checked == true) es_tmp = es.value;}if (es_tmp != est && est < 2 && es_tmp != -1 && entry_vars.len > 0){if (es_tmp == 0) callfunc("","auto_update","");else if (es_tmp == 1) callfunc("","manu_update","");entry_vars.entry_status = es_tmp;if (es_tmp == 0) entry_vars.auto_update = "on";else if (es_tmp == 1) entry_vars.auto_update = "off";}initEntryText();$("hover").style.display="none";try{if ($("hotandins_ts")){$("hotandins_ts").innerHTML = "hotandins_ts="+DH.t();}put_into_localdb("");}catch(e){};}function closehotsitearea(){initEntryText();$("hover").style.display="none";}function getEntryEditText(i){var atext = '<a id="e_'+i+'" class="entrysite" dragClass="entrysite_drag" href="javascript:void(0);" title="'+e_vars.titles[i].replace(/\"/g,"'")+" \n "+e_vars.urls[i].replace(/\"/g,"'")+'"><span class="entrydel" onclick="clickdelete('+i+');">&nbsp;</span><span class="entryimg">&nbsp;</span><span class="entrytext" onclick="clickedit('+i+');">'+e_vars.shorts[i].replace(/</g,"&lt;").replace(/>/g,"&gt;")+'</span></a>';return atext;}function initEntryEdit(){var s = "";var lc = 0;for (i=0;i<e_vars.urls.length && lc<40;i++){if (e_vars.blacks[i]!=1){s+=getEntryEditText(i);lc+=1;if (lc == 30){s+="<div id='line' class='line'><div>����չ��������ַ���뽫����ק���Ϸ�����ͨ����</div></div>";}}}$("entryedit").style.height = (lc < 30) ? "180px" : "266px";entry_vars.edit_h = (lc >= 30) ? 418 : 332;if (lc < 40){s+= '<a id="addentrysite" class="entrysite" href="javascript:void(0);" title="��������ַ"><span></span><span class="entrytext" onclick="clicknew()">��������ַ</span></a>';}$("entryedit").innerHTML = s;}function callfunc_edit(url,act,arg,_short,flag){var modify_url = "set_v33.php?";modify_url += (s_vars.apid != "") ? ("apid="+s_vars.apid+"&") : "";modify_url += (s_vars.m != "") ? ("m="+s_vars.m+"&") : "";modify_url += "from=mysql&";modify_url += (url != 0) ? ("url="+encodeURIComponent(url)+"&") : "";if (flag != 0){modify_url += "oriurl="+encodeURIComponent(entry_vars.oriurl)+"&";}modify_url += (act != "") ? ("act="+act+"&") : "";modify_url += (arg != "" || arg == 0) ? ("arg="+arg+"&") : "";modify_url += (_short != "") ? ("short="+encodeURIComponent(_short)+"&") : "";modify_url += "c="+DH.t();ajaf.ajaf_get(s_vars.dm+modify_url,"modify_callback");var desc = "sp:123\t0\tcall\t"+act;ping_ot(desc);}function swapentry(i,j){var s;s = e_vars.urls[i]; e_vars.urls[i] = e_vars.urls[j]; e_vars.urls[j] = s;s = e_vars.titles[i]; e_vars.titles[i] = e_vars.titles[j]; e_vars.titles[j] = s;s = e_vars.icons[i]; e_vars.icons[i] = e_vars.icons[j]; e_vars.icons[j] = s;s = e_vars.shorts[i]; e_vars.shorts[i] = e_vars.shorts[j]; e_vars.shorts[j] = s;s = e_vars.blacks[i]; e_vars.blacks[i] = e_vars.blacks[j]; e_vars.blacks[j] = s;}function deleteentry(i){e_vars.ids.splice(i,1);e_vars.urls.splice(i,1);e_vars.titles.splice(i,1);e_vars.icons.splice(i,1);e_vars.shorts.splice(i,1);e_vars.blacks.splice(i,1);}function moveentry(i,j){var s;s = e_vars.urls[i]; e_vars.urls.splice(i,1); e_vars.urls.splice(j,0,s);s = e_vars.titles[i]; e_vars.titles.splice(i,1); e_vars.titles.splice(j,0,s);s = e_vars.shorts[i]; e_vars.shorts.splice(i,1); e_vars.shorts.splice(j,0,s);s = e_vars.icons[i]; e_vars.icons.splice(i,1); e_vars.icons.splice(j,0,s);s = e_vars.blacks[i]; e_vars.blacks.splice(i,1); e_vars.blacks.splice(j,0,s);}function clickedit(i){$("hover_edit_h3").innerHTML = "�޸���ַ";$("hover_edit_h3").title = i;$("hover_edit_url").value = e_vars.urls[i];$("hover_edit_short").value = e_vars.shorts[i].replace(/^\s+|\s+$/g,"");$("hoverbg_editbg").style.height = entry_vars.edit_h + "px";$("hovercont_edit").style.display = "block";$("hoverbg_edit").style.display = "block";entry_vars.oriurl = e_vars.urls[i];$("hover_edit_short").focus();}function clicknew(){$("hover_edit_h3").innerHTML = "������ַ";$("hover_edit_h3").title = "add";$("hover_edit_url").value = "http://";$("hover_edit_short").value = "";$("hoverbg_editbg").style.height = entry_vars.edit_h + "px";$("hovercont_edit").style.display = "block";$("hoverbg_edit").style.display = "block";$("hover_edit_url").focus();}function hover_edit_save(){var id = $("hover_edit_h3").title;var _url = strtrim($("hover_edit_url").value);var _short = strtrim($("hover_edit_short").value);if (_url == "" || _short == ""){alert("��ַ�����Ʋ���Ϊ��");return false;}if (!/^([a-z]+):\/\//.test(_url)){_url = "http://" + _url;}if (_short.length > 20){alert("���Ʋ��ܳ���10������");return false;}if (/^https?:\/\/[^\/]+$/.test(_url)){_url += "/";}var _urlkey = inar(e_vars.urls,_url);var _shortkey = inar(e_vars.shorts,_short);if (_urlkey > -1 && e_vars.blacks[_urlkey] == 0 && _urlkey != id){alert("��ַ�Ѵ��ڣ�������������ַ");$("hover_edit_url").focus();return false;}else if (_shortkey > -1 && e_vars.blacks[_shortkey] == 0 && _shortkey != id){alert("��ַ�����Ѵ��ڣ�������������ַ����");$("hover_edit_short").focus();return false;}var el = entry_vars.entry_len;if (id == "add"){var j = e_vars.ids.length;if (_urlkey > -1 && e_vars.blacks[_urlkey] == 1){j = _urlkey;}else if (_shortkey > -1 && e_vars.blacks[_shortkey] == 1){j = _shortkey;}else if (j > el && e_vars.blacks[el] == 1){e_vars.ids[j] = el;e_vars.urls[j] = e_vars.urls[el];e_vars.titles[j] = e_vars.titles[el];e_vars.shorts[j] = e_vars.shorts[el];e_vars.blacks[j] = 1;e_vars.icons[j] = e_vars.icons[el];j = el;}e_vars.ids[j] = j;e_vars.urls[j] = _url;e_vars.titles[j] = _short;e_vars.shorts[j] = _short;e_vars.blacks[j] = 0;e_vars.icons[j] = "default_page.ico";callfunc_edit(_url,"add",j,_short,0);}else{e_vars.urls[id] = _url;e_vars.shorts[id] = _short;callfunc_edit(_url,"edit",id,_short,1);}$("hovercont_edit").style.display = "none";$("hoverbg_edit").style.display = "none";initEntryEdit();resetDragContainer();}function hover_edit_cancel(){$("hovercont_edit").style.display = "none";$("hoverbg_edit").style.display = "none";}function clickdelete(i){if (confirm('��ȷ��ɾ������ַ��')){callfunc(e_vars.urls[i],'hide-delete','');deleteentry(i);initEntryEdit();resetDragContainer();}}function domoventry(s,t){var i=0;var j =0;if (t==null){return;}for (i=0;i<e_vars.urls.length;i++){if ('e_'+e_vars.ids[i]==s) break;}if (i==e_vars.urls.length){return;}if (t=='max'){j = e_vars.urls.length;}else{for (j=0;j<e_vars.urls.length;j++){if ('e_'+e_vars.ids[j]==t){break;}}}if (i==j-1){return;}if (j>i){j-=1;}callfunc(e_vars.urls[i],'move',j+"");moveentry(i,j);hover_notice(99);initEntryEdit();resetDragContainer();}function show_hover_notice(evt){evt = evt?evt:window.event;var srcElem = (evt.target)?evt.target:evt.srcElement;try{if (srcElem.tagName.toUpperCase()=="SPAN" && srcElem.parentNode.id == "addentrysite"){hover_notice(3);}else if (srcElem.tagName.toUpperCase()=="SPAN" && srcElem.className == "entrytext" || srcElem.tagName.toUpperCase()=="A"){hover_notice(0);}else if (srcElem.tagName.toUpperCase()=="SPAN" && srcElem.className == "entrydel"){hover_notice(1);}else if (srcElem.tagName.toUpperCase()=="SPAN" && srcElem.className == "entryimg"){hover_notice(2);}}catch(e){}}function hide_hover_notice(evt){evt=evt?evt:window.event;var srcElem=(evt.target)?evt.target:evt.srcElement;try{if (srcElem.tagName.toUpperCase()=="A" || srcElem.tagName.toUpperCase()=="SPAN"){}else if (srcElem.tagName.toUpperCase()=="DIV" && srcElem.id == "entryedit"){hover_notice(99);}}catch(e){}}function hover_notice(id){var info = "";switch (id){case 0:info = "����޸���ַ���ƺ͵�ַ"; break;case 1:info = "���ɾ����ַ��ɾ��������ֶ������Իָ���"; break;case 2:info = "�϶�ͼ�����ı���ַλ��"; break;case 3:info = "���������ַ"; break;default:info = "�ƶ���꣬���ӡ�ɾ�����༭���ƶ���ַ"; break;}$("hover_hint_notice").innerHTML = info;}function init_entry_edit(){initEntryEdit();try{if ($("entryedit").attachEvent){$("entryedit").attachEvent("onmouseover",show_hover_notice);$("entryedit").attachEvent("onmouseout",hide_hover_notice);}else{$("entryedit").addEventListener("mouseover",show_hover_notice,false);$("entryedit").addEventListener("mouseout",hide_hover_notice,false);}}catch(e){}document.onmousemove = mouseMove;document.onmousedown = mouseDown;document.onmouseup = mouseUp;dragHelper = document.createElement('DIV');dragHelper.id = 'entry_hover_copy';dragHelper.style.cssText = 'position:absolute;display:none;z-index:10999;text-decoration:none;';CreateDragContainer($('entryedit'));document.body.appendChild(dragHelper);}(function(){entry_vars.coderd = true;if (entry_vars.noinit){openhotsitearea();}})();