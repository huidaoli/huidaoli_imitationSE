var channel_t1 = 1;
var channel_t2 = 1;

function bind_input_click(){
    $(':radio').click(function(event){
        event.stopPropagation();
    });
}

function bind_form_height_click(){
    $('.dl').click(function(){
        var this_id = $(this).attr('id');
        var id = 'q' + this_id.substr(1);
        $('#'+id).click();
    });
}
function selectMenu(box,obj,className,tagName,pTag,content,id){
    var lia = document.getElementById(box).getElementsByTagName(tagName);
    var lialen = lia.length;
    if(pTag == 'search_div_'){
        if(id == 1){
            channel_t1 = 1;
        }
        else{
            channel_t1 = 2;
        }
    }
    else if(pTag == 'changes_ct_'){
        if(id == 1){
            channel_t2 = 1;
        }
        else{
            channel_t2 = 2;
        }
    }
    for(i=0; i < lialen; i++){
        if(lia[i].getElementsByTagName(pTag)[0].className==className)
        {
            lia[i].getElementsByTagName(pTag)[0].className = "";
        }
    }
    obj.className = className;

    for (var i =1,j; j=document.getElementById(content+i); i++){
        j.style.display="none";
    }

    document.getElementById(content+id).style.display="";
}

function Submit_(){
    $('#chaxun_btn1').click(function(){
        var url = 'http://huoche.kuxun.cn/oemshike-search.html';
        var type = $('input[name="query_type1"]:checked').val();
        var param_str = '';
        if(type == 'q1_1'){
            var querytype = 'zhanzhan';
            var from = $('#skb_zhanzhan_frm').val();
            var to = $('#skb_zhanzhan_to').val();
            param_str = '&from='+from+'&to='+to;
        }
        else if(type == 'q1_2'){
            var querytype = 'checi';
            var checi = $('#skb_checi').val();
            param_str = '&checi='+checi;
        }
        else if(type == 'q1_3'){
            var querytype = 'chezhan';
            var chezhan = $('#skb_chezhan').val();
            param_str = '&chezhan='+chezhan;
        }
        param_str += '&fromid=Khl360cn-S1173801-T1134331';
        url += '?querytype=' + querytype + param_str;
        window.open(url);
    });
    $('#chaxun_btn2').click(function(){
        var url = 'http://huoche.kuxun.cn/oemzrp-q.html?';
        var type = $('input[name="query_type2"]:checked').val();
        if(type == 'q2_1'){
            var type = '0';
            var from = $('#zhuanrang_zhanzhan_frm').val();
            var to = $('#zhuanrang_zhanzhan_to').val();
            param_str = '&from='+from+'&to='+to;
        }
        else if(type == 'q2_2'){
            var type = '1';
            var checi = $('#zhuanrang_checi').val();
            param_str = '&traincode='+checi;
        }
        else if(type == 'q2_3'){
            var type = '2';
            var chezhan = $('#zhuanrang_chezhan').val();
            param_str = '&station='+chezhan;
        }
        param_str += '&fromid=Khl360cn-S1173801-T1134331';
        url += 'type=' + type + param_str;
        window.open(url);
    });
    $('#chaxun_btn3').click(function(){
        var url = 'http://huoche.kuxun.cn/oemyp-q.html?';
        var from = $('#yp_frm').val();
        var to = $('#yp_to').val();
        from = encodeURI(from);
        to = encodeURI(to);

        var checi = $('#yp_checi').val();
        url += 'from='+from+'&to='+to+'&traincode='+checi+'&fromid=Khl360cn-S1173801-T1134331';
        window.open(url);
    });
    $('#chaxun_btn4').click(function(){
        var city = $('#daishou').val();
        var url = 'http://huoche.kuxun.cn/oemdsd-q.html?city='+city+'&fromid=Khl360cn-S1173801-T1134331';
        window.open(url);
    });
}

function gb2utf8(data)
{
    var glbEncode = [];
    gb2utf8_data = data;
    execScript("gb2utf8_data = MidB(gb2utf8_data, 1)", "VBScript");
    var t = escape(gb2utf8_data).replace(/%u/g,"").replace(/(.{2})(.{2})/g,"%$2%$1").replace(/%([A-Z].)%(.{2})/g,"@$1$2");
    t = t.split("@");
    var i = 0, j = t.length, k;
    while( ++i < j )
    {
        k = t[i].substring(0,4);
        if(!glbEncode[k])
        {
            gb2utf8_char = eval("0x"+k);
            execScript("gb2utf8_char = Chr(gb2utf8_char)", "VBScript");
            glbEncode[k] = escape(gb2utf8_char).substring(1,6);
        }
        t[i] = glbEncode[k]+t[i].substring(4);
    }
    gb2utf8_data = gb2utf8_char = null;
    return unescape(t.join("%"));
}
//对文字进行utf-8编码
function utf8(wide)
{
    var c, s;
    var enc = "";
    var i = 0;
    while(i<wide.length)
    {
        c= wide.charCodeAt(i++);
        // handle UTF-16 surrogates
        if (c>=0xDC00 && c<0xE000) continue;
        if (c>=0xD800 && c<0xDC00)
        {
            if (i>=wide.length) continue;
            s= wide.charCodeAt(i++);
            if (s<0xDC00 || c>=0xDE00) continue;
            c= ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
        }
        // output value
        if (c<0x80)
        enc += String.fromCharCode(c);
        else if (c<0x800)
        enc += String.fromCharCode(0xC0+(c>>6),0x80+(c&0x3F));
        else if (c<0x10000)
        enc += String.fromCharCode(0xE0+(c>>12),0x80+(c>>6&0x3F),0x80+(c&0x3F));
        else
        enc += String.fromCharCode(0xF0+(c>>18),0x80+(c>>12&0x3F),0x80+(c>>6&0x3F),0x80+(c&0x3F));
    }
    return enc;
}
var hexchars = "0123456789ABCDEF";
function toHex(n)
{
    return hexchars.charAt(n>>4)+hexchars.charAt(n & 0xF);
}
var okURIchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
function encodeURIComponentNew(s)
{
    var s = utf8(s);
    var c;
    var enc = "";
    for(var i= 0; i < s.length; i++)
    {
        if(okURIchars.indexOf(s.charAt(i))==-1)
        enc += "%"+toHex(s.charCodeAt(i));
        else
        enc += s.charAt(i);
    }
    return enc;
}

$(document).ready(function(){
    bind_input_click();
    bind_form_height_click();
    Submit_();
});