/*pub-1|2012-10-17 20:32:02*/var LOG=new LOG(LOG.specialConfig(".music-sites-recommend"));var MediaPlayMgr=(new function(){var G="";var H="";var E="";var I="";var F=document.getElementById("playIframe");var J=document.getElementById("mediaList");function L(N,O,M){F.src=N+((N.indexOf("?")==-1)?"?":"&")+"t="+new Date().getTime();LOG.saveLog({name:O,position:"\u64ad\u653e\u533a\u57df",pos:M})}function A(Z,O,Y){var U=Z&&Z.autoScroll||false;if(O){var R=decodeURIComponent(O)||decodeURIComponent($.cookie("yinyuemedia"))}else{var R=decodeURIComponent($.cookie("yinyuemedia"))}var X=R!="null"?R:"\u9177\u72d7\u97f3\u4e50";var N=J.getElementsByTagName("strong");for(var P=0,T=N.length;P<=T-1;P++){var S=N[P];if(X==S.innerHTML){var M=S.parentNode.parentNode;var V=$(M);var W=M.getAttribute("data-url");L(W,X,M);G&&$(G).removeClass("on");G=M;V.addClass("on");U&&(J.scrollTop=67*P);return false}}X="\u9177\u72d7\u97f3\u4e50";var Q=G=$("#mediaList li:first");Q.addClass("on");L(Q.attr("data-url"),X,M)}function D(M,N,O){if(M=="on"){H&&H.close();F.style.display="block";I.style.display="none";(N=="noScroll")?A(false,O):A({autoScroll:true},O)}else{F.style.display="none";F.src="";I.style.display="block"}}function C(){$("#mediaList li").click(function(Q){var P=$(this);var O=$("#playIframe")[0];var N=this.getAttribute("data-url");G&&$(G).removeClass("on");G=this;P.addClass("on");var M=P.find("strong")[0].innerHTML;var R=encodeURIComponent(M);$.cookie("yinyuemedia",R,{expires:365,path:"/"});D("on","noScroll",M);Q.stopPropagation();return false});$("#stopBtn").click(function(){D("on");return false});$("#windowOpenMedia").click(function(){var N=992;var O=554;try{if(!H||H.closed==true){H=window.open("http://v.6164.com/","","width="+N+",height="+O+",left="+(screen.width-N)/2+",top="+(screen.height-O)/2)}H&&H.focus();D("off")}catch(M){H=window.open("musicMini.html","_blank");D("off")}})}function B(){I=document.createElement("div");I.id="stopBtnWrap";I.innerHTML='<a title="\u70b9\u51fb\u672c\u9875\u64ad\u653e" id="stopBtn" href="javascript:void(0)" style="display: block;"><span>\u7ee7\u7eed\u64ad\u653e\uff0c\u5173\u95ed\u5c0f\u7a97\u53e3</span></a>';I.style.display="none";F.parentNode.appendChild(I)}function K(){B();C();A({autoScroll:true},false,"init")}K()}());$(".music-sites-recommend a,.other-music-info a").click(function(A){LOG.saveLog({name:this.innerHTML,position:"\u9876\u90e8\u7ad9\u70b9",pos:A.target})});