'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties - свойства экземпляра
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Не делать так!!! (не создавать метод внутри функции конструктора)
//   // this.printAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };

// Person.highFive = function () {
//   console.log('High Five!');
// };

// Person.highFive();

// const jack = new Person('Jack', 1999);
// // jack.highFive();

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

  // Статический метод
  static highFive() {
    console.log('High Five!');
  }
}

Person.highFive();

const jack = new Person('Jack', 2000);
