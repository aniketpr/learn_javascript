// Creating object using function contructor

// Function Constructor
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function(){
    //     this.age = 2016 - this.yearOfBirth;
    //     console.log(2016 - this.yearOfBirth);
    // }
}

// Adding the function in function contructor using prototype property of function constructor
Person.prototype.calculateAge = function(){
    this.age = 2016 - this.yearOfBirth;
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith'

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1669, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
console.log(john.name + ' ' + john.lastName);

//Object.create

var personProto = {
    calculateAge_oc: function(){
        console.log(2015 -  this.yearOfBirth);
    }
};

var kohn = Object.create(personProto);
kohn.name = 'kohn';
kohn.yearOfBirth = 1990;
john.job = 'Hacker';

var hane = Object.create(personProto, {
    name: {value: 'Hane'},
    yearOfBirth: {value: 1969},
    job: {value: 'Bounty'}
});

// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Object
var obj1 = {
    name: 'aniket',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Abhishek',
    city: 'Mumbai'
}

function change(a,b){
    a = 30;
    b.city = 'Uttar Pradesh';
}

change(age,obj);

console.log(age);
console.log(obj.city);