// BMI = mass / height^2 = mass / (height * height)

var johnHeight, markHeight, johnMass, markMass ;

markMass = 78; // kg
markHeight = 1.69; // meters

johnmass = 92;
johnHeight = 1.95;

johnBMI = johnmass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

console.log('John BMI = ' + johnBMI);
console.log('Mark BMI = ' + markBMI);

var markHeightBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's?" + markHeightBMI);