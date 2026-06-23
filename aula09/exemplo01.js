function buscarPersonagens() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            console.log(dados.results);
            const personagens = dados.results;

            personagens.forEach(function (personagem) {
                const id = document.createElement("p");
                id.textContent = personagem.id;
                document.getElementById("personagens-div").appendChild(id);

                const nome = document.createElement("p");
                nome.textContent = personagem.name;
                document.getElementById("personagens-div").appendChild(nome);

                const imagem = document.createElement('img');
                imagem.src = personagem.image;
                document.getElementById("personagens-div").appendChild(imagem);


            });
        })
        .catch(function (erro) {
            console.error('Erro ao buscar personagens:', erro);
        });
}

buscarPersonagens();