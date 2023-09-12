'use strict'
//console.log(document.querySelector('.message').textContent);
//What is DOM and DOM Manipulation
/*DOM is Document Object Model and it is structured representation of HTML Document. Allows Javascript to access Html Element 
and styles to manipulate them

//selecting and manipulating element
document.querySelector('.message').textContent = '🎊    Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/
//handling click event

//creating a random number and assigning it to variable
let secretNumber = Math.trunc(Math.random()*20) + 1;
//maximum trying time
let score = 5;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


//selecting class number from html and assigning it to secreat number
//document.querySelector('.number').textContent = secretNumber
//selecting class check from html, attribute that require user click and creating function for necessary action
document.querySelector('.check').addEventListener('click', function() {
    //creating a guess variable and assigning it to class guess from html.
    let guess = Number(document.querySelector('.guess').value);
    //if no number inserted
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔No number yet'
        displayMessage('⛔No number yet')
    }
    //if number is inserted and the user guess correctly
    else if (guess === secretNumber) {
        displayMessage('🧨Congratulation, You guess right');
        //manipulating the css
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30px';
        document.querySelector('.number').textContent = secretNumber    
        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    //if number is inserted but the user guess wrong and the guess is too high
    else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage((guess > secretNumber) ? '😮That is too high!' : '😑Too low!');
            score--;
            document.querySelector('.score').textContent = score;        
        }
        else {
            displayMessage(alert('You lost the game. Please click OK, then click on AGAIN! to continue.'));
        }
        document.querySelector('body').style.backgroundColor = 'Red';
    }
    //if number is inserted but the user guess wrong and the guess is low
/*    else if (guess < secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = '😑Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = alert('You lost the game. Please click OK, then click on AGAIN! to continue.');
        }
        document.querySelector('body').style.backgroundColor = 'Red';
    }
*/
})
document.querySelector('.again').addEventListener('click', function() {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    if(score === 0){
        displayMessage('Start guessing again please.....')
        let again = alert('Please click OK to continue.')
        //document.querySelector('.message').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
    }
    else {
        let again = alert('Do you wish to try again?..If Yes, please click on OK, if No, please refresh this page')
        displayMessage('Start guessing again please.....')
        //document.querySelector('.message').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?'
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
})

