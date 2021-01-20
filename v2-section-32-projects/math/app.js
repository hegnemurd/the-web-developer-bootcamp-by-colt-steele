// const math = require("./math");
// console.log(math.PI);
// console.log(math.square(9));
// console.log(math.add(2, 3));

// if I only wanted PI and square out of that file then I could restructure it

const { PI, square } = require("./math");
const patterns = require("../patterns");
console.log(PI);
console.log(square(9));

console.log("Required an entire directory!", patterns);
