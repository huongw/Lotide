// const flatten = function(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (const num of arr[i]) {
//         newArr.push(num);
//       }
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// let output = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

// console.log(output);

// Recursion Method
const newArr = [];

const flatten = function(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

let output = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

console.log(output);
