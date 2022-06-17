'use strict';

const PersonProto = {
  printAge() {
    console.log(2022 - this.birthYear);
  },

  initPerson(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.initStudent = function (firstName, birthYear, dept) {
  PersonProto.initPerson.call(this, firstName, birthYear);
  this.dept = dept;
};
StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName} and Im studying at ${this.dept} dept.`
  );
};

const jack = Object.create(StudentProto);
jack.initStudent('Jack', 2003, 'Programming');
console.log(jack);
jack.introduce();
jack.printAge();
