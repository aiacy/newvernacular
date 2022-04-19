$(document).ready(function() {
    var containers = $('.container');

    if (containers.length) {
        containers.each(function() {
            var container = $(this);

            // Support small text - copy to fill screen width
            if (container.find('.scrolling-text').outerWidth() < $(window).width()) {
                var windowToScrolltextRatio = Math.round($(window).width() / container.find('.scrolling-text').outerWidth()),
                    scrollTextContent = container.find('.scrolling-text .scrolling-text-content').text(),
                    newScrollText = '';
                for (var i = 0; i < windowToScrolltextRatio; i++) {
                    newScrollText += ' ' + scrollTextContent;
                }
                container.find('.scrolling-text .scrolling-text-content').text(newScrollText);
            }

            // Init variables and config
            var scrollingText = container.find('.scrolling-text'),
                scrollingTextWidth = scrollingText.outerWidth(),
                scrollingTextHeight = scrollingText.outerHeight(true),
                startLetterIndent = parseInt(scrollingText.find('.scrolling-text-content').css('font-size'), 10) / 4.8,
                startLetterIndent = Math.round(startLetterIndent),
                scrollAmountBoundary = Math.abs($(window).width() - scrollingTextWidth),
                transformAmount = 0,
                leftBound = 0,
                rightBound = scrollAmountBoundary,
                transformDirection = container.hasClass('left-to-right') ? -1 : 1,
                transformSpeed = 200;

            // Read transform speed
            if (container.attr('speed')) {
                transformSpeed = container.attr('speed');
            }
        
            // Make scrolling text copy for scrolling infinity
            container.append(scrollingText.clone().addClass('scrolling-text-copy'));
            container.find('.scrolling-text').css({'position': 'absolute', 'left': 0});
            container.css('height', scrollingTextHeight);
        
            var getActiveScrollingText = function(direction) {
                var firstScrollingText = container.find('.scrolling-text:nth-child(1)');
                var secondScrollingText = container.find('.scrolling-text:nth-child(2)');
        
                var firstScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(1)').css("left"), 10);
                var secondScrollingTextLeft = parseInt(container.find('.scrolling-text:nth-child(2)').css("left"), 10);
        
                if (direction === 'left') {
                    return firstScrollingTextLeft < secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                } else if (direction === 'right') {
                    return firstScrollingTextLeft > secondScrollingTextLeft ? secondScrollingText : firstScrollingText;
                }
            }
        
            $(window).on('wheel', function(e) {
                var delta = e.originalEvent.deltaY;
                
                if (delta > 0) {
                    // going down
                    transformAmount += transformSpeed * transformDirection;
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(10deg)');
                }
                else {
                    transformAmount -= transformSpeed * transformDirection;
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(-10deg)');
                }
                setTimeout(function(){
                    container.find('.scrolling-text').css('transform', 'translate3d('+ transformAmount * -1 +'px, 0, 0)');
                }, 10);
                setTimeout(function() {
                    container.find('.scrolling-text .scrolling-text-content').css('transform', 'skewX(0)');
                }, 500)
        
                // Boundaries
                if (transformAmount < leftBound) {
                    var activeText = getActiveScrollingText('left');
                    activeText.css({'left': Math.round(leftBound - scrollingTextWidth - startLetterIndent) + 'px'});
                    leftBound = parseInt(activeText.css("left"), 10);
                    rightBound = leftBound + scrollingTextWidth + scrollAmountBoundary + startLetterIndent;
        
                } else if (transformAmount > rightBound) {
                    var activeText = getActiveScrollingText('right');
                    activeText.css({'left': Math.round(rightBound + scrollingTextWidth - scrollAmountBoundary + startLetterIndent) + 'px'});
                    rightBound += scrollingTextWidth + startLetterIndent;
                    leftBound = rightBound - scrollingTextWidth - scrollAmountBoundary - startLetterIndent;
                }
            });
        })
    }
});

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