// Arrays
// ways to create Arrays in Javascript.
var names = ['aniket', 'abhishek', 'hemlata'];
var years = new Array(1994, 1999, 1992);

console.log(names);
console.log(names[0]);
console.log(names.length);

// to modifiy
names[1] = 'Ben';
names[names.length] = 'Marry';

console.log(names);

// Adding to array
names[6] = 'aaaa';
console.log(names);

//Different data types
var john = ['john', 'smith', 1990, 'teacher', false,'designer'];

john.push('blue'); // adding at end
john.unshift('Mr.') // adding at first 
console.log(john);

john.pop(); // remove from end
console.log(john);

john.shift(john); //remove from start 
console.log(john);

// if present in array returns the position and if not present returns -1
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'John is a designer';

console.log(isDesigner);