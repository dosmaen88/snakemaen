
function titleControls(e) {

  if (e.code == "ArrowUp") { resetGame(); gameStateCurrent = "game" }
}
function titleUpdate() {
  return
}

function titleRender() {
  blank();

  draw.font = "50px monospace";
  draw.fillStyle = "White"
  draw.fillText("SNAKEMAEN", 140, 60);

  draw.font = "16px monospace";
  draw.fillText("Use the arrow keys to move", 10, 170)
  draw.fillText("Collect the apple to get bigger!", 10, 190)

  draw.fillText("Press Arrow Key Up to Start!", 10, 210)
}
