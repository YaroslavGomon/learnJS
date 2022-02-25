// стрелочные функции добавлены в ES6

const getAge2 = function (birthYear, yearNow) {
   return yearNow - birthYear;
}

const myAge2 = getAge2(1974, 2022);
console.log(myAge2);


const getAge3 = (birthYear, yearNow) => yearNow - birthYear; // не нужен ретерн, значение будет возвращено неявно (автоматически)
// если используется один параметр, то не нужны круглые скобки

const myAge3 = getAge3(1974, 2022);
console.log(myAge3);


const canBuyAlcohol = (birthYear, yearNow) => { // если большу одной строки в функции, то нужен ретерн для вывода
   const age = yearNow - birthYear;
   const isPersonOlderThan21 = age >= 21 ? 'You can buy.' : 'You can not buy.';
   return isPersonOlderThan21;
}

console.log(canBuyAlcohol(2010, 2022));