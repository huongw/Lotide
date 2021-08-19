// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }

};

const middle = function(array) {
  // return the elements from the middle of the given array
  const middleElements = [];
  const index = Math.floor(array.length / 2);
  // if array only has one or two elements, there is no middle, therefore return an empty array
  if (array.length <= 2) {
    return middleElements;
  } else {
    if (array.length % 2 === 0) {
      // arrays with odd numbers of elements should return a single middle element
      middleElements.push(array[index - 1]);
      middleElements.push(array[index]);

    } else {
      //arrays with even numbers of elements should return two elements from the middle
      middleElements.push(array[index]);
    }
  }

  return middleElements;
};

middle([1]); // => []
middle([1, 2]); // => []


middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([2,5,4,2,6,7,6]), [2]);
assertArraysEqual(middle([8,4,2,7,5,1,8,6]), [7, 5]);