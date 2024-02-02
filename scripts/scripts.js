console.log("Welcome");

// Really wanted to make the calculator draggable
$( ".calculator-chassis" ).draggable();

calculatorDisplay = document.querySelector(".calculator-display");

const numberArray = [];
const operatorArray = [];

let numberButtons = document.querySelectorAll(".calculator-number");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        calculatorDisplay.textContent += numberButton.textContent;
    })
});

let clearButton = document.querySelector(".calculator-clear");
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = '';
    numberArray.length = 0;
    operatorArray.length = 0;
})

let operatorButtons = document.querySelectorAll(".calculator-operator");
operatorButtons.forEach(operatorButton => {

    operatorButton.addEventListener('click', () => {

        if (!(isNaN(parseInt(calculatorDisplay.textContent)))) {
            operatorArray.push(operatorButton.textContent);  
            numberArray.push(parseInt(calculatorDisplay.textContent));
            calculatorDisplay.textContent = '';
        }
        
    })

});

let equalButton = document.querySelector(".calculator-equal");
equalButton.addEventListener('click', () => {

    if (!(isNaN(parseInt(calculatorDisplay.textContent)))) {
        numberArray.push(parseInt(calculatorDisplay.textContent));
    }
    calculatorDisplay.textContent = '';
    calculatorDisplay.textContent = parseOperations(numberArray, operatorArray);
    numberArray.length = 0;
    operatorArray.length = 0;
})

function parseOperations(numbers, operators) {
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let secondNumber = numbers[i+1];
        result = operate(operator, result, secondNumber);
        console.log(secondNumber + ' ' + operator + ' ' + result);  
    }
    console.table(numbers);
    console.table(operators);
    console.log("FINAL " + ' ' + result);  
    return result;
}


function operate(operator, firstNumber, secondNumber) {
    if (operator == '+') {
        return calculatorAdd(firstNumber, secondNumber);
    }
    else if (operator == '-') {
        return calculatorSubtract(firstNumber, secondNumber);
    }
    else if (operator == '*') {
        return calculatorMultiply(firstNumber, secondNumber);
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

