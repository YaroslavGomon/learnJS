'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties - свойства экземпляра
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Не делать так!!! (не создавать метод внутри функции конструктора)
  // this.printAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const youra = new Person('YouRa', 1974);
console.log(youra);

// 1. Create new empty object {}
// 2. Function is calling, this = {}
// 3. {} связывается с прототипом
// 4. Функция автоматически возвращает {}

const mary = new Person('Mary', 2000);
const john = new Person('John', 2003);
console.log(mary);
console.log(john);

const jack = 'Jack';

console.log(mary instanceof Person);
console.log(jack instanceof Person);
