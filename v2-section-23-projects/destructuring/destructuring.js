// ********** DESTRUCTURING ARRAYS **********

//EXAMPLE 1
// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = score[1];

// const [gold, silver, bronze] = scores;
// console: gold; , silver; , bronze;

//EXAMPLE 2
// const raceResults = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

// const [gold, silver, bronze] = raceResults;
// console: gold; , silver; , bronze;

// const [fastest, ...everyoneElse] = raceResults;
// console: fastest; , everyoneElse;

// ********** DESTRUCTURING OBJECTS **********

// EXAMPLE 1
// const user = {
//   email: "bluedog@gmail.com",
//   password: "blueDog123",
//   firstName: "Blue",
//   lastName: "Dog",
//   born: 2003,
//   died: 2017,
//   bio:
//     "Blue Dog was a beautiful little dog, who lived to show much love and friendliness to all.",
//   city: "Blue City",
//   state: "Bluish",
// };

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email, lastName, firstName } = user; //email;

// const { born: birthYear } = user; // var will be named birthYear
// EXAMPLE 2
// const user2 = {
//   email: "yellowcat@gmail.com",
//   firstName: "Yellow",
//   lastName: "Cat",
//   born: 2010,
//   city: "Yellow City",
//   state: "Yellowish",
// };

// const { city, state, died = "N/A" } = user2; // if value is already found in the object, then you cannot change it, however if a value is not found for it, then you can change it into whatever you would like to

// ********** DESTRUCTURING PARAMS **********

// ********** OUTPUT TO CONSOLE **********
console.log("Destructuring");

console.log("********** DESTRUCTURING ARRAYS **********");
console.log("Example 1:");
console.log(
  "const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];"
);
console.log(
  "//one way to do it: const highScore = scores[0]; const secondHighScore = score[1];"
);
console.log("Better way to do it with destructuring:");
console.log("const [gold, silver, bronze] = scores;");
console.log("Type: gold; OR silver; OR bronze;");
console.log("Example 2:");
console.log(
  "const raceResults = ['Eliud Kipchog', 'Feyisa Lelisa', 'Galen Rupp'];"
);
console.log("const [gold, silver, bronze] = raceResults;");
console.log("Type: gold; OR silver; OR bronze;");
console.log("const [fastest, ...everyoneElse] = raceResults;");
console.log("Type: fastest; OR everyoneElse;");

console.log("********** DESTRUCTURING OBJECTS **********");
console.log("Example 1:");
console.log(
  "const user = { email: 'bluedog@gmail.com', password: 'blueDog123', firstName: 'Blue', lastName: 'Dog', born: 2003, died: 2017, bio: 'Blue Dog was a beautiful little dog, who lived to show much love and friendliness to all.', city: 'Blue City', state: 'Bluish' }"
);
console.log(
  "//one way to do it: const firstName = user.firstName; const lastName = user.lastName;"
);
console.log("Better way to do it:");
console.log("const { email, lastName, firstName } = user;");
console.log("Type: email; OR lastName; OR firstName;");
console.log("const { born: birthYear } = user; // var will be named birthYear");
console.log("Type: birthYear;");
console.log("Example 2:");
console.log(
  "const user2 = { email: 'yellowcat@gmail.com', firstName: 'Yellow', lastName: 'Cat', born: 2010, city: 'Yellow City', state: 'Yellowish' }"
);
console.log("const { city, state, died = 'N/A' } = user2;");
console.log(
  "// if value is already found in the object, then you cannot change it, however if a value is not found for it, then you can change it into whatever you would like to"
);
