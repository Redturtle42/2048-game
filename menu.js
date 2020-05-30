/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains the mainmenu bar.

const termkit = require('terminal-kit').terminal;
const center = require('center-align');

const mainMenu = (game) => {
  termkit.hideCursor(true);
  termkit.bold();
  termkit.grabInput({ mouse: 'button' });

  const items = center(['BABY MODE (2X2)', 'EASY GAME (4X4)', 'MEDIUM GAME (6X6)', 'HARD GAME (8X8)', 'FATALITY (12X12) - JUST FOR CHUCK NORRIS', 'EXIT'], process.stdout.columns);
  const options = {
    selectedStyle: termkit.brightRed
  };
  termkit.singleColumnMenu(items, options, (error, select) => {
    console.log('\x1Bc');
    if (error) {
      return;
    }
    if (select.selectedIndex === 0) {
      game(2);
    } else if (select.selectedIndex === 1) {
      game(4);
    } else if (select.selectedIndex === 2) {
      game(6);
    } else if (select.selectedIndex === 3) {
      game(8);
    } else if (select.selectedIndex === 4) {
      game(12);
    } else if (select.selectedIndex === 5) {
      termkit.hideCursor(false);
      process.exit();
    }
  });
};

module.exports = {
  mainMenu
};
