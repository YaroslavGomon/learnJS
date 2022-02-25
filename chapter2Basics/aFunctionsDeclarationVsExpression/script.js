const myAge = getAge1(1974, 2022);
console.log(myAge);

function getAge1(birthYear, yearNow) { // Declaration
   // const age = yearNow - birthYear;
   // return getAge;
   return yearNow - birthYear;
}

// const myAge = getAge1(1974, 2022);
// console.log(myAge);


const getAge2 = function (birthYear, yearNow) { // Expression анониманая функция, без имени, сразу присваиваем ее переменной
   return yearNow - birthYear;
}

const myAge2 = getAge2(1974, 2022);
console.log(myAge2);

