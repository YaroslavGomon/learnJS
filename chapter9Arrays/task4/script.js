'use strict';

// Женя с Юлей все еще изучают кошек, и на этот раз они изучают, едят ли кошки слишком много или слишком мало.
// Слишком много еды означает, что текущая порция пищи кошки больше рекомендуемой, а слишком мало еды - наоборот.
// Нормальное количество еды означает, что текущая порция корма для кошки находится в диапазоне от 10% выше и 10% ниже рекомендуемой порции.
// ( рекомендуемая * 0.9 < нормальная < рекомендуемая * 1.1 )

// 1. Переберите элементы массива cats, которые являются объектами, и для каждой кошки вычислите рекомендуемую порцию еды и добавьте ее к объекту, как новое свойство. Не создавайте новый массив, просто переберите массив!
// Формула вычисления рекомендуемой порции:
// рекомендуемая порция = вес кошки * 0.75 * 12 (результат в граммах, а вес кошки в килограммах).
// 2. Найдите кошку, имя хозяина которой Алекс и выведите в консоль, ест ли эта кошка слишком много или слишком мало. Подсказка: у некоторых кошек есть несколько владельцев, поэтому вам сначала нужно найти Алекса в массиве владельцев.
// 3. Создайте массив, содержащий всех владельцев кошек, которые слишком много едят (catsEatTooMuchOwners), и массив со всеми владельцами кошек, которые слишком мало едят (catsEatTooLittleOwners).
// 4. Выведите в консоль строку для каждого из массивов, созданных в пункте 3:
// "Марина, Алиса, Борис - хозяева кошек, которые едят слишком много!" и "Наташа, Ирина, Алекс - хозяева кошек, которые едят слишком мало!"
// 5. Выведите в консоль, ест ли хоть одна кошка в точном соответствии с рекомендуемым количеством еды (просто true или false).
// 6. Выведите в консоль, ест ли хоть одна кошка нормальное количество еды (просто true или false).
// 7. Создайте массив, содержащий кошек, которые едят нормальное количество еды (попробуйте повторно использовать условие, используемое в пункте 6).
// 8. Создайте мелкую (shallow) копию массива cats и отсортируйте по свойству рекомендуемая порция еды по возрастанию (имейте в виду, что порции находятся внутри объектов массива).

const cats = [
  { catWeight: 3, foodWeight: 25, owners: ['Наташа'] },
  { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
  { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
  { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

// 1
cats.forEach(cat => (cat.recommendedPortion = cat.catWeight * 0.75 * 12));

console.log(cats);

// 2
const alexCat = cats.find(cat => cat.owners.includes('Алекс'));
console.log(alexCat);
console.log(
  `Эта кошка ест слишком ${
    alexCat.foodWeight > alexCat.recommendedPortion ? 'много' : 'мало'
  }`
);

// 3
const catsEatTooMuchOwners = cats
  .filter(cat => cat.foodWeight > cat.recommendedPortion)
  .flatMap(cat => cat.owners);

const catsEatTooLittleOwners = cats
  .filter(cat => cat.foodWeight < cat.recommendedPortion)
  .flatMap(cat => cat.owners);

console.log(catsEatTooMuchOwners);
console.log(catsEatTooLittleOwners);

// 4
console.log(
  `${catsEatTooMuchOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком много!`
);
console.log(
  `${catsEatTooLittleOwners.join(
    ', '
  )} - хозяева кошек, которые едят слишком мало!`
);

// 5
console.log(cats.some(cat => cat.foodWeight === cat.recommendedPortion));

// 6
const isFoodNormal = cat =>
  cat.foodWeight > cat.recommendedPortion * 0.9 &&
  cat.foodWeight < cat.recommendedPortion * 1.1;

console.log(cats.some(isFoodNormal));

// 7
console.log(cats.filter(isFoodNormal));

// 8
const cats1 = cats
  .slice()
  .sort((x, y) => x.recommendedPortion - y.recommendedPortion);

console.log(cats1);

// My version //////////////////////////////////////////////////////////////////////

// cats.forEach(obj => (obj.optimalFoodWeigth = obj.catWeight * 0.75 * 12));
// const cats2 = cats.slice();

// const cats3 = [];

// cats2.reduce((acc, wet) => {

// }, 0)

// console.log(cats2);

// console.log(cats);

// cats.forEach(obj => {
//   if (obj.owners.includes('Алекс')) {
//     const howMuch = obj.foodWeight / obj.optimalFoodWeigth;
//     if (howMuch > 1.1) {
//       console.log('Кошка ест много!');
//     } else if (howMuch < 0.9) {
//       console.log('Кошка ест мало!');
//     } else {
//       console.log('Кошка ест оптимально!');
//     }
//   }
// });

// const catsEatTooMuchOwners = [];
// const catsEatTooLittleOwners =[];

// cats.forEach(obj => {
//   const howMuch = obj.foodWeight / obj.optimalFoodWeigth;
//   if (howMuch > 1.1) {
//     catsEatTooMuchOwners.push(...obj.owners);
//   } else if (howMuch < 0.9) {
//     catsEatTooLittleOwners.push(...obj.owners);
//   }
// })

// console.log(catsEatTooMuchOwners);
// console.log(catsEatTooLittleOwners);

// console.log(`${catsEatTooMuchOwners.join(', ')} - хозяева кошек, которые едят слишком много!`);
// console.log(`${catsEatTooLittleOwners.join(', ')} - хозяева кошек, которые едят слишком мало!`);

// cats.forEach(obj => {
//   obj.foodWeight == obj.optimalFoodWeigth ? console.log(true) : console.log(false);
// })

// cats.forEach(obj => {
//   (obj.foodWeight / obj.optimalFoodWeigth > 0.9 && obj.foodWeight / obj.optimalFoodWeigth < 1.1) ? console.log(true) : console.log(false);
// })
