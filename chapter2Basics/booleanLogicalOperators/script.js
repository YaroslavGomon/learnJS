// AND, OR, NOT


// AND

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// OR

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// NOT

// console.log(!true); // fasle
// console.log(!false); // true


// const hasMoney = false;
// const isAdult = true;

// if (hasMoney && isAdult) {
//   console.log('You can buy the drink.');
// } else {
//   console.log('You can not buy the drink.');
// }


// const hasMoney = true;
// const isWithParent = false;

// if (hasMoney || isWithParent) {
//   console.log('You can buy the orange.');
// } else {
//   console.log('You can not buy the orange.');
// }


const hasMoney = true;
const isAdult = true;
const isCompletlyDrunk = true;

// console.log(!hasMoney);

if (hasMoney && isAdult && !isCompletlyDrunk) {
   console.log('You can buy the drink.');
} else {
   console.log('You can not buy the drink.');
}