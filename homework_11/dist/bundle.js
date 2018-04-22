/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculating_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_styles_css__);




Object(__WEBPACK_IMPORTED_MODULE_0__interface_module__["a" /* default */])();

const operationButtons = document.querySelectorAll('.operationButton'),
      result = document.querySelector('.result'),
      numOne = document.querySelector('.numOne'),
      numTwo = document.querySelector('.numTwo');

for (let i of operationButtons) {
    i.addEventListener('click', e => {
        result.value = Object(__WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */])(numOne.value, numTwo.value, e.target.textContent);
    });
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


let operationType = ['+', '-', '*', '/'];
const body = document.querySelector('body'),
      calcWrap = creatWithClass('div', 'calcWrap'),
      inputNumOne = creatWithClass('input', 'numOne'),
      inputNumTwo = creatWithClass('input', 'numTwo'),
      OperationButtonSet = creatWithClass('div', 'operationButtonSet'),
      outputResalt = creatWithClass('input', 'result');

/* harmony default export */ __webpack_exports__["a"] = (() => {
    operationType.forEach(elem => {
        let button = creatWithClass('button', 'operationButton');
        button.innerHTML = elem;
        OperationButtonSet.appendChild(button);
    });
    calcWrap.append(inputNumOne, inputNumTwo, OperationButtonSet, outputResalt);
    body.appendChild(calcWrap);
});

function creatWithClass(elem, className) {
    let output = document.createElement(elem);
    output.classList.add(className);
    return output;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((num1, num2, operationType) => {
    let output;
    switch (operationType) {
        case "+":
            output = +num1 + +num2;
            break;
        case "-":
            output = num1 - num2;
            break;
        case "*":
            output = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                output = "Error. Division by zero is imposible";
            } else {
                output = num1 / num2;
            };
            break;
    }
    console.log(num1);
    return output;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);