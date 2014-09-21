$(document).ready(function() {
  var app = angular.module('myPage', ['ui-bootstrap']);

  app.controller('PageController', function($scope, $interval){
    $scope.projects = [
    { name: "NYfi",
    url: "http://nyfi.herokuapp.com/",
    description: "First Rails application: search app for NYC's wifi hotspots and their Yelp ratings",
    sourceCode: "https://github.com/pjwl33/NYfi",
    image: "images/nyfi.png" },
    { name: "Rate My Lunch",
    url: "http://ratemylunch.herokuapp.com/",
    description: "A fun and innovative game for Employees to inspire co-workers to eat the best lunches for their health needs.<br><br><a class='info-link' href='http://hackdiningnyc.foodtechconnect.com/'>Hack//Dining NYC Hackathon</a> Project",
    sourceCode: "https://github.com/pjwl33/lunch_it",
    image: "images/ratemylunch.png" },
    { name: "Emochat",
    url: "http://emochat.herokuapp.com/",
    description: "Chat app with changing avatar icons according to user hashtag and self-taken photos.",
    sourceCode: "https://github.com/originalblend337/chat_app",
    image: "images/emochat.png" },
    { name: "Group.pRov",
    url: "http://groupprov.herokuapp.com/",
    description: "Music playing app where users can record, play, and loop tracks with others using their QWERTY keyboards. Simulating MIDI playback functionality.",
    sourceCode: "https://github.com/pjwl33/Group.pRov",
    image: "images/groupprov.png" },
    { name: "Hate To Love",
    url: "http://hatetolove.herokuapp.com/",
    description: "Rails application (iOS version in the works) where users can find the loves of their lives by hating the same things",
    sourceCode: "https://github.com/pjwl33/date_app",
    image: "images/hatetolove.jpg" }];
  });

$('#about-wrap').hide();
$('#project-wrap').hide();
$('#contact-wrap').hide();
$('a').attr('target', '_blank');

var first = $('#about-pic-1').attr('src');
var second = $('#about-pic-2').attr('src');
var third = $('#about-pic-3').attr('src');
var fourth = $('#about-pic-4').attr('src');
var fifth = $('#about-pic-5').attr('src');
var imgArray = [first, second, third, fourth, fifth];
picChanger(imgArray);
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
  setInterval(function(){ picChanger(imgArray); }, 8000);
}
