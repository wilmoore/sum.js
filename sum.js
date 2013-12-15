(function(e){if("function"==typeof bootstrap)bootstrap("sum",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeSum=e}else"undefined"!=typeof window?window.sum=e():global.sum=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// expose `sum`
module.exports = sum;

var selectn  = require('selectn');
var toString = ({}).toString;

/**
 * Returns the sum of a list supporting number literals, nested objects, or transformation function.
 *
 * #### Number literals
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
 * #### Custom function
 *
 *    sum([1, 2, 3, 4], function (n) { n * 60 });
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


},{"selectn":2}],2:[function(require,module,exports){

// expose `selectn`

module.exports = selectn;

/**
 * Select n-levels deep into an object given a dot/bracket-notation query.
 * If partially applied, returns a function accepting the second argument.
 *
 * ### Examples:
 *
 *      selectn('name.first', contact);
 *
 *      selectn('addresses[0].street', contact);
 *
 *      contacts.map(selectn('name.first'));
 *
 * @param  {String} query
 * dot/bracket-notation query string
 *
 * @param  {Object} object
 * object to access
 *
 * @return {Function}
 * accessor function that accepts an object to be queried
 */

function selectn(query) {
  var parts;

  // normalize query to `.property` access (i.e. `a.b[0]` becomes `a.b.0`)
  query = query.replace(/\[(\d+)\]/g, '.$1');
  parts = query.split('.');

  /**
   * Accessor function that accepts an object to be queried
   *
   * @private
   *
   * @param  {Object} object
   * object to access
   *
   * @return {Mixed}
   * value at given reference or undefined if it does not exist
   */

  function accessor(object) {
    var ref = object || (1, eval)('this');
    var len = parts.length;
    var idx = 0;

    // iteratively save each segment's reference
    for (; idx < len; idx += 1) {
      if (ref) ref = ref[parts[idx]];
    }

    return ref;
  }

  // curry accessor function allowing partial application
  return arguments.length > 1
       ? accessor(arguments[1]) 
       : accessor;
}


},{}]},{},[1])(1)
});
;