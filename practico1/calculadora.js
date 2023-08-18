/* Defino las funciones de cada operación.*/

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        alert("Error: No es posible dividir entre cero.");
    } else {
        return num1 / num2;
    }
}

/* Defino la función calcular y validar que es la que, luego de clickear el boton "calcular", 
hará la operación correspondiente, según la selección del usuario o mostrará el respectivo 
mensaje de error.*/

function calcularYValidar(event) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;

    /* Uso la funcion preventDefault para que no se borren todos los valores ingresados en la 
    calculadora cuando hago click en el botón Calcular*/
    event.preventDefault();
    
    /* Este if analiza si en los input hay valores numericos ingresados, sino muestra un cartel
    de error*/
    if (isNaN(num1)||isNaN(num2)){
        alert("Error: Todas las casillas deben contener valores numéricos.");
        return;
    }

    /* Utilizo el switch para realizar la operación necesaria segun la opción elegida en el 
    menú desplegable, sino aparece un mensaje de alerta para seleccionar una*/
    switch (operacion){
    case "1":
        resultado = suma(num1, num2);
        break;
    case "2":
        resultado = resta(num1, num2);
        break;
    case "3":
        resultado = multiplicacion(num1, num2);
        break;
    case "4":
        resultado = division(num1, num2);
        break;
    default:
        alert("Por favor, seleccione una operación.");
        break;
    }
    document.getElementById("resultado").textContent = "Resultado: " + resultado;

    /* Convierto el resultado en string para medir el largo del numero y mostrar un mensaje de error,
    realmente no supe hacer lo del numero pequeño, perdon*/
    let resultadoString = resultado.toString();

    if (resultadoString.length >= 21) {
        alert("Su resultado es demasiado grande, es posible que el número no se muestre completo.")
    }
}

/*Llamo al botón Calcular, y hago que cuando el usuario haga click en el respectivo botón
se active la función calcularYValidar*/
const botonCalcular = document.getElementById("boton_calcular");
botonCalcular.addEventListener("click", calcularYValidar);

/*Llamo al boton Borrar con su id*/
const botonBorrar = document.getElementById("boton_borrar");

/*La siguiente función sirve para resetear la calculadora, es decir, que todos sus campos queden
vacíos*/
function borrar(){
    document.getElementById("et_form").reset(); 
    location.reload(); 
}

/*Con la siguiente linea hago que cuando el usuario haga click en el botón Borrar se active la
funcion borrar*/
botonBorrar.addEventListener("click", borrar);