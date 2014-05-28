$(document).ready(function() {


  var slider = {
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },
  timing: 800,
  slideWidth: 300,
  init: function() {
    this.bindUIEvents();
  },
  bindUIEvents: function() {
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
  },
  moveSlidePosition: function(event) {
      this.el.allSlides.css({
        "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
      });
    },
  };
  slider.init();

  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();

  $('#about').click(function() {
    $('#about-wrap').toggle(450);
  });

  $('#projects').click(function() {
    $('#project-wrap').toggle(450);
  });

  $('#contacts').click(function() {
    $('#contact-wrap').toggle(450);
  });
});