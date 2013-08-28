var search_wd = [[{"i":"\u590f\u65e5\u4e0d\u80fd\u627f\u53d7\u4e4b\u75c5\u75db","h":"http:\/\/zhidao.baidu.com\/s\/zhishilingxiu02.html"},{"i":"\u201c\u8d35\u7f8a\u7f8a\u201d\u4e3a\u4f55\u90a3\u4e48\u8d35\uff1f","h":"http:\/\/zhidao.baidu.com\/q?word=%D1%F2%C8%E2+%B9%F3&lm=0&fr=search&ct=17&pn=0&tn=ikaslist&rn=10"},{"i":"\u5973\u5b87\u822a\u5458\u7684\u4e0d\u5e73\u51e1\u751f\u6d3b","h":"http:\/\/zhidao.baidu.com\/q?word=%C5%AE%D3%EE%BA%BD%D4%B1&lm=0&fr=search&ct=17&pn=0&tn=ikaslist&rn=10"}],[{"i":"\u590f\u5b63\u5403\u5bb5\u591c\u4f1a\u5f71\u54cd\u5230\u5065\u5eb7\u5417\uff1f","h":"http:\/\/zhidao.baidu.com\/q?word=%CF%FC%D2%B9&lm=0&fr=search&ct=17&pn=0&tn=ikaslist&rn=10"},{"i":"\u52a8\u7269\u8f76\u4e8b\u4e4b\u9cc4\u9c7c\u7684\u751f\u5b58\u79d8\u8bc0","h":"http:\/\/zhidao.baidu.com\/q?word=%F6%F9%D3%E3+%C9%FA%B4%E6&lm=0&fr=search&ct=17&pn=0&tn=ikaslist&rn=10"}]];

var wd_str_1='',wd_str_2='';
for(var k=0;k<search_wd[0].length;k++){
  wd_str_1 += '<a href="'+search_wd[0][k]["h"]+'" name="2">'+search_wd[0][k]["i"]+'</a>';
}
$('bd_ad').innerHTML = wd_str_1;

for(var kk=0;kk<search_wd[1].length;kk++){
  wd_str_2 += '<a href="'+search_wd[1][kk]["h"]+'" name="2">'+search_wd[1][kk]["i"]+'</a>';
}
$('ggsspan').innerHTML = wd_str_2;