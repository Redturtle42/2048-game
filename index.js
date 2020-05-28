/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This is the main file. Here we can call functions generated from the other documents. This is responsible for running the game.

// const axel = require('axel');
const center = require('center-align');
const table = require('table');
const termkit = require('terminal-kit').terminal;
const checkJs = require('./check');
const mapJs = require('./map');
const moveJs = require('./move');

/* ---------------------------------------------------- */

// Main Menu
const mainMenu = () => {
  termkit.clear();
  termkit.hideCursor(true);
  termkit.cyan();
  console.log(center('PLEASE CHOOSE FROM THE MENU ITEMS BELOW!\n', 80));
  const items = center(['BABY MODE (2X2)\n', 'EASY GAME (4X4)\n', 'MEDIUM GAME (6X6)\n', 'HARD GAME (8X8)\n', 'FATALITY (12X12) - JUST FOR CHUCK NORRIS\n', 'EXIT\n'], 80);
  const options = {
    selectedStyle: termkit.black.brightRed
  };
  termkit.singleColumnMenu(items, options, (error, select) => {
    if (error) {
      return;
    }
    termkit.clear();
    if (select.selectedIndex === 0) {
      runGame(2);
    } else if (select.selectedIndex === 1) {
      runGame(4);
    } else if (select.selectedIndex === 2) {
      runGame(6);
    } else if (select.selectedIndex === 3) {
      runGame(8);
    } else if (select.selectedIndex === 4) {
      runGame(12);
    } else if (select.selectedIndex === 5) {
      termkit.hideCursor(false);
      process.exit();
    }
  });
};
mainMenu();

/* ---------------------------------------------------- */

const runGame = (size) => {
  // Preparation, loading map

  const gameBoard = mapJs.generateMatrix(size, size);
  mapJs.fillMatrix(gameBoard);
  console.log(center(table.table(gameBoard), 80));

  // Main section. Logic, movement is here.
  termkit.hideCursor(true);
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
      console.log(center('Goodbye!', 80));
      termkit.hideCursor(false);
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
      console.log(center(table.table(gameBoard), 80));
      console.log(center('GAME OVER', 80));
      termkit.hideCursor(false);
      process.exit();
    }
    termkit.clear();
    console.log(center(table.table(gameBoard), 80));
  });
};
