let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 25;
const greeting = 'Hey there!';

// Concatination

result = firstName + space + lastName;

result = greeting + space + 'My name is' + space + firstName + ' ' + lastName + '. Im ' + age + ' years old.'

// Escaping (экранирование)

result = 'I\'m 34 years old'; // если надо в тексте указать кавычку то можно взять в бвойные кавычки или перед лишней одинарной поставить бэкслеш

result = "I like \"Star Wars\" movie";


// Properties and methods Свойства и методы

result = 'Hello! '.length; // свойства без скобок в конце
result = firstName.length;

result = firstName.concat(space, lastName);
result = firstName.concat(' ', lastName);

result = greeting.concat(space, 'My name is ', firstName, space, lastName, '.');

result = result.toUpperCase();
result = result.toLowerCase();

result = firstName[0]; // буквы слова массив и показывает букву в номере массива

result = 'Hello!'.indexOf('l'); // показывает номер символа в строке
result = 'Hello lol!'.lastIndexOf('l');
result = firstName.indexOf('a');
result = 'Hello lol!'.indexOf('lo');
result = firstName.indexOf('b');

result = firstName.charAt(1);

const longString = 'Hi im a long string';
result = longString.charAt(longString.length - 1);


result = greeting.substring(0, 3); // выделить часть строки

result = greeting.slice(4, 9); // выделить кусочек строки, начальный и конечный символы в скобках откуда и до куда выделять
result = greeting.slice(-6);

result = longString.split(' '); // делит строку на куски превращая в массив в скобках символ который разделитель.
// можно использовать для выделения слов в тексте разделенных например запятой
const colors = 'red, blue, green, black';
result = colors.split(',');

result = colors.replace('blue', 'black'); // заменяет в строке

result = colors.includes('gray'); // проверяет наличие в строке, дает булевскую



console.log(result);