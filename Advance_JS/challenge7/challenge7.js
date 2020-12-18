(function(){
    
    var Question = function(question, options,correctAnswer){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestions = function(){
        
        // console.log(random, questionArry[random]);
        console.log(this.question);
        for (i = 0; i < this.options.length; i++){
            console.log(i + ':' + this.options[i]);
        }  
    }
    var score = 0;
    Question.prototype.checkAnswer = function(choosen_answer){
        if (choosen_answer === this.correctAnswer){
            console.log('Correct Answer :)')
            score = score + 1;
            console.log('Score: ' + score);
            console.log('-----------------------------------------------')
        }else{
            console.log('Wrong Answer :(')
            console.log('Score: ' + score);
            console.log('-----------------------------------------------')
        }
    }

    var q1 = new Question('Which language you are learning?', ['PHP','Javascript','Ruby','Python'], '1');
    var q2 = new Question('Javascript is coolest language?', ['Yes','No', 'Dont No'], '0');
    var q3 = new Question('Javascript is client side language?', ['Yes','No'], '0');

    var questionArry = [q1, q2, q3];

    function nextQuestion(){
        var random = Math.floor(Math.random() * questionArry.length);
        // q2.displayQuestions();
        // q2.checkAnswer();
    
        questionArry[random].displayQuestions();
    
        var choosen_answer =  prompt('Please select the corect answer.');

        if (choosen_answer !== 'exit'){
            questionArry[random].checkAnswer(choosen_answer);
            nextQuestion();
            score++
        }

    }

    nextQuestion();

})();
