class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

const addRequiredValidation = (instance) => {
    if(instance.value){
        console.log("Correct!!!");
        return true;
    } else {
        console.log("Something gone wrong!");
        return false;
    }
};

const addMaxLengthValidation  = (instance, maxLength) => {
    let lenthValidation = false;
    
    if(typeof instance.value === "number") {
        lenthValidation = instance.value >= maxLength ? false : true; 
    } else {
        lenthValidation = instance.value.toString().length >= maxLength ? false : true; 
    }

    if(lenthValidation){
        console.log("Value is in correct lenth range");
    } else {
        console.log("Not passed lenth validation");
    }

    return lenthValidation;
};

const addNumberValidation = (instance) => {

    if(typeof instance.value === "number"){
        console.log("Congratulation, it`s number");
        return true;
    } else {
        console.log("Validation failed, it`s not a number");
        return false;
    }
}

const demonstration = (instance, maxLength = 10) => {
    let requireValidtion = addRequiredValidation(instance);
    let lenthValidation = addMaxLengthValidation(instance, length);
    let numberalidation = addNumberValidation(instance);

    if(requireValidtion && lenthValidation && numberalidation){
        instance.valid = true;
    } else {
        instance.valid = false;
    }
};

let numberInput = new NumberInput("");


demonstration(numberInput);
console.log(numberInput.valid); 

numberInput.setValue("8");
demonstration(numberInput);
console.log(numberInput.valid); 

numberInput.setValue(8);
demonstration(numberInput);
console.log(numberInput.valid);

numberInput.setValue(88888888888888888888888888);
demonstration(numberInput);
console.log(numberInput.valid);