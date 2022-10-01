
// implementar tiro, event con click llama a funcion addBullet > push bulletArr >forEach en recursion ¿Que falla?



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
    startScreen.style.display = "none"
    loserScreen.style.display = "flex"
    gameScreen.style.display= "none"
}

startButton.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
    if (gameObj !== undefined) {
        if(event.code === "KeyW" && gameObj.soldier.y > 0) {
            gameObj.soldier.y = gameObj.soldier.y - 10
            
        } else if (event.code === "KeyS" && gameObj.soldier.y < canvasElement.height - gameObj.soldier.h) {
            gameObj.soldier.y = gameObj.soldier.y + 10
        }
    }
})

window.addEventListener("click", (event) => { 
    if (gameObj !== undefined) {
        gameObj.addBullet()
            
            
        
    }
})
