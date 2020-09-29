console.log("1.This function prints the array items in reverse.");
console.log(
  "I have created a var called 'array', go ahead change it and see if it still works."
);

// var array = ["Green", "Yellow", "Red", "Blue", "Violet"];

function printReverse(array) {
  for (var i = array.length; i > -1; i--) {
    //other way of writing this would be: for (var i = array.length - 1; i >= 0; i--)
    console.log(array[i]);
  }
}
printReverse([3, 6, 2, 5]);

function isUniform(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== first) {
      return false;
    }
  }
  return true;
}

function sumArray(array) {
  var total = 0;
  array.forEach(function (element) {
    total += element;
  });
  return total;
}

function max(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
