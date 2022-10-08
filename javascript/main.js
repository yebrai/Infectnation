//canvas
const canvasElement = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
//Screens
const startScreen = document.querySelector("#splash-screen");
const introScreen = document.querySelector("#intro-screen");
const loserScreen = document.querySelector("#loser-screen");
const gameScreen = document.querySelector("#game-screen");
//Buttons
const introButton = document.querySelector(".save-us");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const infernoButton = document.querySelector("#inferno");
//Values
const healthScore = document.querySelector(".healths span");
const totalKills = document.querySelector("#loser-screen span");
const killScore = document.querySelector(".kills span");
const rescueTime = document.querySelector(".evacuation .value-time");
const userNameValue = document.querySelector("#listUserName"); // Name value pantalla final
const highscoreValue = document.querySelector("#highscore-value"); // Kills value pantalla final
//Texts
const endTittle = document.querySelector("#loser-screen h1");
const infecnationLogo = document.querySelector("#splash-screen h1");
const inputName = document.querySelector("#input-name");
const introText = document.querySelector(".intro-text");
//Songs, Gif
const fortunateSong = document.querySelector("#audioMain");
const dieGif = document.querySelector("#die-gif");
const winGif = document.querySelector("#win-gif");

let gameObj;
let bulletRespawn = 0;
let napalmRespawn = 0;
let napalmRemains = 3;
let introFrames = 0;
let fpsCount = 0;

//Out from Splash-screen
gameScreen.style.display = "none";
loserScreen.style.display = "none";
introScreen.style.display = "none";
highscoreValue.style.display = "none";

//local storage
const AddlocalStorage = () => {
  if (localStorage.getItem("kills") > gameObj.kills) {
    return;
  } else {
    localStorage.setItem("userName", inputName.value);
    localStorage.setItem("kills", gameObj.kills);
    extractLocalStorage();
  }
};

const extractLocalStorage = () => {
  userNameValue.innerText = localStorage.getItem("userName");
  highscoreValue.innerText = localStorage.getItem("kills") + " Kills";
};

let fps = 0
let testGoing = true

const framesRecursion = () => {
  if (testGoing === true) {
    fps++; // increase FPS until stop at 1 second.
    //console.log("counting frames"); // remove after testing.
    requestAnimationFrame(framesRecursion);
  }
};

const introGame = () => {
  introScreen.style.display = "flex";
  gameScreen.style.display = "none";
  loserScreen.style.display = "none";
  startScreen.style.display = "none";
  fortunateSong.play();
  fortunateSong.volume = 0.04;
  introButton.style.display = "none";

  const intervalStart = setInterval(disappearButton, 5000);
  const blinkingButton = setInterval(blinkingEnterButton, 700);
  const blinkingButtonTransparent = setInterval(blinkingEnterButtonTrans, 1400);
  introText.innerText = `${inputName.value} ${introText.innerText}`;
};

const startGame = (lvl) => {
  startScreen.style.display = "none";
  loserScreen.style.display = "none";
  introScreen.style.display = "none";
  gameScreen.style.display = "flex";
  gameObj = new Game(fps);
  gameObj.gameLoop();
  napalmRemains = 3;
  fortunateSong.play();
  fortunateSong.volume = 0.04;
  gameObj.infernolvl = lvl;
  let soldierAnimationMove1 = setInterval(soldierMove1, 200);
  let soldierAnimationMove2 = setInterval(soldierMove2, 400);
  let soldierAnimationMove3 = setInterval(soldierMove3, 600);
  let soldierAnimationMove4 = setInterval(soldierMove4, 800);
};

const endGame = (background, text, color, fontfamily) => {
  AddlocalStorage();
  extractLocalStorage();
  startScreen.style.display = "none";
  loserScreen.style.display = "flex";
  introScreen.style.display = "none";
  gameScreen.style.display = "none";
  loserScreen.style.backgroundImage = background;
  endTittle.innerText = text;
  endTittle.style.color = color;
  endTittle.style.fontFamily = fontfamily;
  fortunateSong.pause();
  gameObj.infernolvl = false;
  napalmRemains = 3;
  highscoreValue.style.display = "block";
};

const infernoMode = () => {
  startGame(true);
  napalmRemains = randomInt(1, 100);
  gameObj.timeLeft = 59;
};

// cooldown button for change
const detectFPS = () => {
  setTimeout(() => {
    testGoing = false; // to stop recursion frame counter after 1 second.
    // * if starting game with button, unlock button here

    startButton.addEventListener("click", introGame);
  }, 1000);
};
introButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
infernoButton.addEventListener("click", infernoMode);


//fps detection functions call
window.addEventListener("load", () => {
  detectFPS();
  framesRecursion();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Enter" && gameObj === undefined) {
    introGame();
  }
  if (gameObj !== undefined) {
    if (event.code === "KeyW" && gameObj.soldier.y > 0) {
      gameObj.soldier.movementSoldier("up");
    } else if (
      event.code === "KeyS" &&
      gameObj.soldier.y < canvasElement.height - gameObj.soldier.h
    ) {
      gameObj.soldier.movementSoldier("down");
    } else if (event.code === "Space") {
      if (napalmRemains <= 0) {
        return;
      }
      napalmRespawn = gameObj.soldier.y;
      //adding cd on addNapalm
      let cooldownNapalm = setTimeout(gameObj.addNapalm, 500);
      gameObj.jetArr.push(new Jet(napalmRespawn));
      napalmRemains--;
      gameObj.jetCall = true;
      gameObj.jetPilot.jetPilotImg = true;
      gameObj.jetSound.volume = 0.04;
      gameObj.jetSound.play();
    }
  }
});

window.addEventListener("click", () => {
  if (gameObj !== undefined) {
    bulletRespawn = gameObj.soldier.y + 13;
    gameObj.addBullet();
    if (gameObj.bulletArr.length == !0) {
      let shootAnimationId = setInterval(soldierShooting, 100);
      let shootStopAnimationId = setInterval(soldierStop, 200);
    }
  }
});
