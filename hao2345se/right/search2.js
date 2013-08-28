var search_mp3 = [[{"i":"\u6700\u70ab\u6c11\u65cf\u98ce","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=0"},{"i":"\u7ea2\u5c18\u60c5\u6b4c","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=1"},{"i":"\u6211\u7684\u597d\u5144\u5f1f","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=2"},{"i":"\u6211\u7684\u6b4c\u58f0\u91cc","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=3"}],[{"i":"\u670b\u53cb\u7684\u9152","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=4"},{"i":"\u56e0\u4e3a\u7231\u60c5","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=5"},{"i":"\u4f24\u4e0d\u8d77","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=6"},{"i":"\u7236\u4eb2","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=7"},{"i":"\u7231\u662f\u4f60\u6211","h":"http:\/\/box.zhangmen.baidu.com\/m?rf=top-top500&l_id=403&gate=10&ct=134217728&tn=baidumt&c_n=mp3order&l_n=%E6%AD%8C%E6%9B%B2TOP500&s_o=8"}]];

var mp3_str_1='',mp3_str_2='';
for(var k=0;k<search_mp3[0].length;k++){
  mp3_str_1 += '<a href="'+search_mp3[0][k]["h"]+'" name="2" onclick="clickCount(\'search_mp3\');" >'+search_mp3[0][k]["i"]+'</a>';
}
$('bd_ad').innerHTML = mp3_str_1;

for(var kk=0;kk<search_mp3[1].length;kk++){
  mp3_str_2 += '<a href="'+search_mp3[1][kk]["h"]+'" name="2" onclick="clickCount(\'search_mp3\');" >'+search_mp3[1][kk]["i"]+'</a>';
}
$('ggsspan').innerHTML = mp3_str_2;