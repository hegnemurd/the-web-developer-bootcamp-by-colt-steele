// function isEven(x) {
//   if (x % 2 === 0) {
//     return true;
//   }
//   return false;
// }

function isEven(x) {
  return x % 2 === 0;
}

// function factorial(x) {
//   if (x < 0) {
//     return -1;
//   } else if (x == 0) {
//     return 1;
//   } else {
//     return x * factorial(x - 1);
//   }
// }

function factorial(x) {
  var result = 1;
  for (var i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}

function kebabToSnake(str) {
  var result = str.replace(/-/g, "_");
  return result;
}
