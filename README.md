keypath()
=========

A very simple function for looking up a value in an object using a keypath
string.

Often useful when working with large objects such as JSON data returned
from a server as it allows quick navigation to only the required
information.

keypath(object, keypath [, fallback [, prototype ]])
----------------------------------------------------

### Parameters

    object    - An Object to query.
    path      - A dot sepeated keypath eg. 'artist.album.name'
    fallback  - An optional fallback value to return.
    prototype - Boolean, if true keypath will traverse the prototype chain.

### Returns

Returns the queried _keypath_ if found. Otherwise returns `null` unless a
_fallback_ parameter is provided.

### Examples

```javascript
var data = {
  tracks: [
  {
    name: 'Michelle',
    url: 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
    album: {
      name: 'Rubber Soul'
      url: 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
      tracks: 12
    },
    artist: {
      name: 'The Beatles',
      url: 'http://www.last.fm/music/The+Beatles'
    }
  }
]};

keypath(data, 'tracks.0.artist.name');
//=> 'The Beatles'

keypath(data, 'tracks.0.duration');
//=> null

keypath(data, 'tracks.0.duration', '2.42');
//=> '2.42'
```

flatten.noConflict()
--------------------

Public: Restores the previous "keypath" property on the current scope and
returns the function. Use this to redefine the function in a different
namespace, for example to add the function as a jQuery plugin.

### Returns

Returns the `keypath()` Function.

```javascript
jQuery.keypath = keypath.noConflict();
jQuery.keypath(data, 'tracks.0.duration');
```

### Licence

Released under the MIT license
