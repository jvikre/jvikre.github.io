$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function () {
		$('menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate;
	});

	$('#up').on('click', function(){
		$('html, body').animate;
	});

	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});
});