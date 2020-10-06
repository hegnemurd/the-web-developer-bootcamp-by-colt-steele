console.log("ADDING METHODS TO AN OBJECT");
console.log("+");
console.log("NAMESPACING");

console.log("Let's make an object:");
console.log(
  "var obj = { name: 'Linda', age: 63, isCool: true, friends: ['Marta', 'Susan'], add: function(x, y){ return x + y; } }"
);

console.log("To use the function and calculate with x and y, type in:");
console.log("obj.add(10, 5)");

console.log("Let's add another function:");
console.log("syntax: function add(){}");
console.log("function speak() {return 'Woof';}");

console.log("Now let's add one for cats too:");
console.log("function speak() {return 'Meow';}");

console.log(
  "Now to fix the issue where we cannot access the first function properly because both speak functions do not fit into one namespace, we can add it to a object like so:"
);
console.log("var dogSpace = {}");
console.log("dogSpace.speak = function(){return'Woof';}");

console.log("Call the speak function:");
console.log("dogSpace.speak()");

console.log("Make a new object with a method:");
console.log("var catSpace = {}");
console.log("catSpace.speak = function() { return 'Meow';}");
console.log("Call the speak function:");
console.log("catSpace.speak()");

console.log(
  "********************************************************************"
);

console.log("THE KEYWORD THIS");

console.log("Let's make a variable called comments:");
console.log("var comments = {};");
console.log("Now let's add some data to this object:");
console.log("comments.data = ['Good Job!', 'Well Done!', 'Good Work!'];");
console.log("Let's make a function that prints all the comments in the array:");
console.log(
  "function print(array){ array.forEach(function(el){ console.log(el);}); }"
);
console.log("Now when you call the function it will return you the array:");
console.log("print(comments.data)");

console.log("Let's do the function using this keyword:");
console.log(
  "comments.print = function(){ this.data.forEach(function(el){ console.log(el); }); }"
);
console.log("Now to see the comments printed out call the function:");
console.log("comments.print()");
