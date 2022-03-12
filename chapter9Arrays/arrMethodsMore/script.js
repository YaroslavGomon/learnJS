'use strict';

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];
console.log(accounts);

// 1
const bankDepositTotal = accounts
  .flatMap(account => account.transactions)
  .filter(trans => trans > 0)
  .reduce((acc, depo) => acc + depo, 0);
console.log(bankDepositTotal);

// 2
// const bankWithdrawalTotal = accounts
//   .flatMap(account => account.transactions)
//   .filter(trans => trans < -300);
// console.log(bankWithdrawalTotal.length);

const bankWithdrawalTotal = accounts
  .flatMap(account => account.transactions)
  .reduce((acc, trans) => (trans <= -300 ? acc + 1 : acc), 0);
console.log(bankWithdrawalTotal);

// 3
const { depositesTotal, withdrawalTotal } = accounts
  .flatMap(account => account.transactions)
  .reduce(
    (acc, trans) => {
      // trans > 0
      //   ? (acc.depositesTotal += trans)
      //   : (acc.withdrawalTotal += trans);
      acc[trans > 0 ? 'depositesTotal' : 'withdrawalTotal'] += trans;
      return acc;
    },
    { depositesTotal: 0, withdrawalTotal: 0 }
  );

console.log(depositesTotal, withdrawalTotal);

// 4 titleCase
// работа с массивами в javascript -> Работа с Массивами в Javascript

const text1 = 'работа с массивами в javascript';
const text2 = 'работа с массивами в javascript ПРОСТЫМ языком для новичков';
const text3 = 'работа с массивами и строками в javascript';
const text4 = 'для чего нужны массивы в javascript';
const textToTitleCase = function (text) {
  const exeptions = ['с', 'в', 'и', 'для'];

  const capitalizString = word => word[0].toUpperCase() + word.slice(1);

  const titleCase = text
    .toLowerCase()
    .split(' ')
    .map(word => (exeptions.includes(word) ? word : capitalizString(word)))
    .join(' ');
  return capitalizString(titleCase);
};

console.log(textToTitleCase(text1));
console.log(textToTitleCase(text2));
console.log(textToTitleCase(text3));
console.log(textToTitleCase(text4));
