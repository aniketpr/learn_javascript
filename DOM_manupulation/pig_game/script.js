var scores, roundScore, activePlayer, dice, gamePlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function(){

    if (gamePlaying){
        //get random number
        dice = Math.floor(Math.random() * 6) + 1;

        // display the random number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // update the round score IF the rolled number was NOT a 1
        if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        }else {
            nextPlayer();
        }

    }

});

document.querySelector('.btn--hold').addEventListener('click', function(){

    if (gamePlaying){
        //Add current score to global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game
        if (scores[activePlayer] >= 20){
            document.querySelector('#name--' + activePlayer).textContent = 'Winner!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');;
            gamePlaying = false;

        } else{
            nextPlayer();
        }

        //Next Player
        // nextPlayer();

    }

});

function nextPlayer(){

    document.querySelector('#current--' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn--new').addEventListener('click', init);

function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // document.querySelector('#current--' + activePlayer).textContent = dice;
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    // var x = document.querySelector('#score--0').textContent;
    // console.log(x);

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

}