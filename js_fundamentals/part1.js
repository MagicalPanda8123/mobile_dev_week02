console.log("PART 1");

// Mark and John BMI comparison
// Formula : BMI = mass / heigh^2 

// CHALLENGE 01 - STORE, CALCULATE AND COMPARE THE BMI OF MARK AND JOHN

// let markHeight = prompt("Enter Mark's height in meters: ");
// let markMass = prompt("Enter Mark's mass in kg: ");

// let johnHeight = prompt("Enter John's height in meters: ");
// let johnMass = prompt("Enter John's mass in kg: ");

let markHeight = 1.69;
let markMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;


// CHALLENGE 02 - LOG THE RESULT TO THE CONSOLE
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {    
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

// CHALLENG 03 - DOLPHINS AND KOALAS COMPETITION
// Compare the average score of the two teams to determine the winner.

let dolphinsScore = [96, 108, 89];
// let koalasScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

let dolphinsAverage = dolphinsScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / dolphinsScore.length;
let koalasAverage = koalasScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / koalasScore.length;

if (dolphinsAverage > koalasAverage) {
    if (dolphinsAverage >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAverage}`);
    } else {  
        console.log(`Dolphins has the higher score but doesn't meet the minimum score of 100`);
    }
} else if (koalasAverage > dolphinsAverage) {    
    if (koalasAverage >= 100) {
        console.log(`Koalas win with an average score of ${koalasAverage}`);
    } else {
        console.log(`Koalas has the higher score but doesn't meet the minimum score of 100`);
    }
} else {
    if (dolphinsAverage >= 100 && koalasAverage >= 100) {
        console.log(`It's a draw!`);
    } else {
        console.log(`Neither team met the minimum score of 100`);
    }
}

// CHALLENGE 04 - CALCULATE THE TIP AND TOTAL VALUE OF THE BILL

// let billValue = 275;
let billValue = 40;
// let billValue = 430;

let tipRate = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2;
let tip = billValue * tipRate;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);


