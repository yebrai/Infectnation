class Jetpilot{
    constructor (fps) {
        this.img = new Image()
        this.img.src = "./images/jetpilot.png"
        this.x = canvas.width * 0.2
        this.y = canvasElement.height * 0.1
        this.w = 100
        this.h = 100
        this.fps = fps
        this.frames = 0
        this.jetPilotImg = false
    }

    drawJetpilot = () => {
        this.frames++
        if (this.jetPilotImg !== true) {
            return
          } else {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }
    }

}