// BOTON MENSAJE
function mostrarMensaje(){
document.getElementById("mensajeSecreto").innerHTML =
"Aunque el tiempo pase, siempre te desearé lo mejor ❤️";
}

// CONTADOR DE TIEMPO (cambia fecha si quieres)
let fechaInicio = new Date("2024-12-30");

function actualizarContador(){
let ahora = new Date();
let diferencia = ahora - fechaInicio;

let dias = Math.floor(diferencia / (1000*60*60*24));

document.getElementById("contador").innerHTML =
"Han pasado " + dias + " días desde que nos conocimos ❤️";
}

setInterval(actualizarContador,1000);

// LLUVIA DE CORAZONES
function crearCorazon(){
let corazon = document.createElement("div");
corazon.innerHTML="❤️";
corazon.classList.add("corazon");

corazon.style.left=Math.random()*100+"vw";
corazon.style.fontSize=Math.random()*20+20+"px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},4000);
}

setInterval(crearCorazon,300);