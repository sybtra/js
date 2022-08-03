let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
const guesses = document.querySelector('.guesses');
// console.log(guesses);
const lastResult = document.querySelector('.lastResult');
// console.log(lastResult);
const lowOrHi = document.querySelector('.lowOrHi');
// console.log(lowOrHi);
const guessSubmit = document.querySelector('.guessSubmit');
// console.log(guessSubmit);
const guessField = document.querySelector('.guessField');
// console.log(guessField);
let guessCount = 1;
// console.log(guessCount);
let resetButton;
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    guessCount++;
    // console.log(guessCount);

    guessField.value = '';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game.';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);

}

function resetGame() {
    guessCount = 1;
    const resultParas = document.querySelectorAll('.resultParas');
    for (const resultPara of resultParas) {
        resultPara.textContent = '';
    }
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
