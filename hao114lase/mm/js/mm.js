var search_config = {
    baidu: {
        action: "http://www.baidu.com/s",
        name: "wd",
        url: "http://www.baidu.com/index.php?tn=divencheng_pg&ch=7",
        img: ["\u767e\u5ea6", "../static/images/s/baidu.gif"],
        btn: "\u767e\u5ea6\u4e00\u4e0b",
        params: {
            tn: "divencheng_pg",
            ch: "7"
        }
    },
    google: {
        action: "http://www.google.com.hk/search",
        name: "q",
        url: "http://www.google.com.hk/webhp?prog=aff&client=pub-0123456789&channel=5676023677",
        img: ["\u8c37\u6b4c", "../static/images/s/google.gif"],
        btn: "Google \u641c\u7d22",
        params: {
            client: "pub-0123456789",
            channel: "2000040001",
            forid: "1",
            prog: "aff",
            hl: "zh-CN",
            source: "sdo_sb_html",
            ie: "gb2312"
        }
    },
	sogou: {
        action: "http://www.sogou.com/sogou",
        name: "query",
        url: "http://www.sogou.com/sogou?pid=sogou-site-220c77af02f8ad85",
        img: ["搜索", "../static/images/s/sogou.gif"],
        btn: "搜 索",
        params: {
            pid: "sogou-site-220c77af02f8ad85"
        }
    },
    taobao: {
        action: "http://search8.taobao.com/browse/search_auction.htm",
        name: "q",
        btn: "\u6dd8\u5b9d\u641c\u7d22",
        img: ["\u6dd8\u5b9d\u7f51", "../static/images/s/taobao.gif"],
        url: "http://www.taobao.com/go/chn/tbk_channel/channelcode.php?pid=mm_10054659_3403176_11429697&eventid=101329",
        params: {
            pid: "mm_10054659_3403176_11429697",
            commend: "all",
            search_type: "action",
            user_action: "initiative",
            f: "D9_5_1",
            at_topsearch: "1",
            sort: "",
            spercent: "0"
        }
    }
}
var SearchBox = function(){
    function c(d){
        function e(f){
            for (var n = 0, l = f.length; n < l; n++) 
                //$("#searchForm").remove(f[n]);
                $(f[n]).remove();
            return [];
        }
        $("#searchForm").attr("action",d.action);
        $("#searchForm .label img").attr("src",d.img[1]);
        $("#searchForm .label img").attr("alt",d.img[0]);
        $("#searchForm .text").attr("name",d.name);
        $("#searchForm .submit").val(d.btn);
        $("#searchForm .label").attr("href",d.url);
        if (a.length > 0) 
            a = e(a);
        for (var k in d.params){
            var inputH = $('<input type="hidden" name="'+ k +'" value="'+ d.params[k] +'" />');
            $("#searchForm").append(inputH);
            a.push(inputH);
        }
    }
    var a = [$("#searchForm input[type='hidden']")];
    return {
        set: c
    }
}();
$(".searchform .ctrl .radio").unbind("click").bind("click", function(){
    var c = $(this);
    if (c.attr("checked")) {
        SearchBox.set(search_config[c.val()]);
        $(".searchform .text").focus();
    }
});

var Suggest = function(k,s){
    this.K = k;
    this.S = s;
    this.init = function(){
        var  Query,//输入值
        currentKey = -1, dataScript = null,//数据脚本
        dataResult,//结果数据
        KeywordItems, //li
        mouseSelect = false, stopRequest = false, Hidestate = false, isClose = false;            
        var K = this.K;
        var S = this.S;
        K.onkeydown = function(e){
            var e = e || window.event;
            if (isClose) {
                return;
            }                
            switch (e.keyCode) {
                case 38:
                    if (Hidestate) {
                        if (this.value == "") 
                            return;
                        S.show();
                        Hidestate = false;
                    }
                    else {
                        currentKey--
                    }
                    selectItem();
                    break;
                case 40:
                    if (Hidestate) {
                        if (this.value == "") 
                            return;
                        S.show();
                        Hidestate = false;
                    }
                    else {
                        currentKey++
                    }
                    selectItem();
                    break;
                case 27:
                    this.value = Query;
                    hideSuggest();
                    break;
                case 13:
                    hideSuggest();
                    break;
                default:
                    //stopRequest = false;
                    break;
            }
        }            
        K.onkeyup = function(e){
            var e = e || window.event;
            if (isClose) {
                return;
            }                
            Query = this.value;                
            switch (e.keyCode) {
                case 38:
                    stopRequest = true;
                    
                    break;
                case 40:
                    stopRequest = true;
                    break;
                case 8:
                    if (this.value == "") {
                        hideSuggest();
                    }
                    else {
                        requestData();
                    }
                    break;
                case 27:
                    this.value = Query;
                    hideSuggest();
                case 13:
                    hideSuggest();
                    break;
                default:
                    if (Query != "") {
                        requestData();
                    }                        
                    break;
            }
        }            
        K.onblur = function(){
            if (!mouseSelect) {
                hideSuggest();
            }
        }            
        function selectItem(){
            if (!KeywordItems) 
                return;
            var len = KeywordItems.length;                
            stopRequest = true;
            if (currentKey < 0) {
                currentKey = len - 1;
            }
            else 
                if (currentKey >= len) {
                    currentKey = 0;
                }
            for (var i = 0, len = KeywordItems.length; i < len; i++) {
                KeywordItems[i].className = "";
            }
            KeywordItems[currentKey].className = "hover";
            K.value = KeywordItems[currentKey].innerHTML;
        }
        
        function showSuggest(){
            if (typeof(dataResult) != "object" || typeof(dataResult) == "undefined") 
                return;
            var html = '<ul>';
            for(var i=0;i<dataResult.length;i++){
                html += '<li key="' + i + '">' + dataResult[i] + '</li>';
            }
            html += '</ul>';
            KeywordItems = S.getElementsByTagName("li");
            S.innerHTML = html;
            S.style.display = "";
            currentKey = -1;
            Hidestate = false;
            mouseHandle();
        }
        function hideSuggest(){
            S.style.display = "none";
            Hidestate = true;                    
        }
        function mouseHandle(){
            S.onmouseover = function(e){
                var e = e || window.event, target = e.target || e.srcElement;                    
                if (target.tagName.toUpperCase() == "LI") {
                    for (var i = 0, len = KeywordItems.length; i < len; i++) {
                        KeywordItems[i].className = "";
                    }
                    target.className = "hover";
                    currentKey = parseInt(target.getAttribute("key"));
                }
                mouseSelect = true;
            }
            S.onmouseout = function(){
                mouseSelect = false;
            }
            
            S.onclick = function(e){
                var e = e || window.event, target = e.target || e.srcElement;
                if (target.tagName.toUpperCase() == "LI") {
                    K.value = target.innerHTML;
                    K.focus();
                    hideSuggest();
                   $$("searchForm").submit();
                }
                
            }
        }
        if (/MSIE (\d+(\.\d+)?)/.test(navigator.userAgent)) var isIE = RegExp.$1;
        function requestData(){
            var head = document.getElementsByTagName("head")[0];
            if (dataScript){
                dataScript.charset = "gb2312";
            }
            if (!isIE) {
                if (dataScript) {
                    head.removeChild(dataScript);
                }
                dataScript = null;
            } // IE不需要重新创建script元素
            if (!dataScript) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                head.insertBefore(script, head.firstChild);
                dataScript = script;
                dataScript.charset = "gb2312";
            }
            var rd = new Date().getTime();
            var key = encodeURIComponent(K.value);                
            var Url = "http://suggestion.baidu.com/su?wd=" + key + "&sc=114la&rd=" + rd;
            dataScript.src = Url;
        }
        //baidu
        window.baidu = {};
        window.baidu.sug = function(O){
            if (typeof(O) == "object" && typeof(O.s) != "undefined" && typeof(O.s[0]) != "undefined") {
                dataResult = O.s;
                showSuggest();
            }
            else {
                hideSuggest();
            }
        };
    }
};//搜索自动完成

$(document).ready(function(){

    $('#T3_pic li,#T7_pic li,#T8_pic li').hover(
        function(){$(this).addClass('hover');},
        function(){$(this).removeClass('hover');}
    );
});