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

const printMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      process.strout.write(matrix[i][j] + (j < matrix[i].length - 1 ? ' ' : '\r\n'));
    }
  }
};

/* const printMatrixV2 = (matrix) => {
  console.log(table.table(gameBoard));
} */

module.exports = {
  generateMatrix,
  fillMatrix,
  printMatrix
};
