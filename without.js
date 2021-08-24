// FUNCTION IMPLEMENTATION

const without = function(sourceArr, itemsToRemove) {
  const newArr = sourceArr.filter(element => !(itemsToRemove.includes(element)))
  return newArr;
};

module.exports = without;