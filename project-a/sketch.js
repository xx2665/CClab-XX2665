/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let x, y;
let h = 0;
let u = 100;
let f = 0.01;
let count = 0;
let vineAngle = 0;
let n = 200;
let locationA, locationB;
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  locationA = random(100, 200);
  locationB = random(150, 350);
  locationC = random(250, 350);
  locationD = random(150, 350);
  locationE = random(400, 500);
  locationF = random(150, 350);
  locationG = random(550, 650);
  locationH = random(150, 350);
  locationL = random(650, 750);
  locationM = random(150, 350);
}

function draw() {
  background(220);
  drawCreature(width / 2, height / 2);
}

function drawCreature(x, y) {
  push();
  backgroundDraw();
  translate(width / 2, height / 2);
  drawArm(150);
  drawBody();
  pop();
  if (count >= 10) {
    push();
    translate(0, 0);
    growth(locationA, locationB);
    pop();
  }
  if (count >= 50) {
    push();
    translate(0, 0);
    growth(locationC, locationD);
    pop();
  }
  if (count >= 100) {
    push();
    translate(0, 0);
    growth(locationE, locationF);
    pop();
  }
  if (count >= 150) {
    push();
    translate(0, 0);
    growth(locationL, locationM);
    pop();
  }
}

function drawBody() {
  push();
  x = width / 2;
  y = height / 2;
  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    n = lerp(n, 600, 0.05);
    count = count + 1;
    console.log(count);
  } else {
    n = lerp(n, 200, 0.05);
  }
  for (let i = 0; i < n; i++) {
    if (mouseIsPressed) {
      h = (h + 1) % 100;
    }
    colorMode(HSB, 100);

    let R = map(5 * sin(frameCount * 0.1 + i * 0.05), -1, 1, 50, 100);
    let u = 0.3 * R * cos(frameCount * 0.01 + (i * n) / 10000);
    let v = 0.3 * R * sin(frameCount * 0.01 + (i * n) / 10000);
    let op = map(i, 0, n, 255, 0);
    stroke(h, 100, 100, op);
    noFill();
    circle(u, v, R * 0.1);
  }
  pop();
}

function drawArm(v) {
  colorMode(RGB);
  fill(107, 255, 71);
  noStroke();
  for (let angle = 0; angle < 2 * PI; angle += PI / 8) {
    u = 100 + 0.25 * u * sin(frameCount * 0.05);
    if (u < 100) {
      u = 100;
    }
    if (u == v) {
      rotate(angle);
      circle(v, v, 15);
    } else {
      rotate(angle);
      circle(u, v, 15);
    }
  }
}

function growth(x, y) {
  push();
  translate(x, y);
  let d = dist(mouseX, mouseY, x, y);
  if (d < 50) {
    n = lerp(n, 600, 0.05);
    count = count + 1;
    console.log(count);
  } else {
    n = lerp(n, 200, 0.05);
  }
  for (let i = 0; i < n; i++) {
    if (mouseIsPressed) {
      h = (h + 1) % 100;
    }
    colorMode(HSB, 100);

    let R = map(5 * sin(frameCount * 0.1 + i * 0.05), -1, 1, 50, 100);
    let u = 0.3 * R * cos(frameCount * 0.01 + (i * n) / 10000);
    let v = 0.3 * R * sin(frameCount * 0.01 + (i * n) / 10000);
    let op = map(i, 0, n, 255, 0);
    stroke(h, 100, 100, op);
    noFill();
    circle(u, v, R * 0.1);
  }
  pop();
}

function backgroundDraw() {
  colorMode(HSB, 100);
  background(0);
  let backgroundS = width / 50;
  let backgroundA = height / 20;
  for (
    let backgroundX = backgroundS / 2;
    backgroundX < width;
    backgroundX += 3*backgroundS
  ) {
    for (
      let backgroundY = backgroundA / 2;
      backgroundY < height;
      backgroundY += 3*backgroundA
    ) {
      let backgroundC1 = map(
        noise(frameCount * 0.01 + backgroundX * backgroundY),
        0,
        1,
        -100,100
      );
       let backgroundC2 = map(
        noise(frameCount * 0.01 + backgroundX * backgroundY),
        0,
        1,
        -100,100
      );
      let backgroundD = dist(mouseX, mouseY, backgroundX, backgroundY);
      if (backgroundD <= 100) {
        let backgroundS = map(mouseX, 100, 900, 10, 100);
        textSize(0.005*backgroundC1*0.01*backgroundD*0.3);
        colorMode(HSB,100)
        fill(backgroundS, 80, 80);
        text("1", backgroundX + backgroundC1, backgroundY + backgroundC2);
      } else {
        textSize(0.005 * backgroundC1 * backgroundD);
        colorMode(RGB)
        fill(166, 171, 255,40);
        text("0", backgroundX, backgroundY);
      }
    }
  }
}
