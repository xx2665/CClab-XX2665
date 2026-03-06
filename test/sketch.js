let x, y;
let angle = 0;
function setup() {
  let canvas=createCanvas(400, 400);
  canvas.parent('p5-canvas-container')
  x = width/2;
  y = height/2;
}

function draw() {
  background(220,130,40);
  mouseOnCloud(100,100)
  mouseOnCloud(200,200)
  mousePressed()
  drawCloud(200,200,0.1)
  drawCloud(100,100,1)
}

function mousePressed(){
  if (mouseIsPressed==true){
    background(random(255),random(255),random(255))
  }
}

function drawCloud(cloudX, cloudY,cloudScale){
    push();
  translate(cloudX, cloudY);
  scale(cloudScale)
  rotate(map(sin(frameCount * 0.05), -1, 1, PI / 4, -PI / 4));

  //arms
  beginShape();
  let lineLength = 70;
  noFill();
  for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
    strokeWeight(10);
    let v = 10 * sin(frameCount * 0.1 - i);
    vertex(i, v);
    //circle(i, v, 5);
  }
  endShape();

  //around face
  fill(255);
  noStroke();
  for (let angle = 0; angle < 2 * PI; angle += PI / 5) {
    push();
    rotate(angle);
    fill(255);
    circle(100 / 2 - 8, 0, 30);
    pop();
  }

  //face
  circle(0, 0, 100);
  fill(0);
  circle(0 - 30, 0, 5);
  circle(0 + 30, 0, 5);
  arc(0, 0, 30, 30, 0, PI);
  pop();
  
}

function mouseOnCloud(cloudX, cloudY){
  let d=dist(mouseX,mouseY,cloudX, cloudY)
  if (d<50){
    background(220,140,20)
  }else{
    background(220,100,50)
  }
}