/* >>>>>>>>>>>>>>> 2048 GAME <<<<<<<<<<<<<<< */

// This file only contains only map related data.

// Generate 2DArray
const generateMatrix = (rows, columns) => {
  const matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns);
  }
  return matrix;
};

const getRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};

// Fill newly generated 2DArray with random numbers.
const fillMatrix = (matrix) => {
  let x1 = getRandomNumber(matrix.length);
  let x2 = getRandomNumber(matrix.length);
  let y1 = getRandomNumber(matrix.length);
  let y2 = getRandomNumber(matrix.length);
  while (x1 === x2 && y1 === y2) {
    x1 = getRandomNumber(matrix.length);
    x2 = getRandomNumber(matrix.length);
    y1 = getRandomNumber(matrix.length);
    y2 = getRandomNumber(matrix.length);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = ' ';
      matrix[x1][y1] = 2;
      matrix[x2][y2] = 2;
    }
  }
};

// Put 2 or 4 number to a random empty place.
const genNewElements = (matrix) => {
  let x1 = getRandomNumber(matrix.length);
  let y1 = getRandomNumber(matrix.length);
  while (matrix[y1][x1] !== ' ') {
    x1 = getRandomNumber(matrix.length);
    y1 = getRandomNumber(matrix.length);
  }
  matrix[y1][x1] = Math.round(Math.random() + 1) * 2;
};

module.exports = {
  generateMatrix,
  fillMatrix,
  genNewElements
};
