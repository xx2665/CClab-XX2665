let sound=[]
let x=[]
let y=[]
let img


function preload(){
  for(let i=1; i<9; i++){
    img=loadImage("images/asterisk.png")   
    sound.push(loadSound("my-sounds/0"+i+".mp3"))
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCircle()
  for(let i=0; i<x.length; i++){
    drawCircle(x[i],y[i])
  }
}

function mousePressed(){
  x.push(mouseX)
  y.push(mouseY)
  let index=floor(map(mouseX,0,width,0,sound.length))
  sound[index].play()
}

function drawCircle(u, v){
  fill(0)
  tint(0,0,255)
  imageMode(CENTER)
  image(img,u,v,img.width/2,img.height/2)
  
}

