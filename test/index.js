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

  it('correctly calculates the sum of a list with strings', function () {
    var strings = ['literal', 'constructor'];

    assert.strictEqual(sum(strings, 'length'), 18);
  });

  it('correctly calculates the sum of a list with objects', function () {
    var paychecks = [
      { amount: 500.00 },
      { amount: 700.00 },
      { amount: 550.71 },
      { amount: 700.25 },
    ];

    assert.strictEqual(sum(paychecks, 'amount'), 2450.96);
  });

});
