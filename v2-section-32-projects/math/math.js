// 1: way of doing exporting

// const add = (x, y) => x + y;
// const PI = 3.14159;
// const square = (x) => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// 2: way of doing exporting

// const add = (x, y) => x + y;
// const PI = 3.14159;
// const square = (x) => x * x;

// const math = {
//   add: add,
//   PI: PI,
//   square: square,
// };
// module.exports = math;

// 3: way of doing exporting
// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = (x) => x * x;

// 3.5: way of doing exporting - shortening the 3rd syntax
const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

exports.add = (x, y) => x + y;
exports.PI = 3.14159;
exports.square = (x) => x * x;
