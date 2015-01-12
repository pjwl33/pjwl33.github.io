$(document).ready(function() {
  var first = $('#about-pic-1').attr('src');
  var second = $('#about-pic-2').attr('src');
  var third = $('#about-pic-3').attr('src');
  var fourth = $('#about-pic-4').attr('src');
  var fifth = $('#about-pic-5').attr('src');
  var imgArray = [first, second, third, fourth, fifth];

  picChanger(imgArray);
  setInterval(function(){ picChanger(imgArray); }, 8000);

  startAngular();
});

function picChanger(imgArray) {
  var aboutPic = $('#about-pic');
  var img = imgArray.shift();
  imgArray.push(img);
  aboutPic.fadeOut(700, function(){
    $(this).attr('src', img);
    $(this).fadeIn(700);
  });
}

function startAngular(){
  var angApp = angular.module('myApp', []);

  var myProjects = [
    {
      url: "http://nyfi.herokuapp.com/",
      title: "NYfi",
      image: "images/nyfi.png",
      description: "First Rails application: search app for NYC's wifi hotspots and their Yelp ratings.",
      source: "https://github.com/pjwl33/NYfi"
    },
    {
      url: "http://ratemylunch.herokuapp.com/",
      title: "RateMyLunch",
      image: "images/ratemylunch.png",
      description: "A fun and innovative game for Employees to inspire co-workers to eat the best lunches for their health needs. Hack//Dining NYC Hackathon Project.",
      source: "https://github.com/pjwl33/lunch_it"
    },
    {
      url: "http://emochat.herokuapp.com/",
      title: "Emochat",
      image: "images/emochat.png",
      description: "Chat app with changing avatar icons according to user hashtag and self-taken photos.",
      source: "https://github.com/originalblend337/chat_app"
    },
    {
      url: "http://groupprov.herokuapp.com/",
      title: "Group.pRov",
      image: "images/groupprov.png",
      description: "Music playing app where users can record, play, and loop tracks with others using their QWERTY keyboards. Simulating MIDI playback functionality.",
      source: "https://github.com/pjwl33/Group.pRov"
    },
    {
      url: "http://hatetolove.herokuapp.com/",
      title: "HateToLove",
      image: "images/hatetolove.jpg",
      description: "Rails application (iOS version in the works) where users can find the loves of their lives by hating the same things.",
      source: "https://github.com/pjwl33/date_app"
    },
    {
      url: "http://www.lolseriousbiz.com",
      title: "seriousBIZ",
      image: "images/lolseriousbiz.png",
      description: "Angular/Rails application connected with Riot's League of Legends API. Also a fan-site for my teammates from LCS Season 4.",
      source: "https://github.com/pjwl33/lol_app"
    },
    {
      url: "http://www.leedentalgroup.net",
      title: "Lee Dental Group",
      image: "images/leedentalgroup.png",
      description: "Freelance Project for 'Lee Dental Group', a family-oriented dental clinic in Farmington Hills, Michigan. Website was made using Angular.js, Angular-Parallax, Boostrap, and Love.",
      source: "https://github.com/leedentalgroup/leedentalgroup.github.io"
    },
  ];

  angApp.controller('MyController', function($scope){
    $scope.showType = false;
    $scope.projects = myProjects;
    $scope.showDiv = function(divType){
      $scope.showType = $scope.showType == divType? false : divType;
    };
  });
}