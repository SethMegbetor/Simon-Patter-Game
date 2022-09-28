let gamePattern = [];

let buttonColors = ['red', 'blue', 'green', 'yellow'];

// let randomChosenColour = buttonColors[nextSequence()];

// gamePattern.push(randomChosenColour);

gamePattern.push(nextSequence());

console.log(gamePattern);

// $(`${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// $('#' + randomChosenColour)
//   .fadeOut(100)
//   .fadeIn(100);

$('#' + nextSequence())
  .fadeOut(100)
  .fadeIn(100);

// switch (randomChosenColour) {
//   case 'red':
//     var audio = new Audio('./sounds/red.mp3');
//     audio.play();
//     break;
//   case 'blue':
//     var audio = new Audio('./sounds/blue.mp3');
//     audio.play();
//     break;
//   case 'green':
//     var audio = new Audio('./sounds/green.mp3');
//     audio.play();
//     break;
//   case 'yellow':
//     var audio = new Audio('./sounds/yellow.mp3');
//     audio.play();
//     break;

//   default:
//     console.log("I don't know what to do");
//     break;
// }

function nextSequence() {
  let randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  // let randomLength = randomRaw * 3
  // let randomNumber = Math.floor(randomLength + 1)
  // return randomNumber

  // return randomNumber;

  let randomChosenColour = buttonColors[randomNumber];
  switch (randomChosenColour) {
    case 'red':
      var audio = new Audio('./sounds/red.mp3');
      audio.play();
      break;
    case 'blue':
      var audio = new Audio('./sounds/blue.mp3');
      audio.play();
      break;
    case 'green':
      var audio = new Audio('./sounds/green.mp3');
      audio.play();
      break;
    case 'yellow':
      var audio = new Audio('./sounds/yellow.mp3');
      audio.play();
      break;

    default:
      console.log("I don't know what to do");
      break;
  }

  return randomChosenColour;
}

// $(document).ready(function () {
// });

let userClickedPattern = [];
$('.btn').click(function (event) {
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
// console.log(userClickedPattern);

function playSound() {
  if (buttonValue() == 'red') {
    $('#' + buttonValue()).click(function () {
      var audio = new Audio('./sounds/red.mp3');
      audio.play();
    });
  } else if (buttonValue() == 'blue') {
    $('#' + buttonValue()).click(function () {
      var audio = new Audio('./sounds/blue.mp3');
      audio.play();
    });
  }

  if (buttonValue() == 'green') {
    $('#' + buttonValue()).click(function () {
      var audio = new Audio('./sounds/green.mp3');
      audio.play();
    });
  }
}

console.log('The next sequence value is: ' + nextSequence());

function buttonValue() {
  $(document).ready(function () {
    $('.btn').click(function (event) {
      console.log(event.target.id);
    });
  });
}

$('.btn').click(function () {
  playSound();
});
console.log('the button value is ' + buttonValue());
