// index.js is the main file in this directory that node.js will be looking for
// in any file outside this file if the "patterns" directory is exported then node.js will be looking for index.js file
// after finding the index.js file 9which is the main file due to this reason, it will export/print out the data that file only not in any other files except for index.js)

const checkered = require("./checkered");
const dots = require("./dots");
const stripy = require("./stripy");

const allPatterns = [checkered, dots, stripy];
module.exports = allPatterns;
