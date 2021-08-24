const { assert } = require("chai");

const findKeyByValue = require("../findKeyByValue");

describe("#letterPositions", () => {

  it("will return the key 'drama'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const expected = "drama";
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");

    assert.deepEqual(actual, expected);
  });

  it("will return the key 'comedy'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const expected = "comedy";
    const actual = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");

    assert.deepEqual(actual, expected);
  });

  it("will return the key 'sci_fi'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    const expected = "sci_fi";
    const actual = findKeyByValue(bestTVShowsByGenre, "The Expanse");

    assert.deepEqual(actual, expected);
  });

  it("will return the key 'romantic'", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      romantic: "Twilight"
    };

    const expected = "romantic";
    const actual = findKeyByValue(bestTVShowsByGenre, "Twilight");

    assert.deepEqual(actual, expected);
  });

});
