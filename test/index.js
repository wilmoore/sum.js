var assert = typeof require == 'function' ? require('chai').assert : window.chai.assert;
var sum    = typeof require == 'function' ? require('..')          : window.sum;

describe('sum', function () {

  it('correctly calculates the sum of a list of integers', function () {
    assert.strictEqual(sum([1, 2, 3, 4]), 10);
  });

  it('correctly calculates the sum of a list of floats', function () {
    assert.strictEqual(sum([0.1, 0.2, 0.3]), 0.6);
  });

  it('correctly calculates the sum of a transformed list', function () {
    function toSeconds(n) {
      return n * 60;
    };

    assert.strictEqual(sum([2, 3], toSeconds), 300);
  });

});
