const pOne = {
  score: 0,
  button: document.querySelector("#pOneButton"),
  display: document.querySelector("#pOneDisplay"),
};
const pTwo = {
  score: 0,
  button: document.querySelector("#pTwoButton"),
  display: document.querySelector("#pTwoDisplay"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

pOne.button.addEventListener("click", function () {
  updateScores(pOne, pTwo);
});
pTwo.button.addEventListener("click", function () {
  updateScores(pTwo, pOne);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [pOne, pTwo]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
}

// const pOneButton = document.querySelector("#pOneButton");
// const pTwoButton = document.querySelector("#pTwoButton");
// const pOneDisplay = document.querySelector("#pOneDisplay");
// const pTwoDisplay = document.querySelector("#pTwoDisplay");

// pOneButton.addEventListener("click", function () {
//   if (!isGameOver) {
//     pOneScore += 1;

//     if (pOneScore === winningScore) {
//       isGameOver = true;
//       pOneDisplay.classList.add("winner");
//       pTwoDisplay.classList.add("loser");
//       pOneButton.disabled = true;
//       pTwoButton.disabled = true;
//     }
//     pOneDisplay.textContent = pOneScore;
//   }
// });

// pTwoButton.addEventListener("click", function () {
//   if (!isGameOver) {
//     pTwoScore += 1;
//     if (pTwoScore === winningScore) {
//       isGameOver = true;
//       pTwoDisplay.classList.add("winner");
//       pOneDisplay.classList.add("loser");
//       pOneButton.disabled = true;
//       pTwoButton.disabled = true;
//     }
//     pTwoDisplay.textContent = pTwoScore;
//   }
// });

// function reset() {
//   isGameOver = false;
//   pOneScore = 0;
//   pTwoScore = 0;
//   pOneDisplay.textContent = 0;
//   pTwoDisplay.textContent = 0;
//   pOneDisplay.classList.remove("winner", "loser");
//   pTwoDisplay.classList.remove("winner", "loser");
// }
