youraObject = { // Объект
   name: 'YouRa', // Свойства объектов
   lastname: 'Gomon',
   birthyear: 1987,
   job: 'programmer',
   familyMembers: ['Alena', 'Anna', 'YouRa'],
   hasDriverLicense: true,
   // calcAge: function(birthyear) { // функция внутри обхекта называется методом объекта
   //    return 2021 - birthyear;
   // }
   // calcAge: function () {
   //    // console.log(this);
   //    return 2021 - this.birthyear;
   // }

   calcAge: function () {
      // console.log(this);
      this.age = 2021 - this.birthyear;
      return 2021 - this.birthyear;
   },

   getSummary: function () {
      return `${this.name} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver liecense.`;
   }
};

// console.log(youraObject.calcAge());

// // console.log(youraObject['calcAge'](1987));

// console.log(youraObject.calcAge());
// console.log(youraObject.calcAge());

console.log(youraObject.calcAge());
console.log(youraObject.age);


// Challenge

// 'YouRa is a 34-year old programmer and he has a/no driver liecense'

console.log(`${youraObject.name} is a ${youraObject.age}-year old ${youraObject.job} and he has ${youraObject.hasDriverLicense == true ? 'a' : 'no'} driver liecense.`)

console.log(youraObject.getSummary());