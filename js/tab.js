// JavaScript Document
$(function(){

	$(".qhdh li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
          $(".qhnr").hide().eq(index).show();
	});
	
	$(".qhdh1 li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
          $(".qhnr1").hide().eq(index).show();
	});	
	
	$(".qhdh2 li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
          $(".qhnr2").hide().eq(index).show();
	});	
	

	
});

function ChangeDiv(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; 
//将所有的层都隐藏 
} 
document.getElementById(divName+divId).style.display="block"; 
//显示当前层 
} 
