function mostrarMensaje(){

document.getElementById("mensajeSecreto").innerHTML =
"Mamá, gracias por tu amor infinito, por tus consejos y por siempre estar para mí. Te quiero mucho 💜";

}

function crearCorazon(){

let corazon = document.createElement("div");

corazon.innerHTML="💜";

corazon.classList.add("corazon");

corazon.style.left=Math.random()*100+"vw";

corazon.style.fontSize=Math.random()*20+20+"px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},4000);

}

setInterval(crearCorazon,300);