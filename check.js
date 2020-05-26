/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file will check if there are possible next move or merge.

const checkLastMove = (matrix) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === ' ') {
        break;
      } else if (matrix[y][x] !== ' ' && matrix[y][x] === matrix[y + 1][x]) {
        break;
      } else if (matrix[y][x] !== ' ' && matrix[y][x] === matrix[y][x + 1]) {
        break;
      } else if (matrix[y][x] !== ' ' && matrix[y][x] === matrix[y - 1][x]) {
        break;
      } else if (matrix[y][x] !== ' ' && matrix[y][x] === matrix[y][x - 1]) {
        break;
      } else {
        console.log('Sajnos nincs több lépésed!');
        break;
      }
    }
  }
};

module.exports = {
  checkLastMove
};
