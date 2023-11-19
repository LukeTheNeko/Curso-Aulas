let display = document.getElementById('display');
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    display.value += number;
}

function setOperator(operator) {
    currentOperator = operator;
    firstOperand = display.value;
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
}

function calculate() {
    secondOperand = display.value;
    let result = '';
    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    display.value = result;
}
