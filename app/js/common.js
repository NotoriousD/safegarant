$(function() {

	$('.faq-open h4').click(function(){
		$(this).parents('.faq-open').toggleClass('faq-open-active');
	});

	$(".open-tab").on("click", function(e){
		e.preventDefault(); 
		var id = $(this).attr("href");
		$(this).addClass("open-tab-active").siblings(".open-tab").removeClass("open-tab-active");
		$(id).addClass("tab-active").siblings(".tab").removeClass("tab-active");
	});

	$('.create-toggle').click(function(){
		$('.toggle-1 .top-mnu').slideToggle(200);
		$('.toggle-1 .info-user').slideToggle(200);
	});

	$('.general-toggle').click(function(){
		$('.general-h .top-mnu').slideToggle(200);
		$('.general-h .login').slideToggle(200);
	});

	$('.open-popup-link').magnificPopup();

	$(window).on('scroll', function(){
		if($(this).scrollTop()>200){
			$('.header-create .top-line').addClass('posf');
		}else{
			$('.header-create .top-line').removeClass('posf');
		}
	});

	$(window).on('scroll', function(){
		if($(this).scrollTop()>200){
			$('.general-h .top-line').addClass('posf-gen');
		}else{
			$('.general-h .top-line').removeClass('posf-gen');
		}
	});

});
