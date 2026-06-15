const notas = [7.5, 8.0, 6.5, 9.0, 5.0, 7.0];
let soma = 0
const media = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
media = soma / notas.length;
console.log("Media da turma: " + media);