'use strict';

const account = {
  owner: 'youra',
  transactions: [300, 500, -100, 600],

  get lastTransaction() {
    return this.transactions.slice(-1).pop();
  },

  set lastTransaction(trans) {
    this.transactions.push(trans);
  },
};

console.log(account.lastTransaction);
account.lastTransaction = 100;
console.log(account.transactions);

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
}

const jack = new Person('Jack White', 2000);
// console.log(jack.age);
const jane = new Person('Jane Red', 2000);
console.log(jane);
