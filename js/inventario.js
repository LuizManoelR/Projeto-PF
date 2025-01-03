// Funções de Inventários
const atualizarElementoINV = (posicao, idBotaoAntigo) => { // Atualiza o inventário com o item que o jogador acabou de pegar
    play_track('./audio/efeitos sonoros/collect_effect.MP3')(1)(false)('play')
    if (posicao == 1) {
        document.getElementById("gavetalanterna").style.display = "none"
        document.getElementById('tutorialFase2').style.display = "flex"
    }
    if (posicao == 2) {
        document.getElementById('inv' + posicao + idBotaoAntigo).style.display = "flex" // Aparece o item no inventário
        comecarMoveMoldura((idBotaoAntigo == "foto2" ? "imagensPedacos1":(idBotaoAntigo == "foto3" ? "imagensPedacos2":"imagensPedacos3")))
        if (idBotaoAntigo == "foto4") {
            document.getElementById("foto4Longe").style.display = "none"
        } else if (idBotaoAntigo == "foto3") {
            document.getElementById("foto3Longe").style.display = "none"
        }
    }
    document.getElementById('inv' + posicao).style.display = "flex" // Aparece o item no inventário
    document.getElementById(idBotaoAntigo).style.display = "none" // Some o item do ambiente 
    
}

const existeElementoINV = (posicao) => { //Verifica que se o item está no inventário
    if (document.getElementById('inv' + posicao).style.display == "flex") {  //Se imagem da posição X for igual a "flex", retorne 1
        return 1
    }
}

const checkBoxVisual = (posicao) => { // Serve principalmente para mexer no visual do botão de cada item individualmente
    const checkBox = document.getElementById('inv' + posicao + "Check") //Pega a caixa de seleção da posição desejada
    if (checkBox.checked == 1) {
        checkBox.style.opacity = '20%' 
    } else {
        checkBox.style.opacity = '0%' 
    }
}

const usarElementoINV = (posicao, idBotaoAntigo) => { // Função utilizada para checar se os requisitos foram cumpridos 
    if (existeElementoINV(posicao) == 1) { // Verifica se o item existe
        if (document.getElementById('inv' + posicao + "Check").checked == 1) { // Verifica se o mesmo está selecionado 
            if (idBotaoAntigo == "madeiraPorta") {
                play_track('./audio/efeitos sonoros/madeira_effect.MP3')(1)(false)('play')
                document.getElementById(idBotaoAntigo).style.display = "none" // Some o item do ambiente 
                document.getElementById('inv' + posicao).style.display = "none" // Some o item no inventário
                document.getElementById('machadoMadeira').style.display = "none" // Some o item no inventário
                document.getElementById('madeiraPorta1').style.display = "none" // Some a madeira da porta
                document.getElementById('madeiraPorta2').style.display = "none" // Some a madeira da porta
                document.getElementById('controladorSenha').style.display = "flex" // Aparece o controladorSenha
            } if (idBotaoAntigo == "lanterna") {
                document.getElementById(idBotaoAntigo) = none
            } else if (idBotaoAntigo == "lanternaQuadro") {
                play_track('./audio/efeitos sonoros/lanterna_effect.wav')(1)(false)('play')
                mudeImgSrc("esquerda", 'img/imgFundo/Fase2/0002-1-2.png') // Caso ele use a lanterna no quadro, mude a imagem
            }
        }
    } else { // Caso não possua o item
        document.getElementById('inv' + posicao + "Check").checked = 0 // Ele tira a marcação
    }
}


document.getElementById('inv' + 0 + "Check").checked == 0 // Tem certeza que as caixas de seleção está desativado antes de começar o jogo
document.getElementById('inv' + 1 + "Check").checked == 0