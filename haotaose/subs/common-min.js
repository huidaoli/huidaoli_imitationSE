function setHomePage(c){if(document.all){try{document.body.style.behavior="url(#default#homepage)";document.body.setHomePage("http://www.tao123.com/?4392")}catch(b){try{c.style.behavior="url(#default#homepage)";c.setHomePage("http://www.tao123.com/?4392")}catch(b){window.open("http://www.tao123.com/help/sheweishouye.html")}}}else{if(window.sidebar){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(b){window.open("http://www.tao123.com/help/sheweishouye.html")}}else{try{var a=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);a.setCharPref("browser.startup.homepage","http://www.tao123.com/?4392");alert("\u8bbe\u7f6e\u6210\u529f")}catch(b){window.open("http://www.tao123.com/help/sheweishouye.html")}}}else{window.open("http://www.tao123.com/help/sheweishouye.html")}}}jQuery.fn.extend({addInputSuggest:function(a){return this.each(function(){var g=this.getAttribute("ajaxurl");var i=a.configRenderData||b;var q=a.defaultFocus||"";var o=a.setULId||"";var n=this.value;var m=this;var j=$(this);var c=j.closest("form")[0];$(c).append('<input  class= "j-type" type="hidden" name="t" value="" />');c.onsubmit=function(){if(m.value.replace(/^\s+|\s+$/g,"")==""||m.value==n){return false}};var h=a.suggestUlClass||"suggestUlClass";var f="";j.after("<ul id='"+o+"' style='display:none' class='absolute "+h+" '>init...</ul>");var p=j.next()[0];var e=$(p);p.style.visibility="hidden";e.offset({top:j.offset().top+m.offsetHeight,left:j.offset().left});p.style.display="block";$(window).resize(function(){e.offset({top:j.offset().top+m.offsetHeight,left:j.offset().left})});function b(u){var r=u.r;var t=[];for(var s=0;s<(r.length>10?10:(r.length));s++){t.push('<li class="clearfix" searchkey="'+r[s].item+'">'+r[s].item+"</li>")}return t.join("")}var l=function(r){return function(s){var t=i(s);r.innerHTML=t;t.length==0?r.style.visibility="hidden":r.style.visibility="visible"}}(p);function k(){this.value==n?this.value="":"";this.value==""&&(p.style.visibility="hidden");if(g&&this.value!=""){$.getJSON(g+encodeURIComponent(m.value),l)}}j.keyup(function(r){if(r.keyCode!=38&&r.keyCode!=40&&m.value.replace(/^\s+|\s+$/g,"")!=""){k()}else{if(m.value.replace(/^\s+|\s+$/g,"")==""){p.style.visibility="hidden"}}this.value==n?j.addClass("color-grey"):j.removeClass("color-grey")});function d(r){if(f==""){f=p.getElementsByTagName("LI")[0]}else{var t=f;$(t).removeClass("selected");if(r=="up"){f=$(f).prev()[0];if(!f){f=$(p).find("li").last()[0]}}else{f=$(t).next()[0];if(!f){f=p.getElementsByTagName("LI")[0]}}}m.value=f.getAttribute("searchkey");var s=$(c).find(".j-type")[0];s.value=1;$(f).addClass("selected")}j.keydown(function(t){var s=t.keyCode;if(p.style.display=="block"){switch(s){case 38:d("up");break;case 40:d("down");break}}else{f="";var r=$(c).find(".j-type")[0];r=""}});$(p).mouseover(function(r){if(r.target.tagName=="LI"){f&&$(f).removeClass("selected");f=r.target;$(f).addClass("selected")}else{if(r.target.parentNode.tagName=="LI"){f&&$(f).removeClass("selected");f=r.target.parentNode;$(f).addClass("selected")}}});$(p).mouseout(function(r){if(r.target.tagName=="LI"){f&&$(f).removeClass("selected");f=""}});$(p).click(function(t){var s=t.target.tagName=="LI"?t.target:t.target.parentNode;m.value=s.getAttribute("searchkey");var r=$(c).find(".j-type")[0];r.value=1;c.submit();r.value=0;p.style.visibility="hidden"});j.focus(function(){if(m.value.replace(/^\s+|\s+$/g,"")==n){this.value="";j.removeClass("color-grey")}});j.blur(function(){$(this).addClass("color-black");if(m.value.replace(/^\s+|\s+$/g,"")==""){j.addClass("color-grey");this.value=n}});$("body").bind("click",function(){p.style.visibility="hidden";f=""});j.addClass("color-grey")})}});window.bdsug={};window.bdsug.sug=function(f){var b=document.getElementById("sogoSuggestUl");var e=f.s;var a=e.length;var d=[];for(var c=0;c<a;c++){d.push('<li searchkey="'+e[c]+'">'+e[c]+"</li>")}b.innerHTML=d.join("");a==0?b.style.visibility="hidden":b.style.visibility="visible"};$("#gkeyword").addInputSuggest({configRenderData:function(a){},setULId:"sogoSuggestUl",suggestUlClass:"baidu-suggest"});
