console.log(
  "I created a variable with 3 different arrays in it ('var randomGroup = [ ['Pink', 'Red', 'Green'], ['One', 'Two', 'Three'], ['Pound', 'Euro', 'Dollar'],];')."
);
console.log(
  "When you would like to acess a whole array from the array array's you can type in 'randomGroup[1]' and that will return you '['One', 'Two', 'Three']'."
);
console.log(
  "When you want to access one specific value then you can type the array's name followed by sqare brackets containing the array's indexOf and the array item's indexOf."
);
console.log(
  "For example you can type in 'randomGroup[2][0]' and that will return you 'Pound'."
);

var randomGroup = [
  ["Pink", "Red", "Green"],
  ["One", "Two", "Three"],
  ["Pound", "Euro", "Dollar"],
];

console.log(randomGroup[2][0]);
