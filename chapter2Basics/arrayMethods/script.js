// Мотоды массивов

const numbers = [23, 54, 4, 31, 11];
let result;

result = numbers.length; // длина массива

result = Array.isArray(numbers); // проверка является ли объект массивом, результата булин

result = numbers.indexOf(4);

// push() pop()
result = numbers.push(7); // добавляет в конец массива и возвращает его длину (его это массива)
result = numbers.pop(); // убирает послендний элемент массива, возвращает значение убранный элемент
result = numbers.pop();

// unshift() shift()
result = numbers.unshift(3); // добавляет в начало массива и возвращает его длину (его это массива)
result = numbers.shift(); // убирает первый элемент массива, возвращает значение убранный элемент

result = numbers.push(1, 22, 33);
result = numbers.unshift(1, 22, 33);

result = numbers.splice(1, 1);
result = numbers.splice(1, 3); // удаляет элементы, первое число с какого элемента, второе - сколько штук

result = numbers.reverse(); // переворачивает массив

result = numbers.slice(1, 4); // скопирует часть массива в новый массив, в скобках с какого до какого номера массива, исходный массив остается

result = numbers.concat(result); // сращивает массивы







console.log(result);
console.log(numbers);