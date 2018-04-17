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

let numberInput = new NumberInput("10");

const addRequiredValidation = (instance) => {
    if(instance.value){
        console.log("Correct!!!");
    } else {
        console.log("Something gone wrong!");
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
};

const addNumberValidation = (instance) => {

    if(typeof instance.value === "number"){
        console.log("Congratulation, it`s number");
    } else {
        console.log("Validation failed, it`s not a number");
    }
}


console.log(numberInput.valid); 
numberInput.setValue("1");
console.log(numberInput.valid); 
numberInput.setValue(1);
console.log(numberInput.valid); 
numberInput.setValue(88888888888888888888);
console.log(numberInput.valid);





