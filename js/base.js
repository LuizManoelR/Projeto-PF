const play_track = (src) => (vol = 1) => (loop = false) => (state = 'play') =>{ // da play no audio, ajusta seu volume e deixa em loop

    const audio = new Audio()

    audio.src = src

    audio.volume = vol
    
    if (state == 'play'){
        audio.play()
    }else audio.pause()
    if (loop == true){audio.loop = true}
    else audio.loop = false
    
}

const trilhasonora_1 = play_track('audio/trilhaSonora_1.MP3')(0.4)(true)

const trilhasonora_2 = play_track('audio/trilhaSonora_2.MP3')(0.4)(true)

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