
 

function slideTo(eid,timer){
	var itemW = $(eid).find("ul li").outerWidth(true);
	var count = $(eid).find("ul li").size();
	$(eid).find("ul").width(itemW*count*2);
	$(eid).find("ul li").clone().appendTo($(eid).find("ul"));
	var scleft = $(eid).scrollLeft();
	var scr = function(){
		timer = setInterval(function(){
			$(eid).scrollLeft(scleft+=1)
			if(scleft>=itemW*count){
				clearInterval(timer);
				scleft = 0;
				scr();
			}
		},!-[1,]?5:10);
	}
	scr();
	
	$(eid).hover(function(){clearInterval(timer)},function(){scr();});
}

function scrollBox(fw){
	$("#scrollBox ul").width($("#scrollBox ul li").size()*72);
	$("#scrollBox").stop(true,true).animate({scrollLeft:$("#scrollBox").scrollLeft()+72*fw+"px"},400);
}

function rate(){
	$(".ratesbox input:radio[name=rate]").change(function(){
		$(".rate").removeClass().addClass("rate rate"+$(this).val())	
		
	});	
}

function docscroll(eid){
	$("html,body").animate({scrollTop:$(eid).offset().top+"px"},800,"swing");	
}

function copyUrl(){
	try{
		window.clipboardData.setData('text', document.location.href);	
		alert("链接已复制到剪贴板\n你可以按Crtl+V粘贴发送给朋友！");
	}catch(e){
		alert("您的浏览器不支持此操作，请手动复制")		
	}
}

function fav(){
	$(".hright .tips").fadeIn(200,function(){
		setTimeout(function(){
			$(".hright .tips").fadeOut(200);	
		},5000);	
	});	
}

function AddFavorite(){
	sURL=document.location.href;
	sTitle=document.title;
	try{
		window.external.addFavorite(sURL,sTitle)
	}catch(e){
		try{
			window.sidebar.addPanel(sTitle,sURL,"")
		}catch(e){
			alert("加入收藏失败，请使用Ctrl+D进行添加")
		}
	}
}

function SetHome(obj){
	vrl = window.location;
	try
	{
			obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}
	catch(e){
			if(window.netscape) {
					try {
							netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
					}
					catch (e) {
							alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将[signed.applets.codebase_principal_support]设置为'true'");
					}
					var prefs = Components.classes['_40mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
					prefs.setCharPref('browser.startup.homepage',vrl);
			 }
	}
}