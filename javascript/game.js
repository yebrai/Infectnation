
class Game {
    constructor() {
        this.fondo = new Image();
        this.fondo.src = "./images/ground.png";
        this.isGameOn = true
    }

    drawFondo = () => {
        ctx.drawImage(this.fondo, 0, 0, canvasElement.clientWidth, canvasElement.height)

    }


    //recursion
    gameLoop = () => {
        console.log("test")  //  console.log("ejecucion ok")
        //1. Limpiar canvas para animaciones
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
        //2. Acciones y movimientos de elementos.
        //3. Dibujo de elementos.
        this.drawFondo()
        //4. control de la recursion
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop)
        }
        
    }

}
