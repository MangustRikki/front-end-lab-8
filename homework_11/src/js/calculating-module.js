export default (num1, num2, operationType) => {
    let output;
    switch (operationType) {
        case "+":
            output = num1 + num2;
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
    return output;
};