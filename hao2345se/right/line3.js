function GameCallBack(obj,num){
    var modname,modObj,color,ddidval,end_con;
    ddidval = '';
    for(var i=1;i<=num;i++){
        modname = 'mod'+i;
        modObj = eval(obj[modname]);
        end_con = '</ul>';
        if(i==1){
            ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line3_\');" name="2" class="moreR" href="http://wan.2345.com">更多&raquo;</a><strong><a onclick="clickCount(\'line3_\');" name="2" class="t04" href="http://wan.2345.com">网页游戏</a></strong></h4></div><ul class="mod_game clearfix">';
        }else if(i==2){
            ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line3_\');" name="2" class="moreR" href="http://danji.2345.com">更多&raquo;</a><strong><a onclick="clickCount(\'line3_\');" name="2" class="t04" href="http://danji.2345.com">单机游戏</a></strong></h4></div><ul class="mod_game clearfix">';
        }else{
            ddidval += '<div class="pop_news"><h4><a onclick="clickCount(\'line3_\');" name="2" class="moreR" href="http://game.2345.com/wangyou.htm">更多&raquo;</a><strong><a onclick="clickCount(\'line3_\');" name="2" class="t04" href="http://game.2345.com/wangyou.htm">网络游戏</a></strong></h4></div><ul class="mod_game clearfix">';
        }
        for(var mod_name in modObj){
            ddidval += '<li><a onclick="clickCount(\'line3_\');" name="2" href="'+modObj[mod_name]['u']+'" title="'+modObj[mod_name]['t']+modObj[mod_name]['s']+'"><img src="'+modObj[mod_name]['img']+'" /></a><p><a onclick="clickCount(\'line3_\');" name="2" href="'+modObj[mod_name]['u']+'" title="'+modObj[mod_name]['t']+modObj[mod_name]['s']+'">'+modObj[mod_name]['t']+'</a></p></li>';
        }
        ddidval += end_con;
    }
    $("game_cont").innerHTML = ddidval;
    if(!$("line3_h6")){
        var h6Element = document.createElement("h6");
        h6Element.id = "line3_h6";
        $("game_cont").parentNode.appendChild(h6Element);
    }else{
        var h6Element = $("line3_h6");
    }
    h6Element.innerHTML = '<a onclick="clickCount(\'line3_\');" name="2" href="http://game.2345.com?3" >更多游戏&raquo;</a><label for="line3_pop"><input id="line3_pop" name="oc_pop" type="checkbox" value="" onclick="ocPop(3);clickCount(\'ocPop\');" />以后不再展开此窗口</label><span class="tipT" id="tipT3" style="display:none;">关闭后，要重新展开此窗口，请点击主页右上角的“设置-热门推荐-开启”即可</span>';
}
if(typeof(GameCallBack)!="undefined"){
    GameCallBack({"mod3":[{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=%B4%A9%D4%BD%BB%F0%CF%DF&gameType=wangyou","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229211.jpg","t":"\u7a7f\u8d8a\u706b\u7ebf","s":""},{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=%B5%D8%CF%C2%B3%C7%D3%EB%D3%C2%CA%BF&gameType=wangyou","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229253.jpg","t":"\u5730\u4e0b\u57ce\u4e0e\u52c7\u58eb","s":""},{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=QQ%B7%C9%B3%B5&gameType=wangyou","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334228891.jpg","t":"QQ\u98de\u8f66","s":""},{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=QQ%EC%C5%CE%E8&gameType=wangyou","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/\/33713740126.jpg","t":"QQ\u70ab\u821e","s":""}],"mod2":[{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=%D6%B2%CE%EF%B4%F3%D5%BD%BD%A9%CA%AC&gameType=danji","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229587.jpg","t":"\u690d\u7269\u5927\u6218\u50f5\u5c38","s":""},{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=%B7%B4%BF%D6%BE%AB%D3%A2&gameType=danji","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/\/33609942837.jpg","t":"\u53cd\u6050\u7cbe\u82f1CS","s":""},{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=%B7%DF%C5%AD%B5%C4%D0%A1%C4%F1&gameType=danji","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229650.jpg","t":"\u6124\u6012\u7684\u5c0f\u9e1f","s":""},{"u":"http:\/\/game.2345.com\/server\/search\/index.php?so=%BA%EC%C9%AB%BE%AF%BD%E42&gameType=danji","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/\/344820571322.jpg","t":"\u7ea2\u8272\u8b66\u62122\uff1a","s":"\u5171\u548c\u56fd\u4e4b\u8f89"}],"mod1":[{"u":"http:\/\/wan.2345.com\/bd_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/\/33672122232.jpg","t":"\u9738\u5200","s":""},{"u":"http:\/\/wan.2345.com\/lj_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229486.jpg","t":"\u9f99\u5c06","s":""},{"u":"http:\/\/wan.2345.com\/frxz2_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229330.jpg","t":"\u51e1\u4eba\u4fee\u771f2","s":""},{"u":"http:\/\/wan.2345.com\/aszt_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/\/33914416229.jpg","t":"\u50b2\u89c6\u906e\u5929","s":""},{"u":"http:\/\/wan.2345.com\/sxd_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229407.jpg","t":"\u795e\u4ed9\u9053","s":""},{"u":"http:\/\/wan.2345.com\/mhfx_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/\/33914419631.jpg","t":"\u68a6\u5e7b\u98de\u4ed9","s":""},{"u":"http:\/\/wan.2345.com\/dpcq2_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229364.jpg","t":"\u6597\u7834\u82cd\u7a792","s":""},{"u":"http:\/\/wan.2345.com\/lqjl_a\/","img":"http:\/\/img1.2345.com\/wanimg\/gameclient\/\/recommend\/index\/1334229516.jpg","t":"\u7bee\u7403\u7ecf\u7406","s":""}]},3);
}