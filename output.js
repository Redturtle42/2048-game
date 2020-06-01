/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains UI and design contents.

const table = require('table');
const center = require('center-align');
const CFonts = require('cfonts');
const termkit = require('terminal-kit').terminal;

const config = {
  columns: {
    0: {
      alignment: 'center',
      width: 6
    },
    1: {
      alignment: 'center',
      width: 6
    },
    2: {
      alignment: 'center',
      width: 6
    },
    3: {
      alignment: 'center',
      width: 6
    },
    4: {
      alignment: 'center',
      width: 6
    },
    5: {
      alignment: 'center',
      width: 6
    },
    6: {
      alignment: 'center',
      width: 6
    },
    7: {
      alignment: 'center',
      width: 6
    }
  }
};

const drawTable = (matrix, score) => {
  termkit.clear();
  termkit.hideCursor(true);
  neatStyle('CHOOSE \'ESC\', \'q\' OR \'CTRL+C\' TO QUIT', 'console', 0, 0, true, ['white', 'magenta']);
  neatStyle('UP DOWN LEFT RIGHT', 'console', 0, 0, false, ['white', 'magenta']);
  termkit.magenta();
  termkit.bold();
  termkit.brightWhite();
  console.log(center('   \u25B2    \u25BC    \u25C4    \u25BA    \n\n\n', process.stdout.columns));
  console.log(center(table.table(matrix, config), process.stdout.columns));
  neatStyle('Score: ' + score, 'console', 1, 0, true, ['white', 'magenta']);
};

const neatStyle = (text, fontFace, letterSpace, lineHeight, space, gradArray) => {
  CFonts.say(text, {
    font: fontFace,
    align: 'center',
    colors: ['magenta'],
    background: 'transparent',
    letterSpacing: letterSpace,
    lineHeight: lineHeight,
    space: space,
    maxLength: '100',
    gradient: gradArray,
    independentGradient: true,
    transitionGradient: true,
    env: 'node'
  });
};
const welcomeText = () => {
  termkit.clear();
  neatStyle('     \n2048\n     ', 'slick', 5, 0, true, ['magenta', 'red']);
  neatStyle('WELCOME TO 2048', 'console', 1, 0, false, ['magenta', 'red']);
  neatStyle('PLEASE CHOOSE A MENU!', 'console', 1, 0, true, ['white', 'magenta']);
};

const quitImmediate = () => {
  setImmediate(function () {
    termkit.clear();
    neatStyle('\nHOPE SEE YOU SOON!\nGOODBYE!!!\n', 'console', 2, 3, true, ['white', 'magenta']);
    termkit.hideCursor(false);
    termkit.grabInput(false);
  });
};

module.exports = {
  drawTable,
  neatStyle,
  welcomeText,
  quitImmediate
};
