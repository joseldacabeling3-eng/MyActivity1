const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter temperature in Celsius: ", function(celsius) {
    let fahrenheit = (Number(celsius) * 9/5) + 32;

    console.log("Fahrenheit: " + fahrenheit + "°F");

    input.close();
});