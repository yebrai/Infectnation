class Game {
  constructor(fps) {
    this.fondo = new Image();
    this.fondo.src = "./images/ground.png";
    this.wall = new Image();
    this.wall.src = "./images/walldown.png";
    this.isGameOn = true;
    this.soldier = new Soldier();
    this.bulletArr = [];
    this.zombieArr = [];
    this.jetArr = [];
    this.napalm = [];
    this.fire = new Fire();
    this.jetPilot = new Jetpilot(144);
    this.frames = 0;
    this.health = 0;
    this.kills = 0;
    this.isGameOn = true;
    this.timeLeft = 20;
    setInterval(this.timeLeftCount, 1000)
    this.fps = fps;
    this.youWin = "url('./images/backgrounds/win.jpg')";
    this.youLose = "url('./images/backgrounds/zombiewin.jpg')";
    this.jetCall = false;
    this.infernolvl = false;
    this.fpsCount = 0;
    //sounds
    this.shotSound = new Audio("./audio/shoot.wav");
    this.jetSound = new Audio("./audio/jet.wav");
  }
  

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvasElement.width, canvasElement.height);
  };
  drawWall = () => {
    ctx.drawImage(this.wall, 850, 0, -200, canvasElement.height);
  };

  timeLeftCount = () => {
    this.timeLeft--
  }

  addBullet = () => {
    if (this.frames > 20 && gameScreen.style.display !== "none") {
      this.bulletArr.push(new Bullet());
      gameObj.shotSound.play();
      gameObj.shotSound.volume = 0.03;
    }
  };
  //Add zombies random with diferent image
  addZombie = (respawnMode) => {
    if (this.frames % respawnMode === 0) {
      switch (randomInt(1, 3)) {
        case 1:
          this.zombieArr.push(new Zombie("./images/zombie1.png"));
          break;
        case 2:
          this.zombieArr.push(new Zombie("./images/zombie2.png"));
          break;
        case 3:
          this.zombieArr.push(new Zombie("./images/zombie3.png"));
          break;
      }
    }
  };

  addIntervalJet = () => {
    if (this.frames === 0 || this.frames % 880 === 50) {
      this.jetArr.push(new Jet(randomInt(100, 500)));
      this.jetSound.volume = 0.03;
      this.jetSound.play();
    }
  };
  addNapalm = () => {
    this.napalm.push(new Napalm());
  };

  //hitBoxes and splice elements selected from array
  napalmDamage = () => {
    if (this.napalm.length === 0) {
      return;
    }
    this.zombieArr.forEach((eachZombie, indiceZombie) => {
      this.napalm.forEach((eachNapalm) => {
        if (
          eachNapalm.x < eachZombie.x + eachZombie.w &&
          eachNapalm.x + eachNapalm.w > eachZombie.x &&
          eachNapalm.y < eachZombie.y + eachZombie.h &&
          eachNapalm.h + eachNapalm.y > eachZombie.y
        ) {
          this.zombieArr.splice(indiceZombie, 1);
          this.kills++;
        }
      });
    });
  };

  zombieAttack = () => {
    this.zombieArr.forEach((eachZombie) => {
      if (
        this.soldier.x - 40 < eachZombie.x + eachZombie.w &&
        this.soldier.x - 40 + this.soldier.w > eachZombie.x &&
        this.soldier.y < eachZombie.y + (eachZombie.h - 30) &&
        this.soldier.h - 30 + this.soldier.y > eachZombie.y
      ) {
        this.gameOver();
      }
    });
  };

  zombieHitbox = () => {
    //guard clause
    if (this.bulletArr.length === 0) {
      return; // Stop the function
    }
    this.zombieArr.forEach((eachZombie, indiceZombie) => {
      this.bulletArr.forEach((eachNapalm, indiceBullet) => {
        if (
          eachNapalm.x < eachZombie.x + eachZombie.w &&
          eachNapalm.x + eachNapalm.w > eachZombie.x &&
          eachNapalm.y < eachZombie.y + eachZombie.h &&
          eachNapalm.h + eachNapalm.y > eachZombie.y
        ) {
          this.zombieArr.splice(indiceZombie, 1);
          this.bulletArr.splice(indiceBullet, 1);
          this.kills++;
        }
      });
    });
  };
  //print texts on canvas
  drawNapalmRemains = () => {
    ctx.font = "20px Bungee Spice";
    let scoreStr = `Napalm Remains: ${napalmRemains}`;
    ctx.fillText(scoreStr, 10, 30);
  };

  drawnPilotMessage = () => {
    if (this.jetCall !== true) {
      return;
    } else {
      ctx.font = "20px QTMilitary";
      let pilotMessage = `copied, we are on our way!`;
      ctx.fillText(pilotMessage, canvas.width * 0.3, 80);
      ctx.fillStyle = "white";
      if (this.frames % (this.fps * 1.5) === 0) {
        this.jetCall = false;
        this.jetPilot.jetPilotImg = false;
      }
    }
  };

  zombieWin = () => {
    for (let i = 0; i < this.zombieArr.length; i++) {
      if (this.zombieArr.length !== 0 && this.zombieArr[i].x < -20) {
        this.health++;
        if (this.health >= 5) {
          this.gameOver();
        }
        //Withdraw zoombie passed width
        this.zombieArr.shift();
      }
    }
  };
  //controls for endGame
  gameOver = () => {
    this.isGameOn = false;
    dieGif.style.display = "block";
    canvasElement.style.display = "none";
    let loseTimeout = setTimeout(this.gameOverTimeout, 1500);
  };

  gameOverTimeout = () => {
    endGame(this.youLose, "You Lose", "rgb(150 31 17)", "Zombie Control");
    dieGif.style.display = "none";
    canvasElement.style.display = "block";
  };

  soldierWin = () => {
    if (this.timeLeft <= 0) {
      this.isGameOn = false;
      this.winGame();
    }
  };
  //controls for win game
  winGame = () => {
    this.isGameOn = false;
    winGif.style.display = "block";
    canvasElement.style.display = "none";
    let winTimeout = setTimeout(this.winGameTimeout, 1500);
  };

  winGameTimeout = () => {
    endGame(this.youWin, "You Win", "darkblue", "Highscore Hero");
    winGif.style.display = "none";
    canvasElement.style.display = "block";
  };

  infernoMode = () => {
    if (this.infernolvl === true) {
      this.addZombie(2);
    } else {
      this.addZombie(this.timeLeft);
    }
  };

  //recursion
  gameLoop = () => {
    this.frames++;
    // Clean canvas for make animation.
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    // Actions or movements.
    healthScore.innerText = this.health;
    killScore.innerText = this.kills;
    totalKills.innerText = this.kills;
    rescueTime.innerText = this.timeLeft;
    this.zombieAttack();
    this.zombieWin();
    this.soldierWin();
    this.zombieHitbox();
    this.napalmDamage();
    // Draw elements.
    this.drawFondo();
    this.drawWall();
    this.fire.multiImage();
    this.infernoMode();
    this.zombieArr.forEach((eachZombie) => {
      eachZombie.drawZombie();
      eachZombie.moveZombie();
      eachZombie.fpsRenderSpeed()
    });
    this.soldier.drawSoldier();
    this.bulletArr.forEach((eachBullet) => {
      eachBullet.drawBullet();
      eachBullet.shotSpeed();
    });

    this.drawNapalmRemains();
    this.napalm.forEach((eachNapalm) => {
      if (this.napalm.length !== 0) {
        eachNapalm.drawNapalm();
        eachNapalm.napalmExpand();
      }
    });
    this.addIntervalJet();
    this.jetArr.forEach((eachJet) => {
      if (this.jetArr.length !== 0) {
        eachJet.drawJet();
        eachJet.drawShadowJet();
      }
    });
    this.drawnPilotMessage();
    this.jetPilot.drawJetpilot();
    // Recursion control
    if (this.isGameOn) {
      requestAnimationFrame(() => this.gameLoop());
    }
  };
}
