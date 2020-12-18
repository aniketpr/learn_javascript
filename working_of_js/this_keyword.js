// this keyword is a window object in excution context object 

console.log(this);

calculateAge(1985);

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAges: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction(){
            console.log(this);
        }

        innerFunction();
    }
}

john.calculateAges();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,

};

// method borrowing
mike.calculateAges = john.calculateAges;
mike.calculateAges();