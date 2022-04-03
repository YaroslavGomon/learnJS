'use strict';

// set Timeout
const ingridients = ['тунец', 'лосось'];

const sushiTimer = setTimeout(
  (ing1, ing2) => console.log(`суши доставлены. Состав ${ing1}, ${ing2}`),
  3000,
  'тунец',
  'лосось'
);
console.log('Ожидание');

if (ingridients.includes('тунец')) clearTimeout(sushiTimer);

// set Interval
let i = 6;
const tim = setInterval(function () {
  i--;
  if (i === 0) {
    clearInterval(tim);
    console.log('BADA BOOM!!!');
  } else {
    console.log(i);
  }
}, 1000);
