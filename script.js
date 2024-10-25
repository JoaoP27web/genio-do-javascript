const lampada = document.getElementById("lampada");
const button = document.getElementById("btn");
let lampOn = false;
button.addEventListener("click", () => {
    lampOn = !lampOn;
    lampada.src = lampOn
    ? "https://meet.google.com/dxq-dqqp-ove?authuser=0&pli=1"
    : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
    
})
