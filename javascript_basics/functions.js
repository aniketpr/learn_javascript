function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1994);
console.log(ageJohn);

function yearUntilRetire(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years. ');
    } else {
        console.log(firstName + ' is already retired .')
    }
    
}

yearUntilRetire(1990, 'john');
yearUntilRetire(1947, 'Mike');

console.log('------- Function Statements and Expressions -------')

// Function declaration
//function whatDoYouDO(job, firstName){}

// Function Expressions
console.log('------- Functions Expressions')
var whatdoyoudo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches ';
        case 'driver':
            return firstName + ' drives ';
        case 'designer':
            return firstName + ' designer ';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatdoyoudo('teacher', 'John'));
console.log(whatdoyoudo('designer', 'Jane'));