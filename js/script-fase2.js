const canvas = document.getElementById("fase2");
const ctx = canvas.getContext("2d");
document.getElementById('direita').style.left = (canvas.width - 60) + "px" 
const img = new Image()


img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.scr = "./img/imgFundo/Fase2/0002.png"