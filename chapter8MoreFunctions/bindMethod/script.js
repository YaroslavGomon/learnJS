'use strict';

// Метод bind() /////////////////

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

const airline2 = {
  airlineName: "'EuroFlights'",
  iataCode: 'EF',
  bookings: [],
};

const airline3 = {
  airlineName: "'UKFlights'",
  iataCode: 'ZX',
  bookings: [],
};

const book = airline1.book;
book.call(airline2, 345, 'Joe Black');
console.log(airline2);

book.bind(airline2); // создает новую фукцию,которая еще не вызвана сейчас, в которой this будет указывать на объект аирлайн2
const bookAirline2 = book.bind(airline2); // связали функцию с объектом аирлайн 2
bookAirline2(345, 'Ron Cole'); // теперь она вызовется с привязкой к объекту
console.log(airline2);

const bookAirline3 = book.bind(airline3);
bookAirline3(555, 'Rick Doc');

// частичное применение аргументов с использованием bind() //////////////////////
const bookAirline3Flight21 = book.bind(airline3, 21); // предустановка первого аргумента для объекта аирлайн 3
bookAirline3Flight21('Dick Gor'); // эти пассажиры будут все на рейсе указанном выше через бинд, достаточно передать только имя пассажира
bookAirline3Flight21('Hit Trec');

// bind() with event listeners /////////////////////

airline1.airplanes = 200;
airline1.purchaseAirplane = function () {
  console.log(this);
  this.airplanes++;
  console.log(this.airplanes);
};

// airline1.purchaseAirplane(); // так работать будет

// document
//   .querySelector('#purchase')
//   .addEventListener('click', airline1.purchaseAirplane); // в обработчиках событий this указывает на сам этот элемент эвент листенер, так работат не будет

document
  .querySelector('#purchase')
  .addEventListener('click', airline1.purchaseAirplane.bind(airline1)); // так будет работать, указан что надо к объекту аирлайн 1

// частичное применение параметров Partial Application /////// используются предустановленные аргументы
const getPercentage = (totalValue, value) => (value / totalValue) * 100;
console.log(getPercentage(20, 470));
// хотим вычислять разные проценты от числа 23789
const getPercentage23789 = getPercentage.bind(null, 23789);
console.log(getPercentage23789(10000));