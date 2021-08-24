const { assert } = require("chai");

const map = require("../map");

describe("#map", () => {

  it("will return a new array with 2 added to each element", () => {
    const expected = [3, 4, 5];
    const actual = map([1, 2, 3], (num) => num + 2);

    assert.deepEqual(actual, expected);
  });

});