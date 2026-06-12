const contador = document.getElementById('contador');
const botao = document.getElementById('aumentar');
let numero = 0;

botao.addEventListener('click', function () {
    numero++;
    contador.textContent = numero;
});