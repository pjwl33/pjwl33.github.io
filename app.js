// $(document).ready(function(){
// 	console.log("Loaded, bro");
//   $(window).scroll(function() {
//     var scrolled = $(window).scrollTop();
//     //number of pixels out of the view - when window loads, scrollTop is 0 and increase as view leaves that viewport - scrolling
//     $('.bg').css('top', -(scrolled * 0.25) + 'px');
//     //different and opposite direction of scroll - the factor of how much it is going to scroll
//     $('.top-left').css('top', (scrolled * 1.0) + 'px');
//     $('.top-center').css('top', (scrolled * 0.4) + 'px');
//     $('.top-right').css('top', (scrolled * 0.75) + 'px');
//     $('.bottom-left').css('top', -(scrolled * 0.75) + 'px');
//     $('.bottom-center').css('top', -(scrolled * 0.66) + 'px');
//     $('.bottom-right').css('top', -(scrolled * 0.23) + 'px');
//     //higher value moves it out of screen - and then opposites
//     $('.top-center').css('transform', 'rotate(' + (scrolled * 0.5) + 'deg)');
//     $('.top-right').css('transform', 'rotateY(' + (scrolled * 0.5) + 'deg)');
//     $('.bottom-left').css('transform', 'rotate(' + -(scrolled * 0.5) + 'deg)');
//     $('.bottom-center').css('transform', 'rotate(' + (scrolled * 0.5) + 'deg)');
//     $('.bottom-right').css('transform', 'rotate(' + -(scrolled * 0.5) + 'deg)');
//     $('.top-left').css('opacity', scrolled * 0.001);
//     $('.top-center').css('opacity', scrolled * 0.005);
//     $('.top-right').css('opacity', scrolled * 0.002);
//   });
// });

$(document).ready(function() {

  var slider = {

  // Not sure if keeping element collections like this
  // together is useful or not.
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },

  timing: 800,
  slideWidth: 300, // could measure this

  // In this simple example, might just move the
  // binding here to the init function
  init: function() {
    this.bindUIEvents();
  },

  bindUIEvents: function() {
    // You can either manually scroll...
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
    // ... or click a thing
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
    // What would be cool is if it had touch
    // events where you could swipe but it
    // also kinda snapped into place.
  },

  moveSlidePosition: function(event) {
    // Magic Numbers =(
      this.el.allSlides.css({
        "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
      });
    },

    handleNavClick: function(event, el) {
      event.preventDefault();
      var position = $(el).attr("href").split("-").pop();

      this.el.slider.animate({
        scrollLeft: position * this.slideWidth
      }, this.timing);

      this.changeActiveNav(el);
    },

    changeActiveNav: function(el) {
      this.el.allNavButtons.removeClass("active");
      $(el).addClass("active");
    }

  };

  slider.init();
});