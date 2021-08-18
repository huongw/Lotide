// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {

  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const without = function(sourceArr, itemsToRemove) {
  const newArr = [];

  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== itemsToRemove[i]) {
      newArr.push(sourceArr[i]);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
