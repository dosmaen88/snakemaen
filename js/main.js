/* DOSMAEN's simple snake game
 *
 */
function main() {
  update();
  blank();
  render();
}

function render() {
  
  if (gameStateCurrent == "game") {
    gameRender();
  }
  if (gameStateCurrent == "title") {
    titleRender();
  }


  
}

function blank() {
  draw.fillStyle = "#251627";
  draw.fillRect(0, 0, 640, 480);
}


function update() {
  if (gameStateCurrent == "game") {
    gameUpdate();
  }
  if (gameStateCurrent == "title") {
    titleUpdate();
  }
}


function control(e) {
  if (gameStateCurrent == "game") {
    gameControls(e);
  }

  if (gameStateCurrent == "title") {
    titleControls(e)
  }
}

document.addEventListener("keydown", control)

resetGame();

setInterval(main, 1000 / 60);
