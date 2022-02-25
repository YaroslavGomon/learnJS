"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const workingHours = {
  [weekDays[2]]: {
    open: 10,
    close: 23,
  },
  [weekDays[4]]: {
    open: 10,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
  [weekDays[6]]: {
    open: 12,
    close: 23,
  },
};

const japaneseRestaurant = {
  name: "Banzai",
  location: "108 Markham Woods Rd, Longwood, USA",
  categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
  appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
  mainMenu: ["Sushi", "Ramen", "Tempura"],

  // Новая запись с ES6, можно теперь не указывать 'свойство = внешний объект'
  workingHours,

  // // Старый принцип написания методов объекта (функций)
  // orderFood: function (appetizersIndex, mainMenuIndex) {
  //    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  // },

  // Новый принцип с ES6
  orderFood(appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },

  foodDelivery({
    mainMenuIndex = 0,
    appetizersIndex = 0,
    address,
    deliveryTime = "18:00",
  }) {
    console.log(
      `Your order on the way to you! ${this.appetizers[appetizersIndex]} and ${this.mainMenu[mainMenuIndex]} will be arrived to ${address} at ${deliveryTime}.`
    );
  },

  orderSushi(ing1, ing2, ing3) {
    console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderRamen(noodle, ...otherIngs) {
    console.log(noodle);
    console.log(otherIngs);
  },
};

// Перебирание названий свойств объекта
const props = Object.keys(workingHours);
console.log(props);

console.log(`"Banzai" opens ${props.length} days in a week.`);

for (const day of props) {
  console.log(day);
}

// Перебирание значений свойств объекта
const values = Object.values(workingHours);
console.log(values);

// Перебор и названий и значений свойств объекта
const entries = Object.entries(workingHours);
console.log(entries);

for (const entry of entries) {
  console.log(entry);
}

for (const [day, { open, close }] of entries) {
  // При деструктуризации объекта надо использовать название такое же как название его свойств
  console.log(`Restaurant on ${day} opens at ${open} and close at ${close}`);
}

// // Optaional chaining /// добавлено в ES2020 /////////////////////////////
// // if (japaneseRestaurant.workingHours && japaneseRestaurant.workingHours.thu) {
// //    console.log(japaneseRestaurant.workingHours.thu.open);
// // } // старый метод проверки наличия свойства объекта

// console.log(japaneseRestaurant.workingHours.thu?.open); // если свойство перед знаком вопроса существует, то только в этом случае будет попытка обращения к следующему свойству после точки

// console.log(japaneseRestaurant.workingHours?.thu?.open);

// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of daysOfWeek) {
//    // console.log(day);
//    const open = japaneseRestaurant.workingHours[day]?.open ?? `never`;
//    console.log(`On ${day} restaurant opens at ${open}.`);
// }

// // Проверка есть ли метод (функция) в объекте
// console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
// console.log(japaneseRestaurant.order?.(1, 2) ?? 'Method does not exist');

// // Проверка не пустой ли массив
// const posts = [{
//    namme: 'JS is cool!',
//    username: 'Ted'
// }, {
//    namme: 'JS is coshitol!',
//    username: 'Dick'
// }];

// const users = [];

// console.log(posts[0]?.namme ?? 'This post does not exist');
// console.log(posts[2]?.namme ?? 'This post does not exist');

// // проверка на пустой массив
// console.log(users[0]?.namme ?? 'The array is empty');

// // старый вариант проверки на пустой массив
// if (users.length > 0) {
//    console.log(users[0].name);
// } else {
//    console.log('The array is empty');
// }

// if (japaneseRestaurant.workingHours.fri) {
//    console.log(japaneseRestaurant.workingHours.fri.open);
// }

// Enhanced object literals см вверху объекта и в методах объекта ////////////////////////////////////

// // (FOR OF) loop //////////////////////////////////////////////////////
// // в этом цикле можно использовать континюе и брейк
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

// for (const food of menu) {
//    console.log(food);
// }

// // метод разбивает на массивы состоящие из порядкового номера и значения
// for (const food of menu.entries()) {
//    console.log(`${food[0] +1}. ${food[1]}`);
// }

// // улучшенная версия предыдущего кода
// for (const [index, food] of menu.entries()) { // деструктурируем массив на номер и значение
//    console.log(`${index +1}. ${food}`); // выводим порядковый номер и значение из массива как строки
// }

// console.log([...menu.entries()]);

// // Оператор нулевого слияния ////////////////////////////////////////////////
// // появился в ES2020
// // japaneseRestaurant.guestsNumber =0;
// const guests = japaneseRestaurant.guestsNumber || 5;
// console.log(guests);

// // Nulish values (нулевые значения): null and undefined, NOT include 0 and ''.
// // проверяется является ли первое нулем или пустой строкой, если да, то присваивается ноль или пустая строка, если нет - то присваивается второе значение
// const guests1 = japaneseRestaurant.guestsNumber ?? 5; // Оператор работает с нулевыми значениями
// console.log(guests1);

// // Short-circuit evaluations/////////////////////////////////
// // AND (&&) возвращает первый найденный falsy, если их нет, то возвращает последнее truthy
// console.log(0 && 'Hello!');
// console.log(1 && 'Hello!');
// console.log('Hey' && 34 && 0 && 56 && null);

// if (japaneseRestaurant.orderRamen) {
//    japaneseRestaurant.orderRamen('Something')
// }

// // если у объекта этого свойства нет, то далее выражение не будет выполняться
// // если этот метод существует, то выполняется вызов метода объекта
// japaneseRestaurant.orderRamen && japaneseRestaurant.orderRamen('Something');

// // OR (||) Use any data types, return any data types, short-circuit evaluation
// Вычисление логических выражений по сокращенной схеме
// // возвращаемое значение СТРОКА, а не булин
// console.log(5 || 'Hello'); // если первый операнд truthy, то строка дальше не оценивается
// console.log('' || 'Hello');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(typeof null, null); // тайп оф выведет что налл это обджект, но это баг, налл это примитив

// console.log(undefined || '' || 0 || '' || 'Hey!' || 23 || null);

// // japaneseRestaurant.guestsNumber = 10;

// const guests = japaneseRestaurant.guestsNumber ? japaneseRestaurant.guestsNumber : 5;
// console.log(guests);

// // не будет работать если значение свойства 0
// const guests1 = japaneseRestaurant.guestsNumber || 7; // если такое свойство объекта отсутствует, то получим что оно андефайнед, и тогда будет первое в выражении thruthy значение является 7
// console.log(guests1);

// // 1. Rest pattern with destructoring////////////////////////////////////////////

// // Rest pattern with arrays

// // This is SPREAD operator, because ... are on the right side of =
// const arr = [1, 2, ...[3, 4]];

// // This is REST pattern, because ... are on the left side of =
// const [a1, a2, ...items] = [1, 2, 3, 4];
// console.log(a1, a2, items);

// const [seeWeed, , edamame, ...otherFood] = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(seeWeed, edamame, otherFood);

// // Rest pattern with objects
// const {
//    sat,
//    sun,
//    ...weekDays
// } = japaneseRestaurant.workingHours;
// console.log(sat, sun, weekDays);

// // 2. Rest pattern with functions//////////////////////////////////////////

// const sum = function (...nums) { // итогом будет массив, можно передать любое колво аргументов, а также неважно будет передат массив или строка чисел
//    let s = 0;
//    for (let i = 0; i < nums.length; i++) {
//       s += nums[i];
//    }
//    console.log(nums);
//    console.log(s);
// }

// sum(2, 5);
// sum(1, 4, 7, 3);

// const numbers = [3, 44, 2];
// sum(...numbers);

// japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chicken', 'Onion');

// japaneseRestaurant.orderRamen('Ordinary Noodle');

// // Spread (...) operator //////////////////////////////////////////////////
// const arr = [1, 3, 5];

// // Old bad approach
// const newArr = [7, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);

// // New approach with spread operator
// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// console.log(...newArrSpread);
// console.log(7, 9, 1, 3, 5);

// const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
// console.log(newMenu);

// // Array copying. СОздание shallow copy
// const categoriesCopy = [...japaneseRestaurant.categories];

// // Merge arrays
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);
// console.log(...menu);

// // Iterable - arrays, strings, maps, sets. OBJECTS AREN'T ITERABLE.

// // Spread operator with strings
// const greeting = 'Hey';
// const greetingLetters = [...greeting, '!'];
// console.log(greetingLetters);
// console.log(...greeting);
// // console.log(`${...greeting}`); // Cant do this

// // const ingridients = [prompt(`Ingridient 1 for your sishi?`), prompt(`Ingridient 2 for your sishi?`), prompt(`Ingridient 3 for your sishi?`)];
// // console.log(ingridients);

// // japaneseRestaurant.orderSushi(...ingridients);

// // Objects spread (from ES2018)
// const newJapaneserestaurant = {
//    foundationDate: 2011,
//    ...japaneseRestaurant,
//    owner: 'Suzuki',
// };
// console.log(newJapaneserestaurant);

// const japaneseRestaurantCopy = {...japaneseRestaurant};
// japaneseRestaurantCopy.name = 'Suzuki Sushi';
// console.log(japaneseRestaurant.name);
// console.log(japaneseRestaurantCopy.name);

// // Objects Destructoring //////////////////////////////////////////////
// japaneseRestaurant.foodDelivery({
//    deliveryTime: '12:30',
//    address: '18 Markham Woods Rd',
//    mainMenuIndex: 1,
//    appetizersIndex: 0,
// })

// japaneseRestaurant.foodDelivery({
//    address: '18 Markham Woods Rd',
// })

// const {
//    workingHours: hours,
//    name: restName,
//    categories
// } = japaneseRestaurant;
// console.log(hours, restName, categories);

// // Default values
// const {
//    menu = [], appetizers: starteMenu = []
// } = japaneseRestaurant;
// console.log(menu, starteMenu);

// // Mutating Variables
// let x = 3;
// let y = 5;
// const obj = {
//    x: 11,
//    y: 22,
//    z: 33
// };

// ({
//    x,
//    y
// } = obj);
// console.log(x, y);

// // Nested objects
// const {
//    sun: {
//       open: openHours,
//       close: closehours,
//    }
// } = hours;
// console.log(openHours, closehours);

// Array Destructoring /////////// деструктуризация массива

// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1, y2, y3] = arr;
// console.log(y1, y2, y3);

// const [a, b, c] = arr;
// console.log(a, b, c);

// console.log(arr);

// let [main, , secondary] = japaneseRestaurant.categories;
// console.log(main, secondary);

// замена мест в массиве через временную переменную
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Swaping variables
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// Returning 2 values from function
// const [appetizers, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(appetizers, mainFood);

// Destructuring array in array
// const nestedArr = [1, 2, [7, 9]];
// const [a, b, arr] = nestedArr;
// const [c, d] = nestedArr[2];
// console.log(a, b, c, d);

// const [f, , [d, e]] = nestedArr;
// console.log(f, d, e);

// Default values
// const unknownArr = [3, 5];
// const [g = 0, i = 0, j = 0] = unknownArr;
// console.log(g, i, j);
