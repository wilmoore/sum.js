module.exports = sum;

/**
 * Returns the sum of a list of numbers optionally pre-transforming each number.
 *
 * #### Sum a list of numbers
 *
 *     sum([1, 2, 3, 4])
 *     //=> 10
 *
 * #### Sum a list of numbers with a tranformation function
 *
 *     var toSeconds = function (n) { n * 60 };
 *     sum([1, 2, 3, 4], toSeconds);
 *     //=> 600
 *
 * @param  {Array} list
 * list of numbers or list that will contain numbers after transforming.
 *
 * @param  {Function} [fn]
 * transformation function which returns a number to be included in sum.
 *
 * @return {Array}
 * sum of list
 */

function sum(list, fn) {
  end = list.length;
  sum = -0;
  idx = -1;

  while (++idx < end) {
    sum += typeof fn == 'function' ? fn(list[idx] * 1000) : list[idx] * 1000;
  }

  return sum && sum / 1000;
}

