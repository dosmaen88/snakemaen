let gameStateCurrent = "title"
let gameStateNext = "blank";
let gameStateTransition = false;

let ticksLimit = 10;
let currentTicks = 0;

let score = 0;
let highScore = 10;

function resetGame() {
  initializeBoard();
  moveApple();
  snakeX = 9;
  snakeY = 9;
  snakeOldX = 9;
  snakeOldY = 9;
  snakeLength = 2
  score = 0
  highScore = getCookie("highScore")
}

function gameUpdate() {

  currentTicks += 1;

  if (currentTicks == ticksLimit) {
    currentTicks = 0;


    snakeBehavior();
    updateBoard();

    if (checkCollisionApple()) {
      moveApple()
      snakeLength += 1;
      coinCollectSFX[0].play();
      score += 1;
    }
  }
  checkHighScore();
}

function gameRender() {

  
  drawBoard();
  drawApple(appleX, appleY, snakeSize);
  drawSnake(snakeX, snakeY, snakeSize);
  drawGameUI();
}

function drawGameUI()
{
    draw.font = "16px monospace";
    draw.fillStyle = "White"
    draw.shadowColor = "black"
    draw.shadowBlur = 7
    draw.fillText("Score: " + score.toString(), 6, 16);
    draw.shadowBlur = 0;

    draw.font = "16px monospace";
    draw.fillStyle = "White"
    draw.shadowColor = "black"
    draw.shadowBlur = 7
    draw.fillText("HighScore: " + highScore.toString(), 100, 16);
    draw.shadowBlur = 0;

}

function checkHighScore()
{
    if (score > highScore)
        {
            highScore = score;
            setCookie("highScore", highScore, 365)
        }
}

function gameControls(e) {


    snakeControls(e)
    if (e.code == "KeyQ") { gameStateCurrent = "title" }
  }