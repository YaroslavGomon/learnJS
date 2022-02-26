'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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
   name: 'Banzai',
   location: '108 Markham Woods Rd, Longwood, USA',
   categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
   appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
   mainMenu: ['Sushi', 'Ramen', 'Tempura'],

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
      deliveryTime = '18:00',
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

// Строки в ДЖс инмутабл - неизменяемые

const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

console.log(airplane[0]); // получим букву слова с соотв индексом
console.log(airplane[1]);
console.log(airplane[2]);
console.log('SkyUp'[0]);

console.log(airline.length); // вернется длина строки
console.log('Boeing 737'.length);

console.log(airplane.indexOf(' ')); // на какой позиции в строке находится знак который выбрали
console.log(airplane.indexOf('7')); // выведет номер позиции первого такого встретившегося индекса
console.log(airplane.lastIndexOf('7')); // последнего встретившегося
console.log(airline.indexOf('Up')); // вернет индекс где начинается фраза, чувствителен к заглавным

console.log(airplane.slice(4)); // выведет с этого индекса оставшееся в строке
console.log(airplane);
console.log(airplane.slice(0, 6)); // извлечет кусок строки с 0 по 5 индекс

console.log(airline.slice(0, airline.indexOf(' '))); // вернет первое слова строки, 0 - перва буква, и ищется первый пробел до след слова
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1)); // вырежет последнее слово сроки после последнего пробела

console.log(airline.slice(-2)); // выведет последние две буквы
console.log(airline.slice(2, -2)); // выведет обрезанную строку на две вначале с 3 буквы и две в конце буквы

const checkMiddleSeat = function (seat) {
   // B and E are middle seat in plane
   const seatLetter = seat.slice(-1);
   if (seatLetter === 'B' || seatLetter === 'E') {
      console.log('Middle seat');
   } else {
      console.log('Not middle seat');
   }
}
// '20ABC DEF'

checkMiddleSeat('21A');
checkMiddleSeat('7B');
checkMiddleSeat('14E');

const x = new String('Hello!');
console.log(typeof x);
console.log(typeof x.slice(2));

// Джс перобразовывает строки в объекты чтобы в них можно было использовать методы, т.к. строка это примитив. Это называется BOXING (кладет строку в коробку). Методы строк возвращают примитив строку.

