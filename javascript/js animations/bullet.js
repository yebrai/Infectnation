class Bullet {
    constructor()  {
        this.img = new Image()
        this.img.src = "./images/bullet.png"
        this.x = 90; 
        this.y = bulletRespawn
        //this.y = 0 necesita ser la posy del soldier
        this.w = 30; 
        this.h = 30; 
        this.speed = 5

    }

    drawBullet =() => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    shotSpeed = () => {
        this.x = this.x + this.speed
    }

}