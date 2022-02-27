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
};
// '20ABC DEF'

checkMiddleSeat('21A');
checkMiddleSeat('7B');
checkMiddleSeat('14E');

const x = new String('Hello!');
console.log(typeof x);
console.log(typeof x.slice(2));

// Джс перобразовывает строки в объекты чтобы в них можно было использовать методы, т.к. строка это примитив. Это называется BOXING (кладет строку в коробку). Методы строк возвращают примитив строку.

// Part 2 ///////////////////////////////////////////////

console.log(airline.toLocaleUpperCase()); // привести к заглавным буквам
console.log(airline.toLocaleLowerCase()); // привести к строчным буквам

// Fix the passenger name // исправить имя пассажира
const passengerName = 'liNDa';
const passengerNameLower = passengerName.toLocaleLowerCase();
const passengerNameFixed =
   passengerNameLower[0].toLocaleUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameFixed); // Linda in console

// Email validation
const email = 'some@gmail.com';
const loginEmail = '   SoMe@Gmail.com \n';

const emailLower = loginEmail.toLocaleLowerCase();
const emailTrimmed = emailLower.trim(); //
console.log(emailTrimmed);

const emailNormalized = loginEmail.toLocaleLowerCase().trim();
console.log(emailNormalized);
console.log(email === emailNormalized);

// Replacing part of string
const ticketPriceEU = '197,23€';
const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
console.log(ticketPriceUS);

const announcement =
   'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';
console.log(announcement.replaceAll('door', 'gate')); // Новый способ замены всех слов, если просто реплейс - то заменится только первое найденное

console.log(announcement.replace(/door/g, 'gate')); // регулар экспрешнс старый метод замены, чувствителен к регистру

// Boolean return methods
console.log(airplane);
console.log(airplane.includes('737')); // тру если содержится в любом месте строки
console.log(airplane.includes('837'));

console.log(airplane.startsWith('Bo')); // тру если с него начинается строка
console.log(airplane.startsWith('No'));

console.log(airplane.endsWith('737')); // тру если строка на это заканчивается

const airplane1 = 'Airbus';
if (airplane.startsWith('Boeing')) {
   console.log('You fly on Boeing!');
}

// Example
const checkLuggage = function (luggage) {
   const luggageLower = luggage.toLocaleLowerCase();
   if (luggageLower.includes('knife') || luggageLower.includes('gun')) {
      console.log('You are not allowed on board.');
   } else {
      console.log('Welcome on board!');
   }
};

checkLuggage('Food, jeans, socks and Swiss Knife');
checkLuggage('Laptop and food');
checkLuggage('Camera, food, Gun for protection');

// Part 3
// Split and Join methods
console.log('My+name+is+YouRa.'.split('+'));
console.log('Yaroslav Gomon'.split(' ')); // возвращает массив делит строку на элементы массива через выбранный символ, в данном случае пробел

const [firstname, lastname] = 'Yaroslav Gomon'.split(' ');
console.log(firstname, lastname);

console.log(['Mr.', firstname, lastname.toUpperCase()].join(' ')); // объединяет делает из элементов массива строку с разделителем в данном случае пробел

const capitalizeName = function (name) {
   const names = name.split(' '); // делим строку через пробелы в массив
   // console.log(names);
   const namesCapitalize = []; // пустой массив для хранения
   for (const i of names) {
      // пушим каждое слово в массив где слово уже с заглавной буквы
      // namesCapitalize.push(i[0].toUpperCase() + i.slice(1));
      namesCapitalize.push(i.replace(i[0], i[0].toUpperCase()));
   }
   console.log(namesCapitalize);
   const capitelizedFullName = namesCapitalize.join(' '); // массив в строку через пробел
   console.log(capitelizedFullName);
};

capitalizeName('yaroslav gomon');
capitalizeName('jack white tiger jr.');

// Padding
const message = 'Hi there!';
console.log(message.padStart(20, '*')); // добавляет вначале строки символы до длины строки которая указана первым параметром
console.log(message.padEnd(33, '*')); // в конце строки добавляет

// скрыть часть символов номера крдеитки
const maskCreditCard = function (cardNumber) {
   const stringNumber = cardNumber + ''; // преобразование в строку
   // console.log(stringNumber);
   const last4 = stringNumber.slice(-4); // выбираем последние 4 символа
   console.log(last4.padStart(stringNumber.length, '*'));
};

maskCreditCard(123123239875645);
maskCreditCard('23524530473894678937');

// Repeat
const greeting = 'Hi!';
console.log(greeting.repeat(3));

const howMuchYouLoveSomebody = function (loveNumber) {
   console.log(`I love you ${'❤️ '.repeat(loveNumber)}`);
}

howMuchYouLoveSomebody(11);

// MDN string method print to google