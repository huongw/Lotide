// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {

  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//   }
  
//   return true;
// };
const countLetters = function(str) {
  const obj = {};
    
  for (const letter of str) {
    if (letter in obj) {
      // letter is in the object already
      obj[letter] += 1;
    } else if (letter !== " ") {
      obj[letter] = 1;
    }
    
  }

  return obj;
};

module.exports = countLetters;

// let result = countLetters("lighthouse labs");
// console.log(result);

// assertArraysEqual(result, { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 });