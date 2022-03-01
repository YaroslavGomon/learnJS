'use strict';

// Call() Apply() methods //////////////////////

const airline1 = {
  airlineName: "'SkyUp'",
  iataCode: 'SU',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

airline1.book(346, 'Jim Green');
airline1.book(635, 'Rob Black');
console.log(airline1.bookings);

const airline2 = {
  airlineName: "'EuroFlights'",
  iataCode: 'EF',
  bookings: [],
};

const book = airline1.book; // вытащили отдельно в конст метод функцию из первого объекта, например применимо если есть уже написанный старый код, чтобы его не менять и не выносить отдельно фукцию за пределы объектов в конст.

// book(345, 'Jj Key'); не работает, т.к. используется this

// call ////////////////////////////////////
book.call(airline2, 555, 'Jj key'); // первый аргумент - объект где вызываем, это на что указывает ключевое слово this, на какой объект
console.log(airline2.bookings);

book.call(airline1, 888, 'Bo Beck');
console.log(airline1.bookings);

// apply ///////////////////////////////////////////
const flightData = [111, 'Nick Red'];
book.apply(airline1, flightData); // apply как call, но передается массив данных
// в современном больше не используется, тк можно спредом
book.call(airline2, ...flightData);
