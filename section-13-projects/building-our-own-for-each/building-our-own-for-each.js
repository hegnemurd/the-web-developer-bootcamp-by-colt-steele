console.log("I created a variable 'nums' with an array of numbers.");

var nums = [4, 6, 4, 89];

console.log("Using ForEach function to go through each number and print them:");
nums.forEach(function (num) {
  console.log(num);
});

console.log("Making a function to do the same function as a ForEach function.");

function myForEach(array, func) {
  //loop through array
  for (var i = 0; i < array.length; i++) {
    //call func for each item in array
    func(array[i]);
  }
}

console.log(
  "Create a variable called 'colours' and give it values like 'red', 'orange' and 'yellow'. Now you can call the function: 'myForEach(colours, function(colours){console.log(colours)});'."
);

console.log(
  "I made a function with array prototype, now you can reuse the variable 'colours' and call the function 'colours.myForEach(alert)' or 'colours.myForEach(function(colour){console.log(colour);})'."
);
Array.prototype.myForEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

// myForEach(nums, function (num) {
//   console.log(num);
// });
