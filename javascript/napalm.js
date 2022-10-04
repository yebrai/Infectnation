class Napalm {
    constructor() {
        this.img = new Image()
        this.img.src = "./images/fire.png"
        this.x = 100;
        this.y = napalmRespawn  -140
        //this.y = 0 necesita ser la posy del soldier
        this.w = 250; 
        this.h = 250; 
        this.frames = 0
        this.fps = 0
    }


    drawNapalm = (y) => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        console.log(this.frames)
        this.frames++
        
    }

    napalmExpand = () => {
        if (this.frames % 30 === 0) {
            this.fps++
            this.x = this.x + 90
        }
    }

}