const eqArrays = require("../eqArrays");

const { assert } = require("chai");


describe("#eqArrays", () => {

  it("will return true if arrays are equal", () => {
    const expected = true;
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);

    assert.deepEqual(actual, expected);
  });

  it("will return false if arrays are not equal", () => {
    const expected = false;
    const actual = eqArrays([1, 5, 3], [1, 2, 3]);

    assert.strictEqual(actual, expected);
  });

});