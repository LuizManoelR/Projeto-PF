function IniciarJogo() {
    document.getElementById("imagemPrincipal").style.display = "absolute"
    document.getElementById("imagemPrincipal").src = "1.jpg"
    document.getElementById("start").style.display = "none"
    document.getElementById("esquerda").style.display = "flex"
    document.getElementById("direita").style.display = "flex"
    document.getElementById()
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

function checkImage (ladoPedido) {
    const imagemAtual = filterNome(document.getElementById("imagemPrincipal").src).reduce((acc, i) => acc + i)
    if (imagemAtual == "/1.jpg") {
        if (ladoPedido == 0) {
            document.getElementById("imagemPrincipal").src = "2.jpg"
        } else {
            document.getElementById("imagemPrincipal").src = "3.jpg"
        }
    } else if (imagemAtual == "/2.jpg") {
        if (ladoPedido == 0) {
            document.getElementById("imagemPrincipal").src = "4.jpg"
        } else {
            document.getElementById("imagemPrincipal").src = "1.jpg"
        }
    } else if (imagemAtual == "/3.jpg") {
        if (ladoPedido == 0) {
            document.getElementById("imagemPrincipal").src = "1.jpg"
        } else {
            document.getElementById("imagemPrincipal").src = "4.jpg"
        }
    } else if (imagemAtual == "/4.jpg") {
        if (ladoPedido == 0) {
            document.getElementById("imagemPrincipal").src = "3.jpg"
        } else {
            document.getElementById("imagemPrincipal").src = "2.jpg"
        }
    }
}

function VirarEsq () {
    console.log(document.getElementById("imagemPrincipal").src)
    checkImage(0)
}

function VirarDir () {
    checkImage(1)
}