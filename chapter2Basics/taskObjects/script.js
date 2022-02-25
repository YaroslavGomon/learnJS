jackObject = {
   firstName: 'Jack',
   lastName: 'White',
   weight: 79,
   height: 1.7,

   bmi: function () {
      return (this.weight / (this.height * this.height)).toFixed(1);
   }
}

mikeObject = {
   firstName: 'Mike',
   lastName: 'Black',
   weight: 91,
   height: 1.93,

   bmi: function () {
      return (this.weight / (this.height * this.height)).toFixed(1);
   }
}

console.log(`${jackObject.firstName} ${jackObject.lastName} BMI (${jackObject.bmi()}) is ${jackObject.bmi() > mikeObject.bmi() ? 'higher' : 'lower'} than ${mikeObject.firstName} ${mikeObject.lastName} BMI (${mikeObject.bmi()}).`);



// решение автора:

const jack = {
   firstName: 'Jack',
   lastName: 'White',
   weight: 79,
   height: 1.70,
   calcBmi: function () {
      this.bmi = this.weight / this.height ** 2;
      return this.bmi;
   }
};

const mike = {
   firstName: 'Mike',
   lastName: 'Black',
   weight: 91,
   height: 1.93,
   calcBmi: function () {
      this.bmi = this.weight / this.height ** 2;
      return this.bmi;
   }
};


console.log(jack.calcBmi());
console.log(jack.bmi);

console.log(mike.calcBmi());
console.log(mike.bmi);

if(jack.bmi > mike.bmi) {
   console.log(`${jack.firstName} ${jack.lastName} BMI (${jack.bmi}) is higher than ${mike.firstName} ${mike.lastName} BMI (${mike.bmi})`);
} else if(mike.bmi > jack.bmi) {
   console.log(`${mike.firstName} ${mike.lastName} BMI (${mike.bmi}) is higher than ${jack.firstName} ${jack.lastName} BMI (${jack.bmi})`);
} else {
   console.log(`${jack.firstName} ${jack.lastName} BMI (${jack.bmi}) are equal ${mike.firstName} ${mike.lastName} BMI (${mike.bmi})`);
}