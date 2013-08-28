function tab() {
  var m = [];
  m[0] = [],m[1] = [],m[2] = [],m[3] = [],m[4] = []
  m[0]['src'] = 'http://www.jiuku.com/app/2345new/';
  m[1]['src'] = 'http://web.kugou.com/2345_new.html';
  m[2]['src'] = 'http://player.kuwo.cn/webmusic/webmusic2011/hao123/index_web2345.jsp?f=web2345';
  m[3]['src'] = 'http://www.xiami.com/kuang/daohang2345';
  m[4]['src'] = 'http://app.beva.com/2345/fm/navfm.html';
  m[0]['id'] = '9k';
  m[1]['id'] = 'kg';
  m[2]['id'] = 'kw';
  m[3]['id'] = 'db';
  m[4]['id'] = 'bw';
  m[0]['cc'] = 'music-jiuku';
  m[1]['cc'] = 'music-kugo';
  m[2]['cc'] = 'music-kuwo';
  m[3]['cc'] = 'music-xiami';
  m[4]['cc'] = 'music-beiwa';
  var obj = document.getElementById('m_nav');
  var lists = obj.getElementsByTagName("a");
  //给第一个右边先绑定事件
  var c = GetCookie('cur') || 0;
  lists[c].className = "mcur";
  document.getElementById(m[c]['id']).style.display = 'block'
  document.getElementById('fm').src = m[c]['src'];
  var fdiv = document.getElementById(m[c]['id']).getElementsByTagName("div")[0];
  var flist = fdiv.getElementsByTagName("a");
  for(var f=0; f<flist.length; f++) {
    flist[f].onclick = (function(f) {
      return function() {
        for(var l=0; l<flist.length; l++) {
          flist[l].className = "";
        }
        flist[f].className = "tagcur";
        document.getElementById(m[c]['id']).getElementsByTagName("div")[f+1].style.display = 'none'; 
        document.getElementById(m[c]['id']).getElementsByTagName("div")[(f+1)%2+1].style.display = 'block'; 
      }
    })(f)
  }
  //给所有绑定事件
  for(var i=0; i < 5; i++){   
    lists[i].onclick = (function(i){
      return function(){
        for(var j=0; j<5; j++) {
          lists[j].className = "";
          //右边
          //alert(m[j]['id']);
          document.getElementById(m[j]['id']).style.display = 'none';
        }
        //SetCookie('cur',i,3600);
        lists[i].className = "mcur";
        document.getElementById('fm').src = m[i]['src'];
        cc(m[i]['cc']); //统计        
        var robj = document.getElementById(m[i]['id']);
        robj.style.display = 'block';
        //右边tab事件,第一个div标签
        var odiv = robj.getElementsByTagName("div")[0];
        var alist = odiv.getElementsByTagName("a");
        for(var k=0; k<alist.length; k++) {
          alist[k].onclick = (function(k) {
            return function() {
              for(var n=0; n<alist.length; n++) {
                alist[n].className = "";
              }
              alist[k].className = "tagcur";
              robj.getElementsByTagName("div")[k+1].style.display = 'none'; 
              robj.getElementsByTagName("div")[(k+1)%2+1].style.display = 'block'; 
            }
          })(k)
        }
      }
    })(i)
  }  
}

//弹框
function opendig() {
  cc('music-box');
  var ofm = document.getElementById('fm');
  var fsrc = ofm.src;
  ofm.src = '';
  ofm.style.display = 'none';
  document.getElementById('stopBtnWrap').style.display = 'block';
  var op = window.open('musicbox.htm','newwindow','height=500,width=700,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
  document.getElementById('stopBtn').onclick = function() {
    ofm.style.display = 'block';
    ofm.src = fsrc;
    document.getElementById('stopBtnWrap').style.display = 'none';
    op.close();
  }
}

function smusic() {
  var o = document.getElementById('s');
  var ms = document.getElementById('m_search');
  var alist = ms.getElementsByTagName('a');
  var j=1;
  var s = [];
  s[1] = 'http://mp3.baidu.com/m?f=ms&rf=idx&tn=baidump3&ct=134217728&lf=&rn=&word=';
  s[2] = 'http://www.google.cn/music/search?q=';
  s[3] = 'http://mp3.sogou.com/music.so?query=';
  o.onclick = function(e) {
    ms.style.display = 'block';
    for(var i=0; i < alist.length; i++){
      alist[i].onclick = (function(i){
        return function(){
          j = i+1;
          o.innerHTML = alist[i].innerHTML;
          ms.style.display = 'none';
        }
      })(i)
    }
     document.onclick = function(e) {
      var e = e || event;
      var target = e.srcElement || e.target;
      if(target.id != 's') {
        ms.style.display = 'none';
        document.onclick = function(){};
      }
    }
  }
  
  //提交搜索
  var obtn = document.getElementById('s_btn');
  var okey = document.getElementById('s_key');
  obtn.onclick = function() {
    if(okey.value.length < 1) {
      alert('关键词不能为空');
      return false;
    }
    var k = okey.value;
    if(j == 2) {
       k= encodeURIComponent(k);
    }
    window.open(s[j]+k);
  }  
}

function SetCookie(name, value,expiredays){
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  cookieVal=name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
  document.cookie=cookieVal;
}
function GetCookie(name){
  if (document.cookie.length>0)
    {
    c_start=document.cookie.indexOf(name + "=")
    if (c_start!=-1)
      { 
      c_start=c_start + name.length+1 
      c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
      } 
    }
  return ""
}


function loadJs(_url) {
  var callback = arguments[1] || function() {
	};
	var _script = document.createElement("SCRIPT");
	_script.setAttribute("type", "text/javascript");
	_script.setAttribute("src", _url);
	document.getElementsByTagName("head")[0].appendChild(_script);
	if (document.all) {
		_script.onreadystatechange = function() {
			if (/onload|loaded|complete/.test(_script.readyState)) {
				callback && callback();
			}
		};
	} else {
		_script.onload = function() {
			callback();
		};
	}
}

function cc(a) {
    var b = arguments,
    web = "ajax6",
    a2,
    i1 = document.cookie.indexOf("uUiD="),
    i2;
    if (b.length > 1) web = b[1];
    if (i1 != -1) {
        i2 = document.cookie.indexOf(";", i1);
        a2 = i2 != -1 ? document.cookie.substring(i1 + 5, i2) : document.cookie.substr(i1 + 5);
    }
    if (!a2) {
        a2 = Math.floor(Math.random() * 100000) + "" + new Date().getTime() + Math.floor(Math.random() * 100000);
        document.cookie = "uUiD=" + a2 + ";expires=Thu, 21 Sep 2096 10:37:29 GMT; path=/";
    }
    if (a.length > 0) {
    	var from=location.search;
    	if(from=='?fgz'){
    		from='_fgz';
    	}else{
    		from='';
    	}
        var c = "http://union2.50bang.org/web/" + web + "?uId2=SPTNPQRLSX&uId=" + a2 + "&r=" + encodeURIComponent(location.href) + "&lO=" + encodeURIComponent(a)+ from;
        loadJs(c);
    }
    return true;
}


tab('m_nav');