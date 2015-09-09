$(window).scroll(function(){
	if ($(window).scrollTop() >= 120) {
		$('.header').addClass('scroll');
	}else{
		$('.header').removeClass('scroll');
	}
});
