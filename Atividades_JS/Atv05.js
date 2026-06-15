const presentes = ["Ana", "Bruno", "Carla", "Daniel"];
const ausentes = ["Eduarda", "Felipe"];
const totalAlunos = presentes.length + ausentes.length;

const percentualPresenca = (presentes.length / totalAlunos) * 100;

console.log("Presentes:" + presentes.length);
console.log("Ausentes:" + ausentes.length);
console.log("Presença:" + percentualPresenca);
