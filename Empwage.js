class EmployeePayroll {
    id;
    salary;
    gender;
    startdate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startdate = params[4];
    }

    get name() { return this._name; }
    set name(name) {
        let regexname = RegExp('[A-Z]{1}[a-z]{3,}');
        if (regexname.test(name)) {
            this._name = name;
        }
        else {
            throw "Wrong Name";
        }
    }

    toString() {
        return "id=" + this.id + ", name= " + this.name + ", salary= " + this.salary + " , gender= " + this.gender +
            " , startdate= " + this.startdate;
    }
}

let employeePayroll = new EmployeePayroll(1, "shari", 10000);
console.log(employeePayroll.toString());
try {
    employeePayroll.name = "Vishal";
    console.log(employeePayroll.toString());
} catch (e) {
    console.error(e);
}

let newemployeePayroll = new EmployeePayroll(2, "Karesha", 78000, "F", new Date("09-10-2020"));
console.log(newemployeePayroll.toString());