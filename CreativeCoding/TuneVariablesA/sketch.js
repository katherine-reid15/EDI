//create a program that enables us to customize the number of squares in a grid
function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
  background(200, 200, 200);
}

function draw() {//runs in a loop
  fill(255, 0, 0);
  strokeWeight(1);
  var num = 10;
  var sideLen = windowWidth/num;

  for(var y = 0; y < windowWidth; y = y + sideLen) {
    for(var x = 0; x < windowWidth; x = x + sideLen) {
      quad  (x, y,
          sideLen + x, y,
          sideLen + x, sideLen + y,
          x, sideLen + y);
  }
}
}
