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

// Draw the header, table(stringboard) and score
const drawTable = (matrix, score) => {
  termkit.reset();
  termkit.hideCursor(true);
  neatStyle('MAIN MENU: \'ESC\', \'q\'', 'console', 0, 0, true, ['#33E5BD', '#33E5BD']);
  neatStyle('UP DOWN LEFT RIGHT', 'console', 0, 0, false, ['#33E5BD', '#33E5BD']);
  termkit.brightWhite();
  console.log(center('   \u25B2    \u25BC    \u25C4    \u25BA    \n\n\n', process.stdout.columns));
  console.log(center(table.table(matrix, config), process.stdout.columns));
  neatStyle('Score: ' + score, 'console', 1, 0, true, ['#33E5BD', '#33E5BD']);
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
  termkit.reset();
  neatStyle('     \n2048\n     ', 'slick', 5, 0, true, ['#e5bd33', '#33E5BD']);
  neatStyle('PLEASE CHOOSE A MENU!', 'console', 1, 0, true, ['#e5bd33', '#33E5BD']);
};

const quitImmediate = () => {
  setImmediate(function () {
    termkit.reset();
    termkit.bold();
    neatStyle('GOODBYE', 'slick', 3, 3, true, ['#e5bd33', '#33E5BD']);
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
