/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains UI and design contents.

const table = require('table');
const center = require('center-align');
const CFonts = require('cfonts');
const termkit = require('terminal-kit').terminal;

const draw = (matrix) => {
  termkit.clear();
  termkit.hideCursor(true);
  neatStyle('CHOOSE \'ESC\', \'q\' OR \'CTRL+C\' TO QUIT', 'console', 0, 0, true, ['white', 'magenta']);
  neatStyle('UP DOWN LEFT RIGHT', 'console', 0, 0, false, ['white', 'magenta']);
  termkit.magenta();
  termkit.bold();
  termkit.brightWhite();
  console.log(center('   \u25B2    \u25BC    \u25C4    \u25BA    \n\n\n', process.stdout.columns));
  console.log(center(table.table(matrix), process.stdout.columns));
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

const quitImmediate = () => {
  setImmediate(function () {
    termkit.clear();
    neatStyle('\nHOPE SEE YOU SOON!\nGOODBYE!!!\n', 'console', 2, 3, true, ['white', 'magenta']);
    termkit.grabInput(false);
    termkit.hideCursor(true);
  });
};
const quitLate = () => {
  setTimeout(function () {
    termkit.hideCursor(false);
    termkit.grabInput();
    termkit.clear();
    process.exit();
  }, 1000);
};

module.exports = {
  draw,
  neatStyle,
  quitImmediate,
  quitLate
};
