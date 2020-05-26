/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains the navigation.

// Run when you press up button
const up = (matrix) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      // move
      if (matrix[y][x] === ' ') {
        for (let k = y + 1; k < matrix.length; k++) {
          if (matrix[k][x] !== ' ') {
            matrix[y][x] = matrix[k][x];
            matrix[k][x] = ' ';
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== ' ') {
        for (let l = y + 1; l < matrix.length; l++) {
          if (matrix[l][x] !== ' ') {
            if (matrix[y][x] === matrix[l][x]) {
              matrix[y][x] *= 2;
              matrix[l][x] = ' ';
            }
            break;
          }
        }
      }
    }
  }
  return matrix;
};

// Run when you press down button
const down = (matrix) => {
  for (let y = matrix.length - 1; y > 0; y--) {
    for (let x = 0; x < matrix[y].length; x++) {
      // move
      if (matrix[y][x] === ' ') {
        for (let k = y - 1; k >= 0; k--) {
          if (matrix[k][x] !== ' ') {
            matrix[y][x] = matrix[k][x];
            matrix[k][x] = ' ';
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== ' ') {
        for (let l = y - 1; l >= 0; l--) {
          if (matrix[l][x] !== ' ') {
            if (matrix[y][x] === matrix[l][x]) {
              matrix[y][x] *= 2;
              matrix[l][x] = ' ';
            }
            break;
          }
        }
      }
    }
  }
  return matrix;
};

// Run when you press right button
const right = (matrix) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = matrix[y].length - 1; x > 0; x--) {
      // move
      if (matrix[y][x] === ' ') {
        for (let k = x - 1; k >= 0; k--) {
          if (matrix[y][k] !== ' ') {
            matrix[y][x] = matrix[y][k];
            matrix[y][k] = ' ';
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== ' ') {
        for (let n = x - 1; n >= 0; n--) {
          if (matrix[y][n] !== ' ') {
            if (matrix[y][x] === matrix[y][n]) {
              matrix[y][x] *= 2;
              matrix[y][n] = ' ';
            }
            break;
          }
        }
      }
    }
  }
  return matrix;
};

// Run when you press left button
const left = (matrix) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      // move
      if (matrix[y][x] === ' ') {
        for (let m = x + 1; m < matrix[y].length; m++) {
          if (matrix[y][m] !== ' ') {
            matrix[y][x] = matrix[y][m];
            matrix[y][m] = ' ';
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== ' ') {
        for (let n = x + 1; n < matrix[y].length; n++) {
          if (matrix[y][n] !== ' ') {
            if (matrix[y][x] === matrix[y][n]) {
              matrix[y][x] *= 2;
              matrix[y][n] = ' ';
            }
            break;
          }
        }
      }
    }
  }
  return matrix;
};

const getNewRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};

const genNewElements = (matrix) => {
  let x1 = getNewRandomNumber(matrix.length);
  let y1 = getNewRandomNumber(matrix.length);
  while (matrix[y1][x1] !== ' ') {
    x1 = getNewRandomNumber(matrix.length);
    y1 = getNewRandomNumber(matrix.length);
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] === ' ') {
        matrix[j][i] = ' ';
        matrix[y1][x1] = Math.round(Math.random() + 1) * 2;
      }
      console.log('x1:', x1, 'y1', y1);
      // console.log('j:', j, 'i', i);
    }
  }
};

module.exports = {
  up,
  down,
  right,
  left,
  genNewElements
};
