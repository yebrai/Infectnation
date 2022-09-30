console.log("test")

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