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
  var ang = angular.module('ang', ['ui.bootstrap']);

  ang.controller('MyController', ['$scope', '$animate', function($scope, $animate){
    $scope.showDiv = function(divType){
      $scope.showType = divType;
    };
  }]);
}
