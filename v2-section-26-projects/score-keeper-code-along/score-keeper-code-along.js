const pOneButton = document.querySelector("#pOneButton");
const pTwoButton = document.querySelector("#pTwoButton");
const resetButton = document.querySelector("#reset");
const pOneDisplay = document.querySelector("#pOneDisplay");
const pTwoDisplay = document.querySelector("#pTwoDisplay");
const winningScoreSelect = document.querySelector("#playTo");

let pOneScore = 0;
let pTwoScore = 0;
let winningScore = 3;
let isGameOver = false;

pOneButton.addEventListener("click", function () {
  if (!isGameOver) {
    pOneScore += 1;

    if (pOneScore === winningScore) {
      isGameOver = true;
      pOneDisplay.classList.add("winner");
      pTwoDisplay.classList.add("loser");
    }
    pOneDisplay.textContent = pOneScore;
  }
});

pTwoButton.addEventListener("click", function () {
  if (!isGameOver) {
    pTwoScore += 1;
    if (pTwoScore === winningScore) {
      isGameOver = true;
      pTwoDisplay.classList.add("winner");
      pOneDisplay.classList.add("loser");
    }
    pTwoDisplay.textContent = pTwoScore;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  pOneScore = 0;
  pTwoScore = 0;
  pOneDisplay.textContent = 0;
  pTwoDisplay.textContent = 0;
  pOneDisplay.classList.remove("winner", "loser");
  pTwoDisplay.classList.remove("winner", "loser");
}
