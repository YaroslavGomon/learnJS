'use strict';

// Итерация с помощью forEach /////////////////

const currencies = new Map([
  ['USD', 'Inited States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

// for (const transaction of transactions) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//   }
// }

// получение доступа к индексу элемента в массиве
// for (const [i, transaction] of transactions.entries()) {
//   if (transaction > 0) {
//     console.log(`${transaction} was deposited`);
//     console.log(i);
//   } else {
//     console.log(`${Math.abs(transaction)} was withdrew`);
//     console.log(i);
//   }
// }

transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(`Tansaction № ${index + 1}: ${transaction} was deposited`);
  } else {
    console.log(`Tansaction № ${index + 1}: ${Math.abs(transaction)} was withdrew`);
  }
});
// ключевое отличие, что для фор ич нельзя использовать прерывания, брэйк

