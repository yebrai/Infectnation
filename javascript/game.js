class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/ground.png";
    this.wall= new Image()
    this.wall.src = "./images/walldown.png"
    this.isGameOn = true;
    this.soldier = new Soldier();
    this.bulletArr = [];
    this.zombieArr = [];
    this.jetArr = [];
    this.frames = 0;
    this.health = 3;
    this.isGameOn = true;
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvasElement.width, canvasElement.height);
  };
  drawWall = () => {
    ctx.drawImage(this.wall, 850, 0, -200, canvasElement.height);
  }

  addBullet = () => {
    if(this.frames > 20) {
    this.bulletArr.push(new Bullet());
    console.log("fire");
   }
  };
  addZombie = () => {
    if (this.frames % 40 === 0) {
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

  addIntervalJet = () => {
    if (this.frames === 100 || this.frames % 380 === 0){
     this.jetArr.push(new Jet)
      console.log("jet")
  }
  }

  zombieAttack = () => {
    this.zombieArr.forEach((eachZombie) => {
      if (
        (this.soldier.x -40) < eachZombie.x + eachZombie.w &&
        (this.soldier.x -40) + this.soldier.w > eachZombie.x &&
        this.soldier.y < eachZombie.y + (eachZombie.h -30) &&
        (this.soldier.h -30) + this.soldier.y > eachZombie.y
      ) {
        this.gameOver();
      }
    });
  };

  // zombieHitbox = () => {
  //   this.bulletArr.forEach((eachBullet) => {
  //     if (
  //       this.eachBullet.x < this.zombieArr.x + this.zombieArr.w &&
  //       this.eachBullet.x + this.eachBullet.w > this.zombieArr.x &&
  //       this.eachBullet.y < this.zombieArr.y + this.zombieArr.h &&
  //       this.eachBullet.h + this.eachBullet.y > this.zombieArr.y
  //     ) {
  //       // Collision
  //       console.log("Colision");
  //     }
  //   })
  // }

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
    //console.log(this.frames);
    this.frames++;
    // console.log("test");
    //1. Limpiar canvas para animaciones
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    //2. Acciones y movimientos de elementos.
    this.zombieAttack();
    this.zombieWin();
    //3. Dibujo de elementos.
    this.drawFondo();
    this.drawWall()
    this.addZombie();
    this.zombieArr.forEach((eachZombie) => {
      eachZombie.drawZombie();
      eachZombie.moveZombie();
    });
    this.soldier.drawSoldier();
    this.bulletArr.forEach((eachBullet) => {
      eachBullet.drawBullet(bulletRespawn);
      eachBullet.shotSpeed();
    });
    this.addIntervalJet()
    this.jetArr.forEach((eachJet) => {
      if(this.jetArr.length !== 0) {
      eachJet.drawJet()
      eachJet.drawShadowJet()
      }
    })

    ////////////////// this.bullet.drawBullet(this.soldier.y)
    //4. control de la recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
