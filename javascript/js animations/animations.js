 //Animacion de titulo

  const intervalID = setInterval(changeColor, 100);

  function changeColor() {
  if (randomInt(1, 7) === 1) {
        infecnationLogo.style.color = "rgb(103, 10, 19)"
        } else {infecnationLogo.style.color = "rgb(190, 3, 20)"}
         
 }

 //setTimeOut


//  function countDown() {
//       timeLeft--
//       if (timeLeft <= 0) {
//             clearInterval()  
//       }
//  }

 function clearCountDown() {
      clearInterval(chronometerID)
 }
 
