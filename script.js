const colors = [ "red" , "blue", "green", "yellow","purple","orange"];
 
let selectedColor;
  function initGame() {
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    const colorDisplay = document.querySelector("#color-display");
    colorDisplay.style.backgroundColor = selectedColor;
    const feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    feedback.style.color = "inherit";
  }
  function checkGuess() {
    const guessInput = document.querySelector("#color-guess");
    const guess = guessInput.value.toLowerCase();
    const feedback = document.querySelector("#feedback");
    if (guess === selectedColor) {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Try again.";
      feedback.style.color = "red";
    }
  
    guessInput.value = "";
  }
  function restartGame() {
    initGame();
  }
  document.addEventListener("DOMContentLoaded", function() {
    initGame();
    const guessButton = document.querySelector("#guess-button");
    guessButton.addEventListener("click", checkGuess);
  
    const restartButton = document.querySelector("#restart-button");
    restartButton.addEventListener("click", restartGame);
  });
  