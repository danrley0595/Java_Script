const estoque = [
    { produto: "Mouse", quantidade: 5 },
    { produto: "Teclado", quantidade: 2 },
    { produto: "Monitor", quantidade: 0 }
];
const produtosRepor = [];

for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].quantidade <= 2) {
        produtosRepor.push(estoque[i].produto);
    }
}
console.log("Produtos repor:" + produtosRepor);
