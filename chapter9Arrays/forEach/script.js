'use strict';

// Immidiately Invoked Functions Expression (IIFE) немедленно вызываемые функции экпрешн//////////////////////////////
const runOneTime = function () {
  console.log(`You will never see this function call again.`);
};
// runOneTime();
// runOneTime();

// инкапсуляция, данные во внутреннем скоупе - приватные
(function () {
  console.log(`You will never see this function call again.`);
  const xxx = 1; // переменная ххх инкапсулирована в скоупе, эта переменная таким образом защищена от изменения из внешних скоупов
  var z = 3; // iife были придуманы чтобы не дать доступ к переменной вар из внешнего скоупа, это было когда еще не было конст и лет
})(); // для вызова надо указать пару скобок в конце как у функции

(() => console.log(`You will never see this ARROW function call again.`))();

// console.log(xxx); // будет ошибка, т.к. ххх нет в области видимости глобальном скоупе, глобальный скоуп не имеет доступа к внутреннему скопу функции, она только внутри функции

{
  const yyy = 1; // к этой нет доступа из внешнего скоупа
  var y = 2; // к этой есть доступ, можно вывести например в консоль
}

console.log(y);

