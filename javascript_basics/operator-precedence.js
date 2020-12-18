var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

console.log("----------- Multiple Operator precedence ----------")
var isFullage = now - yearJohn >= fullAge; //true
console.log(isFullage); 

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log('----------- Grouping i.e paranthethis() has higher precedence than + symbol')
console.log(average);

console.log('------------- Multiple assignments ---------')
console.log('---- Assignments operatpr works from right to left ----------')
var x,y;
x = y = ( 3 + 5 ) * 4 - 6;
console.log('( 3 + 5 ) * 4 - 6')
console.log(x,y);

console.log('------- x *=2 is same as x = x * 2 --------')
x *= 2; 
console.log(x)

console.log('----- incremental operator -----')
console.log('------- x = x + 1 is same as x++')
x++
console.log(x)
