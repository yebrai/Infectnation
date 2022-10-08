class Napalm {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/fire.png";
    this.x = 100;
    this.y = napalmRespawn - 140;
    this.w = 250;
    this.h = 250;
    this.frames = 0;
  }

  drawNapalm = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.frames++;
  };
//for napalm "Jumps"
  napalmExpand = () => {
      if (this.frames % 20 === 0) {
      this.x = this.x + 90;
    }
  };
}
