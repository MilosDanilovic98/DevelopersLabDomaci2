//Variables(constants) needed

const X_CLASS = "x";
const CIRCLE_CLASS = "o";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll("[data-cell]");
const whoIsNext = document.getElementById("status");
const board = document.getElementById("game-grid");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("reset");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
let circleTurn;
//starts the game
startGame();
//add event listener to restart button
restartButton.addEventListener("click", startGame);

//start game function
function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });

  //winningMessageTextElement.innerText = "";
  whoIsNext.innerText = "X's turn";
}
