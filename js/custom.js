$(function () {
    //首页banner
    $(".bxybanner>ul").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false
    });

    //滚动效果1
    $(".bxygdqh1>ul").owlCarousel({
        items:1,
        autoplay: true,
		autoplayTimeout: 3000,
		margin:1,
        loop: true,
        nav: true,
        navText: false,
        dots: false
    });
	
    //滚动效果2
    $(".bxygdqh2>ul").owlCarousel({
        items:4,
        autoplay: true,
		autoplayTimeout: 3000,
		margin:14,
        loop: true,
        nav: true,
        navText: false,
        dots: false
    });
	
	//滚动效果3
    $(".bxygdqh3>ul").owlCarousel({
        items: 4,
        autoplay: true,
		autoplayTimeout: 3000,
		margin:15,
        loop: true,
        nav: true,
        navText: false,
        dots: false
    });
	
    //滚动效果4
    $(".bxygdqh4>ul").owlCarousel({
        items: 4,
        autoplay: true,
		autoplayTimeout: 3000,
		margin:15,
        loop: true,
        nav: true,
        navText: false,
        dots: false
    });
	

	
});