$(document).ready(function() {
  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();
  $('a').attr('target', '_blank');

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
});

function showDiv(div) {
  if (div == 'about-wrap') {
    $('#project-wrap').hide();
    $('#contact-wrap').hide();
    $('#' + div).toggle(250);
  }
  if (div == 'project-wrap') {
    $('#about-wrap').hide();
    $('#contact-wrap').hide();
    $('#' + div).toggle(250);
  }
  if (div == 'contact-wrap') {
    $('#project-wrap').hide();
    $('#about-wrap').hide();
    $('#' + div).toggle(250);
  }
}