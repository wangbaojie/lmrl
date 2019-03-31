/*!
 * index_style_lq v1.1.1 
*/

/*--menu--*/
$(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 1) {
                $(".nav_xiala_xx").addClass("fixedNav");
            } else {
                $(".nav_xiala_xx").removeClass("fixedNav");
            }
        });
    });

/*--banner--*/
jQuery(".fullSlide").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.5) },function(){ jQuery(this).find(".prev,.next").fadeOut() });				jQuery(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click",			startFun:function(i){				var curLi = jQuery(".fullSlide .bd li").eq(i); 				if( !!curLi.attr("_src") ){					curLi.css("background-image",curLi.attr("_src")).removeAttr("_src") 				}			}		});	
      var kurl = window.location.href.replace("http://", '');

        if (kurl.length - document.domain.length < 2) {

            $(".0").addClass("another").siblings().removeClass("another");

        };
        jQuery(".slideBox").slide({
            mainCell: ".bd ul",
            autoPlay: true
        });
		
    /*--anli gundong--*/
    $(function () {
            $(".cases_box1").slide({mainCell: ".cases_box2 dl", effect: "leftLoop", autoPlay: true, vis: 4, scroll: 1, delayTime:300, prevCell: ".k01", nextCell: ".k02" });			
        }); 
   
//progress
        jQuery(".cjfm-cen").slide({mainCell:"ul",autoPlay:true,effect:"leftMarquee",vis:4,interTime:20,trigger:"click"});
      // news
    $(function(){
        $('.news-center .title li').each(function(index){
          $(this).mouseenter(function(){
            $(this).addClass('n-active').siblings().removeClass('n-active');
            $('.news-center .center ul:eq('+index+')').css('display','block').siblings().css('display','none');
          })
        });
    });

     // [if !IE]>
     (function () {
        window.scrollReveal = new scrollReveal({
          reset: false//是否重复加载动画，改为false为不重复
        });
      })();
    // <![endif]