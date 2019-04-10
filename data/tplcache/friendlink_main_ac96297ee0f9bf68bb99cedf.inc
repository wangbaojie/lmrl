<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $cfg_soft_lang; ?>">
<title>友情链接管理</title>
<link href="css/base.css" rel="stylesheet" type='text/css'>
<script language='javascript'>
function Sel(stype)
{
	  for(var i=0;i < document.getElementsByName('aids').length;i++)
	  {
		  if(stype=='all') document.getElementsByName('aids')[i].checked=true;
		  else document.getElementsByName('aids')[i].checked=false;
	  }
}
function checkSubmit()
{
	var str = '';
	for(var i=0;i < document.getElementsByName('aids').length;i++)
	{
		  if(document.getElementsByName('aids')[i].checked){
		  	if(str=='') str += document.getElementsByName('aids')[i].value;
		  	else str += ',' + document.getElementsByName('aids')[i].value;
		  }
	}
	if(str=='')
	{
		alert('你没选择任何内容！');
		return false;
	}
	else
	{
		location="friendlink_edit.php?aids="+str+"&dopost=delall";
	}
}
</script>
</head>
<body background='images/allbg.gif'>

<table width="100%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#D6D6D6">
  <tr>
    <td height="28" background="images/tbg.gif" colspan="8" style="padding-left:10px;">
  <div style="float:left">
  	<b>友情链接管理</b>
	</div>
	<div style="float:right;padding-right:6px;">
		[<a href="friendlink_add.php"><u>增加链接</u></a>]
 	 	[<a href="friendlink_type.php"><u>网站类型管理</u></a>]
  	[<a href='<?php echo $GLOBALS['cfg_phpurl']; ?>/flink.php' target='_blank'><u>友情链接预览</u></a>]
  </div>
  </td>
</tr>
<tr>
   <td height="30" align="center" bgcolor="#F2F2F2"  colspan="8"> 
   <form action="friendlink_main.php" name="form1" method="get">
	  <table border="0" cellspacing="0" cellpadding="3">
      <tr>
          <td>关键字：</td>
          <td><input name="keyword" type="text" id="keyword" size="12" style="width:250px" value="<?php echo $keyword; ?>" /></td>
          <td>
          	<select name="ischeck" id="ischeck">
        			<?php
        			foreach($selCheckArr as $k=>$v)
        			{
        				if($k==$ischeck) echo "<option value='$k' selected>$v</option>\r\n";
        				else echo "<option value='$k'>$v</option>\r\n";
        			}
        			?>
						</select>
          </td>
          <td>
           <input name="imageField" class="np" type="submit" src="images/button_search.gif"  />
          </td>
        </tr>
      </table>
	  </form>
    </td>
</tr>
<form name='form1' method='post' action='friendlink_edit.php' onSubmit='return checkSubmit();'>
<input type='hidden' name='dopost' value='delall'/>
<input type='hidden' name='allid' value=''/>
<tr align="center" bgcolor="#F2F2F2" height="26">
          <td width="6%">选择</td>
          <td width="23%">网站名称</td>
          <td width="12%">网站Logo</td>
          <td width="15%">站长Email</td>
          <td width="15%">时间</td>
          <td width="8%">状态</td>
          <td width="8%">顺序</td>
          <td width="15%">管理</td>
        </tr>
        <?php
$atts = array();
$atts['tagname'] = 'datalist';
$blockValue = $this->refObj->GetArcList($atts,$this->refObj,$fields); 
if(is_array($blockValue)){
foreach( $blockValue as $key=>$fields )
{
?>
        <tr align="center" bgcolor="#FFFFFF" height="26" onMouseMove="javascript:this.bgColor='#F2F2F2';"
        	 onMouseOut="javascript:this.bgColor='#FFFFFF';">
          <td><input type='checkbox' name='aids' value='<?php echo $fields['id']; ?>' class='np'></td>
          <td><?php echo dede_htmlspecialchars($fields['webname']); ?><br><i>地址：<?php echo $fields['url']; ?></i></td>
          <td><?php echo GetPic($fields['logo']); ?></td>
          <td><?php echo $fields['email']; ?></td>
          <td><?php echo MyDate('Y-m-d',$fields['dtime']); ?></td>
          <td><?php echo GetSta($fields['ischeck']); ?></td>
          <td><?php echo $fields['sortrank']; ?></td>
          <td>
          	<a href='friendlink_edit.php?id=<?php echo $fields['id']; ?>&dopost=getedit'>[更改]</a>
		        <a href='friendlink_edit.php?id=<?php echo $fields['id']; ?>&dopost=delete'>[删除]</a>
		      </td>
        </tr>
		<?php
}
}?>
    </form>
     <tr bgcolor="#ffffff" height="28">
      <td colspan="8">
      	　
        <a href='#' onclick='Sel("all")' class='np coolbg'>[全选]</a>
      	<a href='#' onclick='Sel("none")' class='np coolbg'>[取消]</a>
      	<a href='#' onclick='checkSubmit()' class='np coolbg'>批量删除</a>

      </td>
     </tr>
     <tr align="center" bgcolor="#F2F2F2" height="28">
      <td colspan="8">
      	<?php
$atts = array();
$atts['tagname'] = 'pagelist';
$atts['listsize'] = '6';
 echo $this->refObj->GetPageList($atts,$this->refObj,$fields); 
?>

      </td>
     </tr>
   </table>
  </td>
</tr>
</table>
</body>
</html>