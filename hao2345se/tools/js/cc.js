//µã»÷Í³¼Æ
function my_2345_2012_cc(a) {

    var b = arguments,

    web = "ajax29",

    a2,

    i1 = document.cookie.indexOf("uUiD="),

    i2;

    if (b.length > 1) web = b[1];

    if (i1 != -1) {

        i2 = document.cookie.indexOf(";", i1);

        a2 = i2 != -1 ? document.cookie.substring(i1 + 5, i2) : document.cookie.substr(i1 + 5)

    }

    if (!a2) {

        a2 = Math.floor(Math.random() * 100000) + "" + new Date().getTime() + Math.floor(Math.random() * 100000);

        document.cookie = "uUiD=" + a2 + ";expires=Thu, 21 Sep 2096 10:37:29 GMT; path=/"

    }

    if (a.length > 0) {

        var c = "http://union2.50bang.org/web/" + web + "?uId2=SPTNPQRLSX&uId=" + a2 + "&r=" + encodeURIComponent(location.href) + "&lO=" + encodeURIComponent(a);

        my_2345_2012_loadJs(c)

    }

    return true

}

function my_2345_2012_loadJs(a){

        var b = document.createElement("script");

        b.setAttribute("type", "text/javascript");

        b.setAttribute("src", a);

        document.getElementsByTagName("head")[0].appendChild(b);

        return true
    }