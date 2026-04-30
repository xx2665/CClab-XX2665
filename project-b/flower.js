class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.n = random(200, 600);
    this.color = random(100);
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(0.2);    for (let i = 0; i < this.n; i++) {
      colorMode(HSB, 100);
      let R = map(5 * sin(frameCount * 0.1 + i * 0.05), -1, 1, 50, 100);
    let u = 0.3 * R * cos(frameCount * 0.01 + (i * this.n) / 10000);
    let v = 0.3 * R * sin(frameCount * 0.01 + (i * this.n) / 10000);
    let op = map(i, 0, this.n, 255, 0);
    stroke(this.color, 100, 100, op);
    noFill();
    circle(u, v, R * 0.1);
  }
  pop();
}
}