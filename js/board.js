
let boardArray = [[]];

const boardWidth = canvasWidth / tileSize;
const boardHeight = canvasHeight / tileSize;


function initializeBoard() {
  for (let x = 0; x < boardWidth; x++) {
    boardArray[x] = [];
    for (let y = 0; y < boardHeight; y++) {
      boardArray[x][y] = 0;
    }
  }
}

function outOfBounds() {
  return snakeX < 0 || snakeX >= boardWidth
    || snakeY < 0 || snakeY >= boardHeight;
}

function updateBoard() {
  for (let x = 0; x < boardWidth; x++) {
    for (let y = 0; y < boardHeight; y++) {
      if (boardArray[x][y] > 0) {
        if (snakeX == x && snakeY == y) { resetGame(); }
        boardArray[x][y] -= 1;

      }
      if (x == snakeOldX && y == snakeOldY) {
        boardArray[x][y] = snakeLength;
      }
    }
  }
}

function drawBoard() {

  for (let x = 0; x < boardWidth; x++) {
    for (let y = 0; y < boardHeight; y++) {
      if (boardArray[x][y] >= 1) {
        drawSnake(x, y, snakeSize);
      }
    }
  }
}
