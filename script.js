jQuery(document).ready(function($){
	
	$('a.contact-me').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('.email a').removeClass("blink");
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
		$('.email a').addClass("blink");
	});

		$('a.imgcontact').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
	});
});