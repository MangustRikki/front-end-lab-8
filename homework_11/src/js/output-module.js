import createCalc from './interface-module';
import calcOperation from './calculating-module';
import "../styles/styles.css";

createCalc();

const operationButtons = document.querySelectorAll('operationButton'),
    result = document.querySelector('result'),
    numOne = document.querySelector('numOne'),
    numTwo = document.querySelector('numTwo');
    console.log(operationButtons);

    for( let i of operationButtons) {
        i.addEventListener('click', (e) => {
            console.log(e.target.textContent);
           result.value = calcOperation(numOne, numTwo, e.target.textContent);
        })
    }
