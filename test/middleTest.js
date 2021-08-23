const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE
middle([1]); // => []
middle([1, 2]); // => []


middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([2,5,4,2,6,7,6]), [2]);
assertArraysEqual(middle([8,4,2,7,5,1,8,6]), [7, 5]);