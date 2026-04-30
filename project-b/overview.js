class Lines {
  constructor(){
    this.x1 = random([0, width])
    this.y1 = random(0, height)
    
    this.x3 = random(0, width)
    this.y3 = random([0, height])
    
    
    this.x12 = random(width)
    this.y12 = random(height)
    
    this.x22 = random(width)
    this.y22 = random(height)
    
    this.color = random(100)
    this.endx1 = this.x1
    this.endy1 = this.y1
    this.endx2 = this.x3
    this.endy2 = this.y3
    
    this.location = 0;
  }
  xlinedraw(){
    push();
    translate(0, this.location) 
    textSize(10)
    fill(255)
    text("Flip your hand to change to sideview", width/2-100, height/2-220)
    colorMode(HSB,100)
    stroke(this.color,100,100)
    if (this.x1 == 0){
      line(this.x1, this.y1, this.endx1, this.y1)
      line(this.x1, this.y1, this.x1, this.endy1)
    }else{
      line(this.x3, this.y3, this.endx2, this.y3)
      line(this.x3, this.y3, this.x3, this.endy2)
    }

    pop()
  }
  update(){
    this.endx1 = lerp(this.endx1, this.x12, 0.1)
    this.endy1 = lerp(this.endy1, this.y12, 0.1)
    this.endx2 = lerp(this.endx2, this.x22, 0.1)
    this.endy2 = lerp(this.endy2, this.y22, 0.1)
  }
}