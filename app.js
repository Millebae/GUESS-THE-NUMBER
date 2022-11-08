let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess)

let playerturn = 0;
while (playerturn =! 10) {
 
  }
  function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Grattis, du gissade på rätt tal!';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      
      if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Jag tänker på ett högre tag';
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'jag tänker på ett lägre tal';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }





