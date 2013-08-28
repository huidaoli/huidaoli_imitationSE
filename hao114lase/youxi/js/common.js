//搜索参数配置
var searchConfig = {
    baidu: {
        action: "http://www.baidu.com/s",
        name: "wd",
        btn: "百度一下",
        parm : {
            'tn':'divencheng_pg',
            'ch':7,
            'ie':'utf-8'
        }
    },
    sogou: {
        action: "http://www.sogou.com/sogou",
        name: "query",
        btn: "搜 索",
        parm : {
            'pid':'sogou-site-220c77af02f8ad85'
        }
    }
}
// 项部搜索
var topSearch = (function(){
    var search = function(){
        var sPar = $('#J_sType').find('span'),
            sChi = $('#J_sType').find('ul'),
			sTips = $('#js_tips'),
			sIpt = $('#J_sKey');
        var over = false;
        sPar.click(function(){
            var state = sChi.css('display');
            (state == 'none' || state == '') ? sChi.show() : sChi.hide();
        });
        sChi.find('a').click(function(){
            var rel = $(this).attr('rel');
            setForm(searchConfig[rel]);
            $('#J_sClass').val(rel);
            sPar.html($(this).html());
            sChi.hide();
            return false;
        });
        $('#J_sType').hover(
            function(){ over = true;},
            function(){ over = false;}
        );
		sIpt.val('').focus(function(){
			sTips.hide();
		}).blur(function(){
			if($(this).val() === '' || $(this).val() === null){
				sTips.show();
			}
		})
        $(document).bind('click',function(){
            if(!over) sChi.hide();
        });
    }
    var setForm = function(data){
        $('#J_sForm').attr('action',data.action);
        $('#J_sKey').attr('name',data.name);
        $('#J_sBtn').val(data.btn);
        $('#J_sForm').find('input[type="hidden"]').remove();
        for (var item in data.parm) {
            $('#J_sForm').append('<input type="hidden" name="'+item+'" value="'+data.parm[item]+'" />');
        }
    }
    return {
        Init : function(){
            search();
        }
    }
})();


$(function(){
    //搜索
    topSearch.Init();
    /*
    searchSuggest({
        input: $('#J_sKey'),
        parm : $('#J_sClass'),
        form : $('#J_sForm')
    });
    */
    var goTop = function(){
        $("#gotop a").click(function() {
            var doc = $(document).find("html,body");
            if (doc.filter(":animated").size()) {
                doc.stop()
            }
            doc.animate({
                scrollTop: 0
            },
            600);
            return false;
        });
    }
    if($(document).scrollTop()<=0){
        $("#gotop").hide();
    }
    $(window).scroll(function(){
        $(document).scrollTop()>0?$("#gotop").show():$("#gotop").hide();
        if($.browser.msie && $.browser.version <= 6){
            $("#gotop").css({"top":$(document).scrollTop() + document.documentElement.clientHeight - 150,"position":"absolute"});
        }
    });
    goTop();
    
});


// TAB 切换
var Taber = {
    init : function(opt){
		var num = 0;
        if(!opt) 
		opt = {
			til:undefined,
			conClass:undefined,
			tilCur:'current' || undefined
		};
        opt.til.each(function(){
            var that = this;
            Taber.evtHover(that,function(){
                opt.conClass.hide();
                $('#'+$(that).attr('rel')).show();
                opt.til.removeClass(opt.tilCur);
                $(that).addClass(opt.tilCur);
            });
        });
    },
    evtHover : function(ele,fn){
        var evt = ["click"], 
            MouseDelayTime = 300, 
            waitInterval;
        for(var i=0;i<evt.length;i++){
            var element = evt[i];
            switch (element) {
                case "click":
                    if(waitInterval){
                        window.clearTimeout(waitInterval);
                    }
                    $(ele).bind('click',fn);
                    break;
            }
        }
    }

}
  function AddFavorite(sURL, sTitle){
	try {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sURL, "114la");
            }
            catch (e) {
                alert("加入收藏失败,请手动添加.");
            }
        }
}

