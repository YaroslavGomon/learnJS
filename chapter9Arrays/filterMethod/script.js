'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const withdrawals = transactions.filter(value => value < 0);

console.log(withdrawals);

const withdrawals1 = [];
for (const trans of transactions) {
  if (trans < 0) {
    withdrawals1.push(trans);
  }
}

console.log(withdrawals1);

const deposites = transactions.filter(value => value > 0);

console.log(deposites);
