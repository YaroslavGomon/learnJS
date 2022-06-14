'use strict';

// class expression
// const Person = class {

// }

// class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // методы добавляются в свойство .prototype
  printAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.firstName}!`);
  }
}

const jack = new Person('Jack', 2000);
console.log(jack);
jack.printAge();
console.log(jack.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(jack) === Person.prototype);

// Person.prototype.greet = function () {
//   console.log(`Hello! My name is ${this.firstName}!`);
// };

jack.greet();

// классы не поднимаются при помощи Hoisting
// классы являются "first class citizens"
// Тело класса всегда запускается в 'strict mode'