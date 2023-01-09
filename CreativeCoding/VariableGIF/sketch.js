//create a program that enables us to customize the number of squares in a grid
let img;
function preload(){
  img = loadImage('assets/GraphicWeb.png');
}

function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
  background(255, 255, 255);
}

function draw() {//runs in a loop
  fill('olive');
  strokeWeight(1);
  var num = 20;
  var sideLen = windowWidth/num;

  for(var y = 0; y < windowWidth; y = y + sideLen) {
    for(var x = 0; x < windowWidth; x = x + sideLen) {
      image(img, x, y, windowWidth/num, windowWidth/num);
  }
}
}
