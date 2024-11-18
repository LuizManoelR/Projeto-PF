// Essa é uma ferramente de desenvolvedor, ela serve para determinar a posição correta de um botão, dado pelo desenvolvedor.
// Ela foi criada (utilizando funções de outros js já feitos aqui) para ajudar na posição das imagens do puzzle da moldura.


// Esse é o modelo do botão chamador do helper (transforme id do comecarHelper() pelo id da imagem que você quer determinar a posição)
{/* <button onclick="comecarHelper(id)" style="height: 50px; width: 60px; border: 2px solid red; left: 0; top: 0; position: fixed;"></button> */}


const calcularVH = () => {
    const heightTela = document.getElementsByClassName("bg")[0].clientHeight
    return(heightTela/100)     
}

calcularHeighImagemVH = (heighImg, heighImgOriginal=1080) => {
    // heighImg = É o heigh do print original
    // heighImgOriginal = È o heigh da foto que foi tirado a print
    // heighTela = heigh da tela atualmente

    const heighTela = document.getElementsByClassName("bg")[0].clientHeight // ex.:954

    // É uma regra de três para saber qual é o heigh seguindo a proporção original na heigh novo da tela (heighTela)
    const heighProporcaoTela = (heighTela * heighImg) / heighImgOriginal

    return (heighProporcaoTela/calcularVH()) // Vai retornar o valor seguindo o padrão vw
}

const calcularVW = () => {
    const widthTela = document.getElementsByClassName("bg")[0].clientWidth
    return(widthTela/100)   
}

calcularWidthImagemVW = (widthImg, widthImgOriginal=1920) => {
    // widthImg = É o width do print original
    // widthImgOriginal = È o width da foto que foi tirado a print
    // widthTela = Width da tela atualmente

    const widthTela = document.getElementsByClassName("bg")[0].clientWidth // ex.:1277

    // É uma regra de três para saber qual é o width seguindo a proporção original na width novo da tela (widthTela)
    const widthProporcaoTela = (widthTela * widthImg) / widthImgOriginal

    return (widthProporcaoTela/calcularVW()) // Vai retornar o valor seguindo o padrão vw
}


const mouseMoveHandlerHelper = (id) => (e) => {
    const movimX = () => { // Cuida da movimentação X
        const relativeX = e.clientX - canvas.offsetLeft; //Cria um X relativo ao tamanho do canvas, seja qualquer que seja
        if (relativeX > 0 && relativeX < document.getElementById("fase2").clientWidth) { //Se mouse está dentro do canvas
          return (relativeX - (document.getElementById("fase2").clientWidth/2)) // Retorna a posição de X
        }
      } 
      
      const movimY = () => { // Cuida da movimentação Y (A mesma ideia do movimX)
        const relativeY = e.clientY - canvas.offsetTop;
        if (relativeY > 0 && relativeY < document.getElementById("fase2").clientHeight) {
          return (relativeY - (document.getElementById("fase2").clientHeight/2))
        }
      }

    document.getElementById(id).style.left = movimX() - (document.getElementById(id).clientWidth/2) + "px"
    document.getElementById(id).style.top = movimY() - (document.getElementById(id).clientHeight/2) + "px"

    const width = calcularWidthImagemVW(61)
    const heigh = calcularHeighImagemVH(76)

    console.log("left: " + (parseInt(document.getElementById(id).style.left) / calcularVW()) + " | top: " + (parseInt(document.getElementById(id).style.top) / calcularVH()))
    console.log("res: " + width + "x" + heigh)
}

const comecarHelper = (id) => {
    console.log("Começando helper com id: " + id)
    document.addEventListener("mousemove", mouseMoveHandlerHelper(id), false);
}
