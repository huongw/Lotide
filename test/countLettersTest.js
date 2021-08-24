const { assert } = require("chai");

const countLetters = require("../countLetters");

describe("#countLetters", () => {

  it("returns { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 }", () => {
    const expected = { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 };
    const actual = countLetters("lighthouse labs");

    assert.deepEqual(actual, expected);
  });

});