// JS falsy values:
// 0, '', undefined, null, NaN - станут равны фалс когда сконвертируются в булин

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log('');

// console.log(Boolean(32));
// console.log(Boolean('Hello')); // строка
// console.log(Boolean([])); // массив
// console.log(Boolean({})); // объект
// console.log(Boolean(3.5));

const age = 0;

if (age) {
  console.log('The person was born.'); // выведется при числе отличном от нуля
}
else {
  console.log('The person was not born yet.'); // выведется не рожден т.к. ноль преобразуется в булин фалс
}

let weight = 0;

if (weight) {
  console.log('Weight is defined.');
}
else {
  console.log('Weight is not defined.');
}
