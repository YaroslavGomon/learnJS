'use strict';


// const greeting = 'Hello!';

// const foo = () => {
//    let x = 3;
//    const y = bar(1, 2);
//    x+= y;
//    return x;
// };

// function bar(a1, a2) {
//    var z = 5;
//    return z;
// }

// const n = foo();

// console.log(n);


// Scope chain ///////////////////////////////////////////////
// function getAge(birthYear) {
//    const age = 2022 - birthYear;

//    function printAge() {
//       let info = `${firstName} is ${age}, born in ${birthYear}.`;
//       console.log(info);

//       if (age >= 18) {
//          var isAdult = true;
//          const firstName = 'John';
//          const adult = `${firstName} is adult.`;
//          console.log(adult);

//          function sum(a, b) {
//             return a + b;
//          }

//          console.log(sum(1, 2));

//          info = 'New info';
//       }

//       console.log(isAdult);
//       console.log(info);
//       // console.log(adult);
//       // sum(1, 2);
//    }
//    // console.log(info);

//    printAge();
//    // console.log(isAdult);

//    return age;
// }

// const firstName = 'YouRa';
// getAge(1974);

// // printAge();


// // Hoisting//////////////////////////////////////////

// // Variables hoisting
// console.log(firstName);
// // console.log(job);
// // console.log(birthYear);

// var firstName = 'YouRa';
// let job = 'programmer';
// const birthYear = 1974;

// // Function hoisting
// console.log(declSum(1, 2));
// // console.log(expSum(1, 2));
// console.log(arrSum);
// // console.log(arrSum(1, 2));

// function declSum(a, b) {
//    return a + b;
// }

// const expSum = function (a, b) {
//    return a + b;
// }

// var arrSum = (a, b) => a + b;

// // Example var bug
// console.log(isUserValid);

// if (!isUserValid) {
//    deleteUser();
// }

// var isUserValid = true;

// function deleteUser() {
//    console.log('User is deleted!');
// }

// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a === window.a);
// console.log(b === window.b);
// console.log(c === window.c);


// This keyword /////////////////////////////////////////

// console.log(this);

// const getAge = function (birthYear) {
//    console.log(2022 - birthYear);
//    console.log(this);
// };

// getAge(2001);

// const getAgeArr = (birthYear) => {
//    console.log(2022 - birthYear);
//    console.log(this);
// };

// getAgeArr(2001);

// const user187 = {
//    birthYear: 1974,
//    getAge: function() {
//       console.log(this);
//       console.log(2022 - this.birthYear);
//    }
// }

// user187.getAge();

// const user188 = {
//    birthYear: 2002,
// }

// user188.getAge = user187.getAge; // процесс займа метода, метод занимается у другого объекта
// user188.getAge();

// const f = user187.getAge;
// f();


// Regular VS Arrow functions //////////////////////////////////

// var firstName = 'Jack';

// const user187 = {
//    firstName: 'YouRa',
//    birthYear: 1974,
//    getAge: function () {
//       console.log(this);
//       console.log(2022 - this.birthYear);

//       // Old approach before ES6
//       // const self = this; // self or that, способ использовался до ES6
//       // const isAdult = function() {
//       //    console.log(self);
//       //    console.log((2022 - self.birthYear) >= 18);
//       //    // console.log((2022 - this.birthYear) >= 18);
//       // };

//       // New approach after ES6
//       const isAdult = () => {
//          console.log(this);
//          console.log((2022 - this.birthYear) >= 18);
//       };

//       isAdult();
//    },
//    sayGreeting: () => { // не надо использовать стрелочную функцию в качестве метода объекта!!!
//       // console.log(this);
//       console.log(`Hello, I'm ${this.firstName}`);
//    },
// };

// user187.sayGreeting();
// user187.getAge();
// // console.log(this.firstName);


// // Arguments keyword
// const expSum = function (a, b) {
//    console.log(arguments);
//    return a + b;
// }

// expSum(1, 2);
// expSum(1, 2, 3, 9, 34);

// var arrSum = (a, b) => {
//    console.log(arguments);
//    return a + b;
// };

// arrSum(7, 11, 23);


// Primitives VS Reference Types//////////////////////////

// let a = 1;
// let b = a;
// a = 2;
// console.log(a);
// console.log(b);

// const x = {
//    foo: 'bar',
//    a: 1
// };

// const y = x;
// y.a = 2;

// console.log('Object x: ', x);
// console.log('Object y: ', y);


// Primitives
let lastName = 'Brown';
let oldlastName = lastName;
lastName = 'White';
console.log(lastName, oldlastName);


// Objects
const jane = {
   firstName: 'Jane',
   lastName: 'Brown',
   age: 21,
};

const marriedJane = jane;
marriedJane.lastName = 'White';
console.log('Jane: ', jane);
console.log('Married Jane: ', marriedJane);

// marriedJane = {};


// Odjects copying

const sara = {
   firstName: 'Sara',
   lastName: 'Brown',
   age: 25,
   familyMembers: ['Jack', 'Bob', 'Alex'],
};

const saraCopy = Object.assign({}, sara); // создает shallow копию
saraCopy.lastName = 'White';

saraCopy.familyMembers.push('Bill', 'Martha');

console.log('Sara: ', sara);
console.log('Married Sara: ', saraCopy);
