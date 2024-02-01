console.log("Welcome");

// Really wanted to make the calculator draggable
$( ".calculator-chassis" ).draggable();

let userFirstNumber = 0;
let userOperator = "+";
let userSecondNumber = 0;

function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        calculatorAdd(firstNumber, secondNumber);
    }
    else if (operator == '-') {
        calculatorSubtract(firstNumber, secondNumber);
    }
    else if (operator == '*') {
        calculatorSubtract(firstNumber, secondNumber);
    }
    else {
        calculatorDivide(firstNumber,secondNumber);
    }
}


function calculatorAdd(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function calculatorSubtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function calculatorMultiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function calculatorDivide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

