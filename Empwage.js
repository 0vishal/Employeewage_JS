const IS_PARTTIME=1;
const IS_FULLTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;
const MAX_NUMBER_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HRS=100;
var dWage=[];

function getempHrs(empcheck){
    switch(empcheck){
        case 1:
            return PARTTIME_HRS;
        case 2:
            return FULLTIME_HRS;
        default:
            return 0;
    }
}

function calculateWage(totalWorkinghrs){
    return totalWorkinghrs*WAGE_PER_HR;
}

let empWage=0;
function sum(dWage){
    return empWage+=dWage;
}

let dayCounter=0;
function dayCount(dWage){
    dayCounter++;
    return dayCounter +" = "+dWage;
}

function getFullTime(dWage){
    return dWage.includes("160");
}


function getPartTime(dWage){
    return dWage.includes("80");
}

let emphrs=0;
let totalWorkinghrs=0;
let totalworkingDays=0;

while(totalWorkinghrs<=TOTAL_WORKING_HRS && totalworkingDays<MAX_NUMBER_OF_WORKING_DAYS){
    totalworkingDays++;
    let empcheck=Math.floor((Math.random()*10)%3);
    emphrs=getempHrs(empcheck);
    totalWorkinghrs+=emphrs;
    dWage.push(calculateWage(emphrs));
}

dWage.forEach(sum);

let mapDayWithWage=dWage.map(dayCount);
console.log(mapDayWithWage);

console.log("Daily wage is: "+dWage);
console.log("Total Hours: "+totalWorkinghrs);
console.log("Total Working Days: "+totalworkingDays);
console.log("Daily Wage of a employee is: "+empWage);


let fulltimeWage=mapDayWithWage.filter(getFullTime);
console.log(" full time wage: ");
console.log(fulltimeWage);


console.log("full time wage: "+mapDayWithWage.find(getFullTime));


console.log("All Elements Full Time Wage "+fulltimeWage.every(getFullTime));


console.log("Part time wage: "+mapDayWithWage.some(getPartTime));



let count=0;
let totalHrs=Array.from(mapDayWithWage.values()).reduce(findTotal,0);
let totalSalary=dWage.filter(dWage => dWage>0).reduce(findTotal,0);
console.log("Emp Wage wit Arrow "+"Total hrs: "+totalHrs+"Total Salary: "+totalSalary);


let nonWorkingDays=[];
let partWorkingDays=[];
let fullWorkingDays=[];

empHrsArr.forEach((value,key,map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4)partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working Days are: "+fullWorkingDays);
console.log("Part working Days are: "+partWorkingDays);
console.log("Non working Days are: "+nonWorkingDays);