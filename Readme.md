# sum.js [![Build Status](https://travis-ci.org/wilmoore/sum.js.png?branch=master)](https://travis-ci.org/wilmoore/sum.js) [![Build Status](https://david-dm.org/wilmoore/sum.js.png)](https://david-dm.org/wilmoore/sum.js) [![NPM version](https://badge.fury.io/js/sum.js.png)](http://badge.fury.io/js/sum.js)

  Returns the sum of a list of numbers optionally pre-transforming each number for [Node.js][] and the browser.

## Examples

#### Sum a list of numbers

    sum([1, 2, 3, 4])
    //=> 10

#### Sum a list of numbers with a tranformation function

    var toSeconds = function (n) { n * 60 };
    sum([1, 2, 3, 4], toSeconds);
    //=> 600

## Installation

[component](http://component.io/wilmoore/sum.js)

    $ component install wilmoore/sum.js

[bower](http://sindresorhus.com/bower-components/)

    $ bower install sum.js

[npm](https://npmjs.org/package/sum.js)

[![NPM](https://nodei.co/npm/sum.js.png?downloads=true)](https://nodei.co/npm/sum.js/)

[jam](http://jamjs.org/packages/#/details/sum.js)

    $ jam install sum.js

[volo](http://volojs.org)

    $ volo add wilmoore/sum.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/sum.js/master/sum.js

2. use

        <script src="sum.js"></script>

## License

  MIT

[Node.js]:  http://nodejs.org
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/
