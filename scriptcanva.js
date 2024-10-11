const canvas = document.getElementById("jogoPrincipal");
const ctx = canvas.getContext("2d");

document.getElementById('inventariogeral').style.display = "none" // Evita que o inventário apareça antes de iniciar o jogo

const IniciarJogo = () => {
    const img = new Image();
    const inventario = new Image();

    document.getElementById("start").style.display = "none" 
    document.getElementById('direita').style.display = "flex" 
    document.getElementById('esquerda').style.display = "flex"

    document.getElementById('inventariogeral').style.display = "flex" // Para que o inventário apareça depois de iniciar o jogo
    document.getElementById('inv0').style.display = "none" // Evita que os itens apareça antes de pegá-los
    
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    
    inventario.onload = () => {
        ctx.drawImage(inventario, canvas.width - 679, canvas.height - 170, canvas.width * 0.6, canvas.height * 0.15);
    }
    
    img.src = "1.jpg";
    inventario.src = "inventario.png";
}

// const setaWidth =  50
// const setaHeight = 50
// ctx.drawImage(seta, 0, (canvas.height - setaHeight)/2, setaHeight, setaWidth);
// ctx.drawImage(seta, (canvas.width - setaWidth), (canvas.height - setaHeight)/2, setaHeight, setaWidth);

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


// IniciarJogo()