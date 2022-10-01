class Bullet {
    constructor()  {
        this.img = new Image()
        this.img.src = "./images/bullet.png"
        this.x = 50; 
        //this.y = 0 necesita ser la posy del soldier
        this.w = 50; 
        this.h = 50; 
        this.bulletSpeed = 40
        //this.openFire = false
    }

    drawBullet =(yRespawn) => {
       // if (this.openFire === true) {
        ctx.drawImage(this.img, this.x + this.bulletSpeed, yRespawn, this.w, this.h);
        this.x = this.x + this.bulletSpeed
  //  }
        
        
    }


}