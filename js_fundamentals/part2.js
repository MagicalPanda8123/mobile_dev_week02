console.log("PART 2");

// CHALLENGE 01 - DOLPHINS AND KOALAS
console.log("CHALLENGE 01 - DOLPHINS AND KOALAS");
// let dolphinsScore = [44, 23, 71];
// let koalasScore = [65, 54, 49];

let dolphinsScore = [85, 54, 41];
let koalasScore = [23, 34, 27];

const calcAverage = (scores) => {
    return scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / scores.length;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins`);
    }
}

checkWinner(calcAverage(dolphinsScore), calcAverage(koalasScore));

// CHALLENGE 02 - CALCULATE TIP
console.log("");
console.log("CHALLENGE 02 - CALCULATE TIP");
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

let bills = [125, 555, 44];

let totals = bills.map((bill) => bill + calcTip(bill));

totals.forEach((total, index) => {
    console.log(`The bill was ${bills[index]}, the tip was ${calcTip(bills[index])}, and the total value ${total}`);
});

// CHALLENGE 03 - OBJECTS
console.log("");
console.log("CHALLENGE 03 - OBJECTS");
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}

// CHALLENGE 04 
console.log("");
console.log("CHALLENGE 04 - TIPS 2");

let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let totals2 = [];

bills2.forEach((bill) => {
    let tip = calcTip(bill);
    tips2.push(tip);
    totals2.push(bill + tip);
});

for (let i = 0; i < bills2.length; i++) {
    console.log(`${i+1}/ The bill: ${bills2[i]}, the tip: ${tips2[i]}, the total: ${totals2[i]}`);
}