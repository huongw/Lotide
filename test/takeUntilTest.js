const { assert } = require("chai");

const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {

  it("will return [1,2,5,7,2]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

    const expected = [1,2,5,7,2];

    const actual = takeUntil(data1, x => x < 0);

    assert.deepEqual(actual, expected);
  });

  it("will return ['I've', 'been', 'to', 'Hollywood']", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

    const expected = ["I've", "been", "to", "Hollywood"];
    const actual = takeUntil(data2, x => x === ',');

    assert.deepEqual(actual, expected);
  });

});



// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');


// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1,2,5,7,2])
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])