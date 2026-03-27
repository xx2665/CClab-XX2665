let mic;
let sound1;
let sound2;
let sound3;
let x;
let speedX=3;
let s=50;
function setup() {
  createCanvas(400, 400);
  x=s/2
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  
  let level = mic.getLevel();
  let f = map(level,0,1,0,100);
  text(level,width/2,height/2);
  fill(0);
  circle(x,height/2,50);
  x += speedX*f;
  
  if (x > width) {
    speedX = -speedX;
    sound2.play();
  }
  if (x<0){
    speedX = -speedX;
    sound3.play();
  }
}
function preload(){
  sound1 = loadSound("sounds/NYUSH.mp3");
  sound2 = loadSound("sounds/beat.mp3");
  sound3 = loadSound("sounds/kick.mp3");
}
function mousePressed(){
  if (sound.isPlaying() == false) {
  sound1.play();
  } else {
    sound1.pause();
  }
}