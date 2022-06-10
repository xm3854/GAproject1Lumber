# Lumber :wood:

## About the game

Lumber is a dumb down recreation of the game "lumberjack" on telegram. The game involves pressing the left and right keys on the keyboard to move the player left and right. The objective of the game is to avoid the obstacles or "enemies" and score as high as possible within the timeframe (set at 30s).

- Refer to stretchGoals code for the most updated code that is presented, the other codes are basic mvp of the code.

## Instructions

- Press "spacebar" to start the game.
- The game interacts with the left and right button on the keyboard.
- Dodge the incoming red "branches" to score a point.
- Game ends when the timer runs out or when the player collides with a branch.

## Technologies used

HTML, CSS, JavaScript

## The approach taken

Multiple functions were created to capture each interaction.

- reset function: resets the game to original blank board.
- playerMove function: Moves the player and the entire board, this is the main function where the game is played.
- spawnEnemy & spawnPlayer function: creates enemies and player.
- moveEnemy function: checks the enemies in the board and moves if there is an enemy down, else, remove the enemy if the enemy has reached the end of the board.
- checkGame function: checks the game state, whether a collision has happened and ends the game if condition is met.
- updateTimer function: a function to countdown the time.

## Challenges faced

Trying to get the enemies to loop downwards. Had to change for loop increment to decrement instead so that it will not continuously loop from the top and move the enemy all the way to the bottom. Using decrement allows the enemy block to be read once, shifted, and proceeding to read the other enemies that are behind the furthest enemy block.

```
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

```

Trying to arrange the code so that different edge cases of ending the games are taken into account. Learned that placing the codes in different parts of the function (i.e., putting checkgame before moving enemy results in enemy placed in the same div as the player because checkgame sees no error and proceeds to put enemy in the next block which should not be the case). Code placement is important.

```
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
```

## Unsolved problems

- Unable to get the reset state back to original where the timer stops. It appears to be an issue with setInterval.
