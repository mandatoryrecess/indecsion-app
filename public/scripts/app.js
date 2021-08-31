'use strict';

var user = {
  name: 'ross',
  cities: ['vancouver', 'montreal', 'lax'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    var cityMessages = this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    return cityMessages;
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3, 4],
  multiplieBy: 6,
  multiply: function multiply() {
    var _this2 = this;

    var multiplyThis = this.numbers.map(function (num) {
      return num * _this2.multiplieBy;
    });
    return multiplyThis;
  }
};
console.log(multiplier.multiply());
