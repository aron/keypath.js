jQuery.keypath()
================

A very simple function for looking up a value in an object using a keypath
string.

Often useful when working with large objects such as JSON data returned
from a server as it allows quick navigation to only the required
information.

_NOTE: This plugin is not dependant on jQuery. If included on a page where
jQuery is not present it will simply add itself to the global object. In
the case of a web browser the window object._

jQuery.keypath(object, keypath [, fallback [, prototype ]])
-----------------------------------------------------------

### Parameters

    object    - An Object to query.
    path      - A dot sepeated keypath eg. 'artist.album.name'
    fallback  - An optional fallback value to return.
    prototype - Boolean, if true keypath will traverse the prototype chain.

### Returns

Returns the queried _keypath_ if found. Otherwise returns `null` unless a
_fallback_ parameter is provided.

### Examples

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

    jQuery.keypath(data, 'tracks.0.artist.name');
    //=> 'The Beatles'

    jQuery.keypath(data, 'tracks.0.duration');
    //=> null

    jQuery.keypath(data, 'tracks.0.duration', '2.42');
    //=> '2.42'

Without jQuery loaded on the page.

    keypath(data, 'tracks.0.album.url);
    //=> 'http://www.last.fm/music/The+Beatles/Rubber+Soul'

### Licence

Released under the MIT license
