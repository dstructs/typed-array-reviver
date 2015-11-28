'use strict';

// MODULES //

var dtype = require( 'dstructs-array-dtype' ),
	array = require( 'dstructs-array' ).raw,
	isArray = require( 'validate.io-array' );


// TYPED ARRAY REVIVER //

/**
* FUNCTION: revive( key, value )
*	Revives a JSON-serialized typed array.
*
* @param {String} key - key
* @param {*} value - value
* @returns {*|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} value or a typed array
*/
function revive( key, value ) {
	var dt;
	if (
		value &&
		value.type &&
		isArray( value.data )
	) {
		dt = dtype( value.type );
		if ( dt ) {
			return array( value.data, dt );
		}
	}
	return value;
} // end FUNCTION revive()


// EXPORTS //

module.exports = revive;
