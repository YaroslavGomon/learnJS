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

// Sets множества, появились в ES6 коллекция уникальныз значений. не может иметь одинаковых значений. В нем можно хранить разные типы данных, строки массивы и тд. Элементы в СЕТЕ располагаются неупорядоченно, их порядок неопределен. Нельзя получить значение по индексу, как из массива. В реальном коде обычно используют для удаления дублирующих элементов массива.

const orders = new Set([
  "Sushi",
  "Ramen",
  "Tempura",
  "Sushi",
  "Ramen",
  "Sushi",
]);

console.log(orders);

console.log(new Set("Hello!")); // в сете буквы будут неповторяющиеся
console.log(new Set());
console.log(orders.size); // размер множества
console.log(orders.has("Sushi")); // проверка наличия элемента в множестве, возвращает тру или фалс
orders.add("Edamame"); // Добавить значение
orders.add("Edamame"); // добавится только один раз
orders.delete("Tempura"); // удалить значение
// orders.clear(); // очистить множество
console.log(orders);

for (const o of orders) {
  console.log(o);
} // множество итерабл - можно использовать loop

// Remove duplicates
const mealIngridients = [
  "Rice",
  "Pepper",
  "Garlic",
  "Pepper",
  "Garlic",
  "Meat",
  "Meat",
  "Garlic",
];
console.log(new Set(mealIngridients).size); // количество элементов в множестве

console.log(new Set('Yaroslav Gomon').size); // колво уникальных букв в строке



const mealIngridientsSet = new Set(mealIngridients);
console.log(mealIngridientsSet);

// Преобразование множества в массив
const mealIngridientsUnique = [...mealIngridientsSet]; //  с помощью спреда
console.log(mealIngridientsUnique);
