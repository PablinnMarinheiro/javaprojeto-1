
function setup() {
  createCanvas(800, 500);
  background("red");
}

function draw() {
  fill("rgb(0,0,0)")
  stroke("rgb(6,17,100))");
  if (mouseIsPressed)
  ellipse(mouseX, mouseY,30, 50);
}
