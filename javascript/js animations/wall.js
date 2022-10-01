class Wall {
    constructor () {
        this.img = new Image()
        this.img.src = "./images/walldown.png"
        this.x = canvas.width
        this.y = canvasElement.height - 100
        this.w = 80
        this.h = 80
    }


    drawWall = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

}