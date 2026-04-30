class Sideview {
    constructor(x, img) {
        this.x = x
        this.img = img;
        this.y = height - 10
        this.size = this.img.width*0.3;
        this.speed = random(0.1, 0.5)
        this.accx = 0
        this.away = 0.3
        this.speed2 = 0
        
        //this.h = lerp(0, this.y, this.speed)
        this.h = this.img.height * 0.3;
        this.h0 = this.h;
        this.location = height;

    }
    displayLine() {
        push();
        translate(0, this.location)
        rect(0, height - 10, width, 10)
        pop();
    }
    displayBuilding() {
        push();
        translate(0, this.location)
        textSize(10)
        text("Flip your hand to change to overview", width / 2 - 100, height / 2 - 220)
        push();
        translate(this.x, this.y)
        scale(1, -1)
        image(this.img, 0, 0, this.size, this.h)
        //rect(0, 0, this.size, this.h)
        pop();
        pop();
    }
    updateBuilding() {
        push()
        translate(this.x, this.y)
        scale(1, -1)

        if (this.h < this.h0 * 1.5) {
            this.h = this.h + 2;
        }
        pop()
    }
    moveBuilding() {
        let d = dist(mouseX, mouseY, this.x, this.y)
        if (d < 50) {
            this.accx = (mouseX - this.x) * -this.away
            this.speed2 += this.accx
        }
        this.speed2 = this.speed2 * 0.9
        this.x += this.speed2
    }
}