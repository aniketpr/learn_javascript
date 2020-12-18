var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +
            this.name + ', I\'m a ' +
            this.job + ' and I\'m ' +
            this.age + ' years old.');
        } else if(style ==='freindly'){
            console.log('Hey! What\s up? I\'m ' + 
            this.name + ', I\'m a ' +
            this.job + ' and I\'m ' +
            this.age + ' years old.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// Method borrowing
john.presentation.call(emily, 'freindly','afternoon');
john.presentation.apply(emily, ['freindly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'freindly');
john.presentation.bind(john, 'friendly');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);