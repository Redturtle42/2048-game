/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains UI and design contents.

const table = require('table');
const center = require('center-align');
const CFonts = require('cfonts');
const termkit = require('terminal-kit').terminal;

const draw = (matrix) => {
  console.log('\x1Bc');
  termkit.hideCursor(true);
  neatStyle('CHOOSE \'ESC\', \'q\' OR \'CTRL+C\' TO QUIT', 'console', 0, 0, true, ['white', 'magenta']);
  neatStyle('UP DOWN LEFT RIGHT', 'console', 0, 0, false, ['white', 'magenta']);
  termkit.magenta();
  termkit.bold();
  termkit.brightWhite();
  console.log(center('  \u21E7  \u21E9  \u21E6  \u21E8  \n\n\n', process.stdout.columns));
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
console.log('\x1Bc');
neatStyle('     \n2048\n     ', 'slick', 5, 0, false, ['magenta', 'red']);
neatStyle('WELCOME TO 2048!', 'console', 1, 0, true, ['white', 'magenta']);
neatStyle('PLEASE CHOOSE FROM THE MENU ITEMS BELOW!', 'console', 1, 0, true, ['white', 'magenta']);

module.exports = {
  draw,
  neatStyle
};
