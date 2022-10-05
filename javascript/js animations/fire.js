class Fire{
    constructor () {
        this.img = new Image()
        this.img.src = "./images/fire/fire1.png"
        this.x = canvas.width * 0.7
        this.y = canvasElement.height * 0.2
        this.w = 100
        this.h = 100
        this.frames = 0
        this.imgFps = 1
    }

    drawFire = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    multiImage = () => {
     this.frames++
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
      //ctx.drawImage(this.img, canvas.width * 0.62, canvasElement.height * 0.25, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.56, canvasElement.height * 0.36, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.84, canvasElement.height * 0.08, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.73, canvasElement.height * 0.04, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.39, canvasElement.height * 0.65, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.70, canvasElement.height * 0.60, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.35, canvasElement.height * 0.09, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.3, canvasElement.height * 0.62, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.45, canvasElement.height * 0.44, this.w, this.h)
      ctx.drawImage(this.img, canvas.width * 0.75, canvasElement.height * 0.74, this.w, this.h)
     for (let i = 0; i  < canvasElement.height; i= i +75) {
    //     ctx.drawImage(this.img, canvas.width * 0.9, i, this.w, this.h)
         ctx.drawImage(this.img, canvas.width * 0.9, i, this.w, this.h)
     }
     if (this.frames % 10 === 0) {
         this.imgFps++
         if (this.imgFps >= 13) {
             this.imgFps = 1
         }
     }
     this.img.src = "./images/fire/fire"+ this.imgFps +".png"
    }
}