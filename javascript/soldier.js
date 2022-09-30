class Soldier {

    constructor () {
        this.img = new Image()
        this.img.src ="./images/soldier1.png"
        this.x = 0; 
        this.y = canvasElement.height * 0.5; 
        this.w = 90; 
        this.h = 90; 
    }


    drawSoldier = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        if (this.y > canvasElement.width) {}
    }



}