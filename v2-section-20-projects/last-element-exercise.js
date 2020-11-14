function lastElement(array) {
  if (array.length === 0) {
    return null;
  }
  return array[array.length - 1];
}

console.log("I created a function called lastElement.");
console.log(
  "Write an array in the brackets following the function name and it should return the last item in the array."
);
console.log("Example: lastElement([1, 5, 8, 13]);. Will return 13");
