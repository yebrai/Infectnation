class Bullet {
    constructor()  {
        this.img = new Image()
        this.img.src = "./images/bullet.png"
        this.x = 0; 
        //this.y = 0 necesita ser la posy del soldier
        this.w = 5; 
        this.h = 5; 
        this.speed = 5
    }

    drawBullet =(yRespawn) => {
        ctx.drawImage(this.img, this.x + this.speed, yRespawn, this.w, this.h);
        
        
        
    }


}