# sum.js

[![Build Status](http://img.shields.io/travis/wilmoore/sum.js.svg)](https://travis-ci.org/wilmoore/sum.js) [![NPM version](http://img.shields.io/npm/v/sum.js.svg)](https://www.npmjs.org/package/sum.js) [![NPM downloads](http://img.shields.io/npm/dm/sum.js.svg)](https://www.npmjs.org/package/sum.js) [![LICENSE](http://img.shields.io/npm/l/sum.js.svg)](license)

> Sum a list of number literals, nested object property values, or values returned from a custom function for [Node.js][] and the browser.

## Examples

#### Number literals

    sum([1, 2, 3, 4]);
    //=> 10

#### Nested object properties

    var strings = ['literal', 'constructor'];
    sum(strings, 'length');
    //=> 18

#### Custom function

    sum([1, 2, 3, 4], function (n) { n * 60 });
    //=> 600

## Installation

[component](http://component.io/wilmoore/sum.js)

    $ component install wilmoore/sum.js

[bower](http://sindresorhus.com/bower-components/)

    $ bower install sum.js

[npm](https://npmjs.org/package/sum.js)

[![NPM](https://nodei.co/npm/sum.js.png?downloads=true)](https://nodei.co/npm/sum.js/)

[volo](http://volojs.org)

    $ volo add wilmoore/sum.js

[manual][]

1. download

        % curl -#O https://raw.github.com/wilmoore/sum.js/master/sum.min.js
        or
        % curl -#O https://raw.github.com/wilmoore/sum.js/master/sum.js

2. use

        <script src="sum.min.js"></script>
        or
        <script src="sum.js"></script>

## License

  [MIT](license)

[Node.js]:  http://nodejs.org
[manual]:   http://yuiblog.com/blog/2006/06/01/global-domination/

