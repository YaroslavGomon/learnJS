'use strict';

/////////////////////////////////////////////////////////////////////////
// Функции конструкторы и оператор new

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

/////////////////////////////////////////////////////////////////////////
// Прототипы

console.log(Person.prototype);

Person.prototype.printAge = function () {
  console.log(2022 - this.birthYear);
};

youra.printAge();
mary.printAge();
john.printAge();

console.log(youra.__proto__);
console.log(youra.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mary));
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.creatureClass = 'Mammal';
console.log(mary, john);
console.log(mary.hasOwnProperty('birthYear'));
console.log(mary.hasOwnProperty('creatureClass'));

//////////////////////////////////////////////////////////
// ПРототипное наследование для встроенных объектов

console.log(youra.__proto__); // Person
console.log(youra.__proto__.__proto__); // Object - верхушка цепи прототипов
console.log(youra.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const nums = [3, 4, 2, 5, 8, 8, 8];

console.log(nums.__proto__); // одно и то же
console.log(Object.getPrototypeOf(nums)); // одно и то же

console.log(nums.__proto__ === Array.prototype);
console.log(nums.__proto__.__proto__);

// Bad practice
Array.prototype.uniqueElements = function () {
  return [...new Set(this)];
};
console.log(nums.uniqueElements());

const h2 = document.querySelector('h2');
console.dir(h2);
console.dir(n => n * 2);
