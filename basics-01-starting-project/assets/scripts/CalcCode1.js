//calculator 
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWiteOutput(
    operator,
    resultBeforeCalc,
    calculationNumber) {
    const calcDescription = `${resultBeforeCalc}
     ${operator} 
     ${calculationNumber}`;

    outputResult(currentResult,
        calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        numberInput: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    // console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    if (
        calculationType !== 'Add' &&
        calculationType !== 'Subtract' &&
        calculationType !== 'Multiply' &&
        calculationType !== 'Divide'
        /*!enteredNumber - js treats 0 as false,
        so if zero is entered in the calculator,
        nothing would happen with this code snippet.
        this is known as 'falsy' */
    ) {
        return;
    }

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'Add') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'Subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'Multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'Divide') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWiteOutput(mathOperator,
        initialResult,
        enteredNumber);

    writeToLog(calculationType,
        initialResult,
        enteredNumber,
        currentResult);
}

function add() {
    calculateResult('Add');
}

function subtract() {
    calculateResult('Subtract')
}

function multiply() {
    calculateResult('Multiply')
}

function divide() {
    calculateResult('Divide')
} //code length has now been reduced dramatically

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);