/**
* @����  <yanggw@2345.com>
* @����  2012/12/10
* @����  ������������
*/
T.hotNews = {
	'data' : [[{'ctitle':'��������ɱӤ������������','title':'��������ɱӤ������������','link':'http://finance.ifeng.com/roll/20130527/8078990.shtml?_2345','class':'class="fred"'},{'ctitle':'������������Ƶ��ϸ���ع�','title':'������������Ƶ��ϸ���ع�','link':'http://finance.ifeng.com/roll/20130527/8077073.shtml?_2345','class':''},{'ctitle':'���Ȼ�ݳ����л��������','title':'���Ȼ�ݳ����л��������','link':'http://finance.ifeng.com/roll/20130527/8077756.shtml?_2345','class':''},{'ctitle':'������Ů��¶����Ѱ������','title':'������Ů��¶����Ѱ������','link':'http://finance.ifeng.com/roll/20130527/8078687.shtml?_2345','class':''},{'ctitle':'������������ ��ʬ3000Ԫ','title':'������������ ��ʬ3000Ԫ','link':'http://finance.ifeng.com/news/pic/detail_2013_05/27/25740614_0.shtml?_2345','class':'class="pic"'}],[{'ctitle':'56����ʦ����16��СѧŮ��','title':'56����ʦ����16��СѧŮ��','link':'http://news.ifeng.com/photo/hdsociety/detail_2013_05/27/25743390_0.shtml#p=1?_2345','class':'class="fred"'},{'ctitle':'����ЯС���ؼ�ˤ��������','title':'����ЯС���ؼ�ˤ��������','link':'http://news.ifeng.com/society/1/detail_2013_05/27/25740077_0.shtml?_2345','class':''},{'ctitle':'���ݼ�׹5��Ů����׵����','title':'���ݼ�׹5��Ů����׵����','link':'http://news.ifeng.com/society/2/detail_2013_05/27/25754383_0.shtml?_2345','class':''},{'ctitle':'3��Ůͯ�����ھ�����ǿ��','title':'3��Ůͯ�����ھ�����ǿ��','link':'http://news.ifeng.com/society/1/detail_2013_05/27/25758251_0.shtml?_2345','class':''},{'ctitle':'�����ڹ���С�㱻��1000Ԫ','title':'�����ڹ���С�㱻��1000Ԫ','link':'http://news.ifeng.com/society/2/detail_2013_05/27/25748248_0.shtml?_2345','class':''}],[{'ctitle':'����Ů��ȫ���Ŵ󵨵ڶ�','title':'����Ů��ȫ���Ŵ󵨵ڶ�','link':'http://fashion.ifeng.com/news/detail_2013_05/27/25741978_0.shtml?_2345','class':'class="fred"'},{'ctitle':'������16��ǰд������̻¶','title':'������16��ǰд������̻¶','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/27/25740578_0.shtml?_2345','class':''},{'ctitle':'��ģ15����������Լ�','title':'��ģ15����������Լ�','link':'http://ent.ifeng.com/idolnews/mingxingmiwen/detail_2013_05/27/25745987_0.shtml?_2345','class':''},{'ctitle':'��ǫ���ڱ���ѵ��Ů��','title':'��ǫ���ڱ���ѵ��Ů��','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/27/25752562_0.shtml?_2345','class':''},{'ctitle':'��ģ��Ϸ���������Ӽ���','title':'��ģ��Ϸ���������Ӽ���','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/27/25741363_0.shtml?_2345','class':''}],[{'ctitle':'��ž��������ܱ������ĵ�','title':'��ž��������ܱ������ĵ�','link':'http://m2n.chinaiiss.com/html/20135/27/a2a009.html','class':'class="pic"'},{'ctitle':'����ĸͻ���Ϻ������й�','title':'����ĸͻ���Ϻ������й�','link':'http://m2n.chinaiiss.com/html/20135/27/a2a00e.html','class':''},{'ctitle':'�й����󽢶����Ϻ������','title':'�й����󽢶����Ϻ������','link':'http://m2n.chinaiiss.com/html/20135/27/a2a00c.html','class':''},{'ctitle':'��ý�����ž����ز���','title':'��ý�����ž����ز���','link':'http://m2n.chinaiiss.com/html/20135/27/a2a008.html','class':''},{'ctitle':'���վ�����׷�й�Ԫ��Ǳͧ','title':'���վ�����׷�й�Ԫ��Ǳͧ','link':'http://m2n.chinaiiss.com/html/20135/27/a2a005.html','class':'class="fred"'}]],
	'tabCN': 'cur',
	'curr' : 0,
	'getIndex' : function (a)
	{
		var ret=-1,i=0,items=this.items,len=items.length;
		for(; i<len; i++)
		{
			if (a===items[i])
			{
				ret=i;
				break;
			}
		}
		return ret;
	}
	,
	'render' : function (index)
	{
		var data = this.data[index], i = 0, len = data.length, str = '', temp;
		for (; i < len; i++)
		{
			temp = data[i];
			str += '<li><a '+ temp['class']+'href="' +temp['link']+'" name="2"  title="' + temp['title'] + '">' + temp['ctitle'] + '</a></li>';
		}
		this.con.innerHTML = str;
	}
	,
	'toggleCls' :function (index)
	{
		var prevItem =  this.items[this.curr], currItem =  this.items[index];
		prevItem.className =  prevItem.className.replace(this.tabCN,'');
		this.curr = index;
		currItem.className =  currItem.className.trim()+' '+ this.tabCN;
	}
	,
	'init' : function (tab,con)
	{
		var self = this;
		this.tab = tab;
		this.items = $t('LI',this.tab);
		this.con = con;
		this.render(0);
		this.tab.onclick =  function (e)
		{
			var e = e || event,target = e.target || e.srcElement,index,p;
			if (target.nodeName === 'A')
			{
				p = target.parentNode;
				if (p.className.indexOf(self.tabCN) !== -1)
				{
					return;
				}
				index = self.getIndex(p)
					self.render(index);
				self.toggleCls(index);
				return false;
			}
		}
	}
	};
T.hotNews.init($('J_hotNews_tab'),$('J_hotNews_con'));