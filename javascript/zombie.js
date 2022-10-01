class Zombie {
    constructor(image) {
        this.img = new Image()
        this.img.src = image
        this.x = canvas.width
        this.y = randomInt(250, 350)
        this.w = 80
        this.h = 80
        this.walkSpeed = 3
      //  this.zombie1 = "./images/zombie1.png"
       // this.zombie2 = "./images/zombie2.png"
    }

    drawZombie = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    moveZombie = () => {
        this.x = this.x - this.walkSpeed
    }
    // zombieImage = () => {
    //     if (randomInt(1, 2) === 1) {
    //         return "./images/zombie1.png"
    //     } else {
    //         return "./images/zombie2.png"
    //     }
    // }


}