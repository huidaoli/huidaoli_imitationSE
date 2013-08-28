var Tab=function(menus,panels,style,current){
    var time;
    menus.on("click",function(){
        $(menus.el[current]).removeClass(style);
        $(panels.el[current]).removeClass(style);
        $(this).addClass(style);
        current=this.getAttribute("rel");
        $(panels.el[current]).addClass(style);
    });
    menus.on("mouseover",function(){
        clearTimeout(time);
        var that=this;
        time=setTimeout(function(){
            $(menus.el[current]).removeClass(style);
            $(panels.el[current]).removeClass(style);
            $(that).addClass(style);
            current=that.getAttribute("rel");
            $(panels.el[current]).addClass(style);
        },300);
    });
    menus.on("mouseout",function(){
        clearTimeout(time);
    });
}
;new Tab($("#tab_menu li"),$("#tab_panel .tab-cont"),"active",0);