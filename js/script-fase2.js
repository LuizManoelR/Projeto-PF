const canvas = document.getElementById("fase2");
const ctx = canvas.getContext("2d");
document.getElementById('direita').style.left = (canvas.width - 60) + "px" 
const img = new Image()


img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "./img/imgFundo/Fase2/0002.png"

const mudeImgSrc = (direcao, imagemEsq, imagemDir=0, salaAtual=0) => { //Altera a imagem principal e os botões
    //Altera a imagem de fundo
    if (direcao =="esquerda")  { //Se o parametro direção for == esquerda, gere uma imagem com o src especificado
        img.src = imagemEsq; 
    } 
    else { // Se não for, gere uma imagem para o caso de ser == direita
       img.src = imagemDir;
    }
   
    const proxSala = ("sala" + filterNome(img.src).reduce((acc, i) => acc + i)) // deve ter como resultado esse padrão "sala0001" ou "sala0002"
    if (salaAtual != 0) { // Se for igual a 0, quer dizer que a utilização da função não precisa modificar a salaAtual
        if (salaAtual == "0001-1") { // Único caso que pode dar bug
            document.getElementById(("sala" + "0001")).style.display = "none"
        } else {
            document.getElementById(("sala" + salaAtual)).style.display = "none" // Desaparece os botões em tela 
        }
        document.getElementById(proxSala).style.display = "flex" // E aparece os botões da próxima tela
    }

}

const background = (direcao) => { // Função para passar as imagens com click
    
    const imagemAtual = filterNome(img.src).reduce((acc, i) => acc + i) // Tira a formatação de link do nome
    
    if (imagemAtual == "0001" ) {
        mudeImgSrc(direcao, "./img/imgFundo/Fase2/0003.png", "./img/imgFundo/Fase2/0004.png", imagemAtual) // Muda a imagem de fundo seguindo os argumentos: Direção (Seja ela esquerda ou direita), Img Esquerda, Img Direita, Img Atual
    } else if (imagemAtual == "0002") {
        mudeImgSrc(direcao, "./img/imgFundo/Fase2/0004.png", "./img/imgFundo/Fase2/0003.png", imagemAtual)
    } else if (imagemAtual == "0003") {
        mudeImgSrc(direcao, "./img/imgFundo/Fase2/0002.png", "./img/imgFundo/Fase2/0001.png", imagemAtual)
    } else if (imagemAtual == "0004" ) {
        mudeImgSrc(direcao, "./img/imgFundo/Fase2/0001.png", "./img/imgFundo/Fase2/0002.png", imagemAtual)
    }    
}