// ********** FOREACH **********

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function (n) {
//   console.log(n * n);
// });

// nums.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

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

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// ********** MAP **********

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.map(function (num) {
//   return num * 2;
// });

// const titles = movies.map(function (movie) {
//     return movie.title
// });

// MAP EXERCISE

// function cleanNames(names) {
//   return names.map(function (name) {
//     return name.trim();
//   });
// }

// cleanNames([" Ralph ", " Cruella ", " Jessie ", " Little Bo-Beep ", " Elsa "]);

// ********** FILTER **********

// const movies = [
//   {
//     title: "Frozen",
//     score: 99,
//     year: 2013,
//   },
//   {
//     title: "Snow White And the Seven Dwarves",
//     score: 70,
//     year: 1937,
//   },
//   {
//     title: "Toy Story 4",
//     score: 97,
//     year: 2019,
//   },
//   {
//     title: "Disney's A Christmas Carol",
//     score: 45,
//     year: 2009,
//   },
//   {
//     title: "Madagascar",
//     score: 94,
//     year: 2005,
//   },
//   {
//     title: "Dinosaur",
//     score: 60,
//     year: 2000,
//   },
//   {
//     title: "Wreck-It Ralph",
//     score: 100,
//     year: 2012,
//   },
// ];

// const goodMovies = movies.filter((movie) => {
//   return movie.score > 80;
// });

// const goodMovies = movies.filter((m) => m.score > 80);
// const goodTitles = goodMovies.map((m) => m.title);

// const goodMovies = movies.filter((m) => m.score > 80).map((m) => m.title);

// const badMovies = movies.filter((m) => m.score < 71).map((m) => m.title);

// const recentMovies = movies.filter((m) => m.year > 2010).map((m) => m.title);

// ********** SOME ********** EVERY **********

// const exams = [80, 98, 92, 78, 67, 90, 89, 84, 81, 77];

// exams.every((score) => score >= 75); // if one does not pass, then all do not pass
// exams.some((score) => score >= 75); // if one passes then all pass

// ********** REDUCE **********

//            EXAMPLE 1:

// const prices = [9.99, 1.5, 19.45, 49, 30.5];

// NO REDUCE METHOD EXAMPLE:
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// WITH REDUCE METHOD:
// const total = prices.reduce((total, price) => {
//   return total + price;
// });

// const total = prices.reduce((total, price) => total + price);

// console.log(total);

//       EXAMPLE 2:
// const minPrice = prices.reduce((min, curVal) => {
//   if (curVal < min) {
//     return curVal;
//   }
//   return min;
// });

// console.log(minPrice);

//        EXAMPLE 3:
// const maxPrice = prices.reduce((max, curVal) => {
//   if (curVal > max) {
//     return curVal;
//   }
//   return max;
// });

// console.log(maxPrice);

//        EXAMPLE 4:

// const movies = [
//   {
//     title: "Frozen",
//     score: 99,
//     year: 2013,
//   },
//   {
//     title: "Snow White And the Seven Dwarves",
//     score: 70,
//     year: 1937,
//   },
//   {
//     title: "Toy Story 4",
//     score: 97,
//     year: 2019,
//   },
//   {
//     title: "Disney's A Christmas Carol",
//     score: 45,
//     year: 2009,
//   },
//   {
//     title: "Madagascar",
//     score: 94,
//     year: 2005,
//   },
//   {
//     title: "Dinosaur",
//     score: 60,
//     year: 2000,
//   },
//   {
//     title: "Wreck-It Ralph",
//     score: 100,
//     year: 2012,
//   },
// ];

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//   if (currMovie.score > bestMovie.score) {
//     return currMovie;
//   }
//   return bestMovie;
// });

// console.log(highestRated);

// ********** ARROW FUNCTIONS AND "THIS" **********

// const person = {
//   firstName: "Ralph",
//   lastName: "Wreck-It",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(() => {
//       console.log(this);
//       console.log(this.fullName());
//     }, 3000);
//   },
// };

// ********** OUTPUT TO CONSOLE **********

console.log("********** FOREACH **********");

console.log("const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];");
console.log("EXAMPLE 1:");
console.log("nums.forEach(function (n) { console.log(n * n); });");
console.log("EXAMPLE 2:");
console.log(
  "nums.forEach(function (el) { if (el % 2 === 0) { console.log(el); } });"
);
console.log("EXAMPLE 3:");
console.log(
  "const movies = [ { title: 'Frozen', score: 99, }, { title: 'Toy Story 4', score: 97, }, { title: 'Madagascar', score: 94, }, { title: 'Wreck-It Ralph', score: 100, }, ];"
);
console.log(
  "movies.forEach(function (movie) { console.log(`${movie.title} - ${movie.score}/100`); });"
);

console.log("********** MAP **********");

console.log("EXAMPLE 1:");
console.log("const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];");
console.log("nums.map(function (num) { return num * 2; });");
console.log("EXAMPLE 2:");
console.log(
  "const movies = [ { title: 'Frozen', score: 99, }, { title: 'Toy Story 4', score: 97, }, { title: 'Madagascar', score: 94, }, { title: 'Wreck-It Ralph', score: 100, }, ];"
);
console.log(
  "const titles = movies.map(function (movie) { return movie.title });"
);
console.log("Type in: titles");

console.log("MAP EXERCISE:");
console.log(
  "function cleanNames(names) { var result = names.map(function (name) { return name.trim(); }); return result; }"
);
console.log(
  "Then call it: cleanNames([' Ralph ', ' Cruella ', ' Jessie ', ' Little Bo-Beep ', ' Elsa ']);"
);
console.log("SHORTER VERSION WOULD BE:");
console.log(
  "function cleanNames(names) { return names.map(function (name) { return name.trim(); }); } "
);
console.log(
  "Then call it: cleanNames([' Ralph ', ' Cruella ', ' Jessie ', ' Little Bo-Beep ', ' Elsa ']);"
);

console.log("********** FILTER **********");

console.log("BOTH EXAMPLES MAIN CODE:");
console.log(
  'const movies = [{ title: "Frozen", score: 99, year: 2013, }, { title: "Snow White And the Seven Dwarves", score: 70, year: 1937, }, { title: "Toy Story 4", score: 97, year: 2019, }, { title: "Disney\'s A Christmas Carol", score: 45, year: 2009, }, { title: "Madagascar", score: 94, year: 2005, }, { title: "Dinosaur", score: 60, year: 2000, }, { title: "Wreck-It Ralph", score: 100, year: 2012, },];'
);

console.log("EXAMPLE: 1");
console.log(
  "const goodMovies = movies.filter((movie) => { return movie.score > 80; });"
);

console.log("EXAMPLE 2:");
console.log(
  "const goodMovies = movies.filter((m) => m.score > 80); const goodTitles = goodMovies.map((m) => m.title);"
);

console.log("EXAMPLE 3:");
console.log(
  "const goodMovies = movies.filter((m) => m.score > 80).map((m) => m.title); const badMovies = movies.filter((m) => m.score < 71).map((m) => m.title); const recentMovies = movies.filter((m) => m.year > 2010).map((m) => m.title); "
);

console.log("********** EVERY - SOME **********");

console.log("EXAMPLE 1:");
console.log("const exams = [80, 98, 92, 78, 67, 90, 89, 84, 81, 77];");
console.log("EVERY - exams.every((score) => score >= 75);");
console.log("SOME - exams.some((score) => score >= 75);");

console.log("********** REDUCE **********");

console.log("EXAMPLE 1:");
console.log(
  "const total = prices.reduce((total, price) => { return total + price; }); console.log(total);"
);
console.log("Shorter way to do it:");
console.log(
  "const total = prices.reduce((total, price) => total + price); console.log(total);"
);

console.log("EXAMPLE 2:");
console.log(
  "const minPrice = prices.reduce((min, curVal) => { if (curVal < min) { return curVal; } return min; }); console.log(minPrice);"
);

console.log("EXAMPLE 3:");
console.log(
  "const maxPrice = prices.reduce((max, curVal) => { if (curVal > max) { return curVal; } return max; }); console.log(maxPrice);"
);

console.log("EXAMPLE 4:");
console.log(
  'const movies = [ { title: "Frozen", score: 99, year: 2013, }, { title: "Snow White And the Seven Dwarves", score: 70, year: 1937, }, { title: "Toy Story 4", score: 97, year: 2019, }, { title: "Disney\'s A Christmas Carol", score: 45, year: 2009, }, { title: "Madagascar", score: 94, year: 2005, }, { title: "Dinosaur", score: 60, year: 2000, }, { title: "Wreck-It Ralph", score: 100, year: 2012, }, ];          const highestRated = movies.reduce((bestMovie, currMovie) => { if (currMovie.score > bestMovie.score) { return currMovie; } return bestMovie; }); console.log(highestRated);'
);

console.log('********** ARROW FUNCTIONS AND "THIS" **********');

console.log(
  'const person = { firstName: "Ralph", lastName: "Wreck-It", fullName: function () { return `${this.firstName} ${this.lastName}`; }, shoutName: function () { setTimeout(() => { console.log(this); console.log(this.fullName()); }, 3000); }, };'
);
console.log(
  "Type: person.fullName(), you will see the full name of the character returned."
);
console.log(
  "Type: person.shoutName(), the person object will be returned and afterwards the fullname."
);
