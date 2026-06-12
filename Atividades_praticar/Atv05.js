const nome = document.getElementById('nome');
const enviar = document.getElementById('enviar');
const resultado = document.getElementById('resultado');

enviar.addEventListener('click', function () {
    resultado.textContent = 'Olá, ' + nome.value;
});