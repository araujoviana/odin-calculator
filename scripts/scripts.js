console.log("Welcome");

// Really wanted to make the calculator draggable
$( ".calculator-chassis" ).draggable();

calculatorDisplay = document.querySelector(".calculator-display");

let userFirstNumber = 0;
let userOperator = "+";
let userSecondNumber = 0;
let insertingSecondNumber = false;

let numberButtons = document.querySelectorAll(".calculator-number");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        calculatorDisplay.textContent += numberButton.textContent;
    })
});

let operatorButtons = document.querySelectorAll(".calculator-operator");
operatorButtons.forEach(operatorButton => {

    operatorButton.addEventListener('click', () => {

        userOperator = operatorButton.textContent;
        userFirstNumber = parseInt(calculatorDisplay.textContent);
        calculatorDisplay.textContent = '';
        insertingSecondNumber = true;

    })

});

let equalButton = document.querySelector(".calculator-equal");
equalButton.addEventListener('click', () => {

    userSecondNumber = parseInt(calculatorDisplay.textContent);
    calculatorDisplay.textContent = '';
    calculatorDisplay.textContent = operate(userOperator, userFirstNumber, userSecondNumber);

})




function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return calculatorAdd(firstNumber, secondNumber);
    }
    else if (operator == '-') {
        return calculatorSubtract(firstNumber, secondNumber);
    }
    else if (operator == '*') {
        return calculatorSubtract(firstNumber, secondNumber);
    }
    else {
        return calculatorDivide(firstNumber,secondNumber);
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

