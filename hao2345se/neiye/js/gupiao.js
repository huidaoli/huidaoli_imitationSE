window.onload = function(){
	getStock();
	try{
		window.setInterval(getStock,6000);
	}catch(e){}
}

function getJs(src,func){
	var _ = document.createElement("SCRIPT");
    _.onreadystatechange = _.onload = function() {
		if (typeof _.readyState === "undefined" || _.readyState == "loaded" || _.readyState == "complete") 
		{
			try {
				func()
			} finally {
				if (_ && _.parentNode) _.parentNode.removeChild(_);
				_.onreadystatechange = null;
				_.onload = null;
				_ = null
			}
		}
	}
	_.src = src;
    _.type = "text/javascript";
    var C = document.getElementsByTagName("HEAD")[0];
    C.insertBefore(_, C.firstChild)
}


var closeDate = [];
closeDate = ["0101", "0102", "0103", "0202", "0203", "0204", "0205", "0206", "0207", "0208", "0403", "0404", "0405", "0430", "0501", "0502", "0604", "0605", "0606", "0910", "0911", "0912", "1001", "1002", "1003", "1004", "1005", "1006", "1007"];
var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

function getStock() {
	var url = "http://cjhq.baidu.com/quote?s4=000001.sh,399001.sz,399300.sz,"+new Date();
    getJs(url, function() {
		setStock(stockRes);
    })
}

function setStock(sr){
	var j = 1;
	for (var i in sr)
	{
		var t = sr[i];
		if(i == 'tofnow'){
			var srtime = t.time;
			var ss = srtime.split(/[\s\-:]/g);
			so = ss[0];
			sg = ss[1];
			sl = ss[2];
			sk = ss[3];
			smi = ss[4];
			st = ss[5];
			var se = new Date(parseInt(so, 10), parseInt(sg, 10) - 1, parseInt(sl, 10), parseInt(sk, 10), parseInt(smi, 10), parseInt(st, 10));
			var sq = new Date();
			var serverTimeDistance = Math.max();

			serverTimeDistance = Math.max(se.getTime() - sq.getTime(), serverTimeDistance);
			sf = se.getDay().toString();
			$('openstate').innerHTML = (!openState(sf, sk + smi, sg + sl) ? "闭市！": "开市！");
			$('svtm').innerHTML = so + "年" + sg + "月" + sl + "日 " + sk + ":" + smi + " " + weekdays[se.getDay()];
			return true;
		}
		$('price'+j).innerHTML = sr[i].la +'<span>'+commaFix(parseFloat(t.la) - parseFloat(t.pc), 3)+'</span>';
		$('price'+j).className = parseFloat(sr[i].la) >= parseFloat(sr[i].pc) ? "z": "d";
		
		j++;
	} 
}

function openState(b, c, a) {
    if (b == 0 || b == 6) {
        return false
    } else {
        if (inArray(this.closeDate, a)) {
            return false
        } else {
            if ((c >= "0929" && c <= "1130") || (c >= "1300" && c <= "1500")) {
                return true
            } else {
                return false
            }
        }
    }
}

function inArray(a, c) {
    for (var b = 0; b < a.length; b++) {
        if (c === a[b]) {
            return true
        }
    }
    return false
}

function commaFix(g, f, a) {
    a = a || ",";
    var c = (g < 0);
    g = Math.abs(g);
    f = f || 0;
    var e = "";
    if (f == -1) {
        e = g.toString()
    } else {
        e = g.toFixed(f)
    }
    var h = e.indexOf(".");
    if (h == -1) {
        h = e.length
    }
    while (h > 3) {
        h -= 3;
        var d = e.substr(0, h),
        b = e.substr(h);
        e = d + a + b
    }
    if (c) {
        e = "-" + e
    }
    return e
}
