// FUNCTION IMPLEMENTATION

const findKey = function(obj, callback) {
  for (const item in obj) {
    const foundObject = callback(obj[item]);
    if (foundObject) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;