console.log("1.Run the function doMath by typing 'doMath()'");

console.log(
  "2.Declare another variable in the console called x (example: x = 'Hi')."
);

console.log(
  "3.Call doMath function again and you will see that the function still has the original value of 40, because the fucntion takes the value from inside the scope and not from outside."
);

console.log(
  "4.Declare a variable in the console called y and give it a number value (example: y = 99)."
);

console.log(
  "5.I have made a function called doMoreMath(), it console.log(y), when you call the function, it will give you a value of 99(or whatever you chose to put as the value of y)."
);

console.log(
  "6.Now if you would change the number value of y in the function function doMoreMath(){ y = 100; console.log(y);}"
);

console.log(
  "7.And call the function, it will give you the new value of y (100)"
);

console.log(
  "8.Call y's value from the console and it will return the new value that was declared in the function."
);

console.log(
  "9.Declare a variable called phrase and give it a string value (example: phrase = 'Hi there!')"
);

console.log(
  "I have made a function called doSomething() with a variable called phrase and it has a value of 'Goodbye!'"
);

console.log("Call doSomething() fucntion and see what the value is.");

console.log(
  "When you write in 'phrase' into the console, you will see that the value has not changed from 'Hi there!' to 'Goodbye!'"
);

console.log(
  "CONCLUSION: In the scope the function can take a value from outside if it the variable is not declared with a 'var' (y = 99) in the function. Furthermore when the value of y is changed within the function without a 'var' keyword (y =100), that value will be passed on outside the scope to be the new value of that variable."
);

console.log(
  "However if the funtion has a decalaration of the variable as (var y = 99;), then it will change the value y in the function scope but not outside."
);

function doMath() {
  var x = 40;
  console.log(x);
}

function doMoreMath() {
  console.log(y);
}

function doSomething() {
  var phrase = "Goodbye!";
  console.log(phrase);
}
