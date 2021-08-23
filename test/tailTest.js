const assert = require("chai").assert;

const tail = require("../tail");

describe("#tail", () => {
  it("returns '4'", () => {
    assert.strictEqual(result[0], 4);
  });
  it("returns '5'", () => {
    assert.strictEqual(result[1], 5); 
  });
  it("returns '3'", () => {
    assert.strictEqual(words.length, 3); 
  });
});

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];

const result = tail([1, 4, 5]);
