const trilha_sonora = () =>{ // da play no audio, ajusta seu volume e deixa em loop

    const audio = new Audio()

    audio.src = './audio/trilhaSonora_1.MP3'

    audio.volume = 0.2
    audio.play()

    audio.loop = true
}

const filterNome = (lista) => {
    const helper = ([x, ...xs]) => {
        if (x === undefined) {
            return []
        } else {
            if (xs.indexOf("/") != -1 || x == "/") { // Aqui ele vai tirar todas as barras
                return [...helper(xs)]
            } else if (xs.indexOf(".") != -1){ // Aqui ele vai tirar tudo depois do ponto
                return [x, ...helper(xs)]
            } else {
                return [...helper(xs)]
            }
        }
    }
    listaAtual = lista.toString().split("")
    return helper(listaAtual)
}