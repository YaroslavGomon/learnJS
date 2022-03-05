'use strict';

const currencies = new Map([
  ['USD', 'Inited States dollar'],
  ['EUR', 'Euro'],
  ['CNY', 'Chinese yuan'],
]);

const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

/////////////////////////////////////////////////////////

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// slice()//////////////////////////////////////
// console.log(letters.slice(1));
// console.log(letters.slice(1, 4)); // вырезка с 1 до 4
// console.log(letters.slice(-1)); // вырезка последнего элемента с конца
// console.log(letters.slice(-3)); // вырезка 3х последних элементов
// console.log(letters.slice(-3, -1));
// console.log(letters.slice(3, -1));
// console.log(letters.slice()); // создать shallow копию массива
// console.log([...letters]); // также можно спредом

// splice()////////////////////////////////////////
// letters.splice(-1); // удалили букву F в исходном массиве
// letters.splice(1, 3); // удаляется 3 элемента с 1-го

// reverce() //////////////////////////////////
// console.log(letters.reverse()); // переворачивает исходный массив наоборот

// concat() ///////////////////////
let letters2 = ['g', 'h', 'i'];
const letters3 = letters.concat(letters2);
console.log(letters3); // соединили два массива, не изменяет исходные массивы
console.log([...letters, ...letters2]); // конкатинация через спред

// join() ////////////////////////////////

console.log(letters3.join(', ')); // возвращает строку с элементами массива разделенными указанным символом
