/**
* @����  <yanggw@2345.com>
* @����  2012/12/10
* @����  ������������
*/
T.hotNews = {
	'data' : [[{'ctitle':'���ǿ�ðͻ�˹̹ ��6����������','title':'���ǿ�ðͻ�˹̹ ��6����������','link':'http://finance.ifeng.com/news/pic/detail_2013_05/23/25616348_0.shtml#p=1?_2345','class':'class="fred"'},{'ctitle':'֣��ҹ�����Ļ����ӭ�ֳ����͡�','title':'֣��ҹ�����Ļ����ӭ�ֳ����͡�','link':'http://finance.ifeng.com/roll/20130523/8065211.shtml?_2345','class':''},{'ctitle':'����������ɱ����Ҫ��ʬ���ٸ�Ǯ','title':'����������ɱ����Ҫ��ʬ���ٸ�Ǯ','link':'http://finance.ifeng.com/roll/20130522/8060459.shtml?_2345','class':''},{'ctitle':'����3��Ա͵����ί��� ��ί����','title':'����3��Ա͵����ί��� ��ί����','link':'http://finance.ifeng.com/roll/20130523/8065298.shtml?_2345','class':''},{'ctitle':'��У��Я��Ů�����󵱵ؼ�������','title':'��У��Я��Ů�����󵱵ؼ�������','link':'http://finance.ifeng.com/roll/20130523/8065323.shtml?_2345','class':''}],[{'ctitle':'Ӣ��Ů�Ӽ޵�ɽ�� ��ǿ���Ϸ�','title':'Ӣ��Ů�Ӽ޵�ɽ�� ��ǿ���Ϸ�','link':'http://news.ifeng.com/shendu/nfrwzk/detail_2013_05/23/25612583_0.shtml?_2345','class':'class="fred"'},{'ctitle':'�Ǿ����������˺��߿��ʸ�','title':'�Ǿ����������˺��߿��ʸ�','link':'http://news.ifeng.com/shendu/zgzk/detail_2013_05/22/25584309_0.shtml?_2345','class':''},{'ctitle':'90������΢��������40Ů����','title':'90������΢��������40Ů����','link':'http://news.ifeng.com/society/1/detail_2013_05/22/25602348_0.shtml?_2345','class':''},{'ctitle':'ҹ�����Ļ�֡���ӭ�ֳ�������','title':'ҹ�����Ļ�֡���ӭ�ֳ�������','link':'http://news.ifeng.com/mainland/detail_2013_05/23/25606890_0.shtml?_2345','class':''},{'ctitle':'���ӱ�ԩ���ּ顱����6��','title':'���ӱ�ԩ���ּ顱����6��','link':'http://news.ifeng.com/society/1/detail_2013_05/23/25616126_0.shtml?_2345','class':''}],[{'ctitle':'��ģ������Ƭ���»��������߹�','title':'��ģ������Ƭ���»��������߹�','link':'http://fashion.ifeng.com/news/detail_2013_05/23/25615336_0.shtml?_2345','class':'class="fred"'},{'ctitle':'���������ᡰ���ǡ�С��˿','title':'���������ᡰ���ǡ�С��˿','link':'http://ent.ifeng.com/photo/hot/detail_2013_05/23/25618143_0.shtml?_2345','class':'class="pic"'},{'ctitle':'������Ů����˹��С���Ѹ��ɶ�','title':'������Ů����˹��С���Ѹ��ɶ�','link':'http://ent.ifeng.com/movie/special/66thcannes/zuixin/detail_2013_05/23/25617706_0.shtml?_2345','class':''},{'ctitle':'��־���赸��ʦ���������ɶ�','title':'��־���赸��ʦ���������ɶ�','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/22/25598272_0.shtml?_2345','class':''},{'ctitle':'���Ů���ִ�߶ȱ���','title':'���Ů���ִ�߶ȱ���','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/22/25574881_0.shtml?_2345','class':''}],[{'ctitle':'��ž��ѻ��ּ�ѵ �⼮����ִ��','title':'��ž��ѻ��ּ�ѵ �⼮����ִ��','link':'http://m2n.chinaiiss.com/html/20135/22/a29cd1.html','class':''},{'ctitle':'�й�������ĸ����ɸְ��и�','title':'�й�������ĸ����ɸְ��и�','link':'http://m2n.chinaiiss.com/html/20135/22/a29ccf.html','class':''},{'ctitle':'�й������Ƚ��ʰ��� �ƾ���פ��','title':'�й������Ƚ��ʰ��� �ƾ���פ��','link':'http://m2n.chinaiiss.com/html/20135/22/a29bf4.html','class':''},{'ctitle':'���й����ս������Լ�ܺ�','title':'���й����ս������Լ�ܺ�','link':'http://m2n.chinaiiss.com/html/20135/22/a29bf3.html','class':'class="fred"'},{'ctitle':'�й��Ӱͻ�˹̹������ս������','title':'�й��Ӱͻ�˹̹������ս������','link':'http://m2n.chinaiiss.com/html/20135/22/a29bf0.html','class':'class="pic"'}]],
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