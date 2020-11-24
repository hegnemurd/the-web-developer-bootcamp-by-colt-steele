// ********** DEFAULT PARAMS **********

// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// rollDie(20);

// ********** SPREAD IN FUNCTION CALLS **********

// const nums = [9, 3, 2, 8];
// Math.max(nums); // NaN
// Math.max(...nums); // 9, same as calling: Math.max(9, 3, 2, 8)

// ********** SPREAD WITH ARRAY LITERALs **********

// const cats = ["Fluffy", "SnowBall", "Spot"];
// const dogs = ["Spotty", "Dots"];

// const allPets = [...cats, ...dogs];

// ********** SPREAD IN OBJECT LITERALS **********

//EXAMPLE 1
// const feline = { legs: 4, family: "Felidae" };
// const canine = { isFurry: true, family: "Caninae" };

// const catDog = { ...feline, ...canine };

// console: {..feline}
// console: {...feline, color: "black"}
// console: const catDog = {...feline, ...canine}
// canine wins and overwrites feline whenever there is a conflict
// console: {...canine, ...feline, family: "Fluffy"} - fluffy wins

//EXAMPLE 2
// const dataFromForm = {
//   email: "bluedog@gmail.com",
//   password: "blueDog123",
//   username: "bluedog",
// };

// const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// ********** REST PARAMS **********

// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

//EXAMPLE 1
// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

//EXAMPLE 2
// function raceResults(gold, silver, ...everyoneElse) {
//   console.log(`Gold medal goes to: ${gold}`);
//   console.log(`Silver medal goes to: ${silver}`);
//   console.log(`And thanks to everyone else: ${everyoneElse}`);
// }

console.log("Newer JavaScript Features");

console.log("********** DEFAULT PARAMS **********");
console.log("EXAMPLE:");
console.log(
  "function rollDie(numSides = 6) { return Math.floor(Math.random() * numSides) + 1; }"
);
console.log("Type in: rollDie(20);, or any number instead of 20");
console.log(
  "Now when you don't write any number in the brackets, the default value will be 6."
);

console.log("********** SPREAD IN FUNCTION CALLS **********");
console.log("EXAMPLE:");
console.log("const nums = [9, 3, 2, 8];");
console.log("Math.max(nums); - returns NaN");
console.log(
  "Math.max(...nums); - returns 9, smame as calling: Math.ma(9, 3, 2, 8);"
);

console.log("********** SPREAD WITH ARRAY LITERALS **********");
console.log(
  "const cats = ['Fluffy', 'SnowBall', 'Spot']; const dogs = ['Spotty', 'Dots'];"
);
console.log("const allPets = [...cats, ...dogs];");

console.log("********** SPREAD IN OBJECT LITERALS **********");
console.log("EXAMPLE 1:");
console.log(
  "const feline = { legs: 4, family: 'Felidae' }; const canine = { isFurry: true, family: 'Caninae' };"
);
console.log("Type: {...feline}");
console.log("Type: {...feline, color: 'black'}");
console.log("Type: const catDog = {..feline, ...canine}");
console.log(
  "Canine wins and overwrites feline whenever there is a conflict, since canine comes last (the order, which they are written in, matters!)"
);
console.log("EXAMPLE 2");
console.log(
  "const dataFromForm = { email: 'bluedog@gmail.com', password: 'blueDog123', username: 'bluedog', };"
);
console.log(
  "Type: const newUser = { ...dataFromForm, id: 2345, isAdmin: false };"
);
console.log("Type: newUser");

console.log("********** REST PARAMS **********");
console.log("EXAMPLE 1:");
console.log(
  "//this code does not work: function sum() { return arguments.reduce((total, el) => total + el); }"
);
console.log(
  "function sum(...nums) { return nums.reduce((total, el) => total + el); }"
);
console.log("Type: sum(1, 2, 3);");
console.log("EXAMPLE 2:");
console.log(
  "function raceResults(gold, silver, ...everyoneElse) { console.log(`Gold medal goes to: ${gold}`); console.log(`Silver medal goes to: ${silver}`); console.log(`And thanks to everyone else: ${everyoneElse}`); }"
);
console.log(
  "Type: raceResults('Hetti','Henry','Daisy','Ryan','Rudolph','Sandy')"
);
