class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/ground.png";
    this.isGameOn = true;
    this.soldier = new Soldier();
    this.bulletArr = [];
    this.zombieArr = [];
    this.frames = 0;
    this.health = 3;
    this.isGameOn = true;
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvasElement.width, canvasElement.height);
  };

  addBullet = () => {
    this.bulletArr.push(new Bullet());
    console.log("shoot");
  };

  addZombie = () => {
    if (this.frames % 80 === 0) {
      console.log("Zombie");
      switch (randomInt(1,3)) {
        case 1:
          this.zombieArr.push(new Zombie("./images/zombie1.png"));
          break;
        case 2:
          this.zombieArr.push(new Zombie("./images/zombie2.png"));
          break;
        case 3:
          this.zombieArr.push(new Zombie("./images/zombie3.png"));
          break;
       // case 4:
         // this.zombieArr.push(new Zombie("./images/zombie4.png"));
         // break;
      }
    }
  };

  zombieAttack = () => {
    this.zombieArr.forEach((eachZombie) => {
      if (
        (this.soldier.x -40) < eachZombie.x + eachZombie.w &&
        (this.soldier.x -40) + this.soldier.w > eachZombie.x &&
        this.soldier.y < eachZombie.y + eachZombie.h -30 &&
        this.soldier.h -30 + this.soldier.y > eachZombie.y
      ) {
        this.gameOver();
      }
    });
  };

  zombieWin = () => {
    if (this.zombieArr.length !== 0 && this.zombieArr[0].x < -20) {
      this.health--;
      console.log("el score es: ", this.health);
      if (this.health <= 0) {
       this.gameOver();
      }
      //sacar el zombie que pasa del width
      this.zombieArr.shift();
    }
  };
  gameOver = () => {
    this.isGameOn = false;
    loseGame()
  };

  //recursion
  gameLoop = () => {
    this.frames++;
    // console.log("test");
    //1. Limpiar canvas para animaciones
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    //2. Acciones y movimientos de elementos.
    this.zombieAttack();
    this.zombieWin();
    //3. Dibujo de elementos.
    this.drawFondo();
    this.addZombie();
    this.zombieArr.forEach((eachZombie) => {
      eachZombie.drawZombie();
      eachZombie.moveZombie();
    });
    this.soldier.drawSoldier();
    this.bulletArr.forEach((eachBullet) => {
      eachBullet.drawBullet(this.soldier.y);
      eachBullet.shotSpeed();
    });

    ////////////////// this.bullet.drawBullet(this.soldier.y)
    //4. control de la recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
