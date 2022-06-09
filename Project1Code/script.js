const cells = Array.from(document.querySelectorAll(".cell"));
const enemyCells = cells.slice(0, 22);
const playerCells = cells.slice(20, 22);
const scoreDisplay = document.querySelector(".score");
const countDown = document.querySelector(".countdown");
let time = 30;
let score = 0;

function reset() {
  score = 0;
  time = 30;
  scoreDisplay.innerHTML = "0";

  cells.forEach(function eraseCell(cell) {
    return (cell.innerHTML = "");
  });
  spawnPlayer();
  spawnEnemy();
}

function playerMove(e) {
  const player = document.querySelector(".player");

  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    moveEnemy();
    spawnEnemy();
    if (
      e.key === "ArrowRight" &&
      playerCells.includes(
        player.parentElement.nextElementSibling.nextElementSibling
      )
    ) {
      player.parentElement.nextElementSibling.nextElementSibling.appendChild(
        player
      );
    }
    if (
      e.key === "ArrowLeft" &&
      playerCells.includes(
        player.parentElement.previousElementSibling.previousElementSibling
      )
    ) {
      player.parentElement.previousElementSibling.previousElementSibling.appendChild(
        player
      );
    }
    score++;
    scoreDisplay.innerHTML = score;
    checkGame();
  }
}

function spawnEnemy() {
  if (score % 2 !== 0) {
    const position = Math.floor(Math.random() * 2);
    enemyCells[position].innerHTML = "<div class='enemy'></div>";
  }
}

function spawnPlayer() {
  const position = Math.floor(Math.random() * 2);
  playerCells[position].innerHTML = "<div class='player'></div>";
}

function moveEnemy() {
  for (let i = enemyCells.length - 1; i >= 0; i--) {
    //only moving enemy cell, not moving player cell
    //if include enemy cell, move, if not dont move
    if (
      enemyCells[i].children.length > 0 &&
      enemyCells[i].children[0].className == "enemy"
    ) {
      if (i >= enemyCells.length - 2) {
        enemyCells[i].removeChild(enemyCells[i].children[0]);
      } else {
        const cell = enemyCells[i];
        const nextCell = cells[i + 2];
        const enemy = cell.children[0];
        nextCell.appendChild(enemy);
      }
    }
  }
}

function checkGame() {
  let stopGame = false;
  for (let i = 0; i < playerCells.length; i++) {
    if (playerCells[i].children.length > 1) {
      stopGame = true;
      if (stopGame) {
        alert(`Gameover, your score is ${score - 1}`);
        reset();
      }
    }
  }
}

function updateTimer() {
  countDown.innerHTML = `${time}s`;
  time--;
  if (time === 0) {
    alert(`Gameover, your score is ${score}`);
    reset();
  }
}

function startGame(e) {
  if (e.key == "space" || e.keyCode == 32) {
    reset();
    setInterval(updateTimer, 1000);
  }
}
document.addEventListener("keydown", playerMove);
document.addEventListener("keydown", startGame);
