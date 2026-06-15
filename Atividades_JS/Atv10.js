const alunos = [
    { nome: "Ana", email: "ana@email.com" },
    { nome: "Bruno", email: "" },
    { nome: "", email: "carla@email.com" },
    { nome: "Daniel", email: "daniel@email.com" }
];

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === "" || alunos[i].email === "") {
        console.log("Cadastro incompleto no índice:" + i);
        console.log(alunos[i]);
    }
}
