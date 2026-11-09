const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter first number: ", function(num1) {
    input.question("Enter second number: ", function(num2) {
        let sum = Number(num1) + Number(num2);

        console.log("Total: " + sum);
        input.close();
    });
});