// expose `sum`
module.exports = sum;

var selectn  = require('selectn');
var toString = ({}).toString;

/**
 * Returns the sum of a list supporting number literals, nested objects, or transformation function.
 *
 * #### Sum a list of numbers
 *
 *    sum([1, 2, 3, 4])
 *    //=> 10
 *
 * #### Nested object properties
 *
 *    var strings = [ 'literal', 'constructor' ];
 *    sum(strings, 'length');
 *    //=> 18
 *
 * #### Sum a list of numbers with a tranformation function
 *
 *    var toSeconds = function (n) { n * 60 };
 *    sum([1, 2, 3, 4], toSeconds);
 *    //=> 600
 *
 * @param  {Array} list
 * list of numbers or list that will contain numbers after transforming.
 *
 * @param  {Function|String} [fun]
 * function which is given the current item and returns a number to be included in sum
 * or dot notation object property string (i.e. `length`).
 *
 * @return {Array}
 * sum of list
 */

function sum(list, fun) {
  fun = toString.call(fun) == '[object String]' ? selectn(fun) : fun;
  end = list.length;
  sum = -0;
  idx = -1;

  while (++idx < end) {
    sum += typeof fun == 'function' ? fun(list[idx]) * 1000 : list[idx] * 1000;
  }

  return sum && (sum / 1000);
}

