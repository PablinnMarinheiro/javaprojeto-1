function setup() {
  createCanvas(800, 500);
  background("rgb(255,255,255)");
}

function draw() {
  fill("black")
  stroke("rgb(25,0,255)");
  if (mouseIsPressed)
  ellipse(mouseX, mouseY,30, 50);
}
