class Bullet {
    constructor()  {
        this.img = new Image()
        this.img.src = "./images/bullet.png"
        this.x = 50; 
        //this.y = 0 necesita ser la posy del soldier
        this.w = 30; 
        this.h = 30; 
        this.speed = 40

    }

    drawBullet =(yRespawn) => {
        ctx.drawImage(this.img, this.x + 40, yRespawn +30, this.w, this.h);
    }

    shotSpeed = () => {
        this.x = this.x + this.speed
    }

}