'use strict';

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(`ACCEL: ${this.name} has speed ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`DECEL: ${this.name} has speed ${this.speed} km/h.`);
};

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

console.log(honda);
console.log(bmw);

while (honda.speed !== bmw.speed) {
  honda.accelerate();
}

console.log(honda);
console.log(bmw);
