Typed Array Reviver
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Revives a JSON-serialized [typed array][typed-array].


## Installation

``` bash
$ npm install dstructs-typed-array-reviver
```


## Usage

``` javascript
var revive = require( 'dstructs-typed-array-reviver' );
```

#### revive( key, value )

Revives a JSON-serialized [typed array][typed-array].

``` javascript
var str = '{"type":"Int8Array""data":[0,0,0,0]}';

var arr = JSON.parse( str, revive );
// returns Int8Array([0,0,0,0])
```


## Examples

``` javascript
var toJSON = require( 'dstructs-typed-array-to-json' ),
	revive = require( 'dstructs-typed-array-reviver' );

var arr1 = new Int8Array( 10 );
for ( var i = 0; i < arr1.length; i++ ) {
	arr1[ i ] = i;
}
// returns Int8Array([0,1,2,3,4,5,6,7,8,9])

var str = JSON.stringify( toJSON( arr1 ) );
// returns '{"type":"Int8Array","data":[0,1,2,3,4,5,6,7,8,9]}'

var arr2 = JSON.parse( str, revive );
// returns Int8Array([0,1,2,3,4,5,6,7,8,9])
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-typed-array-reviver.svg
[npm-url]: https://npmjs.org/package/dstructs-typed-array-reviver

[travis-image]: http://img.shields.io/travis/dstructs/typed-array-reviver/master.svg
[travis-url]: https://travis-ci.org/dstructs/typed-array-reviver

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/typed-array-reviver/master.svg
[codecov-url]: https://codecov.io/github/dstructs/typed-array-reviver?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/typed-array-reviver.svg
[dependencies-url]: https://david-dm.org/dstructs/typed-array-reviver

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/typed-array-reviver.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/typed-array-reviver

[github-issues-image]: http://img.shields.io/github/issues/dstructs/typed-array-reviver.svg
[github-issues-url]: https://github.com/dstructs/typed-array-reviver/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
