const temperaturas = [22, 28, 19, 31, 25, 17, 29];
let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}
console.log("Maior:" + maior);
console.log("Menor:" + menor);
