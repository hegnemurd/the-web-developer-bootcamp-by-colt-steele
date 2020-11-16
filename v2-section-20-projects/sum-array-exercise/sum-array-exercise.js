function sumArray(numbers) {
  var total = 0;
  for (var i in numbers) {
    total += numbers[i];
  }
  return total;
}

console.log("I created a function called sumArray.");
console.log(
  "This function will take your number array and add all the numbers in it."
);
console.log("Example: sumArray([1, 4, 6, 2]);. Will return 13.");
