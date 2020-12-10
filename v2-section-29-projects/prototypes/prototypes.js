String.prototype.yell = function () {
  return `${this.toUpperCase()}!!!`;
};

Array.prototype.pop = function () {
  return "Sorry, that element will be staying. No element is getting popped.";
};

console.log(
  "This is not a good practice. This is made for demonstration purposes."
);
console.log('Type in anything in a string: "example".yell()');
console.log("Now try something like this: [3, 4, 5].pop()");
