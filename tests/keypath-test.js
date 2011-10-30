(function () {
  module('keypath');

  var object = {
    simple: 'okay',
    food: {
      eggs: 'good',
      cheese: 'good',
      cottage_cheese: 'bad'
    },
    turtles: ['Michelangelo', 'Leonardo', 'Donatello', 'Raphael']
  };

  Object.prototype.bad = 'argh';

  test('keypath(object, path)', function () {
    equals(keypath(object, 'simple'), 'okay', 'Should look up a value by keypath');
    equals(keypath(object, 'food.eggs'), 'good', 'Should handle multiple keys');
    equals(keypath(object, 'turtles.2'), 'Donatello', 'Should handle array indexes');
    equals(keypath(object, 'nothing'), null, 'Should return null when not found');
    equals(keypath(object, 'bad'), null, 'Should not look up the prototype chain');
    equals(keypath(object), null, 'Should not break when no path is provided');
    equals(keypath(), null, 'Should not break when no object is provided');
  });

  test('keypath(object, path, fallback)', function () {
    equals(keypath(object, 'my.crazy.path', true), true, 'Should return the fallback value');
    equals(keypath(object, 'my.crazy.path', undefined), undefined, 'Should allow undefined as the fallback value');
  });

  test('keypath(object, path, fallback, prototype)', function () {
    equals(keypath(object, 'bad', null, true), 'argh', 'Should traverse the prototype chain');
  });
  
  module('keypath.noConflict()');

  test('it should return the keypath function and restore state', function () {
    var _keypath = keypath;
    equal(keypath.noConflict(), _keypath);
    equal(this.keypath, undefined);
  });

}());
