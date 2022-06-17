'use strict';

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // методы добавляются в свойство .prototype
  printAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello! My name is ${this.fullName}!`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  // Установить значение свойства которое уже существует
  set fullName(personName) {
    console.log(personName);
    if (personName.includes(' ')) {
      this._fullName = personName;
    } else {
      alert('Полное имя должно состоять из имени и фамилии!');
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Статический метод
  static highFive() {
    console.log('High Five!');
  }
}

class Student extends Person {
  constructor(fullName, birthYear, dept) {
    // обязательно записать в самом начале
    super(fullName, birthYear);
    this.dept = dept;
  }

  greet() {
    console.log(`Привет меня зовут ${this.fullName}`);
  }
}

const jack = new Student('Jack Black', 2000, 'Programming');
console.log(jack);
jack.greet();
console.log(jack.age);
jack.greet();
