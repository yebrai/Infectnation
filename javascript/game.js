class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/ground.png";
    this.isGameOn = true;
    this.soldier = new Soldier();
    this.bulletArr = []
    this.zombie = new Zombie
    
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvasElement.width, canvasElement.height);
  };

  addBullet = () => {
    this.bulletArr.push(new Bullet)
    console.log("shoot")
  }

  //recursion
  gameLoop = () => {
   // console.log("test");
    //1. Limpiar canvas para animaciones
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    //2. Acciones y movimientos de elementos.

    //3. Dibujo de elementos.
    this.drawFondo();
    this.soldier.drawSoldier();
    this.bulletArr.forEach((eachBullet) => {
      eachBullet.drawBullet(this.soldier.y)
    })
    this.zombie.drawZombie()
    
    ////////////////// this.bullet.drawBullet(this.soldier.y)
    //4. control de la recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
