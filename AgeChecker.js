const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter your age: ", function(age) {
    if (Number(age) >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

    input.close();
});