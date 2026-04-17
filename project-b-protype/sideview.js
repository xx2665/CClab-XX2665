class Sideview {
    constructor(x, s){
        this.x = x
        this.y = height-100
        this.size = s
        this.speed = random(0.1, 0.5)
        this.accx = 0
        this.away = 0.3
        this.speed2 = 0
        //this.h = lerp(0, this.y, this.speed)
        this.h = random(30,height-300);
         this.h0 = this.h;
    }
    displayLine(){
        line(0, height-100, width, height-100)
    }
    displayBuilding(){
        push();
        translate(this.x, this.y)
        scale(1,-1)
        rect(0, 0, this.size, this.h)
        pop();
    }
    updateBuilding(){
        push()
        translate(this.x, this.y)
        scale(1,-1)
       
        if (this.h < this.h0*1.5){
             this.h = this.h + 2;
        }
        pop()
    }
    moveBuilding(){
        let d = dist(mouseX, mouseY, this.x, this.y)
        if (d < 50){
            this.accx = (mouseX - this.x)* -this.away
            this.speed2 += this.accx
        } 
        this.speed2 = this.speed2 * 0.9
        this.x += this.speed2
}
}