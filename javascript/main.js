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

const userNameValue = document.querySelector("#listUserName") // Name value pantalla final

const highscoreValue = document.querySelector("#highscore-value") // Kills value pantalla final


//highscoreValue2.innerText = 22
//userNameValue2.innerText = "prueba"

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


//local storage
 const AddlocalStorage = () => {
    if (localStorage.getItem("kills") > gameObj.kills) {
        return
    }else {
     localStorage.setItem("userName", inputName.value)
     localStorage.setItem("kills", gameObj.kills)
     extractLocalStorage()
    }
 }

 const extractLocalStorage = () => {
    userNameValue.innerText = localStorage.getItem("userName")
    highscoreValue.innerText = localStorage.getItem("kills") + " Kills"
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
  let soldierAnimationMove1 = setInterval(soldierMove1, 200)
  let soldierAnimationMove2 = setInterval(soldierMove2, 400)
  let soldierAnimationMove3 = setInterval(soldierMove3, 600)
  let soldierAnimationMove4 = setInterval(soldierMove4, 800)


  

}



const endGame = (background, text, color, fontfamily) => {
    AddlocalStorage()
    extractLocalStorage()
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
    gameObj.timeLeft = 59

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
    if (event.code === "Enter" && gameObj === undefined) {
        console.log("pulsada")
        introGame()
    }
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
