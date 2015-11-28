'use strict';

var toJSON = require( 'dstructs-typed-array-to-json' ),
	revive = require( './../lib' );

var arr1 = new Int8Array( 10 );
for ( var i = 0; i < arr1.length; i++ ) {
	arr1[ i ] = i;
}
console.log( arr1 );
// returns Int8Array([0,1,2,3,4,5,6,7,8,9])

var str = JSON.stringify( toJSON( arr1 ) );
console.log( str );
// returns '{"type":"Int8Array","data":[0,1,2,3,4,5,6,7,8,9]}'

var arr2 = JSON.parse( str, revive );
console.log( arr2 );
// returns Int8Array([0,1,2,3,4,5,6,7,8,9])
