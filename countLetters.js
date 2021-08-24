// FUNCTION IMPLEMENTATION

const countLetters = function(str) {
  const obj = {};
    
  for (const letter of str) {
    if (letter in obj) {
      // letter is in the object already
      obj[letter] += 1;
    } else if (letter !== " ") {
      obj[letter] = 1;
    }
    
  }

  return obj;
};

module.exports = countLetters;