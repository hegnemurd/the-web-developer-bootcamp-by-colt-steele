var colours = ["red", "orange", "yellow", "green"];

console.log("Can you tell the difference with the iteration down below?");
//example of annoying way to do this
console.log("Example 1:");
console.log(colours[0]);
console.log(colours[1]);
console.log(colours[2]);
console.log(colours[3]);

//an easy and proper way to do this
console.log("Example 2:");
for (var i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

console.log(
  "No? Then take a look at the code, the first example has all the colour separately console.logged but the second has all colours looped through with for loop."
);

console.log("Here is another way to do it with forEach!");

colours.forEach(function (colourNames) {
  console.log(colourNames);
});

console.log(
  "ForEach is a much simpler and easier way to write this code, instead of using for loop or console.logging each one, by using forEach."
);

console.log(
  "Example 1 code: 'console.log(arrayName[0]); console.log(arrayName[1]); ...' until all of the items in the array have been printed"
);

console.log(
  "Example 2 code: 'for(var i = 0; i < arrayName.length; i++) { console.log(arrayName[i]); }', this will loop through each item until the array end."
);

console.log(
  "Example 3 code: 'arrayName.forEach(function(functionName) { console.log(functionName); });', forEach will loop through each item like for loop but in a simpler and shorter code."
);

console.log("There is another way to do with a regular function:");

function printColours(colours) {
  console.log(colours);
}

console.log(
  "I created a function called printColours, it console.logs the colours one by one when you call it with forEach."
);
console.log(
  "To iterate the array just type in 'colours.forEach(printColours);"
);
console.log(
  "If you would like to print each colour separately you can type 'printColours(colours[0]);' with each of the index"
);

console.log("Example 4: While loop");

var count = 0;
while (count < colours.length) {
  console.log(colours[count]);
  count++;
}

console.log(
  "Example 4 code: While loop 'var count = 0; while(count < arrayName.length) { console.log(arrayName[count]); count++; }'."
);
