const quadrado = document.querySelector(".quadrado");
let x = 0;
let y = 0;

document.addEventListener('keyup', function (e) { 
    console.log('Tecla pressionada: ' + e.key); 
    switch(e.key){
        case "8":
            x += 20;
            quadrado.style.top = x + "px";
            break;

            case "2":
            x -= 20;
            quadrado.style.top = x + "px";
            break;

            case "4":
            y += 20;
            quadrado.style.left= y + "px";
            break;

            case "6":
            y -= 20;
            quadrado.style.left = y + "px";
            break;    
    }

});