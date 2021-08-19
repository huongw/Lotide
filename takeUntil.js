// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {

  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const newArr = []
  for (let i = 0; i < array.length; i++){
    const forbiddenElement = callback(array[i])
    if(forbiddenElement === true) {
      return newArr;
    } else {
      newArr.push(array[i])
    }
  }
}


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2])
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])