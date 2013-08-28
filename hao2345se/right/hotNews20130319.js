/**
* @作者  <yanggw@2345.com>
* @日期  2012/12/10
* @功能  产生热门新闻
*/
T.hotNews = {
	'data' : [[{'ctitle':'长春盗车杀婴主犯被判死刑','title':'长春盗车杀婴主犯被判死刑','link':'http://finance.ifeng.com/roll/20130527/8078990.shtml?_2345','class':'class="fred"'},{'ctitle':'雷政富不雅视频案细节曝光','title':'雷政富不雅视频案细节曝光','link':'http://finance.ifeng.com/roll/20130527/8077073.shtml?_2345','class':''},{'ctitle':'华侨会馆撤下中华民国国旗','title':'华侨会馆撤下中华民国国旗','link':'http://finance.ifeng.com/roll/20130527/8077756.shtml?_2345','class':''},{'ctitle':'博主发女子露点照寻好心人','title':'博主发女子露点照寻好心人','link':'http://finance.ifeng.com/roll/20130527/8078687.shtml?_2345','class':''},{'ctitle':'情侣跳河身亡 捞尸3000元','title':'情侣跳河身亡 捞尸3000元','link':'http://finance.ifeng.com/news/pic/detail_2013_05/27/25740614_0.shtml?_2345','class':'class="pic"'}],[{'ctitle':'56岁老师性侵16名小学女生','title':'56岁老师性侵16名小学女生','link':'http://news.ifeng.com/photo/hdsociety/detail_2013_05/27/25743390_0.shtml#p=1?_2345','class':'class="fred"'},{'ctitle':'男子携小三回家摔亲生儿子','title':'男子携小三回家摔亲生儿子','link':'http://news.ifeng.com/society/1/detail_2013_05/27/25740077_0.shtml?_2345','class':''},{'ctitle':'电梯急坠5层女子腰椎骨折','title':'电梯急坠5层女子腰椎骨折','link':'http://news.ifeng.com/society/2/detail_2013_05/27/25754383_0.shtml?_2345','class':''},{'ctitle':'3岁女童疑遭邻居男子强暴','title':'3岁女童疑遭邻居男子强暴','link':'http://news.ifeng.com/society/1/detail_2013_05/27/25758251_0.shtml?_2345','class':''},{'ctitle':'工人在工地小便被罚1000元','title':'工人在工地小便被罚1000元','link':'http://news.ifeng.com/society/2/detail_2013_05/27/25748248_0.shtml?_2345','class':''}],[{'ctitle':'韩国女性全球穿着大胆第二','title':'韩国女性全球穿着大胆第二','link':'http://fashion.ifeng.com/news/detail_2013_05/27/25741978_0.shtml?_2345','class':'class="fred"'},{'ctitle':'张曼玉16年前写真上身袒露','title':'张曼玉16年前写真上身袒露','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/27/25740578_0.shtml?_2345','class':''},{'ctitle':'嫩模15万陪酒疑遭迷奸','title':'嫩模15万陪酒疑遭迷奸','link':'http://ent.ifeng.com/idolnews/mingxingmiwen/detail_2013_05/27/25745987_0.shtml?_2345','class':''},{'ctitle':'刘谦车内爆粗训哭女友','title':'刘谦车内爆粗训哭女友','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/27/25752562_0.shtml?_2345','class':''},{'ctitle':'嫩模拍戏大解放与男子激吻','title':'嫩模拍戏大解放与男子激吻','link':'http://ent.ifeng.com/idolnews/hk/detail_2013_05/27/25741363_0.shtml?_2345','class':''}],[{'ctitle':'解放军大批机密被卫星拍到','title':'解放军大批机密被卫星拍到','link':'http://m2n.chinaiiss.com/html/20135/27/a2a009.html','class':'class="pic"'},{'ctitle':'美航母突进南海威慑中国','title':'美航母突进南海威慑中国','link':'http://m2n.chinaiiss.com/html/20135/27/a2a00e.html','class':''},{'ctitle':'中国三大舰队在南海大军演','title':'中国三大舰队在南海大军演','link':'http://m2n.chinaiiss.com/html/20135/27/a2a00c.html','class':''},{'ctitle':'外媒解读解放军神秘部门','title':'外媒解读解放军神秘部门','link':'http://m2n.chinaiiss.com/html/20135/27/a2a008.html','class':''},{'ctitle':'美日军舰紧追中国元级潜艇','title':'美日军舰紧追中国元级潜艇','link':'http://m2n.chinaiiss.com/html/20135/27/a2a005.html','class':'class="fred"'}]],
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