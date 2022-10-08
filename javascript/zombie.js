class Zombie {
  constructor(image) {
    this.img = new Image();
    this.img.src = image;
    this.x = canvas.width;
    this.y = randomInt(1, canvasElement.height - 70);
    this.w = 80;
    this.h = 80;
    this.walkSpeed = randomInt(fps * 0.04, fps * 0.05);
  }

  drawZombie = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  moveZombie = () => {
    this.x = this.x - this.walkSpeed;
  };
}
