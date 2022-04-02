'use strict';

// вычисление дат

const futureDate = new Date(2222, 1, 13, 11, 28, 59);
console.log(Number(futureDate));
console.log(+futureDate);
console.log(-futureDate);

const getPastDays = (startDate, endDate) =>
  Math.abs((endDate - startDate) / (1000 * 60 * 60 * 24));

const days = getPastDays(new Date(2021, 9, 1), new Date(2021, 9, 12));
console.log(days);
