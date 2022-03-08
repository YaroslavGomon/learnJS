'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const balance = transactions.reduce((acc, value) => acc + value, 0);

console.log(balance);

let sum = 0;
for (const trans of transactions) {
  sum += trans;
}

console.log(sum);

// Get minimum value of arr
const min = transactions.reduce((acc, trans) => {
  if (acc < trans) {
    return acc;
  } else {
    return trans;
  }
}, transactions[0]);

const minn = transactions.reduce(
  (acc, trans) => (acc < trans ? acc : trans),
  transactions[0]
);

console.log(min);
console.log(minn);
