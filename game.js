let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];
let userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
});

$('.btn').click(function () {
  var userChosenColour = $(this).attr('id');

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log('wrong');

    playSound('wrong');

    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);

    $('#level-title').text('Game Over, Press Any Key to Restart');

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];

  level++;
  $('#level-title').text('Level ' + level);

  let n = Math.random() * 4;
  randomNumber = Math.floor(n);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio('./sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(() => {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
