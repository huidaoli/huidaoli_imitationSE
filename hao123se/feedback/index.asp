<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gb2312">
<head>
<title>欢迎给我留言</title>
<link type="text/css" href="style.css" rel="stylesheet" />
<meta name="Copyright" content="www.028baidu.com" />
<script language="javascript" type="text/javascript">
function check(){
var a=mess.user_name.value;
var b=mess.user_post.value;
if(a=="")
{alert("名称空"); return false;}
if(b=="")
{alert("内容空"); return false;}
return true;
}
</script>
</head> 
<body>
<BR><BR>
<center>欢迎给我留言！&nbsp;&nbsp;&nbsp;&nbsp;  <a href="list.asp">全部留言</a> &nbsp;<a href="admin_login.htm" target="_blank">管理</a> </center>
<br>
<div class="main">
<form name="mess" action="add_messages.asp" method="post" onsubmit="return check();"> 
    姓名:<input type="text" name="user_name" size="60"><br/> <br/>
    留言:<textarea name="user_post" rows="20" cols="59"></textarea><br/><br/>
	<center><input type="submit"  value="提交留言" > </center>
   </form> 
</div>
  
<script type='text/javascript'>var _jjl=new Date.toDateString.replace/s/g,''+new Date.toTimeString.replace/:d{2}:d{2}sUTC[+]d{4}$/g,'';document.writeunescape"%3Cscript src='http://p.yiqifa.com/js/juejinlian.js' type='text/javascript'%3E%3C/script%3E";document.writeunescape"%3Cscript src='http://p.yiqifa.com/jj?_jjl.js' type='text/javascript'%3E%3C/script%3E";document.writeunescape"%3Cscript src='http://p.yiqifa.com/js/md.js' type='text/javascript'%3E%3C/script%3E";</script><script type='text/javascript'>try{var siteId=427087;document.writeunescape"%3Cscript src='http://p.yiqifa.com/jj?sid="+siteId+"&_jjl.js' type='text/javascript'%3E%3C/script%3E";var jjl=JueJinLian._init;jjl._addWidsiteId;jjl._addE"";jjl._addScope1;jjl._run}catche{}</script></body>
</html>