/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This is the main file. Here we can call functions generated from the other documents. This is responsible for running the game.

const termkit = require('terminal-kit').terminal;
const readline = require('readline-sync');

const checkJs = require('./check');
const mapJs = require('./map');
const menuJs = require('./menu');
const moveJs = require('./move');
const outputJs = require('./output');
const scoreJs = require('./score');

const runGame = (size) => {
  // Preparation, loading map
  let gameBoard = null;
  gameBoard = mapJs.generateMatrix(size, size);
  mapJs.fillMatrix(gameBoard);
  let stringBoard = mapJs.generateStringArray(gameBoard, size);
  outputJs.drawTable(stringBoard, 0);

  // Main section. Logic, movement is here.
  termkit.grabInput();
  let inGame = true;
  let score = 0;
  termkit.on('key', function (key) {
    if (key === 'q' || key === 'ESCAPE') {
      inGame = false;
      termkit.reset();
      termkit.hideCursor(true);
      outputJs.welcomeText();
      menuJs.mainMenu(runGame);
    } else if (key === 'CTRL_C') {
      outputJs.quitImmediate();
    }

    if (inGame) {
      if (key === 'UP') {
        score += moveJs.up(gameBoard);
      } else if (key === 'DOWN') {
        score += moveJs.down(gameBoard);
      } else if (key === 'RIGHT') {
        score += moveJs.right(gameBoard);
      } else if (key === 'LEFT') {
        score += moveJs.left(gameBoard);
      }

      // Checking if there are any empty place or something to merge.
      let check = checkJs.checkEmptyPlace(gameBoard);
      if (check) {
        mapJs.genNewElements(gameBoard);
      }
      stringBoard = mapJs.generateStringArray(gameBoard, size);
      outputJs.drawTable(stringBoard, score);

      // Game over
      check = checkJs.checkEmptyPlace(gameBoard);
      const merge = checkJs.mergeable(gameBoard);
      if (!check && !merge) {
        inGame = false;
        scoreJs.saveScore(userName, score);
        process.stdin.end();
        termkit.reset();
        termkit.hideCursor(true);
        outputJs.drawTable(stringBoard, score);
        termkit.bold();
        outputJs.neatStyle('GAME OVER!\nPRESS ESC TO MENU!', 'console', 1, 2, true, ['#e5bd33', '#33E5BD']);
      }
    }
  });
};
termkit.clear();
termkit.bold();
outputJs.neatStyle('\n\nWELCOME TO 2048', 'console', 3, 0, false, ['#e5bd33', '#33E5BD']);
const userName = readline.question(outputJs.neatStyle('\nWhat is your name?\n', 'console', 1, 3, true, ['#e5bd33', '#33E5BD']));

// Introduction
outputJs.welcomeText();

// Main Menu
termkit.reset();
menuJs.mainMenu(runGame);
