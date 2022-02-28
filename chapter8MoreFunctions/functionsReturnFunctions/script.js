'use strict';

// Функции возвращают функции

const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}`);
  };
};

const hi = greet('Hi!');
hi('Jack');
hi('Diana');
hi('Nick');

greet('Hey')('Lilu');

// Buy() => в виде стрелочной функции //////////////////////

const goodBuy = (text) => (name3) => {
  console.log(`${text} ${name3}`);
};

goodBuy('Buy')('John');
