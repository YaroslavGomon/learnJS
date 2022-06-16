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

const ElectricCar = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeLevel) {
  this.battery = chargeLevel;
};

ElectricCar.prototype.accelerate = function() {
  this.speed += 10;
  this.battery -= 1;
  console.log(`${this.name} едет со скоростью ${this.speed} км/ч, с зарядом ${this.battery} %.`);
}

//////////////////////////////////////
const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);
const tesla = new ElectricCar('Tesla', 100, 33);

console.log(honda);
console.log(bmw);

while (honda.speed !== bmw.speed) {
  honda.accelerate();
}

console.log(honda);
console.log(bmw);

tesla.chargeBattery(80)
console.log(tesla);

tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
console.log(tesla);
