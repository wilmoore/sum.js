(function(e){if("function"==typeof bootstrap)bootstrap("sum",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeSum=e}else"undefined"!=typeof window?window.sum=e():global.sum=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1])(1)
});
;