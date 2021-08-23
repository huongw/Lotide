// FUNCTION IMPLEMENTATION

const middle = function(array) {
  // return the elements from the middle of the given array
  const middleElements = [];
  const index = Math.floor(array.length / 2);
  // if array only has one or two elements, there is no middle, therefore return an empty array
  if (array.length <= 2) {
    return middleElements;
  } else {
    if (array.length % 2 === 0) {
      //arrays with even numbers of elements should return two elements from the middle
      middleElements.push(array[index - 1]);
      middleElements.push(array[index]);

    } else {
      // arrays with odd numbers of elements should return a single middle element
      middleElements.push(array[index]);
    }
  }

  return middleElements;
};

module.exports = middle;