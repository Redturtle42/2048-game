/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file interacts by pressing a button

const table = require('table');
const map = require('./map');
const move = require('./move');
const termkit = require('terminal-kit').terminal;
const gameBoard = map.generateMatrix(4, 4);

termkit.grabInput();
termkit.on('key', function (key) {
  termkit.clear();
  if (key === 'UP') {
    move.up(gameBoard);
  } else if (key === 'DOWN') {
    move.down(gameBoard);
  } else if (key === 'RIGHT') {
    move.right(gameBoard);
  } else if (key === 'LEFT') {
    move.left(gameBoard);
  } else if (key === 'ENTER') {
  } else if (key === 'CTRL_C' || key === 'q' || key === 'ESCAPE') {
    console.log('Goodbye!');
    process.exit();
  }
  move.genNewElements(gameBoard);
  console.log(table.table(gameBoard));
});

module.exports = {
  gameBoard
};
