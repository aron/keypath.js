/*  Keypath jQuery Plugin - v1.0
 *  Copyright 2011, Aron Carroll
 *  Released under the MIT license
 *  More Information: http://github.com/aron/jquery.keypath.js
 */

(function (undefined) {

	function keypath(object, path, fallback, prototype) {
		var keys = (path || '').split('.'),
		    key;

		while (object && keys.length) {
			key = keys.shift();

			if (object.hasOwnProperty(key) || (prototype === true && object[key] !== undefined)) {
				object = object[key];

				if (keys.length === 0 && object !== undefined) {
					return object;
				}
			} else {
				break;
			}
		}

		return (arguments.length > 2) ? fallback : null;
	}

	this.keypath = keypath;

}).call(window.jQuery || this);
