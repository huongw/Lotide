// FUNCTION IMPLEMENTATION

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

module.exports = takeUntil;

