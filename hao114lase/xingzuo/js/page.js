(function(){
    var form1=$("#yuncheng"),
        form2=$("#supei"),
        form3=$("#shengxiao");
        
    var action={
        "day":"http://astro.sina.com.cn/fate/astro_aries.html",
        "week":"http://astro.sina.com.cn/fate/astro_aries_week.html",
        "mon":"http://astro.sina.com.cn/fate/astro_aries_mon.html",
        "year":"http://astro.sina.com.cn/fate/astro_aries_year.html"
    };
    $("#cycle_1,#cycle_2,#cycle_3,#cycle_4").on("click",function(){
        form1.el.action=action[this.value];
    });
    
})();

