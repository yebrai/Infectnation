class Soldier {

    constructor () {
        this.img = new Image()
        this.img.src ="./images/soldier1ant.png"
        this.x = 0; 
        this.y = canvasElement.height * 0.5; 
        this.w = 100; 
        this.h = 100; 
    }


    drawSoldier = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        
    }



}