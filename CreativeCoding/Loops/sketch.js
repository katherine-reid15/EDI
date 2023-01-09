function setup() {//runs once
  createCanvas(720, 720);
  background(200, 200, 200);
}

function draw() {//runs in a loop
  fill(255, 0, 0);
  strokeWeight(8);
  translate(60, 60);

for(var y = 0; y < 600; y = y + 300) {
  for(var x = 0; x < 600; x = x + 300) {
    quad  (x, y,
          300 + x, y,
          300 + x, 300 + y,
          x, 300 + y);
  }
}
}
