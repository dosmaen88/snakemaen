let appleX = 0;
let appleY = 0;

function checkCollisionApple() {
    return snakeX == appleX && snakeY == appleY;
  }
  
function moveApple() {
    appleX = getRandomInt(boardWidth);
    appleY = getRandomInt(boardHeight);
}

function drawApple(x, y, size) {

    draw.fillStyle = "yellow";
    draw.fillRect(x * size, y * size, size, size);
  }