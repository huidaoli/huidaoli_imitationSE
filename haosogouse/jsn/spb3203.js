(function(){if(typeof spb_vars=="undefined") return;window.d117={"A":"","B":"","se":"","se2":"","C":"http://pb.sogou.com/","D":"daohang","E":[]};var eu=encodeURIComponent;function F(n){ var ar=document.cookie.match(new RegExp("(^| )"+n+"=([^;]*)(;|$)"));return(ar!=null)?unescape(ar[2]):null;}function G(){if(d117.se!="ie") return 'notIE';try{if(typeof oHomePage=="undefined") return -1;var hp="http://123.sogou.com/";if(oHomePage.isHomePage(hp)) return 'sogou123';var H=[d117.B,d117.B.replace("Af",""),"so","rand","s8025","s8030","s8032","s8033","s8034","s8035"];for(var i=0;i<H.length;i++){var I=['goto?v='+H[i],'?'+H[i]];for(var j=0;j<2;j++){if(oHomePage.isHomePage(hp+I[j])) return H[i];}}}catch(e){}return -1;}function J(){var K=F("SUID");var L=F("YYID");var M=F("SDUV");var N=document.referrer?eu(document.referrer):"";try{var P=eu(document.getElementsByTagName("title")[0].innerHTML);}catch(e){}var Q=eu(window.location.href);var R=F("IPLOC");var S=F("GOTO");if(!(S &&(S.indexOf("sogou-")!=-1 || /^Af[0-9]{5}(-[0-9]{4})?$/.test(S)))){S="AQ7CZ";}var ua=navigator.userAgent.toLowerCase();var se=ua.indexOf(" se ")>-1?"se":(ua.indexOf("firefox")>-1?"ff":"ot");if(ua.indexOf("msie")>-1){var T="ie";for(var i=6;i<=9;i++){if(ua.indexOf("msie "+i)>-1) T="ie"+i;}if(se=="ot") se="ie";d117.se2=T;}d117.se=se;if(d117.se2) se+='_'+d117.se2;d117.B=S;var U=G();var pt=spb_vars.ptype || "other";var pc=spb_vars.pcode.replace(/[^0-9a-zA-Z]/g,"") || "other";d117.A=['&suid='+K,'&yyid='+L,'&sduv='+M,'&refer='+N,'&page='+P,'&pageUrl='+Q,'&loc='+R,'&sogou-hp='+U,'&pid='+d117.B,'&ptype='+pt,'&pcode='+pc,'&ver=3203_'+se].join('');}function V(sr){var re=['other','NU','NU'];try{re[1]=sr.getAttribute('pburl') || sr.getAttribute('href');re[2]=sr.getAttribute('pbtitle') || sr.innerHTML;var pn=sr.parentNode;while(pn){var mn=pn.getAttribute('pbflag');if(mn){re[0]=mn;return re;}pn=pn.parentNode;}}catch(e){}return re;}function W(e){e=e?e:window.event;var sr=(e.target)?e.target:e.srcElement;if(e.button==2) return;if(sr.tagName.toUpperCase()!='A'){var X=sr.parentNode;if(X.tagName.toUpperCase()=='A'){sr=X;}}if(sr.tagName.toUpperCase()=='A'){spb_vars.pingback(2,sr);}}spb_vars.pingback=function(pt,v){var t=new Date().getTime();var Y=[d117.A,'',''];if(pt==2){var re=V(v);Y[1]=['&module='+eu(re[0]),'&url='+eu(re[1]),'&urlName='+eu(re[2])].join('');}else if(pt!=1){Y[1]=v;}spb_vars.pstr="";spb_vars.pfunc(pt);Y[2]=spb_vars.pstr;var i=d117.E.length;d117.E[i]=new Image();d117.E[i].src=d117.C+(pt==1?'pv':'ct')+'.gif?uigs_productid='+d117.D+'&rdk='+t+Y.join('');};J();spb_vars.pingback(1);if(document.attachEvent){document.attachEvent("onclick",W);}else{document.addEventListener("click",W,false);}})();