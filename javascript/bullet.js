class Bullet {
    constructor()  {
        this.img = new Image()
        this.img.src = "./images/bullet.png"
        this.x = 0; 
        //this.y = 0 necesita ser la posy del soldier
        this.w = 50; 
        this.h = 50; 
        this.speed = 4
    }

    drawBullet =(yRespawn) => {
        ctx.drawImage(this.img, this.x + this.speed, yRespawn, this.w, this.h);
        this.x = this.x + this.speed
        
        
    }


}