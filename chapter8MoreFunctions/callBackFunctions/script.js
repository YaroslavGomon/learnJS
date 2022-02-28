'use strict';

// функции принимающие Callback функции
// коллбэк функции позволяют создавать абстракции - мы прячем детали кода, абстрагируем код

const removeSpaces = function (text) {
  return text.replace(/ /g, '').toLowerCase(); // заменить все пробелы на пустую строку
};

const upperFirstWord = function (text) {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function (функция высшего порядка)
const converter = function (str, func) {
  console.log(`The original text: ${str}`);
  console.log(`The converted text: ${func(str)}`);

  console.log(`Converted by: ${func.name}`);
};

converter('Hello to everyone!', upperFirstWord);
converter('Hello to everyone!', removeSpaces);

const twise = (num) => console.log(num * 2);
[1, 2, 3].forEach(twise); // функция передана в метод фор ич для каждого элемента массива будет выполняться

