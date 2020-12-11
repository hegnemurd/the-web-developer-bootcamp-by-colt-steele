// ********** FACTORY FUNCTIONS **********

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(45, 169, 237);
// const black = makeColor(0, 0, 0);

// console.log("Type in: firstColor.hex() OR firstColor.rgb()");
// console.log(
//   "You can change the values (r, g, b) in firstColor as such: firstColor.r = 244"
// );

// ********** CONSTRUCTOR FUNCTIONS **********
// creates a blank, plain JavaScript object
// links (sets the constructor of) this object to another object
// passes the newly created object from Step 1 as the this context
// return this if the function doesn't return its own object

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(244, 33, 144);
const color2 = new Color(23, 44, 56);

console.log(
  "Type in: color1.rgb() OR color2.rgb() --- (color2 will work in any of these examples as well)"
);
console.log("color1.rgba(0.5) --- (the default a value is 1)");
console.log("color1.hex()");
console.log("To see the color type in:");
console.log("document.body.style.backgroundColor = color1.rgb()");
console.log("To use your own color, type:");
console.log("const color3 = new Color(33, 44, 55) --- (r, g, b)");
