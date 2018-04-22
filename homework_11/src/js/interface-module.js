'use strict';
let operationType = ['+', '-', '*', '/'];
const body = document.querySelector('body'),
    calcWrap = creatWithClass('div', 'calcWrap'),
    inputNumOne = creatWithClass('input', 'numOne'),
    inputNumTwo = creatWithClass('input', 'numTwo'),
    OperationButtonSet = creatWithClass('div', 'operationButtonSet'),
    outputResalt = creatWithClass('input', 'result');


export default () => {
    operationType.forEach(elem => {
        let button = document.createElement('button');
        button.innerHTML = elem;
        OperationButtonSet.appendChild(button);
    });
    calcWrap.append(inputNumOne, inputNumTwo, OperationButtonSet, outputResalt);
    body.appendChild(calcWrap);
}

function creatWithClass(elem, className) {
    let output = document.createElement(elem);
    output.classList.add(className);
    return output;
}