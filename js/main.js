$(document).ready(function () {
	
	$("#home").click(function() {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, 2000);
		});

	$("#link1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
	});

	$("#link2").click(function() {
		$('html, body').animate({
			scrollTop: $("#submit").offset().top
		}, 2000);
		});
	

	$("#see").click(function() {
		$('html, body').animate({
			scrollTop: $("#explore").offset().top
		}, 2000);
		});




var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

});