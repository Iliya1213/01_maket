$(document).ready(function(){
	$(document).ready(function(){
		$('.testimonials__slider').slick({
			arrows: true,
			dots: true,
			autoplay: true,
		});
	});
	$(document).on('click', '.js-nav a', function(e){
		e.preventDefault();
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	});


	$(document).on('click' , '.js-btnScroll', function(e){
		e.preventDefault();
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		});

	$(document).on('click' , '.js-btnScrollUp', function(e){
		e.preventDefault();
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		});

	$(window).scroll(function(){
	  if($(window).scrollTop() > 600) {
		$('.js-btnScrollUp').addClass('active');
	  } else {
		$('.js-btnScrollUp').removeClass('active');
	  }
	})

})
