// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
    
  }
  return result;
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail([1, 4, 5]);
assertEqual(result[0], 4);
assertEqual(result[1], 5);