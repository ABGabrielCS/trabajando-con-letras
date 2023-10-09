// Obtén la palabra del usuario
var palabra = prompt("Ingrese una palabra:");

// Convierte la palabra a minúsculas para que la comparación no sea sensible a mayúsculas
palabra = palabra.toLowerCase();

// Invierte la palabra
var palabraInvertida = "";

for (var i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
}

// Verifica si la palabra original y la palabra invertida son iguales
if (palabra === palabraInvertida) {
    console.log("La palabra '" + palabra + "' es un palíndromo.");
} else {
    console.log("La palabra '" + palabra + "' no es un palíndromo.");
}
