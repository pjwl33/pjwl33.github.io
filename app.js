$(document).ready(function() {
  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();
  $('a').attr('target', '_blank');
  setInterval(picChanger, 9000);
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
  var imgArray = ['pic_changer/pic1.png', 'pic_changer/pic2.png', 'pic_changer/pic3.png', 'pic_changer/pic4.png', 'pic_changer/pic5.png', 'pic_changer/pic6.png'];
  var random = imgArray[Math.floor(Math.random() * imgArray.length)];
  aboutPic.fadeOut(900, function(){
      $(this).attr('src', random);
      $(this).fadeIn(900);
   });
}
