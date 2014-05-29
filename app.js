$(document).ready(function() {
  $('#about-wrap').hide();
  $('#project-wrap').hide();
  $('#contact-wrap').hide();
  $('#proj1').hide();
  $('#proj2').hide();
  $('#proj3').hide();
  $('a').attr('target', '_blank');
});

function showDiv(div) {
  var aWrap = $('#about-wrap');
  var pWrap = $('#project-wrap');
  var cWrap = $('#contact-wrap');
  var p1Info = $('#proj1');
  var p2Info = $('#proj2');
  var p3Info = $('#proj3');
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
    p1Info.hide();
    p2Info.hide();
    p3Info.hide();
    aWrap.hide();
    cWrap.hide();
    $('#' + div).toggle(175);
  }
  if (div == 'contact-wrap') {
    pWrap.hide();
    aWrap.hide();
    $('#' + div).toggle(175);
  }
  if (div == 'proj1') {
    p2Info.hide();
    p3Info.hide();
    p1Info.toggle(150);
  }
  if (div == 'proj2') {
    p1Info.hide();
    p3Info.hide();
    p2Info.toggle(150);
  }
  if (div == 'proj3') {
    p2Info.hide();
    p1Info.hide();
    p3Info.toggle(150);
  }
  $('html, body').animate({scrollTop: $(document).height()}, 'slow');
}
