var squares = localStorage.getItem('squares');
var options = [
  { type: 'Free Space', state: true, index: 0 },
  { type: '"You People"', state: false, index: 1 },
  { type: 'Payam related to ISIS?', state: false, index: 2 },
  { type: 'Guesses your ethnicity', state: false, index: 3 },
  { type: '"Where are you actually from?"', state: false, index: 4 },
  { type: 'Asks you to say something in your language', state: false, index: 5 },
  { type: 'Compares you to a famous minority', state: false, index: 6 },
  { type: 'Racial slang/slur', state: false, index: 7 },
  { type: 'Confederate Flag', state: false, index: 8 },
  { type: 'Jesus Lecture', state: false, index: 9 },
  { type: 'Spot another minority', state: false, index: 10 },
  { type: 'Rohin takes off his shirt', state: false, index: 11 },
  { type: 'Rohin is black?', state: false, index: 12 },
  { type: 'Asian Mixup?', state: false, index: 13 },
  { type: 'Drink Moonshine', state: false, index: 14 },
  { type: 'Tells you about another person of your race', state: false, index: 15 },
];

$(document).ready(function() {

  if (squares) {
    squares = JSON.parse(squares);
  } else {
    squares = _.shuffle(options);
    localStorage.setItem('squares', JSON.stringify(squares));
  }

  _.each(squares, function(s) {
    var box = $('<div>');
    box.addClass('bingo-box');
    box.attr('id', s.index);
    box.attr('onclick', 'toggleSquare(' + s.index + ')');

    var text = $('<p>');
    text.text(s.type);
    box.append(text);

    if (s.state) {
      box.addClass('on');
    } else {
      box.removeClass('on');
    }
    $('.bingo-board').append(box);
  });

});

function resetBoard() {
  var warning = confirm('This will completely RESET your bingo board.');

  if (warning) {
    localStorage.clear();
    location.reload();
  }
}

function toggleSquare(index) {
  var selectedBox = $('div#' + index);
  console.log(selectedBox);
  selectedBox.toggleClass('on');

  _.each(squares, function(s) {
    if (s.index == index) s.state = !s.state;
    localStorage.setItem('squares', JSON.stringify(squares));
  });
}