'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property, with "_"
    this._pin = pin;
    this._transactions = [];
    this.local = navigator.language;

    console.log(`ЙОу!!! ${owner}`);
  }

  // Public interface - API
  deposit(value) {
    this._transactions.push(value);
  }

  withdraw(value) {
    // this.transactions.push(-value);
    this.deposit(-value);
  }

  // Protected Methods
  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Займ утвержден!`);
    }
  }
}

const account1 = new Account('Jack', 'USD', 1111);

// account1.transactions.push(500);
// account1.transactions.push(-100);

account1.deposit(500);
account1.withdraw(100);
account1.requestLoan(10000);
account1.approveLoan(10000);

console.log(account1);
console.log(account1.pin);
