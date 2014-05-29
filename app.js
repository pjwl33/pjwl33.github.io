$(document).ready(function() {
  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();
  $('a').attr('target', '_blank');
});

function showDiv(div) {
  var aWrap = $('#about-wrap');
  var pWrap = $('#project-wrap');
  var cWrap = $('#contact-wrap');
  var pic = $('.pic-wrap');

  if (div == 'top') {
    aWrap.hide();
    pWrap.hide();
    cWrap.hide();
  }
  if (div != 'about-wrap') {
    pic.show(175);
  }
  if (div == 'about-wrap') {
    // setInterval(picChanger, 8000);
    pic.toggle(175);
    pWrap.hide();
    cWrap.hide();
    $('#' + div).toggle(175);
  }
  if (div == 'project-wrap') {
    aWrap.hide();
    cWrap.hide();
    $('#' + div).toggle(175);
  }
  if (div == 'contact-wrap') {
    pWrap.hide();
    aWrap.hide();
    $('#' + div).toggle(175);
  }
  $('html, body').animate({scrollTop: $(document).height()}, 'slow');
}

function picChanger() {
  var aboutPic = $('#about-pic');
  var imgArray = ['pic_changer/pic1.jpg', 'pic_changer/pic2.jpg', 'pic_changer/pic3.jpg', 'pic_changer/pic4.jpg', 'pic_changer/pic5.jpg', 'pic_changer/pic6.jpg'];
  var random = imgArray[Math.floor(Math.random() * imgArray.length)];
  aboutPic.fadeOut(800, function(){
      $(this).attr('src', random).bind('onreadystatechange load', function(){
         if (this.complete) $(this).fadeIn(800);
      });
   });
}
