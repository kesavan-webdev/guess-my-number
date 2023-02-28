// getting elements

const inputNum = document.getElementById("guess-num");
const btnGuess = document.getElementById("btn-guess");
const output = document.getElementById("output-val");
const highScore = document.getElementById("highscore");
const guessesLeft = document.getElementById("guesses");
const errorMsg = document.getElementById("error");
const btnReset = document.getElementById("btn-reset");

let Score = 0;
let guesses = 10;

highScore.innerText = Score;
guessesLeft.innerText = guesses;
// getting random number
const randomNum = () => {
  return Math.trunc(Math.random() * 50 + 1);
};
console.log(randomNum); //it will gave you the function as output
let ranNum = randomNum();
console.log(ranNum); // it will give you random number as output so always store in variable

//adding event to the btn-guess
btnGuess.addEventListener("click", function () {
  let guessNum = Number(inputNum.value); // all the input type we got from user is in the form of string so we need to change it to number if we comparing it to Number Value
  console.log(guessNum);

  if (guessNum >= 1 && guessNum <= 50) {
    if (guesses < 1) {
      btnReset.style.display = "block";
      btnGuess.style.display = "none";
      output.textContent = "game over please reset...";
    } else {
      if (ranNum === guessNum) {
        output.textContent = "your guess is correct";
        output.style.backgroundColor = "#4f772d";
        errorMsg.style.display = "none";
        btnReset.style.display = "block";
        inputNum.value = "";
        btnGuess.style.display = "none";
        let currentScore = Score;
        let currentGuessesLeft = guesses;
        console.log(currentScore);
        console.log(currentGuessesLeft);
        if (currentScore <= currentGuessesLeft) {
          Score = guesses;
          highScore.innerText = Score;
          highScore.innerText = currentGuessesLeft;
        } else {
          highScore.innerText = currentScore;
        }
      } else if (ranNum > guessNum) {
        output.textContent = "your guess is too low";
        output.style.backgroundColor = "#4f772d";
        errorMsg.style.display = "none";
        guesses--;
        guessesLeft.innerText = guesses;
        inputNum.value = "";
      } else if (ranNum < guessNum) {
        output.textContent = "your guess is too high";
        output.style.backgroundColor = "#4f772d";
        errorMsg.style.display = "none";
        guesses--;
        guessesLeft.innerText = guesses;
        inputNum.value = "";
      }
    }
  } else {
    // alert("please enter a number between a range"); //alert will refresh our page when it refresh our random num changes so don't use it
    errorMsg.style.display = "block";
  }
});

btnReset.addEventListener("click", () => {
  guesses = 10;
  guessesLeft.innerText = guesses;
  inputNum.value = "";
  ranNum = randomNum();
  console.log(ranNum);
  btnGuess.style.display = "block";
  btnReset.style.display = "none";
});
