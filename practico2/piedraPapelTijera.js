// Validacion del Input

const expresionNombre = /^[A-Z]+$/i;

function validarInput (event) {
    const nombre = document.getElementById("nombre").value;
   
    if (!expresionNombre.test(nombre)){ 
        //Utilizo el método .test() para verificar si el valor del input coincide con expresionNombre
        alert("Por favor, ingrese su nombre. Solo se aceptan letras.");
        desactivarBotones();
        return;
    }
    reemplazarNombre(nombre);
    activarBotones();

    event.preventDefault();
}

function activarBotones(){
    piedraBtn.disabled = false;
    papelBtn.disabled = false;
    tijeraBtn.disabled = false;
}

// Reemplaza el nombre ingresado por el usuario a las palabras jugador
function reemplazarNombre(nombre){
    const usuario = document.querySelectorAll(".usuario");

    usuario.forEach(elemento => {
        elemento.textContent = elemento.textContent.replace("Jugador", nombre);
    });
}


const enviarBtn = document.getElementById("enviar");
enviarBtn.addEventListener("click", validarInput);


// Partidas

function numeroAleatorioHasta(num) { 
    return Math.floor(Math.random() * num);
}

function obtenerJugadaComputadora() {
    let juego = ["piedra", "papel", "tijera"];
    return juego[numeroAleatorioHasta(3)];
}

let victoriasJugador = 0;
let victoriasComputadora = 0;
let jugadaUsuario = "";

function determinarGanador (){
    const jugadaComputadora = obtenerJugadaComputadora();
    const marcadorJugador = document.getElementById("marcadorJugador");
    const marcadorComputadora = document.getElementById("marcadorComputadora");


    if (jugadaComputadora === jugadaUsuario){
        document.getElementById("resultadoDeRonda").textContent = "Empate";
        console.log("empate");
    } else if ((jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
    (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")) {
        victoriasComputadora++;
        document.getElementById("marcadorComputadora").textContent = victoriasComputadora;
        document.getElementById("resultadoDeRonda").textContent = "Ganó esta ronda la computadora";
        console.log("computadora");
    } else if ((jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel")) {
        victoriasJugador++;
        document.getElementById("marcadorJugador").textContent = victoriasJugador;
        document.getElementById("resultadoDeRonda").textContent = "Ganaste la ronda";
        console.log("usuario");
    }

    finalizarPartida();
}


function finalizarPartida () {
    if (victoriasComputadora >= 3) {
        document.getElementById("resultadoDeRonda").textContent = "¡Gana la Computadora!";
        desactivarBotones();
    } else if (victoriasJugador >= 3) {
        document.getElementById("resultadoDeRonda").textContent = "¡Felicitaciones, ganaste!";
        desactivarBotones();
    }
}

function desactivarBotones(){
    piedraBtn.disabled = true;
    papelBtn.disabled = true;
    tijeraBtn.disabled = true;
}


const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");

piedraBtn.addEventListener("click", function() {
    jugadaUsuario = "piedra"; // Asignar la jugadaUsuario
    determinarGanador();
    console.log("piedra");
});

papelBtn.addEventListener("click", function() {
    jugadaUsuario = "papel"; // Asignar la jugadaUsuario
    determinarGanador();
    console.log("papel");
});

tijeraBtn.addEventListener("click", function() {
    jugadaUsuario = "tijera"; // Asignar la jugadaUsuario
    determinarGanador();
    console.log("tijera");
});

//Boton reiniciar

function reiniciar(){
    document.getElementById("et_form").reset(); 
    location.reload();
}

const botonReiniciar = document.getElementById("btnReiniciar")
botonReiniciar.addEventListener("click", reiniciar);
