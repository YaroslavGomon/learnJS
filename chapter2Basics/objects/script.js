myData = [
   'YouRa',
   'Gomon',
   '1987',
   'programmer',
   ['Alena', 'Anna']
];
console.log(myData[4]);

youraObject = { // Объект
   name: 'YouRa', // Свойства объектов
   lastname: 'Gomon',
   birthyear: 1987,
   job: 'programmer',
   familyMembers: ['Alena', 'Anna', 'YouRa']
};

// console.log(youraObject);

console.log(youraObject.name);
console.log(youraObject['name']); // в брекетах можно указывать экспрешн (выражение)

const baseName = 'name';
console.log(youraObject['last' + baseName]);

// const userInput = prompt('What do you want to know about YouRa? CHoose between name, lastname, birthYear, job, familyMembers');

// if (youraObject[userInput]) {
//    console.log(youraObject[userInput]);
// } else {
//    console.log('This property does not exist. CHoose between name, lastname, birthYear, job, familyMembers');
// }


// Create new properties
youraObject.location = 'Russia';
const telega = 'telegram';
youraObject[telega] = '@YarGom';
console.log(youraObject);

// Challenge
// 'YouRa has 3 family members and first one is Alena'


console.log(`${youraObject.name} has ${youraObject.familyMembers.length} family members and the first one is ${youraObject.familyMembers[0]}`);


