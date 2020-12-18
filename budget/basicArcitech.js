/* here we are creating three module to keep seperate ande clean code. controller module will connect 
above both modules for interaction. 
Here we have created three IFII i.e Imediate invoked function to keep our code private from publically
exposed code. */

var budgetController = (function() {

    var x = 23;

    var add = function(a){
        return x + a ;
    }

    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();

var UIController = (function(){

    // Some Code

})();

var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
})(budgetController, UIController);