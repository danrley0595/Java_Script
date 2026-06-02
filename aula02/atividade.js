let senha_correta = "1234";

let senha_tentativa = "123";

while(true){
    if(senha_correta == senha_tentativa){
    console.log("Senha correta")
    break;
    }
    else{
        console.log("Senha Incorreta, tente novamente!")
    }
}