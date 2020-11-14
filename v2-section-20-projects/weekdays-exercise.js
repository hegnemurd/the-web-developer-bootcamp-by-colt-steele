// First Example:
// This one works fine but would be better to use the second one.
// function returnDay(number) {
//   var week = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   if (number < 1 || number > 7) {
//     return null;
//   } else if (number === 1) {
//     return week[0];
//   } else if (number === 2) {
//     return week[1];
//   } else if (number === 3) {
//     return week[2];
//   } else if (number === 4) {
//     return week[3];
//   } else if (number === 5) {
//     return week[4];
//   } else if (number === 6) {
//     return week[5];
//   } else if (number === 7) {
//     return week[6];
//   }
// }

//Second Example:
function returnDay(number) {
  var week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (number < 1 || number > 7) {
    return null;
  }
  return week[number - 1];
}

console.log(
  "I created a function called returnDay. When you write in a number between 1-7, it will return the day of the week."
);
console.log("PS: 1 = Monday - 7 = Sunday.");
console.log("Example: returnDay(5);. Will return Friday.");
