let tarefa = document.getElementById("inputTarefa");
let listaTarefa = document.getElementById("lista-tarefa");
const botao = document.getElementById("btn-tarefa");


function carregarItens() {
    let conteudoHtml = JSON.parse(localStorage.getItem('lista_html'));
    listaTarefa.innerHTML = conteudoHtml;
}
function salvarDados() {
    let conteudoHtml = listaTarefa.innerHTML;
    localStorage.setItem('lista_html', JSON.stringify(conteudoHtml));
}

function adicionarItem() {

    let itemTarefa = document.createElement("li");
    itemTarefa.textContent = tarefa.value;
    listaTarefa.appendChild(itemTarefa);
    salvarDados();
    console.log(conteudoHtml);
    tarefa.value = "";

}
botao.addEventListener("click", adicionarItem)


listaTarefa.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("tarefa-concluida");
        salvarDados();
    }
});



carregarItens();