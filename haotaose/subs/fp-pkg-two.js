KISSY.app("TAOWANGZHI");TAOWANGZHI.Config = {
    bwordSrc:["http://a.tbcdn.cn/p/tao123/1.0/fp/fp-bword-pkg.js"],
    page:{
        g:{
            url:"http://www.google.com.hk/search",
            search:"q"
        }
        ,sougou:{
            url:"http://www.sogou.com/sogou",
            search:"query"
        }
    },
    music:{
        g:{url:"http://www.google.cn/music/search",
            search:"q"}
    },
    video:{
        g:{url:"http://www.google.com.hk/search",
            search:"q"}
        ,sougou:{url:"http://video.gougou.com/search",
            search:"s"}
    },
    image:{
        g:{url:"http://images.google.com.hk/images",
            search:"q"}
    },
    map:{
        g:{url:"http://ditu.google.com/maps",
            search:"q"}
    },
    news:{
        g:{url:"http://news.google.com/",
            search:"q"}
    },
    swfstoreSrc:"http://a.tbcdn.cn/p/tao123/1.0/fp/swfstore.swf",
    swfaudioSrc:"/static/images/niftyplayer.swf",
    bellSrc:["http://a.tbcdn.cn/p/tao123/1.0/fp/fp-bell-pkg-min.css","http://a.tbcdn.cn/p/tao123/1.0/fp/fp-bell-pkg-min.js"],
    timezoneSrc:["http://a.tbcdn.cn/p/tao123/1.0/fp/fp-timezone-pkg-min.css",
        //"/fed/fed/2010/tao123/src/fp/timezone.js?t=20100806c"
        "http://a.tbcdn.cn/p/tao123/1.0/fp/fp-timezone-pkg-min.js?t=20100806b"
    ],
    quickSearch: "http://123.taobao.com/search/json.php?q=",
    aList: ['http://www.google.com.hk/search',
        'http://www.google.cn/music/search',
        'http://www.google.com.hk/videohp?hl=zh-CN&tab=wv',
        'http://images.google.com.hk/images',
        'http://ditu.google.com/maps',
        'http://news.google.com.hk/news'
    ],
    abList: ['http://s.taobao.com/search',
        'http://www.google.cn/music/search',
        'http://images.google.com.hk/images',
        'http://www.google.com.hk/videohp?hl=zh-CN&tab=wv',
        'http://ditu.google.com/maps',
        'http://baike.baidu.com/notexists'
    ],
    siteRec: '/collectsite/my.php',
    logout: '/logout.php'
};/**
 simple dynamic loader implementation for kissy
 @author yiminghe@gmail.com(chengyu)
 */
 TAOWANGZHI.add("taowangzhi-loader", function (T) {
    var S = KISSY,css_re = /\.css(\?.+)?$/,
        js_re = /\.js(\?.+)?$/,
        head = document.getElementsByTagName("head")[0],
        cacheRess = {};

    function loadRess(ress, callback) {
        //protect arguments
        ress = ress.slice(0);

        function loadRes() {
            if (ress.length == 0) {
                callback && callback();
                return;
            }
            js_re.lastIndex = 0;
            css_re.lastIndex = 0;
            var res = ress.shift();
            if (cacheRess[res]) {
                loadRes();
                return;
            }
            if (css_re.test(res)) {
                var css = document.createElement("link");
                css.type = "text/css";
                css.rel = "stylesheet";
                css.href = res;
                head.appendChild(css);
                cacheRess[res] = true;
                loadRes();
            } else if (js_re.test(res)) {
                S.Ajax.getScript(res, function () {
                    cacheRess[res] = true;
                    loadRes();
                });
            }
        }

        loadRes();
    }

    T.loadRess = loadRess;
});/**
 * global timezone data management and cache
 * @author yiminghe@gmail.com(chengyu)
 * @description
 * for timezone and bell
 */
TAOWANGZHI.add("taowangzhi-timezone-data-management", function(T) {
    var S=KISSY,timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000
            ,swfStore = T.swfStore;

    var config = {
        timezone:8,
        city:"北京"
    };
    var TIMEZONE_STORE_CONST = "timezone20100806b"
            ,JSON = S.JSON;


    function getTimeZoneDate() {
        var now = new Date().getTime();
        now = getTimesByTimeZone(now, config.timezone);
        return new Date(now);
    }


    function getTimesByTimeZone(now, timezone) {
        return  now + timezoneOffset + timezone * 60 * 60 * 1000;
    }

    function getSpecTimeZoneDate(timezone) {
        var now = new Date().getTime();
        now = getTimesByTimeZone(now, timezone);
        return new Date(now);
    }

    function padding(str) {
        return ("0" + str).slice(-2);
    }

    function getSpecTimeZoneDateStr(now, timezone) {
        now = getTimesByTimeZone(now, timezone);
        var d = new Date(now);
        return padding(d.getHours()) + ":" + padding(d.getMinutes()) + ":" + padding(d.getSeconds());
    }

    function getTimeZoneConfig() {
        return config;
    }


    function setTimeZone(tz, city) {
        config = {
            timezone:tz,
            city:city
        };
        swfStore.setItem(TIMEZONE_STORE_CONST, JSON.stringify(config));
        T.TimeZoneMgr.fire("change", config);
    }

    T.TimeZoneMgr = {
        getTimeZoneDate: getTimeZoneDate
        ,getTimeZoneConfig:getTimeZoneConfig
        ,setTimeZone:setTimeZone
        ,getSpecTimeZoneDate:getSpecTimeZoneDate
        ,getSpecTimeZoneDateStr:getSpecTimeZoneDateStr
    };

    S.mix(T.TimeZoneMgr, S.EventTarget);

});

function googleHint(a) {
    getObj("gsuggest") && getObj("gsuggest").parentNode.removeChild(getObj("gsuggest"));
    var b = document.body.appendChild(document.createElement("script"));
    b.language = "javascript";
    b.id = "gsuggest";
    b.charset = "utf-8";
    b.src = "http://www.google.cn/complete/search?hl=zh-CN&client=suggest&js=true&q=" + encodeURIComponent(a)
};

var currentInput;
function myhint(a, searchType) {
	a = a||event;
    var b = a.target||a.srcElement,
	c = getObj("suggests");
	currentInput = b;
    if (!b.value || !b.value.length || a.keyCode == 27 || a.keyCode == 13) {
		c.style.display = "none";
	} else if (a.keyCode == 38 || a.keyCode == 40) {
		if (c.style.display != "none") {
			if (a.keyCode == 38) if (c._i == -1) c._i = c.firstChild.rows.length - 1;
			else c._i--;
			else c._i++;
			for (a = 0; a < c.firstChild.rows.length; a++) c.firstChild.rows[a].style.background = "#FFF";
			if (c._i >= 0 && c._i < c.firstChild.rows.length) with(c.firstChild.rows[c._i]) {
				style.background = "#E6E6E6";
				b.value = cells[0].attributes._h.value
			} else {
				b.value = c._kw;
				c._i = -1
			}
		}
	} else {
		c._i = -1;
		c._kw = b.value;
		if (searchType == 'tao') {
			taoHint(b.value);
		} else if (searchType == 'bai') {
			baiduHint(b.value);
		}else {
			googleHint(b.value);
		}
		with(c.style) width = b.offsetWidth - 2;
		c.style.top = b.getBoundingClientRect().top + b.offsetHeight -1 + 'px'
		c.style.left = b.getBoundingClientRect().left - document.documentElement.clientLeft  + 'px';
	}
};
window.google = {};
window.google.ac = {};
window.google.ac.h = function (a) {
    if (a && a[1] && a[0] == currentInput.value) {
        var b = "";
        a = a[1];
        for (var c = 0; c < a.length; c++) {
			if (a[c]) {
				b += "<tr style=\"cursor:pointer\" onmousedown=\""+'searchSubmit(\''+a[c][0]+'\');" onmouseover="javascript:this.style.background=\'#E6E6E6\'" onmouseout="javascript:this.style.background=\'#FFF\';"><td align="left" _h="' + a[c][0] + '">' + a[c][0] + '</td><td align="right" style="font-size:11.5px;">' + "</td></tr>";
			}
		}
        getObj("suggests").innerHTML = '<table width="100%" border="0" cellpadding="0" cellspacing="0">' + b + "</table>";
        setDisplay("suggests", 1)
    }
};

function baiduHint(a)
{
	getObj("gsuggest") && getObj("gsuggest").parentNode.removeChild(getObj("gsuggest"));
    var b = document.body.appendChild(document.createElement("script")), baiAPI = new Array(), searchType;
    b.language = "javascript";
    b.id = "gsuggest";
    b.charset = "gb2312";
    searchType = getObj('J_search-type').value;
	switch(searchType)
	{
		case 'music' :
			b.src = "http://nssug.baidu.com/su?wd=" + encodeURIComponent(a) + "&prod=mp3&t=1282727682131";
			break;
		case 'video' :
			b.src = "http://nssug.baidu.com/su?wd=" + encodeURIComponent(a) + "&prod=video&t=1282727954988";
			break;
		case 'image' :
			b.src = "http://nssug.baidu.com/su?wd=" + encodeURIComponent(a) + "&prod=image&t=1282727905846";
			break;
		case 'news' :
			b.src = "http://nssug.baidu.com/su?wd=" + encodeURIComponent(a) + "&prod=news&t=1282728079780";
			break;
		case 'page':
		default:
			b.src = "http://suggestion.baidu.com/su?p=3&cb=window.bdsug.sug&wd=" + encodeURIComponent(a);
			break;
	}
}

window.bdsug = {};
window.bdsug.sug = function (a) {
	if (a && a.q == currentInput.value) {
		 var b = "";
		 if (a.s.length > 0) {
			 for (var c = 0; c < a.s.length; c++) {
				if (a.s[c]) {
					var textHtml = a.s[c];
					if (a.s[c].length < 50) {
						for(var i=50; i>=a.s[c].length; i--) {
							textHtml += '&nbsp;';
						}
					}
					b += '<tr style=\"cursor:pointer\"  onmouseover="javascript:this.style.background=\'#E6E6E6\'" onmouseout="javascript:this.style.background=\'#FFF\';" onclick="setKeyWord(\''+ a.s[c]+'\', event);"><td align="left" _h="' + a.s[c] + '">' + a.s[c] + '</td><td align="right" style="font-size:11.5px;">' + "</td></tr>";
				}
			}
	        getObj("suggests").innerHTML = '<table width="100%" border="0" cellpadding="0" cellspacing="0">' + b + "</table>";
	        setDisplay("suggests", 1);
	    } else {
			setDisplay("suggests", 0);
		}
	} else {
		setDisplay("suggests", 0);
	}
}

window.baidu = {};
window.baidu.sug = function (a) {
	if (a && a.q == currentInput.value) {
		 var b = "";
		 if (a.s.length > 0) {
			 for (var c = 0; c < a.s.length; c++) {
				if (a.s[c]) {
					b += '<tr style=\"cursor:pointer\"  onmouseover="javascript:this.style.background=\'#E6E6E6\'" onmouseout="javascript:this.style.background=\'#FFF\';"  onclick="setKeyWord(\''+ a.s[c]+'\', event);"><td align="left" _h="' + a.s[c] + '">' + a.s[c] + '</td><td align="right" style="font-size:11.5px;">' + "</td></tr>";
				}
			}
	        getObj("suggests").innerHTML = '<table width="100%" border="0" cellpadding="0" cellspacing="0">' + b + "</table>";
	        setDisplay("suggests", 1);
	    } else {
			setDisplay("suggests", 0);
		}
	} else {
		setDisplay("suggests", 0);
	}
}

function getObj(a) {
     return document.getElementById(a)
};

function setDisplay(a, b) {
     if (getObj(a)) getObj(a).style.display = b ? "block" : "none"
};

function setKeyWord(keyword, e)
{
	e.halt || e.stopPropagation;
	getObj('gkeyword').value = keyword;
	googleSubmit(true);
}

var tdiv,dtid='dtip',tn=0,thn=0,thv,ths,ttip=true,winrow=new Array(dtid),winno='';
function taoHint(thv)
{
	getObj("gsuggest") && getObj("gsuggest").parentNode.removeChild(getObj("gsuggest"));
    var b = document.body.appendChild(document.createElement("script"));
    b.language = "javascript";
    b.id = "gsuggest";
    b.charset = "utf-8";
    b.src = "http://suggest.taobao.com/sug?code=utf-8&callback=fbk&q="+encodeURIComponent(thv);
}
function fbk(a)
{
	var e=a['result'],b,d="",tp,w=' 个宝贝',x=0;
	tn=e.length;
	thn=tn;
	if (tn) {
		for(b=0;b<tn;b++)
		{
			if(e[b])
			{
				 d += '<tr style="cursor:pointer;" onmouseover="javascript:this.style.background=\'#E6E6E6\'" onmouseout="javascript:this.style.background=\'#FFF\';"  onclick="setTaoKeyWord(\''+ e[b][0] + '\', event);"><td align="left" _h="' + e[b][0] + '">' + e[b][0] + '</td><td style="color:#090" align="right" style="font-size:11.5px;">约 ' +e[b][1]+w+ "</td></tr>";
			}
		}
	
		 getObj("suggests").innerHTML = '<table width="100%" border="0" cellpadding="0" cellspacing="0">' + d + "</table>";
	     setDisplay("suggests", 1);
	} else {
		setDisplay("suggests", 0);
	}
}

function setTaoKeyWord(keyword, e)
{
	e.halt || e.stopPropagation;
	getObj('tkeyword').value = keyword;
	setDisplay("suggests", 0);
	getObj('taosearchform').submit();
}

var STYLE_SEARCH_ID = 'searchfromhide';
function initStyle(S) {
	var styleEl = S.get('#' + STYLE_SEARCH_ID), DOM = S.DOM;
	if (styleEl) return;
	DOM.addStyleSheet('#suggests {background:none repeat scroll 0 0 #FFFFFF;display:none;left:80px;position:absolute;width:360px;z-index:5000;border: 0 1px 1px 1px solid #999999;}#suggests table tbody {border:1px solid #CCCCCC;}#suggests tr {padding:0;line-height: 24px;overflow:hidden}#suggests td {padding:0;font-size: 12px;margin-left: 0; padding-left: 5px;color: #4d4d4d;}', STYLE_SEARCH_ID);
}

KISSY.ready(function(S) {
	initStyle(S);
	var E = S.Event, DOM = S.DOM;
	S.one('body').on('click', function(e) {setDisplay('suggests', 0);});
	S.each(S.query('.keyword'), function(input, i) {
		DOM.attr(input, 'autocomplete', 'off');
		input.parentNode.target = '_blank';
		if (! getObj("suggests")) {
			var newElement = document.createElement('span'); 
			newElement.setAttribute('id', 'suggests');
			input.parentNode.parentNode.appendChild(newElement);
		}
		if (i === 0) {
			 E.on(input, 'keyup', function(e){
                 myhint(e, 'bai');
             });
			 if (input.parentNode.tagName == 'FORM') {
				E.on(input.parentNode, 'submit', function(e){
					googleSubmit(false);
				});
			 }
		} else {
			 E.on(input, 'keyup', function(e){
                 myhint(e, 'tao');
             });
		}
		 E.on(input, 'mousedown', function(){
			 setDisplay('suggests', 0)
		 });
	})

	var T = TAOWANGZHI,loadRess = T.loadRess;
	var ress = T.Config.bwordSrc;
	loadRess(ress, function() {});
});

function googleSubmit(isSubmit)
{
	var T = TAOWANGZHI,loadRess = T.loadRess, config = T.Config, search_type, sougou, g, form, f, inp;
	var ress = T.Config.bwordSrc;
	inp = getObj('gkeyword').value;
	form = getObj('gsearchform');
	search_type = getObj('J_search-type').value;
	setDisplay("suggests", 0);
	//异步插入关键词数据
	insertKeyWord(inp, search_type);
    loadRess(ress, function() {
		var bwords = T.BWORDS || [];
		g = config[search_type].g,
		sougou = config[search_type].sougou,
		form.action = g.url,
		f = g.search;
		if (sougou) {
			for (var i = 0; i < bwords.length; i++) {
				if (inp.indexOf(bwords[i]) != -1) {
					getObj('gkeyword').name = sougou.search;
					form.action = 'http://www.sogou.com/web';
					form.method = 'GET';
					return;
				}
			}
		}
	});
	
	if (isSubmit) {
		form.submit();
	}
}

function insertKeyWord(inp, type)
{
	new Image().src = 'http://123.taobao.com/gsearch.php?q=' + encodeURIComponent(inp) + '&search_type=' + encodeURIComponent(type);
}