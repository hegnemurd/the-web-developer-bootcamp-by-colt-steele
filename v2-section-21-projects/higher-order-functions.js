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

console.log("HIGHER ORDER FUNCTIONS");
console.log(
  "Operate on/with other functions - can accept other functions as arguments + return a function"
);
console.log("EXAMPLE:");
console.log(
  "function callTwice(func) { func(); func(); } function callTenTimes(f) { for (let i = 0; i < 10; i++) { f(); } } function rollDie() { const roll = Math.floor(Math.random() * 6) + 1; console.log(roll); } callTwice(rollDie);"
);
console.log("To call the middle function you can type: callTenTimes(rollDie)");

console.log("RETURNING FUNCTIONS");
console.log("EXAMPLE 1:");
console.log(
  "function makeMysteryFunc() { const rand = Math.random(); if (rand > 0.5) { return function () { alert('Congrats, I am a good function.'); }; } else { return function () { alert('I am a bad function.'); }; } } "
);
console.log("");
