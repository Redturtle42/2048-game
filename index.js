/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This is the main file. Here we can call functions generated from the other documents. This is responsible for running the game.

const center = require('center-align');
const termkit = require('terminal-kit').terminal;

const checkJs = require('./check');
const mapJs = require('./map');
const menuJs = require('./menu');
const moveJs = require('./move');
const outputJs = require('./output');

const runGame = (size) => {
  // Preparation, loading map
  const gameBoard = mapJs.generateMatrix(size, size);
  mapJs.fillMatrix(gameBoard);
  outputJs.draw(gameBoard);

  // Main section. Logic, movement is here.
  termkit.grabInput();
  termkit.on('key', function (key) {
    if (key === 'UP') {
      moveJs.up(gameBoard);
    } else if (key === 'DOWN') {
      moveJs.down(gameBoard);
    } else if (key === 'RIGHT') {
      moveJs.right(gameBoard);
    } else if (key === 'LEFT') {
      moveJs.left(gameBoard);
    } else if (key === 'CTRL_C' || key === 'q' || key === 'ESCAPE') {
      outputJs.quitImmediate();
      outputJs.quitLate();
    } else {
      return;
    }

    // Checking if there are any empty place or something to merge.
    let check = checkJs.checkEmptyPlace(gameBoard);
    if (check) {
      mapJs.genNewElements(gameBoard);
    }
    check = checkJs.checkEmptyPlace(gameBoard);
    const merge = checkJs.mergeable(gameBoard);
    if (!check && !merge) {
      outputJs.draw(gameBoard);
      console.log(center('GAME OVER', process.stdout.columns));
      termkit.hideCursor(false);
      process.exit();
    }
    outputJs.draw(gameBoard);
  });
};

// Introduction
termkit.clear();
outputJs.neatStyle('     \n2048\n     ', 'slick', 5, 0, true, ['magenta', 'red']);
outputJs.neatStyle('WELCOME TO 2048!', 'console', 1, 0, false, ['white', 'magenta']);
outputJs.neatStyle('PLEASE CHOOSE FROM THE MENU ITEMS BELOW!', 'console', 0, 0, true, ['white', 'magenta']);

// Main Menu
menuJs.mainMenu(runGame);
