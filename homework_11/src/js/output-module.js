import createCalc from './interface-module';
import calcOperation from './calculating-module';
import "../styles/styles.css";

createCalc();

const operationButtons = document.querySelectorAll('.operationButton'),
    result = document.querySelector('.result'),
    numOne = document.querySelector('.numOne'),
    numTwo = document.querySelector('.numTwo');

    for( let i of operationButtons) {
        i.addEventListener('click', (e) => {
           result.value = calcOperation(numOne.value, numTwo.value, e.target.textContent);
        })
    }
