(function(){if(typeof spb_vars=="undefined") return;window.d117={"A":"","B":"","se":"","se2":"","C":"http://pb.sogou.com/","D":"daohang","E":[]};var eu=encodeURIComponent;function F(n){ var ar=document.cookie.match(new RegExp("(^| )"+n+"=([^;]*)(;|$)"));return ar?unescape(ar[2]):null}function G(){if(d117.se!="ie"&&!d117.se2) return 'notIE';try{if(typeof oHomePage=="undefined") return -2;var hp="http://123.sogou.com/";if(oHomePage.isHomePage(hp)) return 'sogou123';var H=[d117.B,d117.B.replace("Af",""),"so","rand","s8025","s8030","s8032","s8033","s8034","s8035"];for(var i=0;i<H.length;i++){var I=['goto?v='+H[i],'?'+H[i]];for(var j=0;j<2;j++){if(oHomePage.isHomePage(hp+I[j])) return H[i]}}}catch(e){}return -1}function J(){try{return('localStorage' in window&&window['localStorage']!==null)?1:0}catch(e){return 0}}function K(ua){var s=[0,0,0];var sa=[["windows nt 5.1","windows nt 5.2","windows nt 6.0","windows nt 6.1","windows nt","ipad","iphone","macintosh","android","linux"],["en-us","zh-tw"],["wow64"]];for(var i=0;i<sa.length;i++){var si=sa[i];for(var j=0;j<si.length;j++){if(ua.indexOf(si[j])>-1){s[i]=(j+1).toString(16);break}}}return s.join("")}function L(){var M=[];var N=["suid","yyid","sduv","seuv","m","apid","loc","sect","sev","ser","skin","ipt"];var P=["SUID","YYID","SDUV","sduv","m","apid","IPLOC","_seCityCode2","V","R","cur_nsk","ipt"];for(var i=0;i<P.length;i++){M.push('&'+N[i]+'='+F(P[i]))}var Q=document.referrer?eu(document.referrer):"";try{var R=eu(document.getElementsByTagName("title")[0].innerHTML)}catch(e){}var S=eu(window.location.href);var T=F("GOTO");if(!(T &&(T.indexOf("sogou-")!=-1||/^Af[0-9]{5}(-[0-9]{4})?$/.test(T)))){T="AQ7CZ"}var ls=(navigator.cookieEnabled?1:0)+"_"+J();var ua=navigator.userAgent.toLowerCase();var se=ua.indexOf(" se ")>-1?"se":(ua.indexOf("firefox")>-1?"ff":"ot");if(ua.indexOf("msie")>-1){var U="ie";for(var i=6;i<=9;i++){if(ua.indexOf("msie "+i)>-1) U="ie"+i}if(se=="ot") se="ie";d117.se2=U}var sys=K(ua);d117.se=se;if(d117.se2) se+='_'+d117.se2;d117.B=T;var V=G();var pt=spb_vars.ptype||"other";var pc=spb_vars.pcode.replace(/[^0-9a-zA-Z]/g,"")||"other";d117.A=M.join('')+['&refer='+Q,'&page='+R,'&pageUrl='+S,'&sogou-hp='+V,'&pid='+T,'&ptype='+pt,'&pcode='+pc,'&ls='+ls,'&sys='+sys,'&ver=3205_'+se].join('')}function W(sr){var re=['other','NU','NU'];try{re[1]=sr.getAttribute('pburl')||sr.getAttribute('href');re[2]=sr.getAttribute('pbtitle')||sr.innerHTML;var X=['pbflag','id'];for(var i=0;i<2;i++){var pn=sr.parentNode;while(pn){if(!pn.tagName) break;var mn=pn.getAttribute(X[i]);if(mn){re[0]=mn;return re}pn=pn.parentNode}}}catch(e){}return re}function Y(e){var cx=e.clientX,cy=e.clientY,cw=document.body.clientWidth,st=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return(parseInt(cx-cw/2)+"_"+(cy+st))}function Z(e){e=e||window.event;var sr=e.target||e.srcElement;var BA=sr.tagName;if(BA&&BA.toUpperCase()!='A'){sr=sr.parentNode;if(sr){BA=sr.tagName}}if(BA&&BA.toUpperCase()=='A'){spb_vars.pingback(2,[e,sr])}}spb_vars.pingback=function(pt,v){var t=new Date().getTime();var BB=[d117.A,'',''];if(pt==2){var po=Y(v[0]);var re=W(v[1]);BB[1]=['&module='+eu(re[0]),'&url='+eu(re[1]),'&urlName='+eu(re[2]),'&pos='+po].join('')}else if(pt!=1){BB[1]=v}spb_vars.pstr="";spb_vars.pfunc(pt);BB[2]=spb_vars.pstr;var i=d117.E.length;d117.E[i]=new Image();d117.E[i].src=d117.C+(pt==1?'pv':'ct')+'.gif?uigs_productid='+d117.D+'&rdk='+t+BB.join('')};L();spb_vars.pingback(1);if(document.attachEvent){document.attachEvent("onclick",Z)}else{document.addEventListener("click",Z,false)}})();