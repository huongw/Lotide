const { assert } = require("chai");

const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {

  it("will return the indices of h: [ 3, 5, 15, 18 ]", () => {
    const expected = [ 3, 5, 15, 18 ];
    const actual = letterPositions("lighthouse in the house");

    assert.deepEqual(actual.h, expected);
  });

  it("will return the indices of l: [ 2, 3, 9 ]", () => {
    const expected = [ 2, 3, 9 ];
    const actual = letterPositions("hello world");

    assert.deepEqual(actual.l, expected);
  });

  it("will return the indices of ,: [ 1, 4, 7 ]", () => {
    const expected = [ 1, 4, 7 ];
    const actual = letterPositions("2, 3, 4, 5");

    assert.deepEqual(actual[","], expected);
  });

  it("will return the indices of o: [ 1, 2, 9 ]", () => {
    const expected = [ 1, 2, 9 ];
    const actual = letterPositions("goodbye world");

    assert.deepEqual(actual.o, expected);
  });

});