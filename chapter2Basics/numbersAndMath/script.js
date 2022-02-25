const firstNumber = 50;
const secondNumber = 9;
let result;

// Simple math operations
result = firstNumber + secondNumber;
result = firstNumber - secondNumber;
result = firstNumber * secondNumber;
result = firstNumber / secondNumber;
result = firstNumber % secondNumber;

// Math object
result = Math.PI;
result = Math.round(3.5);
result = Math.ceil(3.3); // округление к большему
result = Math.floor(3.7); // округление к меньшему
result = Math.sqrt(9);
result = Math.abs(-10); // модуль
result = Math.pow(4, 2); // возведение в степень
result = Math.min(3, 45, 32, -11); // выбор мин числа
result = Math.max(3, 45, 32, 11); // выбор макс числа
result = Math.floor(Math.random() * 100) + 1;



console.log(result);