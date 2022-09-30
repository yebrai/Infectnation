
// no logro implkementar el tiro, aparece automatico pero tiene que ser al pulsar space

const canvasElement = document.querySelector("#canvas")
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen")
const gameScreen = document.querySelector("#game-screen")
const loserScreen = document.querySelector("#loser-screen")
const startButton = document.querySelector("#start-button")


let gameObj
//mantener pantallas fuera del start game
gameScreen.style.display= "none"
loserScreen.style.display= "none"

const startGame = () => {
  startScreen.style.display = "none"
  loserScreen.style.display = "none"
  gameScreen.style.display= "flex"
  gameObj = new Game()
  gameObj.gameLoop()

}


const loseGame = () => {

}

startButton.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
    if (gameObj !== undefined) {
        if(event.code === "ArrowUp" && gameObj.soldier.y > 0) {
            gameObj.soldier.y = gameObj.soldier.y - 10
            
        } else if (event.code === "ArrowDown" && gameObj.soldier.y < canvasElement.height - gameObj.soldier.h) {
            gameObj.soldier.y = gameObj.soldier.y + 10
        }
    }
})

window.addEventListener("keydown", (event) => { 
    if (gameObj !== undefined) {
        if (event.code === "Space") {
        //No logro implementar el tiro    gameObj.bullet.drawBullet(this.soldier.y)
            console.log("shoot")
            
        }
    }
})
