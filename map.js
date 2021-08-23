const assertArraysEqual = function(arr1, arr2) {

  const isTrue = eqArrays(arr1, arr2);

  if (isTrue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  
  return true;
};
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// const strLength = map(words, word => word.length)
// const reverseWords = map(words, word => word.split("").reverse().join(""))

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"])
// assertArraysEqual(strLength, [6, 7, 2, 5, 3])
// assertArraysEqual(reverseWords, ["dnuorg", "lortnoc", "ot", "rojam", "mot"])