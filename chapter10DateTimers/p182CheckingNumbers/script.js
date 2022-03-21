'use strict';

console.log(10 === 10.0);

// 10 - 0-9; 1/10=0.1; 10/3=3.33333333
// 2 - 0, 1;
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// converting string to numbers
console.log(Number('11'));
console.log(+'11'); // сработает приведение типов
console.log('11');

// parsing numbers from string
console.log(Number.parseInt('20%', 10)); // строка должна начинаться с числа чтобы парс сработал
console.log(Number.parseInt('1011%', 2)); // 11 в двоичной 1 * 2 ** 0 + 1 * 2 ** 1 + 0 * 2 ** 2 + 1 * 2 ** 3 == 1 + 2 + 0 + 8
console.log(Number.parseInt('s20', 10));

console.log(Number.parseFloat('9.7kg')); // 9.7
console.log(Number.parseInt('9.7kg')); // 9
console.log(parseInt('9.7kg')); // в старом коде без намбера может быть

// Other methods from Number namespace
console.log(Number.isNaN(111));
console.log(Number.isNaN('1111'));
console.log(Number.isNaN(Number.parseInt('s20', 10)));
console.log(+'s20');
console.log(Number.isNaN(+'s20'));
console.log(11 / 0);
console.log(Number.isNaN(11 / 0));

// Check if the value is finite number
console.log('==================================');
console.log(Number.isFinite(111));
console.log(Number.isFinite(+'111%'));
console.log(Number.isFinite('111'));
console.log(Number.isFinite('111%'));
console.log(Number.isFinite(11 / 0));
