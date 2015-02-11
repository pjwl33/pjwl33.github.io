$(document).ready(function() {
  var first = $('#about-pic-1').attr('src');
  var second = $('#about-pic-2').attr('src');
  var third = $('#about-pic-3').attr('src');
  var fourth = $('#about-pic-4').attr('src');
  var fifth = $('#about-pic-5').attr('src');
  var imgArray = [first, second, third, fourth, fifth];

  picChanger(imgArray);
  setInterval(function(){ picChanger(imgArray); }, 8000);

  startCamera();
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

function startCamera() {
  var v = document.getElementById('v');
  var canvas = document.getElementById('c');
  var context = canvas.getContext('2d');
  var save = document.getElementById('save-pic');

  var cw = canvas.clientWidth;
  var ch = canvas.clientHeight;
  canvas.width = cw;
  canvas.height = ch;

  navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
  if (navigator.getUserMedia) {
    navigator.getUserMedia({
        video: true,
        audio: false
      },
      function(stream) {
        var url = window.URL || window.webkitURL;
        v.src = url ? url.createObjectURL(stream) : stream;
        v.play();

        v.addEventListener('play', function() {
          draw(this, context, cw, ch);
        }, false);

        function draw(v, c, w, h) {
          if (v.paused || v.ended) return false;
          var image, data, i, r, g, b, brightness;

          c.drawImage(v, 0, 0, w, h);

          image = c.getImageData(0, 0, w, h);
          data = image.data;
          // array of pixels
          for (i = 0; i < data.length; i += 4) {
            r = data[i] * 2;
            g = data[i + 1] * 2;
            b = data[i + 2] * 2;
            brightness = (r + b + g) / 3;

            data[i] = data[i + 1] = data[i + 2] = brightness;
          }

          image.data = data;

          c.putImageData(image, 0, 0);

          setTimeout(draw, 20, v, c, w, h);
        }
      },
      function(error) {
        // alert('Something went wrong. (error code ' + error.code + ')');
        return;
      }
    );
  } else {
    // alert('Sorry, the browser you are using doesn\'t support getUserMedia');
    return;
  }
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
      title: "Rate My Lunch",
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
      title: "Group Prov",
      image: "images/groupprov.png",
      description: "Music playing app where users can record, play, and loop tracks with others using their QWERTY keyboards. Simulating MIDI playback functionality.",
      source: "https://github.com/pjwl33/Group.pRov"
    },
    // {
    //   url: "http://hatetolove.herokuapp.com/",
    //   title: "HateToLove",
    //   image: "images/hatetolove.jpg",
    //   description: "Rails application (iOS version in the works) where users can find the loves of their lives by hating the same things.",
    //   source: "https://github.com/pjwl33/date_app"
    // },
    {
      url: "http://www.lolseriousbiz.com",
      title: "serious biz",
      image: "images/lolseriousbiz.png",
      description: "Angular/Rails application connected with Riot's League of Legends API. Also a fan-site for my teammates from LCS Season 4.",
      source: "https://github.com/pjwl33/lol_app"
    },
    {
      url: "http://www.leedentalgroup.net",
      title: "Lee Dental Group",
      image: "images/leedentalgroup.png",
      description: "Freelance Project for 'Lee Dental Group', a family-oriented dental clinic in Michigan. Built with Angular.js, Angular-Parallax, Boostrap, and Love.",
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