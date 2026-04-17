let sv = [];
let n = 20
let count = 0
let i = 0;


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for (let i = 0; i < n; i++) {
    let x = random(width);
    let s = random(20, 50);
    
  }
}

function draw() {
  background(220);
  count = count + 5
  for (let i = 0; i < sv.length; i++) {
    sv[i].displayBuilding();
    sv[i].displayLine();
    if (mouseIsPressed){
      sv[i].moveBuilding();
    }
    sv[i].updateBuilding();
  }
  if (frameCount % 20 == 0) {
    i = i + 1;
    sv.push(new Sideview(random(width), random(5, 50)));
  }

}