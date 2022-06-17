'use strict';

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields
  local = navigator.language;

  // Private fields
  #transactions = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property, with "_"
    this.#pin = pin;
    // this._transactions = [];
    // this.local = navigator.language;

    console.log(`ЙОу!!! ${owner}`);
  }

  // Public interface - API
  deposit(value) {
    this.#transactions.push(value);
    return this;
  }

  withdraw(value) {
    // this.transactions.push(-value);
    this.deposit(-value);
    return this;
  }

  setDefaultPin() {
    this.#pin = '0000';
  }

  getTransactions() {
    return this.#transactions;
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log(`Займ утвержден!`);
      return this;
    }
  }

  static greet() {
    console.log(`Добро пожаловать в "Просто Банк"!`);
  }

  // Private methods
  // Protected Methods
  #approveLoan(value) {
    return true;
  }
}

const account1 = new Account('Jack', 'USD', 1111);

// account1.#transactions.push(500);
// account1.#transactions.push(-100);

account1.deposit(500);
account1.withdraw(100);
account1.requestLoan(10000);
// account1.#approveLoan(10000); // не может быть использован снаружи класса
account1.setDefaultPin();

console.log(account1);
// console.log(account1.#pin);
console.log(account1.getTransactions());
Account.greet();

// надо в методе класса довавить return this
account1
  .deposit(5000)
  .deposit(1000)
  .withdraw(300)
  .requestLoan(20000)
  .withdraw(1000);
