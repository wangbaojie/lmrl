
-----------------------------------------------

<m:top item='1_' name='常用操作' display='block'>
  <m:item name='网站栏目管理' link='catalog_main.php' rank='t_List,t_AccList' target='main' />
  <m:item name='所有档案列表' link='content_list.php' rank='a_List,a_AccList' target='main' />
  <m:item name='更新系统缓存' link='sys_cache_up.php' rank='sys_ArcBatch' target='main' />
  <m:item name='更新主页HTML' link='makehtml_homepage.php' rank='sys_MakeHtml' target='main' />
  <m:item name='更新栏目HTML' link='makehtml_list.php' rank='sys_MakeHtml' target='main' />
  <m:item name='一键更新网站' link='makehtml_all.php' rank='sys_MakeHtml' target='main' />
  <m:item name='内容回收站' link='recycling.php'   rank='a_List,a_AccList,a_MyList' target='main' />
</m:top>



<m:top item='1_' name='频道模型' display='block' rank='t_List,t_AccList,c_List,temp_One'>
  <m:item name='内容模型管理' link='mychannel_main.php' rank='c_List' target='main' />
  <m:item name='联动类别管理' link='stepselect_main.php' rank='c_Stepseclect' target='main' />
  <m:item name='自由列表管理' link='freelist_main.php' rank='c_List' target='main' />
  <m:item name='自定义表单' link='diy_main.php' rank='c_List' target='main' />
</m:top>


<m:top item='3_' name='采集管理' display='none' rank='co_NewRule,co_ListNote,co_ViewNote,co_Switch,co_GetOut'>
  <m:item name='采集节点管理' link='co_main.php' rank='co_ListNote' target='main' />
  <m:item name='临时内容管理' link='co_url.php' rank='co_ViewNote' target='main' />
  <m:item name='导入采集规则' link='co_get_corule.php' rank='co_GetOut' target='main'/>
  <m:item name='监控采集模式' link='co_gather_start.php' rank='co_GetOut' target='main'/>
  <m:item name='采集未下载内容' link='co_do.php?dopost=coall' rank='co_GetOut' target='main'/>
</m:top>






<m:top item='6_' name='会员管理' display='none' rank='member_List,member_Type'>
  <m:item name='注册会员列表' link='member_main.php' rank='member_List' target='main' />
  <m:item name='会员级别设置' link='member_rank.php' rank='member_Type' target='main' />
  <m:item name='积分头衔设置' link='member_scores.php' rank='member_Type' target='main' />
  <m:item name='会员模型管理' link='member_model_main.php' rank='member_Type' target='main' />
  <m:item name='会员短信管理' link='member_pm.php' rank='member_Type' target='main' />
  <m:item name='会员留言管理' link='member_guestbook.php' rank='member_Type' target='main' />
  <m:item name='会员动态管理' link='member_info_main.php?type=feed' rank='member_Type' target='main' />
  <m:item name='会员心情管理' link='member_info_main.php?type=mood' rank='member_Type' target='main' />
</m:top>

<m:top item='7_' name='模板管理' display='none' rank='temp_One,temp_Other,temp_MyTag,temp_test,temp_All'>
  <m:item name='默认模板管理' link='templets_main.php' rank='temp_All' target='main'/>
  <m:item name='标签源码管理' link='templets_tagsource.php' rank='temp_All' target='main'/>
  <m:item name='自定义宏标记' link='mytag_main.php' rank='temp_MyTag' target='main'/>
  <m:item name='智能标记向导' link='mytag_tag_guide.php' rank='temp_Other' target='main'/>
  <m:item name='全局标记测试' link='tag_test.php' rank='temp_Test' target='main'/>
</m:top>

<m:top item='1_' name='系统设置' display='none' rank='sys_User,sys_Group,sys_Edit,sys_Log,sys_Data'>
  <m:item name='系统基本参数' link='sys_info.php' rank='sys_Edit' target='main' />
  <m:item name='友情链接管理' link='friendlink_main.php' rank='sys_Att' target='main' />
  <m:item name='数据库备份/还原' link='sys_data.php' rank='sys_Data' target='main' />
  <m:item name='SQL命令行工具' link='sys_sql_query.php' rank='sys_Data' target='main' />
  <m:item name='默认模板管理' link='templets_main.php' rank='temp_All' target='main'/>
  <m:item name='系统用户管理' link='sys_admin_user.php' rank='sys_User' target='main' />
  <m:item name='图片水印设置' link='sys_info_mark.php' rank='sys_Edit' target='main' />
  <m:item name='自定义文档属性' link='content_att.php' rank='sys_Att' target='main' />
</m:top>



    


-----------------------------------------------
