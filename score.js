const center = require('center-align');
const fs = require('fs');
const table = require('table');

const saveScore = (name, point) => {
  const fileIn = fs.readFileSync('highscore.csv', 'utf8');
  const rows = fileIn.split('\n');
  let highScore = [];
  for (const item of rows) {
    highScore.push(item.split(','));
  }

  highScore.push([name, point]);
  highScore.sort((a, b) => b[1] - a[1]);
  highScore = highScore.slice(0, 10);

  const fileOut = fs.createWriteStream('highscore.csv');
  fileOut.on('error', function (err) {
    console.log(err);
  });

  for (let i = 0; i < highScore.length; i++) {
    const row = highScore[i];
    fileOut.write(row.join(','));
    if (i < highScore.length - 1) {
      fileOut.write('\n');
    }
  }
  fileOut.end();
};

const printScores = () => {
  const file = fs.readFileSync('highscore.csv', 'utf8');
  const rows = file.split('\n');
  const highScore = [];
  for (const line of rows) {
    if (line.length < 3) { // Drop invalid lines
      continue;
    }
    highScore.push(line.split(','));
  }
  console.log(center(table.table(highScore), process.stdout.columns));
};

module.exports = {
  saveScore,
  printScores
};
