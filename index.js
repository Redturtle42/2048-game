/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This is the main file. Here we can call functions generated from the other documents. This is responsible for running the game.

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
  termkit.cyan('W E L C O M E   T O   2 0 4 8\n');
  termkit.cyan('PLEASE CHOOSE FROM THE MENU ITEMS BELOW!\n');
  const items = ['START NEW GAME', 'DIFFICULTY LEVEL', 'EXIT'];
  const options = {
    selectedStyle: termkit.black.bgCyan
  };
  termkit.singleColumnMenu(items, options, (error, select) => {
    if (error) {
      return;
    }
    termkit.clear();
    if (select.selectedIndex === 0) {
      runNewGame();
    } else if (select.selectedIndex === 1) {
      const aboutMenuItems = ['Back'];
      const about = 'Here you can choose difficulty level.';
      console.log(about);
      const options = {
        y: 2,
        selectedStyle: termkit.black.bgCyan
      };
      termkit.singleLineMenu(aboutMenuItems, options, (error, select) => {
        if (error) {
          return;
        }
        termkit.clear();
        if (select.selectedIndex === 0) {
          mainMenu();
        }
      });
    } else if (select.selectedIndex === 2) {
      termkit.hideCursor(false);
      process.exit();
    }
  });
};
mainMenu();

/* ---------------------------------------------------- */

const runNewGame = () => {
  // Preparation, loading map

  const gameBoard = mapJs.generateMatrix(4, 4);
  mapJs.fillMatrix(gameBoard);
  console.log(table.table(gameBoard));

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
    } else if (key === 'ENTER') {
    } else if (key === 'CTRL_C' || key === 'q' || key === 'ESCAPE') {
      console.log('Goodbye!');
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
      console.log(table.table(gameBoard));
      console.log('Sajnos nincs több lépésed! A játék véget ért.');
      termkit.hideCursor(false);
      process.exit();
    }
    termkit.clear();
    console.log(table.table(gameBoard));
  });
};
