//Budget Controller
var budgetController = (function() {

})();

// UI controller
var UIController = (function(){

})();

// Global App controller
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        
        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        //3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    };

    document.querySelector('.add__btn').addEventListener('click', function(){

        ctrlAddItem();
    });

    document.addEventListener('keypress', function(event){

        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }

    });

})(budgetController, UIController);