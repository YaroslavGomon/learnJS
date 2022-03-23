'use strict';

// bigInt введен в ES2020
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 2);
console.log(1234546877946321654689654321n);
console.log(BigInt('1234546877946321654689654321'));

console.log(1234546877946321654689654321n + 1234546877946321654689654321n);

const bigNumber = 1234546877946321654689654321n;
const regularNumber = 189;

// console.log(Math.pow(bigNumber, 2));

console.log(bigNumber * BigInt(regularNumber));

console.log(1234546877946321654689654321n > 123);
console.log(123n === 123);
console.log(typeof 123n);
console.log(typeof 123);

console.log(bigNumber + ' это очень большое число');

console.log(5 / 3);
console.log(5n / 3n);
