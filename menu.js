/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains the mainmenu bar.

const center = require('center-align');
const termkit = require('terminal-kit').terminal;

const outputJs = require('./output');
const score = require('./score');

const mainMenu = (game) => {
  termkit.reset();
  outputJs.welcomeText();
  termkit.hideCursor(true);
  termkit.bold();

  termkit.grabInput({ mouse: 'motion' });
  const items = center(['BABY MODE (2X2)', 'EASY GAME (4X4)', 'MEDIUM GAME (5X5)', 'HARD GAME (6X6)', 'FATALITY (8X8) - JUST FOR CHUCK NORRIS', 'HIGH SCORE', 'EXIT'], process.stdout.columns);
  const options = {
    selectedStyle: termkit.black.green
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
      termkit.bold();
      outputJs.neatStyle('Best scores', 'console', 1, 0, true, ['#e5bd33', '#33E5BD']);
      score.printScores();
      const highScoreMenuItem = [center('PRESS ENTER TO MAIN MENU', process.stdout.columns)];
      const options = {
        y: 30,
        selectedStyle: termkit.black.green
      };
      termkit.singleColumnMenu(highScoreMenuItem, options, (error, select) => {
        if (error) {
          return;
        }
        if (select.selectedIndex === 0) {
          termkit.reset();
          outputJs.welcomeText();
          mainMenu(game);
        }
      });
    } else if (select.selectedIndex === 6) {
      outputJs.quitImmediate();
    }
  });
};

module.exports = {
  mainMenu
};
