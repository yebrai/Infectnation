// implantar localStorage!!

//end game modificado para saltarse el juego


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
const inputName = document.querySelector("#input-name")
const introText = document.querySelector(".intro-text")
const infernoButton = document.querySelector("#inferno")
const dieGif = document.querySelector("#die-gif")
const winGif = document.querySelector("#win-gif")

const endNameValue = document.querySelector("#username-value") // Name value pantalla final
const endNameValue2 = document.querySelector("#username-value2") // Name value pantalla final
const endNameValue3 = document.querySelector("#username-value3") // Name value pantalla final
const highscoreValue = document.querySelector("#highscore-value") // Kills value pantalla final
const highscoreValue2 = document.querySelector("#highscore-value2") // Kills value pantalla final
const highscoreValue3 = document.querySelector("#highscore-value3") // Kills value pantalla final
//css tocado, ojo

let gameObj
let bulletRespawn = 0
let napalmRespawn = 0
let napalmRemains = 3
let introFrames = 0
let fpsCount = 0

//mantener pantallas fuera del start game
gameScreen.style.display= "none"
loserScreen.style.display= "none"
introScreen.style.display= "none"
highscoreValue.style.display= "none"

//test

let testArr= [highscoreValue, highscoreValue2, highscoreValue3]

//local storage
 const AddlocalStorage = () => {
    if (localStorage.getItem("kills") > gameObj.kills) {
        return
    }else {
     localStorage.setItem("userName", inputName.value)
     localStorage.setItem("kills", gameObj.kills)
    }
 }

 const extractLocalStorage = (valueName, valueHighscore) => {
    valueName.innerText = localStorage.getItem("userName")
    valueHighscore.innerText = localStorage.getItem("kills")
 } 



const introGame = () => {
    introScreen.style.display= "flex"
    gameScreen.style.display= "none"
    loserScreen.style.display= "none"
    startScreen.style.display = "none"
    fortunateSong.play()
    fortunateSong.volume = 0.1
    introButton.style.display = "none"
    gameLoopIntro()
    const intervalStart = setInterval(disappearButton, 5000)
    const blinkingButton = setInterval(blinkingEnterButton, 700)
    const blinkingButtonTransparent = setInterval(blinkingEnterButtonTrans, 1400)
    introText.innerText = `${inputName.value} ${introText.innerText}`

    
}


const startGame = (lvl) => {
  startScreen.style.display = "none"
  loserScreen.style.display = "none"
  introScreen.style.display= "none"
  gameScreen.style.display= "flex"
  gameObj = new Game(144)
  gameObj.gameLoop()
  napalmRemains = 3
  fortunateSong.play()
  fortunateSong.volume = 0.1
  gameObj.infernolvl = lvl
  let soldierAnimationMove1 = setInterval(soldierMove1, 150)
  let soldierAnimationMove2 = setInterval(soldierMove2, 300)
  let soldierAnimationMove3 = setInterval(soldierMove3, 450)
  let soldierAnimationMove4 = setInterval(soldierMove4, 600)


  

}



const endGame = (background, text, color, fontfamily) => {
    AddlocalStorage()
    extractLocalStorage(endNameValue, highscoreValue)
    startScreen.style.display = "none"
    loserScreen.style.display = "flex"
    introScreen.style.display= "none"
    gameScreen.style.display= "none"
    loserScreen.style.backgroundImage = background
    endTittle.innerText = text
    endTittle.style.color = color
    endTittle.style.fontFamily = fontfamily
    fortunateSong.pause()
    gameObj.infernolvl = false
    napalmRemains = 3
    highscoreValue.style.display= "block"


}

const infernoMode = () => {
    startGame(true)
    napalmRemains = randomInt(1, 100)
}

startButton.addEventListener("click", introGame)
introButton.addEventListener("click", startGame)
restartButton.addEventListener("click", startGame)
infernoButton.addEventListener("click", infernoMode)

 let fpsRender = (fps) => {
     introFrames++
     if (introFrames % fps === 0) {
       fpsCount++
     }
 }

let gameLoopIntro = () => {
    fpsRender(144)

requestAnimationFrame(gameLoopIntro);

}


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
            gameObj.jetPilot.jetPilotImg = true
            gameObj.jetSound.volume = 0.1
            gameObj.jetSound.play()

        }

    }
})

window.addEventListener("click", () => { 
    if (gameObj !== undefined) {
        bulletRespawn = gameObj.soldier.y +13
        gameObj.addBullet()
        if (gameObj.bulletArr.length ==! 0) {
        let shootAnimationId = setInterval(soldierShooting, 100)
        let shootStopAnimationId = setInterval(soldierStop, 200)
        
    }
    }
})
