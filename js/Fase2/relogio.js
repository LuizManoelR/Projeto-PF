
const mouseMoveHandler = (id) => (e) => {
    const movimX = () => { // Cuida da movimentação X
      const relativeX = e.clientX - canvas.offsetLeft; //Cria um X relativo ao tamanho do canvas, seja qualquer que seja
      if (relativeX > 0 && relativeX < canvas.width) { 
        return (relativeX - canvas.width / 2)
      }
    } 
    
    const movimY = () => { // Cuida da movimentação Y
      const relativeY = e.clientY - canvas.offsetLeft;
      if (relativeY > 0 && relativeY < canvas.height) {
        return (relativeY - canvas.height / 2)
      }
    }
  
    const rotate1 = parseInt(document.getElementById("seta1").style.rotate)
    const rotate2 = parseInt(document.getElementById("seta2").style.rotate)
    console.log(rotate1)
    if (rotate2 > -100 && rotate2 < -75) {
      console.log("isso aí")
      if (rotate1 > 85 && rotate1 < 95) {
        console.log("parabéns")
        document.getElementById("machadoEstado").style.display = "flex"
        // document.removeEventListener("mousemove", mouseMoveHandler("seta2"), false);
        // document.removeEventListener("mousemove", mouseMoveHandler("seta1"), false);
        document.getElementById(id + "Check").checked = 0
        document.getElementById("seta1" + "Check").style.display = "none"
        document.getElementById("seta2" + "Check").style.display = "none"
      }
    } 
    if (document.getElementById(id + "Check").checked == 1 ){
      const paddleX2 = movimX() // Recebe as cordenadas 
      const paddleY2 = movimY()
      
      // Desenha a linha reta do ponto central até o final
      ctx.beginPath()
      ctx.moveTo(400, 400)
      ctx.lineTo(paddleX2 + 400, paddleY2 + 400)
      const inc = Math.atan((paddleY2)/(paddleX2)) * (180/Math.PI) + 90
      if (paddleX2 >= 0){
        document.getElementById(id).style.rotate = inc + "deg"
      } else {
        document.getElementById(id).style.rotate = inc-180 + "deg"
      }
    }
  }

const comecarMove = () => {
    document.getElementById("seta1Check").checked = 0
    document.getElementById("seta2Check").checked = 0
      
    document.addEventListener("mousemove", mouseMoveHandler("seta2"), false); // Cria um "escutador de evento", ou seja, ele percebe todas alterações em um evento e reproduz uma função
    document.addEventListener("mousemove", mouseMoveHandler("seta1"), false); // Nesse caso, ele pega a movimentação do mouse e adiciona uma função com o argumento "seta1" e "seta2", respectivos div no html
}
    
  
  
  