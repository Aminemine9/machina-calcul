let result = 0;
let currentOperator = '';

function handleNumber(number) {
    document.getElementById('result').value += number;
}

function handleOperator(operator) {
    if (result === 0) {
        result = parseFloat(document.getElementById('result').value);
    } else {
        calculateResult();
    }
    currentOperator = operator;
    document.getElementById('result').value = '';
}

function calculateResult() {
    const currentValue = parseFloat(document.getElementById('result').value);
    let calculatedResult;

    switch (currentOperator) {
        case '+':
            calculatedResult = result + currentValue;
            break;
        case '-':
            calculatedResult = result - currentValue;
            break;
        case '*':
            calculatedResult = result * currentValue;
            break;
        case '/':
            calculatedResult = result / currentValue;
            break;
    }

    result = calculatedResult;
    document.getElementById('result').value = calculatedResult;
}

function clearResult() {
    result = 0;
    currentOperator = '';
    document.getElementById('result').value = '';
}
