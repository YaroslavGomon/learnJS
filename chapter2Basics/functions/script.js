// Dont repeat yourself (dry code)


// function printText() {
//    console.log('Hello to everyone!'); // console.log тоже функция, билт ин, встроенная функция
// }

// printText(); // вызов, запуск, обращение к функции
// printText(); // в скобках могут быть параметры функции (аргументы)
// printText();

const number = Number('79');
console.log(number);

function colorizer(item, color, colorCode) {
   // console.log(item, color);
   const colorizedItem = `The ${item} is ${color}. The code of the color ${colorCode}.`;
   // console.log(colorizedItem);
   return colorizedItem; // возврат значения чтобы его можно было вывести
}

const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${messageFromColorizer}`);

const messageFromColorizer2 = colorizer('hand', 'green', 10);
console.log(`We have the following message: ${messageFromColorizer2}`);
