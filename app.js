$(document).ready(function() {
  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();

  var first = $('#about-pic-1').attr('src');
  var second = $('#about-pic-2').attr('src');
  var third = $('#about-pic-3').attr('src');
  var fourth = $('#about-pic-4').attr('src');
  var fifth = $('#about-pic-5').attr('src');
  var imgArray = [first, second, third, fourth, fifth];
  picChanger(imgArray);
  setInterval(function(){ picChanger(imgArray); }, 8000);
});

function showDiv(div) {
  var aWrap = $('#about-wrap');
  var pWrap = $('#project-wrap');
  var cWrap = $('#contact-wrap');
  if (div == 'top') {
    aWrap.hide();
    pWrap.hide();
    cWrap.hide();
  }
  if (div == 'about-wrap') {
    pWrap.hide();
    cWrap.hide();
    $('#' + div).slideToggle(200);
    $('body').animate({scrollTop: 0}, 'fast');
  }
  if (div == 'project-wrap') {
    aWrap.hide();
    cWrap.hide();
    $('#' + div).slideToggle(200);
    $('body').animate({scrollTop: 235}, 'fast');
  }
  if (div == 'contact-wrap') {
    pWrap.hide();
    aWrap.hide();
    $('#' + div).slideToggle(200);
    $('body').animate({scrollTop: $(document).height()}, 'fast');
  }
}

function picChanger(imgArray) {
  var aboutPic = $('#about-pic');
  var img = imgArray.shift();
  imgArray.push(img);
  aboutPic.fadeOut(700, function(){
    $(this).attr('src', img);
    $(this).fadeIn(700);
  });
}
