var search_img = [
[{i:"高清性感美女",h:"http://www.2345.com/zt/girl.htm?index"},{i:"性感明星模特",h:"http://www.2345.com/girl/model.htm?index"},{i:"清纯美女写真",h:"http://www.2345.com/girl/av.htm?index"},{i:"火辣比基尼美女",h:"http://www.2345.com/girl/bijini.htm?index"}],
[{i:"精美桌面壁纸",h:"http://www.2345.com/hot/pic2012/?index"},{i:"搜狗皮肤下载",h:"http://www.2345.com/hot/pic2012/sogouskins.htm?index"},{i:"QQ聊天表情",h:"http://image.soso.com/web/sort/s_ii_gif/s_bq_xldw.shtml?pid=p.in.bq"},{i:"搞笑趣图",h:"http://www.2345.com/joke.htm#picm"}]
];

var img_str_1='',img_str_2='';
for(var k=0;k<search_img[0].length;k++){
  img_str_1 += '<a href="'+search_img[0][k]["h"]+'" name="2">'+search_img[0][k]["i"]+'</a>';
}
$('bd_ad').innerHTML = img_str_1;

for(var kk=0;kk<search_img[1].length;kk++){
  img_str_2 += '<a href="'+search_img[1][kk]["h"]+'" name="2">'+search_img[1][kk]["i"]+'</a>';
}
$('ggsspan').innerHTML = img_str_2;