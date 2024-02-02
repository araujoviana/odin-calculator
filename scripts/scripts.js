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

    if (!(isNaN(parseInt(calculatorDisplay.textContent)))) {
        numberArray.push(parseInt(calculatorDisplay.textContent));
    }
    calculatorDisplay.textContent = '';
    calculatorDisplay.textContent = parseOperations(numberArray, operatorArray);

})

function parseOperations(numbers, operators) {
    // returns nothing if the operation is invalid EDGE CASES CHECK LATER
    let result = 0;
    for (let i = 0; i <= numbers.length-1; i++) {
        let firstNumber = parseInt(numbers[i]);
        let secondNumber = parseInt(numbers[i+1]);
        let operator = operators[i];

        if (secondNumber !== undefined && operator !== undefined) {
            let operationResult = operate(operator, firstNumber, secondNumber);
            if (typeof operationResult == "number") {
                result += operationResult;
            }
        }
        
        console.log(firstNumber + ' ' + secondNumber + ' ' + operator + ' ' + result);
    }
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

