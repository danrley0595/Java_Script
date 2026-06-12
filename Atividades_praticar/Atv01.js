const nome = "Danrley";
let idade = 31;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valor = 1000;
console.log("Boas-vindas, " + nome);

if (idade >= 18) {
    console.log("Você é maior de idade!");
}
else {
    console.log("Você é menor de idade!");
}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

function calcularDobro() {
    let dobro = valor * 2;
    console.log("Dobro do valor: " + dobro);
}

calcularDobro();