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

//example 1
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

// normal example
// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

//  destructured example
// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

// if I never need to use any other props than first- and lastname (like bio, birth year, etc)
// function fullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }

//example 2
// const movies = [
//   {
//     title: "Frozen",
//     score: 99,
//   },
//   {
//     title: "Toy Story 4",
//     score: 97,
//   },
//   {
//     title: "Madagascar",
//     score: 94,
//   },
//   {
//     title: "Wreck-It Ralph",
//     score: 100,
//   },
// ];

//normal way to do it
// movies.filter((movie) => movie.score >= 95);

// destructured way
// movies.filter(({ score }) => score >= 95);

// using map, normal way to do it
// movies.map((movie) => {
//   return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// });

//destructured way
// movies.map(({ title, score, year }) => {
//   return `${title} (${year}) is rated ${score}`;
// });

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
console.log("********** DESTRUCTURING PARAMS **********");
console.log("EXAMPLE 1:");
console.log(
  "const user = { email: 'bluedog@gmail.com', password: 'blueDog123', firstName: 'Blue', lastName: 'Dog', born: 2003, died: 2017, bio:'Blue Dog was a beautiful little dog, who lived to show much love and friendliness to all.', city: 'Blue City', state: 'Bluish', };"
);
console.log("Example with no destructuring:");
console.log(
  "function fullName(user) { return `${user.firstName} ${user.lastName}`; } "
);
console.log("Type in: fullName(user);");
console.log("Destructured:");
console.log(
  "function fullName(user) { const { firstName, lastName } = user; return `${firstName} ${lastName}`; }"
);
console.log("Type in: fullName(user);");
console.log(
  "Destructured with no intention of using any other props than firstname and lastname (like born, bio, age, etc):"
);
console.log(
  "function fullName({ firstName, lastName }) { return `${firstName} ${lastName}`; }"
);
console.log("Type in: fullName(user);");
console.log("EXAMPLE 2:");
console.log(
  "const movies = [ { title: 'Frozen', score: 99, }, { title: 'Toy Story 4', score: 97, }, { title: 'Madagascar', score: 94, }, { title: 'Wreck-It Ralph', score: 100, }, ];"
);
console.log("Normal way to do it:");
console.log("movies.filter(({ score }) => score >= 95);");
console.log("Destructured way:");
console.log("movies.filter(({ score }) => score >= 95);");
console.log("Using map, normal way to do it:");
console.log(
  "movies.map((movie) => { return `${movie.title} (${movie.year}) is rated ${movie.score}`; });"
);
console.log("Destructured way:");
console.log(
  "movies.map(({ title, score, year }) => { return `${title} (${year}) is rated ${score}`; });"
);
