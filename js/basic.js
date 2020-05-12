// comentario de una linea

/*
comentario
en 
bloque
*/

//Variables globales
var numero = 1;
var texto = 'Palma';
var verdadero = true;
var falso = false;
var lista_array = [1, 2, 3, 4, 5, 6, 7, 8];
var objeto = {
    nombre: 'Tomeu',
    ciudad: 'Palma',
    cp: 07010
}

function parrafo() {
    console.log('Soy ' + objeto.nombre + ' y vivo en ' + objeto.ciudad);
    var frase = "primera linea \nsegunda linea\n";
    console.log(frase);
    var parrafo = "Libro de \"Autor\" de 1988";
    console.log(parrafo);

}

function nuevaFuncion() {
    return 'Hola';
}

var nuevaFuncion = function() {
    return 'Hola';
}

//Fucniones con parametros 
function suma(valor1, valor2) {
    console.log(valor1 + valor2);
}

function resta(valor1, valor2) {
    console.log(valor1 - valor2);
}

function multiplication(valor1, valor2) {
    console.log(valor1 * valor2);
}

function division(valor1, valor2) {
    console.log(valor1 / valor2);
}

var varGlobal = "Soy global";

function exampleVar() {
    var varLocal = "Soy local";
    console.log(varGlobal);
    console.log(varLocal);
}

function numbersAndStrings() {
    var concatenar = 10 + "10";
    var converNumber = 10 + Number("10");
    var convertString = String(10) + 10;
    console.log("Resultado de 10 + \"10\": " + concatenar);
    console.log("Resultado de 10 + Number(\"10\"): " + converNumber);
    console.log("Resultado de String(10) + 10: " + convertString);
}

function booleans() {
    console.log("False es: " + Boolean(false));
    console.log("True es: " + Boolean(true));
    console.log("Null es : " + Boolean(null));
    console.log("1 es: " + Boolean(1));
}

function operators() {
    var number = 3;
    number++; //incremento en uno
    console.log(number);
    number--; //decremento en uno
    console.log(number);
    var resto = 10 % 2;
    console.log("10%2= " + resto);
}

//aqui hacemos las llamadas a las funciones que queramos
parrafo();
nuevaFuncion();
suma(10, 5);
resta(10, 5);
multiplication(10, 5);
division(10, 5);
exampleVar();
numbersAndStrings();
booleans();
operators();