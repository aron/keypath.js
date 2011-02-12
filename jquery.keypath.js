/*  Keypath jQuery Plugin - v1.0
 *  Copyright 2011, Aron Carroll
 *  Released under the MIT license
 *  More Information: http://github.com/aron/jquery.keypath.js
 */
(function (undefined) {

	/* Function for looking up a value in an object using a keypath string.
	 *
	 * Often useful when working with large objects such as JSON data returned
	 * from a server as it allows quick navigation to only the required
	 * information.
	 *
	 * NOTE: This plugin is not dependant on jQuery. If included on a page where
	 * jQuery is not present it will simply add itself to the global object. In
	 * the case of a web browser the window object.
	 *
	 * object    - An Object to query.
	 * path      - A dot sepeated keypath String.
	 * fallback  - An optional fallback value to return.
	 * prototype - Boolean, if true keypath will traverse the prototype chain.
	 *
	 * Examples
	 *
	 *   var data = {
	 *     tracks: [
	 *     {
	 *       name: 'Michelle',
	 *       url: 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
	 *       album: {
	 *         name: 'Rubber Soul'
	 *         url: 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
	 *         tracks: 12
	 *       },
	 *       artist: {
	 *         name: 'The Beatles',
	 *         url: 'http://www.last.fm/music/The+Beatles'
	 *       }
	 *     }
	 *   ]};
	 *
	 *   jQuery.keypath(data, 'tracks.0.artist.name');
	 *   //=> 'The Beatles'
	 *
	 *   jQuery.keypath(data, 'tracks.0.duration');
	 *   //=> null
	 *
	 *   jQuery.keypath(data, 'tracks.0.duration', '2.42');
	 *   //=> '2.42'
	 *
	 *   // Without jQuery loaded on the page.
	 *   keypath(data, 'tracks.0.album.url);
	 *   //=> 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
	 *
	 * Returns the queried value if found. Otherwise returns null unless a
	 * fallback parameter is provided.
	 */
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
