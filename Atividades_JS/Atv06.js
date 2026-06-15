const presentes = [101, 102, 105, 110, 120];
const idBuscado = 105;
let encontrado = 0;

for (let i = 0; i < presentes.length; i++) {
    if (presentes[i] === idBuscado) {
        encontrado = 1;
        break;
    }
}

if (encontrado === 1) {
    console.log(idBuscado + "está presente.");
} else {
    console.log(idBuscado + "não está presente.");
}