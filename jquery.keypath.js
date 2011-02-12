(function (undefined) {

	function keypath(object, path, fallback, prototype) {
		var keys = path.split('.'),
		    key;

		while (keys.length) {
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
