export default (num1, num2, operationType) => {
    let output;
    if (!isNumeric(num1) || !isNumeric(num2)) {
        output = "U type not numbers!";
    } else {
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
                if (+num2 === 0) {
                    output = "Error. Division by zero";
                } else {
                    output = num1 / num2;
                };
                break;
        }
    }
    return output;
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }