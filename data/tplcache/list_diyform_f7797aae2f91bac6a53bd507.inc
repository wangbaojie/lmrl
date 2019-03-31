<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>" />
<title><?php echo $diy->name; ?> - powered by dedecms</title>
<link href="img/nspage.css" rel="stylesheet" type="text/css" />
</head>
<body>

<div class="main mceneter">
	<div class="toplogo">
		<div class="logo">
				<a href="/"><img src="<?php echo $cfg_templeturl; ?>/default/images/logo.gif" /></a>
		</div>
		<div class="title">
			<?php echo $diy->name; ?>
			&nbsp; [<a href='diy.php?action=post&diyid=<?php echo $diy->diyid; ?>'>发布信息</a>]
		</div>
	</div>
	<div class="cmain">
		<div class="ctitle">
			<h1><?php echo $diy->name; ?>内容列表</h1>
			<span></span>
		</div>
		<div class="cbox mceneter">
			<div class="maplist">
			<br />
<?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
<table class='listtable' cellspacing="1">
<?php
if(!empty($fields))
{
		echo '<tbody>';
		echo '<tr><td bgcolor="#eeeeee" width="20%">id</td>';
		echo '<td bgcolor="#eeeeee"><div class="left">'.$fields['id'].'</div><div class="right"><a href="diy.php?action=view&diyid='.$diy->diyid.'&id='.$fields['id'].'" target="_blank">详细...</a> &nbsp;</div></td></tr>';
		foreach($fieldlist as $field=>$fielddata)
		{
			if($fields[$field]=='') continue;
			if($fielddata[1]=='img')
			{
				$fields[$field] = "<a href='{$fields[$field]}' target='_blank'><img src='img/addon.gif' border='0' /> 图片附件</a>\r\n";
			}
			else if($fielddata[1]=='addon')
			{
				$fields[$field] = "<a href='{$fields[$field]}' target='_blank'><img src='img/addon.gif' border='0' /> 其它附件</a>";
			}
            
                  //联动类型显示修正开始 
else if($fielddata[1]=='stepselect') 
{ 
$db->Execute('me',"SELECT * FROM `dede_stepselect` WHERE itemname='{$fielddata[0]}'"); 
while($arr = $db->GetArray(me)) 
{ 
$egroup = $arr['egroup']; 
} 
$fields[$field] = Getenums("{$fields[$field]}",$egroup); 
} 
//联动类型显示修正结束      
            
            
            
			else
			{
				if($fielddata[1]=='htmltext') $fields[$field] = html2text($fields[$field]);
				else $fields[$field] = dede_htmlspecialchars($fields[$field]);
				if( strlen($fields[$field]) > 250 )
				{
					$fields[$field] = cn_substr( $fields[$field], 250).'...';
				}
			}
			echo "<tr><td bgcolor='#ffffff'>{$fielddata[0]}</td><td bgcolor='#ffffff'>{$fields[$field]}</td></tr>\r\n";
		}
		echo '</tbody>';
}else{
	echo "<tr><td bgcolor='#ffffff'>暂无记录</td></tr>";
}
?>
</table>
<?php
}
} 
function Getenums($evalue=0,$egroup) 
{ 
if( !isset($GLOBALS['em_'.$egroup.'s']) ) 
{ 
$cachefile = DEDEDATA.'/enums/'.$egroup.'.php'; 
if(!file_exists($cachefile)) 
{ 
require_once(DEDEINC.'/enums.func.php'); 
WriteEnumsCache(); 
} 
if(!file_exists($cachefile)) 
{ 
return ''; 
} 
else 
{ 
require_once($cachefile); 
} 
} 
if($evalue>=500) 
{ 
if($evalue % 500 == 0) 
{ 
return (isset($GLOBALS['em_'.$egroup.'s'][$evalue]) ? $GLOBALS['em_'.$egroup.'s'][$evalue] : ''); 
} 
else if (preg_match("#([0-9]{1,})\.([0-9]{1,})#", $evalue, $matchs)) 
{ 
$esonvalue = $matchs[1]; 
$etopvalue = $esonvalue - ($esonvalue % 500); 
$esecvalue = $evalue; 
$GLOBALS['em_'.$egroup.'s'][$etopvalue] = empty($GLOBALS['em_'.$egroup.'s'][$etopvalue])? '' 
: $GLOBALS['em_'.$egroup.'s'][$etopvalue]; 
$GLOBALS['em_'.$egroup.'s'][$esonvalue] = empty($GLOBALS['em_'.$egroup.'s'][$esonvalue])? '' 
: $GLOBALS['em_'.$egroup.'s'][$esonvalue]; 
$GLOBALS['em_'.$egroup.'s'][$esecvalue] = empty($GLOBALS['em_'.$egroup.'s'][$esecvalue])? '' 
: $GLOBALS['em_'.$egroup.'s'][$esecvalue]; 
return $GLOBALS['em_'.$egroup.'s'][$etopvalue].' - '.$GLOBALS['em_'.$egroup.'s'][$esonvalue].' - '.$GLOBALS['em_'.$egroup.'s'][$esecvalue]; 
} 
else 
{ 
$elimit = $evalue % 500; 
$erevalue = $evalue - $elimit; 
$GLOBALS['em_'.$egroup.'s'][$erevalue] = empty($GLOBALS['em_'.$egroup.'s'][$erevalue])? '' 
: $GLOBALS['em_'.$egroup.'s'][$erevalue]; 
$GLOBALS['em_'.$egroup.'s'][$evalue] = empty($GLOBALS['em_'.$egroup.'s'][$evalue])? '' 
: $GLOBALS['em_'.$egroup.'s'][$evalue]; 
return $GLOBALS['em_'.$egroup.'s'][$erevalue].' - '.$GLOBALS['em_'.$egroup.'s'][$evalue]; 
} 
} 
} 
?> 







<table class='listtable' cellspacing="2">
<tr><td bgcolor="#ffffff"><?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '5';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>
</td></tr>
</table>
			</div>
		</div>
	</div>
</div>

<div class="copyright mceneter">
Powered by <a href="http://www.dedecms.com" target="_blank">DedeCMS</a> &copy; 2004-2009  <a href="http://www.desdev.cn" target="_blank">DesDev</a> Inc.
</div>

</body>
</html>