'use strict';

// метод мап вовращает новый массив

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const usdToEuro = 0.86;

const euro = transactions.map(trans => trans * usdToEuro);

console.log(transactions);
console.log(euro);

let transactionsEuro1 = [];

// for (const i of transactions.values()) {
//   transactionsEuro1 = [...transactionsEuro1, i * usdToEuro];
// };
// console.log(transactionsEuro1);

for (const i of transactions) {
  transactionsEuro1.push(i * usdToEuro);
}
console.log(transactionsEuro1);

// const transactionDescr = transactions.map((transaction, index, array) => {
// let descr = '';

// if (transaction > 0) {
//   descr = `Transaction № ${index + 1}: ${transaction} was deposited`;
// } else {
//   descr = `Transaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`;
// }

// return descr;

// });

const transactionDescr = transactions.map(
  (transaction, index, array) =>
    `Transaction № ${index + 1}: ${Math.abs(transaction)} was ${
      transaction > 0 ? 'deposited' : 'withdrew'
    }.`
); // метод мап вызывает коллбэк функцию для каждого элемента массива

console.log(`\n${transactionDescr.join('\n\n')}\n `);
