let sv = [];
let l = []
let n = 20
let count = 0
let i = 0;

let f = [];
let blueSky = false;

let building = [];
let sky;

let handPose;
let video;
let hands = [];
let options = { maxHands: 1, flipped: true };


let dif = 0;
let p1;
let p_p1;
let topp = false;
let down = false;


function preload() {
  handPose = ml5.handPose(options);
  for (let i = 1;i<=34; i++){
    building.push(loadImage("building/" + i + ".png"));
  }
  sky = loadImage("sky.jpg");
}
function gotHands(results) {
  hands = results;
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for (let i = 0; i < n; i++) {
    let x = random(width);
    let s = random(20, 50);
  }
  video = createCapture(VIDEO);
  video.size(800, 500);
  video.hide();
  handPose.detectStart(video, gotHands);

  osc = new p5.TriOsc();
  envelope = new p5.Env();
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);
  envelope.setRange(1, 0);
}

function mousePressed() {
  f.push(new Flower(mouseX, mouseY));
}

function draw() {
  if (blueSky) {
    background(sky);
  } else {
    background(0);
  }
  count = count + 5

  for (let i = 0; i < f.length; i++) {
    f[i].display();
  }

  for (let i = 0; i < sv.length; i++) {
    sv[i].displayLine();
    if (mouseIsPressed) {
      sv[i].moveBuilding();
    }
    sv[i].updateBuilding();
    sv[i].displayBuilding();
  }
  if (frameCount % 50 == 0) {
    i = i + 1;
    sv.push(new Sideview(random(width), building[i%building.length]));
  }

  for (let i = 0; i < l.length; i++) {
    l[i].xlinedraw();
    l[i].update();
  }

  if (frameCount % 30 == 0) {
    i = i + 1;
    l.push(new Lines());
  }

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    p1 = hand.keypoints[20];
    if (p_p1 != undefined) {
      dif = p1.x - p_p1.x;
    }
  }

  if (dif > 70) {
    topp = true;
    down = false;
  } else if (dif < -70) {
    down = true;
    topp = false;
  }
  if (topp) {
    //background(255, 0, 0);
    for (let i = 0; i < l.length; i++) {
      l[i].location = height;
    }
    for (let i = 0; i < sv.length; i++) {
      sv[i].location = 0;
      blueSky = true;
      push();
      f.splice(i, f.length);
      pop();
    }
  }
  if (down) {
    //background(0,0, 0);
    for (let i = 0; i < l.length; i++) {
      l[i].location = 0;
    }
    for (let i = 0; i < sv.length; i++) {
      sv[i].location = height;
    }
    blueSky = false;
  }
  p_p1 = p1;
  console.log(l.location)
}
