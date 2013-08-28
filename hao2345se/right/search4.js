var search_tv = [[{"i":"\u590d\u4ec7\u8005\u8054\u76df","h":"http:\/\/v.yisou.com\/s?q=%b8%b4%b3%f0%d5%df%c1%aa%c3%cb&charset=gbk&sr=1&cid=4392"},{"i":"\u53d8\u5f62\u91d1\u521a","h":"http:\/\/v.yisou.com\/s?q=%b1%e4%d0%ce%bd%f0%b8%d5&charset=gbk&sr=1&cid=4392"},{"i":"3d\u8089\u84b2\u56e2","h":"http:\/\/v.yisou.com\/s?q=3d%c8%e2%c6%d1%cd%c5&charset=gbk&sr=1&cid=4392"},{"i":"\u559c\u7231\u591c\u84b2","h":"http:\/\/v.yisou.com\/s?q=%cf%b2%b0%ae%d2%b9%c6%d1&charset=gbk&sr=1&cid=4392"}],[{"i":"\u7504\u5b1b\u4f20","h":"http:\/\/v.yisou.com\/s?q=%d5%e7%8b%d6%b4%ab&charset=gbk&sr=1&cid=4392"},{"i":"\u820c\u5c16\u4e0a\u7684\u4e2d\u56fd","h":"http:\/\/v.yisou.com\/s?q=%c9%e0%bc%e2%c9%cf%b5%c4%d6%d0%b9%fa&charset=gbk&sr=1&cid=4392"},{"i":"\u6b65\u6b65\u60ca\u5fc3","h":"http:\/\/v.yisou.com\/s?q=%b2%bd%b2%bd%be%aa%d0%c4&charset=gbk&sr=1&cid=4392"},{"i":"\u706b\u5f71\u5fcd\u8005","h":"http:\/\/v.yisou.com\/s?q=%bb%f0%d3%b0%c8%cc%d5%df&charset=gbk&sr=1&cid=4392"}]];

var tv_str_1='',tv_str_2='';
for(var k=0;k<search_tv[0].length;k++){
  tv_str_1 += '<a href="'+search_tv[0][k]["h"]+'" name="2" onclick="clickCount(\'search_tv\');" >'+search_tv[0][k]["i"]+'</a>';
}
$('bd_ad').innerHTML = tv_str_1;

for(var kk=0;kk<search_tv[1].length;kk++){
  tv_str_2 += '<a href="'+search_tv[1][kk]["h"]+'" name="2" onclick="clickCount(\'search_tv\');" >'+search_tv[1][kk]["i"]+'</a>';
}
$('ggsspan').innerHTML = tv_str_2;