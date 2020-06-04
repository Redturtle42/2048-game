/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file will check if there are possible next move or merge.

const EMPTY = '\n  \n';

// Always checking if there are empty places.
const checkEmptyPlace = (matrix) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === EMPTY) {
        return true;
      }
    }
  }
  return false;
};

// Always checking if there are mergeable items.
const mergeable = (matrix) => {
  for (let y = 0; y < matrix.length - 1; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] !== EMPTY) {
        for (let l = y + 1; l < matrix.length; l++) {
          if (matrix[l][x] !== EMPTY) {
            if (matrix[y][x] === matrix[l][x]) {
              return true;
            }
            break;
          }
        }
      }
    }
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length - 1; x++) {
      if (matrix[y][x] !== EMPTY) {
        for (let n = x + 1; n < matrix[y].length; n++) {
          if (matrix[y][n] !== EMPTY) {
            if (matrix[y][x] === matrix[y][n]) {
              return true;
            }
            break;
          }
        }
      }
    }
  }
  return false;
};

module.exports = {
  checkEmptyPlace,
  mergeable
};
