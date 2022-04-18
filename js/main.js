let options = {
	root: null,
	threshold: 1
};

let ExploreCallback = (entries, observer) => {
	

	entries.forEach(entry => {
		if (entry.isIntersecting = true){
			entry.target.style.backgroundColor = '#EEE5DE;';
		}
	//   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
	});
};


let HeaderCallback = (entries, observer) => {
	

	entries.forEach(entry => {
		if (entry.isIntersecting === true){
			entry.target.style.backgroundColor = 'blue';
			console.log('should be blue header');
		} else {
			entry.target.style.backgroundColor = '#EEE5DE';
			console.log('should be white header');
		}
	//   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
	});
};

let headerObserver = new IntersectionObserver(HeaderCallback, {root: document.querySelector('#top')});
let headerTarget = document.querySelector('#header');

headerObserver.observe(headerTarget);


let observer = new IntersectionObserver(ExploreCallback, options);

let exploreTarget = document.querySelector('#explore');

observer.observe(exploreTarget);





$(function () {
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

	$("header").scroll(function(){
		$(this).css( "display","none");
	});


	var settings = {
		delay: 375,
		duration: 500,
		reset: true,
		viewOffset: {
			top: 30,
			right: 0,
			bottom: 0,
			left: 0,
		}
	};

ScrollReveal().reveal('#loader',{
	useDelay:'onload'
});

ScrollReveal().reveal('#top', settings);
ScrollReveal().reveal('section#explore', settings);
ScrollReveal().reveal('section#about', settings);
ScrollReveal().reveal('section#submit', settings);
ScrollReveal().reveal('section#social', settings);



var viewport = document.querySelector('section#top')
var output = document.querySelector('p.output')

viewport.addEventListener('scroll', event => {
	output.textContent = `Scroll top: ${viewport.scrollTop}`;
});


//Loading animation
var darkLogo = document.getElementById('dark-logo')
var finishAnimation = document.querySelector('.loader')
finishAnimation.onanimationend = () => {
	darkLogo.classList.add('hidden');
}


//Slide
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