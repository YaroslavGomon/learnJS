'use strict';

// Замыкания (Closures) //////////////////////////

const safeBooking = function () {
  let passengerCount = 0; // эта переменная не может быть доступна извне функции

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = safeBooking();

booker();
booker();
booker();

console.dir(booker); // посмотреть что находится в прошлых VE функции, в том числе переменную пассенджерсКаунт