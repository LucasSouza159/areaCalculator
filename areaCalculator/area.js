var capturando = "";


function capturar() {
    capturando = document.getElementById("raio").value;
    const PI = 3.14;
    let raio = capturando;
    let areaCirc = PI * raio * raio;
    document.getElementById("valorDigitado").innerHTML = "A área do circulo é: " + areaCirc;

}