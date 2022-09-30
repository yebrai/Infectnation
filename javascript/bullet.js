class Bullet {
    constructor()  {
        this.img = new Image()
        this.img.src = ""
        this.x = 0; 
        //this.y = 0 necesita ser la posy del soldier
        this.w = 90; 
        this.h = 90; 
        this.speed = 5
    }

    drawBullet =(yRespawn) => {
        ctx.drawImage(this.img, this.x + this.speed, yRespawn, this.w, this.h);
        
    }


}