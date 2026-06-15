const clientes = ["Ana", "Bruno", "Carla", "Daniel"];
const busca = "Carla";
let posicao = -1;

for (let i = 0; i < clientes.length; i++) {
    if (clientes[i] === busca) {
        posicao = i;
        break;
    }
}
if (posicao >= 0) {
    console.log("Cliente encontrado:" + busca);
    console.log("Posição:" + posicao);
} else {
    console.log("Cliente não encontrado.");
}