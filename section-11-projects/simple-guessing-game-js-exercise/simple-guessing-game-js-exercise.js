var secretNumber = 15;

var stringGuess = prompt("Guess a number.");
var guess = Number(stringGuess);

if (guess === secretNumber) {
  alert("You got it right!");
} else if (guess > secretNumber) {
  alert("Too high. Guess again!");
} else {
  alert("Too low. Guess again!");
}
