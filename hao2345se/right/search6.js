var search_tb = [[{"i":"\u795e\u4e5d\u6210\u529f\u5bf9\u63a5\u5929\u5bab","h":"http:\/\/www.youdao.com\/search?q=%c9%f1%be%c5%b3%c9%b9%a6%b6%d4%bd%d3%cc%ec%b9%ac&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"},{"i":"\u6e2f\u59d0\u4e5d\u4e11\u699c","h":"http:\/\/www.youdao.com\/search?q=%b8%db%bd%e3%be%c5%b3%f3%b0%f1&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"},{"i":"\u6b66\u6c49\u6700\u725b\u6c42\u5a5a\u54e5","h":"http:\/\/www.youdao.com\/search?q=%ce%e4%ba%ba%d7%ee%c5%a3%c7%f3%bb%e9%b8%e7&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"}],[{"i":"\u6b27\u6d32\u676f\u56db\u5f3a\u51fa\u7089","h":"http:\/\/www.youdao.com\/search?q=%c5%b7%d6%de%b1%ad%cb%c4%c7%bf%b3%f6%c2%af&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"},{"i":"\u86df\u9f99\u53f7\u518d\u521b\u6f5c\u6c34\u7eaa\u5f55","h":"http:\/\/www.youdao.com\/search?q=%f2%d4%c1%fa%ba%c5%d4%d9%b4%b4%c7%b1%cb%ae%bc%cd%c2%bc&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"},{"i":"\u950b\u829d\u88ab\u66dd\u6b63\u5f0f\u590d\u5408","h":"http:\/\/www.youdao.com\/search?q=%b7%e6%d6%a5%b1%bb%c6%d8%d5%fd%ca%bd%b8%b4%ba%cf&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"},{"i":"\u5168\u7403\u5bcc\u8c6a\u6392\u884c\u699c","h":"http:\/\/www.youdao.com\/search?q=%c8%ab%c7%f2%b8%bb%ba%c0%c5%c5%d0%d0%b0%f1&keyfrom=dh.win7000&ue=gb2312&vendor=dh.win7000_3523"}]];

var tb_str_1='',tb_str_2='';
for(var k=0;k<search_tb[0].length;k++){
  tb_str_1 += '<a href="'+search_tb[0][k]["h"]+'" name="2">'+search_tb[0][k]["i"]+'</a>';
}
$('bd_ad').innerHTML = tb_str_1;

for(var kk=0;kk<search_tb[1].length;kk++){
  tb_str_2 += '<a href="'+search_tb[1][kk]["h"]+'" name="2">'+search_tb[1][kk]["i"]+'</a>';
}
$('ggsspan').innerHTML = tb_str_2;