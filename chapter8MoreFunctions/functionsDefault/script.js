'use strict';

const bookings = [];

// новй метод по дефолту можно указать прямо в аргументах через равно дефолтное значение, даже можно вычислять выражения
const makeBooking = function (flightNum, passengersNum = 1, price = 99 * passengersNum) {
  // старый метод до ES6
  // passengersNum = passengersNum || 1; // если первое фалс, то будет установлено второе значение
  // price = price || 99;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

makeBooking('QE123');
makeBooking('TU234', 3, 390);
makeBooking('TU234', 1);
makeBooking('TU234', 5);
makeBooking('TU234', 400); // не работает если пропускаем второй аргумент
makeBooking('TU234', undefined, 5); // можно установить андефайнд для пропущенного аргумента

