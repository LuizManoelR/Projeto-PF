const canvas = document.getElementById("jogoPrincipal");
const ctx = canvas.getContext("2d");

const IniciarJogo = () => {

    const img = new Image();

    document.getElementById("start").style.display = "none"
      document.getElementById("esquerda").style.display = "flex"
      document.getElementById("direita").style.display = "flex"

    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
       
    }
    img.src = "1.jpg";
    
}
const background = (direcao)=> { //Função para passar as imagens com click

    const img = new Image (); //Constante para gerar uma imagem

    if (direcao =="esquerda")  { //Se o parametro direcao for == esquerda, gere uma imagem com o src especificado
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
         }   
         img.src = "3.jpg"; 
     } 
     else {
        img.onload = () => { // Se não for, gere uma imagem pro caso de ser == direita
            ctx.drawImage(img, 0, 0, canvas.width,canvas.height)
        } 
        img.src = "2.jpg";
    }
}


//background("esquerda")
//IniciarJogo()
