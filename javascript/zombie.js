class Zombie {
    constructor() {
        this.img = new Image()
        this.img.src = "./images/zombie1.png"
        this.x = canvas.width
        this.y = randomInt(250, 350)
        this.w = 90
        this.h = 90
        this.walkSpeed = 5
    }

    drawZombie = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        this.x = this.x - this.walkSpeed
    }


}