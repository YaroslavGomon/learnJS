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

const question = new Map([
   ['question', 'What is your favorite programming language for front-end?'],
   [1, 'JavaScript'],
   [2, 'Java'],
   [3, 'Pyton'],
   ['correctAnswer', 1],
   [true, 'Correct answer :D'],
   [false, 'This is incorrect :( Try again!'],
]);

console.log(question);

console.log(Object.entries(workingHours));
const workingHoursMap = new Map(Object.entries(workingHours)); // быстрый способ преобразовать объект в мап
console.log(workingHoursMap);

// QUiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//    if (typeof key === 'number') {
//       console.log(`${key}: ${value}`);
//    }
// }

// const userAnswer = Number(prompt('Choose the option number: '));
// console.log(userAnswer);

// // question.get('correctAnswer') === userAnswer ? console.log(question.get(true)) : console.log(question.get(false));
// console.log(question.get(question.get('correctAnswer') === userAnswer));

// COnverting Maps to arrays
console.log([...question]);

console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
