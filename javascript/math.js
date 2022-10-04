

let randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
let fpsRenderice = (variableReferencia, fps, contador) => {
  variableReferencia++
  if (variableReferencia % fps === 0) {
    contador++
  } return contador
}
