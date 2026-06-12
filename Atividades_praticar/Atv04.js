let titulo = document.getElementById('titulo');
let paragrafo1 = document.getElementById('p1');
let botaoCor = document.getElementById('btn-Alterar-Cor');
let botaoImagem = document.getElementById('btn-Alterar-Imagem')
let imagem = document.getElementById('imagem');

titulo.textContent = "Texto alterado!";

botaoCor.addEventListener('click', function () {
    paragrafo1.style.color = "red";
})

botaoImagem.addEventListener('click', function () {
    imagem.setAttribute("src", "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r7.png");
})