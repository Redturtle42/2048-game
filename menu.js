/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains the mainmenu bar.

const termkit = require('terminal-kit').terminal;
const center = require('center-align');

const outputJs = require('./output');

const mainMenu = (game) => {
  termkit.hideCursor(true);
  termkit.bold();

  termkit.grabInput();
  const items = center(['BABY MODE (2X2)', 'EASY GAME (4X4)', 'MEDIUM GAME (5X5)', 'HARD GAME (6X6)', 'FATALITY (8X8) - JUST FOR CHUCK NORRIS', 'EXIT'], process.stdout.columns);
  const options = {
    selectedStyle: termkit.black.brightRed
  };
  termkit.singleColumnMenu(items, options, (error, select) => {
    termkit.clear();
    if (error) {
      return;
    }
    if (select.selectedIndex === 0) {
      game(2);
    } else if (select.selectedIndex === 1) {
      game(4);
    } else if (select.selectedIndex === 2) {
      game(5);
    } else if (select.selectedIndex === 3) {
      game(6);
    } else if (select.selectedIndex === 4) {
      game(8);
    } else if (select.selectedIndex === 5) {
      outputJs.quitImmediate();
    }
  });
};

module.exports = {
  mainMenu
};
