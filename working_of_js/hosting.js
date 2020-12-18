 // Hoisting in Javascript

// Functions
calculateAge(1965);

function calculateAge(year){
    console.log(2016 - year);
}


// Funtion Expressions
// retirement(1956); // retirement is not a function
var retirement = function(year){
    console.log(65 -  (2016 - year));
}
retirement(1956);

// variables
console.log(age); // undefined
var age = 23; // if we commen it line number 19 will give age is not defined

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

// Scoping and chaining

// First scoping
var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the difference between execution stack and scope chain

var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        third();
    }
}

function third(){
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}