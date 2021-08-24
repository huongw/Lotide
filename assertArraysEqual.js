const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {

  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

  return true;

};

module.exports = assertArraysEqual;

