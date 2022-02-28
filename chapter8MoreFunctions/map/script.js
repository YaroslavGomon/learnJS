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

// MAP появился в ES6 (кортеж еще ее называют) структура, для каждого ключа есть свое значнеие, в мап ключи могут быть любого типа данных

const restaurant = new Map(); // создать мап
restaurant.set('name', 'Bench'); // добавить первое - ключ, второе - значение
restaurant.set(1, 'London, England');
restaurant.set(2, 'Paris, France');
console.log(restaurant.set(3, 'Moscow, Russia')); // не только назначает, но и возвращает значение ддновременно
restaurant
  .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
  .set('open', 10)
  .set('close', 23) // позволяет делать цепочки
  .set(true, 'Bench is open :)')
  .set(false, 'Bench is close :(');

console.log(restaurant.get('name')); // считать значение по ключу
console.log(restaurant.get(true));
console.log(restaurant.get('3')); // чтобы считалось ключ должен быть такого же типа как и в мап

const currentTime = 11;
console.log(
  restaurant.get(
    currentTime > restaurant.get('open') &&
      currentTime < restaurant.get('close')
  )
);

console.log(restaurant.has('categories')); // метод проверяет есть ли в мапе такой ключ, вернет булин
console.log(restaurant.delete(1)); // метод удаляет элемент по ключу, возвращает тру если найден такой ключ и удален эелемент, или фалс - если такого ключа нет
console.log(restaurant);

console.log(restaurant.size); // метод возвращает размер мапа числом

// restaurant.clear(); // очищает мап
// console.log(restaurant);

// restaurant.set([1, 2, 3], "Hello!");
// console.log(restaurant);

// console.log(restaurant.get([1, 2, 3])); // не сработает тк в куче это два разных массива с разными адресами, чтобы сработало надо сделать конст массив, смс выше

const arr = [1, 2, 3];
restaurant.set(arr, 'Hello!');
restaurant.set(document.querySelector('h2'), 'Heading'); // можно даже использовать в качестве ключа ДОМ
console.log(restaurant);
console.log(restaurant.get(arr)); // так - сработает
