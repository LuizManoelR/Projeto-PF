const canvas = document.getElementById("jogoPrincipal");
const ctx = canvas.getContext("2d");

document.getElementById('inventariogeral').style.display = "none" // Evita que o inventário apareça antes de iniciar o jogo

const img = new Image(); //Constante para gerar uma imagem

const IniciarJogo = () => {
    
    const inventario = new Image();

    document.getElementById('direita').style.left = (canvas.width - 60) + "px"
    // document.getElementById('direita').style.top = (canvas.width - 60) + "px"

    document.getElementById("start").style.display = "none" 
    document.getElementById('direita').style.display = "flex" 
    document.getElementById('esquerda').style.display = "flex"

    // document.getElementById('inventariogeral').style.display = "flex" // Para que o inventário apareça depois de iniciar o jogo
    // document.getElementById('inv0').style.display = "none" // Evita que os itens apareça antes de pegá-los
    
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    
    // inventario.onload = () => {
    //     ctx.drawImage(inventario, canvas.width - 679, canvas.height - 170, canvas.width * 0.6, canvas.height * 0.15);
    // }

    img.src = "./img/imgFundo/0001.png";
    // inventario.src = "./img/inventario/inventario.png";
}

const filterNome = (lista) => {
    const helper = ([x, ...xs]) => {
        if (x === undefined) {
            return []
        } else {
            if (xs.indexOf("/") != -1) {
                return [...helper(xs)]
            } else {
                return [x, ...helper(xs)]
            }
        }
    }
    const listaAtual = lista.toString().split("")
    return helper(listaAtual)
}

const mudeImgSrc = (direcao, imagemEsq, imagemDir) => { //Altera a imagem principal
    if (direcao =="esquerda")  { //Se o parametro direção for == esquerda, gere uma imagem com o src especificado
        img.src = imagemEsq; 
    } 
    else { // Se não for, gere uma imagem para o caso de ser == direita
       img.src = imagemDir;
   }
}

const background = (direcao) => { // Função para passar as imagens com click
    const imagemAtual = filterNome(img.src).reduce((acc, i) => acc + i)
    // console.log(imagemAtual)

    if (imagemAtual == "/0001.png") {
        mudeImgSrc(direcao, "./img/imgFundo/0004.png", "./img/imgFundo/0003.png")
    } else if (imagemAtual == "/0002.png") {
        mudeImgSrc(direcao, "./img/imgFundo/0003.png", "./img/imgFundo/0004.png")
    } else if (imagemAtual == "/0003.png" ) {
        mudeImgSrc(direcao, "./img/imgFundo/0001.png", "./img/imgFundo/0002.png")
    } else if (imagemAtual == "/0004.png" ) {
        mudeImgSrc(direcao, "./img/imgFundo/0002.png", "./img/imgFundo/0001.png")
    } 

}

// Funções de Inventários
const atualizarElementoINV = (posicao, idBotaoAntigo) => { // Atualiza o inventário com o item que o jogador acabou de pegar
    document.getElementById(idBotaoAntigo).style.display = "none" // Some o item do ambiente 
    document.getElementById('inv' + posicao).style.display = "flex" // Aparece o item no inventário
}

const existeElementoINV = (posicao) => { //Verifica que se o item está no inventário
    if (document.getElementById('inv' + posicao).style.display == "flex") { 
        return 1
    }
}

const checkBoxVisual = (posicao) => { // Serve principalmente para mexer no visual do botão de cada item individualmente
    const checkBox = document.getElementById('inv' + posicao + "Check")
    if (checkBox.checked == 1) {
        checkBox.style.opacity = '20%' 
    } else {
        checkBox.style.opacity = '0%' 
    }
}

const usarElementoINV = (posicao, idBotaoAntigo) => { // Função utilizada para checar se os requisitos foram cumpridos 
    console.log(document.getElementById('inv' + posicao + "Check").checked)
    if (existeElementoINV(posicao) == 1) { // Verifica se o item existe
        if (document.getElementById('inv' + posicao + "Check").checked == 1) { // Verifica se o mesmo está selecionado 
            document.getElementById(idBotaoAntigo).style.display = "none" // Some o item do ambiente 
            document.getElementById('inv' + posicao).style.display = "none" // Some o item no inventário
            console.log("Parabéns")
        }
    } else { // Caso não possua o item (Isso precisa olhar quando estiver com mais itens)
        document.getElementById('inv' + posicao + "Check").checked = 0 
    }
}


IniciarJogo()