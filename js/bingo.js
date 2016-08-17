$(document).ready(function() {

  var squares = localStorage.getItem('squares');
  var options = [
    { type: "Free Space", state: false },
    { type: "You People", state: false },
    { type: "Where are you from", state: false },
    { type: "Where are you actually from", state: false },
    { type: "Something in a foreign language", state: false },
    { type: "Comparison to a famous minority", state: false },
    { type: "Racial slang/word", state: false },
    { type: "Free Space", state: false },
    { type: "Free Space", state: false },
  ];

  if (squares) {
    squares = JSON.parse(squares);
  } else {
    squares = _.shuffle(options);
  }


});