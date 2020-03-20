const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseFloat(inputScreen.value);
}

function marcar(n) {
    inputScreen.value;
    inputScreen.value += n;
}

function marcarDecimal() {
    if (inputScreen.value == "") {
        inputScreen.value = null;
    } else if (inputScreen.value{
        inputScreen.value += '.';
    }
}

function reboot() {
    inputScreen.value = null;
    currentResult = defaultResult;
    calcScreen.innerHTML = currentResult;
    resultScreen.innerHTML = currentResult;
}

function createAndWriteLogOutput(operator, numberBeforeCalc, numberCalc) {
    calcDescription = `${numberBeforeCalc} ${operator} ${numberCalc}`;
    outputResultScreen(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = ((currentResult * 10) + (enteredNumber * 10)) / 10;
    createAndWriteLogOutput("+", initialNumber, enteredNumber);
    inputScreen.value = null;
}

function substract() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = ((currentResult * 10) - (enteredNumber * 10)) / 10;
    createAndWriteLogOutput("-", initialNumber, enteredNumber);
    inputScreen.value = null;
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = ((currentResult * 10) * (enteredNumber * 10)) / 100;
    createAndWriteLogOutput("*", initialNumber, enteredNumber);
    inputScreen.value = null;
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialNumber = currentResult;
    currentResult = (currentResult * 10) / (enteredNumber * 10);
    createAndWriteLogOutput("/", initialNumber, enteredNumber);
    inputScreen.value = null;
}

btnAdd.addEventListener("click", add);
btnDivide.addEventListener("click", divide);
btnMultiply.addEventListener("click", multiply);
btnSubstract.addEventListener("click", substract);
