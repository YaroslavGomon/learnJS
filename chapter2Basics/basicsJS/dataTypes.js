// в JS динамическая типизация, одной переменной можно присвоить разные типы данных
// TypeScript это надстройка от майкрософт в нем строгая типизация

// let x = 'something';
// console.log(x);
// x = 3;
// console.log(x);



// Primitive data types
// Primitive data types


// String

const someText = 'Some text';
console.log(typeof someText);

// Number

const someNumber = 11;
console.log(typeof someNumber);

// Boolean

const someBool = true;
console.log(typeof someBool);

// Null отображается в консоли что это объект, это баг языка, надо погуглить почему

const someNull = null;
console.log(typeof someNull);

// Undefined

let someUnd;
console.log(typeof someUnd);

// Symbol

const someSym = Symbol();
console.log(typeof someSym);


// Reference data types
// Reference data types

// Array

const someArray = [1, 2, 3, 4];
console.log(typeof someArray);
console.log(someArray);

// Object Literal

const someObjectLiteral = {
  firstProperty: '12',
  secondProperty: 'secondProperty'
};
console.log(typeof someObjectLiteral);
console.log(someObjectLiteral);

// Function

const someFunction = new Function();
console.log(typeof someFunction);
console.log(someFunction);

// Date

const someDate = new Date();
console.log(typeof someDate);
console.log(someDate);