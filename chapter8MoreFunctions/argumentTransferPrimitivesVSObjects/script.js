'use strict';

const flightNumber = 'BV234';
const passenger1145 = {
  firstname: 'Jack',
  lastName: 'Brown',
  passport: 235345,
};

const checkIn = function (flight, passenger) {
  flight = 'bv'; // останется переданное значение, тк это примитив и создается копия переданного в аргумент примитива, а изначальный аргумент не изменится
  passenger.firstname = passenger.firstname.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase(); // объект изменится, тк аргументом передается ссылка на изначальный объект в куче

  if (passenger.passport === 353466) {
    alert('WElcome!');
  } else {
    alert('Incorrect passport');
  }
};

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);

// реальный косяк который может случиться, тк обе функции манипулируют одним объектом, в результатае будет инкоррект пасспорт в первой функции
const changePassportNumber = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);

// в ДЖс нет передачи по ссылке, даже если это так называется и выглядит, тк мы передаем не по ссылке, а ссылку на значение