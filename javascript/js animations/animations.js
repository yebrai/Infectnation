 //Animacion de titulo

  const intervalID = setInterval(changeColor, 100);


  

  function changeColor() {
  if (randomInt(1, 7) === 1) {
        infecnationLogo.style.color = "rgb(103, 10, 19)"
        } else {infecnationLogo.style.color = "rgb(190, 3, 20)"}
     }
     
     // IntroButton
  function disappearButton() {
     introButton.style.display = "inline-block"
  
 }

 function blinkingEnterButton() {

     introButton.style.color = "white"
 }
 function blinkingEnterButtonTrans() {

     introButton.style.color = "transparent"
 }

 //Animation img soldier

function soldierShooting() {
    gameObj.soldier.img.src = "./images/soldiershooting.png"
}
function soldierStop() {
    gameObj.soldier.img.src = "./images/soldier1-1.png"
}

//animation move soldier

function soldierMove1() {
    gameObj.soldier.img.src = "./images/soldier1-1.png"
}
function soldierMove2() {
    gameObj.soldier.img.src = "./images/soldier1-2.png"
}
function soldierMove3() {
    gameObj.soldier.img.src = "./images/soldier1-3.png"
}
function soldierMove4() {
    gameObj.soldier.img.src = "./images/soldier1-4.png"
}

