const canvas = document.getElementById("jogoPrincipal");
const ctx = canvas.getContext("2d");

const IniciarJogo = () => {
    const img = new Image();

    document.getElementById("start").style.display = "none"

    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    img.src = "1.jpg";
    DesenharSeta(0)
    DesenharSeta(1)
}

const DesenharSeta = (direcao) => {
    const seta = new Image();
    console.log(canvas.width/2)

    const setaHeight = 200
    const setaWidth =  200

    if (direcao == 0) {
        seta.onload = () => {
            ctx.drawImage(seta, 0, (canvas.height - setaHeight)/2, setaHeight, setaWidth);
        }
        seta.src = "2.jpg";
    } else {
        seta.onload = () => {
            ctx.drawImage(seta, (canvas.width - setaWidth), (canvas.height - setaHeight)/2, setaHeight, setaWidth);
        }
        seta.src = "3.jpg";
    }

}

IniciarJogo()