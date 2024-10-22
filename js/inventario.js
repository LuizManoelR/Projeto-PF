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
            if (idBotaoAntigo == "madeiraPorta") {
                document.getElementById(idBotaoAntigo).style.display = "none" // Some o item do ambiente 
                document.getElementById('inv' + posicao).style.display = "none" // Some o item no inventário
                document.getElementById('machadoMadeira').style.display = "none" // Some o item no inventário
                document.getElementById('madeiraPorta1').style.display = "none" // Some o item no inventário
                document.getElementById('madeiraPorta2').style.display = "none" // Some o item no inventário
                document.getElementById('controladorSenha').style.display = "flex" // Some o item no inventário
            } else if (idBotaoAntigo == "lanternaQuadro") {
                mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0002-1-2.png')
            }
        }
    } else { // Caso não possua o item (Isso precisa olhar quando estiver com mais itens)
        document.getElementById('inv' + posicao + "Check").checked = 0 
    }
}

// document.getElementById("inv1").style.display = "flex"
document.getElementById('inv' + 0 + "Check").checked == 0
document.getElementById('inv' + 1 + "Check").checked == 0