// Need to deal with results with > 9 digits, for CSS purposes 

// Really wanted to make the calculator draggable
$( ".calculator-chassis" ).draggable();

let calculatorDisplay = document.querySelector(".calculator-display");

let currentNumber = '';
let currentResult = 0;
let currentOperator = null;

let numberButtons = document.querySelectorAll(".calculator-number");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        // As a noob idk why the length starts at 22 but this works for now
        if (calculatorDisplay.textContent.length == 22 || calculatorDisplay.textContent.length <= 9 ) {
            currentNumber += numberButton.textContent;
            calculatorDisplay.textContent = currentNumber;            
        }

    })
});

let clearButton = document.querySelector(".calculator-clear");
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = '';
    currentNumber = '';
    currentOperator = null;
})

let backspaceButton = document.querySelector(".calculator-backspace");
backspaceButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    calculatorDisplay.textContent = currentNumber;
});


let operatorButtons = document.querySelectorAll(".calculator-operator");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        if (currentNumber !== '') {
            if (currentOperator !== null) {
                dotButton.disabled = false;
                let operationResult = operate(currentOperator, parseFloat(currentResult), parseFloat(currentNumber));
                currentResult = typeof operationResult === "number" ? operationResult.toFixed(2) : operationResult;
                calculatorDisplay.textContent = currentResult;
                currentResult = currentResult.toString(); 
            } else {
                dotButton.disabled = false;
                currentResult = parseFloat(currentNumber);
            }
            currentOperator = operatorButton.textContent;
            currentNumber = '';
        }
    })
});


let dotButton = document.querySelector(".calculator-dot");
dotButton.addEventListener('click', () => {
    if (calculatorDisplay.textContent !== '') {
        currentNumber += '.';
        dotButton.disabled = true;
    }
});


// Doing 3 + 3 + 3.3 then pressing '='  results in 6.003.3 

let equalButton = document.querySelector(".calculator-equal");
equalButton.addEventListener('click', () => {
    if (currentNumber !== '' && currentOperator !== null) {
        dotButton.disabled = false;
        let operationResult = operate(currentOperator, currentResult, parseFloat(currentNumber));
        currentResult = typeof operationResult === "number" ? operationResult.toFixed(2) : operationResult;
        calculatorDisplay.textContent = currentResult;
        currentOperator = null;
        currentNumber = '';
    }
});

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
    if (secondNumber <= 0 || firstNumber <= 0) {
        // idk how to write snarky comments so i think this is good enough
        return "why? :-(";
    }
    return firstNumber / secondNumber;
}
