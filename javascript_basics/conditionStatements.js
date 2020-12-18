var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully marry soon :) ');
}

var johnHeight, markHeight, johnMass, markMass ;

markMass = 78; // kg
markHeight = 1.69; // meters

johnmass = 92;
johnHeight = 1.95;

johnBMI = johnmass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

console.log('John BMI = ' + johnBMI);
console.log('Mark BMI = ' + markBMI);

if (markBMI > johnBMI){
    console.log(' Mark\'s BMI is higher than John\'s. ');
} else {
    console.log(' John\'s BMI is higher than Mark\'s. ')
}

console.log('----- Boolean Logic --------');
var firstName = 'John';
var age = 16;

if(age < 13){
    console.log(firstName + ' is a boy. ');
}else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager. ');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man. ');
} else {
    console.log(firstName + ' is a man. ');
}