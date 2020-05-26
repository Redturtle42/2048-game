/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This is the main file. Here we call the functions generated by the other documents. This is responsible for running the game.

const table = require('table');
const inputJs = require('./input');
const mapJs = require('./map');
const checkJs = require('./check');
// const moveJs = require('./move');

mapJs.fillMatrix(inputJs.gameBoard);
console.log(table.table(inputJs.gameBoard));
checkJs.checkLastMove(inputJs.gameBoard);
