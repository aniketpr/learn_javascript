// Ternary Operator and Switch Statements

var firstName = 'John';
var age = 20;

console.log('------- Ternary Operator --------');
age >= 18 ? console.log(firstName + ' drink beer. ') : console.log(firstName + ' drink juice. ');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

console.log('----- Switch Statements --------')
var job = 'teacher';
switch (job){
    case 'teacher' :
        console.log(firstName + ' teacher kids how to code. ');
        break;
    case 'driver' :
        console.log(firstName + ' drives an uber in Lisbon. ');
        break;
    case ' designer' :
        console.log(firstName = ' designs beatiful websites. ');
        break;
    default:
        console.log(firstName + ' does something else. ');
}

age = 2;
switch(true){
    case age < 13 :
        console.log(firstName + ' is a boy. ');
        break;
    case age >= 13 && age < 20 :
        console.log(firstName + ' is a teenager. ');
        break;
    case age >= 20 && age < 30 :
        console.log(firstName + ' is a young man. ');
        break;
    default :
        console.log(firstName + ' is a man. ');
}
