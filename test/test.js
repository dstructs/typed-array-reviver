/* global require, describe, it, beforeEach */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	copy = require( 'utils-copy' ),
	array = require( 'dstructs-array' ),
	revive = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'dstructs-typed-array-reviver', function tests() {

	var json;

	beforeEach( function before() {
		json = {};
		json.type = 'Int16Array';
		json.data = [1,2,3,4,5,6];
	});

	it( 'should export a function', function test() {
		expect( revive ).to.be.a( 'function' );
	});

	it( 'should not affect values which are not typed arrays', function test() {
		var expected,
			actual;

		expected = {
			'beep': 'boop'
		};
		actual = JSON.parse( '{"beep":"boop"}', revive );

		assert.deepEqual( actual, expected );

		// Null edge case:
		actual = JSON.parse( 'null', revive );
		assert.isNull( actual );
	});

	it( 'should require a "type" field equal to a typed array constructor name', function test() {
		var expected,
			actual;

		json.type = 'Boop';
		expected = copy( json );

		actual = JSON.parse( JSON.stringify( json ), revive );

		assert.deepEqual( actual, expected );
	});

	it( 'should require a "data" field', function test() {
		var expected,
			actual;

		delete json.data;
		expected = copy( json );

		actual = JSON.parse( JSON.stringify( json ), revive );

		assert.deepEqual( actual, expected );

		// Must be an array:
		json.data = null;
		expected = copy( json );

		actual = JSON.parse( JSON.stringify( json ), revive );

		assert.deepEqual( actual, expected );
	});

	it( 'should revive a typed array', function test() {
		var expected,
			actual;

		expected = array( json.data, 'int16' );

		actual = JSON.parse( JSON.stringify( json ), revive );

		assert.deepEqual( actual, expected );
	});

	it( 'should revive deeply nested typed arrays', function test() {
		var expected,
			actual,
			arrs;

		arrs = [
			{
				'type': 'Uint32Array',
				'data': [1,2,3,4]
			},
			{
				'type': 'Float32Array',
				'data': [1,2,3,4,5,6]
			}
		];

		expected = [
			array( [1,2,3,4], 'uint32' ),
			array( [1,2,3,4,5,6], 'float32' )
		];
		actual = JSON.parse( JSON.stringify( arrs ), revive );

		assert.deepEqual( actual, expected );

		expected = {
			'beep': {
				'boop': array( json.data, 'int16' )
			}
		};
		json = {
			'beep': {
				'boop': json
			}
		};

		actual = JSON.parse( JSON.stringify( json ), revive );

		assert.deepEqual( actual, expected );
	});

});
