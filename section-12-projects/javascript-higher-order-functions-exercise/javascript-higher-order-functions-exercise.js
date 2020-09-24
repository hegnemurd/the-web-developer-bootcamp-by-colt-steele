console.log(
  "I have made a function sing() and it will be called in setInterval() every 10seconds."
);
console.log("Set the interval for the function: setInterval(sing, 1000);");
console.log(
  "To stop the interval you can write in the console clearInterval(number the console gives you)."
);
console.log(
  "When you want to write your own function in the console and put an interval on it before you have even wrote it, you can write an interval for an anonymous function."
);
console.log(
  "setInterval(function() { console.log('I am an anonymous function!');}, 2000 );"
);

function sing() {
  console.log("Twinkle Twinkle...");
  console.log("How I wonder...");
}
