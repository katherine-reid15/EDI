function setup() {//runs once
  createCanvas(720, 720);
  background(200, 200, 200);
}

function draw() {//runs in a loop
  fill(255, 0, 0);
  strokeWeight(8);
  translate(60, 60);

  for(var x = 0; x < 600; x = x + 300) {
    quad  (0, 0,
          300, 0,
          300, 300,
          0, 300);
  }
}
