//Tocado la velocidad de los zombies para mantener los hz
// tocada la pantalla gameover para que se congele
// como hacer colision entre arr bull y arr zombie? Necesito comprobar las pos de ambos



const canvasElement = document.querySelector("#canvas")
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen")
const introScreen = document.querySelector("#intro-screen")
const introButton = document.querySelector(".save-us")
const gameScreen = document.querySelector("#game-screen")
const loserScreen = document.querySelector("#loser-screen")
const endTittle = document.querySelector("#loser-screen h1")
const startButton = document.querySelector("#start-button")
const restartButton = document.querySelector("#restart-button")
const infecnationLogo = document.querySelector("#splash-screen h1")
const healthScore = document.querySelector(".healths span")
const totalKills = document.querySelector("#loser-screen span")
const killScore = document.querySelector(".kills span")
const rescueTime = document.querySelector(".evacuation .value-time")
const fortunateSong = document.querySelector("#audioMain");

let gameObj
let bulletRespawn = 0
let napalmRespawn = 0
let napalmRemains = 3


//mantener pantallas fuera del start game
gameScreen.style.display= "none"
loserScreen.style.display= "none"
introScreen.style.display= "none"

const introGame = () => {
    introScreen.style.display= "flex"
    gameScreen.style.display= "none"
    loserScreen.style.display= "none"
    startScreen.style.display = "none"
    fortunateSong.play()
}



const startGame = () => {
  startScreen.style.display = "none"
  loserScreen.style.display = "none"
  introScreen.style.display= "none"
  gameScreen.style.display= "flex"
  gameObj = new Game(144)
  gameObj.gameLoop()
  napalmRemains = 3
  fortunateSong.play()


}


const endGame = (background, text, color, fontfamily) => {
    startScreen.style.display = "none"
    loserScreen.style.display = "flex"
    introScreen.style.display= "none"
    gameScreen.style.display= "none"
    loserScreen.style.backgroundImage = background
    endTittle.innerText = text
    endTittle.style.color = color
    endTittle.style.fontFamily = fontfamily
    fortunateSong.pause()
}

startButton.addEventListener("click", introGame)
introButton.addEventListener("click", startGame)
restartButton.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
    if (gameObj !== undefined) {
        if(event.code === "KeyW" && gameObj.soldier.y > 0) {
            gameObj.soldier.movementSoldier("up")
            
        } else if (event.code === "KeyS" && gameObj.soldier.y < canvasElement.height - gameObj.soldier.h) {
            gameObj.soldier.movementSoldier("down")
        } else if (event.code === "Space") {        
            if (napalmRemains <= 0) {
            return
            }
            napalmRespawn = gameObj.soldier.y
            gameObj.addNapalm()
            gameObj.jetArr.push(new Jet(napalmRespawn))
            napalmRemains--
            gameObj.jetCall = true

        }

    }
})

window.addEventListener("click", () => { 
    if (gameObj !== undefined) {
        bulletRespawn = gameObj.soldier.y +13
        gameObj.addBullet()
        
    }
})
