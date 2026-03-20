let cat = [];
let ball = [];
let catMove = 0;
let ballMove = 0;


function preload() {
  for (let i = 1; i <= 6; i++) {
    cat.push(loadImage( i + ".JPG"));
  }
  for (let i = 7; i <= 19; i++) {
    ball.push(loadImage( i + ".JPG"));
  }
}

function setup() {
  createCanvas(800, 500);
  eraseBg(cat, 50);
  eraseBg(ball, 50);
  cat = crop(cat, 0, 0, 2048, 2048);
  ball = crop(ball, 0, 0, 2048, 2048);
}

function draw() {
  background(240, 231, 206);

  // cat
  if (mouseIsPressed){
    catMove = floor((frameCount / 22) % cat.length);   
      image(
      cat[catMove], 15, 0,
      cat[catMove].width * 0.25,
      cat[catMove].height * 0.25);
  } else {
    image(cat[0], 15, 0,
      cat[0].width * 0.25,
      cat[0].height * 0.25);
  }
  // ball
  if (mouseIsPressed){
    ballMove = floor((frameCount / 10) % ball.length);
  image(
    ball[ballMove],
    0,
    0,
    ball[ballMove].width * 0.25,
    ball[ballMove].height * 0.25
  );
  }

  


}

// You shouldn't need to modify these helper functions:

function crop(imgs, x, y, w, h) {
  let cropped = [];
  for (let i = 0; i < imgs.length; i++) {
    cropped.push(imgs[i].get(x, y, w, h));
  }
  return cropped;
}

function eraseBg(imgs, threshold = 10) {
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.loadPixels();
    for (let j = 0; j < img.pixels.length; j += 4) {
      let d = 255 - img.pixels[j];
      d += 255 - img.pixels[j + 1];
      d += 255 - img.pixels[j + 2];
      if (d < threshold) {
        img.pixels[j + 3] = 0;
      }
    }
    img.updatePixels();
  }
  // this function uses the pixels array
  // we will cover this later in the semester - stay tuned
}
