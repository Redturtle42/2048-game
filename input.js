/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file interacts by pressing a button

const table = require('table');
const map = require('./map');
const move = require('./move');
const termkit = require('terminal-kit').terminal;
const gameBoard = map.generateMatrix(4, 4);

termkit.grabInput();
termkit.on('key', function (key) {
  if (key === 'UP') {
    termkit.clear();
    move.up(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press up cursor.');
  } else if (key === 'DOWN') {
    termkit.clear();
    move.down(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press down cursor.');
  } else if (key === 'RIGHT') {
    termkit.clear();
    move.right(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press right cursor.');
  } else if (key === 'LEFT') {
    termkit.clear();
    move.left(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press left cursor.');
  } else if (key === 'ENTER') {
    console.log('U press enter.');
  } else if (key === 'CTRL_C' || key === 'q' || key === 'ESCAPE') {
    console.log('Goodbye!');
    process.exit();
  } else {
    console.log('You press', key, 'key');
  }
});

module.exports = {
  gameBoard
};
