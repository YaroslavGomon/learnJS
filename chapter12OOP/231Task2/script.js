'use strict';

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
    console.log(`ACCEL: ${this.name} has speed ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`DECEL: ${this.name} has speed ${this.speed} km/h.`);
  }

  get speedMph() {
    return console.log(`${this.speed / 1.6} Mph`);
  }

  set speedMph(speed) {
    this.speed = speed * 1.6;
  }
}

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

console.log(honda);
console.log(bmw);

honda.speedMph;
bmw.speedMph;

honda.accelerate();

honda.speedMph = 20;
console.log(honda);
