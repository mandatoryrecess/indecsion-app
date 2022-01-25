'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name) {
    var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'New York';
    var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 18;

    _classCallCheck(this, Person);

    this.name = name;
    this.location = location;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreetting',
    value: function getGreetting() {
      return 'Hi ' + this.name + ' it\'s so nice to see you! I hope it\'s not to dreary in ' + this.location + '. It\'s not a nice place to spend your ' + (this.age + 1) + ' Birthday';
    }
  }]);

  return Person;
}();

var me = new Person('Rossanne Clamp', 'Vancouver', 35);
console.log(me.getGreetting());

var other = new Person('Kiko');
console.log(other.getGreetting());
