$(document).ready(function(){
	console.log("Loaded, bro");
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    //number of pixels out of the view - when window loads, scrollTop is 0 and increase as view leaves that viewport - scrolling
    $('.bg').css('top', -(scrolled * 0.25) + 'px');
    //different and opposite direction of scroll - the factor of how much it is going to scroll
    $('.top-left').css('top', (scrolled * 1.0) + 'px');
    $('.top-center').css('top', (scrolled * 0.4) + 'px');
    $('.top-right').css('top', (scrolled * 0.75) + 'px');
    $('.bottom-left').css('top', -(scrolled * 0.75) + 'px');
    $('.bottom-center').css('top', -(scrolled * 0.66) + 'px');
    $('.bottom-right').css('top', -(scrolled * 0.23) + 'px');
    //higher value moves it out of screen - and then opposites
    $('.top-center').css('transform', 'rotate(' + (scrolled * 0.5) + 'deg)');
    $('.top-right').css('transform', 'rotateY(' + (scrolled * 0.5) + 'deg)');
    $('.bottom-left').css('transform', 'rotate(' + -(scrolled * 0.5) + 'deg)');
    $('.bottom-center').css('transform', 'rotate(' + (scrolled * 0.5) + 'deg)');
    $('.bottom-right').css('transform', 'rotate(' + -(scrolled * 0.5) + 'deg)');
    $('.top-left').css('opacity', scrolled * 0.001);
    $('.top-center').css('opacity', scrolled * 0.005);
    $('.top-right').css('opacity', scrolled * 0.002);
  });
});