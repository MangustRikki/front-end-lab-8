function Company(name, owner, maxCount) {
    this.name = name;
    this.owner = owner;
    this.maxCount = maxCount;
    let _listEmployees = [],
        companyCreateDate = new Date(),
        _logs = `${this.name} company was created in ${companyCreateDate}\n`;


    this.findLowestSalary = function() {
        let hasLowestSalary = _listEmployees.reduce((prev, cur) => cur.salary < prev.salary ? cur : prev);
        return _listEmployees.indexOf(hasLowestSalary);
    };

    this.addNewEmployee = function(employee) {
        if (!(employee instanceof Employee)) {
            console.log('Please try to add Employee instance');
        } else {
            if (_listEmployees.length < this.maxCount) {
                _listEmployees.push(employee);
            } else {
                _listEmployees.splice(this.findLowestSalary(), 1, employee);
            }
            employee._startWorking = new Date();
            _logs += `${employee.name} start working for ${this.name} in ${employee._startWorking}\n`;
        }
    };

    this.removeEmployee = function(id) {
        if (id <= this.maxCount && id > 0) {
            let firedEmployee = _listEmployees.splice(id, 1);
            firedEmployee._endWorking = new Date();
            firedEmployee._workingTime += (firedEmployee._endWorking + firedEmployee._startWorking);
            firedEmployee._startWorking = null;
            _logs += `${firedEmployee.name} end working for ${this.name} in ${employee._endWorking}\n`;
        } else {
            console.log("There is no such employee");
        }
    };

    this.getAvarageSalary = function() {
        let allSalary = this._listEmployees.reduce(((cur, next) => cur + next.salary), 0);
        return (allSalary / this._listEmployees.length).toFixed(2);
    };

    this.getAvarageAge = function() {
        let allAge = this._listEmployees.reduce(((cur, next) => cur + next.age), 0);
        return (allAge / this._listEmployees.length).toFixed(0);
    };

    this.getEmployees = function() {
        return _listEmployees;
    };

    this.getFormattedListOfEmployees = function() {
        let now = new Date();
        let showListEmployees = "";
        for (let key of _listEmployees) {
            showListEmployees += `${key.name} -  works in ${this.name}  ${now - key._startWorking} seconds \n`;
        }
        return showListEmployees;
    };

    this.getHistory = function() {
        console.log(_logs);
    }
}

function Employee(employee) {
    this.name = employee.name;
    this.primarySkill = employee.primarySkill;
    this.age = employee.age;
    this.salary = employee.salary;
    let _startWorking,
        _endWorking,
        _workingTime;

    this.getSalary = function() {
        return this.salary;
    };

    this.setSalary = function(newSalary) {
        if (newSalary > this.salary) {
            this.salary = newSalary;
        }
    };

    this.getWorkTimeInSeconds = function() {
        let now = new Date();
        return _workingTime + (now - _startWorking);
    };


}

let epam = new Company('epam', 'usa', 3);

let artem = new Employee({ name: "Artem", age: 15, salary: 1000, primarySkill: "UX" });
let vova = new Employee({ name: "Vova", age: 16, salary: 2000, primarySkill: "BE" });
let vasyl = new Employee({ name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE" });
let ivan = new Employee({ name: "Ivan", age: 35, salary: 5000, primarySkill: "FE" });
let orest = new Employee({ name: "Orest", age: 29, salary: 300, primarySkill: "AT" });
let anton = new Employee({ name: "Anton", age: 19, salary: 500, primarySkill: "Manager" });

epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getFormattedListOfEmployees());

console.log(orest.getWorkTimeInSeconds());