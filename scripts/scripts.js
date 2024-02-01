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

    calculatorDisplay.textContent = '';
    calculatorDisplay.textContent = parseOperations(numberArray, operatorArray);

})

// both arguments are arrays
function parseOperations(numbers, operators) {
    // returns nothing if the operation is invalid EDGE CASES CHECK LATER
    // Isolate two number values 
    // Isolate a single operator
    // Do a operation with the three
    // Use the result for the first number values to the next operation if there is one more possible operation
    // returns the result
}


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

