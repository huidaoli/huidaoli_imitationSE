var search_img = [
[{i:"�����Ը���Ů",h:"http://www.2345.com/zt/girl.htm?index"},{i:"�Ը�����ģ��",h:"http://www.2345.com/girl/model.htm?index"},{i:"�崿��Ůд��",h:"http://www.2345.com/girl/av.htm?index"},{i:"�����Ȼ�����Ů",h:"http://www.2345.com/girl/bijini.htm?index"}],
[{i:"���������ֽ",h:"http://www.2345.com/hot/pic2012/?index"},{i:"�ѹ�Ƥ������",h:"http://www.2345.com/hot/pic2012/sogouskins.htm?index"},{i:"QQ�������",h:"http://image.soso.com/web/sort/s_ii_gif/s_bq_xldw.shtml?pid=p.in.bq"},{i:"��ЦȤͼ",h:"http://www.2345.com/joke.htm#picm"}]
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