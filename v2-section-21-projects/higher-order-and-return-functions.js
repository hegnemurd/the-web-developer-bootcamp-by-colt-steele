// ********** HIGHER ORDER FUNCTIONS **********

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// ********** RETURNING FUNCTIONS **********

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       alert("Congrats, I am a good function.");
//     };
//   } else {
//     return function () {
//       alert("I am a bad function.");
//     };
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

console.log("********** HIGHER ORDER FUNCTIONS **********");
console.log(
  "Operate on/with other functions - can accept other functions as arguments + return a function"
);
console.log("EXAMPLE:");
console.log(
  "function callTwice(func) { func(); func(); } function callTenTimes(f) { for (let i = 0; i < 10; i++) { f(); } } function rollDie() { const roll = Math.floor(Math.random() * 6) + 1; console.log(roll); } callTwice(rollDie);"
);
console.log("To call the middle function you can type: callTenTimes(rollDie)");

console.log("********** RETURNING FUNCTIONS **********");
console.log("EXAMPLE 1:");
console.log(
  "function makeMysteryFunc() { const rand = Math.random(); if (rand > 0.5) { return function () { alert('Congrats, I am a good function.'); }; } else { return function () { alert('I am a bad function.'); }; } } "
);
console.log("EXAMPLE 2:");
console.log(
  "function makeBetweenFunc(min, max) { return function (num) { return num >= min && num <= max;  }; } "
);
console.log(
  "Call the function as such: const isChild = makeBetweenFunc(0, 18)."
);
console.log("Now write any number in the brackets as such: isChild(number).");
console.log(
  "If that number is between 0 and 18, 'true' will be returned. If the number is not between 0 and 18, false will be returned."
);
console.log(
  "Calling the function as such: const name = makeBetweenFunc(min, max), min represents the minimum number and max the maximum number. Those represent in between what numbers you want the parameter for true result. 0 - min, 18 - max."
);
