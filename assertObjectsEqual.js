const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key1 in object1) {
      for (const key2 in object2) {
        if (key1 === key2) {
          const value1 = object1[key1];
          const value2 = object2[key2];

          if (Array.isArray(value1) && Array.isArray(value2)) {
            result = eqArrays(value1, value2);
          } else if (value1 === value2) {
            result = true;
          } else {
            result = false;
          }
        }
      }
    }
  }

  return result;
};

assertObjectsEqual({a:"1", b: "2", c: "3"}, {a:"1", b: "2", c: "3"});