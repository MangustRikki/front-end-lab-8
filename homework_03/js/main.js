function Company(name, owner, maxCount) {
    this.name = name;
    this.owner = owner;
    this.maxCount = maxCount;
    this._listEmployees = [];

    this.findLowestSalary = function() {
        let hasLowestSalary = this._listEmployees.reduce((prev, cur) => cur.salary < prev.salary ? cur : prev);
        return this._listEmployees.indexOf(hasLowestSalary);
    };

    this.addNewEmployee = function(employee) {
        if (!(employee instanceof Employee)) {
            console.log('Please try to add Employee instance');
        } else if (this._listEmployees.length < this.maxCount) {
            this._listEmployees.push(employee);
        } else {
            this._listEmployees.splice(this.findLowestSalary(), 1, employee);
        }
    };

    this.removeEmployee = function(id) {
        if (id <= this.maxCount && id > 0) {
            this._listEmployees.splice(id, 1);
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

    // this.getFormattedListOfEmployees = function() {
    //     let showListEmployees = "";
    //     for (let i in this._listEmployees) {
    //         showListEmployees += `${name} -  works in ${companyName} ${timeInCompany} seconds \n`;
    //     }
    //     return showListEmployees;
    // };
}

function Employee(name, primarySkill, age, salary) {
    this.name = name;
    this.primarySkill = primarySkill;
    this.age = age;
    this.salary = salary;
    this.getSalary = function() {
        return this.salary;
    };
    this.setSalary = function(newSalary) {
        this.salary = newSalary;
    };
}

let epam = new Company('epam', 'usa', 3);

epam._listEmployees = [
    { name: 'Anton', age: 23, salary: 200 },
    { name: 'Anton1', age: 90, salary: 300 },
    { name: 'Anton3', age: 23, salary: 900 }
];

// console.log(epam.());