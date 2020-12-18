var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        //return 2018 - birthYear;
        //return 2018 - this.birthYear;
        this.age = 2018 - this.birthYear;
    }
};

// console.log(john.calcAge(1990)); // line no. 9
//console.log(john.calcAge()); // line no. 10
john.calcAge();
console.log(john);