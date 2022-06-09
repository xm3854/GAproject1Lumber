# Lumber :wood:

## About the game

Lumber is a dumb down recreation of the game "lumberjack" on telegram. The game involves pressing the left and right keys on the keyboard to move the player left and right. The objective of the game is to avoid the obstacles or "enemies" and score as high as possible within the timeframe (set at 30s).

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
- checkGame function: checks the game state, whether a collision has happened and ends the game if condition is met.
- updateTimer function: a function to countdown the time.

## Installation instructions

## Unsolved problems

- Unable to get the reset state back to original where the timer stops. It appears to be an issue with setInterval.
