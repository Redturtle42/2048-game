// Felfelé gomb megnyomásánál használjuk
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
          if (matrix[l][x] !== ' ' && matrix[y][x] === matrix[l][x]) {
            matrix[y][x] *= 2;
            matrix[l][x] = ' ';
            break;
          }
        }
      }
    }
  }
  return matrix;
};

// Lefelé gomb megnyomásánál használjuk
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
          if (matrix[l][x] !== ' ' && matrix[y][x] === matrix[l][x]) {
            matrix[y][x] *= 2;
            matrix[l][x] = ' ';
            break;
          }
        }
      }
    }
  }
  return matrix;
};

// Jobbra gomb megnyomásánál használjuk
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
          if (matrix[y][n] !== ' ' && matrix[y][x] === matrix[y][n]) {
            matrix[y][x] *= 2;
            matrix[y][n] = ' ';
            break;
          }
        }
      }
    }
  }
  return matrix;
};

// Barlra gomb megnyomásánál használjuk
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
          if (matrix[y][n] !== ' ' && matrix[y][x] === matrix[y][n]) {
            matrix[y][x] *= 2;
            matrix[y][n] = ' ';
            break;
          }
        }
      }
    }
  }
  return matrix;
};

module.exports = {
  up,
  down,
  right,
  left
};
