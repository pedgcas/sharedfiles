//Pantalla
const calcScreen = document.getElementById("current-calculation");
const resultScreen = document.getElementById("result");
const inputScreen = document.getElementById("number-input");

//Botones de operaciones
const btnAdd = document.getElementById("add-btn");
const btnSubstract = document.getElementById("substract-btn");
const btnMultiply = document.getElementById("multiply-btn");
const btnDivide = document.getElementById("divide-btn");

//resultado en pantalla
function outputResultScreen(result, text) {
    calcScreen.innerHTML = text;
    resultScreen.innerHTML = result;
}