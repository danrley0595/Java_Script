const numeros = [4, 7, 2, 9, 10, 3, 8, 1];
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Pares:" + pares);
console.log("Impares:" + impares);

