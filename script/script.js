// getting elements

const num = document.getElementById("guess-num");
const btn = document.getElementById("btn-guess");
const output = document.getElementById("output-val");

// getting random number

const randomNum = Math.trunc(Math.random() * 50 + 1);
const guessNum = num.value;
console.log(num.value);
btn.addEventListener("click", function (range) {
  if (randomNum === guessNum) {
    console.log();
  }
});
