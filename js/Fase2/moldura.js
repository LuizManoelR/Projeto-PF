const verificadorPosicao = (id) => {
  const direitaMoldura = parseInt(document.getElementById("paisagemMoldura").clientWidth) - parseInt(document.getElementById(id).clientWidth)
  const baixoMoldura = parseInt(document.getElementById("paisagemMoldura").clientHeight) - parseInt(document.getElementById(id).clientHeight)

  const leftPX = (id == "imagensPedacos1") ? direitaMoldura:(id == "imagensPedacos2") ? 0: direitaMoldura
  const topPX = (id == "imagensPedacos1") ? 0:(id == "imagensPedacos2") ? baixoMoldura: baixoMoldura

  if ((parseInt(document.getElementById(id).style.left) == leftPX) && (parseInt(document.getElementById(id).style.top) == topPX)) {
    return 1
  } else {
    return 0
  }
}

const mouseMoveHandlerMoldura = (id) => (e) => {
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

    const imagemAtual = filterNome(img.src).reduce((acc, i) => acc + i) // Tira a formatação do texto para só 0001 no lugar de um link completo

    const direitaMoldura = parseInt(document.getElementById("paisagemMoldura").clientWidth) - parseInt(document.getElementById(id).clientWidth)
    const baixoMoldura = parseInt(document.getElementById("paisagemMoldura").clientHeight) - parseInt(document.getElementById(id).clientHeight)

    const leftID = parseInt(document.getElementById(id).style.left)
    const topID = parseInt(document.getElementById(id).style.top)

    const leftPX = (id == "imagensPedacos1") ? direitaMoldura:(id == "imagensPedacos2") ? 0: direitaMoldura
    const topPX = (id == "imagensPedacos1") ? 0:(id == "imagensPedacos2") ? baixoMoldura: baixoMoldura
    
    if (document.getElementById("inv2foto2").style.display == "flex") {
      document.getElementById("imagensPedacos1").style.display = "flex"
    } 
    if (document.getElementById("inv2foto3").style.display == "flex") {
      document.getElementById("imagensPedacos2").style.display = "flex"
    } 
    if (document.getElementById("inv2foto4").style.display == "flex") {
      document.getElementById("imagensPedacos3").style.display = "flex"
    } 

    const pedacoAtual = (id == "imagensPedacos1") ? "inv2foto2":(id == "imagensPedacos2") ? "inv2foto3": "imagensPedacos3"
    
    if (document.getElementById(id + "Check").checked == 1){
        // console.log("Id: " + id + "| Left: " + leftID + "| Top: " + topID)
        if ((leftID > (leftPX - 50)) && (leftID < (leftPX + 50))) {
            if ((topID > (topPX - 50)) && (topID < (topPX + 50))){
                document.getElementById(id).style.left = leftPX + "px"
                document.getElementById(id).style.top = topPX + "px"
                document.getElementById(id + "Check").checked = 1
                document.getElementById(id + "Check").style.opacity = 0
                document.getElementById(id).display = "none"
                if ((verificadorPosicao("imagensPedacos1") == 1) && (verificadorPosicao("imagensPedacos2") == 1) && (verificadorPosicao("imagensPedacos3") == 1)) {
                  if (imagemAtual ==  "0003-3") {
                    mudeImgSrc("esquerda", "./img/imgFundo/Fase2/0003-3-2.png")
                  }
                  document.getElementById("inv2").style.display = "none"
                  document.getElementById("virarPuzzle").style.display = "flex"
                  document.getElementById("sala0003-3-2").style.display = "flex"
                  document.getElementById("sala0003-3").style.display = "none"
                }
            } else {
                document.getElementById(id + "Check").style.opacity = "50%"
                document.getElementById(id).style.zIndex = 2
                document.getElementById(id).style.left = movimX() + (document.getElementById(id).clientWidth/2) + "px"
                document.getElementById(id).style.top = movimY() + (document.getElementById(id).clientHeight/2) + "px"
            }
        } else {
            document.getElementById(id + "Check").style.opacity = "50%"
            document.getElementById(id).style.zIndex = 2
            document.getElementById(id).style.left = movimX() + (document.getElementById(id).clientWidth/2) + "px"
            document.getElementById(id).style.top = movimY() + (document.getElementById(id).clientHeight/2) + "px"
        }
    } else {
        document.getElementById(id).style.zIndex = 1
    }
}

const mostrarPuzzleCompleto = () => {
  document.getElementById("virarPuzzle").style.display = "none"
  document.getElementById('bandejaMoldura').style.display = 'none'
  document.getElementById('paisagemMoldura').style.display = 'none'
}

const comecarMoveMoldura = (id) => {
  document.addEventListener("mousemove", mouseMoveHandlerMoldura("imagensPedacos1"), false);

}


document.addEventListener("mousemove", mouseMoveHandlerMoldura("imagensPedacos2"), false);
document.addEventListener("mousemove", mouseMoveHandlerMoldura("imagensPedacos3"), false);