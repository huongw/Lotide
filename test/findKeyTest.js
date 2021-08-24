const { assert } = require("chai");

const findKey = require("../findKey");

describe("#findKey", () => {

  it("will return the key 'noma'", () => {
    const expected = "noma";
    const actual = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2)

    assert.deepEqual(actual, expected);
  });

  it("will return the key 'Blue Hill'", () => {
    const expected = "Blue Hill";
    const actual = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 1)

    assert.deepEqual(actual, expected);
  });

  it("will return the key 'Akaleri'", () => {
    const expected = "Akaleri";
    const actual = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 3)

    assert.deepEqual(actual, expected);
  });

  it("will return the key 'Sirius'", () => {
    const expected = "Sirius";
    const actual = findKey({
      "Blue Hill": { stars: 1 },
      "Sirius":    { stars: 4 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 4)

    assert.deepEqual(actual, expected);
  });

});