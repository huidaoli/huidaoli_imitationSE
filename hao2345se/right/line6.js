function MusicCallBack(obj,num){
    var modname,modObj,color,ddidval,end_con,n,nclass;
    ddidval = '';
    for(var i=1;i<=num;i++){
        modname = 'mod'+i;
        modObj = eval(obj[modname]);
        if(i==1){
            ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line6_\');" name="2" class="moreR" href="http://www.2345.com/music.htm?r2">����&raquo;</a><div class="tit_word"><a onclick="clickCount(\'line6_\');" name="2" href="http://www.2345.com/music.htm#musicbox">�������</a><a onclick="clickCount(\'line6_\');" name="2" href="http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&word=%C7%E9%B8%E8%B6%D4%B3%AA&lm=-1&rf=idxtag#1&pf=tags&fr=nav">���Գ�</a><a onclick="clickCount(\'line6_\');" name="2" href="http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&word=%BE%AD%B5%E4%C0%CF%B8%E8&lm=-1&rf=idxtag#1&pf=tags&fr=nav">�����ϸ�</a><a onclick="clickCount(\'line6_\');" name="2" href="http://mp3.baidu.com/m?f=ms&tn=baidump3&ct=134217728&lf=&rn=&word=%D3%B0%CA%D3%BD%F0%C7%FA&lm=-1&rf=idxtag#1&pf=tags&fr=nav">Ӱ�ӽ���</a></div><strong><a onclick="clickCount(\'line6_\');" name="2" class="t07" href="http://www.2345.com/music.htm?r1">���Ÿ���</a></strong></h4></div><div class="mod_music clearfix"><ol>';
            end_con = '</ol><div class="pmore clearfix"><a onclick="clickCount(\'line6_\');" name="2" href="http://box.zhangmen.baidu.com/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500" class="btnMusic">����ȫ��</a><a onclick="clickCount(\'line6_\');" name="2" href="http://www.2345.com/music.htm?r3">��������&raquo;</a></div></div>';
            nclass = '';
            for(var mod_name in modObj){
                n=parseInt(mod_name)+1;
                if(mod_name==8){
                    ddidval += '</ol><ol class="nmr"><li><a onclick="clickCount(\'line6_\');" name="2" class="auth" href="'+modObj[mod_name]['zu']+'">'+modObj[mod_name]['z']+'</a><i>'+n+'</i><s onclick="window.open(\''+modObj[mod_name]['u']+'\');"></s><a onclick="clickCount(\'line6_\');" name="2" href="'+modObj[mod_name]['u']+'">'+modObj[mod_name]['t']+'</a></li>';
                }else{
                    if(n<4){
                        nclass = ' class="ntop"';
                    }else{
                        nclass ='';
                    }
                    ddidval += '<li><a onclick="clickCount(\'line6_\');" name="2" class="auth" href="'+modObj[mod_name]['zu']+'">'+modObj[mod_name]['z']+'</a><i'+nclass+'>'+n+'</i><s onclick="window.open(\''+modObj[mod_name]['u']+'\');"></s><a onclick="clickCount(\'line6_\');" name="2" href="'+modObj[mod_name]['u']+'">'+modObj[mod_name]['t']+'</a></li>';
                }
            }
            ddidval += end_con;
        }else{
            ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line6_\');" name="2" class="moreR" href="http://book.2345.com">����&raquo;</a><div class="tit_word"><a onclick="clickCount(\'line6_\');" name="2" href="#"></a></div><strong><a onclick="clickCount(\'line6_\');" name="2" class="t08" href="http://book.2345.com">����С˵</a></strong></h4></div><div class="mod_novel"><ul>';
            end_con = '</ul></div>';
            for(var mod_name in modObj){
                ddidval += '<li><p>'+modObj[mod_name]['zs']+'</p><p class="alphabg3"></p><a onclick="clickCount(\'line6_\');" name="2" href="'+modObj[mod_name]['u']+'" title="'+modObj[mod_name]['t']+modObj[mod_name]['s']+'"><img src="'+modObj[mod_name]['img']+'" style="width:90px;height:125px;"/>'+modObj[mod_name]['t']+'</a></li>';
            }
            ddidval += end_con;
        }
    }
    $("music_cont").innerHTML = ddidval;
    if(!$("line6_h6")){
        var h6Element = document.createElement("h6");
        h6Element.id = "line6_h6";
        $("music_cont").parentNode.appendChild(h6Element);
    }else{
        var h6Element = $("line6_h6");
    }
    h6Element.innerHTML = '<a onclick="clickCount(\'line6_\');" name="2" href="http://book.2345.com" >����С˵&raquo;</a><label for="line6_pop"><input id="line6_pop" name="oc_pop" type="checkbox" value="" onclick="ocPop(6);clickCount(\'ocPop\');" />�Ժ���չ���˴���</label><span class="tipT" id="tipT6" style="display:none;">�رպ�Ҫ����չ���˴��ڣ�������ҳ���Ͻǵġ�����-�����Ƽ�-����������</span>';
}
if(typeof(MusicCallBack)!="undefined"){
    MusicCallBack({"mod1":[{"t":"\u6211\u7684\u6b4c\u58f0\u91cc","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=0","z":"\u66f2\u5a49\u5a77","zu":"http:\/\/mp3.baidu.com\/singerlist\/%C7%FA%CD%F1%E6%C3.html"},{"t":"someone li...","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=1","z":"adele","zu":"http:\/\/mp3.baidu.com\/singerlist\/adele.html"},{"t":"\u6162\u6162","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=2","z":"\u5f20\u5b66\u53cb","zu":"http:\/\/mp3.baidu.com\/singerlist\/%D5%C5%D1%A7%D3%D1.html"},{"t":"\u6700\u70ab\u6c11\u65cf\u98ce","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=3","z":"\u51e4\u51f0\u4f20\u5947","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B7%EF%BB%CB%B4%AB%C6%E6.html"},{"t":"\u5c0f\u60c5\u6b4c","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=4","z":"\u82cf\u6253\u7eff","zu":"http:\/\/mp3.baidu.com\/singerlist\/%CB%D5%B4%F2%C2%CC.html"},{"t":"\u8001\u5a46\u6700\u5927","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=5","z":"\u5d14\u5b50\u683c","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B4%DE%D7%D3%B8%F1.html"},{"t":"\u6211\u7684\u597d\u5144\u5f1f","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=6","z":"\u9ad8\u8fdb","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B8%DF%BD%F8.html"},{"t":"\u4f24\u4e0d\u8d77","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=7","z":"\u738b\u9e9f","zu":"http:\/\/mp3.baidu.com\/singerlist\/%CD%F5%F7%EB.html"},{"t":"\u5b58\u5728","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=8","z":"\u6c6a\u5cf0","zu":"http:\/\/mp3.baidu.com\/singerlist\/%CD%F4%B7%E5.html"},{"t":"\u60f3\u4f60\u7684\u591c","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=9","z":"\u5173\u5586","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B9%D8%86%B4.html"},{"t":"\u8377\u5858\u6708\u8272","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=10","z":"\u51e4\u51f0\u4f20\u5947","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B7%EF%BB%CB%B4%AB%C6%E6.html"},{"t":"\u670b\u53cb\u7684\u9152","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=11","z":"\u674e\u6653\u6770","zu":"http:\/\/mp3.baidu.com\/singerlist\/%C0%EE%CF%FE%BD%DC.html"},{"t":"\u5c0f\u60c5\u6b4c","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=12","z":"\u591a\u4eae","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B6%E0%C1%C1.html"},{"t":"\u6012\u653e\u7684\u751f\u547d","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=13","z":"\u6c6a\u5cf0","zu":"http:\/\/mp3.baidu.com\/singerlist\/%CD%F4%B7%E5.html"},{"t":"\u7231\u8981\u5766\u8361\u8361","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=14","z":"\u4e01\u4e01","zu":"http:\/\/mp3.baidu.com\/singerlist\/%B6%A1%B6%A1.html"},{"t":"\u8001\u7537\u5b69","u":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=15","z":"\u7b77\u5b50\u5144\u5f1f","zu":"http:\/\/mp3.baidu.com\/singerlist\/%BF%EA%D7%D3%D0%D6%B5%DC.html"}],"mod2":[{"t":"\u541e\u566c\u661f\u7a7a","u":"http:\/\/book.2345.com\/shuku\/168382.html","img":"http:\/\/book.2345.com\/images\/6345\/8483_1639199.jpg","zs":"479\u4e07\u5b57\u8fde\u8f7d","s":""},{"t":"\u90fd\u5e02\u5bfb\u6b22","u":"http:\/\/book.2345.com\/shuku\/9023.html","img":"http:\/\/book.2345.com\/images\/3729\/3888_1338826809660.jpg","zs":"82\u4e07\u5b57\u8fde\u8f7d","s":""},{"t":"\u53db\u5f92","u":"http:\/\/book.2345.com\/shuku\/134916.html","img":"http:\/\/book.2345.com\/uploadimg\/image\/20120828\/20120828091556_50025.jpg","zs":"88\u4e07\u5b57\u8fde\u8f7d","s":""},{"t":"\u5eb6\u5973\u593a\u5bab\u4e4b\u4ee4\u5983","u":"http:\/\/book.2345.com\/shuku\/136771.html","img":"http:\/\/book.2345.com\/uploadimg\/image\/20120828\/20120828085603_87147.jpg","zs":"100\u4e07\u5b57\u8fde\u8f7d","s":"\u4f20"}]},2);
}