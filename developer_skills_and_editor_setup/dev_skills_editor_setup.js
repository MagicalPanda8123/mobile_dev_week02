// CHALLENGE 01 - FORECASTED TEMPERATURES PRINTER
console.log("CHALLENGE 01 - FORECASTED TEMPERATURES PRINTER");

//let temperatures = [17, 21, 23];
let temperatures = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = '';
    arr.forEach((temp, index) => {
        str += `... ${temp}°C in ${index + 1} days`;
    });
    console.log(str);
}

printForecast(temperatures);