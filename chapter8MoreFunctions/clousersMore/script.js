'use strict';

// Замыкания (Closures) //////////////////////////

// let f1;

// const f2 = function () {
//   const x = 11;
//   f1 = function () {
//     // эта функция имеет доступ к Х, тк эта переменная была определена в момент создания данной функции
//     console.log(x ** 2);
//   };
// };

// const f3 = function () {
//   const y = 12;
//   f1 = function () {
//     console.log(y ** 2);
//   };
// };

// f2();
// f1(); // имеет доступ к Х
// console.dir(f1); // посмотреть какое окружение переменных в скоупе

// f3();
// f1(); // Имеет доступ уже к У взамен доступа к Х
// console.dir(f1); // посмотреть какое окружение переменных в скоупе

// Example 2 ////////////////////////////////

const boardPassengers = function (passengerNumber, secondsBeforeBoarding) {
  const passengersInGroup = passengerNumber / 2;

  setTimeout(function () {
    console.log(`All ${passengerNumber} passengers are now boarding.`);
    console.log(`Each group contains ${passengersInGroup} passengers.`);
  }, secondsBeforeBoarding * 1000);

  console.log(`The boarding will start in ${secondsBeforeBoarding} seconds.`);
};

const passengersInGroup = 1500; // замыкание имеет приоритет перед скоуп чейном, поэтому будет 150 из функции а не 1500 из переменной глобального контекста выполнения
boardPassengers(150, 5);
