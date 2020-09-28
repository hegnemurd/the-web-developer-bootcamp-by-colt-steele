console.log("1.This function prints the array items in reverse.");
console.log(
  "I have created a var called 'array', go ahead change it and see if it still works."
);

var array = ["Green", "Yellow", "Red", "Blue", "Violet"];

function printReverse() {
  for (i = array.length; i > -1; i--) {
    console.log(array[i]);
  }
}

console.log(printReverse());

function isUniform() {}

function sumArray() {}

function max() {}
