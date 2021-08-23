const assert = require("chai").assert;

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs']", () => {
    const expected = ["Lighthouse", "Labs"]
    const actual = tail(["Yo Yo", "Lighthouse", "Labs"]);

    assert.deepEqual(actual, expected);
  });

  it("returns 4, 5 when given 1, 4, 5", () => {
    const expected = [4, 5]
    const actual = tail([1,4,5]);
    assert.deepEqual(actual, expected);
  });
});