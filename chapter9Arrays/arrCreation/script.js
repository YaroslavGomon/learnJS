'use strict';

// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

console.log(new Array(1, 2, 3));

console.log(new Array(1, 2, 3)); // создаст массив с 3-мя пустыми значениями

const arr = new Array(3);
// console.log(arr.map(() => 7));  // не сработает

// arr.fill(7);
arr.fill(7, 1, 2);
console.log(arr);

const arr1 = [1, 1, 1, 1, 1];
arr1.fill(3, 2, 4);
console.log(arr1);

// Array.from() method //////////////////////
const arr2 = Array.from({ length: 5 }, () => 1);
console.log(arr2);

const arr3 = Array.from({length: 5}, (_, index) => index + 1);
console.log(arr3);


