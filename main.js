const consoleLog = document.querySelector('#error-btns > button:nth-child(1)');
consoleLog.onclick = () => console.log('console log');

const consoleError = document.querySelector('#error-btns > button:nth-child(2)');
consoleError.onclick = () => console.error('console error');

const consoleCount = document.querySelector('#error-btns > button:nth-child(3)');
consoleCount.onclick = () => console.count('console count');

const consoleWarn = document.querySelector('#error-btns > button:nth-child(4)');
consoleWarn.onclick = () => console.warn('console warn');

const consoleAssert = document.querySelector('#error-btns > button:nth-child(5)');
consoleAssert.onclick = () => console.assert(0 > 1, 'console assert');

const consoleClear = document.querySelector('#error-btns > button:nth-child(6)');
consoleClear.onclick = () => console.clear();

const consoleDir = document.querySelector('#error-btns > button:nth-child(7)');
consoleDir.onclick = () => console.dir(consoleDir);

const consoleDirXml = document.querySelector('#error-btns > button:nth-child(8)');
consoleDirXml.onclick = () => console.dirxml(consoleDirXml);

const consoleGroupStart = document.querySelector('#error-btns > button:nth-child(9)');
consoleGroupStart.onclick = () => {
    console.group('console group');
    console.info('this is a new group');
};

const consoleGroupEnd = document.querySelector('#error-btns > button:nth-child(10)');
consoleGroupEnd.onclick = () => console.groupEnd();

const consoleGroupTable = document.querySelector('#error-btns > button:nth-child(11)');
consoleGroupTable.onclick = () => console.table(['cse110', 'recipes', 'vanilla js']);

const startTimer = document.querySelector('#error-btns > button:nth-child(12)');
startTimer.onclick = () => console.time('timer');

const endTimer = document.querySelector('#error-btns > button:nth-child(13)');
endTimer.onclick = () => console.timeEnd('timer');


function deep() {
    deeper();
}

function deeper() {
    deepest();
}

function deepest() {
    console.log('at the deepest level');
}

const consoleTrace = document.querySelector('#error-btns > button:nth-child(14)');
consoleTrace.onclick = () => console.trace(deep);

const globalError = document.querySelector('#error-btns > button:nth-child(15)');
globalError.onclick = () => {
    throw new Error('global error');
};

let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    try {
        eval(`${firstNum} * 2`);
    }
    catch(e) {
        throw new Error('first number is invalid');
    }
    finally {
        console.log('finally clause');
    }

    try {
        eval(`${secondNum} * 2`);
    }
    catch(e) {
        throw new InvalidInputError('second number is invalid');
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

class InvalidInputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidInputError';
    }
}
