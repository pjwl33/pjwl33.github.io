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