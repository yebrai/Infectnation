class Soldier {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/soldier1-1.png";
    this.imgsoldier = "./images/soldier1-1.png";
    this.imgShooting = "./images/soldiershooting.png";
    this.x = 0;
    this.y = canvasElement.height * 0.5;
    this.w = 100;
    this.h = 100;
    this.speed = fps *0.20;
  }

  drawSoldier = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movementSoldier = (upOrDown) => {
    if (fps < 30) {
      this.speed = fps *0.45
    }
    if (upOrDown === "up") {
      this.y = this.y - this.speed;
    } else if (upOrDown === "down") {
      this.y = this.y + this.speed;
    }
  };
}
