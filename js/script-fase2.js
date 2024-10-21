const canvas = document.getElementById("fase2");
const ctx = canvas.getContext("2d");
document.getElementById('direita').style.left = (canvas.width - 60) + "px" 
const img = new Image()

trilhasonora_2('play')
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

const inspecionar = (idAtual,idAtual2, idProx, imgProx) => {// função que cuida de sumir com os botões que estão na tela atualmente para aparecer os próximos botões
    // IdAtual = Botões que estão ATUAlMENTE sendo mostrados na tela
    // IdProx = Botões que devem ser os PRÓXIMOS a serem mostrados na tela
    const imagemProxima = filterNome(imgProx).reduce((acc, i) => acc + i)
    document.getElementById(idAtual).style.display = "none" // pegue o id atual e faça ele desaparecer, no caso, de um botão
    document.getElementById(idAtual2).style.display = "none" //faça o mesmo com o idAtual2
    
    mudeImgSrc('esquerda', imgProx) 
    document.getElementById(idProx).style.display = "flex"//faça o id do próximo elemento aparecer
    document.getElementById("baixo").style.display = "flex"//faça o id do próximo elemento aparecer
    document.getElementById("direita").style.display = "none"//faça o id do próximo elemento aparecer
    document.getElementById("esquerda").style.display = "none"//faça o id do próximo elemento aparecer
    if (idProx == "ponteiros") {
        comecarMove()
    }
    
}


const sair_inspecionar = () =>{

    const imagemAtual = filterNome(img.src).reduce((acc, i) => acc + i) // Tira a formatação do texto para só 0001 no lugar de um link completo

    document.getElementById('direita').style.display = "flex" // Faz aparecer os botões da direta e esquerda 
    document.getElementById('esquerda').style.display = "flex"
    document.getElementById('baixo').style.display = "none"

    console.log(imagemAtual)
    
    if (imagemAtual == "0002-1" || imagemAtual == "0002-2" || imagemAtual == "0002-3" || imagemAtual == "0002-1-2") { // Confere que imagem está sendo mostrada agora
        mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0002.png') // Muda para a imagem principal da sala
        document.getElementById('sala0002-1').style.display = "flex" // Volta com os botões da sala

        document.getElementById('sala0002-2').style.display = "flex" 
        document.getElementById('sala0002-3').style.display = "none" 
        document.getElementById('lanternaQuadro').style.display = "none" 
        

    }  else if (imagemAtual == "0003-1" || imagemAtual == "0003-2" || imagemAtual == "0003-3" || imagemAtual == "0003-4") {
        mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0003.png')
        document.getElementById('sala0003-1').style.display = "flex"
        document.getElementById('sala0003-3,4').style.display = "none"
        document.getElementById('sala0003-2').style.display = "flex"
        document.getElementById('pegarlanterna').style.display = "none" 
        
    } else if (imagemAtual == "0004-1" || imagemAtual == "0004-2" || imagemAtual == "0004-3" ) {
        mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0004.png')
        document.getElementById('sala0004-1').style.display = "flex"
        document.getElementById('sala0004-2').style.display = "flex"
        document.getElementById('sala0004-3').style.display = "none"
        document.getElementById('madeiraPorta').style.display = "none"
    
    } else if (imagemAtual == "0004-4") {
        mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0004-5.png')
        document.getElementById('sala0004-1').style.display = "flex"
        document.getElementById('sala0004-2').style.display = "flex"
        document.getElementById('sala0004-3').style.display = "none"
        document.getElementById('madeiraPorta').style.display = "none"
    }
    else if (imagemAtual == '0001-1'){
        mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0001.png')
        document.getElementById('sala0001-1').style.display = "flex"
        document.getElementById('ponteiros').style.display = "none"
        document.getElementById("machado").style.display = "flex"
    
    }
}

document.getElementById('sala0001').style.display = "none" // Faz com que o site tenha certeza que os botões não estejam visivéis ou clickaveis antes de começar o jogo
document.getElementById('sala0002').style.display = "flex"
document.getElementById('sala0003').style.display = "none"
document.getElementById('sala0004').style.display = "none" 
document.getElementById("pegarlanterna").style.display = "none"