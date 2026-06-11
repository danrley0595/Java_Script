let tarefa = document.getElementById("inputTarefa"); /* A variavel tarefa recebe o valor do input  */
let listaTarefa = document.getElementById("lista-tarefa"); /* variavel para armazenar os intem tarefas que serão adicionados pelo input */

function adicionarItem() {

    let itemTarefa = document.createElement("li");  /* item tarefa é criado com o li */
    itemTarefa.textContent = tarefa.value; /* o textContent do item tarefa recebe o valor do imput*/
    listaTarefa.appendChild(itemTarefa); /* Adiciona o item tarefa na lista de tarefas que esta vinculada ao ul */
    tarefa.value = ""; /* Ao adicionar o input no final vai receber valor vazio para limpar o campo da tela*/

}

function removerItem() {
    let itens = listaTarefa.getElementsByTagName("li"); /* Pega todas as <li> da lista*/
    for (let i = 0; i < itens.length; i++) { /*Procura na lista o item que tem o mesmo texto do input*/
        if (itens[i].textContent === tarefa.value) {
            itens[i].remove(); /*Deleta se for igual*/
        }
    }
    tarefa.value = "";
}




