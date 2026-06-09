let usuarios = ["Maria", "João", "Pedro", "Carlos"]
let listausuarios = document.getElementById("lista_usuarios")

usuarios.push("Joaquim")
usuarios.unshift("Teresa")

usuarios.forEach(function (usuario) {
    console.log("Nome usuario:" + usuario)
})

let ultimousuario = usuarios.pop()
console.log("Nome usuario removido no final da lista:" + ultimousuario)
let primeirousuario = usuarios.shift()
console.log("Nome usuario removido no inicio da lista:" + primeirousuario)

//usuarios.forEach(function(usuario){
//    listausuarios.innerHTML += `<li>${usuario}</li>`
//})

usuarios.forEach(function (usuario) {
    let itemLista = document.createElement("li");
    itemLista.textContent = usuario;
    listausuarios.appendChild(itemLista);

})









