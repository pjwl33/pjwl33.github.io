$(document).ready(function() {
  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();
  $('a').attr('target', '_blank');
  setInterval(picChanger, 8000);
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
    pic.slideDown(50);
  }
  if (div == 'about-wrap') {
    pic.slideToggle(200);
    pWrap.hide();
    cWrap.hide();
    $('#' + div).slideToggle(200);
  }
  if (div == 'project-wrap') {
    aWrap.hide();
    cWrap.hide();
    $('#' + div).slideToggle(200);
  }
  if (div == 'contact-wrap') {
    pWrap.hide();
    aWrap.hide();
    $('#' + div).toggle(200);
  }
  $('html, body').animate({scrollTop: $(document).height()}, 'slow');
}

var imgArray = ['pic_changer/pic2.png', 'pic_changer/pic3.png', 'pic_changer/pic4.png', 'pic_changer/pic5.png', 'pic_changer/pic1.png'];

function picChanger() {
  var aboutPic = $('#about-pic');
  var img = imgArray.shift();
  imgArray.push(img);
  aboutPic.fadeOut(700, function(){
      $(this).attr('src', img);
      $(this).fadeIn(700);
   });
}
