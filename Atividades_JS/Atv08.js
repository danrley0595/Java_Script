const tarefas = [
    { titulo: "Estudar JS", concluida: true },
    { titulo: "Ler e-mail", concluida: false },
    { titulo: "Reunião", concluida: true },
    { titulo: "Almoçar", concluida: false }
];
let concluidas = 0;
let pendentes = 0;

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida === true) {
        concluidas++;
    } else {
        pendentes++;
    }
}
console.log("Tarefas concluídas:" + concluidas);
console.log("Tarefas pendentes:" + pendentes);