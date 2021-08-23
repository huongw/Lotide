const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail([1, 4, 5]);
assertEqual(result[0], 4);
assertEqual(result[1], 5);