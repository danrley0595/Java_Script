//const body = document.querySelector("body");
//const botao = document.querySelector("#dark-theme");
let totalCliques = 0;
const botao = document.querySelector("#dark-theme");

botao.addEventListener("click",function(){
    //body.classList.toggle("dark-theme");
    totalCliques = totalCliques + 1;
    console.log("Total cliques:"+ totalCliques)
    alert("Total cliques:"+ totalCliques)

})