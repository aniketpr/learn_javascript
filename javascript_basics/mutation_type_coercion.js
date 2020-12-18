// single line comment 
/*multi
line 
comment
*/

var firstName = 'Aniket';
var age = 26;

// javascript auto converts integers to string while concatination called type coercion
console.log(firstName + ' ' + age);

//multiple variable in one line 
var job, isMarried;
job = 'Teacher'
isMarried = false;
// even boolean is converted to type coercion
console.log(firstName + 'is a ' + age + ' yeat old ' + job + '. Is he married ' + isMarried);

//variabl mutation
age = 'twenty eight';
// priviously it was integer now its strings.
alert(age);

var lastName = prompt('what is his last Name ?');
console.log(firstName + ' ' + lastName);