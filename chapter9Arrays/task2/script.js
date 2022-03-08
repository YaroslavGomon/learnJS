'use strict';

// Вернемся к исследованию кошек Женей и Юлей. На этот раз они хотят преобразовать возраст кошек в человеческий возраст и вычислить средний возраст кошек в своем исследовании.
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.

// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
const one = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const two = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge = function (copy) {
  // const copy = catAges.slice();
  const human = copy.map(age => (age <= 2 ? age * 10 : age * 7));
  const filteredAge = human.filter(age => age >= 18);
  // console.log(copy);
  // console.log(filteredAge);
  // console.log(filteredAge.length);
  const average = filteredAge.reduce((acc, age) => acc + age, 0);
  return console.log(average / filteredAge.length);
};

getAverageHumanAge(one);
getAverageHumanAge(two);
// console.log(one, two);
