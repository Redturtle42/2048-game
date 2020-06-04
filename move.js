/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file contains the navigation.

const EMPTY = '\n  \n';

// Run when you press up button
const up = (matrix) => {
  let count = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      // move
      if (matrix[y][x] === EMPTY) {
        for (let k = y + 1; k < matrix.length; k++) {
          if (matrix[k][x] !== EMPTY) {
            matrix[y][x] = matrix[k][x];
            matrix[k][x] = EMPTY;
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== EMPTY) {
        for (let l = y + 1; l < matrix.length; l++) {
          if (matrix[l][x] !== EMPTY) {
            if (matrix[y][x] === matrix[l][x]) {
              matrix[y][x] *= 2;
              count += matrix[y][x];
              matrix[l][x] = EMPTY;
            }
            break;
          }
        }
      }
    }
  }
  return count;
};

// Run when you press down button
const down = (matrix) => {
  let count = 0;
  for (let y = matrix.length - 1; y > 0; y--) {
    for (let x = 0; x < matrix[y].length; x++) {
      // move
      if (matrix[y][x] === EMPTY) {
        for (let k = y - 1; k >= 0; k--) {
          if (matrix[k][x] !== EMPTY) {
            matrix[y][x] = matrix[k][x];
            matrix[k][x] = EMPTY;
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== EMPTY) {
        for (let l = y - 1; l >= 0; l--) {
          if (matrix[l][x] !== EMPTY) {
            if (matrix[y][x] === matrix[l][x]) {
              matrix[y][x] *= 2;
              count += matrix[y][x];
              matrix[l][x] = EMPTY;
            }
            break;
          }
        }
      }
    }
  }
  return count;
};

// Run when you press right button
const right = (matrix) => {
  let count = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = matrix[y].length - 1; x > 0; x--) {
      // move
      if (matrix[y][x] === EMPTY) {
        for (let k = x - 1; k >= 0; k--) {
          if (matrix[y][k] !== EMPTY) {
            matrix[y][x] = matrix[y][k];
            matrix[y][k] = EMPTY;
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== EMPTY) {
        for (let n = x - 1; n >= 0; n--) {
          if (matrix[y][n] !== EMPTY) {
            if (matrix[y][x] === matrix[y][n]) {
              matrix[y][x] *= 2;
              count += matrix[y][x];
              matrix[y][n] = EMPTY;
            }
            break;
          }
        }
      }
    }
  }
  return count;
};

// Run when you press left button
const left = (matrix) => {
  let count = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      // move
      if (matrix[y][x] === EMPTY) {
        for (let m = x + 1; m < matrix[y].length; m++) {
          if (matrix[y][m] !== EMPTY) {
            matrix[y][x] = matrix[y][m];
            matrix[y][m] = EMPTY;
            break;
          }
        }
      }
      // merge
      if (matrix[y][x] !== EMPTY) {
        for (let n = x + 1; n < matrix[y].length; n++) {
          if (matrix[y][n] !== EMPTY) {
            if (matrix[y][x] === matrix[y][n]) {
              matrix[y][x] *= 2;
              count += matrix[y][x];
              matrix[y][n] = EMPTY;
            }
            break;
          }
        }
      }
    }
  }
  return count;
};

module.exports = {
  up,
  down,
  right,
  left
};
