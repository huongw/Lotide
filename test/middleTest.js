const { assert } = require("chai");

const middle = require("../middle");

describe("#middle", () => {
  it("returns []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns []", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  it("returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it("returns [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
  it("returns [2]", () => {
    assert.deepEqual(middle([2,5,4,2,6,7,6]), [2]); 
  });
  it("returns [7, 5]", () => {
    assert.deepEqual(middle([8,4,2,7,5,1,8,6]), [7, 5]); 
  });
  it("returns 'Lighthouse'", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });
});