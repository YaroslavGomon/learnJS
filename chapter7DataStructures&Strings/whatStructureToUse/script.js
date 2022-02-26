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

// API - application programming interface
// получение данных из самой программы, из пользовательского интерфейса (ввод данных от пользователя, DOM), из внешних источников (API)
// Встроенные структуры данных в ДЖс: WeakMap, WeakSet
// Невстроенные: Stacks, Queues, Linked lists, Trees, Hash tables
// 
