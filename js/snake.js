let snakeX = 0;
let snakeY = 0;
let snakeOldX = 0;
let snakeOldY = 0;
let snakeSize = 32;
let snakeLength = 2;

let direction = 1;

function snakeBehavior()
{
    snakeOldX = snakeX;
    snakeOldY = snakeY;

    if (direction == 1) { snakeY -= 1; }
    if (direction == 2) { snakeY += 1; }
    if (direction == 3) { snakeX -= 1; }
    if (direction == 4) { snakeX += 1; }
    if (outOfBounds()) { resetGame() }
}

function drawSnake(x, y, size) {

    draw.fillStyle = "white";
    draw.fillRect(x * size, y * size, size, size);
}

function snakeControls(e)
{
    if (e.code == "ArrowUp") { direction = 1 }
    if (e.code == "ArrowDown") { direction = 2 }
    if (e.code == "ArrowLeft") { direction = 3 }
    if (e.code == "ArrowRight") { direction = 4 }
}