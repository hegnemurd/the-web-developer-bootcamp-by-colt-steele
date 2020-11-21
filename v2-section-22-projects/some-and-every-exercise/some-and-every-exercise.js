function allEvens(numbers) {
  if (numbers.every((number) => number % 2 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log("I created a function like so:");
console.log(
  "function allEvens(numbers) { if(numbers.every((number) => number % 2 === 0)) { return true; } else { return false; }}"
);
console.log("Type in an array in the parameters: allEvens([4, 6, 8, 10]);");
console.log(
  'If all the numbers in the arrya are even, the function will return "true".'
);
console.log(
  'If one or more numbers are odd, the function will return "false".'
);
