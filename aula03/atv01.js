function gerarAlerta() {
    let painel = document.getElementById("painel");
    painel.innerHTML += `
            <p >
                Nova mensagem recebida!
            </p>
        `;
    painel.style.backgroundColor = 'yellow';}
