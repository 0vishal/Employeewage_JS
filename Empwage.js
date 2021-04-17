const IS_PART_TIME = 1;
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4;
const FUL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;

empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FUL_TIME_HOURS;
        break;
    default:
        empHrs = 0;

}

let empwage = empHrs * WAGE_PER_HOUR
console.log("Emp Wage " + empwage);