class Jet {
  constructor(yPos) {
    this.img = new Image();
    this.img.src = "./images/jet.png";
    this.x = 0;
    this.y = yPos;
    this.w = 250;
    this.h = 250;
    this.speed = fps * 0.15;
    this.shadow = new Image();
    this.shadow.src = "./images/shadowjet.png";
  }

  drawJet = () => {
    ctx.drawImage(this.img, this.x - 100, this.y, this.w, this.h);
    this.x = this.x + this.speed;
  };
  drawShadowJet = () => {
    ctx.drawImage(
      this.shadow,
      this.x - 200,
      this.y - 80,
      this.w - 150,
      this.h - 150
    );
    this.x = this.x + this.speed;
  };
}
