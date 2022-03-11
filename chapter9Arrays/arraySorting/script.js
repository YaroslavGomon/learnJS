'use strict';

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const names = ['John', 'Sara', 'Evan', 'Steve', 'Cecil'];
console.log(names.sort()); // sort изменяет оригинальный массив
console.log(names);

// return < 0 -> x, y
// return > 0 -> y, x
console.log(transactions.sort());

// Accending возрастание
// transactions.sort((x, y) => {
//   if (x > y) {
//     return 1;
//   }
//   if (x < y) {
//     return -1;
//   }
// });
transactions.sort((x, y) => x - y);
console.log(transactions);

// Descending убывание
// transactions.sort((x, y) => {
//   if (x > y) {
//     return -1;
//   }
//   if (x < y) {
//     return 1;
//   }
// });
transactions.sort((x, y) => y - x);

console.log(transactions);
