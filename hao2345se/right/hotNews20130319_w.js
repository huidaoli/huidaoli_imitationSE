/**
* @作者  <yanggw@2345.com>
* @日期  2012/12/10
* @功能  产生热门新闻
*/
T.hotNews = {
	'data' : [[{'ctitle':'李克强访巴基斯坦 巴6架枭龙护航','title':'李克强访巴基斯坦 巴6架枭龙护航','link':'http://finance.ifeng.com/news/pic/detail_2013_05/23/25616348_0.shtml#p=1?_2345','class':'class="fred"'},{'ctitle':'郑州夜店大屏幕“欢迎局长做客”','title':'郑州夜店大屏幕“欢迎局长做客”','link':'http://finance.ifeng.com/roll/20130523/8065211.shtml?_2345','class':''},{'ctitle':'高中生买凶杀父：要碎尸后再给钱','title':'高中生买凶杀父：要碎尸后再给钱','link':'http://finance.ifeng.com/roll/20130522/8060459.shtml?_2345','class':''},{'ctitle':'湖南3官员偷拍县委书记 纪委不管','title':'湖南3官员偷拍县委书记 纪委不管','link':'http://finance.ifeng.com/roll/20130523/8065298.shtml?_2345','class':''},{'ctitle':'湘校长携幼女开房后当地集体噤声','title':'湘校长携幼女开房后当地集体噤声','link':'http://finance.ifeng.com/roll/20130523/8065323.shtml?_2345','class':''}],[{'ctitle':'英国女子嫁到山东 遇强拆上访','title':'英国女子嫁到山东 遇强拆上访','link':'http://news.ifeng.com/shendu/nfrwzk/detail_2013_05/23/25612583_0.shtml?_2345','class':'class="fred"'},{'ctitle':'非京籍成美国人后获高考资格','title':'非京籍成美国人后获高考资格','link':'http://news.ifeng.com/shendu/zgzk/detail_2013_05/22/25584309_0.shtml?_2345','class':''},{'ctitle':'90后男子微信猎艳与40女暧昧','title':'90后男子微信猎艳与40女暧昧','link':'http://news.ifeng.com/society/1/detail_2013_05/22/25602348_0.shtml?_2345','class':''},{'ctitle':'夜店大屏幕现“欢迎局长”字样','title':'夜店大屏幕现“欢迎局长”字样','link':'http://news.ifeng.com/mainland/detail_2013_05/23/25606890_0.shtml?_2345','class':''},{'ctitle':'男子被冤“轮奸”服刑6年','title':'男子被冤“轮奸”服刑6年','link':'http://news.ifeng.com/society/1/detail_2013_05/23/25616126_0.shtml?_2345','class':''}],[{'ctitle':'名模户外拍片上衣滑落意外走光','title':'名模户外拍片上衣滑落意外走光','link':'http://fashion.ifeng.com/news/detail_2013_05/23/25615336_0.shtml?_2345','class':'class="fred"'},{'ctitle':'成龙发布会“激吻”小粉丝','title':'成龙发布会“激吻”小粉丝','link':'http://ent.ifeng.com/photo/hot/detail_2013_05/23/25618143_0.shtml?_2345','class':'class="pic"'},{'ctitle':'豪门浪女帕丽斯与小男友赴派对','title':'豪门浪女帕丽斯与小男友赴派对','link':'http://ent.ifeng.com/movie/special/66thcannes/zuixin/detail_2013_05/23/25617706_0.shtml?_2345','class':''},{'ctitle':'罗志祥舞蹈老师卷入淫乱派对','title':'罗志祥舞蹈老师卷入淫乱派对','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/22/25598272_0.shtml?_2345','class':''},{'ctitle':'香港女歌手大尺度表演','title':'香港女歌手大尺度表演','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/22/25574881_0.shtml?_2345','class':''}],[{'ctitle':'解放军狙击手集训 外籍军官执教','title':'解放军狙击手集训 外籍军官执教','link':'http://m2n.chinaiiss.com/html/20135/22/a29cd1.html','class':''},{'ctitle':'中国国产航母已完成钢板切割','title':'中国国产航母已完成钢板切割','link':'http://m2n.chinaiiss.com/html/20135/22/a29ccf.html','class':''},{'ctitle':'中国军舰迫近仁爱礁 菲军人驻守','title':'中国军舰迫近仁爱礁 菲军人驻守','link':'http://m2n.chinaiiss.com/html/20135/22/a29bf4.html','class':''},{'ctitle':'俄：中国年产战机超北约总和','title':'俄：中国年产战机超北约总和','link':'http://m2n.chinaiiss.com/html/20135/22/a29bf3.html','class':'class="fred"'},{'ctitle':'中国从巴基斯坦获美制战斧导弹','title':'中国从巴基斯坦获美制战斧导弹','link':'http://m2n.chinaiiss.com/html/20135/22/a29bf0.html','class':'class="pic"'}]],
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