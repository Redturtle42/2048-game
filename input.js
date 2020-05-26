const table = require('table');
const mapJs = require('./map');
const moveJs = require('./move');
const termkit = require('terminal-kit').terminal;

const gameBoard = mapJs.generateMatrix(4, 4);
mapJs.fillMatrix(gameBoard);
// const inputPrintMatrix = mapJs.printMatrix(generateMatrix);
console.log(table.table(gameBoard));

termkit.grabInput();
termkit.on('key', function (key) {
  if (key === 'UP') {
    termkit.clear();
    moveJs.up(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press up cursor.');
  } else if (key === 'DOWN') {
    termkit.clear();
    moveJs.down(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press down cursor.');
  } else if (key === 'RIGHT') {
    termkit.clear();
    moveJs.right(gameBoard);
    console.log(table.table(gameBoard));
    console.log('U press right cursor.');
  } else if (key === 'LEFT') {
    termkit.clear();
    moveJs.left(gameBoard);
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
