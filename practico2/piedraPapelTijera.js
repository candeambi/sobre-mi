// Validacion del Input

const expresionNombre = /^[A-Z]+$/i;

function validarInput () {
    const nombre = document.getElementById("nombre").value;
   
    if (!expresionNombre.test(nombre)){ 
        //Utilizo el método .test() para verificar si el valor del input coincide con expresionNombre
        document.getElementById("alerta").textContent= "*Campo obligatorio: Por favor, ingrese su nombre. Solo se aceptan letras y espacios.";
        desactivarBotones();
        return false;
    }
    reemplazarNombre(nombre);
    activarBotones();
    return true;
}

function activarBotones(){
    piedraBtn.disabled = false;
    papelBtn.disabled = false;
    tijeraBtn.disabled = false;
}

function iniciarJuego(event) {
    event.preventDefault(); // Detiene el envío del formulario

    const nombreValido = validarInput();

    if (nombreValido) {
        // Iniciar el juego solo si el nombre es válido
        activarBotones();
    }
}

// Reemplaza el nombre ingresado por el usuario a las palabras jugador
function reemplazarNombre(nombre){
    const usuario = document.querySelectorAll(".usuario");

    usuario.forEach(elemento => {
        elemento.textContent = elemento.textContent.replace("Jugador", nombre);
    });
}


const enviarBtn = document.getElementById("enviar");
enviarBtn.addEventListener("click", iniciarJuego);


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
        document.getElementById("eleccionJugadores").textContent = `Elegiste ${jugadaUsuario} y la computadora ${jugadaComputadora}`;
        document.getElementById("resultadoDeRonda").textContent = "Empate";
        console.log("empate");
    } else if ((jugadaComputadora === "piedra" && jugadaUsuario === "tijera") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
    (jugadaComputadora === "tijera" && jugadaUsuario === "papel")) {
        victoriasComputadora++;
        document.getElementById("marcadorComputadora").textContent = victoriasComputadora;
        document.getElementById("eleccionJugadores").textContent = `Elegiste ${jugadaUsuario} y la computadora ${jugadaComputadora}`;
        document.getElementById("resultadoDeRonda").textContent = 'Ganó esta ronda la computadora';
        console.log("computadora");
    } else if ((jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaComputadora === "papel")) {
        victoriasJugador++;
        document.getElementById("marcadorJugador").textContent = victoriasJugador;
        document.getElementById("eleccionJugadores").textContent = `Elegiste ${jugadaUsuario} y la computadora ${jugadaComputadora}`;
        document.getElementById("resultadoDeRonda").textContent = 'Ganaste la ronda';
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

piedraBtn.addEventListener("click", function(event) {
    jugadaUsuario = "piedra"; // Asignar la jugadaUsuario
    iniciarJuego(event);
    determinarGanador();
    console.log("piedra");
});

papelBtn.addEventListener("click", function(event) {
    jugadaUsuario = "papel"; // Asignar la jugadaUsuario
    iniciarJuego(event);
    determinarGanador();
    console.log("papel");
});

tijeraBtn.addEventListener("click", function(event) {
    jugadaUsuario = "tijera"; // Asignar la jugadaUsuario
    iniciarJuego(event);
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
