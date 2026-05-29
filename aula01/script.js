let idade = 61;

if (idade >= 18 && idade <= 60) {
    console.log("Liberado, pode entrar");
}
else if (idade >= 0) {
    console.log("Não permitido!");
}
else {
    console.log("Idade Invalida");
}

switch (idade) {
    case idade >= 18 && idade <= 60:
        console.log("Liberado, pode entrar");
        break;
    default:
        console.log("Idade não permitida");
}