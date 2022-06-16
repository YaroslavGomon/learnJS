'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.printAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, dept) {
  Person.call(this, firstName, birthYear);
  this.dept = dept;
};

Student.prototype = Object.create(Person.prototype); // свзяь нужно добавить до обхявления методов

Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I studying at the "${this.dept}" department.`
  );
};

const jack = new Student('Jack', 2000, 'Programming');
console.log(jack);
jack.introduce();
jack.printAge();

// console.log(jack.__proto__);
console.log(Object.getPrototypeOf(jack));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(jack)));

console.log(jack instanceof Student);
console.log(jack instanceof Person);
console.log(jack instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
