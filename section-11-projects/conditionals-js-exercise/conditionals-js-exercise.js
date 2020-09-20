var age = Number(prompt("What is you age?"));

if (age < 0) {
  console.log("Error, not an age.");
}

if (age === 21) {
  console.log("Happy 21st birthday, have a free drink");
}

if (age % 2 !== 0) {
  console.log("Your age is odd.");
}

if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perect square!");
}

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
  console.log("You can enter, but you cannot drink");
} else {
  console.log("Come on in. You can drink.");
}
