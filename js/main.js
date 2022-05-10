

document.body.onload = function(){
    setTimeout(function() {
      var preloader = document.getElementById('loader');
      if( !preloader.classList.contains('done') )
      {
        preloader.classList.add('done');
      }
    }, 800)
  }

  

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
                scrollingTextHeight = scrollingText.outerHeight(true) * 1.4,
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
                    container.find('.scrolling-text').css({'transform': 'translate3d('+ transformAmount * -1 +'px, 0, 0)',
                                                           '-ms-transform': 'translate3d('+ transformAmount * -1 +'px, 0, 0)',
                                                           '-webkit-transform': 'translate3d('+ transformAmount * -1 +'px, 0, 0)'});
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



$(document).ready(function() {
    var containers1 = $('.container1');

    if (containers1.length) {
        containers1.each(function() {
            var container1 = $(this);

            // Support small text - copy to fill screen width
            if (container1.find('.scrolling-text1').outerWidth() < $(window).width()) {
                var windowToScrolltextRatio1 = Math.round($(window).width() / container1.find('.scrolling-text1').outerWidth()),
                    scrollTextContent1 = container1.find('.scrolling-text1 .scrolling-text-content1').text(),
                    newScrollText1 = '';
                for (var i = 0; i < windowToScrolltextRatio1; i++) {
                    newScrollText1 += ' ' + scrollTextContent1;
                }
                container1.find('.scrolling-text1 .scrolling-text-content1').text(newScrollText1);
            }

            // Init variables and config
            var scrollingText1 = container1.find('.scrolling-text1'),
                scrollingTextWidth1 = scrollingText1.outerWidth(),
                scrollingTextHeight1 = scrollingText1.outerHeight(true),
                startLetterIndent1 = parseInt(scrollingText1.find('.scrolling-text-content1').css('font-size'), 10) / 4.8,
                startLetterIndent1 = Math.round(startLetterIndent1),
                scrollAmountBoundary1 = Math.abs($(window).width() - scrollingTextWidth1),
                transformAmount1 = 0,
                leftBound1 = 0,
                rightBound1 = scrollAmountBoundary1,
                transformDirection1 = container1.hasClass('left-to-right') ? -1 : 1,
                transformSpeed1 = 200;

            // Read transform speed
            if (container1.attr('speed')) {
                transformSpeed1 = container1.attr('speed');
            }
        
            // Make scrolling text copy for scrolling infinity
            container1.append(scrollingText1.clone().addClass('scrolling-text-copy1'));
            container1.find('.scrolling-text1').css({'position': 'absolute', 'left': 0});
            container1.css('height', scrollingTextHeight1);
        
            var getActiveScrollingText1 = function(direction1) {
                var firstScrollingText1 = container1.find('.scrolling-text1:nth-child(1)');
                var secondScrollingText1 = container1.find('.scrolling-text1:nth-child(2)');
        
                var firstScrollingTextLeft1 = parseInt(container1.find('.scrolling-text1:nth-child(1)').css("left"), 10);
                var secondScrollingTextLeft1 = parseInt(container1.find('.scrolling-text1:nth-child(2)').css("left"), 10);
        
                if (direction1 === 'left') {
                    return firstScrollingTextLeft1 < secondScrollingTextLeft1 ? secondScrollingText1 : firstScrollingText1;
                } else if (direction1 === 'right') {
                    return firstScrollingTextLeft1 > secondScrollingTextLeft1 ? secondScrollingText1 : firstScrollingText1;
                }
            }
        
            $(window).on('wheel', function(e) {
                var delta = e.originalEvent.deltaY;
                
                if (delta > 0) {
                    // going down
                    transformAmount1 += transformSpeed1 * transformDirection1;
                    container1.find('.scrolling-text1 .scrolling-text-content1').css('transform', 'skewX(10deg)');
                }
                else {
                    transformAmount1 -= transformSpeed1 * transformDirection1;
                    container1.find('.scrolling-text1 .scrolling-text-content1').css('transform', 'skewX(-10deg)');
                }
                setTimeout(function(){
                    container1.find('.scrolling-text1').css('transform', 'translate3d('+ transformAmount1 * -1 +'px, 0, 0)');
                }, 10);
                setTimeout(function() {
                    container1.find('.scrolling-text1 .scrolling-text-content1').css('transform', 'skewX(0)');
                }, 500)
        
                // Boundaries
                if (transformAmount1 < leftBound1) {
                    var activeText1 = getActiveScrollingText1('left');
                    activeText1.css({'left': Math.round(leftBound1 - scrollingTextWidth1 - startLetterIndent1) + 'px'});
                    leftBound1 = parseInt(activeText1.css("left"), 10);
                    rightBound1 = leftBound1 + scrollingTextWidth1 + scrollAmountBoundary1 + startLetterIndent1;
        
                } else if (transformAmount1 > rightBound1) {
                    var activeText1 = getActiveScrollingText1('right');
                    activeText1.css({'left': Math.round(rightBound1 + scrollingTextWidth1 - scrollAmountBoundary1 + startLetterIndent1) + 'px'});
                    rightBound1 += scrollingTextWidth1 + startLetterIndent1;
                    leftBound1 = rightBound1 - scrollingTextWidth1 - scrollAmountBoundary1 - startLetterIndent1;
                }
            });
        })
    }
});





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
};
