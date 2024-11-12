const IniciarJogo = () => {
    
    document.getElementById("start").style.display = "none"
    document.getElementById('direita').style.display = "flex" 
    document.getElementById('esquerda').style.display = "flex"
    
    document.getElementById('sala0002').style.display = "flex" // Essa propriedade faz o botão da sala aparecer antes de começar o jogo
    document.getElementById('sala0001').style.display = "none" // Essas três propriedades fazem o resto desaparecer
    document.getElementById('sala0004').style.display = "none" 
    document.getElementById('sala0003').style.display = "none"
    document.getElementById('tutorial').style.display = "flex" // Tudo involvendo tutorial deve aparecer no inicio

    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    img.src = "./img/imgFundo/0002.png";

    document.getElementById('sala0002-1').style.border = "solid 1px white"
    document.getElementById('sala0002-2').style.border = "solid 1px white"
    trilhasonora_1('play',0.4) // inicia a trilha sonora
}

const cutscene = () =>{
    telaCarregamento() // Puxa a tela de carregamento
    const video = document.getElementById('video')
    document.getElementById("start").style.display = "none"
    document.getElementById("bg").style.display = "none"
    video.style.display = 'flex'
    
    video.play()
    
    video.addEventListener('ended', () => {
        
    video.style.display = 'none'
    IniciarJogo()
    })
}
    
const telaCarregamento = () => { // Função que cuida de carregar todas as imagens antes do jogo funcionar, importante para conexões mais lentas
    // ctx.font = "48px serif";
    // ctx.fillStyle = "White";
    // ctx.fillText("Carregando...", (canvas.width/2 - 200), canvas.height/2 + 50); // Cria o texto dizendo que está carregando
    const listaImg = ["./img/imgFundo/0001.png", "./img/imgFundo/0002.png", "./img/imgFundo/0003.png", "./img/imgFundo/0004.png", "./img/imgFundo/0001-1.png", "./img/imgFundo/0002-1.png", "./img/imgFundo/0002-2.png","./img/imgFundo/0002-3.png" ,"./img/imgFundo/0002-4.png", "./img/imgFundo/0003-1.png", "./img/imgFundo/0003-2.png", "./img/imgFundo/0003-3.png","./img/imgFundo/0003-4.png", "./img/imgFundo/0004-1.png", "./img/imgFundo/0004-2.png"]
    
    const listaAudio = ['audio/efeitos sonoros/effect_gaveta.MP3','audio/efeitos sonoros/porta.MP3']

    listaImg.map((x,acc) => {
        const imagemPreload = new Image(); // Cria um novo objeto img
        imagemPreload.src = x // Coloca essa novo objeto com src igual ao valor da lista
    })

    listaAudio.map((x)=>{
        const imagemPreload = new Audio()
        imagemPreload.src = x
    })
}

const verificarSenha = () => { // Função utilizada para o fim do jogo
    if (document.getElementById('senhaInput').value == 35728) { // Verifica se o texto colocado é a senha correta
        document.getElementById('controladorSenha').style.display = "none" // Desaparece o local para colocar a senha 
        document.getElementById('direita').style.display = "none"  // Desaparece os botões
        document.getElementById('esquerda').style.display = "none"
        document.getElementById('baixo').style.display = "none"
        trilhasonora_1()
        ctx.fillStyle = "black"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Pinta o fundo de preto na resolução total do canvas
        
        const porta = new Audio()
        porta.src = 'audio/efeitos sonoros/porta.MP3'
        porta.play()
        porta.addEventListener('ended', () => {
            
            location.href = 'fase2.html';
        })
    } else {
        document.getElementById('senhaInput').value = "" // Caso a senha esteja errado, apague o texto escrito pelo jogador
    }
}

const mudeImgSrc = (direcao, imagemEsq, imagemDir=0, salaAtual=0) => { //Altera a imagem principal e os botões
    //Altera a imagem de fundo
    if (direcao =="esquerda")  { //Se o parametro direção for == esquerda, gere uma imagem com o src especificado
        img.src = imagemEsq; 
    } 
    else { // Se não for, gere uma imagem para o caso de ser == direita
       img.src = imagemDir;
    }
   
    //Altera os botões que acompanha
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
    document.getElementById("btn_esquerda").src = "./img/interfaceUsuario/botao_esquerda.png" // Aqui ele tira os botões do tutorial para os botões normais
    document.getElementById("btn_direita").src = "./img/interfaceUsuario/botao_direita.png"
    
    const imagemAtual = filterNome(img.src).reduce((acc, i) => acc + i) // Tira a formatação de link do nome
    
    if (imagemAtual == "0001" || imagemAtual == "0001-1") {
        mudeImgSrc(direcao, "./img/imgFundo/0004.png", "./img/imgFundo/0003.png", imagemAtual) // Muda a imagem de fundo seguindo os argumentos: Direção (Seja ela esquerda ou direita), Img Esquerda, Img Direita, Img Atual
    } else if (imagemAtual == "0002") {
        mudeImgSrc(direcao, "./img/imgFundo/0003.png", "./img/imgFundo/0004.png", imagemAtual)
    } else if (imagemAtual == "0003") {
        mudeImgSrc(direcao, "./img/imgFundo/0001.png", "./img/imgFundo/0002.png", imagemAtual)
    } else if (imagemAtual == "0004" ) {
        mudeImgSrc(direcao, "./img/imgFundo/0002.png", "./img/imgFundo/0001.png", imagemAtual)
    }    
}

const inspecionar = (idAtual,idAtual2, idProx, imgProx) => {// função que cuida de sumir com os botões que estão na tela atualmente para aparecer os próximos botões
    // IdAtual = Botões que estão ATUAlMENTE sendo mostrados na tela
    // IdProx = Botões que devem ser os PRÓXIMOS a serem mostrados na tela
    const imagemProxima = filterNome(imgProx).reduce((acc, i) => acc + i)
    document.getElementById(idAtual).style.display = "none" // pegue o id atual e faça ele desaparecer, no caso, de um botão
    document.getElementById(idAtual2).style.display = "none" //faça o mesmo com o idAtual2
    
    document.getElementById('sala0002-1').style.border = "none"
    document.getElementById('sala0002-2').style.border = "none"
    
    console.log(imagemProxima)

    if (imagemProxima == "0002-2") {
        document.getElementById("controladorSenha").style.display = "flex" //faça o id do próximo elemento aparecer
    }
    else if (idAtual == 'sala0004-2') {play_track('audio/efeitos sonoros/effect_gaveta.MP3')(0.3)(false)('play')}
    
    mudeImgSrc('esquerda', imgProx) 
    document.getElementById(idProx).style.display = "flex"//faça o id do próximo elemento aparecer
    document.getElementById("baixo").style.display = "flex"//faça o id do próximo elemento aparecer
    document.getElementById("direita").style.display = "none"//faça o id do próximo elemento aparecer
    document.getElementById("esquerda").style.display = "none"//faça o id do próximo elemento aparecer
}

const sair_inspecionar = () =>{
    document.getElementById("btn_baixo").src = "./img/interfaceUsuario/botao_baixo.png" // Troca o .src da imagem para o padrão, evitando que ainda seja o tutorial

    const imagemAtual = filterNome(img.src).reduce((acc, i) => acc + i) // Tira a formatação do texto para só 0001 no lugar de um link completo

    document.getElementById('direita').style.display = "flex" // Faz aparecer os botões da direta e esquerda 
    document.getElementById('esquerda').style.display = "flex"
    document.getElementById('baixo').style.display = "none"

    if ((imagemAtual == "0002-1" || imagemAtual == "0002-2" )|| (imagemAtual == "0002-3" || imagemAtual == "0002-4")) { // Confere que imagem está sendo mostrada agora
        mudeImgSrc("esquerda", 'img/imgFundo/0002.png') // Muda para a imagem principal da sala
        document.getElementById('sala0002-3').style.display = "flex" // Volta com os botões da sala
        document.getElementById('sala0002-1,2').style.display = "flex"
        document.getElementById('sala0002-4').style.display = "none"
        document.getElementById('controladorSenha').style.display = "none" // Desaparece com o local para inserir a senha
    

    }  else if (imagemAtual == "0003-1" || imagemAtual == "0003-2" || imagemAtual == "0003-3" || imagemAtual == "0003-4") {
        mudeImgSrc("esquerda", 'img/imgFundo/0003.png')
        document.getElementById('sala0003-1').style.display = "flex"
        document.getElementById('sala0003-3').style.display = "flex"
        document.getElementById('sala0003-2').style.display = "none"
        document.getElementById('sala0003-4').style.display = "none"

    } else if (imagemAtual == "0004-1" || imagemAtual == "0004-2") {
        mudeImgSrc("esquerda", 'img/imgFundo/0004.png')
        document.getElementById('sala0004-1').style.display = "flex"
        document.getElementById('sala0004-2').style.display = "none"
    
    } 
}

const canvas = document.getElementById("jogoPrincipal");
const ctx = canvas.getContext("2d");

const img = new Image(); //Constante para gerar uma imagem

document.getElementById('sala0001').style.display = "none" // Faz com que o site tenha certeza que os botões não estejam visivéis ou clickaveis antes de começar o jogo
document.getElementById('sala0004').style.display = "none" 
document.getElementById('sala0002').style.display = "none"
document.getElementById('sala0003').style.display = "none"

// IniciarJogo()