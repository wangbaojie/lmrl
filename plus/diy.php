<?php
/**
 *
 * 自定义表单
 *
 * @version        $Id: diy.php 1 15:38 2010年7月8日Z tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__)."/../include/common.inc.php");

$diyid = isset($diyid) && is_numeric($diyid) ? $diyid : 0;
$action = isset($action) && in_array($action, array('post', 'list', 'view')) ? $action : 'post';
$id = isset($id) && is_numeric($id) ? $id : 0;

if(empty($diyid))
{
    showMsg('非法操作!', 'javascript:;');
    exit();
}

require_once DEDEINC.'/diyform.cls.php';
$diy = new diyform($diyid);

/*----------------------------
function Post(){ }
---------------------------*/
if($action == 'post')
{
    if(empty($do))
    {
        $postform = $diy->getForm(true);
        include DEDEROOT."/templets/plus/{$diy->postTemplate}";
        exit();
    }
    elseif($do == 2)
    {
        $dede_fields = empty($dede_fields) ? '' : trim($dede_fields);
        $dede_fieldshash = empty($dede_fieldshash) ? '' : trim($dede_fieldshash);
        if(!empty($dede_fields))
        {
            if($dede_fieldshash != md5($dede_fields.$cfg_cookie_encode))
            {
                showMsg('数据校验不对，程序返回', '-1');
                exit();
            }
        }
        $diyform = $dsql->getOne("select * from #@__diyforms where diyid='$diyid' ");
        if(!is_array($diyform))
        {
            showmsg('自定义表单不存在', '-1');
            exit();
        }

        $addvar = $addvalue = '';

        if(!empty($dede_fields))
        {

            $fieldarr = explode(';', $dede_fields);
            if(is_array($fieldarr))
            {
                foreach($fieldarr as $field)
                {
                    if($field == '') continue;
                    $fieldinfo = explode(',', $field);
                    if($fieldinfo[1] == 'textdata')
                    {
                        ${$fieldinfo[0]} = FilterSearch(stripslashes(${$fieldinfo[0]}));
                        ${$fieldinfo[0]} = addslashes(${$fieldinfo[0]});
                    }
					
/*这里写一些时间，ip，来源页面*/					
if($fieldinfo[0] == 'ip')  
{  
${$fieldinfo[0]}=GetIP();  
} 
if($fieldinfo[0] == 'time')  
{  
${$fieldinfo[0]}=date('Y-m-d H:i:s');  
}					
if($fieldinfo[0] == 'laiyuan')  
{  
${$fieldinfo[0]}=$_SERVER['HTTP_REFERER'];  
} 
/*这里写一些时间，ip，来源页面*/		
									
                    else
                    {
                        ${$fieldinfo[0]} = GetFieldValue(${$fieldinfo[0]}, $fieldinfo[1],0,'add','','diy', $fieldinfo[0]);
                    }
                    $addvar .= ', `'.$fieldinfo[0].'`';
                    $addvalue .= ", '".${$fieldinfo[0]}."'";
                }
            }

        }

        $query = "INSERT INTO `{$diy->table}` (`id`, `ifcheck` $addvar)  VALUES (NULL, 0 $addvalue); ";
		
		
/*这里是留言到邮箱的*/		
$mailtitle = $name."提交表单通知";

$mailbody = "
姓名：{$name}\r\n
电话：{$tel}\r\n
邮箱：{$email}\r\n
备注：{$beizhu}\r\n
提交时间：{$time}\r\n
来源页面：{$laiyuan}\r\n
IP地址：{$ip}\r\n"
; /*这里是留言到邮箱的一些选项*/	

$headers = $cfg_adminemail;

$mailtype = 'TXT';

require_once(DEDEINC.'/mail.class.php');

$smtp = new smtp($cfg_smtp_server,$cfg_smtp_port,true,$cfg_smtp_usermail,$cfg_smtp_password);

$smtp->debug = false;

$smtp->sendmail($cfg_smtp_usermail,$cfg_webname ,$cfg_smtp_usermail, $mailtitle, $mailbody, $mailtype);

$cfg_smtp_usermail2="18724004032@163.com";/*这里可以添加多个邮箱,比如xx1@qq.com,xx2@qq.com*/	

$smtp->sendmail($cfg_smtp_usermail2,$cfg_webname ,$cfg_smtp_usermail, $mailtitle, $mailbody, $mailtype);
/*这里是留言到邮箱的*/	
		
		

        if($dsql->ExecuteNoneQuery($query))
        {
            $id = $dsql->GetLastID();
            if($diy->public == 2)
            {
                //diy.php?action=view&diyid={$diy->diyid}&id=$id
               echo "<script>alert('信息提交成功，请等待管理员处理!');self.location=document.referrer;</script>";/*当前页面显示并返回提交页面且刷新提交页面，此处为不公开表单提示语*/
			   /*echo "<script>alert('信息提交成功，请等待管理员处理!');history.go(-1);</script>";*/ /*当前页面显示并返回提交页面，此处为公开表单提示语*/
			   /*echo "<script>alert('信息提交成功，请等待管理员处理!');location.href='/';</script>";*/ /*当前页面显示并返回首页，此处为公开表单提示语*/
            }
            else
            {
                echo "<script>alert('信息提交成功，请等待管理员处理!');self.location=document.referrer;</script>";/*当前页面显示并返回提交页面且刷新提交页面，此处为不公开表单提示语*/
            }
        }
    }
}
/*----------------------------
function list(){ }
---------------------------*/
else if($action == 'list')
{
    if(empty($diy->public))
    {
        showMsg('后台关闭前台浏览', 'javascript:;');
        exit();
    }
    include_once DEDEINC.'/datalistcp.class.php';
    if($diy->public == 2)
        $query = "SELECT * FROM `{$diy->table}` ORDER BY id DESC";
    else
        $query = "SELECT * FROM `{$diy->table}` WHERE ifcheck=1 ORDER BY id DESC";

    $datalist = new DataListCP();
    $datalist->pageSize = 10;
    $datalist->SetParameter('action', 'list');
    $datalist->SetParameter('diyid', $diyid);
    $datalist->SetTemplate(DEDEINC."/../templets/plus/{$diy->listTemplate}");
    $datalist->SetSource($query);
    $fieldlist = $diy->getFieldList();
    $datalist->Display();
}
else if($action == 'view')
{
    if(empty($diy->public))
    {
        showMsg('后台关闭前台浏览' , 'javascript:;');
        exit();
    }

    if(empty($id))
    {
        showMsg('非法操作！未指定id', 'javascript:;');
        exit();
    }
    if($diy->public == 2)
    {
        $query = "SELECT * FROM {$diy->table} WHERE id='$id' ";
    }
    else
    {
        $query = "SELECT * FROM {$diy->table} WHERE id='$id' AND ifcheck=1";
    }
    $row = $dsql->GetOne($query);

    if(!is_array($row))
    {
        showmsg('你访问的记录不存在或未经审核', '-1');
        exit();
    }

    $fieldlist = $diy->getFieldList();
    include DEDEROOT."/templets/plus/{$diy->viewTemplate}";
}