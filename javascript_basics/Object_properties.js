var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1994,
    family: ['Jane', 'Mark'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);
console.log(john.family[0]);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1992;
jane['lastName'] = 'Smith';
console.log(jane);