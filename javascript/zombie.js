class Zombie {
  constructor(image) {
    this.img = new Image();
    this.img.src = image;
    this.x = canvas.width;
    this.y = randomInt(1, canvasElement.height - 70);
    this.w = 80;
    this.h = 80;
    this.walkSpeed = randomInt(0.5, 1);
    this.directionUp = randomInt(1, 2);
    this.frame = 0;
    this.last = 0;
  }

  drawZombie = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  moveZombie = () => {
    this.x = this.x - this.walkSpeed;
  };
}
