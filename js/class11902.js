



//banner效果封装

(function($) {

	$.fn.banner = function(o) {

		$.extend({

			time: 500,

			animStyle: true,

			addclass:addclass

		},

		o || {});

		var iNow = 0;

		var timer = null;

		var oDiv = $(this);

		var oUl = oDiv.children('ul');

		var aLi = $('li', oUl);

		var oneSize = aLi.eq(0).width();

		var animStyle = o.animStyle ? 'left': 'opacity';

		var addclass=o.addclass;

		//alert(oneSize);

		var time = o.time;

		oDiv.css({

			'position': 'relative'

		});

		$('<div class="banner_index"><ul></ul></div>').appendTo(oDiv);

		var bannerIndex = $('.banner_index ul', oDiv);



		aLi.each(function(i) {

			if (animStyle == 'opacity') {

				if ($(this).index() == 0) {

					$(this).css({

						'opacity': 1,

					});

				

				} else {

					$(this).css({

						'opacity': 0

					});

					

				}

				$(this).css({

					'position': 'absolute',

					'left': 0,

					'top': 0

				});

			} else {

				oUl.css({

					'width': oneSize * aLi.size(),

					'position': 'absolute',

					'left': 0

				});

			}

			$('<li></li>').appendTo(bannerIndex);

			//console.log(oDiv.width() + '||' + $(this).index() + '||' + oneSize);



		});






        			

		aLi.eq(iNow).addClass(addclass);

		

		var _this = aLi;

		function fnNext(iNow) {

			_this.eq(iNow).addClass(addclass).siblings('li').removeClass(addclass);

			
/*
			$('li', bannerIndex).eq(iNow).css({

				'background-image': 'url(/img/banner_index_red.png)'

			}).siblings('li').css({

				'background-image': 'url(/img/banner_index_white.png)'

			});
*/
			if (!o.animStyle) {

				for (var i = 0; i < _this.length; i++) {

					if (i > iNow) {

						_this.eq(i).stop(true, true).animate({

							'opacity': 0,

							'z-index':0,

						},

						time);

					} else if (i < iNow) {

						_this.eq(i).stop(true, true).animate({

							'opacity': 0,

							'z-index':0,

						},

						time);

					} else {

						_this.eq(i).stop(true, true).animate({



							'opacity': 1,

							'z-index':1,

						},

						time);

					}

				}

			} else {

				oUl.stop().animate({

					'left': -iNow * oneSize

				});

			}



		}



		timer = setInterval(function() {

			if (iNow == _this.length - 1) {

				iNow = 0

			} else {

				iNow++;



			}

			fnNext(iNow);

		},

		1000);



		$('li', bannerIndex).each(function() {



			$(this).mouseover(function() {

				clearInterval(timer);

				iNow = $(this).index();

				fnNext(iNow);				

				

			});

			$(this).mouseout(function() {	

				clearInterval(timer);

				timer = setInterval(function() {

					if (iNow == _this.length - 1) {

						iNow = 0

					} else {

						iNow++;



					}

					fnNext(iNow);

				},

				1000);

			});



		});

	}

})(jQuery);



//按钮banner

$(function() {

	

	var len = $("#bannergd ul li").length; //获取焦点图个数

	var index = 0;

	var picTimer;

	

	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮

	var btn = "<div class='btn'>";

	for(var i=0; i < len; i++) {

		btn += "<span></span>";

	}

	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";

	$("#bannergd").append(btn);



	//为小按钮添加鼠标滑入事件，以显示相应的内容

	$("#bannergd .btn span").css("opacity",1).mouseover(function() {

		index = $("#bannergd .btn span").index(this);

		showPics(index);

	}).eq(0).trigger("mouseover");




	//上一页按钮

	$("#bannergd .pre").click(function() {

		index -= 1;

		if(index == -1) {index = len - 1;}

		showPics(index);

	});




	$("#bannergd .next").click(function() {

		index += 1;

		if(index == len) {index = 0;}

		showPics(index);

	});

	


	$("#bannergd").on("swiperight",function(){

		index -= 1;

		if(index == -1) {index = len - 1;}

		showPics(index);

	});

$("#bannergd").on("swipeleft",function(){

		index += 1;

		if(index == len) {index = 0;}

		showPics(index);

	});

	$("#bannergd").hover(function() {

		clearInterval(picTimer);

	},function() {

		picTimer = setInterval(function() {

			showPics(index);

			index++;

			if(index == len) {index = 0;}

		},3000);

	}).trigger("mouseleave");

	

	

	function showPics(index) { 

		$("#bannergd .btn span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on"); 

		$("#bannergd ul li").stop(true,false).animate({"opacity":"0"},1500).css("z-index",0).removeClass("bannerdh").eq(index).stop(true,false).animate({"opacity":"1"},1500).addClass("bannerdh").css("z-index",1); 

	}

});