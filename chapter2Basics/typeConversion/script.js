
// Conversion to string

// String() функция

let x = String(1112);
x = String(2 + 2);
x = String(true);
x = String(new Date());
x = String(['one', 'two', 'three']);

// to String() метод, пишется точка.метод

x = (35).toString();
x = (true).toString 


console.log(x);
console.log(typeof x);
console.log(x.length);

// Conversion to number

// Number()

let y = Number('5.1234567');
y = Number(false);
y = Number(null);
y = Number('text'); // будет значение NaN, пытается распознать что-то что не число
y = Number([1, 2, 3])

// parseInt

y = parseFloat('123.230');

console.log(y);
console.log(typeof y);
console.log(y.toPrecision(6)); // метод ту пресижн у чиловых данных это сколько вывести цифр числа, последнее округляется


const z = '5';
const c = '3';
const q = z - c; // в случае данных стринг происходит конкатинация (сцепление) двух строк

// произошло неявное преобразование типов, сделал сам джс, при этом происходит конкат
// при знаке минус, *, / джс неявно привел к числам и вычел

console.log(q);
console.log(typeof q);