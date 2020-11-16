// ********** FUNCTION SCOPE **********

// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet Macaw";
// function birdWatch() {
// //   let bird = "Great Blue Heron";
//   console.log(bird);
// }
// birdWatch()

// ********** BLOCK SCOPE **********

// let radius = 8;
// if (radius > 0) {
//   var PI = 3.14159;
//   let msg = "HI";
// }

// console.log(radius);
// console.log(msg);

// for (let i = 0; i < 5; i++) {
//   let msg = "HI";
//   console.log(msg);
// }
// console.log(msg);
// console.log(i);
// console.log(
//   "let blocks the scope to work outside the for loop with the msg or i. "
// );

// ********** LEXICAL SCOPE **********

// function bankRobbery() {
//   const heroes = ["Spiderman", "Wolverine", "BlackPanther", "CatWoman"];
//   function cryForHelp() {
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//       }
//     }
//     inner();
//   }
//   cryForHelp();
// }

// HERE STARTS CODE IN THE CONSOLE, TO SHOW ANYONE VIEWING IT WHAT TO DO

console.log("********** FUNCTION SCOPE **********");

console.log(
  "let totalEggs = 0; function collectEggs() {  totalEggs = 6; } console.log(totalEggs); collectEggs(); console.log(totalEggs);"
);

console.log("********** BLOCK SCOPE **********");

console.log(
  "let radius = 8; if (radius > 0) { var PI = 3.14159; let msg = 'HI'; } console.log(radius); console.log(msg); "
);

console.log("OR");

console.log(
  "for (let i = 0; i < 5; i++) { let msg = 'HI'; console.log(msg); } console.log(msg); console.log(i); "
);
console.log(
  "let blocks the scope to work outside the for loop with the msg or i. "
);

console.log("********** LEXICAL SCOPE **********");

console.log(
  "function bankRobbery() { const heroes = ['Spiderman', 'Wolverine', 'BlackPanther', 'CatWoman']; function cryForHelp() { function inner() { for (let hero of heroes) { console.log(`PLEASE HELP US, ${hero.toUpperCase()}`); } } inner(); } cryForHelp(); }"
);
