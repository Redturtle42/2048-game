/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This is the main file. Here we can call functions generated from the other documents. This is responsible for running the game.

const table = require('table');
const termkit = require('terminal-kit').terminal;
const mapJs = require('./map');
const moveJs = require('./move');
const checkJs = require('./check');

// Preparation, loading map
const gameBoard = mapJs.generateMatrix(4, 4);
mapJs.fillMatrix(gameBoard);
termkit.clear();
console.log(table.table(gameBoard));

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
  } else if (key === 'ENTER') {
  } else if (key === 'CTRL_C' || key === 'q' || key === 'ESCAPE') {
    console.log('Goodbye!');
    process.exit();
  }

  // Checking if there are any empty place or something to merge.
  let check = checkJs.checkEmptyPlace(gameBoard);

  if (check) {
    mapJs.genNewElements(gameBoard);
  }
  check = checkJs.checkEmptyPlace(gameBoard);
  const merge = checkJs.mergeable(gameBoard);
  if (!check && !merge) {
    termkit.clear();
    console.log(table.table(gameBoard));
    console.log('Sajnos nincs több lépésed! A játék véget ért.');
    process.exit();
  }
  termkit.clear();
  console.log(table.table(gameBoard));
});
