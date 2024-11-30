const mouseMoveHandler = (id) => (e) => {

    const movimX = () => { // Cuida da movimentação X
      const relativeX = e.clientX - canvas.offsetLeft; //Cria um X relativo ao tamanho do canvas, seja qualquer que seja
      if (relativeX > 0 && relativeX < document.getElementById("fase2").clientWidth) { //Se mouse está dentro do canvas
        return (relativeX - document.getElementById("fase2").clientWidth / 2) // Retorna a posição de X
      }
    } 
    
    const movimY = () => { // Cuida da movimentação Y (A mesma ideia do movimX)
      const relativeY = e.clientY - canvas.offsetTop;
      if (relativeY > 0 && relativeY < document.getElementById("fase2").clientHeight) {
        return (relativeY - (document.getElementById("fase2").clientHeight/2))
      }
    }
   
  
    const rotate1 = parseInt(document.getElementById("seta1").style.rotate) // Transforma em número as rotações
    const rotate2 = parseInt(document.getElementById("seta2").style.rotate)
    if (rotate2 > -100 && rotate2 < -75) { // Verifica se a seta2 (Min) está na posição correta
      if (rotate1 > 85 && rotate1 < 95) { // Verifica se a seta1 (Horas) está na posição correta
        document.getElementById("machadoEstado").style.display = "flex" // Coloca o machado em visualização do jogador
        document.getElementById("portarelogio").style.display= "none"
        // document.removeEventListener("mousemove", mouseMoveHandler("seta2"), false);
        // document.removeEventListener("mousemove", mouseMoveHandler("seta1"), false);
        document.getElementById(id + "Check").checked = 0
        document.getElementById("seta1" + "Check").style.display = "none" // Faz o botão que seleciona a seta sumir
        document.getElementById("seta2" + "Check").style.display = "none"
      }
    } 
    if (document.getElementById(id + "Check").checked == 1 ){
      const paddleX2 = movimX() // Recebe as cordenadas 
      const paddleY2 = movimY()
      
      // Desenha uma linha reta do ponto central até o ponteiro do mouse
      ctx.beginPath()
      ctx.moveTo("650", "365")
      // ctx.lineTo(paddleX2 + 200, paddleY2 + 200)
      ctx.lineTo(paddleX2 + 600, paddleY2 + 600)
      ctx.strokeStyle = '#ff0000';
      // ctx.stroke();

      const inc = Math.atan((paddleY2 )/(paddleX2)) * (180/Math.PI) + 90 // Faz o cálculo do coeficiente angular entre esses dois pontos, transforma em graus e corrige para a posição correta
      if (paddleX2 >= 0){ // Caso o mouse está na posição da direita
        document.getElementById(id).style.rotate = inc + "deg"
      } else { // Caso o mouse está na posição da esquerda
        document.getElementById(id).style.rotate = inc-180 + "deg" 
      }
    }
  }

const comecarMove = () => {      
    document.addEventListener("mousemove", mouseMoveHandler("seta2"), false); // Cria um "escutador de evento", ou seja, ele percebe todas alterações em um evento e reproduz uma função
    document.addEventListener("mousemove", mouseMoveHandler("seta1"), false); // Nesse caso, ele pega a movimentação do mouse e adiciona uma função com o argumento "seta1" e "seta2", respectivos div no html
}
   
// Pega o tamanho da tela do usuário 
const telaWidth = document.getElementsByClassName("bg")[0].clientWidth 
const telaHeight = document.getElementsByClassName("bg")[0].clientHeight

// Pega o tamanho da seta já definida de acordo com o tamanho da tela, caso celular = 200px, caso computador = 400px 
const setasWidth = (telaWidth > 1000) ? 400:200
const setasHeight = (telaWidth > 1000) ? 400:200

//Posiciona no Centro a primeira seta e a segunda
document.getElementsByClassName("setas")[0].style.left = ((telaWidth - setasWidth)/2) + "px" 
document.getElementsByClassName("setas")[0].style.top = (telaHeight - setasHeight)/2 + "px"

document.getElementsByClassName("setas")[1].style.left = ((telaWidth - setasWidth)/2) + "px"
document.getElementsByClassName("setas")[1].style.top = (telaHeight - setasHeight)/2 + "px"
  
  