$(document).ready(function() {

  var squares = localStorage.getItem('squares');
  var options = [
    { type: "Free Space", state: false },
    { type: "You People", state: false },
    { type: "Payam ISIS, Rohin Black, Asians mixed up", state: false },
    { type: "Where are you actually from", state: false },
    { type: "Try to say something in foreign language", state: false },
    { type: "Comparison to a famous minority", state: false },
    { type: "Racial slang/word", state: false },
    { type: "Confederate Flag", state: false },
    { type: "Jesus Lecture", state: false },
  ];

  if (squares) {
    squares = JSON.parse(squares);
  } else {
    squares = _.shuffle(options);
    localStorage.setItem('squares', JSON.stringify(squares));
  }


});