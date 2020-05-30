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
      const myFunction1 = () => {
        setImmediate(function () {
          console.log('\x1Bc');
          outputJs.neatStyle('\n\n\nHOPE SEE YOU SOON!\nGOODBYE!!!\n\n\n', 'console', 2, 3, true, ['white', 'magenta']);
          termkit.grabInput(false);
          termkit.hideCursor(true);
        });
      };
      myFunction1();
      const myFunction = () => {
        setTimeout(function () {
          termkit.hideCursor(false);
          process.exit();
        }, 2000);
      };
      myFunction();
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

// Main Menu
menuJs.mainMenu(runGame);
