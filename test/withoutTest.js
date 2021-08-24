const { assert } = require("chai");

const without = require("../without");

describe("#without", () => {

  it("will return [2, 3]", () => {
    const expected = [2, 3];
    const actual = without([1, 2, 3], [1]);

    assert.deepEqual(actual, expected);
  });

  it("will return ['1', '2']", () => {
    const expected = ['1', '2'];
    const actual = without(['1', '2', '3'], [1, 2, '3']);

    assert.deepEqual(actual, expected);
  });

  it("will return ['world', 'lighthouse']", () => {

    const words = ["hello", "world", "lighthouse"];

    const expected = ["world", "lighthouse"];
    const actual = without(words, ["hello"]);

    assert.deepEqual(actual, expected);
  });

});