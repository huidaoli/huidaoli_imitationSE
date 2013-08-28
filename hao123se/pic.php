<?php 
$p=$_GET['p']; 
$pics=file($p); 
for($i=0;$i< count($pics);$i++) 
{ 
echo $pics[$i]; 
} 
?>

// 新闻图片功能，勿删